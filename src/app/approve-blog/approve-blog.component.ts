import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../blogs.service';

@Component({
  selector: 'app-approve-blog',
  templateUrl: './approve-blog.component.html',
  styleUrls: ['./approve-blog.component.css']
})
export class ApproveBlogComponent implements OnInit {

  blogList ?: any;
  constructor(public blogsService: BlogsService) { }

  ngOnInit() {
    this.blogList = this.blogsService.getBlogs();
  }

  addBlog(blog : any){
    this.blogsService.changeStatus(blog);
    this.blogList = this.blogsService.getBlogs();
    alert(`Blog with Title : ${blog.title} Approved !!!`);
  }

}
