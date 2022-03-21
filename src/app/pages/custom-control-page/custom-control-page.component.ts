import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-control-page',
  templateUrl: './custom-control-page.component.html',
  styleUrls: ['./custom-control-page.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomControlPageComponent),
      multi: true,
    }
  ]
})
export class CustomControlPageComponent implements OnInit, ControlValueAccessor {
  value: string = '';
  onChange: any = () => {}
  onTouch: any = () => {}
  disabled: boolean = false;

  constructor() { }

  writeValue(obj: any): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    console.log(isDisabled);
    
    this.disabled = isDisabled
  }

  ngOnInit(): void {
  }

  setValue() {
    this.onChange(this.value)
    this.onTouch()
  }

  disable() {
    this.disabled = true;
  }

}
