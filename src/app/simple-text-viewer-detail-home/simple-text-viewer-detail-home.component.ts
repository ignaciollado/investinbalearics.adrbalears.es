import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { wpPageService } from '../services/wp-page.service';
import { WpPage } from '../Models/wp-page-data.dto';

@Component({
  selector: 'app-simple-text-viewer-detail-home',
  templateUrl: './simple-text-viewer-detail-home.component.html',
  styleUrl: './simple-text-viewer-detail-home.component.scss'
})
export class SimpleTextViewerDetailHomeComponent {
  /* public id:string | null = this.route.snapshot.paramMap.get('id') */
  /* public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat') */
  public currentWPLang: number | undefined;
  public contenido: WpPage | undefined 
  @Input() wpPageDetailID: number = 0;

  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      switch (localStorage.getItem('preferredLang')) {
        case 'ca-ES':
          this.currentWPLang = 42
        break
        case 'es-ES':
          this.currentWPLang = 43
        break
        case 'en-EN':
          this.currentWPLang = 44
        break
        default:
          this.currentWPLang = 44
      }
      this.getContent(this.wpPageDetailID)
      /* window.scroll(0,0) */
    }

    getContent (id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
          })
    }
}
