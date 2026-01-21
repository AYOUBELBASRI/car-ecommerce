import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IntroGateService } from './intro-gate.service';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.html',
    styleUrl: './intro.css',
})
export class Intro implements AfterViewInit {
    @ViewChild('videoEl') private videoEl?: ElementRef<HTMLVideoElement>;
    private readonly platformId = inject(PLATFORM_ID);
    private readonly returnUrl: string;

    constructor(
        private router: Router,
        route: ActivatedRoute,
        private introGate: IntroGateService
    ) {
        this.returnUrl = route.snapshot.queryParamMap.get('returnUrl') ?? '/home';
    }

    ngAfterViewInit(): void {
        if (!isPlatformBrowser(this.platformId)) return;

        const el = this.videoEl?.nativeElement;
        if (!el) return;
        if (typeof el.play !== 'function') return;

        el.muted = true;

        const playPromise = el.play();
        if (playPromise) {
            playPromise.catch(() => {
                // Autoplay with sound can be blocked; user can click video to start.
            });
        }

        const tryUnmute = () => {
            el.muted = false;
            el.volume = 1;
        };

        el.addEventListener(
            'playing',
            () => {
                setTimeout(tryUnmute, 200);
            },
            { once: true }
        );

        const enableSound = () => {
            el.muted = false;
            el.volume = 1;

            const p = el.play();
            if (p) {
                p.catch(() => {
                    // Ignore.
                });
            }
        };

        window.addEventListener('pointerdown', enableSound, { once: true });
        window.addEventListener('keydown', enableSound, { once: true });
    }

    onEnded(): void {
        this.introGate.markPlayed();
        this.router.navigateByUrl(this.returnUrl);
    }
}
