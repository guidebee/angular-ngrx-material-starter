import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'anms-react-examples',
  templateUrl: './react-examples.component.html',
  styleUrls: ['./react-examples.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
