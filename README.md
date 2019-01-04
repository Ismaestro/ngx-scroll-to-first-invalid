<p align="center">
  <h1 align="center">@ngx-scroll-to-first-invalid</h1>
  <p align="center">
    Angular directive to scroll to first invalid input inside a form on submit
    <br>
    <br>
    <a href="https://ismaestro.github.io/ngx-scroll-to-first-invalid/">LIVE DEMO</a>
    <br>
    <a href="https://ismaestro.github.io/ngx-scroll-to-first-invalid/">
      <img src="https://media.giphy.com/media/yNi7F2K2L2nRTiD4O2/giphy.gif" alt="Demo example"/>
    </a>
    <br>
    <a href="https://github.com/Ismaestro/ngx-scroll-to-first-invalid/issues/new?template=bug.md">Report bug</a>
    ·
    <a href="https://github.com/Ismaestro/ngx-scroll-to-first-invalid/issues/new?template=feature.md&labels=feature">Request feature</a>
    <br>
  </p>
</p>

## Table of contents

- [Status](#status)
- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Status

![travis](https://travis-ci.org/Ismaestro/ngx-scroll-to-first-invalid.svg?branch=master)

## Quick start

First you need to install the npm module:

```sh
npm i @ismaestro/ngx-scroll-to-first-invalid --save
```

#### 1. Import the `NgxScrollToFirstInvalidModule`:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid';

@NgModule({
    imports: [
        BrowserModule,
        NgxScrollToFirstInvalidModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2. Use the directive inside a form:

```html
<form [formGroup]="testForm" ngxScrollToFirstInvalid>
  <input id="test-input1" type="text" formControlName="someText1">
  <button (click)="saveForm()"></button>
</form>
```

Here there is an example using ngx-scroll-to-first-invalid [here](https://ismaestro.github.io/ngx-scroll-to-first-invalid)

## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/blob/master/CONTRIBUTING.md) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/issues/new).

## Creators

**Ismael Ramos**

- <https://github.com/ismaestro>

<a href='https://ko-fi.com/S6S5LMVR' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi4.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## Copyright and license

Code and documentation copyright 2011-2018 the authors. Code released under the [MIT License](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/blob/master/LICENSE).

Enjoy :metal:

