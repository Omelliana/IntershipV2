import { Component, ComponentFactoryResolver, Input, ViewContainerRef } from '@angular/core';
import { User } from '../../models/user';
import * as moment from 'moment';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent {
  @Input() users!: User[];

  getImageUrl = 'https://randomuser.me/api/portraits/men/32.jpg';

  constructor(private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  // проверка если изображение не действительно и загрузка заглушки
  alertError(elem: any): void{
    elem.target.src = this.getImageUrl;
  }

  // отобразить ФИО
  getFIO(user: User): string{
    return `${user.fname} ${user.name[0]}. ${user.mname[0]}.`;
  }

  // отобразить баланс
  getBalance(fields: any): string{
    return `Баланс: ${fields.replace(',', ' ')}`;
  }

  // отобразить время
  getTime(user: User): string{
    const days = user.lastUpdatedAt;
    return moment().diff(days, 'days') > 319 ?
      moment(days).format('YYYY.MM.DD') :
      moment(days).fromNow();
  }

  // открыть модалку
  openModal(user: User): void{
    this.viewContainerRef.clear();
    const componentFactory =  this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    componentRef.instance.user = user;
    componentRef.instance.autoDestroy = () => componentRef.destroy();
  }

  // идентифицировать пользователя с его id для *ngFor
  identify(index: any, user: User): number{
    return user.id;
  }
}
