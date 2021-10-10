import { Component } from '@angular/core';

@Component({
  selector: 'day9',
  template: `
    <h1>Two-way Data Binding<h1>
    <toggle-d9 [(checked)]='btn1'></toggle-d9>
    <br/>
    <toggle-d9 [(checked)]='btn2'></toggle-d9>
  `,
})
export class Day9Component {
  btn1: boolean = true;
  btn2: boolean = true;
}
