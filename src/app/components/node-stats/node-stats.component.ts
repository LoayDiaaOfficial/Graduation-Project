import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/services/http.service';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-node-stats',
  templateUrl: './node-stats.component.html',
  styleUrls: ['./node-stats.component.css']
})
export class NodeStatsComponent implements OnInit {

  constructor(private httpService:HttpService) { }
  
  gasArrayNotReady =[];
  gasArrayReady=[];
  ngOnInit(): void {
  }
  fetchNodeId;
  disableButton=true;
  getId(event:any){
    this.fetchNodeId=event;
    this.disableButton=false;
    console.log(this.fetchNodeId);
  }
  fetchData(){
    this.httpService.getNodeStats(this.fetchNodeId).subscribe(requestData=>{
      this.gasArrayNotReady=[];
      this.gasArrayReady=[];
      this.gasArrayNotReady.push(requestData);
      for (let i=0;i<this.gasArrayNotReady[0].length;i++){
        this.gasArrayReady.push(this.gasArrayNotReady[0][i]);
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
    XLSX.writeFile(wb, 'Gas_Statistics_Node.xlsx');  
  }  


  nodeArray = [
    {
      nodeId:1
    },
    {
      nodeId:2
    },
    {
      nodeId:3
    },
    {
      nodeId:4
    },
    {
      nodeId:5
    },
    {
      nodeId:6
    },
    {
      nodeId:7
    },
    {
      nodeId:8
    },
    {
      nodeId:9
    },
    {
      nodeId:10
    }
  ]



}




  