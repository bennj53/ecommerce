import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  dom:any;
  tl:any;

  constructor() { }

  ngOnInit(): void {
    this.initSroll;
  }

  initSroll(){
    //recup les elements du dom dans var dom
    this.dom = {}
    this.dom.el = document.querySelector(".js-placeholders");
    this.dom.images = this.dom.el.querySelectorAll("js-img-wrap");
    this.dom.buttonOpen = document.querySelector("js-slider-open");

  }

  setHoverAnimation(){
    //this.tl = gsap.ti
  }

}
