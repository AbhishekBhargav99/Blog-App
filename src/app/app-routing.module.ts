import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApproveBlogComponent } from './approve-blog/approve-blog.component';

const routes: Routes = [
	{
		path:"",
		component: HomeComponent
	}, {
		path:"add-blog",
		component: AddBlogComponent
	}, {
		path:"login",
		component: AdminLoginComponent
	}, {
		path: 'approve',
		component: ApproveBlogComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
