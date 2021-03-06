/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './comments';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '../../providers/stories';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from 'ionic-angular/components/toolbar/toolbar';
import * as import14 from 'ionic-angular/components/navbar/navbar';
import * as import15 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import16 from 'ionic-angular/components/content/content';
import * as import17 from 'ionic-angular/components/list/list';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from 'ionic-angular/config/config';
import * as import20 from '@angular/core/src/linker/element_ref';
import * as import21 from 'ionic-angular/navigation/view-controller';
import * as import22 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import25 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/gestures/gesture-controller';
import * as import30 from '@angular/core/src/linker/template_ref';
import * as import31 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import32 from 'ionic-angular/components/item/item';
import * as import33 from '@angular/core/src/linker/query_list';
import * as import34 from '../../node_modules/ionic-angular/components/item/item.ngfactory';
import * as import35 from 'ionic-angular/util/form';
import * as import36 from '@angular/core/src/security';
var renderType_CommentsPage_Host:import0.RenderComponentType = (null as any);
class _View_CommentsPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _CommentsPage_0_4:import3.CommentsPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CommentsPage_Host0,renderType_CommentsPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CommentsPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CommentsPage_0_4 = new import3.CommentsPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams),this.parentInjector.get(import10.StoriesService));
    this._appEl_0.initComponent(this._CommentsPage_0_4,[],compView_0);
    compView_0.create(this._CommentsPage_0_4,this.projectableNodes,(null as any));
    this.init([].concat([this._el_0]),[this._el_0],[],[]);
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.CommentsPage) && (0 === requestNodeIndex))) { return this._CommentsPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_CommentsPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_CommentsPage_Host === (null as any))) { (renderType_CommentsPage_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,[],{})); }
  return new _View_CommentsPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const CommentsPageNgFactory:import12.ComponentFactory<import3.CommentsPage> = new import12.ComponentFactory<import3.CommentsPage>('ng-component',viewFactory_CommentsPage_Host0,import3.CommentsPage);
const styles_CommentsPage:any[] = [];
var renderType_CommentsPage:import0.RenderComponentType = (null as any);
class _View_CommentsPage0 extends import1.AppView<import3.CommentsPage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import13.Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import2.AppElement;
  _Navbar_3_4:import14.Navbar;
  _text_4:any;
  _el_5:any;
  /*private*/ _appEl_5:import2.AppElement;
  _ToolbarTitle_5_4:import15.ToolbarTitle;
  _text_6:any;
  _text_7:any;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  /*private*/ _appEl_10:import2.AppElement;
  _Content_10_4:import16.Content;
  _text_11:any;
  _el_12:any;
  _List_12_3:import17.List;
  _text_13:any;
  _anchor_14:any;
  /*private*/ _appEl_14:import2.AppElement;
  _TemplateRef_14_5:any;
  _NgFor_14_6:import18.NgFor;
  _text_15:any;
  _text_16:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CommentsPage0,renderType_CommentsPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import13.Header(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import21.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this.renderer.setElementAttribute(this._el_3,'color','primary');
    this._appEl_3 = new import2.AppElement(3,1,this,this._el_3);
    var compView_3:any = import22.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import14.Navbar(this.parentInjector.get(import23.App),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4,[],compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_5 = new import2.AppElement(5,3,this,this._el_5);
    var compView_5:any = import24.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(5),this._appEl_5);
    this._ToolbarTitle_5_4 = new import15.ToolbarTitle(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import13.Toolbar,(null as any)),this._Navbar_3_4);
    this._appEl_5.initComponent(this._ToolbarTitle_5_4,[],compView_5);
    this._text_6 = this.renderer.createText((null as any),'Comments',(null as any));
    compView_5.create(this._ToolbarTitle_5_4,[[].concat([this._text_6])],(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4,[
      [],
      [],
      [],
      [].concat([
        this._text_4,
        this._el_5,
        this._text_7
      ]
      )
    ]
    ,(null as any));
    this._text_8 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_9 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_10 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_10,'class','comments');
    this._appEl_10 = new import2.AppElement(10,(null as any),this,this._el_10);
    var compView_10:any = import25.viewFactory_Content0(this.viewUtils,this.injector(10),this._appEl_10);
    this._Content_10_4 = new import16.Content(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_10),this.renderer,this.parentInjector.get(import23.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import21.ViewController,(null as any)),this.parentInjector.get(import28.Tabs,(null as any)));
    this._appEl_10.initComponent(this._Content_10_4,[],compView_10);
    this._text_11 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_12 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_12_3 = new import17.List(this.parentInjector.get(import19.Config),new import20.ElementRef(this._el_12),this.renderer,this.parentInjector.get(import29.GestureController));
    this._text_13 = this.renderer.createText(this._el_12,'\n    ',(null as any));
    this._anchor_14 = this.renderer.createTemplateAnchor(this._el_12,(null as any));
    this._appEl_14 = new import2.AppElement(14,12,this,this._anchor_14);
    this._TemplateRef_14_5 = new import30.TemplateRef_(this._appEl_14,viewFactory_CommentsPage1);
    this._NgFor_14_6 = new import18.NgFor(this._appEl_14.vcRef,this._TemplateRef_14_5,this.parentInjector.get(import31.IterableDiffers),this.ref);
    this._text_15 = this.renderer.createText(this._el_12,'\n  ',(null as any));
    this._text_16 = this.renderer.createText((null as any),'\n',(null as any));
    compView_10.create(this._Content_10_4,[
      [].concat([
        this._text_11,
        this._el_12,
        this._text_16
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
    this.init([],[
      this._text_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._el_12,
      this._text_13,
      this._anchor_14,
      this._text_15,
      this._text_16
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.ToolbarTitle) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ToolbarTitle_5_4; }
    if (((token === import14.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Navbar_3_4; }
    if (((token === import13.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._Header_1_3; }
    if (((token === import30.TemplateRef) && (14 === requestNodeIndex))) { return this._TemplateRef_14_5; }
    if (((token === import18.NgFor) && (14 === requestNodeIndex))) { return this._NgFor_14_6; }
    if (((token === import17.List) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._List_12_3; }
    if (((token === import16.Content) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Content_10_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_3_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_10_4.ngOnInit(); }
    changes = (null as any);
    const currVal_4:any = this.context.comments;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgFor_14_6.ngForOf = currVal_4;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_4,currVal_4);
      this._expr_4 = currVal_4;
    }
    if ((changes !== (null as any))) { this._NgFor_14_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_14_6.ngDoCheck(); }
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_1:any = this._Navbar_3_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_3_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = this._Content_10_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementClass(this._el_10,'statusbar-padding',currVal_3);
      this._expr_3 = currVal_3;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Content_10_4.ngOnDestroy();
  }
}
export function viewFactory_CommentsPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.CommentsPage> {
  if ((renderType_CommentsPage === (null as any))) { (renderType_CommentsPage = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/myApp/.tmp/pages/comments/comments.html',0,import11.ViewEncapsulation.None,styles_CommentsPage,{})); }
  return new _View_CommentsPage0(viewUtils,parentInjector,declarationEl);
}
class _View_CommentsPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _Item_0_4:import32.Item;
  _ItemContent_0_5:import32.ItemContent;
  _query_Label_0_0:import33.QueryList<any>;
  _query_Button_0_1:import33.QueryList<any>;
  _query_Icon_0_2:import33.QueryList<any>;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_CommentsPage1,renderType_CommentsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-item',(null as any));
    this.renderer.setElementAttribute(this._el_0,'class','item item-block');
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import34.viewFactory_Item0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Item_0_4 = new import32.Item(this.parent.parentInjector.get(import35.Form),this.parent.parentInjector.get(import19.Config),new import20.ElementRef(this._el_0),this.renderer);
    this._ItemContent_0_5 = new import32.ItemContent();
    this._query_Label_0_0 = new import33.QueryList<any>();
    this._query_Button_0_1 = new import33.QueryList<any>();
    this._query_Icon_0_2 = new import33.QueryList<any>();
    this._appEl_0.initComponent(this._Item_0_4,[],compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'h2',(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'p',(null as any));
    this._text_6 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._query_Label_0_0.reset([]);
    this._Item_0_4.contentLabel = this._query_Label_0_0.first;
    compView_0.create(this._Item_0_4,[
      [],
      [],
      [].concat([
        this._text_1,
        this._el_2,
        this._text_4,
        this._el_5,
        this._text_6
      ]
      ),
      [],
      []
    ]
    ,(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this.init([].concat([this._el_0]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6
    ]
    ,[],[]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import32.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._Item_0_4; }
    if (((token === import32.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 6)))) { return this._ItemContent_0_5; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_0_1.dirty) {
        this._query_Button_0_1.reset([]);
        this._Item_0_4._buttons = this._query_Button_0_1;
        this._query_Button_0_1.notifyOnChanges();
      }
      if (this._query_Icon_0_2.dirty) {
        this._query_Icon_0_2.reset([]);
        this._Item_0_4._icons = this._query_Icon_0_2;
        this._query_Icon_0_2.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._Item_0_4.ngAfterContentInit(); }
    }
    const currVal_0:any = import4.interpolate(1,'',this.context.$implicit.by,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_3,currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this.context.$implicit.text;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_5,'innerHTML',this.viewUtils.sanitizer.sanitize(import36.SecurityContext.HTML,currVal_1));
      this._expr_1 = currVal_1;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CommentsPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_CommentsPage1(viewUtils,parentInjector,declarationEl);
}