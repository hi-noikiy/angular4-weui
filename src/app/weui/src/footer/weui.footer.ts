/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { Component, Input, HostBinding, Renderer2, ElementRef } from '@angular/core';
import { Directive, Host, Optional } from '@angular/core';

/**
 * 页脚
 */
@Component({
    selector: 'weui-footer',
    template: '<ng-content></ng-content>'
})
export class WeUIFooter {

    /**
     * 固定在底部
     */
    @Input() fixedAtBottom = false;

    /**
     * 基本样式
     */
    @HostBinding('class.weui-footer') _cls_footer = true;

    /**
     * 固定在底部样式
     */
    @HostBinding('class.weui-footer_fixed-bottom') get fixedBottomCls(): boolean {
        return this.fixedAtBottom;
    }

    constructor() {

    }

}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'weui-footer-text,[weui-footer-text]'
})
export class WeUIFooterText {

    constructor(
        protected _renderer: Renderer2,
        protected _elementRef: ElementRef,
        @Optional() @Host() protected _container: WeUIFooter) {
        if (_container !== null) {
            _renderer.addClass(_elementRef.nativeElement, 'weui-footer__text');
        }
    }

}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'weui-footer-links,[weui-footer-links]'
})
export class WeUIFooterLinks {

    constructor(
        protected _renderer: Renderer2,
        protected _elementRef: ElementRef,
        @Optional() @Host() protected _container: WeUIFooter) {
        if (_container !== null) {
            _renderer.addClass(_elementRef.nativeElement, 'weui-footer__links');
        }
    }

}

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: 'a'
})
export class WeUIFooterLink {

    constructor(
        protected _renderer: Renderer2,
        protected _elementRef: ElementRef,
        @Optional() @Host() protected _container: WeUIFooterLinks) {
        if (_container !== null) {
            _renderer.addClass(_elementRef.nativeElement, 'weui-footer__link');
        }
    }

}
