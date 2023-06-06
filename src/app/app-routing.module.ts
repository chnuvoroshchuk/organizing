import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { DocumentListComponent } from 'src/app/components/document-list/document-list.component';
import { ChatComponent } from 'src/app/components/chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'documents',
    component: DocumentListComponent,
  },
  {
    path: 'task',
    component: TasksComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

//TODO: about screen, person screen, tasks screen + openAI + promptAI
