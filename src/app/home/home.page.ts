import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Location } from "@angular/common";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public registroForm: FormGroup;
  idUSUARIO: any;
  constructor(public modalCtrl: ModalController,public http: HttpClient,
    private location: Location,public toast: ToastController,public fb: FormBuilder,public storage: Storage,
    public inicia: IniciarusuarioService) {
      this.registroForm = this.fb.group({
        tipoConsulta:['',[Validators.required,Validators.minLength(3)]],
        consulta:['',[Validators.required,Validators.minLength(3)]]
      });
}
myBackButton(){
  this.location.back();
}
async guardar()
      {

        this.idUSUARIO= await this.inicia.getUser();
        this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;

        if (!this.registroForm.valid) {

        this.presentToast('¡Atención! Ha ocurrido un error.<br/>Ingrese los valores requeridos.',2000,'warning','warning-toast');

        return false;
      } else {
    //////////////////////////////////RESERVA///////////////////////////////////////////
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

        const options: any		= {
          //idNEGOCIOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          TIPO_CONSULTA: this.registroForm.value.tipoConsulta,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          CONSULTA: this.registroForm.value.consulta,
          // eslint-disable-next-line @typescript-eslint/naming-convention
         idPILOTOS: this.idUSUARIO
         };
        //options 	: any		= { "idNEGOCIOS": '1' };

         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/addConsulta/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.

        .subscribe(
         (res: any) => {
          this.presentToast('Se envio consulta, nos comunicaremos a la brevedad!',2000,'checkmark','sucess-toast');
                  },
        (error: any) =>{

         this.presentToast('¡Atención! Ha ocurrido un error.<br/>Vuelva a intentarlo',2000,'warning','warning-toast');
         console.log(error);
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

 ngOnInit() {
      this.inicia.verificar();
}
}
