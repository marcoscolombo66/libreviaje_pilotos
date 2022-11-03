/* eslint-disable @typescript-eslint/naming-convention */
import { IniciarusuarioService } from '../../iniciarusuario.service';
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
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
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
date: any;
salida: any;
precio: any;
avion: any;
aviones: any;
bandera: any;

idavion: any ;
txtavion: any ;
txtavionMod: any ;

emailUSUARIO: any;

public myForm: FormGroup;
  catchError: any;
  constructor(public navParams: NavParams,public http: HttpClient,
    private actionSheetCtrl: ActionSheetController,public alertController: AlertController,
    public modalCtrl: ModalController,public toast: ToastController,
    public formBuilder: FormBuilder,public inicia: IniciarusuarioService, public navCtrl: NavController) {

this.destino = this.navParams.get('mySubject');
this.precio = this.navParams.get('mySubject2');
this.fotodestino = this.navParams.get('mySubject3');
this.cantidadAsientosq = this.navParams.get('mySubject8'); //asientos origen

this.idpilotosdestinos = this.navParams.get('mySubject5');
this.diaHora = this.navParams.get('mySubject6');
this.salida = this.navParams.get('mySubject7');

this.idavion=(this.navParams.get('mySubject9'));
this.txtavion=(this.navParams.get('mySubject10'));
this.txtavionMod=(this.navParams.get('mySubject11'));


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

  canDismiss() {
  this.modalCtrl.dismiss();
  }
  getAviones(){
    const respuesta= this.inicia.getAviones();
    respuesta.subscribe(
      (res: any) => {
        this.aviones= res;
     },
     (error: any) =>{
      console.log(error);
     }
     );
  }
  guardar(){
    this.bandera='';
    if (this.date===undefined || this.date===null){
      this.bandera+='- Día y horario<br/>';
     }
      if (this.avion===undefined || this.avion===null){
        this.bandera+='- Avión<br/>';
       }
      if (this.cantidadAsientosq===undefined || this.cantidadAsientosq===null){
        this.bandera+='- Asientos<br/>';
       }
      if (this.precio===undefined || this.precio===null){
       this.bandera+='- Precio<br/>';
       console.log('precio',this.precio);
      }
      if(this.bandera!=='' || this.date===null){
        this.presentToast('<u><strong>Complete:</strong></u>  <br/>'+this.bandera,2000,'warning','warning-toast');
      }
      else{
        //aca se guarda
        this.presentToast('Se guardo correctamente. Gracias!',2000,'checkmark','sucess-toast');
        console.log('precio',this.precio);
        this.guardarEnBase(this.idpilotosdestinos,this.date,this.salida,this.destino,this.cantidadAsientosq,this.precio,this.avion);

     this.bandera='';
      }

  }
  async guardarEnBase(idpilotosdestinos,date,salida,destino,asientos,precio,avion){
    console.log(destino);
    //destino.DESCRIPCION
    this.idUSUARIO= await this.inicia.getUser();
        this.emailUSUARIO=this.idUSUARIO['0'].EMAIL;
        this.idUSUARIO=this.idUSUARIO['0'].idPILOTOS;

    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});

        const options: any		= {
          //idNEGOCIOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          idPILOTOS_DESTINOS: idpilotosdestinos,
          DIA_HORA: date,
          idAVIONES: avion.idAVIONES,
          ASIENTOS: asientos,
          PRECIO: precio,
          emailUSUARIO: this.emailUSUARIO,
          destinoDESCRIPCION: destino
         };
        //options 	: any		= { "idNEGOCIOS": '1' };

         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/updateDestino/',
        JSON.stringify(options), headers))
        //probar crear otra consulta q devuelva valores location y stopover en api php.

        .subscribe(
         (res: any) => {
          this.presentToast('Se guardo correctamente. Gracias!'+this.bandera,2000,'checkmark','sucess-toast');
        },
        (error: any) =>{
          this.presentToast('Ha ocurrido un error! <br/>',2000,'warning','warning-toast');
         console.log(error);
        }
        );

      }
  ngOnInit() {
    this.getAviones();


  }

}
