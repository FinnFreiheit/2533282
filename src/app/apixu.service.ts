import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {
  }

  getWeather(location: any): any {
    return this.http.get('http://api.weatherstack.com/current' +
      '?access_key=b5352c4f382fd4a7e3f27f4cd2c42f22' +
      '&query=' + location
    );
  }

  getAktie(aktie: string): Observable<string> {
    console.log('--> ' + aktie);
    const akturl = 'https://financialmodelingprep.com/api/v3/historical-price-full/' + aktie +
      '?timeseries=365&apikey=7dba618fdaa322365dc7fcace2ccc913';
    console.log('--> ' + akturl);
    return this.http.get<string>(akturl);
  }

  getWiki(wiki: any): any {
    console.log(wiki);
    return this.http.get('https://cors-anywhere.herokuapp.com/https://de.wikipedia.org/w/api.php?action=query' +
      '&generator=prefixsearch&format=json&gpslimit=4&prop=extracts%7Cdescription&exintro' +
      '=1&explaintext=1&exsentences=3&redirects=1&gpssearch=' +
      wiki)
      .pipe(
        catchError((err) => {
          console.log('Fehler in getWiki');
          return throwError(err);
        })
      );
  }
}
