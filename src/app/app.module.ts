import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CosmetiquesComponent } from './cosmetiques/cosmetiques.component';
import { AddCosmetiqueComponent } from './add-cosmetique/add-cosmetique.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParRayonComponent } from './recherche-par-rayon/recherche-par-rayon.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeRayonsComponent } from './liste-rayons/liste-rayons.component';
import { UpdateRayonComponent } from './update-rayon/update-rayon.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { UpdateCosmetiqueComponent } from './update-cosmetique/update-cosmetique.component';
import { AddRoleForUserComponent } from './add-role-for-user/add-role-for-user.component';
import { ListeOfusersComponent } from './liste-ofusers/liste-ofusers.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    CosmetiquesComponent,
    AddCosmetiqueComponent,
    UpdateCosmetiqueComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParRayonComponent,
    RechercheParNomComponent,
    ListeRayonsComponent,
    UpdateRayonComponent,
    SearchFilterPipe,
    AddRoleForUserComponent,
    ListeOfusersComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
