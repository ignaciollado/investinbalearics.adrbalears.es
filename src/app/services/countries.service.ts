import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesDTO } from '../Models/countries.dto';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL_API = "https://restcountries.com/v3.1/";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<CountriesDTO[]> {
    return this.http
      .get<CountriesDTO[]>(`${URL_API}all?fields=name,capital,currencies`)
      .pipe(
        catchError(error => {
          console.error('Error fetching countries:', error);
          return throwError(() => new Error('Error fetching countries data. Please try again later.'));
        })
      );
  }
}
