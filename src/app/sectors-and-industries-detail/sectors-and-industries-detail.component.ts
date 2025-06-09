import { Component, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';

@Component({
  selector: 'app-sectors-and-industries-detail',
  templateUrl: './sectors-and-industries-detail.component.html',
  styleUrl: './sectors-and-industries-detail.component.scss'
})

export class SectorsAndIndustriesDetailComponent {
  public id:number | null
  public currentLang: string | undefined
  public currentWPLang: number
  public contenido: WpPage
  public contenidoMedia: WpPageFeaturedMedia
  theSlug: string;

  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    /* this.getContent(this.id) */
    this.route.paramMap.subscribe(params => {
      this.theSlug = params.get('id')!;
      console.log('Slug ID:', this.theSlug);
    });
    this.getContentBySlug(this.theSlug)
    window.scroll(0,0)
  }

  getContentBySlug (slug: string) {
    this.wpPageService.getOneBySlug(slug)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage[0]
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
}
