webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/analyze-data/app.analyze_data.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/analyze-data/app.analyze_data.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"panel-content\">\r\n<h2 class=\"pane1Title panel-title\">\r\n    <span class=\"number ng-binding\">1.</span>\r\n    <span fis-unique-id=\"blade1Heading\" class=\"text ng-binding\">Analyze Data</span>\r\n</h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/analyze-data/app.analyze_data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnalyzeData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyzeData = (function () {
    function AnalyzeData() {
    }
    return AnalyzeData;
}());
AnalyzeData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'analyze-data',
        template: __webpack_require__("../../../../../src/app/analyze-data/app.analyze_data.html"),
        styles: [__webpack_require__("../../../../../src/app/analyze-data/app.analyze_data.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AnalyzeData);

//# sourceMappingURL=app.analyze_data.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-content .panel-title {\r\n    padding: 0px 5px 5px 5px;\r\n    border-bottom: 1px solid #f0f0f3;\r\n    font-size: 12px;\r\n    text-transform: uppercase;\r\n  }\r\n  \r\n   .panel-title {\r\n    color: #62b132;\r\n    font-weight: 700;\r\n  }\r\n\r\n  \r\n\r\n\r\n\r\n\r\n  .dropdown, .dropup {\r\n    position: relative;\r\n}\r\n\r\n.btn-default {\r\n  color: #333;\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  padding: 6px 12px;\r\n  margin-bottom: 0;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 1.42857143;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -ms-touch-action: manipulation;\r\n  touch-action: manipulation;\r\n  cursor: pointer;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  background-image: none;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n\r\n.btn .caret {\r\n  margin-left: 0;\r\n}\r\n\r\n.caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid\\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 160px;\r\n  padding: 5px 0;\r\n  margin: 2px 0 0;\r\n  font-size: 14px;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  background-clip: padding-box;\r\n  border: 1px solid #ccc;\r\n  border: 1px solid rgba(0,0,0,.15);\r\n  border-radius: 4px;\r\n  box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced.\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <img width=\"300\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" href=\"https://blog.angular.io//\">Angular blog</a></h2>\n  </li>\n</ul> -->\n\n\n\n<div fxLayout=\"column\" [style.height]=\"'100vh'\">\n  <ruf-banner color=\"{{bannerColor}}\">\n    \n    <ruf-banner-brand rufId=\"banner_brand_logo\" title=\"Optimiser\" showLogo=\"false\" \n    logoUrl=\"assets/fis-logo-green.png\" altText=\"Welcome\"></ruf-banner-brand>\n        \n    <div class=\"ruf-banner-filler\"></div>\n    <ruf-menubar color=\"emphasis\">\n      <a rufMenubarItem *ngFor=\"let item of items\">\n        <ruf-menu-label rufId [label]=\"item.label\" [icon]=\"item.icon\" [children]=\"item.children\" (select)=\"selectedTheme($event)\">\n        </ruf-menu-label>\n      </a>\n    </ruf-menubar>     \n  </ruf-banner>\n\n  <ruf-app-canvas fxFlex [style.overflow-y]=\"'auto'\" [style.padding]=\"0\">\n    \n   <canvas-header></canvas-header>\n    \n   <!-- <router-outlet></router-outlet> -->\n   <canvas-content [bannerColor]=\"bannerColor\"></canvas-content>\n\n  </ruf-app-canvas>\n\n\n  <ruf-footer>\n    &copy; 2017 FIS\n  </ruf-footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.title = 'Welcome to Optimiser!';
        this.description = '....... TBD';
        this.user = '...Loading...';
        this.email = '';
        this.bannerColor = 'emphasis';
    }
    AppComponent.prototype.selectedTheme = function (menu) {
        if (menu.valueType == 'theme') {
            this.bannerColor = menu.label;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        // this.appService.getInfoObserve()
        // .subscribe(o => {
        //     this.user = o.Name;
        //     this.email = o.Email;
        // });
        this.appService.setCurrentBannerColor(this.bannerColor);
        this.items = [
            { label: 'Theme', icon: 'fis-icon-settings',
                children: [{ label: 'default', valueType: 'theme' },
                    { label: 'accent', valueType: 'theme' },
                    { label: 'primary', valueType: 'theme' },
                    { label: 'emphasis', valueType: 'theme' }]
            },
            { label: this.user, icon: 'fis-icon-person', children: [{ label: 'Logout', valueType: 'info' }]
            }
        ];
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], AppComponent.prototype, "bannerColor", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ruf_shell__ = __webpack_require__("../../../../@ruf/shell/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__canvas_header_app_canvasheader__ = __webpack_require__("../../../../../src/app/canvas-header/app.canvasheader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__analyze_data_app_analyze_data__ = __webpack_require__("../../../../../src/app/analyze-data/app.analyze_data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__suggest_match_rules_app_suggest_match_rules__ = __webpack_require__("../../../../../src/app/suggest-match-rules/app.suggest-match-rules.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__prepare_package_app_prepare_package__ = __webpack_require__("../../../../../src/app/prepare-package/app.prepare-package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__canvas_content_app_canvas_content__ = __webpack_require__("../../../../../src/app/canvas-content/app.canvas_content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__canvas_header_app_canvasheader__["a" /* CanvasHeader */],
            __WEBPACK_IMPORTED_MODULE_9__analyze_data_app_analyze_data__["a" /* AnalyzeData */],
            __WEBPACK_IMPORTED_MODULE_10__suggest_match_rules_app_suggest_match_rules__["a" /* SuggestMatchRules */],
            __WEBPACK_IMPORTED_MODULE_11__prepare_package_app_prepare_package__["a" /* PreparePackage */],
            __WEBPACK_IMPORTED_MODULE_12__canvas_content_app_canvas_content__["a" /* CanvasContent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MdSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ruf_shell__["a" /* ShellModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot([{
                    path: '',
                    redirectTo: '/optimiser',
                    pathMatch: 'full'
                },
                {
                    path: 'optimiser',
                    component: __WEBPACK_IMPORTED_MODULE_12__canvas_content_app_canvas_content__["a" /* CanvasContent */]
                }])
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */], useClass: __WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.currentBannerColor = 'default';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'q=0.8;application/json;q=0.9'
        });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    // getInfo(): Promise<any> {
    //     return this.http.get("http://ap-pun-ws0550.fnfis.com/api/data/1")
    //         .toPromise()
    //         .then(response => {
    //             response.json()
    //         })
    //         .catch(this.handleError);
    // }
    // getNumber(): Promise<number> {
    //     return this.http.get("http://ap-pun-ws0550.fnfis.com/api/data")
    //         .toPromise()
    //         .then(response => {
    //             response.json() as number
    //         })
    //         .catch(this.handleError);
    // }
    AppService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AppService.prototype.getInfoObserve = function () {
        return this.http.get("http://ap-pun-ws0550.fnfis.com/api/data/1")
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); });
    };
    AppService.prototype.setCurrentBannerColor = function (color) {
        this.currentBannerColor = color;
    };
    AppService.prototype.getCurrentBannerColor = function () {
        return this.currentBannerColor;
    };
    return AppService;
}());
AppService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ "../../../../../src/app/canvas-content/app.canvas_content.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#blade-section  {    \r\n    height: calc(98% - 50px);\r\n    position: relative;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    background-color: #fff;\r\n  }\r\n  \r\n  #blade-section label{\r\n  margin: 0;\r\n  }\r\n  #blade-section .bar {\r\n    /* background-color: #72246c;     */\r\n    border: 2px solid #ddd;\r\n    width: 30px;\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    letter-spacing: 2px;;\r\n  }\r\n  \r\n  #blade-section div {\r\n    height: 100%;\r\n    width: 0px;\r\n    box-shadow: none;\r\n    background-color: #fff;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  #blade-section span {\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n  \r\n  #blade-section span {\r\n    -webkit-transform: rotate(-90deg);\r\n            transform: rotate(-90deg);\r\n    white-space: nowrap;\r\n    font-weight: bolder;\r\n    color: #8dc63f;\r\n  }\r\n  #blade-section  input:checked+div {\r\n    width:calc(100% - 10px);\r\n    border: 2px solid #ddd;\r\n    transition: width 2s ease-in-out;\r\n  }\r\n  \r\n  \r\n  .bar.primary{\r\n  background: #007d8a;\r\n  }\r\n  \r\n  .bar.emphasis{\r\n  background: #72246c;\r\n  }\r\n  \r\n  .bar.accent{\r\n  background: #ffc845;\r\n  }\r\n  \r\n  .bar.default{\r\n  background: #fff;\r\n  }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  .panel {  \r\n    border: 1px solid transparent;\r\n    border-radius: 4px;    \r\n}\r\n\r\n.panel-default {\r\n  border-color: #ddd;\r\n}\r\n\r\n.panel-default>.panel-heading {\r\n  color: #333;\r\n  background-color: #f5f5f5;\r\n  border-color: #ddd;\r\n}\r\n\r\n.panel-heading {\r\n  padding: 10px 15px;\r\n  border-bottom: 1px solid transparent;\r\n  border-top-left-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n\r\n\r\n\r\n/* .panel-body {\r\n  padding: 15px;\r\n} */\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas-content/app.canvas_content.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"blade-section\" class=\"panel ruf-padding-small\">\r\n      <label for=\"2\" class=\"bar {{bannerColor}}\" [hidden]=\"currentProcess=='2'\"><span>ANALYZE DATA</span></label>\r\n      <input id=\"2\" name=\"show\" value = \"2\" type=\"radio\" hidden=\"hidden\" checked [(ngModel)]=\"currentProcess\" >\r\n      <div class=\"panel-body\">\r\n      \r\n         <analyze-data></analyze-data>\r\n      \r\n      </div>\r\n      <label for=\"3\" class=\"bar {{bannerColor}}\" [hidden]=\"currentProcess=='3'\"><span>SUGGEST MATCH RULES</span></label>\r\n      <input id=\"3\"  value = \"3\" name=\"show\" type=\"radio\" hidden=\"hidden\" [(ngModel)]=\"currentProcess\">\r\n      <div>\r\n        <suggest-match-rules></suggest-match-rules>\r\n      </div>\r\n      <label for=\"4\" class=\"bar {{bannerColor}}\" [hidden]=\"currentProcess=='4'\"><span>PREPARE PACKAGE</span></label>\r\n      <input id=\"4\"  value = \"4\" name=\"show\" type=\"radio\" hidden=\"hidden\" [(ngModel)]=\"currentProcess\">\r\n      <div>\r\n        <prepare-package></prepare-package>\r\n      </div>\r\n  </section>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/canvas-content/app.canvas_content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasContent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("../../../../../src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasContent = (function () {
    function CanvasContent(appService) {
        this.appService = appService;
        this.currentProcess = "2";
        this.bannerColor = '';
    }
    return CanvasContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CanvasContent.prototype, "bannerColor", void 0);
CanvasContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'canvas-content',
        template: __webpack_require__("../../../../../src/app/canvas-content/app.canvas_content.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas-content/app.canvas_content.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object])
], CanvasContent);

var _a;
//# sourceMappingURL=app.canvas_content.js.map

/***/ }),

/***/ "../../../../../src/app/canvas-header/app.canvasheader.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".reconTitle {\r\n    width: 100%;\r\n    height: 33px;\r\n}\r\n\r\n.reconTitle .greyLabel {\r\n    color: #bac1d0;\r\n    width: auto;\r\n    float: left;\r\n    position: relative;\r\n    bottom: -5px;\r\n    padding-right: 5px;\r\n    padding-left: 20px;\r\n}\r\n\r\n.reconTitle .titleLinksWrapper {\r\n    width: auto;\r\n    float: right;\r\n}\r\n\r\n.reconTitle h2 {\r\n    color: #5386e4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas-header/app.canvasheader.html":
/***/ (function(module, exports) {

module.exports = "<ruf-page-header title=\"{{title}}\" description=\"{{description}}\">\r\n        <!-- <ruf-page-header-icon>\r\n          <md-icon fontSet=\"fisfont\" fontIcon=\"fis-icon-approval\"></md-icon>\r\n        </ruf-page-header-icon> -->\r\n  \r\n        <div fxLayout=\"column\" [fxLayout.gt-sm]=\"row\" fxLayoutGap=\"10px\" rufMarginVertical rufId>\r\n            <div [style.background-color]=\"box\" fxFlex>\r\n                <a href=\"#\" class=\"newRecon\" fis-unique-id=\"newReconElem\" title=\"New\">\r\n                    <md-icon fisIcon=\"max\" style=\"font-size:16px; height: 18px; width: 18px\"></md-icon>\r\n                  New\r\n                </a>\r\n                <a href=\"#\" class=\"openRecon\" fis-unique-id=\"openReconElem\" title=\"Open\">\r\n                    <md-icon fisIcon=\"folder\" style=\"font-size:16px; height: 18px; width: 18px\"></md-icon>Open\r\n                </a>\r\n              </div>\r\n            </div>\r\n      </ruf-page-header>"

/***/ }),

/***/ "../../../../../src/app/canvas-header/app.canvasheader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanvasHeader = (function () {
    function CanvasHeader() {
    }
    return CanvasHeader;
}());
CanvasHeader = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'canvas-header',
        template: __webpack_require__("../../../../../src/app/canvas-header/app.canvasheader.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas-header/app.canvasheader.css")]
    }),
    __metadata("design:paramtypes", [])
], CanvasHeader);

//# sourceMappingURL=app.canvasheader.js.map

/***/ }),

/***/ "../../../../../src/app/prepare-package/app.prepare-package.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/prepare-package/app.prepare-package.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-content\">\r\n        <h2 class=\"pane1Title panel-title\">\r\n            <span class=\"number ng-binding\">3.</span>\r\n            <span fis-unique-id=\"blade1Heading\" class=\"text ng-binding\">Prepare Package</span>\r\n        </h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/prepare-package/app.prepare-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreparePackage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PreparePackage = (function () {
    function PreparePackage() {
    }
    return PreparePackage;
}());
PreparePackage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'prepare-package',
        template: __webpack_require__("../../../../../src/app/prepare-package/app.prepare-package.html"),
        styles: [__webpack_require__("../../../../../src/app/prepare-package/app.prepare-package.css"), __webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PreparePackage);

//# sourceMappingURL=app.prepare-package.js.map

/***/ }),

/***/ "../../../../../src/app/suggest-match-rules/app.suggest-match-rules.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-content\">\r\n        <h2 class=\"pane1Title panel-title\">\r\n            <span class=\"number ng-binding\">2.</span>\r\n            <span fis-unique-id=\"blade1Heading\" class=\"text ng-binding\">Suggest Match Rules</span>\r\n        </h2>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/suggest-match-rules/app.suggest-match-rules.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuggestMatchRules; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuggestMatchRules = (function () {
    function SuggestMatchRules() {
    }
    return SuggestMatchRules;
}());
SuggestMatchRules = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'suggest-match-rules',
        template: __webpack_require__("../../../../../src/app/suggest-match-rules/app.suggest-match-rules.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SuggestMatchRules);

//# sourceMappingURL=app.suggest-match-rules.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map