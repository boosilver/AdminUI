import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { InquireKey } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';

@Component({
  selector: 'app-checkkey',
  templateUrl: './checkkey.component.html',
  styleUrls: ['./checkkey.component.css']
})
export class CheckkeyComponent implements OnInit {

  model: InquireKey = InquireKey.empty();
  
  //public urlApi:string = "http://localhost:8080/api/v1/idf/GetInvoiceByKeyFields/";
  public jasontree:any;
  public responseValue:any;
  public responseValueEN:any;
  public headerDatas:any;
  public loading = false;
  

  constructor(
   
    private router:Router,
    private svc: PROCURETOPAYService
  ) { }  
 
  ngOnInit() {
    // // ทำการเรียกใช้ HTTP request ผ่าน get() method
    // // ซึ่งจะได้ข้อมูลกลับมาในรูปแบบ Observable เราต้อง subscibe ตัว observer จึงจะทำงาน
    // // พอรอค่าที่จะถูกส่งกลับมาแล้วทำงาน
    // this.http.get('/assets/data/data2.json', {observe: 'response'})
    // .subscribe(resp => {
    //   console.log(resp);// ดูโครงสร้างของ json ทั้งหมดผ่าน console
    //   console.log(resp.status); // ดู status code ได้ค่า 200
    //   this.jsonData = resp;
    //   // this.headerDatas = resp.headers.get('ชื่อ property ส่วน header ที่ต้องการ');
    //   // ใช้ข้อมูลในส่วนของ response body  ที่ส่งออกมา
    //   this.results = resp.body;
    // });
    //   console.log("@"+this.responseValue);
    var that = this;
        // setTimeout(function(){
            that.model = InquireKey.sampleSubmitSr();
}

  onSubmit(){
    
    //  console.log('this.model : ');      
   
    // let data = f.value;
    // let inv_no = `${encodeURIComponent(f.value.inv_no)}/`;
    // let DATE = `${f.value.DATE}/`;
    // let inv_tax_seller = f.value.inv_tax_seller;
    this.loading = true;
   
    this.svc.InquireKey(this.model)
      .subscribe(result => {
        this.loading = false;
        console.log('result : '+JSON.stringify(result));   
      this.jasontree = JSON.stringify(result);   
      this.responseValue = []; //new Array(result[0].INVOICE)
      let body ={

        "COMPANYNAME": result.VALUE.COMPANYNAME,
        // "WORLDSTATE KEY": result.PO.WORLDSTATE_KEY,
        "PUBLICKEY": result.VALUE.PUBLIC_KEY,

      }
      this.responseValue.push(body); 
            
      this.responseValueEN = [];
      
      //document.getElementById("result").style.display = "block";
      document.getElementById("result").style.display = "block";
      document.getElementById("error").style.display = "none";
      // console.log( "@0 "+result.body[0].INVOICE.InvoiceIdentity);
      // console.log( "@1 "+this.responseValue[0].InvoiceIdentity);

      // BY ID
      // var element = document.getElementById("id01");
      // element.innerHTML = this.responseValue;

    },
    ( err ) => {
      this.loading = false;
      document.getElementById("result").style.display = "none";
      (<HTMLInputElement>document.getElementById("erMass")).value =  err;
      document.getElementById("error").style.display = "block";
      // กรณี error
      if (err.error instanceof Error) {
        // กรณี error ฝั่งผู้ใช้งาน หรือ การเชื่อมต่อเกิด error ขึ้น
        console.log('An error occurred:', err.error.message);
      } else { // กรณี error ฝั่ง server ไม่พบไฟล์ ,server error
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

  
 
 

  createpo() {
    this.router.navigateByUrl('/Generatekeypair');
  }
  endorse() {
    this.router.navigateByUrl('/endorse');
  }
  finance() {
    this.router.navigateByUrl('/finance');
  }

}
