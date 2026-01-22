import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.html',
    styleUrl: './intro.css',
})
export class Intro implements AfterViewInit {
    @ViewChild('videoEl') private videoEl?: ElementRef<HTMLVideoElement>;
    private readonly platformId = inject(PLATFORM_ID);

    constructor(private router: Router) { }

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
        this.router.navigate(['/home']);
    }
}
