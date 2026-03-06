import { Component } from '@angular/core';
import { FormGroup, ɵInternalFormsSharedModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Events } from '../../services/events';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-event-page',
  standalone: true,
  templateUrl: './event-page.html',
  styleUrl: './event-page.css',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule,CommonModule],
})
export class EventPage {
  eventForm!: FormGroup;
  successMessage= false;
  constructor(private fb: FormBuilder,private eventsService: Events,private cdr:ChangeDetectorRef) {}
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
      message: [''],
    });
  }

  handleSubmit() {
    const eventData = this.eventForm.value;
    console.log(this.eventForm.value);

    this.eventsService.createEvent(eventData).subscribe(
      (response) => {
        console.log('Event created successfully:', response);
        this.successMessage = true;
        setTimeout(() => {
          this.successMessage = false;
          console.log('Success message cleared');
        }, 3000); 
        this.cdr.detectChanges();
        this.eventForm.reset();
      },
      (error) => {
        console.error('Error creating event:', error);
      }
    );
  }

  closePopup(){
    this.successMessage = false;
  }
}
