import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { SimpleTextViewerComponent } from './simple-text-viewer/simple-text-viewer.component';
import { NotFoundComponent } from './error-pages/not-found/not-found.component';
import { InternalServerComponent } from './error-pages/internal-server/internal-server.component';
import { ContactFormComponent } from './contact-form/contact-form.component';


const routes: Routes = [

  { path: 'quienes-somos-invest-balearics/:id', component: SimpleTextViewerComponent },
  { path: 'qui-som-invest-balearics/:id', component: SimpleTextViewerComponent },
  { path: 'baleares-una-apuesta-ganadora/:id', component: SimpleTextViewerComponent },
  { path: 'balears-una-aposta-guanyadora/:id', component: SimpleTextViewerComponent },
  { path: 'ecosistema-inversor/:id', component: SimpleTextViewerComponent },
  { path: 'servicios-inversor-emprendedor/:id', component: SimpleTextViewerComponent },
  { path: 'serveis-inversor-emprenedor/:id', component: SimpleTextViewerComponent },
  { path: 'sectores-e-industrias/:id', component: SimpleTextViewerComponent },
  { path: 'sectors-i-industries/:id', component: SimpleTextViewerComponent },
  { path: 'talento/:id', component: SimpleTextViewerComponent },
  { path: 'talent/:id', component: SimpleTextViewerComponent },

  { path: 'accesibilidad/:id', component: SimpleTextViewerComponent },
  { path: 'aviso-legal/:id', component: SimpleTextViewerComponent },
  { path: 'contacta', component: SimpleTextViewerComponent},
  { path: 'politica-de-cookies/:id', component: SimpleTextViewerComponent},
  { path: 'politica-de-privacidad/:id', component: SimpleTextViewerComponent},
  { path: 'feder-detail/:id', component: SimpleTextViewerComponent },
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
