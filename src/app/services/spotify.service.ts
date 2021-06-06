import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("service ready to be called!!!");
  }

  getQuery (query : string){
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBrPx1fxF6SuvFCQH7n2HwO54d2Djo6lCJi1Gt-APrZIptC-NUkpOyUvkrDqTx9mhVuyNIIUB4bTBrWvf2phFCief8NgGkwWJl7sdjAsOJVKGKpWb7WF-nVlWpXyMaWAOIaPW9pKgrh7giC9xx7kwuExxFIytFqEuodRyCoNK8YGN-36-GB9kcUdaja2ZHfzc2JdmONH_VIgZNijLqr3sz-4aBwA_o9ehyuhYpttlMEDworevI_WNedsSEXzIgC_8bqPqwe8THsD7G1xCnuYaQM'
    });

    return this.http.get(url,{headers});
  }

  getNewReleases () {
    return this.getQuery('browse/new-releases?limit=20')
                  .pipe(map ((data:any) => data['albums'].items))
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
                .pipe( map( (data:any) => data['artists'].items));

  }

  getTopTracks(id: string ) {
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( (data:any) => data['tracks']));

  }


}
