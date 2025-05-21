import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';

@Component({
  selector: 'app-sectors-and-industries',
  templateUrl: './sectors-and-industries.component.html',
  styleUrl: './sectors-and-industries.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SectorsAndIndustriesComponent {
  /* public id:number | null = +this.route.snapshot.paramMap.get('id') */
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
          this.id = 366
        break
        case 'cas':
        case 'es-ES':
          this.currentLang = 'es-ES'
          this.currentWPLang = 43
          this.id = 113
        break
        case 'en':
        case 'en-EN':
          this.currentLang = 'en-EN'
          this.currentWPLang = 44
          this.id = 364
        break
        default:
          this.currentLang = 'en-EN'
          this.currentWPLang = 41
          this.id = 364
      }
      this.getContent(this.id)
      window.scroll(0,0)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
             /*  if (this.contenido.featured_media) {
                this.getFeaturedMedia (this.contenido.featured_media)
              } */
          })
    }

    getFeaturedMedia (idMedia: number) {
      this.wpPageService.getOneFeaturedMedia(idMedia)
          .subscribe(
            (mediaItem: WpPageFeaturedMedia) => {
              this.contenidoMedia = mediaItem
             /*  console.log ("contenidoMedia: ", idMedia, this.contenidoMedia) */
          })
    }
}
