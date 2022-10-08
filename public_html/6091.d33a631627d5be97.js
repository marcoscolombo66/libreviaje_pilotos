"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6091],{6091:(S,u,s)=>{s.r(u),s.d(u,{RegistroPageModule:()=>N});var p=s(9808),n=s(4182),a=s(5649),l=s(9800),m=s(655),c=s(520),r=s(2096),h=s(849);function f(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"El campo es obligatorio"),r.qZA())}function _(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"Debe ser un email valido"),r.qZA())}function Z(e,i){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,f,2,0,"p",7),r.YNc(2,_,2,0,"p",7),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.registroForm.get("usuario").hasError("required")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("usuario").hasError("email"))}}function T(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"El campo es obligatorio"),r.qZA())}function v(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"Debe ser un nombre valido"),r.qZA())}function A(e,i){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,T,2,0,"p",7),r.YNc(2,v,2,0,"p",7),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.registroForm.get("nombre").hasError("required")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("nombre").hasError("nombre"))}}function F(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"El campo es obligatorio"),r.qZA())}function x(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"Debe ser un apellido valido"),r.qZA())}function P(e,i){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,F,2,0,"p",7),r.YNc(2,x,2,0,"p",7),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.registroForm.get("apellido").hasError("required")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("apellido").hasError("apellido"))}}function b(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"El campo es obligatorio"),r.qZA())}function I(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"La contrase\xf1a debe tener al menos 6 caracteres"),r.qZA())}function q(e,i){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,b,2,0,"p",7),r.YNc(2,I,2,0,"p",7),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.registroForm.get("password").hasError("required")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("password").hasError("minlength"))}}function R(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"Debe tener al menos 10 digitos"),r.qZA())}function w(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"El campo es obligatorio"),r.qZA())}function C(e,i){1&e&&(r.TgZ(0,"p"),r._uU(1,"Debe ser un numero whatsapp valido [Ej: 542974235278]"),r.qZA())}function E(e,i){if(1&e&&(r.TgZ(0,"div"),r.YNc(1,R,2,0,"p",7),r.YNc(2,w,2,0,"p",7),r.YNc(3,C,2,0,"p",7),r.qZA()),2&e){const t=r.oxw();r.xp6(1),r.Q6J("ngIf",t.registroForm.get("whatsapp").hasError("minlength")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("whatsapp").hasError("required")),r.xp6(1),r.Q6J("ngIf",t.registroForm.get("whatsapp").hasError("pattern"))}}const d=function(e,i){return{error:e,warning:i}},U=[{path:"",component:(()=>{class e{constructor(t,o,g,J,Y){this.storage=t,this.fb=o,this.alertController=g,this.router=J,this.http=Y,this.registroForm=this.fb.group({usuario:["",[n.kI.required,n.kI.minLength(5),n.kI.email]],nombre:["",[n.kI.required,n.kI.minLength(3)]],apellido:["",[n.kI.required,n.kI.minLength(3)]],password:["",[n.kI.required,n.kI.minLength(6)]],whatsapp:["",[n.kI.required,n.kI.minLength(10),n.kI.required,n.kI.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")]]})}registro(){const t=new c.WM({"Content-Type":"application/octet-stream"});this.http.post("https://www.libreviaje.com/admin/index.php/Api4/addUsuario/",JSON.stringify({USUARIO:this.registroForm.value.usuario,PASSWORD:this.registroForm.value.password,NOMBRE:this.registroForm.value.nombre,APELLIDO:this.registroForm.value.apellido,TELEFONO:this.registroForm.value.whatsapp}),t).subscribe(g=>{console.log("registro",g),this.presentAlert2()},g=>{console.log(g),this.presentAlert()})}loguearme(){this.router.navigate(["/login"])}presentAlert(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Alerta",subHeader:"Ya existe este usuario en la base de datos.",message:"Error",buttons:["Aceptar"]})).present()})}presentAlert2(){return(0,m.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:"Alerta",subHeader:"Se registro correctamente",message:"Ya puede iniciar sesion",buttons:["Aceptar"]})).present()})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Y36(h.K),r.Y36(n.qu),r.Y36(a.Br),r.Y36(l.F0),r.Y36(c.eN))},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-registro"]],decls:48,vars:19,consts:[[2,"min-width","350px"],[1,"ionCardLogin"],[1,"isCSS"],["src","https://libreviaje.com/images/logo_top_new.png",2,"text-align","left","width","50%","height","50%"],[3,"formGroup","ngSubmit"],[1,"etiqueta"],["formControlName","usuario","placeholder","Ingresar usuario",3,"ngClass"],[4,"ngIf"],["formControlName","nombre","placeholder","Ingresar nombre",3,"ngClass"],["formControlName","apellido","placeholder","Ingresar apellido",3,"ngClass"],["formControlName","password","type","password","placeholder","Ingresar Contrase\xf1a"],["formControlName","whatsapp","placeholder","Ingresa tu numero celular cod.pais + area(sin 0) + nro (sin 15)","value",""],[2,"text-align","center"],["type","submit","expand","block","fill","solid","color","primary",3,"disabled"],["routerLink","/login",1,"isCSS"],[2,"text-decoration","underline","font-weight","solid","cursor","pointer"]],template:function(t,o){1&t&&(r.TgZ(0,"ion-content")(1,"ion-grid")(2,"ion-row"),r._UZ(3,"ion-col"),r.TgZ(4,"ion-col",0)(5,"ion-card",1)(6,"ion-card-header")(7,"ion-card-title",2),r._UZ(8,"img",3),r.qZA()(),r.TgZ(9,"form",4),r.NdJ("ngSubmit",function(){return o.registro()}),r.TgZ(10,"ion-card-content")(11,"ion-card-header")(12,"ion-card-title",5),r._uU(13,"USUARIO"),r.qZA(),r.TgZ(14,"ion-card-title",5),r._UZ(15,"ion-input",6),r.YNc(16,Z,3,2,"div",7),r.qZA(),r.TgZ(17,"ion-card-title",5),r._uU(18,"NOMBRE"),r.qZA(),r.TgZ(19,"ion-card-title",5),r._UZ(20,"ion-input",8),r.YNc(21,A,3,2,"div",7),r.qZA(),r.TgZ(22,"ion-card-title",5),r._uU(23,"APELLIDO"),r.qZA(),r.TgZ(24,"ion-card-title",5),r._UZ(25,"ion-input",9),r.YNc(26,P,3,2,"div",7),r.qZA(),r.TgZ(27,"ion-card-title",5),r._uU(28,"CONTRASE\xd1A"),r.qZA(),r.TgZ(29,"ion-card-title",5),r._UZ(30,"ion-input",10),r.YNc(31,q,3,2,"div",7),r.qZA(),r.TgZ(32,"ion-card-title",5),r._uU(33,"WHATSAPP [Ej: 542974235278]"),r.qZA(),r.TgZ(34,"ion-card-title",5),r._UZ(35,"ion-input",11),r.YNc(36,E,4,3,"div",7),r.qZA(),r.TgZ(37,"ion-card-title",12)(38,"ion-button",13),r._uU(39,"Registrarme"),r.qZA()(),r.TgZ(40,"ion-card-sub-title",14)(41,"p"),r._uU(42,"\xa0"),r.qZA(),r.TgZ(43,"p"),r._uU(44," Si ya estas registrado, pod\xe9s "),r.TgZ(45,"span",15),r._uU(46,"Ingresar ac\xe1"),r.qZA()()()()()()()(),r._UZ(47,"ion-col"),r.qZA()()()),2&t&&(r.xp6(9),r.Q6J("formGroup",o.registroForm),r.xp6(6),r.Q6J("ngClass",r.WLB(10,d,o.registroForm.get("usuario").hasError("required")&&o.registroForm.get("usuario").dirty,o.registroForm.get("usuario").hasError("minlength")&&o.registroForm.get("usuario").dirty)),r.xp6(1),r.Q6J("ngIf",o.registroForm.get("usuario").errors&&o.registroForm.get("usuario").dirty),r.xp6(4),r.Q6J("ngClass",r.WLB(13,d,o.registroForm.get("nombre").hasError("required")&&o.registroForm.get("nombre").dirty,o.registroForm.get("nombre").hasError("minlength")&&o.registroForm.get("usuario").dirty)),r.xp6(1),r.Q6J("ngIf",o.registroForm.get("nombre").errors&&o.registroForm.get("nombre").dirty),r.xp6(4),r.Q6J("ngClass",r.WLB(16,d,o.registroForm.get("apellido").hasError("required")&&o.registroForm.get("apellido").dirty,o.registroForm.get("apellido").hasError("minlength")&&o.registroForm.get("apellido").dirty)),r.xp6(1),r.Q6J("ngIf",o.registroForm.get("apellido").errors&&o.registroForm.get("apellido").dirty),r.xp6(5),r.Q6J("ngIf",o.registroForm.get("password").errors&&o.registroForm.get("password").dirty),r.xp6(5),r.Q6J("ngIf",o.registroForm.get("whatsapp").errors&&o.registroForm.get("whatsapp").dirty),r.xp6(2),r.Q6J("disabled",o.registroForm.invalid))},directives:[a.W2,a.jY,a.Nd,a.wI,a.PM,a.Zi,a.Dq,n._Y,n.JL,n.sg,a.FN,a.pK,a.j9,n.JJ,n.u,p.mk,p.O5,a.YG,a.YI,l.rH],styles:["[_ngcontent-%COMP%]:root{--ion-safe-area-top: 20px;--ion-safe-area-bottom: 22px}.avatar[_ngcontent-%COMP%]{border-radius:50%;width:150px;height:150px;margin-top:10px}.alert-wrapper[_ngcontent-%COMP%], .my-custom-class[_ngcontent-%COMP%]   .alert-wrapper[_ngcontent-%COMP%]{background:#e5e5e5}.ion-card-content-class[_ngcontent-%COMP%]{max-width:300px;text-align:justify}.isCSS[_ngcontent-%COMP%]{text-align:center;max-width:240px;font-family:Gill Sans,Gill Sans MT,Calibri,Trebuchet MS,sans-serif}.centrar[_ngcontent-%COMP%]{margin-left:70px;margin-right:70px;max-width:350px;text-align:justify}.estrellita[_ngcontent-%COMP%]{color:gold}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[l.Bz.forChild(U)],l.Bz]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[[p.ez,a.Pc,n.u5,n.UX,y]]}),e})()}}]);