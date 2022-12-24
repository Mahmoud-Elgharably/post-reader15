import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ZooAnimalComponent } from './components/zoo-animal/zoo-animal.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import { HistoryComponent } from './components/history/history.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    RecipeComponent,
    ZooComponent,
    PostItemComponent,
    PhotosComponent,
    ZooAnimalComponent,
    BooksListComponent,
    BookItemComponent,
    HistoryComponent,
    NavBarComponent,
    AboutComponent,
    DirectoryComponent,
    BookmarksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
