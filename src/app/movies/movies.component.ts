import { StorageService } from '../storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  movieDetails = {};
  imgBaseUrl: string;
  posterUrl: string;
  display = false;
  displayButton = 'Display details';

  constructor(private storage: StorageService) {}

  ngOnInit() {
    if (this.movie.poster_path === null) {
      this.posterUrl = 'http://via.placeholder.com/154x218?text=Not+avaliable';
    } else {
      this.imgBaseUrl = this.storage.getImageBaseUrl();
      this.posterUrl = this.imgBaseUrl + 'w780' + this.movie.poster_path;
    }
  }

  changeButton() {
    this.display = !this.display;
    if (this.display === true) {
      this.displayButton = 'Hide details';
    } else {
      this.displayButton = 'Display details';
    }
  }
}
