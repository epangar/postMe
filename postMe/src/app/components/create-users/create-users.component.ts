import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['../../styles/create-users.scss']
})
export class CreateUsersComponent implements OnInit {
  
  isFormOpen: boolean;

  @Input() 
  
  set receivedOpenComponent(sentOpenComponent :boolean ){
    
    this.isFormOpen=sentOpenComponent;
  }

  get receivedOpenComponent(){
    return this.isFormOpen;
  }


   
  @Output()  collapseFormEmit : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    
  }

  collapse(){
    this.isFormOpen = !this.isFormOpen;
    this.collapseFormEmit.emit(this.isFormOpen);
  }

}
