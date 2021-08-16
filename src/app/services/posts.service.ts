import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/posts';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  private _url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts = (): Observable<IPost[]> => {
    return this.http.get<IPost[]>(this._url);
  };
}
