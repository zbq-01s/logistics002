!function(f, C) {
    var t, i, v = typeof C, m = f.document, e = f.location, n = f.jQuery, s = f.$, a = {}, h = [], r = "1.9.1", y = h.concat, o = h.push, c = h.slice, l = h.indexOf, u = a.toString, g = a.hasOwnProperty, p = r.trim, ge = function(e, t) {
        return new ge.fn.init(e,t,i)
    }, d = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, S = /\S+/g, b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, w = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, T = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g, _ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, k = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, z = /^-ms-/, P = /-([\da-z])/gi, N = function(e, t) {
        return t.toUpperCase()
    }, M = function(e) {
        (m.addEventListener || "load" === e.type || "complete" === m.readyState) && (D(),
            ge.ready())
    }, D = function() {
        m.addEventListener ? (m.removeEventListener("DOMContentLoaded", M, !1),
            f.removeEventListener("load", M, !1)) : (m.detachEvent("onreadystatechange", M),
            f.detachEvent("onload", M))
    };
    function A(e) {
        var t = e.length
            , i = ge.type(e);
        return !ge.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || "function" !== i && (0 === t || "number" == typeof t && 0 < t && t - 1 in e)))
    }
    ge.fn = ge.prototype = {
        jquery: r,
        constructor: ge,
        init: function(e, t, i) {
            var n, s;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : w.exec(e)) || !n[1] && t)
                    return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof ge ? t[0] : t,
                            ge.merge(this, ge.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : m, !0)),
                        x.test(n[1]) && ge.isPlainObject(t))
                        for (n in t)
                            ge.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((s = m.getElementById(n[2])) && s.parentNode) {
                    if (s.id !== n[2])
                        return i.find(e);
                    this.length = 1,
                        this[0] = s
                }
                return this.context = m,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : ge.isFunction(e) ? i.ready(e) : (e.selector !== C && (this.selector = e.selector,
                this.context = e.context),
                ge.makeArray(e, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return c.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(e, t) {
            return ge.each(this, e, t)
        },
        ready: function(e) {
            return ge.ready.promise().done(e),
                this
        },
        slice: function() {
            return this.pushStack(c.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , i = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= i && i < t ? [this[i]] : [])
        },
        map: function(i) {
            return this.pushStack(ge.map(this, function(e, t) {
                return i.call(e, t, e)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: o,
        sort: [].sort,
        splice: [].splice
    },
        ge.fn.init.prototype = ge.fn,
        ge.extend = ge.fn.extend = function() {
            var e, t, i, n, s, a, r = arguments[0] || {}, o = 1, l = arguments.length, u = !1;
            for ("boolean" == typeof r && (u = r,
                r = arguments[1] || {},
                o = 2),
                 "object" == typeof r || ge.isFunction(r) || (r = {}),
                 l === o && (r = this,
                     --o); o < l; o++)
                if (null != (s = arguments[o]))
                    for (n in s)
                        e = r[n],
                        r !== (i = s[n]) && (u && i && (ge.isPlainObject(i) || (t = ge.isArray(i))) ? (t ? (t = !1,
                            a = e && ge.isArray(e) ? e : []) : a = e && ge.isPlainObject(e) ? e : {},
                            r[n] = ge.extend(u, a, i)) : i !== C && (r[n] = i));
            return r
        }
        ,
        ge.extend({
            noConflict: function(e) {
                return f.$ === ge && (f.$ = s),
                e && f.jQuery === ge && (f.jQuery = n),
                    ge
            },
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? ge.readyWait++ : ge.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--ge.readyWait : !ge.isReady) {
                    if (!m.body)
                        return setTimeout(ge.ready);
                    (ge.isReady = !0) !== e && 0 < --ge.readyWait || (t.resolveWith(m, [ge]),
                    ge.fn.trigger && ge(m).trigger("ready").off("ready"))
                }
            },
            isFunction: function(e) {
                return "function" === ge.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === ge.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            },
            type: function(e) {
                return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? a[u.call(e)] || "object" : typeof e
            },
            isPlainObject: function(e) {
                if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (e) {
                    return !1
                }
                var t;
                for (t in e)
                    ;
                return t === C || g.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            error: function(e) {
                throw new Error(e)
            },
            parseHTML: function(e, t, i) {
                if (!e || "string" != typeof e)
                    return null;
                "boolean" == typeof t && (i = t,
                    t = !1),
                    t = t || m;
                var n = x.exec(e)
                    , s = !i && [];
                return n ? [t.createElement(n[1])] : (n = ge.buildFragment([e], t, s),
                s && ge(s).remove(),
                    ge.merge([], n.childNodes))
            },
            parseJSON: function(e) {
                return f.JSON && f.JSON.parse ? f.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ge.trim(e)) && T.test(e.replace(_, "@").replace(k, "]").replace(E, "")) ? new Function("return " + e)() : void ge.error("Invalid JSON: " + e)
            },
            parseXML: function(e) {
                var t;
                if (!e || "string" != typeof e)
                    return null;
                try {
                    f.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
                        t.loadXML(e))
                } catch (e) {
                    t = C
                }
                return t && t.documentElement && !t.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + e),
                    t
            },
            noop: function() {},
            globalEval: function(e) {
                e && ge.trim(e) && (f.execScript || function(e) {
                        f.eval.call(f, e)
                    }
                )(e)
            },
            camelCase: function(e) {
                return e.replace(z, "ms-").replace(P, N)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var n = 0
                    , s = e.length
                    , a = A(e);
                if (i) {
                    if (a)
                        for (; n < s && !1 !== t.apply(e[n], i); n++)
                            ;
                    else
                        for (n in e)
                            if (!1 === t.apply(e[n], i))
                                break
                } else if (a)
                    for (; n < s && !1 !== t.call(e[n], n, e[n]); n++)
                        ;
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n]))
                            break;
                return e
            },
            trim: p && !p.call("\ufeff ") ? function(e) {
                    return null == e ? "" : p.call(e)
                }
                : function(e) {
                    return null == e ? "" : (e + "").replace(b, "")
                }
            ,
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (A(Object(e)) ? ge.merge(i, "string" == typeof e ? [e] : e) : o.call(i, e)),
                    i
            },
            inArray: function(e, t, i) {
                var n;
                if (t) {
                    if (l)
                        return l.call(t, e, i);
                    for (n = t.length,
                             i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                        if (i in t && t[i] === e)
                            return i
                }
                return -1
            },
            merge: function(e, t) {
                var i = t.length
                    , n = e.length
                    , s = 0;
                if ("number" == typeof i)
                    for (; s < i; s++)
                        e[n++] = t[s];
                else
                    for (; t[s] !== C; )
                        e[n++] = t[s++];
                return e.length = n,
                    e
            },
            grep: function(e, t, i) {
                var n = []
                    , s = 0
                    , a = e.length;
                for (i = !!i; s < a; s++)
                    i !== !!t(e[s], s) && n.push(e[s]);
                return n
            },
            map: function(e, t, i) {
                var n, s = 0, a = e.length, r = [];
                if (A(e))
                    for (; s < a; s++)
                        null != (n = t(e[s], s, i)) && (r[r.length] = n);
                else
                    for (s in e)
                        null != (n = t(e[s], s, i)) && (r[r.length] = n);
                return y.apply([], r)
            },
            guid: 1,
            proxy: function(e, t) {
                var i, n, s;
                return "string" == typeof t && (s = e[t],
                    t = e,
                    e = s),
                    ge.isFunction(e) ? (i = c.call(arguments, 2),
                        (n = function() {
                                return e.apply(t || this, i.concat(c.call(arguments)))
                            }
                        ).guid = e.guid = e.guid || ge.guid++,
                        n) : C
            },
            access: function(e, t, i, n, s, a, r) {
                var o = 0
                    , l = e.length
                    , u = null == i;
                if ("object" === ge.type(i))
                    for (o in s = !0,
                        i)
                        ge.access(e, t, o, i[o], !0, a, r);
                else if (n !== C && (s = !0,
                    ge.isFunction(n) || (r = !0),
                    u && (r ? (t.call(e, n),
                        t = null) : (u = t,
                            t = function(e, t, i) {
                                return u.call(ge(e), i)
                            }
                    )),
                        t))
                    for (; o < l; o++)
                        t(e[o], i, r ? n : n.call(e[o], o, t(e[o], i)));
                return s ? e : u ? t.call(e) : l ? t(e[0], i) : a
            },
            now: function() {
                return (new Date).getTime()
            }
        }),
        ge.ready.promise = function(e) {
            if (!t)
                if (t = ge.Deferred(),
                    "complete" === m.readyState)
                    setTimeout(ge.ready);
                else if (m.addEventListener)
                    m.addEventListener("DOMContentLoaded", M, !1),
                        f.addEventListener("load", M, !1);
                else {
                    m.attachEvent("onreadystatechange", M),
                        f.attachEvent("onload", M);
                    var i = !1;
                    try {
                        i = null == f.frameElement && m.documentElement
                    } catch (e) {}
                    i && i.doScroll && function t() {
                        if (!ge.isReady) {
                            try {
                                i.doScroll("left")
                            } catch (e) {
                                return setTimeout(t, 50)
                            }
                            D(),
                                ge.ready()
                        }
                    }()
                }
            return t.promise(e)
        }
        ,
        ge.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            a["[object " + t + "]"] = t.toLowerCase()
        }),
        i = ge(m);
    var I = {};
    ge.Callbacks = function(s) {
        var e, i;
        s = "string" == typeof s ? I[s] || (i = I[e = s] = {},
            ge.each(e.match(S) || [], function(e, t) {
                i[t] = !0
            }),
            i) : ge.extend({}, s);
        var n, t, a, r, o, l, u = [], c = !s.once && [], h = function(e) {
            for (t = s.memory && e,
                     a = !0,
                     o = l || 0,
                     l = 0,
                     r = u.length,
                     n = !0; u && o < r; o++)
                if (!1 === u[o].apply(e[0], e[1]) && s.stopOnFalse) {
                    t = !1;
                    break
                }
            n = !1,
            u && (c ? c.length && h(c.shift()) : t ? u = [] : p.disable())
        }, p = {
            add: function() {
                if (u) {
                    var e = u.length;
                    !function n(e) {
                        ge.each(e, function(e, t) {
                            var i = ge.type(t);
                            "function" === i ? s.unique && p.has(t) || u.push(t) : t && t.length && "string" !== i && n(t)
                        })
                    }(arguments),
                        n ? r = u.length : t && (l = e,
                            h(t))
                }
                return this
            },
            remove: function() {
                return u && ge.each(arguments, function(e, t) {
                    for (var i; -1 < (i = ge.inArray(t, u, i)); )
                        u.splice(i, 1),
                        n && (i <= r && r--,
                        i <= o && o--)
                }),
                    this
            },
            has: function(e) {
                return e ? -1 < ge.inArray(e, u) : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                    this
            },
            disable: function() {
                return u = c = t = C,
                    this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return c = C,
                t || p.disable(),
                    this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, t) {
                return t = [e, (t = t || []).slice ? t.slice() : t],
                !u || a && !c || (n ? c.push(t) : h(t)),
                    this
            },
            fire: function() {
                return p.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!a
            }
        };
        return p
    }
        ,
        ge.extend({
            Deferred: function(e) {
                var r = [["resolve", "done", ge.Callbacks("once memory"), "resolved"], ["reject", "fail", ge.Callbacks("once memory"), "rejected"], ["notify", "progress", ge.Callbacks("memory")]]
                    , s = "pending"
                    , o = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return l.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var a = arguments;
                        return ge.Deferred(function(s) {
                            ge.each(r, function(e, t) {
                                var i = t[0]
                                    , n = ge.isFunction(a[e]) && a[e];
                                l[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[i + "With"](this === o ? s.promise() : this, n ? [e] : arguments)
                                })
                            }),
                                a = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, o) : o
                    }
                }
                    , l = {};
                return o.pipe = o.then,
                    ge.each(r, function(e, t) {
                        var i = t[2]
                            , n = t[3];
                        o[t[1]] = i.add,
                        n && i.add(function() {
                            s = n
                        }, r[1 ^ e][2].disable, r[2][2].lock),
                            l[t[0]] = function() {
                                return l[t[0] + "With"](this === l ? o : this, arguments),
                                    this
                            }
                            ,
                            l[t[0] + "With"] = i.fireWith
                    }),
                    o.promise(l),
                e && e.call(l, l),
                    l
            },
            when: function(e) {
                var s, t, i, n = 0, a = c.call(arguments), r = a.length, o = 1 !== r || e && ge.isFunction(e.promise) ? r : 0, l = 1 === o ? e : ge.Deferred(), u = function(t, i, n) {
                    return function(e) {
                        i[t] = this,
                            n[t] = 1 < arguments.length ? c.call(arguments) : e,
                            n === s ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
                    }
                };
                if (1 < r)
                    for (s = new Array(r),
                             t = new Array(r),
                             i = new Array(r); n < r; n++)
                        a[n] && ge.isFunction(a[n].promise) ? a[n].promise().done(u(n, i, a)).fail(l.reject).progress(u(n, t, s)) : --o;
                return o || l.resolveWith(i, a),
                    l.promise()
            }
        }),
        ge.support = function() {
            var a, e, t, i, n, s, r, o, l, u, c = m.createElement("div");
            if (c.setAttribute("className", "t"),
                    c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                    e = c.getElementsByTagName("*"),
                    t = c.getElementsByTagName("a")[0],
                !e || !t || !e.length)
                return {};
            r = (n = m.createElement("select")).appendChild(m.createElement("option")),
                i = c.getElementsByTagName("input")[0],
                t.style.cssText = "top:1px;float:left;opacity:.5",
                a = {
                    getSetAttribute: "t" !== c.className,
                    leadingWhitespace: 3 === c.firstChild.nodeType,
                    tbody: !c.getElementsByTagName("tbody").length,
                    htmlSerialize: !!c.getElementsByTagName("link").length,
                    style: /top/.test(t.getAttribute("style")),
                    hrefNormalized: "/a" === t.getAttribute("href"),
                    opacity: /^0.5/.test(t.style.opacity),
                    cssFloat: !!t.style.cssFloat,
                    checkOn: !!i.value,
                    optSelected: r.selected,
                    enctype: !!m.createElement("form").enctype,
                    html5Clone: "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML,
                    boxModel: "CSS1Compat" === m.compatMode,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0,
                    boxSizingReliable: !0,
                    pixelPosition: !1
                },
                i.checked = !0,
                a.noCloneChecked = i.cloneNode(!0).checked,
                n.disabled = !0,
                a.optDisabled = !r.disabled;
            try {
                delete c.test
            } catch (e) {
                a.deleteExpando = !1
            }
            for (u in (i = m.createElement("input")).setAttribute("value", ""),
                a.input = "" === i.getAttribute("value"),
                i.value = "t",
                i.setAttribute("type", "radio"),
                a.radioValue = "t" === i.value,
                i.setAttribute("checked", "t"),
                i.setAttribute("name", "t"),
                (s = m.createDocumentFragment()).appendChild(i),
                a.appendChecked = i.checked,
                a.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
            c.attachEvent && (c.attachEvent("onclick", function() {
                a.noCloneEvent = !1
            }),
                c.cloneNode(!0).click()),
                {
                    submit: !0,
                    change: !0,
                    focusin: !0
                })
                c.setAttribute(o = "on" + u, "t"),
                    a[u + "Bubbles"] = o in f || !1 === c.attributes[o].expando;
            return c.style.backgroundClip = "content-box",
                c.cloneNode(!0).style.backgroundClip = "",
                a.clearCloneStyle = "content-box" === c.style.backgroundClip,
                ge(function() {
                    var e, t, i, n = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", s = m.getElementsByTagName("body")[0];
                    s && ((e = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                        s.appendChild(e).appendChild(c),
                        c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                        (i = c.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none",
                        l = 0 === i[0].offsetHeight,
                        i[0].style.display = "",
                        i[1].style.display = "none",
                        a.reliableHiddenOffsets = l && 0 === i[0].offsetHeight,
                        c.innerHTML = "",
                        c.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                        a.boxSizing = 4 === c.offsetWidth,
                        a.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop,
                    f.getComputedStyle && (a.pixelPosition = "1%" !== (f.getComputedStyle(c, null) || {}).top,
                        a.boxSizingReliable = "4px" === (f.getComputedStyle(c, null) || {
                            width: "4px"
                        }).width,
                        (t = c.appendChild(m.createElement("div"))).style.cssText = c.style.cssText = n,
                        t.style.marginRight = t.style.width = "0",
                        c.style.width = "1px",
                        a.reliableMarginRight = !parseFloat((f.getComputedStyle(t, null) || {}).marginRight)),
                    typeof c.style.zoom !== v && (c.innerHTML = "",
                        c.style.cssText = n + "width:1px;padding:1px;display:inline;zoom:1",
                        a.inlineBlockNeedsLayout = 3 === c.offsetWidth,
                        c.style.display = "block",
                        c.innerHTML = "<div></div>",
                        c.firstChild.style.width = "5px",
                        a.shrinkWrapBlocks = 3 !== c.offsetWidth,
                    a.inlineBlockNeedsLayout && (s.style.zoom = 1)),
                        s.removeChild(e),
                        e = c = i = t = null)
                }),
                e = n = s = r = t = i = null,
                a
        }();
    var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/
        , L = /([A-Z])/g;
    function R(e, t, i, n) {
        if (ge.acceptData(e)) {
            var s, a, r = ge.expando, o = "string" == typeof t, l = e.nodeType, u = l ? ge.cache : e, c = l ? e[r] : e[r] && r;
            if (c && u[c] && (n || u[c].data) || !o || i !== C)
                return c || (l ? e[r] = c = h.pop() || ge.guid++ : c = r),
                u[c] || (u[c] = {},
                l || (u[c].toJSON = ge.noop)),
                "object" != typeof t && "function" != typeof t || (n ? u[c] = ge.extend(u[c], t) : u[c].data = ge.extend(u[c].data, t)),
                    s = u[c],
                n || (s.data || (s.data = {}),
                    s = s.data),
                i !== C && (s[ge.camelCase(t)] = i),
                    o ? null == (a = s[t]) && (a = s[ge.camelCase(t)]) : a = s,
                    a
        }
    }
    function O(e, t, i) {
        if (ge.acceptData(e)) {
            var n, s, a, r = e.nodeType, o = r ? ge.cache : e, l = r ? e[ge.expando] : ge.expando;
            if (o[l]) {
                if (t && (a = i ? o[l] : o[l].data)) {
                    for ((n = 0,
                        s = (t = ge.isArray(t) ? t.concat(ge.map(t, ge.camelCase)) : t in a ? [t] : (t = ge.camelCase(t))in a ? [t] : t.split(" ")).length); n < s; n++)
                        delete a[t[n]];
                    if (!(i ? j : ge.isEmptyObject)(a))
                        return
                }
                (i || (delete o[l].data,
                    j(o[l]))) && (r ? ge.cleanData([e], !0) : ge.support.deleteExpando || o != o.window ? delete o[l] : o[l] = null)
            }
        }
    }
    function $(e, t, i) {
        if (i === C && 1 === e.nodeType) {
            var n = "data-" + t.replace(L, "-$1").toLowerCase();
            if ("string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : H.test(i) ? ge.parseJSON(i) : i)
                } catch (e) {}
                ge.data(e, t, i)
            } else
                i = C
        }
        return i
    }
    function j(e) {
        var t;
        for (t in e)
            if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    ge.extend({
        cache: {},
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) && !j(e)
        },
        data: function(e, t, i) {
            return R(e, t, i)
        },
        removeData: function(e, t) {
            return O(e, t)
        },
        _data: function(e, t, i) {
            return R(e, t, i, !0)
        },
        _removeData: function(e, t) {
            return O(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)
                return !1;
            var t = e.nodeName && ge.noData[e.nodeName.toLowerCase()];
            return !t || !0 !== t && e.getAttribute("classid") === t
        }
    }),
        ge.fn.extend({
            data: function(t, e) {
                var i, n, s = this[0], a = 0, r = null;
                if (t === C) {
                    if (this.length && (r = ge.data(s),
                        1 === s.nodeType && !ge._data(s, "parsedAttrs"))) {
                        for (i = s.attributes; a < i.length; a++)
                            (n = i[a].name).indexOf("data-") || (n = ge.camelCase(n.slice(5)),
                                $(s, n, r[n]));
                        ge._data(s, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    ge.data(this, t)
                }) : ge.access(this, function(e) {
                    if (e === C)
                        return s ? $(s, t, ge.data(s, t)) : null;
                    this.each(function() {
                        ge.data(this, t, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    ge.removeData(this, e)
                })
            }
        }),
        ge.extend({
            queue: function(e, t, i) {
                var n;
                if (e)
                    return t = (t || "fx") + "queue",
                        n = ge._data(e, t),
                    i && (!n || ge.isArray(i) ? n = ge._data(e, t, ge.makeArray(i)) : n.push(i)),
                    n || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var i = ge.queue(e, t)
                    , n = i.length
                    , s = i.shift()
                    , a = ge._queueHooks(e, t);
                "inprogress" === s && (s = i.shift(),
                    n--),
                (a.cur = s) && ("fx" === t && i.unshift("inprogress"),
                    delete a.stop,
                    s.call(e, function() {
                        ge.dequeue(e, t)
                    }, a)),
                !n && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var i = t + "queueHooks";
                return ge._data(e, i) || ge._data(e, i, {
                    empty: ge.Callbacks("once memory").add(function() {
                        ge._removeData(e, t + "queue"),
                            ge._removeData(e, i)
                    })
                })
            }
        }),
        ge.fn.extend({
            queue: function(t, i) {
                var e = 2;
                return "string" != typeof t && (i = t,
                    t = "fx",
                    e--),
                    arguments.length < e ? ge.queue(this[0], t) : i === C ? this : this.each(function() {
                        var e = ge.queue(this, t, i);
                        ge._queueHooks(this, t),
                        "fx" === t && "inprogress" !== e[0] && ge.dequeue(this, t)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    ge.dequeue(this, e)
                })
            },
            delay: function(n, e) {
                return n = ge.fx && ge.fx.speeds[n] || n,
                    e = e || "fx",
                    this.queue(e, function(e, t) {
                        var i = setTimeout(e, n);
                        t.stop = function() {
                            clearTimeout(i)
                        }
                    })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var i, n = 1, s = ge.Deferred(), a = this, r = this.length, o = function() {
                    --n || s.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                    e = C),
                         e = e || "fx"; r--; )
                    (i = ge._data(a[r], e + "queueHooks")) && i.empty && (n++,
                        i.empty.add(o));
                return o(),
                    s.promise(t)
            }
        });
    var W, B, F = /[\t\r\n]/g, q = /\r/g, X = /^(?:input|select|textarea|button|object)$/i, Y = /^(?:a|area)$/i, G = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, U = /^(?:checked|selected)$/i, V = ge.support.getSetAttribute, K = ge.support.input;
    ge.fn.extend({
        attr: function(e, t) {
            return ge.access(this, ge.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ge.access(this, ge.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return e = ge.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = C,
                            delete this[e]
                    } catch (e) {}
                })
        },
        addClass: function(t) {
            var e, i, n, s, a, r = 0, o = this.length, l = "string" == typeof t && t;
            if (ge.isFunction(t))
                return this.each(function(e) {
                    ge(this).addClass(t.call(this, e, this.className))
                });
            if (l)
                for (e = (t || "").match(S) || []; r < o; r++)
                    if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(F, " ") : " ")) {
                        for (a = 0; s = e[a++]; )
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        i.className = ge.trim(n)
                    }
            return this
        },
        removeClass: function(t) {
            var e, i, n, s, a, r = 0, o = this.length, l = 0 === arguments.length || "string" == typeof t && t;
            if (ge.isFunction(t))
                return this.each(function(e) {
                    ge(this).removeClass(t.call(this, e, this.className))
                });
            if (l)
                for (e = (t || "").match(S) || []; r < o; r++)
                    if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(F, " ") : "")) {
                        for (a = 0; s = e[a++]; )
                            for (; 0 <= n.indexOf(" " + s + " "); )
                                n = n.replace(" " + s + " ", " ");
                        i.className = t ? ge.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(a, r) {
            var o = typeof a
                , l = "boolean" == typeof r;
            return ge.isFunction(a) ? this.each(function(e) {
                ge(this).toggleClass(a.call(this, e, this.className, r), r)
            }) : this.each(function() {
                if ("string" === o)
                    for (var e, t = 0, i = ge(this), n = r, s = a.match(S) || []; e = s[t++]; )
                        n = l ? n : !i.hasClass(e),
                            i[n ? "addClass" : "removeClass"](e);
                else
                    o !== v && "boolean" !== o || (this.className && ge._data(this, "__className__", this.className),
                        this.className = this.className || !1 === a ? "" : ge._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(F, " ").indexOf(t))
                    return !0;
            return !1
        },
        val: function(n) {
            var e, s, a, t = this[0];
            return arguments.length ? (a = ge.isFunction(n),
                this.each(function(e) {
                    var t, i = ge(this);
                    1 === this.nodeType && (null == (t = a ? n.call(this, e, i.val()) : n) ? t = "" : "number" == typeof t ? t += "" : ge.isArray(t) && (t = ge.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (s = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()]) && "set"in s && s.set(this, t, "value") !== C || (this.value = t))
                })) : t ? (s = ge.valHooks[t.type] || ge.valHooks[t.nodeName.toLowerCase()]) && "get"in s && (e = s.get(t, "value")) !== C ? e : "string" == typeof (e = t.value) ? e.replace(q, "") : null == e ? "" : e : void 0
        }
    }),
        ge.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = e.attributes.value;
                        return !t || t.specified ? e.value : e.text
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, i, n = e.options, s = e.selectedIndex, a = "select-one" === e.type || s < 0, r = a ? null : [], o = a ? s + 1 : n.length, l = s < 0 ? o : a ? s : 0; l < o; l++)
                            if (((i = n[l]).selected || l === s) && (ge.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ge.nodeName(i.parentNode, "optgroup"))) {
                                if (t = ge(i).val(),
                                        a)
                                    return t;
                                r.push(t)
                            }
                        return r
                    },
                    set: function(e, t) {
                        var i = ge.makeArray(t);
                        return ge(e).find("option").each(function() {
                            this.selected = 0 <= ge.inArray(ge(this).val(), i)
                        }),
                        i.length || (e.selectedIndex = -1),
                            i
                    }
                }
            },
            attr: function(e, t, i) {
                var n, s, a, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r)
                    return typeof e.getAttribute === v ? ge.prop(e, t, i) : ((s = 1 !== r || !ge.isXMLDoc(e)) && (t = t.toLowerCase(),
                        n = ge.attrHooks[t] || (G.test(t) ? B : W)),
                        i === C ? n && s && "get"in n && null !== (a = n.get(e, t)) ? a : (typeof e.getAttribute !== v && (a = e.getAttribute(t)),
                            null == a ? C : a) : null !== i ? n && s && "set"in n && (a = n.set(e, i, t)) !== C ? a : (e.setAttribute(t, i + ""),
                            i) : void ge.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var i, n, s = 0, a = t && t.match(S);
                if (a && 1 === e.nodeType)
                    for (; i = a[s++]; )
                        n = ge.propFix[i] || i,
                            G.test(i) ? !V && U.test(i) ? e[ge.camelCase("default-" + i)] = e[n] = !1 : e[n] = !1 : ge.attr(e, i, ""),
                            e.removeAttribute(V ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ge.support.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t),
                            i && (e.value = i),
                                t
                        }
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                for: "htmlFor",
                class: "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(e, t, i) {
                var n, s, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)
                    return (1 !== a || !ge.isXMLDoc(e)) && (t = ge.propFix[t] || t,
                        s = ge.propHooks[t]),
                        i !== C ? s && "set"in s && (n = s.set(e, i, t)) !== C ? n : e[t] = i : s && "get"in s && null !== (n = s.get(e, t)) ? n : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = e.getAttributeNode("tabindex");
                        return t && t.specified ? parseInt(t.value, 10) : X.test(e.nodeName) || Y.test(e.nodeName) && e.href ? 0 : C
                    }
                }
            }
        }),
        B = {
            get: function(e, t) {
                var i = ge.prop(e, t)
                    , n = "boolean" == typeof i && e.getAttribute(t)
                    , s = "boolean" == typeof i ? K && V ? null != n : U.test(t) ? e[ge.camelCase("default-" + t)] : !!n : e.getAttributeNode(t);
                return s && !1 !== s.value ? t.toLowerCase() : C
            },
            set: function(e, t, i) {
                return !1 === t ? ge.removeAttr(e, i) : K && V || !U.test(i) ? e.setAttribute(!V && ge.propFix[i] || i, i) : e[ge.camelCase("default-" + i)] = e[i] = !0,
                    i
            }
        },
    K && V || (ge.attrHooks.value = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return ge.nodeName(e, "input") ? e.defaultValue : i && i.specified ? i.value : C
        },
        set: function(e, t, i) {
            if (!ge.nodeName(e, "input"))
                return W && W.set(e, t, i);
            e.defaultValue = t
        }
    }),
    V || (W = ge.valHooks.button = {
        get: function(e, t) {
            var i = e.getAttributeNode(t);
            return i && ("id" === t || "name" === t || "coords" === t ? "" !== i.value : i.specified) ? i.value : C
        },
        set: function(e, t, i) {
            var n = e.getAttributeNode(i);
            return n || e.setAttributeNode(n = e.ownerDocument.createAttribute(i)),
                n.value = t += "",
                "value" === i || t === e.getAttribute(i) ? t : C
        }
    },
        ge.attrHooks.contenteditable = {
            get: W.get,
            set: function(e, t, i) {
                W.set(e, "" !== t && t, i)
            }
        },
        ge.each(["width", "height"], function(e, i) {
            ge.attrHooks[i] = ge.extend(ge.attrHooks[i], {
                set: function(e, t) {
                    if ("" === t)
                        return e.setAttribute(i, "auto"),
                            t
                }
            })
        })),
    ge.support.hrefNormalized || (ge.each(["href", "src", "width", "height"], function(e, i) {
        ge.attrHooks[i] = ge.extend(ge.attrHooks[i], {
            get: function(e) {
                var t = e.getAttribute(i, 2);
                return null == t ? C : t
            }
        })
    }),
        ge.each(["href", "src"], function(e, t) {
            ge.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })),
    ge.support.style || (ge.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || C
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    ge.support.optSelected || (ge.propHooks.selected = ge.extend(ge.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
                null
        }
    })),
    ge.support.enctype || (ge.propFix.enctype = "encoding"),
    ge.support.checkOn || ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }),
        ge.each(["radio", "checkbox"], function() {
            ge.valHooks[this] = ge.extend(ge.valHooks[this], {
                set: function(e, t) {
                    if (ge.isArray(t))
                        return e.checked = 0 <= ge.inArray(ge(e).val(), t)
                }
            })
        });
    var Q = /^(?:input|select|textarea)$/i
        , J = /^key/
        , Z = /^(?:mouse|contextmenu)|click/
        , ee = /^(?:focusinfocus|focusoutblur)$/
        , te = /^([^.]*)(?:\.(.+)|)$/;
    function ie() {
        return !0
    }
    function ne() {
        return !1
    }
    ge.event = {
        global: {},
        add: function(e, t, i, n, s) {
            var a, r, o, l, u, c, h, p, d, f, m, g = ge._data(e);
            if (g) {
                for (i.handler && (i = (l = i).handler,
                    s = l.selector),
                     i.guid || (i.guid = ge.guid++),
                     (r = g.events) || (r = g.events = {}),
                     (c = g.handle) || ((c = g.handle = function(e) {
                             return typeof ge === v || e && ge.event.triggered === e.type ? C : ge.event.dispatch.apply(c.elem, arguments)
                         }
                     ).elem = e),
                         o = (t = (t || "").match(S) || [""]).length; o--; )
                    d = m = (a = te.exec(t[o]) || [])[1],
                        f = (a[2] || "").split(".").sort(),
                        u = ge.event.special[d] || {},
                        d = (s ? u.delegateType : u.bindType) || d,
                        u = ge.event.special[d] || {},
                        h = ge.extend({
                            type: d,
                            origType: m,
                            data: n,
                            handler: i,
                            guid: i.guid,
                            selector: s,
                            needsContext: s && ge.expr.match.needsContext.test(s),
                            namespace: f.join(".")
                        }, l),
                    (p = r[d]) || ((p = r[d] = []).delegateCount = 0,
                    u.setup && !1 !== u.setup.call(e, n, f, c) || (e.addEventListener ? e.addEventListener(d, c, !1) : e.attachEvent && e.attachEvent("on" + d, c))),
                    u.add && (u.add.call(e, h),
                    h.handler.guid || (h.handler.guid = i.guid)),
                        s ? p.splice(p.delegateCount++, 0, h) : p.push(h),
                        ge.event.global[d] = !0;
                e = null
            }
        },
        remove: function(e, t, i, n, s) {
            var a, r, o, l, u, c, h, p, d, f, m, g = ge.hasData(e) && ge._data(e);
            if (g && (c = g.events)) {
                for (u = (t = (t || "").match(S) || [""]).length; u--; )
                    if (d = m = (o = te.exec(t[u]) || [])[1],
                            f = (o[2] || "").split(".").sort(),
                            d) {
                        for (h = ge.event.special[d] || {},
                                 p = c[d = (n ? h.delegateType : h.bindType) || d] || [],
                                 o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 l = a = p.length; a--; )
                            r = p[a],
                            !s && m !== r.origType || i && i.guid !== r.guid || o && !o.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (p.splice(a, 1),
                            r.selector && p.delegateCount--,
                            h.remove && h.remove.call(e, r));
                        l && !p.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || ge.removeEvent(e, d, g.handle),
                            delete c[d])
                    } else
                        for (d in c)
                            ge.event.remove(e, d + t[u], i, n, !0);
                ge.isEmptyObject(c) && (delete g.handle,
                    ge._removeData(e, "events"))
            }
        },
        trigger: function(e, t, i, n) {
            var s, a, r, o, l, u, c, h = [i || m], p = g.call(e, "type") ? e.type : e, d = g.call(e, "namespace") ? e.namespace.split(".") : [];
            if (r = u = i = i || m,
                3 !== i.nodeType && 8 !== i.nodeType && !ee.test(p + ge.event.triggered) && (0 <= p.indexOf(".") && (p = (d = p.split(".")).shift(),
                    d.sort()),
                    a = p.indexOf(":") < 0 && "on" + p,
                    (e = e[ge.expando] ? e : new ge.Event(p,"object" == typeof e && e)).isTrigger = !0,
                    e.namespace = d.join("."),
                    e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = C,
                e.target || (e.target = i),
                    t = null == t ? [e] : ge.makeArray(t, [e]),
                    l = ge.event.special[p] || {},
                n || !l.trigger || !1 !== l.trigger.apply(i, t))) {
                if (!n && !l.noBubble && !ge.isWindow(i)) {
                    for (o = l.delegateType || p,
                         ee.test(o + p) || (r = r.parentNode); r; r = r.parentNode)
                        h.push(r),
                            u = r;
                    u === (i.ownerDocument || m) && h.push(u.defaultView || u.parentWindow || f)
                }
                for (c = 0; (r = h[c++]) && !e.isPropagationStopped(); )
                    e.type = 1 < c ? o : l.bindType || p,
                    (s = (ge._data(r, "events") || {})[e.type] && ge._data(r, "handle")) && s.apply(r, t),
                    (s = a && r[a]) && ge.acceptData(r) && s.apply && !1 === s.apply(r, t) && e.preventDefault();
                if (e.type = p,
                    !n && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(i.ownerDocument, t)) && ("click" !== p || !ge.nodeName(i, "a")) && ge.acceptData(i) && a && i[p] && !ge.isWindow(i)) {
                    (u = i[a]) && (i[a] = null),
                        ge.event.triggered = p;
                    try {
                        i[p]()
                    } catch (e) {}
                    ge.event.triggered = C,
                    u && (i[a] = u)
                }
                return e.result
            }
        },
        dispatch: function(e) {
            e = ge.event.fix(e);
            var t, i, n, s, a, r, o = c.call(arguments), l = (ge._data(this, "events") || {})[e.type] || [], u = ge.event.special[e.type] || {};
            if ((o[0] = e).delegateTarget = this,
                !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (r = ge.event.handlers.call(this, e, l),
                         t = 0; (s = r[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = s.elem,
                             a = 0; (n = s.handlers[a++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(n.namespace) || (e.handleObj = n,
                            e.data = n.data,
                        (i = ((ge.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, o)) !== C && !1 === (e.result = i) && (e.preventDefault(),
                            e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function(e, t) {
            var i, n, s, a, r = [], o = t.delegateCount, l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                        for (s = [],
                                 a = 0; a < o; a++)
                            s[i = (n = t[a]).selector + " "] === C && (s[i] = n.needsContext ? 0 <= ge(i, this).index(l) : ge.find(i, this, null, [l]).length),
                            s[i] && s.push(n);
                        s.length && r.push({
                            elem: l,
                            handlers: s
                        })
                    }
            return o < t.length && r.push({
                elem: this,
                handlers: t.slice(o)
            }),
                r
        },
        fix: function(e) {
            if (e[ge.expando])
                return e;
            var t, i, n, s = e.type, a = e, r = this.fixHooks[s];
            for (r || (this.fixHooks[s] = r = Z.test(s) ? this.mouseHooks : J.test(s) ? this.keyHooks : {}),
                     n = r.props ? this.props.concat(r.props) : this.props,
                     e = new ge.Event(a),
                     t = n.length; t--; )
                e[i = n[t]] = a[i];
            return e.target || (e.target = a.srcElement || m),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                r.filter ? r.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var i, n, s, a = t.button, r = t.fromElement;
                return null == e.pageX && null != t.clientX && (s = (n = e.target.ownerDocument || m).documentElement,
                    i = n.body,
                    e.pageX = t.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0),
                    e.pageY = t.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && r && (e.relatedTarget = r === e.target ? t.toElement : r),
                e.which || a === C || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                    e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                trigger: function() {
                    if (ge.nodeName(this, "input") && "checkbox" === this.type && this.click)
                        return this.click(),
                            !1
                }
            },
            focus: {
                trigger: function() {
                    if (this !== m.activeElement && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === m.activeElement && this.blur)
                        return this.blur(),
                            !1
                },
                delegateType: "focusout"
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== C && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, i, n) {
            var s = ge.extend(new ge.Event, i, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            n ? ge.event.trigger(s, null, t) : ge.event.dispatch.call(t, s),
            s.isDefaultPrevented() && i.preventDefault()
        }
    },
        ge.removeEvent = m.removeEventListener ? function(e, t, i) {
                e.removeEventListener && e.removeEventListener(t, i, !1)
            }
            : function(e, t, i) {
                var n = "on" + t;
                e.detachEvent && (typeof e[n] === v && (e[n] = null),
                    e.detachEvent(n, i))
            }
        ,
        ge.Event = function(e, t) {
            if (!(this instanceof ge.Event))
                return new ge.Event(e,t);
            e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? ie : ne) : this.type = e,
            t && ge.extend(this, t),
                this.timeStamp = e && e.timeStamp || ge.now(),
                this[ge.expando] = !0
        }
        ,
        ge.Event.prototype = {
            isDefaultPrevented: ne,
            isPropagationStopped: ne,
            isImmediatePropagationStopped: ne,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ie,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ie,
                e && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = ie,
                    this.stopPropagation()
            }
        },
        ge.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, s) {
            ge.event.special[e] = {
                delegateType: s,
                bindType: s,
                handle: function(e) {
                    var t, i = e.relatedTarget, n = e.handleObj;
                    return i && (i === this || ge.contains(this, i)) || (e.type = n.origType,
                        t = n.handler.apply(this, arguments),
                        e.type = s),
                        t
                }
            }
        }),
    ge.support.submitBubbles || (ge.event.special.submit = {
        setup: function() {
            if (ge.nodeName(this, "form"))
                return !1;
            ge.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                    , i = ge.nodeName(t, "input") || ge.nodeName(t, "button") ? t.form : C;
                i && !ge._data(i, "submitBubbles") && (ge.event.add(i, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                    ge._data(i, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && ge.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            if (ge.nodeName(this, "form"))
                return !1;
            ge.event.remove(this, "._submit")
        }
    }),
    ge.support.changeBubbles || (ge.event.special.change = {
        setup: function() {
            if (Q.test(this.nodeName))
                return "checkbox" !== this.type && "radio" !== this.type || (ge.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }),
                    ge.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1),
                            ge.event.simulate("change", this, e, !0)
                    })),
                    !1;
            ge.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Q.test(t.nodeName) && !ge._data(t, "changeBubbles") && (ge.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ge.event.simulate("change", this.parentNode, e, !0)
                }),
                    ge._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            if (this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type)
                return e.handleObj.handler.apply(this, arguments)
        },
        teardown: function() {
            return ge.event.remove(this, "._change"),
                !Q.test(this.nodeName)
        }
    }),
    ge.support.focusinBubbles || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = 0
            , n = function(e) {
            ge.event.simulate(t, e.target, ge.event.fix(e), !0)
        };
        ge.event.special[t] = {
            setup: function() {
                0 == i++ && m.addEventListener(e, n, !0)
            },
            teardown: function() {
                0 == --i && m.removeEventListener(e, n, !0)
            }
        }
    }),
        ge.fn.extend({
            on: function(e, t, i, n, s) {
                var a, r;
                if ("object" == typeof e) {
                    for (a in "string" != typeof t && (i = i || t,
                        t = C),
                        e)
                        this.on(a, t, i, e[a], s);
                    return this
                }
                if (null == i && null == n ? (n = t,
                        i = t = C) : null == n && ("string" == typeof t ? (n = i,
                        i = C) : (n = i,
                        i = t,
                        t = C)),
                    !1 === n)
                    n = ne;
                else if (!n)
                    return this;
                return 1 === s && (r = n,
                    (n = function(e) {
                            return ge().off(e),
                                r.apply(this, arguments)
                        }
                    ).guid = r.guid || (r.guid = ge.guid++)),
                    this.each(function() {
                        ge.event.add(this, e, n, i, t)
                    })
            },
            one: function(e, t, i, n) {
                return this.on(e, t, i, n, 1)
            },
            off: function(e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj)
                    return n = e.handleObj,
                        ge(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                        this;
                if ("object" == typeof e) {
                    for (s in e)
                        this.off(s, t, e[s]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (i = t,
                    t = C),
                !1 === i && (i = ne),
                    this.each(function() {
                        ge.event.remove(this, e, i, t)
                    })
            },
            bind: function(e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function(e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    ge.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var i = this[0];
                if (i)
                    return ge.event.trigger(e, t, i, !0)
            }
        }),
        function(i, e) {
            var t, x, T, a, n, f, u, C, m, S, s, g, v, r, o, y, c, E = "sizzle" + -new Date, b = i.document, w = {}, _ = 0, h = 0, l = ee(), p = ee(), d = ee(), k = "undefined", z = [], P = z.pop, N = z.push, M = z.slice, D = z.indexOf || function(e) {
                for (var t = 0, i = this.length; t < i; t++)
                    if (this[t] === e)
                        return t;
                return -1
            }
                , A = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", H = I.replace("w", "w#"), L = "\\[" + A + "*(" + I + ")" + A + "*(?:([*^$|!~]?=)" + A + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + H + ")|)|)" + A + "*\\]", R = ":(" + I + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + L.replace(3, 8) + ")*)|.*)\\)|)", O = new RegExp("^" + A + "+|((?:^|[^\\\\])(?:\\\\.)*)" + A + "+$","g"), $ = new RegExp("^" + A + "*," + A + "*"), j = new RegExp("^" + A + "*([\\x20\\t\\r\\n\\f>+~])" + A + "*"), W = new RegExp(R), B = new RegExp("^" + H + "$"), F = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                NAME: new RegExp("^\\[name=['\"]?(" + I + ")['\"]?\\]"),
                TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + L),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + A + "*(even|odd|(([+-]|)(\\d*)n|)" + A + "*(?:([+-]|)" + A + "*(\\d+)|))" + A + "*\\)|)","i"),
                needsContext: new RegExp("^" + A + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + A + "*((?:-\\d)?\\d*)" + A + "*\\)|)(?=[^-]|$)","i")
            }, q = /[\x20\t\r\n\f]*[+~]/, X = /^[^{]+\{\s*\[native code/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /^(?:input|select|textarea|button)$/i, U = /^h\d$/i, V = /'|\\/g, K = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, Q = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, J = function(e, t) {
                var i = "0x" + t - 65536;
                return i != i ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            };
            try {
                M.call(b.documentElement.childNodes, 0)[0].nodeType
            } catch (e) {
                M = function(e) {
                    for (var t, i = []; t = this[e++]; )
                        i.push(t);
                    return i
                }
            }
            function Z(e) {
                return X.test(e + "")
            }
            function ee() {
                var i, n = [];
                return i = function(e, t) {
                    return n.push(e += " ") > T.cacheLength && delete i[n.shift()],
                        i[e] = t
                }
            }
            function te(e) {
                return e[E] = !0,
                    e
            }
            function ie(e) {
                var t = S.createElement("div");
                try {
                    return e(t)
                } catch (e) {
                    return !1
                } finally {
                    t = null
                }
            }
            function ne(e, t, i, n) {
                var s, a, r, o, l, u, c, h, p, d;
                if ((t ? t.ownerDocument || t : b) !== S && m(t),
                        i = i || [],
                    !e || "string" != typeof e)
                    return i;
                if (1 !== (o = (t = t || S).nodeType) && 9 !== o)
                    return [];
                if (!g && !n) {
                    if (s = Y.exec(e))
                        if (r = s[1]) {
                            if (9 === o) {
                                if (!(a = t.getElementById(r)) || !a.parentNode)
                                    return i;
                                if (a.id === r)
                                    return i.push(a),
                                        i
                            } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(r)) && y(t, a) && a.id === r)
                                return i.push(a),
                                    i
                        } else {
                            if (s[2])
                                return N.apply(i, M.call(t.getElementsByTagName(e), 0)),
                                    i;
                            if ((r = s[3]) && w.getByClassName && t.getElementsByClassName)
                                return N.apply(i, M.call(t.getElementsByClassName(r), 0)),
                                    i
                        }
                    if (w.qsa && !v.test(e)) {
                        if (c = !0,
                                h = E,
                                p = t,
                                d = 9 === o && e,
                            1 === o && "object" !== t.nodeName.toLowerCase()) {
                            for (u = le(e),
                                     (c = t.getAttribute("id")) ? h = c.replace(V, "\\$&") : t.setAttribute("id", h),
                                     h = "[id='" + h + "'] ",
                                     l = u.length; l--; )
                                u[l] = h + ue(u[l]);
                            p = q.test(e) && t.parentNode || t,
                                d = u.join(",")
                        }
                        if (d)
                            try {
                                return N.apply(i, M.call(p.querySelectorAll(d), 0)),
                                    i
                            } catch (e) {} finally {
                                c || t.removeAttribute("id")
                            }
                    }
                }
                return function(e, t, i, n) {
                    var s, a, r, o, l, u = le(e);
                    if (!n && 1 === u.length) {
                        if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (r = a[0]).type && 9 === t.nodeType && !g && T.relative[a[1].type]) {
                            if (!(t = T.find.ID(r.matches[0].replace(Q, J), t)[0]))
                                return i;
                            e = e.slice(a.shift().value.length)
                        }
                        for (s = F.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s],
                            !T.relative[o = r.type]); )
                            if ((l = T.find[o]) && (n = l(r.matches[0].replace(Q, J), q.test(a[0].type) && t.parentNode || t))) {
                                if (a.splice(s, 1),
                                        !(e = n.length && ue(a)))
                                    return N.apply(i, M.call(n, 0)),
                                        i;
                                break
                            }
                    }
                    return f(e, u)(n, t, g, i, q.test(e)),
                        i
                }(e.replace(O, "$1"), t, i, n)
            }
            function se(e, t) {
                var i = t && e
                    , n = i && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
                if (n)
                    return n;
                if (i)
                    for (; i = i.nextSibling; )
                        if (i === t)
                            return -1;
                return e ? 1 : -1
            }
            function ae(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function re(i) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === i
                }
            }
            function oe(r) {
                return te(function(a) {
                    return a = +a,
                        te(function(e, t) {
                            for (var i, n = r([], e.length, a), s = n.length; s--; )
                                e[i = n[s]] && (e[i] = !(t[i] = e[i]))
                        })
                })
            }
            for (t in n = ne.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
                ,
                m = ne.setDocument = function(e) {
                    var l = e ? e.ownerDocument || e : b;
                    return l !== S && 9 === l.nodeType && l.documentElement && (s = (S = l).documentElement,
                        g = n(l),
                        w.tagNameNoComments = ie(function(e) {
                            return e.appendChild(l.createComment("")),
                                !e.getElementsByTagName("*").length
                        }),
                        w.attributes = ie(function(e) {
                            e.innerHTML = "<select></select>";
                            var t = typeof e.lastChild.getAttribute("multiple");
                            return "boolean" !== t && "string" !== t
                        }),
                        w.getByClassName = ie(function(e) {
                            return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>",
                            !(!e.getElementsByClassName || !e.getElementsByClassName("e").length) && (e.lastChild.className = "e",
                            2 === e.getElementsByClassName("e").length)
                        }),
                        w.getByName = ie(function(e) {
                            e.id = E + 0,
                                e.innerHTML = "<a name='" + E + "'></a><div name='" + E + "'></div>",
                                s.insertBefore(e, s.firstChild);
                            var t = l.getElementsByName && l.getElementsByName(E).length === 2 + l.getElementsByName(E + 0).length;
                            return w.getIdNotName = !l.getElementById(E),
                                s.removeChild(e),
                                t
                        }),
                        T.attrHandle = ie(function(e) {
                            return e.innerHTML = "<a href='#'></a>",
                            e.firstChild && typeof e.firstChild.getAttribute !== k && "#" === e.firstChild.getAttribute("href")
                        }) ? {} : {
                            href: function(e) {
                                return e.getAttribute("href", 2)
                            },
                            type: function(e) {
                                return e.getAttribute("type")
                            }
                        },
                        w.getIdNotName ? (T.find.ID = function(e, t) {
                                if (typeof t.getElementById !== k && !g) {
                                    var i = t.getElementById(e);
                                    return i && i.parentNode ? [i] : []
                                }
                            }
                                ,
                                T.filter.ID = function(e) {
                                    var t = e.replace(Q, J);
                                    return function(e) {
                                        return e.getAttribute("id") === t
                                    }
                                }
                        ) : (T.find.ID = function(e, t) {
                                if (typeof t.getElementById !== k && !g) {
                                    var i = t.getElementById(e);
                                    return i ? i.id === e || typeof i.getAttributeNode !== k && i.getAttributeNode("id").value === e ? [i] : void 0 : []
                                }
                            }
                                ,
                                T.filter.ID = function(e) {
                                    var i = e.replace(Q, J);
                                    return function(e) {
                                        var t = typeof e.getAttributeNode !== k && e.getAttributeNode("id");
                                        return t && t.value === i
                                    }
                                }
                        ),
                        T.find.TAG = w.tagNameNoComments ? function(e, t) {
                                if (typeof t.getElementsByTagName !== k)
                                    return t.getElementsByTagName(e)
                            }
                            : function(e, t) {
                                var i, n = [], s = 0, a = t.getElementsByTagName(e);
                                if ("*" === e) {
                                    for (; i = a[s++]; )
                                        1 === i.nodeType && n.push(i);
                                    return n
                                }
                                return a
                            }
                        ,
                        T.find.NAME = w.getByName && function(e, t) {
                            if (typeof t.getElementsByName !== k)
                                return t.getElementsByName(name)
                        }
                        ,
                        T.find.CLASS = w.getByClassName && function(e, t) {
                            if (typeof t.getElementsByClassName !== k && !g)
                                return t.getElementsByClassName(e)
                        }
                        ,
                        r = [],
                        v = [":focus"],
                    (w.qsa = Z(l.querySelectorAll)) && (ie(function(e) {
                        e.innerHTML = "<select><option selected=''></option></select>",
                        e.querySelectorAll("[selected]").length || v.push("\\[" + A + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),
                        e.querySelectorAll(":checked").length || v.push(":checked")
                    }),
                        ie(function(e) {
                            e.innerHTML = "<input type='hidden' i=''/>",
                            e.querySelectorAll("[i^='']").length && v.push("[*^$]=" + A + "*(?:\"\"|'')"),
                            e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                v.push(",.*:")
                        })),
                    (w.matchesSelector = Z(o = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ie(function(e) {
                        w.disconnectedMatch = o.call(e, "div"),
                            o.call(e, "[s!='']:x"),
                            r.push("!=", R)
                    }),
                        v = new RegExp(v.join("|")),
                        r = new RegExp(r.join("|")),
                        y = Z(s.contains) || s.compareDocumentPosition ? function(e, t) {
                                var i = 9 === e.nodeType ? e.documentElement : e
                                    , n = t && t.parentNode;
                                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                            }
                            : function(e, t) {
                                if (t)
                                    for (; t = t.parentNode; )
                                        if (t === e)
                                            return !0;
                                return !1
                            }
                        ,
                        c = s.compareDocumentPosition ? function(e, t) {
                                var i;
                                return e === t ? (u = !0,
                                    0) : (i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & i || e.parentNode && 11 === e.parentNode.nodeType ? e === l || y(b, e) ? -1 : t === l || y(b, t) ? 1 : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
                            }
                            : function(e, t) {
                                var i, n = 0, s = e.parentNode, a = t.parentNode, r = [e], o = [t];
                                if (e === t)
                                    return u = !0,
                                        0;
                                if (!s || !a)
                                    return e === l ? -1 : t === l ? 1 : s ? -1 : a ? 1 : 0;
                                if (s === a)
                                    return se(e, t);
                                for (i = e; i = i.parentNode; )
                                    r.unshift(i);
                                for (i = t; i = i.parentNode; )
                                    o.unshift(i);
                                for (; r[n] === o[n]; )
                                    n++;
                                return n ? se(r[n], o[n]) : r[n] === b ? -1 : o[n] === b ? 1 : 0
                            }
                        ,
                        u = !1,
                        [0, 0].sort(c),
                        w.detectDuplicates = u),
                        S
                }
                ,
                ne.matches = function(e, t) {
                    return ne(e, null, null, t)
                }
                ,
                ne.matchesSelector = function(e, t) {
                    if ((e.ownerDocument || e) !== S && m(e),
                            t = t.replace(K, "='$1']"),
                        w.matchesSelector && !g && (!r || !r.test(t)) && !v.test(t))
                        try {
                            var i = o.call(e, t);
                            if (i || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                                return i
                        } catch (e) {}
                    return 0 < ne(t, S, null, [e]).length
                }
                ,
                ne.contains = function(e, t) {
                    return (e.ownerDocument || e) !== S && m(e),
                        y(e, t)
                }
                ,
                ne.attr = function(e, t) {
                    var i;
                    return (e.ownerDocument || e) !== S && m(e),
                    g || (t = t.toLowerCase()),
                        (i = T.attrHandle[t]) ? i(e) : g || w.attributes ? e.getAttribute(t) : ((i = e.getAttributeNode(t)) || e.getAttribute(t)) && !0 === e[t] ? t : i && i.specified ? i.value : null
                }
                ,
                ne.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ,
                ne.uniqueSort = function(e) {
                    var t, i = [], n = 1, s = 0;
                    if (u = !w.detectDuplicates,
                            e.sort(c),
                            u) {
                        for (; t = e[n]; n++)
                            t === e[n - 1] && (s = i.push(n));
                        for (; s--; )
                            e.splice(i[s], 1)
                    }
                    return e
                }
                ,
                a = ne.getText = function(e) {
                    var t, i = "", n = 0, s = e.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof e.textContent)
                                return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling)
                                i += a(e)
                        } else if (3 === s || 4 === s)
                            return e.nodeValue
                    } else
                        for (; t = e[n]; n++)
                            i += a(t);
                    return i
                }
                ,
                T = ne.selectors = {
                    cacheLength: 50,
                    createPseudo: te,
                    match: F,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            return e[1] = e[1].replace(Q, J),
                                e[3] = (e[4] || e[5] || "").replace(Q, J),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                                e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            return e[1] = e[1].toLowerCase(),
                                "nth" === e[1].slice(0, 3) ? (e[3] || ne.error(e[0]),
                                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ne.error(e[0]),
                                e
                        },
                        PSEUDO: function(e) {
                            var t, i = !e[5] && e[2];
                            return F.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : i && W.test(i) && (t = le(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                                e[2] = i.slice(0, t)),
                                e.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            return "*" === t ? function() {
                                    return !0
                                }
                                : (t = t.replace(Q, J).toLowerCase(),
                                        function(e) {
                                            return e.nodeName && e.nodeName.toLowerCase() === t
                                        }
                                )
                        },
                        CLASS: function(e) {
                            var t = l[e + " "];
                            return t || (t = new RegExp("(^|" + A + ")" + e + "(" + A + "|$)")) && l(e, function(e) {
                                return t.test(e.className || typeof e.getAttribute !== k && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, s) {
                            return function(e) {
                                var t = ne.attr(e, i);
                                return null == t ? "!=" === n : !n || (t += "",
                                    "=" === n ? t === s : "!=" === n ? t !== s : "^=" === n ? s && 0 === t.indexOf(s) : "*=" === n ? s && -1 < t.indexOf(s) : "$=" === n ? s && t.slice(-s.length) === s : "~=" === n ? -1 < (" " + t + " ").indexOf(s) : "|=" === n && (t === s || t.slice(0, s.length + 1) === s + "-"))
                            }
                        },
                        CHILD: function(d, e, t, f, m) {
                            var g = "nth" !== d.slice(0, 3)
                                , v = "last" !== d.slice(-4)
                                , y = "of-type" === e;
                            return 1 === f && 0 === m ? function(e) {
                                    return !!e.parentNode
                                }
                                : function(e, t, i) {
                                    var n, s, a, r, o, l, u = g !== v ? "nextSibling" : "previousSibling", c = e.parentNode, h = y && e.nodeName.toLowerCase(), p = !i && !y;
                                    if (c) {
                                        if (g) {
                                            for (; u; ) {
                                                for (a = e; a = a[u]; )
                                                    if (y ? a.nodeName.toLowerCase() === h : 1 === a.nodeType)
                                                        return !1;
                                                l = u = "only" === d && !l && "nextSibling"
                                            }
                                            return !0
                                        }
                                        if (l = [v ? c.firstChild : c.lastChild],
                                            v && p) {
                                            for (o = (n = (s = c[E] || (c[E] = {}))[d] || [])[0] === _ && n[1],
                                                     r = n[0] === _ && n[2],
                                                     a = o && c.childNodes[o]; a = ++o && a && a[u] || (r = o = 0) || l.pop(); )
                                                if (1 === a.nodeType && ++r && a === e) {
                                                    s[d] = [_, o, r];
                                                    break
                                                }
                                        } else if (p && (n = (e[E] || (e[E] = {}))[d]) && n[0] === _)
                                            r = n[1];
                                        else
                                            for (; (a = ++o && a && a[u] || (r = o = 0) || l.pop()) && ((y ? a.nodeName.toLowerCase() !== h : 1 !== a.nodeType) || !++r || (p && ((a[E] || (a[E] = {}))[d] = [_, r]),
                                            a !== e)); )
                                                ;
                                        return (r -= m) === f || r % f == 0 && 0 <= r / f
                                    }
                                }
                        },
                        PSEUDO: function(e, a) {
                            var t, r = T.pseudos[e] || T.setFilters[e.toLowerCase()] || ne.error("unsupported pseudo: " + e);
                            return r[E] ? r(a) : 1 < r.length ? (t = [e, e, "", a],
                                    T.setFilters.hasOwnProperty(e.toLowerCase()) ? te(function(e, t) {
                                        for (var i, n = r(e, a), s = n.length; s--; )
                                            e[i = D.call(e, n[s])] = !(t[i] = n[s])
                                    }) : function(e) {
                                        return r(e, 0, t)
                                    }
                            ) : r
                        }
                    },
                    pseudos: {
                        not: te(function(e) {
                            var n = []
                                , s = []
                                , o = f(e.replace(O, "$1"));
                            return o[E] ? te(function(e, t, i, n) {
                                for (var s, a = o(e, null, n, []), r = e.length; r--; )
                                    (s = a[r]) && (e[r] = !(t[r] = s))
                            }) : function(e, t, i) {
                                return n[0] = e,
                                    o(n, null, i, s),
                                    !s.pop()
                            }
                        }),
                        has: te(function(t) {
                            return function(e) {
                                return 0 < ne(t, e).length
                            }
                        }),
                        contains: te(function(t) {
                            return function(e) {
                                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                            }
                        }),
                        lang: te(function(i) {
                            return B.test(i || "") || ne.error("unsupported lang: " + i),
                                i = i.replace(Q, J).toLowerCase(),
                                function(e) {
                                    var t;
                                    do {
                                        if (t = g ? e.getAttribute("xml:lang") || e.getAttribute("lang") : e.lang)
                                            return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);return !1
                                }
                        }),
                        target: function(e) {
                            var t = i.location && i.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === s
                        },
                        focus: function(e) {
                            return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: function(e) {
                            return !1 === e.disabled
                        },
                        disabled: function(e) {
                            return !0 === e.disabled
                        },
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && !!e.checked || "option" === t && !!e.selected
                        },
                        selected: function(e) {
                            return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling)
                                if ("@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType)
                                    return !1;
                            return !0
                        },
                        parent: function(e) {
                            return !T.pseudos.empty(e)
                        },
                        header: function(e) {
                            return U.test(e.nodeName)
                        },
                        input: function(e) {
                            return G.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return "input" === t && "button" === e.type || "button" === t
                        },
                        text: function(e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                        },
                        first: oe(function() {
                            return [0]
                        }),
                        last: oe(function(e, t) {
                            return [t - 1]
                        }),
                        eq: oe(function(e, t, i) {
                            return [i < 0 ? i + t : i]
                        }),
                        even: oe(function(e, t) {
                            for (var i = 0; i < t; i += 2)
                                e.push(i);
                            return e
                        }),
                        odd: oe(function(e, t) {
                            for (var i = 1; i < t; i += 2)
                                e.push(i);
                            return e
                        }),
                        lt: oe(function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; 0 <= --n; )
                                e.push(n);
                            return e
                        }),
                        gt: oe(function(e, t, i) {
                            for (var n = i < 0 ? i + t : i; ++n < t; )
                                e.push(n);
                            return e
                        })
                    }
                },
                {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                })
                T.pseudos[t] = ae(t);
            for (t in {
                submit: !0,
                reset: !0
            })
                T.pseudos[t] = re(t);
            function le(e, t) {
                var i, n, s, a, r, o, l, u = p[e + " "];
                if (u)
                    return t ? 0 : u.slice(0);
                for (r = e,
                         o = [],
                         l = T.preFilter; r; ) {
                    for (a in i && !(n = $.exec(r)) || (n && (r = r.slice(n[0].length) || r),
                        o.push(s = [])),
                        i = !1,
                    (n = j.exec(r)) && (i = n.shift(),
                        s.push({
                            value: i,
                            type: n[0].replace(O, " ")
                        }),
                        r = r.slice(i.length)),
                        T.filter)
                        !(n = F[a].exec(r)) || l[a] && !(n = l[a](n)) || (i = n.shift(),
                            s.push({
                                value: i,
                                type: a,
                                matches: n
                            }),
                            r = r.slice(i.length));
                    if (!i)
                        break
                }
                return t ? r.length : r ? ne.error(e) : p(e, o).slice(0)
            }
            function ue(e) {
                for (var t = 0, i = e.length, n = ""; t < i; t++)
                    n += e[t].value;
                return n
            }
            function ce(o, e, t) {
                var l = e.dir
                    , u = t && "parentNode" === l
                    , c = h++;
                return e.first ? function(e, t, i) {
                        for (; e = e[l]; )
                            if (1 === e.nodeType || u)
                                return o(e, t, i)
                    }
                    : function(e, t, i) {
                        var n, s, a, r = _ + " " + c;
                        if (i) {
                            for (; e = e[l]; )
                                if ((1 === e.nodeType || u) && o(e, t, i))
                                    return !0
                        } else
                            for (; e = e[l]; )
                                if (1 === e.nodeType || u)
                                    if ((s = (a = e[E] || (e[E] = {}))[l]) && s[0] === r) {
                                        if (!0 === (n = s[1]) || n === x)
                                            return !0 === n
                                    } else if ((s = a[l] = [r])[1] = o(e, t, i) || x,
                                        !0 === s[1])
                                        return !0
                    }
            }
            function he(s) {
                return 1 < s.length ? function(e, t, i) {
                        for (var n = s.length; n--; )
                            if (!s[n](e, t, i))
                                return !1;
                        return !0
                    }
                    : s[0]
            }
            function pe(e, t, i, n, s) {
                for (var a, r = [], o = 0, l = e.length, u = null != t; o < l; o++)
                    (a = e[o]) && (i && !i(a, n, s) || (r.push(a),
                    u && t.push(o)));
                return r
            }
            function de(d, f, m, g, v, e) {
                return g && !g[E] && (g = de(g)),
                v && !v[E] && (v = de(v, e)),
                    te(function(e, t, i, n) {
                        var s, a, r, o = [], l = [], u = t.length, c = e || function(e, t, i) {
                            for (var n = 0, s = t.length; n < s; n++)
                                ne(e, t[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []), h = !d || !e && f ? c : pe(c, o, d, i, n), p = m ? v || (e ? d : u || g) ? [] : t : h;
                        if (m && m(h, p, i, n),
                                g)
                            for (s = pe(p, l),
                                     g(s, [], i, n),
                                     a = s.length; a--; )
                                (r = s[a]) && (p[l[a]] = !(h[l[a]] = r));
                        if (e) {
                            if (v || d) {
                                if (v) {
                                    for (s = [],
                                             a = p.length; a--; )
                                        (r = p[a]) && s.push(h[a] = r);
                                    v(null, p = [], s, n)
                                }
                                for (a = p.length; a--; )
                                    (r = p[a]) && -1 < (s = v ? D.call(e, r) : o[a]) && (e[s] = !(t[s] = r))
                            }
                        } else
                            p = pe(p === t ? p.splice(u, p.length) : p),
                                v ? v(null, t, p, n) : N.apply(t, p)
                    })
            }
            function fe(e) {
                for (var n, t, i, s = e.length, a = T.relative[e[0].type], r = a || T.relative[" "], o = a ? 1 : 0, l = ce(function(e) {
                    return e === n
                }, r, !0), u = ce(function(e) {
                    return -1 < D.call(n, e)
                }, r, !0), c = [function(e, t, i) {
                    return !a && (i || t !== C) || ((n = t).nodeType ? l(e, t, i) : u(e, t, i))
                }
                ]; o < s; o++)
                    if (t = T.relative[e[o].type])
                        c = [ce(he(c), t)];
                    else {
                        if ((t = T.filter[e[o].type].apply(null, e[o].matches))[E]) {
                            for (i = ++o; i < s && !T.relative[e[i].type]; i++)
                                ;
                            return de(1 < o && he(c), 1 < o && ue(e.slice(0, o - 1)).replace(O, "$1"), t, o < i && fe(e.slice(o, i)), i < s && fe(e = e.slice(i)), i < s && ue(e))
                        }
                        c.push(t)
                    }
                return he(c)
            }
            function me() {}
            f = ne.compile = function(e, t) {
                var i, g, v, y, b, w, n, s = [], a = [], r = d[e + " "];
                if (!r) {
                    for (t || (t = le(e)),
                             i = t.length; i--; )
                        (r = fe(t[i]))[E] ? s.push(r) : a.push(r);
                    r = d(e, (g = a,
                        b = (y = 0) < (v = s).length,
                        w = 0 < g.length,
                        n = function(e, t, i, n, s) {
                            var a, r, o, l = [], u = 0, c = "0", h = e && [], p = null != s, d = C, f = e || w && T.find.TAG("*", s && t.parentNode || t), m = _ += null == d ? 1 : Math.random() || .1;
                            for (p && (C = t !== S && t,
                                x = y); null != (a = f[c]); c++) {
                                if (w && a) {
                                    for (r = 0; o = g[r++]; )
                                        if (o(a, t, i)) {
                                            n.push(a);
                                            break
                                        }
                                    p && (_ = m,
                                        x = ++y)
                                }
                                b && ((a = !o && a) && u--,
                                e && h.push(a))
                            }
                            if (u += c,
                                b && c !== u) {
                                for (r = 0; o = v[r++]; )
                                    o(h, l, t, i);
                                if (e) {
                                    if (0 < u)
                                        for (; c--; )
                                            h[c] || l[c] || (l[c] = P.call(n));
                                    l = pe(l)
                                }
                                N.apply(n, l),
                                p && !e && 0 < l.length && 1 < u + v.length && ne.uniqueSort(n)
                            }
                            return p && (_ = m,
                                C = d),
                                h
                        }
                        ,
                        b ? te(n) : n))
                }
                return r
            }
                ,
                T.pseudos.nth = T.pseudos.eq,
                T.filters = me.prototype = T.pseudos,
                T.setFilters = new me,
                m(),
                ne.attr = ge.attr,
                ge.find = ne,
                ge.expr = ne.selectors,
                ge.expr[":"] = ge.expr.pseudos,
                ge.unique = ne.uniqueSort,
                ge.text = ne.getText,
                ge.isXMLDoc = ne.isXML,
                ge.contains = ne.contains
        }(f);
    var se = /Until$/
        , ae = /^(?:parents|prev(?:Until|All))/
        , re = /^.[^:#\[\.,]*$/
        , oe = ge.expr.match.needsContext
        , le = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function ue(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function ce(e, i, n) {
        if (i = i || 0,
                ge.isFunction(i))
            return ge.grep(e, function(e, t) {
                return !!i.call(e, t, e) === n
            });
        if (i.nodeType)
            return ge.grep(e, function(e) {
                return e === i === n
            });
        if ("string" == typeof i) {
            var t = ge.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (re.test(i))
                return ge.filter(i, t, !n);
            i = ge.filter(i, t)
        }
        return ge.grep(e, function(e) {
            return 0 <= ge.inArray(e, i) === n
        })
    }
    function he(e) {
        var t = pe.split("|")
            , i = e.createDocumentFragment();
        if (i.createElement)
            for (; t.length; )
                i.createElement(t.pop());
        return i
    }
    ge.fn.extend({
        find: function(e) {
            var t, i, n, s = this.length;
            if ("string" != typeof e)
                return (n = this).pushStack(ge(e).filter(function() {
                    for (t = 0; t < s; t++)
                        if (ge.contains(n[t], this))
                            return !0
                }));
            for (i = [],
                     t = 0; t < s; t++)
                ge.find(e, this[t], i);
            return (i = this.pushStack(1 < s ? ge.unique(i) : i)).selector = (this.selector ? this.selector + " " : "") + e,
                i
        },
        has: function(e) {
            var t, i = ge(e, this), n = i.length;
            return this.filter(function() {
                for (t = 0; t < n; t++)
                    if (ge.contains(this, i[t]))
                        return !0
            })
        },
        not: function(e) {
            return this.pushStack(ce(this, e, !1))
        },
        filter: function(e) {
            return this.pushStack(ce(this, e, !0))
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? oe.test(e) ? 0 <= ge(e, this.context).index(this[0]) : 0 < ge.filter(e, this).length : 0 < this.filter(e).length)
        },
        closest: function(e, t) {
            for (var i, n = 0, s = this.length, a = [], r = oe.test(e) || "string" != typeof e ? ge(e, t || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i.ownerDocument && i !== t && 11 !== i.nodeType; ) {
                    if (r ? -1 < r.index(i) : ge.find.matchesSelector(i, e)) {
                        a.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return this.pushStack(1 < a.length ? ge.unique(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ge.inArray(this[0], ge(e)) : ge.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            var i = "string" == typeof e ? ge(e, t) : ge.makeArray(e && e.nodeType ? [e] : e)
                , n = ge.merge(this.get(), i);
            return this.pushStack(ge.unique(n))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        ge.fn.andSelf = ge.fn.addBack,
        ge.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ge.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, i) {
                return ge.dir(e, "parentNode", i)
            },
            next: function(e) {
                return ue(e, "nextSibling")
            },
            prev: function(e) {
                return ue(e, "previousSibling")
            },
            nextAll: function(e) {
                return ge.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return ge.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, i) {
                return ge.dir(e, "nextSibling", i)
            },
            prevUntil: function(e, t, i) {
                return ge.dir(e, "previousSibling", i)
            },
            siblings: function(e) {
                return ge.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ge.sibling(e.firstChild)
            },
            contents: function(e) {
                return ge.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ge.merge([], e.childNodes)
            }
        }, function(n, s) {
            ge.fn[n] = function(e, t) {
                var i = ge.map(this, s, e);
                return se.test(n) || (t = e),
                t && "string" == typeof t && (i = ge.filter(t, i)),
                    i = 1 < this.length && !le[n] ? ge.unique(i) : i,
                1 < this.length && ae.test(n) && (i = i.reverse()),
                    this.pushStack(i)
            }
        }),
        ge.extend({
            filter: function(e, t, i) {
                return i && (e = ":not(" + e + ")"),
                    1 === t.length ? ge.find.matchesSelector(t[0], e) ? [t[0]] : [] : ge.find.matches(e, t)
            },
            dir: function(e, t, i) {
                for (var n = [], s = e[t]; s && 9 !== s.nodeType && (i === C || 1 !== s.nodeType || !ge(s).is(i)); )
                    1 === s.nodeType && n.push(s),
                        s = s[t];
                return n
            },
            sibling: function(e, t) {
                for (var i = []; e; e = e.nextSibling)
                    1 === e.nodeType && e !== t && i.push(e);
                return i
            }
        });
    var pe = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , de = / jQuery\d+="(?:null|\d+)"/g
        , fe = new RegExp("<(?:" + pe + ")[\\s/>]","i")
        , me = /^\s+/
        , ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , ye = /<([\w:]+)/
        , be = /<tbody/i
        , we = /<|&#?\w+;/
        , xe = /<(?:script|style|link)/i
        , Te = /^(?:checkbox|radio)$/i
        , Ce = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Se = /^$|\/(?:java|ecma)script/i
        , Ee = /^true\/(.*)/
        , _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , ke = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ge.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , ze = he(m).appendChild(m.createElement("div"));
    function Pe(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type,
            e
    }
    function Ne(e) {
        var t = Ee.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function Me(e, t) {
        for (var i, n = 0; null != (i = e[n]); n++)
            ge._data(i, "globalEval", !t || ge._data(t[n], "globalEval"))
    }
    function De(e, t) {
        if (1 === t.nodeType && ge.hasData(e)) {
            var i, n, s, a = ge._data(e), r = ge._data(t, a), o = a.events;
            if (o)
                for (i in delete r.handle,
                    r.events = {},
                    o)
                    for (n = 0,
                             s = o[i].length; n < s; n++)
                        ge.event.add(t, i, o[i][n]);
            r.data && (r.data = ge.extend({}, r.data))
        }
    }
    function Ae(e, t) {
        var i, n, s;
        if (1 === t.nodeType) {
            if (i = t.nodeName.toLowerCase(),
                !ge.support.noCloneEvent && t[ge.expando]) {
                for (n in (s = ge._data(t)).events)
                    ge.removeEvent(t, n, s.handle);
                t.removeAttribute(ge.expando)
            }
            "script" === i && t.text !== e.text ? (Pe(t).text = e.text,
                Ne(t)) : "object" === i ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ge.support.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === i && Te.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === i ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
        }
    }
    function Ie(e, t) {
        var i, n, s = 0, a = typeof e.getElementsByTagName !== v ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== v ? e.querySelectorAll(t || "*") : C;
        if (!a)
            for (a = [],
                     i = e.childNodes || e; null != (n = i[s]); s++)
                !t || ge.nodeName(n, t) ? a.push(n) : ge.merge(a, Ie(n, t));
        return t === C || t && ge.nodeName(e, t) ? ge.merge([e], a) : a
    }
    function He(e) {
        Te.test(e.type) && (e.defaultChecked = e.checked)
    }
    ke.optgroup = ke.option,
        ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead,
        ke.th = ke.td,
        ge.fn.extend({
            text: function(e) {
                return ge.access(this, function(e) {
                    return e === C ? ge.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(t) {
                if (ge.isFunction(t))
                    return this.each(function(e) {
                        ge(this).wrapAll(t.call(this, e))
                    });
                if (this[0]) {
                    var e = ge(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]),
                        e.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function(i) {
                return ge.isFunction(i) ? this.each(function(e) {
                    ge(this).wrapInner(i.call(this, e))
                }) : this.each(function() {
                    var e = ge(this)
                        , t = e.contents();
                    t.length ? t.wrapAll(i) : e.append(i)
                })
            },
            wrap: function(t) {
                var i = ge.isFunction(t);
                return this.each(function(e) {
                    ge(this).wrapAll(i ? t.call(this, e) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, !1, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var i, n = 0; null != (i = this[n]); n++)
                    (!e || 0 < ge.filter(e, [i]).length) && (t || 1 !== i.nodeType || ge.cleanData(Ie(i)),
                    i.parentNode && (t && ge.contains(i.ownerDocument, i) && Me(Ie(i, "script")),
                        i.parentNode.removeChild(i)));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && ge.cleanData(Ie(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && ge.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return ge.clone(this, e, t)
                    })
            },
            html: function(e) {
                return ge.access(this, function(e) {
                    var t = this[0] || {}
                        , i = 0
                        , n = this.length;
                    if (e === C)
                        return 1 === t.nodeType ? t.innerHTML.replace(de, "") : C;
                    if ("string" == typeof e && !xe.test(e) && (ge.support.htmlSerialize || !fe.test(e)) && (ge.support.leadingWhitespace || !me.test(e)) && !ke[(ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(ve, "<$1></$2>");
                        try {
                            for (; i < n; i++)
                                1 === (t = this[i] || {}).nodeType && (ge.cleanData(Ie(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return ge.isFunction(e) || "string" == typeof e || (e = ge(e).not(this).detach()),
                    this.domManip([e], !0, function(e) {
                        var t = this.nextSibling
                            , i = this.parentNode;
                        i && (ge(this).remove(),
                            i.insertBefore(e, t))
                    })
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(i, n, s) {
                i = y.apply([], i);
                var e, t, a, r, o, l, u, c, h = 0, p = this.length, d = this, f = p - 1, m = i[0], g = ge.isFunction(m);
                if (g || !(p <= 1 || "string" != typeof m || ge.support.checkClone) && Ce.test(m))
                    return this.each(function(e) {
                        var t = d.eq(e);
                        g && (i[0] = m.call(this, e, n ? t.html() : C)),
                            t.domManip(i, n, s)
                    });
                if (p && (e = (l = ge.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild,
                    1 === l.childNodes.length && (l = e),
                        e)) {
                    for (n = n && ge.nodeName(e, "tr"),
                             a = (r = ge.map(Ie(l, "script"), Pe)).length; h < p; h++)
                        t = l,
                        h !== f && (t = ge.clone(t, !0, !0),
                        a && ge.merge(r, Ie(t, "script"))),
                            s.call(n && ge.nodeName(this[h], "table") ? (u = this[h],
                                c = "tbody",
                            u.getElementsByTagName(c)[0] || u.appendChild(u.ownerDocument.createElement(c))) : this[h], t, h);
                    if (a)
                        for (o = r[r.length - 1].ownerDocument,
                                 ge.map(r, Ne),
                                 h = 0; h < a; h++)
                            t = r[h],
                            Se.test(t.type || "") && !ge._data(t, "globalEval") && ge.contains(o, t) && (t.src ? ge.ajax({
                                url: t.src,
                                type: "GET",
                                dataType: "script",
                                async: !1,
                                global: !1,
                                throws: !0
                            }) : ge.globalEval((t.text || t.textContent || t.innerHTML || "").replace(_e, "")));
                    l = e = null
                }
                return this
            }
        }),
        ge.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, r) {
            ge.fn[e] = function(e) {
                for (var t, i = 0, n = [], s = ge(e), a = s.length - 1; i <= a; i++)
                    t = i === a ? this : this.clone(!0),
                        ge(s[i])[r](t),
                        o.apply(n, t.get());
                return this.pushStack(n)
            }
        }),
        ge.extend({
            clone: function(e, t, i) {
                var n, s, a, r, o, l = ge.contains(e.ownerDocument, e);
                if (ge.support.html5Clone || ge.isXMLDoc(e) || !fe.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (ze.innerHTML = e.outerHTML,
                        ze.removeChild(a = ze.firstChild)),
                        !(ge.support.noCloneEvent && ge.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                    for (n = Ie(a),
                             o = Ie(e),
                             r = 0; null != (s = o[r]); ++r)
                        n[r] && Ae(s, n[r]);
                if (t)
                    if (i)
                        for (o = o || Ie(e),
                                 n = n || Ie(a),
                                 r = 0; null != (s = o[r]); r++)
                            De(s, n[r]);
                    else
                        De(e, a);
                return 0 < (n = Ie(a, "script")).length && Me(n, !l && Ie(e, "script")),
                    n = o = s = null,
                    a
            },
            buildFragment: function(e, t, i, n) {
                for (var s, a, r, o, l, u, c, h = e.length, p = he(t), d = [], f = 0; f < h; f++)
                    if ((a = e[f]) || 0 === a)
                        if ("object" === ge.type(a))
                            ge.merge(d, a.nodeType ? [a] : a);
                        else if (we.test(a)) {
                            for (o = o || p.appendChild(t.createElement("div")),
                                     l = (ye.exec(a) || ["", ""])[1].toLowerCase(),
                                     c = ke[l] || ke._default,
                                     o.innerHTML = c[1] + a.replace(ve, "<$1></$2>") + c[2],
                                     s = c[0]; s--; )
                                o = o.lastChild;
                            if (!ge.support.leadingWhitespace && me.test(a) && d.push(t.createTextNode(me.exec(a)[0])),
                                    !ge.support.tbody)
                                for (s = (a = "table" !== l || be.test(a) ? "<table>" !== c[1] || be.test(a) ? 0 : o : o.firstChild) && a.childNodes.length; s--; )
                                    ge.nodeName(u = a.childNodes[s], "tbody") && !u.childNodes.length && a.removeChild(u);
                            for (ge.merge(d, o.childNodes),
                                     o.textContent = ""; o.firstChild; )
                                o.removeChild(o.firstChild);
                            o = p.lastChild
                        } else
                            d.push(t.createTextNode(a));
                for (o && p.removeChild(o),
                     ge.support.appendChecked || ge.grep(Ie(d, "input"), He),
                         f = 0; a = d[f++]; )
                    if ((!n || -1 === ge.inArray(a, n)) && (r = ge.contains(a.ownerDocument, a),
                            o = Ie(p.appendChild(a), "script"),
                        r && Me(o),
                            i))
                        for (s = 0; a = o[s++]; )
                            Se.test(a.type || "") && i.push(a);
                return o = null,
                    p
            },
            cleanData: function(e, t) {
                for (var i, n, s, a, r = 0, o = ge.expando, l = ge.cache, u = ge.support.deleteExpando, c = ge.event.special; null != (i = e[r]); r++)
                    if ((t || ge.acceptData(i)) && (a = (s = i[o]) && l[s])) {
                        if (a.events)
                            for (n in a.events)
                                c[n] ? ge.event.remove(i, n) : ge.removeEvent(i, n, a.handle);
                        l[s] && (delete l[s],
                            u ? delete i[o] : typeof i.removeAttribute !== v ? i.removeAttribute(o) : i[o] = null,
                            h.push(s))
                    }
            }
        });
    var Le, Re, Oe, $e = /alpha\([^)]*\)/i, je = /opacity\s*=\s*([^)]*)/, We = /^(top|right|bottom|left)$/, Be = /^(none|table(?!-c[ea]).+)/, Fe = /^margin/, qe = new RegExp("^(" + d + ")(.*)$","i"), Xe = new RegExp("^(" + d + ")(?!px)[a-z%]+$","i"), Ye = new RegExp("^([+-])=(" + d + ")","i"), Ge = {
        BODY: "block"
    }, Ue = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ve = {
        letterSpacing: 0,
        fontWeight: 400
    }, Ke = ["Top", "Right", "Bottom", "Left"], Qe = ["Webkit", "O", "Moz", "ms"];
    function Je(e, t) {
        if (t in e)
            return t;
        for (var i = t.charAt(0).toUpperCase() + t.slice(1), n = t, s = Qe.length; s--; )
            if ((t = Qe[s] + i)in e)
                return t;
        return n
    }
    function Ze(e, t) {
        return e = t || e,
        "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e)
    }
    function et(e, t) {
        for (var i, n, s, a = [], r = 0, o = e.length; r < o; r++)
            (n = e[r]).style && (a[r] = ge._data(n, "olddisplay"),
                i = n.style.display,
                t ? (a[r] || "none" !== i || (n.style.display = ""),
                "" === n.style.display && Ze(n) && (a[r] = ge._data(n, "olddisplay", st(n.nodeName)))) : a[r] || (s = Ze(n),
                (i && "none" !== i || !s) && ge._data(n, "olddisplay", s ? i : ge.css(n, "display"))));
        for (r = 0; r < o; r++)
            (n = e[r]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? a[r] || "" : "none"));
        return e
    }
    function tt(e, t, i) {
        var n = qe.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }
    function it(e, t, i, n, s) {
        for (var a = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, r = 0; a < 4; a += 2)
            "margin" === i && (r += ge.css(e, i + Ke[a], !0, s)),
                n ? ("content" === i && (r -= ge.css(e, "padding" + Ke[a], !0, s)),
                "margin" !== i && (r -= ge.css(e, "border" + Ke[a] + "Width", !0, s))) : (r += ge.css(e, "padding" + Ke[a], !0, s),
                "padding" !== i && (r += ge.css(e, "border" + Ke[a] + "Width", !0, s)));
        return r
    }
    function nt(e, t, i) {
        var n = !0
            , s = "width" === t ? e.offsetWidth : e.offsetHeight
            , a = Re(e)
            , r = ge.support.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, a);
        if (s <= 0 || null == s) {
            if (((s = Oe(e, t, a)) < 0 || null == s) && (s = e.style[t]),
                    Xe.test(s))
                return s;
            n = r && (ge.support.boxSizingReliable || s === e.style[t]),
                s = parseFloat(s) || 0
        }
        return s + it(e, t, i || (r ? "border" : "content"), n, a) + "px"
    }
    function st(e) {
        var t = m
            , i = Ge[e];
        return i || ("none" !== (i = at(e, t)) && i || ((t = ((Le = (Le || ge("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement))[0].contentWindow || Le[0].contentDocument).document).write("<!doctype html><html><body>"),
            t.close(),
            i = at(e, t),
            Le.detach()),
            Ge[e] = i),
            i
    }
    function at(e, t) {
        var i = ge(t.createElement(e)).appendTo(t.body)
            , n = ge.css(i[0], "display");
        return i.remove(),
            n
    }
    ge.fn.extend({
        css: function(e, t) {
            return ge.access(this, function(e, t, i) {
                var n, s, a = {}, r = 0;
                if (ge.isArray(t)) {
                    for (s = Re(e),
                             n = t.length; r < n; r++)
                        a[t[r]] = ge.css(e, t[r], !1, s);
                    return a
                }
                return i !== C ? ge.style(e, t, i) : ge.css(e, t)
            }, e, t, 1 < arguments.length)
        },
        show: function() {
            return et(this, !0)
        },
        hide: function() {
            return et(this)
        },
        toggle: function(e) {
            var t = "boolean" == typeof e;
            return this.each(function() {
                (t ? e : Ze(this)) ? ge(this).show() : ge(this).hide()
            })
        }
    }),
        ge.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var i = Oe(e, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: ge.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, i, n) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var s, a, r, o = ge.camelCase(t), l = e.style;
                    if (t = ge.cssProps[o] || (ge.cssProps[o] = Je(l, o)),
                            r = ge.cssHooks[t] || ge.cssHooks[o],
                        i === C)
                        return r && "get"in r && (s = r.get(e, !1, n)) !== C ? s : l[t];
                    if (!("string" === (a = typeof i) && (s = Ye.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(ge.css(e, t)),
                            a = "number"),
                        null == i || "number" === a && isNaN(i) || ("number" !== a || ge.cssNumber[o] || (i += "px"),
                        ge.support.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        r && "set"in r && (i = r.set(e, i, n)) === C)))
                        try {
                            l[t] = i
                        } catch (e) {}
                }
            },
            css: function(e, t, i, n) {
                var s, a, r, o = ge.camelCase(t);
                return t = ge.cssProps[o] || (ge.cssProps[o] = Je(e.style, o)),
                (r = ge.cssHooks[t] || ge.cssHooks[o]) && "get"in r && (a = r.get(e, !0, i)),
                a === C && (a = Oe(e, t, n)),
                "normal" === a && t in Ve && (a = Ve[t]),
                    "" === i || i ? (s = parseFloat(a),
                        !0 === i || ge.isNumeric(s) ? s || 0 : a) : a
            },
            swap: function(e, t, i, n) {
                var s, a, r = {};
                for (a in t)
                    r[a] = e.style[a],
                        e.style[a] = t[a];
                for (a in s = i.apply(e, n || []),
                    t)
                    e.style[a] = r[a];
                return s
            }
        }),
        f.getComputedStyle ? (Re = function(e) {
                return f.getComputedStyle(e, null)
            }
                ,
                Oe = function(e, t, i) {
                    var n, s, a, r = i || Re(e), o = r ? r.getPropertyValue(t) || r[t] : C, l = e.style;
                    return r && ("" !== o || ge.contains(e.ownerDocument, e) || (o = ge.style(e, t)),
                    Xe.test(o) && Fe.test(t) && (n = l.width,
                        s = l.minWidth,
                        a = l.maxWidth,
                        l.minWidth = l.maxWidth = l.width = o,
                        o = r.width,
                        l.width = n,
                        l.minWidth = s,
                        l.maxWidth = a)),
                        o
                }
        ) : m.documentElement.currentStyle && (Re = function(e) {
                return e.currentStyle
            }
                ,
                Oe = function(e, t, i) {
                    var n, s, a, r = i || Re(e), o = r ? r[t] : C, l = e.style;
                    return null == o && l && l[t] && (o = l[t]),
                    Xe.test(o) && !We.test(t) && (n = l.left,
                    (a = (s = e.runtimeStyle) && s.left) && (s.left = e.currentStyle.left),
                        l.left = "fontSize" === t ? "1em" : o,
                        o = l.pixelLeft + "px",
                        l.left = n,
                    a && (s.left = a)),
                        "" === o ? "auto" : o
                }
        ),
        ge.each(["height", "width"], function(e, s) {
            ge.cssHooks[s] = {
                get: function(e, t, i) {
                    if (t)
                        return 0 === e.offsetWidth && Be.test(ge.css(e, "display")) ? ge.swap(e, Ue, function() {
                            return nt(e, s, i)
                        }) : nt(e, s, i)
                },
                set: function(e, t, i) {
                    var n = i && Re(e);
                    return tt(0, t, i ? it(e, s, i, ge.support.boxSizing && "border-box" === ge.css(e, "boxSizing", !1, n), n) : 0)
                }
            }
        }),
    ge.support.opacity || (ge.cssHooks.opacity = {
        get: function(e, t) {
            return je.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var i = e.style
                , n = e.currentStyle
                , s = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                , a = n && n.filter || i.filter || "";
            ((i.zoom = 1) <= t || "" === t) && "" === ge.trim(a.replace($e, "")) && i.removeAttribute && (i.removeAttribute("filter"),
            "" === t || n && !n.filter) || (i.filter = $e.test(a) ? a.replace($e, s) : a + " " + s)
        }
    }),
        ge(function() {
            ge.support.reliableMarginRight || (ge.cssHooks.marginRight = {
                get: function(e, t) {
                    if (t)
                        return ge.swap(e, {
                            display: "inline-block"
                        }, Oe, [e, "marginRight"])
                }
            }),
            !ge.support.pixelPosition && ge.fn.position && ge.each(["top", "left"], function(e, i) {
                ge.cssHooks[i] = {
                    get: function(e, t) {
                        if (t)
                            return t = Oe(e, i),
                                Xe.test(t) ? ge(e).position()[i] + "px" : t
                    }
                }
            })
        }),
    ge.expr && ge.expr.filters && (ge.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ge.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ge.css(e, "display"))
        }
            ,
            ge.expr.filters.visible = function(e) {
                return !ge.expr.filters.hidden(e)
            }
    ),
        ge.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(s, a) {
            ge.cssHooks[s + a] = {
                expand: function(e) {
                    for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        i[s + Ke[t] + a] = n[t] || n[t - 2] || n[0];
                    return i
                }
            },
            Fe.test(s) || (ge.cssHooks[s + a].set = tt)
        });
    var rt = /%20/g
        , ot = /\[\]$/
        , lt = /\r?\n/g
        , ut = /^(?:submit|button|image|reset|file)$/i
        , ct = /^(?:input|select|textarea|keygen)/i;
    function ht(i, e, n, s) {
        var t;
        if (ge.isArray(e))
            ge.each(e, function(e, t) {
                n || ot.test(i) ? s(i, t) : ht(i + "[" + ("object" == typeof t ? e : "") + "]", t, n, s)
            });
        else if (n || "object" !== ge.type(e))
            s(i, e);
        else
            for (t in e)
                ht(i + "[" + t + "]", e[t], n, s)
    }
    ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && ct.test(this.nodeName) && !ut.test(e) && (this.checked || !Te.test(e))
            }).map(function(e, t) {
                var i = ge(this).val();
                return null == i ? null : ge.isArray(i) ? ge.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(lt, "\r\n")
                }
            }).get()
        }
    }),
        ge.param = function(e, t) {
            var i, n = [], s = function(e, t) {
                t = ge.isFunction(t) ? t() : null == t ? "" : t,
                    n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (t === C && (t = ge.ajaxSettings && ge.ajaxSettings.traditional),
                ge.isArray(e) || e.jquery && !ge.isPlainObject(e))
                ge.each(e, function() {
                    s(this.name, this.value)
                });
            else
                for (i in e)
                    ht(i, e[i], t, s);
            return n.join("&").replace(rt, "+")
        }
        ,
        ge.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, i) {
            ge.fn[i] = function(e, t) {
                return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
            }
        }),
        ge.fn.hover = function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    ;
    var pt, dt, ft = ge.now(), mt = /\?/, gt = /#.*$/, vt = /([?&])_=[^&]*/, yt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, bt = /^(?:GET|HEAD)$/, wt = /^\/\//, xt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Tt = ge.fn.load, Ct = {}, St = {}, Et = "*/".concat("*");
    try {
        dt = e.href
    } catch (e) {
        (dt = m.createElement("a")).href = "",
            dt = dt.href
    }
    function _t(a) {
        return function(e, t) {
            "string" != typeof e && (t = e,
                e = "*");
            var i, n = 0, s = e.toLowerCase().match(S) || [];
            if (ge.isFunction(t))
                for (; i = s[n++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                        (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t)
        }
    }
    function kt(t, s, a, r) {
        var o = {}
            , l = t === St;
        function u(e) {
            var n;
            return o[e] = !0,
                ge.each(t[e] || [], function(e, t) {
                    var i = t(s, a, r);
                    return "string" != typeof i || l || o[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i),
                        u(i),
                        !1)
                }),
                n
        }
        return u(s.dataTypes[0]) || !o["*"] && u("*")
    }
    function zt(e, t) {
        var i, n, s = ge.ajaxSettings.flatOptions || {};
        for (n in t)
            t[n] !== C && ((s[n] ? e : i || (i = {}))[n] = t[n]);
        return i && ge.extend(!0, e, i),
            e
    }
    pt = xt.exec(dt.toLowerCase()) || [],
        ge.fn.load = function(e, t, i) {
            if ("string" != typeof e && Tt)
                return Tt.apply(this, arguments);
            var n, s, a, r = this, o = e.indexOf(" ");
            return 0 <= o && (n = e.slice(o, e.length),
                e = e.slice(0, o)),
                ge.isFunction(t) ? (i = t,
                    t = C) : t && "object" == typeof t && (a = "POST"),
            0 < r.length && ge.ajax({
                url: e,
                type: a,
                dataType: "html",
                data: t
            }).done(function(e) {
                s = arguments,
                    r.html(n ? ge("<div>").append(ge.parseHTML(e)).find(n) : e)
            }).complete(i && function(e, t) {
                r.each(i, s || [e.responseText, t, e])
            }
            ),
                this
        }
        ,
        ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            ge.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        ge.each(["get", "post"], function(e, s) {
            ge[s] = function(e, t, i, n) {
                return ge.isFunction(t) && (n = n || i,
                    i = t,
                    t = C),
                    ge.ajax({
                        url: e,
                        type: s,
                        dataType: n,
                        data: t,
                        success: i
                    })
            }
        }),
        ge.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: dt,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(pt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Et,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": f.String,
                    "text html": !0,
                    "text json": ge.parseJSON,
                    "text xml": ge.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? zt(zt(e, ge.ajaxSettings), t) : zt(ge.ajaxSettings, e)
            },
            ajaxPrefilter: _t(Ct),
            ajaxTransport: _t(St),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                    e = C),
                    t = t || {};
                var i, n, c, h, p, d, f, s, m = ge.ajaxSetup({}, t), g = m.context || m, v = m.context && (g.nodeType || g.jquery) ? ge(g) : ge.event, y = ge.Deferred(), b = ge.Callbacks("once memory"), w = m.statusCode || {}, a = {}, r = {}, x = 0, o = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === x) {
                            if (!s)
                                for (s = {}; t = yt.exec(h); )
                                    s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === x ? h : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        return x || (e = r[i] = r[i] || e,
                            a[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return x || (m.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (x < 2)
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || o;
                        return f && f.abort(t),
                            l(0, t),
                            this
                    }
                };
                if (y.promise(T).complete = b.add,
                        T.success = T.done,
                        T.error = T.fail,
                        m.url = ((e || m.url || dt) + "").replace(gt, "").replace(wt, pt[1] + "//"),
                        m.type = t.method || t.type || m.method || m.type,
                        m.dataTypes = ge.trim(m.dataType || "*").toLowerCase().match(S) || [""],
                    null == m.crossDomain && (i = xt.exec(m.url.toLowerCase()),
                        m.crossDomain = !(!i || i[1] === pt[1] && i[2] === pt[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (pt[3] || ("http:" === pt[1] ? 80 : 443)))),
                    m.data && m.processData && "string" != typeof m.data && (m.data = ge.param(m.data, m.traditional)),
                        kt(Ct, m, t, T),
                    2 === x)
                    return T;
                for (n in (d = m.global) && 0 == ge.active++ && ge.event.trigger("ajaxStart"),
                    m.type = m.type.toUpperCase(),
                    m.hasContent = !bt.test(m.type),
                    c = m.url,
                m.hasContent || (m.data && (c = m.url += (mt.test(c) ? "&" : "?") + m.data,
                    delete m.data),
                !1 === m.cache && (m.url = vt.test(c) ? c.replace(vt, "$1_=" + ft++) : c + (mt.test(c) ? "&" : "?") + "_=" + ft++)),
                m.ifModified && (ge.lastModified[c] && T.setRequestHeader("If-Modified-Since", ge.lastModified[c]),
                ge.etag[c] && T.setRequestHeader("If-None-Match", ge.etag[c])),
                (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && T.setRequestHeader("Content-Type", m.contentType),
                    T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Et + "; q=0.01" : "") : m.accepts["*"]),
                    m.headers)
                    T.setRequestHeader(n, m.headers[n]);
                if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === x))
                    return T.abort();
                for (n in o = "abort",
                    {
                        success: 1,
                        error: 1,
                        complete: 1
                    })
                    T[n](m[n]);
                if (f = kt(St, m, t, T)) {
                    T.readyState = 1,
                    d && v.trigger("ajaxSend", [T, m]),
                    m.async && 0 < m.timeout && (p = setTimeout(function() {
                        T.abort("timeout")
                    }, m.timeout));
                    try {
                        x = 1,
                            f.send(a, l)
                    } catch (e) {
                        if (!(x < 2))
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, i, n) {
                    var s, a, r, o, l, u = t;
                    2 !== x && (x = 2,
                    p && clearTimeout(p),
                        f = C,
                        h = n || "",
                        T.readyState = 0 < e ? 4 : 0,
                    i && (o = function(e, t, i) {
                        var n, s, a, r, o = e.contents, l = e.dataTypes, u = e.responseFields;
                        for (r in u)
                            r in i && (t[u[r]] = i[r]);
                        for (; "*" === l[0]; )
                            l.shift(),
                            s === C && (s = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (s)
                            for (r in o)
                                if (o[r] && o[r].test(s)) {
                                    l.unshift(r);
                                    break
                                }
                        if (l[0]in i)
                            a = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || e.converters[r + " " + l[0]]) {
                                    a = r;
                                    break
                                }
                                n || (n = r)
                            }
                            a = a || n
                        }
                        if (a)
                            return a !== l[0] && l.unshift(a),
                                i[a]
                    }(m, T, i)),
                        200 <= e && e < 300 || 304 === e ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (ge.lastModified[c] = l),
                        (l = T.getResponseHeader("etag")) && (ge.etag[c] = l)),
                            204 === e ? (s = !0,
                                u = "nocontent") : 304 === e ? (s = !0,
                                u = "notmodified") : (u = (s = function(e, t) {
                                var i, n, s, a, r = {}, o = 0, l = e.dataTypes.slice(), u = l[0];
                                e.dataFilter && (t = e.dataFilter(t, e.dataType));
                                if (l[1])
                                    for (s in e.converters)
                                        r[s.toLowerCase()] = e.converters[s];
                                for (; n = l[++o]; )
                                    if ("*" !== n) {
                                        if ("*" !== u && u !== n) {
                                            if (!(s = r[u + " " + n] || r["* " + n]))
                                                for (i in r)
                                                    if ((a = i.split(" "))[1] === n && (s = r[u + " " + a[0]] || r["* " + a[0]])) {
                                                        !0 === s ? s = r[i] : !0 !== r[i] && (n = a[0],
                                                            l.splice(o--, 0, n));
                                                        break
                                                    }
                                            if (!0 !== s)
                                                if (s && e.throws)
                                                    t = s(t);
                                                else
                                                    try {
                                                        t = s(t)
                                                    } catch (e) {
                                                        return {
                                                            state: "parsererror",
                                                            error: s ? e : "No conversion from " + u + " to " + n
                                                        }
                                                    }
                                        }
                                        u = n
                                    }
                                return {
                                    state: "success",
                                    data: t
                                }
                            }(m, o)).state,
                                a = s.data,
                                s = !(r = s.error))) : (r = u,
                        !e && u || (u = "error",
                        e < 0 && (e = 0))),
                        T.status = e,
                        T.statusText = (t || u) + "",
                        s ? y.resolveWith(g, [a, u, T]) : y.rejectWith(g, [T, u, r]),
                        T.statusCode(w),
                        w = C,
                    d && v.trigger(s ? "ajaxSuccess" : "ajaxError", [T, m, s ? a : r]),
                        b.fireWith(g, [T, u]),
                    d && (v.trigger("ajaxComplete", [T, m]),
                    --ge.active || ge.event.trigger("ajaxStop")))
                }
                return T
            },
            getScript: function(e, t) {
                return ge.get(e, C, t, "script")
            },
            getJSON: function(e, t, i) {
                return ge.get(e, t, i, "json")
            }
        }),
        ge.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return ge.globalEval(e),
                        e
                }
            }
        }),
        ge.ajaxPrefilter("script", function(e) {
            e.cache === C && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
                e.global = !1)
        }),
        ge.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var n, s = m.head || ge("head")[0] || m.documentElement;
                return {
                    send: function(e, i) {
                        (n = m.createElement("script")).async = !0,
                        t.scriptCharset && (n.charset = t.scriptCharset),
                            n.src = t.url,
                            n.onload = n.onreadystatechange = function(e, t) {
                                (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null,
                                n.parentNode && n.parentNode.removeChild(n),
                                    n = null,
                                t || i(200, "success"))
                            }
                            ,
                            s.insertBefore(n, s.firstChild)
                    },
                    abort: function() {
                        n && n.onload(C, !0)
                    }
                }
            }
        });
    var Pt = []
        , Nt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Pt.pop() || ge.expando + "_" + ft++;
            return this[e] = !0,
                e
        }
    }),
        ge.ajaxPrefilter("json jsonp", function(e, t, i) {
            var n, s, a, r = !1 !== e.jsonp && (Nt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Nt.test(e.data) && "data");
            if (r || "jsonp" === e.dataTypes[0])
                return n = e.jsonpCallback = ge.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                    r ? e[r] = e[r].replace(Nt, "$1" + n) : !1 !== e.jsonp && (e.url += (mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
                    e.converters["script json"] = function() {
                        return a || ge.error(n + " was not called"),
                            a[0]
                    }
                    ,
                    e.dataTypes[0] = "json",
                    s = f[n],
                    f[n] = function() {
                        a = arguments
                    }
                    ,
                    i.always(function() {
                        f[n] = s,
                        e[n] && (e.jsonpCallback = t.jsonpCallback,
                            Pt.push(n)),
                        a && ge.isFunction(s) && s(a[0]),
                            a = s = C
                    }),
                    "script"
        });
    var Mt, Dt, At = 0, It = f.ActiveXObject && function() {
            var e;
            for (e in Mt)
                Mt[e](C, !0)
        }
    ;
    function Ht() {
        try {
            return new f.XMLHttpRequest
        } catch (e) {}
    }
    ge.ajaxSettings.xhr = f.ActiveXObject ? function() {
            return !this.isLocal && Ht() || function() {
                try {
                    return new f.ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }()
        }
        : Ht,
        Dt = ge.ajaxSettings.xhr(),
        ge.support.cors = !!Dt && "withCredentials"in Dt,
    (Dt = ge.support.ajax = !!Dt) && ge.ajaxTransport(function(u) {
        var c;
        if (!u.crossDomain || ge.support.cors)
            return {
                send: function(e, r) {
                    var o, t, l = u.xhr();
                    if (u.username ? l.open(u.type, u.url, u.async, u.username, u.password) : l.open(u.type, u.url, u.async),
                            u.xhrFields)
                        for (t in u.xhrFields)
                            l[t] = u.xhrFields[t];
                    u.mimeType && l.overrideMimeType && l.overrideMimeType(u.mimeType),
                    u.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (t in e)
                            l.setRequestHeader(t, e[t])
                    } catch (e) {}
                    l.send(u.hasContent && u.data || null),
                        c = function(e, t) {
                            var i, n, s, a;
                            try {
                                if (c && (t || 4 === l.readyState))
                                    if (c = C,
                                        o && (l.onreadystatechange = ge.noop,
                                        It && delete Mt[o]),
                                            t)
                                        4 !== l.readyState && l.abort();
                                    else {
                                        a = {},
                                            i = l.status,
                                            n = l.getAllResponseHeaders(),
                                        "string" == typeof l.responseText && (a.text = l.responseText);
                                        try {
                                            s = l.statusText
                                        } catch (e) {
                                            s = ""
                                        }
                                        i || !u.isLocal || u.crossDomain ? 1223 === i && (i = 204) : i = a.text ? 200 : 404
                                    }
                            } catch (e) {
                                t || r(-1, e)
                            }
                            a && r(i, s, a, n)
                        }
                        ,
                        u.async ? 4 === l.readyState ? setTimeout(c) : (o = ++At,
                        It && (Mt || (Mt = {},
                            ge(f).unload(It)),
                            Mt[o] = c),
                            l.onreadystatechange = c) : c()
                },
                abort: function() {
                    c && c(C, !0)
                }
            }
    });
    var Lt, Rt, Ot = /^(?:toggle|show|hide)$/, $t = new RegExp("^(?:([+-])=|)(" + d + ")([a-z%]*)$","i"), jt = /queueHooks$/, Wt = [function(t, e, i) {
        var n, s, a, r, o, l, u, c, h, p = this, d = t.style, f = {}, m = [], g = t.nodeType && Ze(t);
        i.queue || (null == (c = ge._queueHooks(t, "fx")).unqueued && (c.unqueued = 0,
                h = c.empty.fire,
                c.empty.fire = function() {
                    c.unqueued || h()
                }
        ),
            c.unqueued++,
            p.always(function() {
                p.always(function() {
                    c.unqueued--,
                    ge.queue(t, "fx").length || c.empty.fire()
                })
            }));
        1 === t.nodeType && ("height"in e || "width"in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY],
        "inline" === ge.css(t, "display") && "none" === ge.css(t, "float") && (ge.support.inlineBlockNeedsLayout && "inline" !== st(t.nodeName) ? d.zoom = 1 : d.display = "inline-block"));
        i.overflow && (d.overflow = "hidden",
        ge.support.shrinkWrapBlocks || p.always(function() {
            d.overflow = i.overflow[0],
                d.overflowX = i.overflow[1],
                d.overflowY = i.overflow[2]
        }));
        for (s in e)
            if (r = e[s],
                    Ot.exec(r)) {
                if (delete e[s],
                        l = l || "toggle" === r,
                    r === (g ? "hide" : "show"))
                    continue;
                m.push(s)
            }
        if (a = m.length) {
            "hidden"in (o = ge._data(t, "fxshow") || ge._data(t, "fxshow", {})) && (g = o.hidden),
            l && (o.hidden = !g),
                g ? ge(t).show() : p.done(function() {
                    ge(t).hide()
                }),
                p.done(function() {
                    var e;
                    for (e in ge._removeData(t, "fxshow"),
                        f)
                        ge.style(t, e, f[e])
                });
            for (s = 0; s < a; s++)
                n = m[s],
                    u = p.createTween(n, g ? o[n] : 0),
                    f[n] = o[n] || ge.style(t, n),
                n in o || (o[n] = u.start,
                g && (u.end = u.start,
                    u.start = "width" === n || "height" === n ? 1 : 0))
        }
    }
    ], Bt = {
        "*": [function(e, t) {
            var i, n, s = this.createTween(e, t), a = $t.exec(t), r = s.cur(), o = +r || 0, l = 1, u = 20;
            if (a) {
                if (i = +a[2],
                    "px" !== (n = a[3] || (ge.cssNumber[e] ? "" : "px")) && o)
                    for (o = ge.css(s.elem, e, !0) || i || 1; o /= l = l || ".5",
                        ge.style(s.elem, e, o + n),
                    l !== (l = s.cur() / r) && 1 !== l && --u; )
                        ;
                s.unit = n,
                    s.start = o,
                    s.end = a[1] ? o + (a[1] + 1) * i : i
            }
            return s
        }
        ]
    };
    function Ft() {
        return setTimeout(function() {
            Lt = C
        }),
            Lt = ge.now()
    }
    function qt(a, e, t) {
        var i, r, o, n, s = 0, l = Wt.length, u = ge.Deferred().always(function() {
            delete c.elem
        }), c = function() {
            if (r)
                return !1;
            for (var e = Lt || Ft(), t = Math.max(0, h.startTime + h.duration - e), i = 1 - (t / h.duration || 0), n = 0, s = h.tweens.length; n < s; n++)
                h.tweens[n].run(i);
            return u.notifyWith(a, [h, i, t]),
                i < 1 && s ? t : (u.resolveWith(a, [h]),
                    !1)
        }, h = u.promise({
            elem: a,
            props: ge.extend({}, e),
            opts: ge.extend(!0, {
                specialEasing: {}
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Lt || Ft(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var i = ge.Tween(a, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                return h.tweens.push(i),
                    i
            },
            stop: function(e) {
                var t = 0
                    , i = e ? h.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; t < i; t++)
                    h.tweens[t].run(1);
                return e ? u.resolveWith(a, [h, e]) : u.rejectWith(a, [h, e]),
                    this
            }
        }), p = h.props;
        for (!function(e, t) {
            var i, n, s, a, r;
            for (s in e)
                if (n = ge.camelCase(s),
                        a = t[n],
                        i = e[s],
                    ge.isArray(i) && (a = i[1],
                        i = e[s] = i[0]),
                    s !== n && (e[n] = i,
                        delete e[s]),
                    (r = ge.cssHooks[n]) && "expand"in r)
                    for (s in i = r.expand(i),
                        delete e[n],
                        i)
                        s in e || (e[s] = i[s],
                            t[s] = a);
                else
                    t[n] = a
        }(p, h.opts.specialEasing); s < l; s++)
            if (i = Wt[s].call(h, a, p, h.opts))
                return i;
        return o = h,
            n = p,
            ge.each(n, function(e, t) {
                for (var i = (Bt[e] || []).concat(Bt["*"]), n = 0, s = i.length; n < s; n++)
                    if (i[n].call(o, e, t))
                        return
            }),
        ge.isFunction(h.opts.start) && h.opts.start.call(a, h),
            ge.fx.timer(ge.extend(c, {
                elem: a,
                anim: h,
                queue: h.opts.queue
            })),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
    }
    function Xt(e, t, i, n, s) {
        return new Xt.prototype.init(e,t,i,n,s)
    }
    function Yt(e, t) {
        var i, n = {
            height: e
        }, s = 0;
        for (t = t ? 1 : 0; s < 4; s += 2 - t)
            n["margin" + (i = Ke[s])] = n["padding" + i] = e;
        return t && (n.opacity = n.width = e),
            n
    }
    function Gt(e) {
        return ge.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }
    ge.Animation = ge.extend(qt, {
        tweener: function(e, t) {
            ge.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            for (var i, n = 0, s = e.length; n < s; n++)
                i = e[n],
                    Bt[i] = Bt[i] || [],
                    Bt[i].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Wt.unshift(e) : Wt.push(e)
        }
    }),
        ((ge.Tween = Xt).prototype = {
            constructor: Xt,
            init: function(e, t, i, n, s, a) {
                this.elem = e,
                    this.prop = i,
                    this.easing = s || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = n,
                    this.unit = a || (ge.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var e = Xt.propHooks[this.prop];
                return e && e.get ? e.get(this) : Xt.propHooks._default.get(this)
            },
            run: function(e) {
                var t, i = Xt.propHooks[this.prop];
                return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : Xt.propHooks._default.set(this),
                    this
            }
        }).init.prototype = Xt.prototype,
        (Xt.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ge.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
                },
                set: function(e) {
                    ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ge.cssProps[e.prop]] || ge.cssHooks[e.prop]) ? ge.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }).scrollTop = Xt.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        ge.each(["toggle", "show", "hide"], function(e, n) {
            var s = ge.fn[n];
            ge.fn[n] = function(e, t, i) {
                return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(Yt(n, !0), e, t, i)
            }
        }),
        ge.fn.extend({
            fadeTo: function(e, t, i, n) {
                return this.filter(Ze).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function(t, e, i, n) {
                var s = ge.isEmptyObject(t)
                    , a = ge.speed(e, i, n)
                    , r = function() {
                    var e = qt(this, ge.extend({}, t), a);
                    r.finish = function() {
                        e.stop(!0)
                    }
                        ,
                    (s || ge._data(this, "finish")) && e.stop(!0)
                };
                return r.finish = r,
                    s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function(s, e, a) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(a)
                };
                return "string" != typeof s && (a = e,
                    e = s,
                    s = C),
                e && !1 !== s && this.queue(s || "fx", []),
                    this.each(function() {
                        var e = !0
                            , t = null != s && s + "queueHooks"
                            , i = ge.timers
                            , n = ge._data(this);
                        if (t)
                            n[t] && n[t].stop && r(n[t]);
                        else
                            for (t in n)
                                n[t] && n[t].stop && jt.test(t) && r(n[t]);
                        for (t = i.length; t--; )
                            i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(a),
                                e = !1,
                                i.splice(t, 1));
                        !e && a || ge.dequeue(this, s)
                    })
            },
            finish: function(r) {
                return !1 !== r && (r = r || "fx"),
                    this.each(function() {
                        var e, t = ge._data(this), i = t[r + "queue"], n = t[r + "queueHooks"], s = ge.timers, a = i ? i.length : 0;
                        for (t.finish = !0,
                                 ge.queue(this, r, []),
                             n && n.cur && n.cur.finish && n.cur.finish.call(this),
                                 e = s.length; e--; )
                            s[e].elem === this && s[e].queue === r && (s[e].anim.stop(!0),
                                s.splice(e, 1));
                        for (e = 0; e < a; e++)
                            i[e] && i[e].finish && i[e].finish.call(this);
                        delete t.finish
                    })
            }
        }),
        ge.each({
            slideDown: Yt("show"),
            slideUp: Yt("hide"),
            slideToggle: Yt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, n) {
            ge.fn[e] = function(e, t, i) {
                return this.animate(n, e, t, i)
            }
        }),
        ge.speed = function(e, t, i) {
            var n = e && "object" == typeof e ? ge.extend({}, e) : {
                complete: i || !i && t || ge.isFunction(e) && e,
                duration: e,
                easing: i && t || t && !ge.isFunction(t) && t
            };
            return n.duration = ge.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ge.fx.speeds ? ge.fx.speeds[n.duration] : ge.fx.speeds._default,
            null != n.queue && !0 !== n.queue || (n.queue = "fx"),
                n.old = n.complete,
                n.complete = function() {
                    ge.isFunction(n.old) && n.old.call(this),
                    n.queue && ge.dequeue(this, n.queue)
                }
                ,
                n
        }
        ,
        ge.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        ge.timers = [],
        ge.fx = Xt.prototype.init,
        ge.fx.tick = function() {
            var e, t = ge.timers, i = 0;
            for (Lt = ge.now(); i < t.length; i++)
                (e = t[i])() || t[i] !== e || t.splice(i--, 1);
            t.length || ge.fx.stop(),
                Lt = C
        }
        ,
        ge.fx.timer = function(e) {
            e() && ge.timers.push(e) && ge.fx.start()
        }
        ,
        ge.fx.interval = 13,
        ge.fx.start = function() {
            Rt || (Rt = setInterval(ge.fx.tick, ge.fx.interval))
        }
        ,
        ge.fx.stop = function() {
            clearInterval(Rt),
                Rt = null
        }
        ,
        ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        ge.fx.step = {},
    ge.expr && ge.expr.filters && (ge.expr.filters.animated = function(t) {
            return ge.grep(ge.timers, function(e) {
                return t === e.elem
            }).length
        }
    ),
        ge.fn.offset = function(t) {
            if (arguments.length)
                return t === C ? this : this.each(function(e) {
                    ge.offset.setOffset(this, t, e)
                });
            var e, i, n = {
                top: 0,
                left: 0
            }, s = this[0], a = s && s.ownerDocument;
            return a ? (e = a.documentElement,
                ge.contains(e, s) ? (typeof s.getBoundingClientRect !== v && (n = s.getBoundingClientRect()),
                    i = Gt(a),
                    {
                        top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                        left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                    }) : n) : void 0
        }
        ,
        ge.offset = {
            setOffset: function(e, t, i) {
                var n = ge.css(e, "position");
                "static" === n && (e.style.position = "relative");
                var s, a, r = ge(e), o = r.offset(), l = ge.css(e, "top"), u = ge.css(e, "left"), c = {}, h = {};
                ("absolute" === n || "fixed" === n) && -1 < ge.inArray("auto", [l, u]) ? (s = (h = r.position()).top,
                    a = h.left) : (s = parseFloat(l) || 0,
                    a = parseFloat(u) || 0),
                ge.isFunction(t) && (t = t.call(e, i, o)),
                null != t.top && (c.top = t.top - o.top + s),
                null != t.left && (c.left = t.left - o.left + a),
                    "using"in t ? t.using.call(e, c) : r.css(c)
            }
        },
        ge.fn.extend({
            position: function() {
                if (this[0]) {
                    var e, t, i = {
                        top: 0,
                        left: 0
                    }, n = this[0];
                    return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    ge.nodeName(e[0], "html") || (i = e.offset()),
                        i.top += ge.css(e[0], "borderTopWidth", !0),
                        i.left += ge.css(e[0], "borderLeftWidth", !0)),
                        {
                            top: t.top - i.top - ge.css(n, "marginTop", !0),
                            left: t.left - i.left - ge.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || m.documentElement; e && !ge.nodeName(e, "html") && "static" === ge.css(e, "position"); )
                        e = e.offsetParent;
                    return e || m.documentElement
                })
            }
        }),
        ge.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, s) {
            var a = /Y/.test(s);
            ge.fn[t] = function(e) {
                return ge.access(this, function(e, t, i) {
                    var n = Gt(e);
                    if (i === C)
                        return n ? s in n ? n[s] : n.document.documentElement[t] : e[t];
                    n ? n.scrollTo(a ? ge(n).scrollLeft() : i, a ? i : ge(n).scrollTop()) : e[t] = i
                }, t, e, arguments.length, null)
            }
        }),
        ge.each({
            Height: "height",
            Width: "width"
        }, function(a, r) {
            ge.each({
                padding: "inner" + a,
                content: r,
                "": "outer" + a
            }, function(n, e) {
                ge.fn[e] = function(e, t) {
                    var i = arguments.length && (n || "boolean" != typeof e)
                        , s = n || (!0 === e || !0 === t ? "margin" : "border");
                    return ge.access(this, function(e, t, i) {
                        var n;
                        return ge.isWindow(e) ? e.document.documentElement["client" + a] : 9 === e.nodeType ? (n = e.documentElement,
                            Math.max(e.body["scroll" + a], n["scroll" + a], e.body["offset" + a], n["offset" + a], n["client" + a])) : i === C ? ge.css(e, t, s) : ge.style(e, t, i, s)
                    }, r, i ? e : C, i, null)
                }
            })
        }),
        f.jQuery = f.$ = ge,
    "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return ge
    })
}(window),
    function() {
        var e = this
            , t = e._
            , r = {}
            , s = Array.prototype
            , i = Object.prototype
            , n = Function.prototype
            , a = s.push
            , o = s.slice
            , l = s.concat
            , h = i.toString
            , u = i.hasOwnProperty
            , c = s.forEach
            , p = s.map
            , d = s.reduce
            , f = s.reduceRight
            , m = s.filter
            , g = s.every
            , v = s.some
            , y = s.indexOf
            , b = s.lastIndexOf
            , w = Array.isArray
            , x = Object.keys
            , T = n.bind
            , C = function(e) {
            return e instanceof C ? e : this instanceof C ? void (this._wrapped = e) : new C(e)
        };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = C),
            exports._ = C) : e._ = C,
            C.VERSION = "1.4.4";
        var S = C.each = C.forEach = function(e, t, i) {
                if (null != e)
                    if (c && e.forEach === c)
                        e.forEach(t, i);
                    else if (e.length === +e.length) {
                        for (var n = 0, s = e.length; n < s; n++)
                            if (t.call(i, e[n], n, e) === r)
                                return
                    } else
                        for (var a in e)
                            if (C.has(e, a) && t.call(i, e[a], a, e) === r)
                                return
            }
        ;
        C.map = C.collect = function(e, n, s) {
            var a = [];
            return null == e ? a : p && e.map === p ? e.map(n, s) : (S(e, function(e, t, i) {
                a[a.length] = n.call(s, e, t, i)
            }),
                a)
        }
        ;
        var E = "Reduce of empty array with no initial value";
        C.reduce = C.foldl = C.inject = function(e, n, s, a) {
            var r = 2 < arguments.length;
            if (null == e && (e = []),
                d && e.reduce === d)
                return a && (n = C.bind(n, a)),
                    r ? e.reduce(n, s) : e.reduce(n);
            if (S(e, function(e, t, i) {
                    r ? s = n.call(a, s, e, t, i) : (s = e,
                        r = !0)
                }),
                    !r)
                throw new TypeError(E);
            return s
        }
            ,
            C.reduceRight = C.foldr = function(n, s, a, r) {
                var o = 2 < arguments.length;
                if (null == n && (n = []),
                    f && n.reduceRight === f)
                    return r && (s = C.bind(s, r)),
                        o ? n.reduceRight(s, a) : n.reduceRight(s);
                var l = n.length;
                if (l !== +l) {
                    var u = C.keys(n);
                    l = u.length
                }
                if (S(n, function(e, t, i) {
                        t = u ? u[--l] : --l,
                            o ? a = s.call(r, a, n[t], t, i) : (a = n[t],
                                o = !0)
                    }),
                        !o)
                    throw new TypeError(E);
                return a
            }
            ,
            C.find = C.detect = function(e, n, s) {
                var a;
                return _(e, function(e, t, i) {
                    if (n.call(s, e, t, i))
                        return a = e,
                            !0
                }),
                    a
            }
            ,
            C.filter = C.select = function(e, n, s) {
                var a = [];
                return null == e ? a : m && e.filter === m ? e.filter(n, s) : (S(e, function(e, t, i) {
                    n.call(s, e, t, i) && (a[a.length] = e)
                }),
                    a)
            }
            ,
            C.reject = function(e, n, s) {
                return C.filter(e, function(e, t, i) {
                    return !n.call(s, e, t, i)
                }, s)
            }
            ,
            C.every = C.all = function(e, n, s) {
                n || (n = C.identity);
                var a = !0;
                return null == e ? a : g && e.every === g ? e.every(n, s) : (S(e, function(e, t, i) {
                    if (!(a = a && n.call(s, e, t, i)))
                        return r
                }),
                    !!a)
            }
        ;
        var _ = C.some = C.any = function(e, n, s) {
                n || (n = C.identity);
                var a = !1;
                return null == e ? a : v && e.some === v ? e.some(n, s) : (S(e, function(e, t, i) {
                    if (a || (a = n.call(s, e, t, i)))
                        return r
                }),
                    !!a)
            }
        ;
        C.contains = C.include = function(e, t) {
            return null != e && (y && e.indexOf === y ? -1 != e.indexOf(t) : _(e, function(e) {
                return e === t
            }))
        }
            ,
            C.invoke = function(e, t) {
                var i = o.call(arguments, 2)
                    , n = C.isFunction(t);
                return C.map(e, function(e) {
                    return (n ? t : e[t]).apply(e, i)
                })
            }
            ,
            C.pluck = function(e, t) {
                return C.map(e, function(e) {
                    return e[t]
                })
            }
            ,
            C.where = function(e, i, t) {
                return C.isEmpty(i) ? t ? null : [] : C[t ? "find" : "filter"](e, function(e) {
                    for (var t in i)
                        if (i[t] !== e[t])
                            return !1;
                    return !0
                })
            }
            ,
            C.findWhere = function(e, t) {
                return C.where(e, t, !0)
            }
            ,
            C.max = function(e, s, a) {
                if (!s && C.isArray(e) && e[0] === +e[0] && e.length < 65535)
                    return Math.max.apply(Math, e);
                if (!s && C.isEmpty(e))
                    return -1 / 0;
                var r = {
                    computed: -1 / 0,
                    value: -1 / 0
                };
                return S(e, function(e, t, i) {
                    var n = s ? s.call(a, e, t, i) : e;
                    n >= r.computed && (r = {
                        value: e,
                        computed: n
                    })
                }),
                    r.value
            }
            ,
            C.min = function(e, s, a) {
                if (!s && C.isArray(e) && e[0] === +e[0] && e.length < 65535)
                    return Math.min.apply(Math, e);
                if (!s && C.isEmpty(e))
                    return 1 / 0;
                var r = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return S(e, function(e, t, i) {
                    var n = s ? s.call(a, e, t, i) : e;
                    n < r.computed && (r = {
                        value: e,
                        computed: n
                    })
                }),
                    r.value
            }
            ,
            C.shuffle = function(e) {
                var t, i = 0, n = [];
                return S(e, function(e) {
                    t = C.random(i++),
                        n[i - 1] = n[t],
                        n[t] = e
                }),
                    n
            }
        ;
        var k = function(t) {
            return C.isFunction(t) ? t : function(e) {
                return e[t]
            }
        };
        C.sortBy = function(e, t, n) {
            var s = k(t);
            return C.pluck(C.map(e, function(e, t, i) {
                return {
                    value: e,
                    index: t,
                    criteria: s.call(n, e, t, i)
                }
            }).sort(function(e, t) {
                var i = e.criteria
                    , n = t.criteria;
                if (i !== n) {
                    if (n < i || void 0 === i)
                        return 1;
                    if (i < n || void 0 === n)
                        return -1
                }
                return e.index < t.index ? -1 : 1
            }), "value")
        }
        ;
        var z = function(n, e, s, a) {
            var r = {}
                , o = k(e || C.identity);
            return S(n, function(e, t) {
                var i = o.call(s, e, t, n);
                a(r, i, e)
            }),
                r
        };
        C.groupBy = function(e, t, i) {
            return z(e, t, i, function(e, t, i) {
                (C.has(e, t) ? e[t] : e[t] = []).push(i)
            })
        }
            ,
            C.countBy = function(e, t, i) {
                return z(e, t, i, function(e, t) {
                    C.has(e, t) || (e[t] = 0),
                        e[t]++
                })
            }
            ,
            C.sortedIndex = function(e, t, i, n) {
                for (var s = (i = null == i ? C.identity : k(i)).call(n, t), a = 0, r = e.length; a < r; ) {
                    var o = a + r >>> 1;
                    i.call(n, e[o]) < s ? a = o + 1 : r = o
                }
                return a
            }
            ,
            C.toArray = function(e) {
                return e ? C.isArray(e) ? o.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : []
            }
            ,
            C.size = function(e) {
                return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length
            }
            ,
            C.first = C.head = C.take = function(e, t, i) {
                if (null != e)
                    return null == t || i ? e[0] : o.call(e, 0, t)
            }
            ,
            C.initial = function(e, t, i) {
                return o.call(e, 0, e.length - (null == t || i ? 1 : t))
            }
            ,
            C.last = function(e, t, i) {
                if (null != e)
                    return null == t || i ? e[e.length - 1] : o.call(e, Math.max(e.length - t, 0))
            }
            ,
            C.rest = C.tail = C.drop = function(e, t, i) {
                return o.call(e, null == t || i ? 1 : t)
            }
            ,
            C.compact = function(e) {
                return C.filter(e, C.identity)
            }
        ;
        var P = function(e, t, i) {
            return S(e, function(e) {
                C.isArray(e) ? t ? a.apply(i, e) : P(e, t, i) : i.push(e)
            }),
                i
        };
        C.flatten = function(e, t) {
            return P(e, t, [])
        }
            ,
            C.without = function(e) {
                return C.difference(e, o.call(arguments, 1))
            }
            ,
            C.uniq = C.unique = function(i, n, e, t) {
                C.isFunction(n) && (t = e,
                    e = n,
                    n = !1);
                var s = e ? C.map(i, e, t) : i
                    , a = []
                    , r = [];
                return S(s, function(e, t) {
                    (n ? t && r[r.length - 1] === e : C.contains(r, e)) || (r.push(e),
                        a.push(i[t]))
                }),
                    a
            }
            ,
            C.union = function() {
                return C.uniq(l.apply(s, arguments))
            }
            ,
            C.intersection = function(e) {
                var i = o.call(arguments, 1);
                return C.filter(C.uniq(e), function(t) {
                    return C.every(i, function(e) {
                        return 0 <= C.indexOf(e, t)
                    })
                })
            }
            ,
            C.difference = function(e) {
                var t = l.apply(s, o.call(arguments, 1));
                return C.filter(e, function(e) {
                    return !C.contains(t, e)
                })
            }
            ,
            C.zip = function() {
                for (var e = o.call(arguments), t = C.max(C.pluck(e, "length")), i = new Array(t), n = 0; n < t; n++)
                    i[n] = C.pluck(e, "" + n);
                return i
            }
            ,
            C.object = function(e, t) {
                if (null == e)
                    return {};
                for (var i = {}, n = 0, s = e.length; n < s; n++)
                    t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
                return i
            }
            ,
            C.indexOf = function(e, t, i) {
                if (null == e)
                    return -1;
                var n = 0
                    , s = e.length;
                if (i) {
                    if ("number" != typeof i)
                        return e[n = C.sortedIndex(e, t)] === t ? n : -1;
                    n = i < 0 ? Math.max(0, s + i) : i
                }
                if (y && e.indexOf === y)
                    return e.indexOf(t, i);
                for (; n < s; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            ,
            C.lastIndexOf = function(e, t, i) {
                if (null == e)
                    return -1;
                var n = null != i;
                if (b && e.lastIndexOf === b)
                    return n ? e.lastIndexOf(t, i) : e.lastIndexOf(t);
                for (var s = n ? i : e.length; s--; )
                    if (e[s] === t)
                        return s;
                return -1
            }
            ,
            C.range = function(e, t, i) {
                arguments.length <= 1 && (t = e || 0,
                    e = 0),
                    i = i || 1;
                for (var n = Math.max(Math.ceil((t - e) / i), 0), s = 0, a = new Array(n); s < n; )
                    a[s++] = e,
                        e += i;
                return a
            }
            ,
            C.bind = function(e, t) {
                if (e.bind === T && T)
                    return T.apply(e, o.call(arguments, 1));
                var i = o.call(arguments, 2);
                return function() {
                    return e.apply(t, i.concat(o.call(arguments)))
                }
            }
            ,
            C.partial = function(e) {
                var t = o.call(arguments, 1);
                return function() {
                    return e.apply(this, t.concat(o.call(arguments)))
                }
            }
            ,
            C.bindAll = function(t) {
                var e = o.call(arguments, 1);
                return 0 === e.length && (e = C.functions(t)),
                    S(e, function(e) {
                        t[e] = C.bind(t[e], t)
                    }),
                    t
            }
            ,
            C.memoize = function(t, i) {
                var n = {};
                return i || (i = C.identity),
                    function() {
                        var e = i.apply(this, arguments);
                        return C.has(n, e) ? n[e] : n[e] = t.apply(this, arguments)
                    }
            }
            ,
            C.delay = function(e, t) {
                var i = o.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, i)
                }, t)
            }
            ,
            C.defer = function(e) {
                return C.delay.apply(C, [e, 1].concat(o.call(arguments, 1)))
            }
            ,
            C.throttle = function(i, n) {
                var s, a, r, o, l = 0, u = function() {
                    l = new Date,
                        r = null,
                        o = i.apply(s, a)
                };
                return function() {
                    var e = new Date
                        , t = n - (e - l);
                    return s = this,
                        a = arguments,
                        t <= 0 ? (clearTimeout(r),
                            r = null,
                            l = e,
                            o = i.apply(s, a)) : r || (r = setTimeout(u, t)),
                        o
                }
            }
            ,
            C.debounce = function(n, s, a) {
                var r, o;
                return function() {
                    var e = this
                        , t = arguments
                        , i = a && !r;
                    return clearTimeout(r),
                        r = setTimeout(function() {
                            r = null,
                            a || (o = n.apply(e, t))
                        }, s),
                    i && (o = n.apply(e, t)),
                        o
                }
            }
            ,
            C.once = function(e) {
                var t, i = !1;
                return function() {
                    return i || (i = !0,
                        t = e.apply(this, arguments),
                        e = null),
                        t
                }
            }
            ,
            C.wrap = function(t, i) {
                return function() {
                    var e = [t];
                    return a.apply(e, arguments),
                        i.apply(this, e)
                }
            }
            ,
            C.compose = function() {
                var i = arguments;
                return function() {
                    for (var e = arguments, t = i.length - 1; 0 <= t; t--)
                        e = [i[t].apply(this, e)];
                    return e[0]
                }
            }
            ,
            C.after = function(e, t) {
                return e <= 0 ? t() : function() {
                    if (--e < 1)
                        return t.apply(this, arguments)
                }
            }
            ,
            C.keys = x || function(e) {
                if (e !== Object(e))
                    throw new TypeError("Invalid object");
                var t = [];
                for (var i in e)
                    C.has(e, i) && (t[t.length] = i);
                return t
            }
            ,
            C.values = function(e) {
                var t = [];
                for (var i in e)
                    C.has(e, i) && t.push(e[i]);
                return t
            }
            ,
            C.pairs = function(e) {
                var t = [];
                for (var i in e)
                    C.has(e, i) && t.push([i, e[i]]);
                return t
            }
            ,
            C.invert = function(e) {
                var t = {};
                for (var i in e)
                    C.has(e, i) && (t[e[i]] = i);
                return t
            }
            ,
            C.functions = C.methods = function(e) {
                var t = [];
                for (var i in e)
                    C.isFunction(e[i]) && t.push(i);
                return t.sort()
            }
            ,
            C.extend = function(i) {
                return S(o.call(arguments, 1), function(e) {
                    if (e)
                        for (var t in e)
                            i[t] = e[t]
                }),
                    i
            }
            ,
            C.pick = function(t) {
                var i = {}
                    , e = l.apply(s, o.call(arguments, 1));
                return S(e, function(e) {
                    e in t && (i[e] = t[e])
                }),
                    i
            }
            ,
            C.omit = function(e) {
                var t = {}
                    , i = l.apply(s, o.call(arguments, 1));
                for (var n in e)
                    C.contains(i, n) || (t[n] = e[n]);
                return t
            }
            ,
            C.defaults = function(i) {
                return S(o.call(arguments, 1), function(e) {
                    if (e)
                        for (var t in e)
                            null == i[t] && (i[t] = e[t])
                }),
                    i
            }
            ,
            C.clone = function(e) {
                return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e
            }
            ,
            C.tap = function(e, t) {
                return t(e),
                    e
            }
        ;
        var N = function(e, t, i, n) {
            if (e === t)
                return 0 !== e || 1 / e == 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof C && (e = e._wrapped),
            t instanceof C && (t = t._wrapped);
            var s = h.call(e);
            if (s != h.call(t))
                return !1;
            switch (s) {
                case "[object String]":
                    return e == String(t);
                case "[object Number]":
                    return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e == +t;
                case "[object RegExp]":
                    return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
            }
            if ("object" != typeof e || "object" != typeof t)
                return !1;
            for (var a = i.length; a--; )
                if (i[a] == e)
                    return n[a] == t;
            i.push(e),
                n.push(t);
            var r = 0
                , o = !0;
            if ("[object Array]" == s) {
                if (o = (r = e.length) == t.length)
                    for (; r-- && (o = N(e[r], t[r], i, n)); )
                        ;
            } else {
                var l = e.constructor
                    , u = t.constructor;
                if (l !== u && !(C.isFunction(l) && l instanceof l && C.isFunction(u) && u instanceof u))
                    return !1;
                for (var c in e)
                    if (C.has(e, c) && (r++,
                            !(o = C.has(t, c) && N(e[c], t[c], i, n))))
                        break;
                if (o) {
                    for (c in t)
                        if (C.has(t, c) && !r--)
                            break;
                    o = !r
                }
            }
            return i.pop(),
                n.pop(),
                o
        };
        C.isEqual = function(e, t) {
            return N(e, t, [], [])
        }
            ,
            C.isEmpty = function(e) {
                if (null == e)
                    return !0;
                if (C.isArray(e) || C.isString(e))
                    return 0 === e.length;
                for (var t in e)
                    if (C.has(e, t))
                        return !1;
                return !0
            }
            ,
            C.isElement = function(e) {
                return !(!e || 1 !== e.nodeType)
            }
            ,
            C.isArray = w || function(e) {
                return "[object Array]" == h.call(e)
            }
            ,
            C.isObject = function(e) {
                return e === Object(e)
            }
            ,
            S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
                C["is" + t] = function(e) {
                    return h.call(e) == "[object " + t + "]"
                }
            }),
        C.isArguments(arguments) || (C.isArguments = function(e) {
                return !(!e || !C.has(e, "callee"))
            }
        ),
        "function" != typeof /./ && (C.isFunction = function(e) {
                return "function" == typeof e
            }
        ),
            C.isFinite = function(e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }
            ,
            C.isNaN = function(e) {
                return C.isNumber(e) && e != +e
            }
            ,
            C.isBoolean = function(e) {
                return !0 === e || !1 === e || "[object Boolean]" == h.call(e)
            }
            ,
            C.isNull = function(e) {
                return null === e
            }
            ,
            C.isUndefined = function(e) {
                return void 0 === e
            }
            ,
            C.has = function(e, t) {
                return u.call(e, t)
            }
            ,
            C.noConflict = function() {
                return e._ = t,
                    this
            }
            ,
            C.identity = function(e) {
                return e
            }
            ,
            C.times = function(e, t, i) {
                for (var n = Array(e), s = 0; s < e; s++)
                    n[s] = t.call(i, s);
                return n
            }
            ,
            C.random = function(e, t) {
                return null == t && (t = e,
                    e = 0),
                e + Math.floor(Math.random() * (t - e + 1))
            }
        ;
        var M = {
            escape: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
        };
        M.unescape = C.invert(M.escape);
        var D = {
            escape: new RegExp("[" + C.keys(M.escape).join("") + "]","g"),
            unescape: new RegExp("(" + C.keys(M.unescape).join("|") + ")","g")
        };
        C.each(["escape", "unescape"], function(t) {
            C[t] = function(e) {
                return null == e ? "" : ("" + e).replace(D[t], function(e) {
                    return M[t][e]
                })
            }
        }),
            C.result = function(e, t) {
                if (null == e)
                    return null;
                var i = e[t];
                return C.isFunction(i) ? i.call(e) : i
            }
            ,
            C.mixin = function(i) {
                S(C.functions(i), function(e) {
                    var t = C[e] = i[e];
                    C.prototype[e] = function() {
                        var e = [this._wrapped];
                        return a.apply(e, arguments),
                            R.call(this, t.apply(C, e))
                    }
                })
            }
        ;
        var A = 0;
        C.uniqueId = function(e) {
            var t = ++A + "";
            return e ? e + t : t
        }
            ,
            C.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var I = /(.)^/
            , H = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        }
            , L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        C.template = function(a, e, t) {
            var i;
            t = C.defaults({}, t, C.templateSettings);
            var n = new RegExp([(t.escape || I).source, (t.interpolate || I).source, (t.evaluate || I).source].join("|") + "|$","g")
                , r = 0
                , o = "__p+='";
            a.replace(n, function(e, t, i, n, s) {
                return o += a.slice(r, s).replace(L, function(e) {
                    return "\\" + H[e]
                }),
                t && (o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'"),
                i && (o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
                n && (o += "';\n" + n + "\n__p+='"),
                    r = s + e.length,
                    e
            }),
                o += "';\n",
            t.variable || (o = "with(obj||{}){\n" + o + "}\n"),
                o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
            try {
                i = new Function(t.variable || "obj","_",o)
            } catch (e) {
                throw e.source = o,
                    e
            }
            if (e)
                return i(e, C);
            var s = function(e) {
                return i.call(this, e, C)
            };
            return s.source = "function(" + (t.variable || "obj") + "){\n" + o + "}",
                s
        }
            ,
            C.chain = function(e) {
                return C(e).chain()
            }
        ;
        var R = function(e) {
            return this._chain ? C(e).chain() : e
        };
        C.mixin(C),
            S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
                var i = s[t];
                C.prototype[t] = function() {
                    var e = this._wrapped;
                    return i.apply(e, arguments),
                    "shift" != t && "splice" != t || 0 !== e.length || delete e[0],
                        R.call(this, e)
                }
            }),
            S(["concat", "join", "slice"], function(e) {
                var t = s[e];
                C.prototype[e] = function() {
                    return R.call(this, t.apply(this._wrapped, arguments))
                }
            }),
            C.extend(C.prototype, {
                chain: function() {
                    return this._chain = !0,
                        this
                },
                value: function() {
                    return this._wrapped
                }
            })
    }
        .call(this),
    define("underscore", function(e) {
        return function() {
            return e._
        }
    }(this)),
    function() {
        var o, e = this, t = e.Backbone, i = [], d = i.push, s = i.slice, f = i.splice;
        (o = "undefined" != typeof exports ? exports : e.Backbone = {}).VERSION = "1.0.0";
        var m = e._;
        m || "undefined" == typeof require || (m = require("underscore")),
            o.$ = e.jQuery || e.Zepto || e.ender || e.$,
            o.noConflict = function() {
                return e.Backbone = t,
                    this
            }
            ,
            o.emulateHTTP = !1,
            o.emulateJSON = !1;
        var n = o.Events = {
            on: function(e, t, i) {
                return h(this, "on", e, [t, i]) && t && (this._events || (this._events = {}),
                    (this._events[e] || (this._events[e] = [])).push({
                        callback: t,
                        context: i,
                        ctx: i || this
                    })),
                    this
            },
            once: function(e, t, i) {
                if (!h(this, "once", e, [t, i]) || !t)
                    return this;
                var n = this
                    , s = m.once(function() {
                    n.off(e, s),
                        t.apply(this, arguments)
                });
                return s._callback = t,
                    this.on(e, s, i)
            },
            off: function(e, t, i) {
                var n, s, a, r, o, l, u, c;
                if (!this._events || !h(this, "off", e, [t, i]))
                    return this;
                if (!e && !t && !i)
                    return this._events = {},
                        this;
                for (o = 0,
                         l = (r = e ? [e] : m.keys(this._events)).length; o < l; o++)
                    if (e = r[o],
                            a = this._events[e]) {
                        if (this._events[e] = n = [],
                            t || i)
                            for (u = 0,
                                     c = a.length; u < c; u++)
                                s = a[u],
                                (t && t !== s.callback && t !== s.callback._callback || i && i !== s.context) && n.push(s);
                        n.length || delete this._events[e]
                    }
                return this
            },
            trigger: function(e) {
                if (!this._events)
                    return this;
                var t = s.call(arguments, 1);
                if (!h(this, "trigger", e, t))
                    return this;
                var i = this._events[e]
                    , n = this._events.all;
                return i && a(i, t),
                n && a(n, arguments),
                    this
            },
            stopListening: function(e, t, i) {
                var n = this._listeners;
                if (!n)
                    return this;
                var s = !t && !i;
                for (var a in "object" == typeof t && (i = this),
                e && ((n = {})[e._listenerId] = e),
                    n)
                    n[a].off(t, i, this),
                    s && delete this._listeners[a];
                return this
            }
        }
            , l = /\s+/
            , h = function(e, t, i, n) {
            if (!i)
                return !0;
            if ("object" == typeof i) {
                for (var s in i)
                    e[t].apply(e, [s, i[s]].concat(n));
                return !1
            }
            if (l.test(i)) {
                for (var a = i.split(l), r = 0, o = a.length; r < o; r++)
                    e[t].apply(e, [a[r]].concat(n));
                return !1
            }
            return !0
        }
            , a = function(e, t) {
            var i, n = -1, s = e.length, a = t[0], r = t[1], o = t[2];
            switch (t.length) {
                case 0:
                    for (; ++n < s; )
                        (i = e[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < s; )
                        (i = e[n]).callback.call(i.ctx, a);
                    return;
                case 2:
                    for (; ++n < s; )
                        (i = e[n]).callback.call(i.ctx, a, r);
                    return;
                case 3:
                    for (; ++n < s; )
                        (i = e[n]).callback.call(i.ctx, a, r, o);
                    return;
                default:
                    for (; ++n < s; )
                        (i = e[n]).callback.apply(i.ctx, t)
            }
        };
        m.each({
            listenTo: "on",
            listenToOnce: "once"
        }, function(s, e) {
            n[e] = function(e, t, i) {
                var n = this._listeners || (this._listeners = {});
                return "object" == typeof t && (i = this),
                    (n[e._listenerId || (e._listenerId = m.uniqueId("l"))] = e)[s](t, i, this),
                    this
            }
        }),
            n.bind = n.on,
            n.unbind = n.off,
            m.extend(o, n);
        var r = o.Model = function(e, t) {
            var i, n = e || {};
            t || (t = {}),
                this.cid = m.uniqueId("c"),
                this.attributes = {},
                m.extend(this, m.pick(t, u)),
            t.parse && (n = this.parse(n, t) || {}),
            (i = m.result(this, "defaults")) && (n = m.defaults({}, n, i)),
                this.set(n, t),
                this.changed = {},
                this.initialize.apply(this, arguments)
        }
            , u = ["url", "urlRoot", "collection"];
        m.extend(r.prototype, n, {
            changed: null,
            validationError: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return m.clone(this.attributes)
            },
            sync: function() {
                return o.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                return m.escape(this.get(e))
            },
            has: function(e) {
                return null != this.get(e)
            },
            set: function(e, t, i) {
                var n, s, a, r, o, l, u, c;
                if (null == e)
                    return this;
                if ("object" == typeof e ? (s = e,
                        i = t) : (s = {})[e] = t,
                    i || (i = {}),
                        !this._validate(s, i))
                    return !1;
                for (n in a = i.unset,
                    o = i.silent,
                    r = [],
                    l = this._changing,
                    this._changing = !0,
                l || (this._previousAttributes = m.clone(this.attributes),
                    this.changed = {}),
                    c = this.attributes,
                    u = this._previousAttributes,
                this.idAttribute in s && (this.id = s[this.idAttribute]),
                    s)
                    t = s[n],
                    m.isEqual(c[n], t) || r.push(n),
                        m.isEqual(u[n], t) ? delete this.changed[n] : this.changed[n] = t,
                        a ? delete c[n] : c[n] = t;
                if (!o) {
                    r.length && (this._pending = !0);
                    for (var h = 0, p = r.length; h < p; h++)
                        this.trigger("change:" + r[h], this, c[r[h]], i)
                }
                if (l)
                    return this;
                if (!o)
                    for (; this._pending; )
                        this._pending = !1,
                            this.trigger("change", this, i);
                return this._pending = !1,
                    this._changing = !1,
                    this
            },
            unset: function(e, t) {
                return this.set(e, void 0, m.extend({}, t, {
                    unset: !0
                }))
            },
            clear: function(e) {
                var t = {};
                for (var i in this.attributes)
                    t[i] = void 0;
                return this.set(t, m.extend({}, e, {
                    unset: !0
                }))
            },
            hasChanged: function(e) {
                return null == e ? !m.isEmpty(this.changed) : m.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e)
                    return !!this.hasChanged() && m.clone(this.changed);
                var t, i = !1, n = this._changing ? this._previousAttributes : this.attributes;
                for (var s in e)
                    m.isEqual(n[s], t = e[s]) || ((i || (i = {}))[s] = t);
                return i
            },
            previous: function(e) {
                return null != e && this._previousAttributes ? this._previousAttributes[e] : null
            },
            previousAttributes: function() {
                return m.clone(this._previousAttributes)
            },
            fetch: function(t) {
                void 0 === (t = t ? m.clone(t) : {}).parse && (t.parse = !0);
                var i = this
                    , n = t.success;
                return t.success = function(e) {
                    if (!i.set(i.parse(e, t), t))
                        return !1;
                    n && n(i, e, t),
                        i.trigger("sync", i, e, t)
                }
                    ,
                    D(this, t),
                    this.sync("read", this, t)
            },
            save: function(e, t, i) {
                var n, s, a, r = this.attributes;
                if (null == e || "object" == typeof e ? (n = e,
                        i = t) : (n = {})[e] = t,
                    n && (!i || !i.wait) && !this.set(n, i))
                    return !1;
                if (i = m.extend({
                        validate: !0
                    }, i),
                        !this._validate(n, i))
                    return !1;
                n && i.wait && (this.attributes = m.extend({}, r, n)),
                void 0 === i.parse && (i.parse = !0);
                var o = this
                    , l = i.success;
                return i.success = function(e) {
                    o.attributes = r;
                    var t = o.parse(e, i);
                    if (i.wait && (t = m.extend(n || {}, t)),
                        m.isObject(t) && !o.set(t, i))
                        return !1;
                    l && l(o, e, i),
                        o.trigger("sync", o, e, i)
                }
                    ,
                    D(this, i),
                "patch" === (s = this.isNew() ? "create" : i.patch ? "patch" : "update") && (i.attrs = n),
                    a = this.sync(s, this, i),
                n && i.wait && (this.attributes = r),
                    a
            },
            destroy: function(t) {
                t = t ? m.clone(t) : {};
                var i = this
                    , n = t.success
                    , s = function() {
                    i.trigger("destroy", i, i.collection, t)
                };
                if (t.success = function(e) {
                        (t.wait || i.isNew()) && s(),
                        n && n(i, e, t),
                        i.isNew() || i.trigger("sync", i, e, t)
                    }
                        ,
                        this.isNew())
                    return t.success(),
                        !1;
                D(this, t);
                var e = this.sync("delete", this, t);
                return t.wait || s(),
                    e
            },
            url: function() {
                var e = m.result(this, "urlRoot") || m.result(this.collection, "url") || M();
                return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return null == this.id
            },
            isValid: function(e) {
                return this._validate({}, m.extend(e || {}, {
                    validate: !0
                }))
            },
            _validate: function(e, t) {
                if (!t.validate || !this.validate)
                    return !0;
                e = m.extend({}, this.attributes, e);
                var i = this.validationError = this.validate(e, t) || null;
                return !i || (this.trigger("invalid", this, i, m.extend(t || {}, {
                    validationError: i
                })),
                    !1)
            }
        });
        m.each(["keys", "values", "pairs", "invert", "pick", "omit"], function(t) {
            r.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.attributes),
                    m[t].apply(m, e)
            }
        });
        var c = o.Collection = function(e, t) {
            t || (t = {}),
            t.url && (this.url = t.url),
            t.model && (this.model = t.model),
            void 0 !== t.comparator && (this.comparator = t.comparator),
                this._reset(),
                this.initialize.apply(this, arguments),
            e && this.reset(e, m.extend({
                silent: !0
            }, t))
        }
            , g = {
            add: !0,
            remove: !0,
            merge: !0
        }
            , p = {
            add: !0,
            merge: !1,
            remove: !1
        };
        m.extend(c.prototype, n, {
            model: r,
            initialize: function() {},
            toJSON: function(t) {
                return this.map(function(e) {
                    return e.toJSON(t)
                })
            },
            sync: function() {
                return o.sync.apply(this, arguments)
            },
            add: function(e, t) {
                return this.set(e, m.defaults(t || {}, p))
            },
            remove: function(e, t) {
                var i, n, s, a;
                for (t || (t = {}),
                         i = 0,
                         n = (e = m.isArray(e) ? e.slice() : [e]).length; i < n; i++)
                    (a = this.get(e[i])) && (delete this._byId[a.id],
                        delete this._byId[a.cid],
                        s = this.indexOf(a),
                        this.models.splice(s, 1),
                        this.length--,
                    t.silent || (t.index = s,
                        a.trigger("remove", a, this, t)),
                        this._removeReference(a));
                return this
            },
            set: function(e, t) {
                var i, n, s, a, r;
                (t = m.defaults(t || {}, g)).parse && (e = this.parse(e, t)),
                m.isArray(e) || (e = e ? [e] : []);
                var o = t.at
                    , l = this.comparator && null == o && !1 !== t.sort
                    , u = m.isString(this.comparator) ? this.comparator : null
                    , c = []
                    , h = []
                    , p = {};
                for (i = 0,
                         n = e.length; i < n; i++)
                    (s = this._prepareModel(e[i], t)) && ((a = this.get(s)) ? (t.remove && (p[a.cid] = !0),
                    t.merge && (a.set(s.attributes, t),
                    l && !r && a.hasChanged(u) && (r = !0))) : t.add && (c.push(s),
                        s.on("all", this._onModelEvent, this),
                    null != (this._byId[s.cid] = s).id && (this._byId[s.id] = s)));
                if (t.remove) {
                    for (i = 0,
                             n = this.length; i < n; ++i)
                        p[(s = this.models[i]).cid] || h.push(s);
                    h.length && this.remove(h, t)
                }
                if (c.length && (l && (r = !0),
                        this.length += c.length,
                        null != o ? f.apply(this.models, [o, 0].concat(c)) : d.apply(this.models, c)),
                    r && this.sort({
                        silent: !0
                    }),
                        t.silent)
                    return this;
                for (i = 0,
                         n = c.length; i < n; i++)
                    (s = c[i]).trigger("add", s, this, t);
                return r && this.trigger("sort", this, t),
                    this
            },
            reset: function(e, t) {
                t || (t = {});
                for (var i = 0, n = this.models.length; i < n; i++)
                    this._removeReference(this.models[i]);
                return t.previousModels = this.models,
                    this._reset(),
                    this.add(e, m.extend({
                        silent: !0
                    }, t)),
                t.silent || this.trigger("reset", this, t),
                    this
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t),
                    this.add(e, m.extend({
                        at: this.length
                    }, t)),
                    e
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e),
                    t
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t),
                    this.add(e, m.extend({
                        at: 0
                    }, t)),
                    e
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e),
                    t
            },
            slice: function(e, t) {
                return this.models.slice(e, t)
            },
            get: function(e) {
                if (null != e)
                    return this._byId[null != e.id ? e.id : e.cid || e]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(i, e) {
                return m.isEmpty(i) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                    for (var t in i)
                        if (i[t] !== e.get(t))
                            return !1;
                    return !0
                })
            },
            findWhere: function(e) {
                return this.where(e, !0)
            },
            sort: function(e) {
                if (!this.comparator)
                    throw new Error("Cannot sort a set without a comparator");
                return e || (e = {}),
                    m.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(m.bind(this.comparator, this)),
                e.silent || this.trigger("sort", this, e),
                    this
            },
            sortedIndex: function(e, t, i) {
                t || (t = this.comparator);
                var n = m.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    }
                ;
                return m.sortedIndex(this.models, e, n, i)
            },
            pluck: function(e) {
                return m.invoke(this.models, "get", e)
            },
            fetch: function(i) {
                void 0 === (i = i ? m.clone(i) : {}).parse && (i.parse = !0);
                var n = i.success
                    , s = this;
                return i.success = function(e) {
                    var t = i.reset ? "reset" : "set";
                    s[t](e, i),
                    n && n(s, e, i),
                        s.trigger("sync", s, e, i)
                }
                    ,
                    D(this, i),
                    this.sync("read", this, i)
            },
            create: function(t, i) {
                if (i = i ? m.clone(i) : {},
                        !(t = this._prepareModel(t, i)))
                    return !1;
                i.wait || this.add(t, i);
                var n = this
                    , s = i.success;
                return i.success = function(e) {
                    i.wait && n.add(t, i),
                    s && s(t, e, i)
                }
                    ,
                    t.save(null, i),
                    t
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            _reset: function() {
                this.length = 0,
                    this.models = [],
                    this._byId = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof r)
                    return e.collection || (e.collection = this),
                        e;
                t || (t = {});
                var i = new (t.collection = this).model(e,t);
                return i._validate(e, t) ? i : (this.trigger("invalid", this, e, t),
                    !1)
            },
            _removeReference: function(e) {
                this === e.collection && delete e.collection,
                    e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, i, n) {
                ("add" !== e && "remove" !== e || i === this) && ("destroy" === e && this.remove(t, n),
                t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)],
                null != t.id && (this._byId[t.id] = t)),
                    this.trigger.apply(this, arguments))
            }
        });
        m.each(["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"], function(t) {
            c.prototype[t] = function() {
                var e = s.call(arguments);
                return e.unshift(this.models),
                    m[t].apply(m, e)
            }
        });
        m.each(["groupBy", "countBy", "sortBy"], function(n) {
            c.prototype[n] = function(t, e) {
                var i = m.isFunction(t) ? t : function(e) {
                        return e.get(t)
                    }
                ;
                return m[n](this.models, i, e)
            }
        });
        var v = o.View = function(e) {
            this.cid = m.uniqueId("view"),
                this._configure(e || {}),
                this._ensureElement(),
                this.initialize.apply(this, arguments),
                this.delegateEvents()
        }
            , y = /^(\S+)\s*(.*)$/
            , b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
        m.extend(v.prototype, n, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(),
                    this.stopListening(),
                    this
            },
            setElement: function(e, t) {
                return this.$el && this.undelegateEvents(),
                    this.$el = e instanceof o.$ ? e : o.$(e),
                    this.el = this.$el[0],
                !1 !== t && this.delegateEvents(),
                    this
            },
            delegateEvents: function(e) {
                if (!e && !(e = m.result(this, "events")))
                    return this;
                for (var t in this.undelegateEvents(),
                    e) {
                    var i = e[t];
                    if (m.isFunction(i) || (i = this[e[t]]),
                            i) {
                        var n = t.match(y)
                            , s = n[1]
                            , a = n[2];
                        i = m.bind(i, this),
                            s += ".delegateEvents" + this.cid,
                            "" === a ? this.$el.on(s, i) : this.$el.on(s, a, i)
                    }
                }
                return this
            },
            undelegateEvents: function() {
                return this.$el.off(".delegateEvents" + this.cid),
                    this
            },
            _configure: function(e) {
                this.options && (e = m.extend({}, m.result(this, "options"), e)),
                    m.extend(this, m.pick(e, b)),
                    this.options = e
            },
            _ensureElement: function() {
                if (this.el)
                    this.setElement(m.result(this, "el"), !1);
                else {
                    var e = m.extend({}, m.result(this, "attributes"));
                    this.id && (e.id = m.result(this, "id")),
                    this.className && (e.class = m.result(this, "className"));
                    var t = o.$("<" + m.result(this, "tagName") + ">").attr(e);
                    this.setElement(t, !1)
                }
            }
        }),
            o.sync = function(e, t, i) {
                var n = w[e];
                m.defaults(i || (i = {}), {
                    emulateHTTP: o.emulateHTTP,
                    emulateJSON: o.emulateJSON
                });
                var s = {
                    type: n,
                    dataType: "json"
                };
                if (i.url || (s.url = m.result(t, "url") || M()),
                    null != i.data || !t || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json",
                        s.data = JSON.stringify(i.attrs || t.toJSON(i))),
                    i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded",
                        s.data = s.data ? {
                            model: s.data
                        } : {}),
                    i.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n)) {
                    s.type = "POST",
                    i.emulateJSON && (s.data._method = n);
                    var a = i.beforeSend;
                    i.beforeSend = function(e) {
                        if (e.setRequestHeader("X-HTTP-Method-Override", n),
                                a)
                            return a.apply(this, arguments)
                    }
                }
                "GET" === s.type || i.emulateJSON || (s.processData = !1),
                "PATCH" !== s.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (s.xhr = function() {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    }
                );
                var r = i.xhr = o.ajax(m.extend(s, i));
                return t.trigger("request", t, r, i),
                    r
            }
        ;
        var w = {
            create: "POST",
            update: "PUT",
            patch: "PATCH",
            delete: "DELETE",
            read: "GET"
        };
        o.ajax = function() {
            return o.$.ajax.apply(o.$, arguments)
        }
        ;
        var x = o.Router = function(e) {
            e || (e = {}),
            e.routes && (this.routes = e.routes),
                this._bindRoutes(),
                this.initialize.apply(this, arguments)
        }
            , T = /\((.*?)\)/g
            , C = /(\(\?)?:\w+/g
            , S = /\*\w+/g
            , E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
        m.extend(x.prototype, n, {
            initialize: function() {},
            route: function(i, n, s) {
                m.isRegExp(i) || (i = this._routeToRegExp(i)),
                m.isFunction(n) && (s = n,
                    n = ""),
                s || (s = this[n]);
                var a = this;
                return o.history.route(i, function(e) {
                    var t = a._extractParameters(i, e);
                    s && s.apply(a, t),
                        a.trigger.apply(a, ["route:" + n].concat(t)),
                        a.trigger("route", n, t),
                        o.history.trigger("route", a, n, t)
                }),
                    this
            },
            navigate: function(e, t) {
                return o.history.navigate(e, t),
                    this
            },
            _bindRoutes: function() {
                if (this.routes) {
                    this.routes = m.result(this, "routes");
                    for (var e, t = m.keys(this.routes); null != (e = t.pop()); )
                        this.route(e, this.routes[e])
                }
            },
            _routeToRegExp: function(e) {
                return e = e.replace(E, "\\$&").replace(T, "(?:$1)?").replace(C, function(e, t) {
                    return t ? e : "([^/]+)"
                }).replace(S, "(.*?)"),
                    new RegExp("^" + e + "$")
            },
            _extractParameters: function(e, t) {
                var i = e.exec(t).slice(1);
                return m.map(i, function(e) {
                    return e ? decodeURIComponent(e) : null
                })
            }
        });
        var _ = o.History = function() {
            this.handlers = [],
                m.bindAll(this, "checkUrl"),
            "undefined" != typeof window && (this.location = window.location,
                this.history = window.history)
        }
            , k = /^[#\/]|\s+$/g
            , z = /^\/+|\/+$/g
            , P = /msie [\w.]+/
            , N = /\/$/;
        _.started = !1,
            m.extend(_.prototype, n, {
                interval: 50,
                getHash: function(e) {
                    var t = (e || this).location.href.match(/#(.*)$/);
                    return t ? t[1] : ""
                },
                getFragment: function(e, t) {
                    if (null == e)
                        if (this._hasPushState || !this._wantsHashChange || t) {
                            e = this.location.pathname;
                            var i = this.root.replace(N, "");
                            e.indexOf(i) || (e = e.substr(i.length))
                        } else
                            e = this.getHash();
                    return e.replace(k, "")
                },
                start: function(e) {
                    if (_.started)
                        throw new Error("Backbone.history has already been started");
                    _.started = !0,
                        this.options = m.extend({}, {
                            root: "/"
                        }, this.options, e),
                        this.root = this.options.root,
                        this._wantsHashChange = !1 !== this.options.hashChange,
                        this._wantsPushState = !!this.options.pushState,
                        this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var t = this.getFragment()
                        , i = document.documentMode
                        , n = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
                    this.root = ("/" + this.root + "/").replace(z, "/"),
                    n && this._wantsHashChange && (this.iframe = o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,
                        this.navigate(t)),
                        this._hasPushState ? o.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !n ? o.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                        this.fragment = t;
                    var s = this.location
                        , a = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a ? (this.fragment = this.getFragment(null, !0),
                        this.location.replace(this.root + this.location.search + "#" + this.fragment),
                        !0) : (this._wantsPushState && this._hasPushState && a && s.hash && (this.fragment = this.getHash().replace(k, ""),
                        this.history.replaceState({}, document.title, this.root + this.fragment + s.search)),
                        this.options.silent ? void 0 : this.loadUrl())
                },
                stop: function() {
                    o.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
                        clearInterval(this._checkUrlInterval),
                        _.started = !1
                },
                route: function(e, t) {
                    this.handlers.unshift({
                        route: e,
                        callback: t
                    })
                },
                checkUrl: function(e) {
                    var t = this.getFragment();
                    if (t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
                        t === this.fragment)
                        return !1;
                    this.iframe && this.navigate(t),
                    this.loadUrl() || this.loadUrl(this.getHash())
                },
                loadUrl: function(e) {
                    var t = this.fragment = this.getFragment(e);
                    return m.any(this.handlers, function(e) {
                        if (e.route.test(t))
                            return e.callback(t),
                                !0
                    })
                },
                navigate: function(e, t) {
                    if (!_.started)
                        return !1;
                    if (t && !0 !== t || (t = {
                            trigger: t
                        }),
                            e = this.getFragment(e || ""),
                        this.fragment !== e) {
                        this.fragment = e;
                        var i = this.root + e;
                        if (this._hasPushState)
                            this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                        else {
                            if (!this._wantsHashChange)
                                return this.location.assign(i);
                            this._updateHash(this.location, e, t.replace),
                            this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(),
                                this._updateHash(this.iframe.location, e, t.replace))
                        }
                        t.trigger && this.loadUrl(e)
                    }
                },
                _updateHash: function(e, t, i) {
                    if (i) {
                        var n = e.href.replace(/(javascript:|#).*$/, "");
                        e.replace(n + "#" + t)
                    } else
                        e.hash = "#" + t
                }
            }),
            o.history = new _;
        r.extend = c.extend = x.extend = v.extend = _.extend = function(e, t) {
            var i, n = this;
            i = e && m.has(e, "constructor") ? e.constructor : function() {
                return n.apply(this, arguments)
            }
                ,
                m.extend(i, n, t);
            var s = function() {
                this.constructor = i
            };
            return s.prototype = n.prototype,
                i.prototype = new s,
            e && m.extend(i.prototype, e),
                i.__super__ = n.prototype,
                i
        }
        ;
        var M = function() {
            throw new Error('A "url" property or function must be specified')
        }
            , D = function(t, i) {
            var n = i.error;
            i.error = function(e) {
                n && n(t, e, i),
                    t.trigger("error", t, e, i)
            }
        }
    }
        .call(this),
    define("backbone", ["jquery", "underscore"], function(e) {
        return function() {
            return e.Backbone
        }
    }(this)),
    function() {
        "use strict";
        function e(e) {
            e.fn.swiper = function(t) {
                var i;
                return e(this).each(function() {
                    var e = new R(this,t);
                    i || (i = e)
                }),
                    i
            }
        }
        var L, t, i, n, s, a, r, o, l, u, R = function(e, l) {
            function m(e) {
                return Math.floor(e)
            }
            function t() {
                var e = w.params.autoplay
                    , t = w.slides.eq(w.activeIndex);
                t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || w.params.autoplay),
                    w.autoplayTimeoutId = setTimeout(function() {
                        w.params.loop ? (w.fixLoop(),
                            w._slideNext(),
                            w.emit("onAutoplay", w)) : w.isEnd ? l.autoplayStopOnLast ? w.stopAutoplay() : (w._slideTo(0),
                            w.emit("onAutoplay", w)) : (w._slideNext(),
                            w.emit("onAutoplay", w))
                    }, e)
            }
            function o(e, i) {
                var t = L(e.target);
                if (!t.is(i))
                    if ("string" == typeof i)
                        t = t.parents(i);
                    else if (i.nodeType) {
                        var n;
                        return t.parents().each(function(e, t) {
                            t === i && (n = i)
                        }),
                            n ? i : void 0
                    }
                if (0 !== t.length)
                    return t[0]
            }
            function i(e, t) {
                t = t || {};
                var i = new (window.MutationObserver || window.WebkitMutationObserver)(function(e) {
                        e.forEach(function(e) {
                            w.onResize(!0),
                                w.emit("onObserverUpdate", w, e)
                        })
                    }
                );
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }),
                    w.observers.push(i)
            }
            function n(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!w.params.allowSwipeToNext && (w.isHorizontal() && 39 === t || !w.isHorizontal() && 40 === t))
                    return !1;
                if (!w.params.allowSwipeToPrev && (w.isHorizontal() && 37 === t || !w.isHorizontal() && 38 === t))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var i = !1;
                        if (0 < w.container.parents("." + w.params.slideClass).length && 0 === w.container.parents("." + w.params.slideActiveClass).length)
                            return;
                        var n = window.pageXOffset
                            , s = window.pageYOffset
                            , a = window.innerWidth
                            , r = window.innerHeight
                            , o = w.container.offset();
                        w.rtl && (o.left = o.left - w.container[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + w.width, o.top], [o.left, o.top + w.height], [o.left + w.width, o.top + w.height]], u = 0; u < l.length; u++) {
                            var c = l[u];
                            c[0] >= n && c[0] <= n + a && c[1] >= s && c[1] <= s + r && (i = !0)
                        }
                        if (!i)
                            return
                    }
                    w.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (39 === t && !w.rtl || 37 === t && w.rtl) && w.slideNext(),
                    (37 === t && !w.rtl || 39 === t && w.rtl) && w.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    40 === t && w.slideNext(),
                    38 === t && w.slidePrev())
                }
            }
            function s(e) {
                e.originalEvent && (e = e.originalEvent);
                var t, i, n, s, a, r = 0, o = w.rtl ? -1 : 1, l = (a = s = n = i = 0,
                "detail"in (t = e) && (n = t.detail),
                "wheelDelta"in t && (n = -t.wheelDelta / 120),
                "wheelDeltaY"in t && (n = -t.wheelDeltaY / 120),
                "wheelDeltaX"in t && (i = -t.wheelDeltaX / 120),
                "axis"in t && t.axis === t.HORIZONTAL_AXIS && (i = n,
                    n = 0),
                    s = 10 * i,
                    a = 10 * n,
                "deltaY"in t && (a = t.deltaY),
                "deltaX"in t && (s = t.deltaX),
                (s || a) && t.deltaMode && (1 === t.deltaMode ? (s *= 40,
                    a *= 40) : (s *= 800,
                    a *= 800)),
                s && !i && (i = s < 1 ? -1 : 1),
                a && !n && (n = a < 1 ? -1 : 1),
                    {
                        spinX: i,
                        spinY: n,
                        pixelX: s,
                        pixelY: a
                    });
                if (w.params.mousewheelForceToAxis)
                    if (w.isHorizontal()) {
                        if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY)))
                            return;
                        r = l.pixelX * o
                    } else {
                        if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX)))
                            return;
                        r = l.pixelY
                    }
                else
                    r = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * o : -l.pixelY;
                if (0 !== r) {
                    if (w.params.mousewheelInvert && (r = -r),
                            w.params.freeMode) {
                        var u = w.getWrapperTranslate() + r * w.params.mousewheelSensitivity
                            , c = w.isBeginning
                            , h = w.isEnd;
                        if (u >= w.minTranslate() && (u = w.minTranslate()),
                            u <= w.maxTranslate() && (u = w.maxTranslate()),
                                w.setWrapperTransition(0),
                                w.setWrapperTranslate(u),
                                w.updateProgress(),
                                w.updateActiveIndex(),
                            (!c && w.isBeginning || !h && w.isEnd) && w.updateClasses(),
                                w.params.freeModeSticky ? (clearTimeout(w.mousewheel.timeout),
                                    w.mousewheel.timeout = setTimeout(function() {
                                        w.slideReset()
                                    }, 300)) : w.params.lazyLoading && w.lazy && w.lazy.load(),
                                w.emit("onScroll", w, e),
                            w.params.autoplay && w.params.autoplayDisableOnInteraction && w.stopAutoplay(),
                            0 === u || u === w.maxTranslate())
                            return
                    } else {
                        if (60 < (new window.Date).getTime() - w.mousewheel.lastScrollTime)
                            if (r < 0)
                                if (w.isEnd && !w.params.loop || w.animating) {
                                    if (w.params.mousewheelReleaseOnEdges)
                                        return !0
                                } else
                                    w.slideNext(),
                                        w.emit("onScroll", w, e);
                            else if (w.isBeginning && !w.params.loop || w.animating) {
                                if (w.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                w.slidePrev(),
                                    w.emit("onScroll", w, e);
                        w.mousewheel.lastScrollTime = (new window.Date).getTime()
                    }
                    return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                        !1
                }
            }
            function a(e, t) {
                e = L(e);
                var i, n, s, a = w.rtl ? -1 : 1;
                i = e.attr("data-swiper-parallax") || "0",
                    n = e.attr("data-swiper-parallax-x"),
                    s = e.attr("data-swiper-parallax-y"),
                    n || s ? (n = n || "0",
                        s = s || "0") : w.isHorizontal() ? (n = i,
                        s = "0") : (s = i,
                        n = "0"),
                    n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * a + "%" : n * t * a + "px",
                    s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t + "%" : s * t + "px",
                    e.transform("translate3d(" + n + ", " + s + ",0px)")
            }
            function r(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                    e
            }
            if (!(this instanceof R))
                return new R(e,l);
            var u = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            }
                , c = l && l.virtualTranslate;
            l = l || {};
            var h = {};
            for (var p in l)
                if ("object" != typeof l[p] || null === l[p] || l[p].nodeType || l[p] === window || l[p] === document || "undefined" != typeof Dom7 && l[p]instanceof Dom7 || "undefined" != typeof jQuery && l[p]instanceof jQuery)
                    h[p] = l[p];
                else
                    for (var d in h[p] = {},
                        l[p])
                        h[p][d] = l[p][d];
            for (var f in u)
                if (void 0 === l[f])
                    l[f] = u[f];
                else if ("object" == typeof l[f])
                    for (var g in u[f])
                        void 0 === l[f][g] && (l[f][g] = u[f][g]);
            var w = this;
            if (w.params = l,
                    w.originalParams = h,
                    w.classNames = [],
                void 0 !== L && "undefined" != typeof Dom7 && (L = Dom7),
                (void 0 !== L || (L = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (w.$ = L,
                    w.currentBreakpoint = void 0,
                    w.getActiveBreakpoint = function() {
                        if (!w.params.breakpoints)
                            return !1;
                        var e, t = !1, i = [];
                        for (e in w.params.breakpoints)
                            w.params.breakpoints.hasOwnProperty(e) && i.push(e);
                        i.sort(function(e, t) {
                            return parseInt(e, 10) > parseInt(t, 10)
                        });
                        for (var n = 0; n < i.length; n++)
                            (e = i[n]) >= window.innerWidth && !t && (t = e);
                        return t || "max"
                    }
                    ,
                    w.setBreakpoint = function() {
                        var e = w.getActiveBreakpoint();
                        if (e && w.currentBreakpoint !== e) {
                            var t = e in w.params.breakpoints ? w.params.breakpoints[e] : w.originalParams
                                , i = w.params.loop && t.slidesPerView !== w.params.slidesPerView;
                            for (var n in t)
                                w.params[n] = t[n];
                            w.currentBreakpoint = e,
                            i && w.destroyLoop && w.reLoop(!0)
                        }
                    }
                    ,
                w.params.breakpoints && w.setBreakpoint(),
                    w.container = L(e),
                0 !== w.container.length)) {
                if (1 < w.container.length) {
                    var v = [];
                    return w.container.each(function() {
                        v.push(new R(this,l))
                    }),
                        v
                }
                (w.container[0].swiper = w).container.data("swiper", w),
                    w.classNames.push(w.params.containerModifierClass + w.params.direction),
                w.params.freeMode && w.classNames.push(w.params.containerModifierClass + "free-mode"),
                w.support.flexbox || (w.classNames.push(w.params.containerModifierClass + "no-flexbox"),
                    w.params.slidesPerColumn = 1),
                w.params.autoHeight && w.classNames.push(w.params.containerModifierClass + "autoheight"),
                (w.params.parallax || w.params.watchSlidesVisibility) && (w.params.watchSlidesProgress = !0),
                w.params.touchReleaseOnEdges && (w.params.resistanceRatio = 0),
                0 <= ["cube", "coverflow", "flip"].indexOf(w.params.effect) && (w.support.transforms3d ? (w.params.watchSlidesProgress = !0,
                    w.classNames.push(w.params.containerModifierClass + "3d")) : w.params.effect = "slide"),
                "slide" !== w.params.effect && w.classNames.push(w.params.containerModifierClass + w.params.effect),
                "cube" === w.params.effect && (w.params.resistanceRatio = 0,
                    w.params.slidesPerView = 1,
                    w.params.slidesPerColumn = 1,
                    w.params.slidesPerGroup = 1,
                    w.params.centeredSlides = !1,
                    w.params.spaceBetween = 0,
                    w.params.virtualTranslate = !0,
                    w.params.setWrapperSize = !1),
                "fade" !== w.params.effect && "flip" !== w.params.effect || (w.params.slidesPerView = 1,
                    w.params.slidesPerColumn = 1,
                    w.params.slidesPerGroup = 1,
                    w.params.watchSlidesProgress = !0,
                    w.params.spaceBetween = 0,
                    w.params.setWrapperSize = !1,
                void 0 === c && (w.params.virtualTranslate = !0)),
                w.params.grabCursor && w.support.touch && (w.params.grabCursor = !1),
                    w.wrapper = w.container.children("." + w.params.wrapperClass),
                w.params.pagination && (w.paginationContainer = L(w.params.pagination),
                w.params.uniqueNavElements && "string" == typeof w.params.pagination && 1 < w.paginationContainer.length && 1 === w.container.find(w.params.pagination).length && (w.paginationContainer = w.container.find(w.params.pagination)),
                    "bullets" === w.params.paginationType && w.params.paginationClickable ? w.paginationContainer.addClass(w.params.paginationModifierClass + "clickable") : w.params.paginationClickable = !1,
                    w.paginationContainer.addClass(w.params.paginationModifierClass + w.params.paginationType)),
                (w.params.nextButton || w.params.prevButton) && (w.params.nextButton && (w.nextButton = L(w.params.nextButton),
                w.params.uniqueNavElements && "string" == typeof w.params.nextButton && 1 < w.nextButton.length && 1 === w.container.find(w.params.nextButton).length && (w.nextButton = w.container.find(w.params.nextButton))),
                w.params.prevButton && (w.prevButton = L(w.params.prevButton),
                w.params.uniqueNavElements && "string" == typeof w.params.prevButton && 1 < w.prevButton.length && 1 === w.container.find(w.params.prevButton).length && (w.prevButton = w.container.find(w.params.prevButton)))),
                    w.isHorizontal = function() {
                        return "horizontal" === w.params.direction
                    }
                    ,
                    w.rtl = w.isHorizontal() && ("rtl" === w.container[0].dir.toLowerCase() || "rtl" === w.container.css("direction")),
                w.rtl && w.classNames.push(w.params.containerModifierClass + "rtl"),
                w.rtl && (w.wrongRTL = "-webkit-box" === w.wrapper.css("display")),
                1 < w.params.slidesPerColumn && w.classNames.push(w.params.containerModifierClass + "multirow"),
                w.device.android && w.classNames.push(w.params.containerModifierClass + "android"),
                    w.container.addClass(w.classNames.join(" ")),
                    w.translate = 0,
                    w.progress = 0,
                    w.velocity = 0,
                    w.lockSwipeToNext = function() {
                        (w.params.allowSwipeToNext = !1) === w.params.allowSwipeToPrev && w.params.grabCursor && w.unsetGrabCursor()
                    }
                    ,
                    w.lockSwipeToPrev = function() {
                        (w.params.allowSwipeToPrev = !1) === w.params.allowSwipeToNext && w.params.grabCursor && w.unsetGrabCursor()
                    }
                    ,
                    w.lockSwipes = function() {
                        w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !1,
                        w.params.grabCursor && w.unsetGrabCursor()
                    }
                    ,
                    w.unlockSwipeToNext = function() {
                        (w.params.allowSwipeToNext = !0) === w.params.allowSwipeToPrev && w.params.grabCursor && w.setGrabCursor()
                    }
                    ,
                    w.unlockSwipeToPrev = function() {
                        (w.params.allowSwipeToPrev = !0) === w.params.allowSwipeToNext && w.params.grabCursor && w.setGrabCursor()
                    }
                    ,
                    w.unlockSwipes = function() {
                        w.params.allowSwipeToNext = w.params.allowSwipeToPrev = !0,
                        w.params.grabCursor && w.setGrabCursor()
                    }
                    ,
                    w.setGrabCursor = function(e) {
                        w.container[0].style.cursor = "move",
                            w.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                            w.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                            w.container[0].style.cursor = e ? "grabbing" : "grab"
                    }
                    ,
                    w.unsetGrabCursor = function() {
                        w.container[0].style.cursor = ""
                    }
                    ,
                w.params.grabCursor && w.setGrabCursor(),
                    w.imagesToLoad = [],
                    w.imagesLoaded = 0,
                    w.loadImage = function(e, t, i, n, s, a) {
                        function r() {
                            a && a()
                        }
                        var o;
                        e.complete && s ? r() : t ? ((o = new window.Image).onload = r,
                            o.onerror = r,
                        n && (o.sizes = n),
                        i && (o.srcset = i),
                        t && (o.src = t)) : r()
                    }
                    ,
                    w.preloadImages = function() {
                        function e() {
                            null != w && w && (void 0 !== w.imagesLoaded && w.imagesLoaded++,
                            w.imagesLoaded === w.imagesToLoad.length && (w.params.updateOnImagesReady && w.update(),
                                w.emit("onImagesReady", w)))
                        }
                        w.imagesToLoad = w.container.find("img");
                        for (var t = 0; t < w.imagesToLoad.length; t++)
                            w.loadImage(w.imagesToLoad[t], w.imagesToLoad[t].currentSrc || w.imagesToLoad[t].getAttribute("src"), w.imagesToLoad[t].srcset || w.imagesToLoad[t].getAttribute("srcset"), w.imagesToLoad[t].sizes || w.imagesToLoad[t].getAttribute("sizes"), !0, e)
                    }
                    ,
                    w.autoplayTimeoutId = void 0,
                    w.autoplaying = !1,
                    w.autoplayPaused = !1,
                    w.startAutoplay = function() {
                        return void 0 === w.autoplayTimeoutId && !!w.params.autoplay && !w.autoplaying && (w.autoplaying = !0,
                            w.emit("onAutoplayStart", w),
                            void t())
                    }
                    ,
                    w.stopAutoplay = function(e) {
                        w.autoplayTimeoutId && (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                            w.autoplaying = !1,
                            w.autoplayTimeoutId = void 0,
                            w.emit("onAutoplayStop", w))
                    }
                    ,
                    w.pauseAutoplay = function(e) {
                        w.autoplayPaused || (w.autoplayTimeoutId && clearTimeout(w.autoplayTimeoutId),
                            w.autoplayPaused = !0,
                            0 === e ? (w.autoplayPaused = !1,
                                t()) : w.wrapper.transitionEnd(function() {
                                w && (w.autoplayPaused = !1,
                                    w.autoplaying ? t() : w.stopAutoplay())
                            }))
                    }
                    ,
                    w.minTranslate = function() {
                        return -w.snapGrid[0]
                    }
                    ,
                    w.maxTranslate = function() {
                        return -w.snapGrid[w.snapGrid.length - 1]
                    }
                    ,
                    w.updateAutoHeight = function() {
                        var e, t = [], i = 0;
                        if ("auto" !== w.params.slidesPerView && 1 < w.params.slidesPerView)
                            for (e = 0; e < Math.ceil(w.params.slidesPerView); e++) {
                                var n = w.activeIndex + e;
                                if (n > w.slides.length)
                                    break;
                                t.push(w.slides.eq(n)[0])
                            }
                        else
                            t.push(w.slides.eq(w.activeIndex)[0]);
                        for (e = 0; e < t.length; e++)
                            if (void 0 !== t[e]) {
                                var s = t[e].offsetHeight;
                                i = i < s ? s : i
                            }
                        i && w.wrapper.css("height", i + "px")
                    }
                    ,
                    w.updateContainerSize = function() {
                        var e, t;
                        e = void 0 !== w.params.width ? w.params.width : w.container[0].clientWidth,
                            t = void 0 !== w.params.height ? w.params.height : w.container[0].clientHeight,
                        0 === e && w.isHorizontal() || 0 === t && !w.isHorizontal() || (e = e - parseInt(w.container.css("padding-left"), 10) - parseInt(w.container.css("padding-right"), 10),
                            t = t - parseInt(w.container.css("padding-top"), 10) - parseInt(w.container.css("padding-bottom"), 10),
                            w.width = e,
                            w.height = t,
                            w.size = w.isHorizontal() ? w.width : w.height)
                    }
                    ,
                    w.updateSlidesSize = function() {
                        w.slides = w.wrapper.children("." + w.params.slideClass),
                            w.snapGrid = [],
                            w.slidesGrid = [],
                            w.slidesSizesGrid = [];
                        var e, t = w.params.spaceBetween, i = -w.params.slidesOffsetBefore, n = 0, s = 0;
                        if (void 0 !== w.size) {
                            var a;
                            "string" == typeof t && 0 <= t.indexOf("%") && (t = parseFloat(t.replace("%", "")) / 100 * w.size),
                                w.virtualSize = -t,
                                w.rtl ? w.slides.css({
                                    marginLeft: "",
                                    marginTop: ""
                                }) : w.slides.css({
                                    marginRight: "",
                                    marginBottom: ""
                                }),
                            1 < w.params.slidesPerColumn && (a = Math.floor(w.slides.length / w.params.slidesPerColumn) === w.slides.length / w.params.slidesPerColumn ? w.slides.length : Math.ceil(w.slides.length / w.params.slidesPerColumn) * w.params.slidesPerColumn,
                            "auto" !== w.params.slidesPerView && "row" === w.params.slidesPerColumnFill && (a = Math.max(a, w.params.slidesPerView * w.params.slidesPerColumn)));
                            var r, o, l = w.params.slidesPerColumn, u = a / l, c = u - (w.params.slidesPerColumn * u - w.slides.length);
                            for (e = 0; e < w.slides.length; e++) {
                                r = 0;
                                var h, p, d, f = w.slides.eq(e);
                                if (1 < w.params.slidesPerColumn)
                                    "column" === w.params.slidesPerColumnFill ? (d = e - (p = Math.floor(e / l)) * l,
                                    (c < p || p === c && d === l - 1) && ++d >= l && (d = 0,
                                        p++),
                                        h = p + d * a / l,
                                        f.css({
                                            "-webkit-box-ordinal-group": h,
                                            "-moz-box-ordinal-group": h,
                                            "-ms-flex-order": h,
                                            "-webkit-order": h,
                                            order: h
                                        })) : p = e - (d = Math.floor(e / u)) * u,
                                        f.css("margin-" + (w.isHorizontal() ? "top" : "left"), 0 !== d && w.params.spaceBetween && w.params.spaceBetween + "px").attr("data-swiper-column", p).attr("data-swiper-row", d);
                                "none" !== f.css("display") && ("auto" === w.params.slidesPerView ? (r = w.isHorizontal() ? f.outerWidth(!0) : f.outerHeight(!0),
                                w.params.roundLengths && (r = m(r))) : (r = (w.size - (w.params.slidesPerView - 1) * t) / w.params.slidesPerView,
                                w.params.roundLengths && (r = m(r)),
                                    w.isHorizontal() ? w.slides[e].style.width = r + "px" : w.slides[e].style.height = r + "px"),
                                    w.slides[e].swiperSlideSize = r,
                                    w.slidesSizesGrid.push(r),
                                    w.params.centeredSlides ? (i = i + r / 2 + n / 2 + t,
                                    0 === e && (i = i - w.size / 2 - t),
                                    Math.abs(i) < .001 && (i = 0),
                                    s % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                                        w.slidesGrid.push(i)) : (s % w.params.slidesPerGroup == 0 && w.snapGrid.push(i),
                                        w.slidesGrid.push(i),
                                        i = i + r + t),
                                    w.virtualSize += r + t,
                                    n = r,
                                    s++)
                            }
                            if (w.virtualSize = Math.max(w.virtualSize, w.size) + w.params.slidesOffsetAfter,
                                w.rtl && w.wrongRTL && ("slide" === w.params.effect || "coverflow" === w.params.effect) && w.wrapper.css({
                                    width: w.virtualSize + w.params.spaceBetween + "px"
                                }),
                                w.support.flexbox && !w.params.setWrapperSize || (w.isHorizontal() ? w.wrapper.css({
                                    width: w.virtualSize + w.params.spaceBetween + "px"
                                }) : w.wrapper.css({
                                    height: w.virtualSize + w.params.spaceBetween + "px"
                                })),
                                1 < w.params.slidesPerColumn && (w.virtualSize = (r + w.params.spaceBetween) * a,
                                    w.virtualSize = Math.ceil(w.virtualSize / w.params.slidesPerColumn) - w.params.spaceBetween,
                                    w.isHorizontal() ? w.wrapper.css({
                                        width: w.virtualSize + w.params.spaceBetween + "px"
                                    }) : w.wrapper.css({
                                        height: w.virtualSize + w.params.spaceBetween + "px"
                                    }),
                                    w.params.centeredSlides)) {
                                for (o = [],
                                         e = 0; e < w.snapGrid.length; e++)
                                    w.snapGrid[e] < w.virtualSize + w.snapGrid[0] && o.push(w.snapGrid[e]);
                                w.snapGrid = o
                            }
                            if (!w.params.centeredSlides) {
                                for (o = [],
                                         e = 0; e < w.snapGrid.length; e++)
                                    w.snapGrid[e] <= w.virtualSize - w.size && o.push(w.snapGrid[e]);
                                w.snapGrid = o,
                                1 < Math.floor(w.virtualSize - w.size) - Math.floor(w.snapGrid[w.snapGrid.length - 1]) && w.snapGrid.push(w.virtualSize - w.size)
                            }
                            0 === w.snapGrid.length && (w.snapGrid = [0]),
                            0 !== w.params.spaceBetween && (w.isHorizontal() ? w.rtl ? w.slides.css({
                                marginLeft: t + "px"
                            }) : w.slides.css({
                                marginRight: t + "px"
                            }) : w.slides.css({
                                marginBottom: t + "px"
                            })),
                            w.params.watchSlidesProgress && w.updateSlidesOffset()
                        }
                    }
                    ,
                    w.updateSlidesOffset = function() {
                        for (var e = 0; e < w.slides.length; e++)
                            w.slides[e].swiperSlideOffset = w.isHorizontal() ? w.slides[e].offsetLeft : w.slides[e].offsetTop
                    }
                    ,
                    w.currentSlidesPerView = function() {
                        var e, t, i = 1;
                        if (w.params.centeredSlides) {
                            var n, s = w.slides[w.activeIndex].swiperSlideSize;
                            for (e = w.activeIndex + 1; e < w.slides.length; e++)
                                w.slides[e] && !n && (i++,
                                (s += w.slides[e].swiperSlideSize) > w.size && (n = !0));
                            for (t = w.activeIndex - 1; 0 <= t; t--)
                                w.slides[t] && !n && (i++,
                                (s += w.slides[t].swiperSlideSize) > w.size && (n = !0))
                        } else
                            for (e = w.activeIndex + 1; e < w.slides.length; e++)
                                w.slidesGrid[e] - w.slidesGrid[w.activeIndex] < w.size && i++;
                        return i
                    }
                    ,
                    w.updateSlidesProgress = function(e) {
                        if (void 0 === e && (e = w.translate || 0),
                            0 !== w.slides.length) {
                            void 0 === w.slides[0].swiperSlideOffset && w.updateSlidesOffset();
                            var t = -e;
                            w.rtl && (t = e),
                                w.slides.removeClass(w.params.slideVisibleClass);
                            for (var i = 0; i < w.slides.length; i++) {
                                var n = w.slides[i]
                                    , s = (t + (w.params.centeredSlides ? w.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + w.params.spaceBetween);
                                if (w.params.watchSlidesVisibility) {
                                    var a = -(t - n.swiperSlideOffset)
                                        , r = a + w.slidesSizesGrid[i];
                                    (0 <= a && a < w.size || 0 < r && r <= w.size || a <= 0 && r >= w.size) && w.slides.eq(i).addClass(w.params.slideVisibleClass)
                                }
                                n.progress = w.rtl ? -s : s
                            }
                        }
                    }
                    ,
                    w.updateProgress = function(e) {
                        void 0 === e && (e = w.translate || 0);
                        var t = w.maxTranslate() - w.minTranslate()
                            , i = w.isBeginning
                            , n = w.isEnd;
                        0 === t ? (w.progress = 0,
                            w.isBeginning = w.isEnd = !0) : (w.progress = (e - w.minTranslate()) / t,
                            w.isBeginning = w.progress <= 0,
                            w.isEnd = 1 <= w.progress),
                        w.isBeginning && !i && w.emit("onReachBeginning", w),
                        w.isEnd && !n && w.emit("onReachEnd", w),
                        w.params.watchSlidesProgress && w.updateSlidesProgress(e),
                            w.emit("onProgress", w, w.progress)
                    }
                    ,
                    w.updateActiveIndex = function() {
                        var e, t, i, n = w.rtl ? w.translate : -w.translate;
                        for (t = 0; t < w.slidesGrid.length; t++)
                            void 0 !== w.slidesGrid[t + 1] ? n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] - (w.slidesGrid[t + 1] - w.slidesGrid[t]) / 2 ? e = t : n >= w.slidesGrid[t] && n < w.slidesGrid[t + 1] && (e = t + 1) : n >= w.slidesGrid[t] && (e = t);
                        w.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                        (i = Math.floor(e / w.params.slidesPerGroup)) >= w.snapGrid.length && (i = w.snapGrid.length - 1),
                        e !== w.activeIndex && (w.snapIndex = i,
                            w.previousIndex = w.activeIndex,
                            w.activeIndex = e,
                            w.updateClasses(),
                            w.updateRealIndex())
                    }
                    ,
                    w.updateRealIndex = function() {
                        w.realIndex = parseInt(w.slides.eq(w.activeIndex).attr("data-swiper-slide-index") || w.activeIndex, 10)
                    }
                    ,
                    w.updateClasses = function() {
                        w.slides.removeClass(w.params.slideActiveClass + " " + w.params.slideNextClass + " " + w.params.slidePrevClass + " " + w.params.slideDuplicateActiveClass + " " + w.params.slideDuplicateNextClass + " " + w.params.slideDuplicatePrevClass);
                        var e = w.slides.eq(w.activeIndex);
                        e.addClass(w.params.slideActiveClass),
                        l.loop && (e.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + w.realIndex + '"]').addClass(w.params.slideDuplicateActiveClass));
                        var t = e.next("." + w.params.slideClass).addClass(w.params.slideNextClass);
                        w.params.loop && 0 === t.length && (t = w.slides.eq(0)).addClass(w.params.slideNextClass);
                        var i = e.prev("." + w.params.slideClass).addClass(w.params.slidePrevClass);
                        if (w.params.loop && 0 === i.length && (i = w.slides.eq(-1)).addClass(w.params.slidePrevClass),
                            l.loop && (t.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicateNextClass),
                                i.hasClass(w.params.slideDuplicateClass) ? w.wrapper.children("." + w.params.slideClass + ":not(." + w.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass) : w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(w.params.slideDuplicatePrevClass)),
                            w.paginationContainer && 0 < w.paginationContainer.length) {
                            var n, s = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length;
                            if (w.params.loop ? ((n = Math.ceil((w.activeIndex - w.loopedSlides) / w.params.slidesPerGroup)) > w.slides.length - 1 - 2 * w.loopedSlides && (n -= w.slides.length - 2 * w.loopedSlides),
                                s - 1 < n && (n -= s),
                                n < 0 && "bullets" !== w.params.paginationType && (n = s + n)) : n = void 0 !== w.snapIndex ? w.snapIndex : w.activeIndex || 0,
                                "bullets" === w.params.paginationType && w.bullets && 0 < w.bullets.length && (w.bullets.removeClass(w.params.bulletActiveClass),
                                    1 < w.paginationContainer.length ? w.bullets.each(function() {
                                        L(this).index() === n && L(this).addClass(w.params.bulletActiveClass)
                                    }) : w.bullets.eq(n).addClass(w.params.bulletActiveClass)),
                                "fraction" === w.params.paginationType && (w.paginationContainer.find("." + w.params.paginationCurrentClass).text(n + 1),
                                    w.paginationContainer.find("." + w.params.paginationTotalClass).text(s)),
                                "progress" === w.params.paginationType) {
                                var a = (n + 1) / s
                                    , r = a
                                    , o = 1;
                                w.isHorizontal() || (o = a,
                                    r = 1),
                                    w.paginationContainer.find("." + w.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + r + ") scaleY(" + o + ")").transition(w.params.speed)
                            }
                            "custom" === w.params.paginationType && w.params.paginationCustomRender && (w.paginationContainer.html(w.params.paginationCustomRender(w, n + 1, s)),
                                w.emit("onPaginationRendered", w, w.paginationContainer[0]))
                        }
                        w.params.loop || (w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.isBeginning ? (w.prevButton.addClass(w.params.buttonDisabledClass),
                        w.params.a11y && w.a11y && w.a11y.disable(w.prevButton)) : (w.prevButton.removeClass(w.params.buttonDisabledClass),
                        w.params.a11y && w.a11y && w.a11y.enable(w.prevButton))),
                        w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.isEnd ? (w.nextButton.addClass(w.params.buttonDisabledClass),
                        w.params.a11y && w.a11y && w.a11y.disable(w.nextButton)) : (w.nextButton.removeClass(w.params.buttonDisabledClass),
                        w.params.a11y && w.a11y && w.a11y.enable(w.nextButton))))
                    }
                    ,
                    w.updatePagination = function() {
                        if (w.params.pagination && w.paginationContainer && 0 < w.paginationContainer.length) {
                            var e = "";
                            if ("bullets" === w.params.paginationType) {
                                for (var t = w.params.loop ? Math.ceil((w.slides.length - 2 * w.loopedSlides) / w.params.slidesPerGroup) : w.snapGrid.length, i = 0; i < t; i++)
                                    e += w.params.paginationBulletRender ? w.params.paginationBulletRender(w, i, w.params.bulletClass) : "<" + w.params.paginationElement + ' class="' + w.params.bulletClass + '"></' + w.params.paginationElement + ">";
                                w.paginationContainer.html(e),
                                    w.bullets = w.paginationContainer.find("." + w.params.bulletClass),
                                w.params.paginationClickable && w.params.a11y && w.a11y && w.a11y.initPagination()
                            }
                            "fraction" === w.params.paginationType && (e = w.params.paginationFractionRender ? w.params.paginationFractionRender(w, w.params.paginationCurrentClass, w.params.paginationTotalClass) : '<span class="' + w.params.paginationCurrentClass + '"></span> / <span class="' + w.params.paginationTotalClass + '"></span>',
                                w.paginationContainer.html(e)),
                            "progress" === w.params.paginationType && (e = w.params.paginationProgressRender ? w.params.paginationProgressRender(w, w.params.paginationProgressbarClass) : '<span class="' + w.params.paginationProgressbarClass + '"></span>',
                                w.paginationContainer.html(e)),
                            "custom" !== w.params.paginationType && w.emit("onPaginationRendered", w, w.paginationContainer[0])
                        }
                    }
                    ,
                    w.update = function(e) {
                        function t() {
                            w.rtl,
                                w.translate,
                                i = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate()),
                                w.setWrapperTranslate(i),
                                w.updateActiveIndex(),
                                w.updateClasses()
                        }
                        if (w)
                            if (w.updateContainerSize(),
                                    w.updateSlidesSize(),
                                    w.updateProgress(),
                                    w.updatePagination(),
                                    w.updateClasses(),
                                w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                                    e) {
                                var i;
                                w.controller && w.controller.spline && (w.controller.spline = void 0),
                                    w.params.freeMode ? (t(),
                                    w.params.autoHeight && w.updateAutoHeight()) : (("auto" === w.params.slidesPerView || 1 < w.params.slidesPerView) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0)) || t()
                            } else
                                w.params.autoHeight && w.updateAutoHeight()
                    }
                    ,
                    w.onResize = function(e) {
                        w.params.breakpoints && w.setBreakpoint();
                        var t = w.params.allowSwipeToPrev
                            , i = w.params.allowSwipeToNext;
                        w.params.allowSwipeToPrev = w.params.allowSwipeToNext = !0,
                            w.updateContainerSize(),
                            w.updateSlidesSize(),
                        ("auto" === w.params.slidesPerView || w.params.freeMode || e) && w.updatePagination(),
                        w.params.scrollbar && w.scrollbar && w.scrollbar.set(),
                        w.controller && w.controller.spline && (w.controller.spline = void 0);
                        var n = !1;
                        if (w.params.freeMode) {
                            var s = Math.min(Math.max(w.translate, w.maxTranslate()), w.minTranslate());
                            w.setWrapperTranslate(s),
                                w.updateActiveIndex(),
                                w.updateClasses(),
                            w.params.autoHeight && w.updateAutoHeight()
                        } else
                            w.updateClasses(),
                                n = ("auto" === w.params.slidesPerView || 1 < w.params.slidesPerView) && w.isEnd && !w.params.centeredSlides ? w.slideTo(w.slides.length - 1, 0, !1, !0) : w.slideTo(w.activeIndex, 0, !1, !0);
                        w.params.lazyLoading && !n && w.lazy && w.lazy.load(),
                            w.params.allowSwipeToPrev = t,
                            w.params.allowSwipeToNext = i
                    }
                    ,
                    w.touchEventsDesktop = {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    },
                    window.navigator.pointerEnabled ? w.touchEventsDesktop = {
                        start: "pointerdown",
                        move: "pointermove",
                        end: "pointerup"
                    } : window.navigator.msPointerEnabled && (w.touchEventsDesktop = {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    }),
                    w.touchEvents = {
                        start: w.support.touch || !w.params.simulateTouch ? "touchstart" : w.touchEventsDesktop.start,
                        move: w.support.touch || !w.params.simulateTouch ? "touchmove" : w.touchEventsDesktop.move,
                        end: w.support.touch || !w.params.simulateTouch ? "touchend" : w.touchEventsDesktop.end
                    },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === w.params.touchEventsTarget ? w.container : w.wrapper).addClass("swiper-wp8-" + w.params.direction),
                    w.initEvents = function(e) {
                        var t = e ? "off" : "on"
                            , i = e ? "removeEventListener" : "addEventListener"
                            , n = "container" === w.params.touchEventsTarget ? w.container[0] : w.wrapper[0]
                            , s = w.support.touch ? n : document
                            , a = !!w.params.nested;
                        if (w.browser.ie)
                            n[i](w.touchEvents.start, w.onTouchStart, !1),
                                s[i](w.touchEvents.move, w.onTouchMove, a),
                                s[i](w.touchEvents.end, w.onTouchEnd, !1);
                        else {
                            if (w.support.touch) {
                                var r = !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                };
                                n[i](w.touchEvents.start, w.onTouchStart, r),
                                    n[i](w.touchEvents.move, w.onTouchMove, a),
                                    n[i](w.touchEvents.end, w.onTouchEnd, r)
                            }
                            (l.simulateTouch && !w.device.ios && !w.device.android || l.simulateTouch && !w.support.touch && w.device.ios) && (n[i]("mousedown", w.onTouchStart, !1),
                                document[i]("mousemove", w.onTouchMove, a),
                                document[i]("mouseup", w.onTouchEnd, !1))
                        }
                        window[i]("resize", w.onResize),
                        w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.nextButton[t]("click", w.onClickNext),
                        w.params.a11y && w.a11y && w.nextButton[t]("keydown", w.a11y.onEnterKey)),
                        w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.prevButton[t]("click", w.onClickPrev),
                        w.params.a11y && w.a11y && w.prevButton[t]("keydown", w.a11y.onEnterKey)),
                        w.params.pagination && w.params.paginationClickable && (w.paginationContainer[t]("click", "." + w.params.bulletClass, w.onClickIndex),
                        w.params.a11y && w.a11y && w.paginationContainer[t]("keydown", "." + w.params.bulletClass, w.a11y.onEnterKey)),
                        (w.params.preventClicks || w.params.preventClicksPropagation) && n[i]("click", w.preventClicks, !0)
                    }
                    ,
                    w.attachEvents = function() {
                        w.initEvents()
                    }
                    ,
                    w.detachEvents = function() {
                        w.initEvents(!0)
                    }
                    ,
                    w.allowClick = !0,
                    w.preventClicks = function(e) {
                        w.allowClick || (w.params.preventClicks && e.preventDefault(),
                        w.params.preventClicksPropagation && w.animating && (e.stopPropagation(),
                            e.stopImmediatePropagation()))
                    }
                    ,
                    w.onClickNext = function(e) {
                        e.preventDefault(),
                        w.isEnd && !w.params.loop || w.slideNext()
                    }
                    ,
                    w.onClickPrev = function(e) {
                        e.preventDefault(),
                        w.isBeginning && !w.params.loop || w.slidePrev()
                    }
                    ,
                    w.onClickIndex = function(e) {
                        e.preventDefault();
                        var t = L(this).index() * w.params.slidesPerGroup;
                        w.params.loop && (t += w.loopedSlides),
                            w.slideTo(t)
                    }
                    ,
                    w.updateClickedSlide = function(e) {
                        var t = o(e, "." + w.params.slideClass)
                            , i = !1;
                        if (t)
                            for (var n = 0; n < w.slides.length; n++)
                                w.slides[n] === t && (i = !0);
                        if (!t || !i)
                            return w.clickedSlide = void 0,
                                void (w.clickedIndex = void 0);
                        if (w.clickedSlide = t,
                                w.clickedIndex = L(t).index(),
                            w.params.slideToClickedSlide && void 0 !== w.clickedIndex && w.clickedIndex !== w.activeIndex) {
                            var s, a = w.clickedIndex, r = "auto" === w.params.slidesPerView ? w.currentSlidesPerView() : w.params.slidesPerView;
                            if (w.params.loop) {
                                if (w.animating)
                                    return;
                                s = parseInt(L(w.clickedSlide).attr("data-swiper-slide-index"), 10),
                                    w.params.centeredSlides ? a < w.loopedSlides - r / 2 || a > w.slides.length - w.loopedSlides + r / 2 ? (w.fixLoop(),
                                        a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(),
                                        setTimeout(function() {
                                            w.slideTo(a)
                                        }, 0)) : w.slideTo(a) : a > w.slides.length - r ? (w.fixLoop(),
                                        a = w.wrapper.children("." + w.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.' + w.params.slideDuplicateClass + ")").eq(0).index(),
                                        setTimeout(function() {
                                            w.slideTo(a)
                                        }, 0)) : w.slideTo(a)
                            } else
                                w.slideTo(a)
                        }
                    }
                ;
                var x, T, C, S, y, E, _, b, k, z, P, N, M = "input, select, textarea, button, video", D = Date.now(), A = [];
                for (var I in w.animating = !1,
                    w.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    w.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent),
                            (P = "touchstart" === e.type) || !("which"in e) || 3 !== e.which) {
                            if (w.params.noSwiping && o(e, "." + w.params.noSwipingClass))
                                return void (w.allowClick = !0);
                            if (!w.params.swipeHandler || o(e, w.params.swipeHandler)) {
                                var t = w.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                                    , i = w.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(w.device.ios && w.params.iOSEdgeSwipeDetection && t <= w.params.iOSEdgeSwipeThreshold)) {
                                    if (C = !(T = !(x = !0)),
                                            N = y = void 0,
                                            w.touches.startX = t,
                                            w.touches.startY = i,
                                            S = Date.now(),
                                            w.allowClick = !0,
                                            w.updateContainerSize(),
                                            w.swipeDirection = void 0,
                                        0 < w.params.threshold && (b = !1),
                                        "touchstart" !== e.type) {
                                        var n = !0;
                                        L(e.target).is(M) && (n = !1),
                                        document.activeElement && L(document.activeElement).is(M) && document.activeElement.blur(),
                                        n && e.preventDefault()
                                    }
                                    w.emit("onTouchStart", w, e)
                                }
                            }
                        }
                    }
                    ,
                    w.onTouchMove = function(e) {
                        if (e.originalEvent && (e = e.originalEvent),
                            !P || "mousemove" !== e.type) {
                            if (e.preventedByNestedSwiper)
                                return w.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                    void (w.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY);
                            if (w.params.onlyExternal)
                                return w.allowClick = !1,
                                    void (x && (w.touches.startX = w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                        w.touches.startY = w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                        S = Date.now()));
                            if (P && w.params.touchReleaseOnEdges && !w.params.loop)
                                if (w.isHorizontal()) {
                                    if (w.touches.currentX < w.touches.startX && w.translate <= w.maxTranslate() || w.touches.currentX > w.touches.startX && w.translate >= w.minTranslate())
                                        return
                                } else if (w.touches.currentY < w.touches.startY && w.translate <= w.maxTranslate() || w.touches.currentY > w.touches.startY && w.translate >= w.minTranslate())
                                    return;
                            if (P && document.activeElement && e.target === document.activeElement && L(e.target).is(M))
                                return T = !0,
                                    void (w.allowClick = !1);
                            if (C && w.emit("onTouchMove", w, e),
                                    !(e.targetTouches && 1 < e.targetTouches.length)) {
                                var t;
                                if (w.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                        w.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                    void 0 === y)
                                    w.isHorizontal() && w.touches.currentY === w.touches.startY || !w.isHorizontal() && w.touches.currentX === w.touches.startX ? y = !1 : (t = 180 * Math.atan2(Math.abs(w.touches.currentY - w.touches.startY), Math.abs(w.touches.currentX - w.touches.startX)) / Math.PI,
                                        y = w.isHorizontal() ? t > w.params.touchAngle : 90 - t > w.params.touchAngle);
                                if (y && w.emit("onTouchMoveOpposite", w, e),
                                    void 0 === N && w.browser.ieTouch && (w.touches.currentX === w.touches.startX && w.touches.currentY === w.touches.startY || (N = !0)),
                                        x) {
                                    if (y)
                                        return void (x = !1);
                                    if (N || !w.browser.ieTouch) {
                                        w.allowClick = !1,
                                            w.emit("onSliderMove", w, e),
                                            e.preventDefault(),
                                        w.params.touchMoveStopPropagation && !w.params.nested && e.stopPropagation(),
                                        T || (l.loop && w.fixLoop(),
                                            _ = w.getWrapperTranslate(),
                                            w.setWrapperTransition(0),
                                        w.animating && w.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                        w.params.autoplay && w.autoplaying && (w.params.autoplayDisableOnInteraction ? w.stopAutoplay() : w.pauseAutoplay()),
                                            z = !1,
                                        !w.params.grabCursor || !0 !== w.params.allowSwipeToNext && !0 !== w.params.allowSwipeToPrev || w.setGrabCursor(!0)),
                                            T = !0;
                                        var i = w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY;
                                        i *= w.params.touchRatio,
                                        w.rtl && (i = -i),
                                            w.swipeDirection = 0 < i ? "prev" : "next",
                                            E = i + _;
                                        var n = !0;
                                        if (0 < i && E > w.minTranslate() ? (n = !1,
                                            w.params.resistance && (E = w.minTranslate() - 1 + Math.pow(-w.minTranslate() + _ + i, w.params.resistanceRatio))) : i < 0 && E < w.maxTranslate() && (n = !1,
                                            w.params.resistance && (E = w.maxTranslate() + 1 - Math.pow(w.maxTranslate() - _ - i, w.params.resistanceRatio))),
                                            n && (e.preventedByNestedSwiper = !0),
                                            !w.params.allowSwipeToNext && "next" === w.swipeDirection && E < _ && (E = _),
                                            !w.params.allowSwipeToPrev && "prev" === w.swipeDirection && _ < E && (E = _),
                                            0 < w.params.threshold) {
                                            if (!(Math.abs(i) > w.params.threshold || b))
                                                return void (E = _);
                                            if (!b)
                                                return b = !0,
                                                    w.touches.startX = w.touches.currentX,
                                                    w.touches.startY = w.touches.currentY,
                                                    E = _,
                                                    void (w.touches.diff = w.isHorizontal() ? w.touches.currentX - w.touches.startX : w.touches.currentY - w.touches.startY)
                                        }
                                        w.params.followFinger && ((w.params.freeMode || w.params.watchSlidesProgress) && w.updateActiveIndex(),
                                        w.params.freeMode && (0 === A.length && A.push({
                                            position: w.touches[w.isHorizontal() ? "startX" : "startY"],
                                            time: S
                                        }),
                                            A.push({
                                                position: w.touches[w.isHorizontal() ? "currentX" : "currentY"],
                                                time: (new window.Date).getTime()
                                            })),
                                            w.updateProgress(E),
                                            w.setWrapperTranslate(E))
                                    }
                                }
                            }
                        }
                    }
                    ,
                    w.onTouchEnd = function(e) {
                        if (e.originalEvent && (e = e.originalEvent),
                            C && w.emit("onTouchEnd", w, e),
                                C = !1,
                                x) {
                            w.params.grabCursor && T && x && (!0 === w.params.allowSwipeToNext || !0 === w.params.allowSwipeToPrev) && w.setGrabCursor(!1);
                            var t, i = Date.now(), n = i - S;
                            if (w.allowClick && (w.updateClickedSlide(e),
                                    w.emit("onTap", w, e),
                                n < 300 && 300 < i - D && (k && clearTimeout(k),
                                    k = setTimeout(function() {
                                        w && (w.params.paginationHide && 0 < w.paginationContainer.length && !L(e.target).hasClass(w.params.bulletClass) && w.paginationContainer.toggleClass(w.params.paginationHiddenClass),
                                            w.emit("onClick", w, e))
                                    }, 300)),
                                n < 300 && i - D < 300 && (k && clearTimeout(k),
                                    w.emit("onDoubleTap", w, e))),
                                    D = Date.now(),
                                    setTimeout(function() {
                                        w && (w.allowClick = !0)
                                    }, 0),
                                !x || !T || !w.swipeDirection || 0 === w.touches.diff || E === _)
                                return void (x = T = !1);
                            if (x = T = !1,
                                    t = w.params.followFinger ? w.rtl ? w.translate : -w.translate : -E,
                                    w.params.freeMode) {
                                if (t < -w.minTranslate())
                                    return void w.slideTo(w.activeIndex);
                                if (t > -w.maxTranslate())
                                    return void (w.slides.length < w.snapGrid.length ? w.slideTo(w.snapGrid.length - 1) : w.slideTo(w.slides.length - 1));
                                if (w.params.freeModeMomentum) {
                                    if (1 < A.length) {
                                        var s = A.pop()
                                            , a = A.pop()
                                            , r = s.position - a.position
                                            , o = s.time - a.time;
                                        w.velocity = r / o,
                                            w.velocity = w.velocity / 2,
                                        Math.abs(w.velocity) < w.params.freeModeMinimumVelocity && (w.velocity = 0),
                                        (150 < o || 300 < (new window.Date).getTime() - s.time) && (w.velocity = 0)
                                    } else
                                        w.velocity = 0;
                                    w.velocity = w.velocity * w.params.freeModeMomentumVelocityRatio,
                                        A.length = 0;
                                    var l = 1e3 * w.params.freeModeMomentumRatio
                                        , u = w.velocity * l
                                        , c = w.translate + u;
                                    w.rtl && (c = -c);
                                    var h, p = !1, d = 20 * Math.abs(w.velocity) * w.params.freeModeMomentumBounceRatio;
                                    if (c < w.maxTranslate())
                                        w.params.freeModeMomentumBounce ? (c + w.maxTranslate() < -d && (c = w.maxTranslate() - d),
                                            h = w.maxTranslate(),
                                            z = p = !0) : c = w.maxTranslate();
                                    else if (c > w.minTranslate())
                                        w.params.freeModeMomentumBounce ? (c - w.minTranslate() > d && (c = w.minTranslate() + d),
                                            h = w.minTranslate(),
                                            z = p = !0) : c = w.minTranslate();
                                    else if (w.params.freeModeSticky) {
                                        var f, m = 0;
                                        for (m = 0; m < w.snapGrid.length; m += 1)
                                            if (w.snapGrid[m] > -c) {
                                                f = m;
                                                break
                                            }
                                        c = Math.abs(w.snapGrid[f] - c) < Math.abs(w.snapGrid[f - 1] - c) || "next" === w.swipeDirection ? w.snapGrid[f] : w.snapGrid[f - 1],
                                        w.rtl || (c = -c)
                                    }
                                    if (0 !== w.velocity)
                                        l = w.rtl ? Math.abs((-c - w.translate) / w.velocity) : Math.abs((c - w.translate) / w.velocity);
                                    else if (w.params.freeModeSticky)
                                        return void w.slideReset();
                                    w.params.freeModeMomentumBounce && p ? (w.updateProgress(h),
                                        w.setWrapperTransition(l),
                                        w.setWrapperTranslate(c),
                                        w.onTransitionStart(),
                                        w.animating = !0,
                                        w.wrapper.transitionEnd(function() {
                                            w && z && (w.emit("onMomentumBounce", w),
                                                w.setWrapperTransition(w.params.speed),
                                                w.setWrapperTranslate(h),
                                                w.wrapper.transitionEnd(function() {
                                                    w && w.onTransitionEnd()
                                                }))
                                        })) : w.velocity ? (w.updateProgress(c),
                                        w.setWrapperTransition(l),
                                        w.setWrapperTranslate(c),
                                        w.onTransitionStart(),
                                    w.animating || (w.animating = !0,
                                        w.wrapper.transitionEnd(function() {
                                            w && w.onTransitionEnd()
                                        }))) : w.updateProgress(c),
                                        w.updateActiveIndex()
                                }
                                return void ((!w.params.freeModeMomentum || n >= w.params.longSwipesMs) && (w.updateProgress(),
                                    w.updateActiveIndex()))
                            }
                            var g, v = 0, y = w.slidesSizesGrid[0];
                            for (g = 0; g < w.slidesGrid.length; g += w.params.slidesPerGroup)
                                void 0 !== w.slidesGrid[g + w.params.slidesPerGroup] ? t >= w.slidesGrid[g] && t < w.slidesGrid[g + w.params.slidesPerGroup] && (v = g,
                                    y = w.slidesGrid[g + w.params.slidesPerGroup] - w.slidesGrid[g]) : t >= w.slidesGrid[g] && (v = g,
                                    y = w.slidesGrid[w.slidesGrid.length - 1] - w.slidesGrid[w.slidesGrid.length - 2]);
                            var b = (t - w.slidesGrid[v]) / y;
                            if (n > w.params.longSwipesMs) {
                                if (!w.params.longSwipes)
                                    return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && (b >= w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v)),
                                "prev" === w.swipeDirection && (b > 1 - w.params.longSwipesRatio ? w.slideTo(v + w.params.slidesPerGroup) : w.slideTo(v))
                            } else {
                                if (!w.params.shortSwipes)
                                    return void w.slideTo(w.activeIndex);
                                "next" === w.swipeDirection && w.slideTo(v + w.params.slidesPerGroup),
                                "prev" === w.swipeDirection && w.slideTo(v)
                            }
                        }
                    }
                    ,
                    w._slideTo = function(e, t) {
                        return w.slideTo(e, t, !0, !0)
                    }
                    ,
                    w.slideTo = function(e, t, i, n) {
                        void 0 === i && (i = !0),
                        void 0 === e && (e = 0),
                        e < 0 && (e = 0),
                            w.snapIndex = Math.floor(e / w.params.slidesPerGroup),
                        w.snapIndex >= w.snapGrid.length && (w.snapIndex = w.snapGrid.length - 1);
                        var s = -w.snapGrid[w.snapIndex];
                        if (w.params.autoplay && w.autoplaying && (n || !w.params.autoplayDisableOnInteraction ? w.pauseAutoplay(t) : w.stopAutoplay()),
                                w.updateProgress(s),
                                w.params.normalizeSlideIndex)
                            for (var a = 0; a < w.slidesGrid.length; a++)
                                -Math.floor(100 * s) >= Math.floor(100 * w.slidesGrid[a]) && (e = a);
                        return !(!w.params.allowSwipeToNext && s < w.translate && s < w.minTranslate() || !w.params.allowSwipeToPrev && s > w.translate && s > w.maxTranslate() && (w.activeIndex || 0) !== e || (void 0 === t && (t = w.params.speed),
                            w.previousIndex = w.activeIndex || 0,
                            w.activeIndex = e,
                            w.updateRealIndex(),
                            w.rtl && -s === w.translate || !w.rtl && s === w.translate ? (w.params.autoHeight && w.updateAutoHeight(),
                                w.updateClasses(),
                            "slide" !== w.params.effect && w.setWrapperTranslate(s),
                                1) : (w.updateClasses(),
                                w.onTransitionStart(i),
                                0 === t || w.browser.lteIE9 ? (w.setWrapperTranslate(s),
                                    w.setWrapperTransition(0),
                                    w.onTransitionEnd(i)) : (w.setWrapperTranslate(s),
                                    w.setWrapperTransition(t),
                                w.animating || (w.animating = !0,
                                    w.wrapper.transitionEnd(function() {
                                        w && w.onTransitionEnd(i)
                                    }))),
                                0)))
                    }
                    ,
                    w.onTransitionStart = function(e) {
                        void 0 === e && (e = !0),
                        w.params.autoHeight && w.updateAutoHeight(),
                        w.lazy && w.lazy.onTransitionStart(),
                        e && (w.emit("onTransitionStart", w),
                        w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeStart", w),
                            w.activeIndex > w.previousIndex ? w.emit("onSlideNextStart", w) : w.emit("onSlidePrevStart", w)))
                    }
                    ,
                    w.onTransitionEnd = function(e) {
                        w.animating = !1,
                            w.setWrapperTransition(0),
                        void 0 === e && (e = !0),
                        w.lazy && w.lazy.onTransitionEnd(),
                        e && (w.emit("onTransitionEnd", w),
                        w.activeIndex !== w.previousIndex && (w.emit("onSlideChangeEnd", w),
                            w.activeIndex > w.previousIndex ? w.emit("onSlideNextEnd", w) : w.emit("onSlidePrevEnd", w))),
                        w.params.history && w.history && w.history.setHistory(w.params.history, w.activeIndex),
                        w.params.hashnav && w.hashnav && w.hashnav.setHash()
                    }
                    ,
                    w.slideNext = function(e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(),
                            w.container[0].clientLeft,
                            w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)) : w.slideTo(w.activeIndex + w.params.slidesPerGroup, t, e, i)
                    }
                    ,
                    w._slideNext = function(e) {
                        return w.slideNext(!0, e, !0)
                    }
                    ,
                    w.slidePrev = function(e, t, i) {
                        return w.params.loop ? !w.animating && (w.fixLoop(),
                            w.container[0].clientLeft,
                            w.slideTo(w.activeIndex - 1, t, e, i)) : w.slideTo(w.activeIndex - 1, t, e, i)
                    }
                    ,
                    w._slidePrev = function(e) {
                        return w.slidePrev(!0, e, !0)
                    }
                    ,
                    w.slideReset = function(e, t, i) {
                        return w.slideTo(w.activeIndex, t, e)
                    }
                    ,
                    w.disableTouchControl = function() {
                        return w.params.onlyExternal = !0
                    }
                    ,
                    w.enableTouchControl = function() {
                        return !(w.params.onlyExternal = !1)
                    }
                    ,
                    w.setWrapperTransition = function(e, t) {
                        w.wrapper.transition(e),
                        "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTransition(e),
                        w.params.parallax && w.parallax && w.parallax.setTransition(e),
                        w.params.scrollbar && w.scrollbar && w.scrollbar.setTransition(e),
                        w.params.control && w.controller && w.controller.setTransition(e, t),
                            w.emit("onSetTransition", w, e)
                    }
                    ,
                    w.setWrapperTranslate = function(e, t, i) {
                        var n = 0
                            , s = 0;
                        w.isHorizontal() ? n = w.rtl ? -e : e : s = e,
                        w.params.roundLengths && (n = m(n),
                            s = m(s)),
                        w.params.virtualTranslate || (w.support.transforms3d ? w.wrapper.transform("translate3d(" + n + "px, " + s + "px, 0px)") : w.wrapper.transform("translate(" + n + "px, " + s + "px)")),
                            w.translate = w.isHorizontal() ? n : s;
                        var a = w.maxTranslate() - w.minTranslate();
                        (0 === a ? 0 : (e - w.minTranslate()) / a) !== w.progress && w.updateProgress(e),
                        t && w.updateActiveIndex(),
                        "slide" !== w.params.effect && w.effects[w.params.effect] && w.effects[w.params.effect].setTranslate(w.translate),
                        w.params.parallax && w.parallax && w.parallax.setTranslate(w.translate),
                        w.params.scrollbar && w.scrollbar && w.scrollbar.setTranslate(w.translate),
                        w.params.control && w.controller && w.controller.setTranslate(w.translate, i),
                            w.emit("onSetTranslate", w, w.translate)
                    }
                    ,
                    w.getTranslate = function(e, t) {
                        var i, n, s, a;
                        return void 0 === t && (t = "x"),
                            w.params.virtualTranslate ? w.rtl ? -w.translate : w.translate : (s = window.getComputedStyle(e, null),
                                window.WebKitCSSMatrix ? (6 < (n = s.transform || s.webkitTransform).split(",").length && (n = n.split(", ").map(function(e) {
                                    return e.replace(",", ".")
                                }).join(", ")),
                                    a = new window.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","),
                            "x" === t && (n = window.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                            "y" === t && (n = window.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                            w.rtl && n && (n = -n),
                            n || 0)
                    }
                    ,
                    w.getWrapperTranslate = function(e) {
                        return void 0 === e && (e = w.isHorizontal() ? "x" : "y"),
                            w.getTranslate(w.wrapper[0], e)
                    }
                    ,
                    w.observers = [],
                    w.initObservers = function() {
                        if (w.params.observeParents)
                            for (var e = w.container.parents(), t = 0; t < e.length; t++)
                                i(e[t]);
                        i(w.container[0], {
                            childList: !1
                        }),
                            i(w.wrapper[0], {
                                attributes: !1
                            })
                    }
                    ,
                    w.disconnectObservers = function() {
                        for (var e = 0; e < w.observers.length; e++)
                            w.observers[e].disconnect();
                        w.observers = []
                    }
                    ,
                    w.createLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove();
                        var n = w.wrapper.children("." + w.params.slideClass);
                        "auto" !== w.params.slidesPerView || w.params.loopedSlides || (w.params.loopedSlides = n.length),
                            w.loopedSlides = parseInt(w.params.loopedSlides || w.params.slidesPerView, 10),
                            w.loopedSlides = w.loopedSlides + w.params.loopAdditionalSlides,
                        w.loopedSlides > n.length && (w.loopedSlides = n.length);
                        var e, s = [], a = [];
                        for (n.each(function(e, t) {
                            var i = L(this);
                            e < w.loopedSlides && a.push(t),
                            e < n.length && e >= n.length - w.loopedSlides && s.push(t),
                                i.attr("data-swiper-slide-index", e)
                        }),
                                 e = 0; e < a.length; e++)
                            w.wrapper.append(L(a[e].cloneNode(!0)).addClass(w.params.slideDuplicateClass));
                        for (e = s.length - 1; 0 <= e; e--)
                            w.wrapper.prepend(L(s[e].cloneNode(!0)).addClass(w.params.slideDuplicateClass))
                    }
                    ,
                    w.destroyLoop = function() {
                        w.wrapper.children("." + w.params.slideClass + "." + w.params.slideDuplicateClass).remove(),
                            w.slides.removeAttr("data-swiper-slide-index")
                    }
                    ,
                    w.reLoop = function(e) {
                        var t = w.activeIndex - w.loopedSlides;
                        w.destroyLoop(),
                            w.createLoop(),
                            w.updateSlidesSize(),
                        e && w.slideTo(t + w.loopedSlides, 0, !1)
                    }
                    ,
                    w.fixLoop = function() {
                        var e;
                        w.activeIndex < w.loopedSlides ? (e = w.slides.length - 3 * w.loopedSlides + w.activeIndex,
                            e += w.loopedSlides,
                            w.slideTo(e, 0, !1, !0)) : ("auto" === w.params.slidesPerView && w.activeIndex >= 2 * w.loopedSlides || w.activeIndex > w.slides.length - 2 * w.params.slidesPerView) && (e = -w.slides.length + w.activeIndex + w.loopedSlides,
                            e += w.loopedSlides,
                            w.slideTo(e, 0, !1, !0))
                    }
                    ,
                    w.appendSlide = function(e) {
                        if (w.params.loop && w.destroyLoop(),
                            "object" == typeof e && e.length)
                            for (var t = 0; t < e.length; t++)
                                e[t] && w.wrapper.append(e[t]);
                        else
                            w.wrapper.append(e);
                        w.params.loop && w.createLoop(),
                        w.params.observer && w.support.observer || w.update(!0)
                    }
                    ,
                    w.prependSlide = function(e) {
                        w.params.loop && w.destroyLoop();
                        var t = w.activeIndex + 1;
                        if ("object" == typeof e && e.length) {
                            for (var i = 0; i < e.length; i++)
                                e[i] && w.wrapper.prepend(e[i]);
                            t = w.activeIndex + e.length
                        } else
                            w.wrapper.prepend(e);
                        w.params.loop && w.createLoop(),
                        w.params.observer && w.support.observer || w.update(!0),
                            w.slideTo(t, 0, !1)
                    }
                    ,
                    w.removeSlide = function(e) {
                        w.params.loop && (w.destroyLoop(),
                            w.slides = w.wrapper.children("." + w.params.slideClass));
                        var t, i = w.activeIndex;
                        if ("object" == typeof e && e.length) {
                            for (var n = 0; n < e.length; n++)
                                t = e[n],
                                w.slides[t] && w.slides.eq(t).remove(),
                                t < i && i--;
                            i = Math.max(i, 0)
                        } else
                            t = e,
                            w.slides[t] && w.slides.eq(t).remove(),
                            t < i && i--,
                                i = Math.max(i, 0);
                        w.params.loop && w.createLoop(),
                        w.params.observer && w.support.observer || w.update(!0),
                            w.params.loop ? w.slideTo(i + w.loopedSlides, 0, !1) : w.slideTo(i, 0, !1)
                    }
                    ,
                    w.removeAllSlides = function() {
                        for (var e = [], t = 0; t < w.slides.length; t++)
                            e.push(t);
                        w.removeSlide(e)
                    }
                    ,
                    w.effects = {
                        fade: {
                            setTranslate: function() {
                                for (var e = 0; e < w.slides.length; e++) {
                                    var t = w.slides.eq(e)
                                        , i = -t[0].swiperSlideOffset;
                                    w.params.virtualTranslate || (i -= w.translate);
                                    var n = 0;
                                    w.isHorizontal() || (n = i,
                                        i = 0);
                                    var s = w.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                    t.css({
                                        opacity: s
                                    }).transform("translate3d(" + i + "px, " + n + "px, 0px)")
                                }
                            },
                            setTransition: function(e) {
                                if (w.slides.transition(e),
                                    w.params.virtualTranslate && 0 !== e) {
                                    var i = !1;
                                    w.slides.transitionEnd(function() {
                                        if (!i && w) {
                                            i = !0,
                                                w.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                                w.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        flip: {
                            setTranslate: function() {
                                for (var e = 0; e < w.slides.length; e++) {
                                    var t = w.slides.eq(e)
                                        , i = t[0].progress;
                                    w.params.flip.limitRotation && (i = Math.max(Math.min(t[0].progress, 1), -1));
                                    var n = -180 * i
                                        , s = 0
                                        , a = -t[0].swiperSlideOffset
                                        , r = 0;
                                    if (w.isHorizontal() ? w.rtl && (n = -n) : (r = a,
                                            s = -n,
                                            n = a = 0),
                                            t[0].style.zIndex = -Math.abs(Math.round(i)) + w.slides.length,
                                            w.params.flip.slideShadows) {
                                        var o = w.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top")
                                            , l = w.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                        0 === o.length && (o = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                            t.append(o)),
                                        0 === l.length && (l = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            t.append(l)),
                                        o.length && (o[0].style.opacity = Math.max(-i, 0)),
                                        l.length && (l[0].style.opacity = Math.max(i, 0))
                                    }
                                    t.transform("translate3d(" + a + "px, " + r + "px, 0px) rotateX(" + s + "deg) rotateY(" + n + "deg)")
                                }
                            },
                            setTransition: function(e) {
                                if (w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                    w.params.virtualTranslate && 0 !== e) {
                                    var i = !1;
                                    w.slides.eq(w.activeIndex).transitionEnd(function() {
                                        if (!i && w && L(this).hasClass(w.params.slideActiveClass)) {
                                            i = !0,
                                                w.animating = !1;
                                            for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++)
                                                w.wrapper.trigger(e[t])
                                        }
                                    })
                                }
                            }
                        },
                        cube: {
                            setTranslate: function() {
                                var e, t = 0;
                                w.params.cube.shadow && (w.isHorizontal() ? (0 === (e = w.wrapper.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                                    w.wrapper.append(e)),
                                    e.css({
                                        height: w.width + "px"
                                    })) : 0 === (e = w.container.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'),
                                    w.container.append(e)));
                                for (var i = 0; i < w.slides.length; i++) {
                                    var n = w.slides.eq(i)
                                        , s = 90 * i
                                        , a = Math.floor(s / 360);
                                    w.rtl && (s = -s,
                                        a = Math.floor(-s / 360));
                                    var r = Math.max(Math.min(n[0].progress, 1), -1)
                                        , o = 0
                                        , l = 0
                                        , u = 0;
                                    i % 4 == 0 ? (o = 4 * -a * w.size,
                                        u = 0) : (i - 1) % 4 == 0 ? (o = 0,
                                        u = 4 * -a * w.size) : (i - 2) % 4 == 0 ? (o = w.size + 4 * a * w.size,
                                        u = w.size) : (i - 3) % 4 == 0 && (o = -w.size,
                                        u = 3 * w.size + 4 * w.size * a),
                                    w.rtl && (o = -o),
                                    w.isHorizontal() || (l = o,
                                        o = 0);
                                    var c = "rotateX(" + (w.isHorizontal() ? 0 : -s) + "deg) rotateY(" + (w.isHorizontal() ? s : 0) + "deg) translate3d(" + o + "px, " + l + "px, " + u + "px)";
                                    if (r <= 1 && -1 < r && (t = 90 * i + 90 * r,
                                        w.rtl && (t = 90 * -i - 90 * r)),
                                            n.transform(c),
                                            w.params.cube.slideShadows) {
                                        var h = w.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top")
                                            , p = w.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                        0 === h.length && (h = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                            n.append(h)),
                                        0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            n.append(p)),
                                        h.length && (h[0].style.opacity = Math.max(-r, 0)),
                                        p.length && (p[0].style.opacity = Math.max(r, 0))
                                    }
                                }
                                if (w.wrapper.css({
                                        "-webkit-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-moz-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "-ms-transform-origin": "50% 50% -" + w.size / 2 + "px",
                                        "transform-origin": "50% 50% -" + w.size / 2 + "px"
                                    }),
                                        w.params.cube.shadow)
                                    if (w.isHorizontal())
                                        e.transform("translate3d(0px, " + (w.width / 2 + w.params.cube.shadowOffset) + "px, " + -w.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + w.params.cube.shadowScale + ")");
                                    else {
                                        var d = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90)
                                            , f = 1.5 - (Math.sin(2 * d * Math.PI / 360) / 2 + Math.cos(2 * d * Math.PI / 360) / 2)
                                            , m = w.params.cube.shadowScale
                                            , g = w.params.cube.shadowScale / f
                                            , v = w.params.cube.shadowOffset;
                                        e.transform("scale3d(" + m + ", 1, " + g + ") translate3d(0px, " + (w.height / 2 + v) + "px, " + -w.height / 2 / g + "px) rotateX(-90deg)")
                                    }
                                var y = w.isSafari || w.isUiWebView ? -w.size / 2 : 0;
                                w.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (w.isHorizontal() ? 0 : t) + "deg) rotateY(" + (w.isHorizontal() ? -t : 0) + "deg)")
                            },
                            setTransition: function(e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                w.params.cube.shadow && !w.isHorizontal() && w.container.find(".swiper-cube-shadow").transition(e)
                            }
                        },
                        coverflow: {
                            setTranslate: function() {
                                for (var e = w.translate, t = w.isHorizontal() ? -e + w.width / 2 : -e + w.height / 2, i = w.isHorizontal() ? w.params.coverflow.rotate : -w.params.coverflow.rotate, n = w.params.coverflow.depth, s = 0, a = w.slides.length; s < a; s++) {
                                    var r = w.slides.eq(s)
                                        , o = w.slidesSizesGrid[s]
                                        , l = (t - r[0].swiperSlideOffset - o / 2) / o * w.params.coverflow.modifier
                                        , u = w.isHorizontal() ? i * l : 0
                                        , c = w.isHorizontal() ? 0 : i * l
                                        , h = -n * Math.abs(l)
                                        , p = w.isHorizontal() ? 0 : w.params.coverflow.stretch * l
                                        , d = w.isHorizontal() ? w.params.coverflow.stretch * l : 0;
                                    Math.abs(d) < .001 && (d = 0),
                                    Math.abs(p) < .001 && (p = 0),
                                    Math.abs(h) < .001 && (h = 0),
                                    Math.abs(u) < .001 && (u = 0),
                                    Math.abs(c) < .001 && (c = 0);
                                    var f = "translate3d(" + d + "px," + p + "px," + h + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                                    if (r.transform(f),
                                            r[0].style.zIndex = 1 - Math.abs(Math.round(l)),
                                            w.params.coverflow.slideShadows) {
                                        var m = w.isHorizontal() ? r.find(".swiper-slide-shadow-left") : r.find(".swiper-slide-shadow-top")
                                            , g = w.isHorizontal() ? r.find(".swiper-slide-shadow-right") : r.find(".swiper-slide-shadow-bottom");
                                        0 === m.length && (m = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "left" : "top") + '"></div>'),
                                            r.append(m)),
                                        0 === g.length && (g = L('<div class="swiper-slide-shadow-' + (w.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                            r.append(g)),
                                        m.length && (m[0].style.opacity = 0 < l ? l : 0),
                                        g.length && (g[0].style.opacity = 0 < -l ? -l : 0)
                                    }
                                }
                                w.browser.ie && (w.wrapper[0].style.perspectiveOrigin = t + "px 50%")
                            },
                            setTransition: function(e) {
                                w.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                            }
                        }
                    },
                    w.lazy = {
                        initialImageLoaded: !1,
                        loadImageInSlide: function(e, l) {
                            if (void 0 !== e && (void 0 === l && (l = !0),
                                0 !== w.slides.length)) {
                                var u = w.slides.eq(e)
                                    , t = u.find("." + w.params.lazyLoadingClass + ":not(." + w.params.lazyStatusLoadedClass + "):not(." + w.params.lazyStatusLoadingClass + ")");
                                !u.hasClass(w.params.lazyLoadingClass) || u.hasClass(w.params.lazyStatusLoadedClass) || u.hasClass(w.params.lazyStatusLoadingClass) || (t = t.add(u[0])),
                                0 !== t.length && t.each(function() {
                                    var n = L(this);
                                    n.addClass(w.params.lazyStatusLoadingClass);
                                    var s = n.attr("data-background")
                                        , a = n.attr("data-src")
                                        , r = n.attr("data-srcset")
                                        , o = n.attr("data-sizes");
                                    w.loadImage(n[0], a || s, r, o, !1, function() {
                                        if (s ? (n.css("background-image", 'url("' + s + '")'),
                                                n.removeAttr("data-background")) : (r && (n.attr("srcset", r),
                                                n.removeAttr("data-srcset")),
                                            o && (n.attr("sizes", o),
                                                n.removeAttr("data-sizes")),
                                            a && (n.attr("src", a),
                                                n.removeAttr("data-src"))),
                                                n.addClass(w.params.lazyStatusLoadedClass).removeClass(w.params.lazyStatusLoadingClass),
                                                u.find("." + w.params.lazyPreloaderClass + ", ." + w.params.preloaderClass).remove(),
                                            w.params.loop && l) {
                                            var e = u.attr("data-swiper-slide-index");
                                            if (u.hasClass(w.params.slideDuplicateClass)) {
                                                var t = w.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + w.params.slideDuplicateClass + ")");
                                                w.lazy.loadImageInSlide(t.index(), !1)
                                            } else {
                                                var i = w.wrapper.children("." + w.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                                w.lazy.loadImageInSlide(i.index(), !1)
                                            }
                                        }
                                        w.emit("onLazyImageReady", w, u[0], n[0])
                                    }),
                                        w.emit("onLazyImageLoad", w, u[0], n[0])
                                })
                            }
                        },
                        load: function() {
                            var e, t = w.params.slidesPerView;
                            if ("auto" === t && (t = 0),
                                w.lazy.initialImageLoaded || (w.lazy.initialImageLoaded = !0),
                                    w.params.watchSlidesVisibility)
                                w.wrapper.children("." + w.params.slideVisibleClass).each(function() {
                                    w.lazy.loadImageInSlide(L(this).index())
                                });
                            else if (1 < t)
                                for (e = w.activeIndex; e < w.activeIndex + t; e++)
                                    w.slides[e] && w.lazy.loadImageInSlide(e);
                            else
                                w.lazy.loadImageInSlide(w.activeIndex);
                            if (w.params.lazyLoadingInPrevNext)
                                if (1 < t || w.params.lazyLoadingInPrevNextAmount && 1 < w.params.lazyLoadingInPrevNextAmount) {
                                    var i = w.params.lazyLoadingInPrevNextAmount
                                        , n = t
                                        , s = Math.min(w.activeIndex + n + Math.max(i, n), w.slides.length)
                                        , a = Math.max(w.activeIndex - Math.max(n, i), 0);
                                    for (e = w.activeIndex + t; e < s; e++)
                                        w.slides[e] && w.lazy.loadImageInSlide(e);
                                    for (e = a; e < w.activeIndex; e++)
                                        w.slides[e] && w.lazy.loadImageInSlide(e)
                                } else {
                                    var r = w.wrapper.children("." + w.params.slideNextClass);
                                    0 < r.length && w.lazy.loadImageInSlide(r.index());
                                    var o = w.wrapper.children("." + w.params.slidePrevClass);
                                    0 < o.length && w.lazy.loadImageInSlide(o.index())
                                }
                        },
                        onTransitionStart: function() {
                            w.params.lazyLoading && (w.params.lazyLoadingOnTransitionStart || !w.params.lazyLoadingOnTransitionStart && !w.lazy.initialImageLoaded) && w.lazy.load()
                        },
                        onTransitionEnd: function() {
                            w.params.lazyLoading && !w.params.lazyLoadingOnTransitionStart && w.lazy.load()
                        }
                    },
                    w.scrollbar = {
                        isTouched: !1,
                        setDragPosition: function(e) {
                            var t = w.scrollbar
                                , i = (w.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - t.track.offset()[w.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                                , n = -w.minTranslate() * t.moveDivider
                                , s = -w.maxTranslate() * t.moveDivider;
                            i < n ? i = n : s < i && (i = s),
                                i = -i / t.moveDivider,
                                w.updateProgress(i),
                                w.setWrapperTranslate(i, !0)
                        },
                        dragStart: function(e) {
                            var t = w.scrollbar;
                            t.isTouched = !0,
                                e.preventDefault(),
                                e.stopPropagation(),
                                t.setDragPosition(e),
                                clearTimeout(t.dragTimeout),
                                t.track.transition(0),
                            w.params.scrollbarHide && t.track.css("opacity", 1),
                                w.wrapper.transition(100),
                                t.drag.transition(100),
                                w.emit("onScrollbarDragStart", w)
                        },
                        dragMove: function(e) {
                            var t = w.scrollbar;
                            t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                                t.setDragPosition(e),
                                w.wrapper.transition(0),
                                t.track.transition(0),
                                t.drag.transition(0),
                                w.emit("onScrollbarDragMove", w))
                        },
                        dragEnd: function(e) {
                            var t = w.scrollbar;
                            t.isTouched && (t.isTouched = !1,
                            w.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                                t.dragTimeout = setTimeout(function() {
                                    t.track.css("opacity", 0),
                                        t.track.transition(400)
                                }, 1e3)),
                                w.emit("onScrollbarDragEnd", w),
                            w.params.scrollbarSnapOnRelease && w.slideReset())
                        },
                        draggableEvents: !1 !== w.params.simulateTouch || w.support.touch ? w.touchEvents : w.touchEventsDesktop,
                        enableDraggable: function() {
                            var e = w.scrollbar
                                , t = w.support.touch ? e.track : document;
                            L(e.track).on(e.draggableEvents.start, e.dragStart),
                                L(t).on(e.draggableEvents.move, e.dragMove),
                                L(t).on(e.draggableEvents.end, e.dragEnd)
                        },
                        disableDraggable: function() {
                            var e = w.scrollbar
                                , t = w.support.touch ? e.track : document;
                            L(e.track).off(e.draggableEvents.start, e.dragStart),
                                L(t).off(e.draggableEvents.move, e.dragMove),
                                L(t).off(e.draggableEvents.end, e.dragEnd)
                        },
                        set: function() {
                            if (w.params.scrollbar) {
                                var e = w.scrollbar;
                                e.track = L(w.params.scrollbar),
                                w.params.uniqueNavElements && "string" == typeof w.params.scrollbar && 1 < e.track.length && 1 === w.container.find(w.params.scrollbar).length && (e.track = w.container.find(w.params.scrollbar)),
                                    e.drag = e.track.find(".swiper-scrollbar-drag"),
                                0 === e.drag.length && (e.drag = L('<div class="swiper-scrollbar-drag"></div>'),
                                    e.track.append(e.drag)),
                                    e.drag[0].style.width = "",
                                    e.drag[0].style.height = "",
                                    e.trackSize = w.isHorizontal() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                                    e.divider = w.size / w.virtualSize,
                                    e.moveDivider = e.divider * (e.trackSize / w.size),
                                    e.dragSize = e.trackSize * e.divider,
                                    w.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                                    1 <= e.divider ? e.track[0].style.display = "none" : e.track[0].style.display = "",
                                w.params.scrollbarHide && (e.track[0].style.opacity = 0)
                            }
                        },
                        setTranslate: function() {
                            if (w.params.scrollbar) {
                                var e, t = w.scrollbar, i = (w.translate,
                                    t.dragSize);
                                e = (t.trackSize - t.dragSize) * w.progress,
                                    w.rtl && w.isHorizontal() ? 0 < (e = -e) ? (i = t.dragSize - e,
                                        e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e) : e < 0 ? (i = t.dragSize + e,
                                        e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                                    w.isHorizontal() ? (w.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                                        t.drag[0].style.width = i + "px") : (w.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                                        t.drag[0].style.height = i + "px"),
                                w.params.scrollbarHide && (clearTimeout(t.timeout),
                                    t.track[0].style.opacity = 1,
                                    t.timeout = setTimeout(function() {
                                        t.track[0].style.opacity = 0,
                                            t.track.transition(400)
                                    }, 1e3))
                            }
                        },
                        setTransition: function(e) {
                            w.params.scrollbar && w.scrollbar.drag.transition(e)
                        }
                    },
                    w.controller = {
                        LinearSpline: function(e, t) {
                            var i, n;
                            this.x = e,
                                this.y = t,
                                this.lastIndex = e.length - 1,
                                this.x.length,
                                this.interpolate = function(e) {
                                    return e ? (n = o(this.x, e),
                                        i = n - 1,
                                    (e - this.x[i]) * (this.y[n] - this.y[i]) / (this.x[n] - this.x[i]) + this.y[i]) : 0
                                }
                            ;
                            var s, a, r, o = function(e, t) {
                                for (a = -1,
                                         s = e.length; 1 < s - a; )
                                    e[r = s + a >> 1] <= t ? a = r : s = r;
                                return s
                            }
                        },
                        getInterpolateFunction: function(e) {
                            w.controller.spline || (w.controller.spline = w.params.loop ? new w.controller.LinearSpline(w.slidesGrid,e.slidesGrid) : new w.controller.LinearSpline(w.snapGrid,e.snapGrid))
                        },
                        setTranslate: function(t, e) {
                            function i(e) {
                                t = e.rtl && "horizontal" === e.params.direction ? -w.translate : w.translate,
                                "slide" === w.params.controlBy && (w.controller.getInterpolateFunction(e),
                                    s = -w.controller.spline.interpolate(-t)),
                                s && "container" !== w.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (w.maxTranslate() - w.minTranslate()),
                                    s = (t - w.minTranslate()) * n + e.minTranslate()),
                                w.params.controlInverse && (s = e.maxTranslate() - s),
                                    e.updateProgress(s),
                                    e.setWrapperTranslate(s, !1, w),
                                    e.updateActiveIndex()
                            }
                            var n, s, a = w.params.control;
                            if (w.isArray(a))
                                for (var r = 0; r < a.length; r++)
                                    a[r] !== e && a[r]instanceof R && i(a[r]);
                            else
                                a instanceof R && e !== a && i(a)
                        },
                        setTransition: function(t, e) {
                            function i(e) {
                                e.setWrapperTransition(t, w),
                                0 !== t && (e.onTransitionStart(),
                                    e.wrapper.transitionEnd(function() {
                                        s && (e.params.loop && "slide" === w.params.controlBy && e.fixLoop(),
                                            e.onTransitionEnd())
                                    }))
                            }
                            var n, s = w.params.control;
                            if (w.isArray(s))
                                for (n = 0; n < s.length; n++)
                                    s[n] !== e && s[n]instanceof R && i(s[n]);
                            else
                                s instanceof R && e !== s && i(s)
                        }
                    },
                    w.hashnav = {
                        onHashCange: function(e, t) {
                            var i = document.location.hash.replace("#", "");
                            i !== w.slides.eq(w.activeIndex).attr("data-hash") && w.slideTo(w.wrapper.children("." + w.params.slideClass + '[data-hash="' + i + '"]').index())
                        },
                        attachEvents: function(e) {
                            var t = e ? "off" : "on";
                            L(window)[t]("hashchange", w.hashnav.onHashCange)
                        },
                        setHash: function() {
                            if (w.hashnav.initialized && w.params.hashnav)
                                if (w.params.replaceState && window.history && window.history.replaceState)
                                    window.history.replaceState(null, null, "#" + w.slides.eq(w.activeIndex).attr("data-hash") || "");
                                else {
                                    var e = w.slides.eq(w.activeIndex)
                                        , t = e.attr("data-hash") || e.attr("data-history");
                                    document.location.hash = t || ""
                                }
                        },
                        init: function() {
                            if (w.params.hashnav && !w.params.history) {
                                w.hashnav.initialized = !0;
                                var e = document.location.hash.replace("#", "");
                                if (e)
                                    for (var t = 0, i = w.slides.length; t < i; t++) {
                                        var n = w.slides.eq(t);
                                        if ((n.attr("data-hash") || n.attr("data-history")) === e && !n.hasClass(w.params.slideDuplicateClass)) {
                                            var s = n.index();
                                            w.slideTo(s, 0, w.params.runCallbacksOnInit, !0)
                                        }
                                    }
                                w.params.hashnavWatchState && w.hashnav.attachEvents()
                            }
                        },
                        destroy: function() {
                            w.params.hashnavWatchState && w.hashnav.attachEvents(!0)
                        }
                    },
                    w.history = {
                        init: function() {
                            if (w.params.history) {
                                if (!window.history || !window.history.pushState)
                                    return w.params.history = !1,
                                        void (w.params.hashnav = !0);
                                w.history.initialized = !0,
                                    this.paths = this.getPathValues(),
                                (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, w.params.runCallbacksOnInit),
                                w.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                            }
                        },
                        setHistoryPopState: function() {
                            w.history.paths = w.history.getPathValues(),
                                w.history.scrollToSlide(w.params.speed, w.history.paths.value, !1)
                        },
                        getPathValues: function() {
                            var e = window.location.pathname.slice(1).split("/")
                                , t = e.length;
                            return {
                                key: e[t - 2],
                                value: e[t - 1]
                            }
                        },
                        setHistory: function(e, t) {
                            if (w.history.initialized && w.params.history) {
                                var i = w.slides.eq(t)
                                    , n = this.slugify(i.attr("data-history"));
                                window.location.pathname.includes(e) || (n = e + "/" + n),
                                    w.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                            }
                        },
                        slugify: function(e) {
                            return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                        },
                        scrollToSlide: function(e, t, i) {
                            if (t)
                                for (var n = 0, s = w.slides.length; n < s; n++) {
                                    var a = w.slides.eq(n);
                                    if (this.slugify(a.attr("data-history")) === t && !a.hasClass(w.params.slideDuplicateClass)) {
                                        var r = a.index();
                                        w.slideTo(r, e, i)
                                    }
                                }
                            else
                                w.slideTo(0, e, i)
                        }
                    },
                    w.disableKeyboardControl = function() {
                        w.params.keyboardControl = !1,
                            L(document).off("keydown", n)
                    }
                    ,
                    w.enableKeyboardControl = function() {
                        w.params.keyboardControl = !0,
                            L(document).on("keydown", n)
                    }
                    ,
                    w.mousewheel = {
                        event: !1,
                        lastScrollTime: (new window.Date).getTime()
                    },
                w.params.mousewheelControl && (w.mousewheel.event = -1 < navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                    var e = "onwheel"
                        , t = e in document;
                    if (!t) {
                        var i = document.createElement("div");
                        i.setAttribute(e, "return;"),
                            t = "function" == typeof i[e]
                    }
                    return !t && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (t = document.implementation.hasFeature("Events.wheel", "3.0")),
                        t
                }() ? "wheel" : "mousewheel"),
                    w.disableMousewheelControl = function() {
                        if (!w.mousewheel.event)
                            return !1;
                        var e = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (e = L(w.params.mousewheelEventsTarged)),
                            e.off(w.mousewheel.event, s),
                            !0
                    }
                    ,
                    w.enableMousewheelControl = function() {
                        if (!w.mousewheel.event)
                            return !1;
                        var e = w.container;
                        return "container" !== w.params.mousewheelEventsTarged && (e = L(w.params.mousewheelEventsTarged)),
                            e.on(w.mousewheel.event, s),
                            !0
                    }
                    ,
                    w.parallax = {
                        setTranslate: function() {
                            w.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                a(this, w.progress)
                            }),
                                w.slides.each(function() {
                                    var e = L(this);
                                    e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        a(this, Math.min(Math.max(e[0].progress, -1), 1))
                                    })
                                })
                        },
                        setTransition: function(i) {
                            void 0 === i && (i = w.params.speed),
                                w.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var e = L(this)
                                        , t = parseInt(e.attr("data-swiper-parallax-duration"), 10) || i;
                                    0 === i && (t = 0),
                                        e.transition(t)
                                })
                        }
                    },
                    w.zoom = {
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            slide: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            image: void 0,
                            imageWrap: void 0,
                            zoomMax: w.params.zoomMax
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        },
                        getDistanceBetweenTouches: function(e) {
                            if (e.targetTouches.length < 2)
                                return 1;
                            var t = e.targetTouches[0].pageX
                                , i = e.targetTouches[0].pageY
                                , n = e.targetTouches[1].pageX
                                , s = e.targetTouches[1].pageY;
                            return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2))
                        },
                        onGestureStart: function(e) {
                            var t = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2)
                                    return;
                                t.gesture.scaleStart = t.getDistanceBetweenTouches(e)
                            }
                            return t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = L(this),
                            0 === t.gesture.slide.length && (t.gesture.slide = w.slides.eq(w.activeIndex)),
                                t.gesture.image = t.gesture.slide.find("img, svg, canvas"),
                                t.gesture.imageWrap = t.gesture.image.parent("." + w.params.zoomContainerClass),
                                t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || w.params.zoomMax,
                            0 !== t.gesture.imageWrap.length) ? (t.gesture.image.transition(0),
                                void (t.isScaling = !0)) : void (t.gesture.image = void 0)
                        },
                        onGestureChange: function(e) {
                            var t = w.zoom;
                            if (!w.support.gestures) {
                                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                                    return;
                                t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                            }
                            t.gesture.image && 0 !== t.gesture.image.length && (w.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                            t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                            t.scale < w.params.zoomMin && (t.scale = w.params.zoomMin + 1 - Math.pow(w.params.zoomMin - t.scale + 1, .5)),
                                t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                        },
                        onGestureEnd: function(e) {
                            var t = w.zoom;
                            !w.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), w.params.zoomMin),
                                t.gesture.image.transition(w.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                                t.currentScale = t.scale,
                                t.isScaling = !1,
                            1 === t.scale && (t.gesture.slide = void 0))
                        },
                        onTouchStart: function(e, t) {
                            var i = e.zoom;
                            i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                                i.image.isTouched = !0,
                                i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                                i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                        },
                        onTouchMove: function(e) {
                            var t = w.zoom;
                            if (t.gesture.image && 0 !== t.gesture.image.length && (w.allowClick = !1,
                                t.image.isTouched && t.gesture.slide)) {
                                t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                                    t.image.height = t.gesture.image[0].offsetHeight,
                                    t.image.startX = w.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                                    t.image.startY = w.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                                    t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                                    t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                                    t.gesture.imageWrap.transition(0),
                                w.rtl && (t.image.startX = -t.image.startX),
                                w.rtl && (t.image.startY = -t.image.startY));
                                var i = t.image.width * t.scale
                                    , n = t.image.height * t.scale;
                                if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                                    if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                                            t.image.maxX = -t.image.minX,
                                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0),
                                            t.image.maxY = -t.image.minY,
                                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                        !t.image.isMoved && !t.isScaling) {
                                        if (w.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                            return void (t.image.isTouched = !1);
                                        if (!w.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                            return void (t.image.isTouched = !1)
                                    }
                                    e.preventDefault(),
                                        e.stopPropagation(),
                                        t.image.isMoved = !0,
                                        t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                                        t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                                    t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                                    t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                                    t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                                    t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                                    t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                                    t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                                    t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                                        t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                                        t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                                    Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                                    Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                                        t.velocity.prevPositionX = t.image.touchesCurrent.x,
                                        t.velocity.prevPositionY = t.image.touchesCurrent.y,
                                        t.velocity.prevTime = Date.now(),
                                        t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                                }
                            }
                        },
                        onTouchEnd: function(e, t) {
                            var i = e.zoom;
                            if (i.gesture.image && 0 !== i.gesture.image.length) {
                                if (!i.image.isTouched || !i.image.isMoved)
                                    return i.image.isTouched = !1,
                                        void (i.image.isMoved = !1);
                                i.image.isTouched = !1,
                                    i.image.isMoved = !1;
                                var n = 300
                                    , s = 300
                                    , a = i.velocity.x * n
                                    , r = i.image.currentX + a
                                    , o = i.velocity.y * s
                                    , l = i.image.currentY + o;
                                0 !== i.velocity.x && (n = Math.abs((r - i.image.currentX) / i.velocity.x)),
                                0 !== i.velocity.y && (s = Math.abs((l - i.image.currentY) / i.velocity.y));
                                var u = Math.max(n, s);
                                i.image.currentX = r,
                                    i.image.currentY = l;
                                var c = i.image.width * i.scale
                                    , h = i.image.height * i.scale;
                                i.image.minX = Math.min(i.gesture.slideWidth / 2 - c / 2, 0),
                                    i.image.maxX = -i.image.minX,
                                    i.image.minY = Math.min(i.gesture.slideHeight / 2 - h / 2, 0),
                                    i.image.maxY = -i.image.minY,
                                    i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX),
                                    i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY),
                                    i.gesture.imageWrap.transition(u).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                            }
                        },
                        onTransitionEnd: function(e) {
                            var t = e.zoom;
                            t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                                t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                                t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                                t.scale = t.currentScale = 1)
                        },
                        toggleZoom: function(e, t) {
                            var i, n, s, a, r, o, l, u, c, h, p, d, f, m, g, v, y = e.zoom;
                            (y.gesture.slide || (y.gesture.slide = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex),
                                y.gesture.image = y.gesture.slide.find("img, svg, canvas"),
                                y.gesture.imageWrap = y.gesture.image.parent("." + e.params.zoomContainerClass)),
                            y.gesture.image && 0 !== y.gesture.image.length) && (void 0 === y.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX,
                                n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = y.image.touchesStart.x,
                                n = y.image.touchesStart.y),
                                y.scale && 1 !== y.scale ? (y.scale = y.currentScale = 1,
                                    y.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                                    y.gesture.slide = void 0) : (y.scale = y.currentScale = y.gesture.imageWrap.attr("data-swiper-zoom") || e.params.zoomMax,
                                    t ? (g = y.gesture.slide[0].offsetWidth,
                                        v = y.gesture.slide[0].offsetHeight,
                                        s = y.gesture.slide.offset().left + g / 2 - i,
                                        a = y.gesture.slide.offset().top + v / 2 - n,
                                        l = y.gesture.image[0].offsetWidth,
                                        u = y.gesture.image[0].offsetHeight,
                                        c = l * y.scale,
                                        h = u * y.scale,
                                        f = -(p = Math.min(g / 2 - c / 2, 0)),
                                        m = -(d = Math.min(v / 2 - h / 2, 0)),
                                    (r = s * y.scale) < p && (r = p),
                                    f < r && (r = f),
                                    (o = a * y.scale) < d && (o = d),
                                    m < o && (o = m)) : o = r = 0,
                                    y.gesture.imageWrap.transition(300).transform("translate3d(" + r + "px, " + o + "px,0)"),
                                    y.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")")))
                        },
                        attachEvents: function(e) {
                            var i = e ? "off" : "on";
                            if (w.params.zoom) {
                                var t = (w.slides,
                                !("touchstart" !== w.touchEvents.start || !w.support.passiveListener || !w.params.passiveListeners) && {
                                    passive: !0,
                                    capture: !1
                                });
                                w.support.gestures ? (w.slides[i]("gesturestart", w.zoom.onGestureStart, t),
                                    w.slides[i]("gesturechange", w.zoom.onGestureChange, t),
                                    w.slides[i]("gestureend", w.zoom.onGestureEnd, t)) : "touchstart" === w.touchEvents.start && (w.slides[i](w.touchEvents.start, w.zoom.onGestureStart, t),
                                    w.slides[i](w.touchEvents.move, w.zoom.onGestureChange, t),
                                    w.slides[i](w.touchEvents.end, w.zoom.onGestureEnd, t)),
                                    w[i]("touchStart", w.zoom.onTouchStart),
                                    w.slides.each(function(e, t) {
                                        0 < L(t).find("." + w.params.zoomContainerClass).length && L(t)[i](w.touchEvents.move, w.zoom.onTouchMove)
                                    }),
                                    w[i]("touchEnd", w.zoom.onTouchEnd),
                                    w[i]("transitionEnd", w.zoom.onTransitionEnd),
                                w.params.zoomToggle && w.on("doubleTap", w.zoom.toggleZoom)
                            }
                        },
                        init: function() {
                            w.zoom.attachEvents()
                        },
                        destroy: function() {
                            w.zoom.attachEvents(!0)
                        }
                    },
                    w._plugins = [],
                    w.plugins) {
                    var H = w.plugins[I](w, w.params[I]);
                    H && w._plugins.push(H)
                }
                return w.callPlugins = function(e) {
                    for (var t = 0; t < w._plugins.length; t++)
                        e in w._plugins[t] && w._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                    ,
                    w.emitterEventListeners = {},
                    w.emit = function(e) {
                        var t;
                        if (w.params[e] && w.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]),
                                w.emitterEventListeners[e])
                            for (t = 0; t < w.emitterEventListeners[e].length; t++)
                                w.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        w.callPlugins && w.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }
                    ,
                    w.on = function(e, t) {
                        return e = r(e),
                        w.emitterEventListeners[e] || (w.emitterEventListeners[e] = []),
                            w.emitterEventListeners[e].push(t),
                            w
                    }
                    ,
                    w.off = function(e, t) {
                        var i;
                        if (e = r(e),
                            void 0 === t)
                            return w.emitterEventListeners[e] = [],
                                w;
                        if (w.emitterEventListeners[e] && 0 !== w.emitterEventListeners[e].length) {
                            for (i = 0; i < w.emitterEventListeners[e].length; i++)
                                w.emitterEventListeners[e][i] === t && w.emitterEventListeners[e].splice(i, 1);
                            return w
                        }
                    }
                    ,
                    w.once = function(e, t) {
                        e = r(e);
                        var i = function() {
                            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                w.off(e, i)
                        };
                        return w.on(e, i),
                            w
                    }
                    ,
                    w.a11y = {
                        makeFocusable: function(e) {
                            return e.attr("tabIndex", "0"),
                                e
                        },
                        addRole: function(e, t) {
                            return e.attr("role", t),
                                e
                        },
                        addLabel: function(e, t) {
                            return e.attr("aria-label", t),
                                e
                        },
                        disable: function(e) {
                            return e.attr("aria-disabled", !0),
                                e
                        },
                        enable: function(e) {
                            return e.attr("aria-disabled", !1),
                                e
                        },
                        onEnterKey: function(e) {
                            13 === e.keyCode && (L(e.target).is(w.params.nextButton) ? (w.onClickNext(e),
                                w.isEnd ? w.a11y.notify(w.params.lastSlideMessage) : w.a11y.notify(w.params.nextSlideMessage)) : L(e.target).is(w.params.prevButton) && (w.onClickPrev(e),
                                w.isBeginning ? w.a11y.notify(w.params.firstSlideMessage) : w.a11y.notify(w.params.prevSlideMessage)),
                            L(e.target).is("." + w.params.bulletClass) && L(e.target)[0].click())
                        },
                        liveRegion: L('<span class="' + w.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(e) {
                            var t = w.a11y.liveRegion;
                            0 !== t.length && (t.html(""),
                                t.html(e))
                        },
                        init: function() {
                            w.params.nextButton && w.nextButton && 0 < w.nextButton.length && (w.a11y.makeFocusable(w.nextButton),
                                w.a11y.addRole(w.nextButton, "button"),
                                w.a11y.addLabel(w.nextButton, w.params.nextSlideMessage)),
                            w.params.prevButton && w.prevButton && 0 < w.prevButton.length && (w.a11y.makeFocusable(w.prevButton),
                                w.a11y.addRole(w.prevButton, "button"),
                                w.a11y.addLabel(w.prevButton, w.params.prevSlideMessage)),
                                L(w.container).append(w.a11y.liveRegion)
                        },
                        initPagination: function() {
                            w.params.pagination && w.params.paginationClickable && w.bullets && w.bullets.length && w.bullets.each(function() {
                                var e = L(this);
                                w.a11y.makeFocusable(e),
                                    w.a11y.addRole(e, "button"),
                                    w.a11y.addLabel(e, w.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                            })
                        },
                        destroy: function() {
                            w.a11y.liveRegion && 0 < w.a11y.liveRegion.length && w.a11y.liveRegion.remove()
                        }
                    },
                    w.init = function() {
                        w.params.loop && w.createLoop(),
                            w.updateContainerSize(),
                            w.updateSlidesSize(),
                            w.updatePagination(),
                        w.params.scrollbar && w.scrollbar && (w.scrollbar.set(),
                        w.params.scrollbarDraggable && w.scrollbar.enableDraggable()),
                        "slide" !== w.params.effect && w.effects[w.params.effect] && (w.params.loop || w.updateProgress(),
                            w.effects[w.params.effect].setTranslate()),
                            w.params.loop ? w.slideTo(w.params.initialSlide + w.loopedSlides, 0, w.params.runCallbacksOnInit) : (w.slideTo(w.params.initialSlide, 0, w.params.runCallbacksOnInit),
                            0 === w.params.initialSlide && (w.parallax && w.params.parallax && w.parallax.setTranslate(),
                            w.lazy && w.params.lazyLoading && (w.lazy.load(),
                                w.lazy.initialImageLoaded = !0))),
                            w.attachEvents(),
                        w.params.observer && w.support.observer && w.initObservers(),
                        w.params.preloadImages && !w.params.lazyLoading && w.preloadImages(),
                        w.params.zoom && w.zoom && w.zoom.init(),
                        w.params.autoplay && w.startAutoplay(),
                        w.params.keyboardControl && w.enableKeyboardControl && w.enableKeyboardControl(),
                        w.params.mousewheelControl && w.enableMousewheelControl && w.enableMousewheelControl(),
                        w.params.hashnavReplaceState && (w.params.replaceState = w.params.hashnavReplaceState),
                        w.params.history && w.history && w.history.init(),
                        w.params.hashnav && w.hashnav && w.hashnav.init(),
                        w.params.a11y && w.a11y && w.a11y.init(),
                            w.emit("onInit", w)
                    }
                    ,
                    w.cleanupStyles = function() {
                        w.container.removeClass(w.classNames.join(" ")).removeAttr("style"),
                            w.wrapper.removeAttr("style"),
                        w.slides && w.slides.length && w.slides.removeClass([w.params.slideVisibleClass, w.params.slideActiveClass, w.params.slideNextClass, w.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                        w.paginationContainer && w.paginationContainer.length && w.paginationContainer.removeClass(w.params.paginationHiddenClass),
                        w.bullets && w.bullets.length && w.bullets.removeClass(w.params.bulletActiveClass),
                        w.params.prevButton && L(w.params.prevButton).removeClass(w.params.buttonDisabledClass),
                        w.params.nextButton && L(w.params.nextButton).removeClass(w.params.buttonDisabledClass),
                        w.params.scrollbar && w.scrollbar && (w.scrollbar.track && w.scrollbar.track.length && w.scrollbar.track.removeAttr("style"),
                        w.scrollbar.drag && w.scrollbar.drag.length && w.scrollbar.drag.removeAttr("style"))
                    }
                    ,
                    w.destroy = function(e, t) {
                        w.detachEvents(),
                            w.stopAutoplay(),
                        w.params.scrollbar && w.scrollbar && w.params.scrollbarDraggable && w.scrollbar.disableDraggable(),
                        w.params.loop && w.destroyLoop(),
                        t && w.cleanupStyles(),
                            w.disconnectObservers(),
                        w.params.zoom && w.zoom && w.zoom.destroy(),
                        w.params.keyboardControl && w.disableKeyboardControl && w.disableKeyboardControl(),
                        w.params.mousewheelControl && w.disableMousewheelControl && w.disableMousewheelControl(),
                        w.params.a11y && w.a11y && w.a11y.destroy(),
                        w.params.history && !w.params.replaceState && window.removeEventListener("popstate", w.history.setHistoryPopState),
                        w.params.hashnav && w.hashnav && w.hashnav.destroy(),
                            w.emit("onDestroy"),
                        !1 !== e && (w = null)
                    }
                    ,
                    w.init(),
                    w
            }
        };
        R.prototype = {
            isSafari: (l = window.navigator.userAgent.toLowerCase(),
            0 <= l.indexOf("safari") && l.indexOf("chrome") < 0 && l.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && 1 < window.navigator.msMaxTouchPoints || window.navigator.pointerEnabled && 1 < window.navigator.maxTouchPoints,
                lteIE9: (o = document.createElement("div"),
                    o.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                1 === o.getElementsByTagName("i").length)
            },
            device: (i = window.navigator.userAgent,
                n = i.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = i.match(/(iPad).*OS\s([\d_]+)/),
                a = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !s && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                {
                    ios: s || r || a,
                    android: n
                }),
            support: {
                touch: window.Modernizr && !0 === Modernizr.touch || !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch),
                transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || (t = document.createElement("div").style,
                "webkitPerspective"in t || "MozPerspective"in t || "OPerspective"in t || "MsPerspective"in t || "perspective"in t),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                        if (t[i]in e)
                            return !0
                }(),
                observer: "MutationObserver"in window || "WebkitMutationObserver"in window,
                passiveListener: function() {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                e = !0
                            }
                        });
                        window.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart"in window
            },
            plugins: {}
        };
        for (var c = ["jQuery", "Zepto", "Dom7"], h = 0; h < c.length; h++)
            window[c[h]] && e(window[c[h]]);
        (u = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7) && ("transitionEnd"in u.fn || (u.fn.transitionEnd = function(t) {
                function i(e) {
                    if (e.target === this)
                        for (t.call(this, e),
                                 n = 0; n < s.length; n++)
                            a.off(s[n], i)
                }
                var n, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = this;
                if (t)
                    for (n = 0; n < s.length; n++)
                        a.on(s[n], i);
                return this
            }
        ),
        "transform"in u.fn || (u.fn.transform = function(e) {
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                }
                return this
            }
        ),
        "transition"in u.fn || (u.fn.transition = function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                }
                return this
            }
        ),
        "outerWidth"in u.fn || (u.fn.outerWidth = function(e) {
                return 0 < this.length ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            }
        )),
            window.Swiper = R
    }(),
    "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define("swiper", [], function() {
        "use strict";
        return window.Swiper
    }),
    function(n) {
        "use strict";
        n.fn.emulateTransitionEnd = function(e) {
            var t = !1
                , i = this;
            n(this).one("bsTransitionEnd", function() {
                t = !0
            });
            return setTimeout(function() {
                t || n(i).trigger(n.support.transition.end)
            }, e),
                this
        }
            ,
            n(function() {
                n.support.transition = function() {
                    var e = document.createElement("bootstrap")
                        , t = {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd otransitionend",
                        transition: "transitionend"
                    };
                    for (var i in t)
                        if (void 0 !== e.style[i])
                            return {
                                end: t[i]
                            };
                    return !1
                }(),
                n.support.transition && (n.event.special.bsTransitionEnd = {
                    bindType: n.support.transition.end,
                    delegateType: n.support.transition.end,
                    handle: function(e) {
                        if (n(e.target).is(this))
                            return e.handleObj.handler.apply(this, arguments)
                    }
                })
            })
    }(jQuery),
    function(a) {
        "use strict";
        var t = '[data-dismiss="alert"]'
            , r = function(e) {
            a(e).on("click", t, this.close)
        };
        r.VERSION = "3.3.7",
            r.TRANSITION_DURATION = 150,
            r.prototype.close = function(e) {
                var t = a(this)
                    , i = t.attr("data-target");
                i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
                var n = a("#" === i ? [] : i);
                function s() {
                    n.detach().trigger("closed.bs.alert").remove()
                }
                e && e.preventDefault(),
                n.length || (n = t.closest(".alert")),
                    n.trigger(e = a.Event("close.bs.alert")),
                e.isDefaultPrevented() || (n.removeClass("in"),
                    a.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", s).emulateTransitionEnd(r.TRANSITION_DURATION) : s())
            }
        ;
        var e = a.fn.alert;
        a.fn.alert = function(i) {
            return this.each(function() {
                var e = a(this)
                    , t = e.data("bs.alert");
                t || e.data("bs.alert", t = new r(this)),
                "string" == typeof i && t[i].call(e)
            })
        }
            ,
            a.fn.alert.Constructor = r,
            a.fn.alert.noConflict = function() {
                return a.fn.alert = e,
                    this
            }
            ,
            a(document).on("click.bs.alert.data-api", t, r.prototype.close)
    }(jQuery),
    function(s) {
        "use strict";
        var a = function(e, t) {
            this.$element = s(e),
                this.options = s.extend({}, a.DEFAULTS, t)
        };
        a.DEFAULTS = {
            loadingText: "loading..."
        },
            a.prototype.setState = function(e) {
                var t = this.$element
                    , i = t.is("input") ? "val" : "html"
                    , n = t.data();
                e += "Text",
                n.resetText || t.data("resetText", t[i]()),
                    t[i](n[e] || this.options[e]),
                    setTimeout(function() {
                        t.toggleClass("disabled", "loadingText" == e)
                    }, 0)
            }
            ,
            a.prototype.toggle = function() {
                var e = this.$element.closest('[data-toggle="buttons"]');
                e.length && ("radio" === this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change").prop("type") && e.find(".active").removeClass("active"));
                this.$element.toggleClass("active")
            }
        ;
        var e = s.fn.button;
        s.fn.button = function(n) {
            return this.each(function() {
                var e = s(this)
                    , t = e.data("bs.button")
                    , i = "object" == typeof n && n;
                t || e.data("bs.button", t = new a(this,i)),
                    "toggle" == n ? t.toggle() : n && t.setState(n)
            })
        }
            ,
            s.fn.button.Constructor = a,
            s.fn.button.noConflict = function() {
                return s.fn.button = e,
                    this
            }
            ,
            s(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(e) {
                var t = s(e.target);
                t.hasClass("btn") || (t = t.closest(".btn")),
                    t.button("toggle"),
                    e.preventDefault()
            })
    }(jQuery),
    function(u) {
        "use strict";
        var a = function(e, t) {
            this.$element = u(e),
                this.$indicators = this.$element.find(".carousel-indicators"),
                this.options = t,
                this.paused = this.sliding = this.interval = this.$active = this.$items = null,
            "hover" == this.options.pause && this.$element.on("mouseenter", u.proxy(this.pause, this)).on("mouseleave", u.proxy(this.cycle, this))
        };
        a.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        },
            a.prototype.cycle = function(e) {
                return e || (this.paused = !1),
                this.interval && clearInterval(this.interval),
                this.options.interval && !this.paused && (this.interval = setInterval(u.proxy(this.next, this), this.options.interval)),
                    this
            }
            ,
            a.prototype.getActiveIndex = function() {
                return this.$active = this.$element.find(".item.active"),
                    this.$items = this.$active.parent().children(),
                    this.$items.index(this.$active)
            }
            ,
            a.prototype.to = function(e) {
                var t = this
                    , i = this.getActiveIndex();
                if (!(e > this.$items.length - 1 || e < 0))
                    return this.sliding ? this.$element.one("slid", function() {
                        t.to(e)
                    }) : i == e ? this.pause().cycle() : this.slide(i < e ? "next" : "prev", u(this.$items[e]))
            }
            ,
            a.prototype.pause = function(e) {
                return e || (this.paused = !0),
                this.$element.find(".next, .prev").length && u.support.transition.end && (this.$element.trigger(u.support.transition.end),
                    this.cycle(!0)),
                    this.interval = clearInterval(this.interval),
                    this
            }
            ,
            a.prototype.next = function() {
                if (!this.sliding)
                    return this.slide("next")
            }
            ,
            a.prototype.prev = function() {
                if (!this.sliding)
                    return this.slide("prev")
            }
            ,
            a.prototype.slide = function(e, t) {
                var i = this.$element.find(".item.active")
                    , n = t || i[e]()
                    , s = this.interval
                    , a = "next" == e ? "left" : "right"
                    , r = "next" == e ? "first" : "last"
                    , o = this;
                if (!n.length) {
                    if (!this.options.wrap)
                        return;
                    n = this.$element.find(".item")[r]()
                }
                this.sliding = !0,
                s && this.pause();
                var l = u.Event("slide.bs.carousel", {
                    relatedTarget: n[0],
                    direction: a
                });
                if (!n.hasClass("active")) {
                    if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
                            this.$element.one("slid", function() {
                                var e = u(o.$indicators.children()[o.getActiveIndex()]);
                                e && e.addClass("active")
                            })),
                        u.support.transition && this.$element.hasClass("slide")) {
                        if (this.$element.trigger(l),
                                l.isDefaultPrevented())
                            return;
                        n.addClass(e),
                            n[0].offsetWidth,
                            i.addClass(a),
                            n.addClass(a),
                            i.one(u.support.transition.end, function() {
                                n.removeClass([e, a].join(" ")).addClass("active"),
                                    i.removeClass(["active", a].join(" ")),
                                    o.sliding = !1,
                                    setTimeout(function() {
                                        o.$element.trigger("slid")
                                    }, 0)
                            }).emulateTransitionEnd(600)
                    } else {
                        if (this.$element.trigger(l),
                                l.isDefaultPrevented())
                            return;
                        i.fadeOut(600, function() {
                            u(this).removeClass("active").removeAttr("style")
                        }),
                            n.fadeIn(1e3, function() {
                                u(this).addClass("active").removeAttr("style"),
                                    o.sliding = !1,
                                    setTimeout(function() {
                                        o.$element.trigger("slid")
                                    }, 0)
                            })
                    }
                    return s && this.cycle(),
                        this
                }
            }
        ;
        var e = u.fn.carousel;
        u.fn.carousel = function(s) {
            return this.each(function() {
                var e = u(this)
                    , t = e.data("bs.carousel")
                    , i = u.extend({}, a.DEFAULTS, e.data(), "object" == typeof s && s)
                    , n = "string" == typeof s ? s : i.slide;
                t || e.data("bs.carousel", t = new a(this,i)),
                    "number" == typeof s ? t.to(s) : n ? t[n]() : i.interval && t.pause().cycle()
            })
        }
            ,
            u.fn.carousel.Constructor = a,
            u.fn.carousel.noConflict = function() {
                return u.fn.carousel = e,
                    this
            }
            ,
            u(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(e) {
                var t, i = u(this), n = u(i.attr("data-target") || (t = i.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "")), s = u.extend({}, n.data(), i.data()), a = i.attr("data-slide-to");
                a && (s.interval = !1),
                    n.carousel(s),
                (a = i.attr("data-slide-to")) && n.data("bs.carousel").to(a),
                    e.preventDefault()
            }),
            u(window).on("load", function() {
                u('[data-ride="carousel"]').each(function() {
                    var e = u(this);
                    e.carousel(e.data())
                })
            })
    }(jQuery),
    function(a) {
        "use strict";
        var r = function(e, t) {
            this.options = t,
                this.$body = a(document.body),
                this.$element = a(e),
                this.$dialog = this.$element.find(".modal-dialog"),
                this.$backdrop = null,
                this.isShown = null,
                this.originalBodyPad = null,
                this.scrollbarWidth = 0,
                this.ignoreBackdropClick = !1,
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        function o(n, s) {
            return this.each(function() {
                var e = a(this)
                    , t = e.data("bs.modal")
                    , i = a.extend({}, r.DEFAULTS, e.data(), "object" == typeof n && n);
                t || e.data("bs.modal", t = new r(this,i)),
                    "string" == typeof n ? t[n](s) : i.show && t.show(s)
            })
        }
        r.VERSION = "3.3.7",
            r.TRANSITION_DURATION = 300,
            r.BACKDROP_TRANSITION_DURATION = 150,
            r.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            },
            r.prototype.toggle = function(e) {
                return this.isShown ? this.hide() : this.show(e)
            }
            ,
            r.prototype.show = function(i) {
                var n = this
                    , e = a.Event("show.bs.modal", {
                    relatedTarget: i
                });
                this.$element.trigger(e),
                this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
                    this.checkScrollbar(),
                    this.setScrollbar(),
                    this.$body.addClass("modal-open"),
                    this.escape(),
                    this.resize(),
                    this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
                    this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                        n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                            a(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
                        })
                    }),
                    this.backdrop(function() {
                        var e = a.support.transition && n.$element.hasClass("fade");
                        n.$element.parent().length || n.$element.appendTo(n.$body),
                            n.$element.show().scrollTop(0),
                            n.adjustDialog(),
                        e && n.$element[0].offsetWidth,
                            n.$element.addClass("in"),
                            n.enforceFocus();
                        var t = a.Event("shown.bs.modal", {
                            relatedTarget: i
                        });
                        e ? n.$dialog.one("bsTransitionEnd", function() {
                            n.$element.trigger("focus").trigger(t)
                        }).emulateTransitionEnd(r.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(t)
                    }))
            }
            ,
            r.prototype.hide = function(e) {
                e && e.preventDefault(),
                    e = a.Event("hide.bs.modal"),
                    this.$element.trigger(e),
                this.isShown && !e.isDefaultPrevented() && (this.isShown = !1,
                    this.escape(),
                    this.resize(),
                    a(document).off("focusin.bs.modal"),
                    this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                    this.$dialog.off("mousedown.dismiss.bs.modal"),
                    a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
            }
            ,
            r.prototype.enforceFocus = function() {
                a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(e) {
                    document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
                }, this))
            }
            ,
            r.prototype.escape = function() {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(e) {
                    27 == e.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }
            ,
            r.prototype.resize = function() {
                this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
            }
            ,
            r.prototype.hideModal = function() {
                var e = this;
                this.$element.hide(),
                    this.backdrop(function() {
                        e.$body.removeClass("modal-open"),
                            e.resetAdjustments(),
                            e.resetScrollbar(),
                            e.$element.trigger("hidden.bs.modal")
                    })
            }
            ,
            r.prototype.removeBackdrop = function() {
                this.$backdrop && this.$backdrop.remove(),
                    this.$backdrop = null
            }
            ,
            r.prototype.backdrop = function(e) {
                var t = this
                    , i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var n = a.support.transition && i;
                    if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body),
                            this.$element.on("click.dismiss.bs.modal", a.proxy(function(e) {
                                this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                            }, this)),
                        n && this.$backdrop[0].offsetWidth,
                            this.$backdrop.addClass("in"),
                            !e)
                        return;
                    n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var s = function() {
                        t.removeBackdrop(),
                        e && e()
                    };
                    a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : s()
                } else
                    e && e()
            }
            ,
            r.prototype.handleUpdate = function() {
                this.adjustDialog()
            }
            ,
            r.prototype.adjustDialog = function() {
                var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
                });
                var t = a(this.$element[0]).find(".modal-dialog")
                    , i = document.body.clientHeight < document.documentElement.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight
                    , n = t.height()
                    , s = i - n < 0 ? 0 : (i - n) / 2;
                t.css({
                    margin: s + "px auto"
                })
            }
            ,
            r.prototype.resetAdjustments = function() {
                this.$element.css({
                    paddingLeft: "",
                    paddingRight: ""
                })
            }
            ,
            r.prototype.checkScrollbar = function() {
                var e = window.innerWidth;
                if (!e) {
                    var t = document.documentElement.getBoundingClientRect();
                    e = t.right - Math.abs(t.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < e,
                    this.scrollbarWidth = this.measureScrollbar()
            }
            ,
            r.prototype.setScrollbar = function() {
                var e = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "",
                this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
            }
            ,
            r.prototype.resetScrollbar = function() {
                this.$body.css("padding-right", this.originalBodyPad)
            }
            ,
            r.prototype.measureScrollbar = function() {
                var e = document.createElement("div");
                e.className = "modal-scrollbar-measure",
                    this.$body.append(e);
                var t = e.offsetWidth - e.clientWidth;
                return this.$body[0].removeChild(e),
                    t
            }
        ;
        var e = a.fn.modal;
        a.fn.modal = o,
            a.fn.modal.Constructor = r,
            a.fn.modal.noConflict = function() {
                return a.fn.modal = e,
                    this
            }
            ,
            a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
                var t = a(this)
                    , i = t.attr("href")
                    , n = a(t.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, ""))
                    , s = n.data("bs.modal") ? "toggle" : a.extend({
                    remote: !/#/.test(i) && i
                }, n.data(), t.data());
                t.is("a") && e.preventDefault(),
                    n.one("show.bs.modal", function(e) {
                        e.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
                            t.is(":visible") && t.trigger("focus")
                        })
                    }),
                    o.call(n, s, this)
            })
    }(jQuery),
    function(r) {
        "use strict";
        var o = function(e, t) {
            this.$element = r(e),
                this.options = r.extend({}, o.DEFAULTS, t),
                this.$trigger = r('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'),
                this.transitioning = null,
                this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        };
        function s(e) {
            var t, i = e.attr("data-target") || (t = e.attr("href")) && t.replace(/.*(?=#[^\s]+$)/, "");
            return r(i)
        }
        function l(n) {
            return this.each(function() {
                var e = r(this)
                    , t = e.data("bs.collapse")
                    , i = r.extend({}, o.DEFAULTS, e.data(), "object" == typeof n && n);
                !t && i.toggle && /show|hide/.test(n) && (i.toggle = !1),
                t || e.data("bs.collapse", t = new o(this,i)),
                "string" == typeof n && t[n]()
            })
        }
        o.VERSION = "3.3.7",
            o.TRANSITION_DURATION = 350,
            o.DEFAULTS = {
                toggle: !0
            },
            o.prototype.dimension = function() {
                return this.$element.hasClass("width") ? "width" : "height"
            }
            ,
            o.prototype.show = function() {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e, t = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(t && t.length && (e = t.data("bs.collapse")) && e.transitioning)) {
                        var i = r.Event("show.bs.collapse");
                        if (this.$element.trigger(i),
                                !i.isDefaultPrevented()) {
                            t && t.length && (l.call(t, "hide"),
                            e || t.data("bs.collapse", null));
                            var n = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0),
                                this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                                this.transitioning = 1;
                            var s = function() {
                                this.$element.removeClass("collapsing").addClass("collapse in")[n](""),
                                    this.transitioning = 0,
                                    this.$element.trigger("shown.bs.collapse")
                            };
                            if (!r.support.transition)
                                return s.call(this);
                            var a = r.camelCase(["scroll", n].join("-"));
                            this.$element.one("bsTransitionEnd", r.proxy(s, this)).emulateTransitionEnd(o.TRANSITION_DURATION)[n](this.$element[0][a])
                        }
                    }
                }
            }
            ,
            o.prototype.hide = function() {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = r.Event("hide.bs.collapse");
                    if (this.$element.trigger(e),
                            !e.isDefaultPrevented()) {
                        var t = this.dimension();
                        this.$element[t](this.$element[t]())[0].offsetHeight,
                            this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                            this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                            this.transitioning = 1;
                        var i = function() {
                            this.transitioning = 0,
                                this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        if (!r.support.transition)
                            return i.call(this);
                        this.$element[t](0).one("bsTransitionEnd", r.proxy(i, this)).emulateTransitionEnd(o.TRANSITION_DURATION)
                    }
                }
            }
            ,
            o.prototype.toggle = function() {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }
            ,
            o.prototype.getParent = function() {
                return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function(e, t) {
                    var i = r(t);
                    this.addAriaAndCollapsedClass(s(i), i)
                }, this)).end()
            }
            ,
            o.prototype.addAriaAndCollapsedClass = function(e, t) {
                var i = e.hasClass("in");
                e.attr("aria-expanded", i),
                    t.toggleClass("collapsed", !i).attr("aria-expanded", i)
            }
        ;
        var e = r.fn.collapse;
        r.fn.collapse = l,
            r.fn.collapse.Constructor = o,
            r.fn.collapse.noConflict = function() {
                return r.fn.collapse = e,
                    this
            }
            ,
            r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
                var t = r(this);
                t.attr("data-target") || e.preventDefault();
                var i = s(t)
                    , n = i.data("bs.collapse") ? "toggle" : t.data();
                l.call(i, n)
            })
    }(jQuery),
    function(r) {
        "use strict";
        var o = '[data-toggle="dropdown"]'
            , n = function(e) {
            r(e).on("click.bs.dropdown", this.toggle)
        };
        function l(e) {
            var t = e.attr("data-target");
            t || (t = (t = e.attr("href")) && /#[A-Za-z]/.test(t) && t.replace(/.*(?=#[^\s]*$)/, ""));
            var i = t && r(t);
            return i && i.length ? i : e.parent()
        }
        function a(n) {
            n && 3 === n.which || (r(".dropdown-backdrop").remove(),
                r(o).each(function() {
                    var e = r(this)
                        , t = l(e)
                        , i = {
                        relatedTarget: this
                    };
                    t.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && r.contains(t[0], n.target) || (t.trigger(n = r.Event("hide.bs.dropdown", i)),
                    n.isDefaultPrevented() || (e.attr("aria-expanded", "false"),
                        t.removeClass("open").trigger(r.Event("hidden.bs.dropdown", i)))))
                }))
        }
        n.VERSION = "3.3.7",
            n.prototype.toggle = function(e) {
                var t = r(this);
                if (!t.is(".disabled, :disabled")) {
                    var i = l(t)
                        , n = i.hasClass("open");
                    if (a(),
                            !n) {
                        "ontouchstart"in document.documentElement && !i.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", a);
                        var s = {
                            relatedTarget: this
                        };
                        if (i.trigger(e = r.Event("show.bs.dropdown", s)),
                                e.isDefaultPrevented())
                            return;
                        t.trigger("focus").attr("aria-expanded", "true"),
                            i.toggleClass("open").trigger(r.Event("shown.bs.dropdown", s))
                    }
                    return !1
                }
            }
            ,
            n.prototype.keydown = function(e) {
                if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                    var t = r(this);
                    if (e.preventDefault(),
                            e.stopPropagation(),
                            !t.is(".disabled, :disabled")) {
                        var i = l(t)
                            , n = i.hasClass("open");
                        if (!n && 27 != e.which || n && 27 == e.which)
                            return 27 == e.which && i.find(o).trigger("focus"),
                                t.trigger("click");
                        var s = i.find(".dropdown-menu li:not(.disabled):visible a");
                        if (s.length) {
                            var a = s.index(e.target);
                            38 == e.which && 0 < a && a--,
                            40 == e.which && a < s.length - 1 && a++,
                            ~a || (a = 0),
                                s.eq(a).trigger("focus")
                        }
                    }
                }
            }
        ;
        var e = r.fn.dropdown;
        r.fn.dropdown = function(i) {
            return this.each(function() {
                var e = r(this)
                    , t = e.data("bs.dropdown");
                t || e.data("bs.dropdown", t = new n(this)),
                "string" == typeof i && t[i].call(e)
            })
        }
            ,
            r.fn.dropdown.Constructor = n,
            r.fn.dropdown.noConflict = function() {
                return r.fn.dropdown = e,
                    this
            }
            ,
            r(document).on("click.bs.dropdown.data-api", a).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
                e.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, n.prototype.toggle).on("keydown.bs.dropdown.data-api", o, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
    }(jQuery),
    function(m) {
        "use strict";
        var g = function(e, t) {
            this.type = null,
                this.options = null,
                this.enabled = null,
                this.timeout = null,
                this.hoverState = null,
                this.$element = null,
                this.inState = null,
                this.init("tooltip", e, t)
        };
        g.VERSION = "3.3.7",
            g.TRANSITION_DURATION = 150,
            g.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {
                    selector: "body",
                    padding: 0
                }
            },
            g.prototype.init = function(e, t, i) {
                if (this.enabled = !0,
                        this.type = e,
                        this.$element = m(t),
                        this.options = this.getOptions(i),
                        this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
                        this.inState = {
                            click: !1,
                            hover: !1,
                            focus: !1
                        },
                    this.$element[0]instanceof document.constructor && !this.options.selector)
                    throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var n = this.options.trigger.split(" "), s = n.length; s--; ) {
                    var a = n[s];
                    if ("click" == a)
                        this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
                    else if ("manual" != a) {
                        var r = "hover" == a ? "mouseenter" : "focusin"
                            , o = "hover" == a ? "mouseleave" : "focusout";
                        this.$element.on(r + "." + this.type, this.options.selector, m.proxy(this.enter, this)),
                            this.$element.on(o + "." + this.type, this.options.selector, m.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = m.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }
            ,
            g.prototype.getDefaults = function() {
                return g.DEFAULTS
            }
            ,
            g.prototype.getOptions = function(e) {
                return (e = m.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }),
                    e
            }
            ,
            g.prototype.getDelegateOptions = function() {
                var i = {}
                    , n = this.getDefaults();
                return this._options && m.each(this._options, function(e, t) {
                    n[e] != t && (i[e] = t)
                }),
                    i
            }
            ,
            g.prototype.enter = function(e) {
                var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
                if (t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                        m(e.currentTarget).data("bs." + this.type, t)),
                    e instanceof m.Event && (t.inState["focusin" == e.type ? "focus" : "hover"] = !0),
                    t.tip().hasClass("in") || "in" == t.hoverState)
                    t.hoverState = "in";
                else {
                    if (clearTimeout(t.timeout),
                            t.hoverState = "in",
                        !t.options.delay || !t.options.delay.show)
                        return t.show();
                    t.timeout = setTimeout(function() {
                        "in" == t.hoverState && t.show()
                    }, t.options.delay.show)
                }
            }
            ,
            g.prototype.isInStateTrue = function() {
                for (var e in this.inState)
                    if (this.inState[e])
                        return !0;
                return !1
            }
            ,
            g.prototype.leave = function(e) {
                var t = e instanceof this.constructor ? e : m(e.currentTarget).data("bs." + this.type);
                if (t || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                        m(e.currentTarget).data("bs." + this.type, t)),
                    e instanceof m.Event && (t.inState["focusout" == e.type ? "focus" : "hover"] = !1),
                        !t.isInStateTrue()) {
                    if (clearTimeout(t.timeout),
                            t.hoverState = "out",
                        !t.options.delay || !t.options.delay.hide)
                        return t.hide();
                    t.timeout = setTimeout(function() {
                        "out" == t.hoverState && t.hide()
                    }, t.options.delay.hide)
                }
            }
            ,
            g.prototype.show = function() {
                var e = m.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var t = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !t)
                        return;
                    var i = this
                        , n = this.tip()
                        , s = this.getUID(this.type);
                    this.setContent(),
                        n.attr("id", s),
                        this.$element.attr("aria-describedby", s),
                    this.options.animation && n.addClass("fade");
                    var a = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement
                        , r = /\s?auto?\s?/i
                        , o = r.test(a);
                    o && (a = a.replace(r, "") || "top"),
                        n.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(a).data("bs." + this.type, this),
                        this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element),
                        this.$element.trigger("inserted.bs." + this.type);
                    var l = this.getPosition()
                        , u = n[0].offsetWidth
                        , c = n[0].offsetHeight;
                    if (o) {
                        var h = a
                            , p = this.getPosition(this.$viewport);
                        a = "bottom" == a && l.bottom + c > p.bottom ? "top" : "top" == a && l.top - c < p.top ? "bottom" : "right" == a && l.right + u > p.width ? "left" : "left" == a && l.left - u < p.left ? "right" : a,
                            n.removeClass(h).addClass(a)
                    }
                    var d = this.getCalculatedOffset(a, l, u, c);
                    this.applyPlacement(d, a);
                    var f = function() {
                        var e = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type),
                            i.hoverState = null,
                        "out" == e && i.leave(i)
                    };
                    m.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", f).emulateTransitionEnd(g.TRANSITION_DURATION) : f()
                }
            }
            ,
            g.prototype.applyPlacement = function(e, t) {
                var i = this.tip()
                    , n = i[0].offsetWidth
                    , s = i[0].offsetHeight
                    , a = parseInt(i.css("margin-top"), 10)
                    , r = parseInt(i.css("margin-left"), 10);
                isNaN(a) && (a = 0),
                isNaN(r) && (r = 0),
                    e.top += a,
                    e.left += r,
                    m.offset.setOffset(i[0], m.extend({
                        using: function(e) {
                            i.css({
                                top: Math.round(e.top),
                                left: Math.round(e.left)
                            })
                        }
                    }, e), 0),
                    i.addClass("in");
                var o = i[0].offsetWidth
                    , l = i[0].offsetHeight;
                "top" == t && l != s && (e.top = e.top + s - l);
                var u = this.getViewportAdjustedDelta(t, e, o, l);
                u.left ? e.left += u.left : e.top += u.top;
                var c = /top|bottom/.test(t)
                    , h = c ? 2 * u.left - n + o : 2 * u.top - s + l
                    , p = c ? "offsetWidth" : "offsetHeight";
                i.offset(e),
                    this.replaceArrow(h, i[0][p], c)
            }
            ,
            g.prototype.replaceArrow = function(e, t, i) {
                this.arrow().css(i ? "left" : "top", 50 * (1 - e / t) + "%").css(i ? "top" : "left", "")
            }
            ,
            g.prototype.setContent = function() {
                var e = this.tip()
                    , t = this.getTitle();
                e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
                    e.removeClass("fade in top bottom left right")
            }
            ,
            g.prototype.hide = function(e) {
                var t = this
                    , i = m(this.$tip)
                    , n = m.Event("hide.bs." + this.type);
                function s() {
                    "in" != t.hoverState && i.detach(),
                    t.$element && t.$element.removeAttr("aria-describedby").trigger("hidden.bs." + t.type),
                    e && e()
                }
                if (this.$element.trigger(n),
                        !n.isDefaultPrevented())
                    return i.removeClass("in"),
                        m.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", s).emulateTransitionEnd(g.TRANSITION_DURATION) : s(),
                        this.hoverState = null,
                        this
            }
            ,
            g.prototype.fixTitle = function() {
                var e = this.$element;
                (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
            }
            ,
            g.prototype.hasContent = function() {
                return this.getTitle()
            }
            ,
            g.prototype.getPosition = function(e) {
                var t = (e = e || this.$element)[0]
                    , i = "BODY" == t.tagName
                    , n = t.getBoundingClientRect();
                null == n.width && (n = m.extend({}, n, {
                    width: n.right - n.left,
                    height: n.bottom - n.top
                }));
                var s = window.SVGElement && t instanceof window.SVGElement
                    , a = i ? {
                    top: 0,
                    left: 0
                } : s ? null : e.offset()
                    , r = {
                    scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
                }
                    , o = i ? {
                    width: m(window).width(),
                    height: m(window).height()
                } : null;
                return m.extend({}, n, r, o, a)
            }
            ,
            g.prototype.getCalculatedOffset = function(e, t, i, n) {
                return "bottom" == e ? {
                    top: t.top + t.height,
                    left: t.left + t.width / 2 - i / 2
                } : "top" == e ? {
                    top: t.top - n,
                    left: t.left + t.width / 2 - i / 2
                } : "left" == e ? {
                    top: t.top + t.height / 2 - n / 2,
                    left: t.left - i
                } : {
                    top: t.top + t.height / 2 - n / 2,
                    left: t.left + t.width
                }
            }
            ,
            g.prototype.getViewportAdjustedDelta = function(e, t, i, n) {
                var s = {
                    top: 0,
                    left: 0
                };
                if (!this.$viewport)
                    return s;
                var a = this.options.viewport && this.options.viewport.padding || 0
                    , r = this.getPosition(this.$viewport);
                if (/right|left/.test(e)) {
                    var o = t.top - a - r.scroll
                        , l = t.top + a - r.scroll + n;
                    o < r.top ? s.top = r.top - o : l > r.top + r.height && (s.top = r.top + r.height - l)
                } else {
                    var u = t.left - a
                        , c = t.left + a + i;
                    u < r.left ? s.left = r.left - u : c > r.right && (s.left = r.left + r.width - c)
                }
                return s
            }
            ,
            g.prototype.getTitle = function() {
                var e = this.$element
                    , t = this.options;
                return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
            }
            ,
            g.prototype.getUID = function(e) {
                for (; e += ~~(1e6 * Math.random()),
                           document.getElementById(e); )
                    ;
                return e
            }
            ,
            g.prototype.tip = function() {
                if (!this.$tip && (this.$tip = m(this.options.template),
                    1 != this.$tip.length))
                    throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }
            ,
            g.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }
            ,
            g.prototype.enable = function() {
                this.enabled = !0
            }
            ,
            g.prototype.disable = function() {
                this.enabled = !1
            }
            ,
            g.prototype.toggleEnabled = function() {
                this.enabled = !this.enabled
            }
            ,
            g.prototype.toggle = function(e) {
                var t = this;
                e && ((t = m(e.currentTarget).data("bs." + this.type)) || (t = new this.constructor(e.currentTarget,this.getDelegateOptions()),
                    m(e.currentTarget).data("bs." + this.type, t))),
                    e ? (t.inState.click = !t.inState.click,
                        t.isInStateTrue() ? t.enter(t) : t.leave(t)) : t.tip().hasClass("in") ? t.leave(t) : t.enter(t)
            }
            ,
            g.prototype.destroy = function() {
                var e = this;
                clearTimeout(this.timeout),
                    this.hide(function() {
                        e.$element.off("." + e.type).removeData("bs." + e.type),
                        e.$tip && e.$tip.detach(),
                            e.$tip = null,
                            e.$arrow = null,
                            e.$viewport = null,
                            e.$element = null
                    })
            }
        ;
        var e = m.fn.tooltip;
        m.fn.tooltip = function(n) {
            return this.each(function() {
                var e = m(this)
                    , t = e.data("bs.tooltip")
                    , i = "object" == typeof n && n;
                !t && /destroy|hide/.test(n) || (t || e.data("bs.tooltip", t = new g(this,i)),
                "string" == typeof n && t[n]())
            })
        }
            ,
            m.fn.tooltip.Constructor = g,
            m.fn.tooltip.noConflict = function() {
                return m.fn.tooltip = e,
                    this
            }
    }(jQuery),
    function(s) {
        "use strict";
        var a = function(e, t) {
            this.init("popover", e, t)
        };
        if (!s.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        a.VERSION = "3.3.7",
            a.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            ((a.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = a).prototype.getDefaults = function() {
                return a.DEFAULTS
            }
            ,
            a.prototype.setContent = function() {
                var e = this.tip()
                    , t = this.getTitle()
                    , i = this.getContent();
                e.find(".popover-title")[this.options.html ? "html" : "text"](t),
                    e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i),
                    e.removeClass("fade top bottom left right in"),
                e.find(".popover-title").html() || e.find(".popover-title").hide()
            }
            ,
            a.prototype.hasContent = function() {
                return this.getTitle() || this.getContent()
            }
            ,
            a.prototype.getContent = function() {
                var e = this.$element
                    , t = this.options;
                return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
            }
            ,
            a.prototype.arrow = function() {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            }
        ;
        var e = s.fn.popover;
        s.fn.popover = function(n) {
            return this.each(function() {
                var e = s(this)
                    , t = e.data("bs.popover")
                    , i = "object" == typeof n && n;
                !t && /destroy|hide/.test(n) || (t || e.data("bs.popover", t = new a(this,i)),
                "string" == typeof n && t[n]())
            })
        }
            ,
            s.fn.popover.Constructor = a,
            s.fn.popover.noConflict = function() {
                return s.fn.popover = e,
                    this
            }
    }(jQuery),
    function(a) {
        "use strict";
        function s(e, t) {
            this.$body = a(document.body),
                this.$scrollElement = a(e).is(document.body) ? a(window) : a(e),
                this.options = a.extend({}, s.DEFAULTS, t),
                this.selector = (this.options.target || "") + " .nav li > a",
                this.offsets = [],
                this.targets = [],
                this.activeTarget = null,
                this.scrollHeight = 0,
                this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
                this.refresh(),
                this.process()
        }
        function t(n) {
            return this.each(function() {
                var e = a(this)
                    , t = e.data("bs.scrollspy")
                    , i = "object" == typeof n && n;
                t || e.data("bs.scrollspy", t = new s(this,i)),
                "string" == typeof n && t[n]()
            })
        }
        s.VERSION = "3.3.7",
            s.DEFAULTS = {
                offset: 10
            },
            s.prototype.getScrollHeight = function() {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            s.prototype.refresh = function() {
                var e = this
                    , n = "offset"
                    , s = 0;
                this.offsets = [],
                    this.targets = [],
                    this.scrollHeight = this.getScrollHeight(),
                a.isWindow(this.$scrollElement[0]) || (n = "position",
                    s = this.$scrollElement.scrollTop()),
                    this.$body.find(this.selector).map(function() {
                        var e = a(this)
                            , t = e.data("target") || e.attr("href")
                            , i = /^#./.test(t) && a(t);
                        return i && i.length && i.is(":visible") && [[i[n]().top + s, t]] || null
                    }).sort(function(e, t) {
                        return e[0] - t[0]
                    }).each(function() {
                        e.offsets.push(this[0]),
                            e.targets.push(this[1])
                    })
            }
            ,
            s.prototype.process = function() {
                var e, t = this.$scrollElement.scrollTop() + this.options.offset, i = this.getScrollHeight(), n = this.options.offset + i - this.$scrollElement.height(), s = this.offsets, a = this.targets, r = this.activeTarget;
                if (this.scrollHeight != i && this.refresh(),
                    n <= t)
                    return r != (e = a[a.length - 1]) && this.activate(e);
                if (r && t < s[0])
                    return this.activeTarget = null,
                        this.clear();
                for (e = s.length; e--; )
                    r != a[e] && t >= s[e] && (void 0 === s[e + 1] || t < s[e + 1]) && this.activate(a[e])
            }
            ,
            s.prototype.activate = function(e) {
                this.activeTarget = e,
                    this.clear();
                var t = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]'
                    , i = a(t).parents("li").addClass("active");
                i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")),
                    i.trigger("activate.bs.scrollspy")
            }
            ,
            s.prototype.clear = function() {
                a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            }
        ;
        var e = a.fn.scrollspy;
        a.fn.scrollspy = t,
            a.fn.scrollspy.Constructor = s,
            a.fn.scrollspy.noConflict = function() {
                return a.fn.scrollspy = e,
                    this
            }
            ,
            a(window).on("load.bs.scrollspy.data-api", function() {
                a('[data-spy="scroll"]').each(function() {
                    var e = a(this);
                    t.call(e, e.data())
                })
            })
    }(jQuery),
    function(o) {
        "use strict";
        var r = function(e) {
            this.element = o(e)
        };
        function t(i) {
            return this.each(function() {
                var e = o(this)
                    , t = e.data("bs.tab");
                t || e.data("bs.tab", t = new r(this)),
                "string" == typeof i && t[i]()
            })
        }
        r.VERSION = "3.3.7",
            r.TRANSITION_DURATION = 150,
            r.prototype.show = function() {
                var e = this.element
                    , t = e.closest("ul:not(.dropdown-menu)")
                    , i = e.data("target");
                if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")),
                        !e.parent("li").hasClass("active")) {
                    var n = t.find(".active:last a")
                        , s = o.Event("hide.bs.tab", {
                        relatedTarget: e[0]
                    })
                        , a = o.Event("show.bs.tab", {
                        relatedTarget: n[0]
                    });
                    if (n.trigger(s),
                            e.trigger(a),
                        !a.isDefaultPrevented() && !s.isDefaultPrevented()) {
                        var r = o(i);
                        this.activate(e.closest("li"), t),
                            this.activate(r, r.parent(), function() {
                                n.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }),
                                    e.trigger({
                                        type: "shown.bs.tab",
                                        relatedTarget: n[0]
                                    })
                            })
                    }
                }
            }
            ,
            r.prototype.activate = function(e, t, i) {
                var n = t.find("> .active")
                    , s = i && o.support.transition && (n.length && n.hasClass("fade") || !!t.find("> .fade").length);
                function a() {
                    n.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                        e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                        s ? (e[0].offsetWidth,
                            e.addClass("in")) : e.removeClass("fade"),
                    e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                    i && i()
                }
                n.length && s ? n.one("bsTransitionEnd", a).emulateTransitionEnd(r.TRANSITION_DURATION) : a(),
                    n.removeClass("in")
            }
        ;
        var e = o.fn.tab;
        o.fn.tab = t,
            o.fn.tab.Constructor = r,
            o.fn.tab.noConflict = function() {
                return o.fn.tab = e,
                    this
            }
        ;
        var i = function(e) {
            e.preventDefault(),
                t.call(o(this), "show")
        };
        o(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
    }(jQuery),
    function(l) {
        "use strict";
        var u = function(e, t) {
            this.options = l.extend({}, u.DEFAULTS, t),
                this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)),
                this.$element = l(e),
                this.affixed = null,
                this.unpin = null,
                this.pinnedOffset = null,
                this.checkPosition()
        };
        function i(n) {
            return this.each(function() {
                var e = l(this)
                    , t = e.data("bs.affix")
                    , i = "object" == typeof n && n;
                t || e.data("bs.affix", t = new u(this,i)),
                "string" == typeof n && t[n]()
            })
        }
        u.VERSION = "3.3.7",
            u.RESET = "affix affix-top affix-bottom",
            u.DEFAULTS = {
                offset: 0,
                target: window
            },
            u.prototype.getState = function(e, t, i, n) {
                var s = this.$target.scrollTop()
                    , a = this.$element.offset()
                    , r = this.$target.height();
                if (null != i && "top" == this.affixed)
                    return s < i && "top";
                if ("bottom" == this.affixed)
                    return null != i ? !(s + this.unpin <= a.top) && "bottom" : !(s + r <= e - n) && "bottom";
                var o = null == this.affixed
                    , l = o ? s : a.top;
                return null != i && s <= i ? "top" : null != n && e - n <= l + (o ? r : t) && "bottom"
            }
            ,
            u.prototype.getPinnedOffset = function() {
                if (this.pinnedOffset)
                    return this.pinnedOffset;
                this.$element.removeClass(u.RESET).addClass("affix");
                var e = this.$target.scrollTop()
                    , t = this.$element.offset();
                return this.pinnedOffset = t.top - e
            }
            ,
            u.prototype.checkPositionWithEventLoop = function() {
                setTimeout(l.proxy(this.checkPosition, this), 1)
            }
            ,
            u.prototype.checkPosition = function() {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height()
                        , t = this.options.offset
                        , i = t.top
                        , n = t.bottom
                        , s = Math.max(l(document).height(), l(document.body).height());
                    "object" != typeof t && (n = i = t),
                    "function" == typeof i && (i = t.top(this.$element)),
                    "function" == typeof n && (n = t.bottom(this.$element));
                    var a = this.getState(s, e, i, n);
                    if (this.affixed != a) {
                        null != this.unpin && this.$element.css("top", "");
                        var r = "affix" + (a ? "-" + a : "")
                            , o = l.Event(r + ".bs.affix");
                        if (this.$element.trigger(o),
                                o.isDefaultPrevented())
                            return;
                        this.affixed = a,
                            this.unpin = "bottom" == a ? this.getPinnedOffset() : null,
                            this.$element.removeClass(u.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == a && this.$element.offset({
                        top: s - e - n
                    })
                }
            }
        ;
        var e = l.fn.affix;
        l.fn.affix = i,
            l.fn.affix.Constructor = u,
            l.fn.affix.noConflict = function() {
                return l.fn.affix = e,
                    this
            }
            ,
            l(window).on("load", function() {
                l('[data-spy="affix"]').each(function() {
                    var e = l(this)
                        , t = e.data();
                    t.offset = t.offset || {},
                    null != t.offsetBottom && (t.offset.bottom = t.offsetBottom),
                    null != t.offsetTop && (t.offset.top = t.offsetTop),
                        i.call(e, t)
                })
            })
    }(jQuery),
    define("bootstrap", ["jquery"], function() {}),
    function(e) {
        "function" == typeof define && define.amd ? define("jquery-ui", ["jquery"], e) : e(jQuery)
    }(function(z) {
        var e, t, i, n;
        function s(e, t) {
            var i, n, s, a = e.nodeName.toLowerCase();
            return "area" === a ? (n = (i = e.parentNode).name,
            !(!e.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(s = z("img[usemap=#" + n + "]")[0]) && r(s))) : (/input|select|textarea|button|object/.test(a) ? !e.disabled : "a" === a && e.href || t) && r(e)
        }
        function r(e) {
            return z.expr.filters.visible(e) && !z(e).parents().addBack().filter(function() {
                return "hidden" === z.css(this, "visibility")
            }).length
        }
        z.ui = z.ui || {},
            z.extend(z.ui, {
                version: "1.11.0",
                keyCode: {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }
            }),
            z.fn.extend({
                scrollParent: function() {
                    var e = this.css("position")
                        , t = "absolute" === e
                        , i = this.parents().filter(function() {
                        var e = z(this);
                        return (!t || "static" !== e.css("position")) && /(auto|scroll)/.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                    return "fixed" !== e && i.length ? i : z(this[0].ownerDocument || document)
                },
                uniqueId: (e = 0,
                        function() {
                            return this.each(function() {
                                this.id || (this.id = "ui-id-" + ++e)
                            })
                        }
                ),
                removeUniqueId: function() {
                    return this.each(function() {
                        /^ui-id-\d+$/.test(this.id) && z(this).removeAttr("id")
                    })
                }
            }),
            z.extend(z.expr[":"], {
                data: z.expr.createPseudo ? z.expr.createPseudo(function(t) {
                    return function(e) {
                        return !!z.data(e, t)
                    }
                }) : function(e, t, i) {
                    return !!z.data(e, i[3])
                }
                ,
                focusable: function(e) {
                    return s(e, !isNaN(z.attr(e, "tabindex")))
                },
                tabbable: function(e) {
                    var t = z.attr(e, "tabindex")
                        , i = isNaN(t);
                    return (i || 0 <= t) && s(e, !i)
                }
            }),
        z("<a>").outerWidth(1).jquery || z.each(["Width", "Height"], function(e, i) {
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"]
                , n = i.toLowerCase()
                , a = {
                innerWidth: z.fn.innerWidth,
                innerHeight: z.fn.innerHeight,
                outerWidth: z.fn.outerWidth,
                outerHeight: z.fn.outerHeight
            };
            function r(e, t, i, n) {
                return z.each(s, function() {
                    t -= parseFloat(z.css(e, "padding" + this)) || 0,
                    i && (t -= parseFloat(z.css(e, "border" + this + "Width")) || 0),
                    n && (t -= parseFloat(z.css(e, "margin" + this)) || 0)
                }),
                    t
            }
            z.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    z(this).css(n, r(this, e) + "px")
                })
            }
                ,
                z.fn["outer" + i] = function(e, t) {
                    return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                        z(this).css(n, r(this, e, !0, t) + "px")
                    })
                }
        }),
        z.fn.addBack || (z.fn.addBack = function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        ),
        z("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (z.fn.removeData = (t = z.fn.removeData,
                function(e) {
                    return arguments.length ? t.call(this, z.camelCase(e)) : t.call(this)
                }
        )),
            z.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
            z.fn.extend({
                focus: (n = z.fn.focus,
                        function(t, i) {
                            return "number" == typeof t ? this.each(function() {
                                var e = this;
                                setTimeout(function() {
                                    z(e).focus(),
                                    i && i.call(e)
                                }, t)
                            }) : n.apply(this, arguments)
                        }
                ),
                disableSelection: (i = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
                        function() {
                            return this.bind(i + ".ui-disableSelection", function(e) {
                                e.preventDefault()
                            })
                        }
                ),
                enableSelection: function() {
                    return this.unbind(".ui-disableSelection")
                },
                zIndex: function(e) {
                    if (void 0 !== e)
                        return this.css("zIndex", e);
                    if (this.length)
                        for (var t, i, n = z(this[0]); n.length && n[0] !== document; ) {
                            if (("absolute" === (t = n.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10),
                                !isNaN(i) && 0 !== i))
                                return i;
                            n = n.parent()
                        }
                    return 0
                }
            }),
            z.ui.plugin = {
                add: function(e, t, i) {
                    var n, s = z.ui[e].prototype;
                    for (n in i)
                        s.plugins[n] = s.plugins[n] || [],
                            s.plugins[n].push([t, i[n]])
                },
                call: function(e, t, i, n) {
                    var s, a = e.plugins[t];
                    if (a && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                        for (s = 0; s < a.length; s++)
                            e.options[a[s][0]] && a[s][1].apply(e.element, i)
                }
            };
        var a, o = 0, l = Array.prototype.slice;
        z.cleanData = (a = z.cleanData,
                function(e) {
                    for (var t, i = 0; null != (t = e[i]); i++)
                        try {
                            z(t).triggerHandler("remove")
                        } catch (e) {}
                    a(e)
                }
        ),
            z.widget = function(e, i, t) {
                var n, s, a, r, o = {}, l = e.split(".")[0];
                return e = e.split(".")[1],
                    n = l + "-" + e,
                t || (t = i,
                    i = z.Widget),
                    z.expr[":"][n.toLowerCase()] = function(e) {
                        return !!z.data(e, n)
                    }
                    ,
                    z[l] = z[l] || {},
                    s = z[l][e],
                    a = z[l][e] = function(e, t) {
                        if (!this._createWidget)
                            return new a(e,t);
                        arguments.length && this._createWidget(e, t)
                    }
                    ,
                    z.extend(a, s, {
                        version: t.version,
                        _proto: z.extend({}, t),
                        _childConstructors: []
                    }),
                    (r = new i).options = z.widget.extend({}, r.options),
                    z.each(t, function(t, n) {
                        var s, a;
                        z.isFunction(n) ? o[t] = (s = function() {
                                return i.prototype[t].apply(this, arguments)
                            }
                                ,
                                a = function(e) {
                                    return i.prototype[t].apply(this, e)
                                }
                                ,
                                function() {
                                    var e, t = this._super, i = this._superApply;
                                    return this._super = s,
                                        this._superApply = a,
                                        e = n.apply(this, arguments),
                                        this._super = t,
                                        this._superApply = i,
                                        e
                                }
                        ) : o[t] = n
                    }),
                    a.prototype = z.widget.extend(r, {
                        widgetEventPrefix: s && r.widgetEventPrefix || e
                    }, o, {
                        constructor: a,
                        namespace: l,
                        widgetName: e,
                        widgetFullName: n
                    }),
                    s ? (z.each(s._childConstructors, function(e, t) {
                        var i = t.prototype;
                        z.widget(i.namespace + "." + i.widgetName, a, t._proto)
                    }),
                        delete s._childConstructors) : i._childConstructors.push(a),
                    z.widget.bridge(e, a),
                    a
            }
            ,
            z.widget.extend = function(e) {
                for (var t, i, n = l.call(arguments, 1), s = 0, a = n.length; s < a; s++)
                    for (t in n[s])
                        i = n[s][t],
                        n[s].hasOwnProperty(t) && void 0 !== i && (z.isPlainObject(i) ? e[t] = z.isPlainObject(e[t]) ? z.widget.extend({}, e[t], i) : z.widget.extend({}, i) : e[t] = i);
                return e
            }
            ,
            z.widget.bridge = function(a, t) {
                var r = t.prototype.widgetFullName || a;
                z.fn[a] = function(i) {
                    var e = "string" == typeof i
                        , n = l.call(arguments, 1)
                        , s = this;
                    return i = !e && n.length ? z.widget.extend.apply(null, [i].concat(n)) : i,
                        e ? this.each(function() {
                            var e, t = z.data(this, r);
                            return "instance" === i ? (s = t,
                                !1) : t ? z.isFunction(t[i]) && "_" !== i.charAt(0) ? (e = t[i].apply(t, n)) !== t && void 0 !== e ? (s = e && e.jquery ? s.pushStack(e.get()) : e,
                                !1) : void 0 : z.error("no such method '" + i + "' for " + a + " widget instance") : z.error("cannot call methods on " + a + " prior to initialization; attempted to call method '" + i + "'")
                        }) : this.each(function() {
                            var e = z.data(this, r);
                            e ? (e.option(i || {}),
                            e._init && e._init()) : z.data(this, r, new t(i,this))
                        }),
                        s
                }
            }
            ,
            z.Widget = function() {}
            ,
            z.Widget._childConstructors = [],
            z.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: {
                    disabled: !1,
                    create: null
                },
                _createWidget: function(e, t) {
                    t = z(t || this.defaultElement || this)[0],
                        this.element = z(t),
                        this.uuid = o++,
                        this.eventNamespace = "." + this.widgetName + this.uuid,
                        this.options = z.widget.extend({}, this.options, this._getCreateOptions(), e),
                        this.bindings = z(),
                        this.hoverable = z(),
                        this.focusable = z(),
                    t !== this && (z.data(t, this.widgetFullName, this),
                        this._on(!0, this.element, {
                            remove: function(e) {
                                e.target === t && this.destroy()
                            }
                        }),
                        this.document = z(t.style ? t.ownerDocument : t.document || t),
                        this.window = z(this.document[0].defaultView || this.document[0].parentWindow)),
                        this._create(),
                        this._trigger("create", null, this._getCreateEventData()),
                        this._init()
                },
                _getCreateOptions: z.noop,
                _getCreateEventData: z.noop,
                _create: z.noop,
                _init: z.noop,
                destroy: function() {
                    this._destroy(),
                        this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(z.camelCase(this.widgetFullName)),
                        this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
                        this.bindings.unbind(this.eventNamespace),
                        this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus")
                },
                _destroy: z.noop,
                widget: function() {
                    return this.element
                },
                option: function(e, t) {
                    var i, n, s, a = e;
                    if (0 === arguments.length)
                        return z.widget.extend({}, this.options);
                    if ("string" == typeof e)
                        if (a = {},
                                e = (i = e.split(".")).shift(),
                                i.length) {
                            for (n = a[e] = z.widget.extend({}, this.options[e]),
                                     s = 0; s < i.length - 1; s++)
                                n[i[s]] = n[i[s]] || {},
                                    n = n[i[s]];
                            if (e = i.pop(),
                                1 === arguments.length)
                                return void 0 === n[e] ? null : n[e];
                            n[e] = t
                        } else {
                            if (1 === arguments.length)
                                return void 0 === this.options[e] ? null : this.options[e];
                            a[e] = t
                        }
                    return this._setOptions(a),
                        this
                },
                _setOptions: function(e) {
                    var t;
                    for (t in e)
                        this._setOption(t, e[t]);
                    return this
                },
                _setOption: function(e, t) {
                    return this.options[e] = t,
                    "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t),
                    t && (this.hoverable.removeClass("ui-state-hover"),
                        this.focusable.removeClass("ui-state-focus"))),
                        this
                },
                enable: function() {
                    return this._setOptions({
                        disabled: !1
                    })
                },
                disable: function() {
                    return this._setOptions({
                        disabled: !0
                    })
                },
                _on: function(r, o, e) {
                    var l, u = this;
                    "boolean" != typeof r && (e = o,
                        o = r,
                        r = !1),
                        e ? (o = l = z(o),
                            this.bindings = this.bindings.add(o)) : (e = o,
                            o = this.element,
                            l = this.widget()),
                        z.each(e, function(e, t) {
                            function i() {
                                if (r || !0 !== u.options.disabled && !z(this).hasClass("ui-state-disabled"))
                                    return ("string" == typeof t ? u[t] : t).apply(u, arguments)
                            }
                            "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || z.guid++);
                            var n = e.match(/^([\w:-]*)\s*(.*)$/)
                                , s = n[1] + u.eventNamespace
                                , a = n[2];
                            a ? l.delegate(a, s, i) : o.bind(s, i)
                        })
                },
                _off: function(e, t) {
                    t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
                        e.unbind(t).undelegate(t)
                },
                _delay: function(e, t) {
                    var i = this;
                    return setTimeout(function() {
                        return ("string" == typeof e ? i[e] : e).apply(i, arguments)
                    }, t || 0)
                },
                _hoverable: function(e) {
                    this.hoverable = this.hoverable.add(e),
                        this._on(e, {
                            mouseenter: function(e) {
                                z(e.currentTarget).addClass("ui-state-hover")
                            },
                            mouseleave: function(e) {
                                z(e.currentTarget).removeClass("ui-state-hover")
                            }
                        })
                },
                _focusable: function(e) {
                    this.focusable = this.focusable.add(e),
                        this._on(e, {
                            focusin: function(e) {
                                z(e.currentTarget).addClass("ui-state-focus")
                            },
                            focusout: function(e) {
                                z(e.currentTarget).removeClass("ui-state-focus")
                            }
                        })
                },
                _trigger: function(e, t, i) {
                    var n, s, a = this.options[e];
                    if (i = i || {},
                            (t = z.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(),
                            t.target = this.element[0],
                            s = t.originalEvent)
                        for (n in s)
                            n in t || (t[n] = s[n]);
                    return this.element.trigger(t, i),
                        !(z.isFunction(a) && !1 === a.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented())
                }
            },
            z.each({
                show: "fadeIn",
                hide: "fadeOut"
            }, function(a, r) {
                z.Widget.prototype["_" + a] = function(t, e, i) {
                    "string" == typeof e && (e = {
                        effect: e
                    });
                    var n, s = e ? !0 === e || "number" == typeof e ? r : e.effect || r : a;
                    "number" == typeof (e = e || {}) && (e = {
                        duration: e
                    }),
                        n = !z.isEmptyObject(e),
                        e.complete = i,
                    e.delay && t.delay(e.delay),
                        n && z.effects && z.effects.effect[s] ? t[a](e) : s !== a && t[s] ? t[s](e.duration, e.easing, i) : t.queue(function(e) {
                            z(this)[a](),
                            i && i.call(t[0]),
                                e()
                        })
                }
            });
        z.widget;
        var u = !1;
        z(document).mouseup(function() {
            u = !1
        });
        z.widget("ui.mouse", {
            version: "1.11.0",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(e) {
                    if (!0 === z.data(e.target, t.widgetName + ".preventClickEvent"))
                        return z.removeData(e.target, t.widgetName + ".preventClickEvent"),
                            e.stopImmediatePropagation(),
                            !1
                }),
                    this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName),
                this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(e) {
                if (!u) {
                    this._mouseStarted && this._mouseUp(e),
                        this._mouseDownEvent = e;
                    var t = this
                        , i = 1 === e.which
                        , n = !("string" != typeof this.options.cancel || !e.target.nodeName) && z(e.target).closest(this.options.cancel).length;
                    return !(i && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay,
                    this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        t.mouseDelayMet = !0
                    }, this.options.delay)),
                        this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e),
                            !this._mouseStarted) ? (e.preventDefault(),
                            !0) : (!0 === z.data(e.target, this.widgetName + ".preventClickEvent") && z.removeData(e.target, this.widgetName + ".preventClickEvent"),
                            this._mouseMoveDelegate = function(e) {
                                return t._mouseMove(e)
                            }
                            ,
                            this._mouseUpDelegate = function(e) {
                                return t._mouseUp(e)
                            }
                            ,
                            this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                            e.preventDefault(),
                            u = !0))
                }
            },
            _mouseMove: function(e) {
                return z.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : e.which ? this._mouseStarted ? (this._mouseDrag(e),
                    e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e),
                    this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
                    !this._mouseStarted) : this._mouseUp(e)
            },
            _mouseUp: function(e) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
                this._mouseStarted && (this._mouseStarted = !1,
                e.target === this._mouseDownEvent.target && z.data(e.target, this.widgetName + ".preventClickEvent", !0),
                    this._mouseStop(e)),
                    u = !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        });
        !function() {
            z.ui = z.ui || {};
            var s, T, C = Math.max, S = Math.abs, E = Math.round, n = /left|center|right/, a = /top|center|bottom/, r = /[\+\-]\d+(\.[\d]+)?%?/, o = /^\w+/, l = /%$/, u = z.fn.position;
            function _(e, t, i) {
                return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? i / 100 : 1)]
            }
            function k(e, t) {
                return parseInt(z.css(e, t), 10) || 0
            }
            z.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s)
                        return s;
                    var e, t, i = z("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), n = i.children()[0];
                    return z("body").append(i),
                        e = n.offsetWidth,
                        i.css("overflow", "scroll"),
                    e === (t = n.offsetWidth) && (t = i[0].clientWidth),
                        i.remove(),
                        s = e - t
                },
                getScrollInfo: function(e) {
                    var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x")
                        , i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y")
                        , n = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
                    return {
                        width: "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight ? z.position.scrollbarWidth() : 0,
                        height: n ? z.position.scrollbarWidth() : 0
                    }
                },
                getWithinInfo: function(e) {
                    var t = z(e || window)
                        , i = z.isWindow(t[0]);
                    return {
                        element: t,
                        isWindow: i,
                        isDocument: !!t[0] && 9 === t[0].nodeType,
                        offset: t.offset() || {
                            left: 0,
                            top: 0
                        },
                        scrollLeft: t.scrollLeft(),
                        scrollTop: t.scrollTop(),
                        width: i ? t.width() : t.outerWidth(),
                        height: i ? t.height() : t.outerHeight()
                    }
                }
            },
                z.fn.position = function(h) {
                    if (!h || !h.of)
                        return u.apply(this, arguments);
                    h = z.extend({}, h);
                    var p, d, f, m, g, e, t, i, v = z(h.of), y = z.position.getWithinInfo(h.within), b = z.position.getScrollInfo(y), w = (h.collision || "flip").split(" "), x = {};
                    return e = 9 === (i = (t = v)[0]).nodeType ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : z.isWindow(i) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    },
                    v[0].preventDefault && (h.at = "left top"),
                        d = e.width,
                        f = e.height,
                        m = e.offset,
                        g = z.extend({}, m),
                        z.each(["my", "at"], function() {
                            var e, t, i = (h[this] || "").split(" ");
                            1 === i.length && (i = n.test(i[0]) ? i.concat(["center"]) : a.test(i[0]) ? ["center"].concat(i) : ["center", "center"]),
                                i[0] = n.test(i[0]) ? i[0] : "center",
                                i[1] = a.test(i[1]) ? i[1] : "center",
                                e = r.exec(i[0]),
                                t = r.exec(i[1]),
                                x[this] = [e ? e[0] : 0, t ? t[0] : 0],
                                h[this] = [o.exec(i[0])[0], o.exec(i[1])[0]]
                        }),
                    1 === w.length && (w[1] = w[0]),
                        "right" === h.at[0] ? g.left += d : "center" === h.at[0] && (g.left += d / 2),
                        "bottom" === h.at[1] ? g.top += f : "center" === h.at[1] && (g.top += f / 2),
                        p = _(x.at, d, f),
                        g.left += p[0],
                        g.top += p[1],
                        this.each(function() {
                            var i, e, r = z(this), o = r.outerWidth(), l = r.outerHeight(), t = k(this, "marginLeft"), n = k(this, "marginTop"), s = o + t + k(this, "marginRight") + b.width, a = l + n + k(this, "marginBottom") + b.height, u = z.extend({}, g), c = _(x.my, r.outerWidth(), r.outerHeight());
                            "right" === h.my[0] ? u.left -= o : "center" === h.my[0] && (u.left -= o / 2),
                                "bottom" === h.my[1] ? u.top -= l : "center" === h.my[1] && (u.top -= l / 2),
                                u.left += c[0],
                                u.top += c[1],
                            T || (u.left = E(u.left),
                                u.top = E(u.top)),
                                i = {
                                    marginLeft: t,
                                    marginTop: n
                                },
                                z.each(["left", "top"], function(e, t) {
                                    z.ui.position[w[e]] && z.ui.position[w[e]][t](u, {
                                        targetWidth: d,
                                        targetHeight: f,
                                        elemWidth: o,
                                        elemHeight: l,
                                        collisionPosition: i,
                                        collisionWidth: s,
                                        collisionHeight: a,
                                        offset: [p[0] + c[0], p[1] + c[1]],
                                        my: h.my,
                                        at: h.at,
                                        within: y,
                                        elem: r
                                    })
                                }),
                            h.using && (e = function(e) {
                                    var t = m.left - u.left
                                        , i = t + d - o
                                        , n = m.top - u.top
                                        , s = n + f - l
                                        , a = {
                                        target: {
                                            element: v,
                                            left: m.left,
                                            top: m.top,
                                            width: d,
                                            height: f
                                        },
                                        element: {
                                            element: r,
                                            left: u.left,
                                            top: u.top,
                                            width: o,
                                            height: l
                                        },
                                        horizontal: i < 0 ? "left" : 0 < t ? "right" : "center",
                                        vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                                    };
                                    d < o && S(t + i) < d && (a.horizontal = "center"),
                                    f < l && S(n + s) < f && (a.vertical = "middle"),
                                        C(S(t), S(i)) > C(S(n), S(s)) ? a.important = "horizontal" : a.important = "vertical",
                                        h.using.call(this, e, a)
                                }
                            ),
                                r.offset(z.extend(u, {
                                    using: e
                                }))
                        })
                }
                ,
                z.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var i, n = t.within, s = n.isWindow ? n.scrollLeft : n.offset.left, a = n.width, r = e.left - t.collisionPosition.marginLeft, o = s - r, l = r + t.collisionWidth - a - s;
                            t.collisionWidth > a ? 0 < o && l <= 0 ? (i = e.left + o + t.collisionWidth - a - s,
                                e.left += o - i) : e.left = 0 < l && o <= 0 ? s : l < o ? s + a - t.collisionWidth : s : 0 < o ? e.left += o : 0 < l ? e.left -= l : e.left = C(e.left - r, e.left)
                        },
                        top: function(e, t) {
                            var i, n = t.within, s = n.isWindow ? n.scrollTop : n.offset.top, a = t.within.height, r = e.top - t.collisionPosition.marginTop, o = s - r, l = r + t.collisionHeight - a - s;
                            t.collisionHeight > a ? 0 < o && l <= 0 ? (i = e.top + o + t.collisionHeight - a - s,
                                e.top += o - i) : e.top = 0 < l && o <= 0 ? s : l < o ? s + a - t.collisionHeight : s : 0 < o ? e.top += o : 0 < l ? e.top -= l : e.top = C(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var i, n, s = t.within, a = s.offset.left + s.scrollLeft, r = s.width, o = s.isWindow ? s.scrollLeft : s.offset.left, l = e.left - t.collisionPosition.marginLeft, u = l - o, c = l + t.collisionWidth - r - o, h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, d = -2 * t.offset[0];
                            u < 0 ? ((i = e.left + h + p + d + t.collisionWidth - r - a) < 0 || i < S(u)) && (e.left += h + p + d) : 0 < c && (0 < (n = e.left - t.collisionPosition.marginLeft + h + p + d - o) || S(n) < c) && (e.left += h + p + d)
                        },
                        top: function(e, t) {
                            var i, n, s = t.within, a = s.offset.top + s.scrollTop, r = s.height, o = s.isWindow ? s.scrollTop : s.offset.top, l = e.top - t.collisionPosition.marginTop, u = l - o, c = l + t.collisionHeight - r - o, h = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, d = -2 * t.offset[1];
                            u < 0 ? (n = e.top + h + p + d + t.collisionHeight - r - a,
                            e.top + h + p + d > u && (n < 0 || n < S(u)) && (e.top += h + p + d)) : 0 < c && (i = e.top - t.collisionPosition.marginTop + h + p + d - o,
                            e.top + h + p + d > c && (0 < i || S(i) < c) && (e.top += h + p + d))
                        }
                    },
                    flipfit: {
                        left: function() {
                            z.ui.position.flip.left.apply(this, arguments),
                                z.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            z.ui.position.flip.top.apply(this, arguments),
                                z.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var e, t, i, n, s, a = document.getElementsByTagName("body")[0], r = document.createElement("div");
                    for (s in e = document.createElement(a ? "div" : "body"),
                        i = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        },
                    a && z.extend(i, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    }),
                        i)
                        e.style[s] = i[s];
                    e.appendChild(r),
                        (t = a || document.documentElement).insertBefore(e, t.firstChild),
                        r.style.cssText = "position: absolute; left: 10.7432222px;",
                        n = z(r).offset().left,
                        T = 10 < n && n < 11,
                        e.innerHTML = "",
                        t.removeChild(e)
                }()
        }();
        z.ui.position;
        z.widget("ui.draggable", z.ui.mouse, {
            version: "1.11.0",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"),
                this.options.addClasses && this.element.addClass("ui-draggable"),
                this.options.disabled && this.element.addClass("ui-draggable-disabled"),
                    this._setHandleClassName(),
                    this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t),
                "handle" === e && this._setHandleClassName()
            },
            _destroy: function() {
                (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),
                    this._removeHandleClassName(),
                    this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var t = this.document[0]
                    , i = this.options;
                try {
                    t.activeElement && "body" !== t.activeElement.nodeName.toLowerCase() && z(t.activeElement).blur()
                } catch (e) {}
                return !(this.helper || i.disabled || 0 < z(e.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(e),
                !!this.handle && (z(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function() {
                    z("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                        width: this.offsetWidth + "px",
                        height: this.offsetHeight + "px",
                        position: "absolute",
                        opacity: "0.001",
                        zIndex: 1e3
                    }).css(z(this).offset()).appendTo("body")
                }),
                    !0))
            },
            _mouseStart: function(e) {
                var t = this.options;
                return this.helper = this._createHelper(e),
                    this.helper.addClass("ui-draggable-dragging"),
                    this._cacheHelperProportions(),
                z.ui.ddmanager && (z.ui.ddmanager.current = this),
                    this._cacheMargins(),
                    this.cssPosition = this.helper.css("position"),
                    this.scrollParent = this.helper.scrollParent(),
                    this.offsetParent = this.helper.offsetParent(),
                    this.offsetParentCssPosition = this.offsetParent.css("position"),
                    this.offset = this.positionAbs = this.element.offset(),
                    this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    },
                    this.offset.scroll = !1,
                    z.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }),
                    this.originalPosition = this.position = this._generatePosition(e, !1),
                    this.originalPageX = e.pageX,
                    this.originalPageY = e.pageY,
                t.cursorAt && this._adjustOffsetFromHelper(t.cursorAt),
                    this._setContainment(),
                    !1 === this._trigger("start", e) ? (this._clear(),
                        !1) : (this._cacheHelperProportions(),
                    z.ui.ddmanager && !t.dropBehaviour && z.ui.ddmanager.prepareOffsets(this, e),
                        this._mouseDrag(e, !0),
                    z.ui.ddmanager && z.ui.ddmanager.dragStart(this, e),
                        !0)
            },
            _mouseDrag: function(e, t) {
                if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()),
                        this.position = this._generatePosition(e, !0),
                        this.positionAbs = this._convertPositionTo("absolute"),
                        !t) {
                    var i = this._uiHash();
                    if (!1 === this._trigger("drag", e, i))
                        return this._mouseUp({}),
                            !1;
                    this.position = i.position
                }
                return this.helper[0].style.left = this.position.left + "px",
                    this.helper[0].style.top = this.position.top + "px",
                z.ui.ddmanager && z.ui.ddmanager.drag(this, e),
                    !1
            },
            _mouseStop: function(e) {
                var t = this
                    , i = !1;
                return z.ui.ddmanager && !this.options.dropBehaviour && (i = z.ui.ddmanager.drop(this, e)),
                this.dropped && (i = this.dropped,
                    this.dropped = !1),
                    "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || z.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? z(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                        !1 !== t._trigger("stop", e) && t._clear()
                    }) : !1 !== this._trigger("stop", e) && this._clear(),
                    !1
            },
            _mouseUp: function(e) {
                return z("div.ui-draggable-iframeFix").each(function() {
                    this.parentNode.removeChild(this)
                }),
                z.ui.ddmanager && z.ui.ddmanager.dragStop(this, e),
                    this.element.focus(),
                    z.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(),
                    this
            },
            _getHandle: function(e) {
                return !this.options.handle || !!z(e.target).closest(this.element.find(this.options.handle)).length
            },
            _setHandleClassName: function() {
                this._removeHandleClassName(),
                    z(this.options.handle || this.element).addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.element.find(".ui-draggable-handle").addBack().removeClass("ui-draggable-handle")
            },
            _createHelper: function(e) {
                var t = this.options
                    , i = z.isFunction(t.helper) ? z(t.helper.apply(this.element[0], [e])) : "clone" === t.helper ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo("parent" === t.appendTo ? this.element[0].parentNode : t.appendTo),
                i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"),
                    i
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")),
                z.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }),
                "left"in e && (this.offset.click.left = e.left + this.margins.left),
                "right"in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left),
                "top"in e && (this.offset.click.top = e.top + this.margins.top),
                "bottom"in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset()
                    , t = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== t && z.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(),
                    e.top += this.scrollParent.scrollTop()),
                this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }),
                    {
                        top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition)
                    return {
                        top: 0,
                        left: 0
                    };
                var e = this.element.position()
                    , t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, t, i, n = this.options, s = this.document[0];
                this.relative_container = null,
                    n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode),
                    (i = (t = z(n.containment))[0]) && (e = "hidden" !== t.css("overflow"),
                        this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
                        this.relative_container = t)) : this.containment = n.containment : this.containment = [0, 0, z(s).width() - this.helperProportions.width - this.margins.left, (z(s).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [z(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, z(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, z(window).scrollLeft() + z(window).width() - this.helperProportions.width - this.margins.left, z(window).scrollTop() + (z(window).height() || s.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var i = "absolute" === e ? 1 : -1
                    , n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(e, t) {
                var i, n, s, a, r = this.options, o = this._isRootNode(this.scrollParent[0]), l = e.pageX, u = e.pageY;
                return o && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }),
                t && (this.containment && (this.relative_container ? (n = this.relative_container.offset(),
                    i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment,
                e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
                e.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top),
                e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
                e.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)),
                r.grid && (s = r.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY,
                    u = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - r.grid[1] : s + r.grid[1] : s,
                    a = r.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX,
                    l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - r.grid[0] : a + r.grid[0] : a),
                "y" === r.axis && (l = this.originalPageX),
                "x" === r.axis && (u = this.originalPageY)),
                    {
                        top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : o ? 0 : this.offset.scroll.top),
                        left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : o ? 0 : this.offset.scroll.left)
                    }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"),
                this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
                    this.helper = null,
                    this.cancelHelperRemoval = !1,
                this.destroyOnClear && this.destroy()
            },
            _trigger: function(e, t, i) {
                return i = i || this._uiHash(),
                    z.ui.plugin.call(this, e, [t, i, this], !0),
                "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")),
                    z.Widget.prototype._trigger.call(this, e, t, i)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }),
            z.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, e, i) {
                    var n = i.options
                        , s = z.extend({}, e, {
                        item: i.element
                    });
                    i.sortables = [],
                        z(n.connectToSortable).each(function() {
                            var e = z(this).sortable("instance");
                            e && !e.options.disabled && (i.sortables.push({
                                instance: e,
                                shouldRevert: e.options.revert
                            }),
                                e.refreshPositions(),
                                e._trigger("activate", t, s))
                        })
                },
                stop: function(e, t, i) {
                    var n = z.extend({}, t, {
                        item: i.element
                    });
                    z.each(i.sortables, function() {
                        this.instance.isOver ? (this.instance.isOver = 0,
                            i.cancelHelperRemoval = !0,
                            this.instance.cancelHelperRemoval = !1,
                        this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
                            this.instance._mouseStop(e),
                            this.instance.options.helper = this.instance.options._helper,
                        "original" === i.options.helper && this.instance.currentItem.css({
                            top: "auto",
                            left: "auto"
                        })) : (this.instance.cancelHelperRemoval = !1,
                            this.instance._trigger("deactivate", e, n))
                    })
                },
                drag: function(i, n, s) {
                    var a = this;
                    z.each(s.sortables, function() {
                        var e = !1
                            , t = this;
                        this.instance.positionAbs = s.positionAbs,
                            this.instance.helperProportions = s.helperProportions,
                            this.instance.offset.click = s.offset.click,
                        this.instance._intersectsWith(this.instance.containerCache) && (e = !0,
                            z.each(s.sortables, function() {
                                return this.instance.positionAbs = s.positionAbs,
                                    this.instance.helperProportions = s.helperProportions,
                                    this.instance.offset.click = s.offset.click,
                                this !== t && this.instance._intersectsWith(this.instance.containerCache) && z.contains(t.instance.element[0], this.instance.element[0]) && (e = !1),
                                    e
                            })),
                            e ? (this.instance.isOver || (this.instance.isOver = 1,
                                this.instance.currentItem = z(a).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0),
                                this.instance.options._helper = this.instance.options.helper,
                                this.instance.options.helper = function() {
                                    return n.helper[0]
                                }
                                ,
                                i.target = this.instance.currentItem[0],
                                this.instance._mouseCapture(i, !0),
                                this.instance._mouseStart(i, !0, !0),
                                this.instance.offset.click.top = s.offset.click.top,
                                this.instance.offset.click.left = s.offset.click.left,
                                this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left,
                                this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top,
                                s._trigger("toSortable", i),
                                s.dropped = this.instance.element,
                                s.currentItem = s.element,
                                this.instance.fromOutside = s),
                            this.instance.currentItem && this.instance._mouseDrag(i)) : this.instance.isOver && (this.instance.isOver = 0,
                                this.instance.cancelHelperRemoval = !0,
                                this.instance.options.revert = !1,
                                this.instance._trigger("out", i, this.instance._uiHash(this.instance)),
                                this.instance._mouseStop(i, !0),
                                this.instance.options.helper = this.instance.options._helper,
                                this.instance.currentItem.remove(),
                            this.instance.placeholder && this.instance.placeholder.remove(),
                                s._trigger("fromSortable", i),
                                s.dropped = !1)
                    })
                }
            }),
            z.ui.plugin.add("draggable", "cursor", {
                start: function(e, t, i) {
                    var n = z("body")
                        , s = i.options;
                    n.css("cursor") && (s._cursor = n.css("cursor")),
                        n.css("cursor", s.cursor)
                },
                stop: function(e, t, i) {
                    var n = i.options;
                    n._cursor && z("body").css("cursor", n._cursor)
                }
            }),
            z.ui.plugin.add("draggable", "opacity", {
                start: function(e, t, i) {
                    var n = z(t.helper)
                        , s = i.options;
                    n.css("opacity") && (s._opacity = n.css("opacity")),
                        n.css("opacity", s.opacity)
                },
                stop: function(e, t, i) {
                    var n = i.options;
                    n._opacity && z(t.helper).css("opacity", n._opacity)
                }
            }),
            z.ui.plugin.add("draggable", "scroll", {
                start: function(e, t, i) {
                    i.scrollParent[0] !== i.document[0] && "HTML" !== i.scrollParent[0].tagName && (i.overflowOffset = i.scrollParent.offset())
                },
                drag: function(e, t, i) {
                    var n = i.options
                        , s = !1
                        , a = i.document[0];
                    i.scrollParent[0] !== a && "HTML" !== i.scrollParent[0].tagName ? (n.axis && "x" === n.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < n.scrollSensitivity ? i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop + n.scrollSpeed : e.pageY - i.overflowOffset.top < n.scrollSensitivity && (i.scrollParent[0].scrollTop = s = i.scrollParent[0].scrollTop - n.scrollSpeed)),
                    n.axis && "y" === n.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < n.scrollSensitivity ? i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft + n.scrollSpeed : e.pageX - i.overflowOffset.left < n.scrollSensitivity && (i.scrollParent[0].scrollLeft = s = i.scrollParent[0].scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - z(a).scrollTop() < n.scrollSensitivity ? s = z(a).scrollTop(z(a).scrollTop() - n.scrollSpeed) : z(window).height() - (e.pageY - z(a).scrollTop()) < n.scrollSensitivity && (s = z(a).scrollTop(z(a).scrollTop() + n.scrollSpeed))),
                    n.axis && "y" === n.axis || (e.pageX - z(a).scrollLeft() < n.scrollSensitivity ? s = z(a).scrollLeft(z(a).scrollLeft() - n.scrollSpeed) : z(window).width() - (e.pageX - z(a).scrollLeft()) < n.scrollSensitivity && (s = z(a).scrollLeft(z(a).scrollLeft() + n.scrollSpeed)))),
                    !1 !== s && z.ui.ddmanager && !n.dropBehaviour && z.ui.ddmanager.prepareOffsets(i, e)
                }
            }),
            z.ui.plugin.add("draggable", "snap", {
                start: function(e, t, i) {
                    var n = i.options;
                    i.snapElements = [],
                        z(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                            var e = z(this)
                                , t = e.offset();
                            this !== i.element[0] && i.snapElements.push({
                                item: this,
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                top: t.top,
                                left: t.left
                            })
                        })
                },
                drag: function(e, t, i) {
                    var n, s, a, r, o, l, u, c, h, p, d = i.options, f = d.snapTolerance, m = t.offset.left, g = m + i.helperProportions.width, v = t.offset.top, y = v + i.helperProportions.height;
                    for (h = i.snapElements.length - 1; 0 <= h; h--)
                        l = (o = i.snapElements[h].left) + i.snapElements[h].width,
                            c = (u = i.snapElements[h].top) + i.snapElements[h].height,
                            g < o - f || l + f < m || y < u - f || c + f < v || !z.contains(i.snapElements[h].item.ownerDocument, i.snapElements[h].item) ? (i.snapElements[h].snapping && i.options.snap.release && i.options.snap.release.call(i.element, e, z.extend(i._uiHash(), {
                                snapItem: i.snapElements[h].item
                            })),
                                i.snapElements[h].snapping = !1) : ("inner" !== d.snapMode && (n = Math.abs(u - y) <= f,
                                s = Math.abs(c - v) <= f,
                                a = Math.abs(o - g) <= f,
                                r = Math.abs(l - m) <= f,
                            n && (t.position.top = i._convertPositionTo("relative", {
                                top: u - i.helperProportions.height,
                                left: 0
                            }).top - i.margins.top),
                            s && (t.position.top = i._convertPositionTo("relative", {
                                top: c,
                                left: 0
                            }).top - i.margins.top),
                            a && (t.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: o - i.helperProportions.width
                            }).left - i.margins.left),
                            r && (t.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: l
                            }).left - i.margins.left)),
                                p = n || s || a || r,
                            "outer" !== d.snapMode && (n = Math.abs(u - v) <= f,
                                s = Math.abs(c - y) <= f,
                                a = Math.abs(o - m) <= f,
                                r = Math.abs(l - g) <= f,
                            n && (t.position.top = i._convertPositionTo("relative", {
                                top: u,
                                left: 0
                            }).top - i.margins.top),
                            s && (t.position.top = i._convertPositionTo("relative", {
                                top: c - i.helperProportions.height,
                                left: 0
                            }).top - i.margins.top),
                            a && (t.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: o
                            }).left - i.margins.left),
                            r && (t.position.left = i._convertPositionTo("relative", {
                                top: 0,
                                left: l - i.helperProportions.width
                            }).left - i.margins.left)),
                            !i.snapElements[h].snapping && (n || s || a || r || p) && i.options.snap.snap && i.options.snap.snap.call(i.element, e, z.extend(i._uiHash(), {
                                snapItem: i.snapElements[h].item
                            })),
                                i.snapElements[h].snapping = n || s || a || r || p)
                }
            }),
            z.ui.plugin.add("draggable", "stack", {
                start: function(e, t, i) {
                    var n, s = i.options, a = z.makeArray(z(s.stack)).sort(function(e, t) {
                        return (parseInt(z(e).css("zIndex"), 10) || 0) - (parseInt(z(t).css("zIndex"), 10) || 0)
                    });
                    a.length && (n = parseInt(z(a[0]).css("zIndex"), 10) || 0,
                        z(a).each(function(e) {
                            z(this).css("zIndex", n + e)
                        }),
                        this.css("zIndex", n + a.length))
                }
            }),
            z.ui.plugin.add("draggable", "zIndex", {
                start: function(e, t, i) {
                    var n = z(t.helper)
                        , s = i.options;
                    n.css("zIndex") && (s._zIndex = n.css("zIndex")),
                        n.css("zIndex", s.zIndex)
                },
                stop: function(e, t, i) {
                    var n = i.options;
                    n._zIndex && z(t.helper).css("zIndex", n._zIndex)
                }
            });
        z.ui.draggable;
        z.widget("ui.resizable", z.ui.mouse, {
            version: "1.11.0",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(e) {
                return parseInt(e, 10) || 0
            },
            _isNumber: function(e) {
                return !isNaN(parseInt(e, 10))
            },
            _hasScroll: function(e, t) {
                if ("hidden" === z(e).css("overflow"))
                    return !1;
                var i, n = t && "left" === t ? "scrollLeft" : "scrollTop";
                return 0 < e[n] || (e[n] = 1,
                    i = 0 < e[n],
                    e[n] = 0,
                    i)
            },
            _create: function() {
                var e, t, i, n, s = this, a = this.options;
                if (this.element.addClass("ui-resizable"),
                        z.extend(this, {
                            _aspectRatio: !!a.aspectRatio,
                            aspectRatio: a.aspectRatio,
                            originalElement: this.element,
                            _proportionallyResizeElements: [],
                            _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
                        }),
                    this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(z("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })),
                        this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
                        this.elementIsWrapper = !0,
                        this.element.css({
                            marginLeft: this.originalElement.css("marginLeft"),
                            marginTop: this.originalElement.css("marginTop"),
                            marginRight: this.originalElement.css("marginRight"),
                            marginBottom: this.originalElement.css("marginBottom")
                        }),
                        this.originalElement.css({
                            marginLeft: 0,
                            marginTop: 0,
                            marginRight: 0,
                            marginBottom: 0
                        }),
                        this.originalResizeStyle = this.originalElement.css("resize"),
                        this.originalElement.css("resize", "none"),
                        this._proportionallyResizeElements.push(this.originalElement.css({
                            position: "static",
                            zoom: 1,
                            display: "block"
                        })),
                        this.originalElement.css({
                            margin: this.originalElement.css("margin")
                        }),
                        this._proportionallyResize()),
                        this.handles = a.handles || (z(".ui-resizable-handle", this.element).length ? {
                            n: ".ui-resizable-n",
                            e: ".ui-resizable-e",
                            s: ".ui-resizable-s",
                            w: ".ui-resizable-w",
                            se: ".ui-resizable-se",
                            sw: ".ui-resizable-sw",
                            ne: ".ui-resizable-ne",
                            nw: ".ui-resizable-nw"
                        } : "e,s,se"),
                    this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                             e = this.handles.split(","),
                             this.handles = {},
                             t = 0; t < e.length; t++)
                        i = z.trim(e[t]),
                            (n = z("<div class='ui-resizable-handle " + ("ui-resizable-" + i) + "'></div>")).css({
                                zIndex: a.zIndex
                            }),
                        "se" === i && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
                            this.handles[i] = ".ui-resizable-" + i,
                            this.element.append(n);
                this._renderAxis = function(e) {
                    var t, i, n, s;
                    for (t in e = e || this.element,
                        this.handles)
                        this.handles[t].constructor === String && (this.handles[t] = this.element.children(this.handles[t]).first().show()),
                        this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (i = z(this.handles[t], this.element),
                            s = /sw|ne|nw|se|n|s/.test(t) ? i.outerHeight() : i.outerWidth(),
                            n = ["padding", /ne|nw|n/.test(t) ? "Top" : /se|sw|s/.test(t) ? "Bottom" : /^e$/.test(t) ? "Right" : "Left"].join(""),
                            e.css(n, s),
                            this._proportionallyResize()),
                            z(this.handles[t]).length
                }
                    ,
                    this._renderAxis(this.element),
                    this._handles = z(".ui-resizable-handle", this.element).disableSelection(),
                    this._handles.mouseover(function() {
                        s.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                            s.axis = n && n[1] ? n[1] : "se")
                    }),
                a.autoHide && (this._handles.hide(),
                    z(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                        a.disabled || (z(this).removeClass("ui-resizable-autohide"),
                            s._handles.show())
                    }).mouseleave(function() {
                        a.disabled || s.resizing || (z(this).addClass("ui-resizable-autohide"),
                            s._handles.hide())
                    })),
                    this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, t = function(e) {
                    z(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (t(this.element),
                    e = this.element,
                    this.originalElement.css({
                        position: e.css("position"),
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: e.css("top"),
                        left: e.css("left")
                    }).insertAfter(e),
                    e.remove()),
                    this.originalElement.css("resize", this.originalResizeStyle),
                    t(this.originalElement),
                    this
            },
            _mouseCapture: function(e) {
                var t, i, n = !1;
                for (t in this.handles)
                    ((i = z(this.handles[t])[0]) === e.target || z.contains(i, e.target)) && (n = !0);
                return !this.options.disabled && n
            },
            _mouseStart: function(e) {
                var t, i, n, s = this.options, a = this.element;
                return this.resizing = !0,
                    this._renderProxy(),
                    t = this._num(this.helper.css("left")),
                    i = this._num(this.helper.css("top")),
                s.containment && (t += z(s.containment).scrollLeft() || 0,
                    i += z(s.containment).scrollTop() || 0),
                    this.offset = this.helper.offset(),
                    this.position = {
                        left: t,
                        top: i
                    },
                    this.size = this._helper ? {
                        width: this.helper.width(),
                        height: this.helper.height()
                    } : {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalSize = this._helper ? {
                        width: a.outerWidth(),
                        height: a.outerHeight()
                    } : {
                        width: a.width(),
                        height: a.height()
                    },
                    this.originalPosition = {
                        left: t,
                        top: i
                    },
                    this.sizeDiff = {
                        width: a.outerWidth() - a.width(),
                        height: a.outerHeight() - a.height()
                    },
                    this.originalMousePosition = {
                        left: e.pageX,
                        top: e.pageY
                    },
                    this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
                    n = z(".ui-resizable-" + this.axis).css("cursor"),
                    z("body").css("cursor", "auto" === n ? this.axis + "-resize" : n),
                    a.addClass("ui-resizable-resizing"),
                    this._propagate("start", e),
                    !0
            },
            _mouseDrag: function(e) {
                var t, i = this.helper, n = {}, s = this.originalMousePosition, a = this.axis, r = e.pageX - s.left || 0, o = e.pageY - s.top || 0, l = this._change[a];
                return this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                },
                    this.prevSize = {
                        width: this.size.width,
                        height: this.size.height
                    },
                l && (t = l.apply(this, [e, r, o]),
                    this._updateVirtualBoundaries(e.shiftKey),
                (this._aspectRatio || e.shiftKey) && (t = this._updateRatio(t, e)),
                    t = this._respectSize(t, e),
                    this._updateCache(t),
                    this._propagate("resize", e),
                this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"),
                this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"),
                this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"),
                this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"),
                    i.css(n),
                !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
                z.isEmptyObject(n) || this._trigger("resize", e, this.ui())),
                    !1
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var t, i, n, s, a, r, o, l = this.options, u = this;
                return this._helper && (n = (i = (t = this._proportionallyResizeElements).length && /textarea/i.test(t[0].nodeName)) && this._hasScroll(t[0], "left") ? 0 : u.sizeDiff.height,
                    s = i ? 0 : u.sizeDiff.width,
                    a = {
                        width: u.helper.width() - s,
                        height: u.helper.height() - n
                    },
                    r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null,
                    o = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null,
                l.animate || this.element.css(z.extend(a, {
                    top: o,
                    left: r
                })),
                    u.helper.height(u.size.height),
                    u.helper.width(u.size.width),
                this._helper && !l.animate && this._proportionallyResize()),
                    z("body").css("cursor", "auto"),
                    this.element.removeClass("ui-resizable-resizing"),
                    this._propagate("stop", e),
                this._helper && this.helper.remove(),
                    !1
            },
            _updateVirtualBoundaries: function(e) {
                var t, i, n, s, a, r = this.options;
                a = {
                    minWidth: this._isNumber(r.minWidth) ? r.minWidth : 0,
                    maxWidth: this._isNumber(r.maxWidth) ? r.maxWidth : 1 / 0,
                    minHeight: this._isNumber(r.minHeight) ? r.minHeight : 0,
                    maxHeight: this._isNumber(r.maxHeight) ? r.maxHeight : 1 / 0
                },
                (this._aspectRatio || e) && (t = a.minHeight * this.aspectRatio,
                    n = a.minWidth / this.aspectRatio,
                    i = a.maxHeight * this.aspectRatio,
                    s = a.maxWidth / this.aspectRatio,
                t > a.minWidth && (a.minWidth = t),
                n > a.minHeight && (a.minHeight = n),
                i < a.maxWidth && (a.maxWidth = i),
                s < a.maxHeight && (a.maxHeight = s)),
                    this._vBoundaries = a
            },
            _updateCache: function(e) {
                this.offset = this.helper.offset(),
                this._isNumber(e.left) && (this.position.left = e.left),
                this._isNumber(e.top) && (this.position.top = e.top),
                this._isNumber(e.height) && (this.size.height = e.height),
                this._isNumber(e.width) && (this.size.width = e.width)
            },
            _updateRatio: function(e) {
                var t = this.position
                    , i = this.size
                    , n = this.axis;
                return this._isNumber(e.height) ? e.width = e.height * this.aspectRatio : this._isNumber(e.width) && (e.height = e.width / this.aspectRatio),
                "sw" === n && (e.left = t.left + (i.width - e.width),
                    e.top = null),
                "nw" === n && (e.top = t.top + (i.height - e.height),
                    e.left = t.left + (i.width - e.width)),
                    e
            },
            _respectSize: function(e) {
                var t = this._vBoundaries
                    , i = this.axis
                    , n = this._isNumber(e.width) && t.maxWidth && t.maxWidth < e.width
                    , s = this._isNumber(e.height) && t.maxHeight && t.maxHeight < e.height
                    , a = this._isNumber(e.width) && t.minWidth && t.minWidth > e.width
                    , r = this._isNumber(e.height) && t.minHeight && t.minHeight > e.height
                    , o = this.originalPosition.left + this.originalSize.width
                    , l = this.position.top + this.size.height
                    , u = /sw|nw|w/.test(i)
                    , c = /nw|ne|n/.test(i);
                return a && (e.width = t.minWidth),
                r && (e.height = t.minHeight),
                n && (e.width = t.maxWidth),
                s && (e.height = t.maxHeight),
                a && u && (e.left = o - t.minWidth),
                n && u && (e.left = o - t.maxWidth),
                r && c && (e.top = l - t.minHeight),
                s && c && (e.top = l - t.maxHeight),
                    e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null,
                    e
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length) {
                    var e, t, i, n, s, a = this.helper || this.element;
                    for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                        if (s = this._proportionallyResizeElements[e],
                                !this.borderDif)
                            for (this.borderDif = [],
                                     i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")],
                                     n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")],
                                     t = 0; t < i.length; t++)
                                this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(n[t], 10) || 0);
                        s.css({
                            height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                            width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                        })
                    }
                }
            },
            _renderProxy: function() {
                var e = this.element
                    , t = this.options;
                this.elementOffset = e.offset(),
                    this._helper ? (this.helper = this.helper || z("<div style='overflow:hidden;'></div>"),
                        this.helper.addClass(this._helper).css({
                            width: this.element.outerWidth() - 1,
                            height: this.element.outerHeight() - 1,
                            position: "absolute",
                            left: this.elementOffset.left + "px",
                            top: this.elementOffset.top + "px",
                            zIndex: ++t.zIndex
                        }),
                        this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(e, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(e, t) {
                    var i = this.originalSize;
                    return {
                        left: this.originalPosition.left + t,
                        width: i.width - t
                    }
                },
                n: function(e, t, i) {
                    var n = this.originalSize;
                    return {
                        top: this.originalPosition.top + i,
                        height: n.height - i
                    }
                },
                s: function(e, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, t, i) {
                    return z.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
                },
                sw: function(e, t, i) {
                    return z.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
                },
                ne: function(e, t, i) {
                    return z.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
                },
                nw: function(e, t, i) {
                    return z.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
                }
            },
            _propagate: function(e, t) {
                z.ui.plugin.call(this, e, [t, this.ui()]),
                "resize" !== e && this._trigger(e, t, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition,
                    prevSize: this.prevSize,
                    prevPosition: this.prevPosition
                }
            }
        }),
            z.ui.plugin.add("resizable", "animate", {
                stop: function(t) {
                    var i = z(this).resizable("instance")
                        , e = i.options
                        , n = i._proportionallyResizeElements
                        , s = n.length && /textarea/i.test(n[0].nodeName)
                        , a = s && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height
                        , r = s ? 0 : i.sizeDiff.width
                        , o = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    }
                        , l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null
                        , u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                    i.element.animate(z.extend(o, u && l ? {
                        top: u,
                        left: l
                    } : {}), {
                        duration: e.animateDuration,
                        easing: e.animateEasing,
                        step: function() {
                            var e = {
                                width: parseInt(i.element.css("width"), 10),
                                height: parseInt(i.element.css("height"), 10),
                                top: parseInt(i.element.css("top"), 10),
                                left: parseInt(i.element.css("left"), 10)
                            };
                            n && n.length && z(n[0]).css({
                                width: e.width,
                                height: e.height
                            }),
                                i._updateCache(e),
                                i._propagate("resize", t)
                        }
                    })
                }
            }),
            z.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var i, n, e, t, s, a, r, o = z(this).resizable("instance"), l = o.options, u = o.element, c = l.containment, h = c instanceof z ? c.get(0) : /parent/.test(c) ? u.parent().get(0) : c;
                    h && (o.containerElement = z(h),
                        /document/.test(c) || c === document ? (o.containerOffset = {
                            left: 0,
                            top: 0
                        },
                            o.containerPosition = {
                                left: 0,
                                top: 0
                            },
                            o.parentData = {
                                element: z(document),
                                left: 0,
                                top: 0,
                                width: z(document).width(),
                                height: z(document).height() || document.body.parentNode.scrollHeight
                            }) : (i = z(h),
                            n = [],
                            z(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
                                n[e] = o._num(i.css("padding" + t))
                            }),
                            o.containerOffset = i.offset(),
                            o.containerPosition = i.position(),
                            o.containerSize = {
                                height: i.innerHeight() - n[3],
                                width: i.innerWidth() - n[1]
                            },
                            e = o.containerOffset,
                            t = o.containerSize.height,
                            s = o.containerSize.width,
                            a = o._hasScroll(h, "left") ? h.scrollWidth : s,
                            r = o._hasScroll(h) ? h.scrollHeight : t,
                            o.parentData = {
                                element: h,
                                left: e.left,
                                top: e.top,
                                width: a,
                                height: r
                            }))
                },
                resize: function(e, t) {
                    var i, n, s, a, r = z(this).resizable("instance"), o = r.options, l = r.containerOffset, u = r.position, c = r._aspectRatio || e.shiftKey, h = {
                        top: 0,
                        left: 0
                    }, p = r.containerElement, d = !0;
                    p[0] !== document && /static/.test(p.css("position")) && (h = l),
                    u.left < (r._helper ? l.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - l.left : r.position.left - h.left),
                    c && (r.size.height = r.size.width / r.aspectRatio,
                        d = !1),
                        r.position.left = o.helper ? l.left : 0),
                    u.top < (r._helper ? l.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - l.top : r.position.top),
                    c && (r.size.width = r.size.height * r.aspectRatio,
                        d = !1),
                        r.position.top = r._helper ? l.top : 0),
                        r.offset.left = r.parentData.left + r.position.left,
                        r.offset.top = r.parentData.top + r.position.top,
                        i = Math.abs((r._helper ? r.offset.left - h.left : r.offset.left - l.left) + r.sizeDiff.width),
                        n = Math.abs((r._helper ? r.offset.top - h.top : r.offset.top - l.top) + r.sizeDiff.height),
                        s = r.containerElement.get(0) === r.element.parent().get(0),
                        a = /relative|absolute/.test(r.containerElement.css("position")),
                    s && a && (i -= Math.abs(r.parentData.left)),
                    i + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - i,
                    c && (r.size.height = r.size.width / r.aspectRatio,
                        d = !1)),
                    n + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - n,
                    c && (r.size.width = r.size.height * r.aspectRatio,
                        d = !1)),
                    d || (r.position.left = t.prevPosition.left,
                        r.position.top = t.prevPosition.top,
                        r.size.width = t.prevSize.width,
                        r.size.height = t.prevSize.height)
                },
                stop: function() {
                    var e = z(this).resizable("instance")
                        , t = e.options
                        , i = e.containerOffset
                        , n = e.containerPosition
                        , s = e.containerElement
                        , a = z(e.helper)
                        , r = a.offset()
                        , o = a.outerWidth() - e.sizeDiff.width
                        , l = a.outerHeight() - e.sizeDiff.height;
                    e._helper && !t.animate && /relative/.test(s.css("position")) && z(this).css({
                        left: r.left - n.left - i.left,
                        width: o,
                        height: l
                    }),
                    e._helper && !t.animate && /static/.test(s.css("position")) && z(this).css({
                        left: r.left - n.left - i.left,
                        width: o,
                        height: l
                    })
                }
            }),
            z.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var e = z(this).resizable("instance").options
                        , t = function(e) {
                        z(e).each(function() {
                            var e = z(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseInt(e.width(), 10),
                                height: parseInt(e.height(), 10),
                                left: parseInt(e.css("left"), 10),
                                top: parseInt(e.css("top"), 10)
                            })
                        })
                    };
                    "object" != typeof e.alsoResize || e.alsoResize.parentNode ? t(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0],
                        t(e.alsoResize)) : z.each(e.alsoResize, function(e) {
                        t(e)
                    })
                },
                resize: function(e, a) {
                    var t = z(this).resizable("instance")
                        , i = t.options
                        , n = t.originalSize
                        , s = t.originalPosition
                        , r = {
                        height: t.size.height - n.height || 0,
                        width: t.size.width - n.width || 0,
                        top: t.position.top - s.top || 0,
                        left: t.position.left - s.left || 0
                    }
                        , o = function(e, i) {
                        z(e).each(function() {
                            var e = z(this)
                                , n = z(this).data("ui-resizable-alsoresize")
                                , s = {}
                                , t = i && i.length ? i : e.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            z.each(t, function(e, t) {
                                var i = (n[t] || 0) + (r[t] || 0);
                                i && 0 <= i && (s[t] = i || null)
                            }),
                                e.css(s)
                        })
                    };
                    "object" != typeof i.alsoResize || i.alsoResize.nodeType ? o(i.alsoResize) : z.each(i.alsoResize, function(e, t) {
                        o(e, t)
                    })
                },
                stop: function() {
                    z(this).removeData("resizable-alsoresize")
                }
            }),
            z.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var e = z(this).resizable("instance")
                        , t = e.options
                        , i = e.size;
                    e.ghost = e.originalElement.clone(),
                        e.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: i.height,
                            width: i.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }).addClass("ui-resizable-ghost").addClass("string" == typeof t.ghost ? t.ghost : ""),
                        e.ghost.appendTo(e.helper)
                },
                resize: function() {
                    var e = z(this).resizable("instance");
                    e.ghost && e.ghost.css({
                        position: "relative",
                        height: e.size.height,
                        width: e.size.width
                    })
                },
                stop: function() {
                    var e = z(this).resizable("instance");
                    e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                }
            }),
            z.ui.plugin.add("resizable", "grid", {
                resize: function() {
                    var e = z(this).resizable("instance")
                        , t = e.options
                        , i = e.size
                        , n = e.originalSize
                        , s = e.originalPosition
                        , a = e.axis
                        , r = "number" == typeof t.grid ? [t.grid, t.grid] : t.grid
                        , o = r[0] || 1
                        , l = r[1] || 1
                        , u = Math.round((i.width - n.width) / o) * o
                        , c = Math.round((i.height - n.height) / l) * l
                        , h = n.width + u
                        , p = n.height + c
                        , d = t.maxWidth && t.maxWidth < h
                        , f = t.maxHeight && t.maxHeight < p
                        , m = t.minWidth && t.minWidth > h
                        , g = t.minHeight && t.minHeight > p;
                    t.grid = r,
                    m && (h += o),
                    g && (p += l),
                    d && (h -= o),
                    f && (p -= l),
                        /^(se|s|e)$/.test(a) ? (e.size.width = h,
                            e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = h,
                            e.size.height = p,
                            e.position.top = s.top - c) : /^(sw)$/.test(a) ? (e.size.width = h,
                            e.size.height = p,
                            e.position.left = s.left - u) : (0 < p - l ? (e.size.height = p,
                            e.position.top = s.top - c) : (e.size.height = l,
                            e.position.top = s.top + n.height - l),
                            0 < h - o ? (e.size.width = h,
                                e.position.left = s.left - u) : (e.size.width = o,
                                e.position.left = s.left + n.width - o))
                }
            });
        z.ui.resizable,
            z.widget("ui.menu", {
                version: "1.11.0",
                defaultElement: "<ul>",
                delay: 300,
                options: {
                    icons: {
                        submenu: "ui-icon-carat-1-e"
                    },
                    items: "> *",
                    menus: "ul",
                    position: {
                        my: "left-1 top",
                        at: "right top"
                    },
                    role: "menu",
                    blur: null,
                    focus: null,
                    select: null
                },
                _create: function() {
                    this.activeMenu = this.element,
                        this.mouseHandled = !1,
                        this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                            role: this.options.role,
                            tabIndex: 0
                        }),
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"),
                        this._on({
                            "mousedown .ui-menu-item": function(e) {
                                e.preventDefault()
                            },
                            "click .ui-menu-item": function(e) {
                                var t = z(e.target);
                                !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e),
                                e.isPropagationStopped() || (this.mouseHandled = !0),
                                    t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && z(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                            },
                            "mouseenter .ui-menu-item": function(e) {
                                var t = z(e.currentTarget);
                                t.siblings(".ui-state-active").removeClass("ui-state-active"),
                                    this.focus(e, t)
                            },
                            mouseleave: "collapseAll",
                            "mouseleave .ui-menu": "collapseAll",
                            focus: function(e, t) {
                                var i = this.active || this.element.find(this.options.items).eq(0);
                                t || this.focus(e, i)
                            },
                            blur: function(e) {
                                this._delay(function() {
                                    z.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                                })
                            },
                            keydown: "_keydown"
                        }),
                        this.refresh(),
                        this._on(this.document, {
                            click: function(e) {
                                this._closeOnDocumentClick(e) && this.collapseAll(e),
                                    this.mouseHandled = !1
                            }
                        })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),
                        this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                            var e = z(this);
                            e.data("ui-menu-submenu-carat") && e.remove()
                        }),
                        this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(e) {
                    var t, i, n, s, a, r = !0;
                    function o(e) {
                        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                    }
                    switch (e.keyCode) {
                        case z.ui.keyCode.PAGE_UP:
                            this.previousPage(e);
                            break;
                        case z.ui.keyCode.PAGE_DOWN:
                            this.nextPage(e);
                            break;
                        case z.ui.keyCode.HOME:
                            this._move("first", "first", e);
                            break;
                        case z.ui.keyCode.END:
                            this._move("last", "last", e);
                            break;
                        case z.ui.keyCode.UP:
                            this.previous(e);
                            break;
                        case z.ui.keyCode.DOWN:
                            this.next(e);
                            break;
                        case z.ui.keyCode.LEFT:
                            this.collapse(e);
                            break;
                        case z.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                            break;
                        case z.ui.keyCode.ENTER:
                        case z.ui.keyCode.SPACE:
                            this._activate(e);
                            break;
                        case z.ui.keyCode.ESCAPE:
                            this.collapse(e);
                            break;
                        default:
                            r = !1,
                                i = this.previousFilter || "",
                                n = String.fromCharCode(e.keyCode),
                                s = !1,
                                clearTimeout(this.filterTimer),
                                n === i ? s = !0 : n = i + n,
                                a = new RegExp("^" + o(n),"i"),
                                t = this.activeMenu.find(this.options.items).filter(function() {
                                    return a.test(z(this).text())
                                }),
                            (t = s && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (n = String.fromCharCode(e.keyCode),
                                a = new RegExp("^" + o(n),"i"),
                                t = this.activeMenu.find(this.options.items).filter(function() {
                                    return a.test(z(this).text())
                                })),
                                t.length ? (this.focus(e, t),
                                    1 < t.length ? (this.previousFilter = n,
                                        this.filterTimer = this._delay(function() {
                                            delete this.previousFilter
                                        }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                    }
                    r && e.preventDefault()
                },
                _activate: function(e) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(e) : this.select(e))
                },
                refresh: function() {
                    var e, t = this, n = this.options.icons.submenu, i = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length),
                        i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                            role: this.options.role,
                            "aria-hidden": "true",
                            "aria-expanded": "false"
                        }).each(function() {
                            var e = z(this)
                                , t = e.parent()
                                , i = z("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                            t.attr("aria-haspopup", "true").prepend(i),
                                e.attr("aria-labelledby", t.attr("id"))
                        }),
                        (e = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                            var e = z(this);
                            t._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                        }),
                        e.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                            tabIndex: -1,
                            role: this._itemRole()
                        }),
                        e.filter(".ui-state-disabled").attr("aria-disabled", "true"),
                    this.active && !z.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(e, t) {
                    "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),
                    "disabled" === e && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t),
                        this._super(e, t)
                },
                focus: function(e, t) {
                    var i, n;
                    this.blur(e, e && "focus" === e.type),
                        this._scrollIntoView(t),
                        this.active = t.first(),
                        n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"),
                    this.options.role && this.element.attr("aria-activedescendant", n.attr("id")),
                        this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),
                        e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
                            this._close()
                        }, this.delay),
                    (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i),
                        this.activeMenu = t.parent(),
                        this._trigger("focus", e, {
                            item: t
                        })
                },
                _scrollIntoView: function(e) {
                    var t, i, n, s, a, r;
                    this._hasScroll() && (t = parseFloat(z.css(this.activeMenu[0], "borderTopWidth")) || 0,
                        i = parseFloat(z.css(this.activeMenu[0], "paddingTop")) || 0,
                        n = e.offset().top - this.activeMenu.offset().top - t - i,
                        s = this.activeMenu.scrollTop(),
                        a = this.activeMenu.height(),
                        r = e.outerHeight(),
                        n < 0 ? this.activeMenu.scrollTop(s + n) : a < n + r && this.activeMenu.scrollTop(s + n - a + r))
                },
                blur: function(e, t) {
                    t || clearTimeout(this.timer),
                    this.active && (this.active.removeClass("ui-state-focus"),
                        this.active = null,
                        this._trigger("blur", e, {
                            item: this.active
                        }))
                },
                _startOpening: function(e) {
                    clearTimeout(this.timer),
                    "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
                        this._close(),
                            this._open(e)
                    }, this.delay))
                },
                _open: function(e) {
                    var t = z.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer),
                        this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
                        e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
                },
                collapseAll: function(t, i) {
                    clearTimeout(this.timer),
                        this.timer = this._delay(function() {
                            var e = i ? this.element : z(t && t.target).closest(this.element.find(".ui-menu"));
                            e.length || (e = this.element),
                                this._close(e),
                                this.blur(t),
                                this.activeMenu = e
                        }, this.delay)
                },
                _close: function(e) {
                    e || (e = this.active ? this.active.parent() : this.element),
                        e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                },
                _closeOnDocumentClick: function(e) {
                    return !z(e.target).closest(".ui-menu").length
                },
                _isDivider: function(e) {
                    return !/[^\-\u2014\u2013\s]/.test(e.text())
                },
                collapse: function(e) {
                    var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    t && t.length && (this._close(),
                        this.focus(e, t))
                },
                expand: function(e) {
                    var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    t && t.length && (this._open(t.parent()),
                        this._delay(function() {
                            this.focus(e, t)
                        }))
                },
                next: function(e) {
                    this._move("next", "first", e)
                },
                previous: function(e) {
                    this._move("prev", "last", e)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(e, t, i) {
                    var n;
                    this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)),
                    n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[t]()),
                        this.focus(i, n)
                },
                nextPage: function(e) {
                    var t, i, n;
                    this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top,
                        n = this.element.height(),
                        this.active.nextAll(".ui-menu-item").each(function() {
                            return (t = z(this)).offset().top - i - n < 0
                        }),
                        this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())) : this.next(e)
                },
                previousPage: function(e) {
                    var t, i, n;
                    this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top,
                        n = this.element.height(),
                        this.active.prevAll(".ui-menu-item").each(function() {
                            return 0 < (t = z(this)).offset().top - i + n
                        }),
                        this.focus(e, t)) : this.focus(e, this.activeMenu.find(this.options.items).first())) : this.next(e)
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(e) {
                    this.active = this.active || z(e.target).closest(".ui-menu-item");
                    var t = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(e, !0),
                        this._trigger("select", e, t)
                }
            });
        z.widget("ui.autocomplete", {
            version: "1.11.0",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var i, n, s, e = this.element[0].nodeName.toLowerCase(), t = "textarea" === e, a = "input" === e;
                this.isMultiLine = !!t || !a && this.element.prop("isContentEditable"),
                    this.valueMethod = this.element[t || a ? "val" : "text"],
                    this.isNewMenu = !0,
                    this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"),
                    this._on(this.element, {
                        keydown: function(e) {
                            if (this.element.prop("readOnly"))
                                n = s = i = !0;
                            else {
                                n = s = i = !1;
                                var t = z.ui.keyCode;
                                switch (e.keyCode) {
                                    case t.PAGE_UP:
                                        i = !0,
                                            this._move("previousPage", e);
                                        break;
                                    case t.PAGE_DOWN:
                                        i = !0,
                                            this._move("nextPage", e);
                                        break;
                                    case t.UP:
                                        i = !0,
                                            this._keyEvent("previous", e);
                                        break;
                                    case t.DOWN:
                                        i = !0,
                                            this._keyEvent("next", e);
                                        break;
                                    case t.ENTER:
                                        this.menu.active && (i = !0,
                                            e.preventDefault(),
                                            this.menu.select(e));
                                        break;
                                    case t.TAB:
                                        this.menu.active && this.menu.select(e);
                                        break;
                                    case t.ESCAPE:
                                        this.menu.element.is(":visible") && (this._value(this.term),
                                            this.close(e),
                                            e.preventDefault());
                                        break;
                                    default:
                                        n = !0,
                                            this._searchTimeout(e)
                                }
                            }
                        },
                        keypress: function(e) {
                            if (i)
                                return i = !1,
                                    void (this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault());
                            if (!n) {
                                var t = z.ui.keyCode;
                                switch (e.keyCode) {
                                    case t.PAGE_UP:
                                        this._move("previousPage", e);
                                        break;
                                    case t.PAGE_DOWN:
                                        this._move("nextPage", e);
                                        break;
                                    case t.UP:
                                        this._keyEvent("previous", e);
                                        break;
                                    case t.DOWN:
                                        this._keyEvent("next", e)
                                }
                            }
                        },
                        input: function(e) {
                            if (s)
                                return s = !1,
                                    void e.preventDefault();
                            this._searchTimeout(e)
                        },
                        focus: function() {
                            this.selectedItem = null,
                                this.previous = this._value()
                        },
                        blur: function(e) {
                            this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching),
                                this.close(e),
                                this._change(e))
                        }
                    }),
                    this._initSource(),
                    this.menu = z("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                        role: null
                    }).hide().menu("instance"),
                    this._on(this.menu.element, {
                        mousedown: function(e) {
                            e.preventDefault(),
                                this.cancelBlur = !0,
                                this._delay(function() {
                                    delete this.cancelBlur
                                });
                            var i = this.menu.element[0];
                            z(e.target).closest(".ui-menu-item").length || this._delay(function() {
                                var t = this;
                                this.document.one("mousedown", function(e) {
                                    e.target === t.element[0] || e.target === i || z.contains(i, e.target) || t.close()
                                })
                            })
                        },
                        menufocus: function(e, t) {
                            var i, n;
                            if (this.isNewMenu && (this.isNewMenu = !1,
                                e.originalEvent && /^mouse/.test(e.originalEvent.type)))
                                return this.menu.blur(),
                                    void this.document.one("mousemove", function() {
                                        z(e.target).trigger(e.originalEvent)
                                    });
                            n = t.item.data("ui-autocomplete-item"),
                            !1 !== this._trigger("focus", e, {
                                item: n
                            }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value),
                            (i = t.item.attr("aria-label") || n.value) && jQuery.trim(i).length && (this.liveRegion.children().hide(),
                                z("<div>").text(i).appendTo(this.liveRegion))
                        },
                        menuselect: function(e, t) {
                            var i = t.item.data("ui-autocomplete-item")
                                , n = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(),
                                this.previous = n,
                                this._delay(function() {
                                    this.previous = n,
                                        this.selectedItem = i
                                })),
                            !1 !== this._trigger("select", e, {
                                item: i
                            }) && this._value(i.value),
                                this.term = this._value(),
                                this.close(e),
                                this.selectedItem = i
                        }
                    }),
                    this.liveRegion = z("<span>", {
                        role: "status",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
            },
            _destroy: function() {
                clearTimeout(this.searching),
                    this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),
                    this.menu.element.remove(),
                    this.liveRegion.remove()
            },
            _setOption: function(e, t) {
                this._super(e, t),
                "source" === e && this._initSource(),
                "appendTo" === e && this.menu.element.appendTo(this._appendTo()),
                "disabled" === e && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? z(e) : this.document.find(e).eq(0)),
                e && e[0] || (e = this.element.closest(".ui-front")),
                e.length || (e = this.document[0].body),
                    e
            },
            _initSource: function() {
                var i, n, s = this;
                z.isArray(this.options.source) ? (i = this.options.source,
                        this.source = function(e, t) {
                            t(z.ui.autocomplete.filter(i, e.term))
                        }
                ) : "string" == typeof this.options.source ? (n = this.options.source,
                        this.source = function(e, t) {
                            s.xhr && s.xhr.abort(),
                                s.xhr = z.ajax({
                                    url: n,
                                    data: e,
                                    dataType: "json",
                                    success: function(e) {
                                        t(e)
                                    },
                                    error: function() {
                                        t([])
                                    }
                                })
                        }
                ) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching),
                    this.searching = this._delay(function() {
                        var e = this.term === this._value()
                            , t = this.menu.element.is(":visible")
                            , i = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                        e && (!e || t || i) || (this.selectedItem = null,
                            this.search(null, n))
                    }, this.options.delay)
            },
            search: function(e, t) {
                return e = null != e ? e : this._value(),
                    this.term = this._value(),
                    e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
            },
            _search: function(e) {
                this.pending++,
                    this.element.addClass("ui-autocomplete-loading"),
                    this.cancelSearch = !1,
                    this.source({
                        term: e
                    }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return z.proxy(function(e) {
                    t === this.requestIndex && this.__response(e),
                        this.pending--,
                    this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(e) {
                e && (e = this._normalize(e)),
                    this._trigger("response", null, {
                        content: e
                    }),
                    !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e),
                        this._trigger("open")) : this._close()
            },
            close: function(e) {
                this.cancelSearch = !0,
                    this._close(e)
            },
            _close: function(e) {
                this.menu.element.is(":visible") && (this.menu.element.hide(),
                    this.menu.blur(),
                    this.isNewMenu = !0,
                    this._trigger("close", e))
            },
            _change: function(e) {
                this.previous !== this._value() && this._trigger("change", e, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : z.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : z.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var t = this.menu.element.empty();
                this._renderMenu(t, e),
                    this.isNewMenu = !0,
                    this.menu.refresh(),
                    t.show(),
                    this._resizeMenu(),
                    t.position(z.extend({
                        of: this.element
                    }, this.options.position)),
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var e = this.menu.element;
                e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(i, e) {
                var n = this;
                z.each(e, function(e, t) {
                    n._renderItemData(i, t)
                })
            },
            _renderItemData: function(e, t) {
                return this._renderItem(e, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(e, t) {
                return z("<li>").text(t.label).appendTo(e)
            },
            _move: function(e, t) {
                if (this.menu.element.is(":visible"))
                    return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this.isMultiLine || this._value(this.term),
                        void this.menu.blur()) : void this.menu[e](t);
                this.search(null, t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(e, t) {
                this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t),
                    t.preventDefault())
            }
        }),
            z.extend(z.ui.autocomplete, {
                escapeRegex: function(e) {
                    return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                },
                filter: function(e, t) {
                    var i = new RegExp(z.ui.autocomplete.escapeRegex(t),"i");
                    return z.grep(e, function(e) {
                        return i.test(e.label || e.value || e)
                    })
                }
            }),
            z.widget("ui.autocomplete", z.ui.autocomplete, {
                options: {
                    messages: {
                        noResults: "No search results.",
                        results: function(e) {
                            return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                        }
                    }
                },
                __response: function(e) {
                    var t;
                    this._superApply(arguments),
                    this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults,
                        this.liveRegion.children().hide(),
                        z("<div>").text(t).appendTo(this.liveRegion))
                }
            });
        z.ui.autocomplete
    }),
    function(e) {
        "function" == typeof define && define.amd ? define("jquery-validate", ["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(c) {
        c.extend(c.fn, {
            validate: function(e) {
                if (this.length) {
                    var n = c.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"),
                        n = new c.validator(e,this[0]),
                        c.data(this[0], "validator", n),
                    n.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                        n.submitButton = e.currentTarget,
                        c(this).hasClass("cancel") && (n.cancelSubmit = !0),
                        void 0 !== c(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                    }),
                        this.on("submit.validate", function(i) {
                            function e() {
                                var e, t;
                                return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (e = c("<input type='hidden'/>").attr("name", n.submitButton.name).val(c(n.submitButton).val()).appendTo(n.currentForm)),
                                !n.settings.submitHandler || (t = n.settings.submitHandler.call(n, n.currentForm, i),
                                e && e.remove(),
                                void 0 !== t && t)
                            }
                            return n.settings.debug && i.preventDefault(),
                                n.cancelSubmit ? (n.cancelSubmit = !1,
                                    e()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : e() : (n.focusInvalid(),
                                    !1)
                        })),
                        n)
                }
                e && e.debug && window.console
            },
            valid: function() {
                var e, t, i;
                return c(this[0]).is("form") ? e = this.validate().form() : (i = [],
                    e = !0,
                    t = c(this[0].form).validate(),
                    this.each(function() {
                        (e = t.element(this) && e) || (i = i.concat(t.errorList))
                    }),
                    t.errorList = i),
                    e
            },
            rules: function(e, t) {
                var i, n, s, a, r, o, l = this[0];
                if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0],
                        l.name = this.attr("name")),
                    null != l.form)) {
                    if (e)
                        switch (n = (i = c.data(l.form, "validator").settings).rules,
                            s = c.validator.staticRules(l),
                            e) {
                            case "add":
                                c.extend(s, c.validator.normalizeRule(t)),
                                    delete s.messages,
                                    n[l.name] = s,
                                t.messages && (i.messages[l.name] = c.extend(i.messages[l.name], t.messages));
                                break;
                            case "remove":
                                return t ? (o = {},
                                    c.each(t.split(/\s/), function(e, t) {
                                        o[t] = s[t],
                                            delete s[t]
                                    }),
                                    o) : (delete n[l.name],
                                    s)
                        }
                    return (a = c.validator.normalizeRules(c.extend({}, c.validator.classRules(l), c.validator.attributeRules(l), c.validator.dataRules(l), c.validator.staticRules(l)), l)).required && (r = a.required,
                        delete a.required,
                        a = c.extend({
                            required: r
                        }, a)),
                    a.remote && (r = a.remote,
                        delete a.remote,
                        a = c.extend(a, {
                            remote: r
                        })),
                        a
                }
            }
        }),
            c.extend(c.expr.pseudos || c.expr[":"], {
                blank: function(e) {
                    return !c.trim("" + c(e).val())
                },
                filled: function(e) {
                    var t = c(e).val();
                    return null !== t && !!c.trim("" + t)
                },
                unchecked: function(e) {
                    return !c(e).prop("checked")
                }
            }),
            c.validator = function(e, t) {
                this.settings = c.extend(!0, {}, c.validator.defaults, e),
                    this.currentForm = t,
                    this.init()
            }
            ,
            c.validator.format = function(i, e) {
                return 1 === arguments.length ? function() {
                        var e = c.makeArray(arguments);
                        return e.unshift(i),
                            c.validator.format.apply(this, e)
                    }
                    : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = c.makeArray(arguments).slice(1)),
                    e.constructor !== Array && (e = [e]),
                        c.each(e, function(e, t) {
                            i = i.replace(new RegExp("\\{" + e + "\\}","g"), function() {
                                return t
                            })
                        })),
                        i)
            }
            ,
            c.extend(c.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    pendingClass: "pending",
                    validClass: "valid",
                    errorElement: "label",
                    focusCleanup: !1,
                    focusInvalid: !0,
                    errorContainer: c([]),
                    errorLabelContainer: c([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function(e) {
                        this.lastActive = e,
                        this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass),
                            this.hideThese(this.errorsFor(e)))
                    },
                    onfocusout: function(e) {
                        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                    },
                    onkeyup: function(e, t) {
                        9 === t.which && "" === this.elementValue(e) || -1 !== c.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
                    },
                    onclick: function(e) {
                        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                    },
                    highlight: function(e, t, i) {
                        "radio" === e.type ? this.findByName(e.name).addClass(t).removeClass(i) : c(e).addClass(t).removeClass(i)
                    },
                    unhighlight: function(e, t, i) {
                        "radio" === e.type ? this.findByName(e.name).removeClass(t).addClass(i) : c(e).removeClass(t).addClass(i)
                    }
                },
                setDefaults: function(e) {
                    c.extend(c.validator.defaults, e)
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    equalTo: "Please enter the same value again.",
                    maxlength: c.validator.format("Please enter no more than {0} characters."),
                    minlength: c.validator.format("Please enter at least {0} characters."),
                    rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: c.validator.format("Please enter a value between {0} and {1}."),
                    max: c.validator.format("Please enter a value less than or equal to {0}."),
                    min: c.validator.format("Please enter a value greater than or equal to {0}."),
                    step: c.validator.format("Please enter a multiple of {0}.")
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function() {
                        this.labelContainer = c(this.settings.errorLabelContainer),
                            this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm),
                            this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                            this.submitted = {},
                            this.valueCache = {},
                            this.pendingRequest = 0,
                            this.pending = {},
                            this.invalid = {},
                            this.reset();
                        var i, n = this.groups = {};
                        function e(e) {
                            !this.form && this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0],
                                this.name = c(this).attr("name"));
                            var t = c.data(this.form, "validator")
                                , i = "on" + e.type.replace(/^validate/, "")
                                , n = t.settings;
                            n[i] && !c(this).is(n.ignore) && n[i].call(t, this, e)
                        }
                        c.each(this.settings.groups, function(i, e) {
                            "string" == typeof e && (e = e.split(/\s/)),
                                c.each(e, function(e, t) {
                                    n[t] = i
                                })
                        }),
                            i = this.settings.rules,
                            c.each(i, function(e, t) {
                                i[e] = c.validator.normalizeRule(t)
                            }),
                            c(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e),
                        this.settings.invalidHandler && c(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
                    },
                    form: function() {
                        return this.checkForm(),
                            c.extend(this.submitted, this.errorMap),
                            this.invalid = c.extend({}, this.errorMap),
                        this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]),
                            this.showErrors(),
                            this.valid()
                    },
                    checkForm: function() {
                        this.prepareForm();
                        for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++)
                            this.check(t[e]);
                        return this.valid()
                    },
                    element: function(e) {
                        var t, i, n = this.clean(e), s = this.validationTargetFor(n), a = this, r = !0;
                        return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s),
                            this.currentElements = c(s),
                        (i = this.groups[s.name]) && c.each(this.groups, function(e, t) {
                            t === i && e !== s.name && (n = a.validationTargetFor(a.clean(a.findByName(e)))) && n.name in a.invalid && (a.currentElements.push(n),
                                r = a.check(n) && r)
                        }),
                            t = !1 !== this.check(s),
                            r = r && t,
                            this.invalid[s.name] = !t,
                        this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                            this.showErrors(),
                            c(e).attr("aria-invalid", !t)),
                            r
                    },
                    showErrors: function(t) {
                        if (t) {
                            var i = this;
                            c.extend(this.errorMap, t),
                                this.errorList = c.map(this.errorMap, function(e, t) {
                                    return {
                                        message: e,
                                        element: i.findByName(t)[0]
                                    }
                                }),
                                this.successList = c.grep(this.successList, function(e) {
                                    return !(e.name in t)
                                })
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    },
                    resetForm: function() {
                        c.fn.resetForm && c(this.currentForm).resetForm(),
                            this.invalid = {},
                            this.submitted = {},
                            this.prepareForm(),
                            this.hideErrors();
                        var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                        this.resetElements(e)
                    },
                    resetElements: function(e) {
                        var t;
                        if (this.settings.unhighlight)
                            for (t = 0; e[t]; t++)
                                this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""),
                                    this.findByName(e[t].name).removeClass(this.settings.validClass);
                        else
                            e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                    },
                    numberOfInvalids: function() {
                        return this.objectLength(this.invalid)
                    },
                    objectLength: function(e) {
                        var t, i = 0;
                        for (t in e)
                            void 0 !== e[t] && null !== e[t] && !1 !== e[t] && i++;
                        return i
                    },
                    hideErrors: function() {
                        this.hideThese(this.toHide)
                    },
                    hideThese: function(e) {
                        e.not(this.containers).text(""),
                            this.addWrapper(e).hide()
                    },
                    valid: function() {
                        return 0 === this.size()
                    },
                    size: function() {
                        return this.errorList.length
                    },
                    focusInvalid: function() {
                        if (this.settings.focusInvalid)
                            try {
                                c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                            } catch (e) {}
                    },
                    findLastActive: function() {
                        var t = this.lastActive;
                        return t && 1 === c.grep(this.errorList, function(e) {
                            return e.element.name === t.name
                        }).length && t
                    },
                    elements: function() {
                        var t = this
                            , i = {};
                        return c(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                            var e = this.name || c(this).attr("name");
                            return !e && t.settings.debug && window.console,
                            this.hasAttribute("contenteditable") && (this.form = c(this).closest("form")[0],
                                this.name = e),
                            !(e in i || !t.objectLength(c(this).rules())) && (i[e] = !0)
                        })
                    },
                    clean: function(e) {
                        return c(e)[0]
                    },
                    errors: function() {
                        var e = this.settings.errorClass.split(" ").join(".");
                        return c(this.settings.errorElement + "." + e, this.errorContext)
                    },
                    resetInternals: function() {
                        this.successList = [],
                            this.errorList = [],
                            this.errorMap = {},
                            this.toShow = c([]),
                            this.toHide = c([])
                    },
                    reset: function() {
                        this.resetInternals(),
                            this.currentElements = c([])
                    },
                    prepareForm: function() {
                        this.reset(),
                            this.toHide = this.errors().add(this.containers)
                    },
                    prepareElement: function(e) {
                        this.reset(),
                            this.toHide = this.errorsFor(e)
                    },
                    elementValue: function(e) {
                        var t, i, n = c(e), s = e.type;
                        return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && void 0 !== e.validity ? e.validity.badInput ? "NaN" : n.val() : (t = e.hasAttribute("contenteditable") ? n.text() : n.val(),
                            "file" === s ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (i = t.lastIndexOf("/")) ? t.substr(i + 1) : 0 <= (i = t.lastIndexOf("\\")) ? t.substr(i + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
                    },
                    check: function(t) {
                        t = this.validationTargetFor(this.clean(t));
                        var e, i, n, s, a = c(t).rules(), r = c.map(a, function(e, t) {
                            return t
                        }).length, o = !1, l = this.elementValue(t);
                        if ("function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer),
                                s) {
                            if ("string" != typeof (l = s.call(t, l)))
                                throw new TypeError("The normalizer should return a string value.");
                            delete a.normalizer
                        }
                        for (i in a) {
                            n = {
                                method: i,
                                parameters: a[i]
                            };
                            try {
                                if ("dependency-mismatch" === (e = c.validator.methods[i].call(this, l, t, n.parameters)) && 1 === r) {
                                    o = !0;
                                    continue
                                }
                                if (o = !1,
                                    "pending" === e)
                                    return void (this.toHide = this.toHide.not(this.errorsFor(t)));
                                if (!e)
                                    return this.formatAndAdd(t, n),
                                        !1
                            } catch (e) {
                                throw this.settings.debug && window.console,
                                e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + n.method + "' method."),
                                    e
                            }
                        }
                        if (!o)
                            return this.objectLength(a) && this.successList.push(t),
                                !0
                    },
                    customDataMessage: function(e, t) {
                        return c(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || c(e).data("msg")
                    },
                    customMessage: function(e, t) {
                        var i = this.settings.messages[e];
                        return i && (i.constructor === String ? i : i[t])
                    },
                    findDefined: function() {
                        for (var e = 0; e < arguments.length; e++)
                            if (void 0 !== arguments[e])
                                return arguments[e]
                    },
                    defaultMessage: function(e, t) {
                        "string" == typeof t && (t = {
                            method: t
                        });
                        var i = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, c.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>")
                            , n = /\$?\{(\d+)\}/g;
                        return "function" == typeof i ? i = i.call(this, t.parameters, e) : n.test(i) && (i = c.validator.format(i.replace(n, "{$1}"), t.parameters)),
                            i
                    },
                    formatAndAdd: function(e, t) {
                        var i = this.defaultMessage(e, t);
                        this.errorList.push({
                            message: i,
                            element: e,
                            method: t.method
                        }),
                            this.errorMap[e.name] = i,
                            this.submitted[e.name] = i
                    },
                    addWrapper: function(e) {
                        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))),
                            e
                    },
                    defaultShowErrors: function() {
                        var e, t, i;
                        for (e = 0; this.errorList[e]; e++)
                            i = this.errorList[e],
                            this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                                this.showLabel(i.element, i.message);
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                                this.settings.success)
                            for (e = 0; this.successList[e]; e++)
                                this.showLabel(this.successList[e]);
                        if (this.settings.unhighlight)
                            for (e = 0,
                                     t = this.validElements(); t[e]; e++)
                                this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow),
                            this.hideErrors(),
                            this.addWrapper(this.toShow).show()
                    },
                    validElements: function() {
                        return this.currentElements.not(this.invalidElements())
                    },
                    invalidElements: function() {
                        return c(this.errorList).map(function() {
                            return this.element
                        })
                    },
                    showLabel: function(e, t) {
                        var i, n, s, a, r = this.errorsFor(e), o = this.idOrName(e), l = c(e).attr("aria-describedby");
                        r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                            r.html(t)) : (i = r = c("<" + this.settings.errorElement + ">").attr("id", o + "-error").addClass(this.settings.errorClass).html(t || ""),
                        this.settings.wrapper && (i = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                            this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, c(e)) : i.insertAfter(e),
                            r.is("label") ? r.attr("for", o) : 0 === r.parents("label[for='" + this.escapeCssMeta(o) + "']").length && (s = r.attr("id"),
                                l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s,
                                c(e).attr("aria-describedby", l),
                            (n = this.groups[e.name]) && (a = this,
                                c.each(a.groups, function(e, t) {
                                    t === n && c("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", r.attr("id"))
                                })))),
                        !t && this.settings.success && (r.text(""),
                            "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, e)),
                            this.toShow = this.toShow.add(r)
                    },
                    errorsFor: function(e) {
                        var t = this.escapeCssMeta(this.idOrName(e))
                            , i = c(e).attr("aria-describedby")
                            , n = "label[for='" + t + "'], label[for='" + t + "'] *";
                        return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")),
                            this.errors().filter(n)
                    },
                    escapeCssMeta: function(e) {
                        return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                    },
                    idOrName: function(e) {
                        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                    },
                    validationTargetFor: function(e) {
                        return this.checkable(e) && (e = this.findByName(e.name)),
                            c(e).not(this.settings.ignore)[0]
                    },
                    checkable: function(e) {
                        return /radio|checkbox/i.test(e.type)
                    },
                    findByName: function(e) {
                        return c(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
                    },
                    getLength: function(e, t) {
                        switch (t.nodeName.toLowerCase()) {
                            case "select":
                                return c("option:selected", t).length;
                            case "input":
                                if (this.checkable(t))
                                    return this.findByName(t.name).filter(":checked").length
                        }
                        return e.length
                    },
                    depend: function(e, t) {
                        return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
                    },
                    dependTypes: {
                        boolean: function(e) {
                            return e
                        },
                        string: function(e, t) {
                            return !!c(e, t.form).length
                        },
                        function: function(e, t) {
                            return e(t)
                        }
                    },
                    optional: function(e) {
                        var t = this.elementValue(e);
                        return !c.validator.methods.required.call(this, t, e) && "dependency-mismatch"
                    },
                    startRequest: function(e) {
                        this.pending[e.name] || (this.pendingRequest++,
                            c(e).addClass(this.settings.pendingClass),
                            this.pending[e.name] = !0)
                    },
                    stopRequest: function(e, t) {
                        this.pendingRequest--,
                        this.pendingRequest < 0 && (this.pendingRequest = 0),
                            delete this.pending[e.name],
                            c(e).removeClass(this.settings.pendingClass),
                            t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(),
                            this.submitButton && c("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(),
                                this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]),
                                this.formSubmitted = !1)
                    },
                    previousValue: function(e, t) {
                        return t = "string" == typeof t && t || "remote",
                        c.data(e, "previousValue") || c.data(e, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(e, {
                                method: t
                            })
                        })
                    },
                    destroy: function() {
                        this.resetForm(),
                            c(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                    }
                },
                classRuleSettings: {
                    required: {
                        required: !0
                    },
                    email: {
                        email: !0
                    },
                    url: {
                        url: !0
                    },
                    date: {
                        date: !0
                    },
                    dateISO: {
                        dateISO: !0
                    },
                    number: {
                        number: !0
                    },
                    digits: {
                        digits: !0
                    },
                    creditcard: {
                        creditcard: !0
                    }
                },
                addClassRules: function(e, t) {
                    e.constructor === String ? this.classRuleSettings[e] = t : c.extend(this.classRuleSettings, e)
                },
                classRules: function(e) {
                    var t = {}
                        , i = c(e).attr("class");
                    return i && c.each(i.split(" "), function() {
                        this in c.validator.classRuleSettings && c.extend(t, c.validator.classRuleSettings[this])
                    }),
                        t
                },
                normalizeAttributeRule: function(e, t, i, n) {
                    /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n),
                    isNaN(n) && (n = void 0)),
                        n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
                },
                attributeRules: function(e) {
                    var t, i, n = {}, s = c(e), a = e.getAttribute("type");
                    for (t in c.validator.methods)
                        "required" === t ? ("" === (i = e.getAttribute(t)) && (i = !0),
                            i = !!i) : i = s.attr(t),
                            this.normalizeAttributeRule(n, a, t, i);
                    return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength,
                        n
                },
                dataRules: function(e) {
                    var t, i, n = {}, s = c(e), a = e.getAttribute("type");
                    for (t in c.validator.methods)
                        i = s.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()),
                            this.normalizeAttributeRule(n, a, t, i);
                    return n
                },
                staticRules: function(e) {
                    var t = {}
                        , i = c.data(e.form, "validator");
                    return i.settings.rules && (t = c.validator.normalizeRule(i.settings.rules[e.name]) || {}),
                        t
                },
                normalizeRules: function(n, s) {
                    return c.each(n, function(e, t) {
                        if (!1 !== t) {
                            if (t.param || t.depends) {
                                var i = !0;
                                switch (typeof t.depends) {
                                    case "string":
                                        i = !!c(t.depends, s.form).length;
                                        break;
                                    case "function":
                                        i = t.depends.call(s, s)
                                }
                                i ? n[e] = void 0 === t.param || t.param : (c.data(s.form, "validator").resetElements(c(s)),
                                    delete n[e])
                            }
                        } else
                            delete n[e]
                    }),
                        c.each(n, function(e, t) {
                            n[e] = c.isFunction(t) && "normalizer" !== e ? t(s) : t
                        }),
                        c.each(["minlength", "maxlength"], function() {
                            n[this] && (n[this] = Number(n[this]))
                        }),
                        c.each(["rangelength", "range"], function() {
                            var e;
                            n[this] && (c.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (e = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/),
                                n[this] = [Number(e[0]), Number(e[1])]))
                        }),
                    c.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max],
                        delete n.min,
                        delete n.max),
                    null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength],
                        delete n.minlength,
                        delete n.maxlength)),
                        n
                },
                normalizeRule: function(e) {
                    if ("string" == typeof e) {
                        var t = {};
                        c.each(e.split(/\s/), function() {
                            t[this] = !0
                        }),
                            e = t
                    }
                    return e
                },
                addMethod: function(e, t, i) {
                    c.validator.methods[e] = t,
                        c.validator.messages[e] = void 0 !== i ? i : c.validator.messages[e],
                    t.length < 3 && c.validator.addClassRules(e, c.validator.normalizeRule(e))
                },
                methods: {
                    required: function(e, t, i) {
                        if (!this.depend(i, t))
                            return "dependency-mismatch";
                        if ("select" === t.nodeName.toLowerCase()) {
                            var n = c(t).val();
                            return n && 0 < n.length
                        }
                        return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length
                    },
                    email: function(e, t) {
                        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
                    },
                    url: function(e, t) {
                        return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
                    },
                    date: function(e, t) {
                        return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
                    },
                    dateISO: function(e, t) {
                        return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
                    },
                    number: function(e, t) {
                        return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                    },
                    digits: function(e, t) {
                        return this.optional(t) || /^\d+$/.test(e)
                    },
                    minlength: function(e, t, i) {
                        var n = c.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || i <= n
                    },
                    maxlength: function(e, t, i) {
                        var n = c.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || n <= i
                    },
                    rangelength: function(e, t, i) {
                        var n = c.isArray(e) ? e.length : this.getLength(e, t);
                        return this.optional(t) || n >= i[0] && n <= i[1]
                    },
                    min: function(e, t, i) {
                        return this.optional(t) || i <= e
                    },
                    max: function(e, t, i) {
                        return this.optional(t) || e <= i
                    },
                    range: function(e, t, i) {
                        return this.optional(t) || e >= i[0] && e <= i[1]
                    },
                    step: function(e, t, i) {
                        var n, s = c(t).attr("type"), a = "Step attribute on input type " + s + " is not supported.", r = new RegExp("\\b" + s + "\\b"), o = function(e) {
                            var t = ("" + e).match(/(?:\.(\d+))?$/);
                            return t && t[1] ? t[1].length : 0
                        }, l = function(e) {
                            return Math.round(e * Math.pow(10, n))
                        }, u = !0;
                        if (s && !r.test(["text", "number", "range"].join()))
                            throw new Error(a);
                        return n = o(i),
                        (o(e) > n || l(e) % l(i) != 0) && (u = !1),
                        this.optional(t) || u
                    },
                    equalTo: function(e, t, i) {
                        var n = c(i);
                        return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                            c(t).valid()
                        }),
                        e === n.val()
                    },
                    remote: function(a, r, e, o) {
                        if (this.optional(r))
                            return "dependency-mismatch";
                        o = "string" == typeof o && o || "remote";
                        var l, t, i, u = this.previousValue(r, o);
                        return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}),
                            u.originalMessage = u.originalMessage || this.settings.messages[r.name][o],
                            this.settings.messages[r.name][o] = u.message,
                            e = "string" == typeof e && {
                                url: e
                            } || e,
                            i = c.param(c.extend({
                                data: a
                            }, e.data)),
                            u.old === i ? u.valid : (u.old = i,
                                (l = this).startRequest(r),
                                (t = {})[r.name] = a,
                                c.ajax(c.extend(!0, {
                                    mode: "abort",
                                    port: "validate" + r.name,
                                    dataType: "json",
                                    data: t,
                                    context: l.currentForm,
                                    success: function(e) {
                                        var t, i, n, s = !0 === e || "true" === e;
                                        l.settings.messages[r.name][o] = u.originalMessage,
                                            s ? (n = l.formSubmitted,
                                                l.resetInternals(),
                                                l.toHide = l.errorsFor(r),
                                                l.formSubmitted = n,
                                                l.successList.push(r),
                                                l.invalid[r.name] = !1,
                                                l.showErrors()) : (t = {},
                                                i = e || l.defaultMessage(r, {
                                                    method: o,
                                                    parameters: a
                                                }),
                                                t[r.name] = u.message = i,
                                                l.invalid[r.name] = !0,
                                                l.showErrors(t)),
                                            u.valid = s,
                                            l.stopRequest(r, s)
                                    }
                                }, e)),
                                "pending")
                    }
                }
            });
        var n, s = {};
        return c.ajaxPrefilter ? c.ajaxPrefilter(function(e, t, i) {
            var n = e.port;
            "abort" === e.mode && (s[n] && s[n].abort(),
                s[n] = i)
        }) : (n = c.ajax,
                c.ajax = function(e) {
                    var t = ("mode"in e ? e : c.ajaxSettings).mode
                        , i = ("port"in e ? e : c.ajaxSettings).port;
                    return "abort" === t ? (s[i] && s[i].abort(),
                        s[i] = n.apply(this, arguments),
                        s[i]) : n.apply(this, arguments)
                }
        ),
            c
    }),
    require.config({
        baseUrl: "scripts",
        shim: {
            underscore: {
                exports: "_"
            },
            backbone: {
                deps: ["jquery", "underscore"],
                exports: "Backbone"
            },
            swiper: {
                deps: ["jquery"]
            },
            bootstrap: {
                deps: ["jquery"]
            },
            "jquery-ui": {
                deps: ["jquery"]
            },
            "jquery-validate": {
                deps: ["jquery"]
            }
        },
        paths: {
            jquery: "../bower_components/jquery/jquery",
            underscore: "../bower_components/underscore/underscore",
            backbone: "../bower_components/backbone/backbone",
            swiper: "lib-fix/swiper-3.4.1.jquery.min",
            bootstrap: "../bower_components/sass-bootstrap/dist/bootstrap",
            "jquery-ui": "../bower_components/jquery-ui/jquery-ui",
            "jquery-validate": "components/jqueryValidate/jquery.validate"
        }
    }),
    define("frame", ["jquery", "underscore", "backbone", "swiper", "bootstrap", "jquery-ui", "jquery-validate"], function() {});
