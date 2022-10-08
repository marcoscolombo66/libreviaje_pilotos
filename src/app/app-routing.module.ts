import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: 'home',loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  //{path: '',redirectTo: 'home',pathMatch: 'full'},
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: '',loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)},

  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'reservar',
    loadChildren: () => import('./modals/reservar/reservar.module').then( m => m.ReservarPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cerrar',
    loadChildren: () => import('./cerrar/cerrar.module').then( m => m.CerrarPageModule)
  },
  {
    path: 'comprobante',
    loadChildren: () => import('./modals/comprobante/comprobante.module').then( m => m.ComprobantePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./modals/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'fotoperfil',
    loadChildren: () => import('./modals/fotoperfil/fotoperfil.module').then( m => m.FotoperfilPageModule)
  },  {
    path: 'olvido',
    loadChildren: () => import('./olvido/olvido.module').then( m => m.OlvidoPageModule)
  }





  //{path: 'tab1',loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)},
  //{path: 'tab2',loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)},
  //{path: 'tab3',loadChildren: () => import('./tab3/tab3.module').then( m => m.Tab3PageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
