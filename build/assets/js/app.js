"use strict";!function(n){n(document).ready(function(){-1<window.location.search.indexOf("suscripcion-ok")&&n(".js-subscription-ok").removeClass("d-none")})}(jQuery),function(n){n(document).ready(function(){-1<window.location.search.indexOf("gracias")&&n(".js-insights-ok").removeClass("d-none")})}(jQuery),function(n){n(document).ready(function(){-1<window.location.search.indexOf("sugerencia")&&n(".js-sugerencia-ok").removeClass("d-none")})}(jQuery),function(o){o(document).ready(function(){var e=".js-message-close";o(e).click(function(n){n.preventDefault(),o(e).parent().parent().slideUp(1e3)})})}(jQuery);
"use strict";$(document).ready(function(){var o;(o=jQuery)(function(){o(document).euCookieLawPopup().init({cookiePolicyUrl:"http://www.biko2.com/",popupPosition:"bottomright",colorStyle:"default",compactStyle:!1,popupTitle:"¿¡Galletita!?",popupText:"Utilizamos cookies para tener estadisticas sobre las visitas.",buttonContinueTitle:"Acepto",buttonLearnmoreTitle:"Más información",buttonLearnmoreOpenInNewWindow:!0,agreementExpiresInDays:30,autoAcceptCookiePolicy:!1,htmlMarkup:o(".eupopup-container")})})});
"use strict";!function(n){window.console||(window.console={}),window.console.log||(window.console.log=function(){}),n.fn.euCookieLawPopup=function(){var i=this;i.params={cookiePolicyUrl:"/?cookie-policy",popupPosition:"top",colorStyle:"default",compactStyle:!1,popupTitle:"This website is using cookies",popupText:"We use cookies to ensure that we give you the best experience on our website. If you continue without changing your settings, we'll assume that you are happy to receive all cookies on this website.",buttonContinueTitle:"Continue",buttonLearnmoreTitle:"Learn&nbsp;more",buttonLearnmoreOpenInNewWindow:!0,agreementExpiresInDays:30,autoAcceptCookiePolicy:!1,htmlMarkup:null},i.vars={INITIALISED:!1,HTML_MARKUP:null,COOKIE_NAME:"EU_COOKIE_LAW_CONSENT"};var e=function(o){var e=new Date,p=24*i.params.agreementExpiresInDays*60*60*1e3;e.setTime(e.getTime()+p);var t="expires="+e.toGMTString();document.cookie=i.vars.COOKIE_NAME+"="+o+"; "+t+";path=/",n(document).trigger("user_cookie_consent_changed",{consent:o})},p=function(){n(".eupopup-container").animate({opacity:0,height:0},200,function(){n(".eupopup-container").hide(0)})};return{init:function(o){!function(o,e,p){if(o){var t=n(o).attr("class")?n(o).attr("class"):"";-1<t.indexOf("eupopup-top")?i.params.popupPosition="top":-1<t.indexOf("eupopup-fixedtop")?i.params.popupPosition="fixedtop":-1<t.indexOf("eupopup-bottomright")?i.params.popupPosition="bottomright":-1<t.indexOf("eupopup-bottomleft")?i.params.popupPosition="bottomleft":-1<t.indexOf("eupopup-bottom")?i.params.popupPosition="bottom":-1<t.indexOf("eupopup-block")&&(i.params.popupPosition="block"),-1<t.indexOf("eupopup-color-default")?i.params.colorStyle="default":-1<t.indexOf("eupopup-color-inverse")&&(i.params.colorStyle="inverse"),-1<t.indexOf("eupopup-style-compact")&&(i.params.compactStyle=!0)}e&&(i.params.htmlMarkup=e),p&&(void 0!==p.cookiePolicyUrl&&(i.params.cookiePolicyUrl=p.cookiePolicyUrl),void 0!==p.popupPosition&&(i.params.popupPosition=p.popupPosition),void 0!==p.colorStyle&&(i.params.colorStyle=p.colorStyle),void 0!==p.popupTitle&&(i.params.popupTitle=p.popupTitle),void 0!==p.popupText&&(i.params.popupText=p.popupText),void 0!==p.buttonContinueTitle&&(i.params.buttonContinueTitle=p.buttonContinueTitle),void 0!==p.buttonLearnmoreTitle&&(i.params.buttonLearnmoreTitle=p.buttonLearnmoreTitle),void 0!==p.buttonLearnmoreOpenInNewWindow&&(i.params.buttonLearnmoreOpenInNewWindow=p.buttonLearnmoreOpenInNewWindow),void 0!==p.agreementExpiresInDays&&(i.params.agreementExpiresInDays=p.agreementExpiresInDays),void 0!==p.autoAcceptCookiePolicy&&(i.params.autoAcceptCookiePolicy=p.autoAcceptCookiePolicy),void 0!==p.htmlMarkup&&(i.params.htmlMarkup=p.htmlMarkup))}(n(".eupopup").first(),n(".eupopup-markup").html(),o),function(){for(var o=!1,e=document.cookie.split(";"),p=0;p<e.length;p++){var t=e[p].trim();0==t.indexOf(i.vars.COOKIE_NAME)&&(o=t.substring(i.vars.COOKIE_NAME.length+1,t.length))}return o}()?n(document).trigger("user_cookie_already_accepted",{consent:!0}):i.vars.INITIALISED||(i.vars.INITIALISED=!0,i.vars.HTML_MARKUP=i.params.htmlMarkup?i.params.htmlMarkup:'<div class="eupopup-container eupopup-container-'+i.params.popupPosition+(i.params.compactStyle?" eupopup-style-compact":"")+" eupopup-color-"+i.params.colorStyle+'"><div class="eupopup-head">'+i.params.popupTitle+'</div><div class="eupopup-body">'+i.params.popupText+'</div><div class="eupopup-buttons"><a href="#" class="eupopup-button eupopup-button_1">'+i.params.buttonContinueTitle+'</a><a href="'+i.params.cookiePolicyUrl+'"'+(i.params.buttonLearnmoreOpenInNewWindow?" target=_blank ":"")+' class="eupopup-button eupopup-button_2">'+i.params.buttonLearnmoreTitle+'</a><div class="clearfix"></div></div><a href="#" class="eupopup-closebutton">x</a></div>',0<n(".eupopup-block").length?n(".eupopup-block").append(i.vars.HTML_MARKUP):n("BODY").append(i.vars.HTML_MARKUP),n(".eupopup-button_1").click(function(){return e(!0),p(),!1}),n(".eupopup-closebutton").click(function(){return e(!0),p(),!1}),n(".eupopup-container").show(),i.params.autoAcceptCookiePolicy&&e(!0))}}}}(jQuery);
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){var n=function(i,y){if(y.getElementsByClassName){var m,z,h=y.documentElement,o=i.Date,a=i.HTMLPictureElement,r="addEventListener",v="getAttribute",n=i[r],u=i.setTimeout,s=i.requestAnimationFrame||u,l=i.requestIdleCallback,f=/^picture$/i,c=["load","error","lazyincluded","_lazyloaded"],d={},p=Array.prototype.forEach,g=function(e,t){return d[t]||(d[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),d[t].test(e[v]("class")||"")&&d[t]},b=function(e,t){g(e,t)||e.setAttribute("class",(e[v]("class")||"").trim()+" "+t)},C=function(e,t){var n;(n=g(e,t))&&e.setAttribute("class",(e[v]("class")||"").replace(n," "))},A=function e(t,n,i){var a=i?r:"removeEventListener";i&&e(t,n),c.forEach(function(e){t[a](e,n)})},E=function(e,t,n,i,a){var o=y.createEvent("Event");return n||(n={}),n.instance=m,o.initEvent(t,!i,!a),o.detail=n,e.dispatchEvent(o),o},_=function(e,t){var n;!a&&(n=i.picturefill||z.pf)?(t&&t.src&&!e[v]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},M=function(e,t,n){for(n=n||e.offsetWidth;n<z.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},N=(Ce=[],Ae=be=[],(_e=function(e,t){pe&&!t?e.apply(this,arguments):(Ae.push(e),ge||(ge=!0,(y.hidden?u:s)(Ee)))})._lsFlush=Ee=function(){var e=Ae;for(Ae=be.length?Ce:be,ge=!(pe=!0);e.length;)e.shift()();pe=!1},_e),e=function(n,e){return e?function(){N(n)}:function(){var e=this,t=arguments;N(function(){n.apply(e,t)})}},S=function(e){var t,n,i=function(){t=null,e()},a=function e(){var t=o.now()-n;t<99?u(e,99-t):(l||i)(i)};return function(){n=o.now(),t||(t=u(a,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in z=i.lazySizesConfig||i.lazysizesConfig||{},t)e in z||(z[e]=t[e]);i.lazySizesConfig=z,u(function(){z.init&&W()})}();var t=(ee=/^img$/i,te=/^iframe$/i,ne="onscroll"in i&&!/(gle|ing)bot/.test(navigator.userAgent),oe=-1,re=function(e){ae--,(!e||ae<0||!e.target)&&(ae=0)},se=function(e){return null==J&&(J="hidden"==w(y.body,"visibility")),J||"hidden"!=w(e.parentNode,"visibility")&&"hidden"!=w(e,"visibility")},le=function(e,t){var n,i=e,a=se(e);for(I-=t,G+=t,q-=t,j+=t;a&&(i=i.offsetParent)&&i!=y.body&&i!=h;)(a=0<(w(i,"opacity")||1))&&"visible"!=w(i,"overflow")&&(n=i.getBoundingClientRect(),a=j>n.left&&q<n.right&&G>n.top-1&&I<n.bottom+1);return a},K=ce=function(){var e,t,n,i,a,o,r,s,l,c,d,u,f=m.elements;if((H=z.loadMode)&&ae<8&&(e=f.length)){for(t=0,oe++,c=!z.expand||z.expand<1?500<h.clientHeight&&500<h.clientWidth?500:370:z.expand,m._defEx=c,d=c*z.expFactor,u=z.hFac,J=null,ie<d&&ae<1&&2<oe&&2<H&&!y.hidden?(ie=d,oe=0):ie=1<H&&1<oe&&ae<6?c:0;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(ne)if((s=f[t][v]("data-expand"))&&(o=1*s)||(o=ie),l!==o&&(P=innerWidth+o*u,$=innerHeight+o,r=-1*o,l=o),n=f[t].getBoundingClientRect(),(G=n.bottom)>=r&&(I=n.top)<=$&&(j=n.right)>=r*u&&(q=n.left)<=P&&(G||j||q||I)&&(z.loadHidden||se(f[t]))&&(k&&ae<3&&!s&&(H<3||oe<4)||le(f[t],o))){if(he(f[t]),a=!0,9<ae)break}else!a&&k&&!i&&ae<4&&oe<4&&2<H&&(R[0]||z.preloadAfterLoad)&&(R[0]||!s&&(G||j||q||I||"auto"!=f[t][v](z.sizesAttr)))&&(i=R[0]||f[t]);else he(f[t]);i&&!a&&he(i)}},U=ae=ie=0,V=z.throttleDelay,X=z.ricTimeout,Y=function(){Q=!1,U=o.now(),K()},Z=l&&49<X?function(){l(Y,{timeout:X}),X!==z.ricTimeout&&(X=z.ricTimeout)}:e(function(){u(Y)},!0),de=function(e){var t;(e=!0===e)&&(X=33),Q||(Q=!0,(t=V-(o.now()-U))<0&&(t=0),e||t<9?Z():u(Z,t))},fe=e(ue=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(re(e),b(t,z.loadedClass),C(t,z.loadingClass),A(t,ye),E(t,"lazyloaded"))}),ye=function(e){fe({target:e.target})},me=function(e){var t,n=e[v](z.srcsetAttr);(t=z.customMedia[e[v]("data-media")||e[v]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},ze=e(function(e,t,n,i,a){var o,r,s,l,c,d;(c=E(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?b(e,z.autosizesClass):e.setAttribute("sizes",i)),r=e[v](z.srcsetAttr),o=e[v](z.srcAttr),a&&(s=e.parentNode,l=s&&f.test(s.nodeName||"")),d=t.firesLoad||"src"in e&&(r||o||l),c={target:e},b(e,z.loadingClass),d&&(clearTimeout(D),D=u(re,2500),A(e,ye,!0)),l&&p.call(s.getElementsByTagName("source"),me),r?e.setAttribute("srcset",r):o&&!l&&(te.test(e.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(e,o):e.src=o),a&&(r||l)&&_(e,{src:o})),e._lazyRace&&delete e._lazyRace,C(e,z.lazyClass),N(function(){(!d||e.complete&&1<e.naturalWidth)&&(ue(c),e._lazyCache=!0,u(function(){"_lazyCache"in e&&delete e._lazyCache},9))},!0)}),ve=function e(){if(!k){if(o.now()-O<999)return void u(e,999);var t=S(function(){z.loadMode=3,de()});k=!0,z.loadMode=3,de(),n("scroll",function(){3==z.loadMode&&(z.loadMode=2),t()},!0)}},{_:function(){O=o.now(),m.elements=y.getElementsByClassName(z.lazyClass),R=y.getElementsByClassName(z.lazyClass+" "+z.preloadClass),n("scroll",de,!0),n("resize",de,!0),i.MutationObserver?new MutationObserver(de).observe(h,{childList:!0,subtree:!0,attributes:!0}):(h[r]("DOMNodeInserted",de,!0),h[r]("DOMAttrModified",de,!0),setInterval(de,999)),n("hashchange",de,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){y[r](e,de,!0)}),/d$|^c/.test(y.readyState)?ve():(n("load",ve),y[r]("DOMContentLoaded",de),u(ve,2e4)),m.elements.length?(ce(),N._lsFlush()):de()},checkElems:de,unveil:he=function(e){var t,n=ee.test(e.nodeName),i=n&&(e[v](z.sizesAttr)||e[v]("sizes")),a="auto"==i;(!a&&k||!n||!e[v]("src")&&!e.srcset||e.complete||g(e,z.errorClass)||!g(e,z.lazyClass))&&(t=E(e,"lazyunveilread").detail,a&&x.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ae++,ze(e,t,a,i,n))}}),x=(B=e(function(e,t,n,i){var a,o,r;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),f.test(t.nodeName||""))for(a=t.getElementsByTagName("source"),o=0,r=a.length;o<r;o++)a[o].setAttribute("sizes",i);n.detail.dataAttr||_(e,n.detail)}),F=function(e,t,n){var i,a=e.parentNode;a&&(n=M(e,a,n),i=E(e,"lazybeforesizes",{width:n,dataAttr:!!t}),i.defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&B(e,a,i,n))},{_:function(){T=y.getElementsByClassName(z.autosizesClass),n("resize",L)},checkElems:L=S(function(){var e,t=T.length;if(t)for(e=0;e<t;e++)F(T[e])}),updateElem:F}),W=function e(){e.i||(e.i=!0,x._(),t._())};return m={cfg:z,autoSizer:x,loader:t,init:W,uP:_,aC:b,rC:C,hC:g,fire:E,gW:M,rAF:N}}var T,B,F,L;var R,k,D,H,O,P,$,I,q,j,G,J,K,Q,U,V,X,Y,Z,ee,te,ne,ie,ae,oe,re,se,le,ce,de,ue,fe,ye,me,ze,he,ve;var pe,ge,be,Ce,Ae,Ee,_e}(e,e.document);e.lazySizes=n,"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=n)}(window);
"use strict";$(function(){var e={bici:"Lo reconocemos: para <a href='#que' class='c-link'>nosotros</a> es una <a href='#clientes' class='c-link'>suerte</a> tener (casi) <a href='#cosas' class='c-link'>todo</a> a tiro de piedra.",mundial:"Somos esas <a href='#que' class='c-link'>personas</a> que viven en una ciudad (relativamente)  pequeña, pero <a href='#servicios' class='c-link'>trabajan</a> a nivel <a href='#contacto' class='c-link'>mundial</a>.",diversos:"<a href='#que' class='c-link'>Somos</a> tan diversos como un <a href='#servicios' class='c-link'>patchwork</a> (o más). Y <a href='#cosas' class='c-link'>orgullosos</a> de ello.",okupas:"Biko es la suma de (muchas) <a href='#que' class='c-link'>personas</a> y otras tantas <a href='#cosas' class='c-link'>cosas</a>. Larga <a href='#clientes' class='c-link'>vida</a> a los que un día se colaron.",transparentes:"<a href='#que' class='c-link'>Somos</a> (muy) transparentes. Si hay <a href='#cosas' class='c-link'>otra vía</a> mejor (o más barata), te lo <a href='#servicios' class='c-link'>contamos</a>.",openbiko:"El Open de <a href='#que' class='c-link'>Biko</a> es un espacio (abierto y gratuito) en el que <a href='#cosas' class='c-link'>contamos</a> qué se nos pasa por la <a href='#servicios' class='c-link'>cabeza</a>."},o=function(){var o=$(location).attr("href");if(-1<o.indexOf("#"))var a=o.split("#")[1];"undefined"!=e[a]&&$(".js-hero").html(e[a])};o(),$(window).on("hashchange",o);function c(){dataLayer.push({event:"cookie-agreed"})}$(document).euCookieLawPopup().init({cookiePolicyUrl:"http://www.biko2.com/",popupPosition:"bottomright",colorStyle:"default",compactStyle:!1,popupTitle:"¡Una de galletas!",popupText:"Utilizamos cookies propias y de terceros, analíticas y publicitarias para elaboración de perfiles basados en la navegación del usuario.",buttonContinueTitle:"Acepto",buttonLearnmoreTitle:"Más información",buttonLearnmoreOpenInNewWindow:!0,agreementExpiresInDays:30,autoAcceptCookiePolicy:!1,htmlMarkup:$(".c-cookie")}),$(document).bind("user_cookie_already_accepted",function(o,a){c()}),$(document).bind("user_cookie_consent_changed",function(o,a){$(a).attr("consent")?c():dataLayer.push({event:"cookie-rejected"})});var a=function(){0!=$("#porfolio .c-porfolio-carrusel__container").scrollLeft()?$("#porfolio .c-porfolio-carrusel__left").addClass("d-lg-block d-xl-block d-xxl-block"):$("#porfolio .c-porfolio-carrusel__left").removeClass("d-lg-block d-xl-block d-xxl-block")};$(".js-scroll-right").click(function(o){o.preventDefault(),$("#porfolio .c-porfolio-carrusel__container").scrollLeft($("#porfolio .c-porfolio-carrusel__container").scrollLeft()+700),a()}),$(".js-scroll-left").click(function(o){o.preventDefault(),$("#porfolio .c-porfolio-carrusel__container").scrollLeft($("#porfolio .c-porfolio-carrusel__container").scrollLeft()-700),a()})}),$(document).ready(function(){$(".navbar-toggler.collapsed").click(function(){$("body").toggleClass("overflow-hidden")}),$(".navbar-toggler-icon").click(function(){$(".navbar-toggler-icon").toggleClass("navbar-toggler-icon--cerrar")}),$(".nav-link").click(function(){$(".navbar-toggler-icon").toggleClass("navbar-toggler-icon--cerrar")}),$("#navbarNav").find(".js-menu-collapse").click(function(){$(".navbar-collapse").collapse("hide"),$("body").removeClass("overflow-hidden")})}),$(document).ready(function(){function o(){var o=$("#main-wrapper"),a=(o.height(),o.width(),$("#footer")),e=a.height();a.width();o.css({"margin-bottom":e+50})}o(),$(window).resize(function(){o()})});
"use strict";!function(l){var a={ns:"SVG Sprite Polyfill",ajax:function(e,t){var n,o=new XMLHttpRequest;o.open("GET",e,!0),o.onload=function(){200<=o.status&&o.status<400?(n=o.responseText,"function"==typeof t&&t.call(this,n)):console.log("Error reaching the server")},o.onerror=function(){console.log("Connection error")},o.send()},init:function(){var e,t,n,o,r,i,s=l.querySelectorAll("svg > use"),u=a.create('<div id="svg-poly-target" style="position: absolute;height: 0; width: 0;"></div>'),c=[],d=[];for(document.body.insertBefore(u,document.body.childNodes[0]),n=0;n<s.length;n+=1)e=(d=(r=s[n]).getAttribute("xlink:href").split("#"))[0],t=d[1],e&&(c.push(e),r.setAttribute("xlink:href","#"+t));for(c=c.filter(function(e,t){return c.indexOf(e)==t}),o=0;o<c.length;o+=1)i=c[o],a.ajax(i,function(e){document.getElementById("svg-poly-target").innerHTML+=e})},create:function(e){var t=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.firstChild;)t.appendChild(n.firstChild);return t}};/MSIE|Trident/.test(navigator.userAgent)&&document.addEventListener("DOMContentLoaded",function(){a.init()})}((void 0).document);
"use strict";$(function(){var t="c-filtrado__filter",s="c-filtrado__filter--active",e="categoria",r="c-filtrado__item",l="categorias",d="c-filtrado__item--active",o="c-filtrado__item--disabled";function n(a){$(a).find("."+t).removeClass(s)}function c(i,a){$(a).find("."+r).each(function(){var a=this;if(0===i.length)return $(a).removeClass(d),void $(a).removeClass(o);var t=[];$(a).data().hasOwnProperty(l)&&(t=$(a).data(l).trim().split(" ")),0<$(t).filter(i).length?($(a).addClass(d),$(a).removeClass(o)):($(a).removeClass(d),$(a).addClass(o))})}$(".c-filtrado").each(function(){var i=this;$(i).find("."+t).on("click",function(){var a,t=this;$(t).hasClass(s)?(n(i),$(i).find("."+r).removeClass(o),c([],i)):$(t).data().hasOwnProperty(e)&&(n(i),a=i,$(a).find("."+r).addClass(o),console.log($(a).find("."+r)),$(t).addClass(s),c($(t).data(e).trim().split(" "),i));return!1})})});