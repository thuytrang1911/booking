import { HttpClient } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/core/common/base-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {DatePipe} from '@angular/common'
declare var $: any;
@Component({
  selector: 'app-detail-doctor',
  templateUrl: './detail-doctor.component.html',
  styleUrls: ['./detail-doctor.component.css'],
  providers: [DatePipe]
})
export class DetailDoctorComponent extends BaseComponent implements OnInit {
  public page: any = 1;
  public id: any;
  public pageSize: any = 8;
  public list_item: any;
  public item_schedule:any;
  public totalItem: any;
  public item_time:any;
  public list_users: any;
  public item:any;
  public isCreate = false;
  public user: any;
  public frmUser!: FormGroup
  public frmSearch: FormGroup;
  public loaiQuyen: string = 'Admin';
  public file: any;
  public showUpdateModal: any;
  public doneSetupForm: any;
  public registerDate: any;
  constructor(injector: Injector,public date: DatePipe) { 
    super(injector);
    this.frmSearch = new FormGroup({
      'currentNumber': new FormControl('', [])
    });
    this.frmSearch.get('currentNumber')?.setValue(this.date.transform(Date.now(), 'yyyy-MM-dd'))
  }

  ngOnInit(): void {
    this.getDoctor();
    this.LoadData();
    
  }
  public LoadData() {
 
    this._route.params.subscribe(params => {
      this.id = params['id'];
      this._api.post('/api/Schedule/search', { page: 1, pageSize: 10, doctorID: this.id,
        currentNumber: this.frmSearch.value['currentNumber']}).subscribe(res => {
        this.list_item = res.data;
        this.totalItem = res.totalItem;
        // console.log(this.list_item)
        debugger;
      });

    });

  }
 public getDoctor(){
  this._route.params.subscribe(params => {
        let id = params['id'];
        this._api.get('/api/Doctor/get-by-id/'+id).subscribe(res => {
        this.item = res;
       
      });
      });
 }
 public getTime(id:any){
  this._api.get('/api/Time/get-by-id/'+id).subscribe(res => {
        this.item_time = res;
        // console.log(this.item_time);
        debugger;
    });
 }
 public getSchedule(id:any){
  this._api.get('/api/Schedule/get-by-id/'+id).subscribe(res => {
        this.item_schedule = res;
        this.registerDate = this.item_schedule.currentNumber ? new Date(this.item_schedule.currentNumber) : new Date();
        debugger;
    });
 }

  get lichhen() {
    return this.frmUser.get('currentNumber')!;
  }
  get hoten() {
    return this.frmUser.get('cusName')!;
  }
  get dienthoai() {
    return this.frmUser.get('phone')!;
  }
  get diachi() {
    return this.frmUser.get('address')!;
  }
  get email() {
    return this.frmUser.get('email')!;
  }
  get gioitinh() {
    return this.frmUser.get('gender')!;
  }
  get ngaysinh() {
    return this.frmUser.get('birthDay')!;
  }
  get mabs() {
    return this.frmUser.get('doctorId')!;
  }
  get makh() {
    return this.frmUser.get('customerId')!;
  }
  get ngayhen() {
    return this.frmUser.get('dateBooking')!;
  }
  get mathoigian() {
    return this.frmUser.get('timeId')!;
  }
  public createModal() {
    this.showUpdateModal = true;
    this.isCreate = true;
    debugger;
    setTimeout(() => {
      $('#createUserModal').modal('toggle');
      this.frmUser = new FormGroup({
        'cusName': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]),
        'phone': new FormControl('', [Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        'address': new FormControl('', [Validators.required,Validators.maxLength(250)]),
        'email': new FormControl('', [Validators.email]),
        'gender': new FormControl('', [Validators.required]),
        'birthDay': new FormControl('', [Validators.required]),
        // 'doctorId': new FormControl('', [Validators.required]),
        // 'dateBooking': new FormControl('', [Validators.required]),
        // 'timeId': new FormControl('', [Validators.required]),

      }, 
   
      );
      this.doneSetupForm = true;

    });
  }
  public closeModal() {
    $('#createUserModal').closest('.modal').modal('hide');
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.frmUser.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }
  
  OnSubmit(vl: any) {
    debugger;
    console.log(this.findInvalidControls())
    if (this.frmUser.invalid) {
      return;
    }
    let d = new Date(this.registerDate);
      this.registerDate = `${d.getFullYear()}-${d.getMonth() >= 10 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1)}-${d.getDate() >= 10 ? d.getDate() : '0' + d.getDate()}`;;
      
    let obj:  any = {} ;
    obj={
      cusName: vl.cusName,
      phone: vl.phone,
      address: vl.address,
      email: vl.email,
      gender: vl.gender=='Nữ'?true:false,
      birthDay: vl.birthDay ,
      doctorId: this.item.id,
      dateBooking:this.registerDate,
      timeId: this.item_time.id 
    }
    debugger;
    if (this.isCreate) {
      
        this._api.post('/api/Appointment/create-appointment', obj).subscribe(res => {
          if (res) {
            debugger;
            alert('Đặt lịch thành công');
            // this.LoadData();
            this.closeModal();
          } else {
            alert('Có lỗi')
          }
        });
    }
    
    }
}
