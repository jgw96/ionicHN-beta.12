import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './app.module';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/http/src/http_module';
import * as import6 from '@angular/forms/src/directives';
import * as import7 from '@angular/forms/src/form_providers';
import * as import8 from 'ionic-angular/module';
import * as import9 from '@angular/common/src/localization';
import * as import10 from 'ionic-angular/components/app/app';
import * as import11 from '@angular/core/src/application_init';
import * as import12 from '@angular/core/src/testability/testability';
import * as import13 from '@angular/core/src/application_ref';
import * as import14 from '@angular/core/src/linker/compiler';
import * as import15 from 'ionic-angular/gestures/gesture-config';
import * as import16 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import17 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import18 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import19 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import20 from '@angular/core/src/linker/view_utils';
import * as import21 from '@angular/platform-browser/src/browser/title';
import * as import22 from '@angular/http/src/backends/browser_xhr';
import * as import23 from '@angular/http/src/base_response_options';
import * as import24 from '@angular/http/src/backends/xhr_backend';
import * as import25 from '@angular/http/src/base_request_options';
import * as import26 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import27 from '@angular/forms/src/form_builder';
import * as import28 from 'ionic-angular/components/action-sheet/action-sheet';
import * as import29 from 'ionic-angular/components/alert/alert';
import * as import30 from 'ionic-angular/util/form';
import * as import31 from 'ionic-angular/gestures/gesture-controller';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from 'ionic-angular/components/loading/loading';
import * as import34 from '@angular/common/src/location/location';
import * as import35 from 'ionic-angular/components/menu/menu-controller';
import * as import36 from 'ionic-angular/components/modal/modal';
import * as import37 from 'ionic-angular/components/picker/picker';
import * as import38 from 'ionic-angular/components/popover/popover';
import * as import39 from 'ionic-angular/components/tap-click/tap-click';
import * as import40 from 'ionic-angular/components/toast/toast';
import * as import41 from 'ionic-angular/translation/translate';
import * as import42 from 'ionic-angular/transitions/transition-controller';
import * as import43 from '../providers/stories';
import * as import45 from '../node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory';
import * as import46 from '../node_modules/ionic-angular/components/alert/alert-component.ngfactory';
import * as import47 from '../node_modules/ionic-angular/components/app/app-root.ngfactory';
import * as import48 from '../node_modules/ionic-angular/components/loading/loading-component.ngfactory';
import * as import49 from '../node_modules/ionic-angular/components/modal/modal-component.ngfactory';
import * as import50 from '../node_modules/ionic-angular/components/picker/picker-component.ngfactory';
import * as import51 from '../node_modules/ionic-angular/components/popover/popover-component.ngfactory';
import * as import52 from '../node_modules/ionic-angular/components/toast/toast-component.ngfactory';
import * as import53 from './app.component.ngfactory';
import * as import54 from '../pages/show-stories/show-stories.ngfactory';
import * as import55 from '../pages/about/about.ngfactory';
import * as import56 from '../pages/home/home.ngfactory';
import * as import57 from '../pages/tabs/tabs.ngfactory';
import * as import58 from '../pages/comments/comments.ngfactory';
import * as import59 from '@angular/core/src/application_tokens';
import * as import60 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import61 from '@angular/platform-browser/src/dom/events/key_events';
import * as import62 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import63 from '@angular/core/src/zone/ng_zone';
import * as import64 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import65 from './app.component';
import * as import66 from '@angular/common/src/location/platform_location';
import * as import67 from '@angular/common/src/location/location_strategy';
import * as import68 from 'ionic-angular/navigation/url-serializer';
import * as import69 from 'ionic-angular/navigation/deep-linker';
import * as import70 from 'ionic-angular/platform/query-params';
import * as import71 from 'ionic-angular/platform/platform-registry';
import * as import72 from 'ionic-angular/platform/platform';
import * as import73 from 'ionic-angular/config/config';
import * as import74 from 'ionic-angular/config/mode-registry';
import * as import75 from 'ionic-angular/transitions/transition-registry';
import * as import76 from 'ionic-angular/util/events';
import * as import77 from '@angular/core/src/console';
import * as import78 from '@angular/core/src/i18n/tokens';
import * as import79 from '@angular/core/src/error_handler';
import * as import80 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import81 from '@angular/platform-browser/src/dom/animation_driver';
import * as import82 from '@angular/core/src/render/api';
import * as import83 from '@angular/core/src/security';
import * as import84 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import85 from '@angular/core/src/change_detection/differs/keyvalue_differs';
import * as import86 from '@angular/http/src/interfaces';
import * as import87 from '@angular/http/src/http';
import * as import88 from 'ionic-angular/components/app/app-root';
import * as import89 from '@angular/core/src/i18n/tokens';
class AppModuleInjector extends import0.NgModuleInjector {
    constructor(parent) {
        super(parent, [
            import45.ActionSheetCmpNgFactory,
            import46.AlertCmpNgFactory,
            import47.IonicAppNgFactory,
            import48.LoadingCmpNgFactory,
            import49.ModalCmpNgFactory,
            import50.PickerCmpNgFactory,
            import51.PopoverCmpNgFactory,
            import52.ToastCmpNgFactory,
            import53.MyAppNgFactory,
            import53.MyAppNgFactory,
            import54.ShowStoriesPageNgFactory,
            import55.AboutPageNgFactory,
            import56.HomePageNgFactory,
            import57.TabsPageNgFactory,
            import58.CommentsPageNgFactory,
            import47.IonicAppNgFactory
        ], [import47.IonicAppNgFactory]);
    }
    get _LOCALE_ID_9() {
        if ((this.__LOCALE_ID_9 == null)) {
            (this.__LOCALE_ID_9 = null);
        }
        return this.__LOCALE_ID_9;
    }
    get _NgLocalization_10() {
        if ((this.__NgLocalization_10 == null)) {
            (this.__NgLocalization_10 = new import9.NgLocaleLocalization(this._LOCALE_ID_9));
        }
        return this.__NgLocalization_10;
    }
    get _ApplicationRef_27() {
        if ((this.__ApplicationRef_27 == null)) {
            (this.__ApplicationRef_27 = this._ApplicationRef__26);
        }
        return this.__ApplicationRef_27;
    }
    get _Compiler_28() {
        if ((this.__Compiler_28 == null)) {
            (this.__Compiler_28 = new import14.Compiler());
        }
        return this.__Compiler_28;
    }
    get _APP_ID_29() {
        if ((this.__APP_ID_29 == null)) {
            (this.__APP_ID_29 = import59._appIdRandomProviderFactory());
        }
        return this.__APP_ID_29;
    }
    get _DOCUMENT_30() {
        if ((this.__DOCUMENT_30 == null)) {
            (this.__DOCUMENT_30 = import4._document());
        }
        return this.__DOCUMENT_30;
    }
    get _HAMMER_GESTURE_CONFIG_31() {
        if ((this.__HAMMER_GESTURE_CONFIG_31 == null)) {
            (this.__HAMMER_GESTURE_CONFIG_31 = new import15.IonicGestureConfig());
        }
        return this.__HAMMER_GESTURE_CONFIG_31;
    }
    get _EVENT_MANAGER_PLUGINS_32() {
        if ((this.__EVENT_MANAGER_PLUGINS_32 == null)) {
            (this.__EVENT_MANAGER_PLUGINS_32 = [
                new import60.DomEventsPlugin(),
                new import61.KeyEventsPlugin(),
                new import62.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_31)
            ]);
        }
        return this.__EVENT_MANAGER_PLUGINS_32;
    }
    get _EventManager_33() {
        if ((this.__EventManager_33 == null)) {
            (this.__EventManager_33 = new import16.EventManager(this._EVENT_MANAGER_PLUGINS_32, this.parent.get(import63.NgZone)));
        }
        return this.__EventManager_33;
    }
    get _DomSharedStylesHost_34() {
        if ((this.__DomSharedStylesHost_34 == null)) {
            (this.__DomSharedStylesHost_34 = new import17.DomSharedStylesHost(this._DOCUMENT_30));
        }
        return this.__DomSharedStylesHost_34;
    }
    get _AnimationDriver_35() {
        if ((this.__AnimationDriver_35 == null)) {
            (this.__AnimationDriver_35 = import4._resolveDefaultAnimationDriver());
        }
        return this.__AnimationDriver_35;
    }
    get _DomRootRenderer_36() {
        if ((this.__DomRootRenderer_36 == null)) {
            (this.__DomRootRenderer_36 = new import18.DomRootRenderer_(this._DOCUMENT_30, this._EventManager_33, this._DomSharedStylesHost_34, this._AnimationDriver_35));
        }
        return this.__DomRootRenderer_36;
    }
    get _RootRenderer_37() {
        if ((this.__RootRenderer_37 == null)) {
            (this.__RootRenderer_37 = import64._createConditionalRootRenderer(this._DomRootRenderer_36, this.parent.get(import64.NgProbeToken, null)));
        }
        return this.__RootRenderer_37;
    }
    get _DomSanitizer_38() {
        if ((this.__DomSanitizer_38 == null)) {
            (this.__DomSanitizer_38 = new import19.DomSanitizerImpl());
        }
        return this.__DomSanitizer_38;
    }
    get _Sanitizer_39() {
        if ((this.__Sanitizer_39 == null)) {
            (this.__Sanitizer_39 = this._DomSanitizer_38);
        }
        return this.__Sanitizer_39;
    }
    get _ViewUtils_40() {
        if ((this.__ViewUtils_40 == null)) {
            (this.__ViewUtils_40 = new import20.ViewUtils(this._RootRenderer_37, this._APP_ID_29, this._Sanitizer_39));
        }
        return this.__ViewUtils_40;
    }
    get _IterableDiffers_41() {
        if ((this.__IterableDiffers_41 == null)) {
            (this.__IterableDiffers_41 = import3._iterableDiffersFactory());
        }
        return this.__IterableDiffers_41;
    }
    get _KeyValueDiffers_42() {
        if ((this.__KeyValueDiffers_42 == null)) {
            (this.__KeyValueDiffers_42 = import3._keyValueDiffersFactory());
        }
        return this.__KeyValueDiffers_42;
    }
    get _SharedStylesHost_43() {
        if ((this.__SharedStylesHost_43 == null)) {
            (this.__SharedStylesHost_43 = this._DomSharedStylesHost_34);
        }
        return this.__SharedStylesHost_43;
    }
    get _Title_44() {
        if ((this.__Title_44 == null)) {
            (this.__Title_44 = new import21.Title());
        }
        return this.__Title_44;
    }
    get _BrowserXhr_45() {
        if ((this.__BrowserXhr_45 == null)) {
            (this.__BrowserXhr_45 = new import22.BrowserXhr());
        }
        return this.__BrowserXhr_45;
    }
    get _ResponseOptions_46() {
        if ((this.__ResponseOptions_46 == null)) {
            (this.__ResponseOptions_46 = new import23.BaseResponseOptions());
        }
        return this.__ResponseOptions_46;
    }
    get _XSRFStrategy_47() {
        if ((this.__XSRFStrategy_47 == null)) {
            (this.__XSRFStrategy_47 = import5._createDefaultCookieXSRFStrategy());
        }
        return this.__XSRFStrategy_47;
    }
    get _XHRBackend_48() {
        if ((this.__XHRBackend_48 == null)) {
            (this.__XHRBackend_48 = new import24.XHRBackend(this._BrowserXhr_45, this._ResponseOptions_46, this._XSRFStrategy_47));
        }
        return this.__XHRBackend_48;
    }
    get _RequestOptions_49() {
        if ((this.__RequestOptions_49 == null)) {
            (this.__RequestOptions_49 = new import25.BaseRequestOptions());
        }
        return this.__RequestOptions_49;
    }
    get _Http_50() {
        if ((this.__Http_50 == null)) {
            (this.__Http_50 = import5.httpFactory(this._XHRBackend_48, this._RequestOptions_49));
        }
        return this.__Http_50;
    }
    get _RadioControlRegistry_51() {
        if ((this.__RadioControlRegistry_51 == null)) {
            (this.__RadioControlRegistry_51 = new import26.RadioControlRegistry());
        }
        return this.__RadioControlRegistry_51;
    }
    get _FormBuilder_52() {
        if ((this.__FormBuilder_52 == null)) {
            (this.__FormBuilder_52 = new import27.FormBuilder());
        }
        return this.__FormBuilder_52;
    }
    get _AppRootToken_53() {
        if ((this.__AppRootToken_53 == null)) {
            (this.__AppRootToken_53 = import65.MyApp);
        }
        return this.__AppRootToken_53;
    }
    get _DeepLinkConfigToken_54() {
        if ((this.__DeepLinkConfigToken_54 == null)) {
            (this.__DeepLinkConfigToken_54 = null);
        }
        return this.__DeepLinkConfigToken_54;
    }
    get _ActionSheetController_55() {
        if ((this.__ActionSheetController_55 == null)) {
            (this.__ActionSheetController_55 = new import28.ActionSheetController(this._App_22));
        }
        return this.__ActionSheetController_55;
    }
    get _AlertController_56() {
        if ((this.__AlertController_56 == null)) {
            (this.__AlertController_56 = new import29.AlertController(this._App_22));
        }
        return this.__AlertController_56;
    }
    get _Form_57() {
        if ((this.__Form_57 == null)) {
            (this.__Form_57 = new import30.Form());
        }
        return this.__Form_57;
    }
    get _GestureController_58() {
        if ((this.__GestureController_58 == null)) {
            (this.__GestureController_58 = new import31.GestureController(this._App_22));
        }
        return this.__GestureController_58;
    }
    get _Keyboard_59() {
        if ((this.__Keyboard_59 == null)) {
            (this.__Keyboard_59 = new import32.Keyboard(this._Config_21, this._Form_57, this.parent.get(import63.NgZone)));
        }
        return this.__Keyboard_59;
    }
    get _LoadingController_60() {
        if ((this.__LoadingController_60 == null)) {
            (this.__LoadingController_60 = new import33.LoadingController(this._App_22));
        }
        return this.__LoadingController_60;
    }
    get _LocationStrategy_61() {
        if ((this.__LocationStrategy_61 == null)) {
            (this.__LocationStrategy_61 = import8.provideLocationStrategy(this.parent.get(import66.PlatformLocation), this.parent.get(import67.APP_BASE_HREF, null), this._Config_21));
        }
        return this.__LocationStrategy_61;
    }
    get _Location_62() {
        if ((this.__Location_62 == null)) {
            (this.__Location_62 = new import34.Location(this._LocationStrategy_61));
        }
        return this.__Location_62;
    }
    get _MenuController_63() {
        if ((this.__MenuController_63 == null)) {
            (this.__MenuController_63 = new import35.MenuController());
        }
        return this.__MenuController_63;
    }
    get _ModalController_64() {
        if ((this.__ModalController_64 == null)) {
            (this.__ModalController_64 = new import36.ModalController(this._App_22));
        }
        return this.__ModalController_64;
    }
    get _PickerController_65() {
        if ((this.__PickerController_65 == null)) {
            (this.__PickerController_65 = new import37.PickerController(this._App_22));
        }
        return this.__PickerController_65;
    }
    get _PopoverController_66() {
        if ((this.__PopoverController_66 == null)) {
            (this.__PopoverController_66 = new import38.PopoverController(this._App_22));
        }
        return this.__PopoverController_66;
    }
    get _TapClick_67() {
        if ((this.__TapClick_67 == null)) {
            (this.__TapClick_67 = new import39.TapClick(this._Config_21, this._App_22, this.parent.get(import63.NgZone)));
        }
        return this.__TapClick_67;
    }
    get _ToastController_68() {
        if ((this.__ToastController_68 == null)) {
            (this.__ToastController_68 = new import40.ToastController(this._App_22));
        }
        return this.__ToastController_68;
    }
    get _Translate_69() {
        if ((this.__Translate_69 == null)) {
            (this.__Translate_69 = new import41.Translate());
        }
        return this.__Translate_69;
    }
    get _TransitionController_70() {
        if ((this.__TransitionController_70 == null)) {
            (this.__TransitionController_70 = new import42.TransitionController(this._Config_21));
        }
        return this.__TransitionController_70;
    }
    get _UrlSerializer_71() {
        if ((this.__UrlSerializer_71 == null)) {
            (this.__UrlSerializer_71 = import68.setupUrlSerializer(this._DeepLinkConfigToken_54));
        }
        return this.__UrlSerializer_71;
    }
    get _DeepLinker_72() {
        if ((this.__DeepLinker_72 == null)) {
            (this.__DeepLinker_72 = import69.setupDeepLinker(this._App_22, this._UrlSerializer_71, this._Location_62));
        }
        return this.__DeepLinker_72;
    }
    get _StoriesService_73() {
        if ((this.__StoriesService_73 == null)) {
            (this.__StoriesService_73 = new import43.StoriesService(this._Http_50));
        }
        return this.__StoriesService_73;
    }
    get _TRANSLATIONS_FORMAT_74() {
        if ((this.__TRANSLATIONS_FORMAT_74 == null)) {
            (this.__TRANSLATIONS_FORMAT_74 = null);
        }
        return this.__TRANSLATIONS_FORMAT_74;
    }
    createInternal() {
        this._CommonModule_0 = new import2.CommonModule();
        this._ApplicationModule_1 = new import3.ApplicationModule();
        this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._HttpModule_3 = new import5.HttpModule();
        this._InternalFormsSharedModule_4 = new import6.InternalFormsSharedModule();
        this._FormsModule_5 = new import7.FormsModule();
        this._ReactiveFormsModule_6 = new import7.ReactiveFormsModule();
        this._IonicModule_7 = new import8.IonicModule();
        this._AppModule_8 = new import1.AppModule();
        this._ErrorHandler_11 = import4.errorHandler();
        this._ConfigToken_12 = null;
        this._UrlToken_13 = import8.provideLocationHref();
        this._QueryParams_14 = import70.setupQueryParams(this._UrlToken_13);
        this._PlatformConfigToken_15 = import71.providePlatformConfigs();
        this._UserAgentToken_16 = import8.provideUserAgent();
        this._NavigatorPlatformToken_17 = import8.provideNavigatorPlatform();
        this._DocumentDirToken_18 = import8.provideDocumentDirection();
        this._DocLangToken_19 = import8.provideDocumentLang();
        this._Platform_20 = import72.setupPlatform(this._PlatformConfigToken_15, this._QueryParams_14, this._UserAgentToken_16, this._NavigatorPlatformToken_17, this._DocumentDirToken_18, this._DocLangToken_19, this.parent.get(import63.NgZone));
        this._Config_21 = import73.setupConfig(this._ConfigToken_12, this._QueryParams_14, this._Platform_20);
        this._App_22 = new import10.App(this._Config_21, this._Platform_20);
        this._APP_INITIALIZER_23 = [
            import74.registerModeConfigs(this._Config_21),
            import75.registerTransitions(this._Config_21),
            import76.setupProvideEvents(this._Platform_20),
            import39.setupTapClick(this._Config_21, this._App_22, this.parent.get(import63.NgZone))
        ];
        this._ApplicationInitStatus_24 = new import11.ApplicationInitStatus(this._APP_INITIALIZER_23);
        this._Testability_25 = new import12.Testability(this.parent.get(import63.NgZone));
        this._ApplicationRef__26 = new import13.ApplicationRef_(this.parent.get(import63.NgZone), this.parent.get(import77.Console), this, this._ErrorHandler_11, this, this._ApplicationInitStatus_24, this.parent.get(import12.TestabilityRegistry, null), this._Testability_25);
        return this._AppModule_8;
    }
    getInternal(token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import3.ApplicationModule)) {
            return this._ApplicationModule_1;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_2;
        }
        if ((token === import5.HttpModule)) {
            return this._HttpModule_3;
        }
        if ((token === import6.InternalFormsSharedModule)) {
            return this._InternalFormsSharedModule_4;
        }
        if ((token === import7.FormsModule)) {
            return this._FormsModule_5;
        }
        if ((token === import7.ReactiveFormsModule)) {
            return this._ReactiveFormsModule_6;
        }
        if ((token === import8.IonicModule)) {
            return this._IonicModule_7;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_8;
        }
        if ((token === import78.LOCALE_ID)) {
            return this._LOCALE_ID_9;
        }
        if ((token === import9.NgLocalization)) {
            return this._NgLocalization_10;
        }
        if ((token === import79.ErrorHandler)) {
            return this._ErrorHandler_11;
        }
        if ((token === import73.ConfigToken)) {
            return this._ConfigToken_12;
        }
        if ((token === import70.UrlToken)) {
            return this._UrlToken_13;
        }
        if ((token === import70.QueryParams)) {
            return this._QueryParams_14;
        }
        if ((token === import71.PlatformConfigToken)) {
            return this._PlatformConfigToken_15;
        }
        if ((token === import72.UserAgentToken)) {
            return this._UserAgentToken_16;
        }
        if ((token === import72.NavigatorPlatformToken)) {
            return this._NavigatorPlatformToken_17;
        }
        if ((token === import72.DocumentDirToken)) {
            return this._DocumentDirToken_18;
        }
        if ((token === import72.DocLangToken)) {
            return this._DocLangToken_19;
        }
        if ((token === import72.Platform)) {
            return this._Platform_20;
        }
        if ((token === import73.Config)) {
            return this._Config_21;
        }
        if ((token === import10.App)) {
            return this._App_22;
        }
        if ((token === import11.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_23;
        }
        if ((token === import11.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_24;
        }
        if ((token === import12.Testability)) {
            return this._Testability_25;
        }
        if ((token === import13.ApplicationRef_)) {
            return this._ApplicationRef__26;
        }
        if ((token === import13.ApplicationRef)) {
            return this._ApplicationRef_27;
        }
        if ((token === import14.Compiler)) {
            return this._Compiler_28;
        }
        if ((token === import59.APP_ID)) {
            return this._APP_ID_29;
        }
        if ((token === import80.DOCUMENT)) {
            return this._DOCUMENT_30;
        }
        if ((token === import62.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_31;
        }
        if ((token === import16.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_32;
        }
        if ((token === import16.EventManager)) {
            return this._EventManager_33;
        }
        if ((token === import17.DomSharedStylesHost)) {
            return this._DomSharedStylesHost_34;
        }
        if ((token === import81.AnimationDriver)) {
            return this._AnimationDriver_35;
        }
        if ((token === import18.DomRootRenderer)) {
            return this._DomRootRenderer_36;
        }
        if ((token === import82.RootRenderer)) {
            return this._RootRenderer_37;
        }
        if ((token === import19.DomSanitizer)) {
            return this._DomSanitizer_38;
        }
        if ((token === import83.Sanitizer)) {
            return this._Sanitizer_39;
        }
        if ((token === import20.ViewUtils)) {
            return this._ViewUtils_40;
        }
        if ((token === import84.IterableDiffers)) {
            return this._IterableDiffers_41;
        }
        if ((token === import85.KeyValueDiffers)) {
            return this._KeyValueDiffers_42;
        }
        if ((token === import17.SharedStylesHost)) {
            return this._SharedStylesHost_43;
        }
        if ((token === import21.Title)) {
            return this._Title_44;
        }
        if ((token === import22.BrowserXhr)) {
            return this._BrowserXhr_45;
        }
        if ((token === import23.ResponseOptions)) {
            return this._ResponseOptions_46;
        }
        if ((token === import86.XSRFStrategy)) {
            return this._XSRFStrategy_47;
        }
        if ((token === import24.XHRBackend)) {
            return this._XHRBackend_48;
        }
        if ((token === import25.RequestOptions)) {
            return this._RequestOptions_49;
        }
        if ((token === import87.Http)) {
            return this._Http_50;
        }
        if ((token === import26.RadioControlRegistry)) {
            return this._RadioControlRegistry_51;
        }
        if ((token === import27.FormBuilder)) {
            return this._FormBuilder_52;
        }
        if ((token === import88.AppRootToken)) {
            return this._AppRootToken_53;
        }
        if ((token === import68.DeepLinkConfigToken)) {
            return this._DeepLinkConfigToken_54;
        }
        if ((token === import28.ActionSheetController)) {
            return this._ActionSheetController_55;
        }
        if ((token === import29.AlertController)) {
            return this._AlertController_56;
        }
        if ((token === import30.Form)) {
            return this._Form_57;
        }
        if ((token === import31.GestureController)) {
            return this._GestureController_58;
        }
        if ((token === import32.Keyboard)) {
            return this._Keyboard_59;
        }
        if ((token === import33.LoadingController)) {
            return this._LoadingController_60;
        }
        if ((token === import67.LocationStrategy)) {
            return this._LocationStrategy_61;
        }
        if ((token === import34.Location)) {
            return this._Location_62;
        }
        if ((token === import35.MenuController)) {
            return this._MenuController_63;
        }
        if ((token === import36.ModalController)) {
            return this._ModalController_64;
        }
        if ((token === import37.PickerController)) {
            return this._PickerController_65;
        }
        if ((token === import38.PopoverController)) {
            return this._PopoverController_66;
        }
        if ((token === import39.TapClick)) {
            return this._TapClick_67;
        }
        if ((token === import40.ToastController)) {
            return this._ToastController_68;
        }
        if ((token === import41.Translate)) {
            return this._Translate_69;
        }
        if ((token === import42.TransitionController)) {
            return this._TransitionController_70;
        }
        if ((token === import68.UrlSerializer)) {
            return this._UrlSerializer_71;
        }
        if ((token === import69.DeepLinker)) {
            return this._DeepLinker_72;
        }
        if ((token === import43.StoriesService)) {
            return this._StoriesService_73;
        }
        if ((token === import89.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_74;
        }
        return notFoundResult;
    }
    destroyInternal() {
        this._ApplicationRef__26.ngOnDestroy();
    }
}
export const AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
