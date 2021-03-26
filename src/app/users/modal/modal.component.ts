import { Component, ViewEncapsulation, ElementRef, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent implements OnInit {
  user!: User;
  element: any;
  statuses = ['Приостановлена', 'Подписка активна', 'Заблокирован'];

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    document.body.appendChild(this.element);
  }

  // открыть модалку
  openModal(user: User): void {
    this.user = user;
    this.element.style.display = 'block';
  }

  // закрыть модалку
  closeModal(): void {
    this.element.style.display = 'none';
  }
}
