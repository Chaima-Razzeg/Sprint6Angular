
import { AuthService } from './../services/auth.service';
import { Cosmetique } from './../model/cosmetique.model';
import { Component, OnInit } from '@angular/core';
import { Rayon } from '../model/rayon.model';
import { CosmetiqueService } from '../services/cosmetique.service';

@Component({
  selector: 'app-recherche-par-rayon',
  templateUrl: './recherche-par-rayon.component.html',
  styles: [
  ]
})
export class RechercheParRayonComponent implements OnInit {
  cosmetiques : Cosmetique[] =[]; //un tableau de Cosmetique
  rayons! : Rayon[];
  IdRayon! : number;

  constructor(public AuthService: AuthService,
              private cosmetiqueService : CosmetiqueService) { }

              ngOnInit(): void {
                this.cosmetiqueService.listeRayons().
                subscribe(rays => {this.rayons = rays._embedded.rayons;
                console.log(rays);
                });
                }
                onChange() {
                  this.cosmetiqueService.rechercherParRayon(this.IdRayon).
                  subscribe(cosms =>{this.cosmetiques=cosms});
                  }



}
