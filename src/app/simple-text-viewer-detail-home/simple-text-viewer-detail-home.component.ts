import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';

@Component({
  selector: 'app-simple-text-viewer-detail-home',
  templateUrl: './simple-text-viewer-detail-home.component.html',
  styleUrl: './simple-text-viewer-detail-home.component.scss'
})
export class SimpleTextViewerDetailHomeComponent {
  public currentWPLang: number | undefined;
  public contenido: WpPage | undefined 
  public contenidoMedia: WpPageFeaturedMedia
  
  @Input() wpPageHomeID: number;
  @Input() wpPageDetailID: number;

  @Input() adjustContent: boolean = false; /* 0:normal, 1:gradient */


  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService,
    private router: Router ) {
       console.log ("wpPageDetailID", this.wpPageDetailID)
     }
   
    ngOnInit(): void {
      switch (localStorage.getItem('preferredLang')) {
        case 'ca-ES':
          this.currentWPLang = 42
        break
        case 'es-ES':
          this.currentWPLang = 43
        break
        case 'en-EN':
          this.currentWPLang = 44
        break
        default:
          this.currentWPLang = 44
      }
      this.getContent(this.wpPageHomeID)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              if (this.contenido.featured_media !== 0) {
                this.getFeaturedMedia (this.contenido.featured_media)
              }
          })
    }

    getFeaturedMedia (idMedia: number) {
      this.wpPageService.getOneFeaturedMedia(idMedia)
          .subscribe(
            (mediaItem: WpPageFeaturedMedia) => {
              this.contenidoMedia = mediaItem
          })
    }

    showDetail(id) {
      switch (id)  {
        //Por qué invertir
        case 401:
          this.router.navigate(['/por-que-invertir-en-baleares',401])  
          break
        case 321:
          this.router.navigate(['/por-que-invertir-en-baleares',321]) 
          break
        case 319:
          this.router.navigate(['/por-que-invertir-en-baleares',319])
          break
        //Ecosistema inversor
        case 109:
          this.router.navigate(['/ecosistema-inversor',109])
          break
        case 355:
          this.router.navigate(['/ecosistema-inversor',355])
          break
        case 357:
          this.router.navigate(['/ecosistema-inversor',357])
          break
        // Servicios
        case 111:
          this.router.navigate(['/servicios-al-inversor-y-al-emprendedor',111])
          break
        case 361:
          this.router.navigate(['/servicios-al-inversor-y-al-emprendedor',361])
          break
        case 359:
          this.router.navigate(['/servicios-al-inversor-y-al-emprendedor',359])
          break
        // Sectores e industrias
        case 113:
          this.router.navigate(['/sectores-e-industrias',113])
          break
        case 364:
          this.router.navigate(['/sectores-e-industrias',364])
          break
        case 366:
          this.router.navigate(['/sectores-e-industrias',366])
          break
        // Talento
        case 115:
          this.router.navigate(['/talento',115])
          break
        case 310:
          this.router.navigate(['/talento',310])
          break
        case 308:
          this.router.navigate(['/talento',308])
          break                        
      }
    }
}
