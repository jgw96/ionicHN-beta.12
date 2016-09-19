import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { StoriesService } from '../../providers/stories';
import { CommentsPage } from '../../pages/comments/comments';
export class HomePage {
    constructor(navCtrl, storiesService, loadCtrl) {
        this.navCtrl = navCtrl;
        this.storiesService = storiesService;
        this.loadCtrl = loadCtrl;
        this.stories = [];
    }
    ionViewDidEnter() {
        let loading = this.loadCtrl.create({
            content: 'Getting Stories...'
        });
        loading.present().then(() => {
            this.storiesService.getStories()
                .subscribe((data) => {
                this.storyIDs = data;
                this.previousIndex = this.storyIDs.length - 20;
                for (let i = 0; i < 20; i++) {
                    let id = data[i];
                    this.storiesService.getStory(data[i])
                        .subscribe((data) => {
                        this.stories.push({ data: data, id: id });
                        this.storiesRetreived = this.stories;
                        sessionStorage.setItem('loaded', 'true');
                    }, error => {
                        loading.dismiss();
                    }, () => {
                        loading.dismiss();
                    });
                }
            }, (error) => {
                console.log(error);
                loading.dismiss();
            });
        });
    }
    fillStories() {
        let loading = this.loadCtrl.create({
            content: 'Getting Stories...',
        });
        loading.present().then(() => {
            this.stories = [];
            this.storiesService.getStories()
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
        this.navCtrl.push(CommentsPage, { data: data });
    }
    open(url) {
        window.open(url);
    }
    doInfinite(infiniteScroll) {
        let newIndex = this.previousIndex - 20;
        for (let i = this.previousIndex; i > newIndex; i--) {
            let id = this.storyIDs[i];
            this.storiesService.getStory(this.storyIDs[i])
                .subscribe((data) => {
                this.stories.push({ data: data, id: id });
            }, (error) => {
                console.log(error);
            });
        }
        infiniteScroll.complete();
        this.previousIndex = newIndex;
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
HomePage.decorators = [
    { type: Component, args: [{
                templateUrl: 'home.html'
            },] },
];
HomePage.ctorParameters = [
    { type: NavController, },
    { type: StoriesService, },
    { type: LoadingController, },
];
