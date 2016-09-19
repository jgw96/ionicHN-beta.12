import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './show-stories';
import * as import4 from '@angular/core/src/linker/view_utils';
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
var renderType_ShowStoriesPage_Host = null;
class _View_ShowStoriesPage_Host0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ShowStoriesPage_Host0, renderType_ShowStoriesPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('ng-component', rootSelector, null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_ShowStoriesPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ShowStoriesPage_0_4 = new import3.ShowStoriesPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.StoriesService), this.parentInjector.get(import10.LoadingController), this.parentInjector.get(import11.AlertController));
        this._appEl_0.initComponent(this._ShowStoriesPage_0_4, [], compView_0);
        compView_0.create(this._ShowStoriesPage_0_4, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import3.ShowStoriesPage) && (0 === requestNodeIndex))) {
            return this._ShowStoriesPage_0_4;
        }
        return notFoundResult;
    }
}
function viewFactory_ShowStoriesPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ShowStoriesPage_Host === null)) {
        (renderType_ShowStoriesPage_Host = viewUtils.createRenderComponentType('', 0, import12.ViewEncapsulation.None, [], {}));
    }
    return new _View_ShowStoriesPage_Host0(viewUtils, parentInjector, declarationEl);
}
export const ShowStoriesPageNgFactory = new import13.ComponentFactory('ng-component', viewFactory_ShowStoriesPage_Host0, import3.ShowStoriesPage);
const styles_ShowStoriesPage = [];
var renderType_ShowStoriesPage = null;
class _View_ShowStoriesPage0 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ShowStoriesPage0, renderType_ShowStoriesPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._el_0 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_0_3 = new import14.Header(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer, this.parentInjector.get(import25.ViewController, null));
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = this.renderer.createElement(this._el_0, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'toolbar');
        this.renderer.setElementAttribute(this._el_2, 'color', 'primary');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import26.viewFactory_Navbar0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Navbar_2_4 = new import15.Navbar(this.parentInjector.get(import27.App), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_2), this.renderer);
        this._appEl_2.initComponent(this._Navbar_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n    ', null);
        this._el_4 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_4 = new import2.AppElement(4, 2, this, this._el_4);
        var compView_4 = import28.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(4), this._appEl_4);
        this._ToolbarTitle_4_4 = new import16.ToolbarTitle(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_4), this.renderer, this.parentInjector.get(import14.Toolbar, null), this._Navbar_2_4);
        this._appEl_4.initComponent(this._ToolbarTitle_4_4, [], compView_4);
        this._text_5 = this.renderer.createText(null, 'Show Stories', null);
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
        this.renderer.setElementAttribute(this._el_9, 'class', 'home');
        this._appEl_9 = new import2.AppElement(9, null, this, this._el_9);
        var compView_9 = import29.viewFactory_Content0(this.viewUtils, this.injector(9), this._appEl_9);
        this._Content_9_4 = new import17.Content(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_9), this.renderer, this.parentInjector.get(import27.App), this.parentInjector.get(import30.Keyboard), this.parentInjector.get(import31.NgZone), this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import32.Tabs, null));
        this._appEl_9.initComponent(this._Content_9_4, [], compView_9);
        this._text_10 = this.renderer.createText(null, '\n  ', null);
        this._el_11 = this.renderer.createElement(null, 'ion-toolbar', null);
        this.renderer.setElementAttribute(this._el_11, 'class', 'toolbar');
        this._appEl_11 = new import2.AppElement(11, 9, this, this._el_11);
        var compView_11 = import33.viewFactory_Toolbar0(this.viewUtils, this.injector(11), this._appEl_11);
        this._Toolbar_11_4 = new import14.Toolbar(this.parentInjector.get(import25.ViewController, null), this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_11), this.renderer);
        this._appEl_11.initComponent(this._Toolbar_11_4, [], compView_11);
        this._text_12 = this.renderer.createText(null, '\n    ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-searchbar', null);
        this._appEl_13 = new import2.AppElement(13, 11, this, this._el_13);
        var compView_13 = import34.viewFactory_Searchbar0(this.viewUtils, this.injector(13), this._appEl_13);
        this._Searchbar_13_4 = new import18.Searchbar(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import35.NgControl, null));
        this._appEl_13.initComponent(this._Searchbar_13_4, [], compView_13);
        compView_13.create(this._Searchbar_13_4, [], null);
        this._text_14 = this.renderer.createText(null, '\n  ', null);
        compView_11.create(this._Toolbar_11_4, [
            [],
            [],
            [],
            [].concat([
                this._text_12,
                this._el_13,
                this._text_14
            ])
        ], null);
        this._text_15 = this.renderer.createText(null, '\n  ', null);
        this._el_16 = this.renderer.createElement(null, 'ion-list', null);
        this._List_16_3 = new import19.List(this.parentInjector.get(import23.Config), new import24.ElementRef(this._el_16), this.renderer, this.parentInjector.get(import36.GestureController));
        this._text_17 = this.renderer.createText(this._el_16, '\n    ', null);
        this._anchor_18 = this.renderer.createTemplateAnchor(this._el_16, null);
        this._appEl_18 = new import2.AppElement(18, 16, this, this._anchor_18);
        this._TemplateRef_18_5 = new import37.TemplateRef_(this._appEl_18, viewFactory_ShowStoriesPage1);
        this._NgFor_18_6 = new import20.NgFor(this._appEl_18.vcRef, this._TemplateRef_18_5, this.parentInjector.get(import38.IterableDiffers), this.ref);
        this._text_19 = this.renderer.createText(this._el_16, '\n  ', null);
        this._text_20 = this.renderer.createText(null, '\n\n  ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-infinite-scroll', null);
        this._InfiniteScroll_21_3 = new import21.InfiniteScroll(this._Content_9_4, this.parentInjector.get(import31.NgZone), new import24.ElementRef(this._el_21));
        this._text_22 = this.renderer.createText(this._el_21, '\n    ', null);
        this._el_23 = this.renderer.createElement(this._el_21, 'ion-infinite-scroll-content', null);
        this._appEl_23 = new import2.AppElement(23, 21, this, this._el_23);
        var compView_23 = import39.viewFactory_InfiniteScrollContent0(this.viewUtils, this.injector(23), this._appEl_23);
        this._InfiniteScrollContent_23_4 = new import22.InfiniteScrollContent(this._InfiniteScroll_21_3, this.parentInjector.get(import23.Config));
        this._appEl_23.initComponent(this._InfiniteScrollContent_23_4, [], compView_23);
        compView_23.create(this._InfiniteScrollContent_23_4, [], null);
        this._text_24 = this.renderer.createText(this._el_21, '\n  ', null);
        this._text_25 = this.renderer.createText(null, '\n', null);
        compView_9.create(this._Content_9_4, [
            [].concat([
                this._text_10,
                this._el_11,
                this._text_15,
                this._el_16,
                this._text_20,
                this._el_21,
                this._text_25
            ]),
            [],
            []
        ], null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_13, 'ionInput', this.eventHandler(this._handle_ionInput_13_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        const subscription_0 = this._Searchbar_13_4.ionInput.subscribe(this.eventHandler(this._handle_ionInput_13_0.bind(this)));
        this._expr_11 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_21, 'ionInfinite', this.eventHandler(this._handle_ionInfinite_21_0.bind(this)));
        const subscription_1 = this._InfiniteScroll_21_3.ionInfinite.subscribe(this.eventHandler(this._handle_ionInfinite_21_0.bind(this)));
        this._expr_13 = import7.UNINITIALIZED;
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
        ], [
            disposable_0,
            disposable_1
        ], [
            subscription_0,
            subscription_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import16.ToolbarTitle) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) {
            return this._ToolbarTitle_4_4;
        }
        if (((token === import15.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._Navbar_2_4;
        }
        if (((token === import14.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) {
            return this._Header_0_3;
        }
        if (((token === import18.Searchbar) && (13 === requestNodeIndex))) {
            return this._Searchbar_13_4;
        }
        if (((token === import14.Toolbar) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 14)))) {
            return this._Toolbar_11_4;
        }
        if (((token === import37.TemplateRef) && (18 === requestNodeIndex))) {
            return this._TemplateRef_18_5;
        }
        if (((token === import20.NgFor) && (18 === requestNodeIndex))) {
            return this._NgFor_18_6;
        }
        if (((token === import19.List) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._List_16_3;
        }
        if (((token === import22.InfiniteScrollContent) && (23 === requestNodeIndex))) {
            return this._InfiniteScrollContent_23_4;
        }
        if (((token === import21.InfiniteScroll) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._InfiniteScroll_21_3;
        }
        if (((token === import17.Content) && ((9 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
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
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._Searchbar_13_4.ngOnInit();
        }
        changes = null;
        const currVal_11 = this.context.stories;
        if (import4.checkBinding(throwOnChange, this._expr_11, currVal_11)) {
            this._NgFor_18_6.ngForOf = currVal_11;
            if ((changes === null)) {
                (changes = {});
            }
            changes['ngForOf'] = new import7.SimpleChange(this._expr_11, currVal_11);
            this._expr_11 = currVal_11;
        }
        if ((changes !== null)) {
            this._NgFor_18_6.ngOnChanges(changes);
        }
        if (!throwOnChange) {
            this._NgFor_18_6.ngDoCheck();
        }
        if (((this.numberOfChecks === 0) && !throwOnChange)) {
            this._InfiniteScrollContent_23_4.ngOnInit();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._InfiniteScroll_21_3.ngAfterContentInit();
            }
        }
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
        const currVal_4 = this._Toolbar_11_4._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementClass(this._el_11, 'statusbar-padding', currVal_4);
            this._expr_4 = currVal_4;
        }
        const currVal_6 = this._Searchbar_13_4._value;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_13, 'searchbar-has-value', currVal_6);
            this._expr_6 = currVal_6;
        }
        const currVal_7 = this._Searchbar_13_4._isActive;
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
            this.renderer.setElementClass(this._el_13, 'searchbar-active', currVal_7);
            this._expr_7 = currVal_7;
        }
        const currVal_8 = this._Searchbar_13_4.showCancelButton;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_13, 'searchbar-show-cancel', currVal_8);
            this._expr_8 = currVal_8;
        }
        const currVal_9 = this._Searchbar_13_4.shouldAlignLeft();
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_13, 'searchbar-left-aligned', currVal_9);
            this._expr_9 = currVal_9;
        }
        const currVal_10 = this._Searchbar_13_4._sbHasFocus;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_13, 'searchbar-has-focus', currVal_10);
            this._expr_10 = currVal_10;
        }
        const currVal_13 = this._InfiniteScrollContent_23_4.inf.state;
        if (import4.checkBinding(throwOnChange, this._expr_13, currVal_13)) {
            this.renderer.setElementAttribute(this._el_23, 'state', ((currVal_13 == null) ? null : currVal_13.toString()));
            this._expr_13 = currVal_13;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_2_4.ngAfterViewInit();
            }
            this._Searchbar_13_4.ngAfterViewChecked();
        }
    }
    destroyInternal() {
        this._InfiniteScroll_21_3.ngOnDestroy();
        this._Content_9_4.ngOnDestroy();
    }
    _handle_ionInput_13_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.searchItems($event) !== false);
        return (true && pd_0);
    }
    _handle_ionInfinite_21_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.context.doInfinite($event) !== false);
        return (true && pd_0);
    }
}
export function viewFactory_ShowStoriesPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_ShowStoriesPage === null)) {
        (renderType_ShowStoriesPage = viewUtils.createRenderComponentType('/Users/justinwillis/Projects/myApp/.tmp/pages/show-stories/show-stories.html', 0, import12.ViewEncapsulation.None, styles_ShowStoriesPage, {}));
    }
    return new _View_ShowStoriesPage0(viewUtils, parentInjector, declarationEl);
}
class _View_ShowStoriesPage1 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ShowStoriesPage1, renderType_ShowStoriesPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'ion-item-sliding', null);
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import46.viewFactory_ItemSliding0(this.viewUtils, this.injector(0), this._appEl_0);
        this._ItemSliding_0_4 = new import40.ItemSliding(this.parent._List_16_3, this.renderer, new import24.ElementRef(this._el_0), this.parent.parentInjector.get(import31.NgZone));
        this._query_Item_0_0 = new import41.QueryList();
        this._query_ItemOptions_0_1 = new import41.QueryList();
        this._appEl_0.initComponent(this._ItemSliding_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '\n      ', null);
        this._el_2 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_2, 'class', 'item item-block');
        this.renderer.setElementAttribute(this._el_2, 'ion-item', '');
        this._appEl_2 = new import2.AppElement(2, 0, this, this._el_2);
        var compView_2 = import47.viewFactory_Item0(this.viewUtils, this.injector(2), this._appEl_2);
        this._Item_2_4 = new import42.Item(this.parent.parentInjector.get(import48.Form), this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_2), this.renderer);
        this._ItemContent_2_5 = new import42.ItemContent();
        this._query_Label_2_0 = new import41.QueryList();
        this._query_Button_2_1 = new import41.QueryList();
        this._query_Icon_2_2 = new import41.QueryList();
        this._appEl_2.initComponent(this._Item_2_4, [], compView_2);
        this._text_3 = this.renderer.createText(null, '\n        ', null);
        this._el_4 = this.renderer.createElement(null, 'div', null);
        this._text_5 = this.renderer.createText(this._el_4, '\n          ', null);
        this._el_6 = this.renderer.createElement(this._el_4, 'h2', null);
        this._text_7 = this.renderer.createText(this._el_6, '', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n          ', null);
        this._el_9 = this.renderer.createElement(this._el_4, 'h3', null);
        this._text_10 = this.renderer.createText(this._el_9, '', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n          ', null);
        this._el_12 = this.renderer.createElement(this._el_4, 'p', null);
        this._text_13 = this.renderer.createText(this._el_12, '', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_15 = this.renderer.createText(null, '\n      ', null);
        this._query_Label_2_0.reset([]);
        this._Item_2_4.contentLabel = this._query_Label_2_0.first;
        compView_2.create(this._Item_2_4, [
            [],
            [],
            [].concat([
                this._text_3,
                this._el_4,
                this._text_15
            ]),
            [],
            []
        ], null);
        this._text_16 = this.renderer.createText(null, '\n      ', null);
        this._el_17 = this.renderer.createElement(null, 'ion-item-options', null);
        this._ItemOptions_17_3 = new import40.ItemOptions(new import24.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(this._el_17, '\n        ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_17, null);
        this._appEl_19 = new import2.AppElement(19, 17, this, this._anchor_19);
        this._TemplateRef_19_5 = new import37.TemplateRef_(this._appEl_19, viewFactory_ShowStoriesPage2);
        this._NgIf_19_6 = new import43.NgIf(this._appEl_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_17, '\n      ', null);
        this._el_21 = this.renderer.createElement(this._el_17, 'button', null);
        this.renderer.setElementAttribute(this._el_21, 'color', 'secondary');
        this.renderer.setElementAttribute(this._el_21, 'ion-button', '');
        this._appEl_21 = new import2.AppElement(21, 17, this, this._el_21);
        var compView_21 = import49.viewFactory_Button0(this.viewUtils, this.injector(21), this._appEl_21);
        this._Button_21_4 = new import44.Button(null, '', this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_21), this.renderer);
        this._appEl_21.initComponent(this._Button_21_4, [], compView_21);
        this._text_22 = this.renderer.createText(null, '\n        ', null);
        this._el_23 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_23, 'id', 'shareButton');
        this.renderer.setElementAttribute(this._el_23, 'name', 'share');
        this.renderer.setElementAttribute(this._el_23, 'role', 'img');
        this._Icon_23_3 = new import45.Icon(this.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_23), this.renderer);
        this._text_24 = this.renderer.createText(null, '\n      ', null);
        compView_21.create(this._Button_21_4, [[].concat([
                this._text_22,
                this._el_23,
                this._text_24
            ])], null);
        this._text_25 = this.renderer.createText(this._el_17, '\n      ', null);
        this._text_26 = this.renderer.createText(null, '\n    ', null);
        this._query_Item_0_0.reset([this._Item_2_4]);
        this._ItemSliding_0_4.item = this._query_Item_0_0.first;
        compView_0.create(this._ItemSliding_0_4, [
            [].concat([this._el_2]),
            [].concat([this._el_17])
        ], null);
        var disposable_0 = this.renderer.listen(this._el_2, 'click', this.eventHandler(this._handle_click_2_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this._expr_3 = import7.UNINITIALIZED;
        this._expr_4 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_21, 'click', this.eventHandler(this._handle_click_21_0.bind(this)));
        this._expr_6 = import7.UNINITIALIZED;
        this._expr_7 = import7.UNINITIALIZED;
        this._expr_8 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
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
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import42.Item) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._Item_2_4;
        }
        if (((token === import42.ItemContent) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 15)))) {
            return this._ItemContent_2_5;
        }
        if (((token === import37.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import43.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6;
        }
        if (((token === import45.Icon) && (23 === requestNodeIndex))) {
            return this._Icon_23_3;
        }
        if (((token === import44.Button) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Button_21_4;
        }
        if (((token === import40.ItemOptions) && ((17 <= requestNodeIndex) && (requestNodeIndex <= 25)))) {
            return this._ItemOptions_17_3;
        }
        if (((token === import40.ItemSliding) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 26)))) {
            return this._ItemSliding_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changed = true;
        const currVal_4 = this.context.$implicit.data.kids;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this._NgIf_19_6.ngIf = currVal_4;
            this._expr_4 = currVal_4;
        }
        changed = false;
        const currVal_6 = 'secondary';
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this._Button_21_4.color = currVal_6;
            changed = true;
            this._expr_6 = currVal_6;
        }
        if (changed) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        const currVal_7 = 'share';
        if (import4.checkBinding(throwOnChange, this._expr_7, currVal_7)) {
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
            if ((this.numberOfChecks === 0)) {
                this._Item_2_4.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_21_4.ngAfterContentInit();
            }
        }
        const currVal_1 = import4.interpolate(1, '', this.context.$implicit.data.title, '');
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setText(this._text_7, currVal_1);
            this._expr_1 = currVal_1;
        }
        const currVal_2 = import4.interpolate(1, 'Author: ', this.context.$implicit.data.by, '');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_10, currVal_2);
            this._expr_2 = currVal_2;
        }
        const currVal_3 = import4.interpolate(1, '', this.context.$implicit.data.url, '');
        if (import4.checkBinding(throwOnChange, this._expr_3, currVal_3)) {
            this.renderer.setText(this._text_13, currVal_3);
            this._expr_3 = currVal_3;
        }
        const currVal_8 = this._Icon_23_3._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_8, currVal_8)) {
            this.renderer.setElementClass(this._el_23, 'hide', currVal_8);
            this._expr_8 = currVal_8;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    destroyInternal() {
        this._Icon_23_3.ngOnDestroy();
    }
    _handle_click_2_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.open(this.context.$implicit.data.url) !== false);
        return (true && pd_0);
    }
    _handle_click_21_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.context.share(this.context.$implicit.data.url) !== false);
        return (true && pd_0);
    }
}
function viewFactory_ShowStoriesPage1(viewUtils, parentInjector, declarationEl) {
    return new _View_ShowStoriesPage1(viewUtils, parentInjector, declarationEl);
}
class _View_ShowStoriesPage2 extends import1.AppView {
    constructor(viewUtils, parentInjector, declarationEl) {
        super(_View_ShowStoriesPage2, renderType_ShowStoriesPage, import6.ViewType.EMBEDDED, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = this.renderer.createElement(null, 'button', null);
        this.renderer.setElementAttribute(this._el_0, 'color', 'primary');
        this.renderer.setElementAttribute(this._el_0, 'id', 'commentsButton');
        this.renderer.setElementAttribute(this._el_0, 'ion-button', '');
        this._appEl_0 = new import2.AppElement(0, null, this, this._el_0);
        var compView_0 = import49.viewFactory_Button0(this.viewUtils, this.injector(0), this._appEl_0);
        this._Button_0_4 = new import44.Button(null, '', this.parent.parent.parentInjector.get(import23.Config), new import24.ElementRef(this._el_0), this.renderer);
        this._appEl_0.initComponent(this._Button_0_4, [], compView_0);
        this._text_1 = this.renderer.createText(null, '', null);
        compView_0.create(this._Button_0_4, [[].concat([this._text_1])], null);
        var disposable_0 = this.renderer.listen(this._el_0, 'click', this.eventHandler(this._handle_click_0_0.bind(this)));
        this._expr_1 = import7.UNINITIALIZED;
        this._expr_2 = import7.UNINITIALIZED;
        this.init([].concat([this._el_0]), [
            this._el_0,
            this._text_1
        ], [disposable_0], []);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import44.Button) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) {
            return this._Button_0_4;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        var changed = true;
        changed = false;
        const currVal_1 = 'primary';
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this._Button_0_4.color = currVal_1;
            changed = true;
            this._expr_1 = currVal_1;
        }
        if (changed) {
            this._appEl_0.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Button_0_4.ngAfterContentInit();
            }
        }
        const currVal_2 = import4.interpolate(1, '\n        ', this.parent.context.$implicit.data.kids.length, ' Comments\n      ');
        if (import4.checkBinding(throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
        this.detectViewChildrenChanges(throwOnChange);
    }
    _handle_click_0_0($event) {
        this.markPathToRootAsCheckOnce();
        const pd_0 = (this.parent.parent.context.getComments(this.parent.context.$implicit.data.kids) !== false);
        return (true && pd_0);
    }
}
function viewFactory_ShowStoriesPage2(viewUtils, parentInjector, declarationEl) {
    return new _View_ShowStoriesPage2(viewUtils, parentInjector, declarationEl);
}
