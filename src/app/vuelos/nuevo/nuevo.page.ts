/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { IniciarusuarioService } from '../../iniciarusuario.service';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ToastController, NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  public registroForm: FormGroup;
  data: any;
  salida: any;
  destino: any;
  aviones: any;
  precio: any;
  asientos: any;
  lugares: any;
  bandera: any;
  idUSUARIO: any;
  emailUSUARIO: any;
  private dateValue: any;
  constructor(public modalCtrl: ModalController,public http: HttpClient,
    public toast: ToastController,public fb: FormBuilder,public storage: Storage,public inicia: IniciarusuarioService) {




    }
    get date(): any {
      return this.dateValue;
    }
    set date(value: any) {
      this.dateValue = value;
    }
  ngOnInit() {
    this.inicia.verificar();
    this.getLugares();
  }
  getLugares(){
    const respuesta= this.inicia.getLugares();
    respuesta.subscribe(
      (res: any) => {
        this.lugares= res;
     },
     (error: any) =>{
      console.log(error);
     }
     );
}
  guardar(){
    this.bandera='';
    if (this.salida===undefined){
       this.bandera='- Salida<br/>';
      }
    if (this.destino===undefined){
       this.bandera+='- Destino<br/>';
      }
    if (this.asientos===undefined){
       this.bandera+='- Asientos<br/>';
      }
    if (this.precio===undefined){
       this.bandera+='- Precio<br/>';
      }
    if (this.dateValue===undefined){
       this.bandera+='- Fecha y horario<br/>';
      }
      if(this.bandera!==''){
        this.presentToast('<u><strong>Complete:</strong></u>  <br/>'+this.bandera,2000,'warning','warning-toast');
      }
      else{
        //aca se guarda
        this.presentToast('Se guardo correctamente. Gracias!'+this.bandera,2000,'checkmark','sucess-toast');
     this.guardarEnBase(this.dateValue,this.salida,this.destino,this.asientos,this.precio);
     this.dateValue=undefined;
     this.salida=undefined;
     this.destino=undefined;
     this.asientos=undefined;
     this.precio=undefined;
     this.bandera='';
      }

  }
  async guardarEnBase(date,salida,destino,asientos,precio){
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
          idPILOTOS: this.idUSUARIO,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          idSALIDAS: salida.idDESTINOS,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          idDESTINOS: destino.idDESTINOS,
          DIA_HORA: date,
          //idAVIONES: this.aviones,
          idAVIONES:1,
          ASIENTOS: asientos,
          PRECIO: precio,
          emailUSUARIO: this.emailUSUARIO,
          destinoDESCRIPCION: destino.DESCRIPCION
         };
        //options 	: any		= { "idNEGOCIOS": '1' };

         (this.http.post('https://www.libreviaje.com/admin/index.php/Api5/addDestino/',
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


  async presentToast(mensaje,duracion,icon,css) {
    const toast = await this.toast.create({
      message: mensaje,
      duration: duracion,
      icon: icon,
      cssClass: css
    });
    toast.present();
  }
}
