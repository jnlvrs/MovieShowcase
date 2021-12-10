import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  myMovieURL: string = "http://localhost:3000/movies"

  constructor(private http: HttpClient) { }


  getAllMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.myMovieURL)
  }

  getOneMovie(reqID: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.myMovieURL}/${reqID}`)
  }

  updateMovie(editID: number, edittedInfo: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.myMovieURL}/${editID}`, edittedInfo)
  }

  deleteMovie(deleteID: number): Observable<any> {
    return this.http.delete<any>(`${this.myMovieURL}/${deleteID}`)
  }

  addMovie(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.myMovieURL, newMovie)
  }
}
