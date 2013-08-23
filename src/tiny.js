/*! Tiny.js v0.3.0 **/

//namespace
var $ = function (s, eWrapper) {
	return (eWrapper || document).querySelectorAll(s);
};

//utilties - array-like
$.each = function (a, fn, context) {
	for (var i = 0, l = a.length; i < l; ++i) {
		fn.call(context || window, a[i], i, a);
	}
};

//utilties - str
$.strstr = function (so, s) {
	return so.indexOf(s) > -1;
};

//dom query
$.id = function (s) {
	return document.getElementById(s);
};
$.class = function (s, eWrapper) {
	return (eWrapper || document).getElementsByClassName(s);
};
$.tag = function (s, eWrapper) {
	return (eWrapper || document).getElementsByTagName(s);
};

//creat
$.crElem = function (s) {
	return document.createElement(s);
};
$.crText = function (s) {
	return document.createTextNode(s);
};

//mod dom
$.insertBefore = function (e, eTarget) {
	eTarget.parentNode.insertBefore(e, eTarget);
};
$.before = function (eTarget, e) {
	$.insBefore(e, eTarget);
};
$.append = function (eWrapper, e) {
	eWrapper.appendChild(e);
}
$.appendTo = function (e, eWrapper) {
	$.append(eWrapper, e);
}
$.remove = function (e) {
	e.parentNode.removeChild(e);
};

//classname
$.hasClass = function (e, s) {
	return $.strstr(' ' + e.className + ' ', ' ' + s + ' ');
};
$.addClass = function (e, s) {
	var so = e.className;
	if (!$.hasClass(so, s)) {
		e.className += (' ' + s);
	}
};
$.removeClass = function (e,s) {
	var so = e.className;
	if ($.hasClass(so, s)) {
		e.className = (' ' + so + ' ').replace(' ' + s + ' ', ' ').trim();
	}
};

//style
$.visible = function (e, b) {
	var val = b ? 'visible' : 'hidden';
	e.style.visibility = val;
};
$.hide = function (e) {
	e.style.display = 'none';
};
$.show = function (e) {
	e.style.display = '';
};
$.setStyle = function (e, prop, val) {
	if (v) {
		e.style[prop] = val;
	} else {
		e.style.cssText = prop;
	}
};
$.css = function (s) {
	var e = $.crElem('style');
	var cssText = s || $.cssText;
	if (cssText) {
		e.innerHTML = cssText;
		//console.log(css);
		$.tag('head')[0].appendChild(e);
	}
};
$.cssText = '';

//event
$.on = function (e, sEvent, fn) {
	e.addEventListener(sEvent, fn, false);
};
$.off = function (e, sEvent, fn) {
	e.removeEventListener(sEvent, fn, false);
};

