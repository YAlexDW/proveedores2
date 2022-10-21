import { Component, Input, OnInit } from '@angular/core';
import { IcarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-gcg',
  templateUrl: './gcg.component.html',
  styleUrls: ['./gcg.component.css']
})
export class GCGComponent implements OnInit {
  @Input() height = 500;
  @Input() isFullScreen = false;
  @Input() items: IcarouselItem[]=[];

  public finalHeight: String|number = 0;
  public currentPosition = 0;

  constructor() {
    this.finalHeight = this.isFullScreen ? '100vh': `${this.height}px`
  }

  ngOnInit(): void {
    this.items.map((i,index)=>{
      i.id = index;
      i.marginLeft = 0;
    });
  }

  setCurrentPOsition(position : number){
    this.currentPosition = position;
  }

}
