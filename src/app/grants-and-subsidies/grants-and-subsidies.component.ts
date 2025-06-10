import { Component, ViewEncapsulation, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grants-and-subsidies',
  templateUrl: './grants-and-subsidies.component.html',
  styleUrl: './grants-and-subsidies.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class GrantsAndSubsidiesComponent implements AfterViewInit {
  public id:number | null
  public currentLang: string | undefined
  public currentWPLang: number
  public contenido: WpPage
  public contenidoMedia: WpPageFeaturedMedia

  @ViewChild('entryContent', { static: false }) entryContent!: ElementRef;

    constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private renderer: Renderer2, private route: ActivatedRoute ) { }

  ngAfterViewInit(): void {
  const animations = [
   'slideInFromLeft',
   'slideInFromRight',
   'slideInFromTop',
   'fadeInZoom'
  ];

 const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
 this.renderer.addClass(this.entryContent.nativeElement, 'animated-entry');
 this.renderer.setStyle(this.entryContent.nativeElement, 'animationName', randomAnimation); }

 ngOnInit(): void {
  this.id = +this.route.snapshot.paramMap.get('id');
      switch (localStorage.getItem('preferredLang')) {
        case 'cat':
        case 'ca-ES':
          this.currentLang = 'ca-ES'
          this.currentWPLang = 42
        break
        case 'cas':
        case 'es-ES':
          this.currentLang = 'es-ES'
          this.currentWPLang = 43
        break
        case 'en':
        case 'en-EN':
          this.currentLang = 'en-EN'
          this.currentWPLang = 44
        break
        default:
          this.currentLang = 'en-EN'
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
