import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tabbar',
  templateUrl: './icon-tabbar.component.html',
  styleUrls: ['./icon-tabbar.component.less']
})
export class IconTabbarComponent implements OnInit {
  @Input() icon:any;
  constructor() { }

  ngOnInit(): void {
  }

}
