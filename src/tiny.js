/*!
 * Tiny.js
 * https://github.com/UserScript/tiny.js
 */

void function () {
	'use strict'

	//namespace
	var $ = function (s, eWrapper) {
		return (eWrapper || document).querySelectorAll(s)
	}

	//utilities
	//TODO
	//$.extend()
	$.each = function (a, fn, context) {
		//todo: object
		for (var i = 0, l = a.length; i < l; ++i) {
			fn.call(context || window, a[i], i, a)
		}
	}

	//str
	$.str = {}
	$.str.include = function (so, s) {
		return so.indexOf(s) > -1
	}
	//TODO
	//$.str.endsWith()
	$.str.startsWith = function (so, s) {
		return so.indexOf(s) === 0
	}

	//dom query
	$.id = function (s) {
		return document.getElementById(s)
	}
	$.cls = function (s, eWrapper) {
		return (eWrapper || document).getElementsByClassName(s)
	}
	$.tag = function (s, eWrapper) {
		return (eWrapper || document).getElementsByTagName(s)
	}

	//create
	$.createElem = function (s) {
		return document.createElement(s)
	}
	$.createText = function (s) {
		return document.createTextNode(s)
	}

	//mod dom
	//TODO
	//$.after()
	//$.insertAfter()
	$.insertBefore = function (e, eTarget) {
		eTarget.parentNode.insertBefore(e, eTarget)
	}
	$.before = function (eTarget, e) {
		eTarget.parentNode.insertBefore(e, eTarget)
	}
	//TODO
	//$.prepend()
	//$.prependTo()
	$.append = function (eWrapper, e) {
		eWrapper.appendChild(e)
	}
	$.appendTo = function (e, eWrapper) {
		eWrapper.appendChild(e)
	}
	$.remove = function (e) {
		e.parentNode.removeChild(e)
	}

	//class name
	$.hasClass = function (e, s) {
		return $.str.include(' ' + e.className + ' ', ' ' + s + ' ')
	}
	$.addClass = function (e, s) {
		var so = e.className
		if (!$.hasClass(so, s)) {
			e.className += (' ' + s)
		}
	}
	$.removeClass = function (e,s) {
		var so = e.className
		if ($.hasClass(so, s)) {
			e.className = (' ' + so + ' ').replace(' ' + s + ' ', ' ').trim()
		}
	}

	//style
	$.hide = function (e) {
		e.style.display = 'none'
	}
	$.show = function (e) {
		e.style.display = ''
	}
	$.css = function (e, prop, val) {
		if (arguments.length === 3) {
			e.style[prop] = val
		} else {
			e.style.cssText = prop
		}
	}
	$.insertCSS = function (s) {
		if (!s) return false
		var e = $.createElem('style')
		e.innerHTML = s
		$.tag('head')[0].appendChild(e)
		return e
	}

	//event
	$.on = function (e, sEvent, fn) {
		e.addEventListener(sEvent, fn, false)
	}
	$.off = function (e, sEvent, fn) {
		e.removeEventListener(sEvent, fn, false)
	}

	//exports
	if (
		!('jQuery' in window) &&
		!('Zepto' in window) &&
		!('$' in window)
	) {
		window.$ = $
	}

}()
