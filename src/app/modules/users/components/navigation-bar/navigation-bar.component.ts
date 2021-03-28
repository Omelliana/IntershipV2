import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import { slider } from '../../models/route-animations';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [ slider ]
})

export class NavigationBarComponent implements OnInit, AfterViewInit{
  @ViewChild('navigationSlider') navigationSlider!: ElementRef;

  navigationElements = [
    { name: 'Все', link: '/all' },
    { name: 'Заблокированные', link: '/blocked' },
    { name: 'Активные', link: '/active'}
  ];
  selectedElement = this.navigationElements[0].name;
  disableAnimations = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/all']);
  }

  ngAfterViewInit(): void {
    this.disableAnimations = false;
  }

  // изменить выбранный элемент
  onSelect(element: string): void{
    this.selectedElement = element;
  }

  // изменить ширину ползунка
  indicator(event: MouseEvent): void{
    const target = event.target as HTMLElement;
    this.navigationSlider.nativeElement.style.left = target.offsetLeft + 'px';
    this.navigationSlider.nativeElement.style.width = target.offsetWidth + 'px';
  }

  prepareRoute(outlet: RouterOutlet): void
  {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
