/* All Imports */
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SanitasService } from "./sanitas.service";
import { Events } from "./events.service";


@Injectable({
    providedIn: 'root'
})
export class PhotosService extends SanitasService {
    /* All Routes Movies API */
    public URL_GET_PHOTOS = 'api/photos/get';

    
    constructor(protected override http: HttpClient, private events: Events) {
        super(http, 'user', '');
    }


    

    /* Get photos */
    public getPhotosPage(page: number = 1): Promise<any> {
        const event = this.events;
        return new Promise<any>((resolve, reject) => {
          this.http.get<any>(this.getApiURL(this.URL_GET_PHOTOS  + '/' + page), {
          }).subscribe(
            res => {
              if (res.state) {
                resolve({ state: true, response: res.response });
              } else if (res.emptyFields) {

              } else if (res.data) {
                reject(res.data);
              } else {
                reject(res.msg);
              }
            }, err => {
              reject(err);
            }
          );
        });
    }



}