import { Injectable } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class IniciarusuarioService {
  dolar: any;
  constructor(public storage: Storage, public navCtrl: NavController,public httpClient: HttpClient) {}

   verificar(){

    this.storage.get('datos_piloto').then(data=>
      {
        if(data)
        {
          //console.log('Login','activo');
        }
        else
        {console.log('Login','Inactivo');
        return this.navCtrl.navigateRoot('/login');
      }
});

   }


   public getUser(){
    return new Promise((resolve, reject) => {
      this.storage.get('datos_piloto').then(resp => {
        resolve(resp);
      }, err =>{
        reject(err.json());
        console.log('error',err.json);
      });
    });
  }
  public getDolarBlue(): Observable<any>{
     //this.authService.login(form.value.usuario, form.value.password);
 //this.https.get(this.urlVar);
 return this.httpClient.get('https://api.bluelytics.com.ar/v2/latest');
  }

  }

