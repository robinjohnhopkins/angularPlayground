import { Component, OnInit } from '@angular/core';
import { pageTransition } from '../animations';

@Component({
  selector: 'app-howto',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.scss'],
  animations: [ pageTransition ]
})
export class HowtoComponent implements OnInit {
  state: string = 'in';
  constructor() { }

  ngOnInit(): void {
    this.state = (this.state === 'in' ? 'out' : 'in');
  }
}
