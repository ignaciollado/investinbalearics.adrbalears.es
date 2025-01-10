import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WpPage } from '../Models/wp-page-data.dto';
import { WpPageFeaturedMedia } from '../Models/wp-page-featured-media.dto';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class wpPageService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  /* key para JOOMLA 4 */
  private jToken = 'c2hhMjU2OjkwNzpjZjRkMmYwOTkxMGYyZTFiMWY2NGFjYThjZWVjM2VlNmI4ZGRlNGU1OTBjNzNiODA0NzM2NDdhYjUwN2M4NTdm'
  private apiBaseUrl = 'https://app.investinbalearics.es/wp-json/wp/v2/'
  private apiAdrbalearsUrl = 'https://app.adrbalears.es/wp-json/wp/v2/'



  headers = new HttpHeaders()
  .set( 'Access-Control-Allow-Origin','*')

  constructor(private httpClient: HttpClient, private messagesService: MessageService) { }

  getAll(): Observable<WpPage[]> {
    this.messagesService.add('ArticleService: fetched ALL articles')
    return this.httpClient.get<WpPage[]>(`${this.apiBaseUrl}pages`)
  }

  getLastContent(): Observable<WpPage[]> {
    this.messagesService.add('ArticleService: fetched ALL articles')
    return this.httpClient.get<WpPage[]>(this.apiBaseUrl)
  }

  getOne(id: number|null): Observable<WpPage> {
    this.messagesService.add('ArticleService: fetched ONE article')
    return this.httpClient.get<WpPage>(`${this.apiBaseUrl}pages/${id}`)
  }

  getOneFeaturedMedia(id: number|null): Observable<WpPageFeaturedMedia> {
    this.messagesService.add('ArticleService: fetched ONE media')
    return this.httpClient.get<WpPageFeaturedMedia>(`${this.apiBaseUrl}media/${id}`)
  }

  getLegalContent(id: number|null): Observable<WpPage> {
    this.messagesService.add('ArticleService: fetched ONE article')
    return this.httpClient.get<WpPage>(`${this.apiAdrbalearsUrl}pages/${id}`)
  }

}
