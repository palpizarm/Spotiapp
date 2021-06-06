import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  artistas : any[] = [];
  loading : boolean = false;

  constructor( private spotify : SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(value:string){
    if (value.length != 0) {
      this.loading = true;
      this.spotify.getArtistas(value)
        .subscribe((data:any) => {
          this.artistas = data;
          this.loading = false;
        }, (errorService) => {
            
        })
    } else {
      this.loading = false;
      this.artistas = [];
    }
  }

}
