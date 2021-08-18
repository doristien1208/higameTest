import { Component, OnInit, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import * as p5 from 'p5';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, AfterViewInit {
  @ViewChild('sketchHolder') sketchHolder!: ElementRef;
  gameCanvas:any;
  sketchHeight=100;
  sketchWidth=100;
  constructor() { }

  ngOnInit(): void {
    //創建P5js物件與其內容
    const sketch=(s:p5)=>{
      s.setup=()=>{
        let canvas = s.createCanvas(this.sketchWidth,this.sketchHeight,s.WEBGL);
        canvas.parent('sketch-holder');
      }
      s.draw=()=>{
        s.background(200);
      }
    }
    this.gameCanvas=new p5(sketch); //宣告gameCanvas為p5物件並帶入前面宣告的sketch
  }
  ngAfterViewInit():void{
    this.resizeCanvas();
  }
  //windows項目監聽（非必須）
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.resizeCanvas();
  }

  resizeCanvas(){
    this.sketchWidth=this.sketchHolder.nativeElement.offsetWidth;
    this.sketchHeight=this.sketchHolder.nativeElement.offsetHeight;
    this.gameCanvas.resizeCanvas(this.sketchWidth,this.sketchHeight);
  }
}
