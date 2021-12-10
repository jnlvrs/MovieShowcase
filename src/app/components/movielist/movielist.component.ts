import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {

  listOfMovies: Movie[] = [];

  constructor(private myMovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.myMovieService.getAllMovies().subscribe(response =>{
      console.log(response);
      this.listOfMovies = response;
    })
  }

}
