import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';
const bootstrap = () => bootstrapApplication(AppComponent,{
  providers: [
    provideClientHydration(), provideRouter(routes), provideHttpClient(withFetch())
  ]
});
export default bootstrap;
