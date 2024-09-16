import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';

import { SimpleTextViewerDetailComponent } from './simple-text-viewer-detail/simple-text-viewer.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [

  { path: 'baleares-una-apuesta-ganadora/:id', component: SimpleTextViewerDetailComponent },
  { path: 'balears-una-aposta-guanyadora/:id', component: SimpleTextViewerDetailComponent },
  { path: 'ecosistema-inversor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'servicios-inversor-emprendedor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'serveis-inversor-emprenedor/:id', component: SimpleTextViewerDetailComponent },
  { path: 'sectores-e-industrias/:id', component: SimpleTextViewerDetailComponent },
  { path: 'sectors-i-industries/:id', component: SimpleTextViewerDetailComponent },
  { path: 'talento/:id', component: SimpleTextViewerDetailComponent },
  { path: 'talent/:id', component: SimpleTextViewerDetailComponent },

  { path: 'accesibilidad/:id', component: SimpleTextViewerDetailComponent },
  { path: 'aviso-legal/:id', component: SimpleTextViewerDetailComponent },
  { path: 'contacta', component: SimpleTextViewerDetailComponent},
  { path: 'politica-de-cookies/:id', component: SimpleTextViewerDetailComponent},
  { path: 'politica-de-privacidad/:id', component: SimpleTextViewerDetailComponent},
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
