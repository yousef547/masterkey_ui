import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shered/footer/footer.component';
import { NavbarComponent } from './shered/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponentComponent } from './shered/not-found-component/not-found-component.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { CourseComponent } from './component/course/course.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { ContactComponent } from './component/contact/contact.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule,HashLocationStrategy,LocationStrategy  } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FAQsComponent } from './component/faqs/faqs.component';
import {PostsComponent} from './component/posts/posts.component';
import { LoaderComponent } from './shered/loader/loader.component';
import { NgxPaginationModule } from 'ngx-pagination';

import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponentComponent,
    HeaderComponent,
    AboutComponent,
    CourseComponent,
    CourseDetailsComponent,
    ContactComponent,
    FAQsComponent,
    PostsComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    CarouselModule

  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
