import { Component, OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector:'[basic]'
})
export class BasicComponent implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor='green';
  }

}
