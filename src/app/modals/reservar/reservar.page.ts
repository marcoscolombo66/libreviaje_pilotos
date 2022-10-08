import { IniciarusuarioService } from './../../iniciarusuario.service';
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
  selector: 'app-reservar',
  templateUrl: './reservar.page.html',
  styleUrls: ['./reservar.page.scss'],
})
export class ReservarPage implements OnInit {
destino: any;
valor: any;
totalfinal: any;
total: any;
fotodestino: any;
isSubmitted: any;
respuesta: any;
respuesta2: any;
cantidadAsientosq: any;
idpilotosdestinos: any;
idUSUARIO: any;
diaHora: any;
salida: any;
sDefaultAsientos:  string;
usuarioEMAIL: any;
totalfinalReserva: any;
dolar: any;
totalfinalResto: any;
public myForm: FormGroup;
  catchError: any;
  constructor(public navParams: NavParams,public http: HttpClient,
    private actionSheetCtrl: ActionSheetController,public alertController: AlertController,
    public modalCtrl: ModalController,public toast: ToastController,
    public formBuilder: FormBuilder,public inicia: IniciarusuarioService, public navCtrl: NavController) {

this.destino = this.navParams.get('mySubject');
this.total = this.navParams.get('mySubject2');
this.fotodestino = this.navParams.get('mySubject3');
this.cantidadAsientosq = this.navParams.get('mySubject4');
this.idpilotosdestinos = this.navParams.get('mySubject5');
this.diaHora = this.navParams.get('mySubject6');
this.salida = this.navParams.get('mySubject7');
this.totalfinal=this.total;
this.totalfinalReserva=(this.total*1.23) - (this.total);



this.inicia.getDolarBlue().subscribe(data => {
  this.dolar = data.blue.value_buy;
});


this.myForm=this.formBuilder.group({
  asientos:['1',Validators.required],
  totales:['']
});
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

  canDismiss() {
  this.modalCtrl.dismiss();
  }

  totales(event)
  {
this.totalfinal=(this.total)*(event.target.value);
this.totalfinalReserva=(((this.total)*(event.target.value))*1.23) -((this.total)*(event.target.value));
}


 async pagar()
  {
    this.idUSUARIO= await this.inicia.getUser();
this.usuarioEMAIL=this.idUSUARIO['0'].USUARIO;
    this.idUSUARIO=this.idUSUARIO['0'].idUSUARIO;

    if (!this.myForm.valid) {
    this.presentAlert(' ¡Atención! ','Ha ocurrido un error.','Ingrese los valores requeridos.');
    return false;
  } else {
//////////////////////////////////RESERVA///////////////////////////////////////////
// eslint-disable-next-line @typescript-eslint/naming-convention
const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

    //const BUSQUEDA: any=this.registroForm.value.busqueda;

console.log('ok',this.myForm.value);
    const options: any		= {
      //idNEGOCIOS,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ASIENTOS: this.myForm.value.asientos,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      TOTAL: this.totalfinal,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      CBU: '0000003100057180563535',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      DESTINO: this.navParams.get('mySubject'),
      idUSUARIO: this.idUSUARIO,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      idPILOTOS_DESTINOS: this.idpilotosdestinos,
      usuarioEMAIL: this.usuarioEMAIL
     };
    //options 	: any		= { "idNEGOCIOS": '1' };

     (this.http.post('https://www.libreviaje.com/admin/index.php/Api4/addReserva/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      this.respuesta=res;
    },
    (error: any) =>{
     this.presentAlert(' ¡Atención! ','Ha ocurrido un error.','Vuelva a intentarlo');
     console.log(error);
    }
    );

this.presentAlert(' Reserva ',
'Se reservó correctamente.',
'Una vez efectuado el pago del viaje, podrás subir el comprobante mediante la app.<br/><br/>Gracias!');
//////////////////////////////////RESERVA///////////////////////////////////////////

//se debe hacer update de tabla pilotos_destinos restando cantidad de asientos updatePilotosDestinos_post
//////////////////////////////////UPDATE pilotos_destinos/////////////////////////////////////
// eslint-disable-next-line @typescript-eslint/naming-convention


    const options2: any		= {
      //idNEGOCIOS,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      idPILOTOS_DESTINOS: this.idpilotosdestinos,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ASIENTOS: this.myForm.value.asientos
     };
     (this.http.post('https://www.libreviaje.com/admin/index.php/Api4/updatePilotosDestinos/',
    JSON.stringify(options2), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res2: any) => {
      this.respuesta2=res2;
    },
    (error: any) =>{
     this.presentAlert(' ¡Atención! ','Ha ocurrido un error.','Vuelva a intentarlo');
     console.log(error);
    }
    );


//////////////////////////////////UPDATE pilotos_destinos/////////////////////////////////////
this.modalCtrl.dismiss();
this.navCtrl.navigateRoot('/tab3');
    window.open('https://www.mercadopago.com.ar/withdraw#from-section=home','_system','location=yes');
  }


  }
  async presentToast(mensaje) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  async copiarCbu()
  {
    this.totalfinalResto=this.totalfinal;

    //total final resto es total final menos el 23% que seria la comision.

    Clipboard.write({
      // eslint-disable-next-line id-blacklist
      string: '0000003100057180563535',
    });
this.presentToast('CBU copiado en portapapeles<br/><br/>Deberás pagar $'+this.totalfinalReserva*this.dolar+
' pesos Argentinos de reserva.<br/> El resto del pasaje ('+this.totalfinalResto+'USD) se paga una vez que se hace el embarque');
    //Va a ir Link personalizado.

  }

  ngOnInit() {

  }

}
