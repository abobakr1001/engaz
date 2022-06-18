import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppPanelRoutingModule } from './app-panel-routing.module';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { NotfoundComponent } from './notfound/notfound.component';




@NgModule({
  declarations: [PostsComponent, CommentsComponent, NotfoundComponent],
  imports: [
    CommonModule,
    AppPanelRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppPanelModule { }
