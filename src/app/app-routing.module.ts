import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail/simple-text-viewer-detail.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AgendaDetailComponent } from './agenda/agenda-detail/agenda-detail.component';
import { ShowLegalInfoComponent } from './show-legal-info/show-legal-info.component';
import { ContactContainerComponent } from './contact-container/contact-container.component';
import { SectorsAndIndustriesComponent } from './sectors-and-industries/sectors-and-industries.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { WhyInvestComponent } from './why-invest/why-invest.component';
import { InvestmentEcosystemComponent } from './investment-ecosystem/investment-ecosystem.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TheTalentComponent } from './the-talent/the-talent.component';


const routes: Routes = [

  { path: 'quienes-somos/:id', component: WhoWeAreComponent },
  { path: 'qui-som/:id', component: WhoWeAreComponent },
  { path: 'who-we-are/:id', component: WhoWeAreComponent },

  { path: 'por-que-invertir-en-baleares/:id', component: WhyInvestComponent },
  { path: 'per-que-invertir-a-balears/:id', component: WhyInvestComponent },
  { path: 'why-invest-in-balears/:id', component: WhyInvestComponent },

  { path: 'ecosistema-inversor/:id', component: InvestmentEcosystemComponent },
  { path: 'ecosistema-inversor-cat/:id', component: InvestmentEcosystemComponent },
  { path: 'investment-ecosystem/:id', component: InvestmentEcosystemComponent },

  { path: 'servicios-al-inversor-y-al-emprendedor/:id', component: OurServicesComponent },
  { path: 'serveis-a-linversor-i-a-lemprenedor/:id', component: OurServicesComponent },
  { path: 'investor-and-entrepreneur-services/:id', component: OurServicesComponent },

  { path: 'sectores-e-industrias/:id', component: SectorsAndIndustriesComponent },
  { path: 'sectors-i-industries/:id', component: SectorsAndIndustriesComponent },
  { path: 'sectors-and-industries/:id', component: SectorsAndIndustriesComponent },

  { path: 'talento/:id', component: TheTalentComponent },
  { path: 'talent/:id', component: TheTalentComponent },
  { path: 'talent-eng/:id', component: TheTalentComponent },

  { path: 'invest-in-balearics-detail/:id', component: SimpleTextViewerDetailComponent },

  { path: 'news-list/:newsToDisplay', component: NewsListComponent },
  { path: 'news-list-all/:newsToDisplay', component: NewsListComponent },
  { path: 'news-detail/:slug/:id', component: NewsDetailComponent},

  { path: 'agenda-list/:eventsTodisplay', component: AgendaListComponent},
  { path: 'agenda-detail/:id', component: AgendaDetailComponent},

  { path: 'accesibilidad/:id', component: ShowLegalInfoComponent },
  { path: 'aviso-legal/:id', component: ShowLegalInfoComponent },
  { path: 'contacta', component: SimpleTextViewerDetailComponent},
  { path: 'politica-de-cookies/:id', component: ShowLegalInfoComponent},
  { path: 'politica-de-privacidad/:id', component: ShowLegalInfoComponent},
  { path: 'feder-detail/:id', component: SimpleTextViewerDetailComponent },
  { path: 'contact-invest-in-balearics', component: ContactContainerComponent },

  { path: '404', component: NotFoundComponent },
  { path: '500', component: InternalServerComponent },
  { path: '*', component: BodyComponent },
  { path: '', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }