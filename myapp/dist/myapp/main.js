(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/greeting/greeting.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: 'Home' } },
    { path: 'greeting', component: _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__["GreetingComponent"], data: { title: 'Greeting' } },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_4__["BooksComponent"], data: { title: 'Böcker' }, canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'games', component: _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_5__["GamesListComponent"], data: { title: 'Spel' } },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], data: { title: 'Registrera' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], data: { title: 'Logga In' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: yellow;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/greeting\" routerLinkActive=\"active\">Greeting</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/books\" routerLinkActive=\"active\">Böcker</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n<main class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_titleService, router, activatedRoute, auth) {
        this._titleService = _titleService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.auth = auth;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setPageTitle();
        this.checkIfLoggedIn();
    };
    AppComponent.prototype.setPageTitle = function () {
        var _this = this;
        //Get and set current page title based on data from route
        var currentTitle = this._titleService.getTitle();
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                _this.activatedRoute.root.firstChild.snapshot.data['title']
                    ? _this.title = _this.activatedRoute.root.firstChild.snapshot.data['title']
                    : _this.title = '';
            }
            _this._titleService.setTitle(currentTitle + " | " + _this.title);
        });
    };
    AppComponent.prototype.checkIfLoggedIn = function () {
        var _this = this;
        this.auth.checkIfLoggedIn().subscribe(function (response) {
            if (response.loggedIn) {
                _this.auth.loggedIn = true;
                console.log('You are logged in!');
            }
            else {
                console.log('You are not logged in!');
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./greeting/greeting.component */ "./src/app/greeting/greeting.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _reverse_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reverse.pipe */ "./src/app/reverse.pipe.ts");
/* harmony import */ var _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./games-list/games-list.component */ "./src/app/games-list/games-list.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _greeting_greeting_component__WEBPACK_IMPORTED_MODULE_6__["GreetingComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_8__["BooksComponent"],
                _reverse_pipe__WEBPACK_IMPORTED_MODULE_10__["ReversePipe"],
                _games_list_games_list_component__WEBPACK_IMPORTED_MODULE_11__["GamesListComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_12__["BookComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_15__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.auth.checkIfLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res.loggedIn)
                return true;
            _this.router.navigate(['/login']);
            return false;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"updateBook(); form.reset()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"author\">Författare</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.author\" #author=\"ngModel\" class=\"form-control\" id=\"author\" name=\"author\" placeholder=\"Ange författarnamn\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"title\">Titel</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.title\" #title=\"ngModel\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Ange titel\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"year\">Årtal</label>\r\n    <input type=\"text\" [(ngModel)]=\"book.year\" #year=\"ngModel\" class=\"form-control\" id=\"year\" name=\"year\" placeholder=\"Ange år\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Update!</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookComponent = /** @class */ (function () {
    function BookComponent(_apiService) {
        this._apiService = _apiService;
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    BookComponent.prototype.updateBook = function () {
        this._apiService.updateBook(this.book);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BookComponent.prototype, "book", void 0);
    BookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/books/books.component.html":
/*!********************************************!*\
  !*** ./src/app/books/books.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Välkommen {{ userFirstname || ERROR }}</h1>\r\n\r\n<div class=\"row h-100 w-100 position-absolute\" *ngIf=\"!books\">\r\n  <div class=\"mx-auto my-auto\">\r\n    <i class=\"fa fa-spinner fa-spin text-center\" style=\"font-size:72px\"></i>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"noBooks\">\r\n      Du har inga böcker inlagda! Vänligen använd formuläret nedan för att lägga till.\r\n    </div>\r\n  </div>\r\n  <div class=\"col-6 col-lg-4 mb-2\" *ngFor=\"let book of books | reverse\" (click)=\"selectedBook = book\">\r\n    <div class=\"list-group\" >\r\n      <div class=\"list-group-item flex-column align-items-start\">\r\n        <div class=\"d-flex w-100 justify-content-between\">\r\n          <h5 class=\"mb-1\">{{book.title}}</h5>\r\n        </div>\r\n        <p class=\"mb-1\">Författare: {{book.author}}</p>\r\n        <small>{{book.year}}</small>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn btn-danger\" (click)=\"removeBook(book._id)\">Ta bort</button>\r\n  </div>\r\n</div>\r\n\r\n{{selectedBook.title}}\r\n\r\n\r\n<!--Add new book form-->\r\n<div class=\"row\">\r\n  <form #form=\"ngForm\" (ngSubmit)=\"bookSubmit(); form.reset()\" class=\"col-12 col-lg-4\">\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">Författare</label>\r\n      <input type=\"text\" [(ngModel)]=\"model.author\" #author=\"ngModel\" class=\"form-control\" id=\"author\" name=\"author\" placeholder=\"Ange författarnamn\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Titel</label>\r\n      <input type=\"text\" [(ngModel)]=\"model.title\" #title=\"ngModel\" class=\"form-control\" id=\"title\" name=\"title\" placeholder=\"Ange titel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"year\">Årtal</label>\r\n      <input type=\"text\" [(ngModel)]=\"model.year\" #year=\"ngModel\" class=\"form-control\" id=\"year\" name=\"year\" placeholder=\"Ange år\">\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n  <!--Preview view-->\r\n  <div class=\"col-12 col-lg-4\" *ngIf=\"model.author || model.title || model.year\">\r\n    <h3>Preview</h3>\r\n    <div class=\"\">\r\n      <div class=\"list-group\">\r\n        <div class=\"list-group-item flex-column align-items-start\">\r\n          <div class=\"d-flex w-100 justify-content-between\">\r\n            <h5 class=\"mb-1\">{{model.title}}</h5>\r\n            <h3>{{model._id}}</h3>\r\n          </div>\r\n          <p class=\"mb-1\">Författare: {{model.author}}</p>\r\n          <small>{{model.year}}</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-5\">\r\n    <app-book [book]=\"selectedBook\"></app-book>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/app/books/model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = /** @class */ (function () {
    function BooksComponent(_apiService, auth) {
        this._apiService = _apiService;
        this.auth = auth;
        this.model = new _model__WEBPACK_IMPORTED_MODULE_2__["Book"]('', '', '');
        this.noBooks = true;
        this.selectedBook = {};
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.getAllBooks();
        this.getProfileData();
    };
    BooksComponent.prototype.getProfileData = function () {
        var _this = this;
        this.auth.getUserData().subscribe(function (response) { return _this.userFirstname = response.data.firstname; });
    };
    BooksComponent.prototype.checkIfBooks = function () {
        this.books.length > 0 ? this.noBooks = false : this.noBooks = true;
    };
    BooksComponent.prototype.getAllBooks = function () {
        var _this = this;
        setTimeout(function () {
            _this._apiService.getBooks()
                .subscribe(function (data) {
                _this.books = data;
                console.log(_this.books);
                _this.checkIfBooks();
            });
        }, 500);
    };
    BooksComponent.prototype.bookSubmit = function () {
        var _this = this;
        this._apiService.addBook(this.model)
            .subscribe(function (resp) {
            console.log(resp);
            _this.books.unshift(resp);
            _this.checkIfBooks();
        });
    };
    BooksComponent.prototype.removeBook = function (id) {
        var _this = this;
        this._apiService.removeBook(id)
            .subscribe(function (resp) {
            console.log(resp);
            var index = _this.books.findIndex(function (b) { return b._id === resp._id; }); //Find index of our object we want to remove. Getting ID from response from backend
            console.log('Removed', _this.books[index]);
            _this.books.splice(index, 1);
            _this.checkIfBooks();
        });
    };
    BooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! ./books.component.html */ "./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/books/model.ts":
/*!********************************!*\
  !*** ./src/app/books/model.ts ***!
  \********************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
var Book = /** @class */ (function () {
    function Book(author, title, year) {
        this.author = author;
        this.title = title;
        this.year = year;
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/games-list/games-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/games-list/games-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/games-list/games-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/games-list/games-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-4\" *ngFor=\"let game of games\">\r\n    <div class=\"card\">\r\n      <img class=\"card-img-top\" [src]=\"game.cover?.url || ''\" alt=\"Card image cap\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{ game.name }}</h5>\r\n        <p class=\"card-text\">{{ game.summary || 'Information saknas' }}</p>\r\n        <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/games-list/games-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/games-list/games-list.component.ts ***!
  \****************************************************/
/*! exports provided: GamesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesListComponent", function() { return GamesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GamesListComponent = /** @class */ (function () {
    function GamesListComponent(_apiService) {
        this._apiService = _apiService;
    }
    GamesListComponent.prototype.ngOnInit = function () {
        this.getGames();
    };
    GamesListComponent.prototype.getGames = function () {
        var _this = this;
        this._apiService.getAllGames()
            .subscribe(function (data) {
            _this.games = data.body;
            console.log(_this.games[1].cover.url);
        });
    };
    GamesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-games-list',
            template: __webpack_require__(/*! ./games-list.component.html */ "./src/app/games-list/games-list.component.html"),
            styles: [__webpack_require__(/*! ./games-list.component.css */ "./src/app/games-list/games-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]])
    ], GamesListComponent);
    return GamesListComponent;
}());



/***/ }),

/***/ "./src/app/greeting/greeting.component.css":
/*!*************************************************!*\
  !*** ./src/app/greeting/greeting.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/greeting/greeting.component.html":
/*!**************************************************!*\
  !*** ./src/app/greeting/greeting.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  greeting works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/greeting/greeting.component.ts":
/*!************************************************!*\
  !*** ./src/app/greeting/greeting.component.ts ***!
  \************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
    }
    GreetingComponent.prototype.ngOnInit = function () {
    };
    GreetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.css */ "./src/app/greeting/greeting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  home works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <form class=\"form-horizontal\" #loginForm=\"ngForm\" (ngSubmit)=\"login($event)\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <h2>Login</h2>\n          <hr>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"name\">Name</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-user\"></i>\n              </div>\n              <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"John Doe\" required autofocus>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              <!-- Put name validation error messages here -->\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"email\">Username</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-at\"></i>\n              </div>\n              <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"you@example.com\" required autofocus>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              <!-- Put e-mail validation error messages here -->\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"password\">Password</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group has-danger\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-key\"></i>\n              </div>\n              <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <button type=\"submit\" class=\"btn btn-success\">\n            <i class=\"fa fa-user-plus\"></i> Logga in</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (data) {
        var _this = this;
        var formData = {
            firstname: data.target[0].value,
            username: data.target[1].value,
            password: data.target[2].value,
        };
        this.auth.login(formData).subscribe(function (response) {
            if (response.user) {
                _this.auth.loggedIn = true;
                _this.router.navigate(['/books']);
            }
            else
                _this.auth.loggedIn = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <form class=\"form-horizontal\" #registerForm=\"ngForm\" (ngSubmit)=\"register($event)\">\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <h2>Register New User</h2>\n          <hr>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"name\">Name</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-user\"></i>\n              </div>\n              <input type=\"text\" name=\"firstname\" class=\"form-control\" id=\"firstname\" placeholder=\"John Doe\" required autofocus>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              <!-- Put name validation error messages here -->\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"email\">Username</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-at\"></i>\n              </div>\n              <input type=\"text\" name=\"username\" class=\"form-control\" id=\"username\" placeholder=\"you@example.com\" required autofocus>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              <!-- Put e-mail validation error messages here -->\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"password\">Password</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group has-danger\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-key\"></i>\n              </div>\n              <input type=\"password\" name=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"form-control-feedback\">\n            <span class=\"text-danger align-middle\">\n              \n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3 field-label-responsive\">\n          <label for=\"password\">Confirm Password</label>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <div class=\"input-group mb-2 mr-sm-2 mb-sm-0\">\n              <div class=\"input-group-addon\" style=\"width: 2.6rem\">\n                <i class=\"fa fa-repeat\"></i>\n              </div>\n              <input type=\"password\" name=\"password-confirmation\" class=\"form-control\" id=\"password-confirm\" placeholder=\"Password\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <button type=\"submit\" class=\"btn btn-success\">\n            <i class=\"fa fa-user-plus\"></i> Register</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function (data) {
        var _this = this;
        var formData = {
            firstname: data.target[0].value,
            username: data.target[1].value,
            password: data.target[2].value,
        };
        console.log(formData);
        this.auth.register(formData).subscribe(function (response) {
            _this.auth.loggedIn = true;
            _this.router.navigate(['/books']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reverse.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/reverse.pipe.ts ***!
  \*********************************/
/*! exports provided: ReversePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReversePipe = /** @class */ (function () {
    function ReversePipe() {
    }
    ReversePipe.prototype.transform = function (value) {
        if (!value)
            return;
        return value.reverse();
    };
    ReversePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'reverse'
        })
    ], ReversePipe);
    return ReversePipe;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.booksUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].booksUrl;
        this.gamesUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].gamesUrl;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    ApiService.prototype.addBook = function (book) {
        return this.http.post(this.booksUrl, book, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.removeBook = function (id) {
        return this.http.delete(this.booksUrl + "/remove/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBook = function (book) {
        return this.http.put(this.booksUrl + "/update/" + book._id, book, httpOptions);
    };
    ApiService.prototype.getAllGames = function () {
        return this.http.get(this.gamesUrl);
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }),
    withCredentials: true
};
var AuthService = /** @class */ (function () {
    function AuthService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.loggedIn = false;
    }
    AuthService.prototype.register = function (formData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/register", formData, httpOptions);
    };
    AuthService.prototype.getUserData = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/get_profile_data", { withCredentials: true });
    };
    AuthService.prototype.login = function (formData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/login", formData, httpOptions);
    };
    AuthService.prototype.checkIfLoggedIn = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/login", httpOptions);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    booksUrl: 'http://localhost:3000/api/books',
    gamesUrl: 'http://localhost:3000/api/games',
    apiUrl: 'http://localhost:3000/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\marcu\OneDrive\Dokument\Webbprojekt\angular-azure\myapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map