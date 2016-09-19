import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './about';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/stories';
import * as import10 from 'ionic-angular/components/loading/loading';
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
var renderType_AboutPage_Host = null;
class _View_AboutPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AboutPage_Host0, renderType_AboutPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_AboutPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._AboutPage_0_4 = new import3.AboutPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.StoriesService), this.parentInjector.get(import10.LoadingController));
        this._appEl_0.initComponent(this._AboutPage_0_4, [], compView_0);
        compView_0.create(this._AboutPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.AboutPage) && (0 === requestNodeIndex))) {
            return this._AboutPage_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_AboutPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutPage_Host === null)) {
        (renderType_AboutPage_Host = viewUtils.createRenderComponentType('', 0, import11.ViewEncapsulation.None, [], {}));
    }
    return new _View_AboutPage_Host0(viewUtils, parentInjector, declarationEl);
}
export const AboutPageNgFactory = new import12.ComponentFactory('ng-component', viewFactory_AboutPage_Host0, import3.AboutPage);
const styles_AboutPage = [];
var renderType_AboutPage = null;
class _View_AboutPage0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AboutPage0, renderType_AboutPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import13.Header(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import21.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import22.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import14.Navbar(this.parentInjector.get(import23.App), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import24.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import15.ToolbarTitle(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import13.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, '\n      Jobs\n    ', null);
        compView_4.create(this._ToolbarTitle_4_4, [[].concat([this._text_5])], null);
        this._text_6 = this.renderer.createText(null, '\n  ', null);
        compView_2.create(this._Navbar_2_4, [
            [],
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_6
            ])
        ], null);
        this._text_7 = this.renderer.createText(this._el_0, '\n', null);
        this._text_8 = this.renderer.createText(parentRenderNode, '\n\n', null);
        this._el_9 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_9, 'class', 'about');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import25.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import16.Content(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import23.App), this.parentInjector.get(import26.Keyboard), this.parentInjector.get(import27.NgZone), this.parentInjector.get(import21.ViewController, null), this.parentInjector.get(import28.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-list', null);
        this._List_11_3 = new import17.List(this.parentInjector.get(import19.Config), new import20.ElementRef(this._el_11), this.renderer, this.parentInjector.get(import29.GestureController));
        this._text_12 = this.renderer.createText(this._el_11, '\n    ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_11, null);
        this._appEl_13 = new import2.AppElement(13, 11, this, this._anchor_13);
        this._TemplateRef_13_5 = new import30.TemplateRef_(this._appEl_13, viewFactory_AboutPage1);
        this._NgFor_13_6 = new import18.NgFor(this._appEl_13.vcRef, this._TemplateRef_13_5, this.parentInjector.get(import31.IterableDiffers), this.ref);
        this._text_14 = this.renderer.createText(this._el_11, '\n  ', null);
        this._text_15 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        this.init([], [
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
            this._anchor_13,
            this._text_14,
            this._text_15
        ], [], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import15.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import14.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import13.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import30.TemplateRef) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === import18.NgFor) && (13 === requestNodeIndex))) {
            return this._NgFor_13_6;
        }
        if (((token === import17.List) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._List_11_3;
        }
        if (((token === import16.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Content_9_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changes = null;
        const currVal_0 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this._Navbar_2_4.color = currVal_0;
            this._expr_0 = currVal_0;
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Content_9_4.ngOnInit();
        }
        changes = null;
        const currVal_4 = this.context.jobs;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgFor_13_6.ngForOf = currVal_4;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_4, currVal_4);
            this._expr_4 = currVal_4;
        }
        if ((changes !== null)) {
            this._NgFor_13_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_13_6.ngDoCheck();
        }
        this.detectContentChildrenChanges(throwOnChange);
        const currVal_1 = this._Navbar_2_4._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementProperty(this._el_2, 'hidden', currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_2 = this._Navbar_2_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setElementClass(this._el_2, 'statusbar-padding', currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = this._Content_9_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setElementClass(this._el_9, 'statusbar-padding', currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
        }
    }
    destroyInternal() {
        this._Content_9_4.ngOnDestroy();
    }
}
export function viewFactory_AboutPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_AboutPage === null)) {
        (renderType_AboutPage = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/myApp/.tmp/pages/about/about.html', 0, import11.ViewEncapsulation.None, styles_AboutPage, {}));
    }
    return new _View_AboutPage0(viewUtils, parentInjector, declarationEl);
}
class _View_AboutPage1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_AboutPage1, renderType_AboutPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_0, 'ion-item', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import34.viewFactory_Item0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Item_0_4 = new import32.Item(this.parent.parentInjector.get(import35.Form), this.parent.parentInjector.get(import19.Config), new import20.ElementRef(this._el_0), this.renderer);
        this._ItemContent_0_5 = new import32.ItemContent();
        this._query_Label_0_0 = new import33.QueryList();
        this._query_Button_0_1 = new import33.QueryList();
        this._query_Icon_0_2 = new import33.QueryList();
        this._appEl_0.initComponent(this._Item_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'h2', null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(null, '\n      ', null);
        this._el_5 = this.renderer.createElement(null, 'h3', null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(null, '\n      ', null);
        this._el_8 = this.renderer.createElement(null, 'p', null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(null, '\n    ', null);
        this._query_Label_0_0.reset([]);
        this._Item_0_4.contentLabel = this._query_Label_0_0.first;
        compView_0.create(this._Item_0_4, [
            [],
            [],
            [].concat([
                this._text_1,
                this._el_2,
                this._text_4,
                this._el_5,
                this._text_7,
                this._el_8,
                this._text_10
            ]),
            [],
            []
        ], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import32.Item) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Item_0_4;
        }
        if (((token === import32.ItemContent) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ItemContent_0_5;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
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
            if ((this.numberOfChecks === 0)) {
                this._Item_0_4.ngAfterContentInit();
            }
        }
        const currVal_1 = import4.interpolate(1, '', this.context.$implicit.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_3, currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_2 = import4.interpolate(1, 'Poster: ', this.context.$implicit.by, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_6, currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = import4.interpolate(1, '', this.context.$implicit.url, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_9, currVal_3);
            this._expr_3 = currVal_3;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.goTo(this.context.$implicit.url) !== false);
        return (true && pd_0);
    }
}
function viewFactory_AboutPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_AboutPage1(viewUtils, parentInjector, declarationEl);
}
