import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private http: HttpClient) { }

  // Método para buscar todos los personajes con parámetros opcionales
  findAllCharacters(params: any): Observable<any> {
    return this.http.get<any>(environment.baseUrl + environment.characterUrl, { params }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  // Método para buscar los episodios de un personaje utilizando su URL
  findEpisodesCharacter(urlEpisode: string): Observable<any> {
    return this.http.get<any>(urlEpisode).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
