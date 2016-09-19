import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ShowStoriesPage } from '../show-stories/show-stories';
import { AboutPage } from '../about/about';
export class TabsPage {
    constructor() {
        this.tab1Root = HomePage;
        this.tab2Root = ShowStoriesPage;
        this.tab3Root = AboutPage;
    }
}
TabsPage.decorators = [
    { type: Component, args: [{
                templateUrl: 'tabs.html'
            },] },
];
TabsPage.ctorParameters = [];
