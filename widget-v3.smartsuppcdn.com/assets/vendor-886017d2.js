var Un = Object.defineProperty;
var Hn = (e, t, r) => t in e ? Un(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: r
}) : e[t] = r;
var Y = (e, t, r) => (Hn(e, typeof t != "symbol" ? t + "" : t, r), r);

function L() {}
const et = e => e;

function Vn(e, t) {
    for (const r in t) e[r] = t[r];
    return e
}

function jr(e) {
    return e()
}

function ur() {
    return Object.create(null)
}

function K(e) {
    e.forEach(jr)
}

function ue(e) {
    return typeof e == "function"
}

function Wn(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
}
let Te;

function sa(e, t) {
    return e === t ? !0 : (Te || (Te = document.createElement("a")), Te.href = t, e === Te.href)
}

function Xn(e) {
    return Object.keys(e).length === 0
}

function jt(e, ...t) {
    if (e == null) {
        for (const n of t) n(void 0);
        return L
    }
    const r = e.subscribe(...t);
    return r.unsubscribe ? () => r.unsubscribe() : r
}

function aa(e) {
    let t;
    return jt(e, r => t = r)(), t
}

function ca(e, t, r) {
    e.$$.on_destroy.push(jt(t, r))
}

function ua(e, t, r, n) {
    if (e) {
        const i = Ir(e, t, r, n);
        return e[0](i)
    }
}

function Ir(e, t, r, n) {
    return e[1] && n ? Vn(r.ctx.slice(), e[1](n(t))) : r.ctx
}

function fa(e, t, r, n) {
    if (e[2] && n) {
        const i = e[2](n(r));
        if (t.dirty === void 0) return i;
        if (typeof i == "object") {
            const s = [],
                l = Math.max(t.dirty.length, i.length);
            for (let f = 0; f < l; f += 1) s[f] = t.dirty[f] | i[f];
            return s
        }
        return t.dirty | i
    }
    return t.dirty
}

function la(e, t, r, n, i, s) {
    if (i) {
        const l = Ir(t, r, n, s);
        e.p(l, i)
    }
}

function ha(e) {
    if (e.ctx.length > 32) {
        const t = [],
            r = e.ctx.length / 32;
        for (let n = 0; n < r; n++) t[n] = -1;
        return t
    }
    return -1
}

function da(e) {
    const t = {};
    for (const r in e) r[0] !== "$" && (t[r] = e[r]);
    return t
}

function pa(e, t) {
    const r = {};
    t = new Set(t);
    for (const n in e) !t.has(n) && n[0] !== "$" && (r[n] = e[n]);
    return r
}

function ga(e) {
    const t = {};
    for (const r in e) t[r] = !0;
    return t
}

function ya(e) {
    return e ? ? ""
}

function va(e, t, r) {
    return e.set(r), t
}

function ma(e) {
    return e && ue(e.destroy) ? e.destroy : L
}

function fr(e) {
    const t = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
    return t ? [parseFloat(t[1]), t[2] || "px"] : [e, "px"]
}
const Lr = typeof window < "u";
let It = Lr ? () => window.performance.now() : () => Date.now(),
    Lt = Lr ? e => requestAnimationFrame(e) : L;
const ye = new Set;

function Ur(e) {
    ye.forEach(t => {
        t.c(e) || (ye.delete(t), t.f())
    }), ye.size !== 0 && Lt(Ur)
}

function Ut(e) {
    let t;
    return ye.size === 0 && Lt(Ur), {
        promise: new Promise(r => {
            ye.add(t = {
                c: e,
                f: r
            })
        }),
        abort() {
            ye.delete(t)
        }
    }
}

function Zn(e, t) {
    e.appendChild(t)
}

function Hr(e) {
    if (!e) return document;
    const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t && t.host ? t : e.ownerDocument
}

function Jn(e) {
    const t = Vr("style");
    return t.textContent = "/* empty */", Gn(Hr(e), t), t.sheet
}

function Gn(e, t) {
    return Zn(e.head || e, t), t.sheet
}

function Kn(e, t, r) {
    e.insertBefore(t, r || null)
}

function Ht(e) {
    e.parentNode && e.parentNode.removeChild(e)
}

function _a(e, t) {
    for (let r = 0; r < e.length; r += 1) e[r] && e[r].d(t)
}

function Vr(e) {
    return document.createElement(e)
}

function Yn(e) {
    return document.createElementNS("http://www.w3.org/2000/svg", e)
}

function Wr(e) {
    return document.createTextNode(e)
}

function ba() {
    return Wr(" ")
}

function Ca() {
    return Wr("")
}

function wa(e, t, r, n) {
    return e.addEventListener(t, r, n), () => e.removeEventListener(t, r, n)
}

function ka(e) {
    return function(t) {
        return t.preventDefault(), e.call(this, t)
    }
}

function Fa(e) {
    return function(t) {
        return t.stopPropagation(), e.call(this, t)
    }
}

function Xr(e, t, r) {
    r == null ? e.removeAttribute(t) : e.getAttribute(t) !== r && e.setAttribute(t, r)
}
const Qn = ["width", "height"];

function xa(e, t) {
    const r = Object.getOwnPropertyDescriptors(e.__proto__);
    for (const n in t) t[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = t[n] : n === "__value" ? e.value = e[n] = t[n] : r[n] && r[n].set && Qn.indexOf(n) === -1 ? e[n] = t[n] : Xr(e, n, t[n])
}

function Aa(e, t) {
    for (const r in t) Xr(e, r, t[r])
}

function ei(e) {
    return Array.from(e.childNodes)
}

function Ea(e, t) {
    t = "" + t, e.data !== t && (e.data = t)
}

function Da(e, t) {
    e.value = t ? ? ""
}

function Sa(e, t, r, n) {
    r == null ? e.style.removeProperty(t) : e.style.setProperty(t, r, n ? "important" : "")
}

function Ba(e, t, r) {
    for (let n = 0; n < e.options.length; n += 1) {
        const i = e.options[n];
        if (i.__value === t) {
            i.selected = !0;
            return
        }
    }(!r || t !== void 0) && (e.selectedIndex = -1)
}

function Ra(e, t) {
    for (let r = 0; r < e.options.length; r += 1) {
        const n = e.options[r];
        n.selected = ~t.indexOf(n.__value)
    }
}

function $a(e) {
    const t = e.querySelector(":checked");
    return t && t.__value
}

function Oa(e, t, r) {
    e.classList.toggle(t, !!r)
}

function Zr(e, t, {
    bubbles: r = !1,
    cancelable: n = !1
} = {}) {
    return new CustomEvent(e, {
        detail: t,
        bubbles: r,
        cancelable: n
    })
}
class za {
    constructor(t = !1) {
        Y(this, "is_svg", !1);
        Y(this, "e");
        Y(this, "n");
        Y(this, "t");
        Y(this, "a");
        this.is_svg = t, this.e = this.n = null
    }
    c(t) {
        this.h(t)
    }
    m(t, r, n = null) {
        this.e || (this.is_svg ? this.e = Yn(r.nodeName) : this.e = Vr(r.nodeType === 11 ? "TEMPLATE" : r.nodeName), this.t = r.tagName !== "TEMPLATE" ? r : r.content, this.c(t)), this.i(n)
    }
    h(t) {
        this.e.innerHTML = t, this.n = Array.from(this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes)
    }
    i(t) {
        for (let r = 0; r < this.n.length; r += 1) Kn(this.t, this.n[r], t)
    }
    p(t) {
        this.d(), this.h(t), this.i(this.a)
    }
    d() {
        this.n.forEach(Ht)
    }
}

function Ta(e, t) {
    return new e(t)
}
const Ve = new Map;
let We = 0;

function ti(e) {
    let t = 5381,
        r = e.length;
    for (; r--;) t = (t << 5) - t ^ e.charCodeAt(r);
    return t >>> 0
}

function ri(e, t) {
    const r = {
        stylesheet: Jn(t),
        rules: {}
    };
    return Ve.set(e, r), r
}

function Xe(e, t, r, n, i, s, l, f = 0) {
    const p = 16.666 / n;
    let d = `{
`;
    for (let g = 0; g <= 1; g += p) {
        const v = t + (r - t) * s(g);
        d += g * 100 + `%{${l(v,1-v)}}
`
    }
    const a = d + `100% {${l(r,1-r)}}
}`,
        o = `__svelte_${ti(a)}_${f}`,
        c = Hr(e),
        {
            stylesheet: u,
            rules: h
        } = Ve.get(c) || ri(c, e);
    h[o] || (h[o] = !0, u.insertRule(`@keyframes ${o} ${a}`, u.cssRules.length));
    const y = e.style.animation || "";
    return e.style.animation = `${y?`${y}, `:""}${o} ${n}ms linear ${i}ms 1 both`, We += 1, o
}

function Ze(e, t) {
    const r = (e.style.animation || "").split(", "),
        n = r.filter(t ? s => s.indexOf(t) < 0 : s => s.indexOf("__svelte") === -1),
        i = r.length - n.length;
    i && (e.style.animation = n.join(", "), We -= i, We || ni())
}

function ni() {
    Lt(() => {
        We || (Ve.forEach(e => {
            const {
                ownerNode: t
            } = e.stylesheet;
            t && Ht(t)
        }), Ve.clear())
    })
}
let Ee;

function Ae(e) {
    Ee = e
}

function $e() {
    if (!Ee) throw new Error("Function called outside component initialization");
    return Ee
}

function Ma(e) {
    $e().$$.on_mount.push(e)
}

function Pa(e) {
    $e().$$.on_destroy.push(e)
}

function qa() {
    const e = $e();
    return (t, r, {
        cancelable: n = !1
    } = {}) => {
        const i = e.$$.callbacks[t];
        if (i) {
            const s = Zr(t, r, {
                cancelable: n
            });
            return i.slice().forEach(l => {
                l.call(e, s)
            }), !s.defaultPrevented
        }
        return !0
    }
}

function Na(e, t) {
    return $e().$$.context.set(e, t), t
}

function ja(e) {
    return $e().$$.context.get(e)
}

function Ia(e, t) {
    const r = e.$$.callbacks[t.type];
    r && r.slice().forEach(n => n.call(this, t))
}
const ge = [],
    lr = [];
let ve = [];
const xt = [],
    Jr = Promise.resolve();
let At = !1;

function Gr() {
    At || (At = !0, Jr.then(Kr))
}

function La() {
    return Gr(), Jr
}

function _e(e) {
    ve.push(e)
}

function Ua(e) {
    xt.push(e)
}
const ft = new Set;
let le = 0;

function Kr() {
    if (le !== 0) return;
    const e = Ee;
    do {
        try {
            for (; le < ge.length;) {
                const t = ge[le];
                le++, Ae(t), ii(t.$$)
            }
        } catch (t) {
            throw ge.length = 0, le = 0, t
        }
        for (Ae(null), ge.length = 0, le = 0; lr.length;) lr.pop()();
        for (let t = 0; t < ve.length; t += 1) {
            const r = ve[t];
            ft.has(r) || (ft.add(r), r())
        }
        ve.length = 0
    } while (ge.length);
    for (; xt.length;) xt.pop()();
    At = !1, ft.clear(), Ae(e)
}

function ii(e) {
    if (e.fragment !== null) {
        e.update(), K(e.before_update);
        const t = e.dirty;
        e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(_e)
    }
}

function oi(e) {
    const t = [],
        r = [];
    ve.forEach(n => e.indexOf(n) === -1 ? t.push(n) : r.push(n)), r.forEach(n => n()), ve = t
}
let xe;

function Vt() {
    return xe || (xe = Promise.resolve(), xe.then(() => {
        xe = null
    })), xe
}

function ae(e, t, r) {
    e.dispatchEvent(Zr(`${t?"intro":"outro"}${r}`))
}
const Ue = new Set;
let Z;

function Ha() {
    Z = {
        r: 0,
        c: [],
        p: Z
    }
}

function Va() {
    Z.r || K(Z.c), Z = Z.p
}

function Yr(e, t) {
    e && e.i && (Ue.delete(e), e.i(t))
}

function si(e, t, r, n) {
    if (e && e.o) {
        if (Ue.has(e)) return;
        Ue.add(e), Z.c.push(() => {
            Ue.delete(e), n && (r && e.d(1), n())
        }), e.o(t)
    } else n && n()
}
const Wt = {
    duration: 0
};

function Wa(e, t, r) {
    const n = {
        direction: "in"
    };
    let i = t(e, r, n),
        s = !1,
        l, f, p = 0;

    function d() {
        l && Ze(e, l)
    }

    function a() {
        const {
            delay: c = 0,
            duration: u = 300,
            easing: h = et,
            tick: y = L,
            css: g
        } = i || Wt;
        g && (l = Xe(e, 0, 1, u, c, h, g, p++)), y(0, 1);
        const v = It() + c,
            b = v + u;
        f && f.abort(), s = !0, _e(() => ae(e, !0, "start")), f = Ut(C => {
            if (s) {
                if (C >= b) return y(1, 0), ae(e, !0, "end"), d(), s = !1;
                if (C >= v) {
                    const m = h((C - v) / u);
                    y(m, 1 - m)
                }
            }
            return s
        })
    }
    let o = !1;
    return {
        start() {
            o || (o = !0, Ze(e), ue(i) ? (i = i(n), Vt().then(a)) : a())
        },
        invalidate() {
            o = !1
        },
        end() {
            s && (d(), s = !1)
        }
    }
}

function Xa(e, t, r) {
    const n = {
        direction: "out"
    };
    let i = t(e, r, n),
        s = !0,
        l;
    const f = Z;
    f.r += 1;
    let p;

    function d() {
        const {
            delay: a = 0,
            duration: o = 300,
            easing: c = et,
            tick: u = L,
            css: h
        } = i || Wt;
        h && (l = Xe(e, 1, 0, o, a, c, h));
        const y = It() + a,
            g = y + o;
        _e(() => ae(e, !1, "start")), "inert" in e && (p = e.inert, e.inert = !0), Ut(v => {
            if (s) {
                if (v >= g) return u(0, 1), ae(e, !1, "end"), --f.r || K(f.c), !1;
                if (v >= y) {
                    const b = c((v - y) / o);
                    u(1 - b, b)
                }
            }
            return s
        })
    }
    return ue(i) ? Vt().then(() => {
        i = i(n), d()
    }) : d(), {
        end(a) {
            a && "inert" in e && (e.inert = p), a && i.tick && i.tick(1, 0), s && (l && Ze(e, l), s = !1)
        }
    }
}

function Za(e, t, r, n) {
    let s = t(e, r, {
            direction: "both"
        }),
        l = n ? 0 : 1,
        f = null,
        p = null,
        d = null,
        a;

    function o() {
        d && Ze(e, d)
    }

    function c(h, y) {
        const g = h.b - l;
        return y *= Math.abs(g), {
            a: l,
            b: h.b,
            d: g,
            duration: y,
            start: h.start,
            end: h.start + y,
            group: h.group
        }
    }

    function u(h) {
        const {
            delay: y = 0,
            duration: g = 300,
            easing: v = et,
            tick: b = L,
            css: C
        } = s || Wt, m = {
            start: It() + y,
            b: h
        };
        h || (m.group = Z, Z.r += 1), "inert" in e && (h ? a !== void 0 && (e.inert = a) : (a = e.inert, e.inert = !0)), f || p ? p = m : (C && (o(), d = Xe(e, l, h, g, y, v, C)), h && b(0, 1), f = c(m, g), _e(() => ae(e, h, "start")), Ut(_ => {
            if (p && _ > p.start && (f = c(p, g), p = null, ae(e, f.b, "start"), C && (o(), d = Xe(e, l, f.b, f.duration, 0, v, s.css))), f) {
                if (_ >= f.end) b(l = f.b, 1 - l), ae(e, f.b, "end"), p || (f.b ? o() : --f.group.r || K(f.group.c)), f = null;
                else if (_ >= f.start) {
                    const w = _ - f.start;
                    l = f.a + f.d * v(w / f.duration), b(l, 1 - l)
                }
            }
            return !!(f || p)
        }))
    }
    return {
        run(h) {
            ue(s) ? Vt().then(() => {
                s = s({
                    direction: h ? "in" : "out"
                }), u(h)
            }) : u(h)
        },
        end() {
            o(), f = p = null
        }
    }
}

function Ja(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e)
}

function Ga(e, t) {
    e.d(1), t.delete(e.key)
}

function Ka(e, t) {
    si(e, 1, 1, () => {
        t.delete(e.key)
    })
}

function Ya(e, t, r, n, i, s, l, f, p, d, a, o) {
    let c = e.length,
        u = s.length,
        h = c;
    const y = {};
    for (; h--;) y[e[h].key] = h;
    const g = [],
        v = new Map,
        b = new Map,
        C = [];
    for (h = u; h--;) {
        const k = o(i, s, h),
            F = r(k);
        let x = l.get(F);
        x ? n && C.push(() => x.p(k, t)) : (x = d(F, k), x.c()), v.set(F, g[h] = x), F in y && b.set(F, Math.abs(h - y[F]))
    }
    const m = new Set,
        _ = new Set;

    function w(k) {
        Yr(k, 1), k.m(f, a), l.set(k.key, k), a = k.first, u--
    }
    for (; c && u;) {
        const k = g[u - 1],
            F = e[c - 1],
            x = k.key,
            A = F.key;
        k === F ? (a = k.first, c--, u--) : v.has(A) ? !l.has(x) || m.has(x) ? w(k) : _.has(A) ? c-- : b.get(x) > b.get(A) ? (_.add(x), w(k)) : (m.add(A), c--) : (p(F, l), c--)
    }
    for (; c--;) {
        const k = e[c];
        v.has(k.key) || p(k, l)
    }
    for (; u;) w(g[u - 1]);
    return K(C), g
}

function Qa(e, t) {
    const r = {},
        n = {},
        i = {
            $$scope: 1
        };
    let s = e.length;
    for (; s--;) {
        const l = e[s],
            f = t[s];
        if (f) {
            for (const p in l) p in f || (n[p] = 1);
            for (const p in f) i[p] || (r[p] = f[p], i[p] = 1);
            e[s] = f
        } else
            for (const p in l) i[p] = 1
    }
    for (const l in n) l in r || (r[l] = void 0);
    return r
}

function ec(e) {
    return typeof e == "object" && e !== null ? e : {}
}

function tc(e, t, r) {
    const n = e.$$.props[t];
    n !== void 0 && (e.$$.bound[n] = r, r(e.$$.ctx[n]))
}

function rc(e) {
    e && e.c()
}

function ai(e, t, r) {
    const {
        fragment: n,
        after_update: i
    } = e.$$;
    n && n.m(t, r), _e(() => {
        const s = e.$$.on_mount.map(jr).filter(ue);
        e.$$.on_destroy ? e.$$.on_destroy.push(...s) : K(s), e.$$.on_mount = []
    }), i.forEach(_e)
}

function ci(e, t) {
    const r = e.$$;
    r.fragment !== null && (oi(r.after_update), K(r.on_destroy), r.fragment && r.fragment.d(t), r.on_destroy = r.fragment = null, r.ctx = [])
}

function ui(e, t) {
    e.$$.dirty[0] === -1 && (ge.push(e), Gr(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
}

function nc(e, t, r, n, i, s, l, f = [-1]) {
    const p = Ee;
    Ae(e);
    const d = e.$$ = {
        fragment: null,
        ctx: [],
        props: s,
        update: L,
        not_equal: i,
        bound: ur(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(t.context || (p ? p.$$.context : [])),
        callbacks: ur(),
        dirty: f,
        skip_bound: !1,
        root: t.target || p.$$.root
    };
    l && l(d.root);
    let a = !1;
    if (d.ctx = r ? r(e, t.props || {}, (o, c, ...u) => {
            const h = u.length ? u[0] : c;
            return d.ctx && i(d.ctx[o], d.ctx[o] = h) && (!d.skip_bound && d.bound[o] && d.bound[o](h), a && ui(e, o)), c
        }) : [], d.update(), a = !0, K(d.before_update), d.fragment = n ? n(d.ctx) : !1, t.target) {
        if (t.hydrate) {
            const o = ei(t.target);
            d.fragment && d.fragment.l(o), o.forEach(Ht)
        } else d.fragment && d.fragment.c();
        t.intro && Yr(e.$$.fragment), ai(e, t.target, t.anchor), Kr()
    }
    Ae(p)
}
class ic {
    constructor() {
        Y(this, "$$");
        Y(this, "$$set")
    }
    $destroy() {
        ci(this, 1), this.$destroy = L
    }
    $on(t, r) {
        if (!ue(r)) return L;
        const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
        return n.push(r), () => {
            const i = n.indexOf(r);
            i !== -1 && n.splice(i, 1)
        }
    }
    $set(t) {
        this.$$set && !Xn(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
    }
}
const fi = "4",
    he = [];

function li(e, t) {
    return {
        subscribe: hi(e, t).subscribe
    }
}

function hi(e, t = L) {
    let r;
    const n = new Set;

    function i(f) {
        if (Wn(e, f) && (e = f, r)) {
            const p = !he.length;
            for (const d of n) d[1](), he.push(d, e);
            if (p) {
                for (let d = 0; d < he.length; d += 2) he[d][0](he[d + 1]);
                he.length = 0
            }
        }
    }

    function s(f) {
        i(f(e))
    }

    function l(f, p = L) {
        const d = [f, p];
        return n.add(d), n.size === 1 && (r = t(i, s) || L), f(e), () => {
            n.delete(d), n.size === 0 && r && (r(), r = null)
        }
    }
    return {
        set: i,
        update: s,
        subscribe: l
    }
}

function oc(e, t, r) {
    const n = !Array.isArray(e),
        i = n ? [e] : e;
    if (!i.every(Boolean)) throw new Error("derived() expects stores as input, got a falsy value");
    const s = t.length < 2;
    return li(r, (l, f) => {
        let p = !1;
        const d = [];
        let a = 0,
            o = L;
        const c = () => {
                if (a) return;
                o();
                const h = t(n ? d[0] : d, l, f);
                s ? l(h) : o = ue(h) ? h : L
            },
            u = i.map((h, y) => jt(h, g => {
                d[y] = g, a &= ~(1 << y), p && c()
            }, () => {
                a |= 1 << y
            }));
        return p = !0, c(),
            function() {
                K(u), o(), p = !1
            }
    })
}
var B = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function Xt(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Qr(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var r = function n() {
            return this instanceof n ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        r.prototype = t.prototype
    } else r = {};
    return Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(n) {
        var i = Object.getOwnPropertyDescriptor(e, n);
        Object.defineProperty(r, n, i.get ? i : {
            enumerable: !0,
            get: function() {
                return e[n]
            }
        })
    }), r
}
var en = {},
    tn = {},
    rn = {},
    q = {},
    Me = {
        exports: {}
    },
    lt, hr;

function di() {
    if (hr) return lt;
    hr = 1;
    var e = 1e3,
        t = e * 60,
        r = t * 60,
        n = r * 24,
        i = n * 7,
        s = n * 365.25;
    lt = function(a, o) {
        o = o || {};
        var c = typeof a;
        if (c === "string" && a.length > 0) return l(a);
        if (c === "number" && isFinite(a)) return o.long ? p(a) : f(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    };

    function l(a) {
        if (a = String(a), !(a.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);
            if (o) {
                var c = parseFloat(o[1]),
                    u = (o[2] || "ms").toLowerCase();
                switch (u) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return c * s;
                    case "weeks":
                    case "week":
                    case "w":
                        return c * i;
                    case "days":
                    case "day":
                    case "d":
                        return c * n;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c;
                    default:
                        return
                }
            }
        }
    }

    function f(a) {
        var o = Math.abs(a);
        return o >= n ? Math.round(a / n) + "d" : o >= r ? Math.round(a / r) + "h" : o >= t ? Math.round(a / t) + "m" : o >= e ? Math.round(a / e) + "s" : a + "ms"
    }

    function p(a) {
        var o = Math.abs(a);
        return o >= n ? d(a, o, n, "day") : o >= r ? d(a, o, r, "hour") : o >= t ? d(a, o, t, "minute") : o >= e ? d(a, o, e, "second") : a + " ms"
    }

    function d(a, o, c, u) {
        var h = o >= c * 1.5;
        return Math.round(a / c) + " " + u + (h ? "s" : "")
    }
    return lt
}
var ht, dr;

function pi() {
    if (dr) return ht;
    dr = 1;

    function e(t) {
        n.debug = n, n.default = n, n.coerce = d, n.disable = l, n.enable = s, n.enabled = f, n.humanize = di(), n.destroy = a, Object.keys(t).forEach(o => {
            n[o] = t[o]
        }), n.names = [], n.skips = [], n.formatters = {};

        function r(o) {
            let c = 0;
            for (let u = 0; u < o.length; u++) c = (c << 5) - c + o.charCodeAt(u), c |= 0;
            return n.colors[Math.abs(c) % n.colors.length]
        }
        n.selectColor = r;

        function n(o) {
            let c, u = null,
                h, y;

            function g(...v) {
                if (!g.enabled) return;
                const b = g,
                    C = Number(new Date),
                    m = C - (c || C);
                b.diff = m, b.prev = c, b.curr = C, c = C, v[0] = n.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
                let _ = 0;
                v[0] = v[0].replace(/%([a-zA-Z%])/g, (k, F) => {
                    if (k === "%%") return "%";
                    _++;
                    const x = n.formatters[F];
                    if (typeof x == "function") {
                        const A = v[_];
                        k = x.call(b, A), v.splice(_, 1), _--
                    }
                    return k
                }), n.formatArgs.call(b, v), (b.log || n.log).apply(b, v)
            }
            return g.namespace = o, g.useColors = n.useColors(), g.color = n.selectColor(o), g.extend = i, g.destroy = n.destroy, Object.defineProperty(g, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => u !== null ? u : (h !== n.namespaces && (h = n.namespaces, y = n.enabled(o)), y),
                set: v => {
                    u = v
                }
            }), typeof n.init == "function" && n.init(g), g
        }

        function i(o, c) {
            const u = n(this.namespace + (typeof c > "u" ? ":" : c) + o);
            return u.log = this.log, u
        }

        function s(o) {
            n.save(o), n.namespaces = o, n.names = [], n.skips = [];
            let c;
            const u = (typeof o == "string" ? o : "").split(/[\s,]+/),
                h = u.length;
            for (c = 0; c < h; c++) u[c] && (o = u[c].replace(/\*/g, ".*?"), o[0] === "-" ? n.skips.push(new RegExp("^" + o.slice(1) + "$")) : n.names.push(new RegExp("^" + o + "$")))
        }

        function l() {
            const o = [...n.names.map(p), ...n.skips.map(p).map(c => "-" + c)].join(",");
            return n.enable(""), o
        }

        function f(o) {
            if (o[o.length - 1] === "*") return !0;
            let c, u;
            for (c = 0, u = n.skips.length; c < u; c++)
                if (n.skips[c].test(o)) return !1;
            for (c = 0, u = n.names.length; c < u; c++)
                if (n.names[c].test(o)) return !0;
            return !1
        }

        function p(o) {
            return o.toString().substring(2, o.toString().length - 2).replace(/\.\*\?$/, "*")
        }

        function d(o) {
            return o instanceof Error ? o.stack || o.message : o
        }

        function a() {
            console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
        }
        return n.enable(n.load()), n
    }
    return ht = e, ht
}
var pr;

function gi() {
    return pr || (pr = 1, function(e, t) {
        t.formatArgs = n, t.save = i, t.load = s, t.useColors = r, t.storage = l(), t.destroy = (() => {
            let p = !1;
            return () => {
                p || (p = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
            }
        })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

        function r() {
            return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }

        function n(p) {
            if (p[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + p[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const d = "color: " + this.color;
            p.splice(1, 0, d, "color: inherit");
            let a = 0,
                o = 0;
            p[0].replace(/%[a-zA-Z%]/g, c => {
                c !== "%%" && (a++, c === "%c" && (o = a))
            }), p.splice(o, 0, d)
        }
        t.log = console.debug || console.log || (() => {});

        function i(p) {
            try {
                p ? t.storage.setItem("debug", p) : t.storage.removeItem("debug")
            } catch {}
        }

        function s() {
            let p;
            try {
                p = t.storage.getItem("debug")
            } catch {}
            return !p && typeof process < "u" && "env" in process && (p = {}.DEBUG), p
        }

        function l() {
            try {
                return localStorage
            } catch {}
        }
        e.exports = pi()(t);
        const {
            formatters: f
        } = e.exports;
        f.j = function(p) {
            try {
                return JSON.stringify(p)
            } catch (d) {
                return "[UnexpectedJSONParseError]: " + d.message
            }
        }
    }(Me, Me.exports)), Me.exports
}
var yi = B && B.__extends || function() {
    var e = function(t, r) {
        return e = Object.setPrototypeOf || {
            __proto__: []
        }
        instanceof Array && function(n, i) {
            n.__proto__ = i
        } || function(n, i) {
            for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (n[s] = i[s])
        }, e(t, r)
    };
    return function(t, r) {
        if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
        e(t, r);

        function n() {
            this.constructor = t
        }
        t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n)
    }
}();
Object.defineProperty(q, "__esModule", {
    value: !0
});
q.createEmitter = q.createCallback = q.bound = q.createSocketError = q.SocketError = q.debug = void 0;
q.debug = vi();

function vi() {
    try {
        return gi()("smartsupp:client")
    } catch {
        return function() {}
    }
}
var nn = function(e) {
    yi(t, e);

    function t(r, n) {
        var i = e.call(this, r) || this;
        return Object.setPrototypeOf(i, t.prototype), i.name = i.constructor.name, i.code = n.code, i.type = n.type, i.event = n.event, n && n.stack && (i.stack = "".concat(i.stack, `
Caused By: `).concat(n.stack)), i
    }
    return t
}(Error);
q.SocketError = nn;

function on(e) {
    return new nn(e.message, e)
}
q.createSocketError = on;

function mi(e, t) {
    return function() {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        e[t].apply(e, r)
    }
}
q.bound = mi;

function _i(e, t) {
    return function(r, n) {
        r ? t(on(r)) : e(n)
    }
}
q.createCallback = _i;

function bi(e, t) {
    return function(r) {
        e.emit(t, r)
    }
}
q.createEmitter = bi;
var sn = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        r = "~";

    function n() {}
    Object.create && (n.prototype = Object.create(null), new n().__proto__ || (r = !1));

    function i(p, d, a) {
        this.fn = p, this.context = d, this.once = a || !1
    }

    function s(p, d, a, o, c) {
        if (typeof a != "function") throw new TypeError("The listener must be a function");
        var u = new i(a, o || p, c),
            h = r ? r + d : d;
        return p._events[h] ? p._events[h].fn ? p._events[h] = [p._events[h], u] : p._events[h].push(u) : (p._events[h] = u, p._eventsCount++), p
    }

    function l(p, d) {
        --p._eventsCount === 0 ? p._events = new n : delete p._events[d]
    }

    function f() {
        this._events = new n, this._eventsCount = 0
    }
    f.prototype.eventNames = function() {
        var d = [],
            a, o;
        if (this._eventsCount === 0) return d;
        for (o in a = this._events) t.call(a, o) && d.push(r ? o.slice(1) : o);
        return Object.getOwnPropertySymbols ? d.concat(Object.getOwnPropertySymbols(a)) : d
    }, f.prototype.listeners = function(d) {
        var a = r ? r + d : d,
            o = this._events[a];
        if (!o) return [];
        if (o.fn) return [o.fn];
        for (var c = 0, u = o.length, h = new Array(u); c < u; c++) h[c] = o[c].fn;
        return h
    }, f.prototype.listenerCount = function(d) {
        var a = r ? r + d : d,
            o = this._events[a];
        return o ? o.fn ? 1 : o.length : 0
    }, f.prototype.emit = function(d, a, o, c, u, h) {
        var y = r ? r + d : d;
        if (!this._events[y]) return !1;
        var g = this._events[y],
            v = arguments.length,
            b, C;
        if (g.fn) {
            switch (g.once && this.removeListener(d, g.fn, void 0, !0), v) {
                case 1:
                    return g.fn.call(g.context), !0;
                case 2:
                    return g.fn.call(g.context, a), !0;
                case 3:
                    return g.fn.call(g.context, a, o), !0;
                case 4:
                    return g.fn.call(g.context, a, o, c), !0;
                case 5:
                    return g.fn.call(g.context, a, o, c, u), !0;
                case 6:
                    return g.fn.call(g.context, a, o, c, u, h), !0
            }
            for (C = 1, b = new Array(v - 1); C < v; C++) b[C - 1] = arguments[C];
            g.fn.apply(g.context, b)
        } else {
            var m = g.length,
                _;
            for (C = 0; C < m; C++) switch (g[C].once && this.removeListener(d, g[C].fn, void 0, !0), v) {
                case 1:
                    g[C].fn.call(g[C].context);
                    break;
                case 2:
                    g[C].fn.call(g[C].context, a);
                    break;
                case 3:
                    g[C].fn.call(g[C].context, a, o);
                    break;
                case 4:
                    g[C].fn.call(g[C].context, a, o, c);
                    break;
                default:
                    if (!b)
                        for (_ = 1, b = new Array(v - 1); _ < v; _++) b[_ - 1] = arguments[_];
                    g[C].fn.apply(g[C].context, b)
            }
        }
        return !0
    }, f.prototype.on = function(d, a, o) {
        return s(this, d, a, o, !1)
    }, f.prototype.once = function(d, a, o) {
        return s(this, d, a, o, !0)
    }, f.prototype.removeListener = function(d, a, o, c) {
        var u = r ? r + d : d;
        if (!this._events[u]) return this;
        if (!a) return l(this, u), this;
        var h = this._events[u];
        if (h.fn) h.fn === a && (!c || h.once) && (!o || h.context === o) && l(this, u);
        else {
            for (var y = 0, g = [], v = h.length; y < v; y++)(h[y].fn !== a || c && !h[y].once || o && h[y].context !== o) && g.push(h[y]);
            g.length ? this._events[u] = g.length === 1 ? g[0] : g : l(this, u)
        }
        return this
    }, f.prototype.removeAllListeners = function(d) {
        var a;
        return d ? (a = r ? r + d : d, this._events[a] && l(this, a)) : (this._events = new n, this._eventsCount = 0), this
    }, f.prototype.off = f.prototype.removeListener, f.prototype.addListener = f.prototype.on, f.prefixed = r, f.EventEmitter = f, e.exports = f
})(sn);
var Ci = sn.exports,
    Et = {
        exports: {}
    },
    wi = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    ki = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    Fi = function(t) {
        var r = t,
            n = t.indexOf("["),
            i = t.indexOf("]");
        n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
        for (var s = wi.exec(t || ""), l = {}, f = 14; f--;) l[ki[f]] = s[f] || "";
        return n != -1 && i != -1 && (l.source = r, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l
    },
    Dt = {
        exports: {}
    },
    dt, gr;

function xi() {
    if (gr) return dt;
    gr = 1;
    var e = 1e3,
        t = e * 60,
        r = t * 60,
        n = r * 24,
        i = n * 7,
        s = n * 365.25;
    dt = function(a, o) {
        o = o || {};
        var c = typeof a;
        if (c === "string" && a.length > 0) return l(a);
        if (c === "number" && isFinite(a)) return o.long ? p(a) : f(a);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
    };

    function l(a) {
        if (a = String(a), !(a.length > 100)) {
            var o = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);
            if (o) {
                var c = parseFloat(o[1]),
                    u = (o[2] || "ms").toLowerCase();
                switch (u) {
                    case "years":
                    case "year":
                    case "yrs":
                    case "yr":
                    case "y":
                        return c * s;
                    case "weeks":
                    case "week":
                    case "w":
                        return c * i;
                    case "days":
                    case "day":
                    case "d":
                        return c * n;
                    case "hours":
                    case "hour":
                    case "hrs":
                    case "hr":
                    case "h":
                        return c * r;
                    case "minutes":
                    case "minute":
                    case "mins":
                    case "min":
                    case "m":
                        return c * t;
                    case "seconds":
                    case "second":
                    case "secs":
                    case "sec":
                    case "s":
                        return c * e;
                    case "milliseconds":
                    case "millisecond":
                    case "msecs":
                    case "msec":
                    case "ms":
                        return c;
                    default:
                        return
                }
            }
        }
    }

    function f(a) {
        var o = Math.abs(a);
        return o >= n ? Math.round(a / n) + "d" : o >= r ? Math.round(a / r) + "h" : o >= t ? Math.round(a / t) + "m" : o >= e ? Math.round(a / e) + "s" : a + "ms"
    }

    function p(a) {
        var o = Math.abs(a);
        return o >= n ? d(a, o, n, "day") : o >= r ? d(a, o, r, "hour") : o >= t ? d(a, o, t, "minute") : o >= e ? d(a, o, e, "second") : a + " ms"
    }

    function d(a, o, c, u) {
        var h = o >= c * 1.5;
        return Math.round(a / c) + " " + u + (h ? "s" : "")
    }
    return dt
}

function Ai(e) {
    r.debug = r, r.default = r, r.coerce = d, r.disable = l, r.enable = s, r.enabled = f, r.humanize = xi(), Object.keys(e).forEach(a => {
        r[a] = e[a]
    }), r.instances = [], r.names = [], r.skips = [], r.formatters = {};

    function t(a) {
        let o = 0;
        for (let c = 0; c < a.length; c++) o = (o << 5) - o + a.charCodeAt(c), o |= 0;
        return r.colors[Math.abs(o) % r.colors.length]
    }
    r.selectColor = t;

    function r(a) {
        let o;

        function c(...u) {
            if (!c.enabled) return;
            const h = c,
                y = Number(new Date),
                g = y - (o || y);
            h.diff = g, h.prev = o, h.curr = y, o = y, u[0] = r.coerce(u[0]), typeof u[0] != "string" && u.unshift("%O");
            let v = 0;
            u[0] = u[0].replace(/%([a-zA-Z%])/g, (C, m) => {
                if (C === "%%") return C;
                v++;
                const _ = r.formatters[m];
                if (typeof _ == "function") {
                    const w = u[v];
                    C = _.call(h, w), u.splice(v, 1), v--
                }
                return C
            }), r.formatArgs.call(h, u), (h.log || r.log).apply(h, u)
        }
        return c.namespace = a, c.enabled = r.enabled(a), c.useColors = r.useColors(), c.color = t(a), c.destroy = n, c.extend = i, typeof r.init == "function" && r.init(c), r.instances.push(c), c
    }

    function n() {
        const a = r.instances.indexOf(this);
        return a !== -1 ? (r.instances.splice(a, 1), !0) : !1
    }

    function i(a, o) {
        const c = r(this.namespace + (typeof o > "u" ? ":" : o) + a);
        return c.log = this.log, c
    }

    function s(a) {
        r.save(a), r.names = [], r.skips = [];
        let o;
        const c = (typeof a == "string" ? a : "").split(/[\s,]+/),
            u = c.length;
        for (o = 0; o < u; o++) c[o] && (a = c[o].replace(/\*/g, ".*?"), a[0] === "-" ? r.skips.push(new RegExp("^" + a.substr(1) + "$")) : r.names.push(new RegExp("^" + a + "$")));
        for (o = 0; o < r.instances.length; o++) {
            const h = r.instances[o];
            h.enabled = r.enabled(h.namespace)
        }
    }

    function l() {
        const a = [...r.names.map(p), ...r.skips.map(p).map(o => "-" + o)].join(",");
        return r.enable(""), a
    }

    function f(a) {
        if (a[a.length - 1] === "*") return !0;
        let o, c;
        for (o = 0, c = r.skips.length; o < c; o++)
            if (r.skips[o].test(a)) return !1;
        for (o = 0, c = r.names.length; o < c; o++)
            if (r.names[o].test(a)) return !0;
        return !1
    }

    function p(a) {
        return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*")
    }

    function d(a) {
        return a instanceof Error ? a.stack || a.message : a
    }
    return r.enable(r.load()), r
}
var Ei = Ai;
(function(e, t) {
    t.log = i, t.formatArgs = n, t.save = s, t.load = l, t.useColors = r, t.storage = f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function r() {
        return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }

    function n(d) {
        if (d[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
        const a = "color: " + this.color;
        d.splice(1, 0, a, "color: inherit");
        let o = 0,
            c = 0;
        d[0].replace(/%[a-zA-Z%]/g, u => {
            u !== "%%" && (o++, u === "%c" && (c = o))
        }), d.splice(c, 0, a)
    }

    function i(...d) {
        return typeof console == "object" && console.log && console.log(...d)
    }

    function s(d) {
        try {
            d ? t.storage.setItem("debug", d) : t.storage.removeItem("debug")
        } catch {}
    }

    function l() {
        let d;
        try {
            d = t.storage.getItem("debug")
        } catch {}
        return !d && typeof process < "u" && "env" in process && (d = {}.DEBUG), d
    }

    function f() {
        try {
            return localStorage
        } catch {}
    }
    e.exports = Ei(t);
    const {
        formatters: p
    } = e.exports;
    p.j = function(d) {
        try {
            return JSON.stringify(d)
        } catch (a) {
            return "[UnexpectedJSONParseError]: " + a.message
        }
    }
})(Dt, Dt.exports);
var tt = Dt.exports,
    Di = Fi,
    yr = tt("socket.io-client:url"),
    Si = Bi;

function Bi(e, t) {
    var r = e;
    t = t || typeof location < "u" && location, e == null && (e = t.protocol + "//" + t.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = t.protocol + e : e = t.host + e), /^(https?|wss?):\/\//.test(e) || (yr("protocol-less url %s", e), typeof t < "u" ? e = t.protocol + "//" + e : e = "https://" + e), yr("parse %s", e), r = Di(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
    var n = r.host.indexOf(":") !== -1,
        i = n ? "[" + r.host + "]" : r.host;
    return r.id = r.protocol + "://" + i + ":" + r.port, r.href = r.protocol + "://" + i + (t && t.port === r.port ? "" : ":" + r.port), r
}
var rt = {},
    St = {
        exports: {}
    },
    Bt = {
        exports: {}
    },
    De = 1e3,
    Se = De * 60,
    Be = Se * 60,
    Re = Be * 24,
    Ri = Re * 365.25,
    $i = function(e, t) {
        t = t || {};
        var r = typeof e;
        if (r === "string" && e.length > 0) return Oi(e);
        if (r === "number" && isNaN(e) === !1) return t.long ? Ti(e) : zi(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    };

function Oi(e) {
    if (e = String(e), !(e.length > 100)) {
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (t) {
            var r = parseFloat(t[1]),
                n = (t[2] || "ms").toLowerCase();
            switch (n) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return r * Ri;
                case "days":
                case "day":
                case "d":
                    return r * Re;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return r * Be;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return r * Se;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return r * De;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return r;
                default:
                    return
            }
        }
    }
}

function zi(e) {
    return e >= Re ? Math.round(e / Re) + "d" : e >= Be ? Math.round(e / Be) + "h" : e >= Se ? Math.round(e / Se) + "m" : e >= De ? Math.round(e / De) + "s" : e + "ms"
}

function Ti(e) {
    return Pe(e, Re, "day") || Pe(e, Be, "hour") || Pe(e, Se, "minute") || Pe(e, De, "second") || e + " ms"
}

function Pe(e, t, r) {
    if (!(e < t)) return e < t * 1.5 ? Math.floor(e / t) + " " + r : Math.ceil(e / t) + " " + r + "s"
}(function(e, t) {
    t = e.exports = n.debug = n.default = n, t.coerce = p, t.disable = l, t.enable = s, t.enabled = f, t.humanize = $i, t.instances = [], t.names = [], t.skips = [], t.formatters = {};

    function r(d) {
        var a = 0,
            o;
        for (o in d) a = (a << 5) - a + d.charCodeAt(o), a |= 0;
        return t.colors[Math.abs(a) % t.colors.length]
    }

    function n(d) {
        var a;

        function o() {
            if (o.enabled) {
                var c = o,
                    u = +new Date,
                    h = u - (a || u);
                c.diff = h, c.prev = a, c.curr = u, a = u;
                for (var y = new Array(arguments.length), g = 0; g < y.length; g++) y[g] = arguments[g];
                y[0] = t.coerce(y[0]), typeof y[0] != "string" && y.unshift("%O");
                var v = 0;
                y[0] = y[0].replace(/%([a-zA-Z%])/g, function(C, m) {
                    if (C === "%%") return C;
                    v++;
                    var _ = t.formatters[m];
                    if (typeof _ == "function") {
                        var w = y[v];
                        C = _.call(c, w), y.splice(v, 1), v--
                    }
                    return C
                }), t.formatArgs.call(c, y);
                var b = o.log || t.log || console.log.bind(console);
                b.apply(c, y)
            }
        }
        return o.namespace = d, o.enabled = t.enabled(d), o.useColors = t.useColors(), o.color = r(d), o.destroy = i, typeof t.init == "function" && t.init(o), t.instances.push(o), o
    }

    function i() {
        var d = t.instances.indexOf(this);
        return d !== -1 ? (t.instances.splice(d, 1), !0) : !1
    }

    function s(d) {
        t.save(d), t.names = [], t.skips = [];
        var a, o = (typeof d == "string" ? d : "").split(/[\s,]+/),
            c = o.length;
        for (a = 0; a < c; a++) o[a] && (d = o[a].replace(/\*/g, ".*?"), d[0] === "-" ? t.skips.push(new RegExp("^" + d.substr(1) + "$")) : t.names.push(new RegExp("^" + d + "$")));
        for (a = 0; a < t.instances.length; a++) {
            var u = t.instances[a];
            u.enabled = t.enabled(u.namespace)
        }
    }

    function l() {
        t.enable("")
    }

    function f(d) {
        if (d[d.length - 1] === "*") return !0;
        var a, o;
        for (a = 0, o = t.skips.length; a < o; a++)
            if (t.skips[a].test(d)) return !1;
        for (a = 0, o = t.names.length; a < o; a++)
            if (t.names[a].test(d)) return !0;
        return !1
    }

    function p(d) {
        return d instanceof Error ? d.stack || d.message : d
    }
})(Bt, Bt.exports);
var Mi = Bt.exports;
(function(e, t) {
    t = e.exports = Mi, t.log = i, t.formatArgs = n, t.save = s, t.load = l, t.useColors = r, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : f(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"];

    function r() {
        return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
    }
    t.formatters.j = function(p) {
        try {
            return JSON.stringify(p)
        } catch (d) {
            return "[UnexpectedJSONParseError]: " + d.message
        }
    };

    function n(p) {
        var d = this.useColors;
        if (p[0] = (d ? "%c" : "") + this.namespace + (d ? " %c" : " ") + p[0] + (d ? "%c " : " ") + "+" + t.humanize(this.diff), !!d) {
            var a = "color: " + this.color;
            p.splice(1, 0, a, "color: inherit");
            var o = 0,
                c = 0;
            p[0].replace(/%[a-zA-Z%]/g, function(u) {
                u !== "%%" && (o++, u === "%c" && (c = o))
            }), p.splice(c, 0, a)
        }
    }

    function i() {
        return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }

    function s(p) {
        try {
            p == null ? t.storage.removeItem("debug") : t.storage.debug = p
        } catch {}
    }

    function l() {
        var p;
        try {
            p = t.storage.debug
        } catch {}
        return !p && typeof process < "u" && "env" in process && (p = {}.DEBUG), p
    }
    t.enable(l());

    function f() {
        try {
            return window.localStorage
        } catch {}
    }
})(St, St.exports);
var Oe = St.exports,
    an = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(n) {
        if (n) return r(n)
    }

    function r(n) {
        for (var i in t.prototype) n[i] = t.prototype[i];
        return n
    }
    t.prototype.on = t.prototype.addEventListener = function(n, i) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(i), this
    }, t.prototype.once = function(n, i) {
        function s() {
            this.off(n, s), i.apply(this, arguments)
        }
        return s.fn = i, this.on(n, s), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(n, i) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var s = this._callbacks["$" + n];
        if (!s) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + n], this;
        for (var l, f = 0; f < s.length; f++)
            if (l = s[f], l === i || l.fn === i) {
                s.splice(f, 1);
                break
            }
        return s.length === 0 && delete this._callbacks["$" + n], this
    }, t.prototype.emit = function(n) {
        this._callbacks = this._callbacks || {};
        for (var i = new Array(arguments.length - 1), s = this._callbacks["$" + n], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
        if (s) {
            s = s.slice(0);
            for (var l = 0, f = s.length; l < f; ++l) s[l].apply(this, i)
        }
        return this
    }, t.prototype.listeners = function(n) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
    }, t.prototype.hasListeners = function(n) {
        return !!this.listeners(n).length
    }
})(an);
var nt = an.exports,
    it = {},
    Pi = {}.toString,
    Zt = Array.isArray || function(e) {
        return Pi.call(e) == "[object Array]"
    },
    cn = Ii,
    qi = typeof Buffer == "function" && typeof Buffer.isBuffer == "function",
    Ni = typeof ArrayBuffer == "function",
    ji = function(e) {
        return typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
    };

function Ii(e) {
    return qi && Buffer.isBuffer(e) || Ni && (e instanceof ArrayBuffer || ji(e))
}
var Jt = Zt,
    un = cn,
    fn = Object.prototype.toString,
    Li = typeof Blob == "function" || typeof Blob < "u" && fn.call(Blob) === "[object BlobConstructor]",
    Ui = typeof File == "function" || typeof File < "u" && fn.call(File) === "[object FileConstructor]";
it.deconstructPacket = function(e) {
    var t = [],
        r = e.data,
        n = e;
    return n.data = Rt(r, t), n.attachments = t.length, {
        packet: n,
        buffers: t
    }
};

function Rt(e, t) {
    if (!e) return e;
    if (un(e)) {
        var r = {
            _placeholder: !0,
            num: t.length
        };
        return t.push(e), r
    } else if (Jt(e)) {
        for (var n = new Array(e.length), i = 0; i < e.length; i++) n[i] = Rt(e[i], t);
        return n
    } else if (typeof e == "object" && !(e instanceof Date)) {
        var n = {};
        for (var s in e) n[s] = Rt(e[s], t);
        return n
    }
    return e
}
it.reconstructPacket = function(e, t) {
    return e.data = $t(e.data, t), e.attachments = void 0, e
};

function $t(e, t) {
    if (!e) return e;
    if (e && e._placeholder === !0) {
        var r = typeof e.num == "number" && e.num >= 0 && e.num < t.length;
        if (r) return t[e.num];
        throw new Error("illegal attachments")
    } else if (Jt(e))
        for (var n = 0; n < e.length; n++) e[n] = $t(e[n], t);
    else if (typeof e == "object")
        for (var i in e) e[i] = $t(e[i], t);
    return e
}
it.removeBlobs = function(e, t) {
    function r(s, l, f) {
        if (!s) return s;
        if (Li && s instanceof Blob || Ui && s instanceof File) {
            n++;
            var p = new FileReader;
            p.onload = function() {
                f ? f[l] = this.result : i = this.result, --n || t(i)
            }, p.readAsArrayBuffer(s)
        } else if (Jt(s))
            for (var d = 0; d < s.length; d++) r(s[d], d, s);
        else if (typeof s == "object" && !un(s))
            for (var a in s) r(s[a], a, s)
    }
    var n = 0,
        i = e;
    r(i), n || t(i)
};
(function(e) {
    var t = Oe("socket.io-parser"),
        r = nt,
        n = it,
        i = Zt,
        s = cn;
    e.protocol = 4, e.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], e.CONNECT = 0, e.DISCONNECT = 1, e.EVENT = 2, e.ACK = 3, e.ERROR = 4, e.BINARY_EVENT = 5, e.BINARY_ACK = 6, e.Encoder = l, e.Decoder = o;

    function l() {}
    var f = e.ERROR + '"encode error"';
    l.prototype.encode = function(g, v) {
        if (t("encoding packet %j", g), e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) a(g, v);
        else {
            var b = p(g);
            v([b])
        }
    };

    function p(g) {
        var v = "" + g.type;
        if ((e.BINARY_EVENT === g.type || e.BINARY_ACK === g.type) && (v += g.attachments + "-"), g.nsp && g.nsp !== "/" && (v += g.nsp + ","), g.id != null && (v += g.id), g.data != null) {
            var b = d(g.data);
            if (b !== !1) v += b;
            else return f
        }
        return t("encoded %j as %s", g, v), v
    }

    function d(g) {
        try {
            return JSON.stringify(g)
        } catch {
            return !1
        }
    }

    function a(g, v) {
        function b(C) {
            var m = n.deconstructPacket(C),
                _ = p(m.packet),
                w = m.buffers;
            w.unshift(_), v(w)
        }
        n.removeBlobs(g, b)
    }

    function o() {
        this.reconstructor = null
    }
    r(o.prototype), o.prototype.add = function(g) {
        var v;
        if (typeof g == "string") {
            if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
            v = c(g), e.BINARY_EVENT === v.type || e.BINARY_ACK === v.type ? (this.reconstructor = new h(v), this.reconstructor.reconPack.attachments === 0 && this.emit("decoded", v)) : this.emit("decoded", v)
        } else if (s(g) || g.base64)
            if (this.reconstructor) v = this.reconstructor.takeBinaryData(g), v && (this.reconstructor = null, this.emit("decoded", v));
            else throw new Error("got binary data when not reconstructing a packet");
        else throw new Error("Unknown type: " + g)
    };

    function c(g) {
        var v = 0,
            b = {
                type: Number(g.charAt(0))
            };
        if (e.types[b.type] == null) return y("unknown packet type " + b.type);
        if (e.BINARY_EVENT === b.type || e.BINARY_ACK === b.type) {
            for (var C = v + 1; g.charAt(++v) !== "-" && v != g.length;);
            var m = g.substring(C, v);
            if (m != Number(m) || g.charAt(v) !== "-") throw new Error("Illegal attachments");
            b.attachments = Number(m)
        }
        if (g.charAt(v + 1) === "/") {
            for (var C = v + 1; ++v;) {
                var _ = g.charAt(v);
                if (_ === "," || v === g.length) break
            }
            b.nsp = g.substring(C, v)
        } else b.nsp = "/";
        var w = g.charAt(v + 1);
        if (w !== "" && Number(w) == w) {
            for (var C = v + 1; ++v;) {
                var _ = g.charAt(v);
                if (_ == null || Number(_) != _) {
                    --v;
                    break
                }
                if (v === g.length) break
            }
            b.id = Number(g.substring(C, v + 1))
        }
        if (g.charAt(++v)) {
            var k = u(g.substr(v)),
                F = k !== !1 && (b.type === e.ERROR || i(k));
            if (F) b.data = k;
            else return y("invalid payload")
        }
        return t("decoded %s as %j", g, b), b
    }

    function u(g) {
        try {
            return JSON.parse(g)
        } catch {
            return !1
        }
    }
    o.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    };

    function h(g) {
        this.reconPack = g, this.buffers = []
    }
    h.prototype.takeBinaryData = function(g) {
        if (this.buffers.push(g), this.buffers.length === this.reconPack.attachments) {
            var v = n.reconstructPacket(this.reconPack, this.buffers);
            return this.finishedReconstruction(), v
        }
        return null
    }, h.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    };

    function y(g) {
        return {
            type: e.ERROR,
            data: "parser error: " + g
        }
    }
})(rt);
var Gt = {
        exports: {}
    },
    ot = {},
    Ot = {
        exports: {}
    };
try {
    Ot.exports = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest
} catch {
    Ot.exports = !1
}
var Hi = Ot.exports,
    Kt = function() {
        return typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")()
    }(),
    Vi = Hi,
    Wi = Kt,
    Yt = function(e) {
        var t = e.xdomain,
            r = e.xscheme,
            n = e.enablesXDR;
        try {
            if (typeof XMLHttpRequest < "u" && (!t || Vi)) return new XMLHttpRequest
        } catch {}
        try {
            if (typeof XDomainRequest < "u" && !r && n) return new XDomainRequest
        } catch {}
        if (!t) try {
            return new Wi[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
        } catch {}
    },
    Qt = {
        exports: {}
    },
    fe = {},
    Xi = Object.keys || function(t) {
        var r = [],
            n = Object.prototype.hasOwnProperty;
        for (var i in t) n.call(t, i) && r.push(i);
        return r
    },
    Zi = Zt,
    ln = Object.prototype.toString,
    Ji = typeof Blob == "function" || typeof Blob < "u" && ln.call(Blob) === "[object BlobConstructor]",
    Gi = typeof File == "function" || typeof File < "u" && ln.call(File) === "[object FileConstructor]",
    hn = He;

function He(e) {
    if (!e || typeof e != "object") return !1;
    if (Zi(e)) {
        for (var t = 0, r = e.length; t < r; t++)
            if (He(e[t])) return !0;
        return !1
    }
    if (typeof Buffer == "function" && Buffer.isBuffer && Buffer.isBuffer(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || Ji && e instanceof Blob || Gi && e instanceof File) return !0;
    if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1) return He(e.toJSON(), !0);
    for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n) && He(e[n])) return !0;
    return !1
}
var Ki = function(e, t, r) {
        var n = e.byteLength;
        if (t = t || 0, r = r || n, e.slice) return e.slice(t, r);
        if (t < 0 && (t += n), r < 0 && (r += n), r > n && (r = n), t >= n || t >= r || n === 0) return new ArrayBuffer(0);
        for (var i = new Uint8Array(e), s = new Uint8Array(r - t), l = t, f = 0; l < r; l++, f++) s[f] = i[l];
        return s.buffer
    },
    Yi = Qi;

function Qi(e, t, r) {
    var n = !1;
    return r = r || eo, i.count = e, e === 0 ? t() : i;

    function i(s, l) {
        if (i.count <= 0) throw new Error("after called too many times");
        --i.count, s ? (n = !0, t(s), t = r) : i.count === 0 && !n && t(null, l)
    }
}

function eo() {} /*! https://mths.be/utf8js v2.1.2 by @mathias */
var ee = String.fromCharCode;

function dn(e) {
    for (var t = [], r = 0, n = e.length, i, s; r < n;) i = e.charCodeAt(r++), i >= 55296 && i <= 56319 && r < n ? (s = e.charCodeAt(r++), (s & 64512) == 56320 ? t.push(((i & 1023) << 10) + (s & 1023) + 65536) : (t.push(i), r--)) : t.push(i);
    return t
}

function to(e) {
    for (var t = e.length, r = -1, n, i = ""; ++r < t;) n = e[r], n > 65535 && (n -= 65536, i += ee(n >>> 10 & 1023 | 55296), n = 56320 | n & 1023), i += ee(n);
    return i
}

function pn(e, t) {
    if (e >= 55296 && e <= 57343) {
        if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1
    }
    return !0
}

function pt(e, t) {
    return ee(e >> t & 63 | 128)
}

function ro(e, t) {
    if (!(e & 4294967168)) return ee(e);
    var r = "";
    return e & 4294965248 ? e & 4294901760 ? e & 4292870144 || (r = ee(e >> 18 & 7 | 240), r += pt(e, 12), r += pt(e, 6)) : (pn(e, t) || (e = 65533), r = ee(e >> 12 & 15 | 224), r += pt(e, 6)) : r = ee(e >> 6 & 31 | 192), r += ee(e & 63 | 128), r
}

function no(e, t) {
    t = t || {};
    for (var r = t.strict !== !1, n = dn(e), i = n.length, s = -1, l, f = ""; ++s < i;) l = n[s], f += ro(l, r);
    return f
}

function de() {
    if (te >= Ge) throw Error("Invalid byte index");
    var e = Je[te] & 255;
    if (te++, (e & 192) == 128) return e & 63;
    throw Error("Invalid continuation byte")
}

function io(e) {
    var t, r, n, i, s;
    if (te > Ge) throw Error("Invalid byte index");
    if (te == Ge) return !1;
    if (t = Je[te] & 255, te++, !(t & 128)) return t;
    if ((t & 224) == 192) {
        if (r = de(), s = (t & 31) << 6 | r, s >= 128) return s;
        throw Error("Invalid continuation byte")
    }
    if ((t & 240) == 224) {
        if (r = de(), n = de(), s = (t & 15) << 12 | r << 6 | n, s >= 2048) return pn(s, e) ? s : 65533;
        throw Error("Invalid continuation byte")
    }
    if ((t & 248) == 240 && (r = de(), n = de(), i = de(), s = (t & 7) << 18 | r << 12 | n << 6 | i, s >= 65536 && s <= 1114111)) return s;
    throw Error("Invalid UTF-8 detected")
}
var Je, Ge, te;

function oo(e, t) {
    t = t || {};
    var r = t.strict !== !1;
    Je = dn(e), Ge = Je.length, te = 0;
    for (var n = [], i;
        (i = io(r)) !== !1;) n.push(i);
    return to(n)
}
var so = {
        version: "2.1.2",
        encode: no,
        decode: oo
    },
    qe = {},
    vr;

function ao() {
    return vr || (vr = 1, function(e) {
        qe.encode = function(t) {
            var r = new Uint8Array(t),
                n, i = r.length,
                s = "";
            for (n = 0; n < i; n += 3) s += e[r[n] >> 2], s += e[(r[n] & 3) << 4 | r[n + 1] >> 4], s += e[(r[n + 1] & 15) << 2 | r[n + 2] >> 6], s += e[r[n + 2] & 63];
            return i % 3 === 2 ? s = s.substring(0, s.length - 1) + "=" : i % 3 === 1 && (s = s.substring(0, s.length - 2) + "=="), s
        }, qe.decode = function(t) {
            var r = t.length * .75,
                n = t.length,
                i, s = 0,
                l, f, p, d;
            t[t.length - 1] === "=" && (r--, t[t.length - 2] === "=" && r--);
            var a = new ArrayBuffer(r),
                o = new Uint8Array(a);
            for (i = 0; i < n; i += 4) l = e.indexOf(t[i]), f = e.indexOf(t[i + 1]), p = e.indexOf(t[i + 2]), d = e.indexOf(t[i + 3]), o[s++] = l << 2 | f >> 4, o[s++] = (f & 15) << 4 | p >> 2, o[s++] = (p & 3) << 6 | d & 63;
            return a
        }
    }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")), qe
}
var gt, mr;

function co() {
    if (mr) return gt;
    mr = 1;
    var e = typeof e < "u" ? e : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : typeof MSBlobBuilder < "u" ? MSBlobBuilder : typeof MozBlobBuilder < "u" ? MozBlobBuilder : !1,
        t = function() {
            try {
                var f = new Blob(["hi"]);
                return f.size === 2
            } catch {
                return !1
            }
        }(),
        r = t && function() {
            try {
                var f = new Blob([new Uint8Array([1, 2])]);
                return f.size === 2
            } catch {
                return !1
            }
        }(),
        n = e && e.prototype.append && e.prototype.getBlob;

    function i(f) {
        return f.map(function(p) {
            if (p.buffer instanceof ArrayBuffer) {
                var d = p.buffer;
                if (p.byteLength !== d.byteLength) {
                    var a = new Uint8Array(p.byteLength);
                    a.set(new Uint8Array(d, p.byteOffset, p.byteLength)), d = a.buffer
                }
                return d
            }
            return p
        })
    }

    function s(f, p) {
        p = p || {};
        var d = new e;
        return i(f).forEach(function(a) {
            d.append(a)
        }), p.type ? d.getBlob(p.type) : d.getBlob()
    }

    function l(f, p) {
        return new Blob(i(f), p || {})
    }
    return typeof Blob < "u" && (s.prototype = Blob.prototype, l.prototype = Blob.prototype), gt = function() {
        return t ? r ? Blob : l : n ? s : void 0
    }(), gt
}(function(e) {
    var t = Xi,
        r = hn,
        n = Ki,
        i = Yi,
        s = so,
        l;
    typeof ArrayBuffer < "u" && (l = ao());
    var f = typeof navigator < "u" && /Android/i.test(navigator.userAgent),
        p = typeof navigator < "u" && /PhantomJS/i.test(navigator.userAgent),
        d = f || p;
    e.protocol = 3;
    var a = e.packets = {
            open: 0,
            close: 1,
            ping: 2,
            pong: 3,
            message: 4,
            upgrade: 5,
            noop: 6
        },
        o = t(a),
        c = {
            type: "error",
            data: "parser error"
        },
        u = co();
    e.encodePacket = function(m, _, w, k) {
        typeof _ == "function" && (k = _, _ = !1), typeof w == "function" && (k = w, w = null);
        var F = m.data === void 0 ? void 0 : m.data.buffer || m.data;
        if (typeof ArrayBuffer < "u" && F instanceof ArrayBuffer) return y(m, _, k);
        if (typeof u < "u" && F instanceof u) return v(m, _, k);
        if (F && F.base64) return h(m, k);
        var x = a[m.type];
        return m.data !== void 0 && (x += w ? s.encode(String(m.data), {
            strict: !1
        }) : String(m.data)), k("" + x)
    };

    function h(m, _) {
        var w = "b" + e.packets[m.type] + m.data.data;
        return _(w)
    }

    function y(m, _, w) {
        if (!_) return e.encodeBase64Packet(m, w);
        var k = m.data,
            F = new Uint8Array(k),
            x = new Uint8Array(1 + k.byteLength);
        x[0] = a[m.type];
        for (var A = 0; A < F.length; A++) x[A + 1] = F[A];
        return w(x.buffer)
    }

    function g(m, _, w) {
        if (!_) return e.encodeBase64Packet(m, w);
        var k = new FileReader;
        return k.onload = function() {
            e.encodePacket({
                type: m.type,
                data: k.result
            }, _, !0, w)
        }, k.readAsArrayBuffer(m.data)
    }

    function v(m, _, w) {
        if (!_) return e.encodeBase64Packet(m, w);
        if (d) return g(m, _, w);
        var k = new Uint8Array(1);
        k[0] = a[m.type];
        var F = new u([k.buffer, m.data]);
        return w(F)
    }
    e.encodeBase64Packet = function(m, _) {
        var w = "b" + e.packets[m.type];
        if (typeof u < "u" && m.data instanceof u) {
            var k = new FileReader;
            return k.onload = function() {
                var E = k.result.split(",")[1];
                _(w + E)
            }, k.readAsDataURL(m.data)
        }
        var F;
        try {
            F = String.fromCharCode.apply(null, new Uint8Array(m.data))
        } catch {
            for (var x = new Uint8Array(m.data), A = new Array(x.length), S = 0; S < x.length; S++) A[S] = x[S];
            F = String.fromCharCode.apply(null, A)
        }
        return w += btoa(F), _(w)
    }, e.decodePacket = function(m, _, w) {
        if (m === void 0) return c;
        if (typeof m == "string") {
            if (m.charAt(0) === "b") return e.decodeBase64Packet(m.substr(1), _);
            if (w && (m = b(m), m === !1)) return c;
            var F = m.charAt(0);
            return Number(F) != F || !o[F] ? c : m.length > 1 ? {
                type: o[F],
                data: m.substring(1)
            } : {
                type: o[F]
            }
        }
        var k = new Uint8Array(m),
            F = k[0],
            x = n(m, 1);
        return u && _ === "blob" && (x = new u([x])), {
            type: o[F],
            data: x
        }
    };

    function b(m) {
        try {
            m = s.decode(m, {
                strict: !1
            })
        } catch {
            return !1
        }
        return m
    }
    e.decodeBase64Packet = function(m, _) {
        var w = o[m.charAt(0)];
        if (!l) return {
            type: w,
            data: {
                base64: !0,
                data: m.substr(1)
            }
        };
        var k = l.decode(m.substr(1));
        return _ === "blob" && u && (k = new u([k])), {
            type: w,
            data: k
        }
    }, e.encodePayload = function(m, _, w) {
        typeof _ == "function" && (w = _, _ = null);
        var k = r(m);
        if (_ && k) return u && !d ? e.encodePayloadAsBlob(m, w) : e.encodePayloadAsArrayBuffer(m, w);
        if (!m.length) return w("0:");

        function F(A) {
            return A.length + ":" + A
        }

        function x(A, S) {
            e.encodePacket(A, k ? _ : !1, !1, function(E) {
                S(null, F(E))
            })
        }
        C(m, x, function(A, S) {
            return w(S.join(""))
        })
    };

    function C(m, _, w) {
        for (var k = new Array(m.length), F = i(m.length, w), x = function(S, E, $) {
                _(E, function(O, z) {
                    k[S] = z, $(O, k)
                })
            }, A = 0; A < m.length; A++) x(A, m[A], F)
    }
    e.decodePayload = function(m, _, w) {
        if (typeof m != "string") return e.decodePayloadAsBinary(m, _, w);
        typeof _ == "function" && (w = _, _ = null);
        var k;
        if (m === "") return w(c, 0, 1);
        for (var F = "", x, A, S = 0, E = m.length; S < E; S++) {
            var $ = m.charAt(S);
            if ($ !== ":") {
                F += $;
                continue
            }
            if (F === "" || F != (x = Number(F)) || (A = m.substr(S + 1, x), F != A.length)) return w(c, 0, 1);
            if (A.length) {
                if (k = e.decodePacket(A, _, !1), c.type === k.type && c.data === k.data) return w(c, 0, 1);
                var O = w(k, S + x, E);
                if (O === !1) return
            }
            S += x, F = ""
        }
        if (F !== "") return w(c, 0, 1)
    }, e.encodePayloadAsArrayBuffer = function(m, _) {
        if (!m.length) return _(new ArrayBuffer(0));

        function w(k, F) {
            e.encodePacket(k, !0, !0, function(x) {
                return F(null, x)
            })
        }
        C(m, w, function(k, F) {
            var x = F.reduce(function(E, $) {
                    var O;
                    return typeof $ == "string" ? O = $.length : O = $.byteLength, E + O.toString().length + O + 2
                }, 0),
                A = new Uint8Array(x),
                S = 0;
            return F.forEach(function(E) {
                var $ = typeof E == "string",
                    O = E;
                if ($) {
                    for (var oe = new Uint8Array(E.length), z = 0; z < E.length; z++) oe[z] = E.charCodeAt(z);
                    O = oe.buffer
                }
                $ ? A[S++] = 0 : A[S++] = 1;
                for (var ie = O.byteLength.toString(), z = 0; z < ie.length; z++) A[S++] = parseInt(ie[z]);
                A[S++] = 255;
                for (var oe = new Uint8Array(O), z = 0; z < oe.length; z++) A[S++] = oe[z]
            }), _(A.buffer)
        })
    }, e.encodePayloadAsBlob = function(m, _) {
        function w(k, F) {
            e.encodePacket(k, !0, !0, function(x) {
                var A = new Uint8Array(1);
                if (A[0] = 1, typeof x == "string") {
                    for (var S = new Uint8Array(x.length), E = 0; E < x.length; E++) S[E] = x.charCodeAt(E);
                    x = S.buffer, A[0] = 0
                }
                for (var $ = x instanceof ArrayBuffer ? x.byteLength : x.size, O = $.toString(), z = new Uint8Array(O.length + 1), E = 0; E < O.length; E++) z[E] = parseInt(O[E]);
                if (z[O.length] = 255, u) {
                    var ie = new u([A.buffer, z.buffer, x]);
                    F(null, ie)
                }
            })
        }
        C(m, w, function(k, F) {
            return _(new u(F))
        })
    }, e.decodePayloadAsBinary = function(m, _, w) {
        typeof _ == "function" && (w = _, _ = null);
        for (var k = m, F = []; k.byteLength > 0;) {
            for (var x = new Uint8Array(k), A = x[0] === 0, S = "", E = 1; x[E] !== 255; E++) {
                if (S.length > 310) return w(c, 0, 1);
                S += x[E]
            }
            k = n(k, 2 + S.length), S = parseInt(S);
            var $ = n(k, 0, S);
            if (A) try {
                $ = String.fromCharCode.apply(null, new Uint8Array($))
            } catch {
                var O = new Uint8Array($);
                $ = "";
                for (var E = 0; E < O.length; E++) $ += String.fromCharCode(O[E])
            }
            F.push($), k = n(k, S)
        }
        var z = F.length;
        F.forEach(function(ie, oe) {
            w(e.decodePacket(ie, _, !0), oe, z)
        })
    }
})(fe);
var yt, _r;

function er() {
    if (_r) return yt;
    _r = 1;
    var e = fe,
        t = nt;
    yt = r;

    function r(n) {
        this.path = n.path, this.hostname = n.hostname, this.port = n.port, this.secure = n.secure, this.query = n.query, this.timestampParam = n.timestampParam, this.timestampRequests = n.timestampRequests, this.readyState = "", this.agent = n.agent || !1, this.socket = n.socket, this.enablesXDR = n.enablesXDR, this.withCredentials = n.withCredentials, this.pfx = n.pfx, this.key = n.key, this.passphrase = n.passphrase, this.cert = n.cert, this.ca = n.ca, this.ciphers = n.ciphers, this.rejectUnauthorized = n.rejectUnauthorized, this.forceNode = n.forceNode, this.isReactNative = n.isReactNative, this.extraHeaders = n.extraHeaders, this.localAddress = n.localAddress
    }
    return t(r.prototype), r.prototype.onError = function(n, i) {
        var s = new Error(n);
        return s.type = "TransportError", s.description = i, this.emit("error", s), this
    }, r.prototype.open = function() {
        return (this.readyState === "closed" || this.readyState === "") && (this.readyState = "opening", this.doOpen()), this
    }, r.prototype.close = function() {
        return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this
    }, r.prototype.send = function(n) {
        if (this.readyState === "open") this.write(n);
        else throw new Error("Transport not open")
    }, r.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, r.prototype.onData = function(n) {
        var i = e.decodePacket(n, this.socket.binaryType);
        this.onPacket(i)
    }, r.prototype.onPacket = function(n) {
        this.emit("packet", n)
    }, r.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }, yt
}
var ze = {};
ze.encode = function(e) {
    var t = "";
    for (var r in e) e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
    return t
};
ze.decode = function(e) {
    for (var t = {}, r = e.split("&"), n = 0, i = r.length; n < i; n++) {
        var s = r[n].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
};
var st = function(e, t) {
        var r = function() {};
        r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
    },
    gn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
    Ke = 64,
    yn = {},
    br = 0,
    re = 0,
    Cr;

function zt(e) {
    var t = "";
    do t = gn[e % Ke] + t, e = Math.floor(e / Ke); while (e > 0);
    return t
}

function uo(e) {
    var t = 0;
    for (re = 0; re < e.length; re++) t = t * Ke + yn[e.charAt(re)];
    return t
}

function tr() {
    var e = zt(+new Date);
    return e !== Cr ? (br = 0, Cr = e) : e + "." + zt(br++)
}
for (; re < Ke; re++) yn[gn[re]] = re;
tr.encode = zt;
tr.decode = uo;
var vn = tr,
    mn = er(),
    fo = ze,
    _n = fe,
    lo = st,
    ho = vn,
    X = Oe("engine.io-client:polling"),
    bn = J,
    po = function() {
        var e = Yt,
            t = new e({
                xdomain: !1
            });
        return t.responseType != null
    }();

function J(e) {
    var t = e && e.forceBase64;
    (!po || t) && (this.supportsBinary = !1), mn.call(this, e)
}
lo(J, mn);
J.prototype.name = "polling";
J.prototype.doOpen = function() {
    this.poll()
};
J.prototype.pause = function(e) {
    var t = this;
    this.readyState = "pausing";

    function r() {
        X("paused"), t.readyState = "paused", e()
    }
    if (this.polling || !this.writable) {
        var n = 0;
        this.polling && (X("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function() {
            X("pre-pause polling complete"), --n || r()
        })), this.writable || (X("we are currently writing - waiting to pause"), n++, this.once("drain", function() {
            X("pre-pause writing complete"), --n || r()
        }))
    } else r()
};
J.prototype.poll = function() {
    X("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
};
J.prototype.onData = function(e) {
    var t = this;
    X("polling got data %s", e);
    var r = function(n, i, s) {
        if (t.readyState === "opening" && t.onOpen(), n.type === "close") return t.onClose(), !1;
        t.onPacket(n)
    };
    _n.decodePayload(e, this.socket.binaryType, r), this.readyState !== "closed" && (this.polling = !1, this.emit("pollComplete"), this.readyState === "open" ? this.poll() : X('ignoring poll - transport state "%s"', this.readyState))
};
J.prototype.doClose = function() {
    var e = this;

    function t() {
        X("writing close packet"), e.write([{
            type: "close"
        }])
    }
    this.readyState === "open" ? (X("transport open - closing"), t()) : (X("transport not open - deferring close"), this.once("open", t))
};
J.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    var r = function() {
        t.writable = !0, t.emit("drain")
    };
    _n.encodePayload(e, this.supportsBinary, function(n) {
        t.doWrite(n, r)
    })
};
J.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "https" : "http",
        r = "";
    this.timestampRequests !== !1 && (e[this.timestampParam] = ho()), !this.supportsBinary && !e.sid && (e.b64 = 1), e = fo.encode(e), this.port && (t === "https" && Number(this.port) !== 443 || t === "http" && Number(this.port) !== 80) && (r = ":" + this.port), e.length && (e = "?" + e);
    var n = this.hostname.indexOf(":") !== -1;
    return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
};
var go = Yt,
    Cn = bn,
    yo = nt,
    vo = st,
    Tt = Oe("engine.io-client:polling-xhr"),
    mo = Kt;
Qt.exports = we;
Qt.exports.Request = P;

function wr() {}

function we(e) {
    if (Cn.call(this, e), this.requestTimeout = e.requestTimeout, this.extraHeaders = e.extraHeaders, typeof location < "u") {
        var t = location.protocol === "https:",
            r = location.port;
        r || (r = t ? 443 : 80), this.xd = typeof location < "u" && e.hostname !== location.hostname || r !== e.port, this.xs = e.secure !== t
    }
}
vo(we, Cn);
we.prototype.supportsBinary = !0;
we.prototype.request = function(e) {
    return e = e || {}, e.uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.withCredentials = this.withCredentials, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new P(e)
};
we.prototype.doWrite = function(e, t) {
    var r = typeof e != "string" && e !== void 0,
        n = this.request({
            method: "POST",
            data: e,
            isBinary: r
        }),
        i = this;
    n.on("success", t), n.on("error", function(s) {
        i.onError("xhr post error", s)
    }), this.sendXhr = n
};
we.prototype.doPoll = function() {
    Tt("xhr poll");
    var e = this.request(),
        t = this;
    e.on("data", function(r) {
        t.onData(r)
    }), e.on("error", function(r) {
        t.onError("xhr poll error", r)
    }), this.pollXhr = e
};

function P(e) {
    this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = e.async !== !1, this.data = e.data !== void 0 ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.withCredentials = e.withCredentials, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
}
yo(P.prototype);
P.prototype.create = function() {
    var e = {
        agent: this.agent,
        xdomain: this.xd,
        xscheme: this.xs,
        enablesXDR: this.enablesXDR
    };
    e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
    var t = this.xhr = new go(e),
        r = this;
    try {
        Tt("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
        try {
            if (this.extraHeaders) {
                t.setDisableHeaderCheck && t.setDisableHeaderCheck(!0);
                for (var n in this.extraHeaders) this.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.extraHeaders[n])
            }
        } catch {}
        if (this.method === "POST") try {
            this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
        } catch {}
        try {
            t.setRequestHeader("Accept", "*/*")
        } catch {}
        "withCredentials" in t && (t.withCredentials = this.withCredentials), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
            r.onLoad()
        }, t.onerror = function() {
            r.onError(t.responseText)
        }) : t.onreadystatechange = function() {
            if (t.readyState === 2) try {
                var i = t.getResponseHeader("Content-Type");
                (r.supportsBinary && i === "application/octet-stream" || i === "application/octet-stream; charset=UTF-8") && (t.responseType = "arraybuffer")
            } catch {}
            t.readyState === 4 && (t.status === 200 || t.status === 1223 ? r.onLoad() : setTimeout(function() {
                r.onError(typeof t.status == "number" ? t.status : 0)
            }, 0))
        }, Tt("xhr data %s", this.data), t.send(this.data)
    } catch (i) {
        setTimeout(function() {
            r.onError(i)
        }, 0);
        return
    }
    typeof document < "u" && (this.index = P.requestsCount++, P.requests[this.index] = this)
};
P.prototype.onSuccess = function() {
    this.emit("success"), this.cleanup()
};
P.prototype.onData = function(e) {
    this.emit("data", e), this.onSuccess()
};
P.prototype.onError = function(e) {
    this.emit("error", e), this.cleanup(!0)
};
P.prototype.cleanup = function(e) {
    if (!(typeof this.xhr > "u" || this.xhr === null)) {
        if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = wr : this.xhr.onreadystatechange = wr, e) try {
            this.xhr.abort()
        } catch {}
        typeof document < "u" && delete P.requests[this.index], this.xhr = null
    }
};
P.prototype.onLoad = function() {
    var e;
    try {
        var t;
        try {
            t = this.xhr.getResponseHeader("Content-Type")
        } catch {}
        t === "application/octet-stream" || t === "application/octet-stream; charset=UTF-8" ? e = this.xhr.response || this.xhr.responseText : e = this.xhr.responseText
    } catch (r) {
        this.onError(r)
    }
    e != null && this.onData(e)
};
P.prototype.hasXDR = function() {
    return typeof XDomainRequest < "u" && !this.xs && this.enablesXDR
};
P.prototype.abort = function() {
    this.cleanup()
};
P.requestsCount = 0;
P.requests = {};
if (typeof document < "u") {
    if (typeof attachEvent == "function") attachEvent("onunload", kr);
    else if (typeof addEventListener == "function") {
        var _o = "onpagehide" in mo ? "pagehide" : "unload";
        addEventListener(_o, kr, !1)
    }
}

function kr() {
    for (var e in P.requests) P.requests.hasOwnProperty(e) && P.requests[e].abort()
}
var bo = Qt.exports,
    rr = bn,
    Co = st,
    Fr = Kt,
    wo = ke,
    ko = /\n/g,
    Fo = /\\n/g,
    Ne;

function xo() {}

function ke(e) {
    rr.call(this, e), this.query = this.query || {}, Ne || (Ne = Fr.___eio = Fr.___eio || []), this.index = Ne.length;
    var t = this;
    Ne.push(function(r) {
        t.onData(r)
    }), this.query.j = this.index, typeof addEventListener == "function" && addEventListener("beforeunload", function() {
        t.script && (t.script.onerror = xo)
    }, !1)
}
Co(ke, rr);
ke.prototype.supportsBinary = !1;
ke.prototype.doClose = function() {
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), rr.prototype.doClose.call(this)
};
ke.prototype.doPoll = function() {
    var e = this,
        t = document.createElement("script");
    this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function(i) {
        e.onError("jsonp poll error", i)
    };
    var r = document.getElementsByTagName("script")[0];
    r ? r.parentNode.insertBefore(t, r) : (document.head || document.body).appendChild(t), this.script = t;
    var n = typeof navigator < "u" && /gecko/i.test(navigator.userAgent);
    n && setTimeout(function() {
        var i = document.createElement("iframe");
        document.body.appendChild(i), document.body.removeChild(i)
    }, 100)
};
ke.prototype.doWrite = function(e, t) {
    var r = this;
    if (!this.form) {
        var n = document.createElement("form"),
            i = document.createElement("textarea"),
            s = this.iframeId = "eio_iframe_" + this.index,
            l;
        n.className = "socketio", n.style.position = "absolute", n.style.top = "-1000px", n.style.left = "-1000px", n.target = s, n.method = "POST", n.setAttribute("accept-charset", "utf-8"), i.name = "d", n.appendChild(i), document.body.appendChild(n), this.form = n, this.area = i
    }
    this.form.action = this.uri();

    function f() {
        p(), t()
    }

    function p() {
        if (r.iframe) try {
            r.form.removeChild(r.iframe)
        } catch (a) {
            r.onError("jsonp polling iframe removal error", a)
        }
        try {
            var d = '<iframe src="javascript:0" name="' + r.iframeId + '">';
            l = document.createElement(d)
        } catch {
            l = document.createElement("iframe"), l.name = r.iframeId, l.src = "javascript:0"
        }
        l.id = r.iframeId, r.form.appendChild(l), r.iframe = l
    }
    p(), e = e.replace(Fo, `\\
`), this.area.value = e.replace(ko, "\\n");
    try {
        this.form.submit()
    } catch {}
    this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
        r.iframe.readyState === "complete" && f()
    } : this.iframe.onload = f
};
const Ao = {},
    Eo = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Ao
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    wn = Qr(Eo);
var nr = er(),
    Do = fe,
    So = ze,
    Bo = st,
    Ro = vn,
    $o = Oe("engine.io-client:websocket"),
    Ye, ir;
typeof WebSocket < "u" ? Ye = WebSocket : typeof self < "u" && (Ye = self.WebSocket || self.MozWebSocket);
if (typeof window > "u") try {
    ir = wn
} catch {}
var me = Ye || ir,
    Oo = V;

function V(e) {
    var t = e && e.forceBase64;
    t && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = Ye && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (me = ir), nr.call(this, e)
}
Bo(V, nr);
V.prototype.name = "websocket";
V.prototype.supportsBinary = !0;
V.prototype.doOpen = function() {
    if (this.check()) {
        var e = this.uri(),
            t = this.protocols,
            r = {};
        this.isReactNative || (r.agent = this.agent, r.perMessageDeflate = this.perMessageDeflate, r.pfx = this.pfx, r.key = this.key, r.passphrase = this.passphrase, r.cert = this.cert, r.ca = this.ca, r.ciphers = this.ciphers, r.rejectUnauthorized = this.rejectUnauthorized), this.extraHeaders && (r.headers = this.extraHeaders), this.localAddress && (r.localAddress = this.localAddress);
        try {
            this.ws = this.usingBrowserWebSocket && !this.isReactNative ? t ? new me(e, t) : new me(e) : new me(e, t, r)
        } catch (n) {
            return this.emit("error", n)
        }
        this.ws.binaryType === void 0 && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
    }
};
V.prototype.addEventListeners = function() {
    var e = this;
    this.ws.onopen = function() {
        e.onOpen()
    }, this.ws.onclose = function() {
        e.onClose()
    }, this.ws.onmessage = function(t) {
        e.onData(t.data)
    }, this.ws.onerror = function(t) {
        e.onError("websocket error", t)
    }
};
V.prototype.write = function(e) {
    var t = this;
    this.writable = !1;
    for (var r = e.length, n = 0, i = r; n < i; n++)(function(l) {
        Do.encodePacket(l, t.supportsBinary, function(f) {
            if (!t.usingBrowserWebSocket) {
                var p = {};
                if (l.options && (p.compress = l.options.compress), t.perMessageDeflate) {
                    var d = typeof f == "string" ? Buffer.byteLength(f) : f.length;
                    d < t.perMessageDeflate.threshold && (p.compress = !1)
                }
            }
            try {
                t.usingBrowserWebSocket ? t.ws.send(f) : t.ws.send(f, p)
            } catch {
                $o("websocket closed before onclose event")
            }--r || s()
        })
    })(e[n]);

    function s() {
        t.emit("flush"), setTimeout(function() {
            t.writable = !0, t.emit("drain")
        }, 0)
    }
};
V.prototype.onClose = function() {
    nr.prototype.onClose.call(this)
};
V.prototype.doClose = function() {
    typeof this.ws < "u" && this.ws.close()
};
V.prototype.uri = function() {
    var e = this.query || {},
        t = this.secure ? "wss" : "ws",
        r = "";
    this.port && (t === "wss" && Number(this.port) !== 443 || t === "ws" && Number(this.port) !== 80) && (r = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = Ro()), this.supportsBinary || (e.b64 = 1), e = So.encode(e), e.length && (e = "?" + e);
    var n = this.hostname.indexOf(":") !== -1;
    return t + "://" + (n ? "[" + this.hostname + "]" : this.hostname) + r + this.path + e
};
V.prototype.check = function() {
    return !!me && !("__initialize" in me && this.name === V.prototype.name)
};
var zo = Yt,
    To = bo,
    Mo = wo,
    Po = Oo;
ot.polling = qo;
ot.websocket = Po;

function qo(e) {
    var t, r = !1,
        n = !1,
        i = e.jsonp !== !1;
    if (typeof location < "u") {
        var s = location.protocol === "https:",
            l = location.port;
        l || (l = s ? 443 : 80), r = e.hostname !== location.hostname || l !== e.port, n = e.secure !== s
    }
    if (e.xdomain = r, e.xscheme = n, t = new zo(e), "open" in t && !e.forceJSONP) return new To(e);
    if (!i) throw new Error("JSONP disabled");
    return new Mo(e)
}
var No = [].indexOf,
    kn = function(e, t) {
        if (No) return e.indexOf(t);
        for (var r = 0; r < e.length; ++r)
            if (e[r] === t) return r;
        return -1
    },
    jo = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
    Io = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
    Lo = function(t) {
        var r = t,
            n = t.indexOf("["),
            i = t.indexOf("]");
        n != -1 && i != -1 && (t = t.substring(0, n) + t.substring(n, i).replace(/:/g, ";") + t.substring(i, t.length));
        for (var s = jo.exec(t || ""), l = {}, f = 14; f--;) l[Io[f]] = s[f] || "";
        return n != -1 && i != -1 && (l.source = r, l.host = l.host.substring(1, l.host.length - 1).replace(/;/g, ":"), l.authority = l.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), l.ipv6uri = !0), l.pathNames = Uo(l, l.path), l.queryKey = Ho(l, l.query), l
    };

function Uo(e, t) {
    var r = /\/{2,9}/g,
        n = t.replace(r, "/").split("/");
    return (t.substr(0, 1) == "/" || t.length === 0) && n.splice(0, 1), t.substr(t.length - 1, 1) == "/" && n.splice(n.length - 1, 1), n
}

function Ho(e, t) {
    var r = {};
    return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(n, i, s) {
        i && (r[i] = s)
    }), r
}
var Vo = ot,
    Wo = nt,
    M = Oe("engine.io-client:socket"),
    Xo = kn,
    Fn = fe,
    xr = Lo,
    Zo = ze,
    Jo = D;

function D(e, t) {
    if (!(this instanceof D)) return new D(e, t);
    t = t || {}, e && typeof e == "object" && (t = e, e = null), e ? (e = xr(e), t.hostname = e.host, t.secure = e.protocol === "https" || e.protocol === "wss", t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = xr(t.host).host), this.secure = t.secure != null ? t.secure : typeof location < "u" && location.protocol === "https:", t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = t.port || (typeof location < "u" && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, typeof this.query == "string" && (this.query = Zo.decode(this.query)), this.upgrade = t.upgrade !== !1, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = t.jsonp !== !1, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.withCredentials = t.withCredentials !== !1, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = t.perMessageDeflate !== !1 ? t.perMessageDeflate || {} : !1, this.perMessageDeflate === !0 && (this.perMessageDeflate = {}), this.perMessageDeflate && this.perMessageDeflate.threshold == null && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = t.rejectUnauthorized === void 0 ? !0 : t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative", (typeof self > "u" || this.isReactNative) && (t.extraHeaders && Object.keys(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
}
D.priorWebsocketSuccess = !1;
Wo(D.prototype);
D.protocol = Fn.protocol;
D.Socket = D;
D.Transport = er();
D.transports = ot;
D.parser = fe;
D.prototype.createTransport = function(e) {
    M('creating transport "%s"', e);
    var t = Go(this.query);
    t.EIO = Fn.protocol, t.transport = e;
    var r = this.transportOptions[e] || {};
    this.id && (t.sid = this.id);
    var n = new Vo[e]({
        query: t,
        socket: this,
        agent: r.agent || this.agent,
        hostname: r.hostname || this.hostname,
        port: r.port || this.port,
        secure: r.secure || this.secure,
        path: r.path || this.path,
        forceJSONP: r.forceJSONP || this.forceJSONP,
        jsonp: r.jsonp || this.jsonp,
        forceBase64: r.forceBase64 || this.forceBase64,
        enablesXDR: r.enablesXDR || this.enablesXDR,
        withCredentials: r.withCredentials || this.withCredentials,
        timestampRequests: r.timestampRequests || this.timestampRequests,
        timestampParam: r.timestampParam || this.timestampParam,
        policyPort: r.policyPort || this.policyPort,
        pfx: r.pfx || this.pfx,
        key: r.key || this.key,
        passphrase: r.passphrase || this.passphrase,
        cert: r.cert || this.cert,
        ca: r.ca || this.ca,
        ciphers: r.ciphers || this.ciphers,
        rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: r.extraHeaders || this.extraHeaders,
        forceNode: r.forceNode || this.forceNode,
        localAddress: r.localAddress || this.localAddress,
        requestTimeout: r.requestTimeout || this.requestTimeout,
        protocols: r.protocols || void 0,
        isReactNative: this.isReactNative
    });
    return n
};

function Go(e) {
    var t = {};
    for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    return t
}
D.prototype.open = function() {
    var e;
    if (this.rememberUpgrade && D.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) e = "websocket";
    else if (this.transports.length === 0) {
        var t = this;
        setTimeout(function() {
            t.emit("error", "No transports available")
        }, 0);
        return
    } else e = this.transports[0];
    this.readyState = "opening";
    try {
        e = this.createTransport(e)
    } catch {
        this.transports.shift(), this.open();
        return
    }
    e.open(), this.setTransport(e)
};
D.prototype.setTransport = function(e) {
    M("setting transport %s", e.name);
    var t = this;
    this.transport && (M("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = e, e.on("drain", function() {
        t.onDrain()
    }).on("packet", function(r) {
        t.onPacket(r)
    }).on("error", function(r) {
        t.onError(r)
    }).on("close", function() {
        t.onClose("transport close")
    })
};
D.prototype.probe = function(e) {
    M('probing transport "%s"', e);
    var t = this.createTransport(e, {
            probe: 1
        }),
        r = !1,
        n = this;
    D.priorWebsocketSuccess = !1;

    function i() {
        if (n.onlyBinaryUpgrades) {
            var o = !this.supportsBinary && n.transport.supportsBinary;
            r = r || o
        }
        r || (M('probe transport "%s" opened', e), t.send([{
            type: "ping",
            data: "probe"
        }]), t.once("packet", function(c) {
            if (!r)
                if (c.type === "pong" && c.data === "probe") {
                    if (M('probe transport "%s" pong', e), n.upgrading = !0, n.emit("upgrading", t), !t) return;
                    D.priorWebsocketSuccess = t.name === "websocket", M('pausing current transport "%s"', n.transport.name), n.transport.pause(function() {
                        r || n.readyState !== "closed" && (M("changing transport and sending upgrade packet"), a(), n.setTransport(t), t.send([{
                            type: "upgrade"
                        }]), n.emit("upgrade", t), t = null, n.upgrading = !1, n.flush())
                    })
                } else {
                    M('probe transport "%s" failed', e);
                    var u = new Error("probe error");
                    u.transport = t.name, n.emit("upgradeError", u)
                }
        }))
    }

    function s() {
        r || (r = !0, a(), t.close(), t = null)
    }

    function l(o) {
        var c = new Error("probe error: " + o);
        c.transport = t.name, s(), M('probe transport "%s" failed because of error: %s', e, o), n.emit("upgradeError", c)
    }

    function f() {
        l("transport closed")
    }

    function p() {
        l("socket closed")
    }

    function d(o) {
        t && o.name !== t.name && (M('"%s" works - aborting "%s"', o.name, t.name), s())
    }

    function a() {
        t.removeListener("open", i), t.removeListener("error", l), t.removeListener("close", f), n.removeListener("close", p), n.removeListener("upgrading", d)
    }
    t.once("open", i), t.once("error", l), t.once("close", f), this.once("close", p), this.once("upgrading", d), t.open()
};
D.prototype.onOpen = function() {
    if (M("socket open"), this.readyState = "open", D.priorWebsocketSuccess = this.transport.name === "websocket", this.emit("open"), this.flush(), this.readyState === "open" && this.upgrade && this.transport.pause) {
        M("starting upgrade probes");
        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
    }
};
D.prototype.onPacket = function(e) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") switch (M('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
        case "open":
            this.onHandshake(JSON.parse(e.data));
            break;
        case "pong":
            this.setPing(), this.emit("pong");
            break;
        case "error":
            var t = new Error("server error");
            t.code = e.data, this.onError(t);
            break;
        case "message":
            this.emit("data", e.data), this.emit("message", e.data);
            break
    } else M('packet received with socket readyState "%s"', this.readyState)
};
D.prototype.onHandshake = function(e) {
    this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), this.readyState !== "closed" && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
};
D.prototype.onHeartbeat = function(e) {
    clearTimeout(this.pingTimeoutTimer);
    var t = this;
    t.pingTimeoutTimer = setTimeout(function() {
        t.readyState !== "closed" && t.onClose("ping timeout")
    }, e || t.pingInterval + t.pingTimeout)
};
D.prototype.setPing = function() {
    var e = this;
    clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
        M("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
    }, e.pingInterval)
};
D.prototype.ping = function() {
    var e = this;
    this.sendPacket("ping", function() {
        e.emit("ping")
    })
};
D.prototype.onDrain = function() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emit("drain") : this.flush()
};
D.prototype.flush = function() {
    this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length && (M("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
};
D.prototype.write = D.prototype.send = function(e, t, r) {
    return this.sendPacket("message", e, t, r), this
};
D.prototype.sendPacket = function(e, t, r, n) {
    if (typeof t == "function" && (n = t, t = void 0), typeof r == "function" && (n = r, r = null), !(this.readyState === "closing" || this.readyState === "closed")) {
        r = r || {}, r.compress = r.compress !== !1;
        var i = {
            type: e,
            data: t,
            options: r
        };
        this.emit("packetCreate", i), this.writeBuffer.push(i), n && this.once("flush", n), this.flush()
    }
};
D.prototype.close = function() {
    if (this.readyState === "opening" || this.readyState === "open") {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function() {
            this.upgrading ? n() : t()
        }) : this.upgrading ? n() : t()
    }

    function t() {
        e.onClose("forced close"), M("socket closing - telling transport to close"), e.transport.close()
    }

    function r() {
        e.removeListener("upgrade", r), e.removeListener("upgradeError", r), t()
    }

    function n() {
        e.once("upgrade", r), e.once("upgradeError", r)
    }
    return this
};
D.prototype.onError = function(e) {
    M("socket error %j", e), D.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
};
D.prototype.onClose = function(e, t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
        M('socket close with reason: "%s"', e);
        var r = this;
        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), r.writeBuffer = [], r.prevBufferLen = 0
    }
};
D.prototype.filterUpgrades = function(e) {
    for (var t = [], r = 0, n = e.length; r < n; r++) ~Xo(this.transports, e[r]) && t.push(e[r]);
    return t
};
Gt.exports = Jo;
Gt.exports.parser = fe;
var Ko = Gt.exports,
    xn = {
        exports: {}
    },
    An = {
        exports: {}
    };
(function(e) {
    e.exports = t;

    function t(n) {
        if (n) return r(n)
    }

    function r(n) {
        for (var i in t.prototype) n[i] = t.prototype[i];
        return n
    }
    t.prototype.on = t.prototype.addEventListener = function(n, i) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + n] = this._callbacks["$" + n] || []).push(i), this
    }, t.prototype.once = function(n, i) {
        function s() {
            this.off(n, s), i.apply(this, arguments)
        }
        return s.fn = i, this.on(n, s), this
    }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(n, i) {
        if (this._callbacks = this._callbacks || {}, arguments.length == 0) return this._callbacks = {}, this;
        var s = this._callbacks["$" + n];
        if (!s) return this;
        if (arguments.length == 1) return delete this._callbacks["$" + n], this;
        for (var l, f = 0; f < s.length; f++)
            if (l = s[f], l === i || l.fn === i) {
                s.splice(f, 1);
                break
            }
        return this
    }, t.prototype.emit = function(n) {
        this._callbacks = this._callbacks || {};
        var i = [].slice.call(arguments, 1),
            s = this._callbacks["$" + n];
        if (s) {
            s = s.slice(0);
            for (var l = 0, f = s.length; l < f; ++l) s[l].apply(this, i)
        }
        return this
    }, t.prototype.listeners = function(n) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + n] || []
    }, t.prototype.hasListeners = function(n) {
        return !!this.listeners(n).length
    }
})(An);
var En = An.exports,
    Yo = Qo;

function Qo(e, t) {
    var r = [];
    t = t || 0;
    for (var n = t || 0; n < e.length; n++) r[n - t] = e[n];
    return r
}
var Dn = es;

function es(e, t, r) {
    return e.on(t, r), {
        destroy: function() {
            e.removeListener(t, r)
        }
    }
}
var Ar = [].slice,
    Sn = function(e, t) {
        if (typeof t == "string" && (t = e[t]), typeof t != "function") throw new Error("bind() requires a function");
        var r = Ar.call(arguments, 2);
        return function() {
            return t.apply(e, r.concat(Ar.call(arguments)))
        }
    },
    or = {};
or.encode = function(e) {
    var t = "";
    for (var r in e) e.hasOwnProperty(r) && (t.length && (t += "&"), t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r]));
    return t
};
or.decode = function(e) {
    for (var t = {}, r = e.split("&"), n = 0, i = r.length; n < i; n++) {
        var s = r[n].split("=");
        t[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
    }
    return t
};
(function(e, t) {
    var r = rt,
        n = En,
        i = Yo,
        s = Dn,
        l = Sn,
        f = tt("socket.io-client:socket"),
        p = or,
        d = hn;
    e.exports = c;
    var a = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        o = n.prototype.emit;

    function c(u, h, y) {
        this.io = u, this.nsp = h, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, y && y.query && (this.query = y.query), this.io.autoConnect && this.open()
    }
    n(c.prototype), c.prototype.subEvents = function() {
        if (!this.subs) {
            var u = this.io;
            this.subs = [s(u, "open", l(this, "onopen")), s(u, "packet", l(this, "onpacket")), s(u, "close", l(this, "onclose"))]
        }
    }, c.prototype.open = c.prototype.connect = function() {
        return this.connected ? this : (this.subEvents(), this.io.open(), this.io.readyState === "open" && this.onopen(), this.emit("connecting"), this)
    }, c.prototype.send = function() {
        var u = i(arguments);
        return u.unshift("message"), this.emit.apply(this, u), this
    }, c.prototype.emit = function(u) {
        if (a.hasOwnProperty(u)) return o.apply(this, arguments), this;
        var h = i(arguments),
            y = {
                type: (this.flags.binary !== void 0 ? this.flags.binary : d(h)) ? r.BINARY_EVENT : r.EVENT,
                data: h
            };
        return y.options = {}, y.options.compress = !this.flags || this.flags.compress !== !1, typeof h[h.length - 1] == "function" && (f("emitting packet with ack id %d", this.ids), this.acks[this.ids] = h.pop(), y.id = this.ids++), this.connected ? this.packet(y) : this.sendBuffer.push(y), this.flags = {}, this
    }, c.prototype.packet = function(u) {
        u.nsp = this.nsp, this.io.packet(u)
    }, c.prototype.onopen = function() {
        if (f("transport is open - connecting"), this.nsp !== "/")
            if (this.query) {
                var u = typeof this.query == "object" ? p.encode(this.query) : this.query;
                f("sending connect packet with query %s", u), this.packet({
                    type: r.CONNECT,
                    query: u
                })
            } else this.packet({
                type: r.CONNECT
            })
    }, c.prototype.onclose = function(u) {
        f("close (%s)", u), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", u)
    }, c.prototype.onpacket = function(u) {
        var h = u.nsp === this.nsp,
            y = u.type === r.ERROR && u.nsp === "/";
        if (!(!h && !y)) switch (u.type) {
            case r.CONNECT:
                this.onconnect();
                break;
            case r.EVENT:
                this.onevent(u);
                break;
            case r.BINARY_EVENT:
                this.onevent(u);
                break;
            case r.ACK:
                this.onack(u);
                break;
            case r.BINARY_ACK:
                this.onack(u);
                break;
            case r.DISCONNECT:
                this.ondisconnect();
                break;
            case r.ERROR:
                this.emit("error", u.data);
                break
        }
    }, c.prototype.onevent = function(u) {
        var h = u.data || [];
        f("emitting event %j", h), u.id != null && (f("attaching ack callback to event"), h.push(this.ack(u.id))), this.connected ? o.apply(this, h) : this.receiveBuffer.push(h)
    }, c.prototype.ack = function(u) {
        var h = this,
            y = !1;
        return function() {
            if (!y) {
                y = !0;
                var g = i(arguments);
                f("sending ack %j", g), h.packet({
                    type: d(g) ? r.BINARY_ACK : r.ACK,
                    id: u,
                    data: g
                })
            }
        }
    }, c.prototype.onack = function(u) {
        var h = this.acks[u.id];
        typeof h == "function" ? (f("calling ack %s with %j", u.id, u.data), h.apply(this, u.data), delete this.acks[u.id]) : f("bad ack %s", u.id)
    }, c.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, c.prototype.emitBuffered = function() {
        var u;
        for (u = 0; u < this.receiveBuffer.length; u++) o.apply(this, this.receiveBuffer[u]);
        for (this.receiveBuffer = [], u = 0; u < this.sendBuffer.length; u++) this.packet(this.sendBuffer[u]);
        this.sendBuffer = []
    }, c.prototype.ondisconnect = function() {
        f("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, c.prototype.destroy = function() {
        if (this.subs) {
            for (var u = 0; u < this.subs.length; u++) this.subs[u].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, c.prototype.close = c.prototype.disconnect = function() {
        return this.connected && (f("performing disconnect (%s)", this.nsp), this.packet({
            type: r.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, c.prototype.compress = function(u) {
        return this.flags.compress = u, this
    }, c.prototype.binary = function(u) {
        return this.flags.binary = u, this
    }
})(xn);
var Bn = xn.exports,
    ts = Fe;

function Fe(e) {
    e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
}
Fe.prototype.duration = function() {
    var e = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
        var t = Math.random(),
            r = Math.floor(t * this.jitter * e);
        e = Math.floor(t * 10) & 1 ? e + r : e - r
    }
    return Math.min(e, this.max) | 0
};
Fe.prototype.reset = function() {
    this.attempts = 0
};
Fe.prototype.setMin = function(e) {
    this.ms = e
};
Fe.prototype.setMax = function(e) {
    this.max = e
};
Fe.prototype.setJitter = function(e) {
    this.jitter = e
};
var rs = Ko,
    ns = Bn,
    is = En,
    os = rt,
    Q = Dn,
    pe = Sn,
    j = tt("socket.io-client:manager"),
    Rn = kn,
    ss = ts,
    $n = Object.prototype.hasOwnProperty,
    Er = R;

function R(e, t) {
    if (!(this instanceof R)) return new R(e, t);
    e && typeof e == "object" && (t = e, e = void 0), t = t || {}, t.path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(t.reconnection !== !1), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new ss({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
    }), this.timeout(t.timeout == null ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
    var r = t.parser || os;
    this.encoder = new r.Encoder, this.decoder = new r.Decoder, this.autoConnect = t.autoConnect !== !1, this.autoConnect && this.open()
}
R.prototype.emitAll = function() {
    this.emit.apply(this, arguments);
    for (var e in this.nsps) $n.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
};
R.prototype.updateSocketIds = function() {
    for (var e in this.nsps) $n.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
};
R.prototype.generateId = function(e) {
    return (e === "/" ? "" : e + "#") + this.engine.id
};
is(R.prototype);
R.prototype.reconnection = function(e) {
    return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
};
R.prototype.reconnectionAttempts = function(e) {
    return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
};
R.prototype.reconnectionDelay = function(e) {
    return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
};
R.prototype.randomizationFactor = function(e) {
    return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
};
R.prototype.reconnectionDelayMax = function(e) {
    return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
};
R.prototype.timeout = function(e) {
    return arguments.length ? (this._timeout = e, this) : this._timeout
};
R.prototype.maybeReconnectOnOpen = function() {
    !this.reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect()
};
R.prototype.open = R.prototype.connect = function(e, t) {
    if (j("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
    j("opening %s", this.uri), this.engine = rs(this.uri, this.opts);
    var r = this.engine,
        n = this;
    this.readyState = "opening", this.skipReconnect = !1;
    var i = Q(r, "open", function() {
            n.onopen(), e && e()
        }),
        s = Q(r, "error", function(p) {
            if (j("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", p), e) {
                var d = new Error("Connection error");
                d.data = p, e(d)
            } else n.maybeReconnectOnOpen()
        });
    if (this._timeout !== !1) {
        var l = this._timeout;
        j("connect attempt will timeout after %d", l);
        var f = setTimeout(function() {
            j("connect attempt timed out after %d", l), i.destroy(), r.close(), r.emit("error", "timeout"), n.emitAll("connect_timeout", l)
        }, l);
        this.subs.push({
            destroy: function() {
                clearTimeout(f)
            }
        })
    }
    return this.subs.push(i), this.subs.push(s), this
};
R.prototype.onopen = function() {
    j("open"), this.cleanup(), this.readyState = "open", this.emit("open");
    var e = this.engine;
    this.subs.push(Q(e, "data", pe(this, "ondata"))), this.subs.push(Q(e, "ping", pe(this, "onping"))), this.subs.push(Q(e, "pong", pe(this, "onpong"))), this.subs.push(Q(e, "error", pe(this, "onerror"))), this.subs.push(Q(e, "close", pe(this, "onclose"))), this.subs.push(Q(this.decoder, "decoded", pe(this, "ondecoded")))
};
R.prototype.onping = function() {
    this.lastPing = new Date, this.emitAll("ping")
};
R.prototype.onpong = function() {
    this.emitAll("pong", new Date - this.lastPing)
};
R.prototype.ondata = function(e) {
    this.decoder.add(e)
};
R.prototype.ondecoded = function(e) {
    this.emit("packet", e)
};
R.prototype.onerror = function(e) {
    j("error", e), this.emitAll("error", e)
};
R.prototype.socket = function(e, t) {
    var r = this.nsps[e];
    if (!r) {
        r = new ns(this, e, t), this.nsps[e] = r;
        var n = this;
        r.on("connecting", i), r.on("connect", function() {
            r.id = n.generateId(e)
        }), this.autoConnect && i()
    }

    function i() {
        ~Rn(n.connecting, r) || n.connecting.push(r)
    }
    return r
};
R.prototype.destroy = function(e) {
    var t = Rn(this.connecting, e);
    ~t && this.connecting.splice(t, 1), !this.connecting.length && this.close()
};
R.prototype.packet = function(e) {
    j("writing packet %j", e);
    var t = this;
    e.query && e.type === 0 && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function(r) {
        for (var n = 0; n < r.length; n++) t.engine.write(r[n], e.options);
        t.encoding = !1, t.processPacketQueue()
    }))
};
R.prototype.processPacketQueue = function() {
    if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e)
    }
};
R.prototype.cleanup = function() {
    j("cleanup");
    for (var e = this.subs.length, t = 0; t < e; t++) {
        var r = this.subs.shift();
        r.destroy()
    }
    this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
};
R.prototype.close = R.prototype.disconnect = function() {
    j("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, this.readyState === "opening" && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
};
R.prototype.onclose = function(e) {
    j("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
};
R.prototype.reconnect = function() {
    if (this.reconnecting || this.skipReconnect) return this;
    var e = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) j("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
    else {
        var t = this.backoff.duration();
        j("will wait %dms before reconnect attempt", t), this.reconnecting = !0;
        var r = setTimeout(function() {
            e.skipReconnect || (j("attempting reconnect"), e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), !e.skipReconnect && e.open(function(n) {
                n ? (j("reconnect attempt error"), e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", n.data)) : (j("reconnect success"), e.onreconnect())
            }))
        }, t);
        this.subs.push({
            destroy: function() {
                clearTimeout(r)
            }
        })
    }
};
R.prototype.onreconnect = function() {
    var e = this.backoff.attempts;
    this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
};
(function(e, t) {
    var r = Si,
        n = rt,
        i = Er,
        s = tt("socket.io-client");
    e.exports = t = f;
    var l = t.managers = {};

    function f(p, d) {
        typeof p == "object" && (d = p, p = void 0), d = d || {};
        var a = r(p),
            o = a.source,
            c = a.id,
            u = a.path,
            h = l[c] && u in l[c].nsps,
            y = d.forceNew || d["force new connection"] || d.multiplex === !1 || h,
            g;
        return y ? (s("ignoring socket cache for %s", o), g = i(o, d)) : (l[c] || (s("new io instance for %s", o), l[c] = i(o, d)), g = l[c]), a.query && !d.query && (d.query = a.query), g.socket(a.path, d)
    }
    t.protocol = n.protocol, t.connect = f, t.Manager = Er, t.Socket = Bn
})(Et, Et.exports);
var as = Et.exports;

function cs(e, t) {
    return t = t || {}, new Promise(function(r, n) {
        var i = new XMLHttpRequest,
            s = [],
            l = [],
            f = {},
            p = function() {
                return {
                    ok: (i.status / 100 | 0) == 2,
                    statusText: i.statusText,
                    status: i.status,
                    url: i.responseURL,
                    text: function() {
                        return Promise.resolve(i.responseText)
                    },
                    json: function() {
                        return Promise.resolve(i.responseText).then(JSON.parse)
                    },
                    blob: function() {
                        return Promise.resolve(new Blob([i.response]))
                    },
                    clone: p,
                    headers: {
                        keys: function() {
                            return s
                        },
                        entries: function() {
                            return l
                        },
                        get: function(a) {
                            return f[a.toLowerCase()]
                        },
                        has: function(a) {
                            return a.toLowerCase() in f
                        }
                    }
                }
            };
        for (var d in i.open(t.method || "get", e, !0), i.onload = function() {
                i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function(a, o, c) {
                    s.push(o = o.toLowerCase()), l.push([o, c]), f[o] = f[o] ? f[o] + "," + c : c
                }), r(p())
            }, i.onerror = n, i.withCredentials = t.credentials == "include", t.headers) i.setRequestHeader(d, t.headers[d]);
        i.send(t.body || null)
    })
}
const us = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: cs
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Dr = Qr(us);
var fs = self.fetch || (self.fetch = Dr.default || Dr);
(function(e) {
    var t = B && B.__assign || function() {
            return t = Object.assign || function(c) {
                for (var u, h = 1, y = arguments.length; h < y; h++) {
                    u = arguments[h];
                    for (var g in u) Object.prototype.hasOwnProperty.call(u, g) && (c[g] = u[g])
                }
                return c
            }, t.apply(this, arguments)
        },
        r = B && B.__awaiter || function(c, u, h, y) {
            function g(v) {
                return v instanceof h ? v : new h(function(b) {
                    b(v)
                })
            }
            return new(h || (h = Promise))(function(v, b) {
                function C(w) {
                    try {
                        _(y.next(w))
                    } catch (k) {
                        b(k)
                    }
                }

                function m(w) {
                    try {
                        _(y.throw(w))
                    } catch (k) {
                        b(k)
                    }
                }

                function _(w) {
                    w.done ? v(w.value) : g(w.value).then(C, m)
                }
                _((y = y.apply(c, u || [])).next())
            })
        },
        n = B && B.__generator || function(c, u) {
            var h = {
                    label: 0,
                    sent: function() {
                        if (v[0] & 1) throw v[1];
                        return v[1]
                    },
                    trys: [],
                    ops: []
                },
                y, g, v, b;
            return b = {
                next: C(0),
                throw: C(1),
                return: C(2)
            }, typeof Symbol == "function" && (b[Symbol.iterator] = function() {
                return this
            }), b;

            function C(_) {
                return function(w) {
                    return m([_, w])
                }
            }

            function m(_) {
                if (y) throw new TypeError("Generator is already executing.");
                for (; b && (b = 0, _[0] && (h = 0)), h;) try {
                    if (y = 1, g && (v = _[0] & 2 ? g.return : _[0] ? g.throw || ((v = g.return) && v.call(g), 0) : g.next) && !(v = v.call(g, _[1])).done) return v;
                    switch (g = 0, v && (_ = [_[0] & 2, v.value]), _[0]) {
                        case 0:
                        case 1:
                            v = _;
                            break;
                        case 4:
                            return h.label++, {
                                value: _[1],
                                done: !1
                            };
                        case 5:
                            h.label++, g = _[1], _ = [0];
                            continue;
                        case 7:
                            _ = h.ops.pop(), h.trys.pop();
                            continue;
                        default:
                            if (v = h.trys, !(v = v.length > 0 && v[v.length - 1]) && (_[0] === 6 || _[0] === 2)) {
                                h = 0;
                                continue
                            }
                            if (_[0] === 3 && (!v || _[1] > v[0] && _[1] < v[3])) {
                                h.label = _[1];
                                break
                            }
                            if (_[0] === 6 && h.label < v[1]) {
                                h.label = v[1], v = _;
                                break
                            }
                            if (v && h.label < v[2]) {
                                h.label = v[2], h.ops.push(_);
                                break
                            }
                            v[2] && h.ops.pop(), h.trys.pop();
                            continue
                    }
                    _ = u.call(c, h)
                } catch (w) {
                    _ = [6, w], g = 0
                } finally {
                    y = v = 0
                }
                if (_[0] & 5) throw _[1];
                return {
                    value: _[0] ? _[1] : void 0,
                    done: !0
                }
            }
        },
        i = B && B.__importDefault || function(c) {
            return c && c.__esModule ? c : {
                default: c
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = void 0;
    var s = q,
        l = i(Ci),
        f = i(as),
        p = fs,
        d = {
            transports: ["websocket"],
            path: "/socket",
            reconnection: !0,
            reconnectionDelay: 1e3,
            reconnectionDelayMax: 5e3,
            reconnectionAttempts: Number.POSITIVE_INFINITY
        },
        a = function() {
            function c(u) {
                if (this.options = u, this.initialized = !1, this.forceReconnect = !1, this.identity = null, this.connection = null, this.connectCallback = null, this.disconnectCallback = null, this.initData = null, this.internalReconnection = !1, this.internalReconnecting = !1, this.internalReconnectingAttempt = 0, this.sendBuffer = [], this.emitter = new l.default, !this.options.url) throw new Error("Missing required option url");
                this.options.options || (this.options.options = {}), this.options.options = Object.assign({}, d, this.options.options, {
                    autoConnect: !1
                })
            }
            return c.prototype.initConnection = function() {
                return r(this, void 0, void 0, function() {
                    var u, h, h;
                    return n(this, function(y) {
                        switch (y.label) {
                            case 0:
                                if (this.connection) throw new Error("Connection already exists");
                                return u = null, this.options.balancerUrl ? ((0, s.debug)("using balancer ".concat(this.options.balancerUrl, " to get websocket url")), [4, p("".concat(this.options.balancerUrl)).then(function(g) {
                                    return g.json()
                                }).then(function(g) {
                                    return g != null && g.url && (g != null && g.token) ? ((0, s.debug)("balancer returns url ".concat(g == null ? void 0 : g.url, " and token ").concat(g == null ? void 0 : g.token)), g) : ((0, s.debug)("balancer returns invalid response"), null)
                                }).catch(function(g) {
                                    return (0, s.debug)("failed to resolve url: ".concat(g.message)), null
                                })]) : [3, 2];
                            case 1:
                                u = y.sent(), y.label = 2;
                            case 2:
                                return u ? ((0, s.debug)("creating connection to ".concat(u.url, " with token ").concat(u.token)), h = (0, f.default)(u.url, Object.assign({}, this.options.options, {
                                    reconnection: !1,
                                    query: {
                                        token: u.token
                                    }
                                })), this.setConnection(h), this.internalReconnection = !0) : ((0, s.debug)("creating connection to ".concat(this.options.url)), h = (0, f.default)(this.options.url, this.options.options), this.setConnection(h), this.internalReconnection = !1), [2]
                        }
                    })
                })
            }, c.prototype.setConnection = function(u) {
                var h = this;
                this.connection = u, this.forceReconnect = !1, u.on("connect_error", function(y) {
                    h.internalReconnection && (h.connectCallback = null, (0, s.debug)("connection was not reconnected"), h.emitter.emit("reconnect_error", y), h.options.options.reconnectionAttempts > h.internalReconnectingAttempt + 1 ? h.reconnect(h.internalReconnectingAttempt + 1) : h.emitter.emit("reconnect_failed", h.internalReconnectingAttempt))
                }), u.on("connect", function() {
                    (0, s.debug)("socket was connected"), h.initialized = !1, h.internalReconnecting ? ((0, s.debug)("connection is reconnected"), h.emitter.emit("reconnect"), h.internalReconnecting = !1, h.internalReconnectingAttempt = 0) : h.emitter.emit("connect"), h.initialize().then(function(y) {
                        return (0, s.debug)("socket was initialized"), h.onInitialized(y), h.connectCallback && (h.connectCallback(null, y), h.connectCallback = null), y
                    }).catch(function(y) {
                        (0, s.debug)("socket was not initialized ", t({}, y)), h.onInitializeError(y), h.connectCallback && (h.connectCallback(y), h.connectCallback = null)
                    })
                }), u.on("disconnect", function(y) {
                    (0, s.debug)("socket was disconnected reason='".concat(y, "'")), h.initialized = !1, (!h.internalReconnecting || h.internalReconnectingAttempt === 1) && setTimeout(function() {
                        h.emitter.emit("disconnect", y), h.disconnectCallback && (h.disconnectCallback(), h.disconnectCallback = null)
                    }, 100), h.options.options.reconnection && h.internalReconnection && !h.internalReconnecting && (h.forceReconnect || y !== "io server disconnect") && h.reconnect()
                }), u.on("reconnecting", function(y) {
                    h.emitter.emit("reconnecting", y)
                }), u.on("reconnect", function() {
                    h.emitter.emit("reconnect")
                }), u.on("reconnect_attempt", function(y) {
                    h.emitter.emit("reconnect_attempt", y)
                }), u.on("reconnect_error", function(y) {
                    h.emitter.emit("reconnect_error", y)
                }), u.on("reconnect_failed", function() {
                    h.emitter.emit("reconnect_failed")
                }), u.on("force_reconnect", function() {
                    (0, s.debug)("received event force_reconnect, setting flag forceReconnect = true"), h.forceReconnect = !0
                })
            }, c.prototype.getConnection = function() {
                return this.connection
            }, c.prototype.isConnected = function() {
                var u;
                return ((u = this.connection) === null || u === void 0 ? void 0 : u.connected) || !1
            }, c.prototype.isInitialized = function() {
                return this.initialized
            }, c.prototype.getInitData = function() {
                return this.initData
            }, c.prototype.connect = function() {
                return r(this, void 0, void 0, function() {
                    var u = this;
                    return n(this, function(h) {
                        switch (h.label) {
                            case 0:
                                return this.connection ? [3, 2] : [4, this.initConnection()];
                            case 1:
                                h.sent(), h.label = 2;
                            case 2:
                                return [2, new Promise(function(y, g) {
                                    u.initialized ? y(u.initData) : ((0, s.debug)("starting connecting"), u.connectCallback = (0, s.createCallback)(y, g), u.connection.open())
                                })]
                        }
                    })
                })
            }, c.prototype.disconnect = function() {
                var u = this;
                return new Promise(function(h, y) {
                    !u.connection || u.connection.disconnected ? (u.connection = null, h()) : ((0, s.debug)("starting disconnecting"), u.disconnectCallback = (0, s.createCallback)(h, y), u.connection.close(), u.connection = null)
                })
            }, c.prototype.reconnect = function(u) {
                var h = this;
                return u === void 0 && (u = 1), this.internalReconnecting = !0, this.internalReconnectingAttempt = u, this.disconnect().then(function() {
                    var y = Math.floor(Math.random() * (h.options.options.reconnectionDelayMax - h.options.options.reconnectionDelay) + h.options.options.reconnectionDelay);
                    return (0, s.debug)("connection will reconnect in ".concat(y, "ms")), h.emitter.emit("reconnecting", u), new Promise(function(g) {
                        setTimeout(g, y)
                    })
                }).then(function() {
                    return (0, s.debug)("connection is starting reconnect"), h.emitter.emit("reconnect_attempt", u), h.connect()
                })
            }, c.prototype.initialize = function() {
                return new Promise(function(u) {
                    u({})
                })
            }, c.prototype.onInitialized = function(u) {
                var h = this;
                this.initialized || (this.initialized = !0, this.initData = u, (0, s.debug)("emit initialized"), this.emitter.emit("initialized", u), setTimeout(function() {
                    if (h.sendBuffer.length > 0) {
                        (0, s.debug)("sending buffered ".concat(h.sendBuffer.length, " events"));
                        for (var y = 0; y < h.sendBuffer.length; y++) {
                            var g = h.sendBuffer[y];
                            h.connection.emit(g.name, g.data, g.callback)
                        }
                        h.sendBuffer = []
                    }
                }, 1))
            }, c.prototype.onInitializeError = function(u) {
                this.disconnect(), (0, s.debug)("emit initialize_error", t({}, u)), this.emitter.emit("initialize_error", u)
            }, c.prototype.send = function(u, h, y) {
                this.initialized ? this.connection.emit(u, h, y) : this.sendBuffer.push({
                    name: u,
                    data: h,
                    callback: y
                })
            }, c.prototype.on = function(u, h) {
                return this.emitter.on(u, h), this
            }, c.prototype.once = function(u, h) {
                return this.emitter.once(u, h), this
            }, c.prototype.removeAllListeners = function() {
                for (var u, h = [], y = 0; y < arguments.length; y++) h[y] = arguments[y];
                return (u = this.emitter).removeAllListeners.apply(u, h), this
            }, c
        }();
    e.default = a;
    var o = q;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return o.SocketError
        }
    })
})(rn);
(function(e) {
    var t = B && B.__extends || function() {
            var d = function(a, o) {
                return d = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(c, u) {
                    c.__proto__ = u
                } || function(c, u) {
                    for (var h in u) Object.prototype.hasOwnProperty.call(u, h) && (c[h] = u[h])
                }, d(a, o)
            };
            return function(a, o) {
                if (typeof o != "function" && o !== null) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
                d(a, o);

                function c() {
                    this.constructor = a
                }
                a.prototype = o === null ? Object.create(o) : (c.prototype = o.prototype, new c)
            }
        }(),
        r = B && B.__assign || function() {
            return r = Object.assign || function(d) {
                for (var a, o = 1, c = arguments.length; o < c; o++) {
                    a = arguments[o];
                    for (var u in a) Object.prototype.hasOwnProperty.call(a, u) && (d[u] = a[u])
                }
                return d
            }, r.apply(this, arguments)
        },
        n = B && B.__awaiter || function(d, a, o, c) {
            function u(h) {
                return h instanceof o ? h : new o(function(y) {
                    y(h)
                })
            }
            return new(o || (o = Promise))(function(h, y) {
                function g(C) {
                    try {
                        b(c.next(C))
                    } catch (m) {
                        y(m)
                    }
                }

                function v(C) {
                    try {
                        b(c.throw(C))
                    } catch (m) {
                        y(m)
                    }
                }

                function b(C) {
                    C.done ? h(C.value) : u(C.value).then(g, v)
                }
                b((c = c.apply(d, a || [])).next())
            })
        },
        i = B && B.__generator || function(d, a) {
            var o = {
                    label: 0,
                    sent: function() {
                        if (h[0] & 1) throw h[1];
                        return h[1]
                    },
                    trys: [],
                    ops: []
                },
                c, u, h, y;
            return y = {
                next: g(0),
                throw: g(1),
                return: g(2)
            }, typeof Symbol == "function" && (y[Symbol.iterator] = function() {
                return this
            }), y;

            function g(b) {
                return function(C) {
                    return v([b, C])
                }
            }

            function v(b) {
                if (c) throw new TypeError("Generator is already executing.");
                for (; y && (y = 0, b[0] && (o = 0)), o;) try {
                    if (c = 1, u && (h = b[0] & 2 ? u.return : b[0] ? u.throw || ((h = u.return) && h.call(u), 0) : u.next) && !(h = h.call(u, b[1])).done) return h;
                    switch (u = 0, h && (b = [b[0] & 2, h.value]), b[0]) {
                        case 0:
                        case 1:
                            h = b;
                            break;
                        case 4:
                            return o.label++, {
                                value: b[1],
                                done: !1
                            };
                        case 5:
                            o.label++, u = b[1], b = [0];
                            continue;
                        case 7:
                            b = o.ops.pop(), o.trys.pop();
                            continue;
                        default:
                            if (h = o.trys, !(h = h.length > 0 && h[h.length - 1]) && (b[0] === 6 || b[0] === 2)) {
                                o = 0;
                                continue
                            }
                            if (b[0] === 3 && (!h || b[1] > h[0] && b[1] < h[3])) {
                                o.label = b[1];
                                break
                            }
                            if (b[0] === 6 && o.label < h[1]) {
                                o.label = h[1], h = b;
                                break
                            }
                            if (h && o.label < h[2]) {
                                o.label = h[2], o.ops.push(b);
                                break
                            }
                            h[2] && o.ops.pop(), o.trys.pop();
                            continue
                    }
                    b = a.call(d, o)
                } catch (C) {
                    b = [6, C], u = 0
                } finally {
                    c = h = 0
                }
                if (b[0] & 5) throw b[1];
                return {
                    value: b[0] ? b[1] : void 0,
                    done: !0
                }
            }
        },
        s = B && B.__importDefault || function(d) {
            return d && d.__esModule ? d : {
                default: d
            }
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.WebsocketVisitorClient = void 0;
    var l = s(rn),
        f = q,
        p = function(d) {
            t(a, d);

            function a(o) {
                var c = d.call(this, o.connection) || this;
                return c.serverVersion = null, c.updatedValues = {}, c.connectData = o.data, c.identity = null, c
            }
            return a.prototype.setConnection = function(o) {
                d.prototype.setConnection.call(this, o), o.on("server.error", (0, f.bound)(this, "onServerError")), o.on("account.updated", (0, f.createEmitter)(this.emitter, "account.updated")), o.on("agent.updated", (0, f.createEmitter)(this.emitter, "agent.updated")), o.on("agent.status_updated", (0, f.createEmitter)(this.emitter, "agent.status_updated")), o.on("agent.removed", (0, f.createEmitter)(this.emitter, "agent.removed")), o.on("visitor.updated", (0, f.bound)(this, "onVisitorUpdated")), o.on("chat.updated", (0, f.createEmitter)(this.emitter, "chat.updated")), o.on("chat.agent_joined", (0, f.createEmitter)(this.emitter, "chat.agent_joined")), o.on("chat.agent_assigned", (0, f.createEmitter)(this.emitter, "chat.agent_assigned")), o.on("chat.agent_unassigned", (0, f.createEmitter)(this.emitter, "chat.agent_unassigned")), o.on("chat.agent_left", (0, f.createEmitter)(this.emitter, "chat.agent_left")), o.on("chat.opened", (0, f.createEmitter)(this.emitter, "chat.opened")), o.on("chat.served", (0, f.createEmitter)(this.emitter, "chat.served")), o.on("chat.closed", (0, f.createEmitter)(this.emitter, "chat.closed")), o.on("chat.visitor_closed", (0, f.createEmitter)(this.emitter, "chat.visitor_closed")), o.on("chat.message_received", (0, f.createEmitter)(this.emitter, "chat.message_received")), o.on("chat.message_updated", (0, f.createEmitter)(this.emitter, "chat.message_updated")), o.on("chat.agent_typing", (0, f.createEmitter)(this.emitter, "chat.agent_typing")), o.on("chat.rated", (0, f.createEmitter)(this.emitter, "chat.rated")), o.on("chat.contact_read", (0, f.createEmitter)(this.emitter, "chat.contact_read")), o.on("chat.deleted", (0, f.createEmitter)(this.emitter, "chat.deleted")), o.on("chat.transcript_pdf", (0, f.createEmitter)(this.emitter, "chat.transcript_pdf")), o.on("contact.acquired", (0, f.createEmitter)(this.emitter, "contact.acquired"))
            }, a.prototype.on = function(o, c) {
                return this.emitter.on(o, c), this
            }, a.prototype.once = function(o, c) {
                return this.emitter.once(o, c), this
            }, a.prototype.getId = function() {
                return this.identity ? this.identity.id : null
            }, a.prototype.getIdentity = function() {
                return this.identity
            }, a.prototype.connect = function() {
                return d.prototype.connect.call(this)
            }, a.prototype.disconnect = function(o) {
                return o === void 0 && (o = !1), n(this, void 0, void 0, function() {
                    var c = this;
                    return i(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return o ? [4, new Promise(function(h, y) {
                                    c.send("visitor.logout", {}, (0, f.createCallback)(h, y))
                                })] : [3, 2];
                            case 1:
                                u.sent(), u.label = 2;
                            case 2:
                                return [2, d.prototype.disconnect.call(this)]
                        }
                    })
                })
            }, a.prototype.update = function(o) {
                o === void 0 && (o = {}), this.checkServerVersion();
                for (var c in o) this.identity[c] = o[c], this.updatedValues[c] = o[c];
                this.saveVisitorValues()
            }, a.prototype.authenticate = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, h) {
                    c.send("visitor.authenticate", {
                        values: o
                    }, (0, f.createCallback)(u, h))
                })
            }, a.prototype.notify = function(o, c) {
                var u = this;
                return c === void 0 && (c = null), this.checkServerVersion(), new Promise(function(h, y) {
                    u.send("visitor.notify", {
                        name: o,
                        value: c
                    }, (0, f.createCallback)(h, y))
                })
            }, a.prototype.chatRead = function() {
                this.checkServerVersion(), this.send("chat.read", null)
            }, a.prototype.chatTyping = function(o, c) {
                c === void 0 && (c = null), this.checkServerVersion(), this.send("chat.typing", {
                    typing: {
                        is: o,
                        text: c
                    }
                })
            }, a.prototype.chatMessage = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, h) {
                    c.send("chat.message", o, (0, f.createCallback)(u, h))
                })
            }, a.prototype.chatClose = function(o) {
                o === void 0 && (o = null), this.checkServerVersion(), this.send("chat.close", {
                    type: o
                })
            }, a.prototype.chatUploadInit = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.upload_init", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.chatUploadFinish = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, h) {
                    c.send("chat.upload_finish", {
                        uploadToken: o
                    }, (0, f.createCallback)(u, h))
                })
            }, a.prototype.chatTranscript = function(o, c) {
                var u = this;
                return this.checkServerVersion(), new Promise(function(h, y) {
                    u.send("chat.transcript", {
                        email: o,
                        lang: c
                    }, (0, f.createCallback)(h, y))
                })
            }, a.prototype.chatRateInit = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.rate_init", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.chatRate = function(o) {
                var c = this;
                return this.checkServerVersion(), new Promise(function(u, h) {
                    c.send("chat.rate", o, (0, f.createCallback)(u, h))
                })
            }, a.prototype.chatTranscriptPdf = function() {
                var o = this;
                return this.checkServerVersion(), new Promise(function(c, u) {
                    o.send("chat.transcript_pdf", null, (0, f.createCallback)(c, u))
                })
            }, a.prototype.visitorConnect = function() {
                var o = this,
                    c = r({
                        version: a.CLIENT_VERSION
                    }, this.connectData);
                for (var u in this.updatedValues) c[u] = this.updatedValues[u];
                if (this.updatedValues = {}, this.identity)
                    for (var u in this.identity)["bannedAt", "chatId", "status"].includes(u) || (c[u] = this.identity[u]);
                return this.emitter.emit("initialize", c), new Promise(function(h, y) {
                    o.connection.emit("visitor.connect", c, (0, f.createCallback)(h, y))
                })
            }, a.prototype.visitorDisconnect = function() {
                var o = this;
                return new Promise(function(c, u) {
                    o.connection.emit("visitor.disconnect", {}, (0, f.createCallback)(c, u))
                })
            }, a.prototype.onVisitorUpdated = function(o) {
                var c = {};
                for (var u in o.changes) a.identityProperties.includes(u) && (this.identity && (this.identity[u] = o.changes[u]), c[u] = o.changes[u]);
                Object.getOwnPropertyNames(c).length > 0 && this.emitter.emit("visitor.updated", c)
            }, a.prototype.onServerError = function(o) {
                var c = (0, f.createSocketError)(o);
                this.emitter.emit("error", c)
            }, a.prototype.initialize = function() {
                var o = this;
                return this.visitorConnect().then(function(c) {
                    return o.serverVersion = c.serverVersion, o.identity = r(r({}, c.visitor), {
                        variables: r({}, c.visitor.variables)
                    }), c
                })
            }, a.prototype.saveVisitorValues = function() {
                var o = this;
                this.initialized && setTimeout(function() {
                    if (!(!o.initialized || Object.getOwnPropertyNames(o.updatedValues).length === 0)) {
                        var c = {};
                        for (var u in o.updatedValues) c[u] = o.updatedValues[u];
                        o.send("visitor.update", {
                            values: c
                        }), o.updatedValues = {}
                    }
                }, 1)
            }, a.prototype.checkServerVersion = function() {
                if (this.serverVersion === null) throw new Error("Client not yet connected to server")
            }, a.CLIENT_VERSION = 6, a.identityProperties = ["id", "name", "email", "phone", "chatId", "variables", "lang", "group", "bannedAt", "triggerable", "visits", "gdprApproved"], a
        }(l.default);
    e.WebsocketVisitorClient = p,
        function(d) {
            (function(a) {
                a.WidgetOpen = "widget_open", a.WidgetShow = "widget_show", a.VisitorActive = "visitor_active", a.VisitorInactive = "visitor_inactive"
            })(d.EventName || (d.EventName = {}))
        }(p = e.WebsocketVisitorClient || (e.WebsocketVisitorClient = {})), e.WebsocketVisitorClient = p
})(tn);
var On = {};
Object.defineProperty(On, "__esModule", {
    value: !0
});
var zn = {};
Object.defineProperty(zn, "__esModule", {
    value: !0
});
var T = {};
Object.defineProperty(T, "__esModule", {
    value: !0
});
T.MessageDeliveryFailReason = T.MessageDeliveryStatus = T.AgentDevicePlatform = T.AgentDeviceType = T.VisitorStatus = T.ChatReadInfoType = T.ChatStatus = T.AgentStatus = T.AccountStatus = void 0;
T.AccountStatus = {
    Online: "online",
    Offline: "offline"
};
T.AgentStatus = {
    Online: "online",
    Offline: "offline"
};
T.ChatStatus = {
    Pending: "pending",
    Open: "open",
    Closed: "closed",
    Served: "served"
};
T.ChatReadInfoType = {
    Agent: "agent",
    Contact: "contact"
};
T.VisitorStatus = {
    Active: "active",
    Clicked: "clicked",
    Idle: "idle",
    Served: "served",
    Unserved: "unserved",
    Triggered: "triggered"
};
T.AgentDeviceType = {
    Browser: "browser",
    Mobile: "mobile",
    Xmpp: "xmpp",
    Other: "other"
};
T.AgentDevicePlatform = {
    IOS: "ios",
    ANDROID: "android"
};
T.MessageDeliveryStatus = {
    Ok: "ok",
    PermanentFail: "permanent_fail",
    TemporaryFail: "temporary_fail",
    Complained: "complained",
    Seen: "seen"
};
T.MessageDeliveryFailReason = {
    Facebook24hWindow: "facebook.outside_allowed_window"
};
(function(e) {
    var t = B && B.__createBinding || (Object.create ? function(s, l, f, p) {
            p === void 0 && (p = f);
            var d = Object.getOwnPropertyDescriptor(l, f);
            (!d || ("get" in d ? !l.__esModule : d.writable || d.configurable)) && (d = {
                enumerable: !0,
                get: function() {
                    return l[f]
                }
            }), Object.defineProperty(s, p, d)
        } : function(s, l, f, p) {
            p === void 0 && (p = f), s[p] = l[f]
        }),
        r = B && B.__exportStar || function(s, l) {
            for (var f in s) f !== "default" && !Object.prototype.hasOwnProperty.call(l, f) && t(l, s, f)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.SocketError = e.default = void 0;
    var n = tn;
    Object.defineProperty(e, "default", {
        enumerable: !0,
        get: function() {
            return n.WebsocketVisitorClient
        }
    }), r(On, e), r(zn, e);
    var i = q;
    Object.defineProperty(e, "SocketError", {
        enumerable: !0,
        get: function() {
            return i.SocketError
        }
    }), r(T, e)
})(en);
const sc = Xt(en);
var ls = {},
    Tn = {};
Object.defineProperty(Tn, "__esModule", {
    value: !0
});
var at = {};
Object.defineProperty(at, "__esModule", {
    value: !0
});
at.CardsLayout = void 0;
at.CardsLayout = {
    Grid: "grid",
    Carousel: "carousel"
};
var Mn = {};
Object.defineProperty(Mn, "__esModule", {
    value: !0
});
var I = {};
Object.defineProperty(I, "__esModule", {
    value: !0
});
I.ChannelType = I.MessageSubType = I.MessageType = I.AttachmentInvalidReason = I.AttachmentType = I.MessageActionType = void 0;
I.MessageActionType = {
    Text: "text",
    OpenUrl: "open_url"
};
I.AttachmentType = {
    Card: "card",
    Cards: "cards",
    File: "file",
    Image: "image",
    Media: "media",
    Invalid: "invalid"
};
I.AttachmentInvalidReason = {
    InvalidSize: "invalid_size",
    InvalidType: "invalid_type"
};
I.MessageType = {
    Message: "message",
    Event: "event",
    Help: "help"
};
I.MessageSubType = {
    Agent: "agent",
    Contact: "contact",
    Trigger: "trigger",
    Bot: "bot",
    System: "system",
    AgentExternal: "agent_external",
    FoundEmail: "found_email",
    ChatResolve: "chat_resolve"
};
I.ChannelType = {
    Default: "default",
    Email: "email",
    FacebookMessenger: "facebook_messenger",
    Smartsupp: "smartsupp"
};
var Pn = {};
Object.defineProperty(Pn, "__esModule", {
    value: !0
});
var qn = {};
(function(e) {
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.MessageContentType = e.MessageContent = void 0;
    var t;
    (function(r) {
        (function(n) {
            n.Type = {
                Text: "text",
                Upload: "upload",
                RateForm: "rate_form"
            }
        })(r.Message || (r.Message = {})),
        function(n) {
            n.Type = {
                AgentJoin: "agent_join",
                AgentAssign: "agent_assign",
                AgentUnassign: "agent_unassign",
                AgentLeave: "agent_leave",
                ChatClose: "chat_close",
                ChatVisitorClose: "chat_visitor_close"
            }
        }(r.Event || (r.Event = {})),
        function(n) {
            n.Type = {
                Text: "text",
                FoundEmail: "found_email"
            }
        }(r.Help || (r.Help = {}))
    })(t = e.MessageContent || (e.MessageContent = {})), e.MessageContentType = { ...t.Message.Type,
        ...t.Event.Type,
        ...t.Help.Type
    }
})(qn);
var Nn = {};
Object.defineProperty(Nn, "__esModule", {
    value: !0
});
(function(e) {
    var t = B && B.__createBinding || (Object.create ? function(n, i, s, l) {
            l === void 0 && (l = s);
            var f = Object.getOwnPropertyDescriptor(i, s);
            (!f || ("get" in f ? !i.__esModule : f.writable || f.configurable)) && (f = {
                enumerable: !0,
                get: function() {
                    return i[s]
                }
            }), Object.defineProperty(n, l, f)
        } : function(n, i, s, l) {
            l === void 0 && (l = s), n[l] = i[s]
        }),
        r = B && B.__exportStar || function(n, i) {
            for (var s in n) s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && t(i, n, s)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(Tn, e), r(at, e), r(Mn, e), r(I, e), r(Pn, e), r(qn, e), r(Nn, e)
})(ls); /*! js-cookie v3.0.5 | MIT */
function je(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) e[n] = r[n]
    }
    return e
}
var hs = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function Mt(e, t) {
    function r(i, s, l) {
        if (!(typeof document > "u")) {
            l = je({}, t, l), typeof l.expires == "number" && (l.expires = new Date(Date.now() + l.expires * 864e5)), l.expires && (l.expires = l.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var f = "";
            for (var p in l) l[p] && (f += "; " + p, l[p] !== !0 && (f += "=" + l[p].split(";")[0]));
            return document.cookie = i + "=" + e.write(s, i) + f
        }
    }

    function n(i) {
        if (!(typeof document > "u" || arguments.length && !i)) {
            for (var s = document.cookie ? document.cookie.split("; ") : [], l = {}, f = 0; f < s.length; f++) {
                var p = s[f].split("="),
                    d = p.slice(1).join("=");
                try {
                    var a = decodeURIComponent(p[0]);
                    if (l[a] = e.read(d, a), i === a) break
                } catch {}
            }
            return i ? l[i] : l
        }
    }
    return Object.create({
        set: r,
        get: n,
        remove: function(i, s) {
            r(i, "", je({}, s, {
                expires: -1
            }))
        },
        withAttributes: function(i) {
            return Mt(this.converter, je({}, this.attributes, i))
        },
        withConverter: function(i) {
            return Mt(je({}, this.converter, i), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var ac = Mt(hs, {
        path: "/"
    }),
    ds = "sessionAccessId-";

function ps(e) {
    var t = void 0;
    return e && e.id && ~e.id.indexOf(ds) && (t = e.id), t
}
var gs = ps;

function ys(e) {
    if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r
    } else return Array.from(e)
}
var vs = gs,
    ms = "sessionAccessId-";

function _s() {
    return ms + Date.now()
}
var bs = function(t, r) {
    r = r || document.body;
    var n = void 0,
        i = {},
        s = [],
        l = !1,
        f = !0,
        p = void 0,
        d = !1,
        a = document.createElement("iframe");
    a.src = t, a.width = 0, a.height = 0, a.style.display = "none", a.onload = function() {
        d = !0
    };

    function o() {
        r.appendChild(a), n = a.contentWindow, f = !1, window.addEventListener("message", c), b()
    }
    o();

    function c(C) {
        var m = C.data,
            _ = vs(m);
        if (_ === "sessionAccessId-connected") {
            l = !0;
            return
        }
        if (m.connectError) {
            Object.keys(i).forEach(function(k) {
                return i[k](m.error)
            }), i = {};
            return
        }
        var w = i[_];
        _ && w && w(m.error, m.data)
    }

    function u() {
        clearTimeout(p), window.removeEventListener("message", c), a.parentNode.removeChild(a), l = !1, f = !0
    }

    function h(C, m, _, w) {
        f && o(), !l && C !== "connect" && s.push([C, m, _, w]);
        var k = _s();
        i && typeof w == "function" && (i[k] = w), d && n.postMessage({
            method: C,
            key: m,
            value: _,
            id: k
        }, t)
    }

    function y(C, m) {
        if (!m) throw new Error("callback required for get");
        h("get", C, null, m)
    }

    function g(C, m, _) {
        h("set", C, m, _)
    }

    function v(C, m) {
        h("remove", C, null, m)
    }

    function b() {
        if (l) {
            for (clearTimeout(p); s.length;) h.apply(void 0, ys(s.pop()));
            return
        }
        h("connect"), p = setTimeout(b, 125)
    }
    return {
        get: y,
        set: g,
        remove: v,
        close: u
    }
};
const Cs = bs;
var ws = Cs;
const cc = Xt(ws);
var sr = {},
    ks = B && B.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    };
Object.defineProperty(sr, "__esModule", {
    value: !0
});
var Fs = sr.FetchAdapter = void 0;
const xs = ks(wn);
class ar {
    constructor(t) {
        this.options = {}, this.options = t
    }
    async request(t, r, n, i, s) {
        const l = { ...this.options,
                ...s
            },
            f = i ? "?" + xs.default.stringify(i) : "";
        try {
            const p = await fetch(`${l.baseURL||""}${r}${f}`, {
                method: t,
                body: n ? JSON.stringify(n) : null,
                ...l
            });
            return {
                status: p.status,
                statusText: p.statusText,
                data: await p.json(),
                headers: [...p.headers.entries()].reduce((d, [a, o]) => (d[a] = o, d), {})
            }
        } catch (p) {
            throw p.isOpenApiError = !0, p
        }
    }
    withOptions(t) {
        return new ar(t)
    }
}
Fs = sr.FetchAdapter = ar;
var As = {},
    be = {};
Object.defineProperty(be, "__esModule", {
    value: !0
});
be.ProjectName = be.ErrorCode = void 0;
be.ErrorCode = {
    BadRequest: "bad_request",
    NotAllowed: "not_allowed",
    NotFound: "not_found",
    Forbidden: "forbidden",
    TooManyRequests: "too_many_requests",
    Unauthorized: "unauthorized",
    Unprocessable: "unprocessable"
};
be.ProjectName = {
    Widget: "widget",
    Chatbot: "chatbot"
};
var Ce = {},
    ce = {};
Object.defineProperty(ce, "__esModule", {
    value: !0
});
ce.TranslationsClientRaw = ce.TranslationsClient = void 0;
class Es {
    constructor(t) {
        this.adapter = t, this.raw = new jn(this.adapter)
    }
    getDefaults(t, r, n) {
        return this.adapter.request("get", `/${t}/translations/lang/${r}/defaults`, null, null, n).then(Ds)
    }
}
ce.TranslationsClient = Es;
class jn {
    constructor(t) {
        this.adapter = t
    }
    getDefaults(t, r, n) {
        return this.adapter.request("get", `/${t}/translations/lang/${r}/defaults`, null, null, n)
    }
}
ce.TranslationsClientRaw = jn;

function Ds(e) {
    return e.data
}
Object.defineProperty(Ce, "__esModule", {
    value: !0
});
Ce.SmartsuppTranslationsClientApi = void 0;
const Ss = ce;
class ct {
    constructor(t) {
        this.adapter = t, this.translations = new Ss.TranslationsClient(t)
    }
    withOptions(t) {
        return new ct(this.adapter.withOptions(t))
    }
}
Ce.SmartsuppTranslationsClientApi = ct;
Ce.default = ct;
(function(e) {
    var t = B && B.__createBinding || (Object.create ? function(i, s, l, f) {
            f === void 0 && (f = l);
            var p = Object.getOwnPropertyDescriptor(s, l);
            (!p || ("get" in p ? !s.__esModule : p.writable || p.configurable)) && (p = {
                enumerable: !0,
                get: function() {
                    return s[l]
                }
            }), Object.defineProperty(i, f, p)
        } : function(i, s, l, f) {
            f === void 0 && (f = l), i[f] = s[l]
        }),
        r = B && B.__exportStar || function(i, s) {
            for (var l in i) l !== "default" && !Object.prototype.hasOwnProperty.call(s, l) && t(s, i, l)
        };
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), r(be, e), r(Ce, e), r(ce, e);
    const n = Ce;
    e.default = n.SmartsuppTranslationsClientApi
})(As);
var vt, Sr;

function Bs() {
    return Sr || (Sr = 1, vt = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), vt
}
var mt, Br;

function Rs() {
    return Br || (Br = 1, mt = /[\0-\x1F\x7F-\x9F]/), mt
}
var _t, Rr;

function $s() {
    return Rr || (Rr = 1, _t = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), _t
}
var bt, $r;

function Os() {
    return $r || ($r = 1, bt = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/), bt
}
var Ct, Or;

function zs() {
    return Or || (Or = 1, Ct = function(e) {
        var t = {};
        e = e || {}, t.src_Any = Bs().source, t.src_Cc = Rs().source, t.src_Z = $s().source, t.src_P = Os().source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
        var r = "[><｜]";
        return t.src_pseudo_letter = "(?:(?!" + r + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + r + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t
    }), Ct
}

function Pt(e) {
    var t = Array.prototype.slice.call(arguments, 1);
    return t.forEach(function(r) {
        r && Object.keys(r).forEach(function(n) {
            e[n] = r[n]
        })
    }), e
}

function ut(e) {
    return Object.prototype.toString.call(e)
}

function Ts(e) {
    return ut(e) === "[object String]"
}

function Ms(e) {
    return ut(e) === "[object Object]"
}

function Ps(e) {
    return ut(e) === "[object RegExp]"
}

function zr(e) {
    return ut(e) === "[object Function]"
}

function qs(e) {
    return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
}
var In = {
    fuzzyLink: !0,
    fuzzyEmail: !0,
    fuzzyIP: !1
};

function Ns(e) {
    return Object.keys(e || {}).reduce(function(t, r) {
        return t || In.hasOwnProperty(r)
    }, !1)
}
var js = {
        "http:": {
            validate: function(e, t, r) {
                var n = e.slice(t);
                return r.re.http || (r.re.http = new RegExp("^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path, "i")), r.re.http.test(n) ? n.match(r.re.http)[0].length : 0
            }
        },
        "https:": "http:",
        "ftp:": "http:",
        "//": {
            validate: function(e, t, r) {
                var n = e.slice(t);
                return r.re.no_http || (r.re.no_http = new RegExp("^" + r.re.src_auth + "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path, "i")), r.re.no_http.test(n) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : n.match(r.re.no_http)[0].length : 0
            }
        },
        "mailto:": {
            validate: function(e, t, r) {
                var n = e.slice(t);
                return r.re.mailto || (r.re.mailto = new RegExp("^" + r.re.src_email_name + "@" + r.re.src_host_strict, "i")), r.re.mailto.test(n) ? n.match(r.re.mailto)[0].length : 0
            }
        }
    },
    Is = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",
    Ls = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");

function Us(e) {
    e.__index__ = -1, e.__text_cache__ = ""
}

function Hs(e) {
    return function(t, r) {
        var n = t.slice(r);
        return e.test(n) ? n.match(e)[0].length : 0
    }
}

function Tr() {
    return function(e, t) {
        t.normalize(e)
    }
}

function Qe(e) {
    var t = e.re = zs()(e.__opts__),
        r = e.__tlds__.slice();
    e.onCompile(), e.__tlds_replaced__ || r.push(Is), r.push(t.src_xn), t.src_tlds = r.join("|");

    function n(f) {
        return f.replace("%TLDS%", t.src_tlds)
    }
    t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i");
    var i = [];
    e.__compiled__ = {};

    function s(f, p) {
        throw new Error('(LinkifyIt) Invalid schema "' + f + '": ' + p)
    }
    Object.keys(e.__schemas__).forEach(function(f) {
        var p = e.__schemas__[f];
        if (p !== null) {
            var d = {
                validate: null,
                link: null
            };
            if (e.__compiled__[f] = d, Ms(p)) {
                Ps(p.validate) ? d.validate = Hs(p.validate) : zr(p.validate) ? d.validate = p.validate : s(f, p), zr(p.normalize) ? d.normalize = p.normalize : p.normalize ? s(f, p) : d.normalize = Tr();
                return
            }
            if (Ts(p)) {
                i.push(f);
                return
            }
            s(f, p)
        }
    }), i.forEach(function(f) {
        e.__compiled__[e.__schemas__[f]] && (e.__compiled__[f].validate = e.__compiled__[e.__schemas__[f]].validate, e.__compiled__[f].normalize = e.__compiled__[e.__schemas__[f]].normalize)
    }), e.__compiled__[""] = {
        validate: null,
        normalize: Tr()
    };
    var l = Object.keys(e.__compiled__).filter(function(f) {
        return f.length > 0 && e.__compiled__[f]
    }).map(qs).join("|");
    e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + l + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp("(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@", "i"), Us(e)
}

function Vs(e, t) {
    var r = e.__index__,
        n = e.__last_index__,
        i = e.__text_cache__.slice(r, n);
    this.schema = e.__schema__.toLowerCase(), this.index = r + t, this.lastIndex = n + t, this.raw = i, this.text = i, this.url = i
}

function qt(e, t) {
    var r = new Vs(e, t);
    return e.__compiled__[r.schema].normalize(r, e), r
}

function H(e, t) {
    if (!(this instanceof H)) return new H(e, t);
    t || Ns(e) && (t = e, e = {}), this.__opts__ = Pt({}, In, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Pt({}, js, e), this.__compiled__ = {}, this.__tlds__ = Ls, this.__tlds_replaced__ = !1, this.re = {}, Qe(this)
}
H.prototype.add = function(t, r) {
    return this.__schemas__[t] = r, Qe(this), this
};
H.prototype.set = function(t) {
    return this.__opts__ = Pt(this.__opts__, t), this
};
H.prototype.test = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return !1;
    var r, n, i, s, l, f, p, d, a;
    if (this.re.schema_test.test(t)) {
        for (p = this.re.schema_search, p.lastIndex = 0;
            (r = p.exec(t)) !== null;)
            if (s = this.testSchemaAt(t, r[2], p.lastIndex), s) {
                this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + s;
                break
            }
    }
    return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (d = t.search(this.re.host_fuzzy_test), d >= 0 && (this.__index__ < 0 || d < this.__index__) && (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (l = n.index + n[1].length, (this.__index__ < 0 || l < this.__index__) && (this.__schema__ = "", this.__index__ = l, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (a = t.indexOf("@"), a >= 0 && (i = t.match(this.re.email_fuzzy)) !== null && (l = i.index + i[1].length, f = i.index + i[0].length, (this.__index__ < 0 || l < this.__index__ || l === this.__index__ && f > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = l, this.__last_index__ = f))), this.__index__ >= 0
};
H.prototype.pretest = function(t) {
    return this.re.pretest.test(t)
};
H.prototype.testSchemaAt = function(t, r, n) {
    return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(t, n, this) : 0
};
H.prototype.match = function(t) {
    var r = 0,
        n = [];
    this.__index__ >= 0 && this.__text_cache__ === t && (n.push(qt(this, r)), r = this.__last_index__);
    for (var i = r ? t.slice(r) : t; this.test(i);) n.push(qt(this, r)), i = i.slice(this.__last_index__), r += this.__last_index__;
    return n.length ? n : null
};
H.prototype.matchAtStart = function(t) {
    if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
    var r = this.re.schema_at_start.exec(t);
    if (!r) return null;
    var n = this.testSchemaAt(t, r[2], r[0].length);
    return n ? (this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + n, qt(this, 0)) : null
};
H.prototype.tlds = function(t, r) {
    return t = Array.isArray(t) ? t : [t], r ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, i, s) {
        return n !== s[i - 1]
    }).reverse(), Qe(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Qe(this), this)
};
H.prototype.normalize = function(t) {
    t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url)
};
H.prototype.onCompile = function() {};
var Ws = H;
const uc = Xt(Ws),
    fc = ["aaa", "aarp", "abb", "abbott", "abbvie", "abc", "able", "abogado", "abudhabi", "ac", "academy", "accenture", "accountant", "accountants", "aco", "actor", "ad", "ads", "adult", "ae", "aeg", "aero", "aetna", "af", "afl", "africa", "ag", "agakhan", "agency", "ai", "aig", "airbus", "airforce", "airtel", "akdn", "al", "alibaba", "alipay", "allfinanz", "allstate", "ally", "alsace", "alstom", "am", "amazon", "americanexpress", "americanfamily", "amex", "amfam", "amica", "amsterdam", "analytics", "android", "anquan", "anz", "ao", "aol", "apartments", "app", "apple", "aq", "aquarelle", "ar", "arab", "aramco", "archi", "army", "arpa", "art", "arte", "as", "asda", "asia", "associates", "at", "athleta", "attorney", "au", "auction", "audi", "audible", "audio", "auspost", "author", "auto", "autos", "avianca", "aw", "aws", "ax", "axa", "az", "azure", "ba", "baby", "baidu", "banamex", "bananarepublic", "band", "bank", "bar", "barcelona", "barclaycard", "barclays", "barefoot", "bargains", "baseball", "basketball", "bauhaus", "bayern", "bb", "bbc", "bbt", "bbva", "bcg", "bcn", "bd", "be", "beats", "beauty", "beer", "bentley", "berlin", "best", "bestbuy", "bet", "bf", "bg", "bh", "bharti", "bi", "bible", "bid", "bike", "bing", "bingo", "bio", "biz", "bj", "black", "blackfriday", "blockbuster", "blog", "bloomberg", "blue", "bm", "bms", "bmw", "bn", "bnpparibas", "bo", "boats", "boehringer", "bofa", "bom", "bond", "boo", "book", "booking", "bosch", "bostik", "boston", "bot", "boutique", "box", "br", "bradesco", "bridgestone", "broadway", "broker", "brother", "brussels", "bs", "bt", "build", "builders", "business", "buy", "buzz", "bv", "bw", "by", "bz", "bzh", "ca", "cab", "cafe", "cal", "call", "calvinklein", "cam", "camera", "camp", "canon", "capetown", "capital", "capitalone", "car", "caravan", "cards", "care", "career", "careers", "cars", "casa", "case", "cash", "casino", "cat", "catering", "catholic", "cba", "cbn", "cbre", "cbs", "cc", "cd", "center", "ceo", "cern", "cf", "cfa", "cfd", "cg", "ch", "chanel", "channel", "charity", "chase", "chat", "cheap", "chintai", "christmas", "chrome", "church", "ci", "cipriani", "circle", "cisco", "citadel", "citi", "citic", "city", "cityeats", "ck", "cl", "claims", "cleaning", "click", "clinic", "clinique", "clothing", "cloud", "club", "clubmed", "cm", "cn", "co", "coach", "codes", "coffee", "college", "cologne", "com", "comcast", "commbank", "community", "company", "compare", "computer", "comsec", "condos", "construction", "consulting", "contact", "contractors", "cooking", "cool", "coop", "corsica", "country", "coupon", "coupons", "courses", "cpa", "cr", "credit", "creditcard", "creditunion", "cricket", "crown", "crs", "cruise", "cruises", "cu", "cuisinella", "cv", "cw", "cx", "cy", "cymru", "cyou", "cz", "dabur", "dad", "dance", "data", "date", "dating", "datsun", "day", "dclk", "dds", "de", "deal", "dealer", "deals", "degree", "delivery", "dell", "deloitte", "delta", "democrat", "dental", "dentist", "desi", "design", "dev", "dhl", "diamonds", "diet", "digital", "direct", "directory", "discount", "discover", "dish", "diy", "dj", "dk", "dm", "dnp", "do", "docs", "doctor", "dog", "domains", "dot", "download", "drive", "dtv", "dubai", "dunlop", "dupont", "durban", "dvag", "dvr", "dz", "earth", "eat", "ec", "eco", "edeka", "edu", "education", "ee", "eg", "email", "emerck", "energy", "engineer", "engineering", "enterprises", "epson", "equipment", "er", "ericsson", "erni", "es", "esq", "estate", "et", "etisalat", "eu", "eurovision", "eus", "events", "exchange", "expert", "exposed", "express", "extraspace", "fage", "fail", "fairwinds", "faith", "family", "fan", "fans", "farm", "farmers", "fashion", "fast", "fedex", "feedback", "ferrari", "ferrero", "fi", "fidelity", "fido", "film", "final", "finance", "financial", "fire", "firestone", "firmdale", "fish", "fishing", "fit", "fitness", "fj", "fk", "flickr", "flights", "flir", "florist", "flowers", "fly", "fm", "fo", "foo", "food", "football", "ford", "forex", "forsale", "forum", "foundation", "fox", "fr", "free", "fresenius", "frl", "frogans", "frontdoor", "frontier", "ftr", "fujitsu", "fun", "fund", "furniture", "futbol", "fyi", "ga", "gal", "gallery", "gallo", "gallup", "game", "games", "gap", "garden", "gay", "gb", "gbiz", "gd", "gdn", "ge", "gea", "gent", "genting", "george", "gf", "gg", "ggee", "gh", "gi", "gift", "gifts", "gives", "giving", "gl", "glass", "gle", "global", "globo", "gm", "gmail", "gmbh", "gmo", "gmx", "gn", "godaddy", "gold", "goldpoint", "golf", "goo", "goodyear", "goog", "google", "gop", "got", "gov", "gp", "gq", "gr", "grainger", "graphics", "gratis", "green", "gripe", "grocery", "group", "gs", "gt", "gu", "guardian", "gucci", "guge", "guide", "guitars", "guru", "gw", "gy", "hair", "hamburg", "hangout", "haus", "hbo", "hdfc", "hdfcbank", "health", "healthcare", "help", "helsinki", "here", "hermes", "hiphop", "hisamitsu", "hitachi", "hiv", "hk", "hkt", "hm", "hn", "hockey", "holdings", "holiday", "homedepot", "homegoods", "homes", "homesense", "honda", "horse", "hospital", "host", "hosting", "hot", "hoteles", "hotels", "hotmail", "house", "how", "hr", "hsbc", "ht", "hu", "hughes", "hyatt", "hyundai", "ibm", "icbc", "ice", "icu", "id", "ie", "ieee", "ifm", "ikano", "il", "im", "imamat", "imdb", "immo", "immobilien", "in", "inc", "industries", "infiniti", "info", "ing", "ink", "institute", "insurance", "insure", "int", "international", "intuit", "investments", "io", "ipiranga", "iq", "ir", "irish", "is", "ismaili", "ist", "istanbul", "it", "itau", "itv", "jaguar", "java", "jcb", "je", "jeep", "jetzt", "jewelry", "jio", "jll", "jm", "jmp", "jnj", "jo", "jobs", "joburg", "jot", "joy", "jp", "jpmorgan", "jprs", "juegos", "juniper", "kaufen", "kddi", "ke", "kerryhotels", "kerrylogistics", "kerryproperties", "kfh", "kg", "kh", "ki", "kia", "kids", "kim", "kinder", "kindle", "kitchen", "kiwi", "km", "kn", "koeln", "komatsu", "kosher", "kp", "kpmg", "kpn", "kr", "krd", "kred", "kuokgroup", "kw", "ky", "kyoto", "kz", "la", "lacaixa", "lamborghini", "lamer", "lancaster", "land", "landrover", "lanxess", "lasalle", "lat", "latino", "latrobe", "law", "lawyer", "lb", "lc", "lds", "lease", "leclerc", "lefrak", "legal", "lego", "lexus", "lgbt", "li", "lidl", "life", "lifeinsurance", "lifestyle", "lighting", "like", "lilly", "limited", "limo", "lincoln", "link", "lipsy", "live", "living", "lk", "llc", "llp", "loan", "loans", "locker", "locus", "lol", "london", "lotte", "lotto", "love", "lpl", "lplfinancial", "lr", "ls", "lt", "ltd", "ltda", "lu", "lundbeck", "luxe", "luxury", "lv", "ly", "ma", "madrid", "maif", "maison", "makeup", "man", "management", "mango", "map", "market", "marketing", "markets", "marriott", "marshalls", "mattel", "mba", "mc", "mckinsey", "md", "me", "med", "media", "meet", "melbourne", "meme", "memorial", "men", "menu", "merckmsd", "mg", "mh", "miami", "microsoft", "mil", "mini", "mint", "mit", "mitsubishi", "mk", "ml", "mlb", "mls", "mm", "mma", "mn", "mo", "mobi", "mobile", "moda", "moe", "moi", "mom", "monash", "money", "monster", "mormon", "mortgage", "moscow", "moto", "motorcycles", "mov", "movie", "mp", "mq", "mr", "ms", "msd", "mt", "mtn", "mtr", "mu", "museum", "music", "mutual", "mv", "mw", "mx", "my", "mz", "na", "nab", "nagoya", "name", "natura", "navy", "nba", "nc", "ne", "nec", "net", "netbank", "netflix", "network", "neustar", "new", "news", "next", "nextdirect", "nexus", "nf", "nfl", "ng", "ngo", "nhk", "ni", "nico", "nike", "nikon", "ninja", "nissan", "nissay", "nl", "no", "nokia", "northwesternmutual", "norton", "now", "nowruz", "nowtv", "np", "nr", "nra", "nrw", "ntt", "nu", "nyc", "nz", "obi", "observer", "office", "okinawa", "olayan", "olayangroup", "oldnavy", "ollo", "om", "omega", "one", "ong", "onl", "online", "ooo", "open", "oracle", "orange", "org", "organic", "origins", "osaka", "otsuka", "ott", "ovh", "pa", "page", "panasonic", "paris", "pars", "partners", "parts", "party", "passagens", "pay", "pccw", "pe", "pet", "pf", "pfizer", "pg", "ph", "pharmacy", "phd", "philips", "phone", "photo", "photography", "photos", "physio", "pics", "pictet", "pictures", "pid", "pin", "ping", "pink", "pioneer", "pizza", "pk", "pl", "place", "play", "playstation", "plumbing", "plus", "pm", "pn", "pnc", "pohl", "poker", "politie", "porn", "post", "pr", "pramerica", "praxi", "press", "prime", "pro", "prod", "productions", "prof", "progressive", "promo", "properties", "property", "protection", "pru", "prudential", "ps", "pt", "pub", "pw", "pwc", "py", "qa", "qpon", "quebec", "quest", "racing", "radio", "re", "read", "realestate", "realtor", "realty", "recipes", "red", "redstone", "redumbrella", "rehab", "reise", "reisen", "reit", "reliance", "ren", "rent", "rentals", "repair", "report", "republican", "rest", "restaurant", "review", "reviews", "rexroth", "rich", "richardli", "ricoh", "ril", "rio", "rip", "ro", "rocher", "rocks", "rodeo", "rogers", "room", "rs", "rsvp", "ru", "rugby", "ruhr", "run", "rw", "rwe", "ryukyu", "sa", "saarland", "safe", "safety", "sakura", "sale", "salon", "samsclub", "samsung", "sandvik", "sandvikcoromant", "sanofi", "sap", "sarl", "sas", "save", "saxo", "sb", "sbi", "sbs", "sc", "sca", "scb", "schaeffler", "schmidt", "scholarships", "school", "schule", "schwarz", "science", "scot", "sd", "se", "search", "seat", "secure", "security", "seek", "select", "sener", "services", "seven", "sew", "sex", "sexy", "sfr", "sg", "sh", "shangrila", "sharp", "shaw", "shell", "shia", "shiksha", "shoes", "shop", "shopping", "shouji", "show", "showtime", "si", "silk", "sina", "singles", "site", "sj", "sk", "ski", "skin", "sky", "skype", "sl", "sling", "sm", "smart", "smile", "sn", "sncf", "so", "soccer", "social", "softbank", "software", "sohu", "solar", "solutions", "song", "sony", "soy", "spa", "space", "sport", "spot", "sr", "srl", "ss", "st", "stada", "staples", "star", "statebank", "statefarm", "stc", "stcgroup", "stockholm", "storage", "store", "stream", "studio", "study", "style", "su", "sucks", "supplies", "supply", "support", "surf", "surgery", "suzuki", "sv", "swatch", "swiss", "sx", "sy", "sydney", "systems", "sz", "tab", "taipei", "talk", "taobao", "target", "tatamotors", "tatar", "tattoo", "tax", "taxi", "tc", "tci", "td", "tdk", "team", "tech", "technology", "tel", "temasek", "tennis", "teva", "tf", "tg", "th", "thd", "theater", "theatre", "tiaa", "tickets", "tienda", "tiffany", "tips", "tires", "tirol", "tj", "tjmaxx", "tjx", "tk", "tkmaxx", "tl", "tm", "tmall", "tn", "to", "today", "tokyo", "tools", "top", "toray", "toshiba", "total", "tours", "town", "toyota", "toys", "tr", "trade", "trading", "training", "travel", "travelers", "travelersinsurance", "trust", "trv", "tt", "tube", "tui", "tunes", "tushu", "tv", "tvs", "tw", "tz", "ua", "ubank", "ubs", "ug", "uk", "unicom", "university", "uno", "uol", "ups", "us", "uy", "uz", "va", "vacations", "vana", "vanguard", "vc", "ve", "vegas", "ventures", "verisign", "vermögensberater", "vermögensberatung", "versicherung", "vet", "vg", "vi", "viajes", "video", "vig", "viking", "villas", "vin", "vip", "virgin", "visa", "vision", "viva", "vivo", "vlaanderen", "vn", "vodka", "volkswagen", "volvo", "vote", "voting", "voto", "voyage", "vu", "vuelos", "wales", "walmart", "walter", "wang", "wanggou", "watch", "watches", "weather", "weatherchannel", "webcam", "weber", "website", "wed", "wedding", "weibo", "weir", "wf", "whoswho", "wien", "wiki", "williamhill", "win", "windows", "wine", "winners", "wme", "wolterskluwer", "woodside", "work", "works", "world", "wow", "ws", "wtc", "wtf", "xbox", "xerox", "xfinity", "xihuan", "xin", "xxx", "xyz", "yachts", "yahoo", "yamaxun", "yandex", "ye", "yodobashi", "yoga", "yokohama", "you", "youtube", "yt", "yun", "za", "zappos", "zara", "zero", "zip", "zm", "zone", "zuerich", "zw", "ελ", "ευ", "бг", "бел", "дети", "ею", "католик", "ком", "мкд", "мон", "москва", "онлайн", "орг", "рус", "рф", "сайт", "срб", "укр", "қаз", "հայ", "ישראל", "קום", "ابوظبي", "اتصالات", "ارامكو", "الاردن", "البحرين", "الجزائر", "السعودية", "العليان", "المغرب", "امارات", "ایران", "بارت", "بازار", "بيتك", "بھارت", "تونس", "سودان", "سورية", "شبكة", "عراق", "عرب", "عمان", "فلسطين", "قطر", "كاثوليك", "كوم", "مصر", "مليسيا", "موريتانيا", "موقع", "همراه", "پاکستان", "ڀارت", "कॉम", "नेट", "भारत", "भारतम्", "भारोत", "संगठन", "বাংলা", "ভারত", "ভাৰত", "ਭਾਰਤ", "ભારત", "ଭାରତ", "இந்தியா", "இலங்கை", "சிங்கப்பூர்", "భారత్", "ಭಾರತ", "ഭാരതം", "ලංකා", "คอม", "ไทย", "ລາວ", "გე", "みんな", "アマゾン", "クラウド", "グーグル", "コム", "ストア", "セール", "ファッション", "ポイント", "世界", "中信", "中国", "中國", "中文网", "亚马逊", "企业", "佛山", "信息", "健康", "八卦", "公司", "公益", "台湾", "台灣", "商城", "商店", "商标", "嘉里", "嘉里大酒店", "在线", "大拿", "天主教", "娱乐", "家電", "广东", "微博", "慈善", "我爱你", "手机", "招聘", "政务", "政府", "新加坡", "新闻", "时尚", "書籍", "机构", "淡马锡", "游戏", "澳門", "点看", "移动", "组织机构", "网址", "网店", "网站", "网络", "联通", "谷歌", "购物", "通販", "集团", "電訊盈科", "飞利浦", "食品", "餐厅", "香格里拉", "香港", "닷넷", "닷컴", "삼성", "한국"];

function N(e, t) {
    Xs(e) && (e = "100%");
    var r = Zs(e);
    return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), r && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e)
}

function Ie(e) {
    return Math.min(1, Math.max(0, e))
}

function Xs(e) {
    return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1
}

function Zs(e) {
    return typeof e == "string" && e.indexOf("%") !== -1
}

function Ln(e) {
    return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}

function Le(e) {
    return e <= 1 ? "".concat(Number(e) * 100, "%") : e
}

function se(e) {
    return e.length === 1 ? "0" + e : String(e)
}

function Js(e, t, r) {
    return {
        r: N(e, 255) * 255,
        g: N(t, 255) * 255,
        b: N(r, 255) * 255
    }
}

function Mr(e, t, r) {
    e = N(e, 255), t = N(t, 255), r = N(r, 255);
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        s = 0,
        l = 0,
        f = (n + i) / 2;
    if (n === i) l = 0, s = 0;
    else {
        var p = n - i;
        switch (l = f > .5 ? p / (2 - n - i) : p / (n + i), n) {
            case e:
                s = (t - r) / p + (t < r ? 6 : 0);
                break;
            case t:
                s = (r - e) / p + 2;
                break;
            case r:
                s = (e - t) / p + 4;
                break
        }
        s /= 6
    }
    return {
        h: s,
        s: l,
        l: f
    }
}

function wt(e, t, r) {
    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * (6 * r) : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
}

function Gs(e, t, r) {
    var n, i, s;
    if (e = N(e, 360), t = N(t, 100), r = N(r, 100), t === 0) i = r, s = r, n = r;
    else {
        var l = r < .5 ? r * (1 + t) : r + t - r * t,
            f = 2 * r - l;
        n = wt(f, l, e + 1 / 3), i = wt(f, l, e), s = wt(f, l, e - 1 / 3)
    }
    return {
        r: n * 255,
        g: i * 255,
        b: s * 255
    }
}

function Pr(e, t, r) {
    e = N(e, 255), t = N(t, 255), r = N(r, 255);
    var n = Math.max(e, t, r),
        i = Math.min(e, t, r),
        s = 0,
        l = n,
        f = n - i,
        p = n === 0 ? 0 : f / n;
    if (n === i) s = 0;
    else {
        switch (n) {
            case e:
                s = (t - r) / f + (t < r ? 6 : 0);
                break;
            case t:
                s = (r - e) / f + 2;
                break;
            case r:
                s = (e - t) / f + 4;
                break
        }
        s /= 6
    }
    return {
        h: s,
        s: p,
        v: l
    }
}

function Ks(e, t, r) {
    e = N(e, 360) * 6, t = N(t, 100), r = N(r, 100);
    var n = Math.floor(e),
        i = e - n,
        s = r * (1 - t),
        l = r * (1 - i * t),
        f = r * (1 - (1 - i) * t),
        p = n % 6,
        d = [r, l, s, s, f, r][p],
        a = [f, r, r, l, s, s][p],
        o = [s, s, f, r, r, l][p];
    return {
        r: d * 255,
        g: a * 255,
        b: o * 255
    }
}

function qr(e, t, r, n) {
    var i = [se(Math.round(e).toString(16)), se(Math.round(t).toString(16)), se(Math.round(r).toString(16))];
    return n && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
}

function Ys(e, t, r, n, i) {
    var s = [se(Math.round(e).toString(16)), se(Math.round(t).toString(16)), se(Math.round(r).toString(16)), se(Qs(n))];
    return i && s[0].startsWith(s[0].charAt(1)) && s[1].startsWith(s[1].charAt(1)) && s[2].startsWith(s[2].charAt(1)) && s[3].startsWith(s[3].charAt(1)) ? s[0].charAt(0) + s[1].charAt(0) + s[2].charAt(0) + s[3].charAt(0) : s.join("")
}

function Qs(e) {
    return Math.round(parseFloat(e) * 255).toString(16)
}

function Nr(e) {
    return U(e) / 255
}

function U(e) {
    return parseInt(e, 16)
}

function ea(e) {
    return {
        r: e >> 16,
        g: (e & 65280) >> 8,
        b: e & 255
    }
}
var Nt = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    goldenrod: "#daa520",
    gold: "#ffd700",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavenderblush: "#fff0f5",
    lavender: "#e6e6fa",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function ta(e) {
    var t = {
            r: 0,
            g: 0,
            b: 0
        },
        r = 1,
        n = null,
        i = null,
        s = null,
        l = !1,
        f = !1;
    return typeof e == "string" && (e = ia(e)), typeof e == "object" && (G(e.r) && G(e.g) && G(e.b) ? (t = Js(e.r, e.g, e.b), l = !0, f = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : G(e.h) && G(e.s) && G(e.v) ? (n = Le(e.s), i = Le(e.v), t = Ks(e.h, n, i), l = !0, f = "hsv") : G(e.h) && G(e.s) && G(e.l) && (n = Le(e.s), s = Le(e.l), t = Gs(e.h, n, s), l = !0, f = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (r = e.a)), r = Ln(r), {
        ok: l,
        format: e.format || f,
        r: Math.min(255, Math.max(t.r, 0)),
        g: Math.min(255, Math.max(t.g, 0)),
        b: Math.min(255, Math.max(t.b, 0)),
        a: r
    }
}
var ra = "[-\\+]?\\d+%?",
    na = "[-\\+]?\\d*\\.\\d+%?",
    ne = "(?:".concat(na, ")|(?:").concat(ra, ")"),
    kt = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"),
    Ft = "[\\s|\\(]+(".concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")[,|\\s]+(").concat(ne, ")\\s*\\)?"),
    W = {
        CSS_UNIT: new RegExp(ne),
        rgb: new RegExp("rgb" + kt),
        rgba: new RegExp("rgba" + Ft),
        hsl: new RegExp("hsl" + kt),
        hsla: new RegExp("hsla" + Ft),
        hsv: new RegExp("hsv" + kt),
        hsva: new RegExp("hsva" + Ft),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };

function ia(e) {
    if (e = e.trim().toLowerCase(), e.length === 0) return !1;
    var t = !1;
    if (Nt[e]) e = Nt[e], t = !0;
    else if (e === "transparent") return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
    };
    var r = W.rgb.exec(e);
    return r ? {
        r: r[1],
        g: r[2],
        b: r[3]
    } : (r = W.rgba.exec(e), r ? {
        r: r[1],
        g: r[2],
        b: r[3],
        a: r[4]
    } : (r = W.hsl.exec(e), r ? {
        h: r[1],
        s: r[2],
        l: r[3]
    } : (r = W.hsla.exec(e), r ? {
        h: r[1],
        s: r[2],
        l: r[3],
        a: r[4]
    } : (r = W.hsv.exec(e), r ? {
        h: r[1],
        s: r[2],
        v: r[3]
    } : (r = W.hsva.exec(e), r ? {
        h: r[1],
        s: r[2],
        v: r[3],
        a: r[4]
    } : (r = W.hex8.exec(e), r ? {
        r: U(r[1]),
        g: U(r[2]),
        b: U(r[3]),
        a: Nr(r[4]),
        format: t ? "name" : "hex8"
    } : (r = W.hex6.exec(e), r ? {
        r: U(r[1]),
        g: U(r[2]),
        b: U(r[3]),
        format: t ? "name" : "hex"
    } : (r = W.hex4.exec(e), r ? {
        r: U(r[1] + r[1]),
        g: U(r[2] + r[2]),
        b: U(r[3] + r[3]),
        a: Nr(r[4] + r[4]),
        format: t ? "name" : "hex8"
    } : (r = W.hex3.exec(e), r ? {
        r: U(r[1] + r[1]),
        g: U(r[2] + r[2]),
        b: U(r[3] + r[3]),
        format: t ? "name" : "hex"
    } : !1)))))))))
}

function G(e) {
    return !!W.CSS_UNIT.exec(String(e))
}
var lc = function() {
    function e(t, r) {
        t === void 0 && (t = ""), r === void 0 && (r = {});
        var n;
        if (t instanceof e) return t;
        typeof t == "number" && (t = ea(t)), this.originalInput = t;
        var i = ta(t);
        this.originalInput = t, this.r = i.r, this.g = i.g, this.b = i.b, this.a = i.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = r.format) !== null && n !== void 0 ? n : i.format, this.gradientType = r.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = i.ok
    }
    return e.prototype.isDark = function() {
        return this.getBrightness() < 128
    }, e.prototype.isLight = function() {
        return !this.isDark()
    }, e.prototype.getBrightness = function() {
        var t = this.toRgb();
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
    }, e.prototype.getLuminance = function() {
        var t = this.toRgb(),
            r, n, i, s = t.r / 255,
            l = t.g / 255,
            f = t.b / 255;
        return s <= .03928 ? r = s / 12.92 : r = Math.pow((s + .055) / 1.055, 2.4), l <= .03928 ? n = l / 12.92 : n = Math.pow((l + .055) / 1.055, 2.4), f <= .03928 ? i = f / 12.92 : i = Math.pow((f + .055) / 1.055, 2.4), .2126 * r + .7152 * n + .0722 * i
    }, e.prototype.getAlpha = function() {
        return this.a
    }, e.prototype.setAlpha = function(t) {
        return this.a = Ln(t), this.roundA = Math.round(100 * this.a) / 100, this
    }, e.prototype.isMonochrome = function() {
        var t = this.toHsl().s;
        return t === 0
    }, e.prototype.toHsv = function() {
        var t = Pr(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            v: t.v,
            a: this.a
        }
    }, e.prototype.toHsvString = function() {
        var t = Pr(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            i = Math.round(t.v * 100);
        return this.a === 1 ? "hsv(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsva(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHsl = function() {
        var t = Mr(this.r, this.g, this.b);
        return {
            h: t.h * 360,
            s: t.s,
            l: t.l,
            a: this.a
        }
    }, e.prototype.toHslString = function() {
        var t = Mr(this.r, this.g, this.b),
            r = Math.round(t.h * 360),
            n = Math.round(t.s * 100),
            i = Math.round(t.l * 100);
        return this.a === 1 ? "hsl(".concat(r, ", ").concat(n, "%, ").concat(i, "%)") : "hsla(".concat(r, ", ").concat(n, "%, ").concat(i, "%, ").concat(this.roundA, ")")
    }, e.prototype.toHex = function(t) {
        return t === void 0 && (t = !1), qr(this.r, this.g, this.b, t)
    }, e.prototype.toHexString = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex(t)
    }, e.prototype.toHex8 = function(t) {
        return t === void 0 && (t = !1), Ys(this.r, this.g, this.b, this.a, t)
    }, e.prototype.toHex8String = function(t) {
        return t === void 0 && (t = !1), "#" + this.toHex8(t)
    }, e.prototype.toHexShortString = function(t) {
        return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
    }, e.prototype.toRgb = function() {
        return {
            r: Math.round(this.r),
            g: Math.round(this.g),
            b: Math.round(this.b),
            a: this.a
        }
    }, e.prototype.toRgbString = function() {
        var t = Math.round(this.r),
            r = Math.round(this.g),
            n = Math.round(this.b);
        return this.a === 1 ? "rgb(".concat(t, ", ").concat(r, ", ").concat(n, ")") : "rgba(".concat(t, ", ").concat(r, ", ").concat(n, ", ").concat(this.roundA, ")")
    }, e.prototype.toPercentageRgb = function() {
        var t = function(r) {
            return "".concat(Math.round(N(r, 255) * 100), "%")
        };
        return {
            r: t(this.r),
            g: t(this.g),
            b: t(this.b),
            a: this.a
        }
    }, e.prototype.toPercentageRgbString = function() {
        var t = function(r) {
            return Math.round(N(r, 255) * 100)
        };
        return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")")
    }, e.prototype.toName = function() {
        if (this.a === 0) return "transparent";
        if (this.a < 1) return !1;
        for (var t = "#" + qr(this.r, this.g, this.b, !1), r = 0, n = Object.entries(Nt); r < n.length; r++) {
            var i = n[r],
                s = i[0],
                l = i[1];
            if (t === l) return s
        }
        return !1
    }, e.prototype.toString = function(t) {
        var r = !!t;
        t = t ? ? this.format;
        var n = !1,
            i = this.a < 1 && this.a >= 0,
            s = !r && i && (t.startsWith("hex") || t === "name");
        return s ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (n = this.toRgbString()), t === "prgb" && (n = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (n = this.toHexString()), t === "hex3" && (n = this.toHexString(!0)), t === "hex4" && (n = this.toHex8String(!0)), t === "hex8" && (n = this.toHex8String()), t === "name" && (n = this.toName()), t === "hsl" && (n = this.toHslString()), t === "hsv" && (n = this.toHsvString()), n || this.toHexString())
    }, e.prototype.toNumber = function() {
        return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b)
    }, e.prototype.clone = function() {
        return new e(this.toString())
    }, e.prototype.lighten = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.l += t / 100, r.l = Ie(r.l), new e(r)
    }, e.prototype.brighten = function(t) {
        t === void 0 && (t = 10);
        var r = this.toRgb();
        return r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(t / 100)))), r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(t / 100)))), r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(t / 100)))), new e(r)
    }, e.prototype.darken = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.l -= t / 100, r.l = Ie(r.l), new e(r)
    }, e.prototype.tint = function(t) {
        return t === void 0 && (t = 10), this.mix("white", t)
    }, e.prototype.shade = function(t) {
        return t === void 0 && (t = 10), this.mix("black", t)
    }, e.prototype.desaturate = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.s -= t / 100, r.s = Ie(r.s), new e(r)
    }, e.prototype.saturate = function(t) {
        t === void 0 && (t = 10);
        var r = this.toHsl();
        return r.s += t / 100, r.s = Ie(r.s), new e(r)
    }, e.prototype.greyscale = function() {
        return this.desaturate(100)
    }, e.prototype.spin = function(t) {
        var r = this.toHsl(),
            n = (r.h + t) % 360;
        return r.h = n < 0 ? 360 + n : n, new e(r)
    }, e.prototype.mix = function(t, r) {
        r === void 0 && (r = 50);
        var n = this.toRgb(),
            i = new e(t).toRgb(),
            s = r / 100,
            l = {
                r: (i.r - n.r) * s + n.r,
                g: (i.g - n.g) * s + n.g,
                b: (i.b - n.b) * s + n.b,
                a: (i.a - n.a) * s + n.a
            };
        return new e(l)
    }, e.prototype.analogous = function(t, r) {
        t === void 0 && (t = 6), r === void 0 && (r = 30);
        var n = this.toHsl(),
            i = 360 / r,
            s = [this];
        for (n.h = (n.h - (i * t >> 1) + 720) % 360; --t;) n.h = (n.h + i) % 360, s.push(new e(n));
        return s
    }, e.prototype.complement = function() {
        var t = this.toHsl();
        return t.h = (t.h + 180) % 360, new e(t)
    }, e.prototype.monochromatic = function(t) {
        t === void 0 && (t = 6);
        for (var r = this.toHsv(), n = r.h, i = r.s, s = r.v, l = [], f = 1 / t; t--;) l.push(new e({
            h: n,
            s: i,
            v: s
        })), s = (s + f) % 1;
        return l
    }, e.prototype.splitcomplement = function() {
        var t = this.toHsl(),
            r = t.h;
        return [this, new e({
            h: (r + 72) % 360,
            s: t.s,
            l: t.l
        }), new e({
            h: (r + 216) % 360,
            s: t.s,
            l: t.l
        })]
    }, e.prototype.onBackground = function(t) {
        var r = this.toRgb(),
            n = new e(t).toRgb(),
            i = r.a + n.a * (1 - r.a);
        return new e({
            r: (r.r * r.a + n.r * n.a * (1 - r.a)) / i,
            g: (r.g * r.a + n.g * n.a * (1 - r.a)) / i,
            b: (r.b * r.a + n.b * n.a * (1 - r.a)) / i,
            a: i
        })
    }, e.prototype.triad = function() {
        return this.polyad(3)
    }, e.prototype.tetrad = function() {
        return this.polyad(4)
    }, e.prototype.polyad = function(t) {
        for (var r = this.toHsl(), n = r.h, i = [this], s = 360 / t, l = 1; l < t; l++) i.push(new e({
            h: (n + l * s) % 360,
            s: r.s,
            l: r.l
        }));
        return i
    }, e.prototype.equals = function(t) {
        return this.toRgbString() === new e(t).toRgbString()
    }, e
}();
typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: new Set
})).v.add(fi);

function cr(e) {
    const t = e - 1;
    return t * t * t + 1
}

function hc(e, {
    delay: t = 0,
    duration: r = 400,
    easing: n = et
} = {}) {
    const i = +getComputedStyle(e).opacity;
    return {
        delay: t,
        duration: r,
        easing: n,
        css: s => `opacity: ${s*i}`
    }
}

function dc(e, {
    delay: t = 0,
    duration: r = 400,
    easing: n = cr,
    x: i = 0,
    y: s = 0,
    opacity: l = 0
} = {}) {
    const f = getComputedStyle(e),
        p = +f.opacity,
        d = f.transform === "none" ? "" : f.transform,
        a = p * (1 - l),
        [o, c] = fr(i),
        [u, h] = fr(s);
    return {
        delay: t,
        duration: r,
        easing: n,
        css: (y, g) => `
			transform: ${d} translate(${(1-y)*o}${c}, ${(1-y)*u}${h});
			opacity: ${p-a*g}`
    }
}

function pc(e, {
    delay: t = 0,
    duration: r = 400,
    easing: n = cr,
    axis: i = "y"
} = {}) {
    const s = getComputedStyle(e),
        l = +s.opacity,
        f = i === "y" ? "height" : "width",
        p = parseFloat(s[f]),
        d = i === "y" ? ["top", "bottom"] : ["left", "right"],
        a = d.map(v => `${v[0].toUpperCase()}${v.slice(1)}`),
        o = parseFloat(s[`padding${a[0]}`]),
        c = parseFloat(s[`padding${a[1]}`]),
        u = parseFloat(s[`margin${a[0]}`]),
        h = parseFloat(s[`margin${a[1]}`]),
        y = parseFloat(s[`border${a[0]}Width`]),
        g = parseFloat(s[`border${a[1]}Width`]);
    return {
        delay: t,
        duration: r,
        easing: n,
        css: v => `overflow: hidden;opacity: ${Math.min(v*20,1)*l};${f}: ${v*p}px;padding-${d[0]}: ${v*o}px;padding-${d[1]}: ${v*c}px;margin-${d[0]}: ${v*u}px;margin-${d[1]}: ${v*h}px;border-${d[0]}-width: ${v*y}px;border-${d[1]}-width: ${v*g}px;`
    }
}

function gc(e, {
    delay: t = 0,
    duration: r = 400,
    easing: n = cr,
    start: i = 0,
    opacity: s = 0
} = {}) {
    const l = getComputedStyle(e),
        f = +l.opacity,
        p = l.transform === "none" ? "" : l.transform,
        d = 1 - i,
        a = f * (1 - s);
    return {
        delay: t,
        duration: r,
        easing: n,
        css: (o, c) => `
			transform: ${p} scale(${1-d*c});
			opacity: ${f-a*c}
		`
    }
}
export {
    Oa as $, L as A, ca as B, La as C, Yn as D, Ca as E, Fs as F, Ha as G, Va as H, rc as I, ai as J, ci as K, _e as L, Za as M, gc as N, Wr as O, ba as P, Ea as Q, wa as R, ic as S, lc as T, Sa as U, sc as V, ma as W, Wa as X, Xa as Y, dc as Z, hc as _, ac as a, Ta as a0, ga as a1, ue as a2, ya as a3, Vn as a4, Aa as a5, Qa as a6, da as a7, xa as a8, Fa as a9, pa as aa, Ia as ab, K as ac, sa as ad, qa as ae, Da as af, tc as ag, ec as ah, Ua as ai, Ra as aj, Ba as ak, $a as al, Ja as am, Ya as an, Ka as ao, ka as ap, pc as aq, jt as ar, ja as as, Na as at, va as au, _a as av, Ga as aw, cr as ax, za as ay, As as b, cc as c, oc as d, ls as e, uc as f, aa as g, ua as h, nc as i, Vr as j, Xr as k, en as l, Kn as m, Zn as n, Ma as o, ha as p, fa as q, Yr as r, Wn as s, fc as t, la as u, si as v, hi as w, Ht as x, Pa as y, lr as z
};
//# sourceMappingURL=vendor-886017d2.js.map