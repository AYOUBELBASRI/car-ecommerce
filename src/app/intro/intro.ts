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

        // Ensure video starts from beginning and is muted
        el.currentTime = 0;
        el.muted = true;
        el.volume = 0;

        const playPromise = el.play();
        if (playPromise) {
            playPromise.catch(() => {
                // Autoplay might be blocked by browser; video will still be muted
            });
        }
    }

    onEnded(): void {
        this.router.navigate(['/home']);
    }
}
