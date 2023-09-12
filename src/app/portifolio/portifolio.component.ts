import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.scss']
})
export class PortifolioComponent implements OnInit {  
  viewSize!:  number;
  constructor() { }

  ngOnInit(): void {
    this.viewSize = window.innerWidth;
  }

  @HostListener("window:resize")
  public resizeConfig(){        
    this.viewSize = window.innerWidth;
  }
}
