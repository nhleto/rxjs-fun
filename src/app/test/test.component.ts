import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {debounceTime, take} from 'rxjs/operators';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {
  @ViewChild('buttonElement') button: any;
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const mouseOver$ = fromEvent(this.button.nativeElement, 'mouseover');
    const mouseOut$ = fromEvent(this.button.nativeElement, 'mouseout');

    merge(mouseOut$, mouseOver$)
      .pipe(take(5))
      .subscribe(x => console.log(x));

  } 

}
