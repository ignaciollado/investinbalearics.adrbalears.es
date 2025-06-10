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
  
  @Input() wpPageDetailID: number = 0;
  @Input() adjustContent: boolean = false; /* 0:normal, 1:gradient */


  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private route: ActivatedRoute,
    private router: Router ) { }

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
      this.getContent(this.wpPageDetailID)
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
        case 113:
          this.router.navigate(['/sectores-e-industrias',113])
          break
        case 366:
          this.router.navigate(['/sectores-e-industrias',366])
          break
        case 364:
          this.router.navigate(['/sectores-e-industrias',364])
          break
//Por qué invertir
       /*  case 212:
          this.router.navigate(['/por-que-invertir-en-baleares',212])  
          break
          case 315:
          this.router.navigate(['/por-que-invertir-en-baleares',315]) 
          break
        case 317:
          this.router.navigate(['/por-que-invertir-en-baleares',317])
          break*/
//ecosistema inversor
        case 212:
          this.router.navigate(['/ecosistema-inversor',109])
          break
        case 315:
          this.router.navigate(['/ecosistema-inversor',357])
          break
        case 317:
          this.router.navigate(['/ecosistema-inversor',355])
          break

        case 111:
          this.router.navigate(['/ecosistema-inversor',111])
          break
        case 359:
          this.router.navigate(['/ecosistema-inversor',359])
          break
        case 361:
          this.router.navigate(['/ecosistema-inversor',361])
          break

        case 115:
          this.router.navigate(['/ecosistema-inversor',115])
          break
        case 310:
          this.router.navigate(['/ecosistema-inversor',310])
          break
        case 308:
          this.router.navigate(['/ecosistema-inversor',308])
          break          
      }
    }
}
