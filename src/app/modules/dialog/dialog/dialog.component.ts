import {Component, OnInit, ViewChild} from '@angular/core';
import {DynamicChildLoaderDirective} from "../load-child.directive";
import {DynamicChildComponentComponent} from "../../../pages/dynamic-child-component/dynamic-child-component.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild(DynamicChildLoaderDirective, { static: true }) dynamicChild!: DynamicChildLoaderDirective;

  constructor() { }

  ngOnInit(): void {
    // this.loadDynamicComponent();
  }

  openComponenet() {
    this.dynamicChild.viewContainerRef.createComponent(DynamicChildComponentComponent);
  }

  closecomponenet() {
    this.dynamicChild.viewContainerRef.clear();
  }

  private loadDynamicComponent() {
    this.dynamicChild.viewContainerRef.createComponent(DynamicChildComponentComponent);
  }

}
