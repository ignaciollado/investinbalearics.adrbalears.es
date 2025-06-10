import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';

@Component({
  selector: 'app-simple-text-viewer-detail',
  templateUrl: './simple-text-viewer-detail.component.html',
  styleUrl: './simple-text-viewer-detail.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class SimpleTextViewerDetailComponent {
  public id:number | null = +this.route.snapshot.paramMap.get('id')
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
          this.currentLang = 'ca-ES'
          this.currentWPLang = 42
        break
        case 'cas':
          this.currentLang = 'es-ES'
          this.currentWPLang = 43
        break
        case 'en':
          this.currentLang = 'en-EN'
          this.currentWPLang = 44
        break
        default:
          this.currentLang = 'ca-ES'
          this.currentWPLang = 41
      }
      this.getContent(this.id)
      window.scroll(0,0)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              if (this.contenido.featured_media) {
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
}
