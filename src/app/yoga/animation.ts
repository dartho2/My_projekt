import { trigger, state, transition, style, animate, query } from '@angular/animations';

export let fade = trigger('fade', [
   state('void', style({opacity: 0})),
   transition(':enter, :leave', [animate(2000)])
    
])
export let routerAnimations =
trigger('routerAnimations', [
    transition('yoga/zajecia => yoga', [
      query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
      query(':leave', style({ zIndex: 100 })),
      query(':enter', style({ transform: 'translateY(100%)' }))
    ])])