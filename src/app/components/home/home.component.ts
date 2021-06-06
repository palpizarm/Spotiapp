import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading : boolean = false;

  nuevasCanciones : any[] = [];

  // mensajes de error de home
  errorFlag : boolean = false;
  errorMsg : string = '';

  constructor(private spotify:SpotifyService) { 
    this.errorFlag = false;
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data:any) => {
        this.nuevasCanciones = data;
        this.loading = false;
        //console.log(this.nuevasCanciones);
      }, (errorService) => {
        this.errorFlag = true;
        this.errorMsg = errorService.error.error.message; // estructura de error de Spotify
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

}
