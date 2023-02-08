import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled = false;

  constructor() {}

  ngOnInit(): void {}

  // Emit on click to button
  onClick() {
    this.btnClick.emit();
  }
}
