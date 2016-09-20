import { Component } from '@angular/core';
import { NavController, LoadingController } from "ionic-angular";

import { StoriesService } from '../../providers/stories';

@Component({
  templateUrl: 'about.html'
})
export class AboutPage {

  jobs: any[];

  constructor(
    private navController: NavController,
    private storiesService: StoriesService,
    private loadCtrl: LoadingController) {
    this.jobs = [];
  }

  ionViewDidLoad() {
    let loading = this.loadCtrl.create({
      content: 'Getting Jobs...'
    });
    loading.present().then(() => {
      this.storiesService.getJobStories()
        .subscribe(
        (data: any) => {
          data.forEach((id: any) => {
            this.storiesService.getStory(id)
              .subscribe(
              (data: any) => {
                this.jobs.push(data);
              },
              (err: Error) => {
                console.log(err);
              }
              );
          });
        },
        (err: Error) => {
          console.log(err);
        }
        );

        setTimeout(() => {
          loading.dismiss();
        }, 2000)
    });
  }

  public goTo(site: string) {
    window.open(site);
  }

  public share(url: string) {

  }
}
