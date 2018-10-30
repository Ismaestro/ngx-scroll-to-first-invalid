import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
export declare class NgxScrollToFirstInvalidDirective {
    private el;
    formGroup: NgForm;
    constructor(el: ElementRef);
    static scrollToElement(element: any): void;
    static markFormGroupTouched(formGroup: any): void;
    onSubmit(event: any): void;
}
