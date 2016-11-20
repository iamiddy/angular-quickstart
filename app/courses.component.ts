/**
 * @author iddymagohe on 11/19/16.
 */

import {Component} from '@angular/core'
import {CourseService} from "./course.service";

@Component({
    selector: 'courses',
    template: `
        <h2>Courses goes here</h2>
        {{ title }}
        <ul>
         <li *ngFor="let course of courses">
            {{ course }}
         </li>
        </ul>
      `,
    providers: [CourseService] //DI
})
export class CourseComponent {

    title: string = "The title of courses page"
    courses: string[];

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}