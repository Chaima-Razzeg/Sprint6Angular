import { CosmetiqueService } from './../services/cosmetique.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Rayon } from '../model/rayon.model';

@Component({
  selector: 'app-liste-rayons',
  templateUrl: './liste-rayons.component.html',
  styles: [
  ]
})
export class ListeRayonsComponent implements OnInit {
  rayons! : Rayon[];
  updatedRay:Rayon = {"idRay":0,"nomRay":""};
  ajout:boolean=true;

 



  constructor(private cosmetiqueService : CosmetiqueService) { }

  ngOnInit(): void {
    this.cosmetiqueService.listeRayons().
    subscribe(rays => {this.rayons = rays._embedded.rayons;
    console.log(rays);
    });
  }

    updateRay(ray:Rayon) {
      this.updatedRay=ray;
      this.ajout=false;

      }
      rayonUpdated(ray:Rayon){
        console.log("Ray updated event",ray);
        this.cosmetiqueService.ajouterRayon(ray).
         subscribe( ()=> this.chargerRayons());
        }
        chargerRayons(){
          this.cosmetiqueService.listeRayons().
          subscribe(rays => {this.rayons = rays._embedded.rayons;
          console.log(rays);
          });
        }
        
}
