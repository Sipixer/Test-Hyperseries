import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeurComponent } from './editeur/editeur.component';
import { LecteurComponent } from './lecteur/lecteur.component';

const routes: Routes = [
  { path: 'lecteur', component: LecteurComponent },
  { path: 'editeur', component: EditeurComponent },
  { path: '**', redirectTo: '/lecteur' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
