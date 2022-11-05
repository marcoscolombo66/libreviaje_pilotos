/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { ToastController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  okok: any;
  isLoggedIn = false;
  token: any;
  idConductor: any;
  constructor(public toastController: ToastController,
    public alertController: AlertController,
    public router: Router,
    private http: HttpClient,
    private modalController: ModalController,
    private navCtrl: NavController,public route: ActivatedRoute, public Str: Storage
    ) {
  }
  login3(form: NgForm){
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    const EMAIL: any = form.value.usuario;
    const PASSWORD: any = form.value.password;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const options: any		= {EMAIL,PASSWORD};
    //options 	: any		= { "idNEGOCIOS": '1' };
    this.okok=(this.http.post('https://www.libreviaje.com/admin/index.php/Api5/iniciarSesion/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.
    .subscribe(
      (res: any) => {
      this.okok=res;
      //
      this.Str.set('datos_piloto', res)
      .then(
        (data) =>
        {
          //this.loginExitoso();
          //this.getNotificaciones(data['0'].idCONDUCTORES);
       },
        error => console.error('Error storing item', error),
        );
        this.navCtrl.navigateRoot('/tab1');
       this.isLoggedIn = true;
       return this.token;
     },
     (error: any) =>{
       this.presentAlert();
      console.log('error',error);
     }
     );
    }
  registrarme(){
    this.router.navigate(['/registro']);
  }
  async loginExitoso() {
    const result: any = await this.Str.get('datos_piloto');
    const toast = await this.toastController.create({
      message: 'Hola '+result[0].NOMBRE_APELLIDO+'!',
      duration: 2000,
    position: 'top',
    //showCloseButton: true,
    //closeButtonText:"Cerrar",
    });
    toast.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario y/o contraseña incorrectos',
      message: 'Intente nuevamente',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
  async ngOnInit() {
    await this.Str.create();
    this.Str.get('datos_piloto')
    .then((data)=>{
      if(data){
        this.router.navigate(['/tab1']);
      }
    });
  }
}
