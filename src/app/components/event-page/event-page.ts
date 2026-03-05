import { Component } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-event-page',
  standalone: true,
  templateUrl: './event-page.html',
  styleUrl: './event-page.css',
  imports: [ɵInternalFormsSharedModule,ReactiveFormsModule],
})
export class EventPage {
  
eventForm!: FormGroup;

constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.eventForm = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    mobile: [''],
    event_type: [''],
    event_date: [''],
    city: [''],
    budget_range: [''],
    message: ['']
  });
}
handleSubmit() {
  console.log(this.eventForm.value); 
 }

}
