import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() activeSectionEvent = new EventEmitter<string>();
  activeSection: string;

  onSelect(page) {
    console.log('onSelect(' + page + ')');
    this.activeSection = page;
    this.activeSectionEvent.emit(this.activeSection);
  }

}
