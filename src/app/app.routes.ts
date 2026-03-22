import { Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {BlogComponent} from "./blog/blog.component";
import {HomeComponent} from "./home/home.component";
import {IdeasComponent} from "./ideas/ideas.component";
import {ScienceComponent} from "./science/science.component";
import {ArticleContentComponent} from "./article-content/article-content.component";

export const routes: Routes = [
    {component: AboutComponent, path: "about"},
    {component: BlogComponent, path: "blog"},
    {component: HomeComponent, path: "home"},
    {component: IdeasComponent, path: "ideas"},
    {component: ScienceComponent, path: "science"},
    {component: ArticleContentComponent, path: "page-content"}
];
