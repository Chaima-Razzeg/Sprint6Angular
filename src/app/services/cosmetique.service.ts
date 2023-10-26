import { Rayon } from './../model/rayon.model';
import { Injectable } from '@angular/core';
import { Cosmetique } from '../model/cosmetique.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Image } from './../model/Image.model';
import { RayonWrapper } from '../model/RayonWrapped.model';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class CosmetiqueService {

  apiURLRay: string = 'http://localhost:8008/cosmetiques/ray';
  apiURL: string = 'http://localhost:8008/cosmetiques/api';
  apiUrl1: string = 'http://localhost:8008/cosmetiques/api/image/uplaodImageCosm';

  rayons! : Rayon[]; //tableau de rayon
  cosmetique! : Cosmetique;
  cosmetiqueRecherche! :Cosmetique[]
  cosmetiqueRecherche2! :Cosmetique[]





  constructor(private http : HttpClient,
    private authService : AuthService) { 
  }

  listeCosmetique(): Observable<Cosmetique[]>{
    return this.http.get<Cosmetique[]>(this.apiURL+"/all");

    
    }
  ajouterCosmetique( cosm: Cosmetique):Observable<Cosmetique>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
    let httpHeaders = new HttpHeaders({"Authorization":jwt})
    return this.http.post<Cosmetique>(this.apiURL+"/addcosm", cosm, {headers:httpHeaders});    }
    supprimerCosmetique(id : number) {
      const url = `${this.apiURL}/delcosm/${id}`;
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.delete(url, {headers:httpHeaders});
      }
      consulterCosmetique(id: number): Observable<Cosmetique> {
        const url = `${this.apiURL}/getbyid/${id}`;
        let jwt = this.authService.getToken();
        jwt = "Bearer "+jwt;
        let httpHeaders = new HttpHeaders({"Authorization":jwt})
        return this.http.get<Cosmetique>(url,{headers:httpHeaders});
        }
        updateCosmetique(cosm : Cosmetique) : Observable<Cosmetique>
        {
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.put<Cosmetique>(this.apiURL+"/updatecosm", cosm, {headers:httpHeaders});
          }
        listeRayons():Observable<RayonWrapper>{
          let jwt = this.authService.getToken();
          jwt = "Bearer "+jwt;
          let httpHeaders = new HttpHeaders({"Authorization":jwt})
          return this.http.get<RayonWrapper>(this.apiURLRay,{headers:httpHeaders}
          );
                    }
          rechercherParRayon(idRay: number):Observable< Cosmetique[]> {
            const url = `${this.apiURL}/cosmsray/${idRay}`;
            return this.http.get<Cosmetique[]>(url);
            
            }
            rechercherParNom(nom: string):Observable< Cosmetique[]> {
              const url = `${this.apiURL}/cosmsByName/${nom}`;
              return this.http.get<Cosmetique[]>(url);

              }
              ajouterRayon( ray: Rayon):Observable<Rayon>{
                return this.http.post<Rayon>(this.apiURLRay, ray, httpOptions);
              }
              uploadImage(file: File, filename: string): Observable<Image>{
                const imageFormData = new FormData();
                imageFormData.append('image', file, filename);
                const url = `${this.apiURL + '/image/upload'}`;
                return this.http.post<Image>(url, imageFormData);
                }
                loadImage(id: number): Observable<Image> {
                const url = `${this.apiURL + '/image/get/info'}/${id}`;
                return this.http.get<Image>(url);
                }
                uploadImageCosm(file: File, filename: string, idCosm:number): Observable<any>{
                  const imageFormData = new FormData();
                  imageFormData.append('image', file, filename);
                  const url = `${this.apiURL + '/image/uplaodImageCosm'}/${idCosm}`;
                  return this.http.post(url, imageFormData);
                  }
                  supprimerImage(id : number) {
                    const url = `${this.apiURL}/image/delete/${id}`;
                    return this.http.delete(url, httpOptions);
                    }
                    uploadImageFS(file: File, filename: string, idProd : number): Observable<any>{
                      const imageFormData = new FormData();
                      imageFormData.append('image', file, filename);
                      const url = `${this.apiURL + '/image/uploadFS'}/${idProd}`;
                      return this.http.post(url, imageFormData);
                      }
                      
      
}
