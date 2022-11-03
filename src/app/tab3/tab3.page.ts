import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { interval} from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ComprobantePage } from './../modals/comprobante/comprobante.page';
import { ChatPage } from './../modals/chat/chat.page';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  canDismiss = false;
  nomostrar: any;
  reservas: any;
  idUSUARIO: any;
  constructor(public inicia: IniciarusuarioService,public http: HttpClient, public modalCtrl: ModalController)
  {
this.nomostrar=true;
const numbers = interval(20000);
    numbers.subscribe(()=>{
      this.getReservasDisponibles();
    });
   }

  ngOnInit() {
    this.inicia.verificar();
   this.getReservasDisponibles();
  }

  abrirEnMapa()
  {

  }

  voyEnCamino(){}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async subirComprobante(idPILOTOS_RESERVAS) {

    const modal = await this.modalCtrl.create({
      component: ComprobantePage,
      //breakpoints: [0, 0.99],
      //initialBreakpoint: 0.99,
      //handle: true,
      componentProps: {
        mySubject: idPILOTOS_RESERVAS
      },
      animated: true,
      canDismiss: true,
      //showBackdrop: true,
    });
    await modal.present();
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// eslint-disable-next-line @typescript-eslint/naming-convention
async abrirChat(idPILOTOS_RESERVAS,idPILOTOS,idUSUARIO,EMAIL_PASAJERO,NOMBRE_PILOTO) {

  const modal = await this.modalCtrl.create({
    component: ChatPage,
    //breakpoints: [0, 0.99],
    //initialBreakpoint: 0.99,
    //handle: true,
    componentProps: {
      mySubject: idPILOTOS_RESERVAS,
      mySubject2: idPILOTOS,
      mySubject3: idUSUARIO,
      mySubject4: EMAIL_PASAJERO,
      mySubject5: NOMBRE_PILOTO,
    },
    animated: true,
    canDismiss: true,
    keyboardClose: true,
  });
  await modal.present();
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async getReservasDisponibles()
  {
    this.nomostrar=false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

    this.idUSUARIO= await this.inicia.getUser();
        this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;

    const options: any		= {
      //idNEGOCIOS,
      idPILOTOS: this.idUSUARIO
     };
    //options 	: any		= { "idNEGOCIOS": '1' };

     (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/getReservasDisponibles/',
    JSON.stringify(options), headers))


    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      this.reservas=res;
      this.nomostrar=true;
      //console.log('reservas',this.reservas);
    },
    (error: any) =>{
     //console.log('error',error);
     //this.presentAlert(' ¡Atención! ','Este vehiculo no esta registrado en el barrio.','Se recomienda llamar al 101');
     this.nomostrar=false;
     console.log(error);
     //this.navCtrl.navigateRoot('/tab3');
    }
    );
  }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
