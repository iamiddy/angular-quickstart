import { Component } from '@angular/core';
import {CourseComponent} from './courses.component';

@Component({
    selector: 'my-app',
    template: `
           <h1>Hello Again Angular!</h1>
           <courses></courses>
           <authors></authors>
        `

})
export class AppComponent { }
