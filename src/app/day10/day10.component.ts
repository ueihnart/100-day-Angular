import { Component, ElementRef, ViewChild } from '@angular/core';
import { ToggleComponentD10 } from './toggle.component';

@Component({
  selector: 'day10',
  templateUrl: `./day10.component.html`,
})
export class Day10Component {
  @ViewChild(ToggleComponentD10, { static: true })
  toggleComp1: ToggleComponentD10;
  @ViewChild('toggleComp2', { static: true }) toggleComp2: ToggleComponentD10;
  // @ViewChild('toggleBtn', { static: true })
  // toggleBtn: ElementRef<HTMLButtonElement>;
  btn1: boolean = true;
  btn2: boolean = true;

  ngOnInit() {
    // console.log('ngOnInit', this.toggleComp1, this.toggleBtn);
  }

  ngAfterViewInit() {
    setInterval(() => {
      this.toggleComp1.toggle();
    }, 5000);
  }
}
