import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-cerrar',
  templateUrl: './cerrar.page.html',
  styleUrls: ['./cerrar.page.scss'],
})
export class CerrarPage implements OnInit {

  constructor(public storage: Storage,public inicia: IniciarusuarioService) {}
  logout(){
    //this.storage.remove('token');
    this.storage.remove('datos_piloto');
    this.inicia.verificar();
   }
  async ngOnInit() {
    await this.storage.create();
  }

}
