import { Component, EventEmitter, Output } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css'],
})
export class EditeurComponent {
  constructor(private service: MoviedataService) {}
  movie = this.service.getMovie();
  onSave(e: Event, name: string, views: string) {
    e.preventDefault();
    console.log('Sauvegarde en cours...');
    console.log({ name, views });
    this.service.setMovie({ name, views });
    alert('Sauvegarde effectué !');
  }
}
