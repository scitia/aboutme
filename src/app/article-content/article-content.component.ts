import {Component, Input, OnInit} from '@angular/core';
import {marked} from "marked";

@Component({
  selector: 'app-article-content',
  imports: [],
  templateUrl: './article-content.component.html',
  styleUrl: './article-content.component.css',
})
export class ArticleContentComponent implements OnInit {

  @Input() path!: string;
  protected articleContent?: string;

  ngOnInit(): void {
    this.fetchArticleContent(this.path).catch(e => console.error(e));
  }

  private async fetchArticleContent(path: string): Promise<string> {
    return fetch(path)
        .then(response => response.text())
        .then(body => marked.parse(body))
        .then(parsed => this.articleContent = parsed);
  }
}
