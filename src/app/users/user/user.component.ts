import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  marker: HTMLElement =  document.querySelector('#marker') as HTMLElement;

  constructor() {
  }

  ngOnInit(): void {
    this.triggerClickEvent();
  }

  // изменить выбранный элемент
  switchChannel(event: MouseEvent): void{
    const el = event.target as HTMLElement;
    Array.prototype.slice.call(document.querySelectorAll('nav[data-tag="menuList"] a'))
      .forEach((element) => {
      element.classList.remove('selected');
    });
    el.classList.add('selected');
  }

  // изменить ширину ползунка
  indicator(event: MouseEvent): void{
    // на init  и ViewChild почему-то не работает :C
    if (this.marker == null)
    {
      this.marker = document.querySelector('#marker') as HTMLElement;
      setTimeout(() => this.marker.style.transition = `all .5s ease 0s`);
    }
    const target = event.target as HTMLElement;
    this.marker.style.left = target?.offsetLeft + 'px';
    this.marker.style.width = target?.offsetWidth + 'px';
  }

  // затригирить ивент клика у первого элемента
  triggerClickEvent(): void{
    const element: HTMLElement = document.querySelector('nav[data-tag="menuList"]')?.children[1] as HTMLElement;
    element.click();
  }
}
