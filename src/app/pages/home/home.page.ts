/* All Imports */
import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/photos.service';
import { Photo } from 'src/app/interfaces/photos';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  /* Vars definition */
  loading: boolean = true;
  photos: Photo[] = [];
  photoPage: number = 0;
  searchTerm: string;
  filter: Photo;
  isScrolling: boolean;
   

   /* Image for defect @lazyLoad  */
   defaultImage = '../../../assets/icon/poster.png';

  constructor(
    private photosService: PhotosService,
  ) {
    this.searchTerm = '';
    this.filter = { text: '', id: 0, photo: '' };
    this.isScrolling = false;
  }

  /* On init  */
  ngOnInit() {
    
  }



  /* On view enter  */
  async ionViewDidEnter() {
    this.refresPhotosList(true, ()=>{});
  }



  /* Get List Photos */
  private GetList(): Promise<any> {
    const nextPage = this.photoPage + 1;
    return new Promise<any>((resolve, reject) => {
      this.photosService.getPhotosPage(nextPage).then( res => {
        this.photoPage = nextPage; 
        this.photos = res.response;
        resolve(true);
      } ).catch( err => {
        if(err && err.error){
        /* Show error */
        }
        reject(err);
      })
    });
  }


  /* Refresh Photos List */
  async refresPhotosList(showLoading: boolean = false, cb: any){
    if(showLoading){ this.loading = true; }
    await this.GetList();
    this.loading = false;
    cb();
  }


  /* On Refresh Event */
  public onRefresh(e: any){
    this.photoPage = 0;
    this.refresPhotosList(true, ()=>{
      setTimeout(() => {
        // Any calls to load data go here
        e.target.complete();
      }, 100);
    });
  }

  refresh(){
    this.photoPage = 0;
    this.refresPhotosList(true, ()=>{});
  }


  /* For *NGFor Performance  */
  public trackBy(index: any, item: Photo){
    return item.id;
  }


}
