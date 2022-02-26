import { Component, Input, OnChanges, Output, SimpleChanges, ViewEncapsulation,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnChanges{
  @Input() set appInput(val:any){
    console.log("Input value is",val)
  };
  @Output() appOutput=new EventEmitter();
  title = 'ng-web-compoent';

  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes.appInput)
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
