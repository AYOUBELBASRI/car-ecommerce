import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { IntroGateService } from './intro-gate.service';

export const introRefreshGuard: CanActivateFn = (_route, state) => {
    const gate = inject(IntroGateService);
    const router = inject(Router);

    if (gate.hasPlayed()) {
        return true;
    }

    return router.createUrlTree(['/intro'], {
        queryParams: { returnUrl: state.url }
    });
};
