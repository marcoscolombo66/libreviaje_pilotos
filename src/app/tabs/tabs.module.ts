import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
          loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
          loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
          loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
          loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          },
        ]
      },
      {
        path: 'nuevo',
        children: [
          {
            path: '',
          loadChildren: () => import('../vuelos/nuevo/nuevo.module').then(m => m.NuevoPageModule)
          },
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
          loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
        ]
      },
      {
        path: 'cerrar',
        children: [
          {
            path: '',
          loadChildren: () => import('../cerrar/cerrar.module').then(m => m.CerrarPageModule)
          },
        ]
      }
    ]
  },
  {
    path:'',
    redirectTo:'tab1/tab1',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
