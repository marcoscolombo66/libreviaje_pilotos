import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  public registroForm: FormGroup;
  data: any;
  lugares: any;
  constructor(public modalCtrl: ModalController,public http: HttpClient,
    public toast: ToastController,public fb: FormBuilder,public storage: Storage,public inicia: IniciarusuarioService) {
      this.registroForm = this.fb.group({
        salida:['',[Validators.required]],
        destino:['',[Validators.required]],
        fecha:['',[Validators.required]],
        asientos:['',[Validators.required]],
        precio:['',[Validators.required]],
        cantDias:['',[Validators.required]]
      });
    }

  ngOnInit() {
    //this.inicia.verificar();
    this.getLugares();
  }
  getLugares(){
    const respuesta= this.inicia.getLugares();
    respuesta.subscribe(
      (res: any) => {
        this.lugares= res;
     },
     (error: any) =>{
      console.log(error);
     }
     );
}
  guardar(){
    console.log('salida',this.registroForm.value.salida.DESCRIPCION);
    console.log('destino',this.registroForm.value.destino);
  }

}
