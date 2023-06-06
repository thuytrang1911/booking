import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent extends BaseComponent  implements OnInit {

  public list_item:any;
  constructor( injector: Injector) {
    super(injector);
   }
  ngOnInit(): void {
   
    this._api.get('/api/Doctor/get-doctor').subscribe(res => {
      this.list_item = res;
      debugger;
     
    
    });
  }
}
