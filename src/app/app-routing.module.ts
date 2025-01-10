import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail/simple-text-viewer-detail.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewsListComponent } from './news/news-list/news-list.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { NewsDetailComponent } from './news/news-detail/news-detail.component';
import { AgendaDetailComponent } from './agenda/agenda-detail/agenda-detail.component';
import { ShowLegalInfoComponent } from './show-legal-info/show-legal-info.component';


const routes: Routes = [


  { path: 'por-que-invertir-en-baleares/:id', component: SimpleTextViewerDetailComponent },
  { path: 'per-que-invertir-a-balears/:id', component: SimpleTextViewerDetailComponent },
  { path: 'why-invest-in-balears/:id', component: SimpleTextViewerDetailComponent },

  { path: 'ecosistema-inversor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'ecosistema-inversor-cat/:id', component: SimpleTextViewerDetailComponent },
  { path: 'investment-ecosystem/:id', component: SimpleTextViewerDetailComponent },

  { path: 'servicios-al-inversor-y-al-emprendedor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'serveis-a-linversor-i-a-lemprenedor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'investor-and-entrepreneur-services/:id', component: SimpleTextViewerDetailComponent },

  { path: 'sectores-e-industrias/:id', component: SimpleTextViewerDetailComponent },
  { path: 'sectors-i-industries/:id', component: SimpleTextViewerDetailComponent },
  { path: 'sectors-and-industries/:id', component: SimpleTextViewerDetailComponent },

  { path: 'talento/:id', component: SimpleTextViewerDetailComponent },
  { path: 'talent/:id', component: SimpleTextViewerDetailComponent },
  { path: 'talent-eng/:id', component: SimpleTextViewerDetailComponent },

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
  { path: 'contact-invest-in-balearics', component: ContactFormComponent },

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
