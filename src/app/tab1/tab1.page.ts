/* eslint-disable @typescript-eslint/naming-convention */
import { EditarPage } from '../modals/editar/editar.page';
import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { interval} from 'rxjs';
import { ToastController, NavController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Location } from "@angular/common";
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {


  okok: any;
  ver= false;
  nover=false;

  distancia: any;

  okok2: any;
  registroForm: FormGroup;
  viajesDisponibles: any;
  barrios: any;
  choice: any;
  choice2: any;
  diaHora: any;
  salida: any;
  valor: any;
  lugar: any;

  idUSUARIO: any;
  FECHA_HORA: any;

  showBoton: any;
  constructor(
    private location: Location,public fb: FormBuilder, public http: HttpClient,public Str: Storage,
    private route: ActivatedRoute,public alertController: AlertController,
    private modalCtrl: ModalController,public menuCtrl: MenuController,
    public inicia: IniciarusuarioService, public navCtrl: NavController)
  {




     const numbers = interval(30000);
    numbers.subscribe(()=>{
      this.getViajesDisponibles();
    });

  }
  closeMenu() {
    this.getViajesDisponibles();
    this.menuCtrl.close();
  }
  async presentModal(value,destino,fotodestino,cantAsientos,cantAsientosOrigen,
    idpilotosdestinos,diaHora,salida,idaviones,txtaviones,txtavionesMod) {

    const modal = await this.modalCtrl.create({
      component: EditarPage,
      //breakpoints: [0, 0.95],
      //initialBreakpoint: 0.95,
      //handle: true,
      componentProps: {
        mySubject: value,
        mySubject2: destino,
        mySubject3: fotodestino,
        mySubject4: cantAsientos,
        mySubject8: cantAsientosOrigen,
        mySubject9: idaviones,
        mySubject10: txtaviones,
        mySubject11: txtavionesMod,
        mySubject5: idpilotosdestinos,
        mySubject6: diaHora,
        mySubject7: salida
      },
      animated: true,
      canDismiss: true,
      keyboardClose: true,
      //showBackdrop: true,
    });
    await modal.present();
  }
  ngOnInit() {

    this.inicia.verificar();
    this.getViajesDisponibles();

  }
  myBackButton(){
    this.location.back();
  }
   padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }

   formatDate(date) {
    return (
      [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        this.padTo2Digits(date.getHours()),
        this.padTo2Digits(date.getMinutes()),
        this.padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }
  async getViajesDisponibles()
  {
    this.ver=false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

    //const BUSQUEDA: any=this.registroForm.value.busqueda;

    this.idUSUARIO= await this.inicia.getUser();
    this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;
    const options: any		= { idPILOTOS: this.idUSUARIO };

     (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/getViajesDisponibles/',
    JSON.stringify(options), headers))


    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {

      if (!res) {
        this.ver=false;
    } else {
        this.viajesDisponibles = res;
        this.ver=true;
        // Aquí solo asigna el valor llegado a tu variable declarada
        //this.okok = res[0].DIA_HORA;
        this.okok = this.formatDate(new Date());
       /* if (this.okok >fechauno){
          this.showBoton=false;
        }
        else{
          this.showBoton=true;
        }*/
        //console.log('fecha actual', fechauno );
        //console.log('fecha base', this.okok );
    }
      },
    (error: any) =>{
     //console.log('error',error);
     //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
     this.ver=false;
     console.log(error);
    }
    );
  }

  async presentAlert(encabezado,subtitulo,mensaje) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: encabezado,
      subHeader: subtitulo,
      message: mensaje,
      buttons: ['Aceptar']
    });

    await alert.present();

   const { role } = await alert.onDidDismiss();
  }
  reservaViaje(monto,desde,hasta)
  {
   this.presentAlert('¡Buen Viaje!',
   'Realizaste la reserva para viajar desde'+desde+' hasta '+hasta+'',
   'Debes realizar el pago de $'+monto+' mediante Mercadopago al siguiente alias:<br/>'+
   '<strong>marcos.colombo</strong> <br/><br/>Una vez realizado el pago, deberás enviar comprobante desde la app');
  }
}
