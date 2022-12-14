/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public registroForm: FormGroup;
   nuevo: any;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(public storage: Storage,
    public fb: FormBuilder,
    public alertController: AlertController,
    public router: Router,private http: HttpClient)
    {
      this.registroForm = this.fb.group({
        usuario:['',[Validators.required,Validators.minLength(5),Validators.email]],
        nombre:['',[Validators.required,Validators.minLength(3)]],
        //apellido:['',[Validators.required,Validators.minLength(3)]],
        password:['',[Validators.required,Validators.minLength(6)]],
        whatsapp:['',[Validators.required,Validators.minLength(10),Validators.required,Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
      });
     }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
registro()
  {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    const options: any		= {
      //idNEGOCIOS,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      EMAIL: this.registroForm.value.usuario,
      PASSWORD: this.registroForm.value.password,
      //NOMBRE EMPRESA
      NOMBRE_APELLIDO: this.registroForm.value.nombre,
      //NOMBRE_APELLIDO: this.registroForm.value.nombre+' '+this.registroForm.value.apellido,
      TELEFONO: this.registroForm.value.whatsapp
     };
    //options 	: any		= { "idNEGOCIOS": '1' };
     (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/addUsuario/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      console.log('registro',res);
      this.presentAlert2();
    },
    (error: any) =>{
     //console.log('error',error);
     //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
     console.log(error);
     this.presentAlert();
     //this.navCtrl.navigateRoot('/tab3');
    }
    );
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
loguearme(){
      this.router.navigate(['/login']);
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async presentAlert() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Ya existe este piloto en la base de datos.',
        message: 'Error',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async presentAlert2() {
      const alert = await this.alertController.create({
        header: 'Alerta',
        subHeader: 'Se registro correctamente',
        message: 'Ya puede iniciar sesion',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ngOnInit()
  {

  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
