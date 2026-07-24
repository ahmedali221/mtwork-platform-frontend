import {
  LanguageService
} from "./chunk-AAJABCXF.js";
import {
  CommonModule
} from "./chunk-Z3ORTAM2.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-MQLQGMUZ.js";

// src/features/landingComponents/blog-component/blog-component.ts
var _forTrack0 = ($index, $item) => $item.id;
function BlogComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "article", 7)(1, "div", 8);
    \u0275\u0275domElement(2, "img", 9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 10)(4, "h3", 11);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "span", 12);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "button", 13);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    let tmp_14_0;
    const post_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("src", post_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r1.category);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", (tmp_13_0 = ctx_r1.languageService.translations()) == null ? null : tmp_13_0.blog == null ? null : tmp_13_0.blog.readMore);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_14_0 = ctx_r1.languageService.translations()) == null ? null : tmp_14_0.blog == null ? null : tmp_14_0.blog.readMore, " ");
  }
}
var _BlogComponent = class _BlogComponent {
  constructor() {
    this.languageService = inject(LanguageService);
    this.blogPosts = [
      { id: 1, image: "assets/images/blog/blog-card-image.png", title: "Trusted by 20 big companies", category: "Payroll" },
      { id: 2, image: "assets/images/blog/blog-card-image.png", title: "Trusted by 20 big companies", category: "Payroll" },
      { id: 3, image: "assets/images/blog/blog-card-image.png", title: "Trusted by 20 big companies", category: "Payroll" }
    ];
  }
};
_BlogComponent.\u0275fac = function BlogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BlogComponent)();
};
_BlogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BlogComponent, selectors: [["app-blog-component"]], decls: 12, vars: 3, consts: [[1, "blog"], [1, "blog__header"], ["src", "assets/images/blog/wavey-blog.svg", "alt", "", "aria-hidden", "true", 1, "blog__wavey"], [1, "blog__title"], [1, "blog__subtitle"], ["type", "button", 1, "blog__cta"], [1, "blog__grid"], [1, "blog__card"], [1, "blog__card-media"], ["alt", "", "aria-hidden", "true", 3, "src"], [1, "blog__card-text"], [1, "blog__card-title"], [1, "blog__card-tag"], ["type", "button", 1, "blog__card-cta"]], template: function BlogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "img", 2);
    \u0275\u0275domElementStart(3, "h2", 3);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 4);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "button", 5);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 6);
    \u0275\u0275repeaterCreate(10, BlogComponent_For_11_Template, 10, 5, "article", 7, _forTrack0);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((tmp_0_0 = ctx.languageService.translations()) == null ? null : tmp_0_0.blog == null ? null : tmp_0_0.blog.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_1_0 = ctx.languageService.translations()) == null ? null : tmp_1_0.blog == null ? null : tmp_1_0.blog.subtitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (tmp_2_0 = ctx.languageService.translations()) == null ? null : tmp_2_0.blog == null ? null : tmp_2_0.blog.categoryTag, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.blogPosts);
  }
}, dependencies: [CommonModule], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n  overflow: hidden;\n}\n.blog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding-block: var(--spacing-large-massive) 0;\n  max-inline-size: 1435px;\n  margin-inline: auto;\n}\n.blog__header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: var(--landing-hero-title-max-width);\n  text-align: center;\n}\n.blog__wavey[_ngcontent-%COMP%] {\n  position: absolute;\n  inset-inline-start: 330.51px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.blog__title[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.blog__subtitle[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.blog__cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 165px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 1px solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-hr-highlight-bg);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.blog__grid[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.blog__card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-xl);\n  inline-size: 390px;\n  block-size: 454px;\n  padding: var(--spacing-medium-lg);\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  overflow: hidden;\n}\n.blog__card-media[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 262px;\n  border-radius: var(--radius-8);\n  background: var(--background-bg-netural, #e6e6e6);\n  overflow: hidden;\n}\n.blog__card-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n}\n.blog__card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  inline-size: 100%;\n}\n.blog__card-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold);\n  line-height: 1.4;\n}\n.blog__card-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n  block-size: 32px;\n  padding-inline: var(--spacing-medium-md);\n  border-radius: var(--radius-12);\n  background: var(--landing-analysis-bar-light);\n  color: var(--landing-hr-highlight-bg);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.blog__card-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 121px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .blog[_ngcontent-%COMP%] {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n    max-inline-size: 100%;\n  }\n  .blog__header[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    max-inline-size: var(--landing-hero-title-max-width);\n  }\n  .blog__wavey[_ngcontent-%COMP%] {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 756px);\n    max-inline-size: 90%;\n  }\n  .blog__grid[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    max-inline-size: 796px;\n    margin-inline: auto;\n  }\n}\n@media (max-width: 767px) {\n  .blog__header[_ngcontent-%COMP%] {\n    inline-size: 100%;\n    padding-inline: var(--spacing-medium-lg);\n  }\n  .blog__wavey[_ngcontent-%COMP%] {\n    inset-inline-start: 124.5px;\n    inset-block-start: -5.82px;\n    inline-size: 554.62px;\n    block-size: 41.82px;\n  }\n  .blog__title[_ngcontent-%COMP%] {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .blog__subtitle[_ngcontent-%COMP%] {\n    max-inline-size: 264.69px;\n  }\n  .blog__grid[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .blog__card[_ngcontent-%COMP%] {\n    inline-size: 342px;\n  }\n}\n/*# sourceMappingURL=blog-component.css.map */"] });
var BlogComponent = _BlogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BlogComponent, [{
    type: Component,
    args: [{ selector: "app-blog-component", standalone: true, imports: [CommonModule], template: '<!-- Figma node 3:38140 (light) / 3:51738 (dark, identical) / 3:65336 (mobile) \u2014 Blog section -->\n<section class="blog">\n\n  <!-- Header (3:38141) -->\n  <div class="blog__header">\n    <img class="blog__wavey" src="assets/images/blog/wavey-blog.svg" alt="" aria-hidden="true" />\n    <h2 class="blog__title">{{ languageService.translations()?.blog?.title }}</h2>\n    <p class="blog__subtitle">{{ languageService.translations()?.blog?.subtitle }}</p>\n    <button type="button" class="blog__cta">\n      {{ languageService.translations()?.blog?.categoryTag }}\n    </button>\n  </div>\n\n  <!-- Blog cards (3:38151): 3 \xD7 390\xD7454, gap 16 -->\n  <div class="blog__grid">\n    @for (post of blogPosts; track post.id) {\n      <article class="blog__card">\n        <div class="blog__card-media">\n          <img [src]="post.image" alt="" aria-hidden="true" />\n        </div>\n        <div class="blog__card-text">\n          <h3 class="blog__card-title">{{ post.title }}</h3>\n          <span class="blog__card-tag">{{ post.category }}</span>\n        </div>\n        <button type="button" class="blog__card-cta"\n                [attr.aria-label]="languageService.translations()?.blog?.readMore">\n          {{ languageService.translations()?.blog?.readMore }}\n        </button>\n      </article>\n    }\n  </div>\n\n</section>\n', styles: ["/* src/features/landingComponents/blog-component/blog-component.css */\n:host {\n  display: block;\n  background: var(--landing-impact-bg);\n  font-family: var(--font-family-dm-sans);\n  overflow: hidden;\n}\n.blog {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  padding-block: var(--spacing-large-massive) 0;\n  max-inline-size: 1435px;\n  margin-inline: auto;\n}\n.blog__header {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: var(--landing-hero-title-max-width);\n  text-align: center;\n}\n.blog__wavey {\n  position: absolute;\n  inset-inline-start: 330.51px;\n  inset-block-start: -10px;\n  inline-size: 756px;\n  block-size: 57px;\n  max-inline-size: none;\n}\n.blog__title {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  color: var(--landing-navbar-surface);\n  font-family: var(--typography-h4-font-family);\n  font-size: var(--typography-h4-font-size);\n  font-weight: var(--landing-hero-title-font-weight);\n  line-height: var(--typography-h4-line-height);\n}\n.blog__subtitle {\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  max-inline-size: var(--landing-hero-body-max-width);\n  color: var(--brand-neutral-400);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--body-size);\n  font-weight: 400;\n  line-height: 1.5;\n}\n.blog__cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 165px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 1px solid var(--landing-impact-tab-border);\n  border-radius: var(--radius-50);\n  background: var(--landing-hr-highlight-bg);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n.blog__grid {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing-medium-lg);\n  inline-size: 100%;\n}\n.blog__card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: var(--spacing-medium-xl);\n  inline-size: 390px;\n  block-size: 454px;\n  padding: var(--spacing-medium-lg);\n  border-radius: var(--radius-8);\n  background: var(--ui-bg-surface);\n  box-shadow: 0 6px 24px 0 rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.09);\n  overflow: hidden;\n}\n.blog__card-media {\n  inline-size: 100%;\n  block-size: 262px;\n  border-radius: var(--radius-8);\n  background: var(--background-bg-netural, #e6e6e6);\n  overflow: hidden;\n}\n.blog__card-media img {\n  inline-size: 100%;\n  block-size: 100%;\n  object-fit: cover;\n}\n.blog__card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n  inline-size: 100%;\n}\n.blog__card-title {\n  margin: 0;\n  color: var(--brand-grays-900);\n  font-family: var(--typography-title-font-family);\n  font-size: var(--title-size);\n  font-weight: var(--title-font-weight-bold);\n  line-height: 1.4;\n}\n.blog__card-tag {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing-small-xxxs);\n  block-size: 32px;\n  padding-inline: var(--spacing-medium-md);\n  border-radius: var(--radius-12);\n  background: var(--landing-analysis-bar-light);\n  color: var(--landing-hr-highlight-bg);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n}\n.blog__card-cta {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  inline-size: 121px;\n  block-size: 40px;\n  padding: var(--spacing-small-xs) var(--spacing-medium-md);\n  border: 0;\n  border-radius: var(--radius-8);\n  background: var(--landing-navbar-ink);\n  box-shadow: var(--landing-navbar-neutral-shadow);\n  color: var(--landing-navbar-surface);\n  font-family: var(--font-family-dm-sans);\n  font-size: var(--subtitle-size);\n  font-weight: 400;\n  line-height: 1.5;\n  white-space: nowrap;\n  cursor: pointer;\n}\n@media (min-width: 768px) and (max-width: 1100px) {\n  .blog {\n    padding-inline: var(--spacing-large-xxxl);\n    box-sizing: border-box;\n    max-inline-size: 100%;\n  }\n  .blog__header {\n    inline-size: 100%;\n    max-inline-size: var(--landing-hero-title-max-width);\n  }\n  .blog__wavey {\n    inset-inline-start: 50%;\n    transform: translateX(-50%);\n    inline-size: min(90%, 756px);\n    max-inline-size: 90%;\n  }\n  .blog__grid {\n    flex-wrap: wrap;\n    max-inline-size: 796px;\n    margin-inline: auto;\n  }\n}\n@media (max-width: 767px) {\n  .blog__header {\n    inline-size: 100%;\n    padding-inline: var(--spacing-medium-lg);\n  }\n  .blog__wavey {\n    inset-inline-start: 124.5px;\n    inset-block-start: -5.82px;\n    inline-size: 554.62px;\n    block-size: 41.82px;\n  }\n  .blog__title {\n    font-size: var(--typography-h6-font-size);\n    line-height: var(--typography-h6-line-height);\n  }\n  .blog__subtitle {\n    max-inline-size: 264.69px;\n  }\n  .blog__grid {\n    flex-direction: column;\n    align-items: center;\n  }\n  .blog__card {\n    inline-size: 342px;\n  }\n}\n/*# sourceMappingURL=blog-component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BlogComponent, { className: "BlogComponent", filePath: "src/features/landingcomponents/blog-component/blog-component.ts", lineNumber: 13 });
})();

export {
  BlogComponent
};
//# sourceMappingURL=chunk-TPWSD3WE.js.map
