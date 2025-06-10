import { Component, ViewEncapsulation, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-investment-ecosystem',
  templateUrl: './investment-ecosystem.component.html',
  styleUrl: './investment-ecosystem.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class InvestmentEcosystemComponent {
  public id:number | null
  public currentLang: string | undefined
  public currentWPLang: number
  public contenido: WpPage
  public contenidoMedia: WpPageFeaturedMedia

 @ViewChild('entryContent', { static: false }) entryContent!: ElementRef;


  constructor( public translateService: TranslateService,
    private wpPageService: wpPageService,
    private route: ActivatedRoute,
    private renderer: Renderer2 ) { }

ngAfterViewInit(): void {
 const animations = [
   'slideInFromLeft',
   'slideInFromRight',
   'slideInFromTop',
   'fadeInZoom'
 ];

  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  this.renderer.addClass(this.entryContent.nativeElement, 'animated-entry');
  this.renderer.setStyle(this.entryContent.nativeElement, 'animationName', randomAnimation);
}    

    ngOnInit(): void {
      this.id = +this.route.snapshot.paramMap.get('id');
      switch (localStorage.getItem('preferredLang')) {
        case 'cat':
        case 'ca-ES':
          this.currentLang = 'ca-ES'
          this.currentWPLang = 42
/*           this.id = 357 */
        break
        case 'cas':
        case 'es-ES':
          this.currentLang = 'es-ES'
          this.currentWPLang = 43
/*           this.id = 109 */
        break
        case 'en':
        case 'en-EN':
          this.currentLang = 'en-EN'
          this.currentWPLang = 44
/*           this.id = 355 */
        break
        default:
          this.currentLang = 'en-EN'
          this.currentWPLang = 41
/*           this.id = 355 */
      }
      this.getContent(this.id)
      window.scroll(0,0)
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              console.log ("contenido", this.contenido)
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
