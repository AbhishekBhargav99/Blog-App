import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogList ?: any;

  constructor( public blogsService: BlogsService) { 
    this.blogList = [];
  }

  ngOnInit() {

    this.blogList = this.blogsService.getBlogs();
    // console.log("blogList : ", this.blogList);

  }

}
