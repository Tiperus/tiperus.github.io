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
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_gallery_clothing_modeling_clothing_modeling_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/gallery/clothing-modeling/clothing-modeling.component */ "./src/app/pages/gallery/clothing-modeling/clothing-modeling.component.ts");
/* harmony import */ var _pages_gallery_reconstruction_of_clothes_reconstruction_of_clothes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component */ "./src/app/pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component.ts");
/* harmony import */ var _pages_gallery_embroidery_embroidery_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/gallery/embroidery/embroidery.component */ "./src/app/pages/gallery/embroidery/embroidery.component.ts");
/* harmony import */ var _pages_gallery_childrens_clothing_childrens_clothing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/gallery/childrens-clothing/childrens-clothing.component */ "./src/app/pages/gallery/childrens-clothing/childrens-clothing.component.ts");
/* harmony import */ var _pages_gallery_interior_decor_interior_decor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/gallery/interior-decor/interior-decor.component */ "./src/app/pages/gallery/interior-decor/interior-decor.component.ts");
/* harmony import */ var _pages_gallery_costumes_for_groups_costumes_for_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/gallery/costumes-for-groups/costumes-for-groups.component */ "./src/app/pages/gallery/costumes-for-groups/costumes-for-groups.component.ts");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _pages_admin_category_category_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/admin/category/category.component */ "./src/app/pages/admin/category/category.component.ts");
/* harmony import */ var _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/admin/products/products.component */ "./src/app/pages/admin/products/products.component.ts");
/* harmony import */ var _pages_product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/product/product-details/product-details.component */ "./src/app/pages/product/product-details/product-details.component.ts");

















const routes = [
    { path: '', pathMatch: 'full', redirectTo: 'about' },
    { path: 'about', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] },
    { path: 'gallery', component: _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'embroidery' },
            { path: 'models', component: _pages_gallery_clothing_modeling_clothing_modeling_component__WEBPACK_IMPORTED_MODULE_4__["ClothingModelingComponent"] },
            { path: 'reconstruction', component: _pages_gallery_reconstruction_of_clothes_reconstruction_of_clothes_component__WEBPACK_IMPORTED_MODULE_5__["ReconstructionOfClothesComponent"] },
            { path: 'embroidery', component: _pages_gallery_embroidery_embroidery_component__WEBPACK_IMPORTED_MODULE_6__["EmbroideryComponent"] },
            { path: 'children', component: _pages_gallery_childrens_clothing_childrens_clothing_component__WEBPACK_IMPORTED_MODULE_7__["ChildrensClothingComponent"] },
            { path: 'decor', component: _pages_gallery_interior_decor_interior_decor_component__WEBPACK_IMPORTED_MODULE_8__["InteriorDecorComponent"] },
            { path: 'choir', component: _pages_gallery_costumes_for_groups_costumes_for_groups_component__WEBPACK_IMPORTED_MODULE_9__["CostumesForGroupsComponent"] }
        ] },
    { path: 'map', component: _pages_map_map_component__WEBPACK_IMPORTED_MODULE_10__["MapComponent"] },
    { path: 'admin', component: _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"], children: [
            { path: '', pathMatch: 'full', redirectTo: 'products' },
            { path: 'category', component: _pages_admin_category_category_component__WEBPACK_IMPORTED_MODULE_12__["CategoryComponent"] },
            { path: 'products', component: _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"] },
        ] },
    { path: 'product/:id', component: _pages_product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"] },
    { path: '**', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_2__["AboutUsComponent"] }
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
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'OliraProgect';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  background-image: url('olira_bg_r.jpg');\n  background-size: cover;\n  background-position: center;\n  height: 143vh;\n}\n@media screen and (max-width: 575px) {\n  main[_ngcontent-%COMP%] {\n    height: 160vh;\n  }\n}\n@media all and (min-width: 576px) and (max-width: 1030px) {\n  main[_ngcontent-%COMP%] {\n    height: 165vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFMSjtJQU1RLGFBQUE7RUFHTjtBQUNGO0FBRkk7RUFSSjtJQVErRCxhQUFBO0VBTTdEO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWlue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vYXNzZXRzL2ltYWdlcy9vbGlyYV9iZ19yLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNDN2aDtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgICAgICBoZWlnaHQ6IDE2MHZoO1xyXG4gICAgICAgIH1cclxuICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogMTAzMHB4KSB7aGVpZ2h0OiAxNjV2aDt9XHJcbn0iXX0= */"] });
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/popover */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/gallery/gallery.component */ "./src/app/pages/gallery/gallery.component.ts");
/* harmony import */ var _pages_gallery_clothing_modeling_clothing_modeling_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/gallery/clothing-modeling/clothing-modeling.component */ "./src/app/pages/gallery/clothing-modeling/clothing-modeling.component.ts");
/* harmony import */ var _pages_gallery_reconstruction_of_clothes_reconstruction_of_clothes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component */ "./src/app/pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component.ts");
/* harmony import */ var _pages_gallery_embroidery_embroidery_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/gallery/embroidery/embroidery.component */ "./src/app/pages/gallery/embroidery/embroidery.component.ts");
/* harmony import */ var _pages_gallery_childrens_clothing_childrens_clothing_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/gallery/childrens-clothing/childrens-clothing.component */ "./src/app/pages/gallery/childrens-clothing/childrens-clothing.component.ts");
/* harmony import */ var _pages_gallery_interior_decor_interior_decor_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/gallery/interior-decor/interior-decor.component */ "./src/app/pages/gallery/interior-decor/interior-decor.component.ts");
/* harmony import */ var _pages_gallery_costumes_for_groups_costumes_for_groups_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/gallery/costumes-for-groups/costumes-for-groups.component */ "./src/app/pages/gallery/costumes-for-groups/costumes-for-groups.component.ts");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/admin/admin.component */ "./src/app/pages/admin/admin.component.ts");
/* harmony import */ var _pages_admin_category_category_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/admin/category/category.component */ "./src/app/pages/admin/category/category.component.ts");
/* harmony import */ var _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/admin/products/products.component */ "./src/app/pages/admin/products/products.component.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _pages_product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/product/product-details/product-details.component */ "./src/app/pages/product/product-details/product-details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");












































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"], useValue: { interval: 3500, noPause: true, showIndicators: true } }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
            ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"],
        _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_20__["GalleryComponent"],
        _pages_gallery_clothing_modeling_clothing_modeling_component__WEBPACK_IMPORTED_MODULE_21__["ClothingModelingComponent"],
        _pages_gallery_reconstruction_of_clothes_reconstruction_of_clothes_component__WEBPACK_IMPORTED_MODULE_22__["ReconstructionOfClothesComponent"],
        _pages_gallery_embroidery_embroidery_component__WEBPACK_IMPORTED_MODULE_23__["EmbroideryComponent"],
        _pages_gallery_childrens_clothing_childrens_clothing_component__WEBPACK_IMPORTED_MODULE_24__["ChildrensClothingComponent"],
        _pages_gallery_interior_decor_interior_decor_component__WEBPACK_IMPORTED_MODULE_25__["InteriorDecorComponent"],
        _pages_gallery_costumes_for_groups_costumes_for_groups_component__WEBPACK_IMPORTED_MODULE_26__["CostumesForGroupsComponent"],
        _pages_map_map_component__WEBPACK_IMPORTED_MODULE_27__["MapComponent"],
        _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
        _pages_admin_category_category_component__WEBPACK_IMPORTED_MODULE_29__["CategoryComponent"],
        _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_30__["ProductsComponent"],
        _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_31__["ProductByCategoryPipe"],
        _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_34__["ChangePagePipe"],
        _pages_product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_35__["ProductDetailsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                    _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_19__["AboutUsComponent"],
                    _pages_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_20__["GalleryComponent"],
                    _pages_gallery_clothing_modeling_clothing_modeling_component__WEBPACK_IMPORTED_MODULE_21__["ClothingModelingComponent"],
                    _pages_gallery_reconstruction_of_clothes_reconstruction_of_clothes_component__WEBPACK_IMPORTED_MODULE_22__["ReconstructionOfClothesComponent"],
                    _pages_gallery_embroidery_embroidery_component__WEBPACK_IMPORTED_MODULE_23__["EmbroideryComponent"],
                    _pages_gallery_childrens_clothing_childrens_clothing_component__WEBPACK_IMPORTED_MODULE_24__["ChildrensClothingComponent"],
                    _pages_gallery_interior_decor_interior_decor_component__WEBPACK_IMPORTED_MODULE_25__["InteriorDecorComponent"],
                    _pages_gallery_costumes_for_groups_costumes_for_groups_component__WEBPACK_IMPORTED_MODULE_26__["CostumesForGroupsComponent"],
                    _pages_map_map_component__WEBPACK_IMPORTED_MODULE_27__["MapComponent"],
                    _pages_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["AdminComponent"],
                    _pages_admin_category_category_component__WEBPACK_IMPORTED_MODULE_29__["CategoryComponent"],
                    _pages_admin_products_products_component__WEBPACK_IMPORTED_MODULE_30__["ProductsComponent"],
                    _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_31__["ProductByCategoryPipe"],
                    _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_34__["ChangePagePipe"],
                    _pages_product_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_35__["ProductDetailsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_36__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                    ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"].forRoot(),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                    _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebaseConfig),
                    _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorageModule"],
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_9__["AngularFireAuthModule"],
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_32__["MatTableModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_33__["MatMenuModule"]
                ],
                providers: [
                    { provide: ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselConfig"], useValue: { interval: 3500, noPause: true, showIndicators: true } }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/map"]; };
class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 7, vars: 2, consts: [[1, "conteiner-fluid", "p-2", "d-flex", "justify-content-between", 2, "background-color", "rgb(160, 97, 107)"], [1, "container", "button_contain"], ["href", "tel: +390975770888", "type", "button", "role", "button", 1, "btn", "btn-success", "mr-2"], ["type", "button", 1, "btn", "btn-secondary", "mr-2", 3, "routerLink"], ["href", "https://www.facebook.com/oliralviv888", "target", "_blank\n", 1, "text-primary", 2, "width", "48px", "height", "48px", "background-image", "url('./../../../assets/images/icons8-facebook-\u043D\u043E\u0432\u044B\u0439-48.png')", "background-position", "center", "background-size", "cover", "background-repeat", "no-repeat"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0432\u043E\u043D\u0456\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["@media screen and (max-width: 500px) {\n  .button_contain[_ngcontent-%COMP%] {\n    max-width: 40vw;\n    display: flex;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1JO0VBTko7SUFPUSxlQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0VBSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b25fY29udGFpbntcclxuICAgIC8vIG1heC13aWR0aDogNDB2dztcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgLy8ganVzdGlmeS1pdGVtczogc3RhcnQ7XHJcbiAgICAvLyBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgQG1lZGlhIHNjcmVlbiAgYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MHZ3O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufTtcclxuLy8gLmZhY2VfbGlua3tcclxuLy8gICAgIHdpZHRoOiA0IHZ3O1xyXG4vLyAgICAgaGVpZ2h0OiA3IHZoO1xyXG4vLyAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzgwcHgpIHtcclxuLy8gICAgICAgICB3aWR0aDogNHZ3O1xyXG4vLyAgICAgICAgIGhlaWdodDogNHZoO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIGFsbCBhbmQgKG1pbi13aWR0aDogMzIwcHgpIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return [a0]; };
function HeaderComponent_ul_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, "/gallery/" + m_r2.nameEN));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](m_r2.nameUA);
} }
function HeaderComponent_ul_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ul_11_li_1_Template, 3, 4, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.cloudCategories);
} }
const _c1 = function () { return ["/about"]; };
const _c2 = function () { return ["/map"]; };
const _c3 = function () { return ["/admin"]; };
class HeaderComponent {
    constructor(categoryData) {
        this.categoryData = categoryData;
        this.cloudCategories = [];
    }
    ngOnInit() {
        this.getCategory();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCategory() {
        this.subscription = this.categoryData.getFireBaseCategories().subscribe(data => {
            this.cloudCategories = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_2__["AllServiceService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"], useValue: { isAnimated: true, autoClose: true } }])], decls: 21, vars: 8, consts: [[1, "logo", "d-flex", "justify-content-center", "mt-4"], [1, "nav", "nav-pills"], [1, "nav-item"], [1, "nav-link", "text-warning", "list-group-item-action", 3, "routerLink"], ["dropdown", "", 1, "btn-group"], ["id", "button-animated", "dropdownToggle", "", "aria-controls", "dropdown-animated", 1, "nav-link", "nav-item", "text-warning", "dropdown-toggle", "list-group-item-action"], [1, "caret"], ["id", "dropdown-animated", "class", "dropdown-menu text-warning", "role", "menu", "aria-labelledby", "button-animated", "style", "background-color: rgba(222, 184, 135, 0.575);", 4, "dropdownMenu"], ["id", "dropdown-animated", "role", "menu", "aria-labelledby", "button-animated", 1, "dropdown-menu", "text-warning", 2, "background-color", "rgba(222, 184, 135, 0.575)"], ["role", "menuitem", 4, "ngFor", "ngForOf"], ["role", "menuitem"], ["routerLinkActive", "active", 1, "nav-link", "dropdown-item", 2, "color", "rgb(160, 97, 107)", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "OLIRA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041F\u0440\u043E \u043C\u0435\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0413\u0430\u043B\u0435\u0440\u0435\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HeaderComponent_ul_11_Template, 2, 1, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u041F\u0440\u043E \u043C\u0435\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u041A\u0430\u0440\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0410\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u043E\u0440");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"]], styles: ["@font-face {\n  font-family: my;\n  src: url('BauhausC_Light_Regular.ttf');\n}\n.logo[_ngcontent-%COMP%] {\n  font-family: my;\n  color: #a0616b;\n  font-size: 4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLHNDQUFBO0FBQ0o7QUFDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogbXk7XHJcbiAgICBzcmM6IHVybCguLy4uLy4uLy4uL2Fzc2V0cy9mb250cy9CYXVoYXVzQ19MaWdodF9SZWd1bGFyLnR0Zik7XHJcbiAgfVxyXG4ubG9nb3tcclxuICAgIGZvbnQtZmFtaWx5OiBteTtcclxuICAgIGNvbG9yOiByZ2IoMTYwLCA5NywgMTA3KTtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
                providers: [{ provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownConfig"], useValue: { isAnimated: true, autoClose: true } }]
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_2__["AllServiceService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function LoginComponent_form_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.signUp(ctx_r3.signUpForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_3_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0420\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signUpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.signUpForm.controls["email"].invalid && ctx_r0.signUpForm.controls["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.signUpForm.valid);
} }
function LoginComponent_form_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u043A\u0430\u0436\u0456\u0442\u044C \u043A\u043E\u0440\u0435\u043A\u0442\u043D\u043E \u0432\u0430\u0448\u0443 \u0435\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043A\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.login(ctx_r7.loginForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_form_4_div_5_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041B\u043E\u0433\u0456\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_form_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.check(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "To sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.controls["email"].invalid && ctx_r1.loginForm.controls["email"].touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.loginForm.valid);
} }
class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9_]+@[a-z]{2,6}.[a-z]{2,4}')]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.isSignUpActive = true;
    }
    ngOnInit() {
    }
    signUp(formData) {
        console.log(formData);
        this.auth.signUp(formData['email'], formData['password']);
    }
    login(formData) {
        console.log(formData);
        this.auth.login(formData['email'], formData['password']);
    }
    check() {
        this.isSignUpActive = !this.isSignUpActive;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-3"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "signUpEmail"], ["id", "signUpEmail", "formControlName", "email", "name", "email", "type", "email", "placeholder", "Enter email", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["for", "signUpPassword"], ["id", "signUpPassword", "formControlName", "password", "name", "password", "type", "password", "placeholder", "Enter password", 1, "form-control"], ["type", "submit", 1, "btn", "btn-block", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-block", "btn-info", 3, "click"], [1, "alert", "alert-danger"], ["for", "loginEmail"], ["id", "loginEmail", "formControlName", "email", "name", "email", "type", "email", "placeholder", "Enter email", 1, "form-control"], ["for", "loginPassword"], ["id", "loginPassword", "formControlName", "password", "name", "password", "type", "password", "placeholder", "Enter password", 1, "form-control"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 14, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_form_4_Template, 14, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSignUpActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isSignUpActive);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");



class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], decls: 68, vars: 0, consts: [[1, "container-fluid", "p-4"], [1, "row", "row-cols-2", "bg-transparent"], [1, "col-md-3", "col-12"], [1, "card", 2, "background-color", "rgba(233, 221, 167, 0.5)"], ["src", "./../../../assets/images/portret.jpg", "alt", "...", 1, "card-img-top"], [1, "card-body", "bg-transparent"], [1, "card-title"], [1, "card-text", "bg-transparent", "overflow-auto", 2, "height", "30vh"], [1, "card", "bg-transparent", "text-white", "col-md-9", "col-12", "p-2"], ["src", "./../../../assets/images/carussel1-min.jpg", "alt", "first slide", 2, "display", "block", "width", "100%"], [1, "carousel-caption", "d-none", "d-md-block"], [2, "background-color", "rgba(233, 221, 167, 0.7)"], [1, "text-dark", "font-weight-bold", 2, "background-color", "rgba(233, 221, 167, 0.7)"], ["src", "./../../../assets/images/carussel2-min.jpg", "alt", "second slide", 2, "display", "block", "width", "100%"], [2, "background-color", "rgba(233, 221, 167, 0.4)"], ["src", "./../../../assets/images/carussel3-min.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"], [2, "background-color", "rgba(233, 221, 167, 0.5)"], ["src", "./../../../assets/images/carussel4-min.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"], ["src", "./../../../assets/images/carussel5-min.JPG", "alt", "third slide", 2, "display", "block", "width", "100%"], ["src", "./../../../assets/images/carussel7-min.jpg", "alt", "third slide", 2, "display", "block", "width", "100%"], [1, "addInfo"], ["type", "disk"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041F\u0440\u043E \u043C\u0435\u043D\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae corrupti commodi modi, asperiores beatae ex inventore autem eveniet ullam ad vero hic fuga nobis blanditiis voluptatem, quis quasi architecto iure velit cum voluptas molestias doloremque!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443 \u0432 \u0435\u0442\u043D\u043E\u0441\u0442\u0438\u043B\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0414\u0438\u0437\u0430\u0439\u043D, \u043F\u0440\u043E\u0435\u043A\u0442\u0443\u0432\u0430\u043D\u043D\u044F, \u043F\u043E\u0448\u0443\u043A \u0441\u0442\u0438\u043B\u044E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E \u0434\u043E \u0440\u0435\u0433\u0456\u043E\u043D\u0443, \u043F\u043E\u0448\u0443\u043A \u0432\u0456\u0437\u0435\u0440\u0443\u043D\u043A\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u041F\u0456\u0434\u0431\u0456\u0440 \u0430\u0432\u0442\u0435\u043D\u0442\u0438\u0447\u043D\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0456\u0432, \u0432\u0456\u0434\u0442\u0432\u043E\u0440\u0435\u043D\u043D\u044F \u0441\u0442\u0430\u0440\u043E\u0434\u0430\u0432\u043D\u0456\u0445 \u0432\u0437\u043E\u0440\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u0412\u0438\u0448\u0438\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0428\u0438\u0440\u043E\u043A\u0438\u0439 \u0432\u0438\u0431\u0456\u0440 \u0432\u0437\u043E\u0440\u0456\u0432 \u0442\u0430 \u043A\u0440\u043E\u0457\u0432, \u043C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043E\u0434\u044F\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u0426\u0456\u043A\u0430\u0432\u0456 \u0444\u0430\u0441\u043E\u043D\u0438, \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u044C\u043D\u0430 \u0432\u0438\u0448\u0438\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "\u041A\u043E\u0441\u0442\u044E\u043C\u0438 \u0434\u043B\u044F \u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0432\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u042F\u0441\u043A\u0440\u0430\u0432\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F, \u0441\u0430\u043C\u043E\u0431\u0443\u0442\u043D\u0456 \u0444\u0430\u0441\u043E\u043D\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u0414\u0435\u043A\u043E\u0440 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0415\u043B\u0435\u043C\u0435\u043D\u0442\u0438, \u0449\u043E \u0434\u043E\u0434\u0430\u044E\u0442\u044C \u0437\u0430\u0442\u0438\u0448\u043E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "\u041C\u043E\u0434\u0435\u043B\u044E\u0432\u0430\u043D\u043D\u044F \u043E\u0434\u044F\u0433\u0443 \u0432 \u0435\u0442\u043D\u043E\u0441\u0442\u0438\u043B\u0456");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0420\u0435\u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0456\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u0412\u0438\u0448\u0438\u0432\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\u0414\u0438\u0442\u044F\u0447\u0438\u0439 \u043E\u0434\u044F\u0433");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u041A\u043E\u0441\u0442\u044E\u043C\u0438 \u0434\u043B\u044F \u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0432\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u0414\u0435\u043A\u043E\u0440 \u0456\u043D\u0442\u0435\u0440'\u0454\u0440\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"]], styles: [".addInfo[_ngcontent-%COMP%] {\n  display: none;\n  color: white;\n}\n@media screen and (max-width: 575px) {\n  .addInfo[_ngcontent-%COMP%] {\n    display: block;\n    position: absolute;\n    bottom: -67vh;\n    background-color: rgba(222, 184, 135, 0.575);\n    width: 80vw;\n    margin: 1vh;\n    padding-top: 1vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQUNKO0FBQUk7RUFISjtJQUlRLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSw0Q0FBQTtJQUNBLFdBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkSW5mb3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogLTY3dmg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDE4NCwgMTM1LCAwLjU3NSk7XHJcbiAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgbWFyZ2luOiAxdmg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDF2aDtcclxuICAgICAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/admin/category"]; };
const _c1 = function () { return ["/admin/products"]; };
class AdminComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 8, vars: 4, consts: [[1, "nav", "flex-column"], [1, "nav-item"], ["routerLinkActive", "active", 3, "routerLink"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F \u0432\u0438\u0440\u043E\u0431\u0456\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0438\u0440\u043E\u0431\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/category/category.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/category/category.component.ts ***!
  \************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_category_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/models/category.model */ "./src/app/shared/models/category.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function CategoryComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryComponent_tr_16_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteCategory(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.nameUA, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.nameEN, "");
} }
class CategoryComponent {
    constructor(categoryData) {
        this.categoryData = categoryData;
        this.cloudCategories = [];
        this.nameValidUA = false;
        this.nameValidEN = false;
        this.addCategoryForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameUA: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[А-Яа-я ]+$')]),
            nameEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[A-Za-z ]+$')]),
        });
    }
    ngOnInit() { this.getCategory(); }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCategory() {
        this.subscription = this.categoryData.getFireBaseCategories().subscribe(data => {
            this.cloudCategories = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
        });
    }
    addCategory() {
        // this.nameUA=this.addCategoryForm.value.nameUA;
        // this.nameUA=this.addCategoryForm.value.nameEN;
        // console.log(this.addCategoryForm)
        const category = new _shared_models_category_model__WEBPACK_IMPORTED_MODULE_1__["Category"]("1", this.addCategoryForm.value.nameUA, this.addCategoryForm.value.nameEN);
        if (this.cloudCategories.length > 0) {
            category.id = (+this.cloudCategories.slice(-1)[0].id + 1).toString();
            // console.log(category.id)
        }
        // console.log(this.addCategoryForm)
        this.categoryData.addFirebaseCategory(category)
            .then(() => {
            console.log('success');
            this.addCategoryForm.reset();
        })
            .catch(error => console.log(error));
    }
    deleteCategory(item) {
        // const category: ICategory = new Category(this.editedFireID, this.editedNameUA, this.editedNameEN, this.editedImage);
        this.categoryData.deleteFirebaseCategory(item.id, item)
            .then(() => {
            console.log('successfully');
            // this.editedForm.reset();
            this.getCategory();
        })
            .catch(error => console.log(error));
    }
    checkNameUA(addCategoryForm) {
        return this.nameValidUA = this.cloudCategories.some((item, index, arr) => arr[index].nameUA === addCategoryForm.value.nameUA);
    }
    checkNameEN(addCategoryForm) {
        return this.nameValidEN = this.cloudCategories.some((item, index, arr) => arr[index].nameEN === addCategoryForm.value.nameEN);
    }
}
CategoryComponent.ɵfac = function CategoryComponent_Factory(t) { return new (t || CategoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_3__["AllServiceService"])); };
CategoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryComponent, selectors: [["app-category"]], decls: 17, vars: 5, consts: [[1, "border-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "nameUA", "placeholder", "\u041D\u0430\u0437\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E", "type", "text", 1, "form-control"], [1, "alert", "alert-danger", 3, "hidden"], ["formControlName", "nameEN", "type", "text", "aria-label", "nameEN", "aria-describedby", "addon-wrapping", "placeholder", "Name of category in English", 1, "form-control"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "container"], [1, "row", "justify-content-end"], [1, "col-6"], [1, "table", "table-dark", "table-sm"], ["class", "text", 4, "ngFor", "ngForOf"], [1, "text"], ["type", "button", 1, "btn", "btn-danger", "m-2", 3, "click"]], template: function CategoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CategoryComponent_Template_form_ngSubmit_0_listener() { return ctx.addCategory(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0430\u043A\u0435 \u0456\u043C'\u044F \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0422\u0430\u043A\u0435 \u0456\u043C'\u044F \u0432\u0436\u0435 \u0456\u0441\u043D\u0443\u0454");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CategoryComponent_tr_16_Template, 11, 3, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addCategoryForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.checkNameUA(ctx.addCategoryForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.checkNameEN(ctx.addCategoryForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.addCategoryForm.valid || ctx.checkNameUA(ctx.addCategoryForm));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cloudCategories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".ng-touched[_ngcontent-%COMP%] {\n  border: 2px gray solid;\n}\n\n.ng-invalid[_ngcontent-%COMP%] {\n  border: 2px red solid;\n}\n\n.ng-valid[_ngcontent-%COMP%] {\n  border: 2px green solid;\n}\n\n.ng-untouched[_ngcontent-%COMP%] {\n  border: 2px blue solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7QUFFSjs7QUFBQTtFQUNJLHVCQUFBO0FBR0o7O0FBREE7RUFDSSxzQkFBQTtBQUlKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWRtaW4vY2F0ZWdvcnkvY2F0ZWdvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmctdG91Y2hlZHtcclxuICAgIGJvcmRlcjogMnB4IGdyYXkgc29saWQ7XHJcbn1cclxuLm5nLWludmFsaWR7XHJcbiAgICBib3JkZXI6IDJweCByZWQgc29saWQ7XHJcbn1cclxuLm5nLXZhbGlke1xyXG4gICAgYm9yZGVyOiAycHggZ3JlZW4gc29saWQ7XHJcbn1cclxuLm5nLXVudG91Y2hlZHtcclxuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category',
                templateUrl: './category.component.html',
                styleUrls: ['./category.component.scss']
            }]
    }], function () { return [{ type: _shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_3__["AllServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/admin/products/products.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/admin/products/products.component.ts ***!
  \************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_models_product_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/models/product.model */ "./src/app/shared/models/product.model.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
/* harmony import */ var _shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ProductsComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", c_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r1.nameUA);
} }
class ProductsComponent {
    constructor(fireBaseStorage, productData) {
        this.fireBaseStorage = fireBaseStorage;
        this.productData = productData;
        this.cloudCategories = [];
        this.productImagesArray = [];
        this.cloudProduct = [];
        this.addProductForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            nameProductUA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[А-Яа-я ]+$')]),
            nameProductEN: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[A-Za-z ]+$')]),
            descriptionProductUA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            productCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            priceProductUA: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            productImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
        this.getCategory();
        this.getProduct();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    getCategory() {
        this.subscription = this.productData.getFireBaseCategories().subscribe(data => {
            this.cloudCategories = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
        });
    }
    uploadFile(event) {
        const file = event.target.files[0];
        const filePath = `images/${this.uuid()}.${file.type.split('/')[1]}`;
        const task = this.fireBaseStorage.upload(filePath, file);
        this.uploadProgress = task.percentageChanges();
        console.log(this.uploadProgress);
        task.then(e => {
            this.fireBaseStorage.ref(`${e.metadata.fullPath}`)
                // images/${e.metadata.name}
                .getDownloadURL()
                .subscribe(url => {
                this.productImagesArray.push(url);
                console.log(this.productImagesArray);
            });
        });
    }
    uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    addProduct() {
        const product = new _shared_models_product_model__WEBPACK_IMPORTED_MODULE_2__["Product"]('1', this.addProductForm.value.productCategory, this.addProductForm.value.nameProductUA, this.addProductForm.value.nameProductEN, this.addProductForm.value.descriptionProductUA, this.addProductForm.value.priceProductUA, 1, this.productImagesArray);
        console.log(product);
        if (this.cloudProduct.length > 0) {
            this.cloudProduct.sort((a, b) => +a.id - +b.id);
            product.id = (+this.cloudProduct.slice(-1)[0].id + 1).toString();
        }
        this.productData.addFirebaseProduct(product)
            .then(() => {
            console.log('success');
            this.addProductForm.reset();
        })
            .catch(error => console.log(error));
    }
    getProduct() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
        });
    }
}
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) { return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_4__["AllServiceService"])); };
ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsComponent, selectors: [["app-products"]], decls: 24, vars: 6, consts: [[1, "border-0", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "nameProductUA", "placeholder", "\u041D\u0430\u0437\u0432\u0430 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443 \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E", "type", "text", 1, "form-control"], ["formControlName", "nameProductEN", "type", "text", "aria-label", "nameEN", "aria-describedby", "addon-wrapping", "placeholder", "Name of product in English", 1, "form-control"], ["formControlName", "descriptionProductUA", "type", "text", "aria-label", "nameEN", "aria-describedby", "addon-wrapping", "placeholder", "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u0438\u0439 \u043E\u043F\u0438\u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0443", 1, "form-control"], ["formControlName", "priceProductUA", "type", "number", "aria-label", "nameEN", "aria-describedby", "addon-wrapping", "placeholder", "\u0446\u0456\u043D\u0430", 1, "form-control"], ["formControlName", "productCategory", "name", "productCategory", "id", "inputGroupSelect01", 1, "custom-select"], ["selected", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "input-group", "is-invalid"], [1, "custom-file"], ["formControlName", "productImage", "type", "file", "id", "validatedInputGroupCustomFile", "required", "", 1, "custom-file-input", 3, "change"], ["for", "validatedInputGroupCustomFile", 1, "custom-file-label"], [1, "progress"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "bg-danger"], ["type", "submit", 1, "btn", "btn-success"], [3, "ngValue"]], template: function ProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductsComponent_Template_form_ngSubmit_0_listener() { return ctx.addProduct(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductsComponent_option_13_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductsComponent_Template_input_change_16_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0424\u043E\u0442\u043E \u0434\u043B\u044F \u0442\u043E\u0432\u0430\u0440\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "ADD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.addProductForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cloudCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 4, ctx.uploadProgress) + "%");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkbWluL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-products',
                templateUrl: './products.component.html',
                styleUrls: ['./products.component.scss']
            }]
    }], function () { return [{ type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }, { type: _shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_4__["AllServiceService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/childrens-clothing/childrens-clothing.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/gallery/childrens-clothing/childrens-clothing.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ChildrensClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildrensClothingComponent", function() { return ChildrensClothingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function ChildrensClothingComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function ChildrensClothingComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ChildrensClothingComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function ChildrensClothingComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildrensClothingComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class ChildrensClothingComponent {
    constructor(productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
ChildrensClothingComponent.ɵfac = function ChildrensClothingComponent_Factory(t) { return new (t || ChildrensClothingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ChildrensClothingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildrensClothingComponent, selectors: [["app-childrens-clothing"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function ChildrensClothingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ChildrensClothingComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ChildrensClothingComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9jaGlsZHJlbnMtY2xvdGhpbmcvY2hpbGRyZW5zLWNsb3RoaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBQTtBQUFKOztBQUVBO0VBQ0Usc0NBQUE7RUFFQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FBQUY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUU7RUFORjtJQU9JLGFBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBREY7QUFDRjs7QUFHRTtFQVpGO0lBYUksWUFBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7RUFBRjtBQUNGOztBQUlJO0VBREg7SUFFRyxhQUFBO0VBQUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvY2hpbGRyZW5zLWNsb3RoaW5nL2NoaWxkcmVucy1jbG90aGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUge1xyXG4gICAgLy8gYmFja2dyb3VuZDogcmdiKDI0NywgMjM2LCAyMTYpO1xyXG4gICAgbWFyZ2luOiAzcHg7XHJcbiAgfVxyXG5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNDcsIDIzNiwgMjE2LCAwLjUwNyk7XHJcbiAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwLCAwLCBub25lO1xyXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDBjaDtcclxuICBvdXRsaW5lLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnBhZ2luX3Bvc2l0aW9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIGJvdHRvbTogLTYwcHg7XHJcbn1cclxuXHJcbiAgXHJcbi5pbWFnZV9zaXple1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIFxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMTBweDtcclxuICAgIG9iamVjdC1wb3NpdGlvbjp0b3A7XHJcbiAgICBcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgbWF4LWhlaWdodDogODBweDtcclxuICAgIG9iamVjdC1wb3NpdGlvbjp0b3A7XHJcbiAgICBcclxuICB9XHJcbn0gXHJcbiAuZGlzYWJsZWR7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBkaXNwbGF5OiBub25lOyAgXHJcbiAgICB9XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildrensClothingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-childrens-clothing',
                templateUrl: './childrens-clothing.component.html',
                styleUrls: ['./childrens-clothing.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/clothing-modeling/clothing-modeling.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/gallery/clothing-modeling/clothing-modeling.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClothingModelingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingModelingComponent", function() { return ClothingModelingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function ClothingModelingComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function ClothingModelingComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClothingModelingComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function ClothingModelingComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClothingModelingComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class ClothingModelingComponent {
    constructor(productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
ClothingModelingComponent.ɵfac = function ClothingModelingComponent_Factory(t) { return new (t || ClothingModelingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ClothingModelingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClothingModelingComponent, selectors: [["app-clothing-modeling"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function ClothingModelingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClothingModelingComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClothingModelingComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9jbG90aGluZy1tb2RlbGluZy9jbG90aGluZy1tb2RlbGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFDQTtFQUNFLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUVGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVFO0VBTkY7SUFPSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQUNGO0FBQ0Y7O0FBQ0U7RUFaRjtJQWFJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VBRUY7QUFDRjs7QUFFSTtFQURIO0lBRUcsYUFBQTtFQUVGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2Nsb3RoaW5nLW1vZGVsaW5nL2Nsb3RoaW5nLW1vZGVsaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjM2LCAyMTYsIDAuNTA3KTtcclxuICBib3JkZXI6IDAsIDAsIG5vbmU7XHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICBvdXRsaW5lLW9mZnNldDogMGNoO1xyXG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5fcG9zaXRpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAtNjBweDtcclxufVxyXG5cclxuICBcclxuLmltYWdlX3NpemV7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxufSBcclxuIC5kaXNhYmxlZHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIGRpc3BsYXk6IG5vbmU7ICBcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClothingModelingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clothing-modeling',
                templateUrl: './clothing-modeling.component.html',
                styleUrls: ['./clothing-modeling.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/costumes-for-groups/costumes-for-groups.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/gallery/costumes-for-groups/costumes-for-groups.component.ts ***!
  \************************************************************************************/
/*! exports provided: CostumesForGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumesForGroupsComponent", function() { return CostumesForGroupsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function CostumesForGroupsComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function CostumesForGroupsComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CostumesForGroupsComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function CostumesForGroupsComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CostumesForGroupsComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class CostumesForGroupsComponent {
    constructor(productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
CostumesForGroupsComponent.ɵfac = function CostumesForGroupsComponent_Factory(t) { return new (t || CostumesForGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CostumesForGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CostumesForGroupsComponent, selectors: [["app-costumes-for-groups"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function CostumesForGroupsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CostumesForGroupsComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CostumesForGroupsComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9jb3N0dW1lcy1mb3ItZ3JvdXBzL2Nvc3R1bWVzLWZvci1ncm91cHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0FBQUo7O0FBRUE7RUFDRSxzQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJRTtFQU5GO0lBT0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFERjtBQUNGOztBQUdFO0VBWkY7SUFhSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQUFGO0FBQ0Y7O0FBSUk7RUFESDtJQUVHLGFBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9jb3N0dW1lcy1mb3ItZ3JvdXBzL2Nvc3R1bWVzLWZvci1ncm91cHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNDcsIDIzNiwgMjE2KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyMzYsIDIxNiwgMC41MDcpO1xyXG4gIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMCwgMCwgbm9uZTtcclxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwY2g7XHJcbiAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbl9wb3NpdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IC02MHB4O1xyXG59XHJcblxyXG4gIFxyXG4uaW1hZ2Vfc2l6ZXtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTEwcHg7XHJcbiAgICBvYmplY3QtcG9zaXRpb246dG9wO1xyXG4gICAgXHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICBvYmplY3QtcG9zaXRpb246dG9wO1xyXG4gICAgXHJcbiAgfVxyXG59IFxyXG4gLmRpc2FibGVke1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgZGlzcGxheTogbm9uZTsgIFxyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CostumesForGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-costumes-for-groups',
                templateUrl: './costumes-for-groups.component.html',
                styleUrls: ['./costumes-for-groups.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/embroidery/embroidery.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/gallery/embroidery/embroidery.component.ts ***!
  \******************************************************************/
/*! exports provided: EmbroideryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbroideryComponent", function() { return EmbroideryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function EmbroideryComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function EmbroideryComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmbroideryComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function EmbroideryComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmbroideryComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class EmbroideryComponent {
    constructor(
    // private fireBaseStorage: AngularFireStorage,
    productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
EmbroideryComponent.ɵfac = function EmbroideryComponent_Factory(t) { return new (t || EmbroideryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
EmbroideryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmbroideryComponent, selectors: [["app-embroidery"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function EmbroideryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmbroideryComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmbroideryComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9lbWJyb2lkZXJ5L2VtYnJvaWRlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFFSSxXQUFBO0FBSko7O0FBTUE7RUFDRSxzQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFKRjs7QUFjQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFYRjs7QUFjRTtFQU5GO0lBT0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFYRjtBQUNGOztBQWFFO0VBWkY7SUFhSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQVZGO0FBQ0Y7O0FBY0k7RUFESDtJQUVHLGFBQUE7RUFWRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9lbWJyb2lkZXJ5L2VtYnJvaWRlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZXhhbXBsZS1jYXJkIHtcclxuLy8gICAgIG1heC13aWR0aDogNDAwcHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiaXNxdWU7XHJcbi8vICAgfVxyXG5tYXQtZ3JpZC10aWxlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNDcsIDIzNiwgMjE2KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyMzYsIDIxNiwgMC41MDcpO1xyXG4gIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMCwgMCwgbm9uZTtcclxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwY2g7XHJcbiAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbl9wb3NpdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IC02MHB4O1xyXG59XHJcbi8vIC5jb250YWluZXJ7XHJcbi8vICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuLy8gfVxyXG4vLyAuY29udGFpbmVye1xyXG4vLyAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDogMzcwcHgpIHtcclxuLy8gICAgIGhlaWdodDogMTMwdmg7XHJcbi8vICAgfX1cclxuICBcclxuLmltYWdlX3NpemV7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxufSBcclxuIC5kaXNhYmxlZHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIGRpc3BsYXk6IG5vbmU7ICBcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmbroideryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-embroidery',
                templateUrl: './embroidery.component.html',
                styleUrls: ['./embroidery.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class GalleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 2, vars: 0, consts: [[1, "container-fluid", "p-5"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/interior-decor/interior-decor.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/gallery/interior-decor/interior-decor.component.ts ***!
  \**************************************************************************/
/*! exports provided: InteriorDecorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteriorDecorComponent", function() { return InteriorDecorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function InteriorDecorComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function InteriorDecorComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InteriorDecorComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function InteriorDecorComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InteriorDecorComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class InteriorDecorComponent {
    constructor(productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
InteriorDecorComponent.ɵfac = function InteriorDecorComponent_Factory(t) { return new (t || InteriorDecorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
InteriorDecorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InteriorDecorComponent, selectors: [["app-interior-decor"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function InteriorDecorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InteriorDecorComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InteriorDecorComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9pbnRlcmlvci1kZWNvci9pbnRlcmlvci1kZWNvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7QUFBSjs7QUFFQTtFQUNFLHNDQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUFGOztBQUlBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlFO0VBTkY7SUFPSSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtFQURGO0FBQ0Y7O0FBR0U7RUFaRjtJQWFJLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VBQUY7QUFDRjs7QUFJSTtFQURIO0lBRUcsYUFBQTtFQUFGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nYWxsZXJ5L2ludGVyaW9yLWRlY29yL2ludGVyaW9yLWRlY29yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2IoMjQ3LCAyMzYsIDIxNik7XHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcbm1hdC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjM2LCAyMTYsIDAuNTA3KTtcclxuICAvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDAsIDAsIG5vbmU7XHJcbiAgb3V0bGluZS1zdHlsZTogbm9uZTtcclxuICBvdXRsaW5lLW9mZnNldDogMGNoO1xyXG4gIG91dGxpbmUtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4ucGFnaW5fcG9zaXRpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYm90dG9tOiAtNjBweDtcclxufVxyXG5cclxuICBcclxuLmltYWdlX3NpemV7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG1heC1oZWlnaHQ6IDExMHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgIFxyXG4gIH1cclxufSBcclxuIC5kaXNhYmxlZHtcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NXB4KXtcclxuICAgIGRpc3BsYXk6IG5vbmU7ICBcclxuICAgIH1cclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InteriorDecorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interior-decor',
                templateUrl: './interior-decor.component.html',
                styleUrls: ['./interior-decor.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/gallery/reconstruction-of-clothes/reconstruction-of-clothes.component.ts ***!
  \************************************************************************************************/
/*! exports provided: ReconstructionOfClothesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReconstructionOfClothesComponent", function() { return ReconstructionOfClothesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");
/* harmony import */ var _shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/pipe/change-page.pipe */ "./src/app/shared/pipe/change-page.pipe.ts");
/* harmony import */ var _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/pipe/product-by-category.pipe */ "./src/app/shared/pipe/product-by-category.pipe.ts");











function ReconstructionOfClothesComponent_mat_grid_tile_2_slide_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a1) { return ["/product", a1]; };
function ReconstructionOfClothesComponent_mat_grid_tile_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "carousel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReconstructionOfClothesComponent_mat_grid_tile_2_slide_4_Template, 2, 1, "slide", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card-actions", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", a_r3.image);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r3.nameUA);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 5, a_r3.price, "UAH", "symbol-narrow"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, a_r3.id));
} }
function ReconstructionOfClothesComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReconstructionOfClothesComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.cangePage(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u043E\u0440\u0456\u043D\u043A\u0430-", i_r9 + 1, "");
} }
class ReconstructionOfClothesComponent {
    constructor(productData, getUrl) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.cloudProduct = [];
        this.pagedProduct = [];
        this.pageNumber = 1;
    }
    ngOnInit() {
        this.getCategoryName();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.onResize();
        this.calcRows();
        this.getProducts();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }
    getCategoryName() {
        this.categoryName = this.getUrl.snapshot.url.toString();
        // console.log(this.getUrl.snapshot.url.toString() )
    }
    getProducts() {
        this.subscription = this.productData.getFireBaseProduct().subscribe(data => {
            this.cloudProduct = data.map(cat => {
                const data = cat.payload.doc.data();
                return data;
            });
            this.calcPages(this.cloudProduct);
        });
    }
    onResize() {
        if (+this.innerWidth <= 500) {
            return this.breakpoint = 1;
        }
        if (501 <= +this.innerWidth && +this.innerWidth <= 800) {
            return this.breakpoint = 2;
        }
        if (801 <= +this.innerWidth && +this.innerWidth <= 1000) {
            return this.breakpoint = 3;
        }
        if (1001 <= +this.innerWidth && +this.innerWidth <= 1400) {
            return this.breakpoint = 4;
        }
        if (1401 <= +this.innerWidth) {
            return this.breakpoint = 5;
        }
        //  console.log(this.breakpoint)
    }
    calcRows() {
        if (+this.innerHeight <= 500) {
            return this.rowsCalc = 1;
        }
        if (501 <= +this.innerHeight && +this.innerHeight <= 800) {
            return this.rowsCalc = 2;
        }
        if (801 <= +this.innerHeight) {
            return this.rowsCalc = 3;
        }
    }
    calcPages(arr) {
        let numberPages = Math.ceil(this.cloudProduct.filter(val => val.category.nameEN === this.categoryName).length / (this.breakpoint * this.rowsCalc));
        for (let i = 1; i <= numberPages; i++) {
            this.pagedProduct.push(i);
        }
    }
    cangePage(p) {
        this.pageNumber = (p + 1);
    }
}
ReconstructionOfClothesComponent.ɵfac = function ReconstructionOfClothesComponent_Factory(t) { return new (t || ReconstructionOfClothesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ReconstructionOfClothesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReconstructionOfClothesComponent, selectors: [["app-reconstruction-of-clothes"]], decls: 11, vars: 12, consts: [[1, "container", 2, "position", "relative"], ["rowHeight", "7:9", 3, "cols"], [4, "ngFor", "ngForOf"], [1, "pagin_position"], ["mat-button", "", 3, "matMenuTriggerFor"], ["xPosition", "before"], ["afterMenu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "example-card", 2, "max-width", "95%", "max-height", "99%"], [3, "pauseOnFocus"], [1, "disabled"], ["align", "end"], ["mat-button", "", 3, "routerLink"], ["alt", "First slide", 1, "image_size", 3, "src"], ["mat-menu-item", "", 3, "click"]], template: function ReconstructionOfClothesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-grid-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReconstructionOfClothesComponent_mat_grid_tile_2_Template, 14, 11, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "changePage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "productByCategory");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0417\u043C\u0456\u043D\u0456\u0442\u044C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-menu", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReconstructionOfClothesComponent_button_10_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cols", ctx.onResize());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 9, ctx.cloudProduct, ctx.categoryName), ctx.pageNumber, ctx.breakpoint, ctx.rowsCalc));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pagedProduct);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["_MatMenu"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridTile"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardActions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_7__["SlideComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], pipes: [_shared_pipe_change_page_pipe__WEBPACK_IMPORTED_MODULE_8__["ChangePagePipe"], _shared_pipe_product_by_category_pipe__WEBPACK_IMPORTED_MODULE_9__["ProductByCategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\nmat-card[_ngcontent-%COMP%] {\n  background: rgba(247, 236, 216, 0.507);\n  border: 0, 0, none;\n  outline-style: none;\n  outline-offset: 0ch;\n  outline-color: transparent;\n  box-shadow: transparent;\n}\n\n.pagin_position[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0px;\n  bottom: -60px;\n}\n\n.image_size[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  object-fit: cover;\n}\n\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 110px;\n    max-height: 110px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    height: 80px;\n    max-height: 80px;\n    object-position: top;\n  }\n}\n\n@media screen and (max-width: 575px) {\n  .disabled[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9yZWNvbnN0cnVjdGlvbi1vZi1jbG90aGVzL3JlY29uc3RydWN0aW9uLW9mLWNsb3RoZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0FBQUo7O0FBRUE7RUFDRSxzQ0FBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFBRjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJRTtFQU5GO0lBT0ksYUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUFERjtBQUNGOztBQUdFO0VBWkY7SUFhSSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQUFGO0FBQ0Y7O0FBSUk7RUFESDtJQUVHLGFBQUE7RUFBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2FsbGVyeS9yZWNvbnN0cnVjdGlvbi1vZi1jbG90aGVzL3JlY29uc3RydWN0aW9uLW9mLWNsb3RoZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC10aWxlIHtcclxuICAgIC8vIGJhY2tncm91bmQ6IHJnYigyNDcsIDIzNiwgMjE2KTtcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH1cclxubWF0LWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ3LCAyMzYsIDIxNiwgMC41MDcpO1xyXG4gIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMCwgMCwgbm9uZTtcclxuICBvdXRsaW5lLXN0eWxlOiBub25lO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwY2g7XHJcbiAgb3V0bGluZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5wYWdpbl9wb3NpdGlvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3R0b206IC02MHB4O1xyXG59XHJcblxyXG4gIFxyXG4uaW1hZ2Vfc2l6ZXtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgbWF4LWhlaWdodDogMTEwcHg7XHJcbiAgICBvYmplY3QtcG9zaXRpb246dG9wO1xyXG4gICAgXHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIG1heC1oZWlnaHQ6IDgwcHg7XHJcbiAgICBvYmplY3QtcG9zaXRpb246dG9wO1xyXG4gICAgXHJcbiAgfVxyXG59IFxyXG4gLmRpc2FibGVke1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG4gICAgZGlzcGxheTogbm9uZTsgIFxyXG4gICAgfVxyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReconstructionOfClothesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-reconstruction-of-clothes',
                templateUrl: './reconstruction-of-clothes.component.html',
                styleUrls: ['./reconstruction-of-clothes.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MapComponent {
    constructor() { }
    ngOnInit() {
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 9, vars: 0, consts: [[1, "container-fluid", "p-3", "d-flex", "flex-column", "justify-content-around", "align-items-cente"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.606910762404!2d24.008664615096205!3d49.83105287939467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7c31c7be69%3A0x5b7de9065791ca38!2z0LLRg9C70LjRhtGPINCG0LLQsNC90LAg0JvQtdCy0LjQvdGB0YzQutC-0LPQviwgNSwg0JvRjNCy0ZbQsiwg0JvRjNCy0ZbQstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCA3OTAwMA!5e0!3m2!1suk!2sua!4v1599844173773!5m2!1suk!2sua", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 1, "map", 2, "border", "0"], [1, "info", "mt-5", "p-2"], [1, "phone"], ["href", "tel: +380975770888", 1, "btn", "btn-success", "text-light"], ["href", "mailto: https://mail.google.com/mail/u/0/#inbox?compose=new", 1, "btn", "btn-success", "text-light"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: +38 (097) 577-08-88");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "olira.lviv@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".map[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 70vh;\n}\n@media all and (min-width: 700px) and (max-width: 1200px) {\n  .map[_ngcontent-%COMP%] {\n    width: 98%;\n    height: 45vh;\n  }\n}\n.info[_ngcontent-%COMP%] {\n  width: 98%;\n  height: 18vh;\n  font-size: 18px;\n  background-color: rgba(222, 184, 135, 0.575);\n}\n@media all and (min-width: 700px) and (max-width: 1100px) {\n  .info[_ngcontent-%COMP%] {\n    width: 98%;\n    height: 9vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUhKO0lBSVEsVUFBQTtJQUNBLFlBQUE7RUFHTjtBQUNGO0FBREE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtBQUlKO0FBSEk7RUFMSjtJQU1RLFVBQUE7SUFDQSxXQUFBO0VBTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIEBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDcwMHB4KSBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDk4JTtcclxuICAgICAgICBoZWlnaHQ6IDQ1dmg7XHJcbiAgICB9XHJcbn1cclxuLmluZm97XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAxOHZoO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjIsIDE4NCwgMTM1LCAwLjU3NSk7IFxyXG4gICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgIGhlaWdodDogOXZoO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/product/product-details/product-details.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/product/product-details/product-details.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/all-service.service */ "./src/app/shared/services/all-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/carousel/fesm2015/ngx-bootstrap-carousel.js");






function ProductDetailsComponent_slide_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", item_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ProductDetailsComponent {
    constructor(productData, getUrl, location) {
        this.productData = productData;
        this.getUrl = getUrl;
        this.location = location;
    }
    ngOnInit() {
        this.getProduct();
    }
    getProduct() {
        let id = this.getUrl.snapshot.paramMap.get('id');
        // console.log(id)
        this.productData.getIdProducts(id).then((doc) => {
            if (doc.exists) {
                // Convert to City object
                this.product = doc.data();
                // Use a City instance method
                // console.log(this.product);
            }
            else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
    goBack() {
        this.location.back();
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 18, vars: 10, consts: [[1, "jumbotron"], [1, "display-4"], [1, "lead"], [1, "my-4"], [3, "pauseOnFocus"], [4, "ngFor", "ngForOf"], ["href", "#", "role", "button", 1, "btn", "btn-success", "btn-lg"], ["type", "button", 1, "btn", "btn-light", "mt-2", 3, "click"], ["alt", "First slide", 1, "image_size", 3, "src"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "hr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "carousel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProductDetailsComponent_slide_10_Template, 2, 1, "slide", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0417\u0430\u043C\u043E\u0432\u0438\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_16_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0414\u043E \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u0457 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.nameUA);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.nameEN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 6, ctx.product.price, "UAH", "symbol-narrow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pauseOnFocus", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.description);
    } }, directives: [ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_4__["SlideComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: [".jumbotron[_ngcontent-%COMP%] {\n  background-color: rgba(255, 228, 196, 0.37);\n  padding-left: 5rem;\n  padding-right: 5rem;\n  padding-top: 2rem;\n}\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .jumbotron[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n}\n@media screen and (max-width: 320px) {\n  .jumbotron[_ngcontent-%COMP%] {\n    padding-left: 5px;\n    padding-right: 20px;\n  }\n}\n.image_size[_ngcontent-%COMP%] {\n  width: 700px;\n  height: 400px;\n  object-fit: cover;\n}\n@media screen and (min-width: 320px) and (max-width: 575px) {\n  .image_size[_ngcontent-%COMP%] {\n    width: 290px;\n    height: 150px;\n    max-height: 150px;\n    object-fit: cover;\n    object-position: top;\n  }\n}\n@media screen and (max-width: 320px) {\n  .image_size[_ngcontent-%COMP%] {\n    width: 240px;\n    height: 140px;\n    object-fit: cover;\n    object-position: top;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSjtBQUFJO0VBTEo7SUFNUSxrQkFBQTtJQUNBLG1CQUFBO0VBR047QUFDRjtBQUZJO0VBVEo7SUFVUSxpQkFBQTtJQUNBLG1CQUFBO0VBS047QUFDRjtBQUZBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUtKO0FBRkk7RUFOSjtJQVFNLFlBQUE7SUFDQSxhQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBSUo7QUFDRjtBQUZJO0VBZko7SUFpQk0sWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VBSUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjI4LCAxOTYsIDAuMzcpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA1NzVweCl7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbn1cclxuLmltYWdlX3NpemV7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBcclxuICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDogNTc1cHgpe1xyXG5cclxuICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgIG9iamVjdC1wb3NpdGlvbjp0b3A7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xyXG5cclxuICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgb2JqZWN0LXBvc2l0aW9uOnRvcDtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgfSBcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: src_app_shared_services_all_service_service__WEBPACK_IMPORTED_MODULE_1__["AllServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/models/category.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/category.model.ts ***!
  \*************************************************/
/*! exports provided: Category */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return Category; });
class Category {
    constructor(id, nameUA, nameEN) {
        this.id = id;
        this.nameUA = nameUA;
        this.nameEN = nameEN;
    }
}


/***/ }),

/***/ "./src/app/shared/models/product.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/models/product.model.ts ***!
  \************************************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, category, nameUA, nameEN, description, price, count = 1, image) {
        this.id = id;
        this.category = category;
        this.nameUA = nameUA;
        this.nameEN = nameEN;
        this.description = description;
        this.price = price;
        this.count = count;
        this.image = image;
    }
}


/***/ }),

/***/ "./src/app/shared/pipe/change-page.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipe/change-page.pipe.ts ***!
  \*************************************************/
/*! exports provided: ChangePagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePagePipe", function() { return ChangePagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChangePagePipe {
    transform(value, p, row, column) {
        if (!p) {
            return [];
        }
        if (!row) {
            return value;
        }
        if (!column) {
            return value;
        }
        if (!value) {
            return [];
        }
        let index = +row * (+column);
        switch (+p) {
            // case(0): return value.slice(+p, index)
            // break
            case (1):
                return value.slice(0, index);
                break;
            case (2):
                return value.slice(index, index * (+p));
                break;
            case (3):
                return value.slice(index * (+p - 1), index * (+p));
                break;
            case (4):
                return value.slice(index * (+p - 1), index * (+p));
                break;
            case (5):
                return value.slice(index * (+p - 1), index * (+p));
                break;
            case (6):
                return value.slice(index * (+p - 1), index * (+p));
                break;
            case (7):
                return value.slice(index * (+p - 1), index * (+p));
                break;
        }
    }
}
ChangePagePipe.ɵfac = function ChangePagePipe_Factory(t) { return new (t || ChangePagePipe)(); };
ChangePagePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "changePage", type: ChangePagePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePagePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'changePage'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/pipe/product-by-category.pipe.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipe/product-by-category.pipe.ts ***!
  \*********************************************************/
/*! exports provided: ProductByCategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductByCategoryPipe", function() { return ProductByCategoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProductByCategoryPipe {
    transform(value, args) {
        if (!args) {
            return value;
        }
        if (!value) {
            return [];
        }
        return value.filter(val => val.category.nameEN === args);
    }
}
ProductByCategoryPipe.ɵfac = function ProductByCategoryPipe_Factory(t) { return new (t || ProductByCategoryPipe)(); };
ProductByCategoryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "productByCategory", type: ProductByCategoryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductByCategoryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'productByCategory'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/all-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/all-service.service.ts ***!
  \********************************************************/
/*! exports provided: AllServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllServiceService", function() { return AllServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");



class AllServiceService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    getFireBaseCategories() {
        return this.firestore.collection('categories').snapshotChanges();
    }
    addFirebaseCategory(category) {
        // return this.firestore.collection('arr').doc('arrCategory').set({category{ }});
        return this.firestore.collection('categories').doc(category.id).set(Object.assign({}, category));
    }
    deleteFirebaseCategory(id, category) {
        return this.firestore.collection('categories').doc(category.id).delete();
    }
    addFirebaseProduct(product) {
        return this.firestore.collection('product').doc(product.id).set(Object.assign({}, product));
    }
    getFireBaseProduct() {
        return this.firestore.collection('product').snapshotChanges();
    }
    // getFireBaseProductByCategory() {
    //   return this.firestore.firestore.collection('product').get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //       if(doc.data().category.nameEN== "embroidery"){
    // let x:IProduct = doc.data() as IProduct
    // this.cloudProductByCategory.push(x)
    // }
    // doc.data() is never undefined for query doc snapshots
    // console.log(doc.id, " => ", doc.data().category.nameEN );
    // console.log(this.cloudProductByCategory)
    //     });
    // })
    // }
    // db.collection("cities").where("capital", "==", true)
    // .get()
    // .then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })
    // .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    // });
    getIdProducts(id) {
        return this.firestore.firestore.collection('product').doc(id).get();
    }
}
AllServiceService.ɵfac = function AllServiceService_Factory(t) { return new (t || AllServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"])); };
AllServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AllServiceService, factory: AllServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AuthService {
    constructor(afAuth, firestore, router) {
        this.afAuth = afAuth;
        this.firestore = firestore;
        this.router = router;
    }
    isLogin() {
        return this.userChecker;
    }
    signUp(email, password) {
        this.afAuth.createUserWithEmailAndPassword(email, password)
            .then((userResponse) => {
            const user = {
                id: userResponse.user.uid,
                userName: userResponse.user.email,
                role: 'user'
            };
            this.firestore.collection('users').add(user)
                .then(u => {
                u.get().then(val => {
                    this.currentUser = val.data();
                    this.router.navigate(['/']);
                });
            })
                .catch(err => {
                console.log('Add to firestore', err);
            });
        })
            .catch(err => {
            console.log('Create user', err);
        });
    }
    login(email, password) {
        console.log(email, password);
        this.afAuth.signInWithEmailAndPassword(email, password)
            .then(user => {
            this.firestore.collection('users').ref.where('userName', '==', user.user.email)
                .onSnapshot(snap => {
                snap.forEach(userRef => {
                    this.currentUser = userRef.data();
                    if (userRef.data().role !== 'admin') {
                        this.router.navigate(['/']);
                    }
                    else {
                        this.userChecker = true;
                        this.router.navigate(['/admin']);
                    }
                });
            });
        })
            .catch(err => {
            console.log(err);
        });
    }
    logOut() {
        this.afAuth.signOut()
            .then(() => {
            this.currentUser = null;
            this.userChecker = false;
            this.router.navigate(['/']);
        })
            .catch(err => {
            console.log(err);
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBTIFCb9G8AQ3VgrqwqlRs_bjl_bv7dUoU",
        authDomain: "olira-955dc.firebaseapp.com",
        databaseURL: "https://olira-955dc.firebaseio.com",
        projectId: "olira-955dc",
        storageBucket: "olira-955dc.appspot.com",
        messagingSenderId: "1038888012544",
        appId: "1:1038888012544:web:b0596c56690889df3081e5"
    }
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

module.exports = __webpack_require__(/*! C:\Users\Администратор\Desktop\Kursy\OliraProgect\Olira\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map