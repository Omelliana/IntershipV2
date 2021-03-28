import {Component, ElementRef, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnInit {
  @Input() user!: User;
  @ViewChild('dropdown') dropdown!: ElementRef;
  @ViewChild('dropdownList') dropdownList!: ElementRef;

  dropdownIsHidden = true;

  constructor(private renderer: Renderer2) {
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target !== this.dropdown.nativeElement && e.target !== this.dropdownList.nativeElement) {
        this.dropdownIsHidden = true;
      }
    });
  }

  ngOnInit(): void {
  }
}
