import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rayon } from '../model/rayon.model';

@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styles: [
  ]
})
export class UpdateRayonComponent implements OnInit {
  @Input()
rayon! : Rayon;

@Output()
rayonUpdated=new EventEmitter<Rayon>();

@Input()
ajout! :boolean;


  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateRayon ",this.rayon);

  }
  saveRayon(){
    this.rayonUpdated.emit(this.rayon);
  }

}
