/**
 * @author iddymagohe on 11/19/16.
 */
import { Component } from '@angular/core'
import {AuthorService} from "./author.service";

@Component({
    selector :'authors',
    template: `
               <h2>Authors goes here</h2>
                {{ title }}
               <ul>
                  <li *ngFor="let author of authors"> {{ author }} </li>
                </ul>
              `,
    providers: [AuthorService]
})
export class AuthorComponent {

    title: string =  "The title of authors page"
    authors : string[];

    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}