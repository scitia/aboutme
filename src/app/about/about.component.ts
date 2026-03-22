import {Component} from '@angular/core';
import {ArticleContentComponent} from "../article-content/article-content.component";
import {aboutPath} from "../articles.config";

@Component({
    selector: 'app-about',
    imports: [
        ArticleContentComponent
    ],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
})
export class AboutComponent {
    protected aboutPath: string = aboutPath();
}
