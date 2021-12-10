import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-viewmovie',
  templateUrl: './viewmovie.component.html',
  styleUrls: ['./viewmovie.component.css']
})
export class ViewmovieComponent implements OnInit {

  currentMovie: Movie = new Movie();

  movieID: number;

  constructor(private actRoute: ActivatedRoute, private myMovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieID = parseInt(this.actRoute.snapshot.paramMap.get("movieID"))

    this.myMovieService.getOneMovie(this.movieID).subscribe(response =>{
      this.currentMovie = response;
    })
  }
  deleteMovie(id: number) {
    this.myMovieService.deleteMovie(id).subscribe(response => {
      this.router.navigate(["movielist"])
    })
  }
}
