import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ComponentsModule } from "../../components/components.module";
import { CustomFilter } from 'src/app/filters/home/filter-photos.pipe';

@NgModule({
    schemas: [],
    declarations: [HomePage, CustomFilter],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        LazyLoadImageModule,
        ScrollingModule,
        ComponentsModule
    ]
})
export class HomePageModule {}
