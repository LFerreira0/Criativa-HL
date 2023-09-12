import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  active = false;
  viewSize!:  number;
  constructor() { }

  ngOnInit(): void {
    this.viewSize = window.innerWidth;    
  }
  @HostListener("window:resize")
  public resizweConfig(){
    this.viewSize = window.innerWidth;    
  }

  public amburguer(){
    this.active = !this.active;    
  }
}
