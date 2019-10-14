import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

@Component({
  selector: 'create-persons',
  templateUrl: './create-persons.component.html',
  styleUrls: ['../../styles/create-persons.scss']
})
export class CreatePersonsComponent implements OnInit {
  
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
