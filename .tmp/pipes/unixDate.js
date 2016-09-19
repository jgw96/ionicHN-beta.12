import { Injectable, Pipe } from '@angular/core';
export class UnixDate {
    transform(value, args) {
        let date = new Date(value * 1000);
        return date;
    }
}
UnixDate.decorators = [
    { type: Pipe, args: [{
                name: 'unixDate'
            },] },
    { type: Injectable },
];
UnixDate.ctorParameters = [];
