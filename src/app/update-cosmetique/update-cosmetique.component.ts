import { Image } from './../model/Image.model';
import { Rayon } from './../model/rayon.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Cosmetique } from '../model/cosmetique.model';

import { CosmetiqueService } from '../services/cosmetique.service';

@Component({
  selector: 'app-update-cosmetique',
  templateUrl: './update-cosmetique.component.html',
  //styleUrls: ['./update-cosmetique.component.css']
})
export class UpdateCosmetiqueComponent implements OnInit {
  currentCosmetique = new Cosmetique();
  rayons!:Rayon[];
  updatedRayId!:number;
  myImage! : string;
  uploadedImage!: File;
  isImageUpdated: Boolean=false;

  constructor(private activatedRoute: ActivatedRoute,private router :Router,private cosmetiqueService: CosmetiqueService){}

    
      
      ngOnInit(): void {
        this.cosmetiqueService.listeRayons().
        subscribe(rays => {this.rayons = rays._embedded.rayons;
        });
        this.cosmetiqueService.consulterCosmetique(this.activatedRoute.snapshot.params['id'])
        .subscribe( prod =>{ this.currentCosmetique = prod;
        this.updatedRayId = prod.rayon.idRay;
        } ) ;
        }
        
 
      onImageUpload(event: any) {
        if(event.target.files && event.target.files.length) {
        this.uploadedImage = event.target.files[0];
        this.isImageUpdated =true;
        const reader = new FileReader();
        reader.readAsDataURL(this.uploadedImage);
        reader.onload = () => { this.myImage = reader.result as string; };
        }
        }
        onAddImageCosmetique() {
          this.cosmetiqueService
          .uploadImageCosm(this.uploadedImage, 
          this.uploadedImage.name,this.currentCosmetique.idCosmetique)
          .subscribe( (img : Image) => {
          this.currentCosmetique.images.push(img);
          });
          }

          supprimerImage(img: Image){
            let conf = confirm("Etes-vous sûr ?");
            if (conf)
            this.cosmetiqueService.supprimerImage(img.idImage).subscribe(() => {
            //supprimer image du tableau currentProduit.images 
            const index = this.currentCosmetique.images.indexOf(img, 0);
            if (index > -1) {
            this.currentCosmetique.images.splice(index, 1);
            }
            });
            }
            updateCosmetique() {
              this.currentCosmetique.rayon = this.rayons.find(cat => cat.idRay == 
              this.updatedRayId)!; 
              this.cosmetiqueService
              .updateCosmetique(this.currentCosmetique)
              .subscribe((v) => {
              this.router.navigate(['cosmetiques']);
              });
              } 
              
      
}