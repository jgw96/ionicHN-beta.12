import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { StoriesService } from '../../providers/stories';
import { CommentsPage } from '../../pages/comments/comments';
export class ShowStoriesPage {
    constructor(nav, storiesService, loadCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.storiesService = storiesService;
        this.loadCtrl = loadCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.stories = [];
    }
    ionViewDidLoad() {
        let loading = this.loadCtrl.create({
            content: 'Getting Stories...',
        });
        loading.present().then(() => {
            this.storiesService.getShowStories()
                .subscribe((data) => {
                this.storyIDs = data;
                this.previousIndex = this.storyIDs.length - 20;
                console.log(this.previousIndex);
                for (let i = 0; i < 20; i++) {
                    if (i === 19) {
                        loading.dismiss();
                    }
                    else {
                        let id = data[i];
                        this.storiesService.getStory(data[i])
                            .subscribe((data) => {
                            this.stories.push({ data: data, id: id });
                            this.storiesRetreived = this.stories;
                            sessionStorage.setItem('loaded', 'true');
                        });
                    }
                }
            }, (error) => {
                console.log(error);
            });
        });
    }
    fillStories() {
        let loading = this.loadCtrl.create({
            content: 'Getting Stories...',
        });
        loading.present().then(() => {
            this.stories = [];
            this.storiesService.getShowStories()
                .subscribe((stories) => {
                for (let i = 0; i < 20; i++) {
                    let id = stories[i];
                    this.storiesService.getStory(stories[i])
                        .subscribe((data) => {
                        this.stories.push({ data: data, id: id });
                        loading.dismiss();
                        this.storiesRetreived = this.stories;
                    });
                }
            }, (err) => console.error(err));
        });
    }
    getComments(data) {
        console.log(data);
        this.nav.push(CommentsPage, { data: data });
    }
    open(url) {
        window.open(url);
    }
    doInfinite(infiniteScroll) {
        console.log(this.previousIndex);
        let newIndex = this.previousIndex - 20;
        if (newIndex > 0) {
            for (let i = this.previousIndex; i > newIndex; i--) {
                if (i === newIndex + 1) {
                    console.log(newIndex);
                    infiniteScroll.complete();
                    this.previousIndex = newIndex;
                }
                else {
                    let id = this.storyIDs[i];
                    this.storiesService.getStory(this.storyIDs[i])
                        .subscribe((data) => {
                        this.stories.push({ data: data, id: id });
                    }, (error) => {
                        console.log(error);
                    });
                }
            }
        }
        else {
            let toast = this.toastCtrl.create({
                message: 'No more stories to load',
                duration: 3000
            });
            toast.present();
        }
    }
    share(url) {
        window.open(`http://twitter.com/share?text=Check out this cool article I found on ionicHN!&url=${url}&hashtags=ionicHN`);
    }
    searchItems(event) {
        this.stories = this.storiesRetreived;
        let searchValue = event.target.value;
        if (searchValue && searchValue.trim() !== '') {
            this.stories = this.stories.filter((item) => {
                return (item.data.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
            });
        }
    }
}
ShowStoriesPage.decorators = [
    { type: Component, args: [{
                templateUrl: 'show-stories.html',
            },] },
];
ShowStoriesPage.ctorParameters = [
    { type: NavController, },
    { type: StoriesService, },
    { type: LoadingController, },
    { type: AlertController, },
    { type: ToastController, },
];
