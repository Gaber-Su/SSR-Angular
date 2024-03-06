import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { ClientHydrationService } from './app/services/clientHydration.service';




// import { ApplicationConfig } from "@angular/core";
// import { provideRouter } from "@angular/router"
// import { provideClientHydration } from "@angular/platform-browser";
// import { routes } from './app/app-routing.module';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes), provideClientHydration()]
// }

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .then((moduleRef) => {
//     const clientHydrationService = moduleRef.injector.get(ClientHydrationService);
//     clientHydrationService.hydrate();
//   })
//   .catch((err) => console.error(err));