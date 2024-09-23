import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { WpPage } from '../Models/wp-page-data.dto';
import { wpPageService } from '../services/wp-page.service';

@Component({
  selector: 'app-simple-text-viewer',
  templateUrl: './simple-text-viewer.component.html',
  styleUrl: './simple-text-viewer.component.scss'
})
export class SimpleTextViewerComponent {
  public id:string | null = this.route.snapshot.paramMap.get('id')
  public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat')
  currentLang: string | undefined;
  public contenido: WpPage | undefined 
  @Input() wpPageID: number = 0;

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
     
     /*  if (!this.id) {
        if (this.currentLang = 'es-ES') {
          this.id = '105'
        } else {
          this.id = '105'
        }
      }
      console.log ("**",this.id) */
  
      this.getContent(this.wpPageID)
 /*     
      window.scroll(0,0) */
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
              console.log(this.contenido)
          })
    }
}
