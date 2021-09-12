import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {debounceTime} from 'rxjs/operators';


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
    const mouseOut$ = fromEvent(this.button.nativeElement, 'mouseover');

    merge(mouseOut$, mouseOver$).pipe(
      debounceTime(100)
    ).subscribe(x => console.log(x));

  }

}
