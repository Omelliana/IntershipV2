import {
  trigger,
  transition,
  style,
  query,
  group,
  animate,
  AnimationMetadata
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* => isLast', slideTo('right') ),
    transition('isMiddle => isFirst', slideTo('left') ),
    transition('isLast => isFirst', slideTo('left') ),
    transition('isFirst => *', slideTo('right') ),
    transition('isLast => *', slideTo('left') )
  ]);

function slideTo(direction: string): AnimationMetadata[]{
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
          animate('900ms ease', style({ [direction]: '100%' }))
        ], optional),
        query(':enter', [
          animate('900ms ease', style({ [direction]: '0%' }))
        ], optional),
      ])
    ];
}

