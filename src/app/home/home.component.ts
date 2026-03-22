import {Component} from '@angular/core';
import {homePath} from "../articles.config";
import {ArticleContentComponent} from "../article-content/article-content.component";

@Component({
    selector: 'app-home',
    imports: [
        ArticleContentComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
})
export class HomeComponent {

    constructor() {
    }

    protected homePath: string = homePath();
}
