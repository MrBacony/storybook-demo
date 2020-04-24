import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  type: 'default' | 'flat' | 'outline' = 'default';

  @Output()
  trigger: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  click() {
    this.trigger.emit(this.label);
  }
}
