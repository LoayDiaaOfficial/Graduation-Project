import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx'


@Component({
  selector: 'app-egypt-stats',
  templateUrl: './egypt-stats.component.html',
  styleUrls: ['./egypt-stats.component.css']
})
export class EgyptStatsComponent implements OnInit {
  ngOnInit(): void {
  this.httpService.getEgyptStats().subscribe((requestData)=>{
    this.egyptGasArrayNotReady=[];
    this.egyptGasArrayReady=[];
    this.egyptGasArrayNotReady.push(requestData);
    for (let i=0;i<this.egyptGasArrayNotReady[0].length;i++){
      this.egyptGasArrayReady.push(this.egyptGasArrayNotReady[0][i]);
    }
  })
  }

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';
  ExportTOExcel() {
    console.log(this.TABLE);  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'Gas_Statistics.xlsx');  
  }  

  egyptGasArrayNotReady=[];
  egyptGasArrayReady=[];
  
  constructor(private httpService :HttpService) { }
   

}
