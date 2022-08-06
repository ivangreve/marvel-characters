import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { plainToClass, plainToClassFromExist } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5/dist/md5';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  /** Marvel Api URL */
  private apiBase: string = environment.api.baseUrl;
  private authParams: string;
  private params: string = '&offset=&nameStartsWith='
  private characters: string = ':apiBase' + '/characters' + ':authParams';

  private nameFilter: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) {
    this.authParams = this.generateAuthParams();
  }

  public getCharacters(offset?: number, nameFilter?: string): Observable<any> {
    let url = this.characters.replace(':apiBase', this.apiBase)
      .replace(':authParams', this.authParams);

    if (offset) {
      url += '&offset=' + offset;
    }

    if (nameFilter) {
      url += '&nameStartsWith=' + nameFilter;
    }

    let stream = this.http.get(url);
    return stream;
  }

  private generateAuthParams() {
    const timestamp = + new Date();
    const publicKey = environment.api.publicKey;
    const hash = this.generateMD5Hash(timestamp, publicKey, environment.api.privateKey);
    const params = `?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
    return params;
  }

  private generateMD5Hash(timeStamp: number, publicKey: string, privateKey: string) {
    if (!timeStamp || !publicKey || !privateKey) {
      console.error("Auth Parameter error");
      return;
    }
    const stringToHash = timeStamp + privateKey + publicKey;
    return Md5.hashStr(stringToHash);

  }
}
