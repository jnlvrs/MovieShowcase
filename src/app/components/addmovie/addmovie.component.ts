import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  newMovie: Movie = new Movie()

  constructor(private myMovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
  }

  addMovie(){
    this.myMovieService.addMovie(this.newMovie).subscribe(response =>{
      this.router.navigate(["movielist"])
    })
  }

}
