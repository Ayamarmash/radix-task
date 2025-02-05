import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appList]',
  standalone: true
})
export class ListDirective implements OnChanges {

  @Input() text: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      this.formatText();
    }
  }

  private formatText(): void {
    const formattedText = this.text
      .split('\r\n')
      .filter(line => line.trim() !== '')
      .map(line => `<li>${line}</li>`)
      .join('');

    this.renderer.setProperty(
      this.el.nativeElement,
      'innerHTML',
      `<ul>${formattedText || ''}</ul>`
    );
  }
}
