import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[useDropdown]',
})
export class DropdownDirective {
  constructor() {}

  @HostListener('mouseenter', ['$event.target'])
  setExpand(target: EventTarget) {
    if (!(target instanceof HTMLDivElement)) return;
    target.setAttribute('expand', 'true');
  }

  @HostListener('mouseleave', ['$event.target'])
  removeExpand(target: EventTarget) {
    if (!(target instanceof HTMLDivElement)) return;
    target.removeAttribute('expand');
  }
}
