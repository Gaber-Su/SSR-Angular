// delayed-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of, timer } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DelayedResolver implements Resolve<Observable<boolean>> {
    resolve(): Observable<boolean> {
        // Simulate a delay of 3 seconds using RxJS timer and delay operators
        return timer(3000).pipe(
            map(() => true)
        )

        // 3000 milliseconds = 3 seconds
    }
}
