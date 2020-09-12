import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[inputDetector]'
})
export class InputDetectorDirective implements OnInit, OnDestroy {
  private inputsField = {};
  private subscription = new Subscription();
  private readonly FORM = 'FORM';
  private readonly INPUT = 'input';
  private readonly CHANGE_EVENT = 'change';

  @Input() inputsToSave?: string[];
  @Input() onFinish: EventEmitter<Function> = new EventEmitter();
  @Output() onInputChanges: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.subscribeFinishEvent();
  }

  ngAfterViewInit() {
    const groupName = this.el.nativeElement.tagName == this.FORM ? this.el.nativeElement.name : this.el.nativeElement.id;
    this.inputsField[groupName] = {};
    let inputs = this.el.nativeElement.querySelectorAll(this.INPUT);

    if (this.inputsToSave && this.inputsToSave.length > 0) {
      inputs = [...inputs].filter(input => this.inputsToSave.includes(input.name));
    }

    inputs.forEach(input => {
      this.saveFirstValues(input, groupName);
      input.addEventListener(this.CHANGE_EVENT, (event) => this.saveInputChanges(event, groupName))
    });
  }

  saveInputChanges = (event, formName) => {
    this.inputsField[formName][event.target.name]['new'] = event.target.value;
  }

  saveFirstValues = (event, formName) => {
    this.inputsField[formName][event.name] = {
      old: event.value,
      new: null
    }
  }

  subscribeFinishEvent = () => {
    //this.subscription.add(this.onFinish.subscribe(_ => this.onInputChanges.emit(this.inputsField)));
    this.subscription.add(this.onFinish.subscribe(callback => callback(this.inputsField)));
  }

  ngOnDestroy() {
    if (!this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
