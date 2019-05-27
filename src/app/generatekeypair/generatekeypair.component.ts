import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Generatekeypair } from '.././model';
import { PROCURETOPAYService } from '../service/procuretopay.service';

@Component({
  selector: 'app-generatekeypair',
  templateUrl: './generatekeypair.component.html',
  styleUrls: ['./generatekeypair.component.css']
})
export class GeneratekeypairComponent implements OnInit {
  model: Generatekeypair = Generatekeypair.empty();
  public loading = false;

  constructor(
    private svc: PROCURETOPAYService    
  ) { }

  ngOnInit() {
    var that = this;
        // setTimeout(function(){
            that.model = Generatekeypair.sampleSubmitSr();
  }
  
  onSubmit() {
    this.model.STATUS=this.model.STATUS.trim();
    this.model.Name=this.model.Name.trim();
    
    
    console.log('GENERATE KEYPAIR');
    console.log('saving draft ' + JSON.stringify(this.model));
    this.loading = true;
    this.svc.submitGeneratekeypair(this.model)
            .subscribe(
            sr => {
              this.loading = false;
              let message = 'Generate Keypair Success!';
              (<HTMLInputElement>document.getElementById('status')).value = message;
              console.log('reply:' + JSON.stringify(sr));
              document.getElementById("statusfield").style.display = "block";
               
            },
            error => {
              this.loading = false;

                let header = 'Error';
                // this.progressDialog.close();
                let message = error;
                (<HTMLInputElement>document.getElementById('status')).value = message;
                console.log('Error:' + message);
                document.getElementById("statusfield").style.display = "block";
                
            });
  }
}

