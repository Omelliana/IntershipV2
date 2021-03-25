import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => isLast', slideTo('right') ),
    transition('* => isFirst', slideTo('left') ),
    transition('isFirst => *', slideTo('right') ),
    transition('isLast => *', slideTo('right') )
  ]);

function slideTo(direction: any): any{
  const optional = { optional: true };
  return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        })
      ], optional),
      query(':enter', [
        style({ [direction]: '-100%' })
      ]),
      group([
        query(':leave', [
          animate('600ms ease', style({ [direction]: '100%' }))
        ], optional),
        query(':enter', [
          animate('600ms ease', style({ [direction]: '0%' }))
        ], optional),
      ])
    ];
}
