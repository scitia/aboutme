import {HomeComponent} from "./home/home.component";
import {Type} from "@angular/core";
import {BlogComponent} from "./blog/blog.component";
import {ScienceComponent} from "./science/science.component";
import {IdeasComponent} from "./ideas/ideas.component";
import {AboutComponent} from "./about/about.component";

export const articlesMap = {
    _articles: {
        _home: {
            path: "_articles/_home/",
            files: [
                {
                    title: "Home content",
                    fileName: "home.md"
                }
            ]
        },
        _blog: {
            path: "_articles/_blog/",
            files: []
        },
        _ideas: {
            path: "_articles/_ideas/",
            files: []
        },
        _science: {
            path: "_articles/_science/",
            files: []
        },
        _about: {
            path: "_articles/_about/",
            files: [
                {
                    title: "About me",
                    fileName: "me.md"
                }
            ]
        },
    }
};

export function homePath() {
    return articlesMap._articles._home.path + "home.md";
}

export function aboutPath() {
    return articlesMap._articles._about.path + "me.md";
}

export function filePaths(component: Type<any>): string[] {
    switch (component) {
        case HomeComponent: {
            const path = articlesMap._articles._home.path;
            return articlesMap._articles._home.files
                .map(e => path + e.fileName)
        }
        case BlogComponent: {
            const path = articlesMap._articles._blog.path;
            return articlesMap._articles._blog.files.map(e => path + e)
        }
        case ScienceComponent: {
            const path = articlesMap._articles._science.path;
            return articlesMap._articles._science.files.map(e => path + e)
        }
        case IdeasComponent: {
            const path = articlesMap._articles._ideas.path;
            return articlesMap._articles._ideas.files.map(e => path + e)
        }
        case AboutComponent: {
            const path = articlesMap._articles._about.path;
            return articlesMap._articles._about.files
                .map(e => path + e.fileName)
        }
        default: {
            return [];
        }
    }
}