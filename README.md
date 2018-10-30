# @ngx-scroll-to-first-invalid ![travis](https://travis-ci.org/Ismaestro/ngx-scroll-to-first-invalid.svg?branch=master)

Angular directive to scroll to first invalid input inside a form.

Simple example using ngx-scroll-to-first-invalid [here](https://angularexampleapp.com/heroes)

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)

## Installation

First you need to install the npm module:

```sh
npm install @ismaestro/ngx-scroll-to-first-invalid --save
```

## Usage

#### 1. Import the `NgxScrollToFirstInvalidModule`:

```ts
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxScrollToFirstInvalidModule} from '@ismaestro/ngx-scroll-to-first-invalid/ngx-scroll-to-first-invalid.module';

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
  <input id="test-input1" type="text" [formControl]="testForm.get('someText1')">
  <button (click)="saveForm()"></button>
</form>
```

```ts
export class AppComponent {
  testForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.testForm = this.formBuilder.group({
      someText1: ['', [Validators.required]]
    });
  }

  saveForm() {
  }
}
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
