(()=>{"use strict";var n={735:(n,e,t)=>{t.d(e,{Z:()=>a});var A=t(537),r=t.n(A),i=t(645),o=t.n(i)()(r());o.push([n.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',"",{version:3,sources:["webpack://./node_modules/normalize.css/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n'],sourceRoot:""}]);const a=o},144:(n,e,t)=>{t.d(e,{Z:()=>b});var A=t(537),r=t.n(A),i=t(645),o=t.n(i),a=t(667),s=t.n(a),c=new URL(t(59),t.b),d=new URL(t(289),t.b),l=new URL(t(175),t.b),p=new URL(t(179),t.b),C=new URL(t(611),t.b),E=o()(r());E.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap);"]);var f=s()(c),m=s()(d),h=s()(l),u=s()(p),g=s()(C);E.push([n.id,`*{box-sizing:border-box}:root{--background-primary: #f9f9f9;--background-secondary: #edeff0;--background-white: #ffffff;--color-main: #4a4a68;--family-primary: "Open Sans", sans-serif;--family-secondary: "Merriweather", serif;--wight-bold: 700;--wight-sub: 600;--wight-normal: 400;--size-main: 18px;--size-min: 16px;--mail-ico: url(${f}) no-repeat center center;--phone-ico: url(${m}) no-repeat center center;--birth-ico: url(${h}) no-repeat center center;--sex-ico: url(${u}) no-repeat center center;--site-ico: url(${g}) no-repeat center center}body{margin:0;background-color:var(--background-primary);font-family:var(--family-primary);font-size:var(--size-main);font-weight:var(--wight-normal)}.main-container{width:100%;display:flex;align-items:center;flex-direction:column}.container{max-width:1440px;width:100%;padding:0px 80px;display:flex;justify-content:center}.search{width:100%;display:flex;justify-content:center}.search__wrapper{max-width:65%;width:100%;margin-top:80px}.search__title{font-family:var(--family-secondary);font-size:24px;margin-top:0;color:var(--color-main);font-weight:var(--wight-bold)}.search__container{display:flex;width:100%;gap:24px;padding:24px;background-color:var(--background-secondary);flex-wrap:wrap}.btn{padding:13px 32px 13px 32px;border:none;background-color:#0d326c;color:#fff;width:100%;cursor:pointer}.date{display:flex;gap:8px;flex-direction:column;width:100%;flex:0 0 30%}.date__text{font-family:var(--family-secondary);font-size:var(--size-min);font-weight:var(--wight-sub);line-height:22px;padding:0;margin:0}.date__input{background-color:var(--background-white);padding:13px 32px 13px 32px}.date__btn{margin-top:30px}.card-container{flex-wrap:wrap;margin-top:45px;display:flex;gap:24px;justify-content:center;margin-bottom:60px}.card-container__card{flex:0 0 30%;background-color:var(--background-white);border-radius:2px;gap:24px;border:1px solid rgba(234,234,237,.5019607843);padding:32px 24px 32px 24px}.card__name{font-family:var(--family-secondary);font-size:var(--size-main);font-weight:var(--wight-bold);line-height:25px}.card__list{margin:0;padding:0;display:flex;flex-direction:column;gap:16px}.card__item{display:flex;align-items:center;padding-left:28px;position:relative}.card__item::before{content:"";width:20px;height:20px;left:0;position:absolute}.card__item--mail::before{background:var(--mail-ico)}.card__item--phone::before{background:var(--phone-ico)}.card__item--birth::before{background:var(--birth-ico)}.card__item--sex::before{background:var(--sex-ico)}.card__item--site::before{background:var(--site-ico)}.card__item-text{font-size:var(--size-main);font-weight:var(--wight-normal);line-height:25px;padding:0;margin:0}`,"",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"AAEA,EACC,qBAAA,CAGD,MAEC,6BAAA,CACA,+BAAA,CACA,2BAAA,CAEA,qBAAA,CAGA,yCAAA,CACA,yCAAA,CAEA,iBAAA,CACA,gBAAA,CACA,mBAAA,CAEA,iBAAA,CACA,gBAAA,CAEA,2EAAA,CACA,4EAAA,CACA,4EAAA,CACA,0EAAA,CACA,2EAAA,CAGD,KACC,QAAA,CACA,0CAAA,CACA,iCAAA,CACA,0BAAA,CACA,+BAAA,CAGD,gBACC,UAAA,CACA,YAAA,CACA,kBAAA,CACA,qBAAA,CAGD,WACC,gBAAA,CACA,UAAA,CACA,gBAAA,CACA,YAAA,CACA,sBAAA,CAGD,QACC,UAAA,CACA,YAAA,CACA,sBAAA,CACA,iBACC,aAAA,CACA,UAAA,CACA,eAAA,CAED,eACC,mCAAA,CACA,cAAA,CACA,YAAA,CACA,uBAAA,CACA,6BAAA,CAED,mBACC,YAAA,CACA,UAAA,CACA,QAAA,CACA,YAAA,CACA,4CAAA,CACA,cAAA,CAIF,KACC,2BAAA,CACA,WAAA,CACA,wBAAA,CACA,UAAA,CACA,UAAA,CACA,cAAA,CAGD,MACC,YAAA,CACA,OAAA,CACA,qBAAA,CACA,UAAA,CACA,YAAA,CACA,YACC,mCAAA,CACA,yBAAA,CACA,4BAAA,CACA,gBAAA,CACA,SAAA,CACA,QAAA,CAED,aACC,wCAAA,CACA,2BAAA,CAED,WACC,eAAA,CAIF,gBACC,cAAA,CACA,eAAA,CACA,YAAA,CACA,QAAA,CACA,sBAAA,CACA,kBAAA,CACA,sBACC,YAAA,CACA,wCAAA,CACA,iBAAA,CACA,QAAA,CACA,8CAAA,CACA,2BAAA,CAKD,YACC,mCAAA,CACA,0BAAA,CACA,6BAAA,CACA,gBAAA,CAGD,YACC,QAAA,CACA,SAAA,CACA,YAAA,CACA,qBAAA,CACA,QAAA,CAGD,YACC,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,iBAAA,CACA,oBACC,UAAA,CACA,UAAA,CACA,WAAA,CACA,MAAA,CACA,iBAAA,CAGA,0BACC,0BAAA,CAID,2BACC,2BAAA,CAID,2BACC,2BAAA,CAID,yBACC,yBAAA,CAID,0BACC,0BAAA,CAKH,iBACC,0BAAA,CACA,+BAAA,CACA,gBAAA,CACA,SAAA,CACA,QAAA",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;600&display=swap');\n\n* {\n\tbox-sizing: border-box;\n}\n\n:root {\n\t/* color */\n\t--background-primary: #f9f9f9;\n\t--background-secondary: #edeff0;\n\t--background-white: #ffffff;\n\n\t--color-main: #4a4a68;\n\n\t/* typography */\n\t--family-primary: 'Open Sans', sans-serif;\n\t--family-secondary: 'Merriweather', serif;\n\n\t--wight-bold: 700;\n\t--wight-sub: 600;\n\t--wight-normal: 400;\n\n\t--size-main: 18px;\n\t--size-min: 16px;\n\n\t--mail-ico: url('/src/assets/mail.svg') no-repeat center center;\n\t--phone-ico: url('/src/assets/phone.svg') no-repeat center center;\n\t--birth-ico: url('/src/assets/birth.svg') no-repeat center center;\n\t--sex-ico: url('/src/assets/sex.svg') no-repeat center center;\n\t--site-ico: url('/src/assets/site.svg') no-repeat center center;\n}\n\nbody {\n\tmargin: 0;\n\tbackground-color: var(--background-primary);\n\tfont-family: var(--family-primary);\n\tfont-size: var(--size-main);\n\tfont-weight: var(--wight-normal);\n}\n\n.main-container {\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-direction: column;\n}\n\n.container {\n\tmax-width: 1440px;\n\twidth: 100%;\n\tpadding: 0px 80px;\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n.search {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\t&__wrapper {\n\t\tmax-width: 65%;\n\t\twidth: 100%;\n\t\tmargin-top: 80px;\n\t}\n\t&__title {\n\t\tfont-family: var(--family-secondary);\n\t\tfont-size: 24px;\n\t\tmargin-top: 0;\n\t\tcolor: var(--color-main);\n\t\tfont-weight: var(--wight-bold);\n\t}\n\t&__container {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tgap: 24px;\n\t\tpadding: 24px;\n\t\tbackground-color: var(--background-secondary);\n\t\tflex-wrap: wrap;\n\t}\n}\n\n.btn {\n\tpadding: 13px 32px 13px 32px;\n\tborder: none;\n\tbackground-color: #0d326c;\n\tcolor: #ffffff;\n\twidth: 100%;\n\tcursor: pointer;\n}\n\n.date {\n\tdisplay: flex;\n\tgap: 8px;\n\tflex-direction: column;\n\twidth: 100%;\n\tflex: 0 0 30%;\n\t&__text {\n\t\tfont-family: var(--family-secondary);\n\t\tfont-size: var(--size-min);\n\t\tfont-weight: var(--wight-sub);\n\t\tline-height: 22px;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\t&__input {\n\t\tbackground-color: var(--background-white);\n\t\tpadding: 13px 32px 13px 32px;\n\t}\n\t&__btn {\n\t\tmargin-top: 30px;\n\t}\n}\n\n.card-container {\n\tflex-wrap: wrap;\n\tmargin-top: 45px;\n\tdisplay: flex;\n\tgap: 24px;\n\tjustify-content: center;\n\tmargin-bottom: 60px;\n\t&__card {\n\t\tflex: 0 0 30%;\n\t\tbackground-color: var(--background-white);\n\t\tborder-radius: 2px;\n\t\tgap: 24px;\n\t\tborder: 1px solid #eaeaed80;\n\t\tpadding: 32px 24px 32px 24px;\n\t}\n}\n\n.card {\n\t&__name {\n\t\tfont-family: var(--family-secondary);\n\t\tfont-size: var(--size-main);\n\t\tfont-weight: var(--wight-bold);\n\t\tline-height: 25px;\n\t}\n\n\t&__list {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 16px;\n\t}\n\n\t&__item {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tpadding-left: 28px;\n\t\tposition: relative;\n\t\t&::before {\n\t\t\tcontent: '';\n\t\t\twidth: 20px;\n\t\t\theight: 20px;\n\t\t\tleft: 0;\n\t\t\tposition: absolute;\n\t\t}\n\t\t&--mail {\n\t\t\t&::before {\n\t\t\t\tbackground: var(--mail-ico);\n\t\t\t}\n\t\t}\n\t\t&--phone {\n\t\t\t&::before {\n\t\t\t\tbackground: var(--phone-ico);\n\t\t\t}\n\t\t}\n\t\t&--birth {\n\t\t\t&::before {\n\t\t\t\tbackground: var(--birth-ico);\n\t\t\t}\n\t\t}\n\t\t&--sex {\n\t\t\t&::before {\n\t\t\t\tbackground: var(--sex-ico);\n\t\t\t}\n\t\t}\n\t\t&--site {\n\t\t\t&::before {\n\t\t\t\tbackground: var(--site-ico);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__item-text {\n\t\tfont-size: var(--size-main);\n\t\tfont-weight: var(--wight-normal);\n\t\tline-height: 25px;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n}\n"],sourceRoot:""}]);const b=E},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",A=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),A&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),A&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,A,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var o={};if(A)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(o[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);A&&o[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var A=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(A),i="/*# ".concat(r," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,A=0;A<e.length;A++)if(e[A].identifier===n){t=A;break}return t}function A(n,A){for(var i={},o=[],a=0;a<n.length;a++){var s=n[a],c=A.base?s[0]+A.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var p=t(l),C={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(C);else{var E=r(C,A);A.byIndex=a,e.splice(a,0,{identifier:l,updater:E,references:1})}o.push(l)}return o}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=A(n=n||[],r=r||{});return function(n){n=n||[];for(var o=0;o<i.length;o++){var a=t(i[o]);e[a].references--}for(var s=A(n,r),c=0;c<i.length;c++){var d=t(i[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=s}}},569:n=>{var e={};n.exports=function(n,t){var A=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!A)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");A.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var A="";t.supports&&(A+="@supports (".concat(t.supports,") {")),t.media&&(A+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(A+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),A+=t.css,r&&(A+="}"),t.media&&(A+="}"),t.supports&&(A+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(A+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(A,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},175:(n,e,t)=>{n.exports=t.p+"images/birth.218c2e0399ae766ba4c0.svg"},59:(n,e,t)=>{n.exports=t.p+"images/mail.2e89878ec08c6d6cf44d.svg"},289:(n,e,t)=>{n.exports=t.p+"images/phone.40f9c5bfebd77c4f8ac9.svg"},179:(n,e,t)=>{n.exports=t.p+"images/sex.c7a11e36a39a473915f8.svg"},611:(n,e,t)=>{n.exports=t.p+"images/site.91229949b362fe918148.svg"}},e={};function t(A){var r=e[A];if(void 0!==r)return r.exports;var i=e[A]={id:A,exports:{}};return n[A](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var A in e)t.o(e,A)&&!t.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:e[A]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var A=e.getElementsByTagName("script");if(A.length)for(var r=A.length-1;r>-1&&!n;)n=A[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n+"../"})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),A=t(795),r=t.n(A),i=t(569),o=t.n(i),a=t(565),s=t.n(a),c=t(216),d=t.n(c),l=t(589),p=t.n(l),C=t(735),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=o().bind(null,"head"),E.domAPI=r(),E.insertStyleElement=d(),e()(C.Z,E),C.Z&&C.Z.locals&&C.Z.locals,console.log("Hello World!");var f=t(144),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=o().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals})()})();
//# sourceMappingURL=bundle.b8f0b444907a26c4d802.js.map