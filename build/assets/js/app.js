"use strict";!function(n){n(document).ready(function(){-1<window.location.search.indexOf("suscripcion-ok")&&n(".js-subscription-ok").removeClass("d-none")})}(jQuery),function(n){n(document).ready(function(){-1<window.location.search.indexOf("gracias")&&n(".js-insights-ok").removeClass("d-none")})}(jQuery),function(n){n(document).ready(function(){-1<window.location.search.indexOf("sugerencia")&&n(".js-sugerencia-ok").removeClass("d-none")})}(jQuery),function(o){o(document).ready(function(){var e=".js-message-close";o(e).click(function(n){n.preventDefault(),o(e).parent().parent().slideUp(1e3)})})}(jQuery);
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var t=function(l,k){"use strict";if(k.getElementsByClassName){var D,H,O=k.documentElement,c=l.Date,a=l.HTMLPictureElement,u="addEventListener",P="getAttribute",$=l[u],I=l.setTimeout,d=l.requestAnimationFrame||I,f=l.requestIdleCallback,q=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],i={},j=Array.prototype.forEach,G=function e(t,n){return i[n]||(i[n]=new RegExp("(\\s|^)"+n+"(\\s|$)")),i[n].test(t[P]("class")||"")&&i[n]},J=function e(t,n){G(t,n)||t.setAttribute("class",(t[P]("class")||"").trim()+" "+n)},K=function e(t,n){var i;(i=G(t,n))&&t.setAttribute("class",(t[P]("class")||"").replace(i," "))},Q=function e(t,n,i){var a=i?u:"removeEventListener";i&&e(t,n),o.forEach(function(e){t[a](e,n)})},U=function e(t,n,i,a,o){var r=k.createEvent("Event");return i||(i={}),i.instance=D,r.initEvent(n,!a,!o),r.detail=i,t.dispatchEvent(r),r},V=function e(t,n){var i;!a&&(i=l.picturefill||H.pf)?(n&&n.src&&!t[P]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},X=function e(t,n){return(getComputedStyle(t,null)||{})[n]},r=function e(t,n,i){for(i=i||t.offsetWidth;i<H.minSize&&n&&!t._lazysizesWidth;)i=n.offsetWidth,n=n.parentNode;return i},Y=function(){var i,a,n=[],o=[],r=n,s=function e(){var t=r;for(r=n.length?o:n,i=!0,a=!1;t.length;)t.shift()();i=!1},e=function e(t,n){i&&!n?t.apply(this,arguments):(r.push(t),a||(a=!0,(k.hidden?I:d)(s)))};return e._lsFlush=s,e}(),Z=function e(n,t){return t?function(){Y(n)}:function(){var e=this,t=arguments;Y(function(){n.apply(e,t)})}},e=function e(t){var n,i=0,a=H.throttleDelay,o=H.ricTimeout,r=function e(){n=!1,i=c.now(),t()},s=f&&o>49?function(){f(r,{timeout:o}),o!==H.ricTimeout&&(o=H.ricTimeout)}:Z(function(){I(r)},!0);return function(e){var t;(e=!0===e)&&(o=33),n||(n=!0,t=a-(c.now()-i),t<0&&(t=0),e||t<9?s():I(s,t))}},ee=function e(t){var n,i,a=99,o=function e(){n=null,t()},r=function e(){var t=c.now()-i;t<a?I(e,a-t):(f||o)(o)};return function(){i=c.now(),n||(n=I(r,a))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};H=l.lazySizesConfig||l.lazysizesConfig||{};for(e in t)e in H||(H[e]=t[e]);l.lazySizesConfig=H,I(function(){H.init&&n()})}();var t=function(){var m,z,d,v,n,h,p,g,b,C,A,E,r=/^img$/i,f=/^iframe$/i,_="onscroll"in l&&!/(gle|ing)bot/.test(navigator.userAgent),w=0,M=0,N=0,S=-1,y=function e(t){N--,(!t||N<0||!t.target)&&(N=0)},x=function e(t){return null==E&&(E="hidden"==X(k.body,"visibility")),E||"hidden"!=X(t.parentNode,"visibility")&&"hidden"!=X(t,"visibility")},W=function e(t,n){var i,a=t,o=x(t);for(g-=n,A+=n,b-=n,C+=n;o&&(a=a.offsetParent)&&a!=k.body&&a!=O;)(o=(X(a,"opacity")||1)>0)&&"visible"!=X(a,"overflow")&&(i=a.getBoundingClientRect(),o=C>i.left&&b<i.right&&A>i.top-1&&g<i.bottom+1);return o},t=function e(){var t,n,i,a,o,r,s,l,c,u,d,f,y=D.elements;if((v=H.loadMode)&&N<8&&(t=y.length)){for(n=0,S++,u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand,D._defEx=u,d=u*H.expFactor,f=H.hFac,E=null,M<d&&N<1&&S>2&&v>2&&!k.hidden?(M=d,S=0):M=v>1&&S>1&&N<6?u:w;n<t;n++)if(y[n]&&!y[n]._lazyRace)if(_)if((l=y[n][P]("data-expand"))&&(r=1*l)||(r=M),c!==r&&(h=innerWidth+r*f,p=innerHeight+r,s=-1*r,c=r),i=y[n].getBoundingClientRect(),(A=i.bottom)>=s&&(g=i.top)<=p&&(C=i.right)>=s*f&&(b=i.left)<=h&&(A||C||b||g)&&(H.loadHidden||x(y[n]))&&(z&&N<3&&!l&&(v<3||S<4)||W(y[n],r))){if(R(y[n]),o=!0,N>9)break}else!o&&z&&!a&&N<4&&S<4&&v>2&&(m[0]||H.preloadAfterLoad)&&(m[0]||!l&&(A||C||b||g||"auto"!=y[n][P](H.sizesAttr)))&&(a=m[0]||y[n]);else R(y[n]);a&&!o&&R(a)}},i=e(t),T=function e(t){var n=t.target;if(n._lazyCache)return void delete n._lazyCache;y(t),J(n,H.loadedClass),K(n,H.loadingClass),Q(n,B),U(n,"lazyloaded")},a=Z(T),B=function e(t){a({target:t.target})},F=function e(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}},L=function e(t){var n,i=t[P](H.srcsetAttr);(n=H.customMedia[t[P]("data-media")||t[P]("media")])&&t.setAttribute("media",n),i&&t.setAttribute("srcset",i)},s=Z(function(e,t,n,i,a){var o,r,s,l,c,u;(c=U(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?J(e,H.autosizesClass):e.setAttribute("sizes",i)),r=e[P](H.srcsetAttr),o=e[P](H.srcAttr),a&&(s=e.parentNode,l=s&&q.test(s.nodeName||"")),u=t.firesLoad||"src"in e&&(r||o||l),c={target:e},J(e,H.loadingClass),u&&(clearTimeout(d),d=I(y,2500),Q(e,B,!0)),l&&j.call(s.getElementsByTagName("source"),L),r?e.setAttribute("srcset",r):o&&!l&&(f.test(e.nodeName)?F(e,o):e.src=o),a&&(r||l)&&V(e,{src:o})),e._lazyRace&&delete e._lazyRace,K(e,H.lazyClass),Y(function(){(!u||e.complete&&e.naturalWidth>1)&&(T(c),e._lazyCache=!0,I(function(){"_lazyCache"in e&&delete e._lazyCache},9))},!0)}),R=function e(t){var n,i=r.test(t.nodeName),a=i&&(t[P](H.sizesAttr)||t[P]("sizes")),o="auto"==a;(!o&&z||!i||!t[P]("src")&&!t.srcset||t.complete||G(t,H.errorClass)||!G(t,H.lazyClass))&&(n=U(t,"lazyunveilread").detail,o&&te.updateElem(t,!0,t.offsetWidth),t._lazyRace=!0,N++,s(t,n,o,a,i))},o=function e(){if(!z){if(c.now()-n<999)return void I(e,999);var t=ee(function(){H.loadMode=3,i()});z=!0,H.loadMode=3,i(),$("scroll",function(){3==H.loadMode&&(H.loadMode=2),t()},!0)}};return{_:function e(){n=c.now(),D.elements=k.getElementsByClassName(H.lazyClass),m=k.getElementsByClassName(H.lazyClass+" "+H.preloadClass),$("scroll",i,!0),$("resize",i,!0),l.MutationObserver?new MutationObserver(i).observe(O,{childList:!0,subtree:!0,attributes:!0}):(O[u]("DOMNodeInserted",i,!0),O[u]("DOMAttrModified",i,!0),setInterval(i,999)),$("hashchange",i,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){k[u](e,i,!0)}),/d$|^c/.test(k.readyState)?o():($("load",o),k[u]("DOMContentLoaded",i),I(o,2e4)),D.elements.length?(t(),Y._lsFlush()):i()},checkElems:i,unveil:R}}(),te=function(){var i,o=Z(function(e,t,n,i){var a,o,r;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),q.test(t.nodeName||""))for(a=t.getElementsByTagName("source"),o=0,r=a.length;o<r;o++)a[o].setAttribute("sizes",i);n.detail.dataAttr||V(e,n.detail)}),a=function e(t,n,i){var e,a=t.parentNode;a&&(i=r(t,a,i),e=U(t,"lazybeforesizes",{width:i,dataAttr:!!n}),e.defaultPrevented||(i=e.detail.width)&&i!==t._lazysizesWidth&&o(t,a,e,i))},e=function e(){var t,n=i.length;if(n)for(t=0;t<n;t++)a(i[t])},t=ee(e);return{_:function e(){i=k.getElementsByClassName(H.autosizesClass),$("resize",t)},checkElems:t,updateElem:a}}(),n=function e(){e.i||(e.i=!0,te._(),t._())};return D={cfg:H,autoSizer:te,loader:t,init:n,uP:V,aC:J,rC:K,hC:G,fire:U,gW:r,rAF:Y}}}(e,e.document);e.lazySizes=t,"object"==("undefined"==typeof module?"undefined":_typeof(module))&&module.exports&&(module.exports=t)}(window);
"use strict";$(function(){function o(){var o,a=$(location).attr("href");-1<a.indexOf("#")&&(o=a.split("#")[1]),"undefined"!=e[o]&&$(".js-hero").html(e[o])}var e={bici:"Lo reconocemos: para <a href='#que' class='c-link'>nosotros</a> es una <a href='#clientes' class='c-link'>suerte</a> tener (casi) <a href='#cosas' class='c-link'>todo</a> a tiro de piedra.",mundial:"Somos esas <a href='#que' class='c-link'>personas</a> que viven en una ciudad (relativamente)  pequeña, pero <a href='#servicios' class='c-link'>trabajan</a> a nivel <a href='#contacto' class='c-link'>mundial</a>.",diversos:"<a href='#que' class='c-link'>Somos</a> tan diversos como un <a href='#servicios' class='c-link'>patchwork</a> (o más). Y <a href='#cosas' class='c-link'>orgullosos</a> de ello.",okupas:"Biko es la suma de (muchas) <a href='#que' class='c-link'>personas</a> y otras tantas <a href='#cosas' class='c-link'>cosas</a>. Larga <a href='#clientes' class='c-link'>vida</a> a los que un día se colaron.",transparentes:"<a href='#que' class='c-link'>Somos</a> (muy) transparentes. Si hay <a href='#cosas' class='c-link'>otra vía</a> mejor (o más barata), te lo <a href='#servicios' class='c-link'>contamos</a>.",openbiko:"El Open de <a href='#que' class='c-link'>Biko</a> es un espacio (abierto y gratuito) en el que <a href='#cosas' class='c-link'>contamos</a> qué se nos pasa por la <a href='#servicios' class='c-link'>cabeza</a>."};o(),$(window).on("hashchange",o),$(document).euCookieLawPopup().init({cookiePolicyUrl:"http://www.biko2.com/",popupPosition:"bottomright",colorStyle:"default",compactStyle:!1,popupTitle:"¡Una de galletas!",popupText:"Utilizamos cookies propias y de terceros, analíticas y publicitarias para elaboración de perfiles basados en la navegación del usuario.",buttonContinueTitle:"Acepto",buttonLearnmoreTitle:"Más información",buttonLearnmoreOpenInNewWindow:!0,agreementExpiresInDays:30,autoAcceptCookiePolicy:!1,htmlMarkup:$(".c-cookie")});function a(){0!=$("#porfolio .c-porfolio-carrusel__container").scrollLeft()?$("#porfolio .c-porfolio-carrusel__left").addClass("d-lg-block d-xl-block d-xxl-block"):$("#porfolio .c-porfolio-carrusel__left").removeClass("d-lg-block d-xl-block d-xxl-block")}$(".js-scroll-right").click(function(o){o.preventDefault(),$("#porfolio .c-porfolio-carrusel__container").scrollLeft($("#porfolio .c-porfolio-carrusel__container").scrollLeft()+700),a()}),$(".js-scroll-left").click(function(o){o.preventDefault(),$("#porfolio .c-porfolio-carrusel__container").scrollLeft($("#porfolio .c-porfolio-carrusel__container").scrollLeft()-700),a()}),$(".js-show-cookies").click(function(o){o.preventDefault(),$("#cookies").show()})}),$(document).ready(function(){$(".navbar-toggler.collapsed").click(function(){$("body").toggleClass("overflow-hidden")}),$(".navbar-toggler-icon").click(function(){$(".navbar-toggler-icon").toggleClass("navbar-toggler-icon--cerrar")}),$(".nav-link").click(function(){$(".navbar-toggler-icon").toggleClass("navbar-toggler-icon--cerrar")}),$("#navbarNav").find(".js-menu-collapse").click(function(){$(".navbar-collapse").collapse("hide"),$("body").removeClass("overflow-hidden")})}),$(document).ready(function(){function o(){var o=$("#main-wrapper"),a=(o.height(),o.width(),$("#footer")),e=a.height();a.width();o.css({"margin-bottom":e+50})}o(),$(window).resize(function(){o()})}),$(document).ready(function(){$("#action-gift").hover(function(){$(".insights-gif__icon").toggleClass("insights-gif__anima")})});
"use strict";$(function(){var t="c-filtrado__filter",s="c-filtrado__filter--active",e="categoria",r="c-filtrado__item",l="categorias",d="c-filtrado__item--active",o="c-filtrado__item--disabled";function n(a){$(a).find("."+t).removeClass(s)}function c(i,a){$(a).find("."+r).each(function(){var a=this;if(0===i.length)return $(a).removeClass(d),void $(a).removeClass(o);var t=[];$(a).data().hasOwnProperty(l)&&(t=$(a).data(l).trim().split(" ")),0<$(t).filter(i).length?($(a).addClass(d),$(a).removeClass(o)):($(a).removeClass(d),$(a).addClass(o))})}$(".c-filtrado").each(function(){var i=this;$(i).find("."+t).on("click",function(){var a,t=this;return $(t).hasClass(s)?(n(i),$(i).find("."+r).removeClass(o),c([],i)):$(t).data().hasOwnProperty(e)&&(n(i),a=i,$(a).find("."+r).addClass(o),console.log($(a).find("."+r)),$(t).addClass(s),c($(t).data(e).trim().split(" "),i)),!1})})});