import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
  private apiKey = '?api_key=a4b653275747198a287ec53f7215084e';
  private apiUrl = 'https://api.themoviedb.org/';
  imageBaseurl = 'https://image.tmdb.org/t/p/';

  constructor(
    private http: HttpClient,
  ) { }

  getList(category) {
    return this.http.get(this.apiUrl + '3/movie/' + category + this.apiKey);
  }

  getImageBaseUrl() {
   return this.imageBaseurl;
  }

  searchMovie(query) {
    query = this.convertToSlug(query);
    return this.http.get(this.apiUrl + '3/search/movie' + this.apiKey + '&query=' + query );
  }

  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }
}
