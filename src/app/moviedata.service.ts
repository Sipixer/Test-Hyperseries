import { Injectable } from '@angular/core';
type Movie = {
  name: string;
  views: string;
};
@Injectable({
  providedIn: 'root',
})
export class MoviedataService {
  movie: Movie = { name: 'Avatar', views: '153 200' };
  constructor() {}
  setMovie(movie: Movie) {
    this.movie = movie;
    console.log(movie);
  }
  getMovie() {
    return this.movie;
  }
}
