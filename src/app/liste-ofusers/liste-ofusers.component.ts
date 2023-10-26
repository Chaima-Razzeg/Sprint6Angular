
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-ofusers',
  templateUrl: './liste-ofusers.component.html',
  styleUrls: ['./liste-ofusers.component.css']
})
export class ListeOfusersComponent implements OnInit {

  constructor(private authService:AuthService) { }
  users!:User[]
  role?:string;
  

  ngOnInit(): void {
    this.authService.ListOfusers().subscribe(
      data => {
        this.users = data;
        console.log(data);
  
        
      
        
      },
      err => {
        console.log(err);
      }
    );
  }
  chargerUser(){
    this.authService.ListOfusers().subscribe(prods => {
      this.users = prods;
  });}

  deleteUser(id : number) {
    Swal.fire({
        title: 'Etes-vous sûr ?',
        text: "Cette action est irréversible !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Oui, supprimer',
        cancelButtonText: 'Annuler'
    }).then((result: { isConfirmed: any; }) => {
        if (result.isConfirmed) {
            // L'utilisateur a cliqué sur "Oui, supprimer"
            this.authService.deleteUser(id).subscribe(
                data => {
                    console.log(data);
                    // window.location.reload();
                    this.chargerUser();
                },
                err => {
                    console.log(err);
                }
            );
        }
    });
}

  
  

}  
  
  
  
  
  
