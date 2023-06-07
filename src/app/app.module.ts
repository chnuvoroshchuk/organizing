import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from 'src/app/core/interceptor/interceptor';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TaskListWrapperComponent } from './components/task-list-wrapper/task-list-wrapper.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DocumentComponent } from './components/document/document.component';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { CreateTaskModalComponent } from './components/modals/create-task-modal/create-task-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChatComponent} from "./components/chat/chat.component";
import { ConfirmRegistrationComponent } from './components/confirm-registration/confirm-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    TasksComponent,
    TaskItemComponent,
    TaskListWrapperComponent,
    LoginComponent,
    SignUpComponent,
    DocumentComponent,
    DocumentListComponent,
    ChatComponent,
    CreateTaskModalComponent,
    ConfirmRegistrationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
