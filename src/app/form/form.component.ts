import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-form',
  templateUrl: 'form.component.html'
})
export class CustomForm {
  address = "Av Siempre Viva 742";
  inputsToSave = ['user_name', 'last_name'];
  $onFinish: EventEmitter<Function> = new EventEmitter();
/*
  onInputChanges = ($event) => {
    console.log($event)
  }
*/
  onFinish = () => {
    this.$onFinish.emit((inputs) => console.log({inputs}));
  }
}
