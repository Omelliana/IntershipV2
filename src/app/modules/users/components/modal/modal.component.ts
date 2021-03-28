import { Component, ViewEncapsulation } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ModalComponent{
  user!: User;

  // уничтожить модалку при закрытии
  autoDestroy(): void {}
}
