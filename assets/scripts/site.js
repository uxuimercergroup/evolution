//--------------------------------------------------------------------------------------------------------
// Mercer Evolution - Site JS
// DATE - June 13, 2014
// AUTHOR - Doug Fraize, Matthew Holmes, Vinod Bhatt
//--------------------------------------------------------------------------------------------------------

// =======================================================================================================
// JAVASCRIPT LIBRARIES
// =======================================================================================================

/**
  *
  * jPanelMenu 1.3.0 (http://jpanelmenu.com)
  * By Anthony Colangelo (http://acolangelo.com)
  *
* */
(function(e){e.jPanelMenu=function(t){if(typeof t=="undefined"||t==null)t={};var n={options:e.extend({menu:"#menu",trigger:".menu-trigger",excludedPanelContent:"style, script",direction:"left",openPosition:"250px",animated:!0,closeOnContentClick:!0,keyboardShortcuts:[{code:27,open:!1,close:!0},{code:37,open:!1,close:!0},{code:39,open:!0,close:!0},{code:77,open:!0,close:!0}],duration:150,openDuration:t.duration||150,closeDuration:t.duration||150,easing:"ease-in-out",openEasing:t.easing||"ease-in-out",closeEasing:t.easing||"ease-in-out",before:function(){},beforeOpen:function(){},beforeClose:function(){},after:function(){},afterOpen:function(){},afterClose:function(){},beforeOn:function(){},afterOn:function(){},beforeOff:function(){},afterOff:function(){}},t),settings:{transitionsSupported:"WebkitTransition"in document.body.style||"MozTransition"in document.body.style||"msTransition"in document.body.style||"OTransition"in document.body.style||"Transition"in document.body.style,shiftFixedChildren:!1,panelPosition:"relative",positionUnits:"px"},menu:"#jPanelMenu-menu",panel:".jPanelMenu-panel",fixedChildren:[],timeouts:{},clearTimeouts:function(){clearTimeout(n.timeouts.open);clearTimeout(n.timeouts.afterOpen);clearTimeout(n.timeouts.afterClose)},setPositionUnits:function(){var e=!1,t=["%","px","em"];for(unitID in t){var r=t[unitID];if(n.options.openPosition.toString().substr(-r.length)==r){e=!0;n.settings.positionUnits=r}}e||(n.options.openPosition=parseInt(n.options.openPosition)+n.settings.positionUnits)},checkFixedChildren:function(){n.disableTransitions();var t={position:e(n.panel).css("position")};t[n.options.direction]=e(n.panel).css(n.options.direction)=="auto"?0:e(n.panel).css(n.options.direction);e(n.panel).find("> *").each(function(){e(this).css("position")=="fixed"&&e(this).css(n.options.direction)=="auto"&&n.fixedChildren.push(this)});if(n.fixedChildren.length>0){var r={position:"relative"};r[n.options.direction]="1px";n.setPanelStyle(r);parseInt(e(n.fixedChildren[0]).offset().left)==0&&(n.settings.shiftFixedChildren=!0)}n.setPanelStyle(t)},setjPanelMenuStyles:function(){var t="#fff",r=e("html").css("background-color"),i=e("body").css("background-color");i!="transparent"&&i!="rgba(0, 0, 0, 0)"?t=i:r!="transparent"&&r!="rgba(0, 0, 0, 0)"?t=r:t="#fff";e("#jPanelMenu-style-master").length==0&&e("body").append('<style id="jPanelMenu-style-master">body{width:100%}.jPanelMenu,body{overflow-x:hidden}#jPanelMenu-menu{display:block;position:fixed;top:0;'+n.options.direction+":0;height:100%;z-index:-1;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch}.jPanelMenu-panel{position:static;"+n.options.direction+":0;top:0;z-index:2;width:100%;min-height:100%;background:"+t+"}</style>")},setMenuState:function(t){var n=t?"open":"closed";e("body").attr("data-menu-position",n)},getMenuState:function(){return e("body").attr("data-menu-position")},menuIsOpen:function(){return n.getMenuState()=="open"?!0:!1},setMenuStyle:function(t){e(n.menu).css(t)},setPanelStyle:function(t){e(n.panel).css(t)},showMenu:function(){n.setMenuStyle({display:"block"});n.setMenuStyle({"z-index":"1"})},hideMenu:function(){n.setMenuStyle({"z-index":"-1"});n.setMenuStyle({display:"none"})},enableTransitions:function(t,r){var i=t/1e3,s=n.getCSSEasingFunction(r);n.disableTransitions();e("body").append('<style id="jPanelMenu-style-transitions">.jPanelMenu-panel{-webkit-transition: all '+i+"s "+s+"; -moz-transition: all "+i+"s "+s+"; -o-transition: all "+i+"s "+s+"; transition: all "+i+"s "+s+";}</style>")},disableTransitions:function(){e("#jPanelMenu-style-transitions").remove()},enableFixedTransitions:function(t,r,i,s){var o=i/1e3,u=n.getCSSEasingFunction(s);n.disableFixedTransitions(r);e("body").append('<style id="jPanelMenu-style-fixed-'+r+'">'+t+"{-webkit-transition: all "+o+"s "+u+"; -moz-transition: all "+o+"s "+u+"; -o-transition: all "+o+"s "+u+"; transition: all "+o+"s "+u+";}</style>")},disableFixedTransitions:function(t){e("#jPanelMenu-style-fixed-"+t).remove()},getCSSEasingFunction:function(e){switch(e){case"linear":return e;case"ease":return e;case"ease-in":return e;case"ease-out":return e;case"ease-in-out":return e;default:return"ease-in-out"}},getJSEasingFunction:function(e){switch(e){case"linear":return e;default:return"swing"}},openMenu:function(t){if(typeof t=="undefined"||t==null)t=n.options.animated;n.clearTimeouts();n.options.before();n.options.beforeOpen();n.setMenuState(!0);n.setPanelStyle({position:"relative"});n.showMenu();var r={none:t?!1:!0,transitions:t&&n.settings.transitionsSupported?!0:!1};if(r.transitions||r.none){r.none&&n.disableTransitions();r.transitions&&n.enableTransitions(n.options.openDuration,n.options.openEasing);var i={};i[n.options.direction]=n.options.openPosition;n.setPanelStyle(i);n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");r.none&&n.disableFixedTransitions(t);r.transitions&&n.enableFixedTransitions(i,t,n.options.openDuration,n.options.openEasing);var s={};s[n.options.direction]=n.options.openPosition;e(this).css(s)});n.timeouts.afterOpen=setTimeout(function(){n.disableTransitions();n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)});n.options.after();n.options.afterOpen();n.initiateContentClickListeners()},n.options.openDuration)}else{var s=n.getJSEasingFunction(n.options.openEasing),o={};o[n.options.direction]=n.options.openPosition;e(n.panel).stop().animate(o,n.options.openDuration,s,function(){n.options.after();n.options.afterOpen();n.initiateContentClickListeners()});n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=n.options.openPosition;e(this).stop().animate(t,n.options.openDuration,s)})}},closeMenu:function(t){if(typeof t=="undefined"||t==null)t=n.options.animated;n.clearTimeouts();n.options.before();n.options.beforeClose();n.setMenuState(!1);var r={none:t?!1:!0,transitions:t&&n.settings.transitionsSupported?!0:!1};if(r.transitions||r.none){r.none&&n.disableTransitions();r.transitions&&n.enableTransitions(n.options.closeDuration,n.options.closeEasing);var i={};i[n.options.direction]=0+n.settings.positionUnits;n.setPanelStyle(i);n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),i=t.replace(" ","."),t=t.replace(" ","-");r.none&&n.disableFixedTransitions(t);r.transitions&&n.enableFixedTransitions(i,t,n.options.closeDuration,n.options.closeEasing);var s={};s[n.options.direction]=0+n.settings.positionUnits;e(this).css(s)});n.timeouts.afterClose=setTimeout(function(){n.setPanelStyle({position:n.settings.panelPosition});n.disableTransitions();n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t=e(this).prop("tagName").toLowerCase()+" "+e(this).attr("class"),t=t.replace(" ","-");n.disableFixedTransitions(t)});n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()},n.options.closeDuration)}else{var s=n.getJSEasingFunction(n.options.closeEasing),o={};o[n.options.direction]=0+n.settings.positionUnits;e(n.panel).stop().animate(o,n.options.closeDuration,s,function(){n.setPanelStyle({position:n.settings.panelPosition});n.hideMenu();n.options.after();n.options.afterClose();n.destroyContentClickListeners()});n.settings.shiftFixedChildren&&e(n.fixedChildren).each(function(){var t={};t[n.options.direction]=0+n.settings.positionUnits;e(this).stop().animate(t,n.options.closeDuration,s)})}},triggerMenu:function(e){n.menuIsOpen()?n.closeMenu(e):n.openMenu(e)},initiateClickListeners:function(){e(document).on("click",n.options.trigger,function(){n.triggerMenu(n.options.animated);return!1})},destroyClickListeners:function(){e(document).off("click",n.options.trigger,null)},initiateContentClickListeners:function(){if(!n.options.closeOnContentClick)return!1;e(document).on("click",n.panel,function(e){n.menuIsOpen()&&n.closeMenu(n.options.animated)});e(document).on("touchend",n.panel,function(e){n.menuIsOpen()&&n.closeMenu(n.options.animated)})},destroyContentClickListeners:function(){if(!n.options.closeOnContentClick)return!1;e(document).off("click",n.panel,null);e(document).off("touchend",n.panel,null)},initiateKeyboardListeners:function(){var t=["input","textarea"];e(document).on("keydown",function(r){var i=e(r.target),s=!1;e.each(t,function(){i.is(this.toString())&&(s=!0)});if(s)return!0;for(mapping in n.options.keyboardShortcuts)if(r.which==n.options.keyboardShortcuts[mapping].code){var o=n.options.keyboardShortcuts[mapping];o.open&&o.close?n.triggerMenu(n.options.animated):o.open&&!o.close&&!n.menuIsOpen()?n.openMenu(n.options.animated):!o.open&&o.close&&n.menuIsOpen()&&n.closeMenu(n.options.animated);return!1}})},destroyKeyboardListeners:function(){e(document).off("keydown",null)},setupMarkup:function(){e("html").addClass("jPanelMenu");e("body > *").not(n.menu+", "+n.options.excludedPanelContent).wrapAll('<div class="'+n.panel.replace(".","")+'"/>');e(n.options.menu).clone().attr("id",n.menu.replace("#","")).insertAfter("body > "+n.panel)},resetMarkup:function(){e("html").removeClass("jPanelMenu");e("body > "+n.panel+" > *").unwrap();e(n.menu).remove()},init:function(){n.options.beforeOn();n.initiateClickListeners();Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"&&n.initiateKeyboardListeners();n.setjPanelMenuStyles();n.setMenuState(!1);n.setupMarkup();n.setMenuStyle({width:n.options.openPosition});n.checkFixedChildren();n.setPositionUnits();n.closeMenu(!1);n.options.afterOn()},destroy:function(){n.options.beforeOff();n.closeMenu();n.destroyClickListeners();Object.prototype.toString.call(n.options.keyboardShortcuts)==="[object Array]"&&n.destroyKeyboardListeners();n.resetMarkup();var t={};t[n.options.direction]="auto";e(n.fixedChildren).each(function(){e(this).css(t)});n.fixedChildren=[];n.options.afterOff()}};return{on:n.init,off:n.destroy,trigger:n.triggerMenu,open:n.openMenu,close:n.closeMenu,isOpen:n.menuIsOpen,menu:n.menu,getMenu:function(){return e(n.menu)},panel:n.panel,getPanel:function(){return e(n.panel)}}}})(jQuery);
// Google Prettify.js
!function(){var e=null;window.PR_SHOULD_USE_CONTINUATION=!0,function(){function t(e){function t(e){var t=e.charCodeAt(0);if(92!==t)return t;var n=e.charAt(1);return(t=p[n])?t:n>="0"&&"7">=n?parseInt(e.substring(1),8):"u"===n||"x"===n?parseInt(e.substring(2),16):e.charCodeAt(1)}function n(e){return 32>e?(16>e?"\\x0":"\\x")+e.toString(16):(e=String.fromCharCode(e),"\\"===e||"-"===e||"]"===e||"^"===e?"\\"+e:e)}function r(e){var r=e.substring(1,e.length-1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g),e=[],s="^"===r[0],a=["["];s&&a.push("^");for(var s=s?1:0,i=r.length;i>s;++s){var l=r[s];if(/\\[bdsw]/i.test(l))a.push(l);else{var o,l=t(l);i>s+2&&"-"===r[s+1]?(o=t(r[s+2]),s+=2):o=l,e.push([l,o]),65>o||l>122||(65>o||l>90||e.push([32|Math.max(65,l),32|Math.min(o,90)]),97>o||l>122||e.push([-33&Math.max(97,l),-33&Math.min(o,122)]))}}for(e.sort(function(e,t){return e[0]-t[0]||t[1]-e[1]}),r=[],i=[],s=0;e.length>s;++s)l=e[s],l[0]<=i[1]+1?i[1]=Math.max(i[1],l[1]):r.push(i=l);for(s=0;r.length>s;++s)l=r[s],a.push(n(l[0])),l[1]>l[0]&&(l[1]+1>l[0]&&a.push("-"),a.push(n(l[1])));return a.push("]"),a.join("")}function s(e){for(var t=e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g),s=t.length,l=[],o=0,u=0;s>o;++o){var c=t[o];"("===c?++u:"\\"===c.charAt(0)&&(c=+c.substring(1))&&(u>=c?l[c]=-1:t[o]=n(c))}for(o=1;l.length>o;++o)-1===l[o]&&(l[o]=++a);for(u=o=0;s>o;++o)c=t[o],"("===c?(++u,l[u]||(t[o]="(?:")):"\\"===c.charAt(0)&&(c=+c.substring(1))&&u>=c&&(t[o]="\\"+l[c]);for(o=0;s>o;++o)"^"===t[o]&&"^"!==t[o+1]&&(t[o]="");if(e.ignoreCase&&i)for(o=0;s>o;++o)c=t[o],e=c.charAt(0),c.length>=2&&"["===e?t[o]=r(c):"\\"!==e&&(t[o]=c.replace(/[A-Za-z]/g,function(e){return e=e.charCodeAt(0),"["+String.fromCharCode(-33&e,32|e)+"]"}));return t.join("")}for(var a=0,i=!1,l=!1,o=0,u=e.length;u>o;++o){var c=e[o];if(c.ignoreCase)l=!0;else if(/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,""))){i=!0,l=!1;break}}for(var p={b:8,t:9,n:10,v:11,f:12,r:13},d=[],o=0,u=e.length;u>o;++o){if(c=e[o],c.global||c.multiline)throw Error(""+c);d.push("(?:"+s(c)+")")}return RegExp(d.join("|"),l?"gi":"g")}function n(e,t){function n(e){var o=e.nodeType;if(1==o){if(!r.test(e.className)){for(o=e.firstChild;o;o=o.nextSibling)n(o);o=e.nodeName.toLowerCase(),("br"===o||"li"===o)&&(s[l]="\n",i[l<<1]=a++,i[1|l++<<1]=e)}}else(3==o||4==o)&&(o=e.nodeValue,o.length&&(o=t?o.replace(/\r\n?/g,"\n"):o.replace(/[\t\n\r ]+/g," "),s[l]=o,i[l<<1]=a,a+=o.length,i[1|l++<<1]=e))}var r=/(?:^|\s)nocode(?:\s|$)/,s=[],a=0,i=[],l=0;return n(e),{a:s.join("").replace(/\n$/,""),d:i}}function r(e,t,n,r){t&&(e={a:t,e:e},n(e),r.push.apply(r,e.g))}function s(e){for(var t=void 0,n=e.firstChild;n;n=n.nextSibling)var r=n.nodeType,t=1===r?t?e:n:3===r?w.test(n.nodeValue)?e:t:t;return t===e?void 0:t}function a(n,s){function a(e){for(var t=e.e,n=[t,"pln"],c=0,p=e.a.match(i)||[],d={},f=0,h=p.length;h>f;++f){var g,m=p[f],y=d[m],v=void 0;if("string"==typeof y)g=!1;else{var b=l[m.charAt(0)];if(b)v=m.match(b[1]),y=b[0];else{for(g=0;o>g;++g)if(b=s[g],v=m.match(b[1])){y=b[0];break}v||(y="pln")}!(g=y.length>=5&&"lang-"===y.substring(0,5))||v&&"string"==typeof v[1]||(g=!1,y="src"),g||(d[m]=y)}if(b=c,c+=m.length,g){g=v[1];var x=m.indexOf(g),w=x+g.length;v[2]&&(w=m.length-v[2].length,x=w-g.length),y=y.substring(5),r(t+b,m.substring(0,x),a,n),r(t+b+x,g,u(y,g),n),r(t+b+w,m.substring(w),a,n)}else n.push(t+b,y)}e.g=n}var i,l={};(function(){for(var r=n.concat(s),a=[],o={},u=0,c=r.length;c>u;++u){var p=r[u],d=p[3];if(d)for(var f=d.length;--f>=0;)l[d.charAt(f)]=p;p=p[1],d=""+p,o.hasOwnProperty(d)||(a.push(p),o[d]=e)}a.push(/[\S\s]/),i=t(a)})();var o=s.length;return a}function i(t){var n=[],r=[];t.tripleQuotedStrings?n.push(["str",/^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,e,"'\""]):t.multiLineStrings?n.push(["str",/^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,e,"'\"`"]):n.push(["str",/^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,e,"\"'"]),t.verbatimStrings&&r.push(["str",/^@"(?:[^"]|"")*(?:"|$)/,e]);var s=t.hashComments;if(s&&(t.cStyleComments?(s>1?n.push(["com",/^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,e,"#"]):n.push(["com",/^#(?:(?:define|e(?:l|nd)if|else|error|ifn?def|include|line|pragma|undef|warning)\b|[^\n\r]*)/,e,"#"]),r.push(["str",/^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h(?:h|pp|\+\+)?|[a-z]\w*)>/,e])):n.push(["com",/^#[^\n\r]*/,e,"#"])),t.cStyleComments&&(r.push(["com",/^\/\/[^\n\r]*/,e]),r.push(["com",/^\/\*[\S\s]*?(?:\*\/|$)/,e])),s=t.regexLiterals){var i=(s=s>1?"":"\n\r")?".":"[\\S\\s]";r.push(["lang-regex",RegExp("^(?:^^\\.?|[+-]|[!=]=?=?|\\#|%=?|&&?=?|\\(|\\*=?|[+\\-]=|->|\\/=?|::?|<<?=?|>>?>?=?|,|;|\\?|@|\\[|~|{|\\^\\^?=?|\\|\\|?=?|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\\s*("+("/(?=[^/*"+s+"])(?:[^/\\x5B\\x5C"+s+"]|\\x5C"+i+"|\\x5B(?:[^\\x5C\\x5D"+s+"]|\\x5C"+i+")*(?:\\x5D|$))+/")+")")])}return(s=t.types)&&r.push(["typ",s]),s=(""+t.keywords).replace(/^ | $/g,""),s.length&&r.push(["kwd",RegExp("^(?:"+s.replace(/[\s,]+/g,"|")+")\\b"),e]),n.push(["pln",/^\s+/,e," \r\n	 "]),s="^.[^\\s\\w.$@'\"`/\\\\]*",t.regexLiterals&&(s+="(?!s*/)"),r.push(["lit",/^@[$_a-z][\w$@]*/i,e],["typ",/^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/,e],["pln",/^[$_a-z][\w$@]*/i,e],["lit",/^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,e,"0123456789"],["pln",/^\\[\S\s]?/,e],["pun",RegExp(s),e]),a(n,r)}function l(e,t,n){function r(e){var t=e.nodeType;if(1!=t||a.test(e.className)){if((3==t||4==t)&&n){var o=e.nodeValue,u=o.match(i);u&&(t=o.substring(0,u.index),e.nodeValue=t,(o=o.substring(u.index+u[0].length))&&e.parentNode.insertBefore(l.createTextNode(o),e.nextSibling),s(e),t||e.parentNode.removeChild(e))}}else if("br"===e.nodeName)s(e),e.parentNode&&e.parentNode.removeChild(e);else for(e=e.firstChild;e;e=e.nextSibling)r(e)}function s(e){function t(e,n){var r=n?e.cloneNode(!1):e,s=e.parentNode;if(s){var s=t(s,1),a=e.nextSibling;s.appendChild(r);for(var i=a;i;i=a)a=i.nextSibling,s.appendChild(i)}return r}for(;!e.nextSibling;)if(e=e.parentNode,!e)return;for(var n,e=t(e.nextSibling,0);(n=e.parentNode)&&1===n.nodeType;)e=n;u.push(e)}for(var a=/(?:^|\s)nocode(?:\s|$)/,i=/\r\n?|\n/,l=e.ownerDocument,o=l.createElement("li");e.firstChild;)o.appendChild(e.firstChild);for(var u=[o],c=0;u.length>c;++c)r(u[c]);t===(0|t)&&u[0].setAttribute("value",t);var p=l.createElement("ol");p.className="linenums";for(var t=Math.max(0,0|t-1)||0,c=0,d=u.length;d>c;++c)o=u[c],o.className="L"+(c+t)%10,o.firstChild||o.appendChild(l.createTextNode(" ")),p.appendChild(o);e.appendChild(p)}function o(e,t){for(var n=t.length;--n>=0;){var r=t[n];C.hasOwnProperty(r)?p.console&&console.warn("cannot override language handler %s",r):C[r]=e}}function u(e,t){return e&&C.hasOwnProperty(e)||(e=/^\s*</.test(t)?"default-markup":"default-code"),C[e]}function c(e){var t=e.h;try{var r=n(e.c,e.i),s=r.a;e.a=s,e.d=r.d,e.e=0,u(t,s)(e);var a=/\bMSIE\s(\d+)/.exec(navigator.userAgent),a=a&&8>=+a[1],t=/\n/g,i=e.a,l=i.length,r=0,o=e.d,c=o.length,s=0,d=e.g,f=d.length,h=0;d[f]=l;var g,m;for(m=g=0;f>m;)d[m]!==d[m+2]?(d[g++]=d[m++],d[g++]=d[m++]):m+=2;for(f=g,m=g=0;f>m;){for(var y=d[m],v=d[m+1],b=m+2;f>=b+2&&d[b+1]===v;)b+=2;d[g++]=y,d[g++]=v,m=b}d.length=g;var x,w=e.c;w&&(x=w.style.display,w.style.display="none");try{for(;c>s;){var S,C=o[s+2]||l,N=d[h+2]||l,b=Math.min(C,N),_=o[s+1];if(1!==_.nodeType&&(S=i.substring(r,b))){a&&(S=S.replace(t,"\r")),_.nodeValue=S;var k=_.ownerDocument,T=k.createElement("span");T.className=d[h+1];var E=_.parentNode;E.replaceChild(T,_),T.appendChild(_),C>r&&(o[s+1]=_=k.createTextNode(i.substring(b,C)),E.insertBefore(_,T.nextSibling))}r=b,r>=C&&(s+=2),r>=N&&(h+=2)}}finally{w&&(w.style.display=x)}}catch($){p.console&&console.log($&&$.stack||$)}}var p=window,d=["break,continue,do,else,for,if,return,while"],f=[[d,"auto,case,char,const,default,double,enum,extern,float,goto,inline,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"],"catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"],h=[f,"alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,delegate,dynamic_cast,explicit,export,friend,generic,late_check,mutable,namespace,nullptr,property,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],g=[f,"abstract,assert,boolean,byte,extends,final,finally,implements,import,instanceof,interface,null,native,package,strictfp,super,synchronized,throws,transient"],m=[g,"as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,internal,into,is,let,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var,virtual,where"],f=[f,"debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],y=[d,"and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],v=[d,"alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],b=[d,"as,assert,const,copy,drop,enum,extern,fail,false,fn,impl,let,log,loop,match,mod,move,mut,priv,pub,pure,ref,self,static,struct,true,trait,type,unsafe,use"],d=[d,"case,done,elif,esac,eval,fi,function,in,local,set,then,until"],x=/^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)\b/,w=/\S/,S=i({keywords:[h,m,f,"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",y,v,d],hashComments:!0,cStyleComments:!0,multiLineStrings:!0,regexLiterals:!0}),C={};o(S,["default-code"]),o(a([],[["pln",/^[^<?]+/],["dec",/^<!\w[^>]*(?:>|$)/],["com",/^<\!--[\S\s]*?(?:--\>|$)/],["lang-",/^<\?([\S\s]+?)(?:\?>|$)/],["lang-",/^<%([\S\s]+?)(?:%>|$)/],["pun",/^(?:<[%?]|[%?]>)/],["lang-",/^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],["lang-js",/^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],["lang-css",/^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],["lang-in.tag",/^(<\/?[a-z][^<>]*>)/i]]),["default-markup","htm","html","mxml","xhtml","xml","xsl"]),o(a([["pln",/^\s+/,e," 	\r\n"],["atv",/^(?:"[^"]*"?|'[^']*'?)/,e,"\"'"]],[["tag",/^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],["atn",/^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],["lang-uq.val",/^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],["pun",/^[/<->]+/],["lang-js",/^on\w+\s*=\s*"([^"]+)"/i],["lang-js",/^on\w+\s*=\s*'([^']+)'/i],["lang-js",/^on\w+\s*=\s*([^\s"'>]+)/i],["lang-css",/^style\s*=\s*"([^"]+)"/i],["lang-css",/^style\s*=\s*'([^']+)'/i],["lang-css",/^style\s*=\s*([^\s"'>]+)/i]]),["in.tag"]),o(a([],[["atv",/^[\S\s]+/]]),["uq.val"]),o(i({keywords:h,hashComments:!0,cStyleComments:!0,types:x}),["c","cc","cpp","cxx","cyc","m"]),o(i({keywords:"null,true,false"}),["json"]),o(i({keywords:m,hashComments:!0,cStyleComments:!0,verbatimStrings:!0,types:x}),["cs"]),o(i({keywords:g,cStyleComments:!0}),["java"]),o(i({keywords:d,hashComments:!0,multiLineStrings:!0}),["bash","bsh","csh","sh"]),o(i({keywords:y,hashComments:!0,multiLineStrings:!0,tripleQuotedStrings:!0}),["cv","py","python"]),o(i({keywords:"caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",hashComments:!0,multiLineStrings:!0,regexLiterals:2}),["perl","pl","pm"]),o(i({keywords:v,hashComments:!0,multiLineStrings:!0,regexLiterals:!0}),["rb","ruby"]),o(i({keywords:f,cStyleComments:!0,regexLiterals:!0}),["javascript","js"]),o(i({keywords:"all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,throw,true,try,unless,until,when,while,yes",hashComments:3,cStyleComments:!0,multilineStrings:!0,tripleQuotedStrings:!0,regexLiterals:!0}),["coffee"]),o(i({keywords:b,cStyleComments:!0,multilineStrings:!0}),["rc","rs","rust"]),o(a([],[["str",/^[\S\s]+/]]),["regex"]);var N=p.PR={createSimpleLexer:a,registerLangHandler:o,sourceDecorator:i,PR_ATTRIB_NAME:"atn",PR_ATTRIB_VALUE:"atv",PR_COMMENT:"com",PR_DECLARATION:"dec",PR_KEYWORD:"kwd",PR_LITERAL:"lit",PR_NOCODE:"nocode",PR_PLAIN:"pln",PR_PUNCTUATION:"pun",PR_SOURCE:"src",PR_STRING:"str",PR_TAG:"tag",PR_TYPE:"typ",prettyPrintOne:p.prettyPrintOne=function(e,t,n){var r=document.createElement("div");return r.innerHTML="<pre>"+e+"</pre>",r=r.firstChild,n&&l(r,n,!0),c({h:t,j:n,c:r,i:1}),r.innerHTML},prettyPrint:p.prettyPrint=function(t,n){function r(){for(var n=p.PR_SHOULD_USE_CONTINUATION?h.now()+250:1/0;o.length>m&&n>h.now();m++){for(var a=o[m],u=C,d=a;d=d.previousSibling;){var f=d.nodeType,N=(7===f||8===f)&&d.nodeValue;if(N?!/^\??prettify\b/.test(N):3!==f||/\S/.test(d.nodeValue))break;if(N){u={},N.replace(/\b(\w+)=([\w%+\-.:]+)/g,function(e,t,n){u[t]=n});break}}if(d=a.className,(u!==C||v.test(d))&&!b.test(d)){for(f=!1,N=a.parentNode;N;N=N.parentNode)if(S.test(N.tagName)&&N.className&&v.test(N.className)){f=!0;break}if(!f){if(a.className+=" prettyprinted",f=u.lang,!f){var _,f=d.match(y);!f&&(_=s(a))&&w.test(_.tagName)&&(f=_.className.match(y)),f&&(f=f[1])}if(x.test(a.tagName))N=1;else var N=a.currentStyle,k=i.defaultView,N=(N=N?N.whiteSpace:k&&k.getComputedStyle?k.getComputedStyle(a,e).getPropertyValue("white-space"):0)&&"pre"===N.substring(0,3);k=u.linenums,(k="true"===k||+k)||(k=(k=d.match(/\blinenums\b(?::(\d+))?/))?k[1]&&k[1].length?+k[1]:!0:!1),k&&l(a,k,N),g={h:f,c:a,j:k,i:N},c(g)}}}o.length>m?setTimeout(r,250):"function"==typeof t&&t()}for(var a=n||document.body,i=a.ownerDocument||document,a=[a.getElementsByTagName("pre"),a.getElementsByTagName("code"),a.getElementsByTagName("xmp")],o=[],u=0;a.length>u;++u)for(var d=0,f=a[u].length;f>d;++d)o.push(a[u][d]);var a=e,h=Date;h.now||(h={now:function(){return+new Date}});var g,m=0,y=/\blang(?:uage)?-([\w.]+)(?!\S)/,v=/\bprettyprint\b/,b=/\bprettyprinted\b/,x=/pre|xmp/i,w=/^code$/i,S=/^(?:pre|code|xmp)$/i,C={};r()}};"function"==typeof define&&define.amd&&define("google-code-prettify",[],function(){return N})}()}();


// =======================================================================================================
// SITE FUNCTIONS AND INITIALIZATIONS
// =======================================================================================================

// FUNCTIONS
//--------------------------------------------------------------------------------------------------------

	// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
	// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
	var mulFixFOUC = function() {
		jQuery('html.mul-mod-js').show();
	}

	// REFERENCE PAGES

		// DEVELOPER - SLIDING DRAWER
		var mulRefSlidingDrawer = jQuery.jPanelMenu({
			animated: true,
			closeOnContentClick: false,
			duration: 450,
			direction: 'left',
			menu: '.js-mul-ref-sliding-drawer',
			keyboardShortcuts: false,
			trigger: '.js-mul-ref-sliding-drawer-btn'
		});


	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// CONTENT MODAL

			// Content modal example click event
			var contentModalExampleClickEvent = function(){
				jQuery('#js-mul-content-modal-example-btn').click(function() {
					jQuery('#js-mul-content-modal-example').dialog('open');
				});
			}

		
		// DIALOG/MODAL

			// MODAL

				// Modal dialog with short content example click event
				var modalDialogShortExampleClickEvent = function(){
					jQuery('#js-mul-dialog-modal-example-btn').click(function() {
						jQuery('#js-mul-dialog-modal-example').dialog('open');
					});
				}

				// Modal dialog with long content example click event
				var modalDialogLongExampleClickEvent = function(){
					jQuery('#js-mul-dialog-modal-long-example-btn').click(function() {
						jQuery('#js-mul-dialog-modal-long-example').dialog('open');
					});
				}

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example click event
				var modalDialogLongFixedExampleClickEvent = function(){
					jQuery('#js-mul-dialog-modal-long-fixed-buttons-example-btn').click(function() {
						jQuery('#js-mul-dialog-modal-long-fixed-buttons-example').dialog('open');
					});
				}

				// Modal dialog with click outside example click event
				var modalDialogClickOutsideExampleClickEvent = function(){
					jQuery('#js-mul-dialog-modal-clickoutside-example-btn').click(function() {
						jQuery('#js-mul-dialog-modal-clickoutside-example').dialog('open');
					});
				}

			// LOADING ANIMATION MODAL

				// Loading animation image modal example click event
				var modalDialogLoadingImageExampleClickEvent = function(){
					jQuery('#js-mul-dialog-loading-example-btn').click(function() {
						jQuery('#js-mul-dialog-loading').dialog('open');
					});
				}

				// Loading animation icon modal example click event
				var modalDialogLoadingIconExampleClickEvent = function(){
					jQuery('#js-mul-dialog-loading-icon-example-btn').click(function() {
						jQuery('#js-mul-dialog-loading-icon').dialog('open');
					});
				}


// DOCUMENT READY
//--------------------------------------------------------------------------------------------------------
$(function() {


	// INITIALIZATIONS
	//----------------------------------------------------------------------------------------------------

		/* TODO: PLEASE CLEAN UP! - BEGINS */

			// SMARTMENU TEST
			/*
			jQuery('.js-mul-menus').smartmenus('destroy');
			jQuery('.js-mul-menus').smartmenus('menuHideAll');
			jQuery('.js-mul-menus').smartmenus({
				subIndicators: true,
				mainMenuSubOffsetX: 0,
				subMenusSubOffsetX: 5,
				subMenusSubOffsetY: 0,
				subMenusMinWidth: '',
				subMenusMaxWidth: '',
				subIndicatorsText: '',
				subIndicatorsPos: 'append',
				keepInViewport: true
			});
			*/

			var nav = $('.mul-toolbar-fixed-adjust'); // Change to nav div
			var nav_class = 'mul-toolbar-fixed-adjust-shadow'; // Change to class name
			var threshold = 40; // Change to pixels scrolled

			$(window).scroll(function () {
			    var distance = $(this).scrollTop();
			    if (distance > threshold) { // If scrolled past threshold
			        nav.addClass(nav_class); // Add class to nav
			    } else { // If user scrolls back to top
			        if (nav.hasClass(nav_class)) { // And if class has been added
			            nav.removeClass(nav_class); // Remove it
			        }
			    }
			});

		/* PLEASE CLEAN UP! - ENDS */


		// REFERENCE PAGES

			// ALTERNATE VIEWS BADGE
			mulAlternateViewsBadge('js-mul-ref-alternate-views-badge', 'left');

			// DEVELOPER - SLIDING DRAWER INIT
			mulRefSlidingDrawer.on();

			// DEVELOPER - SLIDING DRAWER - SCROLL PANE
			var windowHeight = jQuery(window).height();
			mulScrollPaneCustom('js-mul-ref-sliding-drawer-scrollpane',{
				setHeight: windowHeight,
				advanced:{
					updateOnContentResize: true
				}
			});

			// DEVELOPER - SLIDING DRAWER - SCROLL PANE - CHANGE ON RESIZE OF WINDOW
			jQuery(window).bind('resize', resizeWindow);
			function resizeWindow(e) {
				var newWindowHeight = jQuery(window).height();
				jQuery('.js-mul-ref-sliding-drawer-scrollpane').css('height', newWindowHeight);
			}


		// JS LIBRARY INITS

			// GOOGLE PRETTIFY INIT (for code snippet coloring/formating)
			prettyPrint();


		// FIXES FLASH OF UNSTYLED CONTENT BUG - WHERE PAGE LOADS FASTER THAN JS AND MODERNIZR
		// HIDE PAGE WITH CSS CLASS PROVIDED BY MODERNIZR AND WHEN DOCUMENT IS READY, SHOW PAGE WITH JS
		mulFixFOUC();


	// LIBRARY EXAMPLES
	//----------------------------------------------------------------------------------------------------

		// ACCORDION

			// Accordion - default
			mulAccordion('js-mul-accordion-example');

			// Accordion - icons
			mulAccordion('js-mul-accordion-icons-example', {
				icons: {'header': 'mul-icon-plus-circle', 'activeHeader': 'mul-icon-minus-circle'}
			});

		// ALTERNATE VIEWS BADGE

			// Alternate views badge - full
			mulAlternateViewsBadge('js-mul-alternate-views-badge-full-example', 'center');

			// Alternate views badge - text only
			mulAlternateViewsBadge('js-mul-alternate-views-badge-text-only-example', 'left');

			// Alternate views badge - text only
			mulAlternateViewsBadge('js-mul-alternate-views-badge-icon-only-example', 'right');

		// AUTO SUGGEST
			
			var autoCompleteExampleData = [
				'Agresta, Jewel (Dallas) - Marsh',
				'Agricola, Dwain (Norwood) - Mercer',
				'Alexy, Dorthy (Chichester) - Mercer',
				'Altonen, Colin (Hartford) - Marsh',
				'Amaral, Ramon (Auckland) - Marsh',
				'Amrich, Darrell (Iowa City) - Mercer',
				'Araiza, Chad (Houston) - Mercer',
				'Arenburg, Margot (Dusseldorf) - Mercer',
				'Argenti, Kathie (Croydon) - Mercer',
				'Arostegui, Marcelo (Norwood) - Mercer',
				'Asberry, Kurtis (Dallas) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Assad, Jess (Louisville) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Backus, Neil (Dallas) - Marsh',
				'Bagnoli, Luciusv (Croydon) - Marsh',
				'Bagnli, Luusv (Crydon) - Mercer',
				'Bgnoli, Luciusv (Croon) - Marsh',
				'Bagnol, Lucisv (Crodon) - Mercer',
				'Bagnoli, uciusv (Croyn) - Mercer',
				'Gnoli, Lucisv (Cdon) - Mercer',
			];

			//  Auto Suggest init
			mulAutocomplete('js-mul-autocomplete-example',{
				source: autoCompleteExampleData
			});


		// CALENDAR

			// Read only input
			mulDatepicker('js-mul-datepicker-example-readonly');
		 
			// Default example
			mulDatepicker('js-mul-datepicker-example-default');
			
			// Calendar with message
			mulDatepicker('js-mul-datepicker-example-message');
			
			// Masked date input
			mulDatepicker('js-mul-datepicker-example-masked');


		// CALENDAR - DATE RANGE
		 
			// Stacked

			// From date datepicker
			mulDatepickerRange('js-mul-datepicker-range-stacked-from',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-stacked-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			mulDatepicker('js-mul-datepicker-range-stacked-to',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-stacked-from').datepicker( 'option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});

			//----

			// Left Aligned

			// From date datepicker
			mulDatepickerRange('js-mul-datepicker-range-left-aligned-from',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-left-aligned-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			mulDatepicker('js-mul-datepicker-range-left-aligned-to',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-left-aligned-from').datepicker('option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});

			//----

			// Right Aligned
			
			// From date datepicker
			mulDatepickerRange('js-mul-datepicker-range-right-aligned-from',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-right-aligned-to').datepicker('option', 'minDate', selectedDate); // On calendar close, set the min date of the "To" calendar to the date picked in the "From" calendar
				}
			});

			// To date datepicker
			mulDatepicker('js-mul-datepicker-range-right-aligned-to',{
				onClose: function(selectedDate) {
					jQuery('#js-mul-datepicker-range-right-aligned-from').datepicker('option', 'maxDate', selectedDate); // On calendar close, set the max date of the "From" calendar to the date picked in the "To" calendar
				}
			});


		// CAROUSEL

			// Carousel example
			mulCarousel('js-mul-carousel-example');


		// CONTENT MODAL

			// Content modal example
			mulContentModal('js-mul-content-modal-example',{
				clickOutside: true, // Clicking outside content modal closes content modal, false turns off this option
				clickOutsideTrigger: '#js-mul-content-modal-example-btn'
			});

			// Content modal example click event init
			contentModalExampleClickEvent();

		
		// DIALOG/MODAL

			// MODAL

				// Modal dialog with short content example
				mulDialogModal('js-mul-dialog-modal-example');

				// Modal dialog with short content example click event init
				modalDialogShortExampleClickEvent();

				//----

				// Modal dialog with long content example
				mulDialogModal('js-mul-dialog-modal-long-example');

				// Modal dialog with long content example click event init
				modalDialogLongExampleClickEvent();

				//----

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example
				mulDialogModal('js-mul-dialog-modal-long-fixed-buttons-example',{
					buttons: { // Define buttons at bottom of dialog, buttons stay fixed to bottom on dialog with scrolling content div
						'cancel' : { // Define name of button
							text: 'Cancel', // Text of the button
							priority: 'secondary', // Priority level of the button. Values available: primary, secondary
							click: function() { // Click event of the button, this click event adds a close function
								jQuery(this).dialog('close');
							}
						},
						'save' : {
							text: 'Save',
							priority: 'primary',
							"class": 'mul-btn-primary', // Add class to button option. Add class of "mul-btn-primary" for primary button styles
							click: function() {
								jQuery(this).dialog('close');
							}
						}
					}
				});

				// Modal dialog with long content and fixed buttons (jQuery UI generated) example click event init
				modalDialogLongFixedExampleClickEvent();

				//----

				// Modal dialog click outside to close example
				mulDialogModal('js-mul-dialog-modal-clickoutside-example',{

					// Click outside option: click outside modal to close it
					clickOutside: true, // clicking outside the dialog will close it
					clickOutsideTrigger: '#js-mul-dialog-modal-clickoutside-example-btn' // Element (id or class) that triggers the dialog opening 

				});

				// Modal dialog with click outside example click event init
				modalDialogClickOutsideExampleClickEvent();

			// LOADING ANIMATION MODAL

				// Loading animation image modal
				mulDialogModal('js-mul-dialog-loading',{
					dialogClass:'mul-dialog mul-dialog-modal mul-dialog-loading no-close-button'
				});

				// Loading animation image modal click example event init
				modalDialogLoadingImageExampleClickEvent();

				// Loading animation icon modal
				mulDialogModal('js-mul-dialog-loading-icon',{
					dialogClass:'mul-dialog mul-dialog-modal mul-dialog-loading no-close-button'
				});

				// Loading animation icon modal example click event init
				modalDialogLoadingIconExampleClickEvent();


		// SCROLL PANE

			// Custom scroll pane example
			mulScrollPaneCustom('js-mul-scroll-pane-custom-example',{
				setHeight: 200
			});


		// SLIDER

			// Slider example - horizontal (default)
			mulSlider('js-mul-slider-horizontal-example');

			// Slider range example - horizontal (default)
			mulSliderRange('js-mul-slider-range-horizontal-example');

			// Slider range example - horizontal - fixed min
			mulSliderRangeSingleHandle('js-mul-slider-range-horizontal-min-example',{
				range: 'min'
			});

			// Slider range example - horizontal - fixed max
			mulSliderRangeSingleHandle('js-mul-slider-range-horizontal-max-example',{
				range: 'max'
			});

			// Slider example - vertical
			mulSlider('js-mul-slider-vertical-example',{
				orientation: 'vertical'
			});

			// Slider range example - vertical
			mulSliderRange('js-mul-slider-range-vertical-example',{
				orientation: 'vertical'
			});

			// Slider range example - vertical - fixed min
			mulSliderRangeSingleHandle('js-mul-slider-range-vertical-min-example',{
				orientation: 'vertical',
				range: 'min'
			});

			// Slider range example - vertical - fixed max
			mulSliderRangeSingleHandle('js-mul-slider-range-vertical-max-example',{
				orientation: 'vertical',
				range: 'max'
			});


		// TABS

			// Tabs example
			mulTabs('js-mul-tabs-example');

		
		// ADVANCED FILTER

			// Advanced filter example
			mulAdvancedFilter('js-mul-advanced-filter-example');

});