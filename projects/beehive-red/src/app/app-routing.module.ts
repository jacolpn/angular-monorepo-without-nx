import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {"path":"pages/beehive-red-happy",loadChildren:()=>import('./pages/bee-red-happy/bee-red-happy.module').then(mod=>mod.BeeRedHappyModule)},
  {"path":"",redirectTo:"pages/beehive-red-happy",pathMatch:'full'},
  {"path":"**",redirectTo:"pages/beehive-red-happy",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
