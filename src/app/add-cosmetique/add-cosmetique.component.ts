import { Rayon } from './../model/rayon.model';
import { Component, OnInit } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { CosmetiqueService } from '../services/cosmetique.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Image } from './../model/Image.model';

@Component({
  selector: 'app-add-cosmetique',
  templateUrl: './add-cosmetique.component.html',
  styleUrls: ['./add-cosmetique.component.css']
})
export class AddCosmetiqueComponent implements OnInit {
newCosmetique = new Cosmetique();
newIdRay! : number;
newRayon! : Rayon;
rayons! : Rayon[];
uploadedImage!: File;
imagePath: any;
constructor(private cosmetiqueService: CosmetiqueService,
            private router :Router, ) { }
            ngOnInit(): void {
                  this.cosmetiqueService.listeRayons().
                  subscribe(rays => {console.log(rays);
                  this.rayons = rays._embedded.rayons;
                  }
                  );
                  }
                  
                  addCosmetique(){
                        this.newCosmetique.rayon = this.rayons.find(cat => cat.idRay
                        == this.newIdRay)!;
                        this.cosmetiqueService
                        .ajouterCosmetique(this.newCosmetique)
                        .subscribe((prod) => {
                        this.cosmetiqueService
                        .uploadImageFS(this.uploadedImage,
                        this.uploadedImage.name,prod.idCosmetique)
                        .subscribe((response: any) => {}
                        );
                        this.router.navigate(['cosmetiques']);
                        });
                        }
                  onImageUpload(event: any) {
                        this.uploadedImage = event.target.files[0];
                        var reader = new FileReader();
                        reader.readAsDataURL(this.uploadedImage);
                        reader.onload = (_event) => { this.imagePath = reader.result; }
                        }
}
