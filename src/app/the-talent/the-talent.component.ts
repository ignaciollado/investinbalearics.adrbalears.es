import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';

@Component({
  selector: 'app-the-talent',
  templateUrl: './the-talent.component.html',
  styleUrl: './the-talent.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class TheTalentComponent {
 public id:number | null
  public currentLang: string | undefined
  public currentWPLang: number
  public contenido: WpPage
  public contenidoMedia: WpPageFeaturedMedia

  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      switch (localStorage.getItem('preferredLang')) {
        case 'cat':
        case 'ca-ES':
          this.currentLang = 'ca-ES'
          this.currentWPLang = 42
          this.id = 308
        break
        case 'cas':
        case 'es-ES':
          this.currentLang = 'es-ES'
          this.currentWPLang = 43
          this.id = 115
        break
        case 'en':
        case 'en-EN':
          this.currentLang = 'en-EN'
          this.currentWPLang = 44
          this.id = 310
        break
        default:
          this.currentLang = 'en-EN'
          this.currentWPLang = 41
          this.id = 310
      }
      this.getContent(this.id)
      window.scroll(0,0)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              console.log ("talento: ", this.contenido)
              this.getFeaturedMedia (this.contenido.featured_media)
          })
    }

    getFeaturedMedia (idMedia: number) {
      this.wpPageService.getOneFeaturedMedia(idMedia)
          .subscribe(
            (mediaItem: WpPageFeaturedMedia) => {
              this.contenidoMedia = mediaItem
          })
    }
  }