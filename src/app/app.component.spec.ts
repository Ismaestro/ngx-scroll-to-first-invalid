import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AlertModule} from 'ngx-bootstrap/alert';
import {NgxScrollToFirstInvalidModule} from '../../projects/ngx-scroll-to-first-invalid-lib/src/ngx-scroll-to-first-invalid.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        AlertModule.forRoot(),
        NgxScrollToFirstInvalidModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
