import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CourseComponent} from "./courses.component";
import {AuthorComponent} from "./authors.component";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ AppComponent ,CourseComponent, AuthorComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
