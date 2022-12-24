import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {
    return [
      {
        id: 1,
        title: "My first post",
        body: "Just testing this output!",
        votes: 7
      },
      {
        id: 2,
        title: "What is your favorite front-end framework?",
        body: "it is Angular",
        votes: 12
      },
      {
        id: 3,
        title: "Come play with me",
        body: "another test",
        votes: 3
      }
    ]
  }
  
}
