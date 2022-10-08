import { FotoperfilPage } from './../modals/fotoperfil/fotoperfil.page';
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public registroForm: FormGroup;
  data: any;
  datosUsuario: any;
  idUSUARIO: any;
  okok: any;
  usuario: any;
  finalModalData: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  FOTO_PERFIL: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention



  constructor(public modalCtrl: ModalController,public http: HttpClient,
    public toast: ToastController,public fb: FormBuilder,public storage: Storage,public inicia: IniciarusuarioService) {



    this.registroForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      whatsapp:['',[Validators.required,Validators.minLength(10),Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
    });

   }

   async ngOnInit() {
    this.inicia.verificar();
    this.datosUsuario=  await this.inicia.getUser();

    this.registroForm.controls.nombre.setValue(this.datosUsuario[0].NOMBRE_APELLIDO);
    //this.registroForm.controls.apellido.setValue(this.datosUsuario[0].APELLIDO);
    this.registroForm.controls.whatsapp.setValue(this.datosUsuario[0].TELEFONO);
    this.FOTO_PERFIL= await this.datosUsuario[0].FOTO_PERFIL;
      }

      async guardar()
      {
        /*
        console.log('dato',this.registroForm.value.nombre);
console.log('dato',this.registroForm.value.apellido);
console.log('dato',this.registroForm.value.whatsapp);
        */
        this.idUSUARIO= await this.inicia.getUser();
        this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;

        if (!this.registroForm.valid) {
        this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Ingrese los valores requeridos.');
        return false;
      } else {
    //////////////////////////////////RESERVA///////////////////////////////////////////
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

        const options: any		= {
          //idNEGOCIOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          NOMBRE_APELLIDO: this.registroForm.value.nombre,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          TELEFONO: this.registroForm.value.whatsapp,
          // eslint-disable-next-line @typescript-eslint/naming-convention
         idPILOTOS: this.idUSUARIO
         };
        //options 	: any		= { "idNEGOCIOS": '1' };

         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/updateuser/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.

        .subscribe(
         (res: any) => {
          this.presentToast(' Se guardaron los cambios!');
        },
        (error: any) =>{
         this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo');
         console.log(error);
        }
        );
      }
      }

async presentToast(mensaje) {
  const toast = await this.toast.create({
    message: mensaje,
    duration: 2000
  });
  toast.present();
}

 // eslint-disable-next-line @typescript-eslint/naming-convention
 async subirFotoPerfil() {
  this.idUSUARIO= await this.inicia.getUser();
  this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;
  const modal = await this.modalCtrl.create({
    component: FotoperfilPage,
    breakpoints: [0, 0.99],
    initialBreakpoint: 0.99,
    handle: true,
    componentProps: {
      mySubject:this.idUSUARIO
    },
    animated: true,
    canDismiss: true,
    //showBackdrop: true,
  });
//Get the data returned from the Modal and add to global variable
modal.onDidDismiss().then((modalData) => {
  console.log(modalData);
    if(modalData.role!=='backdrop'){this.FOTO_PERFIL=modalData.data;}

});
  await modal.present();
}
}
