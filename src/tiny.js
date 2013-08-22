/*! Tiny.js v0.1.0 **/
var $ = function(s){return document.querySelectorAll(s);};
$.id = function(s){return document.getElementById(s);};
$.cls = function(s){return document.getElementsByClassName(s);};
$.tag = function(s,eWrapper){return (eWrapper || document).getElementsByTagName(s);};
$.crE = function(s){return document.createElement(s);};
$.crT = function(s){return document.createTextNode(s);};
$.insBfr = function(eW,e){eW.insertBefore(e,eW.firstChild);};
$.rmv = function (e) {e.parentNode.removeChild(e);};
$.getT = function(e){return e.firstChild.data;};
$.setT = function(e,s){e.firstChild.data=s;};
$.hide = function(e){e.style.visibility='hidden';};
$.show = function(e){e.style.visibility='visible';};
$.off = function(e){e.style.display='none';};
$.on = function(e){e.style.display='';};
$.style = function(e,p,v){
	if (v) {
		e.style[p] = v;
	} else {
		e.style.cssText = p;
	}
};
$.addEv = function(e,sEv,fn){e.addEventListener(sEv,fn,false);};
$.rmvEv = function(e,sEv,fn){e.removeEventListener(sEv,fn,false);};
$.each = function (a,fn){for(var i=0,l=a.length;i<l;++i){fn(a[i]);}};
$.hasT = function(so,s){return so.indexOf(s)>-1;};
$.hasCls = function(so,s){return $.hasT(' '+so+' ',' '+s+' ');};
$.addCls = function(e,s){var so=e.className;if(!$.hasCls(so,s))e.className+=(' '+s);};
$.rmvCls = function(e,s){var so=e.className;if($.hasCls(so,s))e.className=(' '+so+' ').replace(' '+s+' ',' ').trim();};
$.css = function (s) {
	var css = $.crE('style');
	css.innerHTML = s;
	console.log(css);
	$.tag('head')[0].appendChild(css);
};
$.cssText = '';

