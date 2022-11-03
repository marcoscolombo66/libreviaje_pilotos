import { IniciarusuarioService } from '../iniciarusuario.service';
import { Component, OnInit } from '@angular/core';
import {NavParams} from  '@ionic/angular';
import {  ActionSheetController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Clipboard } from '@capacitor/clipboard';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ToastController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-olvido',
  templateUrl: './olvido.page.html',
  styleUrls: ['./olvido.page.scss'],
})
export class OlvidoPage implements OnInit {
  public myForm: FormGroup;

  constructor(public http: HttpClient,
    private actionSheetCtrl: ActionSheetController,public alertController: AlertController,
    public modalCtrl: ModalController,public toast: ToastController,
    public formBuilder: FormBuilder,public inicia: IniciarusuarioService,) {

      this.myForm=this.formBuilder.group({
        usuario:['',Validators.required]
      });

    }
   async recordar(){
      console.log('pp',this.myForm.value.usuario);

        if (!this.myForm.valid) {
        this.presentToast(' ¡Atención! Ha ocurrido un error.<br/>Ingrese los valores requeridos.');
        return false;
      } else {
    //////////////////////////////////RESERVA///////////////////////////////////////////
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

        const options: any		= {
          //idNEGOCIOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          EMAIL: this.myForm.value.usuario,
          // eslint-disable-next-line @typescript-eslint/naming-convention
         };
        //options 	: any		= { "idNEGOCIOS": '1' };

         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/resetPass/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.

        .subscribe(
         (res: any) => {
          this.presentToast(' Se reseteo la contraseña, se enviara mediante email!');
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
        duration: 2000,
        position: 'top'
      });
      toast.present();
    }
  ngOnInit() {
  }

}
