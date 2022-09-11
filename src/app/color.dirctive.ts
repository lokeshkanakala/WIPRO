import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective {
    @Input() color: string = "#000";
    constructor(private el: ElementRef) { }

    @HostListener('mouseover', ["$event"])
    onHover(): void {
        this.el.nativeElement.style.backgroundColor = this.color;
    }

    @HostListener('mouseout', ["$event"])
    onremove(): void {
        this.el.nativeElement.style.backgroundColor = "#ffffff";
    }

}