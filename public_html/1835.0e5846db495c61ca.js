"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1835],{1835:(j,x,c)=>{c.r(x),c.d(x,{Tab1PageModule:()=>v});var m=c(9808),f=c(4182),r=c(5649),b=c(9800),y=c(655),p=c(9592),T=c(520),O=c(9825),e=c(2096),I=c(7574);function P(o,g){if(1&o){const n=e.EpF();e.TgZ(0,"ion-slide")(1,"ion-card",5),e._UZ(2,"img",6),e.TgZ(3,"ion-card-header")(4,"ion-card-title",7),e._uU(5),e.qZA(),e.TgZ(6,"ion-card-title",8),e._UZ(7,"ion-icon",9)(8,"ion-icon",9)(9,"ion-icon",9)(10,"ion-icon",9),e.qZA(),e.TgZ(11,"ion-card-subtitle"),e._UZ(12,"ion-icon",10),e._uU(13),e.qZA(),e.TgZ(14,"ion-card-subtitle"),e._UZ(15,"ion-icon",11),e._uU(16),e.qZA(),e.TgZ(17,"ion-card-subtitle"),e._UZ(18,"ion-icon",12),e._uU(19),e.ALo(20,"date"),e.ALo(21,"date"),e.ALo(22,"date"),e.ALo(23,"date"),e.qZA()(),e._UZ(24,"ion-card-content",13),e.TgZ(25,"ion-card-content")(26,"ion-button",14),e.NdJ("click",function(){const l=e.CHM(n).$implicit;return e.oxw(2).presentModal(l.DESTINO,l.PRECIO,l.FOTO_DESTINO,l.ASIENTOS,l.idPILOTOS_DESTINOS,l.DIA_HORA,l.SALIDA)}),e._uU(27,"VER"),e.qZA()()()()}if(2&o){const n=g.$implicit;e.xp6(2),e.MGl("src","https://libreviaje.com/admin/assets/uploads/files/",n.FOTO_PERFIL,"",e.LSH),e.xp6(3),e.Oqu(n.NOMBRE_APELLIDO),e.xp6(8),e.hij("\xa0 ",n.SALIDA,""),e.xp6(3),e.hij("\xa0 ",n.DESTINO,""),e.xp6(3),e.HOy("\xa0 ",e.xi3(20,8,n.DIA_HORA,"dd")," de ",e.xi3(21,11,n.DIA_HORA,"MMM")," de ",e.xi3(22,14,n.DIA_HORA,"yyyy")," - ",e.xi3(23,17,n.DIA_HORA,"HH:mm"),"hs. ")}}const Z=function(){return{delay:2500}},a=function(o){return{slidesPerView:1,autoplay:o}};function t(o,g){if(1&o&&(e.TgZ(0,"ion-slides",3),e.YNc(1,P,28,20,"ion-slide",4),e.qZA()),2&o){const n=e.oxw();e.Q6J("options",e.VKq(3,a,e.DdM(2,Z))),e.xp6(1),e.Q6J("ngForOf",n.viajesDisponibles)}}const i=[{path:"",component:(()=>{class o{constructor(n,d,h,l,A,M,D){this.fb=n,this.http=d,this.route=h,this.alertController=l,this.modalCtrl=A,this.inicia=M,this.navCtrl=D,this.ver=!1,this.nover=!1,this.registroForm=this.fb.group({patente:["",[f.kI.required,f.kI.minLength(6)]],barrios:["",[f.kI.required]]}),(0,O.F)(3e4).subscribe(()=>{this.getViajesDisponibles()})}presentModal(n,d,h,l,A,M,D){return(0,y.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({component:p.W,componentProps:{mySubject:n,mySubject2:d,mySubject3:h,mySubject4:l,mySubject5:A,mySubject6:M,mySubject7:D},animated:!0,canDismiss:!0,keyboardClose:!0})).present()})}ngOnInit(){this.inicia.verificar(),this.getViajesDisponibles()}getViajesDisponibles(){this.ver=!1;const n=new T.WM({"Content-Type":"application/octet-stream"});this.http.post("https://www.libreviaje.com/admin/index.php/Api4/getViajesDisponibles/",JSON.stringify({}),n).subscribe(h=>{this.viajesDisponibles=h,this.ver=!0},h=>{this.ver=!1,console.log(h)})}presentAlert(n,d,h){return(0,y.mG)(this,void 0,void 0,function*(){const l=yield this.alertController.create({cssClass:"my-custom-class",header:n,subHeader:d,message:h,buttons:["Aceptar"]});yield l.present(),yield l.onDidDismiss()})}reservaViaje(n,d,h){this.presentAlert("\xa1Buen Viaje!","Realizaste la reserva para viajar desde"+d+" hasta "+h,"Debes realizar el pago de $"+n+" mediante Mercadopago al siguiente alias:<br/><strong>marcos.colombo</strong> <br/><br/>Una vez realizado el pago, deber\xe1s enviar comprobante desde la app")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(f.qu),e.Y36(T.eN),e.Y36(b.gz),e.Y36(r.Br),e.Y36(r.IN),e.Y36(I.o),e.Y36(r.SH))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tab1"]],decls:8,vars:1,consts:[["slot","start"],["src","https://libreviaje.com/images/logo_top_new.png",2,"padding-top","5px","padding-bottom","2px","width","20%","height","20%","max-width","87px","max-height","43px"],[3,"options",4,"ngIf"],[3,"options"],[4,"ngFor","ngForOf"],[1,"ionCard"],[1,"avatar",3,"src"],["color","primary"],[1,"estrellita"],["name","star-sharp"],["name","locate"],["name","airplane-sharp"],["name","calendar-outline"],[1,"ion-card-content-class"],["shape","round","fill","outline",1,"botones",3,"click"]],template:function(n,d){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e._uU(4," \xa0 "),e._UZ(5,"img",1),e.qZA()(),e.TgZ(6,"ion-content"),e.YNc(7,t,2,5,"ion-slides",2),e.qZA()),2&n&&(e.xp6(7),e.Q6J("ngIf",!1!==d.ver))},directives:[r.Gu,r.sr,r.Sm,r.fG,r.W2,m.O5,r.Hr,m.sg,r.A$,r.PM,r.Zi,r.Dq,r.gu,r.tO,r.FN,r.YG],pipes:[m.uU],styles:["[_ngcontent-%COMP%]:root{--ion-safe-area-top: 20px;--ion-safe-area-bottom: 22px}.avatar[_ngcontent-%COMP%]{border-radius:50%;width:150px;height:150px;margin-top:10px}.alert-wrapper[_ngcontent-%COMP%], .my-custom-class[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{background:#e5e5e5}.ion-card-content-class[_ngcontent-%COMP%]{max-width:300px;text-align:justify}.estrellita[_ngcontent-%COMP%]{color:#f2cc0c}"]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[b.Bz.forChild(i)],b.Bz]}),o})(),v=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.ez,f.u5,r.Pc,u,T.JF,f.UX]]}),o})()},9825:(j,x,c)=>{c.d(x,{F:()=>P});var m=c(2916),f=c(2654);class r extends f.w{constructor(t,s){super()}schedule(t,s=0){return this}}let y=(()=>{class a{constructor(s,i=a.now){this.SchedulerAction=s,this.now=i}schedule(s,i=0,u){return new this.SchedulerAction(this,s).schedule(u,i)}}return a.now=()=>Date.now(),a})();class p extends y{constructor(t,s=y.now){super(t,()=>p.delegate&&p.delegate!==this?p.delegate.now():s()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,s=0,i){return p.delegate&&p.delegate!==this?p.delegate.schedule(t,s,i):super.schedule(t,s,i)}flush(t){const{actions:s}=this;if(this.active)return void s.push(t);let i;this.active=!0;do{if(i=t.execute(t.state,t.delay))break}while(t=s.shift());if(this.active=!1,i){for(;t=s.shift();)t.unsubscribe();throw i}}}const O=new p(class b extends r{constructor(t,s){super(t,s),this.scheduler=t,this.work=s,this.pending=!1}schedule(t,s=0){if(this.closed)return this;this.state=t;const i=this.id,u=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(u,i,s)),this.pending=!0,this.delay=s,this.id=this.id||this.requestAsyncId(u,this.id,s),this}requestAsyncId(t,s,i=0){return setInterval(t.flush.bind(t,this),i)}recycleAsyncId(t,s,i=0){if(null!==i&&this.delay===i&&!1===this.pending)return s;clearInterval(s)}execute(t,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const i=this._execute(t,s);if(i)return i;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,s){let u,i=!1;try{this.work(t)}catch(v){i=!0,u=!!v&&v||new Error(v)}if(i)return this.unsubscribe(),u}_unsubscribe(){const t=this.id,s=this.scheduler,i=s.actions,u=i.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==u&&i.splice(u,1),null!=t&&(this.id=this.recycleAsyncId(s,t,null)),this.delay=null}});var e=c(6688);function P(a=0,t=O){return(!function I(a){return!(0,e.k)(a)&&a-parseFloat(a)+1>=0}(a)||a<0)&&(a=0),(!t||"function"!=typeof t.schedule)&&(t=O),new m.y(s=>(s.add(t.schedule(Z,a,{subscriber:s,counter:0,period:a})),s))}function Z(a){const{subscriber:t,counter:s,period:i}=a;t.next(s),this.schedule({subscriber:t,counter:s+1,period:i},i)}}}]);