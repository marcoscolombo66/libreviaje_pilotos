"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9196],{7574:(m,p,n)=>{n.d(p,{o:()=>o});var g=n(520),l=n(2096),s=n(849),h=n(5649);let o=(()=>{class r{constructor(e,a,c){this.storage=e,this.navCtrl=a,this.httpClient=c}verificar(){this.storage.get("datos_piloto").then(e=>{if(!e)return console.log("Login","Inactivo"),this.navCtrl.navigateRoot("/login")})}getUser(){return new Promise((e,a)=>{this.storage.get("datos_piloto").then(c=>{e(c)},c=>{a(c.json()),console.log("error",c.json)})})}getDolarBlue(){return this.httpClient.get("https://api.bluelytics.com.ar/v2/latest")}getLugares(){const e=new g.WM({"Content-Type":"application/octet-stream"});return this.httpClient.post("https://www.libreviaje.com/admin/index.php/Api5/getLugares/",JSON.stringify({}),e)}getAviones(){const e=new g.WM({"Content-Type":"application/octet-stream"});return this.httpClient.post("https://www.libreviaje.com/admin/index.php/Api5/getAviones/",JSON.stringify({}),e)}}return r.\u0275fac=function(e){return new(e||r)(l.LFG(s.K),l.LFG(h.SH),l.LFG(g.eN))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9196:(m,p,n)=>{n.r(p),n.d(p,{Tab2PageModule:()=>c});var g=n(9808),l=n(4182),s=n(5649),h=n(9800),o=n(2096),r=n(7574);const e=[{path:"",component:(()=>{class t{constructor(i){this.inicia=i}ngOnInit(){this.inicia.verificar()}}return t.\u0275fac=function(i){return new(i||t)(o.Y36(r.o))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-tab2"]],decls:7,vars:0,consts:[["slot","start"],["src","https://libreviaje.com/images/logo_top_new.png",2,"padding-top","5px","padding-bottom","2px","width","20%","height","20%","max-width","87px","max-height","43px"]],template:function(i,v){1&i&&(o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),o._UZ(3,"ion-menu-button"),o.qZA(),o._uU(4," \xa0 "),o._UZ(5,"img",1),o.qZA()(),o._UZ(6,"ion-content"))},directives:[s.Gu,s.sr,s.Sm,s.fG,s.W2],styles:[""]}),t})()}];let a=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[h.Bz.forChild(e)],h.Bz]}),t})(),c=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[g.ez,l.u5,s.Pc,a]]}),t})()}}]);