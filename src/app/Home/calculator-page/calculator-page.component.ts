import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss']
})
export class CalculatorPageComponent implements OnInit {
  numberOfTailesEachBox: number;
  squaremetervalue:number;
  squaremeter: number;
  size: number;
  typeOfTile:number;
  boxes:number;
  tiles:number;
  finalboxes: number;
  totaltiles: number;
  myInput: number;
  constructor() { }
  ngOnInit(): void {
  }
   calculateTailsBox(){
    this.squaremetervalue=this.myInput;
    this.typeOfTile= this.size
    console.log("squaremeter",this.squaremetervalue);
    this.boxes = (this.squaremetervalue / 1.44);
    this.tiles =   (this.boxes * this.typeOfTile);
    this.finalboxes=Math.ceil(this.boxes);
    this.totaltiles=Math.ceil(this.tiles); 
}
 
}
