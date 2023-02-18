import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { ThumbsComponent } from './pages/thumbs/thumbs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { IconTabbarComponent } from './components/icon-tabbar/icon-tabbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    HeaderComponent,
    TabbarComponent,
    ThumbsComponent,
    IconTabbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
