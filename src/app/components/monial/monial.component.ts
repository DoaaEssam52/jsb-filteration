import { Component, Input } from '@angular/core';

import { Monial } from '../../models/monial.interface';

@Component({
  selector: 'app-monial',
  templateUrl: './monial.component.html',
})
export class MonialComponent {
  stars = new Array(5);

  @Input() monial!: Monial;
}
