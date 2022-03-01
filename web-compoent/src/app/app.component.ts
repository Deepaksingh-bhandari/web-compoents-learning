import { Component, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation,EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnChanges,AfterViewInit{
  @Input() set appInput(val:any){
    console.log("Input value is",val)
  };
  @Output() appOutput=new EventEmitter();
  title = 'ng-web-compoent';
  @ViewChild(DashboardComponent)dashBoard!:DashboardComponent;

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.appInput)
  }
  ngAfterViewInit(): void {
      console.log("From after Veiw Init",this.dashBoard)
       this.dashBoard._hide()
  }
  slotChanged(e:Event){
    const assigned=(e.target as HTMLSlotElement).assignedNodes()
    const assignedEL=(e.target as HTMLSlotElement).assignedElements()
    console.log("Slot called",assigned,assignedEL)
    if(assigned.length){
      console.log(assigned,assigned[0])
    }
  }
}
