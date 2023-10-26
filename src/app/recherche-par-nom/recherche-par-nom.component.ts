import { CosmetiqueService } from './../services/cosmetique.service';
import { AuthService } from './../services/auth.service';
import { Cosmetique } from './../model/cosmetique.model';
import { Component, OnInit } from '@angular/core';
import { Rayon } from '../model/rayon.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: [
  ]
})
export class RechercheParNomComponent implements OnInit {
  cosmetiques! : Cosmetique[];
  idRay! : number;
  rayons! : Rayon[];
  allCosmetiques! : Cosmetique[];
  nomCosmetique! : string;
  searchTerm! : string;

  constructor(public AuthService: AuthService,
              private cosmetiqueService: CosmetiqueService) { }

              ngOnInit(): void {
                this.cosmetiqueService.listeCosmetique().subscribe(cosms => {
                console.log(cosms);
                this.cosmetiques = cosms;
                });
                }
  onKeyUp(filterText : string){
    console.log(filterText);
    this.cosmetiques = this.allCosmetiques.filter(item => item.nomCosmetique?.toLowerCase().includes(filterText));
    }
    rechercherCosms(){
      this.cosmetiqueService.rechercherParNom(this.nomCosmetique).
      subscribe(cosms => {
      this.cosmetiques = cosms;
      console.log(cosms)});
      }
    }
