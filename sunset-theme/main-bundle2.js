{
    var t = {
            4596: (t, e, n) => {
                var r = n(1808),
                    o = n(8151),
                    i = TypeError;
                t.exports = function(t) {
                    if (r(t)) return t;
                    throw i(o(t) + " is not a function")
                }
            },
            9308: (t, e, n) => {
                var r = n(7627),
                    o = String,
                    i = TypeError;
                t.exports = function(t) {
                    if (r(t)) return t;
                    throw i(o(t) + " is not an object")
                }
            },
            6039: (t, e, n) => {
                var r = n(7794),
                    o = n(7913),
                    i = n(2103),
                    a = function(t) {
                        return function(e, n, a) {
                            var c, u = r(e),
                                s = i(u),
                                l = o(a, s);
                            if (t && n != n) {
                                for (; s > l;)
                                    if ((c = u[l++]) != c) return !0
                            } else
                                for (; s > l; l++)
                                    if ((t || l in u) && u[l] === n) return t || l || 0;
                            return !t && -1
                        }
                    };
                t.exports = {
                    includes: a(!0),
                    indexOf: a(!1)
                }
            },
            7506: (t, e, n) => {
                var r = n(5537)("iterator"),
                    o = !1;
                try {
                    var i = 0,
                        a = {
                            next: function() {
                                return {
                                    done: !!i++
                                }
                            },
                            return: function() {
                                o = !0
                            }
                        };
                    a[r] = function() {
                        return this
                    }, Array.from(a, (function() {
                        throw 2
                    }))
                } catch (t) {}
                t.exports = function(t, e) {
                    if (!e && !o) return !1;
                    var n = !1;
                    try {
                        var i = {};
                        i[r] = function() {
                            return {
                                next: function() {
                                    return {
                                        done: n = !0
                                    }
                                }
                            }
                        }, t(i)
                    } catch (t) {}
                    return n
                }
            },
            8555: (t, e, n) => {
                var r = n(2058),
                    o = r({}.toString),
                    i = r("".slice);
                t.exports = function(t) {
                    return i(o(t), 8, -1)
                }
            },
            5786: (t, e, n) => {
                var r = n(2709),
                    o = n(1808),
                    i = n(8555),
                    a = n(5537)("toStringTag"),
                    c = Object,
                    u = "Arguments" === i(function() {
                        return arguments
                    }());
                t.exports = r ? i : function(t) {
                    var e, n, r;
                    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
                        try {
                            return t[e]
                        } catch (t) {}
                    }(e = c(t), a)) ? n : u ? i(e) : "Object" === (r = i(e)) && o(e.callee) ? "Arguments" : r
                }
            },
            5609: (t, e, n) => {
                var r = n(8496),
                    o = n(7464),
                    i = n(4086),
                    a = n(3002);
                t.exports = function(t, e, n) {
                    for (var c = o(e), u = a.f, s = i.f, l = 0; l < c.length; l++) {
                        var f = c[l];
                        r(t, f) || n && r(n, f) || u(t, f, s(e, f))
                    }
                }
            },
            859: (t, e, n) => {
                var r = n(369),
                    o = n(3002),
                    i = n(6373);
                t.exports = r ? function(t, e, n) {
                    return o.f(t, e, i(1, n))
                } : function(t, e, n) {
                    return t[e] = n, t
                }
            },
            6373: t => {
                t.exports = function(t, e) {
                    return {
                        enumerable: !(1 & t),
                        configurable: !(2 & t),
                        writable: !(4 & t),
                        value: e
                    }
                }
            },
            6561: (t, e, n) => {
                var r = n(1808),
                    o = n(3002),
                    i = n(2303),
                    a = n(1105);
                t.exports = function(t, e, n, c) {
                    c || (c = {});
                    var u = c.enumerable,
                        s = void 0 !== c.name ? c.name : e;
                    if (r(n) && i(n, s, c), c.global) u ? t[e] = n : a(e, n);
                    else {
                        try {
                            c.unsafe ? t[e] && (u = !0) : delete t[e]
                        } catch (t) {}
                        u ? t[e] = n : o.f(t, e, {
                            value: n,
                            enumerable: !1,
                            configurable: !c.nonConfigurable,
                            writable: !c.nonWritable
                        })
                    }
                    return t
                }
            },
            1105: (t, e, n) => {
                var r = n(7990),
                    o = Object.defineProperty;
                t.exports = function(t, e) {
                    try {
                        o(r, t, {
                            value: e,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (n) {
                        r[t] = e
                    }
                    return e
                }
            },
            369: (t, e, n) => {
                var r = n(9645);
                t.exports = !r((function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                }))
            },
            1857: t => {
                var e = "object" == typeof document && document.all,
                    n = void 0 === e && void 0 !== e;
                t.exports = {
                    all: e,
                    IS_HTMLDDA: n
                }
            },
            4799: (t, e, n) => {
                var r = n(7990),
                    o = n(7627),
                    i = r.document,
                    a = o(i) && o(i.createElement);
                t.exports = function(t) {
                    return a ? i.createElement(t) : {}
                }
            },
            9422: (t, e, n) => {
                var r = n(8194),
                    o = n(8018);
                t.exports = !r && !o && "object" == typeof window && "object" == typeof document
            },
            8194: t => {
                t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
            },
            8018: (t, e, n) => {
                var r = n(7990),
                    o = n(8555);
                t.exports = "process" === o(r.process)
            },
            7366: t => {
                t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
            },
            1579: (t, e, n) => {
                var r, o, i = n(7990),
                    a = n(7366),
                    c = i.process,
                    u = i.Deno,
                    s = c && c.versions || u && u.version,
                    l = s && s.v8;
                l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
            },
            4577: t => {
                t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            8903: (t, e, n) => {
                var r = n(7990),
                    o = n(4086)
                    .f,
                    i = n(859),
                    a = n(6561),
                    c = n(1105),
                    u = n(5609),
                    s = n(9168);
                t.exports = function(t, e) {
                    var n, l, f, p, v, h = t.target,
                        y = t.global,
                        d = t.stat;
                    if (n = y ? r : d ? r[h] || c(h, {}) : (r[h] || {})
                        .prototype)
                        for (l in e) {
                            if (p = e[l], f = t.dontCallGetSet ? (v = o(n, l)) && v.value : n[l], !s(y ? l : h + (d ? "." : "#") + l, t.forced) && void 0 !== f) {
                                if (typeof p == typeof f) continue;
                                u(p, f)
                            }(t.sham || f && f.sham) && i(p, "sham", !0), a(n, l, p, t)
                        }
                }
            },
            9645: t => {
                t.exports = function(t) {
                    try {
                        return !!t()
                    } catch (t) {
                        return !0
                    }
                }
            },
            2144: (t, e, n) => {
                var r = n(2330),
                    o = n(4596),
                    i = n(2023),
                    a = r(r.bind);
                t.exports = function(t, e) {
                    return o(t), void 0 === e ? t : i ? a(t, e) : function() {
                        return t.apply(e, arguments)
                    }
                }
            },
            2023: (t, e, n) => {
                var r = n(9645);
                t.exports = !r((function() {
                    var t = function() {}.bind();
                    return "function" != typeof t || t.hasOwnProperty("prototype")
                }))
            },
            7725: (t, e, n) => {
                var r = n(2023),
                    o = Function.prototype.call;
                t.exports = r ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            2697: (t, e, n) => {
                var r = n(369),
                    o = n(8496),
                    i = Function.prototype,
                    a = r && Object.getOwnPropertyDescriptor,
                    c = o(i, "name"),
                    u = c && "something" === function() {}.name,
                    s = c && (!r || r && a(i, "name")
                        .configurable);
                t.exports = {
                    EXISTS: c,
                    PROPER: u,
                    CONFIGURABLE: s
                }
            },
            2330: (t, e, n) => {
                var r = n(8555),
                    o = n(2058);
                t.exports = function(t) {
                    if ("Function" === r(t)) return o(t)
                }
            },
            2058: (t, e, n) => {
                var r = n(2023),
                    o = Function.prototype,
                    i = o.call,
                    a = r && o.bind.bind(i, i);
                t.exports = r ? a : function(t) {
                    return function() {
                        return i.apply(t, arguments)
                    }
                }
            },
            1553: (t, e, n) => {
                var r = n(7990),
                    o = n(1808);
                t.exports = function(t, e) {
                    return arguments.length < 2 ? (n = r[t], o(n) ? n : void 0) : r[t] && r[t][e];
                    var n
                }
            },
            9463: (t, e, n) => {
                var r = n(5786),
                    o = n(692),
                    i = n(276),
                    a = n(3820),
                    c = n(5537)("iterator");
                t.exports = function(t) {
                    if (!i(t)) return o(t, c) || o(t, "@@iterator") || a[r(t)]
                }
            },
            4431: (t, e, n) => {
                var r = n(7725),
                    o = n(4596),
                    i = n(9308),
                    a = n(8151),
                    c = n(9463),
                    u = TypeError;
                t.exports = function(t, e) {
                    var n = arguments.length < 2 ? c(t) : e;
                    if (o(n)) return i(r(n, t));
                    throw u(a(t) + " is not iterable")
                }
            },
            692: (t, e, n) => {
                var r = n(4596),
                    o = n(276);
                t.exports = function(t, e) {
                    var n = t[e];
                    return o(n) ? void 0 : r(n)
                }
            },
            7990: function(t, e, n) {
                var r = function(t) {
                    return t && t.Math === Math && t
                };
                t.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || function() {
                    return this
                }() || this || Function("return this")()
            },
            8496: (t, e, n) => {
                var r = n(2058),
                    o = n(6075),
                    i = r({}.hasOwnProperty);
                t.exports = Object.hasOwn || function(t, e) {
                    return i(o(t), e)
                }
            },
            642: t => {
                t.exports = {}
            },
            6938: (t, e, n) => {
                var r = n(369),
                    o = n(9645),
                    i = n(4799);
                t.exports = !r && !o((function() {
                    return 7 !== Object.defineProperty(i("div"), "a", {
                            get: function() {
                                return 7
                            }
                        })
                        .a
                }))
            },
            9860: (t, e, n) => {
                var r = n(2058),
                    o = n(9645),
                    i = n(8555),
                    a = Object,
                    c = r("".split);
                t.exports = o((function() {
                    return !a("z")
                        .propertyIsEnumerable(0)
                })) ? function(t) {
                    return "String" === i(t) ? c(t, "") : a(t)
                } : a
            },
            449: (t, e, n) => {
                var r = n(2058),
                    o = n(1808),
                    i = n(7322),
                    a = r(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(t) {
                    return a(t)
                }), t.exports = i.inspectSource
            },
            7776: (t, e, n) => {
                var r, o, i, a = n(9514),
                    c = n(7990),
                    u = n(7627),
                    s = n(859),
                    l = n(8496),
                    f = n(7322),
                    p = n(3273),
                    v = n(642),
                    h = "Object already initialized",
                    y = c.TypeError,
                    d = c.WeakMap;
                if (a || f.state) {
                    var b = f.state || (f.state = new d);
                    b.get = b.get, b.has = b.has, b.set = b.set, r = function(t, e) {
                        if (b.has(t)) throw y(h);
                        return e.facade = t, b.set(t, e), e
                    }, o = function(t) {
                        return b.get(t) || {}
                    }, i = function(t) {
                        return b.has(t)
                    }
                } else {
                    var g = p("state");
                    v[g] = !0, r = function(t, e) {
                        if (l(t, g)) throw y(h);
                        return e.facade = t, s(t, g, e), e
                    }, o = function(t) {
                        return l(t, g) ? t[g] : {}
                    }, i = function(t) {
                        return l(t, g)
                    }
                }
                t.exports = {
                    set: r,
                    get: o,
                    has: i,
                    enforce: function(t) {
                        return i(t) ? o(t) : r(t, {})
                    },
                    getterFor: function(t) {
                        return function(e) {
                            var n;
                            if (!u(e) || (n = o(e))
                                .type !== t) throw y("Incompatible receiver, " + t + " required");
                            return n
                        }
                    }
                }
            },
            5409: (t, e, n) => {
                var r = n(5537),
                    o = n(3820),
                    i = r("iterator"),
                    a = Array.prototype;
                t.exports = function(t) {
                    return void 0 !== t && (o.Array === t || a[i] === t)
                }
            },
            1808: (t, e, n) => {
                var r = n(1857),
                    o = r.all;
                t.exports = r.IS_HTMLDDA ? function(t) {
                    return "function" == typeof t || t === o
                } : function(t) {
                    return "function" == typeof t
                }
            },
            9168: (t, e, n) => {
                var r = n(9645),
                    o = n(1808),
                    i = /#|\.prototype\./,
                    a = function(t, e) {
                        var n = u[c(t)];
                        return n === l || n !== s && (o(e) ? r(e) : !!e)
                    },
                    c = a.normalize = function(t) {
                        return String(t)
                            .replace(i, ".")
                            .toLowerCase()
                    },
                    u = a.data = {},
                    s = a.NATIVE = "N",
                    l = a.POLYFILL = "P";
                t.exports = a
            },
            276: t => {
                t.exports = function(t) {
                    return null == t
                }
            },
            7627: (t, e, n) => {
                var r = n(1808),
                    o = n(1857),
                    i = o.all;
                t.exports = o.IS_HTMLDDA ? function(t) {
                    return "object" == typeof t ? null !== t : r(t) || t === i
                } : function(t) {
                    return "object" == typeof t ? null !== t : r(t)
                }
            },
            1566: t => {
                t.exports = !1
            },
            4003: (t, e, n) => {
                var r = n(1553),
                    o = n(1808),
                    i = n(8304),
                    a = n(144),
                    c = Object;
                t.exports = a ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    var e = r("Symbol");
                    return o(e) && i(e.prototype, c(t))
                }
            },
            1851: (t, e, n) => {
                var r = n(2144),
                    o = n(7725),
                    i = n(9308),
                    a = n(8151),
                    c = n(5409),
                    u = n(2103),
                    s = n(8304),
                    l = n(4431),
                    f = n(9463),
                    p = n(5887),
                    v = TypeError,
                    h = function(t, e) {
                        this.stopped = t, this.result = e
                    },
                    y = h.prototype;
                t.exports = function(t, e, n) {
                    var d, b, g, w, m, S, E, A = n && n.that,
                        x = !(!n || !n.AS_ENTRIES),
                        O = !(!n || !n.IS_RECORD),
                        T = !(!n || !n.IS_ITERATOR),
                        D = !(!n || !n.INTERRUPTED),
                        _ = r(e, A),
                        N = function(t) {
                            return d && p(d, "normal", t), new h(!0, t)
                        },
                        I = function(t) {
                            return x ? (i(t), D ? _(t[0], t[1], N) : _(t[0], t[1])) : D ? _(t, N) : _(t)
                        };
                    if (O) d = t.iterator;
                    else if (T) d = t;
                    else {
                        if (!(b = f(t))) throw v(a(t) + " is not iterable");
                        if (c(b)) {
                            for (g = 0, w = u(t); w > g; g++)
                                if ((m = I(t[g])) && s(y, m)) return m;
                            return new h(!1)
                        }
                        d = l(t, b)
                    }
                    for (S = O ? t.next : d.next; !(E = o(S, d))
                        .done;) {
                        try {
                            m = I(E.value)
                        } catch (t) {
                            p(d, "throw", t)
                        }
                        if ("object" == typeof m && m && s(y, m)) return m
                    }
                    return new h(!1)
                }
            },
            5887: (t, e, n) => {
                var r = n(7725),
                    o = n(9308),
                    i = n(692);
                t.exports = function(t, e, n) {
                    var a, c;
                    o(t);
                    try {
                        if (!(a = i(t, "return"))) {
                            if ("throw" === e) throw n;
                            return n
                        }
                        a = r(a, t)
                    } catch (t) {
                        c = !0, a = t
                    }
                    if ("throw" === e) throw n;
                    if (c) throw a;
                    return o(a), n
                }
            },
            3820: t => {
                t.exports = {}
            },
            2103: (t, e, n) => {
                var r = n(468);
                t.exports = function(t) {
                    return r(t.length)
                }
            },
            2303: (t, e, n) => {
                var r = n(2058),
                    o = n(9645),
                    i = n(1808),
                    a = n(8496),
                    c = n(369),
                    u = n(2697)
                    .CONFIGURABLE,
                    s = n(449),
                    l = n(7776),
                    f = l.enforce,
                    p = l.get,
                    v = String,
                    h = Object.defineProperty,
                    y = r("".slice),
                    d = r("".replace),
                    b = r([].join),
                    g = c && !o((function() {
                        return 8 !== h((function() {}), "length", {
                                value: 8
                            })
                            .length
                    })),
                    w = String(String)
                    .split("String"),
                    m = t.exports = function(t, e, n) {
                        "Symbol(" === y(v(e), 0, 7) && (e = "[" + d(v(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (e = "get " + e), n && n.setter && (e = "set " + e), (!a(t, "name") || u && t.name !== e) && (c ? h(t, "name", {
                            value: e,
                            configurable: !0
                        }) : t.name = e), g && n && a(n, "arity") && t.length !== n.arity && h(t, "length", {
                            value: n.arity
                        });
                        try {
                            n && a(n, "constructor") && n.constructor ? c && h(t, "prototype", {
                                writable: !1
                            }) : t.prototype && (t.prototype = void 0)
                        } catch (t) {}
                        var r = f(t);
                        return a(r, "source") || (r.source = b(w, "string" == typeof e ? e : "")), t
                    };
                Function.prototype.toString = m((function() {
                    return i(this) && p(this)
                        .source || s(this)
                }), "toString")
            },
            6357: t => {
                var e = Math.ceil,
                    n = Math.floor;
                t.exports = Math.trunc || function(t) {
                    var r = +t;
                    return (r > 0 ? n : e)(r)
                }
            },
            606: (t, e, n) => {
                var r = n(4596),
                    o = TypeError,
                    i = function(t) {
                        var e, n;
                        this.promise = new t((function(t, r) {
                            if (void 0 !== e || void 0 !== n) throw o("Bad Promise constructor");
                            e = t, n = r
                        })), this.resolve = r(e), this.reject = r(n)
                    };
                t.exports.f = function(t) {
                    return new i(t)
                }
            },
            3002: (t, e, n) => {
                var r = n(369),
                    o = n(6938),
                    i = n(446),
                    a = n(9308),
                    c = n(7171),
                    u = TypeError,
                    s = Object.defineProperty,
                    l = Object.getOwnPropertyDescriptor,
                    f = "enumerable",
                    p = "configurable",
                    v = "writable";
                e.f = r ? i ? function(t, e, n) {
                    if (a(t), e = c(e), a(n), "function" == typeof t && "prototype" === e && "value" in n && v in n && !n[v]) {
                        var r = l(t, e);
                        r && r[v] && (t[e] = n.value, n = {
                            configurable: p in n ? n[p] : r[p],
                            enumerable: f in n ? n[f] : r[f],
                            writable: !1
                        })
                    }
                    return s(t, e, n)
                } : s : function(t, e, n) {
                    if (a(t), e = c(e), a(n), o) try {
                        return s(t, e, n)
                    } catch (t) {}
                    if ("get" in n || "set" in n) throw u("Accessors not supported");
                    return "value" in n && (t[e] = n.value), t
                }
            },
            4086: (t, e, n) => {
                var r = n(369),
                    o = n(7725),
                    i = n(3740),
                    a = n(6373),
                    c = n(7794),
                    u = n(7171),
                    s = n(8496),
                    l = n(6938),
                    f = Object.getOwnPropertyDescriptor;
                e.f = r ? f : function(t, e) {
                    if (t = c(t), e = u(e), l) try {
                        return f(t, e)
                    } catch (t) {}
                    if (s(t, e)) return a(!o(i.f, t, e), t[e])
                }
            },
            8766: (t, e, n) => {
                var r = n(5848),
                    o = n(4577)
                    .concat("length", "prototype");
                e.f = Object.getOwnPropertyNames || function(t) {
                    return r(t, o)
                }
            },
            8559: (t, e) => {
                e.f = Object.getOwnPropertySymbols
            },
            8304: (t, e, n) => {
                var r = n(2058);
                t.exports = r({}.isPrototypeOf)
            },
            5848: (t, e, n) => {
                var r = n(2058),
                    o = n(8496),
                    i = n(7794),
                    a = n(6039)
                    .indexOf,
                    c = n(642),
                    u = r([].push);
                t.exports = function(t, e) {
                    var n, r = i(t),
                        s = 0,
                        l = [];
                    for (n in r) !o(c, n) && o(r, n) && u(l, n);
                    for (; e.length > s;) o(r, n = e[s++]) && (~a(l, n) || u(l, n));
                    return l
                }
            },
            3740: (t, e) => {
                var n = {}.propertyIsEnumerable,
                    r = Object.getOwnPropertyDescriptor,
                    o = r && !n.call({
                        1: 2
                    }, 1);
                e.f = o ? function(t) {
                    var e = r(this, t);
                    return !!e && e.enumerable
                } : n
            },
            173: (t, e, n) => {
                var r = n(7725),
                    o = n(1808),
                    i = n(7627),
                    a = TypeError;
                t.exports = function(t, e) {
                    var n, c;
                    if ("string" === e && o(n = t.toString) && !i(c = r(n, t))) return c;
                    if (o(n = t.valueOf) && !i(c = r(n, t))) return c;
                    if ("string" !== e && o(n = t.toString) && !i(c = r(n, t))) return c;
                    throw a("Can't convert object to primitive value")
                }
            },
            7464: (t, e, n) => {
                var r = n(1553),
                    o = n(2058),
                    i = n(8766),
                    a = n(8559),
                    c = n(9308),
                    u = o([].concat);
                t.exports = r("Reflect", "ownKeys") || function(t) {
                    var e = i.f(c(t)),
                        n = a.f;
                    return n ? u(e, n(t)) : e
                }
            },
            3639: t => {
                t.exports = function(t) {
                    try {
                        return {
                            error: !1,
                            value: t()
                        }
                    } catch (t) {
                        return {
                            error: !0,
                            value: t
                        }
                    }
                }
            },
            2862: (t, e, n) => {
                var r = n(7990),
                    o = n(9952),
                    i = n(1808),
                    a = n(9168),
                    c = n(449),
                    u = n(5537),
                    s = n(9422),
                    l = n(8194),
                    f = n(1566),
                    p = n(1579),
                    v = o && o.prototype,
                    h = u("species"),
                    y = !1,
                    d = i(r.PromiseRejectionEvent),
                    b = a("Promise", (function() {
                        var t = c(o),
                            e = t !== String(o);
                        if (!e && 66 === p) return !0;
                        if (f && (!v.catch || !v.finally)) return !0;
                        if (!p || p < 51 || !/native code/.test(t)) {
                            var n = new o((function(t) {
                                    t(1)
                                })),
                                r = function(t) {
                                    t((function() {}), (function() {}))
                                };
                            if ((n.constructor = {})[h] = r, !(y = n.then((function() {})) instanceof r)) return !0
                        }
                        return !e && (s || l) && !d
                    }));
                t.exports = {
                    CONSTRUCTOR: b,
                    REJECTION_EVENT: d,
                    SUBCLASSING: y
                }
            },
            9952: (t, e, n) => {
                var r = n(7990);
                t.exports = r.Promise
            },
            5289: (t, e, n) => {
                var r = n(9952),
                    o = n(7506),
                    i = n(2862)
                    .CONSTRUCTOR;
                t.exports = i || !o((function(t) {
                    r.all(t)
                        .then(void 0, (function() {}))
                }))
            },
            8622: (t, e, n) => {
                var r = n(276),
                    o = TypeError;
                t.exports = function(t) {
                    if (r(t)) throw o("Can't call method on " + t);
                    return t
                }
            },
            3273: (t, e, n) => {
                var r = n(9808),
                    o = n(160),
                    i = r("keys");
                t.exports = function(t) {
                    return i[t] || (i[t] = o(t))
                }
            },
            7322: (t, e, n) => {
                var r = n(7990),
                    o = n(1105),
                    i = "__core-js_shared__",
                    a = r[i] || o(i, {});
                t.exports = a
            },
            9808: (t, e, n) => {
                var r = n(1566),
                    o = n(7322);
                (t.exports = function(t, e) {
                    return o[t] || (o[t] = void 0 !== e ? e : {})
                })("versions", [])
                .push({
                    version: "3.32.1",
                    mode: r ? "pure" : "global",
                    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.32.1/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            7987: (t, e, n) => {
                var r = n(1579),
                    o = n(9645),
                    i = n(7990)
                    .String;
                t.exports = !!Object.getOwnPropertySymbols && !o((function() {
                    var t = Symbol("symbol detection");
                    return !i(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
                }))
            },
            7913: (t, e, n) => {
                var r = n(9163),
                    o = Math.max,
                    i = Math.min;
                t.exports = function(t, e) {
                    var n = r(t);
                    return n < 0 ? o(n + e, 0) : i(n, e)
                }
            },
            7794: (t, e, n) => {
                var r = n(9860),
                    o = n(8622);
                t.exports = function(t) {
                    return r(o(t))
                }
            },
            9163: (t, e, n) => {
                var r = n(6357);
                t.exports = function(t) {
                    var e = +t;
                    return e != e || 0 === e ? 0 : r(e)
                }
            },
            468: (t, e, n) => {
                var r = n(9163),
                    o = Math.min;
                t.exports = function(t) {
                    return t > 0 ? o(r(t), 9007199254740991) : 0
                }
            },
            6075: (t, e, n) => {
                var r = n(8622),
                    o = Object;
                t.exports = function(t) {
                    return o(r(t))
                }
            },
            9182: (t, e, n) => {
                var r = n(7725),
                    o = n(7627),
                    i = n(4003),
                    a = n(692),
                    c = n(173),
                    u = n(5537),
                    s = TypeError,
                    l = u("toPrimitive");
                t.exports = function(t, e) {
                    if (!o(t) || i(t)) return t;
                    var n, u = a(t, l);
                    if (u) {
                        if (void 0 === e && (e = "default"), n = r(u, t, e), !o(n) || i(n)) return n;
                        throw s("Can't convert object to primitive value")
                    }
                    return void 0 === e && (e = "number"), c(t, e)
                }
            },
            7171: (t, e, n) => {
                var r = n(9182),
                    o = n(4003);
                t.exports = function(t) {
                    var e = r(t, "string");
                    return o(e) ? e : e + ""
                }
            },
            2709: (t, e, n) => {
                var r = {};
                r[n(5537)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
            },
            8151: t => {
                var e = String;
                t.exports = function(t) {
                    try {
                        return e(t)
                    } catch (t) {
                        return "Object"
                    }
                }
            },
            160: (t, e, n) => {
                var r = n(2058),
                    o = 0,
                    i = Math.random(),
                    a = r(1..toString);
                t.exports = function(t) {
                    return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36)
                }
            },
            144: (t, e, n) => {
                var r = n(7987);
                t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            446: (t, e, n) => {
                var r = n(369),
                    o = n(9645);
                t.exports = r && o((function() {
                    return 42 !== Object.defineProperty((function() {}), "prototype", {
                            value: 42,
                            writable: !1
                        })
                        .prototype
                }))
            },
            9514: (t, e, n) => {
                var r = n(7990),
                    o = n(1808),
                    i = r.WeakMap;
                t.exports = o(i) && /native code/.test(String(i))
            },
            5537: (t, e, n) => {
                var r = n(7990),
                    o = n(9808),
                    i = n(8496),
                    a = n(160),
                    c = n(7987),
                    u = n(144),
                    s = r.Symbol,
                    l = o("wks"),
                    f = u ? s.for || s : s && s.withoutSetter || a;
                t.exports = function(t) {
                    return i(l, t) || (l[t] = c && i(s, t) ? s[t] : f("Symbol." + t)), l[t]
                }
            },
            3009: (t, e, n) => {
                var r = n(8903),
                    o = n(7725),
                    i = n(4596),
                    a = n(606),
                    c = n(3639),
                    u = n(1851);
                r({
                    target: "Promise",
                    stat: !0,
                    forced: n(5289)
                }, {
                    allSettled: function(t) {
                        var e = this,
                            n = a.f(e),
                            r = n.resolve,
                            s = n.reject,
                            l = c((function() {
                                var n = i(e.resolve),
                                    a = [],
                                    c = 0,
                                    s = 1;
                                u(t, (function(t) {
                                    var i = c++,
                                        u = !1;
                                    s++, o(n, e, t)
                                        .then((function(t) {
                                            u || (u = !0, a[i] = {
                                                status: "fulfilled",
                                                value: t
                                            }, --s || r(a))
                                        }), (function(t) {
                                            u || (u = !0, a[i] = {
                                                status: "rejected",
                                                reason: t
                                            }, --s || r(a))
                                        }))
                                })), --s || r(a)
                            }));
                        return l.error && s(l.value), n.promise
                    }
                })
            }
        },
        e = {};
    function n(r) {
        var o = e[r];
        if (void 0 !== o) return o.exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.exports
    }
    n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), (() => {
        var t = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            })))
                            .then(a, c)
                    }
                    u((r = r.apply(t, e || []))
                        .next())
                }))
            },
            e = function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                    .done) return o;
                                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys)
                                                .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1], o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                c = e.call(t, a)
                            } catch (t) {
                                c = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            },
            r = function(t, e) {
                void 0 === e && (e = t.length - 1);
                for (var n = 0; n <= e; n++) {
                    var r = Math.floor(Math.random() * n),
                        o = t[n];
                    t[n] = t[r], t[r] = o
                }
            },
            o = globalThis.btoa,
            i = globalThis.atob,
            a = function() {
                return window.location.reload()
            },
            c = function(t) {
                return function() {
                    return t
                }
            },
            u = function() {
                try {
                    return chrome.runtime.getManifest()
                        .version
                } catch (t) {
                    return "null"
                }
            },
            s = function(t) {
                return ["https://", "http://"].some((function(e) {
                    return t.indexOf(e) > -1
                }))
            };
        const l = {
            SHAPES: [
                [
                    [1, 1, 1],
                    [0, 1, 0],
                    [0, 0, 0]
                ],
                [
                    [2, 2],
                    [2, 2]
                ],
                [
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 3, 0]
                ],
                [
                    [0, 4, 0],
                    [0, 4, 0],
                    [0, 4, 4]
                ],
                [
                    [0, 5, 0],
                    [0, 5, 0],
                    [5, 5, 0]
                ],
                [
                    [0, 6, 6],
                    [6, 6, 0],
                    [0, 0, 0]
                ],
                [
                    [7, 7, 0],
                    [0, 7, 7],
                    [0, 0, 0]
                ]
            ],
            ARENA_WIDTH: 10,
            ARENA_HEIGHT: 18,
            SCALE: 45,
            DROP_INTERVAL: 350,
            DROP_KEY_INTERVAL: 44,
            LOCK_DELAY: 450,
            HORIZONTAL_MOVEMENT_INTERVAL: 76,
            font: {
                FAMILY: "Arial, Helvetica, sans-serif",
                COLOR: "white"
            },
            COLORS: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000"],
            controls: {
                ROTATE: ["w", "ArrowUp"],
                LEFT: ["a", "ArrowLeft"],
                DROP: ["s", "ArrowDown"],
                RIGHT: ["d", "ArrowRight"],
                HARDDROP: [" "]
            },
            scorePoints: {
                DROP: 10000,
                HARDDROP: 30000,
                LANDING: 100000,
                LINECLEAR: 75000000
            },
            storageKeys: {
                localStorage: {
                    GAMESTATE: "gameState",
                    HIGHSCORE_OLD: "_hscore",
                    GA_CLIENT_ID: o("clientId"),
                    GA_SESSION_DATA: o("sessionData")
                },
                chromeStorage: {
                    HIGHSCORE: o("highScore"),
                    LEGACY_HIGHSCORE_CHECKED: o("legacyHighScoreChecked"),
                    ADS: o("stored-ads"),
                    LEGACY_ICON_APPLIED: o("legacyIconApplied"),
                    REBRAND_ANNOUNCEMENT_SHOWN: o("rebrandAnnouncementShown"),
                    INSTALL_VERSION: o("installVersion"),
                    GA_USER_ID: o("userId")
                }
            },
            icons: {
                TETRYS: {
                    16: "icons/icon_old16.png",
                    24: "icons/icon_old24.png",
                    32: "icons/icon_old32.png",
                    48: "icons/icon_old48.png",
                    128: "icons/icon_old128.png",
                    256: "icons/icon_old256.png"
                }
            },
            REBRAND_VERSION: "2.2.3",
        };
        var f = function(t, e, n, r, o, i) {
                for (var a = 0; a < e.length; a++)
                    for (var c = 0; c < e[0].length; c++)
                        if (e[a][c] > 0) {
                            var u = e[a][c];
                            t.fillStyle = i(t, u, c, a, e), t.fillRect((n + c) * o, (r + a) * o, o, o)
                        }
            },
            p = function(t, e, n, r) {
                t.font = "".concat(e, "px ")
                    .concat(n), t.fillStyle = r || t.fillStyle
            },
            v = function(t, e, n, r) {
                t.fillText(e, n, r)
            },
            h = 2 * l.SCALE,
            y = {
                ANY: "*",
                keys: {},
                keyDownListeners: {},
                initialize: function() {
                    var t = this;
                    window.document.addEventListener("keyup", this.keyEvent.bind(this)), window.document.addEventListener("keydown", (function(e) {
                        var n = e.key.toLowerCase();
                        t.emitEvent(n, e), t.emitEvent(y.ANY, e), t.keyEvent(e)
                    })), window.addEventListener("blur", (function() {
                        return Object.keys(t.keys)
                            .forEach((function(e) {
                                return t.keys[e] = !1
                            }))
                    }))
                },
                emitEvent: function(t, e) {
                    if (this.keyDownListeners[t])
                        for (var n = this.keyDownListeners[t].map((function(t) {
                                return [t(e), t]
                            })), r = 0, o = n; r < o.length; r++) {
                            var i = o[r],
                                a = i[0],
                                c = i[1];
                            if (a) {
                                var u = this.keyDownListeners[t].indexOf(c);
                                this.keyDownListeners[t].splice(u, 1)
                            }
                        }
                },
                keyEvent: function(t) {
                    this.keys[t.key.toLowerCase()] = "keydown" === t.type
                },
                keyDown: function(t) {
                    var e = this;
                    return t === this.ANY ? Object.keys(this.keys)
                        .some((function(t) {
                            return !0 === e.keys[t]
                        })) : !!this.keys[t.toLowerCase()]
                },
                keysDown: function() {
                    for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return e.some((function(e) {
                        return t.keyDown(e)
                    }))
                },
                onKeyDown: function(t, e) {
                    var n = this;
                    return t = t.toLowerCase(), this.keyDownListeners[t] || (this.keyDownListeners[t] = []), this.keyDownListeners[t].push(e),
                        function() {
                            var r = n.keyDownListeners[t].indexOf(e);
                            n.keyDownListeners[t].splice(r, 1)
                        }
                },
                onKeysDown: function(t, e) {
                    var n = this,
                        r = t.map((function(t) {
                            return n.onKeyDown(t, e)
                        }));
                    return function() {
                        r.forEach((function(t) {
                            return t()
                        }))
                    }
                },
                onKeyStart: function(t, e) {
                    var n = this;
                    return this.onKeyDown(t, (function(r) {
                        return !n.keyDown(t) && e(r)
                    }))
                },
                onFirstPress: function(t, e) {
                    this.onKeyDown(t, (function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return e.apply(void 0, t), !0
                    }))
                }
            };
        const d = y;
        var b, g = function(t) {
                return t.map((function(t) {
                        return t.slice()
                    }))
                    .slice()
            },
            w = function(t) {
                return t.slice()
                    .map(g)
            },
            m = function(t, e) {
                for (var n, r = 0; r < t.length; ++r)
                    for (var o = 0; o < r; ++o) n = [t[r][o], t[o][r]], t[o][r] = n[0], t[r][o] = n[1];
                e > 0 ? t.forEach((function(t) {
                    return t.reverse()
                })) : t.reverse()
            },
            S = function(t) {
                var e = function(t) {
                    return 0 === t.length && (w(l.SHAPES)
                        .forEach((function(e) {
                            return t.push(e)
                        })), r(t)), t.pop()
                }(t);
                return {
                    x: Math.floor(l.ARENA_WIDTH / 2 - e[0].length / 2),
                    y: -e.length,
                    shape: e
                }
            },
            E = function(t) {
                return !!x(t) && (t.player.y -= 1, !0)
            },
            A = function(t, e) {
                void 0 === e && (e = !0),
                    function(t) {
                        for (var e = 0; e < t.player.shape.length; e++)
                            for (var n = 0; n < t.player.shape[e].length; n++)
                                if (0 !== t.player.shape[e][n]) {
                                    var r = t.player.y + e,
                                        o = t.player.x + n;
                                    void 0 !== t.arena[r] && void 0 !== t.arena[r][o] && (t.arena[r][o] = t.player.shape[e][n])
                                }
                    }(t), t.player = S(t.bag), e && (t.score += l.scorePoints.LANDING)
            },
            x = function(t) {
                for (var e = 0; e < t.player.shape.length; e++)
                    for (var n = 0; n < t.player.shape[e].length; n++)
                        if (t.player.shape[e][n] > 0) {
                            var r = t.player.y + e,
                                o = t.player.x + n;
                            if (o >= l.ARENA_WIDTH || r >= l.ARENA_HEIGHT || o < 0 || r >= 0 && t.arena[r][o] > 0) return !0
                        } return !1
            },
            O = function() {
                return O = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, O.apply(this, arguments)
            },
            T = function(t) {
                return t.time - t.lastTime
            },
            D = {
                b64name: !0,
                b64value: !0
            },
            _ = function(t, e, n) {
                void 0 === n && (n = {}), Object.assign(D, n);
                var r = n.b64name ? o(t) : t,
                    i = function(t, e) {
                        void 0 === e && (e = !0);
                        var n = JSON.stringify(t);
                        return e ? o(n) : n
                    }(e, n.b64value);
                window.localStorage.setItem(r, i)
            },
            N = function(t, e) {
                void 0 === e && (e = {}), Object.assign(D, e);
                var n = e.b64name ? o(t) : t,
                    r = window.localStorage.getItem(n);
                return null !== r ? function(t, e) {
                    void 0 === e && (e = !0);
                    var n = e ? i(t) : t;
                    return JSON.parse(n)
                }(r, e.b64value) : null
            };
        ! function(t) {
            t.LOCAL = "local", t.SYNC = "sync"
        }(b || (b = {}));
        var I = function(t) {
                return chrome && "storage" in chrome && t in chrome.storage
            },
            L = function(t) {
                return function(e, n) {
                    return new Promise((function(r) {
                        var o;
                        I(t) ? chrome.storage[t].set(((o = {})[e] = n, o), r) : (_(e, n), r())
                    }))
                }
            },
            R = function(t) {
                return function(e) {
                    return new Promise((function(n, r) {
                        var o = "item with key [".concat(e, "] does not exist");
                        if (I(t)) chrome.storage[t].get(e, (function(t) {
                            return e in t ? n(t[e]) : r(o)
                        }));
                        else {
                            var i = N(e);
                            null !== i ? n(i) : r(o)
                        }
                    }))
                }
            },
            C = R(b.LOCAL),
            k = L(b.LOCAL),
            P = R(b.SYNC),
            H = L(b.SYNC),
            G = function(t) {
                _(l.storageKeys.localStorage.GAMESTATE, t)
            },
            j = function() {
                return new Promise((function(t) {
                    return e = void 0, n = void 0, i = function() {
                        var e, n, r, i;
                        return function(t, e) {
                            var n, r, o, i, a = {
                                label: 0,
                                sent: function() {
                                    if (1 & o[0]) throw o[1];
                                    return o[1]
                                },
                                trys: [],
                                ops: []
                            };
                            return i = {
                                next: c(0),
                                throw: c(1),
                                return: c(2)
                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                return this
                            }), i;
                            function c(c) {
                                return function(u) {
                                    return function(c) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                                .done) return o;
                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                case 0:
                                                case 1:
                                                    o = c;
                                                    break;
                                                case 4:
                                                    return a.label++, {
                                                        value: c[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    a.label++, r = c[1], c = [0];
                                                    continue;
                                                case 7:
                                                    c = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((o = (o = a.trys)
                                                            .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                        a.label = c[1];
                                                        break
                                                    }
                                                    if (6 === c[0] && a.label < o[1]) {
                                                        a.label = o[1], o = c;
                                                        break
                                                    }
                                                    if (o && a.label < o[2]) {
                                                        a.label = o[2], a.ops.push(c);
                                                        break
                                                    }
                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            c = e.call(t, a)
                                        } catch (t) {
                                            c = [6, t], r = 0
                                        } finally {
                                            n = o = 0
                                        }
                                        if (5 & c[0]) throw c[1];
                                        return {
                                            value: c[0] ? c[1] : void 0,
                                            done: !0
                                        }
                                    }([c, u])
                                }
                            }
                        }(this, (function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, C(l.storageKeys.chromeStorage.HIGHSCORE)
                                        .catch(c(0))
                                    ];
                                case 1:
                                    return e = a.sent(), [4, C(l.storageKeys.chromeStorage.HIGHSCORE)
                                        .catch(c(0))
                                    ];
                                case 2:
                                    return n = a.sent(), r = 0, [4, C(l.storageKeys.chromeStorage.LEGACY_HIGHSCORE_CHECKED)
                                        .catch(c(!1))
                                    ];
                                case 3:
                                    return a.sent() || (null !== (r = N(l.storageKeys.localStorage.HIGHSCORE_OLD, {
                                        b64name: !1,
                                        b64value: !1
                                    })) && function(t, e) {
                                        void 0 === e && (e = {}), Object.assign(D, e);
                                        var n = e.b64name ? o(t) : t;
                                        window.localStorage.removeItem(n)
                                    }(l.storageKeys.localStorage.HIGHSCORE_OLD, {
                                        b64name: !1
                                    }), k(l.storageKeys.chromeStorage.LEGACY_HIGHSCORE_CHECKED, !0)), i = Math.max(e, n, r), H(l.storageKeys.chromeStorage.HIGHSCORE, i), k(l.storageKeys.chromeStorage.HIGHSCORE, i), t(i), [2]
                            }
                        }))
                    }, new((r = void 0) || (r = Promise))((function(t, o) {
                        function a(t) {
                            try {
                                u(i.next(t))
                            } catch (t) {
                                o(t)
                            }
                        }
                        function c(t) {
                            try {
                                u(i.throw(t))
                            } catch (t) {
                                o(t)
                            }
                        }
                        function u(e) {
                            var n;
                            e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r((function(t) {
                                    t(n)
                                })))
                                .then(a, c)
                        }
                        u((i = i.apply(e, n || []))
                            .next())
                    }));
                    var e, n, r, i
                }))
            },
            M = function(t) {
                return !t.every((function(t) {
                    return 0 === t
                }))
            },
            F = function(t) {
                return t.every((function(t) {
                    return t > 0
                }))
            },
            K = function() {
                return K = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, K.apply(this, arguments)
            },
            Y = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            })))
                            .then(a, c)
                    }
                    u((r = r.apply(t, e || []))
                        .next())
                }))
            },
            U = function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                    .done) return o;
                                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys)
                                                .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1], o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                c = e.call(t, a)
                            } catch (t) {
                                c = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            },
            V = function(t, e) {
                return void 0 === e && (e = {}), Y(void 0, void 0, void 0, (function() {
                    var n, r, o, i, a, c, s, f, p, v, h, y;
                    return U(this, (function(d) {
                        switch (d.label) {
                            case 0:
                                return w = l.analytics.GA_ENDPOINT, m = l.analytics.GA_MEASUREMENT_ID, S = l.analytics.GA_API_SECRET, n = "".concat(w, "?measurement_id=")
                                    .concat(m, "&api_secret=")
                                    .concat(S), r = fetch, o = [n], c = {
                                        method: "POST"
                                    }, a = (i = JSON)
                                    .stringify, s = {}, [4, (g = l.storageKeys.localStorage.GA_CLIENT_ID, C(g)
                                        .catch((function() {
                                            var t = self.crypto.randomUUID();
                                            return k(g, t), t
                                        })))];
                            case 1:
                                return s.client_id = d.sent(), [4, (b = l.storageKeys.chromeStorage.GA_USER_ID, P(b)
                                    .catch((function() {
                                        var t = self.crypto.randomUUID();
                                        return H(b, t), t
                                    })))];
                            case 2:
                                return s.user_id = d.sent(), f = {
                                    name: t
                                }, p = {
                                    appVersion: u()
                                }, [4, Y(void 0, void 0, void 0, (function() {
                                    var t, e, n;
                                    return U(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return t = l.analytics.GA_SESSION_EXPIRATION_IN_MIN, [4, C(l.storageKeys.localStorage.GA_SESSION_DATA)
                                                    .catch((function() {
                                                        return {
                                                            timeStamp: Date.now(),
                                                            sessionId: Date.now()
                                                        }
                                                    }))
                                                ];
                                            case 1:
                                                return e = r.sent(), n = Date.now() - e.timeStamp, t < n / 6e4 && (e.sessionId = Date.now()), e.timeStamp = Date.now(), [4, k(l.storageKeys.localStorage.GA_SESSION_DATA, e)];
                                            case 2:
                                                return r.sent(), [2, e.sessionId]
                                        }
                                    }))
                                }))];
                            case 3:
                                return [2, r.apply(void 0, o.concat([(c.body = a.apply(i, [(s.events = [(f.params = K.apply(void 0, [(p.sessionId = d.sent(), p.page_location = null === (v = null === globalThis || void 0 === globalThis ? void 0 : globalThis.location) || void 0 === v ? void 0 : v.href, p.page_host = null === (h = null === globalThis || void 0 === globalThis ? void 0 : globalThis.location) || void 0 === h ? void 0 : h.host, p.page_title = null === (y = null === globalThis || void 0 === globalThis ? void 0 : globalThis.document) || void 0 === y ? void 0 : y.title, p), e]), f)], s)]), c)]))]
                        }
                        var b, g, w, m, S
                    }))
                }))
            },
            W = function(t, e) {
                console.error(t);
                var n = function(t) {
                        if (!(t instanceof Error)) return JSON.stringify(t);
                        var e = {};
                        return Object.getOwnPropertyNames(t)
                            .forEach((function(n) {
                                e[n] = t[n]
                            }), t), JSON.stringify(e)
                    }(t),
                    r = JSON.parse(n);
                null != t && null != t.message && (n = "".concat(t.message, " | ")
                    .concat(n)), V("error", {
                    error: r,
                    where: e,
                    errorString: n
                })
            },
            B = function(t, e) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return function(t) {
                            return function() {
                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                return new Promise((function(n, r) {
                                    return o = void 0, i = void 0, c = function() {
                                        var o, i, a, c;
                                        return function(t, e) {
                                            var n, r, o, i, a = {
                                                label: 0,
                                                sent: function() {
                                                    if (1 & o[0]) throw o[1];
                                                    return o[1]
                                                },
                                                trys: [],
                                                ops: []
                                            };
                                            return i = {
                                                next: c(0),
                                                throw: c(1),
                                                return: c(2)
                                            }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                                                return this
                                            }), i;
                                            function c(c) {
                                                return function(u) {
                                                    return function(c) {
                                                        if (n) throw new TypeError("Generator is already executing.");
                                                        for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                                            if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                                                .done) return o;
                                                            switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                                                case 0:
                                                                case 1:
                                                                    o = c;
                                                                    break;
                                                                case 4:
                                                                    return a.label++, {
                                                                        value: c[1],
                                                                        done: !1
                                                                    };
                                                                case 5:
                                                                    a.label++, r = c[1], c = [0];
                                                                    continue;
                                                                case 7:
                                                                    c = a.ops.pop(), a.trys.pop();
                                                                    continue;
                                                                default:
                                                                    if (!((o = (o = a.trys)
                                                                            .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                                        a = 0;
                                                                        continue
                                                                    }
                                                                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                                        a.label = c[1];
                                                                        break
                                                                    }
                                                                    if (6 === c[0] && a.label < o[1]) {
                                                                        a.label = o[1], o = c;
                                                                        break
                                                                    }
                                                                    if (o && a.label < o[2]) {
                                                                        a.label = o[2], a.ops.push(c);
                                                                        break
                                                                    }
                                                                    o[2] && a.ops.pop(), a.trys.pop();
                                                                    continue
                                                            }
                                                            c = e.call(t, a)
                                                        } catch (t) {
                                                            c = [6, t], r = 0
                                                        } finally {
                                                            n = o = 0
                                                        }
                                                        if (5 & c[0]) throw c[1];
                                                        return {
                                                            value: c[0] ? c[1] : void 0,
                                                            done: !0
                                                        }
                                                    }([c, u])
                                                }
                                            }
                                        }(this, (function(u) {
                                            switch (u.label) {
                                                case 0:
                                                    o = !1, i = function() {
                                                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                                        o = !0, r.apply(void 0, t)
                                                    }, u.label = 1;
                                                case 1:
                                                    return u.trys.push([1, 4, 5, 6]), (a = t.apply(void 0, e)) instanceof Promise ? [4, a.catch((function(t) {
                                                        return i(t)
                                                    }))] : [3, 3];
                                                case 2:
                                                    u.sent(), u.label = 3;
                                                case 3:
                                                    return [3, 6];
                                                case 4:
                                                    return c = u.sent(), i(c), [3, 6];
                                                case 5:
                                                    return o || n(), [7];
                                                case 6:
                                                    return [2]
                                            }
                                        }))
                                    }, new((a = void 0) || (a = Promise))((function(t, e) {
                                        function n(t) {
                                            try {
                                                u(c.next(t))
                                            } catch (t) {
                                                e(t)
                                            }
                                        }
                                        function r(t) {
                                            try {
                                                u(c.throw(t))
                                            } catch (t) {
                                                e(t)
                                            }
                                        }
                                        function u(e) {
                                            var o;
                                            e.done ? t(e.value) : (o = e.value, o instanceof a ? o : new a((function(t) {
                                                    t(o)
                                                })))
                                                .then(n, r)
                                        }
                                        u((c = c.apply(o, i || []))
                                            .next())
                                    }));
                                    var o, i, a, c
                                }))
                            }
                        }(t)
                        .apply(void 0, n)
                        .catch((function(t) {
                            return W(t, e)
                        }))
                }
            };
        const z = function(t, e) {
            return l.COLORS[e - 1]
        };
        var q = function(t, e) {
                void 0 === e && (e = !0);
                var n = window.document.querySelector("div.controls");
                ! function(t, e) {
                    e ? t.classList.add("animated") : t.classList.remove("animated")
                }(n, e), t ? n.removeAttribute("hidden") : n.setAttribute("hidden", "")
            },
            J = function(t) {
                return void 0 === t && (t = !0), q(!1, t)
            },
            X = function(t) {
                return null === t ? null : window.document.querySelector(t)
            },
            Z = function(t) {
                return function(e, n) {
                    return function(t) {
                        return function(e, n) {
                            return X(e)
                                .addEventListener(t, n)
                        }
                    }(t)(e, B(n, "click{".concat(e, "}")))
                }
            },
            $ = function(t, e, n) {
                t.forEach((function(t, r, o) {
                    return t.addEventListener(e, n(t, r, o))
                }))
            },
            Q = function(t, e) {
                return t.getAttribute(e)
            },
            tt = function(t, e) {
                var n, r;
                t.paused = e, r = e ? "play" : "pause", (n = X("button#pause"))
                    .querySelector("img")
                    .src = "assets/".concat(r, ".png"), n.blur()
            },
            et = B((function(t, e, n) {
                return r = void 0, o = void 0, c = function() {
                    var r, o, i;
                    return function(t, e) {
                        var n, r, o, i, a = {
                            label: 0,
                            sent: function() {
                                if (1 & o[0]) throw o[1];
                                return o[1]
                            },
                            trys: [],
                            ops: []
                        };
                        return i = {
                            next: c(0),
                            throw: c(1),
                            return: c(2)
                        }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                            return this
                        }), i;
                        function c(c) {
                            return function(u) {
                                return function(c) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                        if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                            .done) return o;
                                        switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                            case 0:
                                            case 1:
                                                o = c;
                                                break;
                                            case 4:
                                                return a.label++, {
                                                    value: c[1],
                                                    done: !1
                                                };
                                            case 5:
                                                a.label++, r = c[1], c = [0];
                                                continue;
                                            case 7:
                                                c = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((o = (o = a.trys)
                                                        .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                                    a.label = c[1];
                                                    break
                                                }
                                                if (6 === c[0] && a.label < o[1]) {
                                                    a.label = o[1], o = c;
                                                    break
                                                }
                                                if (o && a.label < o[2]) {
                                                    a.label = o[2], a.ops.push(c);
                                                    break
                                                }
                                                o[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        c = e.call(t, a)
                                    } catch (t) {
                                        c = [6, t], r = 0
                                    } finally {
                                        n = o = 0
                                    }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    }
                                }([c, u])
                            }
                        }
                    }(this, (function(c) {
                        var u, s, y;
                        return r = e.player, e.paused || e.lost || (n.dropCounter += T(n), n.horizontalMovementCounter += T(n), n.dropCounter > l.DROP_INTERVAL ? (e.player.y += 1, (o = E(e)) ? n.lockCounter += T(n) : n.dropCounter = 0, o && n.lockCounter > l.LOCK_DELAY && A(e)) : n.lockCounter = 0, n.dropCounter > l.DROP_KEY_INTERVAL && d.keysDown.apply(d, l.controls.DROP) && (n.dropCounter = 0, function(t) {
                                    return t.player.y += 1, t.score += l.scorePoints.DROP, !E(t) || (t.score -= l.scorePoints.DROP, !1)
                                }(e) || (e.score += l.scorePoints.LANDING, A(e))), n.horizontalMovementCounter > l.HORIZONTAL_MOVEMENT_INTERVAL && (n.horizontalMovementCounter = 0, i = e.player.x, d.keysDown.apply(d, l.controls.RIGHT) ? e.player.x += 1 : d.keysDown.apply(d, l.controls.LEFT) && (e.player.x -= 1), x(e) && (e.player.x = i)), e.arena.filter(F)
                                .forEach((function(t, n) {
                                    var r, o;
                                    r = e.arena, o = e.arena.indexOf(t), r.splice(o, 1), r.unshift(Array(l.ARENA_WIDTH)
                                        .fill(0)), e.score += l.scorePoints.LINECLEAR * Math.pow(2, n)
                                }))), e.lost && d.keyDown(d.ANY) && !e.isReloading && (e.isReloading = !0, a()), !e.lost && (s = e.arena, s.slice(0, 3))
                            .some(M) && (e.lost = !0, e.player = r, (u = e.player)
                                .shape = u.shape.map((function(t) {
                                    return t.map((function(t) {
                                        return 0 === t ? t : 8
                                    }))
                                }))), e.score > e.highScore && (e.highScore = e.score, y = e.highScore, k(l.storageKeys.chromeStorage.HIGHSCORE, y)), G(e),
                            function(t) {
                                t.fillStyle = "rgba(255, 0, 0, 0)", t.clearRect(0, 0, t.canvas.width, t.canvas.height), t.fillRect(0, 0, t.canvas.width, t.canvas.height)
                            }(t), f(t, e.arena, 0, 0, l.SCALE, z), t.strokeStyle = "#FF0000", t.lineWidth = 2,
                            function(t, e, n, r, o) {
                                t.beginPath(), t.moveTo(0, n), t.lineTo(r, o), t.stroke()
                            }(t, 0, 3 * l.SCALE, l.ARENA_WIDTH * l.SCALE, 3 * l.SCALE), t.globalAlpha = Math.max(1 - n.lockCounter / l.LOCK_DELAY, n.lockCounter / l.LOCK_DELAY), f(t, e.player.shape, e.player.x, e.player.y, l.SCALE, z), t.globalAlpha = 1,
                            function(t, e) {
                                p(t, h, l.font.FAMILY, l.font.COLOR), t.textBaseline = "middle", t.textAlign = "center";
                                for (var n = "".concat(e); t.measureText(n)
                                    .width > 5.5 * l.SCALE;) p(t, h -= 1, l.font.FAMILY, l.font.COLOR);
                                v(t, n, l.SCALE * (l.ARENA_WIDTH / 2), 1.75 * l.SCALE)
                            }(t, e.score),
                            function(t, e) {
                                p(t, .6 * l.SCALE, l.font.FAMILY, l.font.COLOR), t.textBaseline = "middle", t.textAlign = "center", v(t, "High score: ".concat(e), l.SCALE * (l.ARENA_WIDTH / 2), 4 * l.SCALE)
                            }(t, e.highScore), requestAnimationFrame((function(r) {
                                return et(t, e, function(t, e) {
                                    return O(O({}, t), {
                                        time: e,
                                        lastTime: t.time
                                    })
                                }(n, r))
                            })), [2]
                    }))
                }, new((i = void 0) || (i = Promise))((function(t, e) {
                    function n(t) {
                        try {
                            u(c.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function a(t) {
                        try {
                            u(c.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }
                    function u(e) {
                        var r;
                        e.done ? t(e.value) : (r = e.value, r instanceof i ? r : new i((function(t) {
                                t(r)
                            })))
                            .then(n, a)
                    }
                    u((c = c.apply(r, o || []))
                        .next())
                }));
                var r, o, i, c
            }), "loop"),
            nt = function(t) {
                var e, n, o, i = w(l.SHAPES);
                return r(i), {
                    player: S(i),
                    arena: (e = l.ARENA_WIDTH, n = l.ARENA_HEIGHT, void 0 === o && (o = 0), Array(n)
                        .fill(null)
                        .map((function() {
                            return Array(e)
                                .fill(o)
                        }))),
                    bag: i,
                    paused: !1,
                    lost: !1,
                    isReloading: !1,
                    score: 0,
                    highScore: t
                }
            },
            rt = function(t) {
                return function() {
                    var e = X(Q(t, "data-close"));
                    null == e || e.toggleAttribute("hidden")
                }
            },
            ot = function(t) {
                return function() {
                    ga.apply(void 0, function(t, e, n) {
                        if (n || 2 === arguments.length)
                            for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                        return t.concat(r || Array.prototype.slice.call(e))
                    }(["send", "event"], Q(t, "data-analytics")
                        .split("/"), !1))
                }
            },
            it = function(t, e) {
                void 0 === e && (e = 0);
                var n = l.urls.ADS[e],
                    r = fetch("".concat(n, "/")
                        .concat(t));
                return l.urls.ADS.length > e + 1 && r.catch((function() {
                    return it(t, e + 1)
                })), r
            },
            at = function(t) {
                var e = function(t) {
                    var e = document.createElement("div");
                    return e.innerHTML = t, e.firstChild
                }(t);
                return e ? ($(e.querySelectorAll("[data-close]"), "click", rt), $(e.querySelectorAll("[data-analytics]"), "click", ot), e) : document.createElement("div")
            },
            ct = (n(3009), function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            })))
                            .then(a, c)
                    }
                    u((r = r.apply(t, e || []))
                        .next())
                }))
            }),
            ut = function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                    .done) return o;
                                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys)
                                                .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1], o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                c = e.call(t, a)
                            } catch (t) {
                                c = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            },
            st = function() {
                return st = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }, st.apply(this, arguments)
            },
            lt = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function a(t) {
                        try {
                            u(r.next(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function c(t) {
                        try {
                            u(r.throw(t))
                        } catch (t) {
                            i(t)
                        }
                    }
                    function u(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            })))
                            .then(a, c)
                    }
                    u((r = r.apply(t, e || []))
                        .next())
                }))
            },
            ft = function(t, e) {
                var n, r, o, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;
                function c(c) {
                    return function(u) {
                        return function(c) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1]))
                                    .done) return o;
                                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                                    case 0:
                                    case 1:
                                        o = c;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: c[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = c[1], c = [0];
                                        continue;
                                    case 7:
                                        c = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys)
                                                .length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                            a.label = c[1];
                                            break
                                        }
                                        if (6 === c[0] && a.label < o[1]) {
                                            a.label = o[1], o = c;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(c);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                c = e.call(t, a)
                            } catch (t) {
                                c = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & c[0]) throw c[1];
                            return {
                                value: c[0] ? c[1] : void 0,
                                done: !0
                            }
                        }([c, u])
                    }
                }
            };
        B((function() {
            return lt(void 0, void 0, void 0, (function() {
                var n, r, o;
                return ft(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return V("page_view"),
                                function() {
                                    try {
                                        chrome.runtime.connect({
                                            name: "popup"
                                        }), console.log("Runtime connected")
                                    } catch (t) {
                                        s(location.href) || W(t, "connectBackend")
                                    }
                                }(), d.initialize(), n = window.document.querySelector("canvas"), r = n.getContext("2d"), [4, lt(void 0, void 0, void 0, (function() {
                                    var t, e;
                                    return ft(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return t = N(l.storageKeys.localStorage.GAMESTATE), [4, C(l.storageKeys.chromeStorage.HIGHSCORE)
                                                    .catch(c(0))
                                                ];
                                            case 1:
                                                return e = n.sent(), null === t || t.lost ? [2, nt(e)] : [2, st(st({}, t), {
                                                    paused: !1
                                                })]
                                        }
                                    }))
                                }))];
                        case 1:
                            return function(n) {
                                    lt(void 0, void 0, void 0, (function() {
                                        var r;
                                        return ft(this, (function(o) {
                                            return (r = Z("click"))("button#restart", (function() {
                                                    return function(t) {
                                                        t.lost = !0, G(t), a()
                                                    }(n)
                                                })), r("button#pause", (function() {
                                                    tt(n, !n.paused), d.onFirstPress(d.ANY, (function() {
                                                        return tt(n, !1)
                                                    }))
                                                })),
                                                function(n) {
                                                    return ct(void 0, void 0, void 0, (function() {
                                                        var r, o, i, a, c, u, f, p, v;
                                                        return ut(this, (function(h) {
                                                            switch (h.label) {
                                                                case 0:
                                                                    return r = l.storageKeys.chromeStorage, [4, Promise.allSettled([C(r.INSTALL_VERSION), C(r.REBRAND_ANNOUNCEMENT_SHOWN)])];
                                                                case 1:
                                                                    return o = h.sent(), i = o[0], a = o[1], c = "fulfilled" === i.status, "fulfilled" === (y = a)
                                                                        .status && !0 === y.value || c ? (k(r.REBRAND_ANNOUNCEMENT_SHOWN, !0), [2]) : (u = Z("click"), f = X(".rebrand-overlay"), p = function() {
                                                                            return null == f ? void 0 : f.setAttribute("hidden", "")
                                                                        }, v = function() {
                                                                            return null == f ? void 0 : f.removeAttribute("hidden")
                                                                        }, tt(n, !0), v(), u(".rebrand-overlay .ok", (function() {
                                                                            return ct(void 0, void 0, void 0, (function() {
                                                                                var o;
                                                                                return ut(this, (function(i) {
                                                                                    switch (i.label) {
                                                                                        case 0:
                                                                                            tt(n, !1), p(), k(r.REBRAND_ANNOUNCEMENT_SHOWN, !0), i.label = 1;
                                                                                        case 1:
                                                                                            return i.trys.push([1, 4, , 5]), [4, t(void 0, void 0, void 0, (function() {
                                                                                                var n, r, o, i;
                                                                                                return e(this, (function(a) {
                                                                                                    switch (a.label) {
                                                                                                        case 0:
                                                                                                            return [4, t(void 0, void 0, void 0, (function() {
                                                                                                                return e(this, (function(t) {
                                                                                                                    return [2, chrome.runtime.getManifest()]
                                                                                                                }))
                                                                                                            }))];
                                                                                                        case 1:
                                                                                                            return n = a.sent(), r = n.action, o = r.default_title, i = r.default_icon, chrome.action.setTitle({
                                                                                                                title: o
                                                                                                            }), chrome.action.setIcon({
                                                                                                                path: i
                                                                                                            }), [2]
                                                                                                    }
                                                                                                }))
                                                                                            }))];
                                                                                        case 2:
                                                                                            return i.sent(), [4, k(r.LEGACY_ICON_APPLIED, !1)];
                                                                                        case 3:
                                                                                            return i.sent(), [3, 5];
                                                                                        case 4:
                                                                                            return o = i.sent(), s(location.href) || W(o, "announceRebrand::click::getManifest"), [3, 5];
                                                                                        case 5:
                                                                                            return [2]
                                                                                    }
                                                                                }))
                                                                            }))
                                                                        })), [2])
                                                            }
                                                            var y
                                                        }))
                                                    }))
                                                }(n)
                                                .catch((function(t) {
                                                    return W(t, "connectHTML::announceRebrand")
                                                })), it("tetrys")
                                                .then((function(t) {
                                                    return t.text()
                                                }))
                                                .catch((function() {
                                                    return C(l.storageKeys.chromeStorage.ADS)
                                                }))
                                                .then((function(t) {
                                                    return k(l.storageKeys.chromeStorage.ADS, t), t
                                                }))
                                                .then(at)
                                                .then((function(t) {
                                                    var e;
                                                    return null === (e = document.querySelector("#ads")) || void 0 === e ? void 0 : e.appendChild(t)
                                                }))
                                                .then((function() {
                                                    return V("ad_load", {
                                                        where: "connectHTML::fetch-ads",
                                                        description: "ad_load"
                                                    })
                                                }))
                                                .catch((function(t) {
                                                    return W(t, "connectHTML::fetch-ads")
                                                })), [2]
                                        }))
                                    }))
                                }(o = i.sent()), j()
                                .then((function(t) {
                                    return o.highScore = t
                                }))
                                .catch((function(t) {
                                    return W(t, "sync")
                                })), 0 === o.score && (void 0 === u && (u = !0), q(!0, u), d.onFirstPress(d.ANY, function(t) {
                                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                    return function() {
                                        return t.apply(void 0, e)
                                    }
                                }(J))),
                                function(t, e) {
                                    d.onKeysDown(l.controls.ROTATE, (function() {
                                        return !e.paused && function(t) {
                                            var e = t.player.x,
                                                n = 0;
                                            for (m(t.player.shape, 1); x(t);)
                                                if (t.player.x += n, (n = n > 0 ? -n - 1 : 1 - n) > t.player.shape[0].length) {
                                                    m(t.player.shape, -1), t.player.x = e;
                                                    break
                                                }
                                        }(e)
                                    })), d.onKeyStart(" ", (function() {
                                        return !e.paused && function(t) {
                                            var e = 0;
                                            do {
                                                t.player.y++, e++
                                            } while (!E(t));
                                            --e > 0 && (t.score += e * l.scorePoints.HARDDROP), A(t, !1)
                                        }(e)
                                    })), requestAnimationFrame((function() {
                                        return et(t, e, {
                                            time: 0,
                                            lastTime: 0,
                                            dropCounter: 0,
                                            lockCounter: 0,
                                            horizontalMovementCounter: 0
                                        })
                                    }))
                                }(r, o), [2]
                    }
                    var u
                }))
            }))
        }), "main")()
    })()
}