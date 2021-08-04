import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  onMenuClick() {
      document.getElementById("navbar").classList.remove('in');
      console.log("Se cerraría");
      // alert("Algo");
  }

}
