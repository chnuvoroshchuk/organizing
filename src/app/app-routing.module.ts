import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {TasksComponent} from "./components/task/tasks.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'person',
    component: UserComponent
  },
  {
    path: 'task',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

//TODO: about screen, person screen, tasks screen + openAI + promptAI
