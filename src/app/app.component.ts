import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}

// 1. Create a 'timer' component that has a seconds display.  The seconds display should start incrementing as soon as the component is initialized.

// 2. Create a 'form' component with two visible inputs: 'a' and 'b'.  Input a is supposed to be a number while b should be a string that starts with 'prefix'.  In addition, we want a hidden field in the form that contains a timestamp for when the form component was created.

// 3. Management wants to use our timer component as a training tool to help workers fill out forms faster.  Please add the timer component's seconds as part of the form.  

// 4. Add a 'reset' button that clears all the visible fields in the form.

// 5. Add a 'pause' button that stops our timer and disables all form fields.  After pausing, have the button text switch to 'unpause' and reenable all form fields once it's pressed.
