import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';

import { StoriesService } from '../../providers/stories';
import { CommentsPage } from '../../pages/comments/comments';
import { UnixDate } from '../../pipes/unixDate';

/*
  Generated class for the AskStoriesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'show-stories.html',
})
export class ShowStoriesPage {

  stories: any[];
  storyIDs: any;
  previousIndex: number;
  storiesRetreived: any[];

  constructor(
    private nav: NavController,
    private storiesService: StoriesService,
    private loadCtrl: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    this.stories = [];
  }

  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: 'Getting Stories...',
    });

    loading.present().then(() => {
      this.storiesService.getShowStories()
        .subscribe(
        (data: any) => {
          this.storyIDs = data;
          this.previousIndex = this.storyIDs.length - 20;
          console.log(this.previousIndex);
          for (let i = 0; i < 20; i++) {
            if (i === 19) {
              loading.dismiss();
            } else {
              let id = data[i]
              this.storiesService.getStory(data[i])
                .subscribe(
                (data: any) => {
                  this.stories.push({ data: data, id: id });
                  this.storiesRetreived = this.stories;
                  sessionStorage.setItem('loaded', 'true');
                }
                )
            }
          }
        },
        (error: Error) => {
          console.log(error);
        }
        )
    })
  }

  public fillStories() {
    let loading = this.loadCtrl.create({
      content: 'Getting Stories...',
    });
    loading.present().then(() => {
      this.stories = [];
      this.storiesService.getShowStories()
        .subscribe(
        (stories: any[]) => {
          for (let i = 0; i < 20; i++) {
            let id = stories[i];
            this.storiesService.getStory(stories[i])
              .subscribe(
              (data: any) => {
                this.stories.push({ data: data, id: id });
                loading.dismiss();
                this.storiesRetreived = this.stories;
              }
              );
          }
        },
        (err: Error) => console.error(err)
        );
    });
  }

  public getComments(data: any): void {
    console.log(data);
    this.nav.push(CommentsPage, { data: data });
  }

  public open(url: string) {
    window.open(url);
  }

  doInfinite(infiniteScroll: any) {
    console.log(this.previousIndex);
    let newIndex = this.previousIndex - 20;
    if (newIndex > 0) {
      for (let i = this.previousIndex; i > newIndex; i--) {
        if (i === newIndex + 1) {
          console.log(newIndex);
          infiniteScroll.complete();
          this.previousIndex = newIndex;
        } else {
          let id = this.storyIDs[i];
          this.storiesService.getStory(this.storyIDs[i])
            .subscribe(
            (data: any) => {
              this.stories.push({ data: data, id: id });
            },
            (error: Error) => {
              console.log(error);
            }
            )
        }
      }
    } else {
      let toast = this.toastCtrl.create({
        message: 'No more stories to load',
        duration: 3000
      });
      toast.present();
    }
  }

  public share(url: string) {
    window.open(`http://twitter.com/share?text=Check out this cool article I found on ionicHN!&url=${url}&hashtags=ionicHN`)
  }

  public searchItems(event: any) {
    this.stories = this.storiesRetreived;
    let searchValue = event.target.value;

    if (searchValue && searchValue.trim() !== '') {
      this.stories = this.stories.filter((item) => {
        return (item.data.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1);
      })
    }
  }

}
