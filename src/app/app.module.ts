import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleTextViewerComponent } from './simple-text-viewer/simple-text-viewer.component';
import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail/simple-text-viewer-detail.component';
import { WellFormattedLinkPipe } from './Pipes/well-formatted-link.pipe';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SearchTheWebComponent } from './searchTheWeb/search-the-web/search-the-web.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SimpleTextViewerComponent,
    SimpleTextViewerDetailComponent,
    WellFormattedLinkPipe,
    NotFoundComponent,
    InternalServerComponent,
    ContactFormComponent,
    SearchTheWebComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
