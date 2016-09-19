import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ShowStoriesPage } from '../pages/show-stories/show-stories';
import { CommentsPage } from '../pages/comments/comments';
import { StoriesService } from '../providers/stories';
import { UnixDate } from '../pipes/unixDate';

@NgModule({
  declarations: [
    MyApp,
    ShowStoriesPage,
    AboutPage,
    HomePage,
    TabsPage,
    UnixDate,
    CommentsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ShowStoriesPage,
    AboutPage,
    HomePage,
    TabsPage,
    CommentsPage
  ],
  providers: [
    StoriesService
  ]
})
export class AppModule {}
