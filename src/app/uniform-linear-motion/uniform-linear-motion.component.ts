import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uiform-linear-motion',
  templateUrl: './uniform-linear-motion.component.html',
  styleUrls: ['./uniform-linear-motion.component.css']
})
export class UniformLinearMotionComponent implements OnInit, OnChanges {

  strTitle = "Uniform Linear Motion";
  strSubtitle = "Calculating Velocity";

  strV = "";
  strD = "";
  strT = "";

  strVVisibility = "none";
  strDVisibility = "block";
  strTVisibility = "block";

  strResult = "";

  calculateV() {
    this.reset();
    this.strSubtitle = "Calculating Velocity";
    this.strVVisibility = "none";
    this.strDVisibility = "block";
    this.strTVisibility = "block";  
  }

  calculateD() {
    this.reset();
    this.strSubtitle = "Calculating Distance";
    this.strVVisibility = "block";
    this.strDVisibility = "none";
    this.strTVisibility = "block";  
  }

  calculateT() {
    this.reset();
    this.strSubtitle = "Calculating Time";
    this.strVVisibility = "block";
    this.strDVisibility = "block";
    this.strTVisibility = "none";  
  }
  
  reset(){
    this.strV = "";
    this.strD = "";
    this.strT = "";
    this.strResult = "";
  }

  calculate(){
    if(this.strVVisibility == "none"){
      this.strResult = String(Number(this.strD) / Number(this.strT) ) + " m/s";
    } else if(this.strDVisibility == "none"){
      this.strResult = String(Number(this.strV) * Number(this.strT)) + " m";
    } else {
      this.strResult = String(Number(this.strD) / Number(this.strV)) + " s";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Input() value: string = "";

  ngOnChanges(changes: SimpleChanges): void {
    this.strResult = "CHANGEEE"
  }

}
