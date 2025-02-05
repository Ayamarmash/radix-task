import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerInputEvent,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [
    MatDatepicker,
    MatDatepickerToggle,
    MatFormField,
    MatDatepickerInput,
    MatInput,
    MatLabel,
    MatHint,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatNativeDateModule,
    FormsModule
  ],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  @Input() Title = 'Choose a date'
  @Input() Type = 'default'
  @Output() dateChanged = new EventEmitter<{ date: Date, type: string }>();

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    event.value ? this.dateChanged.emit({date: event.value, type: this.Type}) : '';
  }
}
