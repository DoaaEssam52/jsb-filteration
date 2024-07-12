import { Component } from '@angular/core';

import { Monial } from '../../models/monial.interface';

@Component({
  selector: 'app-monials',
  templateUrl: './monials.component.html',
  styleUrls: ['./monials.component.scss'],
})
export class MonialsComponent {
  monials: Monial[] = [
    {
      name: 'Kathryn Murphy',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
      rate: 5,
    },
    {
      name: 'Mark David',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
      rate: 5,
    },
    {
      name: 'Anne George',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
      rate: 5,
    },
    {
      name: 'Samuel Mark',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled`,
      rate: 5,
    },
  ];
}
