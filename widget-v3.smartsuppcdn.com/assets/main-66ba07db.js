import {
    w as C,
    g as f,
    d as A,
    a as Ds,
    c as gr,
    b as Bs,
    F as fr,
    l as X,
    V as En,
    e as M,
    f as xs,
    t as Gs,
    o as Ge,
    T as at,
    S as N,
    i as U,
    s as B,
    h as Gt,
    j as T,
    k as p,
    m as $,
    n as w,
    u as Nt,
    p as Ut,
    q as Vt,
    r as m,
    v as h,
    x as I,
    y as Ns,
    z as it,
    A as Q,
    B as q,
    C as pr,
    D as un,
    E as we,
    G as le,
    H as ue,
    I as O,
    J as F,
    K as k,
    L as ve,
    M as tt,
    N as nt,
    O as zt,
    P as x,
    Q as Wt,
    R as Fe,
    U as G,
    W as bt,
    X as ct,
    Y as lt,
    Z as pe,
    _ as mr,
    $ as Y,
    a0 as kt,
    a1 as hr,
    a2 as br,
    a3 as Xe,
    a4 as st,
    a5 as cs,
    a6 as Us,
    a7 as dn,
    a8 as ls,
    a9 as Mn,
    aa as us,
    ab as Ze,
    ac as On,
    ad as $t
} from "./vendor-886017d2.js";
var Vs = (e => (e[e.Good = 5] = "Good", e[e.Normal = 3] = "Normal", e[e.Bad = 1] = "Bad", e))(Vs || {});
const yr = {
        5: {
            value: 5,
            text: "agentRating.good.formText",
            name: "good"
        },
        3: {
            value: 3,
            text: "agentRating.normal.formText",
            name: "neutral"
        },
        1: {
            value: 1,
            text: "agentRating.bad.formText",
            name: "bad"
        }
    },
    fp = Object.values(yr).sort((e, t) => t.value - e.value),
    zs = C(null),
    Ws = C(null),
    _r = C(!1),
    Fn = C([]),
    wr = e => {
        Fn.update(t => [...t, e])
    },
    Cr = () => {
        let e;
        return Fn.update(t => (e = t.pop(), t)), e ? ? null
    },
    vr = () => f(Fn).length === 0,
    kn = (e, {
        useStack: t = !1
    } = {}) => {
        Ws.update(n => (t && n && wr(n), _r.set(n !== null), e))
    },
    Hs = () => {
        let e = null;
        vr() || (e = Cr()), Ws.set(e)
    };
var Ht = (e => (e[e.Options = 0] = "Options", e[e.GdprAndPrivacy = 1] = "GdprAndPrivacy", e[e.AuthForm = 2] = "AuthForm", e[e.CloseChat = 3] = "CloseChat", e[e.ChatRating = 4] = "ChatRating", e))(Ht || {});
const Sr = () => {
        const e = C({}),
            {
                subscribe: t,
                update: n
            } = e;
        return {
            subscribe: t,
            add: a => {
                n(c => ({ ...c,
                    [a.id]: a
                }))
            },
            remove: a => {
                n(c => {
                    const {
                        [a]: i, ...l
                    } = c;
                    return l
                })
            },
            find: a => f(e)[a] || null
        }
    },
    It = Sr(),
    pp = A([It], ([e]) => Object.values(e)),
    $n = e => (t, n = 3e3) => {
        const s = `fm-${e}-${t}`,
            o = It.find(s);
        let r = 1;
        o && (clearTimeout(o.timeout), r = o.recurrence + 1);
        let a;
        return n > 0 && (a = window.setTimeout(() => {
            ds(s)
        }, n)), It.add({
            id: s,
            type: e,
            text: t,
            timeout: a,
            recurrence: r
        }), () => ds(s)
    },
    ds = e => {
        It.remove(e)
    },
    mp = $n("success"),
    Oe = $n("error"),
    Lt = $n("warning"),
    Ar = () => {
        const {
            subscribe: e,
            update: t
        } = C(new Set);
        return {
            subscribe: e,
            hideRepliesByMessageId: s => {
                t(o => o.add(s))
            }
        }
    },
    Tr = Ar(),
    hp = 500,
    bp = 1e3,
    yp = Symbol("contentListItem"),
    _p = Symbol("contentMessageAttachment"),
    wp = "-replies",
    Er = .35,
    Mr = 5e3,
    Or = "default",
    In = (e, t) => {
        const n = {};
        for (const s of t) {
            const o = String(s[e]);
            n[o] = s
        }
        return n
    },
    Fr = () => {
        const e = C({}),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setGroups: o => {
                n(In("key", o))
            }
        }
    },
    Ln = Fr(),
    js = A([Ln], ([e]) => Object.values(e)),
    qs = e => (t, ...n) => {
        e(`[Smartsupp] ${t}`, ...n)
    },
    H = qs(console.warn),
    oe = qs(console.error),
    kr = "data-smartsupp-id",
    Tt = () => window.top ? ? window.parent,
    ee = () => window.parent,
    Pe = () => ee().document,
    Cp = e => e && e.ownerDocument || document,
    $r = ({
        vid: e
    }) => {
        const t = ee().smartsupp || {};
        t.vid = e, ee().smartsupp = t
    },
    Ir = "debug",
    Lr = e => {
        try {
            const t = ee().localStorage.getItem(Ir);
            if (!t) return !1;
            if (t === e || t === "*") return !0;
            const n = e.match(/^\w+:/g);
            return n ? t === `${n[0]}*` : !1
        } catch {
            return !1
        }
    },
    Rr = (e, t) => (n, ...s) => {
        Lr(e) && console.debug(`%c${e}`, `color: ${t};`, n, ...s)
    },
    Z = Rr("smartsupp:widget", "#1233df"),
    Pr = () => {
        let e = null;
        const t = [];
        return Object.freeze({
            init: r => {
                e = r, Z("widget options", r), t.forEach(a => a(r))
            },
            getOptions: () => {
                if (!e) throw new Error("Widget options not initialized");
                return e
            },
            awaitOptions: async () => e || new Promise(r => {
                t.push(r)
            })
        })
    },
    E = Pr(),
    Rn = e => {
        const n = e.document.getElementsByTagName("body")[0].getAttribute(kr);
        if (!n) throw new Error("Missing chat ID attribute on body element.");
        if (!e.parent.$smartsupp) throw new Error("Something went wrong. Seems like loader.js did not initialize widget.");
        if (!e.parent.$smartsupp.getWidget) throw new Error("Get widget function was not supplied by loader.js.");
        return e.parent.$smartsupp.getWidget(n)
    },
    re = {
        authFormDrawer: "authFormDrawer",
        authFormPrivacyNotice: "authFormPrivacyNotice",
        authFormPrivacyNoticeSwitch: "authFormPrivacyNoticeSwitch",
        authFormSubmitButton: "authFormSubmitButton",
        avatarAgent: "avatarAgent",
        avatarBot: "avatarBot",
        avatarGroup: "avatarGroup",
        avatarInfo: "avatarInfo",
        buttonAttachment: "buttonAttachment",
        buttonCloseChat: "buttonCloseChat",
        buttonCloseDrawer: "buttonCloseDrawer",
        buttonCollapseChat: "buttonCollapseChat",
        buttonEmoji: "buttonEmoji",
        buttonExpandChat: "buttonExpandChat",
        buttonMinimizeChat: "buttonMinimizeChat",
        buttonOptions: "buttonOptions",
        buttonSend: "buttonSend",
        chatRatingDrawer: "chatRatingDrawer",
        chatRatingEmojiButton: "chatRatingEmoji",
        chatRatingSendButton: "chatRatingSendButton",
        chatRatingTextarea: "chatRatingTextarea",
        chatRatingFeedbackButton: "chatRatingFeedbackButton",
        closeChatConfirmButton: "closeChatConfirmButton",
        closeChatDeclineButton: "closeChatDeclineButton",
        closeChatDrawer: "closeChatDrawer",
        flashMessage: "flashMessage",
        gdprDrawer: "gdprDrawer",
        headerTitle: "headerTitle",
        headerStatus: "headerStatus",
        headerBadge: "headerBadge",
        messageAgent: "messageAgent",
        messageBot: "messageBot",
        messageBotReply: "messageBotReply",
        messageBotBack: "messageBotBack",
        messageContact: "messageContact",
        messageFile: "messageFile",
        messageGroup: "messageGroup",
        messageImage: "messageImage",
        optionsDrawer: "optionsDrawer",
        optionsFeedback: "optionsFeedback",
        optionsPrivacyNotice: "optionsPrivacyNotice",
        optionsSounds: "optionsSounds",
        optionsTranscript: "optionsTranscript",
        systemMessage: "systemMessage",
        textarea: "textarea",
        textareaPreviewFile: "textareaPreviewFile",
        textareaPreviewImage: "textareaPreviewImage",
        transcriptInput: "transcriptInput",
        transcriptSendButton: "transcriptSend",
        widgetButton: "widgetButton",
        widgetButtonFrame: "widgetButtonFrame",
        widgetButtonText: "widgetButtontext",
        widgetImagePreview: "widgetImagePreview",
        widgetMessenger: "widgetMessenger",
        widgetMessengerFrame: "widgetMessengerFrame",
        widgetOnlineBadge: "widgetOnlineBadge",
        widgetPopupFrame: "widgetPopupFrame",
        widgetTypingFrame: "widgetTypingFrame",
        widgetUnreadMessagesBadge: "widgetUnreadMessagesBadge",
        widgetHeader: "widgetHeader"
    },
    vp = "https://www.smartsupp.com",
    Sp = "/powered-by-smartsupp",
    Ap = ["cs", "es", "fr", "hu", "it", "de", "nl", "pl"],
    Dr = "3.0",
    Tp = "https://www.smartsupp.com/my-data-and-gdpr",
    Br = () => {
        const e = new Map;
        return Object.freeze({
            on: (o, r) => {
                const a = e.get(o);
                a ? a.push(r) : e.set(o, [r])
            },
            off: (o, r) => {
                const a = e.get(o);
                a && e.set(o, a.filter(c => c !== r))
            },
            emit: (o, r) => {
                const a = e.get(o);
                a && a.forEach(c => c(r))
            }
        })
    },
    W = Br(),
    gn = "ssupp",
    Ks = 182,
    xr = (e = Ks) => ({
        expires: e,
        domain: E.getOptions().cookieDomain,
        path: E.getOptions().cookiePath || "/",
        sameSite: "strict",
        secure: ee().location.protocol === "https:"
    }),
    Ys = e => `${E.getOptions().cookiePrefix||""}${gn}.${e}`,
    Gr = ({
        name: e,
        value: t,
        expirationInDays: n = Ks,
        options: s
    }) => {
        Ds.set(Ys(e), t, { ...xr(n),
            ...s
        })
    },
    Nr = e => Ds.get(Ys(e)),
    Ur = () => {
        const {
            key: e
        } = E.getOptions();
        return `${ee().SMARTSUPP_AUTOCREATE!==!1?gn:`${Rn(window).id}_${gn}`}_${e}`
    },
    Xs = e => `${Ur()}${e?`_${e}`:""}`,
    jt = e => {
        try {
            const t = window.localStorage.getItem(Xs(e)) ? ? "{}";
            return JSON.parse(t)
        } catch {
            return {}
        }
    },
    Pn = (e, t) => {
        try {
            window.localStorage.setItem(Xs(t), JSON.stringify(e))
        } catch (n) {
            H("Set to local storage failed", n)
        }
    },
    Vr = (e, t) => {
        const s = { ...jt(),
            [e]: String(t)
        };
        Pn(s)
    },
    Js = e => {
        const t = jt();
        t[e] && (delete t[e], Pn(t))
    };
var z = (e => (e.AnalyticsConsent = "analyticsConsent", e.AuthForm = "authForm", e.IsMessengerFrameExpanded = "isMessengerFrameExpanded", e.IsMessengerFrameOpened = "opened", e.MarketingConsent = "marketingConsent", e.Message = "message", e.RatingText = "ratingText", e.SoundsEnabled = "enableSounds", e.VisitorId = "vid", e.Visits = "visits", e.SessionId = "sessionId", e))(z || {});
const _e = e => {
        let t = "";
        return e === z.VisitorId && E.getOptions().cookieDomain && (t = Nr(e)), t || jt()[e]
    },
    $e = ({
        name: e,
        value: t
    }) => {
        e === z.VisitorId && E.getOptions().cookieDomain && Gr({
            name: e,
            value: t
        }), Vr(e, t)
    },
    zr = e => {
        Js(e)
    };
W.on("analyticsConsentChanged", e => {
    $e({
        name: z.AnalyticsConsent,
        value: String(e)
    })
});
W.on("marketingConsentChanged", e => {
    $e({
        name: z.MarketingConsent,
        value: String(e)
    })
});
const Dn = () => !!E.getOptions().consentModeEnabled,
    Bn = () => {
        const e = _e(z.AnalyticsConsent) === "true";
        return !(Dn() && !e)
    },
    Zs = () => {
        const e = _e(z.MarketingConsent) === "true";
        return !(Dn() && !e)
    },
    Wr = () => {
        const {
            storageUrl: e,
            key: t
        } = E.getOptions();
        if (!e) throw new Error("Storage url is missing");
        return `${e.replace(/{key}/g,t)}/index.html`
    },
    Hr = () => {
        let e = null;
        return Object.freeze({
            getStorage: () => {
                if (e) return e;
                try {
                    const s = Wr();
                    return e = gr(s), Z("cross domain storage created", s), e
                } catch {
                    throw new Error("Cross domain storage create failed")
                }
            },
            closeStorage: () => {
                e && (e.close(), Z("cross domain storage closed"))
            }
        })
    },
    xn = Hr(),
    jr = e => {
        const t = xn.getStorage();
        return new Promise((n, s) => {
            t.get(e, (o, r) => o ? s(o) : (Z("get from cross domain storage", e, r), n(r)))
        })
    },
    qr = (e, t) => {
        const n = xn.getStorage();
        return new Promise((s, o) => {
            n.set(e, t, r => r ? o(r) : (Z("set to cross domain storage", e, t), s()))
        })
    },
    Kr = () => {
        xn.closeStorage()
    },
    Qs = () => !!E.getOptions().crossDomainEnabled,
    Yr = async () => Qs() ? jr(z.VisitorId) : _e(z.VisitorId) || null,
    Xr = async e => Qs() ? qr(z.VisitorId, String(e)) : $e({
        name: z.VisitorId,
        value: String(e)
    }),
    Jr = () => {
        if (Zs()) return _e(z.Visits) ? Number(_e(z.Visits)) : 0
    },
    Zr = e => {
        Zs() && $e({
            name: z.Visits,
            value: String(e)
        })
    };
W.on("marketingConsentChanged", e => {
    e || zr(z.Visits)
});
const eo = (e, t, n) => {
        const {
            set: s,
            subscribe: o
        } = C(t, a => {
            const c = _e(e);
            c && a(n ? n(c) : c)
        }), r = a => {
            $e({
                name: e,
                value: String(a)
            })
        };
        return {
            set: a => {
                r(a), s(a)
            },
            subscribe: o
        }
    },
    Gn = C(!1),
    gs = eo(z.SessionId, ""),
    Qr = () => {
        const {
            protocol: e,
            host: t
        } = E.getOptions();
        return `${e==="http"?"http":"https"}://${t}`
    },
    ea = async () => {
        try {
            return await Yr()
        } catch (e) {
            return H(String(e)), null
        }
    },
    ta = async e => {
        try {
            await Xr(e), Kr()
        } catch (t) {
            H(String(t))
        }
    },
    na = async () => {
        const {
            key: e,
            lang: t,
            isPreviewMode: n,
            sitePlatform: s,
            triggerable: o,
            _chatMaxReopenTime: r
        } = E.getOptions(), a = await ea(), c = f(ss);
        return {
            key: e,
            id: a,
            isPreviewMode: n,
            sitePlatform: s,
            triggerable: o,
            _chatMaxReopenTime: r,
            name: c.name,
            email: c.email,
            phone: c.phone,
            group: c.group,
            lang: c.language ? ? t,
            variables: c.variables,
            widgetVersion: Dr,
            visits: Jr(),
            isWidgetVisible: f(Ie),
            isWidgetOpen: f(ae),
            pageUrl: Tt().location.href,
            pageTitle: Tt().document.title,
            domain: Tt().location.hostname || "unknown",
            referer: Tt().document.referrer,
            bundleVersion: "b4ae2ce0c8a5c74b8291ac1ada4a8faa8ade4824"
        }
    },
    sa = (e, t) => {
        f(ae) && !e && t !== f(gs) && ae.set(!1), gs.set(t)
    },
    Et = () => "ontouchstart" in window || navigator.msMaxTouchPoints > 0,
    oa = () => ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document,
    ra = 450,
    aa = 500,
    qt = C(null),
    ia = C({
        width: ee().innerWidth,
        height: ee().innerHeight
    }),
    Ne = A([qt, ia], ([e, t]) => {
        if (e) {
            const {
                isMobile: n,
                isTablet: s
            } = e;
            if (s) return !1;
            if (n) return !0
        }
        return t.width < ra || t.height < aa
    }),
    ca = A([qt], ([e]) => !!(e != null && e.isDesktop) && !oa());
A([qt], ([e]) => !!(e != null && e.isTablet));
const la = () => {
        const e = C(),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            initialize: o => n(o)
        }
    },
    Nn = la(),
    ft = 5,
    ua = "FILE",
    Ep = 2e3,
    Mp = e => e.split("/")[0] === "image",
    Op = e => !!e.match(/^video\/(?:mp4|webm|ogg){1}$/);
async function da(e) {
    if (!FileReader) return oe("FileReader not supported"), null;
    const t = new FileReader;
    return new Promise(n => {
        t.onload = () => {
            if (!t.result) {
                n(null);
                return
            }
            let s;
            typeof t.result == "string" ? s = t.result : s = t.result.toString(), s.startsWith("data:image") || (s = null), n(s)
        }, t.onerror = () => {
            oe("Failed to load image data"), n(null)
        }, t.readAsDataURL(e)
    })
}
async function ga(e) {
    return new Promise(t => {
        const n = document.createElement("img");
        n.onload = () => {
            t({
                width: n.width,
                height: n.height
            })
        }, n.onerror = () => {
            oe("Failed to obtain image dimensions"), t(null)
        }, n.src = e
    })
}

function fa(e) {
    return {
        horizontal: e.width > e.height,
        vertical: e.height > e.width
    }
}
const pa = "ar",
    ma = "az",
    ha = "bg",
    ba = "br",
    ya = "bs",
    _a = "ca",
    wa = "cn",
    Ca = "cs",
    va = "da",
    Sa = "de",
    Aa = "el",
    to = "en",
    Ta = "es",
    Ea = "fa",
    Ma = "fi",
    Oa = "fil",
    Fa = "fr",
    ka = "he",
    $a = "hi",
    Ia = "hr",
    La = "hu",
    Ra = "is",
    Pa = "it",
    Da = "ja",
    Ba = "ka",
    xa = "lt",
    Ga = "lv",
    Na = "mk",
    Ua = "nl",
    Va = "no",
    za = "pl",
    Wa = "pt",
    Ha = "ro",
    ja = "ru",
    qa = "sk",
    Ka = "sl",
    Ya = "sr",
    Xa = "sv",
    Ja = "th",
    Za = "tr",
    Qa = "tw",
    ei = "uk",
    no = to,
    ti = [pa, ma, ha, ba, ya, _a, wa, Ca, va, Sa, Aa, to, Ta, Ea, Ma, Oa, Fa, ka, $a, Ia, La, Ra, Pa, Da, Ba, xa, Ga, Na, Ua, Va, za, Wa, Ha, ja, qa, Ka, Ya, Xa, Ja, Za, Qa, ei],
    so = e => ti.includes(e),
    ni = e => so(e) ? e : no,
    si = () => {
        const {
            lang: e
        } = E.getOptions(), {
            language: t
        } = f(ss);
        return ni(t ? ? e)
    };

function oi() {
    return new Bs.TranslationsClient(new fr({
        baseURL: `${E.getOptions().translationsBaseUrl}/api/v1`
    }))
}
const ri = async e => oi().getDefaults(Bs.ProjectName.Widget, e),
    ai = (e, t) => {
        const {
            translates: n
        } = E.getOptions();
        return { ...e,
            ...n[t] && n[t]
        }
    },
    yt = C(no),
    ot = C({}),
    oo = async e => {
        try {
            const t = await ri(e),
                n = ai(t, e);
            ot.update(s => ({ ...s,
                [e]: n
            }))
        } catch {
            oe(`Fetch translations of '${e}' language failed.`)
        }
    },
    ii = async e => {
        f(ot)[e] || await oo(e), yt.set(e)
    },
    ci = async () => {
        const e = si();
        yt.set(e), await oo(e)
    },
    li = e => {
        const t = f(yt),
            s = { ...f(ot)[t],
                ...e
            };
        ot.update(o => ({ ...o,
            [t]: s
        }))
    },
    ui = (e, t, n) => {
        var a;
        const s = f(ot),
            o = `|${t}|`;
        if (Object.keys(s).length === 0) return o;
        let r = ((a = s[e]) == null ? void 0 : a[t]) || o;
        return Object.keys(n).map(c => {
            const i = new RegExp(`{${c}}`, "g");
            r = r.replace(i, n[c])
        }), r
    },
    te = A([yt, ot], ([e]) => (t, n = {}) => ui(e, t, n)),
    di = () => {
        const e = C([]),
            {
                subscribe: t,
                update: n
            } = e,
            s = () => f(e).map(_ => _.file),
            o = (_, y) => (y || f(e)).find(L => L.file.name === _) || null,
            r = _ => ({
                file: _,
                preview: {},
                previewState: "none",
                uploadStatus: "none"
            }),
            a = _ => {
                const y = Array.isArray(_) ? _ : [_];
                n(L => L.length + y.length > ft ? (Oe(`${f(te)("fileUpload.tooManyFiles")} ${ft}`), L) : [...L, ...y.map(r)]), S(y)
            },
            c = _ => {
                n(y => y.filter(L => L.file !== _))
            },
            i = () => f(e).length,
            l = () => i() >= ft,
            u = () => e.set([]),
            d = () => {
                e.update(_ => (_.forEach(y => y.uploadStatus = "in-progress"), _))
            },
            g = _ => {
                e.update(y => {
                    const L = o(_, y);
                    return L && (L.uploadStatus = "done"), y
                })
            },
            b = _ => {
                var y;
                return ((y = o(_.name)) == null ? void 0 : y.previewState) !== "none"
            },
            S = _ => {
                _.forEach(y => void v(y))
            },
            v = async _ => {
                if (b(_)) return;
                const y = await da(_),
                    L = y ? await ga(y) : null,
                    j = L ? fa(L) : null;
                e.update(ie => {
                    const D = o(_.name, ie);
                    return D ? (D.previewState = "ready", D.preview = {
                        data: y,
                        dimensions: L,
                        orientation: j
                    }, [...ie]) : ie
                })
            };
        return {
            subscribe: t,
            getFiles: s,
            find: o,
            add: a,
            remove: c,
            count: i,
            isLimitReached: l,
            clear: u,
            setUploadingStatus: d,
            setFileUploaded: g
        }
    },
    De = di(),
    gi = () => {
        const e = [];
        return Object.freeze({
            push: s => {
                e.push(s)
            },
            executeAll: () => {
                for (; e.length > 0;) {
                    const s = e.shift();
                    s && s()
                }
            }
        })
    },
    _t = gi(),
    fi = e => {
        var n, s;
        Z("init data", e), Gn.set(!0), sa(e.chat, e.sessionId);
        const t = e.visitor.id;
        ta(t), Zr(e.visitor.visits), me.setVisitorData(e.visitor), $r({
            vid: t
        }), Nn.initialize(e.fileUpload), qt.set(e.browser), ke.setAgents(e.account.agents), ((n = e.chat) == null ? void 0 : n.virtualAgent) !== void 0 && ke.setVirtualAgent((s = e.chat) == null ? void 0 : s.virtualAgent), Ln.setGroups(e.account.groups), Ve.set(e.account.status), e.chat && (he.set(e.chat.status), wt(e.chat.isClosed), Kt.set(e.chat.unreadInfo.lastReadAt), V.setMessages(e.chat.messages), Ue.setAssignedAgentIds(e.chat.assignedIds ? ? []), e.chat.widgetOptions && ut.updateGeneralOptions(e.chat.widgetOptions)), ge.set(!0), _t.executeAll()
    },
    pi = e => {
        console.error(e)
    },
    mi = () => {
        Gn.set(!1)
    },
    hi = () => {
        he.set(X.ChatStatus.Open)
    },
    bi = () => {
        he.set(X.ChatStatus.Served), wt(!1)
    },
    yi = ({
        message: e
    }) => {
        e.content.data.closeType === "agent_close" && (Ql(), Ue.setAssignedAgentIds([]), he.set(X.ChatStatus.Closed), V.addMessage(e), W.emit("chatClosed", e))
    },
    _i = ({
        message: e
    }) => {
        wt(!0, {
            byVisitor: !0
        }), V.addMessage(e), W.emit("chatVisitorClosed", e)
    },
    wi = ({
        changes: e
    }) => {
        e.widgetOptions && ut.updateGeneralOptions(e.widgetOptions), e.isClosed !== void 0 && wt(e.isClosed), e.virtualAgent !== void 0 && ke.setVirtualAgent(e.virtualAgent)
    },
    Ci = ({
        message: e
    }) => {
        co.set(!1);
        const t = f(Hu) && Wn(e);
        !f(ae) && Yt(e) && !t ? ql(e) : V.addMessage(e), ko(), e.widgetOptions && ut.setMessageOptions(e.widgetOptions), t && Zt(), W.emit("messageReceived", e)
    },
    vi = ({
        message: e
    }) => {
        V.replaceMessage(e), e.widgetOptions && e.id === f(To) && ut.setMessageOptions(e.widgetOptions)
    },
    Si = ({
        message: e,
        agent: t
    }) => {
        Ue.addAssignedAgentId(e.content.data.agentId), V.addMessage(e), W.emit("agentJoined", t)
    },
    Ai = ({
        message: e
    }) => {
        Ue.removeAssignedAgentId(e.content.data.agentId), V.addMessage(e)
    },
    Ti = ({
        message: e
    }) => {
        Ue.addAssignedAgentId(e.content.data.assigned), V.addMessage(e)
    },
    Ei = ({
        message: e
    }) => {
        Ue.removeAssignedAgentId(e.content.data.unassigned), V.addMessage(e)
    },
    Mi = e => {
        co.set(e.typing.is)
    },
    Oi = e => {
        Kt.set(e.lastReadAt)
    },
    Fi = ({
        message: e,
        rating: t
    }) => {
        V.updateMessageRating(e.id, t), W.emit("chatRated", t)
    },
    ki = e => {
        W.emit("transcriptPdf", e)
    },
    $i = ({
        id: e,
        changes: t
    }) => {
        ke.updateAgent(e, t)
    },
    Ii = ({
        id: e,
        status: t
    }) => {
        ke.updateAgent(e, {
            status: t
        })
    },
    Li = ({
        status: e
    }) => {
        Ve.set(e)
    },
    Ri = e => {
        me.updateVisitorData(e)
    },
    Pi = e => {
        W.emit("contactAcquired", e)
    },
    Di = async e => {
        const t = await E.awaitOptions(),
            n = {
                data: e,
                connection: {
                    url: Qr(),
                    balancerUrl: t.balancerUrl,
                    options: {
                        path: "/socket",
                        autoConnect: !1,
                        reconnection: !0
                    }
                }
            };
        return new En(n)
    },
    Bi = () => {
        let e = null;
        return Object.freeze({
            getClient: () => {
                if (!e) throw new Error("Visitor client is not initialized");
                return e
            },
            initClient: async () => {
                const o = await na();
                e = await Di(o), e && (xi(e), await e.connect().catch(r => {
                    oe("Failed connect to server.", r)
                }))
            },
            isInitialized: () => !!e
        })
    },
    xi = e => {
        e.on("initialized", fi), e.on("error", pi), e.on("disconnect", mi), e.on("chat.opened", hi), e.on("chat.served", bi), e.on("chat.closed", yi), e.on("chat.visitor_closed", _i), e.on("chat.updated", wi), e.on("chat.message_received", Ci), e.on("chat.message_updated", vi), e.on("chat.agent_joined", Si), e.on("chat.agent_left", Ai), e.on("chat.agent_assigned", Ti), e.on("chat.agent_unassigned", Ei), e.on("chat.agent_typing", Mi), e.on("chat.contact_read", Oi), e.on("chat.rated", Fi), e.on("chat.transcript_pdf", ki), e.on("agent.updated", $i), e.on("agent.status_updated", Ii), e.on("account.updated", Li), e.on("visitor.updated", Ri), e.on("contact.acquired", Pi)
    },
    ne = Bi(),
    Gi = () => {
        const e = C(null),
            {
                subscribe: t,
                set: n,
                update: s
            } = e,
            o = i => {
                n(i)
            },
            r = i => {
                s(l => l ? { ...l,
                    ...i
                } : null)
            };
        return {
            subscribe: t,
            setVisitorData: o,
            updateVisitorData: r,
            updateVisitorProperty: (i, l) => {
                if (!f(ge)) {
                    Sn(i, l);
                    return
                }
                r({
                    [i]: l
                });
                try {
                    ne.getClient().update({
                        [i]: l
                    })
                } catch (u) {
                    oe(`Update of visitor property '${i}' failed.`, String(u))
                }
            },
            updateVisitorVariables: i => {
                if (!f(ge)) {
                    Sn("variables", i);
                    return
                }
                const l = f(e);
                if (!l) return;
                const u = l.variables;
                r({
                    variables: { ...u,
                        ...i
                    }
                });
                let d = {};
                if (Object.keys(i).forEach(g => {
                        i[g] !== u[g] && (d = { ...d,
                            [g]: i[g]
                        })
                    }), Object.keys(d).length !== 0) try {
                    ne.getClient().update({
                        variables: d
                    })
                } catch (g) {
                    oe("Update of visitor variables failed.", String(g))
                }
            }
        }
    },
    me = Gi(),
    Ni = (e, t) => e.hasOwnProperty(t),
    ro = e => typeof e == "boolean",
    Ui = e => typeof e == "number",
    ao = e => typeof e == "object" && e !== null && !Array.isArray(e),
    xe = e => typeof e == "string" || e instanceof String,
    fs = e => xe(e) || Ui(e) || ro(e),
    Vi = e => {
        const t = {};
        return Object.keys(e).forEach(n => {
            const s = e[n];
            fs(s) ? t[n] = s : ao(s) && Ni(s, "value") && fs(s.value) && (t[n] = s.value)
        }), t
    },
    zi = () => {
        const e = C({}),
            {
                update: t,
                subscribe: n,
                set: s
            } = e;
        return {
            subscribe: n,
            setAgents: i => {
                s(In("id", i))
            },
            addAgent: i => {
                t(l => ({ ...l,
                    [i.id]: i
                }))
            },
            updateAgent: (i, l) => {
                t(u => u[i] ? { ...u,
                    [i]: { ...u[i],
                        ...l
                    }
                } : u)
            },
            setVirtualAgent: i => {
                const {
                    description: l,
                    avatar: u,
                    name: d
                } = i, g = {};
                l && (g.description = l), u && (g.avatar = u), d && (g.fullname = d), t(b => (Object.keys(b).forEach(S => {
                    b[S] = { ...b[S],
                        ...g
                    }
                }), b))
            }
        }
    },
    ke = zi(),
    Fp = e => A([ke], ([t]) => t[e] ? ? null),
    Wi = A([ke], ([e]) => Object.values(e).filter(t => !t.disabled)),
    Hi = A([Wi, me], ([e, t]) => {
        const n = t == null ? void 0 : t.group;
        return !n || n === Or ? e : e.filter(s => s.groups.length === 0 || s.groups.includes(n))
    }),
    kp = A([Hi], ([e]) => e.filter(t => t.status === X.AgentStatus.Online)),
    ji = () => {
        const e = C([]),
            {
                subscribe: t,
                set: n,
                update: s
            } = e;
        return {
            subscribe: t,
            setAssignedAgentIds: c => {
                n(c)
            },
            addAssignedAgentId: c => {
                s(i => [...new Set([...i, c])])
            },
            removeAssignedAgentId: c => {
                s(i => i.filter(l => l !== c))
            }
        }
    },
    Ue = ji(),
    Un = A([Ue, ke], ([e, t]) => e.map(n => t[n]).filter(Boolean)),
    $p = A([Un], ([e]) => e.length > 0),
    qi = A([Un], ([e]) => e.filter(t => !t.disabled));
A([Un], ([e]) => e.some(t => t.status === X.AgentStatus.Online));
const Ki = () => {
        const e = C({
                disableAttachments: !1,
                disableAuthentication: !1,
                disableInput: !1
            }),
            t = C({}),
            n = r => {
                e.update(a => ({ ...a,
                    ...r
                }))
            },
            s = r => {
                t.set(r)
            };
        return {
            subscribe: A([e, t], ([r, a]) => ({ ...r,
                ...a
            })).subscribe,
            updateGeneralOptions: n,
            setMessageOptions: s
        }
    },
    ut = Ki();
var io = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e[e.ClosedByVisitor = 2] = "ClosedByVisitor", e))(io || {});
const Ve = C(X.AccountStatus.Offline),
    he = C(null),
    Rt = C(0),
    co = C(!1),
    Kt = C(null),
    lo = A([he], ([e]) => e === X.ChatStatus.Pending);
A([he], ([e]) => e !== null);
const Yi = A([he], ([e]) => e === X.ChatStatus.Served),
    Ip = A([he], ([e]) => e === X.ChatStatus.Open),
    Lp = A([he], ([e]) => e === X.ChatStatus.Closed),
    Rp = A([Yi, Rt], ([e, t]) => e && t === 0),
    wt = (e, {
        byVisitor: t = !1
    } = {}) => {
        e ? Rt.set(t ? 2 : 1) : Rt.set(0)
    },
    Xi = A([Ve, qi], ([e, t]) => t.length === 0 ? e === X.AccountStatus.Online : t.some(n => n.status === X.AgentStatus.Online)),
    Ji = A([ut], ([e]) => e.disableAuthentication),
    Te = [];
let Vn = !1,
    K, zn = !1,
    mt;
const Zi = () => {
        const {
            googleAnalyticsEnabled: e
        } = E.getOptions();
        K = window.top || window, e && (K.gtag && (mt = K.gtag, zn = !0), W.on("analyticsConsentChanged", Qi), !Vn && Bn() && uo())
    },
    Qi = e => {
        !Vn && e && uo()
    },
    uo = () => {
        const {
            gaKey: e,
            gaOptions: t,
            googleAnalyticsManual: n,
            googleAnalyticsMeasurementIds: s
        } = E.getOptions(), o = t || {
            cookieDomain: "auto"
        };
        if (e) Te.push({
            key: e,
            options: o
        });
        else if (n && s) s.forEach(r => {
            Te.push({
                key: r,
                options: o
            })
        });
        else try {
            Te.push(...ec())
        } catch (r) {
            const a = r instanceof Error ? r.message : r;
            Z("Error during getting GA top trackers", a)
        }
        Te.length > 0 && !zn && nc(), Te.length !== 0 ? (oc(), Vn = !0, Z("GA initialized")) : Z("No GA to setup")
    },
    ec = () => {
        const e = [];
        if (!K.ga && !K.google_tag_manager) throw new Error("Parent GA object is not available");
        return e.push(...go()), tc().forEach(n => {
            e.findIndex(o => o.key === n.key) === -1 && e.push(n)
        }), e
    },
    tc = () => {
        const {
            gaName: e
        } = E.getOptions(), t = [];
        if (K.ga) {
            const {
                ga: n
            } = K;
            n(() => {
                const s = n.getAll();
                Z("topTrackers", s), s && s.every(o => {
                    const r = {
                        key: o.get("trackingId"),
                        options: {
                            cookieDomain: o.get("cookieDomain") || "auto",
                            name: o.get("name") || ""
                        }
                    };
                    return e && r.options && r.options.name === e ? (t.push(r), !1) : (t.push(r), !0)
                })
            })
        }
        return t
    },
    go = () => {
        const e = [];
        return K.google_tag_manager && Object.keys(K.google_tag_manager).forEach(n => {
            n.match(/(UA-\d*-\d*)|(G-([A-Z,0-9]*))/g) && e.push({
                key: n,
                options: {
                    cookieDomain: "auto"
                }
            })
        }), e
    },
    nc = () => {
        const e = K.document,
            {
                head: t
            } = e,
            n = e.createElement("script");
        n.id = "gtag", n.type = "text/javascript", n.async = !0, n.src = "https://www.googletagmanager.com/gtag/js", t.insertBefore(n, t.firstChild), K.dataLayer = K.dataLayer || [], K.gtag = function() {
            K.dataLayer.push(arguments)
        }, mt = K.gtag, mt("js", new Date)
    },
    sc = () => {
        let e = [];
        if (zn) {
            const t = go();
            Te.forEach(n => {
                t.find(({
                    key: s
                }) => s === n.key) || e.push(n)
            })
        } else e = [...Te];
        return e
    },
    oc = () => {
        sc().forEach(e => {
            const {
                key: t,
                options: n
            } = e;
            let s = {};
            n ? (s = {
                cookie_domain: n.cookieDomain
            }, n.name && (s.name = n.name)) : s = {
                cookie_domain: (K == null ? void 0 : K.document.domain) || ""
            }, mt("config", t, s)
        })
    },
    rc = (e, t) => {
        const {
            googleAnalyticsEnabled: n
        } = E.getOptions();
        if (!(!n || !K.gtag || !Bn() || K.document.hidden)) try {
            Te.forEach(s => {
                t.send_to = s.key, mt("event", e, t), Z(`Smartsupp: GA event ${e} - ${JSON.stringify(t)}`)
            })
        } catch (s) {
            const o = s instanceof Error ? s.message : s;
            Z("Smartsupp: GA error:", o)
        }
    },
    ac = "Visitor_started_conversation",
    ic = "Trigger_message_sent",
    cc = "Trigger_message_viewed",
    lc = "Trigger_visitor_reaction",
    uc = "Auto_message_sent",
    dc = "Auto_message_viewed",
    gc = "Auto_message_visitor_reaction",
    fc = "Chatbot_sent",
    pc = "Chatbot_viewed",
    mc = "Chatbot_interaction",
    hc = "Chatbot_button_interaction",
    bc = "Chatbot_visitor_reaction",
    yc = "Agent_served_conversation",
    _c = "Contact_acquired",
    wc = "Auth_form_filled",
    Cc = "Offline_message_sent",
    vc = "Feedback_sent",
    Sc = "Feedback_text_sent",
    Ac = "Url_card_opened",
    Tc = {
        event_category: "Smartsupp_v3",
        non_interaction: !0
    },
    J = (e, t) => {
        const n = { ...Tc,
            ...t
        };
        rc(e, n)
    },
    Ec = (e = "") => J(ic, {
        event_label: e
    }),
    Mc = e => J(cc, {
        event_label: e
    }),
    Oc = (e = "") => J(lc, {
        event_label: e
    }),
    Fc = (e = "") => J(uc, {
        event_label: e
    }),
    kc = e => J(dc, {
        event_label: e
    }),
    $c = (e = "") => J(gc, {
        event_label: e
    }),
    Ic = (e = "") => J(fc, {
        event_label: e
    }),
    Lc = e => J(pc, {
        event_label: e
    }),
    Rc = (e = "") => J(mc, {
        event_label: e
    }),
    Pc = (e = "") => J(hc, {
        event_label: e
    }),
    Dc = (e = "") => J(bc, {
        event_label: e
    }),
    Bc = () => J(ac),
    xc = e => J(yc, {
        event_label: e
    }),
    Gc = () => J(wc),
    Nc = () => J(Cc),
    Uc = (e, t) => {
        const n = {
            event_label: t || Vs[e] || "",
            value: e
        };
        J(t ? Sc : vc, n)
    },
    Vc = e => J(_c, {
        event_label: e
    }),
    Pp = e => J(Ac, {
        event_label: e
    });
let fn = !1,
    de = {};
const fo = () => {
        fn = !1
    },
    zc = () => {
        const e = f(Se);
        de = zl(e)
    },
    po = e => {
        var t, n;
        return ((n = de[((t = e.trigger) == null ? void 0 : t.id) || ""]) == null ? void 0 : n.type) === "chatbot"
    },
    Wc = (e, t) => fn ? !1 : Vl(e).length === 1 && t === M.MessageSubType.Contact ? (fn = !0, !0) : !1,
    Hc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === M.MessageSubType.Contact && e.subType === M.MessageSubType.Trigger && !((o = de[n]) != null && o.visitorResponded) ? (de[n].visitorResponded = !0, !0) : !1
    },
    jc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === M.MessageSubType.Contact && !(t.groupId || t.content.quickReplies || t.content.quickReply) && e.subType === M.MessageSubType.Bot && !((o = de[n]) != null && o.visitorResponded) ? (de[n].visitorResponded = !0, !0) : !1
    },
    qc = (e, t) => {
        var s, o;
        const n = ((s = e.trigger) == null ? void 0 : s.id) || "";
        return t.subType === M.MessageSubType.Contact && po(e) && e.subType === M.MessageSubType.Bot && !((o = de[n]) != null && o.reacted) ? (de[n].reacted = !0, !0) : !1
    },
    Qe = (e, t, n = !1) => {
        var s;
        if (e.length > 0 && !n) {
            const o = e.slice(-2).filter(r => r.trigger);
            return o ? (s = o[o.length - 1].trigger) == null ? void 0 : s.name : ""
        } else return t.trigger ? t.trigger.name : ""
    },
    Kc = e => {
        const t = f(Se);
        Xc(t, e), Jc(t, e), Wc(t, e.subType) && Bc()
    },
    Yc = e => {
        var o;
        let t = e;
        const s = f(Se).filter(r => r.trigger);
        s && s.length > 0 && (t = ((o = s[s.length - 1].trigger) == null ? void 0 : o.name) ? ? e), Vc(t)
    },
    Xc = (e, t) => {
        var o, r, a, c;
        const n = ((o = t.trigger) == null ? void 0 : o.id) || "";
        t.subType === M.MessageSubType.Bot && !((r = de[n]) != null && r.sent) && ((a = t.content) != null && a.quickReplies || (c = t.content) != null && c.quickReply ? (Ic(Qe(e, t, !0)), de[n] = {
            sent: !0,
            type: Be.Chatbot
        }) : (Fc(Qe(e, t, !0)), de[n] = {
            sent: !0,
            type: Be.Automessage
        }));
        const s = e.length > 1 ? e[e.length - 2] : void 0;
        s && (jc(s, t) ? po(s) ? Dc(Qe(e, t)) : $c(Qe(e, t)) : qc(s, t) && Rc(Qe(e, t)))
    },
    Jc = (e, t) => {
        var s, o;
        t.subType === M.MessageSubType.Trigger && (Ec((s = t == null ? void 0 : t.trigger) == null ? void 0 : s.name), de[((o = t.trigger) == null ? void 0 : o.id) || ""] = {
            sent: !0,
            type: Be.Trigger
        });
        const n = e.length > 1 ? e[e.length - 2] : void 0;
        n && Hc(n, t) && Oc(Qe(e, t))
    },
    Zc = () => {
        const e = f(Hn).filter(n => n.trigger),
            t = e[e.length - 1];
        t && t.trigger && (t.subType === M.MessageSubType.Bot && t.content.quickReplies ? Lc(t.trigger.name) : t.subType === M.MessageSubType.Bot ? kc(t.trigger.name) : t.subType === M.MessageSubType.Trigger && Mc(t.trigger.name))
    },
    Qc = e => {
        e === X.AccountStatus.Offline && Nc()
    };
W.on("messageReceived", Kc);
W.on("agentJoined", e => {
    xc(e.fullname)
});
W.on("chatRated", e => {
    Uc(e.value, e.text)
});
W.on("chatClosed", () => {
    fo()
});
W.on("chatVisitorClosed", () => {
    fo()
});
W.on("contactAcquired", ({
    acquiredBy: e
}) => {
    Yc(e)
});
_t.push(zc);

function dt(e) {
    return e.length === 0 ? null : e[e.length - 1]
}
const el = e => e.slice((e.lastIndexOf(".") - 1 >>> 0) + 2).toLowerCase(),
    tl = e => {
        let t = e,
            n = 0;
        const s = ["B", "KB", "MB", "GB"];
        for (; t >= 1024 && n < s.length - 1;) t /= 1024, n++;
        return {
            size: Math.floor(t),
            unit: s[n]
        }
    },
    Dp = e => {
        const t = e.split("."),
            n = dt(t);
        return n ? n.toUpperCase() : ua
    },
    Bp = (e, t) => `${e}?name=${t}`,
    nl = async (e, t) => {
        const n = ne.getClient(),
            s = [];
        for (const {
                file: o
            } of e) {
            const r = await n.chatUploadInit(),
                a = new FormData;
            a.append("file", o, o.name);
            try {
                if (!(await fetch(r.url, {
                        method: "post",
                        body: a
                    })).ok) throw new Error("Upload failed");
                s.push(r.token)
            } catch {
                oe(`File [${o.name}] upload failed`), Oe("fileUpload.filesWerentProcessed")
            } finally {
                t(o)
            }
        }
        return s
    },
    sl = async e => {
        const t = ne.getClient();
        try {
            await t.chatUploadFinish(e)
        } catch {
            oe(`Failed to finish file upload for ${e}`)
        }
    },
    ol = 1e3,
    pn = 6e4,
    rl = 36e5,
    mo = 864e5,
    al = 2628e6,
    il = 31536e6,
    ps = e => Math.floor(e / pn) * pn,
    cl = (e, t) => ps(new Date(e).getTime()) === ps(new Date(t).getTime()),
    ll = (e, t) => {
        const n = new Date(e),
            s = new Date(t);
        return n.getDate() === s.getDate() && n.getMonth() === s.getMonth() && n.getFullYear() === s.getFullYear()
    },
    xp = (e, t) => e.getTime() - t.getTime(),
    ul = new Intl.DateTimeFormat(void 0, {
        hour: "numeric",
        minute: "numeric"
    }),
    dl = new Intl.DateTimeFormat(void 0, {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    }),
    Gp = e => ll(new Date, e) ? ul : dl,
    gl = () => typeof Intl < "u" && "RelativeTimeFormat" in Intl,
    fl = e => gl() ? new Intl.RelativeTimeFormat(e, {
        numeric: "auto"
    }) : null,
    pl = [{
        unit: "year",
        amount: il
    }, {
        unit: "month",
        amount: al
    }, {
        unit: "day",
        amount: mo
    }, {
        unit: "hour",
        amount: rl
    }, {
        unit: "minute",
        amount: pn
    }, {
        unit: "second",
        amount: ol
    }],
    Np = (e, t) => {
        const n = fl(t);
        if (!n) return H("Relative time format not supported"), "";
        for (const {
                unit: s,
                amount: o
            } of pl) {
            if (s === "second") return n.format(0, "second");
            if (Math.abs(e) > o) return n.format(Math.round(e / o), s)
        }
        return ""
    },
    ml = (e, t = 300) => {
        let n;
        return (...o) => {
            n || (e(...o), n = setTimeout(() => n = null, t))
        }
    },
    hl = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,
    Up = /((?:www.)?[^\s.]+\.[^\s/]+\/[^\s.]+)/,
    ms = /[&<>"']/g,
    cn = e => {
        const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            },
            n = RegExp(ms.source);
        return e && n.test(e) ? e.replace(ms, s => t[s]) : e || ""
    },
    bl = "overflow: hidden; display: -webkit-inline-box; -webkit-box-orient: vertical; -webkit-line-clamp: 1; line-clamp: 1; word-break: break-all;",
    yl = xs().tlds(Gs).set({
        fuzzyIP: !0
    }),
    _l = xs().tlds(Gs).add("ftp:", null).add("//", null).add("mailto:", null),
    wl = (e, t, n) => {
        const s = ee().location.hostname,
            o = s.length > 0 && e.includes(s) ? "_parent" : "_blank";
        return `<a href="${e}" target="${o}" rel="noreferrer noopener" title="${e}" style="${n!=null&&n.clamp&&!(n!=null&&n.replaceText)?bl:""}">${t}</a>`
    },
    Vp = (e, t) => {
        if (e === "") return e;
        const n = yl.match(e);
        if (!n) return cn(e);
        let s = "",
            o = 0;
        return n.forEach(r => {
            var u;
            let a = "",
                c = "";
            const i = ho(e, r),
                l = (t == null ? void 0 : t.clamp) && r.text.length > 30 && !i;
            r.index > o && (a = e.substring(o, r.index)), c = wl(r.url, r.text, { ...t,
                clamp: l
            }), o = r.lastIndex, i && (a = a.substring(0, a.length - 1), o += 1), l && !Cl(e, r) && (c = `
${c}
`, a = a.trimEnd(), (u = e[o]) != null && u.match(/\s/) && (o += 1)), s += cn(a) + c
        }), e.length > o && (s += cn(e.substring(o))), s
    },
    ho = (e, t) => e[t.index - 1] === '"' && e[t.lastIndex] === '"',
    Cl = (e, t) => !!(t.index <= 1 && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && e.substring(t.lastIndex, t.lastIndex + 3).match(/[\n\r]+/) || e.substring(t.index - 3, t.index).match(/[\n\r]+/) && t.lastIndex > e.length - 3 || t.index <= 1 && t.lastIndex >= e.length - 2),
    vl = () => jt("cards"),
    Sl = e => {
        Pn({ ...e
        }, "cards")
    },
    Al = async e => {
        const t = new Headers,
            {
                widgetApiUrl: n
            } = E.getOptions();
        t.append("Content-Type", "application/json");
        const s = JSON.stringify({
            links: e
        });
        try {
            const o = await fetch(`${n}/links/preview`, {
                method: "POST",
                headers: t,
                body: s
            });
            return o.ok && o.json ? await o.json() : null
        } catch {
            return null
        }
    },
    Tl = e => {
        const t = e.find(n => n.type === "open_url");
        return (t == null ? void 0 : t.value) || ""
    },
    El = e => {
        const t = e.filter(n => n.title && n.image && !Ol(Tl(n.actions)));
        return t.length && e.length > 1 ? e : t.length === 1 ? t : []
    },
    Ml = e => {
        const t = new Date().getTime();
        return Object.keys(e).forEach(s => {
            (!e[s].expiration || e[s].expiration && e[s].expiration < t) && delete e[s]
        }), e
    },
    Ol = e => {
        const {
            acceptedFileExtensions: t
        } = f(Nn), n = e.match(/(\.)([^.]{3,4})$/m);
        return n && n[2] && t.includes(n[2])
    };
let hs = !1;
const mn = C(),
    hn = C(!1),
    bn = C(!1),
    Fl = (e, t, n) => {
        const s = {},
            o = new Date().getTime() + mo;
        e.forEach((a, c) => s[a] = {
            expiration: o,
            card: t[c]
        });
        const r = { ...n,
            ...s
        };
        mn.set(r), Sl(r)
    },
    kl = async (e, t = !1) => {
        let n = [];
        const s = {
            type: "cards",
            layout: "carousel",
            items: []
        };
        hs || (mn.set(vl()), hs = !0);
        const o = _l.match(e);
        if (!o) return null;
        const r = Ml(f(mn)),
            a = [];
        if (o.forEach(c => {
                ho(e, c) || (r[c.url] ? n.push(r[c.url].card) : a.push(c.url))
            }), a.length > 0) {
            hn.set(!0), t && bn.set(!0);
            const c = await Al(a);
            c && (Fl(a, c, r), n = [...n, ...c])
        }
        return s.items = El(n), hn.set(!1), bn.set(!1), s.items.length > 0 ? s : null
    };
var fe = (e => (e.ContactMessage = "contact-message", e.AgentMessage = "agent-message", e.BotMessage = "bot-message", e.BotReplies = "bot-replies", e))(fe || {}),
    Be = (e => (e.Automessage = "automessage", e.Chatbot = "chatbot", e.Trigger = "trigger", e))(Be || {});
const bs = async ({
        text: e,
        quickReply: t
    }) => {
        try {
            return await ne.getClient().chatMessage({
                content: {
                    type: M.MessageContentType.Text,
                    text: e
                },
                quickReply: t
            }) ? ? null
        } catch {
            return null
        }
    },
    Wn = e => e.subType === M.MessageSubType.Bot || e.subType === M.MessageSubType.Trigger,
    Yt = e => e.subType === M.MessageSubType.Agent || Wn(e),
    $l = (e, t) => new Date(e.createdAt).getTime() - new Date(t.createdAt).getTime(),
    bo = (e, t) => t === fe.BotReplies ? `${e.id}-replies` : e.id,
    yo = e => {
        const t = {
                isRight: !1,
                isLeft: !1
            },
            n = {
                isPrimary: !1,
                isSecondary: !1
            };
        switch (e) {
            case fe.ContactMessage:
                t.isRight = !0, n.isPrimary = !0;
                break;
            default:
                t.isLeft = !0, n.isSecondary = !0
        }
        return {
            align: t,
            variant: n
        }
    },
    Il = e => !!e.agentId || e.subType === M.MessageSubType.Bot,
    _o = (e, t) => e.subType === M.MessageSubType.System || t === fe.BotReplies,
    Ll = (e, t) => {
        const n = [];
        let s = null,
            o = null;
        for (const r of e) {
            s && !Gl(r, s, t.has(r.id)) && (n.push(s), s = null, o = null), s = s || Rl(r);
            const a = ys(r, s);
            if (o) {
                const i = vo(o),
                    l = wo(o);
                a.neighbors.hasTop = i, l.any.neighbors.hasBottom = i, l.attachmentContext && (l.attachmentContext.extraSpaces.hasBottom = Mt(l.attachmentContext.attachment))
            }
            const c = Bl(r);
            if (c && Dl(c, a, o), s.messagesContext.push(a), o = a, Wn(r) && Wl(r)) {
                n.push(s);
                const i = Pl(r);
                i.messagesContext.push(ys(r, i)), n.push(i), s = null
            }
        }
        return s && n.push(s), n
    },
    Rl = e => {
        const t = Co(e),
            n = e.subType === M.MessageSubType.Bot || e.subType === M.MessageSubType.Trigger,
            {
                align: s,
                variant: o
            } = yo(t);
        return {
            type: t,
            isBot: n,
            id: bo(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: s,
            variant: o,
            messagesContext: [],
            showAvatar: Il(e),
            useFullWidth: _o(e, t)
        }
    },
    Pl = e => {
        const t = fe.BotReplies,
            {
                align: n,
                variant: s
            } = yo(t);
        return {
            type: fe.BotReplies,
            isBot: !0,
            id: bo(e, t),
            date: e.createdAt,
            agentId: e.agentId,
            align: n,
            variant: s,
            messagesContext: [],
            showAvatar: !1,
            useFullWidth: _o(e, t)
        }
    },
    ys = (e, t) => ({
        group: t,
        message: e,
        neighbors: {
            hasTop: !1,
            hasBottom: !1
        },
        attachmentsContext: []
    }),
    Dl = (e, t, n) => {
        let s = null;
        for (const o of e) {
            const r = _s(o),
                a = {
                    hasTop: !1,
                    hasBottom: !1
                },
                c = Mt(o),
                i = {
                    hasTop: c,
                    hasBottom: !1
                };
            if (s) {
                const u = _s(s.attachment),
                    d = Mt(s.attachment);
                s.neighbors.hasBottom = u && r, a.hasTop = u && r, s.extraSpaces.hasBottom = !c && d
            } else if (t.neighbors.hasBottom = r, a.hasTop = r, xl(t.message))
                if (a.hasTop = !1, t.neighbors.hasTop = !1, t.neighbors.hasBottom = !1, n) {
                    const u = vo(n),
                        d = wo(n);
                    a.hasTop = u && r, d.any.neighbors.hasBottom = u && r;
                    const g = d.attachmentContext;
                    g && (g.extraSpaces.hasBottom = !c && Mt(g.attachment))
                } else i.hasTop = !1;
            const l = {
                attachment: o,
                neighbors: a,
                extraSpaces: i,
                messageContext: t
            };
            t.attachmentsContext.push(l), s = { ...l
            }
        }
    },
    wo = e => {
        const t = dt(e.attachmentsContext) || void 0;
        return {
            attachmentContext: t,
            any: t || e
        }
    },
    Bl = e => {
        var t;
        return e ? ((t = e.content) == null ? void 0 : t.type) === M.MessageContentType.Upload ? [e.content.data] : e.attachments : []
    },
    xl = e => !e.content.text,
    Gl = (e, t, n) => {
        const s = Co(e),
            o = s === fe.AgentMessage && e.agentId === t.agentId,
            r = s === fe.ContactMessage,
            a = e.subType !== M.MessageSubType.Bot || (e.content.quickReplies || []).length === 0 || n;
        return t.type === s && (o || r) && a && cl(t.date, e.createdAt)
    },
    Co = e => {
        switch (e.subType) {
            case M.MessageSubType.Agent:
                return fe.AgentMessage;
            case M.MessageSubType.Contact:
                return fe.ContactMessage;
            case M.MessageSubType.Bot:
                return fe.BotMessage
        }
        return null
    },
    vo = e => {
        const t = e.attachmentsContext.length;
        return !(t > 0 && e.attachmentsContext[t - 1].attachment.type === M.AttachmentType.File)
    },
    _s = e => e.type !== M.AttachmentType.File && e.type !== M.AttachmentType.Cards,
    Mt = e => !!e && (e.type === M.AttachmentType.File || e.type === M.AttachmentType.Cards),
    So = () => {
        const e = su();
        e.volume = Er, e.addEventListener("canplaythrough", () => {
            e.play().catch(t => H("Could not play message sound.", t))
        })
    },
    Nl = ml(So, Mr),
    Ul = e => e.filter(t => t.type === M.MessageType.Message && (t.subType === M.MessageSubType.Agent || t.subType === M.MessageSubType.Contact)),
    Vl = (e, t = !0) => {
        const n = e.reduce((s, o) => (s.push(o), o.content.type === M.MessageContentType.ChatClose || o.content.type === M.MessageContentType.ChatVisitorClose ? [] : s), []);
        return t ? n.filter(s => s.type === M.MessageType.Message && s.subType !== M.MessageSubType.System) : n
    },
    zl = e => {
        const t = {};
        return e.forEach(n => {
            var s;
            if (n.trigger) {
                let o = Be.Automessage;
                n.subType === M.MessageSubType.Trigger ? o = Be.Trigger : n.subType === M.MessageSubType.Bot && n.content.quickReplies && (o = Be.Chatbot), t[((s = n.trigger) == null ? void 0 : s.id) || ""] = {
                    type: o,
                    sent: !0
                }
            }
        }), t
    },
    Wl = e => !!(e.content.quickReplies && e.content.quickReplies.length > 0),
    yn = async (e, t = !1) => {
        var o;
        const n = Yt(e),
            s = !t && n;
        if ((o = e.content) != null && o.text && E.getOptions().urlCardsEnabled) {
            const r = await kl(e.content.text, s);
            if (!r) return e;
            e.attachments.push(r)
        }
        return e
    },
    Hl = async e => (E.getOptions().urlCardsEnabled && await Promise.all(e.map(async t => await yn(t))), e),
    jl = () => {
        const e = C({}),
            {
                subscribe: t,
                update: n,
                set: s
            } = e,
            o = async u => {
                s(In("id", await Hl(u)))
            },
            r = async u => {
                const d = await yn(u);
                n(g => ({ ...g,
                    [u.id]: d
                })), Kl(d)
            },
            a = async u => {
                const d = await yn(u, !0);
                n(g => ({ ...g,
                    [u.id]: d
                }))
            };
        return {
            subscribe: t,
            setMessages: o,
            addMessage: r,
            replaceMessage: a,
            updateMessageRating: (u, d) => {
                n(g => {
                    const b = g[u];
                    if (!b || b.content.type !== "rate_form") return { ...g
                    };
                    const S = { ...b,
                        content: { ...b.content,
                            data: {
                                value: d.value,
                                text: d.text ? ? void 0
                            }
                        }
                    };
                    return { ...g,
                        [u]: S
                    }
                })
            },
            sendMessage: async (u, d) => {
                _n.set(u);
                const g = await bs({
                    text: u
                });
                g && (_n.set(null), await a(g), W.emit("messageSent", g), Qc(f(Ve))), await Promise.all(d.map(b => sl(b)))
            },
            sendBotReply: async (u, d, g) => {
                const b = await bs({
                    text: d,
                    quickReply: {
                        replyTo: u,
                        payload: g
                    }
                });
                g.isGoBackButton || Pc(d), b && await a(b)
            }
        }
    },
    V = jl(),
    ql = e => {
        f(Ie) || Jn(), Yu(), setTimeout(() => {
            V.addMessage(e), zo()
        }, 1600)
    },
    Kl = e => {
        e && f(Pt) && f(Ie) && !(f(Po) && f(ae)) && ou(e) && Nl()
    },
    Yl = A([V], ([e]) => {
        const t = Object.values(e).filter(Yt);
        if (!t) return null;
        const n = t.sort((s, o) => new Date(s.createdAt).getTime() - new Date(o.createdAt).getTime());
        return dt(n)
    }),
    Hn = A([V, Kt], ([e, t]) => {
        const n = Object.values(e).filter(Yt);
        return t ? n.filter(s => new Date(s.createdAt) > new Date(t)) : n
    }),
    Xl = A([Hn], ([e]) => dt(e)),
    Ao = A([Hn], ([e]) => e.length),
    Jl = A([Ao], ([e]) => e > 0),
    Se = A([V], ([e]) => Object.values(e).sort($l)),
    zp = A([Se, Tr], ([e, t]) => Ll(e, t)),
    To = A([Se], ([e]) => {
        const t = dt(e);
        return (t == null ? void 0 : t.id) ? ? null
    }),
    Wp = A([V], ([e]) => {
        var s;
        const t = Object.values(e).filter(o => {
                var r;
                return typeof((r = o.widgetOptions) == null ? void 0 : r.disableInput) == "boolean"
            }),
            n = dt(t);
        return ((s = n == null ? void 0 : n.widgetOptions) == null ? void 0 : s.disableInput) ? ? !1
    }),
    Eo = A([V], ([e]) => Object.values(e).filter(t => t.subType === "contact" || t.subType === "agent").length > 0),
    Hp = A([V], ([e]) => Object.values(e).filter(t => t.subType === M.MessageSubType.Contact).length > 0),
    jp = A([V, zs], ([e, t]) => {
        var s, o;
        if (!t) return null;
        const n = e[t] ? ? null;
        return !n || n.content.type !== "rate_form" ? null : {
            messageId: n.id,
            value: (s = n.content.data) == null ? void 0 : s.value,
            text: (o = n.content.data) == null ? void 0 : o.text
        }
    }),
    Zl = A([Se], ([e]) => e.slice().reverse().find(n => n.subType === M.MessageSubType.Contact) || null),
    _n = C(null),
    Mo = () => !!E.getOptions().ratingEnabled,
    Oo = e => {
        zs.set(e), kn(Ht.ChatRating)
    },
    Fo = async () => {
        try {
            return await ne.getClient().chatRateInit()
        } catch (e) {
            oe("Init chat rating failed.", String(e)), Oe(f(te)("form.submit.error"))
        }
    },
    qp = async ({
        messageId: e,
        rating: {
            text: t,
            value: n
        },
        onSuccess: s
    }) => {
        const o = f(V)[e];
        try {
            V.updateMessageRating(e, {
                value: n,
                text: t
            }), await ne.getClient().chatRate({
                messageId: e,
                value: n,
                text: t ? ? void 0
            }), s && s()
        } catch (r) {
            o && await V.replaceMessage(o), oe("Chat rating failed.", String(r)), Oe(f(te)("form.submit.error"))
        }
    },
    Kp = e => {
        const {
            widgetV3Url: t
        } = E.getOptions();
        return `${t}/assets/images/rating/${e}.svg`
    },
    jn = () => {
        Kt.set(new Date().toISOString()), ne.getClient().chatRead()
    },
    ko = () => {
        const e = Pe().visibilityState === "visible";
        !f(Jl) || !f(ae) || !e || jn()
    },
    Yp = async () => {
        if (wt(!0, {
                byVisitor: !0
            }), ne.getClient().chatClose(), Mo()) {
            const e = await Fo();
            if (!e) return;
            await V.addMessage(e.message), Oo(e.message.id)
        } else vn(), Hs()
    },
    Ql = async () => {
        const e = f(he) === X.ChatStatus.Served,
            t = f(Rt) !== io.Open;
        if (!Mo() || !e || t) return;
        const n = await Fo();
        n && await V.addMessage(n.message)
    },
    $o = (e, t = 300) => {
        let n;
        return (...o) => {
            clearTimeout(n), n = setTimeout(() => e(...o), t)
        }
    },
    eu = 500;
var Io = (e => (e.Default = "blackberry2.mp3", e))(Io || {}),
    Me = (e => (e.Connecting = "connecting", e.Connected = "connected", e.Disconnected = "disconnected", e))(Me || {}),
    wn = (e => (e.Image = "image", e.Video = "video", e))(wn || {});
const tu = e => {
        const t = () => {
            ko()
        };
        Ge(() => (e.addEventListener("visibilitychange", t), () => e.removeEventListener("visibilitychange", t)))
    },
    nu = () => {
        const e = ee()._smartsupp || {};
        e.appVersion = "0.0.1", e.commitHash = "b4ae2ce0c8a5c74b8291ac1ada4a8faa8ade4824", e.commitInfo = "b4ae2ce0c8a5c74b8291ac1ada4a8faa8ade4824 - Merge pull request #255 from smartsupp/develop - 2023-11-22 08:37:23 +0100", ee()._smartsupp = e
    },
    su = (e = Io.Default) => {
        const {
            widgetV3Url: t
        } = E.getOptions(), n = new Audio(`${t}/assets/sounds/${e}`);
        return n.crossOrigin = "anonymous", n.load(), n
    },
    ou = e => e.subType !== M.MessageSubType.Contact && ![M.MessageContentType.RateForm, M.MessageContentType.AgentJoin, M.MessageContentType.AgentLeave, M.MessageContentType.AgentAssign, M.MessageContentType.AgentUnassign].includes(e.content.type),
    Lo = e => {
        ne.isInitialized() && ne.getClient().notify(e)
    },
    ru = () => {
        E.getOptions().isPreviewMode || Lo(En.EventName.WidgetOpen)
    },
    au = () => Lo(En.EventName.WidgetShow),
    Ro = () => document.visibilityState === "visible",
    ge = C(!1),
    Pt = C(!0);
E.awaitOptions().then(e => {
    const t = _e(z.SoundsEnabled);
    t ? Pt.set(t === "true") : typeof e.enableSounds == "boolean" && Pt.set(e.enableSounds)
});
const Xp = e => {
        Pt.set(e), $e({
            name: z.SoundsEnabled,
            value: e.toString()
        }), e && So()
    },
    Po = C(Ro()),
    iu = $o(() => Po.set(Ro()), eu);
ee().addEventListener("visibilitychange", () => {
    iu()
});
const cu = C(0),
    Jp = () => cu.update(e => e + 1),
    Do = 255,
    lu = 32,
    Zp = 500,
    Qp = e => {
        const t = {};
        return e.filter(n => !n.isHidden).reduce((n, s) => (n[s.name] = s.value, n), t)
    },
    em = e => {
        const t = {};
        return e.reduce((n, s) => (n[s.name] = s.validators, n), t)
    },
    tm = (e, t, n) => {
        e.update(s => ({ ...s,
            [t]: n
        }))
    },
    nm = (e, t) => {
        const n = {};
        for (const s in e) n[s] = t;
        return n
    },
    sm = () => Math.random().toString(36),
    uu = e => {
        if (!e) return !1;
        const t = e.split("@");
        if (t.length !== 2) return !1;
        const n = t[0],
            s = t[1];
        return n.length > 64 || s.length > 255 || s.split(".").some(r => r.length > 63) ? !1 : hl.test(e)
    };
var ze = (e => (e.Text = "text", e.Checkbox = "checkbox", e.Select = "select", e))(ze || {});
const Xt = () => e => {
        let t = !0;
        return e == null && (t = !1), xe(e) && (t = e.trim().length > 0), {
            type: "required",
            isValid: t
        }
    },
    du = () => e => ({
        type: "checked",
        isValid: xe(e) ? e === "true" : e === !0
    }),
    gu = () => e => ({
        type: "email",
        isValid: uu(String(e))
    }),
    fu = () => e => ({
        type: "phone",
        isValid: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$/.test(String(e))
    }),
    ln = C(void 0),
    pu = e => {
        const {
            emailControl: t
        } = E.getOptions(), n = !!(e != null && e.email);
        return t && !n
    },
    mu = e => {
        const {
            nameControl: t
        } = E.getOptions(), n = !!(e != null && e.name);
        return t && !n
    },
    hu = e => {
        const {
            numberControl: t
        } = E.getOptions(), n = !!(e != null && e.phone);
        return !!t && !n
    },
    bu = () => {
        const {
            groupSelectEnabled: e
        } = E.getOptions(), t = f(js);
        return !!e && t.length > 0
    },
    yu = () => {
        const {
            privacyNoticeEnabled: e,
            privacyNoticeCheckRequired: t
        } = E.getOptions(), n = ku();
        return !!e && t && !n
    },
    _u = e => {
        var s;
        const {
            privacyNoticeEnabled: t
        } = E.getOptions(), n = !!((s = e == null ? void 0 : e.variables) != null && s.personalDataProcessingConsent);
        return !!t && !n
    },
    wu = () => ({
        type: ze.Text,
        subType: "email",
        name: "email",
        label: "authForm.label.email",
        placeholder: "authForm.yourEmail",
        value: "",
        validators: [Xt(), gu()],
        maxLength: Do
    }),
    Cu = () => ({
        type: ze.Text,
        subType: "text",
        name: "name",
        label: "authForm.label.name",
        placeholder: "authForm.yourName",
        value: "",
        validators: [Xt()],
        maxLength: Do
    }),
    vu = () => ({
        type: ze.Text,
        subType: "tel",
        name: "phone",
        label: "authForm.label.phone",
        placeholder: "authForm.yourPhone",
        value: "",
        validators: [Xt(), fu()],
        maxLength: lu
    }),
    Su = e => {
        const t = f(js);
        return {
            type: ze.Select,
            name: "group",
            label: "authForm.label.group",
            placeholder: "authForm.group",
            value: (e == null ? void 0 : e.group) ? ? "",
            validators: [Xt()],
            options: t.map(n => ({
                text: n.name,
                value: n.key
            }))
        }
    },
    Au = () => ({
        type: ze.Checkbox,
        name: "personalDataProcessingConsent",
        label: "authForm.acceptTerms",
        value: !1,
        validators: [du()]
    }),
    Tu = () => ({
        type: ze.Checkbox,
        name: "personalDataProcessingConsent",
        label: "topBar.gdprTitle",
        value: !1,
        validators: [],
        isHidden: !0
    }),
    Bo = e => ({
        showEmail: pu(e),
        showName: mu(e),
        showPhone: hu(e),
        showGroups: bu(),
        showConsent: yu()
    }),
    Eu = e => ({
        showEmail: !!e.emailControl,
        showName: !!e.nameControl,
        showPhone: !!e.numberControl,
        showGroups: !!e.groupSelectEnabled,
        showConsent: !!e.privacyNoticeEnabled && e.privacyNoticeCheckRequired
    }),
    Mu = e => Object.values(Bo(e)).some(t => t),
    om = (e, t) => {
        const n = [],
            {
                showEmail: s,
                showName: o,
                showPhone: r,
                showGroups: a,
                showConsent: c
            } = t ? Eu(t) : Bo(e);
        return o && n.push(Cu()), s && n.push(wu()), r && n.push(vu()), a && n.push(Su(e)), c ? n.push(Au()) : n.length > 0 && (t ? t != null && t.privacyNoticeEnabled : _u(e)) && n.push(Tu()), n
    },
    Ou = () => {
        const e = _e(z.AuthForm);
        if (!e) return null;
        try {
            return JSON.parse(e)
        } catch {
            return null
        }
    },
    rm = (e, t) => {
        const n = Ou(),
            s = {
                [e]: t
            },
            o = n ? { ...n,
                ...s
            } : s;
        $e({
            name: z.AuthForm,
            value: JSON.stringify(o)
        })
    },
    am = () => {
        Js(z.AuthForm)
    },
    Fu = () => {
        var t;
        const e = f(me);
        return !!((t = e == null ? void 0 : e.variables) != null && t.authenticated)
    },
    ku = () => {
        var e;
        return ((e = f(me)) == null ? void 0 : e.gdprApproved) || !1
    },
    ws = () => {
        if (f(Ji) || Fu()) return !1;
        const e = f(me);
        if (!Mu(e)) return !1;
        const {
            requireLogin: t
        } = E.getOptions(), n = f(Ve) === X.AccountStatus.Offline;
        return !!t || n
    },
    im = async e => {
        const {
            privacyNoticeCheckRequired: t
        } = E.getOptions(), n = f(me), s = (n == null ? void 0 : n.name) ? ? e.name, o = (n == null ? void 0 : n.email) ? ? e.email, r = (n == null ? void 0 : n.phone) ? ? e.phone, a = e.group ? ? (n == null ? void 0 : n.group), c = e.personalDataProcessingConsent, i = { ...s && {
                name: s
            },
            ...o && {
                email: o
            },
            ...r && {
                phone: r
            },
            ...a && {
                group: a
            },
            ...c && t && {
                personalDataProcessingConsent: c
            }
        };
        await ne.getClient().authenticate(i), Gc(), await Vo(), Hs()
    },
    qn = C(!1),
    xo = C(!1);
ee().addEventListener("offline", () => qn.set(!0));
ee().addEventListener("online", () => qn.set(!1));
const Go = A([Gn, qn, xo], ([e, t, n]) => n ? Me.Connected : !e || t ? Me.Disconnected : Me.Connected, Me.Connecting);
let gt;
Go.subscribe(e => {
    e === Me.Disconnected && !gt && (gt = Lt(f(te)("error.noInternet"), 0)), e === Me.Connected && gt && (gt(), gt = void 0)
});
const $u = () => {
        const e = f(Go),
            t = f(Eo),
            n = f(ut);
        return e === Me.Disconnected || !t || n.disableAttachments
    },
    Dt = C(!1),
    cm = e => {
        if (f(Dt)) {
            H("There is already file upload in progress");
            return
        }
        if (e.length === 0) return;
        const t = Iu(e);
        t.length > 0 && De.add(t)
    },
    Iu = e => e.length > ft ? (Oe(`${f(te)("fileUpload.tooManyFiles")} ${ft}`), []) : e.filter(t => Lu(t)),
    Lu = e => {
        const {
            acceptedFileExtensions: t,
            acceptedFileTypes: n,
            maxFileSize: s
        } = f(Nn);
        if (!e) return !1;
        const o = t.includes(el(e.name)),
            r = n.some(a => a === e.type);
        if ($u()) return H("File upload is disabled"), !1;
        if (!f(Eo)) return Oe(f(te)("warningBar.uploadFileNotFirst")), !1;
        if (e.size > s) {
            const a = tl(s);
            return Oe(`${f(te)("fileUpload.fileTooBig")} ${a.size} ${a.unit}`), !1
        }
        return o || r ? !0 : (Oe(f(te)("fileUpload.badFileType")), !1)
    },
    Ru = () => De.count() === 0 ? [] : (De.setUploadingStatus(), nl(f(De), e => De.setFileUploaded(e.name))),
    Cs = 10,
    Pu = 1e4,
    Du = 3e4,
    Cn = {
        ":)": "🙂",
        ":-)": "🙂",
        ":D": "😀",
        ":-D": "😀",
        ";)": "😉",
        ";-)": "😉",
        "<3": "❤️",
        ":(": "😞",
        ":-(": "😞",
        ":P": "😛",
        ":-P": "😛",
        ":-o": "😮",
        ":O": "😮",
        ":/": "😕",
        ":-/": "😕"
    },
    Bu = e => {
        const t = `(${e?"$|":""} )`;
        return new RegExp(Object.keys(Cn).map(n => `${n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}${t}`).join("|"), "gi")
    },
    No = (e, t = !1) => {
        const n = Bu(t);
        return e.replace(n, s => {
            const o = Object.keys(Cn).find(a => s.toUpperCase().includes(a));
            if (!o) return s;
            const r = s.endsWith(" ") ? " " : "";
            return `${Cn[o]}${r}`
        })
    },
    xu = e => {
        if (e.length > 0 && e.length % Cs === 0) {
            const t = e.slice(-Cs),
                n = new Date(e[e.length - 1].createdAt).getTime();
            if (new Date().getTime() - n > Du || !t.every(o => o.subType === M.MessageSubType.Contact)) return !1;
            const s = new Date(t[0].createdAt).getTime();
            if (n - s < Pu) return !0
        }
        return !1
    },
    Kn = C(),
    Bt = C(!1),
    lm = C(),
    Gu = 200,
    Nu = C(!1),
    Jt = A([Kn], ([e]) => typeof e > "u" ? _e(z.Message) ? ? "" : e),
    Yn = A([Jt], ([e]) => e.trim().length === 0),
    Uo = e => {
        Kn.set(No(e))
    },
    um = (e, t) => {
        const n = f(Jt) ? ? "",
            s = n.slice(0, t),
            o = n.slice(t),
            r = `${s}${e}${o}`;
        Kn.set(r)
    },
    dm = () => {
        if (f(Bt)) return;
        ne.getClient().chatTyping(!0), Bt.set(!0)
    },
    Uu = () => {
        if (!f(Bt)) return;
        ne.getClient().chatTyping(!1), Bt.set(!1)
    },
    Vo = async (e = []) => {
        if (f(Yn) && e.length === 0) return;
        const t = No(f(Jt), !0).trim();
        await V.sendMessage(t, e), Uo(""), Uu(), e.length > 0 && (De.clear(), Dt.set(!1)), Nu.set(!0), jn()
    },
    gm = $o(async () => {
        const e = De.count() > 0;
        if (f(Yn) && !e) return;
        if (!f(ae) && ws() && Zt(), Vu() && !e) {
            Lt(f(te)("warningBar.sameMessageTwice"));
            return
        }
        if (ws()) {
            kn(Ht.AuthForm);
            return
        }
        if (xu(f(Se))) {
            Lt(f(te)("warningBar.spamProtection"));
            return
        }
        if (f(Dt)) {
            oe(f(te)("chat.fileUpload.error.stillUploading"));
            return
        }
        if (f(hn)) {
            oe(f(te)("card.sendingInProgress"));
            return
        }
        let t = [];
        e && (Dt.set(!0), t = await Ru()), await Vo(t)
    }, Gu),
    Vu = () => {
        const e = f(Zl),
            t = f(_n),
            n = f(Jt);
        return e && n === e.content.text || t && n === t
    },
    Je = (e, t) => (Z(`widget visible: ${String(t)} => reason: ${e}`), t && t !== f(Ie) && au(), t),
    Xn = C(),
    Jn = () => Xn.set(!0),
    zu = () => Xn.set(!1),
    Wu = A([Ve, Se, Yn, lo], ([e, t, n, s]) => {
        const {
            hideOfflineChat: o,
            isPreviewMode: r
        } = E.getOptions();
        return e === X.AccountStatus.Offline && !!o && Ul(t).length === 0 && n && !s && !r
    }),
    Ie = A([me, Ne, Xn, he, lo, Wu], ([e, t, n, s, o, r]) => {
        const {
            hideMobileWidget: a,
            hideWidget: c
        } = E.getOptions();
        return e != null && e.bannedAt ? Je("visitor is banned", !1) : t && a ? Je("option 'hideMobileWidget' is true", !1) : typeof n == "boolean" ? Je("set by API command", n) : s && !o ? Je("chat status is not pending", !0) : r ? Je("option 'hideOfflineChat' is true", !1) : Je(`option 'hideWidget' is ${String(c)}`, !c)
    }),
    Hu = A([Ne], ([e]) => {
        const {
            openOnTrigger: t
        } = E.getOptions();
        return t && !e
    }),
    ae = eo(z.IsMessengerFrameOpened, !1, e => !f(Ne) && e === "true"),
    Zt = () => {
        ae.set(!0), Xu(), Zc(), ru()
    },
    vn = () => {
        W.emit("messengerClose", !0), ae.set(!1), jn()
    },
    ju = A([ge, Ie, ae], ([e, t, n]) => e && t && n);

function qu() {
    const e = C(!1),
        {
            subscribe: t
        } = e;
    let n = null;
    return {
        subscribe: t,
        handleDragOver: (r, a = !0) => {
            a && r.preventDefault(), f(e) || e.set(!0), n && clearTimeout(n), n = window.setTimeout(() => {
                e.set(!1)
            }, 200)
        },
        handleDrop: r => {
            var c;
            r.preventDefault(), n && clearTimeout(n), e.set(!1);
            const a = (c = r.dataTransfer) != null && c.files ? [...r.dataTransfer.files] : [];
            return a.length === 0 && Lt("Dropped item(s) are not processable files"), {
                droppedFiles: a
            }
        }
    }
}
const fm = qu(),
    Ku = A([ge, Ie, ae], ([e, t, n]) => e && t && !n),
    Zn = C(!1),
    Qt = C(!1),
    Yu = () => {
        Zn.set(!0), Qt.set(!1)
    },
    zo = () => {
        Qt.set(!0), Zn.set(!1)
    },
    Xu = () => {
        Qt.set(!1)
    },
    Wo = A([Ne], ([e]) => {
        const {
            mobilePopupsEnabled: t
        } = E.getOptions();
        return e ? !!t : !0
    }),
    Ju = A([ge, Ie, Zn, ae, Wo], ([e, t, n, s, o]) => e && t && n && !s && o),
    Zu = A([ge, Ie, Qt, ae, Yl, Wo, bn], ([e, t, n, s, o, r, a]) => e && t && n && o && !s && r && !a),
    ht = {
        white: "#ffffff",
        slate100: "#f1f5f9",
        slate200: "#e2e8f0",
        slate300: "#cbd5e1",
        slate900: "#0f172a",
        blue700: "#1d4ed8",
        smartsuppBlue: "#1233df"
    },
    Qu = .299,
    ed = .587,
    td = .114,
    nd = 180,
    sd = -20,
    od = -.25,
    rd = .2,
    ad = -5,
    id = .03,
    cd = .5,
    vs = 5,
    Ot = (e, t) => new at(e).darken(t).toHexString(),
    ld = e => {
        const t = new at(e).toRgb();
        return `${t.r}, ${t.g}, ${t.b}`
    },
    xt = e => /^#[0-9A-F]{6}$/i.test(e),
    en = e => {
        const {
            r: t,
            g: n,
            b: s
        } = new at(e).toRgb();
        return Math.sqrt(Qu * (t * t) + ed * (n * n) + td * (s * s)) > nd
    },
    ud = e => {
        const t = new at(e),
            {
                s: n,
                l: s
            } = t.toHsl();
        return t.spin(sd).desaturate(n * od).lighten(s * rd).toHexString()
    },
    dd = (e, t = cd) => {
        const n = new at(e),
            {
                s,
                l: o
            } = n.toHsl();
        return n.spin(ad).saturate(s * id).darken(o * t).toHexString()
    },
    gd = e => {
        const {
            color: t,
            color2: n,
            colorGradient: s
        } = e;
        return s ? n ? {
            from: t,
            to: n
        } : en(t) ? {
            from: t,
            to: dd(t)
        } : {
            from: t,
            to: ud(t)
        } : {
            from: t,
            to: t
        }
    },
    fd = e => en(e) ? ht.slate900 : ht.white,
    pd = e => en(e) ? .1 : .2,
    md = e => {
        if (en(e)) {
            const t = new at(e).getLuminance();
            return t > .8 ? Ot(e, Math.pow(10 * t, t)) : e
        }
        return e
    },
    ce = (e, t, n) => {
        e.documentElement.style.setProperty(t, n)
    },
    hd = (e, t) => {
        const {
            color: n
        } = t, s = gd(t), o = s.from === "#ffffff" && s.from === s.to ? {
            from: ht.slate300,
            to: ht.slate300
        } : s, r = fd(n);
        ce(e, "--color-primary", n), ce(e, "--color-primary-content", r), ce(e, "--color-primary-content-rgb", ld(r)), ce(e, "--color-primary-gradient-from", s.from), ce(e, "--color-primary-gradient-to", s.to), ce(e, "--color-primary-gradient-button-from", o.from), ce(e, "--color-primary-gradient-button-to", o.to), ce(e, "--color-primary-gradient-hover-from", Ot(s.from, vs)), ce(e, "--color-primary-gradient-hover-to", Ot(s.to, vs));
        const a = md(n);
        ce(e, "--color-primary-button", a), ce(e, "--color-primary-button-hover", Ot(a, 10)), ce(e, "--color-primary-button-content", r), ce(e, "--opacity-primary-content", String(pd(n)))
    },
    bd = () => {
        const e = C({
                color: ht.smartsuppBlue,
                color2: null,
                colorGradient: !0
            }),
            {
                subscribe: t,
                set: n
            } = e;
        return {
            subscribe: t,
            setThemeColor: o => {
                const {
                    color: r,
                    color2: a,
                    colorGradient: c
                } = o;
                if (xt(r)) {
                    if (c && a && !xt(a)) {
                        H(`Provided color '${a}' is not valid. Default color will be used instead.`);
                        return
                    }
                } else {
                    H(`Provided color '${r}' is not valid. Default color will be used instead.`);
                    return
                }
                n({
                    color: r,
                    color2: a,
                    colorGradient: c
                })
            }
        }
    },
    Qn = bd(),
    Ho = 24,
    jo = 12,
    yd = 300,
    qo = 56,
    Ko = qo,
    _d = 166,
    wd = Ko + 16,
    Cd = 380,
    vd = 672,
    Sd = 12,
    Ad = 560,
    Td = 840,
    Ed = 104,
    Md = 60,
    pm = A([Ne], ([e]) => e ? Md : Ed),
    rt = e => `${e}px`,
    Yo = e => {
        if (e) return xe(e) ? parseInt(e, 10) : e
    },
    Od = (e, t) => e ? {
        width: "100%",
        height: "100%"
    } : t ? {
        width: Ad,
        height: Td
    } : {
        width: Cd,
        height: vd
    },
    Fd = e => {
        e.style.borderRadius = rt(Sd), e.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 5px 40px"
    },
    Xo = () => {
        const {
            offsetY: e
        } = E.getOptions();
        return Yo(e) ? ? Ho
    },
    Jo = () => {
        const {
            offsetX: e
        } = E.getOptions();
        return Yo(e) ? ? jo
    },
    kd = e => e ? 0 : Ho,
    $d = e => e ? 0 : jo,
    es = () => {
        const {
            position: e
        } = E.getOptions();
        return e === "fixed"
    },
    ts = e => {
        es() && (e.style.position = "fixed")
    },
    tn = (e, t) => {
        es() && (e.style.bottom = rt(t))
    },
    nn = (e, t) => {
        if (es()) {
            const {
                orientation: n
            } = E.getOptions();
            n === "right" ? (e.style.left = "initial", e.style.right = rt(t)) : (e.style.left = rt(t), e.style.right = "initial")
        }
    },
    sn = e => {
        const {
            zIndex: t
        } = E.getOptions();
        e.style.zIndex = String(t ? ? "auto")
    },
    Zo = e => {
        e.style.overflow = "hidden"
    },
    Ct = e => {
        const t = document.createElement("iframe");
        return t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.border = "none", t.style.display = "block", t.style.textAlign = "left", t.style.margin = "0", t.style.padding = "0", t.style.top = "0", t.style.left = "0", t.style.opacity = "1", e && e(t), t.getAttribute("style") ? ? ""
    },
    Id = e => {
        ts(e), tn(e, Xo()), nn(e, Jo()), sn(e)
    },
    Ld = (e, t) => {
        ts(e), tn(e, kd(t)), nn(e, $d(t)), sn(e), Zo(e), t || Fd(e)
    },
    Qo = e => {
        ts(e), tn(e, Xo() + wd), nn(e, Jo()), sn(e), Zo(e)
    },
    Rd = e => {
        e.style.position = "fixed", e.style.width = "100%", e.style.height = "100%", tn(e, 0), nn(e, 0), sn(e)
    },
    Pd = e => {
        Id(e)
    },
    Dd = (e, t) => {
        Ld(e, t)
    },
    Bd = e => {
        Qo(e)
    },
    xd = e => {
        Qo(e)
    },
    Gd = e => {
        Rd(e)
    },
    er = C(yd),
    Nd = C(_d),
    Ud = C(!1),
    tr = C(void 0),
    ns = A([Ne, tr], ([e, t]) => {
        const {
            buttonStyle: n
        } = E.getOptions();
        return t ? t === "bubble" : e || n === "bubble"
    }),
    Vd = A([ns, er], ([e, t]) => e ? qo : t),
    nr = C(),
    zd = A([nr], ([e]) => typeof e > "u" ? _e(z.IsMessengerFrameExpanded) === (!0).toString() : e),
    mm = e => {
        $e({
            name: z.IsMessengerFrameExpanded,
            value: e.toString()
        }), nr.set(e)
    };
var R = (e => (e.Name = "name", e.Group = "group", e.Email = "email", e.Phone = "phone", e.Variables = "variables", e.Language = "language", e.ChatClose = "chat:close", e.ChatOpen = "chat:open", e.ChatShow = "chat:show", e.ChatHide = "chat:hide", e.ThemeColor = "theme:color", e.ChatMessage = "chat:message", e.RecordingDisable = "recording:disable", e.RecordingOff = "recording:off", e.HtmlApply = "html:apply", e.On = "on", e.AnalyticsConsent = "analyticsConsent", e.MarketingConsent = "marketingConsent", e.OpenRateForm = "openRateForm", e.OpenAuthForm = "openAuthForm", e.WidgetStatus = "widgetStatus", e.Translations = "translations", e.AuthFormFields = "authFormFields", e.ButtonStyle = "buttonStyle", e.PreviewTranslate = "previewTranslate", e.DisableConnectionStatus = "disableConnectionStatus", e))(R || {}),
    pt = (e => (e.MessageSent = "message_sent", e.MessageReceived = "message_received", e.MessengerClose = "messenger_close", e))(pt || {});
const Wd = e => {
        W.on("messageSent", e)
    },
    Hd = e => {
        W.on("messageReceived", e)
    },
    jd = e => {
        W.on("messengerClose", e)
    },
    qd = {
        [pt.MessageSent]: Wd,
        [pt.MessageReceived]: Hd,
        [pt.MessengerClose]: jd
    },
    Kd = (e, t) => {
        const n = qd[e];
        n && n(t)
    },
    We = "https://docs.smartsupp.com/chat-box/",
    Yd = `${We}localization/#supported-languages`,
    Xd = `${We}visitor-identification/#custom-visitor-data`,
    Jd = `${We}javascript-api/events/`,
    Zd = "https://www.smartsupp.com/help/cookie-consent/#where-to-enable-cookie-consent-in-smartsupp",
    sr = "https://www.smartsupp.com/pricing",
    ss = C({}),
    Sn = (e, t) => {
        ss.update(n => ({ ...n,
            [e]: t
        }))
    },
    Qd = e => Object.values(R).some(t => t === e),
    Le = (e, t) => xe(t) ? !0 : (H(`Parameter of '${e}' API command must be type string. See ${We} for more information.`), !1),
    on = (e, t) => ro(t) ? !0 : (H(`Parameter of '${e}' API command must be type boolean. See ${We} for more information.`), !1),
    eg = (e, t) => typeof t != "function" ? (H(`Parameter of '${e}' API command must be type function. See ${We} for more information.`), !1) : !0,
    rn = (e, t) => ao(t) ? !0 : (H(`Parameter of '${e}' API command must be type object. See ${Xd} for more information.`), !1),
    tg = (e, t) => {
        const n = Object.values(pt);
        return n.includes(t) ? !0 : (H(`Unknown event: '${t}'. Available event names are: ${n.join(", ")}. See ${Jd} for more information.`), !1)
    },
    or = e => {
        H(`Unknown API command: '${e}'. See ${We} to check available API commands.`)
    },
    rr = () => {
        var e;
        return !!((e = E.getOptions().features) != null && e.api)
    },
    ng = () => {
        var e;
        return !!((e = E.getOptions().features) != null && e.groups)
    },
    He = () => rr() ? !0 : (H(`Chat box API feature is not enabled. See ${sr} to upgrade your package.`), !1),
    sg = () => !rr() || !ng() ? (H(`Chat box Groups feature is not enabled. See ${sr} to upgrade your package.`), !1) : !0,
    ar = () => {
        Dn() || H(`Enable managing cookie consent in widget settings to allow this command. See ${Zd} for more information.`)
    },
    og = () => {
        if (!He()) return;
        const e = () => {
            Zt(), Jn()
        };
        if (!f(ge)) {
            _t.push(e);
            return
        }
        e()
    },
    rg = () => {
        if (He()) {
            if (!f(ge)) {
                _t.push(vn);
                return
            }
            vn()
        }
    },
    ag = () => {
        He() && Jn()
    },
    ig = () => {
        He() && zu()
    },
    cg = (e, t) => {
        if (He() && e === R.Language && Le(e, t)) {
            if (!so(t)) {
                H(`Provided language '${t}' is not supported. See ${Yd} to check supported languages.`);
                return
            }
            if (!f(ge)) {
                Sn(e, t);
                return
            }
            ii(t)
        }
    },
    lg = (e, t) => {
        let n, s = null,
            o = !0;
        if (He()) {
            if (typeof t == "string" && Le(e, t)) n = t;
            else if (rn(e, t)) {
                if (n = t.color, s = t.color2, o = t.colorGradient, !on(e, o)) return
            } else return;
            if (xt(n)) {
                if (o && s && !xt(s)) {
                    H(`Provided color '${s}' is not valid. Default color will be used instead.`);
                    return
                }
            } else {
                H(`Provided color '${n}' is not valid. Please use hex color code.`);
                return
            }
            Qn.setThemeColor({
                color: n,
                color2: s,
                colorGradient: o
            })
        }
    },
    ug = (e, t) => {
        He() && Le(e, t) && Uo(t)
    },
    dg = (e, t, n) => {
        Le(e, t) && tg(e, t) && eg(e, n) && Kd(t, n)
    },
    gg = (e, t) => {
        rn(e, t) && me.updateVisitorVariables(Vi(t))
    },
    Ft = (e, t) => {
        e !== R.Name && e !== R.Email && e !== R.Phone && e !== R.Group || Le(e, t) && me.updateVisitorProperty(e, t)
    },
    fg = (e, t) => {
        if (!sg() || !Le(e, t)) return;
        const n = f(Ln)[t];
        if (f(ge) && !n) {
            H(`Group with key '${t}' does not exist. Please provide correct group key from your group settings.`);
            return
        }
        Ft(e, t)
    },
    pg = (e, t) => {
        on(e, t) && (ar(), W.emit("analyticsConsentChanged", !!t))
    },
    mg = (e, t) => {
        on(e, t) && (ar(), W.emit("marketingConsentChanged", !!t))
    },
    hg = () => {
        Oo(f(To) || "")
    },
    bg = () => {
        kn(Ht.AuthForm)
    },
    yg = (e, t) => {
        Le(e, t) && (t !== X.AccountStatus.Online && t !== X.AccountStatus.Offline || Ve.set(t))
    },
    _g = (e, t) => {
        rn(e, t) && li(t)
    },
    wg = (e, t) => {
        rn(e, t) && (f(ln) || ln.set(E.getOptions()), ln.update(n => ({ ...n,
            ...t
        })))
    },
    Cg = (e, t) => {
        Le(e, t) && tr.set(t)
    },
    vg = () => {
        let e = () => {};
        e = yt.subscribe(() => {
            f(Se).forEach(t => {
                var s;
                const n = ((s = t.content) == null ? void 0 : s.data) || "";
                typeof n == "string" && n.match(/widgetPreview\..*/) && (t.content.text = f(te)(n), V.replaceMessage(t))
            }), e()
        })
    },
    Sg = (e, t) => {
        on(e, t) && xo.set(t)
    },
    Ag = {
        version: "b4ae2ce0c8a5c74b8291ac1ada4a8faa8ade4824",
        execute: e => {
            const t = e[0];
            if (typeof t == "function") {
                Mg(t);
                return
            }
            if (!Qd(t)) {
                or(String(t));
                return
            }
            Eg(t, e[1], ...e.slice(2))
        },
        exec: function(...e) {
            this.execute(e)
        }
    },
    Tg = {
        [R.ChatOpen]: og,
        [R.ChatClose]: rg,
        [R.ChatShow]: ag,
        [R.ChatHide]: ig,
        [R.ChatMessage]: ug,
        [R.Language]: cg,
        [R.ThemeColor]: lg,
        [R.On]: dg,
        [R.Variables]: gg,
        [R.Name]: Ft,
        [R.Group]: fg,
        [R.Email]: Ft,
        [R.Phone]: Ft,
        [R.AnalyticsConsent]: pg,
        [R.MarketingConsent]: mg,
        [R.HtmlApply]: null,
        [R.RecordingDisable]: null,
        [R.RecordingOff]: null,
        [R.OpenRateForm]: hg,
        [R.OpenAuthForm]: bg,
        [R.WidgetStatus]: yg,
        [R.Translations]: _g,
        [R.AuthFormFields]: wg,
        [R.ButtonStyle]: Cg,
        [R.PreviewTranslate]: vg,
        [R.DisableConnectionStatus]: Sg
    },
    Eg = (e, t, ...n) => {
        const s = Tg[e];
        if (s === void 0) {
            or(e);
            return
        }
        s !== null && (s(e, t, ...n), Z(`🧙‍♂️[API] ${e}${t?":":""}`, t ? ? ""))
    },
    Mg = e => {
        f(ge) ? e() : _t.push(e)
    },
    Ee = ee(),
    et = (e, t) => {
        Z(`recordings ${e?"✅":"⛔️"}${t?` => reason: ${t}`:""}`)
    },
    ir = () => {
        const {
            smartlook: e,
            recordingOff: t
        } = E.getOptions();
        if (!e || !e.enabled) return et(!1, "recordings are not enabled");
        if (Ee.smartlook) return et(!1, "smartlook is already in parent window");
        if (!Bn()) return et(!1, "analytics consent not given");
        if (t) return et(!1, "recording is disabled by 'recordingOff' option");
        Fg()
    },
    Og = (e, t) => {
        const n = e.document.getElementsByTagName("head")[0],
            s = e.document.createElement("script");
        s.async = !0, s.type = "text/javascript", s.charset = "utf-8", s.crossOrigin = "anonymous", s.src = t, n.appendChild(s)
    },
    Fg = () => {
        const {
            smartlook: e,
            recordingDisable: t
        } = E.getOptions(), n = Ee.smartlook = function(...s) {
            var o, r;
            (r = (o = Ee.smartlook) == null ? void 0 : o.api) == null || r.push(s)
        };
        Ee.smartlook.api = [], Og(Ee, e.scriptUrl), n("init", e.key, {
            host: e.serverHost
        }), n("record", {
            forms: !0,
            numbers: !0,
            emails: !0,
            ips: !1
        }), t ? (n("pause"), et(!1, "recording is disabled by 'recordingDisable' option")) : (n(() => {
            var o;
            const s = (o = Ee.smartlook) == null ? void 0 : o.visitorId;
            if (!s) {
                oe("Smartlook visitorId is undefined");
                return
            }
            me.updateVisitorVariables({
                smartlook_vid: s
            }), et(!0)
        }), Z("recordings: initializing ⏳"))
    };
W.on("analyticsConsentChanged", e => {
    if (Ee.smartlook) {
        Ee.smartlook(e ? "resume" : "pause"), Z(`recordings ${e?"resumed ▶️":"paused ⏸"}`);
        return
    }
    ir()
});

function kg(e) {
    let t, n, s;
    const o = e[3].default,
        r = Gt(o, e, e[2], null);
    return {
        c() {
            t = T("div"), n = T("div"), r && r.c(), p(n, "id", e[1])
        },
        m(a, c) {
            $(a, t, c), w(t, n), r && r.m(n, null), e[4](n), s = !0
        },
        p(a, [c]) {
            r && r.p && (!s || c & 4) && Nt(r, o, a, a[2], s ? Vt(o, a[2], c, null) : Ut(a[2]), null)
        },
        i(a) {
            s || (m(r, a), s = !0)
        },
        o(a) {
            h(r, a), s = !1
        },
        d(a) {
            a && I(t), r && r.d(a), e[4](null)
        }
    }
}

function $g(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t, r;
    const a = `${ee().SMARTSUPP_AUTOCREATE!==!1?"smartsupp":Rn(window).id}-widget-container`;

    function c() {
        return Pe().body
    }
    Ge(() => {
        c().appendChild(r)
    }), Ns(() => {
        var l;
        (l = Pe().getElementById(a)) == null || l.remove()
    });

    function i(l) {
        it[l ? "unshift" : "push"](() => {
            r = l, n(0, r)
        })
    }
    return e.$$set = l => {
        "$$scope" in l && n(2, o = l.$$scope)
    }, [r, a, o, s, i]
}
class Ig extends N {
    constructor(t) {
        super(), U(this, t, $g, kg, B, {})
    }
}

function Lg(e) {
    let t;
    return {
        c() {
            t = T("iframe"), p(t, "id", e[2]), p(t, "title", e[1]), p(t, "style", e[0]), t.allowFullscreen = !0, p(t, "scrolling", "no")
        },
        m(n, s) {
            $(n, t, s), e[7](t)
        },
        p(n, [s]) {
            s & 4 && p(t, "id", n[2]), s & 2 && p(t, "title", n[1]), s & 1 && p(t, "style", n[0])
        },
        i: Q,
        o: Q,
        d(n) {
            n && I(t), e[7](null)
        }
    }
}

function Rg(e, t, n) {
    let s;
    q(e, Qn, y => n(6, s = y));
    let {
        component: o
    } = t, {
        frameStyle: r
    } = t, {
        title: a
    } = t, {
        id: c
    } = t, i, l, u;
    const d = y => {
            u && u.$destroy(), y && o && (u = new o({
                target: y.body
            }))
        },
        g = y => {
            l && hd(l, y)
        },
        b = y => {
            const L = l.createElement("style");
            return L.textContent = y, l.head.appendChild(L), L
        },
        S = () => {
            for (const y of window.document.styleSheets) {
                const L = [...y.cssRules].map(j => j.cssText).join("");
                b(L)
            }
        },
        v = () => {
            i.contentDocument && (n(5, l = i.contentDocument), S())
        };
    Ge(async () => {
        var y;
        await pr(), ((y = i.contentDocument) == null ? void 0 : y.readyState) === "complete" && i.contentDocument.defaultView ? v() : i.addEventListener("load", v)
    }), Ns(() => {
        i && i.removeEventListener("load", v), u && u.$destroy()
    });

    function _(y) {
        it[y ? "unshift" : "push"](() => {
            i = y, n(3, i)
        })
    }
    return e.$$set = y => {
        "component" in y && n(4, o = y.component), "frameStyle" in y && n(0, r = y.frameStyle), "title" in y && n(1, a = y.title), "id" in y && n(2, c = y.id)
    }, e.$$.update = () => {
        e.$$.dirty & 32 && d(l), e.$$.dirty & 96 && l && g(s)
    }, [r, a, c, i, o, l, s, _]
}
class vt extends N {
    constructor(t) {
        super(), U(this, t, Rg, Lg, B, {
            component: 4,
            frameStyle: 0,
            title: 1,
            id: 2
        })
    }
}

function Pg(e) {
    let t, n;
    return {
        c() {
            t = un("svg"), n = un("path"), p(n, "d", "M63.113,18.51v-.16C60.323,7.05,44.582,3,31.972,3S3.582,7,.792,18.5a66.22,66.22,0,0,0,0,20.46c1.18,4.74,5.05,8.63,11.36,11.41l-4,5A3.47,3.47,0,0,0,10.882,61a3.39,3.39,0,0,0,1.44-.31L26.862,54c1.79.18,3.49.27,5.07.27,11.04.04,28.41-4.04,31.18-15.43a60.33,60.33,0,0,0,0-20.33Z"), p(t, "xmlns", "http://www.w3.org/2000/svg"), p(t, "viewBox", "0 0 64 64"), p(t, "fill", "currentColor"), p(t, "preserveAspectRatio", "xMidYMid meet"), p(t, "width", e[0]), p(t, "height", e[0])
        },
        m(s, o) {
            $(s, t, o), w(t, n)
        },
        p(s, [o]) {
            o & 1 && p(t, "width", s[0]), o & 1 && p(t, "height", s[0])
        },
        i: Q,
        o: Q,
        d(s) {
            s && I(t)
        }
    }
}

function Dg(e, t, n) {
    let {
        size: s = 16
    } = t;
    return e.$$set = o => {
        "size" in o && n(0, s = o.size)
    }, [s]
}
class Bg extends N {
    constructor(t) {
        super(), U(this, t, Dg, Pg, B, {
            size: 0
        })
    }
}

function Ss(e) {
    let t;
    const n = e[2].default,
        s = Gt(n, e, e[1], null);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 2) && Nt(s, n, o, o[1], t ? Vt(n, o[1], r, null) : Ut(o[1]), null)
        },
        i(o) {
            t || (m(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function xg(e) {
    let t, n, s = e[0] && Ss(e);
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? (s.p(o, r), r & 1 && m(s, 1)) : (s = Ss(o), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}

function Gg(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t, r = !1;
    return Ge(() => {
        n(0, r = !0)
    }), e.$$set = a => {
        "$$scope" in a && n(1, o = a.$$scope)
    }, [r, o, s]
}
class Ng extends N {
    constructor(t) {
        super(), U(this, t, Gg, xg, B, {})
    }
}

function Ug(e) {
    let t, n, s, o;
    return n = new Bg({
        props: {
            size: 24
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), p(t, "class", "transform transition-transform duration-300 group-hover:scale-115")
        },
        m(r, a) {
            $(r, t, a), F(n, t, null), o = !0
        },
        p: Q,
        i(r) {
            o || (m(n.$$.fragment, r), r && ve(() => {
                o && (s || (s = tt(t, nt, {
                    delay: 200,
                    duration: 300,
                    start: .6,
                    opacity: .8
                }, !0)), s.run(1))
            }), o = !0)
        },
        o(r) {
            h(n.$$.fragment, r), r && (s || (s = tt(t, nt, {
                delay: 200,
                duration: 300,
                start: .6,
                opacity: .8
            }, !1)), s.run(0)), o = !1
        },
        d(r) {
            r && I(t), k(n), r && s && s.end()
        }
    }
}

function Vg(e) {
    let t, n;
    return t = new Ng({
        props: {
            $$slots: {
                default: [Ug]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}
class cr extends N {
    constructor(t) {
        super(), U(this, t, null, Vg, B, {})
    }
}

function zg(e) {
    let t, n, s, o;
    return s = new cr({}), {
        c() {
            t = T("div"), n = T("div"), O(s.$$.fragment), p(n, "class", "flex-center w-12 h-12 bg-white bg-opacity-10 rounded-full"), p(t, "class", "p-1")
        },
        m(r, a) {
            $(r, t, a), w(t, n), F(s, n, null), o = !0
        },
        p: Q,
        i(r) {
            o || (m(s.$$.fragment, r), o = !0)
        },
        o(r) {
            h(s.$$.fragment, r), o = !1
        },
        d(r) {
            r && I(t), k(s)
        }
    }
}
class Wg extends N {
    constructor(t) {
        super(), U(this, t, null, zg, B, {})
    }
}

function Hg(e) {
    let t, n, s = e[1]("button.greeting") + "",
        o, r, a, c;
    return a = new Wg({}), {
        c() {
            t = T("div"), n = T("div"), o = zt(s), r = x(), O(a.$$.fragment), p(n, "class", "flex-center whitespace-nowrap pl-4 pr-1"), p(n, "data-testid", re.widgetButtonText), p(t, "class", "flex")
        },
        m(i, l) {
            $(i, t, l), w(t, n), w(n, o), w(t, r), F(a, t, null), e[2](t), c = !0
        },
        p(i, [l]) {
            (!c || l & 2) && s !== (s = i[1]("button.greeting") + "") && Wt(o, s)
        },
        i(i) {
            c || (m(a.$$.fragment, i), c = !0)
        },
        o(i) {
            h(a.$$.fragment, i), c = !1
        },
        d(i) {
            i && I(t), k(a), e[2](null)
        }
    }
}

function jg(e, t, n) {
    let s;
    q(e, te, a => n(1, s = a));
    let o;
    Ge(() => {
        const a = Math.ceil(o.getBoundingClientRect().width);
        er.set(a)
    });

    function r(a) {
        it[a ? "unshift" : "push"](() => {
            o = a, n(0, o)
        })
    }
    return [o, s, r]
}
class qg extends N {
    constructor(t) {
        super(), U(this, t, jg, Hg, B, {})
    }
}

function As(e) {
    let t, n, s;
    return {
        c() {
            t = T("div"), p(t, "id", "widget-online-badge"), p(t, "class", "absolute left-0 bottom-0 w-2 h-2 p-1.5 bg-green-400 rounded-full border-2 border-white"), p(t, "data-testid", re.widgetOnlineBadge)
        },
        m(o, r) {
            $(o, t, r), s = !0
        },
        i(o) {
            s || (o && ve(() => {
                s && (n || (n = tt(t, nt, {}, !0)), n.run(1))
            }), s = !0)
        },
        o(o) {
            o && (n || (n = tt(t, nt, {}, !1)), n.run(0)), s = !1
        },
        d(o) {
            o && I(t), o && n && n.end()
        }
    }
}

function Kg(e) {
    let t, n = e[0] && As();
    return {
        c() {
            n && n.c(), t = we()
        },
        m(s, o) {
            n && n.m(s, o), $(s, t, o)
        },
        p(s, [o]) {
            s[0] ? n ? o & 1 && m(n, 1) : (n = As(), n.c(), m(n, 1), n.m(t.parentNode, t)) : n && (le(), h(n, 1, 1, () => {
                n = null
            }), ue())
        },
        i(s) {
            m(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && I(t), n && n.d(s)
        }
    }
}

function Yg(e, t, n) {
    let s;
    return q(e, Xi, o => n(0, s = o)), [s]
}
class Xg extends N {
    constructor(t) {
        super(), U(this, t, Yg, Kg, B, {})
    }
}

function Ts(e) {
    let t, n = (e[0] > 99 ? "99+" : e[0]) + "",
        s, o, r;
    return {
        c() {
            t = T("div"), s = zt(n), p(t, "id", "widget-unread-messages-badge"), p(t, "class", "absolute right-0 top-0 min-w-5 h-5 flex-center px-1 text-white bg-red-500 text-xs rounded-full shadow"), p(t, "data-testid", re.widgetUnreadMessagesBadge)
        },
        m(a, c) {
            $(a, t, c), w(t, s), r = !0
        },
        p(a, c) {
            (!r || c & 1) && n !== (n = (a[0] > 99 ? "99+" : a[0]) + "") && Wt(s, n)
        },
        i(a) {
            r || (a && ve(() => {
                r && (o || (o = tt(t, nt, {}, !0)), o.run(1))
            }), r = !0)
        },
        o(a) {
            a && (o || (o = tt(t, nt, {}, !1)), o.run(0)), r = !1
        },
        d(a) {
            a && I(t), a && o && o.end()
        }
    }
}

function Jg(e) {
    let t, n = e[1] && Ts(e);
    return {
        c() {
            n && n.c(), t = we()
        },
        m(s, o) {
            n && n.m(s, o), $(s, t, o)
        },
        p(s, [o]) {
            s[1] ? n ? (n.p(s, o), o & 2 && m(n, 1)) : (n = Ts(s), n.c(), m(n, 1), n.m(t.parentNode, t)) : n && (le(), h(n, 1, 1, () => {
                n = null
            }), ue())
        },
        i(s) {
            m(n)
        },
        o(s) {
            h(n)
        },
        d(s) {
            s && I(t), n && n.d(s)
        }
    }
}

function Zg(e, t, n) {
    let s;
    q(e, Ao, r => n(0, s = r));
    let o;
    return e.$$.update = () => {
        e.$$.dirty & 1 && n(1, o = s > 0)
    }, [s, o]
}
class Qg extends N {
    constructor(t) {
        super(), U(this, t, Zg, Jg, B, {})
    }
}

function ef(e) {
    let t, n;
    return t = new qg({}), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}

function tf(e) {
    let t, n;
    return t = new cr({}), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}

function nf(e) {
    let t, n, s, o, r, a, c, i, l, u, d;
    const g = [tf, ef],
        b = [];

    function S(v, _) {
        return v[0] ? 0 : 1
    }
    return s = S(e), o = b[s] = g[s](e), a = new Xg({}), i = new Qg({}), {
        c() {
            t = T("div"), n = T("div"), o.c(), r = x(), O(a.$$.fragment), c = x(), O(i.$$.fragment), p(n, "role", "button"), p(n, "tabindex", 0), p(n, "class", "group flex-center w-full bg-primary-gradient bg-primary-gradient-hover text-primary-content rounded-full overflow-hidden cursor-pointer"), p(n, "data-testid", re.widgetButton), p(t, "id", "smartsupp-widget-button"), p(t, "class", "h-full w-full relative flex justify-end")
        },
        m(v, _) {
            $(v, t, _), w(t, n), b[s].m(n, null), w(n, r), F(a, n, null), w(t, c), F(i, t, null), l = !0, u || (d = Fe(n, "click", Zt), u = !0)
        },
        p(v, [_]) {
            let y = s;
            s = S(v), s !== y && (le(), h(b[y], 1, 1, () => {
                b[y] = null
            }), ue(), o = b[s], o || (o = b[s] = g[s](v), o.c()), m(o, 1), o.m(n, r))
        },
        i(v) {
            l || (m(o), m(a.$$.fragment, v), m(i.$$.fragment, v), l = !0)
        },
        o(v) {
            h(o), h(a.$$.fragment, v), h(i.$$.fragment, v), l = !1
        },
        d(v) {
            v && I(t), b[s].d(), k(a), k(i), u = !1, d()
        }
    }
}

function sf(e, t, n) {
    let s;
    return q(e, ns, o => n(0, s = o)), [s]
}
class of extends N {
    constructor(t) {
        super(), U(this, t, sf, nf, B, {})
    }
}

function Es(e) {
    let t, n = e[2] || e[3],
        s, o, r, a, c, i = Ms();
    return {
        c() {
            t = T("div"), i.c(), G(t, "border-radius", "9999px"), G(t, "box-shadow", "rgb(0 0 0 / 6%) 0px 1px 6px 0px, rgb(0 0 0 / 12%) 0px 2px 32px 0px"), p(t, "data-testid", re.widgetButtonFrame), G(t, "height", Ko)
        },
        m(l, u) {
            $(l, t, u), i.m(t, null), e[5](t), r = !0, a || (c = bt(Pd.call(null, t)), a = !0)
        },
        p(l, u) {
            u & 12 && B(n, n = l[2] || l[3]) ? (le(), h(i, 1, 1, Q), ue(), i = Ms(), i.c(), m(i, 1), i.m(t, null)) : i.p(l, u)
        },
        i(l) {
            r || (m(i), l && ve(() => {
                r && (o && o.end(1), s = ct(t, pe, {
                    y: 20,
                    delay: 150,
                    duration: 300
                }), s.start())
            }), r = !0)
        },
        o(l) {
            h(i), s && s.invalidate(), l && (o = lt(t, mr, {
                duration: 250
            })), r = !1
        },
        d(l) {
            l && I(t), i.d(l), e[5](null), l && o && o.end(), a = !1, c()
        }
    }
}

function Ms(e) {
    let t, n;
    return t = new vt({
        props: {
            component: of ,
            id: re.widgetButtonFrame,
            title: "Smartsupp widget button",
            frameStyle: Ct()
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p: Q,
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}

function rf(e) {
    let t, n, s = e[1] && Es(e);
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r), r & 2 && m(s, 1)) : (s = Es(o), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}

function af(e, t, n) {
    let s, o, r, a;
    q(e, Vd, u => n(4, s = u)), q(e, Ku, u => n(1, o = u)), q(e, ns, u => n(2, r = u)), q(e, te, u => n(3, a = u));
    let c;
    const i = u => {
        n(0, c.style.width = `${u}px`, c)
    };

    function l(u) {
        it[u ? "unshift" : "push"](() => {
            c = u, n(0, c)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 17 && c && i(s)
    }, [c, o, r, a, s, l]
}
class cf extends N {
    constructor(t) {
        super(), U(this, t, af, rf, B, {})
    }
}

function lf(e) {
    let t;
    return {
        c() {
            t = T("div"), p(t, "class", e[3]), Y(t, "bg-gray-200", e[2] === "gray"), Y(t, "bg-gray-300", e[2] === "darkGray"), G(t, "height", e[0]), G(t, "width", e[1])
        },
        m(n, s) {
            $(n, t, s)
        },
        p(n, [s]) {
            s & 4 && Y(t, "bg-gray-200", n[2] === "gray"), s & 4 && Y(t, "bg-gray-300", n[2] === "darkGray"), s & 1 && G(t, "height", n[0]), s & 2 && G(t, "width", n[1])
        },
        i: Q,
        o: Q,
        d(n) {
            n && I(t)
        }
    }
}

function uf(e, t, n) {
    let {
        height: s = 20
    } = t, {
        width: o = "100%"
    } = t, {
        colorScheme: r = "gray"
    } = t, {
        roundedStyle: a = "rounded-full"
    } = t;
    const c = `${a} animate-pulse`;
    return e.$$set = i => {
        "height" in i && n(0, s = i.height), "width" in i && n(1, o = i.width), "colorScheme" in i && n(2, r = i.colorScheme), "roundedStyle" in i && n(4, a = i.roundedStyle)
    }, [s, o, r, c, a]
}
class ye extends N {
    constructor(t) {
        super(), U(this, t, uf, lf, B, {
            height: 0,
            width: 1,
            colorScheme: 2,
            roundedStyle: 4
        })
    }
}

function df(e) {
    let t, n;
    return t = new ye({
        props: {
            colorScheme: "darkGray",
            width: e[0],
            height: e[0]
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.width = s[0]), o & 1 && (r.height = s[0]), t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}

function gf(e, t, n) {
    let {
        size: s = 20
    } = t;
    return e.$$set = o => {
        "size" in o && n(0, s = o.size)
    }, [s]
}
class Re extends N {
    constructor(t) {
        super(), U(this, t, gf, df, B, {
            size: 0
        })
    }
}
const ff = e => ({}),
    Os = e => ({}),
    pf = e => ({
        error: e & 8
    }),
    Fs = e => ({
        error: e[3]
    });

function mf(e) {
    let t, n, s;
    var o = e[2];

    function r(a, c) {
        return {}
    }
    return o && (t = kt(o, r())), {
        c() {
            t && O(t.$$.fragment), n = we()
        },
        m(a, c) {
            t && F(t, a, c), $(a, n, c), s = !0
        },
        p(a, c) {
            if (c & 4 && o !== (o = a[2])) {
                if (t) {
                    le();
                    const i = t;
                    h(i.$$.fragment, 1, 0, () => {
                        k(i, 1)
                    }), ue()
                }
                o ? (t = kt(o, r()), O(t.$$.fragment), m(t.$$.fragment, 1), F(t, n.parentNode, n)) : t = null
            }
        },
        i(a) {
            s || (t && m(t.$$.fragment, a), s = !0)
        },
        o(a) {
            t && h(t.$$.fragment, a), s = !1
        },
        d(a) {
            a && I(n), t && k(t, a)
        }
    }
}

function hf(e) {
    let t;
    const n = e[7].loading,
        s = Gt(n, e, e[6], Os);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 64) && Nt(s, n, o, o[6], t ? Vt(n, o[6], r, ff) : Ut(o[6]), Os)
        },
        i(o) {
            t || (m(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function bf(e) {
    let t;
    const n = e[7].error,
        s = Gt(n, e, e[6], Fs);
    return {
        c() {
            s && s.c()
        },
        m(o, r) {
            s && s.m(o, r), t = !0
        },
        p(o, r) {
            s && s.p && (!t || r & 72) && Nt(s, n, o, o[6], t ? Vt(n, o[6], r, pf) : Ut(o[6]), Fs)
        },
        i(o) {
            t || (m(s, o), t = !0)
        },
        o(o) {
            h(s, o), t = !1
        },
        d(o) {
            s && s.d(o)
        }
    }
}

function yf(e) {
    let t, n, s, o;
    const r = [bf, hf, mf],
        a = [];

    function c(i, l) {
        return i[1] === i[0].Error ? 0 : i[1] === i[0].Loading ? 1 : i[1] === i[0].Success ? 2 : -1
    }
    return ~(t = c(e)) && (n = a[t] = r[t](e)), {
        c() {
            n && n.c(), s = we()
        },
        m(i, l) {
            ~t && a[t].m(i, l), $(i, s, l), o = !0
        },
        p(i, [l]) {
            let u = t;
            t = c(i), t === u ? ~t && a[t].p(i, l) : (n && (le(), h(a[u], 1, 1, () => {
                a[u] = null
            }), ue()), ~t ? (n = a[t], n ? n.p(i, l) : (n = a[t] = r[t](i), n.c()), m(n, 1), n.m(s.parentNode, s)) : n = null)
        },
        i(i) {
            o || (m(n), o = !0)
        },
        o(i) {
            h(n), o = !1
        },
        d(i) {
            i && I(s), ~t && a[t].d(i)
        }
    }
}
const An = new Map,
    _f = async e => {
        const t = (await e()).default;
        return An.set(e, t), t
    };

function wf(e, t, n) {
    let {
        $$slots: s = {},
        $$scope: o
    } = t;
    const r = hr(s);
    var a;
    (function(v) {
        v[v.Initialized = 0] = "Initialized", v[v.Loading = 1] = "Loading", v[v.Success = 2] = "Success", v[v.Error = 3] = "Error"
    })(a || (a = {}));
    let {
        delay: c = 200
    } = t, {
        loader: i
    } = t, l = a.Initialized, u = null, d = null, g;
    const b = () => {
            window.clearTimeout(g)
        },
        S = async () => {
            b(), n(3, d = null), n(2, u = null), c > 0 ? (n(1, l = a.Initialized), g = window.setTimeout(() => {
                n(1, l = a.Loading)
            }, c)) : n(1, l = a.Loading);
            try {
                n(2, u = await _f(i)), n(1, l = a.Success)
            } catch (v) {
                if (n(1, l = a.Error), v instanceof Error && n(3, d = v), !r.error) throw v
            }
            b()
        };
    return An.has(i) ? (l = a.Success, u = An.get(i)) : Ge(() => {
        S()
    }), e.$$set = v => {
        "delay" in v && n(4, c = v.delay), "loader" in v && n(5, i = v.loader), "$$scope" in v && n(6, o = v.$$scope)
    }, [a, l, u, d, c, i, o, s]
}
class lr extends N {
    constructor(t) {
        super(), U(this, t, wf, yf, B, {
            delay: 4,
            loader: 5
        })
    }
}
const Cf = "modulepreload",
    vf = function(e, t) {
        return e[0] === "." ? new URL(e, t).href : e
    },
    ks = {},
    ur = function(t, n, s) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(r => {
            if (r = vf(r, s), r in ks) return;
            ks[r] = !0;
            const a = r.endsWith(".css"),
                c = a ? '[rel="stylesheet"]' : "";
            if (!!s)
                for (let u = o.length - 1; u >= 0; u--) {
                    const d = o[u];
                    if (d.href === r && (!a || d.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${r}"]${c}`)) return;
            const l = document.createElement("link");
            if (l.rel = a ? "stylesheet" : Cf, a || (l.as = "script", l.crossOrigin = ""), l.href = r, document.head.appendChild(l), a) return new Promise((u, d) => {
                l.addEventListener("load", u), l.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${r}`)))
            })
        })).then(() => t()).catch(r => {
            const a = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (a.payload = r, window.dispatchEvent(a), !a.defaultPrevented) throw r
        })
    },
    Sf = () => ur(() =>
        import ("./WidgetMessenger-88f961a7.js"), [window.widget.getAssetUrl("assets/WidgetMessenger-88f961a7.js"), window.widget.getAssetUrl("assets/vendor-886017d2.js"), window.widget.getAssetUrl("assets/WidgetMessengerInput-9625a7a4.js")],
        import.meta.url);

function Af(e) {
    let t, n, s, o, r, a, c, i, l, u, d, g, b, S, v, _, y, L, j, ie, D, se, be, Ce, os, St, je, rs, Ae, qe, as, Ke, is, Ye, At;
    return o = new Re({
        props: {
            size: 32
        }
    }), c = new Re({
        props: {
            size: 32
        }
    }), l = new Re({
        props: {
            size: 32
        }
    }), d = new Re({
        props: {
            size: 32
        }
    }), v = new Re({
        props: {
            size: 44
        }
    }), L = new ye({
        props: {
            height: 20,
            width: 270
        }
    }), ie = new ye({
        props: {
            height: 20,
            width: 122
        }
    }), Ce = new Re({
        props: {
            size: 28
        }
    }), je = new ye({
        props: {
            height: 112,
            width: 295,
            roundedStyle: "rounded-6"
        }
    }), qe = new ye({
        props: {
            height: 32,
            width: 295
        }
    }), Ke = new ye({
        props: {
            height: 32,
            width: 148
        }
    }), Ye = new ye({
        props: {
            height: 32,
            width: 224
        }
    }), {
        c() {
            t = T("div"), n = T("div"), s = T("div"), O(o.$$.fragment), r = x(), a = T("div"), O(c.$$.fragment), i = x(), O(l.$$.fragment), u = x(), O(d.$$.fragment), g = x(), b = T("div"), S = T("div"), O(v.$$.fragment), _ = x(), y = T("div"), O(L.$$.fragment), j = x(), O(ie.$$.fragment), D = x(), se = T("div"), be = T("div"), O(Ce.$$.fragment), os = x(), St = T("div"), O(je.$$.fragment), rs = x(), Ae = T("div"), O(qe.$$.fragment), as = x(), O(Ke.$$.fragment), is = x(), O(Ye.$$.fragment), p(s, "class", "flex"), p(a, "class", "flex space-x-2"), p(n, "class", "flex justify-between"), p(S, "class", "flex ml-1 mr-2"), p(y, "class", "flex-bottom space-y-2"), p(b, "class", "flex mt-2"), p(be, "class", "flex ml-1 mr-2"), p(St, "class", "space-y-2"), p(se, "class", "flex items-baseline mt-8"), p(Ae, "class", "flex flex-col items-end space-y-5 mt-8 mr-1"), p(t, "slot", "loading"), p(t, "class", "h-full p-2 bg-white")
        },
        m(P, dr) {
            $(P, t, dr), w(t, n), w(n, s), F(o, s, null), w(n, r), w(n, a), F(c, a, null), w(a, i), F(l, a, null), w(a, u), F(d, a, null), w(t, g), w(t, b), w(b, S), F(v, S, null), w(b, _), w(b, y), F(L, y, null), w(y, j), F(ie, y, null), w(t, D), w(t, se), w(se, be), F(Ce, be, null), w(se, os), w(se, St), F(je, St, null), w(t, rs), w(t, Ae), F(qe, Ae, null), w(Ae, as), F(Ke, Ae, null), w(Ae, is), F(Ye, Ae, null), At = !0
        },
        p: Q,
        i(P) {
            At || (m(o.$$.fragment, P), m(c.$$.fragment, P), m(l.$$.fragment, P), m(d.$$.fragment, P), m(v.$$.fragment, P), m(L.$$.fragment, P), m(ie.$$.fragment, P), m(Ce.$$.fragment, P), m(je.$$.fragment, P), m(qe.$$.fragment, P), m(Ke.$$.fragment, P), m(Ye.$$.fragment, P), At = !0)
        },
        o(P) {
            h(o.$$.fragment, P), h(c.$$.fragment, P), h(l.$$.fragment, P), h(d.$$.fragment, P), h(v.$$.fragment, P), h(L.$$.fragment, P), h(ie.$$.fragment, P), h(Ce.$$.fragment, P), h(je.$$.fragment, P), h(qe.$$.fragment, P), h(Ke.$$.fragment, P), h(Ye.$$.fragment, P), At = !1
        },
        d(P) {
            P && I(t), k(o), k(c), k(l), k(d), k(v), k(L), k(ie), k(Ce), k(je), k(qe), k(Ke), k(Ye)
        }
    }
}

function Tf(e) {
    let t, n, s, o, r = e[0] + "",
        a;
    return {
        c() {
            t = T("div"), n = T("div"), n.textContent = "Failed to load widget", s = x(), o = T("div"), a = zt(r), p(n, "class", "text-lg font-bold"), p(o, "class", "text-xs"), p(t, "slot", "error"), p(t, "class", "h-full p-4 bg-white text-red-500")
        },
        m(c, i) {
            $(c, t, i), w(t, n), w(t, s), w(t, o), w(o, a)
        },
        p(c, i) {
            i & 1 && r !== (r = c[0] + "") && Wt(a, r)
        },
        d(c) {
            c && I(t)
        }
    }
}

function Ef(e) {
    let t, n;
    return t = new lr({
        props: {
            loader: Sf,
            delay: 0,
            $$slots: {
                error: [Tf, ({
                    error: s
                }) => ({
                    0: s
                }), ({
                    error: s
                }) => s ? 1 : 0],
                loading: [Af]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 3 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}
class Mf extends N {
    constructor(t) {
        super(), U(this, t, null, Ef, B, {})
    }
}

function $s(e) {
    let t, n, s, o, r, a, c, i;
    return n = new vt({
        props: {
            component: Mf,
            id: re.widgetMessengerFrame,
            title: "Smartsupp widget messenger",
            frameStyle: Ct()
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), p(t, "data-testid", re.widgetMessengerFrame), G(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(l, u) {
            $(l, t, u), F(n, t, null), e[5](t), a = !0, c || (i = bt(s = Dd.call(null, t, e[2])), c = !0)
        },
        p(l, u) {
            s && br(s.update) && u & 4 && s.update.call(null, l[2])
        },
        i(l) {
            a || (m(n.$$.fragment, l), l && ve(() => {
                a && (r && r.end(1), o = ct(t, pe, {
                    y: 20,
                    duration: 200
                }), o.start())
            }), a = !0)
        },
        o(l) {
            h(n.$$.fragment, l), o && o.invalidate(), l && (r = lt(t, pe, {
                y: 10,
                duration: 150
            })), a = !1
        },
        d(l) {
            l && I(t), k(n), e[5](null), l && r && r.end(), c = !1, i()
        }
    }
}

function Of(e) {
    let t, n, s = e[1] && $s(e);
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[1] ? s ? (s.p(o, r), r & 2 && m(s, 1)) : (s = $s(o), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}
const Is = "MobileWidgetMessengerOpen";

function Ff(e, t, n) {
    let s, o, r;
    q(e, ju, u => n(1, s = u)), q(e, Ne, u => n(2, o = u)), q(e, zd, u => n(4, r = u));
    let a;
    const c = (u, d) => {
        if (!a) return;
        const {
            width: g,
            height: b
        } = Od(u, d);
        n(0, a.style.maxHeight = xe(b) ? b : rt(b), a), n(0, a.style.width = xe(g) ? g : rt(g), a), n(0, a.style.height = u ? "100%" : "calc(100% - 40px)", a)
    };
    let i = !1;

    function l(u) {
        it[u ? "unshift" : "push"](() => {
            a = u, n(0, a)
        })
    }
    return e.$$.update = () => {
        if (e.$$.dirty & 21 && a && c(o, r), e.$$.dirty & 14 && o) {
            if (s && !i) {
                const u = Pe().createElement("style");
                u.textContent = "* {overflow: hidden}", u.className = Is, Pe().head.appendChild(u), n(3, i = !0)
            }
            if (!s && i) {
                const u = Pe().head.getElementsByClassName(Is);
                for (let d = 0; d < u.length; d++) Pe().head.removeChild(u[d]);
                n(3, i = !1)
            }
        }
    }, [a, s, o, i, r, l]
}
class kf extends N {
    constructor(t) {
        super(), U(this, t, Ff, Of, B, {})
    }
}
const $f = () => ur(() =>
    import ("./WidgetPopup-6591096b.js"), [window.widget.getAssetUrl("assets/WidgetPopup-6591096b.js"), window.widget.getAssetUrl("assets/vendor-886017d2.js"), window.widget.getAssetUrl("assets/WidgetMessengerInput-9625a7a4.js")],
    import.meta.url);

function If(e) {
    let t, n, s, o, r, a, c, i, l, u;
    return n = new Re({
        props: {
            size: 44
        }
    }), r = new ye({
        props: {
            height: 20,
            width: 270
        }
    }), c = new ye({
        props: {
            height: 20,
            width: 270
        }
    }), l = new ye({
        props: {
            height: 20,
            width: 122
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), s = x(), o = T("div"), O(r.$$.fragment), a = x(), O(c.$$.fragment), i = x(), O(l.$$.fragment), p(o, "class", "mt-4 space-y-2"), p(t, "slot", "loading"), p(t, "class", "h-full p-2 bg-white")
        },
        m(d, g) {
            $(d, t, g), F(n, t, null), w(t, s), w(t, o), F(r, o, null), w(o, a), F(c, o, null), w(o, i), F(l, o, null), u = !0
        },
        p: Q,
        i(d) {
            u || (m(n.$$.fragment, d), m(r.$$.fragment, d), m(c.$$.fragment, d), m(l.$$.fragment, d), u = !0)
        },
        o(d) {
            h(n.$$.fragment, d), h(r.$$.fragment, d), h(c.$$.fragment, d), h(l.$$.fragment, d), u = !1
        },
        d(d) {
            d && I(t), k(n), k(r), k(c), k(l)
        }
    }
}

function Lf(e) {
    let t, n;
    return t = new lr({
        props: {
            loader: $f,
            delay: 0,
            $$slots: {
                loading: [If]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 1 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}
class Rf extends N {
    constructor(t) {
        super(), U(this, t, null, Lf, B, {})
    }
}

function Ls(e) {
    let t, n, s, o, r, a, c;
    return n = new vt({
        props: {
            component: Rf,
            id: re.widgetPopupFrame,
            title: "Smartsupp widget popup",
            frameStyle: Ct()
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), G(t, "height", "calc(100% - 40px)"), G(t, "border-radius", "12px"), G(t, "transition", "box-shadow 0.2s ease-in-out"), G(t, "transition", "max-height 250ms ease-in-out"), p(t, "data-testid", re.widgetPopupFrame), G(t, "width", 300), G(t, "box-shadow", `rgba(0, 0, 0, ${e[1]}) 0px 3px 16px`)
        },
        m(i, l) {
            $(i, t, l), F(n, t, null), e[5](t), r = !0, a || (c = bt(Bd.call(null, t)), a = !0)
        },
        p(i, l) {
            l & 2 && G(t, "box-shadow", `rgba(0, 0, 0, ${i[1]}) 0px 3px 16px`)
        },
        i(i) {
            r || (m(n.$$.fragment, i), i && ve(() => {
                r && (o && o.end(1), s = ct(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), s.start())
            }), r = !0)
        },
        o(i) {
            h(n.$$.fragment, i), s && s.invalidate(), i && (o = lt(t, pe, {
                y: 10,
                duration: 400
            })), r = !1
        },
        d(i) {
            i && I(t), k(n), e[5](null), i && o && o.end(), a = !1, c()
        }
    }
}

function Pf(e) {
    let t, n, s = e[2] && Ls(e);
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[2] ? s ? (s.p(o, r), r & 4 && m(s, 1)) : (s = Ls(o), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}

function Df(e, t, n) {
    let s, o, r;
    q(e, Ud, u => n(3, s = u)), q(e, Nd, u => n(4, o = u)), q(e, Zu, u => n(2, r = u));
    let a;
    const c = u => {
        n(0, a.style.maxHeight = `${u}px`, a)
    };
    let i;

    function l(u) {
        it[u ? "unshift" : "push"](() => {
            a = u, n(0, a)
        })
    }
    return e.$$.update = () => {
        e.$$.dirty & 17 && a && c(o), e.$$.dirty & 8 && n(1, i = s ? .28 : .16)
    }, [a, i, r, s, o, l]
}
class Bf extends N {
    constructor(t) {
        super(), U(this, t, Df, Pf, B, {})
    }
}

function xf(e) {
    let t, n, s, o, r, a, c, i, l;
    return {
        c() {
            t = T("div"), n = T("div"), o = x(), r = T("div"), c = x(), i = T("div"), p(n, "class", s = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} animate-typing`) + " svelte-13wgl1n"), G(n, "animation-iteration-count", e[2]), p(r, "class", a = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n"), G(r, "animation-iteration-count", e[2]), p(i, "class", l = Xe(`typing-indicator ${e[0]} indicator-color-${e[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n"), G(i, "animation-iteration-count", e[2]), p(t, "class", "flex p-2")
        },
        m(u, d) {
            $(u, t, d), w(t, n), w(t, o), w(t, r), w(t, c), w(t, i)
        },
        p(u, [d]) {
            d & 3 && s !== (s = Xe(`typing-indicator ${u[0]} indicator-color-${u[1]} animate-typing`) + " svelte-13wgl1n") && p(n, "class", s), d & 4 && G(n, "animation-iteration-count", u[2]), d & 3 && a !== (a = Xe(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-second animate-typing`) + " svelte-13wgl1n") && p(r, "class", a), d & 4 && G(r, "animation-iteration-count", u[2]), d & 3 && l !== (l = Xe(`typing-indicator ${u[0]} indicator-color-${u[1]} typing-indicator-third animate-typing`) + " svelte-13wgl1n") && p(i, "class", l), d & 4 && G(i, "animation-iteration-count", u[2])
        },
        i: Q,
        o: Q,
        d(u) {
            u && I(t)
        }
    }
}

function Gf(e, t, n) {
    let s, {
            size: o = "md"
        } = t,
        {
            color: r = "black"
        } = t,
        {
            iterations: a = void 0
        } = t;
    return e.$$set = c => {
        "size" in c && n(0, o = c.size), "color" in c && n(1, r = c.color), "iterations" in c && n(3, a = c.iterations)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && n(2, s = a ? ? "infinite")
    }, [o, r, s, a]
}
class Nf extends N {
    constructor(t) {
        super(), U(this, t, Gf, xf, B, {
            size: 0,
            color: 1,
            iterations: 3
        })
    }
}

function Uf(e) {
    let t, n, s;
    return n = new Nf({
        props: {
            iterations: 2
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), p(t, "class", "flex-center h-full bg-white rounded-lg")
        },
        m(o, r) {
            $(o, t, r), F(n, t, null), s = !0
        },
        p: Q,
        i(o) {
            s || (m(n.$$.fragment, o), s = !0)
        },
        o(o) {
            h(n.$$.fragment, o), s = !1
        },
        d(o) {
            o && I(t), k(n)
        }
    }
}
class Vf extends N {
    constructor(t) {
        super(), U(this, t, null, Uf, B, {})
    }
}

function Rs(e) {
    let t, n, s, o, r, a, c;
    return n = new vt({
        props: {
            component: Vf,
            id: re.widgetTypingFrame,
            title: "Smartsupp widget typing",
            frameStyle: Ct()
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), G(t, "box-shadow", "rgba(0, 0, 0, 0.16) 0px 3px 16px"), G(t, "border-radius", "24px"), p(t, "data-testid", re.widgetTypingFrame), G(t, "height", 40), G(t, "width", 70)
        },
        m(i, l) {
            $(i, t, l), F(n, t, null), r = !0, a || (c = bt(xd.call(null, t)), a = !0)
        },
        i(i) {
            r || (m(n.$$.fragment, i), i && ve(() => {
                r && (o && o.end(1), s = ct(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), s.start())
            }), r = !0)
        },
        o(i) {
            h(n.$$.fragment, i), s && s.invalidate(), i && (o = lt(t, pe, {
                y: 10,
                duration: 250
            })), r = !1
        },
        d(i) {
            i && I(t), k(n), i && o && o.end(), a = !1, c()
        }
    }
}

function zf(e) {
    let t, n, s = e[0] && Rs();
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? r & 1 && m(s, 1) : (s = Rs(), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}

function Wf(e, t, n) {
    let s;
    return q(e, Ju, o => n(0, s = o)), [s]
}
class Hf extends N {
    constructor(t) {
        super(), U(this, t, Wf, zf, B, {})
    }
}
const Tn = C(null),
    jf = A([Tn], ([e]) => !!e);

function qf(e) {
    let t, n = '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/>',
        s = [{
            viewBox: "0 0 24 24"
        }, {
            width: "1.2em"
        }, {
            height: "1.2em"
        }, e[0]],
        o = {};
    for (let r = 0; r < s.length; r += 1) o = st(o, s[r]);
    return {
        c() {
            t = un("svg"), cs(t, o)
        },
        m(r, a) {
            $(r, t, a), t.innerHTML = n
        },
        p(r, [a]) {
            cs(t, o = Us(s, [{
                viewBox: "0 0 24 24"
            }, {
                width: "1.2em"
            }, {
                height: "1.2em"
            }, a & 1 && r[0]]))
        },
        i: Q,
        o: Q,
        d(r) {
            r && I(t)
        }
    }
}

function Kf(e, t, n) {
    return e.$$set = s => {
        n(0, t = st(st({}, t), dn(s)))
    }, t = dn(t), [t]
}
class Yf extends N {
    constructor(t) {
        super(), U(this, t, Kf, qf, B, {})
    }
}

function Xf(e) {
    let t, n, s, o, r, a, c;
    var i = e[0];

    function l(g, b) {
        return {
            props: {
                width: "1em",
                height: "1em",
                style: `transform: scale(${g[7]}) scaleX(${g[8]});`
            }
        }
    }
    i && (s = kt(i, l(e)));
    let u = [{
            type: "button"
        }, {
            tabindex: "0"
        }, e[9], {
            "aria-label": e[1]
        }, {
            class: o = `btn btn-${e[4]} btn-${e[3]}`
        }, {
            "data-testid": e[6]
        }],
        d = {};
    for (let g = 0; g < u.length; g += 1) d = st(d, u[g]);
    return {
        c() {
            t = T("button"), n = T("div"), s && O(s.$$.fragment), p(n, "class", "w-full h-full flex items-center justify-center"), Y(n, "animate-spin", e[2] === "spin"), ls(t, d), Y(t, "btn-disabled", !!e[5]), Y(t, "cursor-auto", Et()), Y(t, "cursor-pointer", !Et()), Y(t, "svelte-1lb2fzt", !0)
        },
        m(g, b) {
            $(g, t, b), w(t, n), s && F(s, n, null), t.autofocus && t.focus(), r = !0, a || (c = Fe(t, "click", Mn(e[11])), a = !0)
        },
        p(g, [b]) {
            if (b & 1 && i !== (i = g[0])) {
                if (s) {
                    le();
                    const S = s;
                    h(S.$$.fragment, 1, 0, () => {
                        k(S, 1)
                    }), ue()
                }
                i ? (s = kt(i, l(g)), O(s.$$.fragment), m(s.$$.fragment, 1), F(s, n, null)) : s = null
            } else if (i) {
                const S = {};
                b & 128 && (S.style = `transform: scale(${g[7]}) scaleX(${g[8]});`), s.$set(S)
            }(!r || b & 4) && Y(n, "animate-spin", g[2] === "spin"), ls(t, d = Us(u, [{
                type: "button"
            }, {
                tabindex: "0"
            }, b & 512 && g[9], (!r || b & 2) && {
                "aria-label": g[1]
            }, (!r || b & 24 && o !== (o = `btn btn-${g[4]} btn-${g[3]}`)) && {
                class: o
            }, (!r || b & 64) && {
                "data-testid": g[6]
            }])), Y(t, "btn-disabled", !!g[5]), Y(t, "cursor-auto", Et()), Y(t, "cursor-pointer", !Et()), Y(t, "svelte-1lb2fzt", !0)
        },
        i(g) {
            r || (s && m(s.$$.fragment, g), r = !0)
        },
        o(g) {
            s && h(s.$$.fragment, g), r = !1
        },
        d(g) {
            g && I(t), s && k(s), a = !1, c()
        }
    }
}

function Jf(e, t, n) {
    const s = ["icon", "iconDescription", "iconOrientation", "iconAnimation", "size", "variant", "disabled", "testId"];
    let o = us(t, s),
        {
            icon: r
        } = t,
        {
            iconDescription: a
        } = t,
        {
            iconOrientation: c = "right"
        } = t,
        {
            iconAnimation: i = "none"
        } = t,
        {
            size: l = "md"
        } = t,
        {
            variant: u = "ghost"
        } = t,
        {
            disabled: d = void 0
        } = t,
        {
            testId: g = void 0
        } = t;
    const b = c === "right" ? 1 : -1;
    let S = 1.2;

    function v(_) {
        Ze.call(this, e, _)
    }
    return e.$$set = _ => {
        t = st(st({}, t), dn(_)), n(9, o = us(t, s)), "icon" in _ && n(0, r = _.icon), "iconDescription" in _ && n(1, a = _.iconDescription), "iconOrientation" in _ && n(10, c = _.iconOrientation), "iconAnimation" in _ && n(2, i = _.iconAnimation), "size" in _ && n(3, l = _.size), "variant" in _ && n(4, u = _.variant), "disabled" in _ && n(5, d = _.disabled), "testId" in _ && n(6, g = _.testId)
    }, e.$$.update = () => {
        e.$$.dirty & 8 && l === "xl" && n(7, S = 1.5)
    }, [r, a, i, l, u, d, g, S, b, o, c, v]
}
class Zf extends N {
    constructor(t) {
        super(), U(this, t, Jf, Xf, B, {
            icon: 0,
            iconDescription: 1,
            iconOrientation: 10,
            iconAnimation: 2,
            size: 3,
            variant: 4,
            disabled: 5,
            testId: 6
        })
    }
}

function Qf(e) {
    let t, n, s, o, r, a;
    return {
        c() {
            t = T("video"), n = T("track"), s = T("source"), p(n, "kind", "captions"), $t(s.src, o = e[1].attachment.url) || p(s, "src", o), t.controls = !0, p(t, "class", "m-auto max-h-full max-w-full bg-black object-contain"), t.autoplay = !0, t.loop = !0
        },
        m(c, i) {
            $(c, t, i), w(t, n), w(t, s), r || (a = [Fe(t, "click", Mn(e[6])), Fe(t, "keypress", e[7])], r = !0)
        },
        p(c, i) {
            i & 2 && !$t(s.src, o = c[1].attachment.url) && p(s, "src", o)
        },
        d(c) {
            c && I(t), r = !1, On(a)
        }
    }
}

function ep(e) {
    let t, n, s, o, r;
    return {
        c() {
            var a, c;
            t = T("img"), p(t, "class", "m-auto max-h-full max-w-full select-none bg-black"), p(t, "width", "auto"), p(t, "height", "auto"), $t(t.src, n = (a = e[1]) == null ? void 0 : a.attachment.url) || p(t, "src", n), p(t, "alt", s = (c = e[1]) == null ? void 0 : c.attachment.fileName)
        },
        m(a, c) {
            $(a, t, c), o || (r = [Fe(t, "click", Mn(e[4])), Fe(t, "keypress", e[5])], o = !0)
        },
        p(a, c) {
            var i, l;
            c & 2 && !$t(t.src, n = (i = a[1]) == null ? void 0 : i.attachment.url) && p(t, "src", n), c & 2 && s !== (s = (l = a[1]) == null ? void 0 : l.attachment.fileName) && p(t, "alt", s)
        },
        d(a) {
            a && I(t), o = !1, On(r)
        }
    }
}

function tp(e) {
    var ie;
    let t, n, s, o, r = ((ie = e[1]) == null ? void 0 : ie.attachment.fileName) + "",
        a, c, i, l, u, d, g, b, S, v, _;
    l = new Zf({
        props: {
            icon: Yf,
            iconDescription: "Close",
            size: "xl"
        }
    }), l.$on("click", e[8]);

    function y(D, se) {
        var be, Ce;
        if (((be = D[1]) == null ? void 0 : be.type) === wn.Image) return ep;
        if (((Ce = D[1]) == null ? void 0 : Ce.type) === wn.Video) return Qf
    }
    let L = y(e),
        j = L && L(e);
    return {
        c() {
            t = T("div"), n = T("div"), s = T("div"), o = T("span"), a = zt(r), c = x(), i = T("div"), O(l.$$.fragment), u = x(), d = T("div"), j && j.c(), p(o, "class", "whitespace-nowrap text-ellipsis overflow-hidden"), p(s, "class", "flex-grow flex items-center text-md px-4 overflow-hidden"), p(i, "class", "flex-shrink"), p(n, "class", "flex-shrink flex flex-row w-full bg-black text-white"), p(d, "class", "relative overflow-hidden flex-grow flex items-center bg-black/80 z-10"), Y(d, "p-8", e[0]), Y(d, "p-4", !e[0]), p(t, "class", "w-full h-full flex flex-col")
        },
        m(D, se) {
            $(D, t, se), w(t, n), w(n, s), w(s, o), w(o, a), w(n, c), w(n, i), F(l, i, null), w(t, u), w(t, d), j && j.m(d, null), S = !0, v || (_ = [Fe(d, "click", e[9]), Fe(d, "keypress", e[3])], v = !0)
        },
        p(D, [se]) {
            var be;
            (!S || se & 2) && r !== (r = ((be = D[1]) == null ? void 0 : be.attachment.fileName) + "") && Wt(a, r), L === (L = y(D)) && j ? j.p(D, se) : (j && j.d(1), j = L && L(D), j && (j.c(), j.m(d, null))), (!S || se & 1) && Y(d, "p-8", D[0]), (!S || se & 1) && Y(d, "p-4", !D[0])
        },
        i(D) {
            S || (m(l.$$.fragment, D), D && ve(() => {
                S && (b && b.end(1), g = ct(t, pe, {
                    y: 20,
                    delay: 300,
                    duration: 400
                }), g.start())
            }), S = !0)
        },
        o(D) {
            h(l.$$.fragment, D), g && g.invalidate(), D && (b = lt(t, pe, {
                y: 10,
                duration: 250
            })), S = !1
        },
        d(D) {
            D && I(t), k(l), j && j.d(), D && b && b.end(), v = !1, On(_)
        }
    }
}

function np(e, t, n) {
    let s, o, r;
    q(e, ca, S => n(0, o = S)), q(e, Tn, S => n(1, r = S));
    const a = S => {
        S === "overlay" && !s || Tn.set(null)
    };

    function c(S) {
        Ze.call(this, e, S)
    }

    function i(S) {
        Ze.call(this, e, S)
    }

    function l(S) {
        Ze.call(this, e, S)
    }

    function u(S) {
        Ze.call(this, e, S)
    }

    function d(S) {
        Ze.call(this, e, S)
    }
    const g = () => a("button"),
        b = () => a("overlay");
    return e.$$.update = () => {
        e.$$.dirty & 1 && (s = o)
    }, [o, r, a, c, i, l, u, d, g, b]
}
class sp extends N {
    constructor(t) {
        super(), U(this, t, np, tp, B, {})
    }
}

function Ps(e) {
    let t, n, s, o, r, a, c;
    return n = new vt({
        props: {
            component: sp,
            id: re.widgetImagePreview,
            title: "Smartsupp widget image preview",
            frameStyle: Ct(rp)
        }
    }), {
        c() {
            t = T("div"), O(n.$$.fragment), p(t, "data-testid", re.widgetImagePreview), G(t, "transition", "max-height 250ms ease-in-out, width 250ms ease-in-out")
        },
        m(i, l) {
            $(i, t, l), F(n, t, null), r = !0, a || (c = bt(Gd.call(null, t)), a = !0)
        },
        i(i) {
            r || (m(n.$$.fragment, i), i && ve(() => {
                r && (o && o.end(1), s = ct(t, pe, {
                    y: 20,
                    delay: 100,
                    duration: 250
                }), s.start())
            }), r = !0)
        },
        o(i) {
            h(n.$$.fragment, i), s && s.invalidate(), i && (o = lt(t, pe, {
                y: 10,
                duration: 250
            })), r = !1
        },
        d(i) {
            i && I(t), k(n), i && o && o.end(), a = !1, c()
        }
    }
}

function op(e) {
    let t, n, s = e[0] && Ps();
    return {
        c() {
            s && s.c(), t = we()
        },
        m(o, r) {
            s && s.m(o, r), $(o, t, r), n = !0
        },
        p(o, [r]) {
            o[0] ? s ? r & 1 && m(s, 1) : (s = Ps(), s.c(), m(s, 1), s.m(t.parentNode, t)) : s && (le(), h(s, 1, 1, () => {
                s = null
            }), ue())
        },
        i(o) {
            n || (m(s), n = !0)
        },
        o(o) {
            h(s), n = !1
        },
        d(o) {
            o && I(t), s && s.d(o)
        }
    }
}
const rp = e => {
    e.style.position = "fixed"
};

function ap(e, t, n) {
    let s;
    return q(e, jf, o => n(0, s = o)), [s]
}
class ip extends N {
    constructor(t) {
        super(), U(this, t, ap, op, B, {})
    }
}

function cp(e) {
    let t, n, s, o, r, a, c, i, l, u;
    return t = new Hf({}), s = new Bf({}), r = new cf({}), c = new kf({}), l = new ip({}), {
        c() {
            O(t.$$.fragment), n = x(), O(s.$$.fragment), o = x(), O(r.$$.fragment), a = x(), O(c.$$.fragment), i = x(), O(l.$$.fragment)
        },
        m(d, g) {
            F(t, d, g), $(d, n, g), F(s, d, g), $(d, o, g), F(r, d, g), $(d, a, g), F(c, d, g), $(d, i, g), F(l, d, g), u = !0
        },
        i(d) {
            u || (m(t.$$.fragment, d), m(s.$$.fragment, d), m(r.$$.fragment, d), m(c.$$.fragment, d), m(l.$$.fragment, d), u = !0)
        },
        o(d) {
            h(t.$$.fragment, d), h(s.$$.fragment, d), h(r.$$.fragment, d), h(c.$$.fragment, d), h(l.$$.fragment, d), u = !1
        },
        d(d) {
            d && (I(n), I(o), I(a), I(i)), k(t, d), k(s, d), k(r, d), k(c, d), k(l, d)
        }
    }
}

function lp(e) {
    let t, n;
    return t = new Ig({
        props: {
            $$slots: {
                default: [cp]
            },
            $$scope: {
                ctx: e
            }
        }
    }), {
        c() {
            O(t.$$.fragment)
        },
        m(s, o) {
            F(t, s, o), n = !0
        },
        p(s, [o]) {
            const r = {};
            o & 4 && (r.$$scope = {
                dirty: o,
                ctx: s
            }), t.$set(r)
        },
        i(s) {
            n || (m(t.$$.fragment, s), n = !0)
        },
        o(s) {
            h(t.$$.fragment, s), n = !1
        },
        d(s) {
            k(t, s)
        }
    }
}

function up(e, t, n) {
    let s, o;
    return q(e, ae, r => n(0, s = r)), q(e, Xl, r => n(1, o = r)), Ge(() => {
        (async () => {
            await ci(), await ne.initClient()
        })()
    }), tu(ee()), e.$$.update = () => {
        e.$$.dirty & 3 && o && !s && zo()
    }, [s, o]
}
class dp extends N {
    constructor(t) {
        super(), U(this, t, up, lp, B, {})
    }
}
const an = Rn(window);
window.widget = an;
E.init(an.options);
an.installApi(Ag);
Qn.setThemeColor(an.options);
ir();
nu();
Zi();
new dp({
    target: document.getElementById("app")
});
export {
    su as $, jp as A, _e as B, z as C, yr as D, qp as E, ze as F, Jp as G, zr as H, Zf as I, $e as J, fp as K, Kp as L, Sd as M, Yp as N, Up as O, Sp as P, Ip as Q, Zp as R, vp as S, Yi as T, Lp as U, W as V, Ap as W, Yf as X, ne as Y, Z, Pt as _, re as a, kp as a$, Xp as a0, kn as a1, Ht as a2, Ws as a3, Fp as a4, Nf as a5, Ne as a6, yp as a7, _p as a8, Gp as a9, Ue as aA, vn as aB, mm as aC, Un as aD, Ve as aE, Xi as aF, $p as aG, pm as aH, fm as aI, cm as aJ, ko as aK, Yl as aL, Hp as aM, Xl as aN, Nd as aO, Zt as aP, jn as aQ, Xu as aR, Ud as aS, pp as aT, Cp as aU, Tp as aV, Vp as aW, cn as aX, Tl as aY, Pp as aZ, Hi as a_, xp as aa, Np as ab, To as ac, gl as ad, zd as ae, Bp as af, Dp as ag, tl as ah, Op as ai, Tn as aj, wn as ak, hp as al, bp as am, wp as an, Tr as ao, V as ap, Wl as aq, ke as ar, ul as as, Oo as at, fe as au, cu as av, lm as aw, co as ax, zp as ay, Rp as az, _r as b, De as b0, Nn as b1, H as b2, Dt as b3, ft as b4, Mp as b5, Jt as b6, ae as b7, Uo as b8, Lt as b9, Yn as bA, $u as bB, Ep as bC, gm as bD, Eo as bE, Wp as bF, dm as ba, $o as bb, Uu as bc, ur as bd, ye as be, Re as bf, si as bg, no as bh, to as bi, Ca as bj, pa as bk, Sa as bl, Ta as bm, Ea as bn, Fa as bo, Pa as bp, Da as bq, Ua as br, za as bs, Wa as bt, ja as bu, ei as bv, um as bw, oa as bx, Nu as by, hn as bz, sm as c, Do as d, Et as e, ca as f, ee as g, ln as h, nm as i, om as j, Qp as k, yt as l, em as m, im as n, mp as o, rt as p, oe as q, am as r, rm as s, te as t, tm as u, me as v, E as w, Oe as x, Ou as y, Hs as z
};
//# sourceMappingURL=main-66ba07db.js.map