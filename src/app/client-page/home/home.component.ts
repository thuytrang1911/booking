import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit {

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
   // this.http.get('https://localhost:44313/api/Doctor/get-doctor').subscribe(res => {
    //   this.list_item = res;
    //   debugger;
     
    
    // });
  // moveDoctor(s:any){
  //   if(localStorage.getItem("doctor")==null || localStorage.getItem("doctor")==''){
  //       localStorage.setItem("doctor",JSON.stringify(s));
  //   }else{
  //     localStorage.setItem("doctor",JSON.stringify(s));
  //   }
  //   console.log(localStorage.getItem('doctor'));
  //   this.router.navigate(['detail-doctor']);
  // }
}
