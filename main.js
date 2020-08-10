(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");





const routes = [
    {
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("default~about-about-module~contact-contact-module~home-home-module~project-project-module~riddle-rid~10ce571c"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
            { path: 'about', loadChildren: () => Promise.all(/*! import() | about-about-module */[__webpack_require__.e("default~about-about-module~contact-contact-module~home-home-module~project-project-module~riddle-rid~10ce571c"), __webpack_require__.e("about-about-module")]).then(__webpack_require__.bind(null, /*! ./about/about.module */ "./src/app/about/about.module.ts")).then(m => m.AboutModule) },
            { path: 'project', loadChildren: () => Promise.all(/*! import() | project-project-module */[__webpack_require__.e("default~about-about-module~contact-contact-module~home-home-module~project-project-module~riddle-rid~10ce571c"), __webpack_require__.e("project-project-module")]).then(__webpack_require__.bind(null, /*! ./project/project.module */ "./src/app/project/project.module.ts")).then(m => m.ProjectModule) },
            { path: 'contact', loadChildren: () => Promise.all(/*! import() | contact-contact-module */[__webpack_require__.e("default~about-about-module~contact-contact-module~home-home-module~project-project-module~riddle-rid~10ce571c"), __webpack_require__.e("contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./contact/contact.module */ "./src/app/contact/contact.module.ts")).then(m => m.ContactModule) },
            { path: 'riddle', loadChildren: () => Promise.all(/*! import() | riddle-riddle-module */[__webpack_require__.e("default~about-about-module~contact-contact-module~home-home-module~project-project-module~riddle-rid~10ce571c"), __webpack_require__.e("riddle-riddle-module")]).then(__webpack_require__.bind(null, /*! ./riddle/riddle.module */ "./src/app/riddle/riddle.module.ts")).then(m => m.RiddleModule) }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'profile';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");







const _c0 = function (a0) { return { "is-toggled": a0 }; };
class LayoutComponent {
    constructor(document) {
        this.document = document;
        this.faInstagram = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faInstagram"];
        this.toggleStatus = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.toggleStatus = !this.toggleStatus;
    }
    onWindowScroll() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.getElementById("header").classList.add('is-scrolled');
            document.getElementById("headerBg").classList.add('is-scrolled');
        }
        else {
            document.getElementById("header").classList.remove('is-scrolled');
            document.getElementById("headerBg").classList.remove('is-scrolled');
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LayoutComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 39, vars: 10, consts: [["lang", "en"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], [3, "scroll"], ["id", "header", 1, "container-fluid"], ["id", "headerContent"], ["id", "headerLogo"], ["id", "headerMenuToggle", 3, "ngClass", "click"], [1, "burger-close-text", 3, "ngClass"], [1, "burger-icon"], [1, "burger-icon-line"], ["id", "headerBg"], ["id", "headerMenu", 3, "ngClass"], ["routerLink", "/", 3, "click"], ["routerLink", "/about", 3, "click"], ["routerLink", "/project", 3, "click"], ["routerLink", "/contact", 3, "click"], ["id", "socialMediaContainer"], [1, "social-media-item"], [3, "icon"], ["id", "content"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "body", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function LayoutComponent_Template_body_scroll_6_listener() { return ctx.onWindowScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " IO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_div_click_11_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_22_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_25_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_28_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutComponent_Template_a_click_31_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.toggleStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.toggleStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.toggleStatus));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faInstagram);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n\n\nheader[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  padding: 50px 100px;\n  color: #fff;\n  z-index: 4;\n  transition: 0.7s;\n}\n\n#headerBg[_ngcontent-%COMP%] {\n  content: \"\";\n  position: fixed;\n  width: 100%;\n  height: 175px;\n  background-color: #fff;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  opacity: 0;\n  z-index: 2;\n  transition: 0.7s;\n}\n\n#headerContent[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#headerLogo[_ngcontent-%COMP%] {\n  font-family: \"Alaska\";\n  font-size: 50px;\n}\n\n#headerMenuToggle[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#headerMenuToggle[_ngcontent-%COMP%]   .burger-icon[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  cursor: pointer;\n}\n\n.burger-close-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0;\n  transition: 1s;\n  transform: translateY(15px);\n  cursor: pointer;\n}\n\n#headerMenuToggle[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%] {\n  display: block;\n  width: 30px;\n  height: 0px;\n  margin-bottom: 5px;\n  position: relative;\n  border-top: 2px solid #fff;\n  z-index: 1;\n  transform-origin: 4px 0px;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n}\n\n#headerMenuToggle.is-toggled[_ngcontent-%COMP%]   .burger-close-text[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n\n#headerMenuToggle[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%]:first-child {\n  transform-origin: 0% 0%;\n}\n\n#headerMenuToggle[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%]:nth-last-child(2) {\n  transform-origin: 0% 100%;\n}\n\n#headerMenuToggle.is-toggled[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%]:first-child {\n  opacity: 1;\n  transform: rotate(45deg);\n}\n\n#headerMenuToggle.is-toggled[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  transform: scale(0.2, 0.2);\n}\n\n#headerMenuToggle.is-toggled[_ngcontent-%COMP%]   span.burger-icon-line[_ngcontent-%COMP%]:nth-child(3) {\n  opacity: 1;\n  transform: rotate(-45deg) translate(-5px, 1px);\n}\n\n#headerMenu[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  background-color: #001918;\n  height: 100vh;\n  transform-origin: top right;\n  transform: translateY(-100%);\n  transition: 1s;\n  color: #fff;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  font-size: 30px;\n  z-index: 3;\n}\n\n#headerMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-family: \"Chromate\";\n  padding: 10px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: 0.5s;\n}\n\n#headerMenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n  letter-spacing: 1px;\n}\n\n#headerMenu.is-toggled[_ngcontent-%COMP%] {\n  transform: translateY(0px);\n}\n\n#headerMenu.is-toggled[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0px);\n  transition-delay: 1s;\n}\n\n#socialMediaContainer[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 120px;\n  bottom: 50px;\n  opacity: 0;\n  transform: translateY(20px);\n  transition: 0.5s;\n}\n\n#headerMenu.is-toggled[_ngcontent-%COMP%]   #socialMediaContainer[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0px);\n  transition-delay: 1.5s;\n}\n\nheader.is-scrolled[_ngcontent-%COMP%] {\n  padding: 10px 15px;\n  color: #fff;\n}\n\nheader.is-scrolled[_ngcontent-%COMP%] {\n  mix-blend-mode: difference;\n}\n\n#headerBg.is-scrolled[_ngcontent-%COMP%] {\n  opacity: 1;\n  height: 95px;\n  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);\n}\n\n\n\n@media only screen and (max-width: 876px) {\n  header[_ngcontent-%COMP%] {\n    padding: 10px 15px;\n  }\n\n  #headerMenu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%] {\n    padding: 0px 15px;\n  }\n\n  #headerMenu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n    padding: 10px 0px;\n  }\n\n  #socialMediaContainer[_ngcontent-%COMP%] {\n    left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBOztvQ0FBQTs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFPRjs7QUFMQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSwrRUFBQTtBQVVGOztBQVBBO0VBQ0UsVUFBQTtFQUNBLHdCQUFBO0FBVUY7O0FBUkE7RUFDRSx1QkFBQTtBQVdGOztBQVRBO0VBQ0UseUJBQUE7QUFZRjs7QUFWQTtFQUVFLFVBQUE7RUFDQSx3QkFBQTtBQVlGOztBQVZBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0FBYUY7O0FBWEE7RUFDRSxVQUFBO0VBQ0EsOENBQUE7QUFjRjs7QUFaQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBZUY7O0FBYkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQWdCRjs7QUFkQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBaUJGOztBQWZBO0VBQ0UsMEJBQUE7QUFrQkY7O0FBaEJBO0VBQ0UsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBb0JGOztBQWxCQTtFQUNFLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FBcUJGOztBQW5CQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQXNCRjs7QUFwQkE7RUFDRSwwQkFBQTtBQXVCRjs7QUFyQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhDQUFBO0FBd0JGOztBQXJCQSxnQkFBQTs7QUFDQTtFQUNFO0lBQ0Usa0JBQUE7RUF3QkY7O0VBbEJBO0lBQ0UsaUJBQUE7RUFxQkY7O0VBbkJBO0lBQ0UsaUJBQUE7RUFzQkY7O0VBcEJBO0lBQ0UsVUFBQTtFQXVCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBtYXJnaW46IDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxudWwgPiBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxyXG4gIEhlYWRlclxyXG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiA1MHB4IDEwMHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDQ7XHJcbiAgdHJhbnNpdGlvbjogMC43cztcclxufVxyXG4jaGVhZGVyQmcge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDE3NXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRyYW5zaXRpb246IDAuN3M7XHJcbn1cclxuI2hlYWRlckNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2hlYWRlckxvZ28ge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWxhc2thJztcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuI2hlYWRlck1lbnVUb2dnbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuI2hlYWRlck1lbnVUb2dnbGUgLmJ1cmdlci1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJ1cmdlci1jbG9zZS10ZXh0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiNoZWFkZXJNZW51VG9nZ2xlIHNwYW4uYnVyZ2VyLWljb24tbGluZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgI2ZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDRweCAwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICBvcGFjaXR5IDAuNTVzIGVhc2U7XHJcbn1cclxuI2hlYWRlck1lbnVUb2dnbGUuaXMtdG9nZ2xlZCAuYnVyZ2VyLWNsb3NlLXRleHQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApXHJcbn1cclxuI2hlYWRlck1lbnVUb2dnbGUgc3Bhbi5idXJnZXItaWNvbi1saW5lOmZpcnN0LWNoaWxkIHtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxufVxyXG4jaGVhZGVyTWVudVRvZ2dsZSBzcGFuLmJ1cmdlci1pY29uLWxpbmU6bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcbn1cclxuI2hlYWRlck1lbnVUb2dnbGUuaXMtdG9nZ2xlZCBzcGFuLmJ1cmdlci1pY29uLWxpbmU6Zmlyc3QtY2hpbGRcclxue1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcbiNoZWFkZXJNZW51VG9nZ2xlLmlzLXRvZ2dsZWQgc3Bhbi5idXJnZXItaWNvbi1saW5lOm50aC1jaGlsZCgyKSB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuMiwgMC4yKTtcclxufVxyXG4jaGVhZGVyTWVudVRvZ2dsZS5pcy10b2dnbGVkIHNwYW4uYnVyZ2VyLWljb24tbGluZTpudGgtY2hpbGQoMykge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoLTVweCwgMXB4KTtcclxufVxyXG4jaGVhZGVyTWVudSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDE5MTg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICB0cmFuc2l0aW9uOiAxcztcclxuICBjb2xvcjogI2ZmZjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgei1pbmRleDogMztcclxufVxyXG4jaGVhZGVyTWVudSBsaSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDaHJvbWF0ZSc7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICB0cmFuc2l0aW9uOiAwLjVzO1xyXG59XHJcbiNoZWFkZXJNZW51IGxpIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcbiNoZWFkZXJNZW51LmlzLXRvZ2dsZWQge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG59XHJcbiNoZWFkZXJNZW51LmlzLXRvZ2dsZWQgbGkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XHJcbn1cclxuI3NvY2lhbE1lZGlhQ29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTIwcHg7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuI2hlYWRlck1lbnUuaXMtdG9nZ2xlZCAjc29jaWFsTWVkaWFDb250YWluZXIge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMS41cztcclxufVxyXG5oZWFkZXIuaXMtc2Nyb2xsZWQge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBjb2xvcjogI2ZmZlxyXG59XHJcbmhlYWRlci5pcy1zY3JvbGxlZCB7XHJcbiAgbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7XHJcbn1cclxuI2hlYWRlckJnLmlzLXNjcm9sbGVkIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGhlaWdodDogOTVweDtcclxuICBib3gtc2hhZG93OiAwIDFweCA2cHggMCByZ2JhKDMyLDMzLDM2LDAuMjgpO1xyXG59XHJcblxyXG4vKiBUYWJsZXQgVmlldyAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3NnB4KSB7XHJcbiAgaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICB9XHJcbiAgLy8gI2hlYWRlck1lbnUge1xyXG4gIC8vICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIC8vICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvLyB9XHJcbiAgI2hlYWRlck1lbnUgPiB1bCB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICB9XHJcbiAgI2hlYWRlck1lbnUgPiB1bCA+IGxpIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gIH1cclxuICAjc29jaWFsTWVkaWFDb250YWluZXIge1xyXG4gICAgbGVmdDogMjBweDtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout',
                templateUrl: './layout.component.html',
                styleUrls: ['./layout.component.scss']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }]; }, { onWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', []]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Indra\profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map