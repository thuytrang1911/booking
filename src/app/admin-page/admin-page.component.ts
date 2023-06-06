import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  
  ngOnInit(): void { 
  }
  // ngAfterViewInit() { 
  //   this.loadScripts(); 
  //  }
  //  public loadScripts() {
  //    this.renderExternalScript('assets/admin/js/sb-admin-2.min.js').onload = () => {
  //    }
  //    this.renderExternalScript('assets/admin/vendor/chart.js/Chart.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('assets/admin/js/demo/chart-area-demo.js').onload = () => {
  //   }
  //   this.renderExternalScript('assets/admin/js/demo/chart-pie-demo.js').onload = () => {
  //   }

  //   this.renderExternalScript('assets/admin/vendor/jquery/jquery.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js').onload = () => {
  //   }
  //   this.renderExternalScript('assets/admin/vendor/jquery-easing/jquery.easing.min.js').onload = () => {
  //   }
  //  }
  //  public renderExternalScript(src: string): HTMLScriptElement {
  //    const script = document.createElement('script');
  //    script.type = 'text/javascript';
  //    script.src = src;
  //    script.async = true;
  //    script.defer = true;
  //    this.renderer.appendChild(document.body, script);
  //    return script;
  //  }


}
