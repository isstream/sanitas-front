import { Pipe, PipeTransform } from "@angular/core";
import { Photo } from "../../interfaces/photos";

@Pipe({ name: "customFilter" })
export class CustomFilter implements PipeTransform {
  transform(photo: Photo[], input: string) {
    if (!input) return photo;
    if(photo === null){ return photo; }
    return photo.filter(val => this.filterBy(val, input));
  }

  private filterBy(
    photo: Photo,
    search: string
  ) {
    return photo.text.toLowerCase().indexOf(search.toLowerCase()) >= 0 || photo.id.toString().indexOf(search.toLowerCase()) >= 0;
  }

}