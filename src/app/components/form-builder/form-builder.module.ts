import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// components
import { FormBuilderComponent } from './form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './fields/textbox';
import { DropDownComponent } from './fields/dropdown';
import { CheckBoxComponent } from './fields/checkbox';
import { RadioComponent } from './fields/radio';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FormBuilderComponent,
        FieldBuilderComponent,
        TextBoxComponent,
        DropDownComponent,
        CheckBoxComponent,
        RadioComponent
    ],
    exports: [FormBuilderComponent],
    providers: []
})
export class FormBuilderModule { }
