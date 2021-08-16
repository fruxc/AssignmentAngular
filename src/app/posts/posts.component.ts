import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { IPost } from '../models/posts';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [];
  columns: any[] = [];
  dataSource: any;
  displayedColumns: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _postsService: PostsService) {}
  ngOnInit(): void {
    try {
      this._postsService.getPosts().subscribe(
        (data) => {
          this.posts = data;
          this.columns = [
            {
              columnDef: 'UID',
              header: 'UID',
              cell: (element: IPost) => `${element.userId || null}`,
            },
            {
              columnDef: 'ID',
              header: 'ID',
              cell: (element: IPost) => `${element.id || null}`,
            },
            {
              columnDef: 'title',
              header: 'Title',
              cell: (element: IPost) => `${element.title || 'No title'}`,
            },
            {
              columnDef: 'body',
              header: 'Body',
              cell: (element: IPost) => `${element.body || 'No body'}`,
            },
          ];
          this.dataSource = new MatTableDataSource(this.posts);
          this.dataSource.paginator = this.paginator;
          this.displayedColumns = this.columns.map((c) => c.columnDef);
        },
        (err) => console.log('Error: ', err),
        () => console.log('Data fetched successfully!')
      );
    } catch (err) {
      console.log('Service Error: ', err);
    }
  }
}
