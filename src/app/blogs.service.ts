import { Injectable } from '@angular/core';

@Injectable()
export class BlogsService {
  public blogs : any;

  constructor() {
    this.blogs = [];
   }

   public getBlogs(){
      let blogList = localStorage.getItem("blogs");
      let blogs = []
      if(blogList) {
        blogs = JSON.parse(blogList)
      };
      console.log('Blogs', blogs);
      return blogs;
    }

   public addBlog(newblog : any){
    
    let blog = {
                  title: newblog.title,
                  content: newblog.content, 
                  status: false
                }
    let blogs = this.getBlogs();
  	// let blog = {title: title.value, content: content.value}
  	blogs.push(blog);
  	localStorage.setItem("blogs",JSON.stringify(blogs));
  	
   }

   public changeStatus(newblog: any){
    let blog = {
      title: newblog.title,
      content: newblog.content, 
      status: false
    }
    let blogs = this.getBlogs();
    let newList = [];
    for(let b of blogs){
      console.log(' -- > ', blog);
      if(blog.title !== b.title && blog.content != b.content)
        newList.push(b);
    }
    blog.status = true;
    newList.push(blog);
    localStorage.setItem("blogs",JSON.stringify(newList));

   }
  

}
