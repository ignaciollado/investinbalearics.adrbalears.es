import { Component, OnInit, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { WPpostService } from '../../services/wp-post.service';
import { WpPost } from '../../Models/wp-post-data.dto';
import { WpPageFeaturedMedia } from '../../Models/wp-page-featured-media.dto';
import { WpTag } from '../../Models/wp-tag.dto';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.scss'
})

export class NewsListComponent implements OnInit {

  public wpPosts: WpPost[] = []
  public wpFeaturedMedia: string[] = []
  public wpTags: WpTag[] = []
  public wpNoticiasTemp: WpPost[] = []
  public currentLang: string | undefined
  public wpCurrentLang: number 
  public contenidoMedia: WpPageFeaturedMedia[] = []
  public newsToDisplay: string | null
	actualProjectName : string = ""
	actualProjectFase: string = ""
  listNewsReady: boolean = false

  @Input () totalNewsToDisplay: string
  @Input () faseNewsToDisplay: string

  constructor( public translateService: TranslateService, private articleWPContent: WPpostService, private route: ActivatedRoute ) {
    this.newsToDisplay = this.route.snapshot.paramMap.get("newsToDisplay")
    console.log (this.newsToDisplay)
  }

  ngOnInit(): void {
   	this.actualProjectName = this.route.snapshot.paramMap.get('projectName')
		this.actualProjectFase = this.route.snapshot.paramMap.get('fasePro')
    switch (localStorage.getItem('preferredLang')) {
      case 'cat':
        this.currentLang = 'ca-ES'
        this.wpCurrentLang = 25
        break
      case 'cas':
        this.currentLang = 'es-ES'
        this.wpCurrentLang = 24      
        break
      case 'en':
        this.currentLang = 'en-EN'
        this.wpCurrentLang = 26
        break
      default:
        this.currentLang = 'ca-ES'
        this.wpCurrentLang = 25
    }

    this.getWPNoticias(this.wpCurrentLang, ['27'], this.newsToDisplay) /* 11 id de la categoría NOTICIA */
  }

  getWPNoticias(currentLanguage:number, currentCategory: string[], articlesNumber: any) {
    if ( !articlesNumber ) {
      articlesNumber = this.totalNewsToDisplay
    }
    this.articleWPContent.getAllPosts()
      .subscribe( (resp: WpPost[]) => {
        this.wpPosts = resp
        this.wpPosts = this.wpPosts.filter((item : WpPost)  => item.status === 'publish') 
        this.wpPosts = this.wpPosts.filter((item : WpPost)  => item.categories.includes((+currentCategory[0])))
        this.wpPosts = this.wpPosts.filter( (item : WpPost) => item.categories.includes(currentLanguage))
        this.wpPosts.map((item:WpPost) => {
          this.getFeaturedMedia(item.featured_media)
        })
        if (this.newsToDisplay != '9999') {
          this.wpPosts = this.wpPosts.slice(0, articlesNumber) /* The last 'articlesNumber' news published */
        }
    }) 
    window.scroll(0,0)
  }

  getFeaturedMedia (idMedia: number):any {
   this.articleWPContent.getOneFeaturedMedia(idMedia)
    .subscribe(
      (mediaItem: WpPageFeaturedMedia) => {
        this.contenidoMedia.push(mediaItem)
      })
  }
}
