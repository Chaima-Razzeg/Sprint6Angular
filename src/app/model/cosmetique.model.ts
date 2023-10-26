import { Image } from './Image.model';
import { Rayon } from "./rayon.model";

export class Cosmetique {
    idCosmetique! : number;
    nomCosmetique? : string;
    prixCosmetique? : number;
    dateCreation? : Date;
    rayon! : Rayon;
    image! : Image;
    imageStr!:string
    images!: Image[];

    }