/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */

import { Component, ViewChild,ElementRef} from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { OnInit } from '@angular/core';
import { IniciarusuarioService } from './../iniciarusuario.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { NavParams } from '@ionic/angular';
import { interval} from 'rxjs';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { IonContent } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  @ViewChild(IonContent) ionContent: IonContent;
  data: any[] = [];
  page: number = 1;
  constructor(public http: HttpClient) {

    this.data = [];
  const numbers = interval(5000);
  /*numbers.subscribe(()=>{
   this.loadData();
  });*/
  }

  scrollContent(scroll) {
    if (scroll === 'top') {
      this.ionContent.scrollToTop(300); //300 for animate the scroll effect.
    } else {
      this.ionContent.scrollToBottom(300);  //300 for animate the scroll effect.
    }
  }
  loadData(event = null) {

      this.http
        .get<{ data: any[] }>(`https://reqres.in/api/users?page=${this.page}`)
        .subscribe((resp: { data: any; total_pages: number }) => {
          if (this.page !== resp.total_pages) {
            console.log('resp total pages',resp.total_pages);
            console.log('this pages', this.page);
            this.page++;
          } else {
            console.log('resp total pages',resp.total_pages);
            console.log('this pages', this.page);
            if (event) {event.target.disabled = true;}
          }
          this.data = this.data.concat(resp.data);
          if (event) {event.target.complete();}
          console.log('cantidad de consultas',this.page);
        });

  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ngOnInit() {
  }

}
