import { Component, Inject, Optional, PLATFORM_ID } from '@angular/core';
import {
  bootstrapApplication,
  provideClientHydration,
} from '@angular/platform-browser';
import { ClientHydrationService } from './services/clientHydration.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ssr-angular16';
  platformId!: Object
  constructor(private clientHydrationService: ClientHydrationService, @Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId
    this.setUser()
  }


  setUser() {
    // is platformBrowser ===> check for things that reder on browser not server that server dont support localStorage and document and there is thng in dom
    // if (isPlatformBrowser(this.platformId) && 1) {
    //   localStorage.setItem('user', '12345')
    // }
  }

  // ngOnInit(): void {
  //   // Other initialization logic
  //   this.clientHydrationService.hydrate();
  // }



}
