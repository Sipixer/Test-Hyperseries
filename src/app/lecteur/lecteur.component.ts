import { Component } from '@angular/core';
import { MoviedataService } from '../moviedata.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.css'],
})
export class LecteurComponent {
  constructor(private service: MoviedataService) {}
  currentTime: string = '00:00';
  pourcentage: number = 0;
  dropdownopen: boolean = false;
  movie = this.service.getMovie();

  videolink = 'https://www.w3schools.com/html/mov_bbb.mp4';
  images: string[] = [
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
    'https://picsum.photos/150/100',
  ];

  setCurrentTime(e: any) {
    this.pourcentage = (e.target.currentTime / e.target.duration) * 100;
    const result2 = new Date(e.target.currentTime * 1000)
      .toISOString()
      .slice(14, 19);
    this.currentTime = result2;
  }
  openFullscreen(video: any) {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      /* Safari */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE11 */
      video.msRequestFullscreen();
    }
  }

  onChangeDuration(e: any, video: any, load: any) {
    var rect = load.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    const size = rect.right - rect.left;
    console.log(rect);
    console.log('%: ' + (x / size) * 100);
    video.currentTime = video.duration * (x / size);
  }
  ToggleDropDown() {
    this.dropdownopen = !this.dropdownopen;
    console.log(this.service.getMovie());
  }
}
