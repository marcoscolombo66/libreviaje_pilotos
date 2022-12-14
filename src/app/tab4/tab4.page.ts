/* eslint-disable @typescript-eslint/naming-convention */
import { FotoperfilPage } from './../modals/fotoperfil/fotoperfil.page';
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Location } from "@angular/common";
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
  bandera: any;
  // eslint-disable-next-line @typescript-eslint/naming-convention



  constructor(public modalCtrl: ModalController,public http: HttpClient,public menuCtrl: MenuController,
    private location: Location,public toast: ToastController,public fb: FormBuilder,public storage: Storage,public inicia: IniciarusuarioService) {

      this.inicia.verificar();

    this.registroForm = this.fb.group({
      nombre:['',[Validators.required,Validators.minLength(3)]],
      mensaje_bienvenida:['',[Validators.required,Validators.minLength(3)]],
      whatsapp:['',[Validators.required,Validators.minLength(7),Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
    });

   }
   myBackButton(){
    this.location.back();
  }
   closeMenu() {

    this.menuCtrl.close();
  }
   async ngOnInit() {
    this.inicia.verificar();
    this.datosUsuario=  await this.inicia.getUser();

    this.registroForm.controls.nombre.setValue(this.datosUsuario[0].NOMBRE_APELLIDO);
    //this.registroForm.controls.apellido.setValue(this.datosUsuario[0].APELLIDO);
    this.registroForm.controls.whatsapp.setValue(this.datosUsuario[0].TELEFONO);
    this.registroForm.controls.mensaje_bienvenida.setValue(this.datosUsuario[0].MENSAJE_BIENVENIDA);

    this.FOTO_PERFIL= await this.datosUsuario[0].FOTO_PERFIL;
      }

      async guardar()
      {
        this.bandera='';
        if (this.registroForm.value.nombre==='' || this.registroForm.value.nombre===undefined || this.registroForm.value.nombre===null){
         this.bandera='- Nombre<br/>';
        }
        if (this.registroForm.value.whatsapp==='' || this.registroForm.value.whatsapp===undefined
        || this.registroForm.value.whatsapp===null){
        this.bandera='- Whatsapp<br/>';
       }
       if (this.registroForm.value.mensaje_bienvenida==='' ||
       this.registroForm.value.mensaje_bienvenida===undefined || this.registroForm.value.mensaje_bienvenida===null){
        this.bandera='- Mensaje de bienvenida para el chat<br/>';
       }
        /*
        console.log('dato',this.registroForm.value.nombre);
console.log('dato',this.registroForm.value.apellido);
console.log('dato',this.registroForm.value.whatsapp);
        */
        this.idUSUARIO= await this.inicia.getUser();
        this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;
        //console.log('datopi',this.idUSUARIO);
        if(this.bandera!==''){
          this.presentToast('<u><strong>Complete:</strong></u>  <br/>'+this.bandera,2000,'warning','warning-toast');
        }
        else{
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
          MENSAJE_BIENVENIDA: this.registroForm.value.mensaje_bienvenida,
         idPILOTOS: this.idUSUARIO
         };
        //options 	: any		= { "idNEGOCIOS": '1' };
         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/updateuser/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.
        .subscribe(
         (res: any) => {
          this.presentToast(' Se guardaron los cambios!',2000,'checkmark','sucess-toast');
        },
        (error: any) =>{
          if(this.bandera!==''){
          this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo',2000,'warning','warning-toast');
         console.log(error);
          }
        }
        );
      }
      }


async presentToast(mensaje,duracion,icon,css) {
  const toast = await this.toast.create({
    message: mensaje,
    duration: duracion,
    icon,
    cssClass: css,
    position: 'top'
  });
  toast.present();
}
 // eslint-disable-next-line @typescript-eslint/naming-convention
 async subirFotoPerfil() {
  this.idUSUARIO= await this.inicia.getUser();
  this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;
  const modal = await this.modalCtrl.create({
    component: FotoperfilPage,
    //breakpoints: [0, 0.99],
    //initialBreakpoint: 0.99,
    //handle: true,
    componentProps: {
      mySubject:this.idUSUARIO
    },
    animated: true,
    canDismiss: true,
    keyboardClose: true,
    //showBackdrop: true,
  });
//Get the data returned from the Modal and add to global variable
modal.onDidDismiss().then((modalData) => {
  console.log(modalData);
    if(modalData.role!=='backdrop' && modalData.data!==undefined){this.FOTO_PERFIL=modalData.data;}

});
  await modal.present();
}
}
