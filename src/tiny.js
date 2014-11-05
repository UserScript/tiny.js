/*!
 * Tiny.js v0.4.0
 * https://github.com/UserScript/tiny.js
 */

void function (root) {
	'use strict'

	//namespace
	var $ = function (s, eWrapper) {
		return (eWrapper || document).querySelectorAll(s)
	}

	//type
	$.isArray = function (arr) {
		return Array.isArray(arr)
	}

	//data collection
	//TODO
	//$.extend()
	$.each = function (arr, fn, context) {
		//todo: object
		for (var i = 0, l = arr.length; i < l; ++i) {
			fn.call(context || window, arr[i], i, arr)
		}
	}
	$.inArray = function (arr, item) {
		if (!$.isArray(arr)) return false
		return arr.indexOf(item) > -1
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
		if (!$.hasClass(e, s)) {
			e.className += (' ' + s)
		}
	}
	$.removeClass = function (e, s) {
		if ($.hasClass(e, s)) {
			e.className = (' ' + e.className + ' ').replace(' ' + s + ' ', ' ').trim()
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
	root.$ = $

}(this)
