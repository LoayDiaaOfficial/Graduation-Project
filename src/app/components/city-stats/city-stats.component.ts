import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { ElementRef, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-city-stats',
  templateUrl: './city-stats.component.html',
  styleUrls: ['./city-stats.component.css']
})
export class CityStatsComponent implements OnInit {

  constructor(private httpService:HttpService){}

  cityArray=
  [
    {
      name:'Alexandria Governorate',
              id:0,
              imagePath:'../../assets/Alexandria.png'
            },
  {
              name:'Aswan Governorate',
              id:1,
              imagePath:'../../assets/Aswan.png'
            },
  {
              name:'Asyut Governorate',
              id:2,
              imagePath:'../../assets/Asyut.png'
            },
  {
              name:'Beheira Governorate',
              id:3,
              imagePath:'../../assets/Behira.png'
            },
  {
              name:'Beni Suef Governorate',
              id:4,
              imagePath:'../../assets/Beni_Suef.png'
            },
  {
      name:'Cairo Governorate',
            id:5,
            imagePath:'../../assets/Cairo.png'
            },
  {
              name:'Dakahlia Governorate',
              id:6,
              imagePath:'../../assets/Dakahliya.png'
            },
  {
              name:'Damietta Governorate',
              id:7,
              imagePath:'../../assets/Damietta.png'
            },
  {
              name:'Faiyum Governorate',
              id:8,
              imagePath:'../../assets/Fayioum.png'
            },
  {
              name:'Gharbia Governorate',
              id:9,
              imagePath:'../../assets/Gharbiya.png'
            },
  {
              name:'Giza Governorate',
              id:10,
              imagePath:'../../assets/Giza.png'
            },
  {
              name:'Ismailia Governorate',
              id:11,
              imagePath:'../../assets/Ismailiya.png'
            },
  {
              name:'Kafr El Sheikh Governorate',
              id:12,
              imagePath:'../../assets/Kafr-El-Sheikh.png'
            },
  {
              name:'Luxor Governorate',
              id:13,
              imagePath:'../../assets/Luxor.png'
            },
  {
              name:'Matruh Governorate',
              id:14,
              imagePath:'../../assets/Matrouh.png'
            },
  {
              name:'Minya Governorate',
              id:15,
              imagePath:'../../assets/Miniya.png'
            },
  {
              name:'Monufia Governorate',
              id:16,
              imagePath:'../../assets/Menoufia.png'
            },
  {
              name:'New Valley Governorate',
              id:17,
              imagePath:'../../assets/New_Valley.png'
            },
  {
              name:'North Sinai Governorate',
              id:18,
              imagePath:'../../assets/North_Sinai.png'
            },
  {
              name:'Port Said Governorate',
              id:19,
              imagePath:'../../assets/Port-Said.png'
            },
  {
              name:'Qalyubia Governorate',
              id:20,
              imagePath:'../../assets/Qalyubia.png'
            },
  {
              name:'Qena Governorate',
              id:21,
              imagePath:'../../assets/Qena.png'
            },
  {
              name:'Red Sea Governorate',
              id:22,
              imagePath:'../../assets/Red_Sea.png'
            },
  {
              name:'Sharqia Governorate',
              id:23,
              imagePath:'../../assets/Sharkiya.png'
            },
  {
              name:'Sohag Governorate',
              id:24,
              imagePath:'../../assets/Sohag.png'
            },
  {
              name:'South Sinai Governorate',
              id:25,
              imagePath:'../../assets/South_Sinai.png'
            },
  {
              name:'Suez Governorate',
              id:26,
              imagePath:'../../assets/Suez.png'
            }]

  cityGasArrayNotReady=[];
  cityGasArrayReady=[];   

  ngOnInit(): void {
  }
  fetchId;
  disableButton =true;
  getId(event:any){
    this.fetchId=event;
    this.disableButton=false;
    console.log(this.fetchId);
  }

  fetchData(){
    this.httpService.getCityStats(this.fetchId).subscribe(requestData=>{
      this.cityGasArrayNotReady=[];
      this.cityGasArrayReady=[];
      this.cityGasArrayNotReady.push(requestData);
      for (let i=0;i<this.cityGasArrayNotReady[0].length;i++){
        this.cityGasArrayReady.push(this.cityGasArrayNotReady[0][i]);
      }
      console.log(this.cityGasArrayReady);
    })
  }

  @ViewChild('TABLE', { static: false }) TABLE: ElementRef;  
  title = 'Excel';
  ExportTOExcel() {
    console.log(this.TABLE);  
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);  
    const wb: XLSX.WorkBook = XLSX.utils.book_new();  
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');  
    XLSX.writeFile(wb, 'Gas_Statistics_city.xlsx');  
  }  

}
