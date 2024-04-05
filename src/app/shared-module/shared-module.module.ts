import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListItemComponent } from '../components/list-item/list-item.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { ListItemSkeletonComponent } from '../components/list-item-skeleton/list-item-skeleton.component';
import { SlidesComponent } from '../components/slides/slides.component';
import { NewsItemComponent } from '../components/news-item/news-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { WebinarModalComponent } from '../components/webinar-modal/webinar-modal.component';
import { PrivacyPolicyComponent } from '../components/privacy-policy/privacy-policy.component';
import { ContentViewComponent } from '../components/content-view/content-view.component';
import { HtmlToPlainTextPipe } from '../pipes/htmltoplaintext.pipe';



@NgModule({
  declarations: [
    ListItemComponent,
    VideoPlayerComponent,
    ListItemSkeletonComponent,
    SlidesComponent,
    NewsItemComponent,
    WebinarModalComponent,
    PrivacyPolicyComponent,
    ContentViewComponent,
    HtmlToPlainTextPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ListItemComponent,
    VideoPlayerComponent,
    ListItemSkeletonComponent,
    WebinarModalComponent,
    PrivacyPolicyComponent,
    ContentViewComponent,
    SlidesComponent,
    NewsItemComponent,
    FontAwesomeModule,
    HtmlToPlainTextPipe
  ],
})
export class SharedModule { }
