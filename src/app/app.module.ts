import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BoardComponent } from './board/board.component';
import { MessageContentComponent } from './message-content/message-content.component';
import { MessageHeaderComponent } from './message-header/message-header.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserAvatarComponent } from './user-avatar/user-avatar.component';
import { MessageBodyComponent } from './message-body/message-body.component';
import { MessageFooterComponent } from './message-footer/message-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MessageContentComponent,
    MessageHeaderComponent,
    UserInfoComponent,
    UserAvatarComponent,
    MessageBodyComponent,
    MessageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
