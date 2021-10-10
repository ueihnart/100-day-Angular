import { Component, ViewChild } from '@angular/core';
import { ToggleComponentD10 } from './toggle.component';

@Component({
  selector: 'day10',
  templateUrl: `./day10.component.html`,
})
export class Day10Component {
  @ViewChild(ToggleComponentD10, { static: true })
  toggleComp: ToggleComponentD10;
  btn1: boolean = true;
  btn2: boolean = true;

  ngOnInit() {
    console.log('ngOnInit', this.toggleComp);
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.toggleComp.toggle();
    }, 1000);
  }
}
