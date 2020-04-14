import { Component , HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit   {
  name = 'Angular 5';

  
  
  constructor(){
       
   
  }

  ngOnInit(){
     window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\o/";
console.log("cond");
  e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
  return confirmationMessage;              // Gecko, WebKit, Chrome <34
});

  }
}
