import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallsService } from 'src/app/apicalls.service';
import { browserRefresh } from '../../app.component';
@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  public browserRefresh: boolean;
  public e:Array<any>;
  constructor(private apicallsServiceObj:ApicallsService, private router: Router) { }

  ngOnInit() {
    this.browserRefresh = browserRefresh;
    console.log('refreshed?:', browserRefresh);
    if(this.browserRefresh){
      this.router.navigateByUrl("");
    }
    this.onLoadChatBot();

  }
  onLoadChatBot(){

    console.log("Came to chatbot function");
    var BotStar={appId:"s4f323620-c0ca-4358-9da6-605dbfdcacb5",mode:"livechat"};
    !function(t,a){

       this.e=function () {
        (this.e["q"] = this.e["q"] || []).push(arguments);
       };
       this.e["q"]=this.e["q"]||[];
       t["BotStarApi"]=this.e;
       !function():any{
        var t=a.createElement("script");
        t.type="text/javascript",t.async=true,t.src="https://widget.botstar.com/static/js/widget.js";
        var e=a.getElementsByTagName("script")[0];
        e.parentNode.insertBefore(t,e)
       };
    }

  }


  logout(){
     console.log(this.apicallsServiceObj.getToken());
     this.apicallsServiceObj.logout().subscribe(data=>{
       console.log(data);
       this.router.navigateByUrl("");
     })
  }

}
