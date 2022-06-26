(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Daniel\Desktop\CountriesApp\CountriesApp\src\main.ts */"zUnb");


/***/ }),

/***/ "3ykB":
/*!******************************************************!*\
  !*** ./src/components/layout/body/body.component.ts ***!
  \******************************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class BodyComponent {
    constructor() { }
    ngOnInit() {
    }
}
BodyComponent.ɵfac = function BodyComponent_Factory(t) { return new (t || BodyComponent)(); };
BodyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyComponent, selectors: [["body-component"]], decls: 2, vars: 0, template: function BodyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2R5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "5HaT":
/*!********************************************************************!*\
  !*** ./src/components/layout/breadcrumbs/breadcrumbs.component.ts ***!
  \********************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function BreadcrumbsComponent_ng_container_1_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
} }
function BreadcrumbsComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BreadcrumbsComponent_ng_container_1_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const breadcrumb_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onClickParentUrl(breadcrumb_r1.route); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BreadcrumbsComponent_ng_container_1_img_3_Template, 1, 0, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const breadcrumb_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r2 === ctx_r0.breadcrumbs.length - 1 ? "active" : "primary-500-fg");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", breadcrumb_r1.routeName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.breadcrumbs.length - 1);
} }
class BreadcrumbsComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onClickParentUrl(route) {
        if (route !== null) {
            this.router.navigateByUrl(route);
        }
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["breadcrumbs-component"]], inputs: { breadcrumbs: "breadcrumbs" }, decls: 2, vars: 1, consts: [[1, "breadcrumbs-row"], [4, "ngFor", "ngForOf"], [3, "ngClass", "click"], ["class", "crumb-icon", "src", "../../../assets/images/next.svg", 4, "ngIf"], ["src", "../../../assets/images/next.svg", 1, "crumb-icon"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbsComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1icy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "7iWg":
/*!*******************************************************************************!*\
  !*** ./src/components/countries/country-details/country-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CountryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryDetailsComponent", function() { return CountryDetailsComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store/actions/world.actions */ "JuoV");
/* harmony import */ var src_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/utils/capitalize */ "M8Ev");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/index */ "BhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/layout/breadcrumbs/breadcrumbs.component */ "5HaT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pipes/join.pipe */ "osRZ");
/* harmony import */ var src_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/pipes/thousand-suffixes.pipe */ "m//y");













function CountryDetailsComponent_span_27_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const currency_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", currency_r2.key + ";", " ");
} }
function CountryDetailsComponent_span_27_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
} if (rf & 2) {
    const currency_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", currency_r2.key, " ");
} }
function CountryDetailsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CountryDetailsComponent_span_27_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CountryDetailsComponent_span_27_ng_template_3_Template, 1, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r3 = ctx.last;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r0.country$)) == null ? null : tmp_0_0.currencies.length) > 0 && !last_r3)("ngIfElse", _r5);
} }
function CountryDetailsComponent_span_46_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const language_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", language_r9.value + ";", " ");
} }
function CountryDetailsComponent_span_46_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](0);
} if (rf & 2) {
    const language_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", language_r9.value, " ");
} }
function CountryDetailsComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, CountryDetailsComponent_span_46_ng_container_1_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, CountryDetailsComponent_span_46_ng_template_3_Template, 1, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r10 = ctx.last;
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0 = null;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, ctx_r1.country$)) == null ? null : tmp_0_0.languages.length) > 0 && !last_r10)("ngIfElse", _r12);
} }
class CountryDetailsComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.region = this.route.snapshot.paramMap.get('region');
        this.countryName = this.route.snapshot.paramMap.get('country');
        this.store.dispatch(new src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_3__["GetCountryDetails"]({ regionName: this.region, countryName: this.countryName }));
        this.routeForBreadcrumbs = [
            {
                route: '/regions',
                routeName: 'Regions'
            },
            {
                route: '/regions/' + this.region,
                routeName: Object(src_utils_capitalize__WEBPACK_IMPORTED_MODULE_4__["capitalizeFirstLetter"])(this.region)
            },
            {
                route: '/regions/' + this.region + '/' + this.countryName,
                routeName: this.countryName
            }
        ];
        this.country$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_index__WEBPACK_IMPORTED_MODULE_5__["country"], {
            regionName: this.region,
            country: this.countryName
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((country) => !!country));
    }
}
CountryDetailsComponent.ɵfac = function CountryDetailsComponent_Factory(t) { return new (t || CountryDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
CountryDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: CountryDetailsComponent, selectors: [["country-details-component"]], decls: 49, vars: 33, consts: [[1, "country-details"], [1, "country-details__header"], [3, "breadcrumbs"], ["src", "../../../assets/images/triangle.svg", "alt", "triangle", 1, "country-details__triangle"], [1, "country-details__title"], [1, "country-details__description"], [1, "country-details__body"], [1, "country-details__flag-wrapper"], ["alt", "flag", 1, "country-details__flag", 3, "src"], [1, "country-details__description-box"], [1, "description-box__title"], [1, "description-box__details"], [1, "details__box"], [1, "details__label"], [1, "details__text"], ["class", "details__text text--one-line", 4, "ngFor", "ngForOf"], [1, "details__text", "text--one-line"], [4, "ngIf", "ngIfElse"], ["oneCurrency", ""], ["oneLanguage", ""]], template: function CountryDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "breadcrumbs-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Below you will find more information about the country you have selected. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Capital(s): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "join");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Currencies: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, CountryDetailsComponent_span_27_Template, 5, 4, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](28, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " Population: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](35, "thousandSuff");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, " Subregion: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Languages: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, CountryDetailsComponent_span_46_Template, 5, 4, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](47, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_2_0 = null;
        let tmp_3_0 = null;
        let tmp_4_0 = null;
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        let tmp_7_0 = null;
        let tmp_8_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbs", ctx.routeForBreadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.countryName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", (tmp_2_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 9, ctx.country$)) == null ? null : tmp_2_0.flags == null ? null : tmp_2_0.flags.svg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](15, 11, ctx.country$)) == null ? null : tmp_3_0.name == null ? null : tmp_3_0.name.official, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](22, 13, (tmp_4_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 16, ctx.country$)) == null ? null : tmp_4_0.capital, "; "), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](28, 18, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](29, 20, ctx.country$)) == null ? null : tmp_5_0.currencies));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](35, 22, (tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](36, 25, ctx.country$)) == null ? null : tmp_6_0.population, 2), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", (tmp_7_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 27, ctx.country$)) == null ? null : tmp_7_0.subregion, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](47, 29, (tmp_8_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](48, 31, ctx.country$)) == null ? null : tmp_8_0.languages));
    } }, directives: [src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_9__["JoinPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], src_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_10__["ThousandSuffixesPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJ5LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "A24m":
/*!*******************************!*\
  !*** ./src/utils/is-array.ts ***!
  \*******************************/
/*! exports provided: isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
function isArray(value) {
    return Array.isArray(value);
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    worldApi: 'https://restcountries.com/v3.1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BhN1":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/*! exports provided: Reducers, worldState, isLoading, countriesForRegion, country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reducers", function() { return Reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldState", function() { return worldState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoading", function() { return isLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countriesForRegion", function() { return countriesForRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "country", function() { return country; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_world_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/world.reducer */ "bl0b");


const Reducers = {
    worldState: _reducers_world_reducer__WEBPACK_IMPORTED_MODULE_1__["worldReducer"]
};
//selectors 
const worldState = (state) => state.worldState;
const isLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(worldState, (state) => state.isLoading);
const countriesForRegion = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(worldState, (state, r) => { var _a; return (_a = state.regions.find(region => region.name === r)) === null || _a === void 0 ? void 0 : _a.countries; });
const country = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(worldState, (state, c) => { var _a; return (_a = state.regions.find(region => region.name === c.regionName)) === null || _a === void 0 ? void 0 : _a.countries.find(country => country.name.common === c.country); });


/***/ }),

/***/ "JeeT":
/*!**********************************************************!*\
  !*** ./src/components/layout/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function HeaderComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_ng_container_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r1.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
class HeaderComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.rootRoute = '/regions';
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subscription"]();
        this.showGoBackButton = false;
    }
    ngOnInit() {
        this.subscription.add(this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]))
            .subscribe((event) => {
            if (event.url === this.rootRoute)
                this.showGoBackButton = false;
            else
                this.showGoBackButton = true;
        }));
    }
    navigateToHome() {
        this.router.navigate(['/']);
    }
    goBack() {
        this.router.navigate([this.router.url.substring(0, this.router.url.lastIndexOf('/'))]);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header-component"]], decls: 4, vars: 1, consts: [[1, "header"], [1, "header__logo", 3, "click"], ["src", "../../../assets/images/world.svg", "alt", "world", 1, "world-icon"], [4, "ngIf"], [1, "btn", "outline-primary-btn", "header__btn", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_1_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HeaderComponent_ng_container_3_Template, 3, 0, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showGoBackButton);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JpWz":
/*!***********************************************************************!*\
  !*** ./src/components/regions/regions-item/regions-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegionsItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsItemComponent", function() { return RegionsItemComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/store/actions/world.actions */ "JuoV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RegionsItemComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
    }
    ngOnInit() {
    }
    onRegionClick() {
        this.store.dispatch(new src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["SetRegionActive"]({ region: this.region }));
        this.router.navigate(['/regions', this.region]);
    }
}
RegionsItemComponent.ɵfac = function RegionsItemComponent_Factory(t) { return new (t || RegionsItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
RegionsItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RegionsItemComponent, selectors: [["regions-item-component"]], inputs: { region: "region" }, decls: 7, vars: 3, consts: [[1, "regions-item", 3, "click"], [1, "regions-item__title"], ["src", "../../../assets/images/triangle.svg", "alt", "triangle", 1, "regions-item__triangle"], [1, "regions-item__square"], ["alt", "", 1, "regions-item__continent-img", 3, "src"], ["alt", "", 1, "regions-item__continent-img-bgc", 3, "src"]], template: function RegionsItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RegionsItemComponent_Template_div_click_0_listener() { return ctx.onRegionClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.region, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "../../../assets/images/" + ctx.region + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "../../../assets/images/" + ctx.region + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb25zLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "JuoV":
/*!********************************************!*\
  !*** ./src/store/actions/world.actions.ts ***!
  \********************************************/
/*! exports provided: WORLD_ACTION, ShowLoadingSpinner, HideLoadingSpinner, GetCountriesByRegion, GetCountriesByRegionSuccessfully, GetCountriesByRegionFailed, GetCountryDetails, GetCountryDetailsSuccessfully, GetCountryDetailsFailed, SetRegionActive, SetRegionInactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WORLD_ACTION", function() { return WORLD_ACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLoadingSpinner", function() { return ShowLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideLoadingSpinner", function() { return HideLoadingSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountriesByRegion", function() { return GetCountriesByRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountriesByRegionSuccessfully", function() { return GetCountriesByRegionSuccessfully; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountriesByRegionFailed", function() { return GetCountriesByRegionFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryDetails", function() { return GetCountryDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryDetailsSuccessfully", function() { return GetCountryDetailsSuccessfully; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetCountryDetailsFailed", function() { return GetCountryDetailsFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRegionActive", function() { return SetRegionActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetRegionInactive", function() { return SetRegionInactive; });
var WORLD_ACTION;
(function (WORLD_ACTION) {
    WORLD_ACTION.GET_COUNTRIES_BY_REGION = 'GET_COUNTRIES_BY_REGION';
    WORLD_ACTION.GET_COUNTRIES_BY_REGION_SUCCESSFULLY = 'GET_COUNTRIES_BY_REGION_SUCCESSFULLY';
    WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED = 'GET_COUNTRIES_BY_REGION_FAILED';
    WORLD_ACTION.GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
    WORLD_ACTION.GET_COUNTRY_DETAILS_SUCCESSFULLY = 'GET_COUNTRY_DETAILS_SUCCESSFULLY';
    WORLD_ACTION.GET_COUNTRY_DETAILS_FAILED = 'GET_COUNTRY_DETAILS_FAILED';
    WORLD_ACTION.SET_REGION_ACTIVE = 'SET_REGION_ACTIVE';
    WORLD_ACTION.SET_REGIONS_INACTIVE = 'SET_REGIONS_INACTIVE';
    WORLD_ACTION.SHOW_LOADING_SPINNER = 'SHOW_LOADING_SPINNER';
    WORLD_ACTION.HIDE_LOADING_SPINNER = 'HIDE_LOADING_SPINNER';
})(WORLD_ACTION || (WORLD_ACTION = {}));
class ShowLoadingSpinner {
    constructor() {
        this.type = WORLD_ACTION.SHOW_LOADING_SPINNER;
    }
}
class HideLoadingSpinner {
    constructor() {
        this.type = WORLD_ACTION.HIDE_LOADING_SPINNER;
    }
}
class GetCountriesByRegion {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRIES_BY_REGION;
    }
}
class GetCountriesByRegionSuccessfully {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRIES_BY_REGION_SUCCESSFULLY;
    }
}
class GetCountriesByRegionFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRIES_BY_REGION_FAILED;
    }
}
class GetCountryDetails {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRY_DETAILS;
    }
}
class GetCountryDetailsSuccessfully {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRY_DETAILS_SUCCESSFULLY;
    }
}
class GetCountryDetailsFailed {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.GET_COUNTRY_DETAILS_FAILED;
    }
}
class SetRegionActive {
    constructor(payload) {
        this.payload = payload;
        this.type = WORLD_ACTION.SET_REGION_ACTIVE;
    }
}
class SetRegionInactive {
    constructor() {
        this.type = WORLD_ACTION.SET_REGIONS_INACTIVE;
    }
}


/***/ }),

/***/ "Kz1Z":
/*!********************************************************!*\
  !*** ./src/components/layout/modal/modal.component.ts ***!
  \********************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ModalComponent {
    constructor() {
        this.cancelClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    cancel() {
        this.cancelClicked.emit();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["modal-component"]], inputs: { title: "title" }, outputs: { cancelClicked: "cancelClicked" }, ngContentSelectors: _c0, decls: 8, vars: 1, consts: [[1, "modal"], [1, "modal__top"], [1, "modal__title"], ["src", "../../../assets/images/close-icon.svg", 1, "modal__close-btn", 3, "click"], [1, "modal__content"], [1, "overlay"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_Template_img_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "M8Ev":
/*!*********************************!*\
  !*** ./src/utils/capitalize.ts ***!
  \*********************************/
/*! exports provided: capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


/***/ }),

/***/ "R10v":
/*!*****************************************************************************!*\
  !*** ./src/components/countries/countries-list/countries-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CountriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesListComponent", function() { return CountriesListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/store/actions/world.actions */ "JuoV");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/index */ "BhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pipes/join.pipe */ "osRZ");










function CountriesListComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CountriesListComponent_ng_container_14_Template_tr_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const country_r1 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.onCountryRowClicked(country_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "join");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const country_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", country_r1.flags.svg, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", country_r1.name.official, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", country_r1.capital ? _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 4, country_r1.capital, "; ") : "-", " ");
} }
class CountriesListComponent {
    constructor(store, route, router) {
        this.store = store;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        this.region = this.route.snapshot.paramMap.get('region');
        this.store.dispatch(new src_store_actions_world_actions__WEBPACK_IMPORTED_MODULE_3__["GetCountriesByRegion"]({ region: this.region }));
        this.countries$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_index__WEBPACK_IMPORTED_MODULE_4__["countriesForRegion"], this.region), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((countries) => !!countries && (countries === null || countries === void 0 ? void 0 : countries.length) > 0));
    }
    onCountryRowClicked(country) {
        this.router.navigate(['/regions', this.region, country.name.common]);
    }
}
CountriesListComponent.ɵfac = function CountriesListComponent_Factory(t) { return new (t || CountriesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
CountriesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CountriesListComponent, selectors: [["countries-list-component"]], decls: 16, vars: 3, consts: [[1, "countries-list"], [1, "countries-list__table-container"], [1, "countries-list__table"], [1, "countries-list__head-row"], [1, "countries-list__head-cell", "countries-list__head-cell--first"], [1, "countries-list__head-cell", "countries-list__head-cell--second"], [1, "countries-list__head-cell", "countries-list__head-cell--third"], [1, "countries-list__head-cell", "countries-list__head-cell--fourth"], [4, "ngFor", "ngForOf"], [1, "countries-list__row", 3, "click"], [1, "countries-list__cell", "countries-list__cell--first"], [1, "countries-list__cell", "countries-list__cell--second"], ["alt", "flag", 1, "countries-list__flag", 3, "src"], [1, "countries-list__cell", "countries-list__cell--third"], [1, "countries-list__cell", "countries-list__cell--fourth"]], template: function CountriesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " # ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Flag ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Capital ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, CountriesListComponent_ng_container_14_Template, 12, 7, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 1, ctx.countries$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_7__["JoinPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJpZXMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_components_layout_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/layout/wizard/wizard.component */ "nRUw");


class AppComponent {
    constructor() {
        this.title = 'CountriesApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "wizard-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_components_layout_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_1__["WizardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "TPuL":
/*!*************************************************************!*\
  !*** ./src/components/regions/regions/regions.component.ts ***!
  \*************************************************************/
/*! exports provided: RegionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsComponent", function() { return RegionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_components_regions_regions_list_regions_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/regions/regions-list/regions-list.component */ "aRWP");


class RegionsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegionsComponent.ɵfac = function RegionsComponent_Factory(t) { return new (t || RegionsComponent)(); };
RegionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionsComponent, selectors: [["regions-component"]], decls: 12, vars: 0, consts: [[1, "regions"], [1, "regions__header"], [1, "regions__caption-left"], ["src", "../../../assets/images/triangle.svg", "alt", "triangle", 1, "regions__triangle"], [1, "regions__title"], [1, "regions__description"], [1, "regions__caption-right"], ["src", "../../../assets/images/continents-of-earth.svg", "alt", "continents", 1, "regions__continents-img"], [1, "regions__list"]], template: function RegionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Regions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ut ex nulla. Morbi non lobortis lectus. Suspendisse pulvinar ipsum ipsum, vitae pellentesque lectus faucibus non. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "regions-list-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_components_regions_regions_list_regions_list_component__WEBPACK_IMPORTED_MODULE_1__["RegionsListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb25zLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "BhN1");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var src_store_effects_world_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/store/effects/world.effects */ "ZxbV");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/layout/header/header.component */ "JeeT");
/* harmony import */ var src_components_layout_body_body_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/components/layout/body/body.component */ "3ykB");
/* harmony import */ var src_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/components/layout/footer/footer.component */ "r3ui");
/* harmony import */ var src_components_layout_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/components/layout/wizard/wizard.component */ "nRUw");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_components_regions_regions_regions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/components/regions/regions/regions.component */ "TPuL");
/* harmony import */ var src_components_regions_regions_list_regions_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/components/regions/regions-list/regions-list.component */ "aRWP");
/* harmony import */ var src_components_regions_regions_item_regions_item_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/components/regions/regions-item/regions-item.component */ "JpWz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var src_components_countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/components/countries/countries-list/countries-list.component */ "R10v");
/* harmony import */ var src_components_countries_countries_countries_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/components/countries/countries/countries.component */ "g4zY");
/* harmony import */ var src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/components/layout/breadcrumbs/breadcrumbs.component */ "5HaT");
/* harmony import */ var src_components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/components/layout/spinner/spinner.component */ "nhMq");
/* harmony import */ var src_components_countries_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/components/countries/country-details/country-details.component */ "7iWg");
/* harmony import */ var src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/pipes/join.pipe */ "osRZ");
/* harmony import */ var src_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/pipes/thousand-suffixes.pipe */ "m//y");
/* harmony import */ var src_components_layout_modal_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/components/layout/modal/modal.component */ "Kz1Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ "fXoL");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreModule"].forRoot(_store_index__WEBPACK_IMPORTED_MODULE_2__["Reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forRoot([
                src_store_effects_world_effects__WEBPACK_IMPORTED_MODULE_4__["WorldEffects"],
            ]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
                logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        src_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        src_components_layout_body_body_component__WEBPACK_IMPORTED_MODULE_8__["BodyComponent"],
        src_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        src_components_layout_wizard_wizard_component__WEBPACK_IMPORTED_MODULE_10__["WizardComponent"],
        src_components_regions_regions_regions_component__WEBPACK_IMPORTED_MODULE_13__["RegionsComponent"],
        src_components_regions_regions_list_regions_list_component__WEBPACK_IMPORTED_MODULE_14__["RegionsListComponent"],
        src_components_regions_regions_item_regions_item_component__WEBPACK_IMPORTED_MODULE_15__["RegionsItemComponent"],
        src_components_countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_18__["CountriesListComponent"],
        src_components_countries_countries_countries_component__WEBPACK_IMPORTED_MODULE_19__["CountriesComponent"],
        src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_20__["BreadcrumbsComponent"],
        src_components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_21__["SpinnerComponent"],
        src_components_countries_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_22__["CountryDetailsComponent"],
        src_components_layout_modal_modal_component__WEBPACK_IMPORTED_MODULE_25__["ModalComponent"],
        src_pipes_join_pipe__WEBPACK_IMPORTED_MODULE_23__["JoinPipe"],
        src_pipes_thousand_suffixes_pipe__WEBPACK_IMPORTED_MODULE_24__["ThousandSuffixesPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["BrowserModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"]] }); })();


/***/ }),

/***/ "ZxbV":
/*!********************************************!*\
  !*** ./src/store/effects/world.effects.ts ***!
  \********************************************/
/*! exports provided: WorldEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldEffects", function() { return WorldEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_services_world_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/world.service */ "qLBh");
/* harmony import */ var _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/world.actions */ "JuoV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");













class WorldEffects {
    constructor(actions$, store, router, worldService) {
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.worldService = worldService;
        this.loadCountriesData$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["WORLD_ACTION"].GET_COUNTRIES_BY_REGION), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.store.dispatch(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["ShowLoadingSpinner"]())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((action) => this.worldService.getCountriesByRegion(action.payload.region)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["GetCountriesByRegionSuccessfully"]({ regionName: action.payload.region, countries: response })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["GetCountriesByRegionFailed"]({ error: "Fetching countries failed" }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.store.dispatch(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["HideLoadingSpinner"]())))));
        this.loadCountryDetails$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["WORLD_ACTION"].GET_COUNTRY_DETAILS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.store.dispatch(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["ShowLoadingSpinner"]())), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((action) => this.worldService.getCountryDetails(action.payload.countryName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])((response) => new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["GetCountryDetailsSuccessfully"]({ regionName: action.payload.regionName, country: response[0] })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["GetCountryDetailsFailed"]({ error: "Fetching country details failed" }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(() => this.store.dispatch(new _actions_world_actions__WEBPACK_IMPORTED_MODULE_6__["HideLoadingSpinner"]())))));
    }
}
WorldEffects.ɵfac = function WorldEffects_Factory(t) { return new (t || WorldEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_services_world_service__WEBPACK_IMPORTED_MODULE_5__["WorldService"])); };
WorldEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: WorldEffects, factory: WorldEffects.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], WorldEffects.prototype, "loadCountriesData$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
], WorldEffects.prototype, "loadCountryDetails$", void 0);


/***/ }),

/***/ "aRWP":
/*!***********************************************************************!*\
  !*** ./src/components/regions/regions-list/regions-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegionsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionsListComponent", function() { return RegionsListComponent; });
/* harmony import */ var src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/namespaces/regions.namespace */ "qqJH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_components_regions_regions_item_regions_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/regions/regions-item/regions-item.component */ "JpWz");




function RegionsListComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "regions-item-component", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const region_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("region", region_r1);
} }
class RegionsListComponent {
    constructor() {
        this.regions = [
            src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__["Regions"].AFRICA,
            src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__["Regions"].AMERICA,
            src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__["Regions"].ASIA,
            src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__["Regions"].EUROPE,
            src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_0__["Regions"].OCEANIA
        ];
    }
    ngOnInit() {
    }
}
RegionsListComponent.ɵfac = function RegionsListComponent_Factory(t) { return new (t || RegionsListComponent)(); };
RegionsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegionsListComponent, selectors: [["regions-list-component"]], decls: 6, vars: 1, consts: [[1, "regions-list"], [1, "regions-list__title"], ["src", "../../../assets/images/triangle.svg", "alt", "triangle", 1, "regions-list__triangle"], [1, "regions-list__list"], ["class", "regions-list__item", 4, "ngFor", "ngForOf"], [1, "regions-list__item"], [3, "region"]], template: function RegionsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Choose region");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RegionsListComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.regions);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], src_components_regions_regions_item_regions_item_component__WEBPACK_IMPORTED_MODULE_3__["RegionsItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpb25zLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "bl0b":
/*!*********************************************!*\
  !*** ./src/store/reducers/world.reducer.ts ***!
  \*********************************************/
/*! exports provided: worldReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worldReducer", function() { return worldReducer; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "rfrl");
/* harmony import */ var src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/models/namespaces/regions.namespace */ "qqJH");
/* harmony import */ var _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/world.actions */ "JuoV");



const initialWorldState = {
    isLoading: false,
    regions: [
        {
            name: src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__["Regions"].AFRICA,
            countries: [],
            active: false
        },
        {
            name: src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__["Regions"].AMERICA,
            countries: [],
            active: false
        },
        {
            name: src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__["Regions"].ASIA,
            countries: [],
            active: false
        },
        {
            name: src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__["Regions"].EUROPE,
            countries: [],
            active: false
        },
        {
            name: src_models_namespaces_regions_namespace__WEBPACK_IMPORTED_MODULE_1__["Regions"].OCEANIA,
            countries: [],
            active: false
        },
    ]
};
function worldReducer(worldState = initialWorldState, action) {
    return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])((draft, worldAction) => {
        switch (action.type) {
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].GET_COUNTRIES_BY_REGION_SUCCESSFULLY:
                const regionIndex = draft.regions.findIndex(region => region.name === action.payload.regionName);
                if (regionIndex === -1)
                    return;
                draft.regions[regionIndex].countries = action.payload.countries;
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].GET_COUNTRY_DETAILS_SUCCESSFULLY:
                const countryRegionIndex = draft.regions.findIndex(region => region.name === action.payload.regionName);
                const fetchedCountry = action.payload.country;
                if (countryRegionIndex === -1)
                    return;
                if (draft.regions[countryRegionIndex].countries.includes(country => { var _a; return ((_a = country === null || country === void 0 ? void 0 : country.name) === null || _a === void 0 ? void 0 : _a.common) === fetchedCountry.name.common; }))
                    return;
                draft.regions[countryRegionIndex].countries = [
                    ...draft.regions[countryRegionIndex].countries,
                    fetchedCountry
                ];
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].GET_COUNTRY_DETAILS_FAILED:
                console.error(action.payload.error);
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].GET_COUNTRIES_BY_REGION_FAILED:
                console.error(action.payload.error);
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].SET_REGION_ACTIVE:
                const regionActiveIndex = draft.regions.findIndex(region => region.name === action.payload.region);
                if (regionActiveIndex === -1)
                    return;
                draft.regions.map(region => (Object.assign(Object.assign({}, region), { active: false })));
                draft.regions[regionActiveIndex].active = true;
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].SHOW_LOADING_SPINNER:
                draft.isLoading = true;
                return;
            case _actions_world_actions__WEBPACK_IMPORTED_MODULE_2__["WORLD_ACTION"].HIDE_LOADING_SPINNER:
                draft.isLoading = false;
                return;
        }
    }, initialWorldState)(worldState, action);
}


/***/ }),

/***/ "g4zY":
/*!*******************************************************************!*\
  !*** ./src/components/countries/countries/countries.component.ts ***!
  \*******************************************************************/
/*! exports provided: CountriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountriesComponent", function() { return CountriesComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/capitalize */ "M8Ev");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/layout/breadcrumbs/breadcrumbs.component */ "5HaT");
/* harmony import */ var src_components_countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/countries/countries-list/countries-list.component */ "R10v");








class CountriesComponent {
    constructor(route, store) {
        this.route = route;
        this.store = store;
    }
    ngOnInit() {
        this.region = this.route.snapshot.paramMap.get('region');
        this.capitalizedRegion = Object(src_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(this.region);
        if (this.region)
            this.routeForBreadcrumbs = [
                {
                    route: '/regions',
                    routeName: 'Regions'
                },
                {
                    route: '/regions/' + this.region,
                    routeName: Object(src_utils_capitalize__WEBPACK_IMPORTED_MODULE_2__["capitalizeFirstLetter"])(this.region)
                }
            ];
    }
}
CountriesComponent.ɵfac = function CountriesComponent_Factory(t) { return new (t || CountriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
CountriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CountriesComponent, selectors: [["app-countries"]], decls: 10, vars: 2, consts: [[1, "countries"], [1, "countries__header"], [3, "breadcrumbs"], ["src", "../../../assets/images/triangle.svg", "alt", "triangle", 1, "countries__triangle"], [1, "countries__title"], [1, "countries__description"], [1, "countries__list"]], template: function CountriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "breadcrumbs-component", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Select a country by clicking on the appropriate row in the table and find out more about it! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "countries-list-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbs", ctx.routeForBreadcrumbs);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.capitalizedRegion + "'s countries", " ");
    } }, directives: [src_components_layout_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsComponent"], src_components_countries_countries_list_countries_list_component__WEBPACK_IMPORTED_MODULE_5__["CountriesListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3VudHJpZXMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "m//y":
/*!*********************************************!*\
  !*** ./src/pipes/thousand-suffixes.pipe.ts ***!
  \*********************************************/
/*! exports provided: ThousandSuffixesPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThousandSuffixesPipe", function() { return ThousandSuffixesPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ThousandSuffixesPipe {
    transform(input, args) {
        let exp, suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
        if (Number.isNaN(input)) {
            return null;
        }
        if (input < 1000) {
            return input;
        }
        exp = Math.floor(Math.log(input) / Math.log(1000));
        return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];
    }
}
ThousandSuffixesPipe.ɵfac = function ThousandSuffixesPipe_Factory(t) { return new (t || ThousandSuffixesPipe)(); };
ThousandSuffixesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "thousandSuff", type: ThousandSuffixesPipe, pure: true });


/***/ }),

/***/ "nRUw":
/*!**********************************************************!*\
  !*** ./src/components/layout/wizard/wizard.component.ts ***!
  \**********************************************************/
/*! exports provided: WizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardComponent", function() { return WizardComponent; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/store */ "BhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/layout/header/header.component */ "JeeT");
/* harmony import */ var src_components_layout_body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/components/layout/body/body.component */ "3ykB");
/* harmony import */ var src_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/components/layout/footer/footer.component */ "r3ui");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/components/layout/spinner/spinner.component */ "nhMq");









function WizardComponent_spinner_component_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spinner-component");
} }
class WizardComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.isLoading$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(src_store__WEBPACK_IMPORTED_MODULE_1__["isLoading"]));
    }
}
WizardComponent.ɵfac = function WizardComponent_Factory(t) { return new (t || WizardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
WizardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: WizardComponent, selectors: [["wizard-component"]], decls: 9, vars: 3, consts: [[1, "wizard"], [1, "wizard__header"], [1, "wizard__body"], [1, "wizard__footer"], [4, "ngIf"]], template: function WizardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "header-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "body-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "footer-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, WizardComponent_spinner_component_7_Template, 1, 0, "spinner-component", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 1, ctx.isLoading$));
    } }, directives: [src_components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], src_components_layout_body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"], src_components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], src_components_layout_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".wizard[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n.wizard__header[_ngcontent-%COMP%] {\n  height: 6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx3aXphcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLFlBQUE7QUFDUiIsImZpbGUiOiJ3aXphcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2l6YXJke1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbiAgICAmX19oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA2cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICZfX2JvZHl7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICZfX2Zvb3RlcntcclxuXHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "nhMq":
/*!************************************************************!*\
  !*** ./src/components/layout/spinner/spinner.component.ts ***!
  \************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner-component"]], decls: 2, vars: 0, consts: [[1, "spinner-background"], [1, "lds-dual-ring"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "osRZ":
/*!********************************!*\
  !*** ./src/pipes/join.pipe.ts ***!
  \********************************/
/*! exports provided: JoinPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinPipe", function() { return JoinPipe; });
/* harmony import */ var src_utils_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/utils/is-array */ "A24m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JoinPipe {
    transform(input, character = '') {
        if (!Object(src_utils_is_array__WEBPACK_IMPORTED_MODULE_0__["isArray"])(input)) {
            return input;
        }
        return input.join(character);
    }
}
JoinPipe.ɵfac = function JoinPipe_Factory(t) { return new (t || JoinPipe)(); };
JoinPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "join", type: JoinPipe, pure: true });


/***/ }),

/***/ "qLBh":
/*!***************************************!*\
  !*** ./src/services/world.service.ts ***!
  \***************************************/
/*! exports provided: WorldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldService", function() { return WorldService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class WorldService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.regionCountriesEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].worldApi + "region";
        this.countryDetailsEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].worldApi + "name";
    }
    getCountriesByRegion(region) {
        return this.httpClient
            .get(`${this.regionCountriesEndpoint}/${region}`);
    }
    getCountryDetails(countryName) {
        return this.httpClient
            .get(`${this.countryDetailsEndpoint}/${countryName}`);
    }
}
WorldService.ɵfac = function WorldService_Factory(t) { return new (t || WorldService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WorldService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WorldService, factory: WorldService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "qqJH":
/*!****************************************************!*\
  !*** ./src/models/namespaces/regions.namespace.ts ***!
  \****************************************************/
/*! exports provided: Regions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Regions", function() { return Regions; });
var Regions;
(function (Regions) {
    Regions.EUROPE = 'europe';
    Regions.AMERICA = 'america';
    Regions.ASIA = 'asia';
    Regions.OCEANIA = 'oceania';
    Regions.AFRICA = 'africa';
})(Regions || (Regions = {}));


/***/ }),

/***/ "r3ui":
/*!**********************************************************!*\
  !*** ./src/components/layout/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_components_layout_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/layout/modal/modal.component */ "Kz1Z");





function FooterComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "modal-component", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("cancelClicked", function FooterComponent_ng_container_9_Template_modal_component_cancelClicked_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Daniel Staszewski");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "I am a graduate of Social Informatics, and I am constantly developing my skills in Web Development, UX / UI, HCI, and interface design. Frontend programming is my passion; I greatly support the TypeScript language and the Angular framework. I also develop skills in the React library. I have experience in designing applications/websites.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
class FooterComponent {
    constructor(router) {
        this.router = router;
        this.isModalOpened = false;
    }
    ngOnInit() {
    }
    openModal() {
        this.isModalOpened = true;
    }
    closeModal() {
        this.isModalOpened = false;
    }
    navigateToHome() {
        this.router.navigate(['/']);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["footer-component"]], decls: 10, vars: 1, consts: [[1, "footer"], [1, "footer__content"], [1, "footer__logo", 3, "click"], ["src", "../../../assets/images/world.svg", "alt", "world", 1, "world-icon"], [1, "btn", "primary-btn", "footer__btn", 3, "click"], [1, "footer__bottom"], [1, "footer__rights"], [4, "ngIf"], ["title", "About me", 3, "cancelClicked"], [1, "footer-modal"], ["src", "../../../assets/images/profile.png", "alt", "face", 1, "footer-modal__img"], [1, "footer-modal__content"], [1, "footer-modal__name"], [1, "footer-modal__description"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_2_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_4_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "All rights reserved. Copyright \u00A9 2022 Daniel Staszewski");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, FooterComponent_ng_container_9_Template, 9, 0, "ng-container", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModalOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], src_components_layout_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_components_countries_countries_countries_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/countries/countries/countries.component */ "g4zY");
/* harmony import */ var src_components_countries_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/countries/country-details/country-details.component */ "7iWg");
/* harmony import */ var src_components_regions_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/regions/regions/regions.component */ "TPuL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', redirectTo: 'regions', pathMatch: 'full' },
    { path: 'regions', component: src_components_regions_regions_regions_component__WEBPACK_IMPORTED_MODULE_3__["RegionsComponent"] },
    { path: 'regions/:region', component: src_components_countries_countries_countries_component__WEBPACK_IMPORTED_MODULE_1__["CountriesComponent"] },
    { path: 'regions/:region/:country', component: src_components_countries_country_details_country_details_component__WEBPACK_IMPORTED_MODULE_2__["CountryDetailsComponent"] },
    { path: '**', redirectTo: 'regions', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map