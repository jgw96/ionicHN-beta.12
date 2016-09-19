/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './show-stories';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/stories';
import * as import10 from 'ionic-angular/components/loading/loading';
import * as import11 from 'ionic-angular/components/alert/alert';
import * as import12 from '@angular/core/src/metadata/view';
import * as import13 from '@angular/core/src/linker/component_factory';
import * as import14 from 'ionic-angular/components/toolbar/toolbar';
import * as import15 from 'ionic-angular/components/navbar/navbar';
import * as import16 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import17 from 'ionic-angular/components/content/content';
import * as import18 from 'ionic-angular/components/searchbar/searchbar';
import * as import19 from 'ionic-angular/components/list/list';
import * as import20 from '@angular/common/src/directives/ng_for';
import * as import21 from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import * as import22 from 'ionic-angular/components/infinite-scroll/infinite-scroll-content';
import * as import23 from 'ionic-angular/config/config';
import * as import24 from '@angular/core/src/linker/element_ref';
import * as import25 from 'ionic-angular/navigation/view-controller';
import * as import26 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import27 from 'ionic-angular/components/app/app';
import * as import28 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import29 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import30 from 'ionic-angular/util/keyboard';
import * as import31 from '@angular/core/src/zone/ng_zone';
import * as import32 from 'ionic-angular/components/tabs/tabs';
import * as import33 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import34 from '../../node_modules/ionic-angular/components/searchbar/searchbar.ngfactory';
import * as import35 from '@angular/forms/src/directives/ng_control';
import * as import36 from 'ionic-angular/gestures/gesture-controller';
import * as import37 from '@angular/core/src/linker/template_ref';
import * as import38 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import39 from '../../node_modules/ionic-angular/components/infinite-scroll/infinite-scroll-content.ngfactory';
import * as import40 from 'ionic-angular/components/item/item-sliding';
import * as import41 from '@angular/core/src/linker/query_list';
import * as import42 from 'ionic-angular/components/item/item';
import * as import43 from '@angular/common/src/directives/ng_if';
import * as import44 from 'ionic-angular/components/button/button';
import * as import45 from 'ionic-angular/components/icon/icon';
import * as import46 from '../../node_modules/ionic-angular/components/item/item-sliding.ngfactory';
import * as import47 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import48 from 'ionic-angular/util/form';
import * as import49 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
var renderType_ShowStoriesPage_Host:import0.RenderComponentType = (null as any);
class _View_ShowStoriesPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ShowStoriesPage_0_4:import3.ShowStoriesPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ShowStoriesPage_Host0,renderType_ShowStoriesPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ShowStoriesPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ShowStoriesPage_0_4 = new import3.ShowStoriesPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.StoriesService),this.parentInjector.get(import10.LoadingController),this.parentInjector.get(import11.AlertController));
    this._appEl_0.initComponent(this._ShowStoriesPage_0_4,[],compView_0);
    compView_0.create(this._ShowStoriesPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.ShowStoriesPage) && (0 === requestNodeIndex))) { return this._ShowStoriesPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_ShowStoriesPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_ShowStoriesPage_Host === (null as any))) { (renderType_ShowStoriesPage_Host = viewUtils.createRenderComponentType('',0,import12.ViewEncapsulation.None,[],{})); }
  return new _View_ShowStoriesPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ShowStoriesPageNgFactory:import13.ComponentFactory<import3.ShowStoriesPage> = new import13.ComponentFactory<import3.ShowStoriesPage>('ng-component',viewFactory_ShowStoriesPage_Host0,import3.ShowStoriesPage);
const styles_ShowStoriesPage:any[] = [];
var renderType_ShowStoriesPage:import0.RenderComponentType = (null as any);
class _View_ShowStoriesPage0 extends import1.AppView<import3.ShowStoriesPage> {
  _el_0:any;
  _Header_0_3:import14.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import15.Navbar;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _ToolbarTitle_4_4:import16.ToolbarTitle;
  _text_5:any;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  /*private*/ _appEl_9:import2.AppElement;
  _Content_9_4:import17.Content;
  _text_10:any;
  _el_11:any;
  /*private*/ _appEl_11:import2.AppElement;
  _Toolbar_11_4:import14.Toolbar;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import2.AppElement;
  _Searchbar_13_4:import18.Searchbar;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _List_16_3:import19.List;
  _text_17:any;
  _anchor_18:any;
  /*private*/ _appEl_18:import2.AppElement;
  _TemplateRef_18_5:any;
  _NgFor_18_6:import20.NgFor;
  _text_19:any;
  _text_20:any;
  _el_21:any;
  _InfiniteScroll_21_3:import21.InfiniteScroll;
  _text_22:any;
  _el_23:any;
  /*private*/ _appEl_23:import2.AppElement;
  _InfiniteScrollContent_23_4:import22.InfiniteScrollContent;
  _text_24:any;
  _text_25:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_13:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ShowStoriesPage0,renderType_ShowStoriesPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import14.Header(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import25.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','primary');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import26.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import15.Navbar(this.parentInjector.get(import27.App),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._el_4);
    var compView_4:any = import28.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(4),this._appEl_4);
    this._ToolbarTitle_4_4 = new import16.ToolbarTitle(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_4),this.renderer,this.parentInjector.get(import14.Toolbar,(null as any)),this._Navbar_2_4);
    this._appEl_4.initComponent(this._ToolbarTitle_4_4,[],compView_4);
    this._text_5 = this.renderer.createText((null as any),'Show Stories',(null as any));
    compView_4.create(this._ToolbarTitle_4_4,[[].concat([this._text_5])],(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      [],
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_6
      ]
      )
    ]
    ,(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n',(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_9 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_9,'class','home');
    this._appEl_9 = new import2.AppElement(9,(null as any),this,this._el_9);
    var compView_9:any = import29.viewFactory_Content0(this.viewUtils,this.injector(9),this._appEl_9);
    this._Content_9_4 = new import17.Content(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_9),this.renderer,this.parentInjector.get(import27.App),this.parentInjector.get(import30.Keyboard),this.parentInjector.get(import31.NgZone),this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import32.Tabs,(null as any)));
    this._appEl_9.initComponent(this._Content_9_4,[],compView_9);
    this._text_10 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_11 = this.renderer.createElement((null as any),'ion-toolbar',(null as any));
    this.renderer.setElementAttribute(this._el_11,'class','toolbar');
    this._appEl_11 = new import2.AppElement(11,9,this,this._el_11);
    var compView_11:any = import33.viewFactory_Toolbar0(this.viewUtils,this.injector(11),this._appEl_11);
    this._Toolbar_11_4 = new import14.Toolbar(this.parentInjector.get(import25.ViewController,(null as any)),this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_11),this.renderer);
    this._appEl_11.initComponent(this._Toolbar_11_4,[],compView_11);
    this._text_12 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'ion-searchbar',(null as any));
    this._appEl_13 = new import2.AppElement(13,11,this,this._el_13);
    var compView_13:any = import34.viewFactory_Searchbar0(this.viewUtils,this.injector(13),this._appEl_13);
    this._Searchbar_13_4 = new import18.Searchbar(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import35.NgControl,(null as any)));
    this._appEl_13.initComponent(this._Searchbar_13_4,[],compView_13);
    compView_13.create(this._Searchbar_13_4,[],(null as any));
    this._text_14 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_11.create(this._Toolbar_11_4,[
      [],
      [],
      [],
      [].concat([
        this._text_12,
        this._el_13,
        this._text_14
      ]
      )
    ]
    ,(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_16 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_16_3 = new import19.List(this.parentInjector.get(import23.Config),new import24.ElementRef(this._el_16),this.renderer,this.parentInjector.get(import36.GestureController));
    this._text_17 = this.renderer.createText(this._el_16,'\n    ',(null as any));
    this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16,(null as any));
    this._appEl_18 = new import2.AppElement(18,16,this,this._anchor_18);
    this._TemplateRef_18_5 = new import37.TemplateRef_(this._appEl_18,viewFactory_ShowStoriesPage1);
    this._NgFor_18_6 = new import20.NgFor(this._appEl_18.vcRef,this._TemplateRef_18_5,this.parentInjector.get(import38.IterableDiffers),this.ref);
    this._text_19 = this.renderer.createText(this._el_16,'\n  ',(null as any));
    this._text_20 = this.renderer.createText((null as any),'\n\n  ',(null as any));
    this._el_21 = this.renderer.createElement((null as any),'ion-infinite-scroll',(null as any));
    this._InfiniteScroll_21_3 = new import21.InfiniteScroll(this._Content_9_4,this.parentInjector.get(import31.NgZone),new import24.ElementRef(this._el_21));
    this._text_22 = this.renderer.createText(this._el_21,'\n    ',(null as any));
    this._el_23 = this.renderer.createElement(this._el_21,'ion-infinite-scroll-content',(null as any));
    this._appEl_23 = new import2.AppElement(23,21,this,this._el_23);
    var compView_23:any = import39.viewFactory_InfiniteScrollContent0(this.viewUtils,this.injector(23),this._appEl_23);
    this._InfiniteScrollContent_23_4 = new import22.InfiniteScrollContent(this._InfiniteScroll_21_3,this.parentInjector.get(import23.Config));
    this._appEl_23.initComponent(this._InfiniteScrollContent_23_4,[],compView_23);
    compView_23.create(this._InfiniteScrollContent_23_4,[],(null as any));
    this._text_24 = this.renderer.createText(this._el_21,'\n  ',(null as any));
    this._text_25 = this.renderer.createText((null as any),'\n',(null as any));
    compView_9.create(this._Content_9_4,[
      [].concat([
        this._text_10,
        this._el_11,
        this._text_15,
        this._el_16,
        this._text_20,
        this._el_21,
        this._text_25
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_13,'ionInput',this.eventHandler(this._handle_ionInput_13_0.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_9 = import7.UNINITIALIZED;
    this._expr_10 = import7.UNINITIALIZED;
    const subscription_0:any = this._Searchbar_13_4.ionInput.subscribe(this.eventHandler(this._handle_ionInput_13_0.bind(this)));
    this._expr_11 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_21,'ionInfinite',this.eventHandler(this._handle_ionInfinite_21_0.bind(this)));
    const subscription_1:any = this._InfiniteScroll_21_3.ionInfinite.subscribe(this.eventHandler(this._handle_ionInfinite_21_0.bind(this)));
    this._expr_13 = import7.UNINITIALIZED;
    this.init([],[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._anchor_18,
      this._text_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import16.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._ToolbarTitle_4_4; }
    if (((token === import15.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Navbar_2_4; }
    if (((token === import14.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Header_0_3; }
    if (((token === import18.Searchbar) && (13 === requestNodeIndex))) { return this._Searchbar_13_4; }
    if (((token === import14.Toolbar) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Toolbar_11_4; }
    if (((token === import37.TemplateRef) && (18 === requestNodeIndex))) { return this._TemplateRef_18_5; }
    if (((token === import20.NgFor) && (18 === requestNodeIndex))) { return this._NgFor_18_6; }
    if (((token === import19.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._List_16_3; }
    if (((token === import22.InfiniteScrollContent) && (23 === requestNodeIndex))) { return this._InfiniteScrollContent_23_4; }
    if (((token === import21.InfiniteScroll) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._InfiniteScroll_21_3; }
    if (((token === import17.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._Content_9_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_2_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_9_4.ngOnInit(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Searchbar_13_4.ngOnInit(); }
    changes = (null as any);
    const currVal_11:any = this.context.stories;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this._NgFor_18_6.ngForOf = currVal_11;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_11,currVal_11);
      this._expr_11 = currVal_11;
    }
    if ((changes !== (null as any))) { this._NgFor_18_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_18_6.ngDoCheck(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InfiniteScrollContent_23_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._InfiniteScroll_21_3.ngAfterContentInit(); } }
    const currVal_1:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_9_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_9,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._Toolbar_11_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementClass(this._el_11,'statusbar-padding',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Searchbar_13_4._value;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_13,'searchbar-has-value',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Searchbar_13_4._isActive;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_13,'searchbar-active',currVal_7);
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._Searchbar_13_4.showCancelButton;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_13,'searchbar-show-cancel',currVal_8);
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = this._Searchbar_13_4.shouldAlignLeft();
    if (import4.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementClass(this._el_13,'searchbar-left-aligned',currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this._Searchbar_13_4._sbHasFocus;
    if (import4.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementClass(this._el_13,'searchbar-has-focus',currVal_10);
      this._expr_10 = currVal_10;
    }
    const currVal_13:any = this._InfiniteScrollContent_23_4.inf.state;
    if (import4.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_23,'state',((currVal_13 == (null as any))? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); }
      this._Searchbar_13_4.ngAfterViewChecked();
    }
  }
  destroyInternal():void {
    this._InfiniteScroll_21_3.ngOnDestroy();
    this._Content_9_4.ngOnDestroy();
  }
  private _handle_ionInput_13_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.searchItems($event)) !== false);
    return (true && pd_0);
  }
  private _handle_ionInfinite_21_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.doInfinite($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ShowStoriesPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.ShowStoriesPage> {
  if ((renderType_ShowStoriesPage === (null as any))) { (renderType_ShowStoriesPage = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/myApp/.tmp/pages/show-stories/show-stories.html',0,import12.ViewEncapsulation.None,styles_ShowStoriesPage,{})); }
  return new _View_ShowStoriesPage0(viewUtils,parentInjector,declarationEl);
}
class _View_ShowStoriesPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ItemSliding_0_4:import40.ItemSliding;
  _query_Item_0_0:import41.QueryList<any>;
  _query_ItemOptions_0_1:import41.QueryList<any>;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Item_2_4:import42.Item;
  _ItemContent_2_5:import42.ItemContent;
  _query_Label_2_0:import41.QueryList<any>;
  _query_Button_2_1:import41.QueryList<any>;
  _query_Icon_2_2:import41.QueryList<any>;
  _text_3:any;
  _el_4:any;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _text_11:any;
  _el_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _ItemOptions_17_3:import40.ItemOptions;
  _text_18:any;
  _anchor_19:any;
  /*private*/ _appEl_19:import2.AppElement;
  _TemplateRef_19_5:any;
  _NgIf_19_6:import43.NgIf;
  _text_20:any;
  _el_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _Button_21_4:import44.Button;
  _text_22:any;
  _el_23:any;
  _Icon_23_3:import45.Icon;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ShowStoriesPage1,renderType_ShowStoriesPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item-sliding',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import46.viewFactory_ItemSliding0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ItemSliding_0_4 = new import40.ItemSliding((<_View_ShowStoriesPage0>this.parent)._List_16_3,this.renderer,new import24.ElementRef(this._el_0),this.parent.parentInjector.get(import31.NgZone));
    this._query_Item_0_0 = new import41.QueryList<any>();
    this._query_ItemOptions_0_1 = new import41.QueryList<any>();
    this._appEl_0.initComponent(this._ItemSliding_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','item item-block');
    this.renderer.setElementAttribute(this._el_2,'ion-item','');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import47.viewFactory_Item0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Item_2_4 = new import42.Item(this.parent.parentInjector.get(import48.Form),this.parent.parentInjector.get(import23.Config),new import24.ElementRef(this._el_2),this.renderer);
    this._ItemContent_2_5 = new import42.ItemContent();
    this._query_Label_2_0 = new import41.QueryList<any>();
    this._query_Button_2_1 = new import41.QueryList<any>();
    this._query_Icon_2_2 = new import41.QueryList<any>();
    this._appEl_2.initComponent(this._Item_2_4,[],compView_2);
    this._text_3 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'div',(null as any));
    this._text_5 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._el_6 = this.renderer.createElement(this._el_4,'h2',(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'',(null as any));
    this._text_8 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._el_9 = this.renderer.createElement(this._el_4,'h3',(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'',(null as any));
    this._text_11 = this.renderer.createText(this._el_4,'\n          ',(null as any));
    this._el_12 = this.renderer.createElement(this._el_4,'p',(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'',(null as any));
    this._text_14 = this.renderer.createText(this._el_4,'\n        ',(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._query_Label_2_0.reset([]);
    this._Item_2_4.contentLabel = this._query_Label_2_0.first;
    compView_2.create(this._Item_2_4,[
      [],
      [],
      [].concat([
        this._text_3,
        this._el_4,
        this._text_15
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_17 = this.renderer.createElement((null as any),'ion-item-options',(null as any));
    this._ItemOptions_17_3 = new import40.ItemOptions(new import24.ElementRef(this._el_17),this.renderer);
    this._text_18 = this.renderer.createText(this._el_17,'\n        ',(null as any));
    this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17,(null as any));
    this._appEl_19 = new import2.AppElement(19,17,this,this._anchor_19);
    this._TemplateRef_19_5 = new import37.TemplateRef_(this._appEl_19,viewFactory_ShowStoriesPage2);
    this._NgIf_19_6 = new import43.NgIf(this._appEl_19.vcRef,this._TemplateRef_19_5);
    this._text_20 = this.renderer.createText(this._el_17,'\n      ',(null as any));
    this._el_21 = this.renderer.createElement(this._el_17,'button',(null as any));
    this.renderer.setElementAttribute(this._el_21,'color','secondary');
    this.renderer.setElementAttribute(this._el_21,'ion-button','');
    this._appEl_21 = new import2.AppElement(21,17,this,this._el_21);
    var compView_21:any = import49.viewFactory_Button0(this.viewUtils,this.injector(21),this._appEl_21);
    this._Button_21_4 = new import44.Button((null as any),'',this.parent.parentInjector.get(import23.Config),new import24.ElementRef(this._el_21),this.renderer);
    this._appEl_21.initComponent(this._Button_21_4,[],compView_21);
    this._text_22 = this.renderer.createText((null as any),'\n        ',(null as any));
    this._el_23 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_23,'id','shareButton');
    this.renderer.setElementAttribute(this._el_23,'name','share');
    this.renderer.setElementAttribute(this._el_23,'role','img');
    this._Icon_23_3 = new import45.Icon(this.parent.parentInjector.get(import23.Config),new import24.ElementRef(this._el_23),this.renderer);
    this._text_24 = this.renderer.createText((null as any),'\n      ',(null as any));
      compView_21.create(this._Button_21_4,[[].concat([
        this._text_22,
        this._el_23,
        this._text_24
      ]
    )],(null as any));
    this._text_25 = this.renderer.createText(this._el_17,'\n      ',(null as any));
    this._text_26 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Item_0_0.reset([this._Item_2_4]);
    this._ItemSliding_0_4.item = this._query_Item_0_0.first;
    compView_0.create(this._ItemSliding_0_4,[
      [].concat([this._el_2]),
      [].concat([this._el_17])
    ]
    ,(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_2,'click',this.eventHandler(this._handle_click_2_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    var disposable_1:Function = this.renderer.listen(this._el_21,'click',this.eventHandler(this._handle_click_21_0.bind(this)));
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._anchor_19,
      this._text_20,
      this._el_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._text_26
    ]
    ,[
      disposable_0,
      disposable_1
    ]
    ,[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import42.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Item_2_4; }
    if (((token === import42.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._ItemContent_2_5; }
    if (((token === import37.TemplateRef) && (19 === requestNodeIndex))) { return this._TemplateRef_19_5; }
    if (((token === import43.NgIf) && (19 === requestNodeIndex))) { return this._NgIf_19_6; }
    if (((token === import45.Icon) && (23 === requestNodeIndex))) { return this._Icon_23_3; }
    if (((token === import44.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) { return this._Button_21_4; }
    if (((token === import40.ItemOptions) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 25)))) { return this._ItemOptions_17_3; }
    if (((token === import40.ItemSliding) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 26)))) { return this._ItemSliding_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    const currVal_4:any = this.context.$implicit.data.kids;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_19_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    changed = false;
    const currVal_6:any = 'secondary';
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._Button_21_4.color = currVal_6;
      changed = true;
      this._expr_6 = currVal_6;
    }
    if (changed) { this._appEl_21.componentView.markAsCheckOnce(); }
    const currVal_7:any = 'share';
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this._Icon_23_3.name = currVal_7;
      this._expr_7 = currVal_7;
    }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_2_1.dirty) {
        this._query_Button_2_1.reset([]);
        this._Item_2_4._buttons = this._query_Button_2_1;
        this._query_Button_2_1.notifyOnChanges();
      }
      if (this._query_Icon_2_2.dirty) {
        this._query_Icon_2_2.reset([]);
        this._Item_2_4._icons = this._query_Icon_2_2;
        this._query_Icon_2_2.notifyOnChanges();
      }
      if (this._query_ItemOptions_0_1.dirty) {
        this._query_ItemOptions_0_1.reset([this._ItemOptions_17_3]);
        this._ItemSliding_0_4._itemOptions = this._query_ItemOptions_0_1;
        this._query_ItemOptions_0_1.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_2_4.ngAfterContentInit(); }
      if ((this.numberOfChecks === 0)) { this._Button_21_4.ngAfterContentInit(); }
    }
    const currVal_1:any = import4.interpolate(1,'',this.context.$implicit.data.title,'');
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setText(this._text_7,currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = import4.interpolate(1,'Author: ',this.context.$implicit.data.by,'');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_10,currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import4.interpolate(1,'',this.context.$implicit.data.url,'');
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_13,currVal_3);
      this._expr_3 = currVal_3;
    }
    const currVal_8:any = this._Icon_23_3._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementClass(this._el_23,'hide',currVal_8);
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._Icon_23_3.ngOnDestroy();
  }
  private _handle_click_2_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.open(this.context.$implicit.data.url)) !== false);
    return (true && pd_0);
  }
  private _handle_click_21_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.share(this.context.$implicit.data.url)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ShowStoriesPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ShowStoriesPage1(viewUtils,parentInjector,declarationEl);
}
class _View_ShowStoriesPage2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Button_0_4:import44.Button;
  _text_1:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_ShowStoriesPage2,renderType_ShowStoriesPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'button',(null as any));
    this.renderer.setElementAttribute(this._el_0,'color','primary');
    this.renderer.setElementAttribute(this._el_0,'id','commentsButton');
    this.renderer.setElementAttribute(this._el_0,'ion-button','');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import49.viewFactory_Button0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Button_0_4 = new import44.Button((null as any),'',this.parent.parent.parentInjector.get(import23.Config),new import24.ElementRef(this._el_0),this.renderer);
    this._appEl_0.initComponent(this._Button_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    compView_0.create(this._Button_0_4,[[].concat([this._text_1])],(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'click',this.eventHandler(this._handle_click_0_0.bind(this)));
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,[disposable_0],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import44.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._Button_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changed:boolean = true;
    changed = false;
    const currVal_1:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this._Button_0_4.color = currVal_1;
      changed = true;
      this._expr_1 = currVal_1;
    }
    if (changed) { this._appEl_0.componentView.markAsCheckOnce(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Button_0_4.ngAfterContentInit(); } }
    const currVal_2:any = import4.interpolate(1,'\n        ',this.parent.context.$implicit.data.kids.length,' Comments\n      ');
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setText(this._text_1,currVal_2);
      this._expr_2 = currVal_2;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_click_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.parent.context.getComments(this.parent.context.$implicit.data.kids)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_ShowStoriesPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_ShowStoriesPage2(viewUtils,parentInjector,declarationEl);
}