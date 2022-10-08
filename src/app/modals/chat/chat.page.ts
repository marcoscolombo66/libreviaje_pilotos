/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from './../../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
import { interval} from 'rxjs';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  idPILOTOS_RESERVAS: any;
  idUSUARIO: any;
  idPILOTOS: any;
  EMAIL_PILOTO: any;
  NOMBRE_PASAJERO: any;
  isModalOpen = false;
  // eslint-disable-next-line @typescript-eslint/naming-convention

  nomostrar: any;
  chats: any;


  public myForm: FormGroup;
  constructor(public http: HttpClient, public navParams: NavParams,public modalCtrl: ModalController,
    public inicia: IniciarusuarioService, public formBuilder: FormBuilder)
    {
      this.myForm=this.formBuilder.group({
        asientos:['1',Validators.required],
        totales:['']
      });
      this.nomostrar=true;
     const numbers = interval(150000);
    numbers.subscribe(()=>{
     this.getChatReservas();
    });

    this.myForm=this.formBuilder.group({
      mensaje:['',Validators.required]
    });

    }
    cancel() {
      return this.modalCtrl.dismiss(null, 'cancel');
    }
  ngOnInit() {
    this.getChatReservas();
  }
   //////////////////////////////////////////////////////////////////////////////////////////////////////////////
   async enviaMensaje()
   {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    this.idPILOTOS_RESERVAS = this.navParams.get('mySubject');
    this.idPILOTOS = this.navParams.get('mySubject2');
    this.idUSUARIO = this.navParams.get('mySubject3');
    this.EMAIL_PILOTO = this.navParams.get('mySubject4');
    this.NOMBRE_PASAJERO = this.navParams.get('mySubject5');

    const options: any		= {
      //idNEGOCIOS,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      idUSUARIO: this.idUSUARIO,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      MENSAJE: this.myForm.value.mensaje,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      TIPO_USUARIO: 'PASAJERO',
      // eslint-disable-next-line @typescript-eslint/naming-convention
      idPILOTOS_RESERVAS: this.idPILOTOS_RESERVAS,
      idPILOTOS: this.idPILOTOS,
      EMAIL_PILOTO: this.EMAIL_PILOTO,
      NOMBRE_PASAJERO: this.NOMBRE_PASAJERO,
     };
    //options 	: any		= { "idNEGOCIOS": '1' };
     (this.http.post('https://www.libreviaje.com/admin/index.php/Api4/addMensajeChat/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.
    .subscribe(
     (res: any) => {
      //this.chats=res;
      //this.nomostrar=true;
      this.myForm=this.formBuilder.group({
        mensaje:['',Validators.required]
      });
      this.getChatReservas();

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
   getChatReservas()
  {
    this.nomostrar=false;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
    this.idPILOTOS_RESERVAS = this.navParams.get('mySubject');
    const options: any		= {
      //idNEGOCIOS,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      idPILOTOS_RESERVAS: this.idPILOTOS_RESERVAS
     };
    //options 	: any		= { "idNEGOCIOS": '1' };
     (this.http.post('https://www.libreviaje.com/admin/index.php/Api4/getChatReservas/',
    JSON.stringify(options), headers))
    //probar crear otra consulta q devuelva valores location y stopover en api php.

    .subscribe(
     (res: any) => {
      this.chats=res;
      this.nomostrar=true;
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
