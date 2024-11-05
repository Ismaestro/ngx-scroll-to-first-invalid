<p align="center">
  <h1 align="center">ngx-scroll-to-first-invalid</h1>
  <p align="center">
    Angular directive to scroll to first invalid input inside a form.
    <br>
    <br>
    <a href="https://ngx-scroll-to-first-invalid.netlify.app/">LIVE DEMO</a>
    <br>
    <a href="https://ngx-scroll-to-first-invalid.netlify.app/">
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

- [Usage](#usage)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Usage

```sh
npm i @ismaestro/ngx-scroll-to-first-invalid --save-dev
```

#### 1. Import the directive in your component:

```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgxScrollToFirstInvalidDirective, ...],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
```

#### 2. Use the directive inside a form:

```html
<form [formGroup]="testForm" ngxScrollToFirstInvalid>
  <input id="test-input1" type="text" formControlName="someText1" />
  <button (click)="saveForm()"></button>
</form>
```

Here you have an example of a form using ngx-scroll-to-first-invalid.
[DEMO](https://ngx-scroll-to-first-invalid.netlify.app)

It also works with nested forms, and recently added support for Angular Ionic.

## Bugs and feature requests

Have a bug or a feature request? Please first read the
[issue guidelines](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/blob/master/CONTRIBUTING.md)
and search for existing and closed issues. If your problem or idea is not addressed yet,
[please open a new issue](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/issues/new).

## Creators

**Ismael Ramos**

- <https://github.com/ismaestro>

## Copyright and license

Code released under the
[MIT License](https://github.com/Ismaestro/ngx-scroll-to-first-invalid/blob/master/LICENSE).

Enjoy :metal:
