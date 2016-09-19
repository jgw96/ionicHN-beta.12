import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
export class MyApp {
    constructor(platform) {
        this.rootPage = TabsPage;
        platform.ready().then(() => {
        });
    }
}
MyApp.decorators = [
    { type: Component, args: [{
                template: `<ion-nav [root]="rootPage"></ion-nav>`
            },] },
];
MyApp.ctorParameters = [
    { type: Platform, },
];
