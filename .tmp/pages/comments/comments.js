import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StoriesService } from '../../providers/stories';
export class CommentsPage {
    constructor(nav, navParams, storiesService) {
        this.nav = nav;
        this.navParams = navParams;
        this.storiesService = storiesService;
        this.comments = [];
    }
    ionViewDidEnter() {
        let data = this.navParams.get('data');
        data.forEach((id) => {
            this.storiesService.getStory(id)
                .subscribe(data => {
                console.log(data);
                this.comments.push(data);
            }, error => {
                console.log(error);
            });
        });
    }
}
CommentsPage.decorators = [
    { type: Component, args: [{
                templateUrl: 'comments.html',
            },] },
];
CommentsPage.ctorParameters = [
    { type: NavController, },
    { type: NavParams, },
    { type: StoriesService, },
];
