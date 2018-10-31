# @ngx-scroll-to-first-invalid ![travis](https://travis-ci.org/Ismaestro/ngx-scroll-to-first-invalid.svg?branch=master)

Angular directive to scroll to first invalid input inside a form.

Simple example using ngx-scroll-to-first-invalid [here](https://ismaestro.github.io/ngx-scroll-to-first-invalid)

<p align="center">
  <img src="https://media.giphy.com/media/yNi7F2K2L2nRTiD4O2/giphy.gif" alt="Demo example"/>
</p>

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contributors](#contributors)

## Installation

First you need to install the npm module:

```sh
npm i @ismaestro/ngx-scroll-to-first-invalid --save
```

## Usage

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

## Contributing

- Please see the CONTRIBUTING file for guidelines.
- Create **pull requests, submit bugs, suggest new features** or documentation updates :wrench:

## License

MIT

## Contributors

If you have an idea or you want to do something, tell me or just do it!
I'm always happy to hear your feedback!

Enjoy :metal:
