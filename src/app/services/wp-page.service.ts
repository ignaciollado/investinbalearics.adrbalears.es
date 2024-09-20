import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WpPage } from '../Models/wp-page-data.dto';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class wpPageService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  /* key para JOOMLA 4 */
  private jToken = 'c2hhMjU2OjkwNzpjZjRkMmYwOTkxMGYyZTFiMWY2NGFjYThjZWVjM2VlNmI4ZGRlNGU1OTBjNzNiODA0NzM2NDdhYjUwN2M4NTdm'
  private apiBaseUrl = 'https://app.investinbalearics.es/wp/v2/'
  //private apiBaseUrl = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=200' /* Chapuza para mostrar todo ya que no veo como pasar query parameters */
  //private apiBaseUrlEverything = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=1800' /* Chapuza para mostrar todo ya que no veo como pasar query parameters */
  //private apiBaseUrlLastContent = 'https://contents.idi.es/api/index.php/v1/content/articles?page[offset]=0&page[limit]=20' /* Offset 0 y tamaño de página a 20 artículos */
  /* ---------------------------------------- */

  headers = new HttpHeaders()
  .set( 'Content-Type', 'application/vnd.api+json' ) 
  .set( 'X-Joomla-Token', this.jToken )

  constructor(private httpClient: HttpClient, private messagesService: MessageService) { }

  getAll(): Observable<WpPage[]> {
    this.messagesService.add('ArticleService: fetched ALL articles')
    return this.httpClient.get<WpPage[]>(`${this.apiBaseUrl}pages`, { headers: this.headers })
  }

  getLastContent(): Observable<WpPage[]> {
    this.messagesService.add('ArticleService: fetched ALL articles')
    return this.httpClient.get<WpPage[]>(this.apiBaseUrl, { headers: this.headers })
  }

  getOne(id: string|null): Observable<WpPage> {
    this.messagesService.add('ArticleService: fetched ONE article')
    return this.httpClient.get<WpPage>(`${this.apiBaseUrl}/${id}`, { headers: this.headers })
  }

}
