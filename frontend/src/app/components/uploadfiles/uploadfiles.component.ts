import { Component, OnInit } from '@angular/core';
import { RestService } from '../../service/restservice.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uploadfiles',
  templateUrl: './uploadfiles.component.html',
  styleUrls: ['./uploadfiles.component.css']
})
export class UploadfilesComponent implements OnInit {
  private fileTmp: any;

  constructor(private restService:RestService) { }
  
  ngOnInit(): void {
  }

  getFile($event: any): void{
    const [file] = $event.target.files;
    this.fileTmp={
    fileRaw:file,
    fileName:file.name
    }
  }
  
sendFile():void{
    
    const body = new FormData()
    body.append('myfile', this.fileTmp.fileRaw, this.fileTmp.fileName)
    body.append('email','test@test.com')
    this.restService.sendPost(body)
    .subscribe(res => console.log(res))
  }
}
