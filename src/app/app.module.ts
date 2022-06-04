import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApproveBlogComponent } from './approve-blog/approve-blog.component';
import { BlogsService } from './blogs.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
    AdminLoginComponent,
    ApproveBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    BlogsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
