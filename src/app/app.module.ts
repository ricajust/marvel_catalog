import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { DetailComponent } from './pages/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { TabbarComponent } from './components/tabbar/tabbar.component';
import { ThumbsComponent } from './pages/thumbs/thumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    HeaderComponent,
    TabbarComponent,
    ThumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
