import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PostsComponent } from './posts/posts.component';



const routes: Routes = [
  {path:'',redirectTo:'posts',pathMatch:'full'},
  {path:'posts',component:PostsComponent},
  {path:'comments',component:CommentsComponent},
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class AppPanelRoutingModule { }
