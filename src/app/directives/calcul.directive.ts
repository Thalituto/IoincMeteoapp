import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCalcul]'
})
export class CalculDirective implements OnChanges {

  @Input() one !: number;
  @Input() two !: number;

  ngOnChanges(_changes: SimpleChanges): void {
    if (this.two === 0) {
      console.error('Division par zéro non autorisée.');
      
      throw new Error('Division par zéro non autorisée.');
    }
  }
}
