import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent implements OnInit {
  public icons:Array<any> = [
    { iconName: 'badge', iconText: 'characters' },
    { iconName: 'history_edu', iconText: 'comics' },
    { iconName: 'link', iconText: 'series' },
    { iconName: 'auto_stories', iconText: 'stories' },
    { iconName: 'emoji_objects', iconText: 'creators' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
