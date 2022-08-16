import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'digitalclock';

  date = new Date();

  public hour:any;
  public minute:any;
  public second:any;

  public midnight: any;

  constructor(){

  }
  ngOnInit(){
    setInterval(()=>{
      const date = new Date();
      this.updateDate(date);
    }, 1000);

    
  }

  private updateDate(date: Date){

    const hour = date.getHours();
    this.midnight = hour >=12 ? 'PM' : 'AM';

    this.hour = hour %12;
    this.hour = this.hour ? this.hour :12;

    this.hour = this.hour< 10 ? '0' + this.hour: this.hour;

    const minutes = date.getMinutes();
    this.minute = minutes < 10 ? '0'+minutes : minutes;

    const seconds = date.getSeconds();
    this.second =seconds< 10 ? '0'+ seconds : seconds;
  }
}
