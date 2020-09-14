import { Directive, OnInit, ElementRef,Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() defaultColor:String='transparent'
  @Input() highlight:String = 'yellow'
@HostBinding('style.backgroundColor') backgroundColor:String;
  constructor(private eleRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','blue')
    this.backgroundColor=this.defaultColor;
  }

  @HostListener('mouseenter') onMouse(event:Event){
    //this.renderer.setStyle(this.eleRef.nativeElement,'background-color','pink')
    this.backgroundColor=this.highlight;
  } 

  @HostListener('mouseleave') onMouseLeave(event:Event){
   // this.renderer.setStyle(this.eleRef.nativeElement,'background-color','transparent')
   this.backgroundColor=this.defaultColor;
  }

}
