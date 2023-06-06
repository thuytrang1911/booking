import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit, AfterViewInit {

  constructor(private renderer: Renderer2) { }
  ngOnInit(): void { 
  }
  ngAfterViewInit() { 
    this.loadScripts(); 
   }
   public loadScripts() {
     this.renderExternalScript('assets/user/js/main.js').onload = () => {
     }

   
    
   }
   public renderExternalScript(src: string): HTMLScriptElement {
     const script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = src;
     script.async = true;
     script.defer = true;
     this.renderer.appendChild(document.body, script);
     return script;
   }

}
