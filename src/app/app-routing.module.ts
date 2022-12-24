import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HistoryComponent } from './components/history/history.component';
import { AboutComponent } from './components/about/about.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ZooComponent } from './components/zoo/zoo.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';

const routes: Routes = [
  { path: '', component: PostsComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'books', component: BooksListComponent},
  { path: 'photos', component: PhotosComponent},
  { path: 'recipe', component: RecipeComponent},
  { path: 'zoo', component: ZooComponent},
  { path: 'directory', component: DirectoryComponent},
  { path: 'bookmarks', component: BookmarksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
