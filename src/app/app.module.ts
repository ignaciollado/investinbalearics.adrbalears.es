import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader  } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { I18nModule } from './i18n/i18n.module';

import { NewsListComponent } from './news/news-list/news-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AgendaDetailComponent } from './agenda/agenda-detail/agenda-detail.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { SimpleTextViewerComponent } from './simple-text-viewer/simple-text-viewer.component';
import { SimpleTextViewerDetailHomeComponent } from './simple-text-viewer-detail-home/simple-text-viewer-detail-home.component';
import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail/simple-text-viewer-detail.component';
import { WellFormattedLinkPipe } from './Pipes/well-formatted-link.pipe';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SearchTheWebComponent } from './searchTheWeb/search-the-web/search-the-web.component';
import { ShowLegalInfoComponent } from './show-legal-info/show-legal-info.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { SectorsAndIndustriesComponent } from './sectors-and-industries/sectors-and-industries.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhyInvestComponent } from './why-invest/why-invest.component';
import { InvestmentEcosystemComponent } from './investment-ecosystem/investment-ecosystem.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TheTalentComponent } from './the-talent/the-talent.component';
import { ClustersComponent } from './clusters/clusters.component';
import { SectorsAndIndustriesDetailComponent } from './sectors-and-industries-detail/sectors-and-industries-detail.component';
import { ReplaceStringHtmlPipe } from './Pipes/replace-string.pipe';
import { GrantsAndSubsidiesComponent } from './grants-and-subsidies/grants-and-subsidies.component';

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
    SimpleTextViewerDetailHomeComponent,
    SimpleTextViewerDetailComponent,
    WellFormattedLinkPipe,
    NotFoundComponent,
    InternalServerComponent,
    ContactFormComponent,
    SearchTheWebComponent,
    NewsListComponent,
    NewsDetailComponent,
    AgendaDetailComponent,
    AgendaListComponent,
    ShowLegalInfoComponent,
    ContactContainerComponent,
    SectorsAndIndustriesComponent,
    WhoWeAreComponent,
    WhyInvestComponent,
    InvestmentEcosystemComponent,
    OurServicesComponent,
    TheTalentComponent,
    ClustersComponent,
    SectorsAndIndustriesDetailComponent,
    ReplaceStringHtmlPipe,
    GrantsAndSubsidiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    I18nModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
