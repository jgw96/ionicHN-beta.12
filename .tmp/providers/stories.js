import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
export class StoriesService {
    constructor(http) {
        this.http = http;
    }
    getStories() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getAskStories() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getShowStories() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getJobStories() {
        return this.http.get('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
            .map(this.extractData)
            .catch(this.handleError);
    }
    getStory(storyId) {
        return this.http.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
            .map(this.extractData)
            .catch(this.handleError);
    }
    extractData(res) {
        let body = res.json();
        return body || {};
    }
    handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
StoriesService.decorators = [
    { type: Injectable },
];
StoriesService.ctorParameters = [
    { type: Http, },
];
