import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { ThumbsComponent } from './pages/thumbs/thumbs.component';
import { IconTabbarComponent } from './components/icon-tabbar/icon-tabbar.component';
import { ThumbComponent } from './components/thumb/thumb.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    HeaderComponent,
    TabbarComponent,
    ThumbsComponent,
    IconTabbarComponent,
    ThumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
