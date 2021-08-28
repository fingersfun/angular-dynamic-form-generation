import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'checkbox',
  template: `
    <div [formGroup]="form">
      <div *ngFor="let opt of field.options" class="form-check form-check">
        <label class="form-check-label">
        <input
        [formControlName]="opt.key"
        class="form-check-input"
        type="checkbox"
        [id]="opt.key"
        value="opt.value"
      />
      {{ opt.label }}</label
    >
      </div>
    </div>
  `
})
export class CheckBoxComponent {
  @Input() field: any = {};
  @Input() form: FormGroup;
  get isValid() {
    return this.form.controls[this.field.name].valid;
  }
  get isDirty() {
    return this.form.controls[this.field.name].dirty;
  }
}
