import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './tabs';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from '@angular/core/src/metadata/view';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import10 from 'ionic-angular/components/tabs/tabs';
import * as import11 from 'ionic-angular/components/tabs/tab';
import * as import12 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import13 from 'ionic-angular/navigation/nav-controller';
import * as import14 from 'ionic-angular/navigation/view-controller';
import * as import15 from 'ionic-angular/components/app/app';
import * as import16 from 'ionic-angular/config/config';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from 'ionic-angular/platform/platform';
import * as import19 from 'ionic-angular/navigation/deep-linker';
import * as import20 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/transitions/transition-controller';
var renderType_TabsPage_Host = null;
class _View_TabsPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TabsPage_Host0, renderType_TabsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_TabsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._TabsPage_0_4 = new import3.TabsPage();
        this._appEl_0.initComponent(this._TabsPage_0_4, [], compView_0);
        compView_0.create(this._TabsPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.TabsPage) && (0 === requestNodeIndex))) {
            return this._TabsPage_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_TabsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage_Host === null)) {
        (renderType_TabsPage_Host = viewUtils.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {}));
    }
    return new _View_TabsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export const TabsPageNgFactory = new import9.ComponentFactory('ng-component', viewFactory_TabsPage_Host0, import3.TabsPage);
const styles_TabsPage = [];
var renderType_TabsPage = null;
class _View_TabsPage0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_TabsPage0, renderType_TabsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-tabs', null);
        this.renderer.setElementAttribute(this._el_0, 'color', 'primary');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import12.viewFactory_Tabs0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Tabs_0_4 = new import10.Tabs(this.parentInjector.get(import13.NavController, null), this.parentInjector.get(import14.ViewController, null), this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), new import17.ElementRef(this._el_0), this.parentInjector.get(import18.Platform), this.renderer, this.parentInjector.get(import19.DeepLinker));
        this._appEl_0.initComponent(this._Tabs_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n  ', null);
        this._el_2 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_2, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_2, 'tabIcon', 'albums');
        this.renderer.setElementAttribute(this._el_2, 'tabTitle', 'Top Stories');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import20.viewFactory_Tab0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Tab_2_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_2), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_2.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_2.initComponent(this._Tab_2_4, [], compView_2);
        compView_2.create(this._Tab_2_4, [], null);
        this._text_3 = this.renderer.createText(null, '\n  ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_4, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_4, 'tabIcon', 'book');
        this.renderer.setElementAttribute(this._el_4, 'tabTitle', 'Show Stories');
        this._appEl_4 = new import2.AppElement(4, 0, this, this._el_4);
        var compView_4 = import20.viewFactory_Tab0(this.viewUtils, this.injector(4), this._appEl_4);
        this._Tab_4_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_4), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_4.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_4.initComponent(this._Tab_4_4, [], compView_4);
        compView_4.create(this._Tab_4_4, [], null);
        this._text_5 = this.renderer.createText(null, '\n  ', null);
        this._el_6 = this.renderer.createElement(null, 'ion-tab', null);
        this.renderer.setElementAttribute(this._el_6, 'role', 'tabpanel');
        this.renderer.setElementAttribute(this._el_6, 'tabIcon', 'briefcase');
        this.renderer.setElementAttribute(this._el_6, 'tabTitle', 'Jobs');
        this._appEl_6 = new import2.AppElement(6, 0, this, this._el_6);
        var compView_6 = import20.viewFactory_Tab0(this.viewUtils, this.injector(6), this._appEl_6);
        this._Tab_6_4 = new import11.Tab(this._Tabs_0_4, this.parentInjector.get(import15.App), this.parentInjector.get(import16.Config), this.parentInjector.get(import21.Keyboard), new import17.ElementRef(this._el_6), this.parentInjector.get(import22.NgZone), this.renderer, this.parentInjector.get(import23.ComponentFactoryResolver), compView_6.ref, this.parentInjector.get(import24.GestureController), this.parentInjector.get(import25.TransitionController), this.parentInjector.get(import19.DeepLinker, null));
        this._appEl_6.initComponent(this._Tab_6_4, [], compView_6);
        compView_6.create(this._Tab_6_4, [], null);
        this._text_7 = this.renderer.createText(null, '\n', null);
        compView_0.create(this._Tabs_0_4, [[].concat([
                this._text_1,
                this._el_2,
                this._text_3,
                this._el_4,
                this._text_5,
                this._el_6,
                this._text_7
            ])], null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_5 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this._expr_11 = import7.UNINITIALIZED;
        this._expr_12 = import7.UNINITIALIZED;
        this._expr_13 = import7.UNINITIALIZED;
        this._expr_14 = import7.UNINITIALIZED;
        this._expr_15 = import7.UNINITIALIZED;
        this.init([], [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import11.Tab) && (2 === requestNodeIndex))) {
            return this._Tab_2_4;
        }
        if (((token === import11.Tab) && (4 === requestNodeIndex))) {
            return this._Tab_4_4;
        }
        if (((token === import11.Tab) && (6 === requestNodeIndex))) {
            return this._Tab_6_4;
        }
        if (((token === import10.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Tabs_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_0 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Tabs_0_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        const currVal_1 = this.context.tab1Root;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Tab_2_4.root = currVal_1;
            this._expr_1 = currVal_1;
        }
        const currVal_2 = 'Top Stories';
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this._Tab_2_4.tabTitle = currVal_2;
            this._expr_2 = currVal_2;
        }
        const currVal_3 = 'albums';
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this._Tab_2_4.tabIcon = currVal_3;
            this._expr_3 = currVal_3;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_2_4.ngOnInit();
        }
        const currVal_6 = this.context.tab2Root;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Tab_4_4.root = currVal_6;
            this._expr_6 = currVal_6;
        }
        const currVal_7 = 'Show Stories';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this._Tab_4_4.tabTitle = currVal_7;
            this._expr_7 = currVal_7;
        }
        const currVal_8 = 'book';
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this._Tab_4_4.tabIcon = currVal_8;
            this._expr_8 = currVal_8;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_4_4.ngOnInit();
        }
        const currVal_11 = this.context.tab3Root;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._Tab_6_4.root = currVal_11;
            this._expr_11 = currVal_11;
        }
        const currVal_12 = 'Jobs';
        if (import4.checkBinding(throwOnChange, this._expr_12, currVal_12)) {
            this._Tab_6_4.tabTitle = currVal_12;
            this._expr_12 = currVal_12;
        }
        const currVal_13 = 'briefcase';
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this._Tab_6_4.tabIcon = currVal_13;
            this._expr_13 = currVal_13;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Tab_6_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_4 = this._Tab_2_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementAttribute(this._el_2, 'id', ((currVal_4 == null) ? null : currVal_4.toString()));
            this._expr_4 = currVal_4;
        }
        const currVal_5 = this._Tab_2_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setElementAttribute(this._el_2, 'aria-labelledby', ((currVal_5 == null) ? null : currVal_5.toString()));
            this._expr_5 = currVal_5;
        }
        const currVal_9 = this._Tab_4_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementAttribute(this._el_4, 'id', ((currVal_9 == null) ? null : currVal_9.toString()));
            this._expr_9 = currVal_9;
        }
        const currVal_10 = this._Tab_4_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementAttribute(this._el_4, 'aria-labelledby', ((currVal_10 == null) ? null : currVal_10.toString()));
            this._expr_10 = currVal_10;
        }
        const currVal_14 = this._Tab_6_4._tabId;
        if (import4.checkBinding(throwOnChange, this._expr_14, currVal_14)) {
            this.renderer.setElementAttribute(this._el_6, 'id', ((currVal_14 == null) ? null : currVal_14.toString()));
            this._expr_14 = currVal_14;
        }
        const currVal_15 = this._Tab_6_4._btnId;
        if (import4.checkBinding(throwOnChange, this._expr_15, currVal_15)) {
            this.renderer.setElementAttribute(this._el_6, 'aria-labelledby', ((currVal_15 == null) ? null : currVal_15.toString()));
            this._expr_15 = currVal_15;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Tabs_0_4.ngAfterViewInit();
            }
        }
    }
}
export function viewFactory_TabsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_TabsPage === null)) {
        (renderType_TabsPage = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/myApp/.tmp/pages/tabs/tabs.html', 0, import8.ViewEncapsulation.None, styles_TabsPage, {}));
    }
    return new _View_TabsPage0(viewUtils, parentInjector, declarationEl);
}
