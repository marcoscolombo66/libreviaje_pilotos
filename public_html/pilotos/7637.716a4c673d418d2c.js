"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7637],{7574:(C,m,s)=>{s.d(m,{o:()=>_});var p=s(520),d=s(2096),t=s(849),v=s(5649);let _=(()=>{class g{constructor(l,c,h){this.storage=l,this.navCtrl=c,this.httpClient=h}verificar(){this.storage.get("datos_piloto").then(l=>{if(!l)return console.log("Login","Inactivo"),this.navCtrl.navigateRoot("/login")})}getUser(){return new Promise((l,c)=>{this.storage.get("datos_piloto").then(h=>{l(h)},h=>{c(h.json()),console.log("error",h.json)})})}getDolarBlue(){return this.httpClient.get("https://api.bluelytics.com.ar/v2/latest")}getLugares(){const l=new p.WM({"Content-Type":"application/octet-stream"});return this.httpClient.post("https://www.libreviaje.com/admin/index.php/Api5/getLugares/",JSON.stringify({}),l)}getAviones(){const l=new p.WM({"Content-Type":"application/octet-stream"});return this.httpClient.post("https://www.libreviaje.com/admin/index.php/Api5/getAviones/",JSON.stringify({}),l)}}return g.\u0275fac=function(l){return new(l||g)(d.LFG(t.K),d.LFG(v.SH),d.LFG(p.eN))},g.\u0275prov=d.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},7637:(C,m,s)=>{s.r(m),s.d(m,{NuevoPageModule:()=>Z});var p=s(9808),d=s(4182),t=s(5649),v=s(520),_=s(9800),g=s(655),e=s(2096),l=s(849),c=s(7574);function h(n,u){if(1&n){const o=e.EpF();e.TgZ(0,"ion-datetime",15),e.NdJ("ngModelChange",function(r){return e.CHM(o),e.oxw().date=r}),e.qZA()}if(2&n){const o=e.oxw();e.Q6J("ngModel",o.date)}}function M(n,u){if(1&n&&(e.TgZ(0,"ion-select-option",16),e._uU(1),e.qZA()),2&n){const o=u.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o.DESCRIPCION)}}function T(n,u){if(1&n&&(e.TgZ(0,"ion-select-option",16),e._uU(1),e.qZA()),2&n){const o=u.$implicit;e.Q6J("value",o),e.xp6(1),e.Oqu(o.DESCRIPCION)}}function O(n,u){if(1&n&&(e.TgZ(0,"ion-select-option",16),e._uU(1),e.qZA()),2&n){const o=u.$implicit;e.Q6J("value",o),e.xp6(1),e.AsE("",o.MARCA," - ",o.MODELO,"")}}const I=[{path:"",component:(()=>{class n{constructor(o,i,r,a,f,A){this.modalCtrl=o,this.http=i,this.toast=r,this.fb=a,this.storage=f,this.inicia=A}get date(){return this.dateValue}set date(o){this.dateValue=o}ngOnInit(){this.inicia.verificar(),this.getLugares(),this.getAviones()}getLugares(){this.inicia.getLugares().subscribe(i=>{this.lugares=i},i=>{console.log(i)})}getAviones(){this.inicia.getAviones().subscribe(i=>{this.aviones=i},i=>{console.log(i)})}guardar(){this.bandera="",null==this.salida&&(this.bandera="- Salida<br/>"),null==this.destino&&(this.bandera+="- Destino<br/>"),null==this.asientos&&(this.bandera+="- Asientos<br/>"),null==this.avion&&(this.bandera+="- Avion<br/>"),null==this.precio&&(this.bandera+="- Precio<br/>"),null==this.dateValue&&(this.bandera+="- Fecha y horario<br/>"),""!==this.bandera?this.presentToast("<u><strong>Complete:</strong></u>  <br/>"+this.bandera,2e3,"warning","warning-toast"):(this.presentToast("Se guardo correctamente. Gracias!"+this.bandera,2e3,"checkmark","sucess-toast"),this.guardarEnBase(this.dateValue,this.salida,this.destino,this.asientos,this.precio,this.avion),this.dateValue=void 0,this.salida=void 0,this.destino=void 0,this.asientos=void 0,this.avion=void 0,this.precio=void 0,this.bandera="")}guardarEnBase(o,i,r,a,f,A){return(0,g.mG)(this,void 0,void 0,function*(){console.log(r),this.idUSUARIO=yield this.inicia.getUser(),this.emailUSUARIO=this.idUSUARIO[0].EMAIL,this.idUSUARIO=this.idUSUARIO[0].idPILOTOS;const P=new v.WM({"Content-Type":"application/octet-stream"});this.http.post("https://www.libreviaje.com/admin/index.php/Api5/addDestino/",JSON.stringify({idPILOTOS:this.idUSUARIO,idSALIDAS:i.idDESTINOS,idDESTINOS:r.idDESTINOS,DIA_HORA:o,idAVIONES:A.idAVIONES,ASIENTOS:a,PRECIO:f,emailUSUARIO:this.emailUSUARIO,destinoDESCRIPCION:r.DESCRIPCION}),P).subscribe(N=>{this.presentToast("Se guardo correctamente. Gracias!"+this.bandera,2e3,"checkmark","sucess-toast")},N=>{this.presentToast("Ha ocurrido un error! <br/>",2e3,"warning","warning-toast"),console.log(N)})})}presentToast(o,i,r,a){return(0,g.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:o,duration:i,icon:r,cssClass:a})).present()})}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(t.IN),e.Y36(v.eN),e.Y36(t.yF),e.Y36(d.qu),e.Y36(l.K),e.Y36(c.o))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-nuevo"]],decls:68,vars:12,consts:[["slot","start"],["src","assets/logo_top.png",2,"padding-top","5px","padding-bottom","2px","width","20%","height","20%","max-width","87px","max-height","43px"],["size","1"],["size","11"],["size","12",1,"etiqueta"],["placeholder","\xbfQu\xe9 dia y a qu\xe9 hora sal\xeds?","id","date",2,"min-width","250px","font-size","16px","--placeholder-color","currentColor","--placeholder-opacity","0.33",3,"value"],["trigger","date","size","cover"],["interface","action-sheet","placeholder","\xbfDesde d\xf3nde salis",1,"nuevo_vuelo",3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["interface","action-sheet","placeholder","\xbfHacia d\xf3nde vas?",1,"nuevo_vuelo",3,"ngModel","ngModelChange"],["interface","action-sheet","placeholder","\xbfEn qu\xe9 avion vas a volar?",1,"nuevo_vuelo",3,"ngModel","ngModelChange"],["inputmode","numeric","min","1","type","number","placeholder","\xbfCuantos asientos libres hay?",1,"nuevo_vuelo",3,"ngModel","ngModelChange"],["step","50","inputmode","numeric","min","100","type","number","placeholder","\xbfCuantos d\xf3lares vas a cobrar por cada asiento?",1,"nuevo_vuelo",3,"ngModel","ngModelChange"],["shape","round",1,"botones",3,"click"],["name","save-outline"],["presentation","date-time",3,"ngModel","ngModelChange"],[3,"value"]],template:function(o,i){1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e._UZ(3,"ion-menu-button"),e.qZA(),e._uU(4," \xa0 "),e._UZ(5,"img",1),e.qZA()(),e.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),e._UZ(9,"ion-col",2),e.TgZ(10,"ion-col",3)(11,"ion-row")(12,"ion-col",4),e._uU(13,"DIA / HORA"),e.qZA()(),e.TgZ(14,"ion-row")(15,"ion-col",4),e._UZ(16,"ion-input",5),e.ALo(17,"date"),e.TgZ(18,"ion-popover",6),e.YNc(19,h,1,1,"ng-template"),e.qZA()()(),e.TgZ(20,"ion-row")(21,"ion-col",4),e._uU(22,"SALIDA"),e.qZA()(),e.TgZ(23,"ion-row")(24,"ion-col",4)(25,"ion-list")(26,"ion-item")(27,"ion-select",7),e.NdJ("ngModelChange",function(a){return i.salida=a}),e.YNc(28,M,2,2,"ion-select-option",8),e.qZA()()()()(),e.TgZ(29,"ion-row")(30,"ion-col",4),e._uU(31,"DESTINO"),e.qZA()(),e.TgZ(32,"ion-row")(33,"ion-col",4)(34,"ion-list")(35,"ion-item")(36,"ion-select",9),e.NdJ("ngModelChange",function(a){return i.destino=a}),e.YNc(37,T,2,2,"ion-select-option",8),e.qZA()()()()(),e.TgZ(38,"ion-row")(39,"ion-col",4),e._uU(40,"AVION"),e.qZA()(),e.TgZ(41,"ion-row")(42,"ion-col",4)(43,"ion-list")(44,"ion-item")(45,"ion-select",10),e.NdJ("ngModelChange",function(a){return i.avion=a}),e.YNc(46,O,2,3,"ion-select-option",8),e.qZA()()()()(),e.TgZ(47,"ion-row")(48,"ion-col",4),e._uU(49,"CANTIDAD DE ASIENTOS"),e.qZA()(),e.TgZ(50,"ion-row")(51,"ion-col",4)(52,"ion-list")(53,"ion-item")(54,"ion-input",11),e.NdJ("ngModelChange",function(a){return i.asientos=a}),e.qZA()()()()(),e.TgZ(55,"ion-row")(56,"ion-col",4),e._uU(57,"PRECIO C/ASIENTO (USD)"),e.qZA()(),e.TgZ(58,"ion-row")(59,"ion-col",4)(60,"ion-list")(61,"ion-item")(62,"ion-input",12),e.NdJ("ngModelChange",function(a){return i.precio=a}),e.qZA()()()()(),e.TgZ(63,"ion-row")(64,"ion-col",4)(65,"ion-button",13),e.NdJ("click",function(){return i.guardar()}),e._UZ(66,"ion-icon",14),e._uU(67,"\xa0GUARDAR"),e.qZA()()()()()()()),2&o&&(e.xp6(16),e.s9C("value",e.xi3(17,9,i.date,"yyyy-MM-dd HH:mm:ss")),e.xp6(11),e.Q6J("ngModel",i.salida),e.xp6(1),e.Q6J("ngForOf",i.lugares),e.xp6(8),e.Q6J("ngModel",i.destino),e.xp6(1),e.Q6J("ngForOf",i.lugares),e.xp6(8),e.Q6J("ngModel",i.avion),e.xp6(1),e.Q6J("ngForOf",i.aviones),e.xp6(8),e.Q6J("ngModel",i.asientos),e.xp6(8),e.Q6J("ngModel",i.precio))},directives:[t.Gu,t.sr,t.Sm,t.fG,t.W2,t.jY,t.Nd,t.wI,t.pK,t.j9,t.d8,t.x4,t.QI,d.JJ,d.On,t.q_,t.Ie,t.t9,p.sg,t.n0,t.as,t.YG,t.gu],pipes:[p.uU],styles:[""]}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(I)],_.Bz]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[p.ez,d.u5,d.UX,v.JF,t.Pc,S]]}),n})()}}]);