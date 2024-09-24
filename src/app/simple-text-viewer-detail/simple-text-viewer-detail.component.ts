import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';
@Component({
  selector: 'app-simple-text-viewer-detail',
  templateUrl: './simple-text-viewer-detail.component.html',
  styleUrl: './simple-text-viewer-detail.component.scss'
})
export class SimpleTextViewerDetailComponent {
  public id:number | null = +this.route.snapshot.paramMap.get('id')
  /* public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat') */
  currentLang: string | undefined
  public contenido: WpPage
  public contenidoMedia: WpPageFeaturedMedia
  /* @Input() wpPageDetailID: number = 0; */

  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      switch (localStorage.getItem('preferredLang')) {
        case 'cat':
          this.currentLang = 'ca-ES'
        break
        case 'cas':
          this.currentLang = 'es-ES'      
        break
        case 'en':
          this.currentLang = 'en-EN'
        break
        default:
          this.currentLang = 'ca-ES'
      }
      this.getContent(this.id)
      window.scroll(0,0)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              console.log (` - ${this.contenido.featured_media} - ${this.contenido._links['wp:featuredmedia'][0].href}` )
              this.getFeaturedMedia (this.contenido.featured_media)
          })
    }

    getFeaturedMedia (idMedia: number) {
      this.wpPageService.getOneFeaturedMedia(idMedia)
          .subscribe(
            (mediaItem: WpPageFeaturedMedia) => {
              this.contenidoMedia = mediaItem
              console.log (this.contenidoMedia.guid.rendered)
          })
    }
}
