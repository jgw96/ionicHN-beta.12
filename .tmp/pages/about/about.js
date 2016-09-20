import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";
import { StoriesService } from '../../providers/stories';
export class AboutPage {
    constructor(navController, storiesService, loadCtrl) {
        this.navController = navController;
        this.storiesService = storiesService;
        this.loadCtrl = loadCtrl;
        this.jobs = [];
    }
    ionViewDidLoad() {
        let loading = this.loadCtrl.create({
            content: 'Getting Jobs...'
        });
        loading.present().then(() => {
            this.storiesService.getJobStories()
                .subscribe((data) => {
                data.forEach((id) => {
                    this.storiesService.getStory(id)
                        .subscribe((data) => {
                        this.jobs.push(data);
                    }, (err) => {
                        console.log(err);
                    });
                });
            }, (err) => {
                console.log(err);
            });
            setTimeout(() => {
                loading.dismiss();
            }, 2000);
        });
    }
    goTo(site) {
        window.open(site);
    }
    share(url) {
    }
}
AboutPage.decorators = [
    { type: Component, args: [{
                templateUrl: 'about.html'
            },] },
];
AboutPage.ctorParameters = [
    { type: NavController, },
    { type: StoriesService, },
    { type: LoadingController, },
];
