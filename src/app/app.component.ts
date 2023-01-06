import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

// 1. Create a 'timer' component that has a second display along with three buttons: start, stop, and reset.

// 2. Create a 'form' component with four visible inputs: 'a', 'b', 'c', and 'd'.  Inputs a and b are supposed to be numbers while c and d should be strings that start with 'prefix'.  In addition, add a fifth hidden field to the form that contains a timestamp for when the form component was created.

// 3. Management wants to use our timer component as a training tool to help workers fill out forms faster.  Please add the timer component's seconds as part of the form.  In addition, all form fields should be disabled while the timer is stopped and pushing the 'reset' button should clear all the visible fields in the form.
