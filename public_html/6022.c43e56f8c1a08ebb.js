"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6022],{7574:(m,P,e)=>{e.d(P,{o:()=>d});var g=e(2096),i=e(849),n=e(5649),h=e(520);let d=(()=>{class c{constructor(t,O,s){this.storage=t,this.navCtrl=O,this.httpClient=s}verificar(){this.storage.get("datos_pasajero").then(t=>{if(!t)return console.log("Login","Inactivo"),this.navCtrl.navigateRoot("/login")})}getUser(){return new Promise((t,O)=>{this.storage.get("datos_pasajero").then(s=>{t(s)},s=>{O(s.json()),console.log("error",s.json)})})}getDolarBlue(){return this.httpClient.get("https://api.bluelytics.com.ar/v2/latest")}}return c.\u0275fac=function(t){return new(t||c)(g.LFG(i.K),g.LFG(n.SH),g.LFG(h.eN))},c.\u0275prov=g.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},6022:(m,P,e)=>{e.r(P),e.d(P,{Tab4PageModule:()=>_});var g=e(9808),i=e(4182),n=e(5649),h=e(9800),d=e(655),c=e(6765),f=e(520),t=e(2096),O=e(849),s=e(7574);const M=[{path:"",component:(()=>{class o{constructor(r,a,p,b,x,u){this.modalCtrl=r,this.http=a,this.toast=p,this.fb=b,this.storage=x,this.inicia=u,this.registroForm=this.fb.group({nombre:["",[i.kI.required,i.kI.minLength(3)]],apellido:["",[i.kI.required,i.kI.minLength(3)]],whatsapp:["",[i.kI.required,i.kI.minLength(10),i.kI.required,i.kI.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]})}ngOnInit(){return(0,d.mG)(this,void 0,void 0,function*(){this.inicia.verificar(),this.datosUsuario=yield this.inicia.getUser(),this.registroForm.controls.nombre.setValue(this.datosUsuario[0].NOMBRE),this.registroForm.controls.apellido.setValue(this.datosUsuario[0].APELLIDO),this.registroForm.controls.whatsapp.setValue(this.datosUsuario[0].TELEFONO),this.FOTO_PERFIL=yield this.datosUsuario[0].FOTO_PERFIL})}guardar(){return(0,d.mG)(this,void 0,void 0,function*(){if(this.idUSUARIO=yield this.inicia.getUser(),this.idUSUARIO=this.idUSUARIO[0].idUSUARIO,!this.registroForm.valid)return this.presentToast(" \xa1Atenci\xf3n! Ha ocurrido un error.<br/>Ingrese los valores requeridos."),!1;{const r=new f.WM({"Content-Type":"application/octet-stream"});this.http.post("https://www.libreviaje.com/admin/index.php/Api4/updateuser/",JSON.stringify({NOMBRE:this.registroForm.value.nombre,APELLIDO:this.registroForm.value.apellido,TELEFONO:this.registroForm.value.whatsapp,idUSUARIO:this.idUSUARIO}),r).subscribe(p=>{this.presentToast(" Se guardaron los cambios!")},p=>{this.presentToast(" \xa1Atenci\xf3n! Ha ocurrido un error.<br/>Vuelva a intentarlo"),console.log(p)})}})}presentToast(r){return(0,d.mG)(this,void 0,void 0,function*(){(yield this.toast.create({message:r,duration:2e3})).present()})}subirFotoPerfil(){return(0,d.mG)(this,void 0,void 0,function*(){this.idUSUARIO=yield this.inicia.getUser(),this.idUSUARIO=this.idUSUARIO[0].idUSUARIO;const r=yield this.modalCtrl.create({component:c.U,breakpoints:[0,.99],initialBreakpoint:.99,handle:!0,componentProps:{mySubject:this.idUSUARIO},animated:!0,canDismiss:!0});r.onDidDismiss().then(a=>{console.log(a),"backdrop"!==a.role&&(this.FOTO_PERFIL=a.data)}),yield r.present()})}}return o.\u0275fac=function(r){return new(r||o)(t.Y36(n.IN),t.Y36(f.eN),t.Y36(n.yF),t.Y36(i.qu),t.Y36(O.K),t.Y36(s.o))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tab4"]],decls:48,vars:2,consts:[["slot","start"],["src","https://libreviaje.com/images/logo_top_new.png",2,"padding-top","5px","padding-bottom","2px","width","20%","height","20%","max-width","87px","max-height","43px"],[2,"min-width","350px"],[1,"ionCardLogin"],[3,"formGroup","submit"],[2,"cursor","pointer",3,"click"],[1,"img-circle","medium-image",3,"src"],["name","camera"],[1,"etiqueta"],["size","6",1,"etiqueta"],["formControlName","nombre","placeholder","Ingresar nombre"],["formControlName","apellido","placeholder","Ingresar apellido"],["formControlName","whatsapp","placeholder","Ingresar whatsapp"],["size","12",1,"etiqueta"],["shape","round","type","submit",1,"botones"],["name","save-outline"]],template:function(r,a){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),t._UZ(3,"ion-menu-button"),t.qZA(),t._uU(4," \xa0 "),t._UZ(5,"img",1),t.qZA()(),t.TgZ(6,"ion-content")(7,"ion-grid")(8,"ion-row"),t._UZ(9,"ion-col"),t.TgZ(10,"ion-col",2)(11,"ion-card",3)(12,"form",4),t.NdJ("submit",function(){return a.guardar()}),t.TgZ(13,"ion-card-content")(14,"ion-card-header")(15,"ion-row",5),t.NdJ("click",function(){return a.subirFotoPerfil()}),t.TgZ(16,"ion-col"),t._UZ(17,"img",6)(18,"ion-icon",7),t._uU(19,"\xa0 "),t.qZA()(),t.TgZ(20,"ion-card-title",8)(21,"ion-row")(22,"ion-col",9),t._uU(23,"NOMBRE"),t.qZA()(),t.TgZ(24,"ion-row")(25,"ion-col",9),t._UZ(26,"ion-input",10),t.qZA()()(),t.TgZ(27,"ion-card-title",8)(28,"ion-row")(29,"ion-col",9),t._uU(30,"APELLIDO"),t.qZA()(),t.TgZ(31,"ion-row")(32,"ion-col",9),t._UZ(33,"ion-input",11),t.qZA()()(),t.TgZ(34,"ion-card-title",8)(35,"ion-row")(36,"ion-col",9),t._uU(37,"WHATSAPP"),t.qZA()(),t.TgZ(38,"ion-row")(39,"ion-col",9),t._UZ(40,"ion-input",12),t.qZA()()(),t.TgZ(41,"ion-card-title",8)(42,"ion-row")(43,"ion-col",13)(44,"ion-button",14),t._UZ(45,"ion-icon",15),t._uU(46,"\xa0GUARDAR"),t.qZA()()()()()()()()(),t._UZ(47,"ion-col"),t.qZA()()()),2&r&&(t.xp6(12),t.Q6J("formGroup",a.registroForm),t.xp6(5),t.MGl("src","https://libreviaje.com/images/",a.FOTO_PERFIL,"",t.LSH))},directives:[n.Gu,n.sr,n.Sm,n.fG,n.W2,n.jY,n.Nd,n.wI,n.PM,i._Y,i.JL,i.sg,n.FN,n.Zi,n.gu,n.Dq,n.pK,n.j9,i.JJ,i.u,n.YG],styles:['body[_ngcontent-%COMP%]{margin-top:20px;background:#eee}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .info-combo[_ngcontent-%COMP%] > h3.name[_ngcontent-%COMP%]{font-size:12px}.info-combo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{margin:3px 0}.no-margin-bottom[_ngcontent-%COMP%]{margin-bottom:0!important}.info-combo[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{margin:2px 0 6px}.medium-image[_ngcontent-%COMP%]{width:45px;height:45px;margin-right:5px}.img-circle[_ngcontent-%COMP%]{border-radius:50%}.messages-panel[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 150px);min-height:460px;background-color:#fbfcff;display:inline-block;border-top-left-radius:5px;margin-bottom:0}.messages-panel[_ngcontent-%COMP%]   img.img-circle[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.1)}.messages-panel[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{border:none;background-color:transparent}.contacts-list[_ngcontent-%COMP%]{background-color:#fff;border-right:1px solid #cfdbe2;width:305px;height:100%;border-top-left-radius:5px;float:left}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%]{width:100%;padding:0;margin-left:0}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{float:left;width:76px;padding:15px 5px;font-size:14px;text-align:center;border-right:1px solid rgba(0,0,0,.1);background-color:#ffffffbf;cursor:pointer;font-weight:700}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1){color:#2da9e9;border-right-color:#2d81e90f;border-bottom:4px solid #2da9e9;border-top-left-radius:5px}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(1).active{color:#fff;background-color:#2da9e9;border-bottom:4px solid rgba(0,0,0,.15)}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2){color:#0ec8a2;border-right-color:#0ec8a20f;border-bottom:4px solid #0ec8a2}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(2).active{color:#fff;background-color:#0ec8a2;border-bottom:4px solid rgba(0,0,0,.15)}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3){color:#ff9e2a;border-right-color:#ff980e0f;border-bottom:4px solid #ff9e2a}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(3).active{color:#fff;background-color:#ff9e2a;border-bottom:4px solid rgba(0,0,0,.15)}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4){color:#314557;border-bottom:4px solid #314557;border-right-color:transparent}.contacts-list[_ngcontent-%COMP%]   .inbox-categories[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:nth-child(4).active{color:#fff;background-color:#314557;border-bottom:4px solid rgba(0,0,0,.35)}.contacts-outter-wrapper[_ngcontent-%COMP%]{position:relative;width:305px;direction:rtl;min-height:405px;overflow:hidden}.contacts-outter-wrapper[_ngcontent-%COMP%]:after, .contacts-outter-wrapper[_ngcontent-%COMP%]:nth-child(1):after{content:"";position:absolute;width:100%;height:5px;bottom:0;background-color:#2da9e9;border-bottom-left-radius:4px}.contacts-outter-wrapper[_ngcontent-%COMP%]:nth-child(2):after{background-color:#0ec8a2}.contacts-outter-wrapper[_ngcontent-%COMP%]:nth-child(3):after{background-color:#ff9e2a}.contacts-outter-wrapper[_ngcontent-%COMP%]:nth-child(4):after{background-color:#314557}.contacts-outter[_ngcontent-%COMP%]{position:relative;height:calc(100vh - 278px);width:325px;direction:rtl;overflow-y:scroll;padding-left:20px}.contacts[_ngcontent-%COMP%]{direction:ltr;width:305px;margin-top:0}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;border-top:1px solid transparent;border-bottom:1px solid rgba(205,211,237,.2);border-left:4px solid rgba(255,255,255,0);padding:8px 12px;position:relative;background-color:#fff0}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-top:1px solid rgba(205,211,237,.2)}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child.active{border-top:1px solid rgba(205,211,237,.75)}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#ffffff40}.contacts[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%], .contacts.info[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-left:4px solid #2da9e9;border-top-color:#cdd3edbf;border-bottom-color:#cdd3edbf;background-color:#fbfcff}.contacts.success[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-left:4px solid #0ec8a2}.contacts.warning[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-left:4px solid #ff9e2a}.contacts.danger[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-left:4px solid #f95858}.contacts.dark[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{border-left:4px solid #314557}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .info-combo[_ngcontent-%COMP%]{width:172px;cursor:pointer}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .info-combo[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%]{width:167px;height:20px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .contacts-add[_ngcontent-%COMP%]{width:50px;float:right;z-index:23299}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%]{text-align:right;display:block;margin-left:-15px;width:70px;height:25px;line-height:28px;font-size:14px;font-weight:600;padding-right:5px}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .contacts-add[_ngcontent-%COMP%]   .fa-trash-o[_ngcontent-%COMP%]{position:absolute;font-size:14px;right:12px;bottom:15px;color:#a6a6a6;cursor:pointer}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .contacts-add[_ngcontent-%COMP%]   .fa-paperclip[_ngcontent-%COMP%]{position:absolute;font-size:14px;right:34px;bottom:15px;color:#a6a6a6;cursor:pointer}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .contacts-add[_ngcontent-%COMP%]   .fa-trash-o[_ngcontent-%COMP%]:hover{color:#f95858}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .contacts-add[_ngcontent-%COMP%]   .fa-paperclip[_ngcontent-%COMP%]:hover{color:#ff9e2a}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .info-combo[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{width:180px;font-size:12px;height:28px;font-weight:500;overflow:hidden;white-space:normal;text-overflow:ellipsis}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .message-count[_ngcontent-%COMP%]{position:absolute;top:8px;left:5px;width:20px;height:20px;line-height:20px;text-align:center;background-color:#ff9e2a;border-radius:50%;color:#fff;font-weight:600;font-size:10px}.message-body[_ngcontent-%COMP%]{background-color:#fbfcff;height:100%;width:calc(100% - 305px);float:right}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%]{display:inline-block;width:100%;position:relative;min-height:53px;height:auto;background-color:#fff;border-bottom:1px solid rgba(205,211,237,.5)}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%]   .new-message-wrapper[_ngcontent-%COMP%]{width:100%}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%]   .new-message-wrapper[_ngcontent-%COMP%] > .form-group[_ngcontent-%COMP%]{width:100%;padding:10px 10px 0;height:50px}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%]   .new-message-wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{width:calc(100% - 50px);float:left}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%]   .new-message-wrapper[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:40px;padding:6px;text-align:center;display:block;float:right;margin:0}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]{height:53px;line-height:53px;padding:0 20px;float:right;border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0;margin:0;font-size:15px;opacity:.9}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:hover, .message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%]:focus, .message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%] > .btn.active[_ngcontent-%COMP%]{opacity:1}.message-body[_ngcontent-%COMP%]   .message-top[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{margin-right:5px;font-size:18px}.new-message-wrapper[_ngcontent-%COMP%]{position:absolute;max-height:400px;top:53px;background-color:#fff;z-index:105;padding:20px 15px 30px;border-bottom:1px solid #cfdbe2;border-bottom-left-radius:3px;border-bottom-right-radius:3px;box-shadow:0 7px 10px #00000040;transition:.5s;display:none}.new-message-wrapper.closed[_ngcontent-%COMP%]{opacity:0;max-height:0}.chat-footer.new-message-textarea[_ngcontent-%COMP%]{display:block;position:relative;padding:0 10px}.chat-footer.new-message-textarea[_ngcontent-%COMP%]   .send-message-button[_ngcontent-%COMP%]{right:35px}.chat-footer.new-message-textarea[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]{right:85px}.chat-footer.new-message-textarea[_ngcontent-%COMP%]   .send-message-text[_ngcontent-%COMP%]{padding-right:100px;height:90px}.message-chat[_ngcontent-%COMP%]{width:100%;overflow:hidden}.chat-body[_ngcontent-%COMP%]{width:calc(100% + 17px);min-height:290px;height:calc(100vh - 320px);background-color:#fbfcff;margin-bottom:30px;padding:30px 5px 5px;overflow-y:scroll}.message[_ngcontent-%COMP%]{position:relative;width:100%}.message[_ngcontent-%COMP%]   br[_ngcontent-%COMP%]{clear:both}.message[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{position:relative;width:auto;max-width:calc(100% - 150px);float:left;background-color:#fff;border-radius:4px;border:1px solid #dbe3e8;margin:0 5px 20px 15px;color:#788288}.message[_ngcontent-%COMP%]:after{content:"";position:absolute;top:11px;left:63px;float:left;z-index:100;border-top:10px solid transparent;border-left:none;border-bottom:10px solid transparent;border-right:13px solid #fff}.message[_ngcontent-%COMP%]:before{content:"";position:absolute;top:10px;left:62px;float:left;z-index:99;border-top:11px solid transparent;border-left:none;border-bottom:11px solid transparent;border-right:13px solid #dbe3e8}.message[_ngcontent-%COMP%]   .medium-image[_ngcontent-%COMP%]{float:left;margin-left:10px}.message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%]{width:100%;height:22px}.message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:11px;font-weight:700;margin:0 2px 0 0;color:#a2b8c5}.message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{color:#a2b8c5;margin:8px 0 0;font-size:12px;float:right;padding-right:10px}.message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{font-size:14px;font-weight:600;margin:7px 13px 0 10px;color:#65addd;float:left}.message[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:4px 2%;width:96%;opacity:.75}.message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%]{text-align:left;padding:3px 13px 10px;font-size:14px}.message.my-message[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{float:right;margin:0 15px 20px 5px}.message.my-message[_ngcontent-%COMP%]:after{content:"";position:absolute;top:11px;left:auto;right:63px;float:left;z-index:100;border-top:10px solid transparent;border-left:13px solid #fff;border-bottom:10px solid transparent;border-right:none}.message.my-message[_ngcontent-%COMP%]:before{content:"";position:absolute;top:10px;left:auto;right:62px;float:left;z-index:99;border-top:11px solid transparent;border-left:13px solid #dbe3e8;border-bottom:11px solid transparent;border-right:none}.message.my-message[_ngcontent-%COMP%]   .medium-image[_ngcontent-%COMP%]{float:right;margin-left:5px;margin-right:10px}.message.my-message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%]{float:left;padding-left:10px;padding-right:0}.message.my-message[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{float:right}.message.info[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{background-color:#2da9e9;border:1px solid #2da9e9;color:#fff}.message.info[_ngcontent-%COMP%]:after, .message.info[_ngcontent-%COMP%]:before{border-right:13px solid #2da9e9}.message.success[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{background-color:#0ec8a2;border:1px solid #0ec8a2;color:#fff}.message.success[_ngcontent-%COMP%]:after, .message.success[_ngcontent-%COMP%]:before{border-right:13px solid #0ec8a2}.message.warning[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{background-color:#ff9e2a;border:1px solid #ff9e2a;color:#fff}.message.warning[_ngcontent-%COMP%]:after, .message.warning[_ngcontent-%COMP%]:before{border-right:13px solid #ff9e2a}.message.danger[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{background-color:#f95858;border:1px solid #f95858;color:#fff}.message.danger[_ngcontent-%COMP%]:after, .message.danger[_ngcontent-%COMP%]:before{border-right:13px solid #f95858}.message.dark[_ngcontent-%COMP%]   .message-body[_ngcontent-%COMP%]{background-color:#314557;border:1px solid #314557;color:#fff}.message.dark[_ngcontent-%COMP%]:after, .message.dark[_ngcontent-%COMP%]:before{border-right:13px solid #314557}.message.info[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%], .message.success[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%], .message.warning[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%], .message.danger[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%], .message.dark[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h4[_ngcontent-%COMP%]{color:#fff}.message.info[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%], .message.info[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .message.success[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%], .message.success[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .message.warning[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%], .message.warning[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .message.danger[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%], .message.danger[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%], .message.dark[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%], .message.dark[_ngcontent-%COMP%]   .message-info[_ngcontent-%COMP%] > h5[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{color:#fff;opacity:.9}.chat-footer[_ngcontent-%COMP%]{position:relative;width:100%;padding:0 80px}.chat-footer[_ngcontent-%COMP%]   .send-message-text[_ngcontent-%COMP%]{position:relative;display:block;width:100%;min-height:55px;max-height:75px;background-color:#fff;border-radius:5px;padding:5px 95px 5px 10px;font-size:13px;resize:vertical;outline:none;border:1px solid #e0e6eb}.chat-footer[_ngcontent-%COMP%]   .send-message-button[_ngcontent-%COMP%]{display:block;position:absolute;width:35px;height:35px;right:100px;top:0;bottom:0;margin:auto;border:1px solid rgba(0,0,0,.05);outline:none;font-weight:600;border-radius:50%;padding:0}.chat-footer[_ngcontent-%COMP%]   .send-message-button[_ngcontent-%COMP%] > i[_ngcontent-%COMP%]{font-size:16px;margin:0 0 0 -2px}.chat-footer[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]{display:block;position:absolute;right:150px;height:30px;font-size:20px;top:0;bottom:0;margin:auto;opacity:.25}.chat-footer[_ngcontent-%COMP%]   .upload-file[_ngcontent-%COMP%]:hover{opacity:1}.profile-main[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #dce2e9;border-radius:3px;position:relative;margin-bottom:20px}.nothing[_ngcontent-%COMP%]{margin:0}']}),o})()}];let C=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[h.Bz.forChild(M)],h.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[g.ez,n.Pc,i.u5,i.UX,f.JF,C]]}),o})()}}]);