import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
/* eslint-disable @typescript-eslint/naming-convention */
import { ImagesproviderService } from './../../imagesprovider.service';
import { IniciarusuarioService } from './../../iniciarusuario.service';
import { ToastController, NavController,NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-fotoperfil',
  templateUrl: './fotoperfil.page.html',
  styleUrls: ['./fotoperfil.page.scss'],
})
export class FotoperfilPage implements OnInit {
  image: string;
  isSelected=	false;
  idusuario: string;
  SUFFIX: any;
  idPILOTOS_RESERVAS: any;
  loading: any;
  constructor(public navCtrl: NavController,
    public ALERT: ToastController,
    public IMAGES: ImagesproviderService,public inicia: IniciarusuarioService,public loadingController: LoadingController,
    public storage: Storage, public navParams: NavParams, public modalCtrl: ModalController) {
      this.idPILOTOS_RESERVAS = this.navParams.get('mySubject'); //idUSUARIO
     }
     async presentLoading(mensaje) {
      this.loading = await this.loadingController.create({
        message: mensaje,
        duration: 4500
      });
      await this.loading.present();

      //const { role, data } = await loading.onDidDismiss();

    }
     selectFileToUpload(event): void
     {
       // eslint-disable-next-line no-underscore-dangle
       this.IMAGES
       .handleImageSelection(event)
       .subscribe((res) =>
        {

           // Retrieve the file type from the base64 data URI string
           this.SUFFIX 			= res.split(':')[1].split('/')[1].split(';')[0];


           // Do we have correct file type?
           if(this.IMAGES.isCorrectFileType(this.SUFFIX))
           {

              // Hide the file input field, display the image in the component template
              // and display an upload button
              this.isSelected 	= true;
              this.image 			= res;
           }

           // If we don't alert the user
           else
           {
              this.displayAlert ('Tenes que subir una imágen que tenga los siguientes formatos: jpg,'+
               'gif or png',2000,'warning','warning-toast');
            }
        },
        (error) =>
        {
           console.dir(error);
           this.displayAlert (error.message,2000,'warning','warning-toast');
                  });
     }


     uploadFile(): void
     {
      this.presentLoading('Se esta guardando su foto de perfil<br/><br/>Gracias!');
        this.IMAGES
        //.uploadImageSelection(this.getUsuario(),
        //.uploadImageSelection(this.idusuario,
        .uploadImageSelection2(this.idPILOTOS_RESERVAS,
                              this.image,
                              this.SUFFIX)
        .subscribe((res) =>
        {
          this.loading.dismiss();

           this.displayAlert (res.message,2000,'checkmark','sucess-toast');
           this.modalCtrl.dismiss(res.archivoImagen);
        },
        (error: any) =>
        {
           console.dir(error);

           this.displayAlert (error.message,2000,'warning','warning-toast');
        });
     }

   getUsuario()
   {
    this.storage.get('datos_piloto').then(data=>
      {
        if(data)
        {
          this.idusuario= data['0'].idPILOTOS;
      }

   });
   return this.idusuario;
   }



     /**
      * @public
      * @method displayAlert
      * @param message  {string}  The message to be displayed to the user
      * @description    			Use the Ionic AlertController API to provide user feedback
      * @return {none}
      */



    async displayAlert(mensaje,duracion,icon,css) {
      const toast = await this.ALERT.create({
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
     ngOnInit(){}

   }
