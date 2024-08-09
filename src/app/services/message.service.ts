import { Injectable } from '@angular/core';
import { genericMailDTO } from '../Models/generic-data.dto';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const URL_API_SEND = 'https://tramits.idi.es/public/assets/utils/enviaCorreoElectronicoANGULAR.php'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain', /* la única forma de evitar errores de CORS ha sido añadiendo esta cabecera */
    'observe': 'response'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor(private http: HttpClient) { }

  sendMail(formData: genericMailDTO, subjectMsg: string, project: string): Observable<genericMailDTO[]> {
    const email: string = formData.contactEmail
    const requester: string = formData.contactEmail
    const contactPhone: string = formData.contactPhone
    const subject: string = subjectMsg
    const body: string = formData.body
    const projectContact: string = project
    return this.http
      .get<genericMailDTO[]>(`${URL_API_SEND}?${email}/${requester}/${contactPhone}/${subject}/${body}/${projectContact}`, httpOptions)
      .pipe(catchError(this.handleError<genericMailDTO[]>('countries', [])));
  }

  add(message: string) {
    this.messages.push(message)
  }

  clear() {
    this.messages = []
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
  
}

