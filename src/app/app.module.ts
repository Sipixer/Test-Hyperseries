import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditeurComponent } from './editeur/editeur.component';
import { LecteurComponent } from './lecteur/lecteur.component';
import { MoviedataService } from './moviedata.service';
import { SwitchPageComponent } from './switch-page/switch-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EditeurComponent,
    LecteurComponent,
    SwitchPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [MoviedataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
