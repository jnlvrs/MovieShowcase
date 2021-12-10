import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-updatemovie',
  templateUrl: './updatemovie.component.html',
  styleUrls: ['./updatemovie.component.css']
})
export class UpdatemovieComponent implements OnInit {

  editMovie: Movie = new Movie();

  movieID: number;

  constructor(private actRoute: ActivatedRoute, private myMovieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.movieID = parseInt(this.actRoute.snapshot.paramMap.get("movieID"))

    this.myMovieService.getOneMovie(this.movieID).subscribe(response =>{
      this.editMovie = response;
    })
  }
  updateMovie(){
    this.myMovieService.updateMovie(this.movieID, this.editMovie).subscribe(response=>{
      this.router.navigate(["movielist"])
    })
  }
  
}
