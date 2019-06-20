import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MovieComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';

// API info
import { StorageService } from './storage.service';

// movie import
import { MoviesService } from './movies.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StorageService,
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
