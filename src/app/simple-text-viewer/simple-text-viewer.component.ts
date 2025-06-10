import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { WpPage } from '../Models/wp-page-data.dto';
import { wpPageService } from '../services/wp-page.service';

@Component({
  selector: 'app-simple-text-viewer',
  templateUrl: './simple-text-viewer.component.html',
  styleUrl: './simple-text-viewer.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class SimpleTextViewerComponent {
  public id:string | null = this.route.snapshot.paramMap.get('id')
  public program_id: string | null = this.route.snapshot.paramMap.get('idMainCat')
  currentLang: string | undefined
  currentWPLang: number
  public contenido: WpPage
  @Input() wpPageID: number

  constructor( public translateService: TranslateService, 
    private wpPageService: wpPageService, 
    private route: ActivatedRoute,
    private router: Router ) { }

    ngOnInit(): void {
      switch (localStorage.getItem('preferredLang')) {
        case 'cat':
          this.currentWPLang = 42
          break
        case 'cas':
          this.currentWPLang = 43
          break
        case 'en':
          this.currentWPLang = 44
          break
        default:
          this.currentWPLang = 41
      }
      this.getContent(this.currentWPLang, this.wpPageID)
    }

    getContent (currentLanguage: number, id: number) {
      this.wpPageService.getOne(id)
          .subscribe(
            (wpPage: WpPage) => {
              this.contenido = wpPage
          })
    }
}
