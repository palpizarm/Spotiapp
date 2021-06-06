import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista : any = {};
  topTracks : any [] = [];

  loading: boolean = false;

  constructor(private spotify:SpotifyService,
              private router:ActivatedRoute) { 
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }


  getArtista(id :string) {
    this.loading = true;
    this.spotify.getArtista(id)
      .subscribe((artista:any) => {
        this.artista  = artista;
        this.loading = false;
      })

  }


  getTopTracks (id: string) {
    this.spotify.getTopTracks(id)
      .subscribe((topTracks) => {
        this.topTracks = topTracks;
      })
  }
}
