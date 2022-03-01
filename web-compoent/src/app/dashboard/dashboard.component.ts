import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  componentCount:number=0;
  @ViewChild('dashboard',{read:ElementRef}) dashboard!:ElementRef;
  ngOnInit(): void {
  }
  _add(){
    console.log("add called")
    let elem=document.createElement('custom-elem')
    elem.innerHTML=`<span>Dynamically added component ${this.componentCount++}</span>`
    // let sRoot=.shadowRoot?.querySelector('#dashboard')
    // let dashboard=sRoot.querySelector()
    console.log(elem,this.dashboard)
    this.dashboard.nativeElement.appendChild(elem)
  }
  _hide(){
    console.log("Dashboard Hide called")
    this.dashboard.nativeElement['hidden']=true;
  }
  _toggle(){
    this.dashboard.nativeElement['hidden']=this.dashboard.nativeElement['hidden']?false:true;
  }
}
