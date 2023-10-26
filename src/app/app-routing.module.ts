import { ListeRayonsComponent } from './liste-rayons/liste-rayons.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { RechercheParRayonComponent } from './recherche-par-rayon/recherche-par-rayon.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { UpdateCosmetiqueComponent } from 'src/app/update-cosmetique/update-cosmetique.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { CosmetiqueGuard } from './cosmetique.guard';
import { AddRoleForUserComponent } from './add-role-for-user/add-role-for-user.component';
import { ListeOfusersComponent } from './liste-ofusers/liste-ofusers.component';
import {RegisterComponent} from './register/register.component'
const routes: Routes = [
{path: "cosmetiques", component : CosmetiquesComponent},
{path: "add-cosmetique", component : AddCosmetiqueComponent, canActivate:[CosmetiqueGuard]},
{ path: "", redirectTo: "cosmetiques", pathMatch: "full" },
{path: "updateCosmetique/:id", component: UpdateCosmetiqueComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path : 'rechercheParRayon', component: RechercheParRayonComponent},
{path : 'rechercheParNom', component: RechercheParNomComponent},
{path: "listeRayons", component : ListeRayonsComponent},
{path:"listeOfusers",component:ListeOfusersComponent,canActivate:[CosmetiqueGuard]},
{path:"add-role-for-user/:id",component:AddRoleForUserComponent,canActivate:[CosmetiqueGuard]},
{path:"register",component:RegisterComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
