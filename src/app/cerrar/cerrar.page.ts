import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { Location } from "@angular/common";
@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.page.html',
  styleUrls: ['./cerrar.page.scss'],
})
export class CerrarPage implements OnInit {

  constructor(private location: Location,public storage: Storage,public inicia: IniciarusuarioService) {}
  logout(){
    //this.storage.remove('token');
    this.storage.remove('datos_piloto');
    this.inicia.verificar();
   }
   myBackButton(){
    this.location.back();
  }
  async ngOnInit() {
    await this.storage.create();
  }

}
