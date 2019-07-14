import { Component ,Output , EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({

    selector:'app-header',
    templateUrl : 'header.component.html',
    styles : []

})


export class HeaderComponent {
    // @Output('onFeatureSelected') fireEvent  = new EventEmitter<string>();

    // onSelect( feature :string){
    //     this.fireEvent.emit(feature);

    // }
        constructor( private dataStorageService : DataStorageService ) {

        }

        onSaveData(){
            this.dataStorageService.storeRecipe(); 
        } 
        onFetchData(){
            this.dataStorageService.fetchData().subscribe();
        }
}