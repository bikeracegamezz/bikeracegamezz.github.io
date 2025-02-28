function k(b, a, c, d) {
    b.s.Ib(b.mb, a, c, d, void 0)
}

function l(b, a, c, d) {
    b.s.na ? k(b, a, c, d) : b.s.Fe()._OnMessageFromDOM({
        type: "event",
        component: b.mb,
        handler: a,
        dispatchOpts: d || null,
        data: c,
        responseId: null
    })
}

function m(b, a, c) {
    b.s.D(b.mb, a, c)
}

function t(b, a) {
    for (const [c, d] of a) m(b, c, d)
}

function u(b) {
    b.Ub || (b.s.ye(b.Vd), b.Ub = !0)
}
window.Ba = class {
    constructor(b, a) {
        this.s = b;
        this.mb = a;
        this.Ub = !1;
        this.Vd = () => this.Oa()
    }
    fd() {}
    Oa() {}
};

function aa(b) {
    -1 !== b.cb && (self.clearTimeout(b.cb), b.cb = -1)
}
window.ve = class {
    constructor(b) {
        this.Lc = b;
        this.Te = 5;
        this.cb = -1;
        this.Xb = -Infinity;
        this.Wd = () => {
            this.cb = -1;
            this.Xb = Date.now();
            this.rb = !0;
            this.Lc();
            this.rb = !1
        };
        this.yd = this.rb = !1
    }
    j() {
        aa(this);
        this.Wd = this.Lc = null
    }
};
"use strict";

function ba(b, a) {
    const c = a.elementId,
        d = b.kd(c, a);
    b.da.set(c, d);
    d.style.boxSizing = "border-box";
    a.isVisible || (d.style.display = "none");
    d.addEventListener("focus", () => {
        v(b, "elem-focused", c)
    });
    d.addEventListener("blur", () => {
        v(b, "elem-blurred", c)
    });
    b.Qb && document.body.appendChild(d)
}

function ca(b, a, c) {
    m(b, a, d => {
        const e = b.da.get(d.elementId);
        return c(e, d)
    })
}

function v(b, a, c, d) {
    d || (d = {});
    d.elementId = c;
    k(b, a, d)
}

function da(b, a, c) {
    var d;
    d || (d = {});
    d.elementId = c;
    l(b, a, d)
}
window.oe = class extends self.Ba {
    constructor(b) {
        super(b, "text-input");
        this.da = new Map;
        this.Qb = !0;
        t(this, [
            ["create", a => ba(this, a)],
            ["destroy", a => {
                a = a.elementId;
                const c = this.da.get(a);
                this.Qb && c.parentElement.removeChild(c);
                this.da.delete(a)
            }],
            ["set-visible", a => {
                this.Qb && (this.da.get(a.elementId).style.display = a.isVisible ? "" : "none")
            }],
            ["update-position", a => {
                if (this.Qb) {
                    var c = this.da.get(a.elementId);
                    c.style.left = a.left + "px";
                    c.style.top = a.top + "px";
                    c.style.width = a.width + "px";
                    c.style.height = a.height + "px";
                    a = a.fontSize;
                    null !== a && (c.style.fontSize = a + "em")
                }
            }],
            ["update-state", a => {
                const c = this.da.get(a.elementId);
                this.xc(c, a)
            }],
            ["focus", a => this.Gc(a)],
            ["set-css-style", a => {
                const c = this.da.get(a.elementId),
                    d = a.prop;
                a = a.val;
                d.startsWith("--") ? c.style.setProperty(d, a) : c.style[d] = a
            }],
            ["set-attribute", a => {
                this.da.get(a.elementId).setAttribute(a.name, a.val)
            }],
            ["remove-attribute", a => {
                this.da.get(a.elementId).removeAttribute(a.name)
            }]
        ]);
        ca(this, "get-element", a => a)
    }
    kd() {
        throw Error("required override");
    }
    xc() {
        throw Error("required override");
    }
    Gc(b) {
        var a = this.da.get(b.elementId);
        b.focus ? a.focus() : a.blur()
    }
};
"use strict";
const ea = /(iphone|ipod|ipad|macos|macintosh|mac os x)/i.test(navigator.userAgent),
    w = /android/i.test(navigator.userAgent);
let fa = 0;

function y(b) {
    const a = document.createElement("script");
    a.async = !1;
    a.type = "module";
    return b.cf ? new Promise(c => {
        const d = "c3_resolve_" + fa;
        ++fa;
        self[d] = c;
        a.textContent = b.gf + `\n\nself["${d}"]();`;
        document.head.appendChild(a)
    }) : new Promise((c, d) => {
        a.onload = c;
        a.onerror = d;
        a.src = b;
        document.head.appendChild(a)
    })
}
let ia = !1,
    ja = !1;

function ka() {
    if (!ia) {
        try {
            new Worker("blob://", {
                get type() {
                    ja = !0
                }
            })
        } catch (b) {}
        ia = !0
    }
    return ja
}
let B = new Audio;
const la = {
    "audio/webm; codecs=opus": !!B.canPlayType("audio/webm; codecs=opus"),
    "audio/ogg; codecs=opus": !!B.canPlayType("audio/ogg; codecs=opus"),
    "audio/webm; codecs=vorbis": !!B.canPlayType("audio/webm; codecs=vorbis"),
    "audio/ogg; codecs=vorbis": !!B.canPlayType("audio/ogg; codecs=vorbis"),
    "audio/mp4": !!B.canPlayType("audio/mp4"),
    "audio/mpeg": !!B.canPlayType("audio/mpeg")
};
B = null;
async function ma(b) {
    b = await pa(b);
    return (new TextDecoder("utf-8")).decode(b)
}

function pa(b) {
    return new Promise((a, c) => {
        const d = new FileReader;
        d.onload = e => a(e.target.result);
        d.onerror = e => c(e);
        d.readAsArrayBuffer(b)
    })
}
const C = [];
let D = 0;
window.RealFile = window.File;
const F = [],
    G = new Map,
    qa = new Map;
let ra = 0;
const sa = [];
self.runOnStartup = function(b) {
    if ("function" !== typeof b) throw Error("runOnStartup called without a function");
    sa.push(b)
};
const ta = new Set(["cordova", "playable-ad", "instant-games"]);
let ua = !1;
window.ha = class b {
    constructor(a) {
        this.na = a.jf;
        this.wa = null;
        this.ba = "";
        this.ab = a.ff;
        this.Fb = {};
        this.Ua = this.ua = null;
        this.Sb = [];
        this.H = this.xa = null;
        this.Tc = !1;
        this.Cd = 0;
        this.tb = null;
        this.$a = -1;
        this.Ye = () => this.Me();
        this.Za = [];
        this.A = a.Xd;
        this.Vb = "file" === location.protocol.substr(0, 4);
        !this.na || "undefined" !== typeof OffscreenCanvas && navigator.userActivation && ka() || (this.na = !1);
        if ("playable-ad" === this.A || "instant-games" === this.A) this.na = !1;
        if ("cordova" === this.A && this.na)
            if (w) {
                const c = /Chrome\/(\d+)/i.exec(navigator.userAgent);
                c && 90 <= parseInt(c[1], 10) || (this.na = !1)
            } else this.na = !1;
        this.Zb = this.ra = null;
        "html5" !== this.A || window.isSecureContext || console.warn("[Construct] Warning: the browser indicates this is not a secure context. Some features may be unavailable. Use secure (HTTPS) hosting to ensure all features are available.");
        this.D("runtime", "cordova-fetch-local-file", c => this.Ie(c));
        this.D("runtime", "create-job-worker", () => this.Je());
        "cordova" === this.A ? document.addEventListener("deviceready", () => this.rd(a)) : this.rd(a)
    }
    j() {
        this.yc();
        this.wa && (this.wa = this.wa.onmessage = null);
        this.ua && (this.ua.terminate(), this.ua = null);
        this.Ua && (this.Ua.j(), this.Ua = null);
        this.H && (this.H.parentElement.removeChild(this.H), this.H = null)
    }
    se() {
        return ea && "cordova" === this.A
    }
    tc() {
        const a = navigator.userAgent;
        return ea && ta.has(this.A) || navigator.standalone || /crios\/|fxios\/|edgios\//i.test(a)
    }
    qe() {
        return w
    }
    md() {
        return w && ta.has(this.A)
    }
    async rd(a) {
        "macos-wkwebview" === this.A && this.Jc({
            type: "ready"
        });
        if ("playable-ad" === this.A) {
            this.ra = self.c3_base64files;
            this.Zb = {};
            await this.Be();
            for (let d = 0, e = a.eb.length; d < e; ++d) {
                var c = a.eb[d];
                this.Zb.hasOwnProperty(c) ? a.eb[d] = {
                    cf: !0,
                    gf: this.Zb[c]
                } : this.ra.hasOwnProperty(c) && (a.eb[d] = URL.createObjectURL(this.ra[c]))
            }
        }
        a.ef ? this.ba = a.ef : (c = location.origin, this.ba = ("null" === c ? "file:///" : c) + location.pathname, c = this.ba.lastIndexOf("/"), -1 !== c && (this.ba = this.ba.substr(0, c + 1)));
        a.lf && (this.Fb = a.lf);
        c = new MessageChannel;
        this.wa = c.port1;
        this.wa.onmessage = d => this._OnMessageFromRuntime(d.data);
        window.c3_addPortMessageHandler &&
            window.c3_addPortMessageHandler(d => this.Le(d));
        this.tb = new self.te(this);
        await va(this.tb);
        "object" === typeof window.StatusBar && window.StatusBar.hide();
        if ("object" === typeof window.AndroidFullScreen) try {
            await new Promise((d, e) => {
                window.AndroidFullScreen.immersiveMode(d, e)
            })
        } catch (d) {
            console.error("Failed to enter Android immersive mode: ", d)
        }
        this.na ? await this.He(a, c.port2) : await this.Ge(a, c.port2)
    }
    Ac(a) {
        a = this.Fb.hasOwnProperty(a) ? this.Fb[a] : a.endsWith("/workermain.js") && this.Fb.hasOwnProperty("workermain.js") ?
            this.Fb["workermain.js"] : "playable-ad" === this.A && this.ra.hasOwnProperty(a) ? this.ra[a] : a;
        a instanceof Blob && (a = URL.createObjectURL(a));
        return a
    }
    async oc(a, c, d) {
        if (a.startsWith("blob:")) return new Worker(a, d);
        if ("cordova" === this.A && this.Vb) return a = await this.Gb(d.bf ? a : this.ab + a), new Worker(URL.createObjectURL(new Blob([a], {
            type: "application/javascript"
        })), d);
        a = new URL(a, c);
        if (location.origin !== a.origin) {
            a = await fetch(a);
            if (!a.ok) throw Error("failed to fetch worker script");
            a = await a.blob();
            return new Worker(URL.createObjectURL(a),
                d)
        }
        return new Worker(a, d)
    }
    pa() {
        return Math.max(window.innerWidth, 1)
    }
    ia() {
        return Math.max(window.innerHeight, 1)
    }
    qd(a) {
        var c = this.ba,
            d = location.href,
            e = this.pa(),
            f = this.ia(),
            g = window.devicePixelRatio,
            h = b.ib(),
            n = a.sf,
            q = window.cr_previewImageBlobs || this.ra,
            p = window.cr_previewProjectFileBlobs,
            z = window.cr_previewProjectFiles,
            x = window.qf || "";
        a = a.Xd;
        var r = (new URLSearchParams(self.location.search)).has("debug"),
            A = this.tb;
        return {
            runtimeBaseUrl: c,
            previewUrl: d,
            windowInnerWidth: e,
            windowInnerHeight: f,
            devicePixelRatio: g,
            isFullscreen: h,
            projectData: n,
            previewImageBlobs: q,
            previewProjectFileBlobs: p,
            previewProjectFileSWUrls: z,
            swClientId: x,
            exportType: a,
            isDebug: r,
            ife: !!self.rf,
            jobScheduler: {
                inputPort: A.Sc,
                outputPort: A.Zc,
                maxNumWorkers: A.Ve
            },
            supportedAudioFormats: la,
            opusWasmScriptUrl: window.cr_opusWasmScriptUrl || this.ab + "opus.wasm.js",
            opusWasmBinaryUrl: window.cr_opusWasmBinaryUrl || this.ab + "opus.wasm.wasm",
            isFileProtocol: this.Vb,
            isiOSCordova: this.se(),
            isiOSWebView: this.tc(),
            isFBInstantAvailable: "undefined" !== typeof self.FBInstant
        }
    }
    async He(a,
        c) {
        const d = this.Ac(a.kf);
        "preview" === this.A ? (this.ua = new Worker("previewworker.js", {
            type: "module",
            name: "Runtime"
        }), await new Promise((h, n) => {
            const q = p => {
                this.ua.removeEventListener("message", q);
                p.data && "ok" === p.data.type ? h() : n()
            };
            this.ua.addEventListener("message", q);
            this.ua.postMessage({
                type: "construct-worker-init",
                "import": (new URL(d, this.ba)).toString()
            })
        })) : this.ua = await this.oc(d, this.ba, {
            type: "module",
            name: "Runtime",
            bf: !0
        });
        this.H = document.createElement("canvas");
        this.H.style.display = "none";
        const e = this.H.transferControlToOffscreen();
        document.body.appendChild(this.H);
        window.c3canvas = this.H;
        self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
        let f = a.ed || [],
            g = a.eb;
        f = await Promise.all(f.map(h => this.Pa(h)));
        g = await Promise.all(g.map(h => this.Pa(h)));
        if ("cordova" === this.A)
            for (let h = 0, n = a.mc.length; h < n; ++h) {
                const q = a.mc[h],
                    p = q[0];
                if (p === a.cd || "scriptsInEvents.js" === p || p.endsWith("/scriptsInEvents.js")) q[1] = await this.Pa(p)
            }
        this.ua.postMessage(Object.assign(this.qd(a), {
            type: "init-runtime",
            isInWorker: !0,
            messagePort: c,
            canvas: e,
            workerDependencyScripts: f,
            engineScripts: g,
            projectScripts: a.mc,
            mainProjectScript: a.cd,
            projectScriptsStatus: self.C3_ProjectScriptsStatus
        }), [c, e, ...wa(this.tb)]);
        this.Sb = F.map(h => new h(this));
        this.pd();
        xa(this.xa);
        self.c3_callFunction = (h, n) => {
            var q = this.xa;
            return q.s.od(q.mb, "js-invoke-function", {
                name: h,
                params: n
            }, void 0, void 0)
        };
        "preview" === this.A && (self.goToLastErrorScript = () => this.Ib("runtime", "go-to-last-error-script"))
    }
    async Ge(a, c) {
        this.H = document.createElement("canvas");
        this.H.style.display = "none";
        document.body.appendChild(this.H);
        window.c3canvas = this.H;
        self.C3_InsertHTMLPlaceholders && self.C3_InsertHTMLPlaceholders();
        this.Sb = F.map(g => new g(this));
        this.pd();
        var d = a.eb.map(g => "string" === typeof g ? (new URL(g, this.ba)).toString() : g);
        Array.isArray(a.ed) && d.unshift(...a.ed);
        d = await Promise.all(d.map(g => this.Pa(g)));
        await Promise.all(d.map(g => y(g)));
        d = self.C3_ProjectScriptsStatus;
        const e = a.cd,
            f = a.mc;
        for (let [g, h] of f)
            if (h || (h = g), g === e) try {
                h = await this.Pa(h), await y(h), "preview" !==
                    this.A || d[g] || this.td(g, "main script did not run to completion")
            } catch (n) {
                this.td(g, n)
            } else if ("scriptsInEvents.js" === g || g.endsWith("/scriptsInEvents.js")) h = await this.Pa(h), await y(h);
        "preview" === this.A && "object" !== typeof self.mf.nf ? (this.Mb(), console.error("[C3 runtime] Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax."), alert("Failed to load JavaScript code used in events. Check all your JavaScript code has valid syntax.")) : (a = Object.assign(this.qd(a), {
            isInWorker: !1,
            messagePort: c,
            canvas: this.H,
            runOnStartupFunctions: sa
        }), xa(this.xa), this.sd(), this.Ua = self.C3_CreateRuntime(a), await self.C3_InitRuntime(this.Ua, a))
    }
    td(a, c) {
        this.Mb();
        console.error(`[Preview] Failed to load project main script (${a}): `, c);
        alert(`Failed to load project main script (${a}). Check all your JavaScript code has valid syntax. Press F12 and check the console for error details.`)
    }
    sd() {
        this.Mb()
    }
    Mb() {
        const a = window.$e;
        a && (a.parentElement.removeChild(a), window.$e = null)
    }
    async Je() {
        const a =
            await ya(this.tb);
        return {
            outputPort: a,
            transferables: [a]
        }
    }
    Fe() {
        if (this.na) throw Error("not available in worker mode");
        return this.Ua
    }
    Ib(a, c, d, e, f) {
        this.wa.postMessage({
            type: "event",
            component: a,
            handler: c,
            dispatchOpts: e || null,
            data: d,
            responseId: null
        }, f)
    }
    od(a, c, d, e, f) {
        const g = ra++,
            h = new Promise((n, q) => {
                qa.set(g, {
                    resolve: n,
                    reject: q
                })
            });
        this.wa.postMessage({
            type: "event",
            component: a,
            handler: c,
            dispatchOpts: e || null,
            data: d,
            responseId: g
        }, f);
        return h
    }
    _OnMessageFromRuntime(a) {
        const c = a.type;
        if ("event" === c) return this.Ke(a);
        if ("result" === c) this.Ne(a);
        else if ("runtime-ready" === c) this.Oe();
        else if ("alert-error" === c) this.Mb(), alert(a.message);
        else if ("creating-runtime" === c) this.sd();
        else throw Error(`unknown message '${c}'`);
    }
    Ke(a) {
        const c = a.component,
            d = a.handler,
            e = a.data,
            f = a.responseId;
        if (a = G.get(c))
            if (a = a.get(d)) {
                var g = null;
                try {
                    g = a(e)
                } catch (h) {
                    console.error(`Exception in '${c}' handler '${d}':`, h);
                    null !== f && this.Lb(f, !1, "" + h);
                    return
                }
                if (null === f) return g;
                g && g.then ? g.then(h => this.Lb(f, !0, h)).catch(h => {
                    console.error(`Rejection from '${c}' handler '${d}':`,
                        h);
                    this.Lb(f, !1, "" + h)
                }) : this.Lb(f, !0, g)
            } else console.warn(`[DOM] No handler '${d}' for component '${c}'`);
        else console.warn(`[DOM] No event handlers for component '${c}'`)
    }
    Lb(a, c, d) {
        let e;
        d && d.transferables && (e = d.transferables);
        this.wa.postMessage({
            type: "result",
            responseId: a,
            isOk: c,
            result: d
        }, e)
    }
    Ne(a) {
        const c = a.responseId,
            d = a.isOk;
        a = a.result;
        const e = qa.get(c);
        d ? e.resolve(a) : e.reject(a);
        qa.delete(c)
    }
    D(a, c, d) {
        let e = G.get(a);
        e || (e = new Map, G.set(a, e));
        if (e.has(c)) throw Error(`[DOM] Component '${a}' already has handler '${c}'`);
        e.set(c, d)
    }
    static Aa(a) {
        if (F.includes(a)) throw Error("DOM handler already added");
        F.push(a)
    }
    pd() {
        for (const a of this.Sb)
            if ("runtime" === a.mb) {
                this.xa = a;
                return
            }
        throw Error("cannot find runtime DOM handler");
    }
    Le(a) {
        this.Ib("debugger", "message", a)
    }
    Oe() {
        for (const a of this.Sb) a.fd()
    }
    static ib() {
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || ua)
    }
    static Nb(a) {
        ua = !!a
    }
    ye(a) {
        this.Za.push(a);
        this.Ic()
    }
    Qe(a) {
        a = this.Za.indexOf(a);
        if (-1 === a) throw Error("invalid callback");
        this.Za.splice(a, 1);
        this.Za.length || this.yc()
    }
    Ic() {
        -1 === this.$a && this.Za.length && (this.$a = requestAnimationFrame(this.Ye))
    }
    yc() {
        -1 !== this.$a && (cancelAnimationFrame(this.$a), this.$a = -1)
    }
    Me() {
        this.$a = -1;
        for (const a of this.Za) a();
        this.Ic()
    }
    Ea(a) {
        this.xa.Ea(a)
    }
    Na(a) {
        this.xa.Na(a)
    }
    Hc() {
        this.xa.Hc()
    }
    Kb(a) {
        this.xa.Kb(a)
    }
    re() {
        return !!la["audio/webm; codecs=opus"]
    }
    async Re(a) {
        a = await this.od("runtime", "opus-decode", {
            arrayBuffer: a
        }, null, [a]);
        return new Float32Array(a)
    }
    we(a) {
        this.Tc = !0;
        this.Cd = a
    }
    pe(a) {
        return /^(?:[a-z\-]+:)?\/\//.test(a) ||
            "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5)
    }
    nd(a) {
        return !this.pe(a)
    }
    async Pa(a) {
        return "cordova" === this.A && (a.startsWith("file:") || this.Vb && this.nd(a)) ? (a.startsWith(this.ba) && (a = a.substr(this.ba.length)), a = await this.Gb(a), URL.createObjectURL(new Blob([a], {
            type: "application/javascript"
        }))) : a
    }
    async Ie(a) {
        const c = a.filename;
        switch (a.as) {
            case "text":
                return await this.ne(c);
            case "buffer":
                return await this.Gb(c);
            default:
                throw Error("unsupported type");
        }
    }
    jd(a) {
        const c = window.cordova.file.applicationDirectory +
            "www/" + a;
        return new Promise((d, e) => {
            window.resolveLocalFileSystemURL(c, f => {
                f.file(d, e)
            }, e)
        })
    }
    async ne(a) {
        a = await this.jd(a);
        return await ma(a)
    }
    zc() {
        if (C.length && !(8 <= D)) {
            D++;
            var a = C.shift();
            this.Ce(a.filename, a.hf, a.af)
        }
    }
    Gb(a) {
        return new Promise((c, d) => {
            C.push({
                filename: a,
                hf: e => {
                    D--;
                    this.zc();
                    c(e)
                },
                af: e => {
                    D--;
                    this.zc();
                    d(e)
                }
            });
            this.zc()
        })
    }
    async Ce(a, c, d) {
        try {
            const e = await this.jd(a),
                f = await pa(e);
            c(f)
        } catch (e) {
            d(e)
        }
    }
    Jc(a) {
        if ("windows-webview2" === this.A) window.chrome.webview.postMessage(JSON.stringify(a));
        else if ("macos-wkwebview" === this.A) window.webkit.messageHandlers.C3Wrapper.postMessage(JSON.stringify(a));
        else throw Error("cannot send wrapper message");
    }
    async Be() {
        const a = [];
        for (const [c, d] of Object.entries(this.ra)) a.push(this.Ae(c, d));
        await Promise.all(a)
    }
    async Ae(a, c) {
        if ("object" === typeof c) this.ra[a] = new Blob([c.str], {
            type: c.type
        }), this.Zb[a] = c.str;
        else {
            let d = await this.Ee(c);
            d || (d = this.De(c));
            this.ra[a] = d
        }
    }
    async Ee(a) {
        try {
            return await (await fetch(a)).blob()
        } catch (c) {
            return console.warn("Failed to fetch a data: URI. Falling back to a slower workaround. This is probably because the Content Security Policy unnecessarily blocked it. Allow data: URIs in your CSP to avoid this.",
                c), null
        }
    }
    De(a) {
        a = this.Pe(a);
        return this.ze(a.data, a.df)
    }
    Pe(a) {
        var c = a.indexOf(",");
        if (0 > c) throw new URIError("expected comma in data: uri");
        var d = a.substring(c + 1);
        c = a.substring(5, c).split(";");
        a = c[0] || "";
        const e = c[2];
        d = "base64" === c[1] || "base64" === e ? atob(d) : decodeURIComponent(d);
        return {
            df: a,
            data: d
        }
    }
    ze(a, c) {
        var d = a.length;
        let e = d >> 2,
            f = new Uint8Array(d),
            g = new Uint32Array(f.buffer, 0, e),
            h, n;
        for (n = h = 0; h < e; ++h) g[h] = a.charCodeAt(n++) | a.charCodeAt(n++) << 8 | a.charCodeAt(n++) << 16 | a.charCodeAt(n++) << 24;
        for (d &=
            3; d--;) f[n] = a.charCodeAt(n), ++n;
        return new Blob([f], {
            type: c
        })
    }
};
"use strict";
const H = self.ha;

function za(b) {
    return b.sourceCapabilities && b.sourceCapabilities.firesTouchEvents || b.originalEvent && b.originalEvent.sourceCapabilities && b.originalEvent.sourceCapabilities.firesTouchEvents
}
const Aa = new Map([
        ["OSLeft", "MetaLeft"],
        ["OSRight", "MetaRight"]
    ]),
    I = {
        dispatchRuntimeEvent: !0,
        dispatchUserScriptEvent: !0
    },
    Ca = {
        dispatchUserScriptEvent: !0
    },
    Da = {
        dispatchRuntimeEvent: !0
    };

function Ea(b) {
    return new Promise((a, c) => {
        const d = document.createElement("link");
        d.onload = () => a(d);
        d.onerror = e => c(e);
        d.rel = "stylesheet";
        d.href = b;
        document.head.appendChild(d)
    })
}

function Fa(b) {
    return new Promise((a, c) => {
        const d = new Image;
        d.onload = () => a(d);
        d.onerror = e => c(e);
        d.src = b
    })
}
async function J(b) {
    b = URL.createObjectURL(b);
    try {
        return await Fa(b)
    } finally {
        URL.revokeObjectURL(b)
    }
}

function Ga(b) {
    return new Promise((a, c) => {
        let d = new FileReader;
        d.onload = e => a(e.target.result);
        d.onerror = e => c(e);
        d.readAsText(b)
    })
}
async function Ha(b, a, c) {
    if (!/firefox/i.test(navigator.userAgent)) return await J(b);
    var d = await Ga(b);
    d = (new DOMParser).parseFromString(d, "image/svg+xml");
    const e = d.documentElement;
    if (e.hasAttribute("width") && e.hasAttribute("height")) {
        const f = e.getAttribute("width"),
            g = e.getAttribute("height");
        if (!f.includes("%") && !g.includes("%")) return await J(b)
    }
    e.setAttribute("width", a + "px");
    e.setAttribute("height", c + "px");
    d = (new XMLSerializer).serializeToString(d);
    b = new Blob([d], {
        type: "image/svg+xml"
    });
    return await J(b)
}

function Ia(b) {
    do {
        if (b.parentNode && b.hasAttribute("contenteditable")) return !0;
        b = b.parentNode
    } while (b);
    return !1
}
const Ja = new Set(["input", "textarea", "datalist", "select"]),
    Ka = new Set(["canvas", "body", "html"]);

function K(b) {
    Ka.has(b.target.tagName.toLowerCase()) && b.preventDefault()
}

function La(b) {
    (b.metaKey || b.ctrlKey) && b.preventDefault()
}
self.C3_GetSvgImageSize = async function(b) {
    b = await J(b);
    if (0 < b.width && 0 < b.height) return [b.width, b.height];
    b.style.position = "absolute";
    b.style.left = "0px";
    b.style.top = "0px";
    b.style.visibility = "hidden";
    document.body.appendChild(b);
    const a = b.getBoundingClientRect();
    document.body.removeChild(b);
    return [a.width, a.height]
};
self.C3_RasterSvgImageBlob = async function(b, a, c, d, e) {
    b = await Ha(b, a, c);
    const f = document.createElement("canvas");
    f.width = d;
    f.height = e;
    f.getContext("2d").drawImage(b, 0, 0, a, c);
    return f
};
let Ma = !1;
document.addEventListener("pause", () => Ma = !0);
document.addEventListener("resume", () => Ma = !1);

function xa(b) {
    b.Bd = !0;
    b.Wc = b.s.pa();
    b.ub = b.s.ia()
}
async function Na(b) {
    var a = b.imageBitmapOpts;
    b = await self.C3_RasterSvgImageBlob(b.blob, b.imageWidth, b.imageHeight, b.surfaceWidth, b.surfaceHeight);
    a = a ? await createImageBitmap(b, a) : await createImageBitmap(b);
    return {
        imageBitmap: a,
        transferables: [a]
    }
}
async function Oa(b) {
    return await self.C3_GetSvgImageSize(b.blob)
}

function Pa(b) {
    window.c3_postToMessagePort && (b.from = "runtime", window.c3_postToMessagePort(b))
}

function Qa(b) {
    self.setTimeout(() => {
        b.Ad = !0
    }, 1E3);
    "cordova" === b.s.A ? (document.addEventListener("pause", () => Ra(b, !0)), document.addEventListener("resume", () => Ra(b, !1))) : document.addEventListener("visibilitychange", () => Ra(b, document.hidden));
    return {
        isSuspended: !(!document.hidden && !Ma)
    }
}

function Sa(b) {
    b.vd || (b.vd = !0, window.addEventListener("deviceorientation", a => {
        b.Z || k(b, "deviceorientation", {
            absolute: !!a.absolute,
            alpha: a.alpha || 0,
            beta: a.beta || 0,
            gamma: a.gamma || 0,
            timeStamp: a.timeStamp,
            webkitCompassHeading: a.webkitCompassHeading,
            webkitCompassAccuracy: a.webkitCompassAccuracy
        }, I)
    }), window.addEventListener("deviceorientationabsolute", a => {
        b.Z || k(b, "deviceorientationabsolute", {
            absolute: !!a.absolute,
            alpha: a.alpha || 0,
            beta: a.beta || 0,
            gamma: a.gamma || 0,
            timeStamp: a.timeStamp
        }, I)
    }))
}

function Ta(b) {
    b.ud || (b.ud = !0, window.addEventListener("devicemotion", a => {
        if (!b.Z) {
            var c = null,
                d = a.acceleration;
            d && (c = {
                x: d.x || 0,
                y: d.y || 0,
                z: d.z || 0
            });
            d = null;
            var e = a.accelerationIncludingGravity;
            e && (d = {
                x: e.x || 0,
                y: e.y || 0,
                z: e.z || 0
            });
            e = null;
            var f = a.rotationRate;
            f && (e = {
                alpha: f.alpha || 0,
                beta: f.beta || 0,
                gamma: f.gamma || 0
            });
            k(b, "devicemotion", {
                acceleration: c,
                accelerationIncludingGravity: d,
                rotationRate: e,
                interval: a.interval,
                timeStamp: a.timeStamp
            }, I)
        }
    }))
}
async function Ua(b) {
    await Ea(b.url)
}

function Va(b, a) {
    b.Dd = a.message; - 1 === b.Oc && (b.Oc = setTimeout(() => {
        b.Oc = -1;
        const c = document.getElementById("exportToVideoMessage");
        c && (c.textContent = b.Dd)
    }, 250))
}

function L(b) {
    if (!b.Z) {
        var a = H.ib();
        a && "any" !== b.ad && Wa(b);
        k(b, "fullscreenchange", {
            isFullscreen: a,
            innerWidth: b.pa(),
            innerHeight: b.ia()
        })
    }
}

function Xa(b, a) {
    console.warn("[Construct] Fullscreen request failed: ", a);
    k(b, "fullscreenerror", {
        isFullscreen: H.ib(),
        innerWidth: b.pa(),
        innerHeight: b.ia()
    })
}

function Ra(b, a) {
    a ? b.s.yc() : b.s.Ic();
    k(b, "visibilitychange", {
        hidden: a
    })
}

function Ya(b, a, c) {
    "Backspace" === c.key && K(c);
    if (!b.Z) {
        var d = Aa.get(c.code) || c.code;
        l(b, a, {
            code: d,
            key: c.key,
            which: c.which,
            repeat: c.repeat,
            altKey: c.altKey,
            ctrlKey: c.ctrlKey,
            metaKey: c.metaKey,
            shiftKey: c.shiftKey,
            timeStamp: c.timeStamp
        }, I)
    }
}

function Za(b, a, c, d) {
    b.Z || za(c) || l(b, a, {
        button: c.button,
        buttons: c.buttons,
        clientX: c.clientX,
        clientY: c.clientY + b.ca,
        pageX: c.pageX,
        pageY: c.pageY + b.ca,
        movementX: c.movementX || 0,
        movementY: c.movementY || 0,
        timeStamp: c.timeStamp
    }, d)
}

function $a(b) {
    window !== window.top && window.focus();
    ab(b.target) && document.activeElement && !ab(document.activeElement) && document.activeElement.blur()
}

function M(b, a, c) {
    if (!b.Z) {
        if (b.Cb && "pointermove" !== a) {
            var d = b.Cb;
            d.rb || (aa(d), d.Xb = Date.now())
        }
        d = 0;
        "mouse" === c.pointerType && (d = b.zb);
        l(b, a, {
            pointerId: c.pointerId,
            pointerType: c.pointerType,
            button: c.button,
            buttons: c.buttons,
            lastButtons: d,
            clientX: c.clientX,
            clientY: c.clientY + b.ca,
            pageX: c.pageX,
            pageY: c.pageY + b.ca,
            movementX: (c.movementX || 0) + b.fc,
            movementY: (c.movementY || 0) + b.hc,
            width: c.width || 0,
            height: c.height || 0,
            pressure: c.pressure || 0,
            tangentialPressure: c.tangentialPressure || 0,
            tiltX: c.tiltX || 0,
            tiltY: c.tiltY ||
                0,
            twist: c.twist || 0,
            timeStamp: c.timeStamp
        }, I);
        b.fc = 0;
        b.hc = 0;
        "mouse" === c.pointerType && (d = "mousemove", "pointerdown" === a ? d = "mousedown" : "pointerup" === a && (d = "mouseup"), Za(b, d, c, Ca), b.zb = c.buttons)
    }
}

function bb(b, a, c) {
    if (!b.Z && !za(c)) {
        var d = b.zb;
        "pointerdown" === a && 0 !== d ? a = "pointermove" : "pointerup" === a && 0 !== c.buttons && (a = "pointermove");
        l(b, a, {
            pointerId: 1,
            pointerType: "mouse",
            button: c.button,
            buttons: c.buttons,
            lastButtons: d,
            clientX: c.clientX,
            clientY: c.clientY + b.ca,
            pageX: c.pageX,
            pageY: c.pageY + b.ca,
            movementX: c.movementX || 0,
            movementY: c.movementY || 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            timeStamp: c.timeStamp
        }, I);
        b.zb = c.buttons;
        Za(b, c.type, c, Ca)
    }
}

function N(b, a, c) {
    if (!b.Z)
        for (let d = 0, e = c.changedTouches.length; d < e; ++d) {
            const f = c.changedTouches[d];
            l(b, a, {
                    pointerId: f.identifier,
                    pointerType: "touch",
                    button: 0,
                    buttons: 0,
                    lastButtons: 0,
                    clientX: f.clientX,
                    clientY: f.clientY + b.ca,
                    pageX: f.pageX,
                    pageY: f.pageY + b.ca,
                    movementX: c.movementX || 0,
                    movementY: c.movementY || 0,
                    width: 2 * (f.radiusX || f.webkitRadiusX || 0),
                    height: 2 * (f.radiusY || f.webkitRadiusY || 0),
                    pressure: f.force || f.webkitForce || 0,
                    tangentialPressure: 0,
                    tiltX: 0,
                    tiltY: 0,
                    twist: f.rotationAngle || 0,
                    timeStamp: c.timeStamp
                },
                I)
        }
}

function cb(b, a, c) {
    document.body.style.transform = "";
    b.ca = 0;
    if (0 < c) {
        var d = document.activeElement;
        d && (d = d.getBoundingClientRect(), a = (d.top + d.bottom) / 2 - (a - c) / 2, a > c && (a = c), 0 > a && (a = 0), 0 < a && (document.body.style.transform = `translateY(${-a}px)`, b.ca = a))
    }
}

function db(b, a, c, d) {
    const e = b.pa(),
        f = b.ia();
    b.bb = -1;
    e != a || f != c ? k(b, "window-resize", {
        innerWidth: e,
        innerHeight: f,
        devicePixelRatio: window.devicePixelRatio,
        isFullscreen: H.ib()
    }) : 10 > d && eb(b, e, f, d + 1)
}

function eb(b, a, c, d) {
    -1 !== b.bb && clearTimeout(b.bb);
    b.bb = setTimeout(() => db(b, a, c, d), 48)
}

function Wa(b) {
    b = b.ad;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(b).catch(a => console.warn("[Construct] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
        a || console.warn("[Construct] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct] Failed to lock orientation: ",
            a)
    }
}

function ab(b) {
    return !b || b === document || b === window || b === document.body || "canvas" === b.tagName.toLowerCase()
}
H.Aa(class extends self.Ba {
    constructor(b) {
        super(b, "runtime");
        this.Id = !0;
        this.Bd = !1;
        this.bb = -1;
        this.ad = "any";
        this.ud = this.vd = !1;
        this.Ha = null;
        this.Z = !1;
        this.Dd = "";
        this.Oc = -1;
        this.Ta = this.Cb = null;
        this.hc = this.fc = 0;
        this.Ad = !1;
        this.Wc = b.pa();
        this.ub = b.ia();
        this.ca = this.Eb = 0;
        b.D("canvas", "update-size", d => {
            var e = this.s;
            e.Tc || (e = e.H, e.style.width = d.styleWidth + "px", e.style.height = d.styleHeight + "px", e.style.marginLeft = d.marginLeft + "px", e.style.marginTop = d.marginTop + "px", document.documentElement.style.setProperty("--construct-scale",
                d.displayScale), this.Id && (e.style.display = "", this.Id = !1))
        });
        b.D("runtime", "invoke-download", d => {
            const e = d.url;
            d = d.filename;
            const f = document.createElement("a"),
                g = document.body;
            f.textContent = d;
            f.href = e;
            f.download = d;
            g.appendChild(f);
            f.click();
            g.removeChild(f)
        });
        b.D("runtime", "raster-svg-image", d => Na(d));
        b.D("runtime", "get-svg-image-size", d => Oa(d));
        b.D("runtime", "set-target-orientation", d => {
            this.ad = d.targetOrientation
        });
        b.D("runtime", "register-sw", () => {
            window.C3_RegisterSW && window.C3_RegisterSW()
        });
        b.D("runtime",
            "post-to-debugger", d => Pa(d));
        b.D("runtime", "go-to-script", d => Pa(d));
        b.D("runtime", "before-start-ticking", () => Qa(this));
        b.D("runtime", "debug-highlight", d => {
            if (d.show) {
                this.Ha || (this.Ha = document.createElement("div"), this.Ha.id = "inspectOutline", document.body.appendChild(this.Ha));
                var e = this.Ha;
                e.style.display = "";
                e.style.left = d.left - 1 + "px";
                e.style.top = d.top - 1 + "px";
                e.style.width = d.width + 2 + "px";
                e.style.height = d.height + 2 + "px";
                e.textContent = d.name
            } else this.Ha && (this.Ha.style.display = "none")
        });
        b.D("runtime",
            "enable-device-orientation", () => Sa(this));
        b.D("runtime", "enable-device-motion", () => Ta(this));
        b.D("runtime", "add-stylesheet", d => Ua(d));
        b.D("runtime", "script-create-worker", d => {
            const e = d.port2;
            (new Worker(d.url, d.opts)).postMessage({
                type: "construct-worker-init",
                port2: e
            }, [e])
        });
        b.D("runtime", "alert", d => this.Dc(d));
        b.D("runtime", "hide-cordova-splash", () => {
            navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide()
        });
        b.D("runtime", "set-exporting-to-video", d => {
            this.Z = !0;
            const e = document.createElement("h1");
            e.id = "exportToVideoMessage";
            e.textContent = d.message;
            document.body.prepend(e);
            document.body.classList.add("exportingToVideo");
            this.s.H.style.display = "";
            this.s.we(d.duration)
        });
        b.D("runtime", "export-to-video-progress", d => Va(this, d));
        b.D("runtime", "exported-to-video", d => {
            window.Ze({
                type: "exported-video",
                blob: d.blob,
                time: d.time
            })
        });
        b.D("runtime", "exported-to-image-sequence", d => {
            window.Ze({
                type: "exported-image-sequence",
                blobArr: d.blobArr,
                time: d.time,
                gif: d.gif
            })
        });
        const a = new Set(["input", "textarea", "datalist"]);
        window.addEventListener("contextmenu", d => {
            const e = d.target;
            a.has(e.tagName.toLowerCase()) || Ia(e) || d.preventDefault()
        });
        const c = b.H;
        window.addEventListener("selectstart", K);
        window.addEventListener("gesturehold", K);
        c.addEventListener("selectstart", K);
        c.addEventListener("gesturehold", K);
        window.addEventListener("touchstart", K, {
            passive: !1
        });
        "undefined" !== typeof PointerEvent ? (window.addEventListener("pointerdown", K, {
            passive: !1
        }), c.addEventListener("pointerdown", K)) : c.addEventListener("touchstart", K);
        this.zb =
            0;
        window.addEventListener("mousedown", d => {
            1 === d.button && d.preventDefault()
        });
        window.addEventListener("mousewheel", La, {
            passive: !1
        });
        window.addEventListener("wheel", La, {
            passive: !1
        });
        window.addEventListener("resize", () => {
            a: {
                if (!this.Z && this.Bd) {
                    var d = this.pa();
                    var e = this.ia();
                    if (this.s.md()) {
                        if (this.Ad) {
                            if (this.Wc === d && e < this.ub) {
                                this.Eb = this.ub - e;
                                cb(this, this.ub, this.Eb);
                                d = void 0;
                                break a
                            }
                            0 < this.Eb && (this.Eb = 0, cb(this, e, this.Eb))
                        }
                        this.Wc = d;
                        this.ub = e
                    }
                    k(this, "window-resize", {
                        innerWidth: d,
                        innerHeight: e,
                        devicePixelRatio: window.devicePixelRatio,
                        isFullscreen: H.ib()
                    });
                    this.s.tc() && (-1 !== this.bb && clearTimeout(this.bb), db(this, d, e, 0))
                }
                d = void 0
            }
            return d
        });
        window.addEventListener("fullscreenchange", () => L(this));
        window.addEventListener("webkitfullscreenchange", () => L(this));
        window.addEventListener("mozfullscreenchange", () => L(this));
        window.addEventListener("fullscreenerror", d => Xa(this, d));
        window.addEventListener("webkitfullscreenerror", d => Xa(this, d));
        window.addEventListener("mozfullscreenerror", d => Xa(this,
            d));
        if (b.tc())
            if (window.visualViewport) {
                let d = Infinity;
                window.visualViewport.addEventListener("resize", () => {
                    const e = window.visualViewport.height;
                    e > d && (document.scrollingElement.scrollTop = 0);
                    d = e
                })
            } else window.addEventListener("focusout", () => {
                {
                    const f = document.activeElement;
                    if (f) {
                        var d = f.tagName.toLowerCase();
                        var e = new Set("email number password search tel text url".split(" "));
                        d = "textarea" === d ? !0 : "input" === d ? e.has(f.type.toLowerCase() || "text") : Ia(f)
                    } else d = !1
                }
                d || (document.scrollingElement.scrollTop =
                    0)
            });
        self.C3WrapperOnMessage = d => {
            "entered-fullscreen" === d ? (H.Nb(!0), L(this)) : "exited-fullscreen" === d ? (H.Nb(!1), L(this)) : console.warn("Unknown wrapper message: ", d)
        };
        this.Va = new Set;
        this.ac = new WeakSet;
        this.va = !1
    }
    fd() {
        window.addEventListener("focus", () => {
            k(this, "window-focus", null, Da)
        });
        window.addEventListener("blur", () => {
            try {
                var a = window.parent && window.parent.document.hasFocus()
            } catch (c) {
                a = !1
            }
            k(this, "window-blur", {
                parentHasFocus: a
            }, Da);
            this.zb = 0
        });
        window.addEventListener("focusin", a => {
            a = a.target;
            (Ja.has(a.tagName.toLowerCase()) || Ia(a)) && k(this, "keyboard-blur", null, Da)
        });
        window.addEventListener("keydown", a => Ya(this, "keydown", a));
        window.addEventListener("keyup", a => Ya(this, "keyup", a));
        window.addEventListener("dblclick", a => Za(this, "dblclick", a, I));
        window.addEventListener("wheel", a => {
            this.Z || k(this, "wheel", {
                clientX: a.clientX,
                clientY: a.clientY + this.ca,
                pageX: a.pageX,
                pageY: a.pageY + this.ca,
                deltaX: a.deltaX,
                deltaY: a.deltaY,
                deltaZ: a.deltaZ,
                deltaMode: a.deltaMode,
                timeStamp: a.timeStamp
            }, I)
        });
        "undefined" !==
        typeof PointerEvent ? (window.addEventListener("pointerdown", a => {
            $a(a);
            M(this, "pointerdown", a)
        }), this.s.na && "undefined" !== typeof window.onpointerrawupdate && self === self.top ? (this.Cb = new self.ve(() => {
            M(this, "pointermove", this.Ta);
            this.Ta = null
        }), this.Cb.yd = !0, window.addEventListener("pointerrawupdate", a => {
            this.Ta && (this.fc += this.Ta.movementX || 0, this.hc += this.Ta.movementY || 0);
            this.Ta = a;
            a = this.Cb;
            if (-1 === a.cb) {
                var c = Date.now(),
                    d = c - a.Xb,
                    e = a.Te;
                d >= e && a.yd ? (a.Xb = c, a.rb = !0, a.Lc(), a.rb = !1) : a.cb = self.setTimeout(a.Wd,
                    Math.max(e - d, 4))
            }
        })) : window.addEventListener("pointermove", a => M(this, "pointermove", a)), window.addEventListener("pointerup", a => M(this, "pointerup", a)), window.addEventListener("pointercancel", a => M(this, "pointercancel", a))) : (window.addEventListener("mousedown", a => {
            $a(a);
            bb(this, "pointerdown", a)
        }), window.addEventListener("mousemove", a => bb(this, "pointermove", a)), window.addEventListener("mouseup", a => bb(this, "pointerup", a)), window.addEventListener("touchstart", a => {
            $a(a);
            N(this, "pointerdown", a)
        }), window.addEventListener("touchmove",
            a => N(this, "pointermove", a)), window.addEventListener("touchend", a => N(this, "pointerup", a)), window.addEventListener("touchcancel", a => N(this, "pointercancel", a)));
        const b = () => this.Hc();
        window.addEventListener("pointerup", b, !0);
        window.addEventListener("touchend", b, !0);
        window.addEventListener("click", b, !0);
        window.addEventListener("keydown", b, !0);
        window.addEventListener("gamepadconnected", b, !0);
        this.s.qe() && !this.s.md() && navigator.virtualKeyboard && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange",
            () => {
                cb(this, this.ia(), navigator.virtualKeyboard.boundingRect.height)
            }))
    }
    pa() {
        return this.s.pa()
    }
    ia() {
        return this.s.ia()
    }
    Hc() {
        var b = [...this.Va];
        this.Va.clear();
        if (!this.va)
            for (const a of b)(b = a.play()) && b.catch(() => {
                this.ac.has(a) || this.Va.add(a)
            })
    }
    Ea(b) {
        if ("function" !== typeof b.play) throw Error("missing play function");
        this.ac.delete(b);
        let a;
        try {
            a = b.play()
        } catch (c) {
            this.Va.add(b);
            return
        }
        a && a.catch(() => {
            this.ac.has(b) || this.Va.add(b)
        })
    }
    Na(b) {
        this.Va.delete(b);
        this.ac.add(b)
    }
    Kb(b) {
        this.va = !!b
    }
    Dc(b) {
        alert(b.message)
    }
});
"use strict";
async function va(b) {
    if (b.Se) throw Error("already initialised");
    b.Se = !0;
    var a = b.ya.Ac(("playable-ad" === b.ya.A ? b.ya.ab : "") + "dispatchworker.js");
    b.Nc = await b.ya.oc(a, b.lb, {
        name: "DispatchWorker"
    });
    a = new MessageChannel;
    b.Sc = a.port1;
    b.Nc.postMessage({
        type: "_init",
        "in-port": a.port2
    }, [a.port2]);
    b.Zc = await ya(b)
}

function wa(b) {
    return [b.Sc, b.Zc]
}
async function ya(b) {
    const a = b.Jd.length;
    var c = b.ya.Ac(("playable-ad" === b.ya.A ? b.ya.ab : "") + "jobworker.js");
    c = await b.ya.oc(c, b.lb, {
        name: "JobWorker" + a
    });
    const d = new MessageChannel,
        e = new MessageChannel;
    b.Nc.postMessage({
        type: "_addJobWorker",
        port: d.port1
    }, [d.port1]);
    c.postMessage({
        type: "init",
        number: a,
        "dispatch-port": d.port2,
        "output-port": e.port2
    }, [d.port2, e.port2]);
    b.Jd.push(c);
    return e.port1
}
self.te = class {
    constructor(b) {
        this.ya = b;
        this.lb = b.ba;
        this.lb = "preview" === b.A ? this.lb + "workers/" : this.lb + b.ab;
        this.Ve = Math.min(navigator.hardwareConcurrency || 2, 16);
        this.Nc = null;
        this.Jd = [];
        this.Zc = this.Sc = null
    }
};
"use strict";
window.C3_IsSupported && (window.c3_runtimeInterface = new self.ha({
    jf: !1,
    kf: "workermain.js",
    eb: ["scripts/c3runtime.js"],
    mc: [],
    cd: "",
    ff: "scripts/",
    ed: [],
    Xd: "html5"
}));
"use strict";
async function gb(b, a) {
    a = a.type;
    let c = !0;
    0 === a ? c = await hb() : 1 === a && (c = await ib());
    k(b, "permission-result", {
        type: a,
        result: c
    })
}
async function hb() {
    if (!self.DeviceOrientationEvent || !self.DeviceOrientationEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceOrientationEvent.requestPermission()
    } catch (b) {
        return console.warn("[Touch] Failed to request orientation permission: ", b), !1
    }
}
async function ib() {
    if (!self.DeviceMotionEvent || !self.DeviceMotionEvent.requestPermission) return !0;
    try {
        return "granted" === await self.DeviceMotionEvent.requestPermission()
    } catch (b) {
        return console.warn("[Touch] Failed to request motion permission: ", b), !1
    }
}
self.ha.Aa(class extends self.Ba {
    constructor(b) {
        super(b, "touch");
        m(this, "request-permission", a => gb(this, a))
    }
});
"use strict";

function jb() {}

function kb(b) {
    window.C3_RegisterSW && window.OfflineClientInfo && window.OfflineClientInfo.SetMessageCallback(a => k(b, "sw-message", a.data))
}

function lb(b) {
    b = b.orientation;
    if (screen.orientation && screen.orientation.lock) screen.orientation.lock(b).catch(a => console.warn("[Construct] Failed to lock orientation: ", a));
    else try {
        let a = !1;
        screen.lockOrientation ? a = screen.lockOrientation(b) : screen.webkitLockOrientation ? a = screen.webkitLockOrientation(b) : screen.mozLockOrientation ? a = screen.mozLockOrientation(b) : screen.msLockOrientation && (a = screen.msLockOrientation(b));
        a || console.warn("[Construct] Failed to lock orientation")
    } catch (a) {
        console.warn("[Construct] Failed to lock orientation: ",
            a)
    }
}
self.ha.Aa(class extends self.Ba {
    constructor(b) {
        super(b, "browser");
        this.A = "";
        t(this, [
            ["get-initial-state", a => this.Fc(a)],
            ["ready-for-sw-messages", () => kb(this)],
            ["alert", a => this.Dc(a)],
            ["close", () => {
                navigator.app && navigator.app.exitApp ? navigator.app.exitApp() : navigator.device && navigator.device.exitApp ? navigator.device.exitApp() : window.close()
            }],
            ["set-focus", a => this.Gc(a)],
            ["vibrate", a => {
                navigator.vibrate && navigator.vibrate(a.pattern)
            }],
            ["lock-orientation", a => lb(a)],
            ["unlock-orientation", () => {
                try {
                    screen.orientation && screen.orientation.unlock ?
                        screen.orientation.unlock() : screen.unlockOrientation ? screen.unlockOrientation() : screen.webkitUnlockOrientation ? screen.webkitUnlockOrientation() : screen.mozUnlockOrientation ? screen.mozUnlockOrientation() : screen.msUnlockOrientation && screen.msUnlockOrientation()
                } catch (a) {}
            }],
            ["navigate", a => {
                var c = a.type;
                if ("back" === c) navigator.app && navigator.app.backHistory ? navigator.app.backHistory() : window.history.back();
                else if ("forward" === c) window.history.forward();
                else if ("reload" === c) location.reload();
                else if ("url" ===
                    c) {
                    c = a.url;
                    const d = a.target;
                    a = a.exportType;
                    self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c, "_system") : "preview" === a || "windows-webview2" === a ? window.open(c, "_blank") : this.pf || (2 === d ? window.top.location = c : 1 === d ? window.parent.location = c : window.location = c)
                } else "new-window" === c && (c = a.url, a = a.tag, self.cordova && self.cordova.InAppBrowser ? self.cordova.InAppBrowser.open(c, "_system") : window.open(c, a))
            }],
            ["request-fullscreen", a => {
                if ("windows-webview2" === this.A || "macos-wkwebview" === this.A) self.ha.Nb(!0),
                    this.s.Jc({
                        type: "set-fullscreen",
                        fullscreen: !0
                    });
                else {
                    const c = {
                        navigationUI: "auto"
                    };
                    a = a.navUI;
                    1 === a ? c.navigationUI = "hide" : 2 === a && (c.navigationUI = "show");
                    a = document.documentElement;
                    let d;
                    a.requestFullscreen ? d = a.requestFullscreen(c) : a.mozRequestFullScreen ? d = a.mozRequestFullScreen(c) : a.msRequestFullscreen ? d = a.msRequestFullscreen(c) : a.webkitRequestFullScreen && (d = "undefined" !== typeof Element.ALLOW_KEYBOARD_INPUT ? a.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT) : a.webkitRequestFullScreen());
                    d instanceof
                    Promise && d.catch(jb)
                }
            }],
            ["exit-fullscreen", () => {
                if ("windows-webview2" === this.A || "macos-wkwebview" === this.A) self.ha.Nb(!1), this.s.Jc({
                    type: "set-fullscreen",
                    fullscreen: !1
                });
                else {
                    let a;
                    document.exitFullscreen ? a = document.exitFullscreen() : document.mozCancelFullScreen ? a = document.mozCancelFullScreen() : document.msExitFullscreen ? a = document.msExitFullscreen() : document.webkitCancelFullScreen && (a = document.webkitCancelFullScreen());
                    a instanceof Promise && a.catch(jb)
                }
            }],
            ["set-hash", a => {
                location.hash = a.hash
            }],
            ["set-document-css-style",
                a => {
                    const c = a.prop,
                        d = a.value;
                    var e = a.selector;
                    a = a["is-all"];
                    try {
                        if (e)
                            if (a) var f = Array.from(document.querySelectorAll(e));
                            else {
                                var g = document.querySelector(e);
                                f = g ? [g] : []
                            }
                        else f = [document.documentElement];
                        e = f;
                        for (const h of e) c.startsWith("--") ? h.style.setProperty(c, d) : h.style[c] = d
                    } catch (h) {
                        console.warn("[Browser] Failed to set style: ", h)
                    }
                }
            ],
            ["get-document-css-style", a => {
                {
                    const d = a.prop;
                    a = a.selector;
                    try {
                        const e = document.querySelector(a);
                        var c = e ? {
                            isOk: !0,
                            result: window.getComputedStyle(e).getPropertyValue(d)
                        } : {
                            isOk: !1
                        }
                    } catch (e) {
                        console.warn("[Browser] Failed to get style: ", e), c = {
                            isOk: !1
                        }
                    }
                }
                return c
            }]
        ]);
        window.addEventListener("online", () => {
            k(this, "online-state", {
                isOnline: !0
            })
        });
        window.addEventListener("offline", () => {
            k(this, "online-state", {
                isOnline: !1
            })
        });
        window.addEventListener("hashchange", () => {
            k(this, "hashchange", {
                location: location.toString()
            })
        });
        document.addEventListener("backbutton", () => {
            k(this, "backbutton")
        })
    }
    Fc(b) {
        this.A = b.exportType;
        return {
            location: location.toString(),
            isOnline: !!navigator.onLine,
            referrer: document.referrer,
            title: document.title,
            isCookieEnabled: !!navigator.cookieEnabled,
            screenWidth: screen.width,
            screenHeight: screen.height,
            windowOuterWidth: window.outerWidth,
            windowOuterHeight: window.outerHeight,
            isConstructArcade: "undefined" !== typeof window.is_scirra_arcade
        }
    }
    Dc(b) {
        alert(b.message)
    }
    Gc(b) {
        b = b.isFocus;
        if ("nwjs" === this.A) {
            const a = "nwjs" === this.A ? nw.Window.get() : null;
            b ? a.focus() : a.blur()
        } else b ? window.focus() : window.blur()
    }
});
"use strict";
async function mb(b) {
    if (!b.Ja) try {
        b.Ja = await navigator.wakeLock.request("screen"), b.Ja.addEventListener("release", () => {
            console.log("[Construct] Screen wake lock released");
            b.Ja = null;
            k(b, "wake-lock-released")
        }), console.log("[Construct] Screen wake lock acquired"), k(b, "wake-lock-acquired")
    } catch (a) {
        console.warn("[Construct] Failed to acquire screen wake lock: ", a), k(b, "wake-lock-error")
    }
}

function nb() {
    var b = document.body;
    const a = b.style;
    a.setProperty("--temp-sai-top", "env(safe-area-inset-top)");
    a.setProperty("--temp-sai-right", "env(safe-area-inset-right)");
    a.setProperty("--temp-sai-bottom", "env(safe-area-inset-bottom)");
    a.setProperty("--temp-sai-left", "env(safe-area-inset-left)");
    b = getComputedStyle(b);
    b = [b.getPropertyValue("--temp-sai-top"), b.getPropertyValue("--temp-sai-right"), b.getPropertyValue("--temp-sai-bottom"), b.getPropertyValue("--temp-sai-left")].map(c => {
        c = parseInt(c, 10);
        return isFinite(c) ? c : 0
    });
    a.removeProperty("--temp-sai-top");
    a.removeProperty("--temp-sai-right");
    a.removeProperty("--temp-sai-bottom");
    a.removeProperty("--temp-sai-left");
    return b
}
self.ha.Aa(class extends self.Ba {
    constructor(b) {
        super(b, "platform-info");
        t(this, [
            ["get-initial-state", () => this.Fc()],
            ["request-wake-lock", () => mb(this)],
            ["release-wake-lock", () => {
                this.Ja && (this.Ja.release(), this.Ja = null)
            }]
        ]);
        window.addEventListener("resize", () => {
            k(this, "window-resize", {
                windowOuterWidth: window.outerWidth,
                windowOuterHeight: window.outerHeight,
                safeAreaInset: nb()
            })
        });
        this.Ja = null
    }
    Fc() {
        return {
            screenWidth: screen.width,
            screenHeight: screen.height,
            windowOuterWidth: window.outerWidth,
            windowOuterHeight: window.outerHeight,
            safeAreaInset: nb(),
            supportsWakeLock: !!navigator.wakeLock
        }
    }
});
"use strict";

function O(b) {
    b.stopPropagation()
}

function ob(b) {
    13 !== b.which && 27 !== b.which && b.stopPropagation()
}
self.ha.Aa(class extends self.oe {
    constructor(b) {
        super(b);
        ca(this, "scroll-to-bottom", a => {
            a.scrollTop = a.scrollHeight
        })
    }
    kd(b, a) {
        let c;
        const d = a.type;
        "textarea" === d ? (c = document.createElement("textarea"), c.style.resize = "none") : (c = document.createElement("input"), c.type = d);
        c.style.position = "absolute";
        c.autocomplete = "off";
        c.addEventListener("pointerdown", O);
        c.addEventListener("pointermove", O);
        c.addEventListener("pointerrawupdate", O);
        c.addEventListener("pointerup", O);
        c.addEventListener("mousedown", O);
        c.addEventListener("mouseup",
            O);
        c.addEventListener("keydown", ob);
        c.addEventListener("keyup", ob);
        c.addEventListener("click", e => {
            e.stopPropagation();
            da(this, "click", b)
        });
        c.addEventListener("dblclick", e => {
            e.stopPropagation();
            da(this, "dblclick", b)
        });
        c.addEventListener("input", () => v(this, "change", b, {
            text: c.value
        }));
        a.id && (c.id = a.id);
        a.className && (c.className = a.className);
        this.xc(c, a);
        return c
    }
    xc(b, a) {
        b.value = a.text;
        b.placeholder = a.placeholder;
        b.title = a.title;
        b.disabled = !a.isEnabled;
        b.readOnly = a.isReadOnly;
        b.spellcheck = a.spellCheck;
        a = a.maxLength;
        0 > a ? b.removeAttribute("maxlength") : b.setAttribute("maxlength", a)
    }
});
"use strict";
self.ha.Aa(class extends self.Ba {
    constructor(b) {
        super(b, "mouse");
        t(this, [
            ["cursor", a => {
                document.documentElement.style.cursor = a
            }],
            ["request-pointer-lock", () => {
                this.s.H.requestPointerLock()
            }],
            ["release-pointer-lock", () => {
                document.exitPointerLock()
            }]
        ]);
        document.addEventListener("pointerlockchange", () => {
            k(this, "pointer-lock-change", {
                "has-pointer-lock": !!document.pointerLockElement
            })
        });
        document.addEventListener("pointerlockerror", () => {
            k(this, "pointer-lock-error", {
                "has-pointer-lock": !!document.pointerLockElement
            })
        })
    }
});
"use strict";
const pb = 180 / Math.PI;
async function qb(b, a) {
    if (a.isiOSCordova || a.isSafari) b.dc = !0;
    b.bd = a.timeScaleMode;
    b.Od = ["equalpower", "HRTF", "soundfield"][a.panningModel];
    b.zd = ["linear", "inverse", "exponential"][a.distanceModel];
    b.Pd = a.refDistance;
    b.Nd = a.maxDistance;
    b.Rd = a.rolloffFactor;
    if (b.s.Tc) b.dc = !0, b.g = new OfflineAudioContext({
        numberOfChannels: 2,
        sampleRate: 48E3,
        length: Math.ceil(48E3 * b.s.Cd)
    });
    else {
        var c = {
            latencyHint: a.latencyHint
        };
        b.Ud || (c.sampleRate = 48E3);
        if ("undefined" !== typeof AudioContext) b.g = new AudioContext(c);
        else if ("undefined" !==
            typeof webkitAudioContext) b.g = new webkitAudioContext(c);
        else throw Error("Web Audio API not supported");
        rb(b);
        b.g.onstatechange = () => {
            "running" !== b.g.state && rb(b);
            k(b, "audiocontext-state", {
                audioContextState: b.g.state
            })
        }
    }
    b.Ra = b.g.createGain();
    b.Ra.connect(b.g.destination);
    c = a.listenerPos;
    b.aa[0] = c[0];
    b.aa[1] = c[1];
    b.aa[2] = c[2];
    b.g.listener.setPosition(c[0], c[1], c[2]);
    b.g.listener.setOrientation(0, 0, 1, 0, -1, 0);
    self.C3_GetAudioContextCurrentTime = () => b.g.currentTime;
    try {
        await Promise.all(a.preloadList.map(d =>
            P(b, d.originalUrl, d.url, d.type, !1)))
    } catch (d) {
        console.error("[Construct] Preloading sounds failed: ", d)
    }
    return {
        sampleRate: b.g.sampleRate,
        audioContextState: b.g.state,
        outputLatency: b.g.outputLatency || 0
    }
}
async function sb(b, a) {
    var c = a.originalUrl;
    const d = a.url,
        e = a.type,
        f = a.isMusic,
        g = a.tag,
        h = a.isLooping,
        n = a.vol,
        q = a.pos,
        p = a.panning,
        z = a.stereoPan;
    let x = a.off;
    0 < x && !a.trueClock && (b.g.getOutputTimestamp ? (a = b.g.getOutputTimestamp(), x = x - a.performanceTime / 1E3 + a.contextTime) : x = x - performance.now() / 1E3 + b.g.currentTime);
    b.Kd = g;
    tb(b, g);
    try {
        b.$ = await ub(b, c, d, e, g, f);
        if (p) {
            Q(b.$, !0);
            var r = b.$,
                A = p.innerAngle,
                na = p.outerAngle,
                oa = p.outerGain;
            if (r.sb) {
                vb(r, p.x, p.y, p.angle);
                var E = self.fb.xe;
                r.sa[0] !== E(A) && (r.sa[0] = E(A),
                    r.F.coneInnerAngle = E(A));
                r.sa[1] !== E(na) && (r.sa[1] = E(na), r.F.coneOuterAngle = E(na));
                r.sa[2] !== oa && (r.sa[2] = oa, r.F.coneOuterGain = oa)
            }
            p.hasOwnProperty("uid") && (b.$.qa = p.uid)
        } else "number" === typeof z && 0 !== z ? (R(b.$, !0), wb(b.$, z)) : (Q(b.$, !1), R(b.$, !1));
        b.$.Play(h, n, q, x)
    } catch (Hb) {
        console.error("[Construct] Audio: error starting playback: ", Hb);
        return
    } finally {
        c = b.Bb.get(g);
        if (!c) throw Error("expected pending tag");
        c.dd--;
        0 === c.dd && (c.resolve(), b.Bb.delete(g))
    }
    u(b)
}
async function xb(b, a) {
    var c = a.tag;
    const d = a.vol,
        e = a.duration;
    a = a.stopOnEnd;
    await yb(b, c);
    for (const p of S(b, c)) {
        c = p;
        var f = d,
            g = e,
            h = a;
        if (!c.Sa) {
            var n = c.G.gain;
            n.cancelScheduledValues(0);
            var q = c.u.g.currentTime;
            g = q + g;
            n.setValueAtTime(n.value, q);
            n.linearRampToValueAtTime(f, g);
            c.La = f;
            c.pb = g;
            c.Td = h
        }
    }
    T(b)
}
async function zb(b, a) {
    const c = a.tag;
    a = a.rate;
    await yb(b, c);
    for (const d of S(b, c)) b = d, b.ma !== a && (b.ma = a, b.Fa())
}
async function Ab(b, a) {
    const c = a.tag;
    a = a.pos;
    await yb(b, c);
    for (const d of S(b, c)) d.uc(a)
}
async function Bb(b, a) {
    const c = a.originalUrl,
        d = a.url,
        e = a.type;
    a = a.isMusic;
    try {
        await ub(b, c, d, e, "", a)
    } catch (f) {
        console.error("[Construct] Audio: error preloading: ", f)
    }
}
async function Cb(b, a) {
    if (a = await P(b, "", a.url, a.type, a.isMusic, !0)) a.j(), a = b.ka.indexOf(a), -1 !== a && b.ka.splice(a, 1)
}
async function Db(b, a) {
    var c = a.type,
        d = a.tag,
        e = a.params;
    if ("filter" === c) e = new self.ce(b, ...e);
    else if ("delay" === c) e = new self.ae(b, ...e);
    else if ("convolution" === c) {
        c = null;
        try {
            c = await P(b, a.bufferOriginalUrl, a.bufferUrl, a.bufferType, !1)
        } catch (g) {
            console.log("[Construct] Audio: error loading convolution: ", g);
            return
        }
        c = e = new self.$d(b, c.ja, ...e);
        var f = a.bufferType;
        c.wd = a.bufferOriginalUrl;
        c.xd = f
    } else if ("flanger" === c) e = new self.de(b, ...e);
    else if ("phaser" === c) e = new self.fe(b, ...e);
    else if ("gain" === c) e =
        new self.ee(b, ...e);
    else if ("stereopan" === c) e = new self.he(b, ...e);
    else if ("tremolo" === c) e = new self.ie(b, ...e);
    else if ("ringmod" === c) e = new self.ge(b, ...e);
    else if ("distortion" === c) e = new self.be(b, ...e);
    else if ("compressor" === c) e = new self.Zd(b, ...e);
    else if ("analyser" === c) e = new self.Yd(b, ...e);
    else throw Error("invalid effect type");
    a = e;
    d = d.toLowerCase();
    e = b.la.get(d);
    e || (e = [], b.la.set(d, e));
    a.Hd = e.length;
    a.fa = d;
    e.push(a);
    Eb(b, d);
    Fb(b)
}
async function Gb(b, a) {
    const c = a.saveLoadMode;
    if (3 !== c) {
        var d = [];
        for (const e of b.J) e.Ca() && 1 === c || !e.Ca() && 2 === c ? d.push(e) : e.j();
        b.J = d
    }
    for (const e of b.la.values())
        for (const f of e) f.j();
    b.la.clear();
    b.kc = a.timeScale;
    b.Pc = a.gameTime;
    d = a.listenerPos;
    b.aa[0] = d[0];
    b.aa[1] = d[1];
    b.aa[2] = d[2];
    b.g.listener.setPosition(d[0], d[1], d[2]);
    b.va = a.isSilent;
    b.s.Kb(b.va);
    b.$b = a.masterVolume;
    b.Ra.gain.value = b.$b;
    d = [];
    for (const e of Object.values(a.effects)) d.push(Promise.all(e.map(f => Db(b, f))));
    await Promise.all(d);
    await Promise.all(a.playing.map(e => Ib(b, e, c)));
    T(b)
}
async function Jb(b, a) {
    try {
        const c = b.g.suspend(a.time);
        b.Gd ? b.g.resume() : (b.g.startRendering().then(d => {
            const e = [];
            for (let f = 0, g = d.numberOfChannels; f < g; ++f) {
                const h = d.getChannelData(f);
                e.push(h.buffer)
            }
            b.s.Ib("runtime", "offline-audio-render-completed", {
                duration: d.duration,
                length: d.length,
                numberOfChannels: d.numberOfChannels,
                sampleRate: d.sampleRate,
                channelData: e
            }, null, e)
        }).catch(d => Kb(d)), b.Gd = !0);
        await c
    } catch (c) {
        Kb(c)
    }
}

function rb(b) {
    b.Tb || (b.Rc = !1, window.addEventListener("pointerup", b.za, !0), window.addEventListener("touchend", b.za, !0), window.addEventListener("click", b.za, !0), window.addEventListener("keydown", b.za, !0), b.Tb = !0)
}
async function P(b, a, c, d, e, f) {
    for (var g of b.ka)
        if (g.hb() === c) return await Lb(g), g;
    if (f) return null;
    if (e && (b.dc || b.Fd)) {
        f = 0;
        for (let h = 0, n = b.ka.length; h < n; ++h) g = b.ka[h], b.ka[f] = g, g.Ca() ? g.j() : ++f;
        b.ka.length = f
    }
    f = "audio/webm; codecs=opus" === d && !b.Ud;
    e && f && (b.Fd = !0);
    c = !e || b.dc || f ? new self.le(b, a, c, d, e, f) : new self.je(b, a, c, d, e);
    b.ka.push(c);
    await Lb(c);
    b.Md.has(a) || (k(b, "buffer-metadata", {
        originalUrl: a,
        duration: c.ga()
    }), b.Md.add(a));
    return c
}

function Mb(b, a) {
    return (a = b.la.get(a.toLowerCase())) ? a[0].N() : b.oa()
}

function Eb(b, a) {
    let c = b.oa();
    var d = b.la.get(a);
    if (d && d.length) {
        c = d[0].N();
        for (let f = 0, g = d.length; f < g; ++f) {
            var e = d[f];
            f + 1 === g ? e.S(b.oa()) : e.S(d[f + 1].N())
        }
    }
    for (const f of S(b, a)) d = c, e = f.ea || f.F || f.G, e.disconnect(), e.connect(d);
    b.Ia && b.Xc === a && (b.Ia.disconnect(), b.Ia.connect(c))
}

function* S(b, a) {
    if (a)
        for (const c of b.J) b = c.fa, (b.length !== a.length ? 0 : b === a || b.toLowerCase() === a.toLowerCase()) && (yield c);
    else b.$ && !b.$.U() && (yield b.$)
}

function Nb(b, a, c) {
    return c ? b.s.Re(a).then(d => {
        const e = b.g.createBuffer(1, d.length, 48E3);
        e.getChannelData(0).set(d);
        return e
    }) : new Promise((d, e) => {
        b.g.decodeAudioData(a, d, e)
    })
}

function Ob(b, a) {
    let c = 0;
    for (let d = 0, e = b.J.length; d < e; ++d) {
        const f = b.J[d];
        b.J[c] = f;
        f.O === a ? f.j() : ++c
    }
    b.J.length = c
}
async function ub(b, a, c, d, e, f) {
    for (const g of b.J)
        if (g.hb() === c && (g.nc() || f)) return g.fa = e, g;
    a = await P(b, a, c, d, f);
    e = "html5" === a.Kc ? new self.ke(a.u, a, e) : new self.me(a.u, a, e);
    b.J.push(e);
    return e
}

function tb(b, a) {
    let c = b.Bb.get(a);
    if (!c) {
        let d = null;
        c = {
            dd: 0,
            promise: new Promise(e => d = e),
            resolve: d
        };
        b.Bb.set(a, c)
    }
    c.dd++
}

function yb(b, a) {
    a || (a = b.Kd);
    return (b = b.Bb.get(a)) ? b.promise : Promise.resolve()
}

function T(b) {
    if (0 < b.Qa.size) u(b);
    else
        for (const a of b.J)
            if (!a.I && !a.U()) {
                u(b);
                break
            }
}

function Pb(b, a, c, d) {
    k(b, "trigger", {
        type: a,
        tag: c,
        aiid: d
    })
}

function Fb(b) {
    b.Uc || (b.Uc = !0, Promise.resolve().then(() => Qb(b)))
}

function Qb(b) {
    const a = {};
    for (const [c, d] of b.la) a[c] = d.map(e => e.gb());
    k(b, "fxstate", {
        fxstate: a
    });
    b.Uc = !1
}
async function Ib(b, a, c) {
    if (3 !== c) {
        var d = a.bufferOriginalUrl,
            e = a.bufferUrl,
            f = a.bufferType,
            g = a.isMusic,
            h = a.tag,
            n = a.isLooping,
            q = a.volume,
            p = a.playbackTime;
        if (!g || 1 !== c)
            if (g || 2 !== c) {
                c = null;
                try {
                    c = await ub(b, d, e, f, h, g)
                } catch (z) {
                    console.error("[Construct] Audio: error loading audio state: ", z);
                    return
                }
                b = c;
                (d = a.pan) ? (Q(b, !0), e = b.F, f = d.pos, b.Xa[0] = f[0], b.Xa[1] = f[1], b.Xa[2] = f[2], f = d.orient, b.Wa[0] = f[0], b.Wa[1] = f[1], b.Wa[2] = f[2], e.setPosition(...b.Xa), e.setOrientation(...b.Wa), b.sa[0] = d.cia, b.sa[1] = d.coa, b.sa[2] =
                    d.cog, e.coneInnerAngle = d.cia, e.coneOuterAngle = d.coa, e.coneOuterGain = d.cog, b.qa = d.uid) : Q(b, !1);
                b = c;
                d = a.stereoPan;
                "number" !== typeof d ? R(b, !1) : (R(b, !0), wb(b, d));
                c.Play(n, q, p, 0);
                a.isPlaying || c.jb();
                c.Cc(a)
            }
    }
}

function Kb(b) {
    console.error("[Audio] Offline rendering error: ", b)
}
self.fb = class extends self.Ba {
    constructor(b) {
        super(b, "audio");
        this.Ra = this.g = null;
        this.Tb = this.Rc = !1;
        this.za = () => {
            if (!this.Rc) {
                var a = this.g;
                "suspended" === a.state && a.resume && a.resume();
                var c = a.createBuffer(1, 220, 22050),
                    d = a.createBufferSource();
                d.buffer = c;
                d.connect(a.destination);
                d.start(0);
                "running" === a.state && this.Tb && (this.Rc = !0, window.removeEventListener("pointerup", this.za, !0), window.removeEventListener("touchend", this.za, !0), window.removeEventListener("click", this.za, !0), window.removeEventListener("keydown",
                    this.za, !0), this.Tb = !1)
            }
        };
        this.ka = [];
        this.J = [];
        this.$ = null;
        this.Kd = "";
        this.Md = new Set;
        this.Ld = -1;
        this.Bb = new Map;
        this.$b = 1;
        this.va = !1;
        this.bd = 0;
        this.kc = 1;
        this.Pc = 0;
        this.Od = "HRTF";
        this.zd = "inverse";
        this.Pd = 600;
        this.Nd = 1E4;
        this.Rd = 1;
        this.aa = [0, 0, 0];
        this.Fd = this.dc = !1;
        this.Ud = this.s.re();
        this.la = new Map;
        this.Qa = new Set;
        this.Gd = this.Uc = !1;
        this.Xc = "";
        this.Ia = null;
        self.C3Audio_OnMicrophoneStream = (a, c) => {
            this.Ia && this.Ia.disconnect();
            this.Xc = c.toLowerCase();
            this.Ia = this.g.createMediaStreamSource(a);
            this.Ia.connect(Mb(this,
                this.Xc))
        };
        this.Rb = null;
        self.C3Audio_GetOutputStream = () => {
            this.Rb || (this.Rb = this.g.createMediaStreamDestination(), this.Ra.connect(this.Rb));
            return this.Rb.stream
        };
        self.C3Audio_DOMInterface = this;
        t(this, [
            ["create-audio-context", a => qb(this, a)],
            ["play", a => sb(this, a)],
            ["stop", a => {
                a = a.tag;
                for (const c of S(this, a)) c.Da()
            }],
            ["stop-all", () => {
                for (const a of this.J) a.Da()
            }],
            ["set-paused", a => {
                const c = a.tag;
                a = a.paused;
                for (const d of S(this, c)) a ? d.jb() : d.Jb();
                T(this)
            }],
            ["set-volume", a => {
                const c = a.tag;
                a = a.vol;
                for (const d of S(this,
                        c)) U(d, a)
            }],
            ["fade-volume", a => xb(this, a)],
            ["set-master-volume", a => {
                this.$b = a.vol;
                this.Ra.gain.value = this.$b
            }],
            ["set-muted", a => {
                const c = a.tag;
                a = a.isMuted;
                for (const d of S(this, c)) Rb(d, a)
            }],
            ["set-silent", a => {
                this.va = a.isSilent;
                this.s.Kb(this.va);
                for (const c of this.J) c.Ob()
            }],
            ["set-looping", a => {
                const c = a.tag;
                a = a.isLooping;
                for (const d of S(this, c)) d.vc(a)
            }],
            ["set-playback-rate", a => zb(this, a)],
            ["set-stereo-pan", a => {
                const c = a.tag;
                a = a.p;
                for (const d of S(this, c)) R(d, !0), wb(d, a)
            }],
            ["seek", a => Ab(this, a)],
            ["preload", a => Bb(this, a)],
            ["unload", a => Cb(this, a)],
            ["unload-all", () => {
                for (const a of this.ka) a.j();
                this.ka.length = 0
            }],
            ["set-suspended", a => {
                a = a.isSuspended;
                !a && this.g.resume && this.g.resume();
                for (const c of this.J) c.wc(a);
                a && this.g.suspend && this.g.suspend()
            }],
            ["add-effect", a => Db(this, a)],
            ["set-effect-param", a => {
                const c = a.index,
                    d = a.param,
                    e = a.value,
                    f = a.ramp,
                    g = a.time;
                a = this.la.get(a.tag);
                !a || 0 > c || c >= a.length || (a[c].Y(d, e, f, g), Fb(this))
            }],
            ["remove-effects", a => {
                a = a.tag.toLowerCase();
                const c = this.la.get(a);
                if (c && c.length) {
                    for (const d of c) d.j();
                    this.la.delete(a);
                    Eb(this, a)
                }
            }],
            ["tick", a => {
                this.kc = a.timeScale;
                this.Pc = a.gameTime;
                this.Ld = a.tickCount;
                if (0 !== this.bd)
                    for (var c of this.J) c.Fa();
                !(c = a.listenerPos) || this.aa[0] === c[0] && this.aa[1] === c[1] && this.aa[2] === c[2] || (this.aa[0] = c[0], this.aa[1] = c[1], this.aa[2] = c[2], this.g.listener.setPosition(c[0], c[1], c[2]));
                for (const d of a.instPans) {
                    a = d.uid;
                    for (const e of this.J) e.qa === a && vb(e, d.x, d.y, d.angle)
                }
            }],
            ["load-state", a => Gb(this, a)],
            ["offline-render-audio", a =>
                Jb(this, a)
            ],
            ["offline-render-finish", () => {
                this.g.resume()
            }]
        ])
    }
    V() {
        return this.g
    }
    oa() {
        return this.Ra
    }
    Hb() {
        return this.va
    }
    Ea(b) {
        this.s.Ea(b)
    }
    Na(b) {
        this.s.Na(b)
    }
    Oa() {
        for (var b of this.Qa) b.Oa();
        b = this.g.currentTime;
        for (var a of this.J) a.Oa(b);
        a = this.J.filter(c => !c.I && !c.U()).map(c => c.gb());
        k(this, "state", {
            tickCount: this.Ld,
            outputLatency: this.g.outputLatency || 0,
            audioInstances: a,
            analysers: [...this.Qa].map(c => ({
                tag: c.fa,
                index: c.Hd,
                peak: c.Ya,
                rms: c.Qd,
                binCount: c.l.frequencyBinCount,
                freqBins: c.Ed
            }))
        });
        0 ===
            a.length && 0 === this.Qa.size && this.Ub && (this.s.Qe(this.Vd), this.Ub = !1)
    }
    static xe(b) {
        return b * pb
    }
    static ld(b) {
        return Math.max(Math.min(Math.pow(10, b / 20), 1), 0)
    }
    static ue(b) {
        return Math.log(Math.max(Math.min(b, 1), 0)) / Math.log(10) * 20
    }
};
self.ha.Aa(self.fb);
"use strict";

function Lb(b) {
    b.Yb || (b.Yb = b.Bc());
    return b.Yb
}
self.gd = class {
    constructor(b, a, c, d, e) {
        this.u = b;
        this.Xe = a;
        this.Ka = c;
        this.R = d;
        this.Ue = e;
        this.Kc = "";
        this.Yb = null
    }
    j() {
        this.Yb = this.u = null
    }
    Bc() {}
    V() {
        return this.u.V()
    }
    qc() {
        return this.Xe
    }
    hb() {
        return this.Ka
    }
    pc() {
        return this.R
    }
    Ca() {
        return this.Ue
    }
    ga() {}
};
"use strict";
self.je = class extends self.gd {
    constructor(b, a, c, d, e) {
        super(b, a, c, d, e);
        this.Kc = "html5";
        this.M = new Audio;
        this.M.crossOrigin = "anonymous";
        this.M.autoplay = !1;
        this.M.preload = "auto";
        this.vb = this.wb = null;
        this.M.addEventListener("canplaythrough", () => !0);
        this.Ab = this.V().createGain();
        this.yb = null;
        this.M.addEventListener("canplay", () => {
            this.wb && (this.wb(), this.vb = this.wb = null);
            !this.yb && this.M && (this.yb = this.V().createMediaElementSource(this.M), this.yb.connect(this.Ab))
        });
        this.onended = null;
        this.M.addEventListener("ended", () => {
            if (this.onended) this.onended()
        });
        this.M.addEventListener("error", f => {
            console.error(`[Construct] Audio '${this.Ka}' error: `, f);
            this.vb && (this.vb(f), this.vb = this.wb = null)
        })
    }
    j() {
        Ob(this.u, this);
        this.Ab.disconnect();
        this.Ab = null;
        this.yb.disconnect();
        this.yb = null;
        this.M && !this.M.paused && this.M.pause();
        this.M = this.onended = null;
        super.j()
    }
    Bc() {
        return new Promise((b, a) => {
            this.wb = b;
            this.vb = a;
            this.M.src = this.Ka
        })
    }
    T() {
        return this.M
    }
    ga() {
        return this.M.duration
    }
};
"use strict";
async function Sb(b) {
    if (b.Ga) return b.Ga;
    var a = b.u.s;
    if ("cordova" === a.A && a.nd(b.Ka) && a.Vb) b.Ga = await a.Gb(b.Ka);
    else {
        a = await fetch(b.Ka);
        if (!a.ok) throw Error(`error fetching audio data: ${a.status} ${a.statusText}`);
        b.Ga = await a.arrayBuffer()
    }
}
async function Tb(b) {
    if (b.ja) return b.ja;
    b.ja = await Nb(b.u, b.Ga, b.We);
    b.Ga = null
}
self.le = class extends self.gd {
    constructor(b, a, c, d, e, f) {
        super(b, a, c, d, e);
        this.Kc = "webaudio";
        this.ja = this.Ga = null;
        this.We = !!f
    }
    j() {
        Ob(this.u, this);
        this.ja = this.Ga = null;
        super.j()
    }
    async Bc() {
        try {
            await Sb(this), await Tb(this)
        } catch (b) {
            console.error(`[Construct] Failed to load audio '${this.Ka}': `, b)
        }
    }
    ga() {
        return this.ja ? this.ja.duration : 0
    }
};
"use strict";
let Ub = 0;

function Q(b, a) {
    a = !!a;
    b.sb !== a && (b.sb = a, b.sb ? (R(b, !1), b.F || (b.F = b.V().createPanner(), b.F.panningModel = b.u.Od, b.F.distanceModel = b.u.zd, b.F.refDistance = b.u.Pd, b.F.maxDistance = b.u.Nd, b.F.rolloffFactor = b.u.Rd), b.G.disconnect(), b.G.connect(b.F), b.F.connect(b.oa())) : (b.F.disconnect(), b.G.disconnect(), b.G.connect(b.oa())))
}

function R(b, a) {
    a = !!a;
    b.Wb !== a && (b.Wb = a, b.Wb ? (Q(b, !1), b.ea = b.V().createStereoPanner(), b.G.disconnect(), b.G.connect(b.ea), b.ea.connect(b.oa())) : (b.ea.disconnect(), b.ea = null, b.G.disconnect(), b.G.connect(b.oa())))
}

function wb(b, a) {
    b.Wb && b.$c !== a && (b.ea.pan.value = a, b.$c = a)
}

function U(b, a) {
    b.La = a;
    b.G.gain.cancelScheduledValues(0);
    b.pb = -1;
    b.G.gain.value = b.rc()
}

function Rb(b, a) {
    a = !!a;
    b.Sa !== a && (b.Sa = a, b.Ob())
}

function vb(b, a, c, d) {
    if (b.sb) {
        var e = b.Xa,
            f = b.Wa,
            g = Math.cos(d);
        d = Math.sin(d);
        if (e[0] !== a || e[1] !== c || 0 !== e[2]) e[0] = a, e[1] = c, e[2] = 0, b.F.setPosition(...e);
        if (f[0] !== g || f[1] !== d || 0 !== f[2]) f[0] = g, f[1] = d, f[2] = 0, b.F.setOrientation(...f)
    }
}

function V(b) {
    return b.Vc ? b.u.Pc : performance.now() / 1E3
}
self.hd = class {
    constructor(b, a, c) {
        this.u = b;
        this.O = a;
        this.fa = c;
        this.Pb = Ub++;
        this.G = this.V().createGain();
        this.G.connect(this.oa());
        this.F = null;
        this.sb = !1;
        this.Xa = [0, 0, 0];
        this.Wa = [0, 0, 0];
        this.sa = [0, 0, 0];
        this.ea = null;
        this.Wb = !1;
        this.$c = 0;
        this.I = !0;
        this.X = this.ta = this.K = !1;
        this.La = 1;
        this.Sa = !1;
        this.ma = 1;
        b = this.u.bd;
        this.Vc = 1 === b && !this.Ca() || 2 === b;
        this.pb = this.qa = -1;
        this.Td = !1
    }
    j() {
        this.O = this.u = null;
        this.F && (this.F.disconnect(), this.F = null);
        this.ea && (this.ea.disconnect(), this.ea = null);
        this.G.disconnect();
        this.G = null
    }
    V() {
        return this.u.V()
    }
    oa() {
        return Mb(this.u, this.fa)
    }
    qc() {
        return this.O.qc()
    }
    hb() {
        return this.O.hb()
    }
    pc() {
        return this.O.pc()
    }
    Ca() {
        return this.O.Ca()
    }
    U() {}
    nc() {}
    IsPlaying() {
        return !this.I && !this.K && !this.U()
    }
    Ma() {}
    ga() {
        return this.O.ga()
    }
    Play() {}
    Da() {}
    jb() {}
    Jb() {}
    Oa(b) {
        -1 !== this.pb && b >= this.pb && (this.pb = -1, this.Td && this.Da(), Pb(this.u, "fade-ended", this.fa, this.Pb))
    }
    rc() {
        const b = this.La;
        return isFinite(b) ? b : 0
    }
    Hb() {
        return this.u.Hb()
    }
    Ob() {}
    vc() {}
    Fa() {}
    uc() {}
    wc() {}
    sc() {}
    gb() {
        var b = this.Pb,
            a = this.fa,
            c = this.ga(),
            d = this.La,
            e = this.IsPlaying();
        if (this.F) {
            var f = this.F;
            f = {
                pos: this.Xa,
                orient: this.Wa,
                cia: f.coneInnerAngle,
                coa: f.coneOuterAngle,
                cog: f.coneOuterGain,
                uid: this.qa
            }
        } else f = null;
        return {
            aiid: b,
            tag: a,
            duration: c,
            volume: d,
            isPlaying: e,
            playbackTime: this.Ma(),
            playbackRate: this.ma,
            uid: this.qa,
            bufferOriginalUrl: this.qc(),
            bufferUrl: "",
            bufferType: this.pc(),
            isMusic: this.Ca(),
            isLooping: this.X,
            isMuted: this.Sa,
            resumePosition: this.sc(),
            pan: f,
            stereoPan: this.ea ? this.$c : null
        }
    }
    Cc(b) {
        var a = b.playbackRate;
        this.ma !== a && (this.ma = a, this.Fa());
        Rb(this, b.isMuted)
    }
};
"use strict";
self.ke = class extends self.hd {
    constructor(b, a, c) {
        super(b, a, c);
        this.O.Ab.connect(this.G);
        this.O.onended = () => this.Ec()
    }
    j() {
        this.Da();
        this.O.Ab.disconnect();
        super.j()
    }
    T() {
        return this.O.T()
    }
    Ec() {
        this.I = !0;
        this.qa = -1;
        Pb(this.u, "ended", this.fa, this.Pb)
    }
    U() {
        return this.T().ended
    }
    nc() {
        return this.I ? !0 : this.U()
    }
    Ma() {
        let b = this.T().currentTime;
        this.X || (b = Math.min(b, this.ga()));
        return b
    }
    Play(b, a, c) {
        const d = this.T();
        1 !== d.playbackRate && (d.playbackRate = 1);
        d.loop !== b && (d.loop = b);
        U(this, a);
        d.muted && (d.muted = !1);
        if (d.currentTime !== c) try {
            d.currentTime = c
        } catch (e) {
            console.warn(`[Construct] Exception seeking audio '${this.O.hb()}' to position '${c}': `, e)
        }
        this.u.Ea(d);
        this.K = this.I = !1;
        this.X = b;
        this.ma = 1
    }
    Da() {
        const b = this.T();
        b.paused || b.pause();
        this.u.Na(b);
        this.I = !0;
        this.K = !1;
        this.qa = -1
    }
    jb() {
        if (!(this.K || this.I || this.U())) {
            var b = this.T();
            b.paused || b.pause();
            this.u.Na(b);
            this.K = !0
        }
    }
    Jb() {
        !this.K || this.I || this.U() || (this.u.Ea(this.T()), this.K = !1)
    }
    Ob() {
        this.T().muted = this.Sa || this.Hb()
    }
    vc(b) {
        b = !!b;
        this.X !== b && (this.X =
            b, this.T().loop = b)
    }
    Fa() {
        let b = this.ma;
        this.Vc && (b *= this.u.kc);
        try {
            this.T().playbackRate = b
        } catch (a) {
            console.warn(`[Construct] Unable to set playback rate '${b}':`, a)
        }
    }
    uc(b) {
        if (!this.I && !this.U()) try {
            this.T().currentTime = b
        } catch (a) {
            console.warn(`[Construct] Error seeking audio to '${b}': `, a)
        }
    }
    sc() {
        return this.Ma()
    }
    wc(b) {
        b ? this.IsPlaying() ? (this.T().pause(), this.ta = !0) : this.ta = !1 : this.ta && (this.u.Ea(this.T()), this.ta = !1)
    }
};
"use strict";

function W(b) {
    b.o && b.o.disconnect();
    b.o = null;
    b.kb = null
}
self.me = class extends self.hd {
    constructor(b, a, c) {
        super(b, a, c);
        this.o = null;
        this.bc = d => this.Ec(d);
        this.Qc = !0;
        this.kb = null;
        this.P = this.cc = this.ec = 0;
        this.Yc = 1
    }
    j() {
        this.Da();
        W(this);
        this.bc = null;
        super.j()
    }
    Ec(b) {
        this.K || this.ta || b.target !== this.kb || (this.I = this.Qc = !0, this.qa = -1, W(this), Pb(this.u, "ended", this.fa, this.Pb))
    }
    U() {
        return !this.I && this.o && this.o.loop || this.K ? !1 : this.Qc
    }
    nc() {
        return !this.o || this.I ? !0 : this.U()
    }
    Ma() {
        let b;
        b = this.K ? this.P : this.cc + (V(this) - this.ec) * this.ma;
        this.X || (b = Math.min(b, this.ga()));
        return b
    }
    Play(b, a, c, d) {
        this.Yc = 1;
        U(this, a);
        W(this);
        this.o = this.V().createBufferSource();
        this.o.buffer = this.O.ja;
        this.o.connect(this.G);
        this.kb = this.o;
        this.o.onended = this.bc;
        this.o.loop = b;
        this.o.start(d, c);
        this.K = this.I = this.Qc = !1;
        this.X = b;
        this.ma = 1;
        this.ec = V(this);
        this.cc = c
    }
    Da() {
        if (this.o) try {
            this.o.stop(0)
        } catch (b) {}
        this.I = !0;
        this.K = !1;
        this.qa = -1
    }
    jb() {
        this.K || this.I || this.U() || (this.P = this.Ma(), this.X && (this.P %= this.ga()), this.K = !0, this.o.stop(0))
    }
    Jb() {
        !this.K || this.I || this.U() || (W(this), this.o =
            this.V().createBufferSource(), this.o.buffer = this.O.ja, this.o.connect(this.G), this.kb = this.o, this.o.onended = this.bc, this.o.loop = this.X, U(this, this.La), this.Fa(), this.o.start(0, this.P), this.ec = V(this), this.cc = this.P, this.K = !1)
    }
    rc() {
        return super.rc() * this.Yc
    }
    Ob() {
        this.Yc = this.Sa || this.Hb() ? 0 : 1;
        U(this, this.La)
    }
    vc(b) {
        b = !!b;
        this.X !== b && (this.X = b, this.o && (this.o.loop = b))
    }
    Fa() {
        let b = this.ma;
        this.Vc && (b *= this.u.kc);
        this.o && (this.o.playbackRate.value = b)
    }
    uc(b) {
        this.I || this.U() || (this.K ? this.P = b : (this.jb(), this.P =
            b, this.Jb()))
    }
    sc() {
        return this.P
    }
    wc(b) {
        b ? this.IsPlaying() ? (this.ta = !0, this.P = this.Ma(), this.X && (this.P %= this.ga()), this.o.stop(0)) : this.ta = !1 : this.ta && (W(this), this.o = this.V().createBufferSource(), this.o.buffer = this.O.ja, this.o.connect(this.G), this.kb = this.o, this.o.onended = this.bc, this.o.loop = this.X, U(this, this.La), this.Fa(), this.o.start(0, this.P), this.ec = V(this), this.cc = this.P, this.ta = !1)
    }
    Cc(b) {
        super.Cc(b);
        this.P = b.resumePosition
    }
};
"use strict";

function X(b) {
    return b.g.createGain()
}

function Y(b, a, c, d, e) {
    a.cancelScheduledValues(0);
    if (0 === e) a.value = c;
    else switch (b = b.g.currentTime, e += b, d) {
        case 0:
            a.setValueAtTime(c, e);
            break;
        case 1:
            a.setValueAtTime(a.value, b);
            a.linearRampToValueAtTime(c, e);
            break;
        case 2:
            a.setValueAtTime(a.value, b), a.exponentialRampToValueAtTime(c, e)
    }
}
class Z {
    constructor(b) {
        this.u = b;
        this.g = b.V();
        this.Hd = -1;
        this.R = this.fa = "";
        this.m = null
    }
    j() {
        this.g = null
    }
    N() {}
    S() {}
    gb() {
        return {
            type: this.R,
            tag: this.fa,
            params: this.m
        }
    }
}
self.ce = class extends Z {
    constructor(b, a, c, d, e, f, g) {
        super(b);
        this.R = "filter";
        this.m = [a, c, d, e, f, g];
        this.v = X(this);
        this.i = X(this);
        this.i.gain.value = g;
        this.h = X(this);
        this.h.gain.value = 1 - g;
        this.C = this.g.createBiquadFilter();
        this.C.type = a;
        this.C.frequency.value = c;
        this.C.detune.value = d;
        this.C.Q.value = e;
        this.C.gain.vlaue = f;
        this.v.connect(this.C);
        this.v.connect(this.h);
        this.C.connect(this.i)
    }
    j() {
        this.v.disconnect();
        this.C.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[5] = a;
                Y(this, this.i.gain, a, c, d);
                Y(this, this.h.gain, 1 - a, c, d);
                break;
            case 1:
                this.m[1] = a;
                Y(this, this.C.frequency, a, c, d);
                break;
            case 2:
                this.m[2] = a;
                Y(this, this.C.detune, a, c, d);
                break;
            case 3:
                this.m[3] = a;
                Y(this, this.C.Q, a, c, d);
                break;
            case 4:
                this.m[4] = a, Y(this, this.C.gain, a, c, d)
        }
    }
};
self.ae = class extends Z {
    constructor(b, a, c, d) {
        super(b);
        this.R = "delay";
        this.m = [a, c, d];
        this.v = X(this);
        this.i = X(this);
        this.i.gain.value = d;
        this.h = X(this);
        this.h.gain.value = 1 - d;
        this.xb = X(this);
        this.W = this.g.createDelay(a);
        this.W.delayTime.value = a;
        this.ob = X(this);
        this.ob.gain.value = c;
        this.v.connect(this.xb);
        this.v.connect(this.h);
        this.xb.connect(this.i);
        this.xb.connect(this.W);
        this.W.connect(this.ob);
        this.ob.connect(this.xb)
    }
    j() {
        this.v.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        this.xb.disconnect();
        this.W.disconnect();
        this.ob.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        const e = self.fb.ld;
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[2] = a;
                Y(this, this.i.gain, a, c, d);
                Y(this, this.h.gain, 1 - a, c, d);
                break;
            case 4:
                this.m[1] = e(a);
                Y(this, this.ob.gain, e(a), c, d);
                break;
            case 5:
                this.m[0] = a, Y(this, this.W.delayTime, a, c, d)
        }
    }
};
self.$d = class extends Z {
    constructor(b, a, c, d) {
        super(b);
        this.R = "convolution";
        this.m = [c, d];
        this.xd = this.wd = "";
        this.v = X(this);
        this.i = X(this);
        this.i.gain.value = d;
        this.h = X(this);
        this.h.gain.value = 1 - d;
        this.nb = this.g.createConvolver();
        this.nb.normalize = c;
        this.nb.buffer = a;
        this.v.connect(this.nb);
        this.v.connect(this.h);
        this.nb.connect(this.i)
    }
    j() {
        this.v.disconnect();
        this.nb.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b,
        a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0), this.m[1] = a, Y(this, this.i.gain, a, c, d), Y(this, this.h.gain, 1 - a, c, d)
        }
    }
    gb() {
        const b = super.gb();
        b.bufferOriginalUrl = this.wd;
        b.bufferUrl = "";
        b.bufferType = this.xd;
        return b
    }
};
self.de = class extends Z {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.R = "flanger";
        this.m = [a, c, d, e, f];
        this.v = X(this);
        this.h = X(this);
        this.h.gain.value = 1 - f / 2;
        this.i = X(this);
        this.i.gain.value = f / 2;
        this.qb = X(this);
        this.qb.gain.value = e;
        this.W = this.g.createDelay(a + c);
        this.W.delayTime.value = a;
        this.B = this.g.createOscillator();
        this.B.frequency.value = d;
        this.L = X(this);
        this.L.gain.value = c;
        this.v.connect(this.W);
        this.v.connect(this.h);
        this.W.connect(this.i);
        this.W.connect(this.qb);
        this.qb.connect(this.W);
        this.B.connect(this.L);
        this.L.connect(this.W.delayTime);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.v.disconnect();
        this.W.disconnect();
        this.B.disconnect();
        this.L.disconnect();
        this.h.disconnect();
        this.i.disconnect();
        this.qb.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[4] = a;
                Y(this, this.i.gain, a / 2, c, d);
                Y(this, this.h.gain, 1 - a / 2, c, d);
                break;
            case 6:
                this.m[1] = a / 1E3;
                Y(this, this.L.gain, a / 1E3,
                    c, d);
                break;
            case 7:
                this.m[2] = a;
                Y(this, this.B.frequency, a, c, d);
                break;
            case 8:
                this.m[3] = a / 100, Y(this, this.qb.gain, a / 100, c, d)
        }
    }
};
self.fe = class extends Z {
    constructor(b, a, c, d, e, f, g) {
        super(b);
        this.R = "phaser";
        this.m = [a, c, d, e, f, g];
        this.v = X(this);
        this.h = X(this);
        this.h.gain.value = 1 - g / 2;
        this.i = X(this);
        this.i.gain.value = g / 2;
        this.C = this.g.createBiquadFilter();
        this.C.type = "allpass";
        this.C.frequency.value = a;
        this.C.detune.value = c;
        this.C.Q.value = d;
        this.B = this.g.createOscillator();
        this.B.frequency.value = f;
        this.L = X(this);
        this.L.gain.value = e;
        this.v.connect(this.C);
        this.v.connect(this.h);
        this.C.connect(this.i);
        this.B.connect(this.L);
        this.L.connect(this.C.frequency);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.v.disconnect();
        this.C.disconnect();
        this.B.disconnect();
        this.L.disconnect();
        this.h.disconnect();
        this.i.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[5] = a;
                Y(this, this.i.gain, a / 2, c, d);
                Y(this, this.h.gain, 1 - a / 2, c, d);
                break;
            case 1:
                this.m[0] = a;
                Y(this, this.C.frequency, a, c, d);
                break;
            case 2:
                this.m[1] = a;
                Y(this, this.C.detune, a, c, d);
                break;
            case 3:
                this.m[2] = a;
                Y(this, this.C.Q, a, c, d);
                break;
            case 6:
                this.m[3] = a;
                Y(this, this.L.gain, a, c, d);
                break;
            case 7:
                this.m[4] = a, Y(this, this.B.frequency, a, c, d)
        }
    }
};
self.ee = class extends Z {
    constructor(b, a) {
        super(b);
        this.R = "gain";
        this.m = [a];
        this.l = X(this);
        this.l.gain.value = a
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    S(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    Y(b, a, c, d) {
        const e = self.fb.ld;
        switch (b) {
            case 4:
                this.m[0] = e(a), Y(this, this.l.gain, e(a), c, d)
        }
    }
};
self.he = class extends Z {
    constructor(b, a) {
        super(b);
        this.R = "stereopan";
        this.m = [a];
        this.l = this.g.createStereoPanner();
        this.l.pan.value = a
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    S(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    Y(b, a, c, d) {
        a = Math.min(Math.max(a / 100, -1), 1);
        switch (b) {
            case 9:
                this.m[0] = a, Y(this, this.l.pan, a, c, d)
        }
    }
};
self.ie = class extends Z {
    constructor(b, a, c) {
        super(b);
        this.R = "tremolo";
        this.m = [a, c];
        this.l = X(this);
        this.l.gain.value = 1 - c / 2;
        this.B = this.g.createOscillator();
        this.B.frequency.value = a;
        this.L = X(this);
        this.L.gain.value = c / 2;
        this.B.connect(this.L);
        this.L.connect(this.l.gain);
        this.B.start(0)
    }
    j() {
        this.B.stop(0);
        this.B.disconnect();
        this.L.disconnect();
        this.l.disconnect();
        super.j()
    }
    S(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[1] =
                    a;
                Y(this, this.l.gain, 1 - a / 2, c, d);
                Y(this, this.L.gain, a / 2, c, d);
                break;
            case 7:
                this.m[0] = a, Y(this, this.B.frequency, a, c, d)
        }
    }
};
self.ge = class extends Z {
    constructor(b, a, c) {
        super(b);
        this.R = "ringmod";
        this.m = [a, c];
        this.v = X(this);
        this.i = X(this);
        this.i.gain.value = c;
        this.h = X(this);
        this.h.gain.value = 1 - c;
        this.Db = X(this);
        this.Db.gain.value = 0;
        this.B = this.g.createOscillator();
        this.B.frequency.value = a;
        this.B.connect(this.Db.gain);
        this.B.start(0);
        this.v.connect(this.Db);
        this.v.connect(this.h);
        this.Db.connect(this.i)
    }
    j() {
        this.B.stop(0);
        this.B.disconnect();
        this.Db.disconnect();
        this.v.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0);
                this.m[1] = a;
                Y(this, this.i.gain, a, c, d);
                Y(this, this.h.gain, 1 - a, c, d);
                break;
            case 7:
                this.m[0] = a, Y(this, this.B.frequency, a, c, d)
        }
    }
};
self.be = class extends Z {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.R = "distortion";
        this.m = [a, c, d, e, f];
        this.v = X(this);
        this.jc = X(this);
        this.ic = X(this);
        b = d;
        .01 > b && (b = .01);
        this.jc.gain.value = b;
        this.ic.gain.value = Math.pow(1 / b, .6) * e;
        this.i = X(this);
        this.i.gain.value = f;
        this.h = X(this);
        this.h.gain.value = 1 - f;
        this.lc = this.g.createWaveShaper();
        this.Mc = new Float32Array(65536);
        for (e = 0; 32768 > e; ++e) f = e / 32768, b = 1.05 * c * a - a, d = 0 > f ? -f : f, d < a ? b = d : (d = 1 - Math.exp(-(1 / b) * (d - a)), b = a + b * d), f = b * (0 > f ? -1 : 1), this.Mc[32768 + e] = f, this.Mc[32768 -
            e - 1] = -f;
        this.lc.curve = this.Mc;
        this.v.connect(this.jc);
        this.v.connect(this.h);
        this.jc.connect(this.lc);
        this.lc.connect(this.ic);
        this.ic.connect(this.i)
    }
    j() {
        this.v.disconnect();
        this.jc.disconnect();
        this.lc.disconnect();
        this.ic.disconnect();
        this.i.disconnect();
        this.h.disconnect();
        super.j()
    }
    S(b) {
        this.i.disconnect();
        this.i.connect(b);
        this.h.disconnect();
        this.h.connect(b)
    }
    N() {
        return this.v
    }
    Y(b, a, c, d) {
        switch (b) {
            case 0:
                a = Math.max(Math.min(a / 100, 1), 0), this.m[4] = a, Y(this, this.i.gain, a, c, d), Y(this, this.h.gain,
                    1 - a, c, d)
        }
    }
};
self.Zd = class extends Z {
    constructor(b, a, c, d, e, f) {
        super(b);
        this.R = "compressor";
        this.m = [a, c, d, e, f];
        this.l = this.g.createDynamicsCompressor();
        this.l.threshold.value = a;
        this.l.knee.value = c;
        this.l.ratio.value = d;
        this.l.attack.value = e;
        this.l.release.value = f
    }
    j() {
        this.l.disconnect();
        super.j()
    }
    S(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    Y() {}
};
self.Yd = class extends Z {
    constructor(b, a, c) {
        super(b);
        this.R = "analyser";
        this.m = [a, c];
        this.l = this.g.createAnalyser();
        this.l.fftSize = a;
        this.l.smoothingTimeConstant = c;
        this.Ed = new Float32Array(this.l.frequencyBinCount);
        this.Sd = new Uint8Array(a);
        this.Qd = this.Ya = 0;
        b = this.u;
        b.Qa.add(this);
        T(b)
    }
    j() {
        this.u.Qa.delete(this);
        this.l.disconnect();
        super.j()
    }
    Oa() {
        this.l.getFloatFrequencyData(this.Ed);
        this.l.getByteTimeDomainData(this.Sd);
        const b = this.l.fftSize;
        let a = this.Ya = 0;
        for (var c = 0; c < b; ++c) {
            let d = (this.Sd[c] -
                128) / 128;
            0 > d && (d = -d);
            this.Ya < d && (this.Ya = d);
            a += d * d
        }
        c = self.fb.ue;
        this.Ya = c(this.Ya);
        this.Qd = c(Math.sqrt(a / b))
    }
    S(b) {
        this.l.disconnect();
        this.l.connect(b)
    }
    N() {
        return this.l
    }
    Y() {}
};