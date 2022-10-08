import { ReservarPage } from './../modals/reservar/reservar.page';
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
  constructor(
    public fb: FormBuilder, public http: HttpClient,
    private route: ActivatedRoute,public alertController: AlertController,
    private modalCtrl: ModalController,
    public inicia: IniciarusuarioService, public navCtrl: NavController)
  {
    this.registroForm = this.fb.group({

      patente:['',[Validators.required,Validators.minLength(6)]],
      barrios:['',[Validators.required]]
    });



     const numbers = interval(30000);
    numbers.subscribe(()=>{
      this.getViajesDisponibles();
    });

  }

  async presentModal(value,destino,fotodestino,cantAsientos,idpilotosdestinos,diaHora,salida) {

    const modal = await this.modalCtrl.create({
      component: ReservarPage,
      //breakpoints: [0, 0.95],
      //initialBreakpoint: 0.95,
      //handle: true,
      componentProps: {
        mySubject: value,
        mySubject2: destino,
        mySubject3: fotodestino,
        mySubject4: cantAsientos,
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
    /*const numbers = interval(5000);
    numbers.subscribe(()=>{
      this.getViajesDisponibles();
    });*/
  }


  getViajesDisponibles()
  {
    this.ver=false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

    //const BUSQUEDA: any=this.registroForm.value.busqueda;

    const options: any		= {
      //idNEGOCIOS,
      //busqueda: BUSQUEDA
     };
    //options 	: any		= { "idNEGOCIOS": '1' };

     (this.http.post('https://www.libreviaje.com/admin/index.php/Api4/getViajesDisponibles/',
    JSON.stringify(options), headers))


    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      this.viajesDisponibles=res;
      this.ver=true;
      //console.log('viajes disponibles',this.viajesDisponibles);
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
