import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  { path: 'employee', component: EmployeeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
