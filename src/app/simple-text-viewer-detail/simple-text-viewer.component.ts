import { Component } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';

@Component({
  selector: 'app-simple-text-viewer-detail',
  templateUrl: './simple-text-viewer-detail.component.html',
  styleUrl: './simple-text-viewer-detail.component.scss'
})
export class SimpleTextViewerDetailComponent {
  public id:string | null = this.route.snapshot.paramMap.get('id')
  public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat')
  currentLang: string | undefined;
  public contenido: WpPage | undefined 

  constructor( public translateService: TranslateService, 
    private articleService: wpPageService, 
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
      console.log (this.id)
      if (!this.id) {
        if (this.currentLang = 'es-ES') {
          this.id = '105'
        } else {
          this.id = '105'
        }
        
      
      }
  
      this.getContent(this.id)
      if (this.program_id !== '0') { /* si no es 0, entonces es algún programa de iemprenjove */
      }
      
      window.scroll(0,0)
    }

    getContent (id: string) {
      this.articleService.getOne(id)
          .subscribe(
            (resp:any) => {
              if (resp.status === 'published') {
                console.log (resp)
                this.contenido = resp.data
              } else  {
                this.contenido = null
              }
          })
    }
}
