import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
})
export class ImagesComponent implements OnInit {
  @Input() public src;
  @ViewChild('image', {static: false}) image;
  defaultImage: string;
  isLoaded: boolean;

  constructor() { }

  ngOnInit() {
    this.defaultImage = '../../../assets/icon/poster.png';
  }

  
  ngAfterViewInit(){
  }

  ngOnDestroy(){
  }


  loadedError(){
    this.src = this.defaultImage;
    this.isLoaded = true;
  }
  loaded(){
    this.isLoaded = true;
  }

}
