import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StoriesService } from '../../providers/stories';

/*
  Generated class for the CommentsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'comments.html',
})
export class CommentsPage {

  comments: any[];

  constructor(
    private nav: NavController,
    private navParams: NavParams,
    private storiesService: StoriesService) {
    this.comments = [];
  }

  ionViewDidLoad() {
    let data = this.navParams.get('data');
    data.forEach((id: any) => {
      this.storiesService.getStory(id)
        .subscribe(
        data => {
          console.log(data);
          this.comments.push(data);
        },
        error => {
          console.log(error);
        }
        );
    });
  }

}
