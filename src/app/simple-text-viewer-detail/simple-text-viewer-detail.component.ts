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
  public id:string | null = '107'
  public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat')
  currentLang: string | undefined;
  public contenido: WpPage | undefined 

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

    getContent (id: string) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
          })
    }
}
