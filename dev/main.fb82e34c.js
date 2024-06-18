// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eF1lK":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "010488defb82e34c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"jLNqd":[function(require,module,exports) {
var global = arguments[3];
/**
 * @author Takahiro INOUE <takahiro.inoue@aist.go.jp>
 * @license Copyright (c) 2017-2019 AIST Songle Project
 */ (function(global) {
    "use strict";
    var __module__ = require("4d5d033b37d072c0").default;
    if (!global.XMLHttpRequest) global.XMLHttpRequest = require("dcc8d2ffb9a51002").XMLHttpRequest;
    if ("process" in global) module["exports"] = __module__;
    global["Songle"] = __module__;
})((this || 0).self || global);

},{"4d5d033b37d072c0":"41CkJ","dcc8d2ffb9a51002":"hezZX"}],"41CkJ":[function(require,module,exports) {
!function(e, t) {
    var n, r;
    module.exports = t();
}(this, function() {
    return function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var i = t[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: r
            });
        }, n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            });
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" === typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for(var i in e)n.d(r, i, (function(t) {
                return e[t];
            }).bind(null, i));
            return r;
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return n.d(t, "a", t), t;
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, n.p = "/packs/", n(n.s = 411);
    }({
        1: function(e, t, n) {
            "use strict";
            n.r(t), (function(e) {
                var r = n(8), i = {};
                !function(e) {
                    Object.defineProperties(i, {
                        currentClockTime: {
                            configurable: !0,
                            get: function() {
                                return Date.now();
                            }
                        },
                        defaultAppServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultAppServerProtocol__ || "https:";
                            },
                            set: function(e) {
                                i.__defaultAppServerProtocol__ = e;
                            }
                        },
                        defaultAppServerHost: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultAppServerHost__ || "api.songle.jp";
                            },
                            set: function(e) {
                                i.__defaultAppServerHost__ = e;
                            }
                        },
                        defaultAppServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i.defaultAppServerProtocol + "//" + i.defaultAppServerHost;
                            }
                        },
                        defaultLogServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultLogServerProtocol__ || "https:";
                            },
                            set: function(e) {
                                i.__defaultLogServerProtocol__ = e;
                            }
                        },
                        defaultLogServerHost: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultLogServerHost__ || "log.songle.jp";
                            },
                            set: function(e) {
                                i.__defaultLogServerHost__ = e;
                            }
                        },
                        defaultLogServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i.defaultLogServerProtocol + "//" + i.defaultLogServerHost;
                            }
                        },
                        defaultWebsocketServerProtocol: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultWebsocketServerProtocol__ || "wss:";
                            },
                            set: function(e) {
                                i.__defaultWebsocketServerProtocol__ = e;
                            }
                        },
                        defaultWebsocketServerHost: {
                            configurable: !0,
                            get: function() {
                                return i.__defaultWebsocketServerHost__ || "api.songle.jp";
                            },
                            set: function(e) {
                                i.__defaultWebsocketServerHost__ = e;
                            }
                        },
                        defaultWebsocketServerEndpoint: {
                            configurable: !0,
                            get: function() {
                                return i.defaultWebsocketServerProtocol + "//" + i.defaultWebsocketServerHost;
                            }
                        },
                        global: {
                            configurable: !0,
                            get: function() {
                                return e;
                            }
                        },
                        isStandalone: {
                            configurable: !0,
                            get: function() {
                                return !e.document;
                            }
                        },
                        isWebBrowser: {
                            configurable: !0,
                            get: function() {
                                return !!e.document;
                            }
                        },
                        language: {
                            configurable: !0,
                            get: function() {
                                var e = window.navigator.languages && window.navigator.languages[0] || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
                                switch(!0){
                                    case /en/.test(e.toLowerCase()):
                                        return "en";
                                    case /ja/.test(e.toLowerCase()):
                                        return "ja";
                                    default:
                                        return "en";
                                }
                            }
                        },
                        referer: {
                            configurable: !0,
                            get: function() {
                                return i.isStandalone ? "-" : e.document.referrer;
                            }
                        },
                        userAgent: {
                            configurable: !0,
                            get: function() {
                                return i.isStandalone ? "-" : e.navigator.appCodeName + "/" + navigator.appVersion;
                            }
                        },
                        userAgentIsLaptop: {
                            configurable: !0,
                            get: function() {
                                return !i.userAgentIsAndroid && !i.userAgentIsiOS;
                            }
                        },
                        userAgentIsMobile: {
                            configurable: !0,
                            get: function() {
                                return i.userAgentIsAndroid || i.userAgentIsiOS;
                            }
                        },
                        userAgentIsAndroid: {
                            configurable: !0,
                            get: function() {
                                return -1 != i.userAgent.toLowerCase().indexOf("android") || -1 != i.userAgent.toLowerCase().indexOf("linux");
                            }
                        },
                        userAgentIsiOS: {
                            configurable: !0,
                            get: function() {
                                return -1 != i.userAgent.toLowerCase().indexOf("iphone") || -1 != i.userAgent.toLowerCase().indexOf("ipad") || -1 != i.userAgent.toLowerCase().indexOf("ipod");
                            }
                        },
                        searchQueries: {
                            configurable: !0,
                            get: function() {
                                var e = {};
                                return location.search.slice(location.search.indexOf("?") + 1).split("&").forEach(function(t) {
                                    var n = t.match(/(.+?)=(.+)/);
                                    if (n) {
                                        var r = n[1], i = n[2];
                                        e[r] = i ? decodeURIComponent(i) : i;
                                    }
                                }), e;
                            }
                        },
                        showDebugLog: {
                            configurable: !0,
                            get: function() {
                                return !!i.__showDebugLog__;
                            },
                            set: function(e) {
                                i.__showDebugLog__ = !!e;
                            }
                        },
                        showErrorLog: {
                            configurable: !0,
                            get: function() {
                                return !!i.__showErrorLog__;
                            },
                            set: function(e) {
                                i.__showErrorLog__ = !!e;
                            }
                        },
                        showLicense: {
                            configurable: !0,
                            get: function() {
                                return !!i.__showLicense__;
                            },
                            set: function(e) {
                                i.__showLicense__ = !!e, e ? (r.default.removeLicense(), r.default.createLicense(e)) : (r.default.removeLicense(), console.log("# \u30E9\u30A4\u30BB\u30F3\u30B9\u8868\u8A18\u306B\u95A2\u3059\u308B\u30AC\u30A4\u30C9\u30E9\u30A4\u30F3\n\n\u56FD\u7ACB\u7814\u7A76\u958B\u767A\u6CD5\u4EBA\u7523\u696D\u6280\u8853\u7DCF\u5408\u7814\u7A76\u6240\n\u60C5\u5831\u6280\u8853\u7814\u7A76\u90E8\u9580\n\u30E1\u30C7\u30A3\u30A2\u30A4\u30F3\u30BF\u30E9\u30AF\u30B7\u30E7\u30F3\u7814\u7A76\u30B0\u30EB\u30FC\u30D7\n\nSongle API\u306F\u975E\u5546\u7528\u5229\u7528\u306B\u9650\u308A\u3001\u3069\u306A\u305F\u3067\u3082\u7121\u6599\u30FB\u7121\u4FDD\u8A3C\u3067\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\n\u305F\u3060\u3057\u3001\u539F\u5247\u3068\u3057\u3066Songle API\u3092\u5229\u7528\u3057\u3066\u3044\u308B\u65E8\u3092 https://api.songle.jp/ \u306B\u30CF\u30A4\u30D1\u30FC\u30EA\u30F3\u30AF\u3057\u305F\u4E0A\u3067\u3001\u5229\u7528\u3057\u3066\u3044\u308B\u30B7\u30B9\u30C6\u30E0\u3082\u3057\u304F\u306F\u5916\u90E8\u30B5\u30A4\u30C8\u7B49\u306B\u8868\u793A\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002\n\n# \u304A\u554F\u3044\u5408\u308F\u305B\n\nsongle-ml@aist.go.jp"));
                            }
                        }
                    }), i.stringIsBlank = function(e) {
                        return "" == e || null == e;
                    }, i.typeOf = function(e) {
                        if (null != e) switch(typeof e){
                            case "object":
                                return null != e.length ? "array" : "object";
                            case "number":
                                return "number";
                            case "string":
                                return "string";
                        }
                        return "null";
                    }, e.__sw__ = i;
                }(0..self || e), t.default = i;
            }).call(this, n(17));
        },
        100: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(21), i = n(30), a = n(2), o = n(37), u = n(1);
            function s(e, t, n) {
                return (s = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function l(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e, t, n) {
                return t && l(e.prototype, t), n && l(e, n), e;
            }
            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            }
            function p(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var h = "songle-api-plugin-songle-widget", y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t);
                }(n, e);
                var t = _(n);
                function n(e) {
                    var r;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), (r = t.call(this)).__element__ = e.element, r.__responsive__ = null != e.responsive && e.responsive, r.__showController__ = null == e.showController || e.showController, r.__showOriginalSiteLink__ = null == e.showOriginalSiteLink || e.showOriginalSiteLink, r.__showMusicMap__ = null == e.showMusicMap || e.showMusicMap, r.__showSongleJpSiteLink__ = null == e.showSongleJpSiteLink || e.showSongleJpSiteLink, r.__controllerWidth__ = null != e.controllerWidth ? e.controllerWidth : 256, r.__controllerHeight__ = null != e.controllerHeight ? e.controllerHeight : 30, r.__controllerMouseEnterColor__ = null != e.controllerMouseEnterColor ? e.controllerMouseEnterColor : "#e17", r.__controllerMouseLeaveColor__ = null != e.controllerMouseLeaveColor ? e.controllerMouseLeaveColor : "#222", r.__language__ = null != e.language ? e.language : u.default.language, r.__musicMapWidth__ = null != e.musicMapWidth ? e.musicMapWidth : 256, r.__musicMapHeight__ = null != e.musicMapHeight ? e.musicMapHeight : 40, r.__musicMapOuterBackgroundColor__ = null != e.musicMapOuterBackgroundColor ? e.musicMapOuterBackgroundColor : "#999", r.__musicMapInnerBackgroundColor__ = null != e.musicMapInnerBackgroundColor ? e.musicMapInnerBackgroundColor : "#eee", r.__musicMapChorusSectionColor__ = null != e.musicMapChorusSectionColor ? e.musicMapChorusSectionColor : "#f84", r.__musicMapRepeatedSectionColor__ = null != e.musicMapRepeatedSectionColor ? e.musicMapRepeatedSectionColor : "#48f", r.__musicMapCursorColor__ = null != e.musicMapCursorColor ? e.musicMapCursorColor : "#e17", r.__className__ = "".concat(h, "-").concat(Math.random().toString(36).slice(-4)), r.__readyTrap__ = function(e) {
                        return r.render();
                    }, r.__playTrap__ = function(e) {}, r.__pauseTrap__ = function(e) {}, r.__seekTrap__ = function(e) {}, r.__resizeTrap__ = function(e) {
                        r.__responsive__ && r.render();
                    }, r.__scrollTrap__ = function(e) {
                        r.__responsive__ && r.render();
                    }, r.__responsive__ && null != r.element && (e.width = r.element.offsetWidth, e.height = r.element.offsetHeight), r.__updateSize__(e), r;
                }
                return c(n, null, [
                    {
                        key: "Name",
                        get: function() {
                            return h;
                        }
                    }
                ]), c(n, [
                    {
                        key: "initialize",
                        value: function(e) {
                            s(d(n.prototype), "initialize", this).call(this, e), this.player.on("ready", this.__readyTrap__), this.player.on("play", this.__playTrap__), this.player.on("pause", this.__pauseTrap__), this.player.on("seek", this.__seekTrap__), window.addEventListener("resize", this.__resizeTrap__, !1), window.addEventListener("scroll", this.__scrollTrap__, !1);
                        }
                    },
                    {
                        key: "dispose",
                        value: function() {
                            s(d(n.prototype), "dispose", this).call(this), clearInterval(this.__musicMapAnimationIntervalId__), window.removeEventListener("resize", this.__resizeTrap__, !1), window.removeEventListener("scroll", this.__scrollTrap__, !1), this.player.off("ready", this.__readyTrap__), this.player.off("play", this.__playTrap__), this.player.off("pause", this.__pauseTrap__), this.player.off("seek", this.__seekTrap__), this.__removeRenderedElement__();
                        }
                    },
                    {
                        key: "render",
                        value: function() {
                            null != this.element && this.__responsive__ && this.__updateSize__({
                                width: this.element.offsetWidth,
                                height: this.element.offsetHeight
                            });
                            var e = document.createElement("div");
                            clearInterval(this.__musicMapAnimationIntervalId__), e.className = this.__className__, e.style.lineHeight = "normal", e.style.fontSize = "10.5px", this.__showController__ && e.appendChild(this.__createControllerElement__({
                                width: this.__controllerWidth__,
                                height: this.__controllerHeight__,
                                mouseEnterColor: this.__controllerMouseEnterColor__,
                                mouseLeaveColor: this.__controllerMouseLeaveColor__
                            })), this.__showOriginalSiteLink__ && e.appendChild(this.__createOriginalSiteLinkElement__({
                                width: this.__musicMapWidth__,
                                height: 15
                            })), this.__showMusicMap__ && e.appendChild(this.__createMusicMapElement__({
                                width: this.__musicMapWidth__,
                                height: this.__musicMapHeight__
                            })), this.__showSongleJpSiteLink__ && e.appendChild(this.__createSongleJpSiteLinkElement__({
                                width: this.__musicMapWidth__,
                                height: 15
                            })), this.__removeRenderedElement__(), this.element && this.element.appendChild(e);
                        }
                    },
                    {
                        key: "__removeRenderedElement__",
                        value: function() {
                            document.querySelectorAll("[class=".concat(this.__className__, "]")).forEach(function(e) {
                                e.remove();
                            });
                        }
                    },
                    {
                        key: "__createControllerElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("div");
                            n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.width = e.height + "px", n.style.height = e.height + "px";
                            var r = this.__createPlayButtonElement__({
                                size: e.height,
                                mouseEnterColor: e.mouseEnterColor,
                                mouseLeaveColor: e.mouseLeaveColor
                            }), i = this.__createStopButtonElement__({
                                size: e.height,
                                mouseEnterColor: e.mouseEnterColor,
                                mouseLeaveColor: e.mouseLeaveColor
                            });
                            n.appendChild(r), n.appendChild(i);
                            var a = document.createElement("div");
                            a.style.display = "block", a.style.overflow = "hidden", a.style.float = "left", a.style.width = e.width - e.height + "px", a.style.height = e.height + "px";
                            var o = document.createElement("a");
                            o.href = "".concat(u.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), o.target = "_blank", o.style.display = "block", o.style.overflow = "hidden", o.style.paddingLeft = "8px", o.style.textOverflow = "ellipsis", o.style.width = e.width - e.height + "px", o.style.height = e.height / 2 + "px", o.textContent = this.player.media.name;
                            var s = document.createElement("a");
                            return s.href = "".concat(u.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), s.target = "_blank", s.style.display = "block", s.style.overflow = "hidden", s.style.paddingLeft = "8px", s.style.textOverflow = "ellipsis", s.style.width = e.width - e.height + "px", s.style.height = e.height / 2 + "px", s.textContent = this.player.media.artistName, a.appendChild(o), a.appendChild(s), t.appendChild(n), t.appendChild(a), t;
                        }
                    },
                    {
                        key: "__createOriginalSiteLinkElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("a");
                            n.href = "".concat(u.default.defaultAppServerEndpoint, "/redirect_to/original_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), n.target = "_blank", n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.margin = "".concat(0, "px ").concat(2, "px"), n.style.textOverflow = "ellipsis", n.style.textAlign = "left", n.style.width = e.width / 2 - 4 + "px", n.style.height = e.height - 0 + "px", this.__language__;
                            n.textContent = "";
                            t.appendChild(n);
                            var r = document.createElement("a");
                            switch(r.href = "".concat(u.default.defaultAppServerEndpoint, "/redirect_to/original_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), r.target = "_blank", r.style.display = "block", r.style.overflow = "hidden", r.style.float = "left", r.style.margin = "".concat(0, "px ").concat(2, "px"), r.style.textOverflow = "ellipsis", r.style.textAlign = "right", r.style.width = e.width / 2 - 4 + "px", r.style.height = e.height - 0 + "px", this.__language__){
                                case "ja":
                                    r.textContent = "\u3053\u306E\u914D\u4FE1\u30B5\u30A4\u30C8\u3078";
                                    break;
                                case "en":
                                default:
                                    r.textContent = "Original site";
                            }
                            return t.appendChild(r), t;
                        }
                    },
                    {
                        key: "__createMusicMapElement__",
                        value: function(e) {
                            var t = this, n = document.createElement("div");
                            if (null == this.player.musicMap || null == this.player.musicMap.chorus) return a.default.warn("'Songle.Player' do NOT have a chorus information. Please install the chorus plugin using 'Songle.Plugin.Chorus'"), n;
                            n.style.width = e.width + "px", n.style.height = e.height + "px";
                            var r = o.default.createSVGElement({
                                width: e.width,
                                height: e.height
                            }), i = e.width - 4, s = (e.height - 4 - 6 + 1) / 6, l = 0;
                            r.appendChild(o.default.createRectElement({
                                x: 0,
                                y: 0,
                                width: e.width,
                                height: e.height,
                                fill: "none",
                                stroke: this.__musicMapOuterBackgroundColor__
                            })), r.addEventListener("click", function(e) {
                                t.player.seekTo(l || e.offsetX / i * t.player.durationTime), u.default.stringIsBlank(t.player.accessToken) && u.default.stringIsBlank(t.player.secretToken) && t.player.play();
                            });
                            for(var c = function(e) {
                                var n = (s + 1) * e + 1 + 1;
                                r.appendChild(o.default.createRectElement({
                                    x: 2,
                                    y: n,
                                    width: i,
                                    height: s,
                                    fill: t.__musicMapInnerBackgroundColor__,
                                    stroke: "none"
                                }));
                                var a = t.player.musicMap.chorus[e];
                                if (!a) return "continue";
                                a.items.forEach(function(e) {
                                    var u = e.startTime / t.player.durationTime * i + 2, c = n, f = e.durationTime / t.player.durationTime * i, _ = s, p = o.default.createRectElement({
                                        x: u,
                                        y: c,
                                        width: f,
                                        height: _,
                                        fill: a.isChorus ? t.__musicMapChorusSectionColor__ : t.__musicMapRepeatedSectionColor__,
                                        stroke: "none"
                                    });
                                    p.style.cursor = "pointer", p.addEventListener("mouseenter", function() {
                                        l = e.startTime, p.style.opacity = .75;
                                    }), p.addEventListener("mouseleave", function() {
                                        l = 0, p.style.opacity = 1;
                                    }), r.appendChild(p);
                                });
                            }, f = 0; f < 6; ++f)c(f);
                            var _ = o.default.createRectElement({
                                x: 0,
                                y: 0,
                                width: 1,
                                height: e.height,
                                fill: "none",
                                stroke: this.__musicMapCursorColor__
                            });
                            return this.__musicMapAnimationIntervalId__ = setInterval(function() {
                                _.setAttribute("x", e.width * (t.player.positionTime / t.player.durationTime));
                            }, 1e3), r.appendChild(_), n.appendChild(r), n;
                        }
                    },
                    {
                        key: "__createPlayButtonElement__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null != t.size ? t.size : 30, r = null != t.mouseEnterColor ? t.mouseEnterColor : "#e17", i = null != t.mouseLeaveColor ? t.mouseLeaveColor : "#222", a = null != t.strokeWidth ? t.strokeWidth : 2, u = document.createElement("div");
                            u.style.cursor = "pointer", u.style.width = n + "px", u.style.height = n + "px", this.player.isPlaying ? u.style.display = "none" : u.style.display = "block";
                            var s = o.default.createSVGElement({
                                width: n,
                                height: n
                            }), l = o.default.createGroupElement({
                                fill: i,
                                stroke: i,
                                strokeWidth: a
                            }), c = 1 * (n / 2 - a), f = c + a, _ = c + a, p = o.default.createCircleElement({
                                cx: f,
                                cy: _,
                                r: c,
                                fill: "none"
                            }), d = .5 * (n / 2 - a), h = 1 * d / 1.41, y = f + Math.cos(3.14 / 180 * 135) * d + (d - h), v = _ - Math.sin(3.14 / 180 * 135) * d, g = f + Math.cos(0) * h, m = _ - Math.sin(0) * h, b = f + Math.cos(3.14 / 180 * 225) * d + (d - h), k = _ - Math.sin(3.14 / 180 * 225) * d, T = o.default.createPolygonElement({
                                points: [
                                    y,
                                    v,
                                    g,
                                    m,
                                    b,
                                    k
                                ]
                            });
                            return s.appendChild(l), l.appendChild(p), l.appendChild(T), u.appendChild(s), u.addEventListener("click", function(t) {
                                e.player.play();
                            }), u.addEventListener("mouseenter", function(e) {
                                l.setAttribute("fill", r), l.setAttribute("stroke", r);
                            }), u.addEventListener("mouseleave", function(e) {
                                l.setAttribute("fill", i), l.setAttribute("stroke", i);
                            }), this.player.on("play", function(e) {
                                u.style.display = "none";
                            }), this.player.on("pause", function(e) {
                                u.style.display = "block";
                            }), u;
                        }
                    },
                    {
                        key: "__createStopButtonElement__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = null != t.size ? t.size : 30, r = null != t.mouseEnterColor ? t.mouseEnterColor : "#e17", i = null != t.mouseLeaveColor ? t.mouseLeaveColor : "#222", a = null != t.strokeWidth ? t.strokeWidth : 2, u = document.createElement("div");
                            u.style.cursor = "pointer", u.style.width = n + "px", u.style.height = n + "px", this.player.isPlaying ? u.style.display = "block" : u.style.display = "none";
                            var s = o.default.createSVGElement({
                                width: n,
                                height: n
                            }), l = o.default.createGroupElement({
                                fill: i,
                                stroke: i,
                                strokeWidth: a
                            }), c = 1 * (n / 2 - a), f = c + a, _ = c + a, p = o.default.createCircleElement({
                                cx: f,
                                cy: _,
                                r: c,
                                fill: "none"
                            }), d = .5 * (n / 2 - a), h = f + Math.cos(3.14 / 180 * 135) * d, y = _ - Math.sin(3.14 / 180 * 135) * d, v = h + .5 * Math.abs(h - f), g = y, m = f + Math.cos(3.14 / 180 * 225) * d, b = _ - Math.sin(3.14 / 180 * 225) * d, k = m + .5 * Math.abs(h - f), T = b, S = o.default.createPolygonElement({
                                points: [
                                    h,
                                    y,
                                    v,
                                    g,
                                    k,
                                    T,
                                    m,
                                    b
                                ]
                            }), P = f + Math.cos(3.14 / 180 * 45) * d, w = _ - Math.sin(3.14 / 180 * 45) * d, O = P - .5 * Math.abs(P - f), C = w, E = f + Math.cos(3.14 / 180 * 315) * d, x = _ - Math.sin(3.14 / 180 * 315) * d, I = E - .5 * Math.abs(E - f), M = x, j = o.default.createPolygonElement({
                                points: [
                                    O,
                                    C,
                                    P,
                                    w,
                                    E,
                                    x,
                                    I,
                                    M
                                ]
                            });
                            return s.appendChild(l), l.appendChild(p), l.appendChild(S), l.appendChild(j), u.appendChild(s), u.addEventListener("click", function(t) {
                                e.player.pause();
                            }), u.addEventListener("mouseenter", function(e) {
                                l.setAttribute("stroke", r), l.setAttribute("fill", r);
                            }), u.addEventListener("mouseleave", function(e) {
                                l.setAttribute("stroke", i), l.setAttribute("fill", i);
                            }), this.player.on("play", function(e) {
                                u.style.display = "block";
                            }), this.player.on("pause", function(e) {
                                u.style.display = "none";
                            }), u;
                        }
                    },
                    {
                        key: "__createSongleJpSiteLinkElement__",
                        value: function(e) {
                            var t = document.createElement("div");
                            t.style.display = "block", t.style.overflow = "hidden", t.style.width = e.width + "px", t.style.height = e.height + "px";
                            var n = document.createElement("a");
                            switch(n.href = "".concat(u.default.defaultAppServerEndpoint, "/redirect_to/songlejp_song_site?url=").concat(encodeURIComponent(this.player.media.sourceUrl)), n.target = "_blank", n.style.display = "block", n.style.overflow = "hidden", n.style.float = "left", n.style.margin = "".concat(0, "px ").concat(2, "px"), n.style.textOverflow = "ellipsis", n.style.textAlign = "left", n.style.width = e.width / 2 - 4 + "px", n.style.height = e.height - 0 + "px", this.__language__){
                                case "ja":
                                    n.textContent = "Songle\u3067\u30B5\u30D3\u8A02\u6B63";
                                    break;
                                case "en":
                                default:
                                    n.textContent = "Annotate this song";
                            }
                            t.appendChild(n);
                            var r = document.createElement("a");
                            r.href = "".concat(u.default.defaultAppServerEndpoint), r.target = "_blank", r.style.display = "block", r.style.overflow = "hidden", r.style.float = "left", r.style.margin = "".concat(0, "px ").concat(2, "px"), r.style.textOverflow = "ellipsis", r.style.textAlign = "right", r.style.width = e.width / 2 - 4 + "px", r.style.height = e.height - 0 + "px", this.__language__;
                            r.textContent = "Powered by Songle API";
                            return t.appendChild(r), t;
                        }
                    },
                    {
                        key: "__updateSize__",
                        value: function(e) {
                            var t = !1;
                            if (null != e.width) {
                                if (e.width < 20) return a.default.warn("Songle Widget is too small. Please check 'Songle.Plugin.SongleWidget' options"), !1;
                                this.__controllerWidth__ != e.width && (this.__controllerWidth__ = e.width, t = !0), this.__musicMapWidth__ != e.width && (this.__musicMapWidth__ = e.width, t = !0);
                            }
                            if (null != e.height) {
                                if (this.__showController__ && (e.height -= this.__controllerHeight__), this.__showOriginalSiteLink__ && (e.height -= 15), this.__showSongleJpSiteLink__ && (e.height -= 15), e.height < 20) return a.default.warn("Songle Widget is too small. Please check 'Songle.Plugin.SongleWidget' options"), !1;
                                this.__musicMapHeight__ != e.height && (this.__musicMapHeight__ = e.height, t = !0);
                            }
                            return t;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return h;
                        }
                    },
                    {
                        key: "element",
                        get: function() {
                            return i.default.querySelector(this.__element__);
                        }
                    }
                ]), n;
            }(r.default);
            t.default = y;
        },
        12: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(22);
            n.d(t, "SongAPI", function() {
                return r.default;
            });
            var i = n(23);
            n.d(t, "BeatAPI", function() {
                return i.default;
            });
            var a = n(24);
            n.d(t, "ChordAPI", function() {
                return a.default;
            });
            var o = n(25);
            n.d(t, "MelodyAPI", function() {
                return o.default;
            });
            var u = n(26);
            n.d(t, "ChorusAPI", function() {
                return u.default;
            });
            var s = n(27);
            n.d(t, "VariationAPI", function() {
                return s.default;
            });
            var l = {
                SongAPI: r.default,
                BeatAPI: i.default,
                ChordAPI: a.default,
                MelodyAPI: o.default,
                ChorusAPI: u.default,
                VariationAPI: s.default
            };
            t.default = l;
        },
        13: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            n.r(t);
            var i = function() {
                function e(t) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.__player__ = t;
                }
                var t, n, i;
                return t = e, n = [
                    {
                        key: "dispatch",
                        value: function(e, t, n) {}
                    },
                    {
                        key: "find",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.offset ? t.offset : 0, r = this.__player__.positionTime - 250 + -1 * n, i = this.__player__.positionTime + 0 + -1 * n;
                            this.dispatch(r, i, e);
                        }
                    },
                    {
                        key: "reset",
                        value: function() {}
                    }
                ], r(t.prototype, n), i && r(t, i), e;
            }();
            t.default = i;
        },
        14: function(e, t, n) {
            "use strict";
            n.r(t);
            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = [];
                return e.musicMap.chorus && e.musicMap.chorus.forEach(function(e) {
                    t.chorusOnly && !e.isChorus || (n = n.concat(e.items).sort(function(e, t) {
                        return e.startTime - t.startTime;
                    }));
                }), n;
            }
            var i = {
                findPrevBar: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, r = e.musicMap.beats || [];
                    r = r.reverse();
                    for(var i = 0; i < r.length; ++i)if (1 == r[i].number && n > r[i].startTime + 500) return r[i];
                    return r[0];
                },
                findNextBar: function(e) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, r = e.musicMap.beats || [], i = 0; i < r.length; ++i)if (1 == r[i].number && n < r[i].startTime - 500) return r[i];
                    return r[0];
                },
                findPrevRepeatedSectionItem: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, i = r(e, t);
                    i = i.reverse();
                    for(var a = 0; a < i.length; ++a)if (n > i[a].startTime + 500) return i[a];
                    return i[0];
                },
                findNextRepeatedSectionItem: function(e) {
                    for(var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = null != t.startTime ? t.startTime : e.positionTime, i = r(e, t), a = 0; a < i.length; ++a)if (n < i[a].startTime - 500) return i[a];
                    return i[0];
                }
            };
            t.default = i;
        },
        15: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u(this, n);
                };
            }
            function u(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var l = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t);
                }(l, e);
                var t, n, u, s = o(l);
                function l() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return r(this, l), (e = s.call(this)).endpointScheme = null != t.endpointScheme ? t.endpointScheme : null, e.endpointHost = null != t.endpointHost ? t.endpointHost : null, e.endpointPath = null != t.endpointPath ? t.endpointPath : null, e.revisionId = null != t.revisionId ? t.revisionId : 0, e.offset = null != t.offset ? t.offset : 0, e.pollingInterval = null != t.pollingInterval ? t.pollingInterval : 50, e;
                }
                return t = l, n = [
                    {
                        key: "__invokeTrap__",
                        value: function(e, t) {
                            e.trap({
                                target: this,
                                type: e.name,
                                data: t
                            });
                        }
                    }
                ], i(t.prototype, n), u && i(t, u), l;
            }(n(21).default);
            t.default = l;
        },
        17: function(e, t) {
            var n;
            n = function() {
                return this;
            }();
            try {
                n = n || new Function("return this")();
            } catch (r) {
                "object" === typeof window && (n = window);
            }
            e.exports = n;
        },
        174: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(77), i = n(62);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            function s(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var c = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t);
                }(n, e);
                var t = u(n);
                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, n), (e = t.call(this, r)).addPlugin(new i.default), e;
                }
                return n;
            }(r.default);
            t.default = c;
        },
        185: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(77), i = n(100);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function u(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = l(e);
                    if (t) {
                        var i = l(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return s(this, n);
                };
            }
            function s(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var c = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t);
                }(n, e);
                var t = u(n);
                function n() {
                    var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return a(this, n), (e = t.call(this, r)).addPlugin(new i.default), e;
                }
                return n;
            }(r.default);
            t.default = c;
        },
        19: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(2), i = n(1);
            function a(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e), this.traps = [];
                }
                var t, n, o;
                return t = e, o = [
                    {
                        key: "Name",
                        get: function() {
                            return "dispatcher";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "dispatcher";
                        }
                    }
                ], n = [
                    {
                        key: "initialize",
                        value: function(e) {
                            r.default.debug("Invoke '".concat(this.dispatcherName, "#initialize'")), this.__player__ = e;
                        }
                    },
                    {
                        key: "mediaTryMount",
                        value: function(e, t) {
                            r.default.debug("Invoke '".concat(this.dispatcherName, "#mediaTryMount'"), t);
                        }
                    },
                    {
                        key: "mediaDisMount",
                        value: function(e, t) {
                            r.default.debug("Invoke '".concat(this.dispatcherName, "#mediaDisMount'"), t);
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: function(e, t) {
                            r.default.debug("Invoke '".concat(this.dispatcherName, "#mediaDidMount'"), t);
                        }
                    },
                    {
                        key: "dispose",
                        value: function() {
                            r.default.debug("Invoke '".concat(this.dispatcherName, "#dispose'"));
                        }
                    },
                    {
                        key: "mapTraps",
                        value: function(e) {
                            var t = this, n = this.player.dispatchers.map(function(n) {
                                return n && n.traps.map(function(n) {
                                    if (-1 != t.__convertToStringArray__(e).indexOf(n.name)) return n;
                                }).filter(function(e) {
                                    return null != e;
                                });
                            });
                            return Array.prototype.concat.apply([], n);
                        }
                    },
                    {
                        key: "mapTrapsHasAnyData",
                        value: function(e) {
                            return this.mapTraps(e).filter(function(e) {
                                return e && null != e.data;
                            });
                        }
                    },
                    {
                        key: "mapTrapsHasNotData",
                        value: function(e) {
                            return this.mapTraps(e).filter(function(e) {
                                return e && null == e.data;
                            });
                        }
                    },
                    {
                        key: "on",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            r.offset = null != r.offset ? r.offset : 0, (e = this.__convertToStringArray__(e)).forEach(function(e) {
                                e = n.__validateTrapName__(e), n.traps.push({
                                    name: e,
                                    trap: t,
                                    data: null,
                                    options: r
                                });
                            });
                        }
                    },
                    {
                        key: "off",
                        value: function(e, t) {
                            var n = this;
                            (e = this.__convertToStringArray__(e)).forEach(function(e) {
                                e = n.__validateTrapName__(e), n.traps.forEach(function(r, i) {
                                    r.name === e && r.trap === t && n.traps.splice(i, 1);
                                });
                            });
                        }
                    },
                    {
                        key: "invokeSelfTrap",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            e = this.__validateTrapName__(e), this.traps.forEach(function(n) {
                                n.name == e && (t.type = e, n.trap(t));
                            });
                        }
                    },
                    {
                        key: "__convertToStringArray__",
                        value: function(e) {
                            return "string" === i.default.typeOf(e) ? [
                                e
                            ] : e;
                        }
                    },
                    {
                        key: "__validateTrapName__",
                        value: function(e) {
                            switch(e){
                                case "beatPlay":
                                    e = "beatEnter";
                                    break;
                                case "chordChange":
                                case "chordPlay":
                                    e = "chordEnter";
                                    break;
                                case "melodyPlay":
                                    e = "melodyEnter";
                                    break;
                                case "variationChange":
                                case "variationPlay":
                                    e = "variationEnter";
                                    break;
                                case "chorusEnter":
                                    e = "chorusSectionEnter";
                                    break;
                                case "chorusLeave":
                                    e = "chorusSectionLeave";
                                    break;
                                case "repeatEnter":
                                case "repeatSectionEnter":
                                    e = "repeatedSectionEnter";
                                    break;
                                case "repeatLeave":
                                case "repeatSectionLeave":
                                    e = "repeatedSectionLeave";
                                    break;
                                case "songleSyncNodeChange":
                                    e = "songleSyncStageNodeChange";
                                    break;
                                case "songleSyncNodeEnter":
                                    e = "songleSyncStageNodeEnter";
                                    break;
                                case "songleSyncNodeLeave":
                                    e = "songleSyncStageNodeLeave";
                            }
                            return e;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return e.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return e.Type;
                        }
                    },
                    {
                        key: "player",
                        get: function() {
                            return this.__player__;
                        }
                    }
                ], a(t.prototype, n), o && a(t, o), e;
            }();
            t.default = o;
        },
        2: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1);
            function i(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var a = [], o = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e);
                }
                var t, n, o;
                return t = e, o = [
                    {
                        key: "debug",
                        value: function(t, n) {
                            r.default.showDebugLog && e.__log__("debug", t, n, "color:#000;");
                        }
                    },
                    {
                        key: "warn",
                        value: function(t, n) {
                            r.default.showErrorLog && e.__log__("warn", t, n, "color:#f82;");
                        }
                    },
                    {
                        key: "error",
                        value: function(t, n) {
                            r.default.showErrorLog && e.__log__("error", t, n, "color:#f22;");
                        }
                    },
                    {
                        key: "__log__",
                        value: function(e, t, n, i) {
                            switch(e){
                                case "debug":
                                    t = "[Songle API ".concat(e, "] ") + t;
                                    break;
                                case "warn":
                                case "error":
                                    if (t = "[Songle API ".concat(e, "] ") + t, -1 != a.indexOf(t)) return;
                            }
                            a.push(t), null != n && (n = JSON.stringify(n, function(e, t) {
                                if (null == t) return t;
                                switch(!0){
                                    case t instanceof HTMLElement:
                                        return "[HTMLElement]";
                                    case null != t.dispatcherName:
                                        return "[".concat(t.dispatcherName, "]");
                                    case null != t.dispatcherType:
                                        return "[".concat(t.dispatcherType, "]");
                                }
                                return t;
                            }, "	")), console.log((r.default.isWebBrowser ? "%c" : "") + t + (n ? "\n\n" + n + "\n" : ""), r.default.isWebBrowser ? i : "");
                        }
                    },
                    {
                        key: "histories",
                        get: function() {
                            return a;
                        }
                    }
                ], n = null, o && i(t, o), e;
            }(), u = {
                histories: o.histories,
                debug: o.debug,
                warn: o.warn,
                error: o.error
            };
            t.default = u;
        },
        20: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(52);
            n.d(t, "ClockAPI", function() {
                return r.default;
            });
            var i = n(53);
            n.d(t, "HistoryAPI", function() {
                return i.default;
            });
            var a = n(54);
            n.d(t, "MessageAPI", function() {
                return a.default;
            });
            var o = n(55);
            n.d(t, "PlaylistAPI", function() {
                return o.default;
            });
            var u = n(56);
            n.d(t, "StageAPI", function() {
                return u.default;
            });
            var s = {
                ClockAPI: r.default,
                HistoryAPI: i.default,
                MessageAPI: a.default,
                PlaylistAPI: o.default,
                StageAPI: u.default
            };
            t.default = s;
        },
        21: function(e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function i(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u(this, n);
                };
            }
            function u(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var l = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t);
                }(l, e);
                var t, n, u, s = o(l);
                function l() {
                    return r(this, l), s.apply(this, arguments);
                }
                return t = l, u = [
                    {
                        key: "Name",
                        get: function() {
                            return "plugin";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "plugin";
                        }
                    }
                ], n = [
                    {
                        key: "dispatcherName",
                        get: function() {
                            return l.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return l.Type;
                        }
                    }
                ], i(t.prototype, n), u && i(t, u), l;
            }(n(19).default);
            t.default = l;
        },
        22: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = (n(2), n(1)), a = {};
            function o(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, a = t.endpointPath, o = t.fallback, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(a)), u.push("fallback=" + "".concat(o ? 1 : 0)), u.push("url=" + "".concat(encodeURIComponent(e))), "".concat(i.default.defaultAppServerEndpoint, "/api/v2/song.json?").concat(u.join("&"));
            }
            function u(e, t) {
                return Object.keys(e.attributes).forEach(function(t) {
                    Object.defineProperty(e, t, {
                        get: function() {
                            return e.attributes[t];
                        }
                    });
                }), Object.keys(e.relationships).forEach(function(t) {
                    Object.defineProperty(e, t, {
                        get: function() {
                            return e.relationships[t].data.attributes;
                        }
                    });
                }), e;
            }
            var s = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.fallback = null != t.fallback && t.fallback;
                        var s = o(e, t), l = a[s];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(s).then(function(e) {
                            var r = e.meta, o = e.data;
                            if (200 != r.status) return i(e);
                            var l = u(o, t);
                            return a[s] = l, null == a[l.permalink] && (a[l.permalink] = l), n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = s;
        },
        23: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(2), a = n(1), o = {};
            function u(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a.default.defaultAppServerEndpoint, "/api/v2/song/beat.json?").concat(u.join("&"));
            }
            function s(e, t) {
                var n = t.revisionId, r = e.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "numberOfBeatsPerBar",
                            target: "count",
                            warning: !0
                        },
                        {
                            source: "number",
                            target: "position",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i.default.warn("'Beat.".concat(t.target, "' is deprecated API, please use 'Beat.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u(e, t), l = o[a];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = l;
        },
        24: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(2), a = n(1), o = {};
            function u(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a.default.defaultAppServerEndpoint, "/api/v2/song/chord.json?").concat(u.join("&"));
            }
            function s(e, t) {
                var n = t.revisionId, r = e.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i.default.warn("'Chord.".concat(t.target, "' is deprecated API, please use 'Chord.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u(e, t), l = o[a];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = l;
        },
        25: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(2), a = n(1), o = {};
            function u(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a.default.defaultAppServerEndpoint, "/api/v2/song/melody.json?").concat(u.join("&"));
            }
            function s(e, t) {
                var n = t.revisionId, r = e.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i.default.warn("'Melody.".concat(t.target, "' is deprecated API, please use 'Melody.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u(e, t), l = o[a];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = l;
        },
        26: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(2), a = n(1), o = {};
            function u(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = [];
                return u.push("syntax=camelcase"), u.push("endpoint_scheme=" + "".concat(n)), u.push("endpoint_host=" + "".concat(r)), u.push("endpoint_path=" + "".concat(i)), u.push("url=" + "".concat(encodeURIComponent(e))), u.push("revision_id=" + "".concat(o)), "".concat(a.default.defaultAppServerEndpoint, "/api/v2/song/chorus.json?").concat(u.join("&"));
            }
            function s(e, t) {
                var n = t.revisionId, r = e.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "items",
                            target: "repeats",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i.default.warn("'ChorusSection.".concat(t.target, "' is deprecated API, please use 'ChorusSection.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), e.items.forEach(function(t) {
                        [
                            {
                                source: "startTimeMs",
                                target: "startTime"
                            },
                            {
                                source: "durationTimeMs",
                                target: "durationTime"
                            },
                            {
                                source: "endTimeMs",
                                target: "endTime"
                            },
                            {
                                source: "startTime",
                                target: "start",
                                warning: !0
                            },
                            {
                                source: "durationTime",
                                target: "duration",
                                warning: !0
                            },
                            {
                                source: "endTime",
                                target: "end",
                                warning: !0
                            }
                        ].forEach(function(e) {
                            Object.defineProperty(t, e.target, {
                                get: function() {
                                    return e.warning && i.default.warn("'ChorusSectionItem.".concat(e.target, "' is deprecated API, please use 'ChorusSectionItem.").concat(e.source, "'")), t[e.source];
                                }
                            });
                        }), Object.defineProperty(t, "prev", {
                            get: function() {
                                return e.items[t.index - 1] || null;
                            }
                        }), Object.defineProperty(t, "next", {
                            get: function() {
                                return e.items[t.index + 1] || null;
                            }
                        });
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0;
                        var a = u(e, t), l = o[a];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = l;
        },
        27: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(2), a = n(1), o = {};
            function u(e, t) {
                var n = t.endpointScheme, r = t.endpointHost, i = t.endpointPath, o = t.revisionId, u = t.groupCount, s = [];
                return s.push("syntax=camelcase"), s.push("endpoint_scheme=" + "".concat(n)), s.push("endpoint_host=" + "".concat(r)), s.push("endpoint_path=" + "".concat(i)), s.push("url=" + "".concat(encodeURIComponent(e))), s.push("revision_id=" + "".concat(o)), s.push("group_count=" + "".concat(u)), "".concat(a.default.defaultAppServerEndpoint, "/api/v2/song/variation.json?").concat(s.join("&"));
            }
            function s(e, t) {
                var n = t.revisionId, r = e.attributes.sequence;
                return r.forEach(function(e) {
                    [
                        {
                            source: "startTimeMs",
                            target: "startTime"
                        },
                        {
                            source: "durationTimeMs",
                            target: "durationTime"
                        },
                        {
                            source: "endTimeMs",
                            target: "endTime"
                        },
                        {
                            source: "startTime",
                            target: "start",
                            warning: !0
                        },
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "endTime",
                            target: "end",
                            warning: !0
                        }
                    ].forEach(function(t) {
                        Object.defineProperty(e, t.target, {
                            get: function() {
                                return t.warning && i.default.warn("'Variation.".concat(t.target, "' is deprecated API, please use 'Variation.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), Object.defineProperty(e, "prev", {
                        get: function() {
                            return r[e.index - 1] || null;
                        }
                    }), Object.defineProperty(e, "next", {
                        get: function() {
                            return r[e.index + 1] || null;
                        }
                    });
                }), {
                    revisionId: n,
                    data: r
                };
            }
            var l = {
                get: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, i) {
                        t.cache = null == t.cache || t.cache, t.endpointScheme = null != t.endpointScheme ? t.endpointScheme : "", t.endpointHost = null != t.endpointHost ? t.endpointHost : "", t.endpointPath = null != t.endpointPath ? t.endpointPath : "", t.revisionId = null != t.revisionId ? t.revisionId : 0, t.groupCount = null != t.groupCount ? t.groupCount : 2;
                        var a = u(e, t), l = o[a];
                        if (null != l && t.cache) return n(l);
                        r.default.getJSON(a).then(function(e) {
                            var r = e.meta, u = e.data;
                            if (200 != r.status) return i(e);
                            var l = s(u, t);
                            return o[a] = l, n(l);
                        }, function(e) {
                            return i(e);
                        });
                    });
                }
            };
            t.default = l;
        },
        28: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(2);
            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function a(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            var o = function() {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i(this, e), this.intervalTime = null != n.intervalTime ? n.intervalTime : this.defaultIntervalTime, this.__plugin__ = t;
                }
                var t, n, o;
                return t = e, n = [
                    {
                        key: "start",
                        value: function() {
                            var e = this;
                            setTimeout(function() {
                                try {
                                    e.runTask();
                                } catch (t) {
                                    r.default.debug("Worker's runTask is daed");
                                }
                                e.start();
                            }, this.intervalTime);
                        }
                    },
                    {
                        key: "runTask",
                        value: function() {}
                    },
                    {
                        key: "update",
                        value: function() {}
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "intervalTime",
                        set: function(e) {
                            e < this.minIntervalTime && (r.default.warn("You can't set less than 'minIntervalTime'"), e = this.minIntervalTime), e > this.maxIntervalTime && (r.default.warn("You can't set more than 'maxIntervalTime'"), e = this.maxIntervalTime), this.__intervalTime__ = e;
                        },
                        get: function() {
                            return this.__intervalTime__;
                        }
                    },
                    {
                        key: "plugin",
                        get: function() {
                            return this.__plugin__;
                        }
                    },
                    {
                        key: "player",
                        get: function() {
                            return this.__plugin__.player;
                        }
                    }
                ], a(t.prototype, n), o && a(t, o), e;
            }();
            t.default = o;
        },
        30: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1);
            var i = {
                createScriptElement: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = r.default.global.document.createElement("script");
                    return t.async = t.async || !1, t.defer = t.defer || !1, t.type = t.type || "text/javascript", n.async = t.async, n.defer = t.defer, n.src = e, n.type = t.type, n.addEventListener("abort", t.onAbort, !1), n.addEventListener("error", t.onError, !1), n.addEventListener("load", t.onLoad, !1), n;
                },
                querySelector: function(e) {
                    return "string" === r.default.typeOf(e) ? r.default.global.document.querySelector(e) : e;
                }
            };
            t.default = i;
        },
        32: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(6), o = n(2), u = n(1);
            function s(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l(e, t, n) {
                return (l = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e;
            }
            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(c, e);
                var t, n, r = p(c);
                function c(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, c), t = r.call(this, null, null, e), "string" == u.default.typeOf(e) && o.default.warn("'Songle.Media.Headless' is deprecated API, please use headless option in 'Songle.Player#useMedia'"), t;
                }
                return f(c, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-headless-media";
                        }
                    }
                ]), f(c, [
                    {
                        key: "initialize",
                        value: (t = i.a.mark(function e(t) {
                            var n = this;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l(h(c.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.__intervalId__ = setInterval(function() {
                                            n.positionTime >= n.durationTime && n.__invokeMediaStateChangeTrap__(n, a.default.StateFinished);
                                        }, 1e3);
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), n = function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t.apply(e, n);
                                function o(e) {
                                    s(a, r, i, o, u, "next", e);
                                }
                                function u(e) {
                                    s(a, r, i, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return n.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l(h(c.prototype), "dispose", this).call(this), clearInterval(this.__intervalId__);
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.__invokeMediaStateChangeTrap__(this, a.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a.default.StatePlaying);
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.__invokeMediaStateChangeTrap__(this, a.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a.default.StatePaused);
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            switch(l(h(c.prototype), "seekTo", this).call(this, e), !0){
                                case this.isPlaying:
                                    this.__invokeMediaStateChangeTrap__(this, a.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a.default.StateSeeking), this.__invokeMediaStateChangeTrap__(this, a.default.StatePlaying);
                                    break;
                                case this.isPaused:
                                    this.__invokeMediaStateChangeTrap__(this, a.default.StateTimeUpdate), this.__invokeMediaStateChangeTrap__(this, a.default.StateSeeking), this.__invokeMediaStateChangeTrap__(this, a.default.StatePaused);
                            }
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return c.Name;
                        }
                    }
                ]), c;
            }(a.default.SuperClass);
            t.default = y;
        },
        37: function(e, t, n) {
            "use strict";
            function r(e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", e);
                for(var r in t)null != t[r] && n.setAttribute(i(r), String(t[r]));
                return n;
            }
            function i(e) {
                switch(e){
                    case "strokeWidth":
                        e = "stroke-width";
                }
                return e;
            }
            n.r(t);
            var a = {
                createSVGElement: function(e) {
                    return r("svg", e);
                },
                createGroupElement: function(e) {
                    return r("g", e);
                },
                createRectElement: function(e) {
                    return r("rect", e);
                },
                createCircleElement: function(e) {
                    return r("circle", e);
                },
                createLineElement: function(e) {
                    return r("line", e);
                },
                createPolygonElement: function(e) {
                    return r("polygon", e);
                }
            };
            t.default = a;
        },
        4: function(e, t, n) {
            e.exports = n(46);
        },
        41: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o(this, n);
                };
            }
            function o(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var s = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t);
                }(s, e);
                var t, n, o, u = a(s);
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t = u.call(this, e)).__enterStates__ = [], t.__leaveStates__ = [], t;
                }
                return t = s, n = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__player__.musicMap;
                            i.beats && i.beats.forEach(function(i) {
                                i.prev && e < i.prev.startTime && t >= i.prev.startTime && n.__enterStates__[i.prev.index] && !n.__leaveStates__[i.prev.index] && (r.leave && r.leave({
                                    beat: i.prev
                                }), n.__leaveStates__[i.prev.index] = !0), i && e < i.startTime && t >= i.startTime && (n.__enterStates__[i.index] || n.__leaveStates__[i.index] || (r.enter && r.enter({
                                    beat: i
                                }), n.__enterStates__[i.index] = !0));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r(t.prototype, n), o && r(t, o), s;
            }(n(13).default);
            t.default = s;
        },
        411: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(77), i = n(174), a = (n(185), n(6)), o = n(21), u = n(32), s = n(59), l = n(57), c = n(58), f = n(47), _ = n(48), p = n(49), d = n(50), h = n(51), y = n(62), v = n(100), g = (n(2), n(1)), m = (n(5), n(12)), b = {
                Player: r.default,
                SyncPlayer: i.default,
                Media: {
                    SuperClass: a.default,
                    Headless: u.default,
                    HTMLMediaElement: s.default,
                    NNVideo: l.default,
                    YTVideo: c.default
                },
                Plugin: {
                    SuperClass: o.default,
                    Beat: f.default,
                    Chord: _.default,
                    Melody: p.default,
                    Chorus: d.default,
                    Variation: h.default,
                    SongleSync: y.default,
                    SongleWidget: v.default
                },
                SongleAPI: m.default,
                System: g.default
            }, k = 20;
            g.default.global.SW = g.default.global.SW || b, g.default.global.Songle = g.default.global.Songle || b, g.default.showDebugLog = !1, g.default.showErrorLog = !0, g.default.showLicense = !0, function e() {
                setTimeout(function() {
                    g.default.global.SWAPIReady || k <= 0 || (k--, g.default.global.onSongleWidgetAPIReady && (g.default.global.onSongleWidgetAPIReady(b), g.default.global.SWAPIReady = !0), g.default.global.onSongleAPIReady && (g.default.global.onSongleAPIReady(b), g.default.global.SWAPIReady = !0), e());
                }, 500);
            }(), t.default = b;
        },
        42: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o(this, n);
                };
            }
            function o(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var s = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t);
                }(s, e);
                var t, n, o, u = a(s);
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t = u.call(this, e)).__enterStates__ = [], t.__leaveStates__ = [], t;
                }
                return t = s, n = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__player__.musicMap;
                            i.chords && i.chords.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    chord: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    chord: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.__player__.musicMap;
                            n.chords && n.chords.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    chord: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r(t.prototype, n), o && r(t, o), s;
            }(n(13).default);
            t.default = s;
        },
        43: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o(this, n);
                };
            }
            function o(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var s = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t);
                }(s, e);
                var t, n, o, u = a(s);
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t = u.call(this, e)).__enterStates__ = [], t.__leaveStates__ = [], t;
                }
                return t = s, n = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__player__.musicMap;
                            i.melodies && i.melodies.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    melody: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    melody: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.__player__.musicMap;
                            n.melodies && n.melodies.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    melody: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r(t.prototype, n), o && r(t, o), s;
            }(n(13).default);
            t.default = s;
        },
        44: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(13);
            function i(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function o(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u(this, n);
                };
            }
            function u(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function s(e) {
                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var l = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && a(e, t);
                }(s, e);
                var t, n, r, u = o(s);
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t = u.call(this, e)).__enterStates__ = [], t.__leaveStates__ = [], t;
                }
                return t = s, n = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__player__.musicMap;
                            i.chorus && i.chorus.forEach(function(i) {
                                i.items.forEach(function(a) {
                                    e < a.startTime + a.durationTime && t >= a.startTime ? n.__invokeEnterTrap__(i, a, r) : n.__invokeLeaveTrap__(i, a, r);
                                });
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            this.__invokeAllLeaveTrap__(e), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    },
                    {
                        key: "__getStateIndex__",
                        value: function(e, t) {
                            return 16 * e.index + t.index;
                        }
                    },
                    {
                        key: "__invokeAllEnterTrap__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.__player__.musicMap;
                            n.chorus && n.chorus.forEach(function(n) {
                                n.items.forEach(function(r) {
                                    e.__invokeEnterTrap__(n, r, t);
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeAllLeaveTrap__",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.__player__.musicMap;
                            n.chorus && n.chorus.forEach(function(n) {
                                n.items.forEach(function(r) {
                                    e.__invokeLeaveTrap__(n, r, t);
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeEnterTrap__",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__getStateIndex__(e, t);
                            this.__enterStates__[i] || this.__leaveStates__[i] || (e.items.forEach(function(t) {
                                n.__invokeLeaveTrap__(e, t, r);
                            }), r.enter && r.enter({
                                section: e,
                                sectionItem: t
                            }), this.__enterStates__[i] = !0);
                        }
                    },
                    {
                        key: "__invokeLeaveTrap__",
                        value: function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = this.__getStateIndex__(e, t);
                            this.__enterStates__[r] && !this.__leaveStates__[r] && (n.leave && n.leave({
                                section: e,
                                sectionItem: t
                            }), this.__leaveStates__[r] = !0);
                        }
                    }
                ], i(t.prototype, n), r && i(t, r), s;
            }(r.default);
            t.default = l;
        },
        45: function(e, t, n) {
            "use strict";
            function r(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function a(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var i = u(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return o(this, n);
                };
            }
            function o(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            n.r(t);
            var s = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && i(e, t);
                }(s, e);
                var t, n, o, u = a(s);
                function s(e) {
                    var t;
                    return function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, s), (t = u.call(this, e)).__enterStates__ = [], t.__leaveStates__ = [], t;
                }
                return t = s, n = [
                    {
                        key: "dispatch",
                        value: function(e, t) {
                            var n = this, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = this.__player__.musicMap;
                            i.variations && i.variations.forEach(function(i) {
                                e < i.startTime + i.durationTime && t >= i.startTime && (i.prev && (n.__leaveStates__[i.prev.index] || (n.__leaveStates__[i.prev.index] = !0, r.leave && r.leave({
                                    variation: i.prev
                                }))), i && (n.__enterStates__[i.index] || (n.__enterStates__[i.index] = !0, r.enter && r.enter({
                                    variation: i
                                }))));
                            });
                        }
                    },
                    {
                        key: "reset",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.__player__.musicMap;
                            n.variations && n.variations.forEach(function(n) {
                                e.__enterStates__[n.index] && !e.__leaveStates__[n.index] && t.leave && t.leave({
                                    variation: n
                                });
                            }), this.__enterStates__ = [], this.__leaveStates__ = [];
                        }
                    }
                ], r(t.prototype, n), o && r(t, o), s;
            }(n(13).default);
            t.default = s;
        },
        46: function(e, t, n) {
            var r = function(e) {
                "use strict";
                var t = Object.prototype, n = t.hasOwnProperty, r = "function" === typeof Symbol ? Symbol : {}, i = r.iterator || "@@iterator", a = r.asyncIterator || "@@asyncIterator", o = r.toStringTag || "@@toStringTag";
                function u(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t];
                }
                try {
                    u({}, "");
                } catch (O) {
                    u = function(e, t, n) {
                        return e[t] = n;
                    };
                }
                function s(e, t, n, r) {
                    var i = t && t.prototype instanceof f ? t : f, a = Object.create(i.prototype), o = new S(r || []);
                    return a._invoke = function(e, t, n) {
                        var r = "suspendedStart";
                        return function(i, a) {
                            if ("executing" === r) throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === i) throw a;
                                return w();
                            }
                            for(n.method = i, n.arg = a;;){
                                var o = n.delegate;
                                if (o) {
                                    var u = b(o, n);
                                    if (u) {
                                        if (u === c) continue;
                                        return u;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r) throw r = "completed", n.arg;
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = "executing";
                                var s = l(e, t, n);
                                if ("normal" === s.type) {
                                    if (r = n.done ? "completed" : "suspendedYield", s.arg === c) continue;
                                    return {
                                        value: s.arg,
                                        done: n.done
                                    };
                                }
                                "throw" === s.type && (r = "completed", n.method = "throw", n.arg = s.arg);
                            }
                        };
                    }(e, n, o), a;
                }
                function l(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        };
                    } catch (O) {
                        return {
                            type: "throw",
                            arg: O
                        };
                    }
                }
                e.wrap = s;
                var c = {};
                function f() {}
                function _() {}
                function p() {}
                var d = {};
                d[i] = function() {
                    return this;
                };
                var h = Object.getPrototypeOf, y = h && h(h(P([])));
                y && y !== t && n.call(y, i) && (d = y);
                var v = p.prototype = f.prototype = Object.create(d);
                function g(e) {
                    [
                        "next",
                        "throw",
                        "return"
                    ].forEach(function(t) {
                        u(e, t, function(e) {
                            return this._invoke(t, e);
                        });
                    });
                }
                function m(e, t) {
                    var r;
                    this._invoke = function(i, a) {
                        function o() {
                            return new t(function(r, o) {
                                !function r(i, a, o, u) {
                                    var s = l(e[i], e, a);
                                    if ("throw" !== s.type) {
                                        var c = s.arg, f = c.value;
                                        return f && "object" === typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function(e) {
                                            r("next", e, o, u);
                                        }, function(e) {
                                            r("throw", e, o, u);
                                        }) : t.resolve(f).then(function(e) {
                                            c.value = e, o(c);
                                        }, function(e) {
                                            return r("throw", e, o, u);
                                        });
                                    }
                                    u(s.arg);
                                }(i, a, r, o);
                            });
                        }
                        return r = r ? r.then(o, o) : o();
                    };
                }
                function b(e, t) {
                    var n = e.iterator[t.method];
                    if (void 0 === n) {
                        if (t.delegate = null, "throw" === t.method) {
                            if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return c;
                            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                        }
                        return c;
                    }
                    var r = l(n, e.iterator, t.arg);
                    if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, c;
                    var i = r.arg;
                    return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, c) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, c);
                }
                function k(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
                }
                function T(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t;
                }
                function S(e) {
                    this.tryEntries = [
                        {
                            tryLoc: "root"
                        }
                    ], e.forEach(k, this), this.reset(!0);
                }
                function P(e) {
                    if (e) {
                        var t = e[i];
                        if (t) return t.call(e);
                        if ("function" === typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var r = -1, a = function t() {
                                for(; ++r < e.length;)if (n.call(e, r)) return t.value = e[r], t.done = !1, t;
                                return t.value = void 0, t.done = !0, t;
                            };
                            return a.next = a;
                        }
                    }
                    return {
                        next: w
                    };
                }
                function w() {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
                return _.prototype = v.constructor = p, p.constructor = _, _.displayName = u(p, o, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                    var t = "function" === typeof e && e.constructor;
                    return !!t && (t === _ || "GeneratorFunction" === (t.displayName || t.name));
                }, e.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, p) : (e.__proto__ = p, u(e, o, "GeneratorFunction")), e.prototype = Object.create(v), e;
                }, e.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, g(m.prototype), m.prototype[a] = function() {
                    return this;
                }, e.AsyncIterator = m, e.async = function(t, n, r, i, a) {
                    void 0 === a && (a = Promise);
                    var o = new m(s(t, n, r, i), a);
                    return e.isGeneratorFunction(n) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, g(v), u(v, o, "Generator"), v[i] = function() {
                    return this;
                }, v.toString = function() {
                    return "[object Generator]";
                }, e.keys = function(e) {
                    var t = [];
                    for(var n in e)t.push(n);
                    return t.reverse(), function n() {
                        for(; t.length;){
                            var r = t.pop();
                            if (r in e) return n.value = r, n.done = !1, n;
                        }
                        return n.done = !0, n;
                    };
                }, e.values = P, S.prototype = {
                    constructor: S,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(T), !e) for(var t in this)"t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function r(n, r) {
                            return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
                        }
                        for(var i = this.tryEntries.length - 1; i >= 0; --i){
                            var a = this.tryEntries[i], o = a.completion;
                            if ("root" === a.tryLoc) return r("end");
                            if (a.tryLoc <= this.prev) {
                                var u = n.call(a, "catchLoc"), s = n.call(a, "finallyLoc");
                                if (u && s) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                } else if (u) {
                                    if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var i = this.tryEntries[r];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var a = i;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var o = a ? a.completion : {};
                        return o.type = e, o.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, c) : this.complete(o);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), c;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), T(n), c;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    T(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: P(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), c;
                    }
                }, e;
            }(e.exports);
            try {
                regeneratorRuntime = r;
            } catch (i) {
                Function("r", "regeneratorRuntime = r")(r);
            }
        },
        47: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(15), o = n(41), u = n(14);
            n(2), n(12);
            function s(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return (f = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(v, e);
                var t, n, r, a, d, y = p(v);
                function v() {
                    return l(this, v), y.apply(this, arguments);
                }
                return t = v, n = [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            f(h(v.prototype), "initialize", this).call(this, e), e.seekToPrevBar = function() {
                                var t = u.default.findPrevBar(e);
                                t && e.seekTo(t.start);
                            }, e.seekToNextBar = function() {
                                var t = u.default.findNextBar(e);
                                t && e.seekTo(t.start);
                            }, this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetBarLeaveTrap__(), t.__resetBeatLeaveTrap__(), t.__resetBarEnterTrap__(), t.__resetBeatEnterTrap__();
                            }), function e() {
                                t.mapTrapsHasNotData([
                                    "barEnter",
                                    "barLeave",
                                    "beatEnter",
                                    "beatLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__invokeBarLeaveTrap__(), t.__invokeBeatLeaveTrap__(), t.__invokeBarEnterTrap__(), t.__invokeBeatEnterTrap__()), e();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i.a.mark(function e(t) {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return f(h(v.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadBeat();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), d = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e, t);
                                function o(e) {
                                    s(i, n, r, o, u, "next", e);
                                }
                                function u(e) {
                                    s(i, n, r, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetBarEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("barEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetBarLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__resetBeatEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("beatEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetBeatLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBarEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        1 === n.beat.number && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBarLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("barLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        1 === n.beat.number && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBeatEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__invokeBeatLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("beatLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return v.Name;
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-beat";
                        }
                    },
                    {
                        key: "BarEnterTrapName",
                        get: function() {
                            return "barEnter";
                        }
                    },
                    {
                        key: "BarLeaveTrapName",
                        get: function() {
                            return "barLeave";
                        }
                    },
                    {
                        key: "BeatEnterTrapName",
                        get: function() {
                            return "beatEnter";
                        }
                    },
                    {
                        key: "BeatLeaveTrapName",
                        get: function() {
                            return "beatLeave";
                        }
                    }
                ], n && c(t.prototype, n), r && c(t, r), v;
            }(a.default);
            t.default = y;
        },
        48: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(15), o = n(42);
            n(14), n(2), n(12);
            function u(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e, t, n) {
                return (c = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            }
            function p(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var h = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t);
                }(y, e);
                var t, n, r, a, p, h = _(y);
                function y() {
                    return s(this, y), h.apply(this, arguments);
                }
                return t = y, n = [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            c(d(y.prototype), "initialize", this).call(this, e), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetChordLeaveTrap__(), t.__resetChordEnterTrap__();
                            }), function e() {
                                t.mapTrapsHasNotData([
                                    "chordEnter",
                                    "chordLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runChordLeaveTrap__(), t.__runChordEnterTrap__()), e();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i.a.mark(function e(t) {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return c(d(y.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadChord();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), p = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e, t);
                                function o(e) {
                                    u(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return p.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetChordEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("chordEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetChordLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runChordEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runChordLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chordLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-chord";
                        }
                    },
                    {
                        key: "ChordEnterTrapName",
                        get: function() {
                            return "chordEnter";
                        }
                    },
                    {
                        key: "ChordLeaveTrapName",
                        get: function() {
                            return "chordLeave";
                        }
                    }
                ], n && l(t.prototype, n), r && l(t, r), y;
            }(a.default);
            t.default = h;
        },
        49: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(15), o = n(43);
            n(14), n(2), n(12);
            function u(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e, t, n) {
                return (c = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = d(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function f(e, t) {
                return (f = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function _(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = d(e);
                    if (t) {
                        var i = d(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return p(this, n);
                };
            }
            function p(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function d(e) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var h = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && f(e, t);
                }(y, e);
                var t, n, r, a, p, h = _(y);
                function y() {
                    return s(this, y), h.apply(this, arguments);
                }
                return t = y, n = [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            c(d(y.prototype), "initialize", this).call(this, e), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetMelodyLeaveTrap__(), t.__resetMelodyEnterTrap__();
                            }), function e() {
                                t.mapTrapsHasNotData([
                                    "melodyEnter",
                                    "melodyLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runMelodyLeaveTrap__(), t.__runMelodyEnterTrap__()), e();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i.a.mark(function e(t) {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return c(d(y.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadMelody();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), p = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e, t);
                                function o(e) {
                                    u(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return p.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetMelodyEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("melodyEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetMelodyLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runMelodyEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runMelodyLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("melodyLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-melody";
                        }
                    },
                    {
                        key: "MelodyEnterTrapName",
                        get: function() {
                            return "melodyEnter";
                        }
                    },
                    {
                        key: "MelodyLeaveTrapName",
                        get: function() {
                            return "melodyLeave";
                        }
                    }
                ], n && l(t.prototype, n), r && l(t, r), y;
            }(a.default);
            t.default = h;
        },
        5: function(e, t, n) {
            "use strict";
            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(r, i) {
                    var a = null != n.method ? n.method : "GET", o = null != n.responseType ? n.responseType : "", u = new XMLHttpRequest;
                    switch(u.addEventListener("abort", function(e) {
                        i(u);
                    }, !1), u.addEventListener("error", function(e) {
                        i(u);
                    }, !1), u.addEventListener("load", function(e) {
                        r(u);
                    }, !1), u.open(a, e, !0), u.responseType = o, a){
                        case "GET":
                            u.send();
                            break;
                        default:
                            u.setRequestHeader("Content-Type", "application/json"), u.send(JSON.stringify(t));
                    }
                });
            }
            function i(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, o) {
                    r(e, t, {
                        method: n.method,
                        responseType: n.responseType
                    }).then(function(e) {
                        var t = a(e);
                        i(t);
                    }, function(e) {
                        var t = a(e);
                        o(t);
                    });
                });
            }
            function a(e) {
                var t = e.responseText || e.response || "null";
                return JSON.parse(t);
            }
            n.r(t);
            var o = {
                ajax: r,
                ajaxJSON: i,
                getJSON: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return t.method = "GET", i(e, null, t);
                },
                postJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "POST", i(e, t, n);
                },
                putJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "PUT", i(e, t, n);
                },
                deleteJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.method = "DELETE", i(e, t, n);
                }
            };
            t.default = o;
        },
        50: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(15), o = n(44), u = n(14);
            n(2), n(12);
            function s(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return (f = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(v, e);
                var t, n, r, a, d, y = p(v);
                function v() {
                    return l(this, v), y.apply(this, arguments);
                }
                return t = v, n = [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            f(h(v.prototype), "initialize", this).call(this, e), e.seekToPrevChorusSection = function() {
                                var t = u.default.findPrevRepeatedSectionItem(e, {
                                    chorusOnly: !0
                                });
                                t && e.seekTo(t.start);
                            }, e.seekToPrevChorusSectionItem = e.seekToPrevChorusSection, e.seekToNextChorusSection = function() {
                                var t = u.default.findNextRepeatedSectionItem(e, {
                                    chorusOnly: !0
                                });
                                t && e.seekTo(t.start);
                            }, e.seekToNextChorusSectionItem = e.seekToNextChorusSection, e.seekToPrevRepeatedSection = function() {
                                var t = u.default.findPrevRepeatedSectionItem(e);
                                t && e.seekTo(t.start);
                            }, e.seekToPrevRepeatedSectionItem = e.seekToPrevRepeatedSection, e.seekToNextRepeatedSection = function() {
                                var t = u.default.findNextRepeatedSectionItem(e);
                                t && e.seekTo(t.start);
                            }, e.seekToNextRepeatedSectionItem = e.seekToNextRepeatedSection, this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetChorusSectionLeaveTrap__(), t.__resetChorusSectionEnterTrap__(), t.__resetRepeatedSectionLeaveTrap__(), t.__resetRepeatedSectionEnterTrap__();
                            }), function e() {
                                t.mapTrapsHasNotData([
                                    "chorusSectionEnter",
                                    "chorusSectionLeave",
                                    "repeatedSectionEnter",
                                    "repeatedSectionLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runChorusSectionLeaveTrap__(), t.__runChorusSectionEnterTrap__(), t.__runRepeatedSectionLeaveTrap__(), t.__runRepeatedSectionEnterTrap__()), e();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (a = i.a.mark(function e(t) {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return f(h(v.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadChorus();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), d = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e, t);
                                function o(e) {
                                    s(i, n, r, o, u, "next", e);
                                }
                                function u(e) {
                                    s(i, n, r, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetChorusSectionEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("chorusSectionEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetChorusSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__resetRepeatedSectionEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("repeatedSectionEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetRepeatedSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runChorusSectionEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runChorusSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("chorusSectionLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        n.section.isChorus && e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runRepeatedSectionEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runRepeatedSectionLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("repeatedSectionLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return v.Name;
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-chorus";
                        }
                    },
                    {
                        key: "ChorusSectionEnterTrapName",
                        get: function() {
                            return "chorusSectionEnter";
                        }
                    },
                    {
                        key: "ChorusSectionLeaveTrapName",
                        get: function() {
                            return "chorusSectionLeave";
                        }
                    },
                    {
                        key: "RepeatedSectionEnterTrapName",
                        get: function() {
                            return "repeatedSectionEnter";
                        }
                    },
                    {
                        key: "RepeatedSectionLeaveTrapName",
                        get: function() {
                            return "repeatedSectionLeave";
                        }
                    }
                ], n && c(t.prototype, n), r && c(t, r), v;
            }(a.default);
            t.default = y;
        },
        51: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(15), o = n(45);
            n(14), n(2), n(12);
            function u(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t, n) {
                return (l = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function c(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function f(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e;
            }
            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(a, e);
                var t, n, r = p(a);
                function a() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return s(this, a), (e = r.call(this, t)).__groupCount__ = null != t.groupCount ? t.groupCount : 2, e.__groupCount__ < 2 && (e.__groupCount__ = 2), e.__groupCount__ > 10 && (e.__groupCount__ = 10), e;
                }
                return f(a, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "sw-plugin-variation";
                        }
                    },
                    {
                        key: "MinGroupCount",
                        get: function() {
                            return 2;
                        }
                    },
                    {
                        key: "MaxGroupCount",
                        get: function() {
                            return 10;
                        }
                    },
                    {
                        key: "VariationEnterTrapName",
                        get: function() {
                            return "variationEnter";
                        }
                    },
                    {
                        key: "VariationLeaveTrapName",
                        get: function() {
                            return "variationLeave";
                        }
                    }
                ]), f(a, [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            l(h(a.prototype), "initialize", this).call(this, e), this.on([
                                "play",
                                "pause",
                                "mediaSeek",
                                "seek"
                            ], function(e) {
                                t.__resetVariationLeaveTrap__(), t.__resetVariationEnterTrap__();
                            });
                            !function e() {
                                t.mapTrapsHasNotData([
                                    "variationEnter",
                                    "variationLeave"
                                ]).forEach(function(e) {
                                    return e.data = new o.default(t.player);
                                }), setTimeout(function() {
                                    t.player.isPlaying && (t.__runVariationLeaveTrap__(), t.__runVariationEnterTrap__()), e();
                                }, t.pollingInterval);
                            }();
                        }
                    },
                    {
                        key: "mediaDidMount",
                        value: (t = i.a.mark(function e(t) {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return l(h(a.prototype), "mediaDidMount", this).call(this, t), e.next = 3, t.media.loadVariation();
                                    case 3:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), n = function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t.apply(e, n);
                                function o(e) {
                                    u(a, r, i, o, s, "next", e);
                                }
                                function s(e) {
                                    u(a, r, i, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function(e) {
                            return n.apply(this, arguments);
                        })
                    },
                    {
                        key: "__resetVariationEnterTrap__",
                        value: function() {
                            this.mapTrapsHasAnyData("variationEnter").forEach(function(e) {
                                return e.data.reset();
                            });
                        }
                    },
                    {
                        key: "__resetVariationLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationLeave").forEach(function(t) {
                                return t.data.reset({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                });
                            });
                        }
                    },
                    {
                        key: "__runVariationEnterTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationEnter").forEach(function(t) {
                                return t.data.find({
                                    enter: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "__runVariationLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.mapTrapsHasAnyData("variationLeave").forEach(function(t) {
                                return t.data.find({
                                    leave: function(n) {
                                        return e.__invokeTrap__(t, n);
                                    }
                                }, {
                                    offset: t.options.offset + e.offset
                                });
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return a.Name;
                        }
                    }
                ]), a;
            }(a.default);
            t.default = y;
        },
        52: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(1);
            var a = {
                getClock: function(e) {
                    return new Promise(function(t, n) {
                        var a = e.accessToken, o = [];
                        o.push("syntax=camelcase"), r.default.getJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(a, "/clock.json?").concat(o.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(i.attributes.time);
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t.default = a;
        },
        53: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(1);
            var a = {
                createHistory: function(e) {
                    return new Promise(function(t, n) {
                        var a = {};
                        a.stage_id = e.stageId, a.node_id = e.nodeId, a.is_master = e.isMaster, a.is_slave = e.isSalve, a.referer = i.default.referer, a.user_agent = i.default.userAgent, r.default.postJSON("".concat(i.default.defaultLogServerEndpoint, "/songle-api.stage-logs"), a).then(function(e) {
                            return t(e);
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t.default = a;
        },
        54: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(1);
            var a = {
                getMessage: function(e) {
                    return new Promise(function(t, n) {
                        var a = e.accessToken, o = [];
                        o.push("syntax=camelcase"), r.default.getJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(a, "/message.json?").concat(o.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(i);
                        }, function(e) {
                            return n(e);
                        });
                    });
                },
                updateMessage: function(e, t) {
                    return new Promise(function(n, a) {
                        var o = e.accessToken, u = e.secretToken, s = {
                            syntax: "camelcase"
                        };
                        s.access_token = o, s.secret_token = u, s.data = t, r.default.putJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/message.json"), s).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                }
            };
            t.default = a;
        },
        55: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(1);
            function a(e) {
                var t = e.map(function(e) {
                    var t = e.attributes;
                    return Object.defineProperties(t, {
                        relativeStartTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs;
                            }
                        },
                        relativeEndTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs;
                            }
                        },
                        durationTime: {
                            get: function() {
                                return e.attributes.durationTimeMs;
                            }
                        },
                        startTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs;
                            }
                        },
                        endTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs;
                            }
                        },
                        mediaRelativeStartTime: {
                            get: function() {
                                return e.attributes.mediaRelativeStartTimeMs;
                            }
                        },
                        mediaRelativeEndTime: {
                            get: function() {
                                return e.attributes.mediaRelativeEndTimeMs;
                            }
                        },
                        mediaDurationTime: {
                            get: function() {
                                return e.attributes.mediaDurationTimeMs;
                            }
                        },
                        mediaStartTime: {
                            get: function() {
                                return e.attributes.relativeStartTimeMs + e.attributes.mediaRelativeStartTimeMs;
                            }
                        },
                        mediaEndTime: {
                            get: function() {
                                return e.attributes.relativeEndTimeMs + e.attributes.mediaRelativeEndTimeMs;
                            }
                        }
                    }), t;
                });
                return t.forEach(function(e, n) {
                    Object.defineProperties(e, {
                        prev: {
                            get: function() {
                                return t[n - 1] || null;
                            }
                        },
                        next: {
                            get: function() {
                                return t[n + 1] || null;
                            }
                        }
                    });
                }), t.sort(function(e, t) {
                    return e.index - t.index;
                });
            }
            var o = {
                getPlaylist: function(e) {
                    return new Promise(function(t, n) {
                        var o = e.accessToken, u = [];
                        u.push("syntax=camelcase"), r.default.getJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/playlist.json?").concat(u.join("&"))).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(a(i));
                        }, function(e) {
                            return n(e);
                        });
                    });
                },
                createPlaylist: function(e, t) {
                    return new Promise(function(n, o) {
                        var u = e.accessToken, s = e.secretToken, l = {
                            syntax: "camelcase"
                        };
                        l.access_token = u, l.secret_token = s, l.items = t, r.default.postJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(u, "/playlist.json"), l).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? o(e) : n(a(r));
                        }, function(e) {
                            return o(e);
                        });
                    });
                },
                deletePlaylist: function(e) {
                    return new Promise(function(t, n) {
                        var o = e.accessToken, u = e.secretToken, s = {
                            syntax: "camelcase"
                        };
                        s.access_token = o, s.secret_token = u, r.default.deleteJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, "/playlist.json"), s).then(function(e) {
                            var r = e.meta, i = e.data;
                            return 200 != r.status ? n(e) : t(a(i));
                        }, function(e) {
                            return n(e);
                        });
                    });
                }
            };
            t.default = o;
        },
        56: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5), i = n(1);
            var a = {
                getStage: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, a) {
                        var o = e.accessToken, u = null != t.nodeTimeoutSec ? t.nodeTimeoutSec : e.nodeTimeoutSec, s = [];
                        s.push("syntax=camelcase"), null != u && s.push("node_timeout_sec=" + u), r.default.getJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, ".json?").concat(s.join("&"))).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                },
                updateStage: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return new Promise(function(n, a) {
                        var o = e.accessToken, u = e.secretToken, s = null != t.absoluteStartTime ? t.absoluteStartTime : null, l = null != t.absolutePauseTime ? t.absolutePauseTime : null, c = null != t.stateId ? t.stateId : null, f = null != t.nodeTimeoutSec ? t.nodeTimeoutSec : e.nodeTimeoutSec, _ = {
                            syntax: "camelcase"
                        };
                        _.access_token = o, _.secret_token = u, null != s && (_.absolute_start_time_ms = s), null != l && (_.absolute_pause_time_ms = l), null != c && (_.state_id = c), null != f && (_.node_timeout_sec = f), r.default.putJSON("".concat(i.default.defaultAppServerEndpoint, "/api/v2/stages/").concat(o, ".json"), _).then(function(e) {
                            var t = e.meta, r = e.data;
                            return 200 != t.status ? a(e) : n(r);
                        }, function(e) {
                            return a(e);
                        });
                    });
                }
            };
            t.default = a;
        },
        57: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(6);
            function o(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l(e, t, n) {
                return (l = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            function _(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e);
                var t, n, r, _, d, h = f(y);
                function y() {
                    return u(this, y), h.apply(this, arguments);
                }
                return t = y, n = [
                    {
                        key: "initialize",
                        value: (_ = i.a.mark(function e(t) {
                            var n = this;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("statusChange", function(e) {
                                            switch(n.__invokeMediaStateChangeTrap__(n, a.default.StateTimeUpdate), e.playerStatus << 4 | e.seekStatus << 0){
                                                case 32:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StatePlaying);
                                                    break;
                                                case 48:
                                                    if (n.isSeeking) return;
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StatePaused);
                                                    break;
                                                case 50:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StateSeeking);
                                                    break;
                                                case 64:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StateFinished);
                                            }
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), d = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e, t);
                                function a(e) {
                                    o(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l(p(y.prototype), "dispose", this).call(this), this.originalPlayer.dispose();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.play();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pause();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.currentTime(e);
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return this.originalPlayer.currentTime() || 0;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.muted();
                        },
                        set: function(e) {
                            this.originalPlayer.muted(!!e);
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return 100 * this.originalPlayer.volume();
                        },
                        set: function(e) {
                            var t = e / 100;
                            return t < 0 ? this.originalPlayer.volume(0) : t > 1 ? this.originalPlayer.volume(1) : void this.originalPlayer.volume(t);
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-nn-media";
                        }
                    }
                ], n && s(t.prototype, n), r && s(t, r), y;
            }(a.default.SuperClass);
            t.default = d;
        },
        58: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(6);
            function o(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l(e, t, n) {
                return (l = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            function _(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e);
                var t, n, r, _, d, h = f(y);
                function y() {
                    return u(this, y), h.apply(this, arguments);
                }
                return t = y, n = [
                    {
                        key: "initialize",
                        value: (_ = i.a.mark(function e(t) {
                            var n = this;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("onStateChange", function(e) {
                                            switch(n.__invokeMediaStateChangeTrap__(n, a.default.StateTimeUpdate), e.data){
                                                case 1:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StatePlaying);
                                                    break;
                                                case 2:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StatePaused);
                                                    break;
                                                case 3:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StateSeeking);
                                                    break;
                                                case 0:
                                                    n.__invokeMediaStateChangeTrap__(n, a.default.StateFinished);
                                            }
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), d = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e, t);
                                function a(e) {
                                    o(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l(p(y.prototype), "dispose", this).call(this), this.originalPlayer.destroy();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.playVideo();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pauseVideo();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.seekTo(e / 1e3);
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return 1e3 * this.originalPlayer.getCurrentTime();
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.isMuted();
                        },
                        set: function(e) {
                            e ? this.originalPlayer.mute() : this.originalPlayer.unMute();
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return this.originalPlayer.getVolume();
                        },
                        set: function(e) {
                            var t = e;
                            return t < 0 ? this.originalPlayer.setVolume(0) : t > 100 ? this.originalPlayer.setVolume(100) : void this.originalPlayer.setVolume(t);
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-yt-media";
                        }
                    }
                ], n && s(t.prototype, n), r && s(t, r), y;
            }(a.default.SuperClass);
            t.default = d;
        },
        59: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(6);
            function o(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l(e, t, n) {
                return (l = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            function _(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(y, e);
                var t, n, r, _, d, h = f(y);
                function y() {
                    return u(this, y), h.apply(this, arguments);
                }
                return t = y, n = [
                    {
                        key: "initialize",
                        value: (_ = i.a.mark(function e(t) {
                            var n = this;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null == this.player) {
                                            e.next = 2;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, l(p(y.prototype), "initialize", this).call(this, t);
                                    case 4:
                                        this.originalPlayer.addEventListener("play", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a.default.StatePlaying);
                                        }), this.originalPlayer.addEventListener("pause", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a.default.StatePaused);
                                        }), this.originalPlayer.addEventListener("seeking", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a.default.StateSeeking);
                                        }), this.originalPlayer.addEventListener("ended", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a.default.StateFinished);
                                        }), this.originalPlayer.addEventListener("timeupdate", function(e) {
                                            n.__invokeMediaStateChangeTrap__(n, a.default.StateTimeUpdate);
                                        });
                                    case 9:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), d = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = _.apply(e, t);
                                function a(e) {
                                    o(i, n, r, a, u, "next", e);
                                }
                                function u(e) {
                                    o(i, n, r, a, u, "throw", e);
                                }
                                a(void 0);
                            });
                        }, function(e) {
                            return d.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispose",
                        value: function() {
                            l(p(y.prototype), "dispose", this).call(this), this.originalPlayer.remove();
                        }
                    },
                    {
                        key: "activate",
                        value: function() {
                            var e = this;
                            return new Promise(function(t, n) {
                                e.__play__(), setTimeout(function() {
                                    return e.__seekTo__(0), e.__pause__(), t();
                                }, 500);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            this.isPlaying || this.__play__();
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            this.isPaused || this.__pause__();
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            this.__seekTo__(0), this.__pause__();
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            l(p(y.prototype), "seekTo", this).call(this, e), this.__seekTo__(e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.originalPlayer.play();
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.originalPlayer.pause();
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            this.originalPlayer.currentTime = e / 1e3;
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return y.Name;
                        }
                    },
                    {
                        key: "originalPositionTime",
                        get: function() {
                            return 1e3 * this.originalPlayer.currentTime;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return this.originalPlayer.muted;
                        },
                        set: function(e) {
                            this.originalPlayer.muted = !!e;
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return 100 * this.originalPlayer.volume;
                        },
                        set: function(e) {
                            var t = e / 100;
                            return t < 0 ? this.originalPlayer.volume = 0 : t > 1 ? this.originalPlayer.volume = 1 : void (this.originalPlayer.volume = t);
                        }
                    }
                ], r = [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-html-media-element-media";
                        }
                    }
                ], n && s(t.prototype, n), r && s(t, r), y;
            }(a.default.SuperClass);
            t.default = d;
        },
        6: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(19), o = n(47), u = n(48), s = n(49), l = n(50), c = n(51), f = n(2), _ = n(1), p = n(12);
            function d(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function h(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            d(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            d(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function y(e, t, n) {
                return (y = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = T(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function v(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), e;
            }
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = T(e);
                    if (t) {
                        var i = T(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return k(this, n);
                };
            }
            function k(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function T(e) {
                return (T = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var S = {
                DefaultStateReady: !1,
                DefaultStatePlaying: !1,
                DefaultStatePaused: !0,
                DefaultStateSeeking: !1,
                StateReady: 0,
                StatePlaying: 1,
                StatePaused: 2,
                StateSeeking: 3,
                StateFinished: 4,
                StateTimeUpdate: 5,
                SuperClass: function(e) {
                    !function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && m(e, t);
                    }(P, e);
                    var t, n, r, a, d, v, k, S = b(P);
                    function P(e, t, n) {
                        var r;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                        }(this, P), (r = S.call(this)).__stateIsReady__ = !1, r.__stateIsPlaying__ = !1, r.__stateIsPaused__ = !0, r.__stateIsSeeking__ = !1, r.__seekTimeHistories__ = [], r.__adjustedTime__ = 0, r.__positionTime__ = 0, r.__musicMap__ = {}, r.__element__ = e, r.__originalPlayer__ = t, r.__songleSong__ = n, r.__sourceUrl__ = "string" == _.default.typeOf(n) ? n : n.attributes.permalink, r;
                    }
                    return g(P, null, [
                        {
                            key: "Name",
                            get: function() {
                                return "media";
                            }
                        },
                        {
                            key: "Type",
                            get: function() {
                                return "media";
                            }
                        }
                    ]), g(P, [
                        {
                            key: "initialize",
                            value: (k = h(i.a.mark(function e(t) {
                                var n, r, a, o = this;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (null == this.player) {
                                                e.next = 2;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return y(T(P.prototype), "initialize", this).call(this, t), n = 0, r = 0, a = 0, this.on("mediaStateChange", function(e) {
                                                switch(e.data.mediaStateId){
                                                    case 1:
                                                        f.default.debug("Media state change to 'playing'"), r = _.default.currentClockTime, a = 0 == n ? 0 : r - n, o.__seekTimeHistories__.push(a), o.isMounted && o.player.invokeTrap("mediaSeek", {
                                                            target: e.target,
                                                            data: {
                                                                positionTime: o.originalPositionTime,
                                                                seekTime: a
                                                            }
                                                        }), n = 0, r = 0, a = 0, o.isMounted && o.isPaused && o.player.invokeTrap("mediaPlay", {
                                                            target: e.target
                                                        }), o.__setMediaState__(1);
                                                        break;
                                                    case 2:
                                                        f.default.debug("Media state change to 'paused'"), r = _.default.currentClockTime, a = 0 == n ? 0 : r - n, o.__seekTimeHistories__.push(a), o.isMounted && o.player.invokeTrap("mediaSeek", {
                                                            target: e.target,
                                                            data: {
                                                                positionTime: o.originalPositionTime,
                                                                seekTime: a
                                                            }
                                                        }), n = 0, r = 0, a = 0, o.isMounted && !o.isPaused && o.player.invokeTrap("mediaPause", {
                                                            target: e.target
                                                        }), o.__setMediaState__(2);
                                                        break;
                                                    case 3:
                                                        f.default.debug("Media state change to 'seeking'"), n = _.default.currentClockTime, o.__setMediaState__(3);
                                                        break;
                                                    case 4:
                                                        f.default.debug("Media state change to 'finished'"), o.isMounted && o.player.invokeTrap("mediaFinish", {
                                                            target: e.target
                                                        }), o.stop();
                                                        break;
                                                    case 5:
                                                        o.__seekMediaTo__(o.originalPositionTime);
                                                        break;
                                                    default:
                                                        f.default.error("Unknown media state (ID: ".concat(e.data.mediaStateId, ")"));
                                                }
                                            }), this.on("mediaReady", function(e) {
                                                f.default.debug("Invoke 'mediaReady'", e.data), o.player.invokeTrap("ready", e);
                                            }), this.on("mediaPlay", function(e) {
                                                f.default.debug("Invoke 'mediaPlay'", e.data), o.player.invokeTrap("play", e);
                                            }), this.on("mediaPause", function(e) {
                                                f.default.debug("Invoke 'mediaPause'", e.data), o.player.invokeTrap("pause", e);
                                            }), this.on("mediaSeek", function(e) {
                                                f.default.debug("Invoke 'mediaSeek'", e.data);
                                            }), this.on("mediaFinish", function(e) {
                                                f.default.debug("Invoke 'mediaFinish'", e.data), o.player.invokeTrap("finish", e);
                                            }), this.on("seek", function(e) {
                                                f.default.debug("Invoke 'seek'", e.data), o.seekTo(e.data.positionTime);
                                            }), [
                                                {
                                                    source: "originalDurationTime",
                                                    target: "originalDuration",
                                                    warning: !0
                                                },
                                                {
                                                    source: "originalPositionTime",
                                                    target: "originalPosition",
                                                    warning: !0
                                                },
                                                {
                                                    source: "durationTime",
                                                    target: "duration",
                                                    warning: !0
                                                },
                                                {
                                                    source: "positionTime",
                                                    target: "position",
                                                    warning: !0
                                                }
                                            ].forEach(function(e) {
                                                Object.defineProperty(o, e.target, {
                                                    get: function() {
                                                        return e.warning && f.default.warn("'Media.".concat(e.target, "' is deprecated API, please use 'Media.").concat(e.source, "'")), o[e.source];
                                                    }
                                                });
                                            }), e.next = 17, Promise.all([
                                                this.loadBeat(),
                                                this.loadChord(),
                                                this.loadMelody(),
                                                this.loadChorus(),
                                                this.loadVariation()
                                            ]);
                                        case 17:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function(e) {
                                return k.apply(this, arguments);
                            })
                        },
                        {
                            key: "dispose",
                            value: (v = h(i.a.mark(function e() {
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            null != this.element && this.element.remove();
                                        case 1:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this);
                            })), function() {
                                return v.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadBeat",
                            value: (d = h(i.a.mark(function e() {
                                var t, n, r = arguments;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(o.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.beats) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.BeatAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                beatRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                beats: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return d.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadChord",
                            value: (a = h(i.a.mark(function e() {
                                var t, n, r = arguments;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(u.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.chords) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.ChordAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                chordRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                chords: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return a.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadMelody",
                            value: (r = h(i.a.mark(function e() {
                                var t, n, r = arguments;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(s.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.melodies) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.MelodyAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                melodyRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                melodies: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return r.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadChorus",
                            value: (n = h(i.a.mark(function e() {
                                var t, n, r = arguments;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(l.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.chorus) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.ChorusAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                chorusRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                chorus: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                },
                                                chorusSetcions: {
                                                    get: function() {
                                                        return f.default.warn("'Player.musicMap.chorusSections' is deprecated API, please use 'Player.musicMap.chorus'"), n.data.filter(function(e) {
                                                            return e.isChorus;
                                                        });
                                                    }
                                                },
                                                repeatSections: {
                                                    get: function() {
                                                        return f.default.warn("'Player.musicMap.repeatSections' is deprecated API, please use 'Player.musicMap.chorus'"), n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return n.apply(this, arguments);
                            })
                        },
                        {
                            key: "loadVariation",
                            value: (t = h(i.a.mark(function e() {
                                var t, n, r = arguments;
                                return i.a.wrap(function(e) {
                                    for(;;)switch(e.prev = e.next){
                                        case 0:
                                            if (t = r.length > 0 && void 0 !== r[0] ? r[0] : {}, this.player.hasPlugin(c.default.Name)) {
                                                e.next = 3;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            if (null == this.musicMap.variations) {
                                                e.next = 5;
                                                break;
                                            }
                                            return e.abrupt("return");
                                        case 5:
                                            return e.prev = 5, e.next = 8, p.VariationAPI.get(this.sourceUrl, t);
                                        case 8:
                                            n = e.sent, Object.defineProperties(this.__musicMap__, {
                                                variationRevisionId: {
                                                    get: function() {
                                                        return n.revisionId;
                                                    }
                                                },
                                                variations: {
                                                    get: function() {
                                                        return n.data;
                                                    }
                                                }
                                            }), e.next = 14;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(5);
                                        case 14:
                                        case "end":
                                            return e.stop();
                                    }
                                }, e, this, [
                                    [
                                        5,
                                        12
                                    ]
                                ]);
                            })), function() {
                                return t.apply(this, arguments);
                            })
                        },
                        {
                            key: "activate",
                            value: function() {
                                var e = this;
                                return new Promise(function(t, n) {
                                    return e.__setMediaState__(2), t();
                                });
                            }
                        },
                        {
                            key: "play",
                            value: function() {}
                        },
                        {
                            key: "pause",
                            value: function() {}
                        },
                        {
                            key: "stop",
                            value: function() {
                                this.seekTo(0), this.pause();
                            }
                        },
                        {
                            key: "seekTo",
                            value: function(e) {
                                this.__seekMediaTo__(e);
                            }
                        },
                        {
                            key: "showElement",
                            value: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                if (null != this.element) {
                                    var t = null != e.width ? e.width : 256, n = null != e.height ? e.height : 144;
                                    this.element.style.position = "", this.element.style.opacity = 1, this.element.style.left = "", this.element.style.top = "", this.element.style.width = "number" === _.default.typeOf(t) ? t + "px" : t, this.element.style.height = "number" === _.default.typeOf(n) ? n + "px" : n;
                                }
                            }
                        },
                        {
                            key: "hideElement",
                            value: function() {
                                null != this.element && (this.element.style.position = "absolute", this.element.style.opacity = 0, this.element.style.left = "0px", this.element.style.top = "0px", this.element.style.width = "1px", this.element.style.height = "1px");
                            }
                        },
                        {
                            key: "__seekMediaTo__",
                            value: function(e) {
                                this.__adjustedTime__ = _.default.currentClockTime, this.__positionTime__ = e;
                            }
                        },
                        {
                            key: "__invokeMediaStateChangeTrap__",
                            value: function(e, t) {
                                this.isMounted ? this.player.invokeTrap("mediaStateChange", {
                                    target: e,
                                    data: {
                                        mediaStateId: t,
                                        positionTime: this.originalPositionTime
                                    }
                                }) : this.invokeSelfTrap("mediaStateChange", {
                                    target: e,
                                    data: {
                                        mediaStateId: t,
                                        positionTime: this.originalPositionTime
                                    }
                                });
                            }
                        },
                        {
                            key: "__setMediaState__",
                            value: function(e) {
                                switch(e){
                                    case 0:
                                        this.__stateIsReady__ = !1, this.__stateIsPlaying__ = !1, this.__stateIsPaused__ = !0, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 1:
                                        this.__stateIsReady__ = !0, this.__stateIsPlaying__ = !0, this.__stateIsPaused__ = !1, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 2:
                                        this.__stateIsReady__ = !0, this.__stateIsPlaying__ = !1, this.__stateIsPaused__ = !0, this.__stateIsSeeking__ = !1;
                                        break;
                                    case 3:
                                        this.__stateIsReady__ = !0, this.__stateIsSeeking__ = !0;
                                }
                            }
                        },
                        {
                            key: "dispatcherName",
                            get: function() {
                                return P.Name;
                            }
                        },
                        {
                            key: "dispatcherType",
                            get: function() {
                                return P.Type;
                            }
                        },
                        {
                            key: "element",
                            get: function() {
                                return this.__element__;
                            }
                        },
                        {
                            key: "originalPlayer",
                            get: function() {
                                return this.__originalPlayer__;
                            }
                        },
                        {
                            key: "sourceUrl",
                            get: function() {
                                return this.__sourceUrl__;
                            }
                        },
                        {
                            key: "name",
                            get: function() {
                                return this.__songleSong__.attributes.name;
                            }
                        },
                        {
                            key: "artistId",
                            get: function() {
                                return this.__songleSong__.relationships.artist.data.id;
                            }
                        },
                        {
                            key: "artistName",
                            get: function() {
                                return this.__songleSong__.relationships.artist.data.attributes.name;
                            }
                        },
                        {
                            key: "isMounted",
                            get: function() {
                                return this.player.media == this;
                            }
                        },
                        {
                            key: "isReady",
                            get: function() {
                                return this.__stateIsReady__;
                            }
                        },
                        {
                            key: "isPlaying",
                            get: function() {
                                return this.__stateIsPlaying__;
                            }
                        },
                        {
                            key: "isPaused",
                            get: function() {
                                return this.__stateIsPaused__;
                            }
                        },
                        {
                            key: "isSeeking",
                            get: function() {
                                return this.__stateIsSeeking__;
                            }
                        },
                        {
                            key: "medianSeekTime",
                            get: function() {
                                var e = this.__seekTimeHistories__.sort(function(e, t) {
                                    return e - t;
                                });
                                return Math.abs(e[Math.floor(e.length / 2)] || 0);
                            }
                        },
                        {
                            key: "durationTime",
                            get: function() {
                                return this.__songleSong__.attributes.durationTimeMs;
                            }
                        },
                        {
                            key: "originalDurationTime",
                            get: function() {
                                return this.durationTime;
                            }
                        },
                        {
                            key: "positionTime",
                            get: function() {
                                var e = this.__positionTime__ + (this.isPlaying ? _.default.currentClockTime - this.__adjustedTime__ : 0);
                                return e < 0 ? e : e > this.durationTime ? this.durationTime : e;
                            }
                        },
                        {
                            key: "originalPositionTime",
                            get: function() {
                                return this.positionTime;
                            }
                        },
                        {
                            key: "loadedRatio",
                            get: function() {
                                return 0;
                            }
                        },
                        {
                            key: "playedRatio",
                            get: function() {
                                return 0 == this.durationTime ? 0 : this.positionTime / this.durationTime;
                            }
                        },
                        {
                            key: "muted",
                            get: function() {
                                return !1;
                            },
                            set: function(e) {}
                        },
                        {
                            key: "volume",
                            get: function() {
                                return 0;
                            },
                            set: function(e) {}
                        },
                        {
                            key: "musicMap",
                            get: function() {
                                return this.__musicMap__;
                            }
                        }
                    ]), P;
                }(a.default)
            };
            t.default = S;
        },
        62: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(21), o = (n(32), n(59), n(57), n(58), n(69)), u = n(2), s = n(1), l = n(78), c = n.n(l), f = n(70), _ = n(71), p = n(72), d = n(73), h = n(74), y = n(20);
            function v(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function g(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function m(e, t, n) {
                return (m = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for(; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = O(e)););
                        return e;
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value;
                    }
                })(e, t, n || e);
            }
            function b(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function k(e, t, n) {
                return t && b(e.prototype, t), n && b(e, n), e;
            }
            function T(e, t) {
                return (T = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function S(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = O(e);
                    if (t) {
                        var i = O(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return P(this, n);
                };
            }
            function P(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? w(e) : t;
            }
            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function O(e) {
                return (O = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var C = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && T(e, t);
                }(a, e);
                var t, n, r = S(a);
                function a() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return g(this, a), (e = r.call(this)).__nodeTimeoutSec__ = 60, e.__localAbsoluteClockJitterTime__ = 0, e.__cachedCurrentPlaylistItem__ = null, e.__autoUseMedia__ = null == t.autoUseMedia || t.autoUseMedia, e.__autoUseMediaOptions__ = null != t.autoUseMediaOptions ? t.autoUseMediaOptions : null, e.__clockWorker__ = new f.default(w(e), {
                        intervalTime: t.clockWorkerIntervalTime
                    }), e.__stageWorker__ = new _.default(w(e), {
                        intervalTime: t.stageWorkerIntervalTime
                    }), e.__stateWorker__ = new p.default(w(e), {
                        intervalTime: t.stateWorkerIntervalTime
                    }), e.__mediaWorker__ = new d.default(w(e), {
                        intervalTime: t.mediaWorkerIntervalTime
                    }), e.__historyWorker__ = new h.default(w(e), {
                        intervalTime: t.historyWorkerIntervalTime
                    }), e;
                }
                return k(a, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "songle-api-plugin-songle-sync";
                        }
                    }
                ]), k(a, [
                    {
                        key: "initialize",
                        value: function(e) {
                            var t = this;
                            m(O(a.prototype), "initialize", this).call(this, e), Object.defineProperties(e, {
                                localAbsoluteClockTime: {
                                    get: function() {
                                        return t.localAbsoluteClockTime;
                                    }
                                },
                                localAbsoluteClockJitterTime: {
                                    get: function() {
                                        return t.localAbsoluteClockJitterTime;
                                    },
                                    set: function(e) {
                                        return t.localAbsoluteClockJitterTime = e;
                                    }
                                },
                                stageStateId: {
                                    get: function() {
                                        return t.stageStateId;
                                    }
                                },
                                stageActiveNodeCount: {
                                    get: function() {
                                        return t.stageActiveNodeCount;
                                    }
                                },
                                stageMasterNodeCount: {
                                    get: function() {
                                        return t.stageMasterNodeCount;
                                    }
                                },
                                stageIsStopped: {
                                    get: function() {
                                        return t.stageIsStopped;
                                    }
                                },
                                stageIsPlaying: {
                                    get: function() {
                                        return t.stageIsPlaying;
                                    }
                                },
                                stageIsPaused: {
                                    get: function() {
                                        return t.stageIsPaused;
                                    }
                                },
                                stageInitialAbsoluteStartTime: {
                                    get: function() {
                                        return t.stageInitialAbsoluteStartTime;
                                    }
                                },
                                stageAbsoluteStartTime: {
                                    get: function() {
                                        return t.stageAbsoluteStartTime;
                                    }
                                },
                                stageAbsolutePauseTime: {
                                    get: function() {
                                        return t.stageAbsolutePauseTime;
                                    }
                                },
                                nodeId: {
                                    get: function() {
                                        return t.nodeId;
                                    }
                                },
                                nodeTimeoutSec: {
                                    get: function() {
                                        return t.nodeTimeoutSec;
                                    },
                                    set: function(e) {
                                        return t.nodeTimeoutSec = e;
                                    }
                                },
                                isMaster: {
                                    get: function() {
                                        return t.isMaster;
                                    }
                                },
                                isSlave: {
                                    get: function() {
                                        return t.isSlave;
                                    }
                                },
                                message: {
                                    get: function() {
                                        return t.message;
                                    }
                                },
                                playlist: {
                                    get: function() {
                                        return t.playlist;
                                    }
                                }
                            }), e.play = function() {
                                return t.__play__();
                            }, e.pause = function() {
                                return t.__pause__();
                            }, e.stop = function() {
                                return t.__stop__();
                            }, e.seekTo = function(e) {
                                return t.__seekTo__(e);
                            }, e.seekPlaylistTo = function(e) {
                                return t.__seekPlaylistTo__(e);
                            }, e.seekPlaylistPositionTo = function(e) {
                                return t.__seekPlaylistTo__(e);
                            }, e.seekToPrevPlaylistItem = function() {
                                return t.__seekToPrevPlaylistItem__();
                            }, e.seekToNextPlaylistItem = function() {
                                return t.__seekToNextPlaylistItem__();
                            }, e.sync = function(e) {
                                return t.__sync__(e);
                            }, e.setPlaylist = function(e) {
                                return t.__setPlaylist__(e);
                            }, e.setMessage = function(e) {
                                return t.__setMessage__(e);
                            }, this.on("songleSyncStageNodeChange", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageNodeEnter", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageNodeLeave", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncStageStateChange", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsStopped && (t.stateWorker.resetState({
                                    force: !0
                                }), t.__defaultMediaChange__());
                            }), this.on("songleSyncStageAbsoluteStartTimeUpdate", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsPaused || t.stateWorker.resetState();
                            }), this.on("songleSyncStageAbsolutePauseTimeUpdate", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stageIsPaused || t.stateWorker.resetState();
                            }), this.on("songleSyncMessage", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncPlaylistUpdate", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.stateWorker.resetState({
                                    force: !0
                                }), t.__defaultMediaChange__();
                            }), this.on("songleSyncPlaylistItemEnter", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.__defaultMediaChange__();
                            }), this.on("songleSyncPlaylistItemLeave", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data);
                            }), this.on("songleSyncPlaylistFinish", function(e) {
                                u.default.debug("Invoke '".concat(e.type, "'"), e.data), t.__stop__(), t.player.mediaCaches.forEach(function(e) {
                                    e.stop();
                                });
                            }), Promise.resolve().then(function() {
                                return t.clockWorker.runTask();
                            }).then(function() {
                                return t.stageWorker.runTask();
                            }).then(function() {
                                return t.stateWorker.runTask();
                            }).then(function() {
                                return t.mediaWorker.runTask();
                            }).then(function() {
                                return t.historyWorker.runTask();
                            }).then(function() {
                                t.clockWorker.start(), t.stageWorker.start(), t.stateWorker.start(), t.mediaWorker.start(), t.historyWorker.start();
                            });
                        }
                    },
                    {
                        key: "mediaTryMount",
                        value: function(e, t) {
                            m(O(a.prototype), "mediaTryMount", this).call(this, e), this.isSlave || 0 == this.playlist.items.length && (u.default.warn("If you want to change a media on the Songle Sync, please use 'SongleAPI.Player#setPlaylist' instead of 'SongleAPI.Player#useMedia'"), this.__setPlaylist__(t.newMediaSourceUrl));
                        }
                    },
                    {
                        key: "__defaultMediaChange__",
                        value: function() {
                            var e = this;
                            if (this.__autoUseMedia__) {
                                var t = this.__getCurrentPlaylistItem__();
                                if (!this.player.media || this.player.media.sourceUrl !== t.mediaSourceUrl) {
                                    var n;
                                    switch(!0){
                                        case null != t && null != t.options && null != t.options.useMedia:
                                            n = t.options.useMedia;
                                            break;
                                        case null != this.__autoUseMediaOptions__:
                                            n = this.__autoUseMediaOptions__;
                                            break;
                                        default:
                                            n = {
                                                headless: null == this.player.mediaElement
                                            };
                                    }
                                    this.player.useMedia(t, n).then(function() {
                                        e.player.mediaCaches.forEach(function(e) {
                                            e.isMounted || e.stop();
                                        });
                                    });
                                }
                            }
                        }
                    },
                    {
                        key: "__getPlaylistDurationTime__",
                        value: function() {
                            var e = 0;
                            return ((e = this.stageWorker.__playlistDurationTime__) < 0 || isNaN(e)) && (e = 0), e;
                        }
                    },
                    {
                        key: "__getPlaylistPositionTime__",
                        value: function() {
                            var e = 0;
                            switch(this.stageStateId){
                                case 0:
                                    e = 0;
                                    break;
                                case 1:
                                    e = this.localAbsoluteClockTime - this.stageAbsoluteStartTime;
                                    break;
                                case 2:
                                    e = this.stageAbsolutePauseTime - this.stageAbsoluteStartTime;
                            }
                            return (e < 0 || isNaN(e)) && (e = 0), e > this.stageWorker.__playlistDurationTime__ && (e = this.stageWorker.__playlistDurationTime__), e;
                        }
                    },
                    {
                        key: "__getCurrentPlaylistItem__",
                        value: function() {
                            var e = this.__getPlaylistPositionTime__(), t = this.__cachedCurrentPlaylistItem__;
                            if (null != t && e >= t.relativeStartTime && e < t.relativeEndTime) return t;
                            for(var n = 0, r = this.stageWorker.__playlistItems__.length - 1; n <= r;){
                                var i = Math.floor((n + r) / 2), a = this.stageWorker.__playlistItems__[i];
                                if (e >= a.relativeStartTime && e < a.relativeEndTime) {
                                    this.__cachedCurrentPlaylistItem__ = a;
                                    break;
                                }
                                e >= a.relativeEndTime ? n = i + 1 : r = i - 1;
                            }
                            return this.__cachedCurrentPlaylistItem__;
                        }
                    },
                    {
                        key: "__getPlaylistMediaState__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            if (this.localAbsoluteClockTime - this.stageAbsoluteStartTime < 0) return 0;
                            var t = this.__getPlaylistPositionTime__();
                            if (this.stageIsPlaying) {
                                if (t >= e.mediaStartTime && t < e.mediaStartTime + e.mediaDurationTime) return 1;
                            } else if (this.stageIsPaused && t >= e.mediaStartTime && t < e.mediaStartTime + e.mediaDurationTime) return 2;
                            return 0;
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsStopped__",
                        value: function() {
                            return 0 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsPlaying__",
                        value: function() {
                            return 1 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaIsPaused__",
                        value: function() {
                            return 2 == this.__getPlaylistMediaState__();
                        }
                    },
                    {
                        key: "__getPlaylistMediaDurationTime__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            var t = e.mediaDurationTime;
                            return t < 0 && (t = 0), t;
                        }
                    },
                    {
                        key: "__getPlaylistMediaPositionTime__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            if (null == e) return 0;
                            var t = this.__getPlaylistPositionTime__() - e.mediaStartTime;
                            return t < 0 && (t = 0), t > this.__getPlaylistMediaDurationTime__() && (t = this.__getPlaylistMediaDurationTime__()), t;
                        }
                    },
                    {
                        key: "__setPlaylist__",
                        value: function(e) {
                            switch(s.default.typeOf(e)){
                                case "array":
                                    e = e.map(function(e) {
                                        return "string" == s.default.typeOf(e) ? {
                                            mediaSourceUrl: e
                                        } : e;
                                    });
                                    break;
                                case "object":
                                    e = [
                                        e
                                    ];
                                    break;
                                case "string":
                                    e = [
                                        {
                                            mediaSourceUrl: e
                                        }
                                    ];
                            }
                            return y.PlaylistAPI.createPlaylist(this, e);
                        }
                    },
                    {
                        key: "__setMessage__",
                        value: function(e) {
                            if (!this.isSlave) return y.MessageAPI.updateMessage(this, e);
                        }
                    },
                    {
                        key: "__play__",
                        value: function() {
                            this.__sync__({
                                stateId: 1
                            });
                        }
                    },
                    {
                        key: "__pause__",
                        value: function() {
                            this.__sync__({
                                stateId: 2
                            });
                        }
                    },
                    {
                        key: "__stop__",
                        value: function() {
                            this.__sync__({
                                stateId: 0
                            });
                        }
                    },
                    {
                        key: "__seekTo__",
                        value: function(e) {
                            var t = this.__getCurrentPlaylistItem__();
                            null != t && this.__seekPlaylistTo__(t.mediaStartTime + e);
                        }
                    },
                    {
                        key: "__seekPlaylistTo__",
                        value: function(e) {
                            this.stageIsPlaying ? this.__sync__({
                                absoluteStartTime: this.localAbsoluteClockTime - e
                            }) : this.__sync__({
                                stateId: 2,
                                absoluteStartTime: this.localAbsoluteClockTime,
                                absolutePauseTime: this.localAbsoluteClockTime + e
                            });
                        }
                    },
                    {
                        key: "__seekToPrevPlaylistItem__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            e.prev && this.__seekPlaylistTo__(e.prev.startTime);
                        }
                    },
                    {
                        key: "__seekToNextPlaylistItem__",
                        value: function() {
                            var e = this.__getCurrentPlaylistItem__();
                            e.next && this.__seekPlaylistTo__(e.next.startTime);
                        }
                    },
                    {
                        key: "__sync__",
                        value: (t = i.a.mark(function e() {
                            var t, n = arguments;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (t = n.length > 0 && void 0 !== n[0] ? n[0] : {}, !this.isSlave) {
                                            e.next = 3;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        return e.t0 = this.stageWorker, e.next = 6, y.StageAPI.updateStage(this, t);
                                    case 6:
                                        return e.t1 = e.sent, e.next = 9, e.t0.update.call(e.t0, e.t1);
                                    case 9:
                                        this.stateWorker.update(), this.mediaWorker.update();
                                    case 11:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        }), n = function() {
                            var e = this, n = arguments;
                            return new Promise(function(r, i) {
                                var a = t.apply(e, n);
                                function o(e) {
                                    v(a, r, i, o, u, "next", e);
                                }
                                function u(e) {
                                    v(a, r, i, o, u, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function() {
                            return n.apply(this, arguments);
                        })
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return a.Name;
                        }
                    },
                    {
                        key: "clockWorker",
                        get: function() {
                            return this.__clockWorker__;
                        }
                    },
                    {
                        key: "stageWorker",
                        get: function() {
                            return this.__stageWorker__;
                        }
                    },
                    {
                        key: "stateWorker",
                        get: function() {
                            return this.__stateWorker__;
                        }
                    },
                    {
                        key: "mediaWorker",
                        get: function() {
                            return this.__mediaWorker__;
                        }
                    },
                    {
                        key: "historyWorker",
                        get: function() {
                            return this.__historyWorker__;
                        }
                    },
                    {
                        key: "localAbsoluteClockTime",
                        get: function() {
                            return s.default.currentClockTime + this.clockWorker.networkJitterTime + this.localAbsoluteClockJitterTime;
                        }
                    },
                    {
                        key: "localAbsoluteClockJitterTime",
                        get: function() {
                            return this.__localAbsoluteClockJitterTime__;
                        },
                        set: function(e) {
                            var t = -this.__getPlaylistDurationTime__(), n = this.__getPlaylistDurationTime__();
                            e < t && (u.default.warn("Couldn't set 'SongleAPI.Player#localAbsoluteClockJitterTime' less than ".concat(t, " seconds")), e = t), e > n && (u.default.warn("Couldn't set 'SongleAPI.Player#localAbsoluteClockJitterTime' more than ".concat(n, " seconds")), e = n), this.__localAbsoluteClockJitterTime__ = e;
                        }
                    },
                    {
                        key: "stageId",
                        get: function() {
                            return this.stageWorker.__stageId__;
                        }
                    },
                    {
                        key: "stageActiveNodeCount",
                        get: function() {
                            return this.stageWorker.__activeNodeCount__;
                        }
                    },
                    {
                        key: "stageMasterNodeCount",
                        get: function() {
                            return this.stageWorker.__masterNodeCount__;
                        }
                    },
                    {
                        key: "stageStateId",
                        get: function() {
                            return this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsStopped",
                        get: function() {
                            return 0 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsPlaying",
                        get: function() {
                            return 1 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageIsPaused",
                        get: function() {
                            return 2 == this.stageWorker.__stateId__;
                        }
                    },
                    {
                        key: "stageInitialAbsoluteStartTime",
                        get: function() {
                            return this.stageWorker.__initialAbsoluteStartTime__;
                        }
                    },
                    {
                        key: "stageAbsoluteStartTime",
                        get: function() {
                            return this.stageWorker.__absoluteStartTime__;
                        }
                    },
                    {
                        key: "stageAbsolutePauseTime",
                        get: function() {
                            return this.stageWorker.__absolutePauseTime__;
                        }
                    },
                    {
                        key: "nodeId",
                        get: function() {
                            return o.default.fetch("".concat(a.Name, ".nodeId"), c()());
                        }
                    },
                    {
                        key: "nodeTimeoutSec",
                        get: function() {
                            return this.__nodeTimeoutSec__;
                        },
                        set: function(e) {
                            30 > e && (u.default.warn("Couldn't set 'SongleAPI.Player#nodeTimeoutSec' less than ".concat(30, " seconds")), e = 30), 3600 < e && (u.default.warn("Couldn't set 'SongleAPI.Player#nodeTimeoutSec' more than ".concat(3600, " seconds")), e = 3600), this.__nodeTimeoutSec__ = e;
                        }
                    },
                    {
                        key: "accessToken",
                        get: function() {
                            return this.player.accessToken;
                        }
                    },
                    {
                        key: "secretToken",
                        get: function() {
                            return this.player.secretToken;
                        }
                    },
                    {
                        key: "isMaster",
                        get: function() {
                            return !s.default.stringIsBlank(this.secretToken);
                        }
                    },
                    {
                        key: "isSlave",
                        get: function() {
                            return s.default.stringIsBlank(this.secretToken);
                        }
                    },
                    {
                        key: "message",
                        get: function() {
                            return this.stageWorker.__message__;
                        }
                    },
                    {
                        key: "playlist",
                        get: function() {
                            var e = this.__getPlaylistDurationTime__(), t = this.__getPlaylistMediaDurationTime__(), n = this.__getPlaylistPositionTime__(), r = this.__getPlaylistMediaPositionTime__(), i = this.__getCurrentPlaylistItem__(), a = this.stageWorker.__playlistItems__;
                            return {
                                absoluteStartTime: this.stageAbsoluteStartTime,
                                mediaDurationTime: t,
                                durationTime: e,
                                mediaPositionTime: r,
                                positionTime: n,
                                currentItem: i,
                                items: a
                            };
                        }
                    }
                ]), a;
            }(a.default);
            t.default = C;
        },
        66: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1), i = n(67), a = (n(83), n(68)), o = n(32), u = n(57), s = n(58), l = n(59);
            function c(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(r, a) {
                    var o = n.controls, u = t.relationships.uri.data.attributes.sourceId;
                    i.default.importClass().then(function(t) {
                        t.create(e, u, {
                            autoplay: !1,
                            defaultNoComment: !0,
                            noController: !o,
                            noHeader: !0,
                            noLinkToNiconico: !0,
                            noRelatedVideo: !0,
                            noShare: !0,
                            noTags: !0,
                            width: "100%",
                            height: "100%",
                            onError: function(e) {
                                return a(e);
                            },
                            onSuccess: function(e) {
                                return r(e);
                            }
                        });
                    }, function() {
                        a();
                    });
                });
            }
            function f(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, o) {
                    var u = !!n.controls, s = !!n.playsinline, l = t.relationships.uri.data.attributes.sourceId;
                    if (null != n.altSourceUrl) {
                        var c = n.altSourceUrl.match(/watch\?v=(.+)/);
                        l = c[1];
                    }
                    a.default.importClass().then(function(t) {
                        var n = r.default.global.document.createElement("div");
                        e.appendChild(n), new t.Player(n, {
                            events: {
                                onError: function(e) {
                                    return o(e);
                                },
                                onReady: function(e) {
                                    return i(e.target);
                                }
                            },
                            playerVars: {
                                autohide: "0",
                                autoplay: "0",
                                cc_load_policy: "0",
                                controls: u ? "1" : "0",
                                disablekb: "1",
                                enablejsapi: "1",
                                fs: u ? "1" : "0",
                                hl: "0",
                                html5: "1",
                                iv_load_policy: "3",
                                loop: "0",
                                modestbranding: "1",
                                playsinline: s ? "1" : "0",
                                rel: "0",
                                showinfo: "0",
                                start: "0"
                            },
                            videoId: l,
                            width: "100%",
                            height: "100%"
                        }, function() {
                            o();
                        });
                    });
                });
            }
            function _(e, t) {
                return new Promise(function(e, t) {});
            }
            function p(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return new Promise(function(i, a) {
                    var o = n.altSourceUrl, u = n.controls, s = t.relationships.uri.data.attributes.endpointScheme, l = t.relationships.uri.data.attributes.endpointHost, c = t.relationships.uri.data.attributes.endpointPath, f = r.default.global.document.createElement("audio");
                    f.autoplay = !1, f.controls = !!u, f.crossorigin = "anonymous", f.loop = !1, f.muted = !1, f.preload = "auto", f.src = o || "".concat(s, "://").concat(l).concat(c).concat(t.attributes.code, "/u"), f.addEventListener("abort", function(e) {
                        return a(e);
                    }), f.addEventListener("error", function(e) {
                        return a(e);
                    }), f.addEventListener("loadstart", function(e) {
                        return i(e.target);
                    }), e.appendChild(f);
                });
            }
            var d = {
                create: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return new Promise(function(i, a) {
                        if (n.headless) {
                            var d = new o.default(t);
                            d.initialize(e).then(function() {
                                return i(d);
                            }, function() {
                                return a();
                            });
                        } else {
                            var h = null != n.element ? n.element : r.default.global.document.body, y = r.default.global.document.createElement("div");
                            y.style.position = "absolute", y.style.opacity = 0, y.style.left = "0px", y.style.top = "0px", y.style.width = "1px", y.style.height = "1px", y.style.zIndex = 0, h.appendChild(y);
                            var v = t.relationships.uri.data.attributes.sourceHost;
                            if (null != n.altSourceUrl) v = new RegExp("www.youtube.com").test(n.altSourceUrl) ? "www.youtube.com" : "";
                            switch(v){
                                case "www.nicovideo.jp":
                                    return c(y, t, n).then(function(n) {
                                        var r = new u.default(y, n, t);
                                        r.initialize(e).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                                case "soundcloud.com":
                                    return _(y, t, n).then(function(e) {}, function(e) {
                                        a(e);
                                    });
                                case "www.youtube.com":
                                    return f(y, t, n).then(function(n) {
                                        var r = new s.default(y, n, t);
                                        r.initialize(e).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                                default:
                                    return p(y, t, n).then(function(n) {
                                        var r = new l.default(y, n, t);
                                        r.initialize(e).then(function() {
                                            return i(r);
                                        }, function() {
                                            return a();
                                        });
                                    }, function(e) {
                                        a(e);
                                    });
                            }
                        }
                    });
                }
            };
            t.default = d;
        },
        67: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(30), i = n(1), a = "https://secure-dcdn.cdn.nimg.jp/extplayerv/embed/js/api.js";
            var o = {
                importClass: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function(t, n) {
                        if (i.default.NnFactoryClass) return t(i.default.NnFactoryClass);
                        var o = e.element || i.default.global.document.body;
                        i.default.global.onNicoPlayerFactoryReady = function(e) {
                            i.default.NnFactoryClass = i.default.NnFactoryClass || i.default.global.NN || e;
                        }, o.appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return n();
                            },
                            onError: function(e) {
                                return n();
                            },
                            onLoad: function(e) {
                                var n = setInterval(function() {
                                    i.default.NnFactoryClass && i.default.NnFactoryClass.create && (clearInterval(n), t(i.default.NnFactoryClass));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t.default = o;
        },
        68: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(30), i = n(1), a = "https://www.youtube.com/iframe_api";
            var o = {
                importClass: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return new Promise(function(t, n) {
                        if (i.default.YtFactoryClass) return t(i.default.YtFactoryClass);
                        var o = e.element || i.default.global.document.body;
                        i.default.global.onYouTubeIframeAPIReady = function(e) {
                            i.default.YtFactoryClass = i.default.YtFactoryClass || i.default.global.YT || e;
                        }, o.appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return n();
                            },
                            onError: function(e) {
                                return n();
                            },
                            onLoad: function(e) {
                                var n = setInterval(function() {
                                    i.default.YtFactoryClass && i.default.YtFactoryClass.Player && (clearInterval(n), t(i.default.YtFactoryClass));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t.default = o;
        },
        69: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(2), i = n(1);
            function a(e) {
                try {
                    return i.default.isStandalone ? null : i.default.global.localStorage.getItem(e);
                } catch (t) {
                    return r.default.error(t), null;
                }
            }
            function o(e, t) {
                try {
                    return i.default.isStandalone ? null : i.default.global.localStorage.setItem(e, t);
                } catch (n) {
                    return r.default.error(n), null;
                }
            }
            var u = {
                fetch: function(e, t) {
                    var n = a(e) || t;
                    return o(e, n), n;
                },
                get: a,
                set: o
            };
            t.default = u;
        },
        70: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(28), o = (n(2), n(1)), u = n(20);
            function s(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function l(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            s(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            s(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function f(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function _(e, t) {
                return (_ = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = h(e);
                    if (t) {
                        var i = h(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return d(this, n);
                };
            }
            function d(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var y = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && _(e, t);
                }(h, e);
                var t, n, r, a, s, d = p(h);
                function h() {
                    var e;
                    c(this, h);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = d.call.apply(d, [
                        this
                    ].concat(n))).__histories__ = [
                        0
                    ], e;
                }
                return t = h, n = [
                    {
                        key: "runTask",
                        value: (s = l(i.a.mark(function e() {
                            var t;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.next = 2, this.update();
                                    case 2:
                                        (t = 2 * this.intervalTime + this.__random__(0, 1e3)) < this.minIntervalTime && (t = this.minIntervalTime), t > this.maxIntervalTime && (t = this.maxIntervalTime), this.intervalTime = t;
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function() {
                            return s.apply(this, arguments);
                        })
                    },
                    {
                        key: "update",
                        value: (a = l(i.a.mark(function e() {
                            var t, n, r, a;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        t = 0;
                                    case 1:
                                        if (!(t < 3)) {
                                            e.next = 11;
                                            break;
                                        }
                                        return n = o.default.currentClockTime, e.next = 5, u.ClockAPI.getClock(this.plugin);
                                    case 5:
                                        r = e.sent, a = o.default.currentClockTime, this.__histories__.push(r - (a + n) / 2);
                                    case 8:
                                        ++t, e.next = 1;
                                        break;
                                    case 11:
                                        this.__histories__ = this.__histories__.sort(function(e, t) {
                                            return e - t;
                                        });
                                    case 12:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function() {
                            return a.apply(this, arguments);
                        })
                    },
                    {
                        key: "__random__",
                        value: function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1) + e);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    },
                    {
                        key: "networkJitterTime",
                        get: function() {
                            return this.__histories__[Math.floor(this.__histories__.length / 2)];
                        }
                    }
                ], f(t.prototype, n), r && f(t, r), h;
            }(a.default);
            t.default = y;
        },
        71: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(28), o = n(2), u = n(1), s = n(20);
            function l(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function c(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            l(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            l(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function _(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function p(e, t) {
                return (p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function d(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = y(e);
                    if (t) {
                        var i = y(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return h(this, n);
                };
            }
            function h(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function y(e) {
                return (y = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var v = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && p(e, t);
                }(y, e);
                var t, n, r, a, l, h = d(y);
                function y() {
                    var e;
                    f(this, y);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = h.call.apply(h, [
                        this
                    ].concat(n))).__activeNodeCount__ = 0, e.__masterNodeCount__ = 0, e.__stateId__ = 0, e.__initialAbsoluteStartTime__ = 0, e.__absoluteStartTime__ = 0, e.__absolutePauseTime__ = 0, e.__playlistDurationTime__ = 0, e.__playlistPositionTime__ = 0, e.__playlistItems__ = [], e;
                }
                return t = y, n = [
                    {
                        key: "runTask",
                        value: (l = c(i.a.mark(function e() {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.t0 = this, e.next = 3, s.StageAPI.getStage(this.plugin);
                                    case 3:
                                        return e.t1 = e.sent, e.next = 6, e.t0.update.call(e.t0, e.t1);
                                    case 6:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function() {
                            return l.apply(this, arguments);
                        })
                    },
                    {
                        key: "update",
                        value: (a = c(i.a.mark(function e(t) {
                            var n, r, a;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return n = t.id, r = t.attributes.createdAt, a = t.attributes.updatedAt, this.__updateNodeCount__(t), this.__updateState__(t), this.__updateInitialAbsoluteStartTime__(t), this.__updateAbsoluteStartTime__(t), this.__updateAbsolutePauseTime__(t), e.next = 10, this.__updateMessage__(t);
                                    case 10:
                                        return e.next = 12, this.__updatePlaylist__(t);
                                    case 12:
                                        this.__stageId__ = n, this.__createdAt__ = r, this.__updatedAt__ = a;
                                    case 15:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function(e) {
                            return a.apply(this, arguments);
                        })
                    },
                    {
                        key: "__updateNodeCount__",
                        value: function(e) {
                            var t = e.attributes.activeNodeCount, n = e.attributes.masterNodeCount, r = t > this.__activeNodeCount__, i = t < this.__activeNodeCount__;
                            this.__activeNodeCount__ = t, this.__masterNodeCount__ = n;
                            var a = {
                                stageActiveNodeCount: t,
                                stageMasterNodeCount: n
                            };
                            [
                                {
                                    source: "stageActiveNodeCount",
                                    target: "activeNodeCount",
                                    warning: !0
                                },
                                {
                                    source: "stageMasterNodeCount",
                                    target: "masterNodeCount",
                                    warning: !0
                                }
                            ].forEach(function(e) {
                                Object.defineProperty(a, e.target, {
                                    get: function() {
                                        return e.warning && o.default.warn("'".concat(e.target, "' is deprecated API, please use '").concat(e.source, "' in 'songleSyncStageNode[Change|Enter|Leave]' trap")), a[e.source];
                                    }
                                });
                            }), (r || i) && this.player.invokeTrap("songleSyncStageNodeChange", {
                                target: this.plugin,
                                data: a
                            }), r && this.player.invokeTrap("songleSyncStageNodeEnter", {
                                target: this.plugin,
                                data: a
                            }), i && this.player.invokeTrap("songleSyncStageNodeLeave", {
                                target: this.plugin,
                                data: a
                            });
                        }
                    },
                    {
                        key: "__updateState__",
                        value: function(e) {
                            var t = e.attributes.stateId;
                            t != this.__stateId__ && (this.__stateId__ = t, this.player.invokeTrap("songleSyncStageStateChange", {
                                target: this.plugin,
                                data: {
                                    stageStateId: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateInitialAbsoluteStartTime__",
                        value: function(e) {
                            var t = e.attributes.initialAbsoluteStartTimeMs;
                            t != this.__initialAbsoluteStartTime__ && (this.__initialAbsoluteStartTime__ = t, this.player.invokeTrap("songleSyncStageInitialAbsoluteStartTime", {
                                target: this.plugin,
                                data: {
                                    stageInitialAbsoluteStartTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateAbsoluteStartTime__",
                        value: function(e) {
                            var t = e.attributes.absoluteStartTimeMs;
                            t != this.__absoluteStartTime__ && (this.__absoluteStartTime__ = t, this.player.invokeTrap("songleSyncStageAbsoluteStartTimeUpdate", {
                                target: this.plugin,
                                data: {
                                    stageAbsoluteStartTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateAbsolutePauseTime__",
                        value: function(e) {
                            var t = e.attributes.absolutePauseTimeMs;
                            t != this.__absolutePauseTime__ && (this.__absolutePauseTime__ = t, this.player.invokeTrap("songleSyncStageAbsolutePauseTimeUpdate", {
                                target: this.plugin,
                                data: {
                                    stageAbsolutePauseTime: t
                                }
                            }));
                        }
                    },
                    {
                        key: "__updateMessage__",
                        value: function(e) {
                            var t = this;
                            return new Promise(function(n, r) {
                                var i = e.attributes.messageCreatedAt, a = e.attributes.messageUpdatedAt;
                                return null == i || null == a || i === t.__messageCreatedAt__ && a === t.__messageUpdatedAt__ ? n() : void s.MessageAPI.getMessage(t.plugin).then(function(e) {
                                    var r = e.attributes.data;
                                    return t.__message__ = r, t.__messageCreatedAt__ = i, t.__messageUpdatedAt__ = a, u.default.stringIsBlank(r) || t.player.invokeTrap("songleSyncMessage", {
                                        target: t.plugin,
                                        data: {
                                            message: r
                                        }
                                    }), n();
                                }, function(e) {
                                    return o.default.error("StageWorker#error", e), r(e);
                                });
                            });
                        }
                    },
                    {
                        key: "__updatePlaylist__",
                        value: function(e) {
                            var t = this;
                            return new Promise(function(n, r) {
                                var i = e.attributes.playlistDurationTimeMs, a = e.attributes.playlistPositionTimeMs, u = e.attributes.playlistCreatedAt, l = e.attributes.playlistUpdatedAt;
                                return null == u || null == l || u === t.__playlistCreatedAt__ && l === t.__playlistUpdatedAt__ ? n() : void s.PlaylistAPI.getPlaylist(t.plugin).then(function(e) {
                                    return t.__playlistDurationTime__ = i, t.__playlistPositionTime__ = a, t.__playlistItems__ = e, t.__playlistCreatedAt__ = u, t.__playlistUpdatedAt__ = l, t.player.invokeTrap("songleSyncPlaylistUpdate", {
                                        target: t.plugin,
                                        data: {
                                            playlistItems: e
                                        }
                                    }), n();
                                }, function(e) {
                                    return o.default.error("StageWorker#error", e), r(e);
                                });
                            });
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 3e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    }
                ], _(t.prototype, n), r && _(t, r), y;
            }(a.default);
            t.default = v;
        },
        72: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(28), i = n(2);
            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function o(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function u(e, t) {
                return (u = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = c(e);
                    if (t) {
                        var i = c(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return l(this, n);
                };
            }
            function l(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function c(e) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var f = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && u(e, t);
                }(c, e);
                var t, n, r, l = s(c);
                function c() {
                    var e;
                    a(this, c);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = l.call.apply(l, [
                        this
                    ].concat(n))).__beforePlaylistItemIndex__ = -1, e.__enterStates__ = [], e.__leaveStates__ = [], e.__finishState__ = !1, e.__stopNumberOfTrails__ = 0, e.__playNumberOfTrails__ = 0, e.__pauseNumberOfTrails__ = 0, e.__stopNumberOfTrailsThreshold__ = 0, e.__playNumberOfTrailsThreshold__ = 0, e.__pauseNumberOfTrailsThreshold__ = 0, e.skipMediaStateChange = !1, e;
                }
                return t = c, n = [
                    {
                        key: "resetState",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = null != e.force && e.force, n = this.plugin.__getCurrentPlaylistItem__();
                            (null == n || t || this.__beforePlaylistItemIndex__ != n.index) && (this.__invokeAllPlaylistItemLeaveTrap__(), this.__beforePlaylistItemIndex__ = -1, this.__enterStates__ = [], this.__leaveStates__ = [], this.__finishState__ = !1, i.default.debug("Playlist trap states was reseted"));
                        }
                    },
                    {
                        key: "runTask",
                        value: function() {
                            this.update();
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            this.__invokePlaylistTraps__(), null != this.player.media && this.player.media.sourceUrl === this.plugin.playlist.currentItem.mediaSourceUrl && (this.skipMediaStateChange || (this.plugin.__getPlaylistMediaIsStopped__() ? this.__tryStoppingMedia__() : this.plugin.__getPlaylistMediaIsPlaying__() ? this.__tryPlayingMedia__() : this.plugin.__getPlaylistMediaIsPaused__() && this.__tryPausingMedia__()));
                        }
                    },
                    {
                        key: "__tryStoppingMedia__",
                        value: function() {
                            if (this.player.media.isPaused) return this.__stopNumberOfTrails__ = 0, void (this.__stopNumberOfTrailsThreshold__ = 0);
                            this.__stopNumberOfTrails__ += 1, this.__stopNumberOfTrails__ > this.__stopNumberOfTrailsThreshold__ && (this.player.media.stop(), i.default.debug("The 'stop' function of media was called by the Songle Sync"), this.__stopNumberOfTrailsThreshold__ = 2 * this.__stopNumberOfTrails__);
                        }
                    },
                    {
                        key: "__tryPlayingMedia__",
                        value: function() {
                            if (this.player.media.isPlaying) return this.__playNumberOfTrails__ = 0, void (this.__playNumberOfTrailsThreshold__ = 0);
                            this.__playNumberOfTrails__ += 1, this.__playNumberOfTrails__ > this.__playNumberOfTrailsThreshold__ && (this.player.media.play(), i.default.debug("The 'play' function of media was called by the Songle Sync"), this.__playNumberOfTrailsThreshold__ = 2 * this.__playNumberOfTrails__);
                        }
                    },
                    {
                        key: "__tryPausingMedia__",
                        value: function() {
                            if (this.player.media.isPaused) return this.__pauseNumberOfTrails__ = 0, void (this.__pauseNumberOfTrailsThreshold__ = 0);
                            this.__pauseNumberOfTrails__ += 1, this.__pauseNumberOfTrails__ > this.__pauseNumberOfTrailsThreshold__ && (this.player.media.pause(), i.default.debug("The 'pause' function of media was called by the Songle Sync"), this.__pauseNumberOfTrailsThreshold__ = 2 * this.__pauseNumberOfTrails__);
                        }
                    },
                    {
                        key: "__invokePlaylistTraps__",
                        value: function() {
                            var e = this;
                            this.plugin.stageIsPlaying && (this.plugin.playlist.items.forEach(function(t) {
                                e.plugin.playlist.positionTime >= t.relativeStartTime && e.plugin.playlist.positionTime < t.relativeEndTime ? e.__invokePlaylistItemEnterTrap__(t) : e.__invokePlaylistItemLeaveTrap__(t);
                            }), this.__invokePlaylistFinishTrap__());
                        }
                    },
                    {
                        key: "__invokeAllPlaylistItemEnterTrap__",
                        value: function() {
                            var e = this;
                            this.plugin.playlist.items.forEach(function(t) {
                                e.__invokePlaylistItemEnterTrap__(t);
                            });
                        }
                    },
                    {
                        key: "__invokeAllPlaylistItemLeaveTrap__",
                        value: function() {
                            var e = this;
                            this.plugin.playlist.items.forEach(function(t) {
                                e.__invokePlaylistItemLeaveTrap__(t);
                            });
                        }
                    },
                    {
                        key: "__invokePlaylistItemEnterTrap__",
                        value: function(e) {
                            this.__enterStates__[e.index] || this.__leaveStates__[e.index] || (this.player.invokeTrap("songleSyncPlaylistItemEnter", {
                                target: this.plugin,
                                data: {
                                    playlistItem: e
                                }
                            }), this.__beforePlaylistItemIndex__ = this.plugin.playlist.currentItem.index, this.__enterStates__[e.index] = !0);
                        }
                    },
                    {
                        key: "__invokePlaylistItemLeaveTrap__",
                        value: function(e) {
                            this.__enterStates__[e.index] && !this.__leaveStates__[e.index] && (this.player.invokeTrap("songleSyncPlaylistItemLeave", {
                                target: this.plugin,
                                data: {
                                    playlistItem: e
                                }
                            }), this.__beforePlaylistItemIndex__ = this.plugin.playlist.currentItem.index, this.__leaveStates__[e.index] = !0);
                        }
                    },
                    {
                        key: "__invokePlaylistFinishTrap__",
                        value: function() {
                            this.__finishState__ || this.plugin.playlist.positionTime != this.plugin.playlist.durationTime || (this.player.invokeTrap("songleSyncPlaylistFinish", {
                                target: this.plugin
                            }), this.__finishState__ = !0);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 100;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 100;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    }
                ], o(t.prototype, n), r && o(t, r), c;
            }(r.default);
            t.default = f;
        },
        73: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(28), i = n(32), a = (n(59), n(57), n(58), n(2)), o = n(1);
            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function c(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = _(e);
                    if (t) {
                        var i = _(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return f(this, n);
                };
            }
            function f(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function _(e) {
                return (_ = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var p = Math.floor(5.5), d = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t);
                }(_, e);
                var t, n, r, f = c(_);
                function _() {
                    var e;
                    u(this, _);
                    for(var t = arguments.length, n = new Array(t), r = 0; r < t; r++)n[r] = arguments[r];
                    return (e = f.call.apply(f, [
                        this
                    ].concat(n))).__integralOffsetTime__ = 0, e.__stateWorkerRestartTime__ = 0, e.__minAllowableOffsetTimeThreshold__ = 200, e.__maxAllowableOffsetTimeThreshold__ = 2e3, e.__allowableOffsetTimeThreshold__ = 200, e.__offsetTime__ = 0, e.__negativeSeekingCount__ = 0, e.__positiveSeekingCount__ = 0, e.__syncedCount__ = 0, e.__syncedCountThreshold__ = p, e;
                }
                return t = _, n = [
                    {
                        key: "runTask",
                        value: function() {
                            this.update();
                        }
                    },
                    {
                        key: "update",
                        value: function() {
                            if (this.plugin.__getPlaylistMediaIsPlaying__()) {
                                if (null != this.player && null != this.player.media) {
                                    var e = this.plugin.__getPlaylistMediaPositionTime__();
                                    if (this.__offsetTime__ = e - this.player.media.positionTime, Math.abs(this.offsetTime) < 1e3 ? this.__integralOffsetTime__ += this.offsetTime : this.__integralOffsetTime__ = 0, !this.__restartStateWorker__()) {
                                        if (this.offsetTime < this.negativeOffsetTimeThreshold) {
                                            switch(this.player.media.dispatcherName){
                                                case i.default.Name:
                                                    this.player.media.seekTo(e);
                                                    break;
                                                default:
                                                    if (!this.player.media.isReady) return;
                                                    if (Math.abs(this.offsetTime) < 1e3) return void this.__suspendStateWorker__();
                                                    this.player.media.seekTo(e);
                                            }
                                            this.__incrementNegativeSeekingCount__(), this.__dispatchNegativeSeeking__(), this.__dispatchUnsync__(), this.__resetSyncedCount__();
                                        } else if (this.offsetTime > this.positiveOffsetTimeThreshold) {
                                            switch(this.player.media.dispatcherName){
                                                case i.default.Name:
                                                    this.player.media.seekTo(e);
                                                    break;
                                                default:
                                                    if (!this.player.media.isReady) return;
                                                    this.player.media.seekTo(e + this.__integralOffsetTime__);
                                            }
                                            this.__incrementPositiveSeekingCount__(), this.__dispatchPositiveSeeking__(), this.__dispatchUnsync__(), this.__resetSyncedCount__();
                                        } else if (!this.plugin.stateWorker.skipMediaStateChange) {
                                            if (this.__incrementSyncedCount__(), this.syncedCount % this.syncedCountThreshold != 0) return;
                                            this.__dispatchSync__(), this.__resetSeekingCount__();
                                        }
                                    }
                                }
                            } else this.__resetSyncedCount__();
                        }
                    },
                    {
                        key: "__debugMessage__",
                        value: function(e) {
                            a.default.debug(e, {
                                minAllowableOffsetTimeThreshold: this.minAllowableOffsetTimeThreshold,
                                maxAllowableOffsetTimeThreshold: this.maxAllowableOffsetTimeThreshold,
                                allowableOffsetTimeThreshold: this.allowableOffsetTimeThreshold,
                                negativeOffsetTimeThreshold: this.negativeOffsetTimeThreshold,
                                positiveOffsetTimeThreshold: this.positiveOffsetTimeThreshold,
                                offsetTime: this.offsetTime,
                                negativeSeekingCount: this.negativeSeekingCount,
                                positiveSeekingCount: this.positiveSeekingCount,
                                unsyncedCount: this.unsyncedCount,
                                syncedCount: this.syncedCount
                            });
                        }
                    },
                    {
                        key: "__resetSeekingCount__",
                        value: function() {
                            this.__negativeSeekingCount__ = 0, this.__positiveSeekingCount__ = 0;
                        }
                    },
                    {
                        key: "__incrementNegativeSeekingCount__",
                        value: function() {
                            this.__negativeSeekingCount__ += 1;
                        }
                    },
                    {
                        key: "__incrementPositiveSeekingCount__",
                        value: function() {
                            this.__positiveSeekingCount__ += 1;
                        }
                    },
                    {
                        key: "__resetSyncedCount__",
                        value: function() {
                            this.__syncedCount__ = 0;
                        }
                    },
                    {
                        key: "__incrementSyncedCount__",
                        value: function() {
                            this.__syncedCount__ += 1;
                        }
                    },
                    {
                        key: "__dispatchNegativeSeeking__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync is seeking the `songlePlayer.media.positionTime` in the negative direction");
                        }
                    },
                    {
                        key: "__dispatchPositiveSeeking__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync is seeking the `songlePlayer.media.positionTime` in the positive direction");
                        }
                    },
                    {
                        key: "__dispatchUnsync__",
                        value: function() {
                            this.unsyncedCount % 10 == 0 && (this.allowableOffsetTimeThreshold *= 2);
                        }
                    },
                    {
                        key: "__dispatchSync__",
                        value: function() {
                            this.__debugMessage__("The stage of Songle Sync was synced with the `songlePlayer.media.positionTime`");
                            var e = -this.minAllowableOffsetTimeThreshold / 2, t = this.minAllowableOffsetTimeThreshold / 2;
                            this.offsetTime > e && this.offsetTime < t && (this.allowableOffsetTimeThreshold = this.minAllowableOffsetTimeThreshold);
                        }
                    },
                    {
                        key: "__suspendStateWorker__",
                        value: function() {
                            return !this.plugin.stateWorker.skipMediaStateChange && !(o.default.currentClockTime < this.__stateWorkerRestartTime__) && (this.plugin.stateWorker.skipMediaStateChange = !this.plugin.stateWorker.skipMediaStateChange, this.player.media.pause(), this.__stateWorkerRestartTime__ = o.default.currentClockTime + Math.abs(this.offsetTime), this.intervalTime = 1, !0);
                        }
                    },
                    {
                        key: "__restartStateWorker__",
                        value: function() {
                            return !!this.plugin.stateWorker.skipMediaStateChange && !(o.default.currentClockTime < this.__stateWorkerRestartTime__) && (this.plugin.stateWorker.skipMediaStateChange = !this.plugin.stateWorker.skipMediaStateChange, this.player.media.play(), this.intervalTime = this.defaultIntervalTime, !0);
                        }
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 1e3;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    },
                    {
                        key: "minAllowableOffsetTimeThreshold",
                        get: function() {
                            return this.__minAllowableOffsetTimeThreshold__;
                        }
                    },
                    {
                        key: "maxAllowableOffsetTimeThreshold",
                        get: function() {
                            return this.__maxAllowableOffsetTimeThreshold__;
                        }
                    },
                    {
                        key: "allowableOffsetTimeThreshold",
                        get: function() {
                            return this.__allowableOffsetTimeThreshold__;
                        },
                        set: function(e) {
                            e < this.minAllowableOffsetTimeThreshold && (e = this.minAllowableOffsetTimeThreshold), e > this.maxAllowableOffsetTimeThreshold && (e = this.maxAllowableOffsetTimeThreshold), this.__allowableOffsetTimeThreshold__ = e;
                        }
                    },
                    {
                        key: "negativeOffsetTimeThreshold",
                        get: function() {
                            return -this.__allowableOffsetTimeThreshold__ / 2;
                        }
                    },
                    {
                        key: "positiveOffsetTimeThreshold",
                        get: function() {
                            return this.__allowableOffsetTimeThreshold__ / 2;
                        }
                    },
                    {
                        key: "offsetTime",
                        get: function() {
                            return this.__offsetTime__;
                        }
                    },
                    {
                        key: "negativeSeekingCount",
                        get: function() {
                            return this.__negativeSeekingCount__;
                        }
                    },
                    {
                        key: "positiveSeekingCount",
                        get: function() {
                            return this.__positiveSeekingCount__;
                        }
                    },
                    {
                        key: "unsyncedCount",
                        get: function() {
                            return this.__negativeSeekingCount__ + this.__positiveSeekingCount__;
                        }
                    },
                    {
                        key: "syncedCount",
                        get: function() {
                            return this.__syncedCount__;
                        }
                    },
                    {
                        key: "syncedCountThreshold",
                        get: function() {
                            return this.__syncedCountThreshold__;
                        },
                        set: function(e) {
                            e < 1 ? a.default.warn("Couldn't set the 'songlePlayer.stageSyncedCountThreshold' less than ".concat(1)) : e > 10 ? a.default.warn("Couldn't set the 'songlePlayer.stageSyncedCountThreshold' more than ".concat(10)) : this.__syncedCountThreshold__ = e;
                        }
                    }
                ], s(t.prototype, n), r && s(t, r), _;
            }(r.default);
            t.default = d;
        },
        74: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(28), o = n(20);
            function u(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function l(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function c(e, t) {
                return (c = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = p(e);
                    if (t) {
                        var i = p(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return _(this, n);
                };
            }
            function _(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e;
                }(e) : t;
            }
            function p(e) {
                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var d = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && c(e, t);
                }(d, e);
                var t, n, r, a, _, p = f(d);
                function d() {
                    return s(this, d), p.apply(this, arguments);
                }
                return t = d, n = [
                    {
                        key: "runTask",
                        value: (a = i.a.mark(function e() {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.prev = 0, e.next = 3, o.HistoryAPI.createHistory(this.plugin);
                                    case 3:
                                        e.next = 7;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0);
                                    case 7:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this, [
                                [
                                    0,
                                    5
                                ]
                            ]);
                        }), _ = function() {
                            var e = this, t = arguments;
                            return new Promise(function(n, r) {
                                var i = a.apply(e, t);
                                function o(e) {
                                    u(i, n, r, o, s, "next", e);
                                }
                                function s(e) {
                                    u(i, n, r, o, s, "throw", e);
                                }
                                o(void 0);
                            });
                        }, function() {
                            return _.apply(this, arguments);
                        })
                    },
                    {
                        key: "defaultIntervalTime",
                        get: function() {
                            return 3e4;
                        }
                    },
                    {
                        key: "minIntervalTime",
                        get: function() {
                            return 15e3;
                        }
                    },
                    {
                        key: "maxIntervalTime",
                        get: function() {
                            return 6e4;
                        }
                    }
                ], l(t.prototype, n), r && l(t, r), d;
            }(a.default);
            t.default = d;
        },
        77: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(4), i = n.n(r), a = n(19), o = n(6), u = n(2), s = n(66), l = n(1), c = n(30), f = n(32), _ = n(12), p = n(62);
            function d(e, t, n, r, i, a, o) {
                try {
                    var u = e[a](o), s = u.value;
                } catch (l) {
                    return void n(l);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, i);
            }
            function h(e) {
                return function() {
                    var t = this, n = arguments;
                    return new Promise(function(r, i) {
                        var a = e.apply(t, n);
                        function o(e) {
                            d(a, r, i, o, u, "next", e);
                        }
                        function u(e) {
                            d(a, r, i, o, u, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function y(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function v(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function g(e, t, n) {
                return t && v(e.prototype, t), n && v(e, n), e;
            }
            function m(e, t) {
                return (m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e;
                })(e, t);
            }
            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0;
                    } catch (e) {
                        return !1;
                    }
                }();
                return function() {
                    var n, r = S(e);
                    if (t) {
                        var i = S(this).constructor;
                        n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return k(this, n);
                };
            }
            function k(e, t) {
                return !t || "object" !== typeof t && "function" !== typeof t ? T(e) : t;
            }
            function T(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }
            function S(e) {
                return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                })(e);
            }
            var P = function(e) {
                !function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && m(e, t);
                }(d, e);
                var t, n, r, a = b(d);
                function d() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    y(this, d), (e = a.call(this)).__dispatchers__ = [], e.__mediaCaches__ = [], e.__accessToken__ = t.accessToken, e.__secretToken__ = t.secretToken, e.__mediaElement__ = t.mediaElement;
                    var n = [
                        {
                            source: "durationTime",
                            target: "duration",
                            warning: !0
                        },
                        {
                            source: "positionTime",
                            target: "position",
                            warning: !0
                        }
                    ];
                    return n.forEach(function(t) {
                        Object.defineProperty(T(e), t.target, {
                            get: function() {
                                return t.warning && u.default.warn("'Player.".concat(t.target, "' is obsolete API, please use 'Player.").concat(t.source, "'")), e[t.source];
                            }
                        });
                    }), e;
                }
                return g(d, null, [
                    {
                        key: "Name",
                        get: function() {
                            return "player";
                        }
                    },
                    {
                        key: "Type",
                        get: function() {
                            return "player";
                        }
                    },
                    {
                        key: "MinVolume",
                        get: function() {
                            return 0;
                        }
                    },
                    {
                        key: "MaxVolume",
                        get: function() {
                            return 100;
                        }
                    }
                ]), g(d, [
                    {
                        key: "activate",
                        value: (r = h(i.a.mark(function e() {
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        if (null != this.__media__) {
                                            e.next = 3;
                                            break;
                                        }
                                        return u.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'"), e.abrupt("return");
                                    case 3:
                                        return e.abrupt("return", this.media.activate());
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function() {
                            return r.apply(this, arguments);
                        })
                    },
                    {
                        key: "useMedia",
                        value: (n = h(i.a.mark(function e(t) {
                            var n, r, a, o, c, p, d, h = this, y = arguments;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        n = y.length > 1 && void 0 !== y[1] ? y[1] : {}, t.options && u.default.warn("The 1st arg of `SongleAPI.Player.useMedia` exists the `options` attribute, but it's ignored"), n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null != n.src ? n.src : null, n.element = null != n.element ? n.element : null != n.rootElement ? n.rootElement : null, n.controls = null != n.controls ? n.controls : null != n.showCtrl ? n.showCtrl : null, n.width = null != n.width ? n.width : null != n.width ? n.videoSizeW : null, n.height = null != n.height ? n.height : null != n.height ? n.videoSizeH : null, n.endpointScheme = null != n.endpointScheme ? n.endpointScheme : null, n.endpointHost = null != n.endpointHost ? n.endpointHost : null, n.endpointPath = null != n.endpointPath ? n.endpointPath : null, n.fallback = null != n.fallback ? n.fallback : null, n.headless = null != n.headless && n.headless, n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null, n.element = null != n.element ? n.element : this.mediaElement, n.controls = null != n.controls && n.controls, n.playsinline = null == n.playsinline || n.playsinline, n.width = null != n.width ? n.width : 256, n.height = null != n.height ? n.height : 144, t instanceof f.default && (n.headless = !0), u.default.debug("Songle.Player#useMedia options", n), n.width < 200 && n.height < 200 && u.default.warn("Video size is too small, please check the terms of use of this video provider"), e.t0 = !0, e.next = e.t0 === (null == t) ? 24 : e.t0 === ("string" === l.default.typeOf(t)) ? 25 : e.t0 === ("object" === l.default.typeOf(t) && null != t.mediaSourceUrl) ? 27 : e.t0 === ("object" === l.default.typeOf(t) && null != t.permalink) ? 29 : e.t0 === ("object" === l.default.typeOf(t) && null != t.sourceUrl) ? 31 : e.t0 === ("object" === l.default.typeOf(t) && null != t.src) ? 33 : 35;
                                        break;
                                    case 24:
                                        return e.abrupt("return");
                                    case 25:
                                        return r = t, e.abrupt("break", 37);
                                    case 27:
                                        return r = t.mediaSourceUrl, e.abrupt("break", 37);
                                    case 29:
                                        return r = t.permalink, e.abrupt("break", 37);
                                    case 31:
                                        return r = t.sourceUrl, e.abrupt("break", 37);
                                    case 33:
                                        return r = t.src, e.abrupt("break", 37);
                                    case 35:
                                        return u.default.error("Requested new media is unsupported with 'Songle.Player#useMedia'"), e.abrupt("return");
                                    case 37:
                                        return e.next = 39, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaTryMount(h, {
                                                newMediaSourceUrl: r
                                            });
                                        }));
                                    case 39:
                                        return a = n.endpointScheme, o = n.endpointHost, c = n.endpointPath, p = n.headless, e.next = 45, _.SongAPI.get(r, {
                                            endpointScheme: a,
                                            endpointHost: o,
                                            endpointPath: c
                                        });
                                    case 45:
                                        if (d = e.sent, null == this.__media__) {
                                            e.next = 58;
                                            break;
                                        }
                                        e.t1 = this.__media__.dispatcherName, e.next = e.t1 === f.default.Name ? 50 : 54;
                                        break;
                                    case 50:
                                        if (!p || n.altSourceUrl) {
                                            e.next = 53;
                                            break;
                                        }
                                        if (this.__media__.sourceUrl !== d.attributes.permalink) {
                                            e.next = 53;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 53:
                                        return e.abrupt("break", 58);
                                    case 54:
                                        if (p || n.altSourceUrl) {
                                            e.next = 57;
                                            break;
                                        }
                                        if (this.__media__.sourceUrl !== d.attributes.permalink) {
                                            e.next = 57;
                                            break;
                                        }
                                        return e.abrupt("return");
                                    case 57:
                                        return e.abrupt("break", 58);
                                    case 58:
                                        if (!this.__mediaTransaction__) {
                                            e.next = 61;
                                            break;
                                        }
                                        return u.default.warn("Before finish 'Songle.Player#useMedia', it was called again. please check it using 'mediaReady' event"), e.abrupt("return");
                                    case 61:
                                        return this.__mediaTransaction__ = !this.__mediaTransaction__, e.next = 64, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaDisMount(h);
                                        }));
                                    case 64:
                                        if (null != this.media && this.media.hideElement(), null != this.media && null == this.mediaCaches.find(function(e) {
                                            return e == h.media;
                                        }) && this.media.dispose(), e.t2 = this.__getCachedMedia__(d, n), e.t2) {
                                            e.next = 71;
                                            break;
                                        }
                                        return e.next = 70, s.default.create(this, d, n);
                                    case 70:
                                        e.t2 = e.sent;
                                    case 71:
                                        return this.__media__ = e.t2, null != this.media && this.media.showElement(n), e.next = 75, Promise.all(this.dispatchers.map(function(e) {
                                            return e && e.mediaDidMount(h);
                                        }));
                                    case 75:
                                        return this.invokeTrap("mediaReady", {
                                            target: this,
                                            data: {
                                                media: this.__media__
                                            }
                                        }), this.__mediaTransaction__ = !this.__mediaTransaction__, e.abrupt("return", this.__media__);
                                    case 78:
                                    case "end":
                                        return e.stop();
                                }
                            }, e, this);
                        })), function(e) {
                            return n.apply(this, arguments);
                        })
                    },
                    {
                        key: "cacheMedia",
                        value: (t = h(i.a.mark(function e(t) {
                            var n, r = this;
                            return i.a.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        e.t0 = l.default.typeOf(t), e.next = "array" === e.t0 ? 3 : "object" === e.t0 ? 5 : "string" === e.t0 ? 7 : 9;
                                        break;
                                    case 3:
                                        return t = t.map(function(e) {
                                            return "string" == l.default.typeOf(e) ? {
                                                mediaSourceUrl: e
                                            } : e;
                                        }), e.abrupt("break", 9);
                                    case 5:
                                        return t = [
                                            t
                                        ], e.abrupt("break", 9);
                                    case 7:
                                        return t = [
                                            {
                                                mediaSourceUrl: t
                                            }
                                        ], e.abrupt("break", 9);
                                    case 9:
                                        return e.next = 11, Promise.all(t.map(function() {
                                            var e = h(i.a.mark(function e(t) {
                                                var n, a, o;
                                                return i.a.wrap(function(e) {
                                                    for(;;)switch(e.prev = e.next){
                                                        case 0:
                                                            return (n = null != t.options ? t.options : {}).endpointScheme = null != n.endpointScheme ? n.endpointScheme : null, n.endpointHost = null != n.endpointHost ? n.endpointHost : null, n.endpointPath = null != n.endpointPath ? n.endpointPath : null, n.headless = null != n.headless && n.headless, n.altSourceUrl = null != n.altSourceUrl ? n.altSourceUrl : null, n.element = null != n.element ? n.element : r.mediaElement, n.controls = null != n.controls && n.controls, n.width = null != n.width ? n.width : 256, n.height = null != n.height ? n.height : 144, e.next = 12, _.SongAPI.get(t.mediaSourceUrl, n);
                                                        case 12:
                                                            return a = e.sent, e.next = 15, s.default.create(r, a, n);
                                                        case 15:
                                                            return (o = e.sent).altSourceUrl = n.altSourceUrl, r.mediaCaches.push(o), e.abrupt("return", o);
                                                        case 19:
                                                        case "end":
                                                            return e.stop();
                                                    }
                                                }, e);
                                            }));
                                            return function(t) {
                                                return e.apply(this, arguments);
                                            };
                                        }()));
                                    case 11:
                                        return n = e.sent, e.abrupt("return", n);
                                    case 13:
                                    case "end":
                                        return e.stop();
                                }
                            }, e);
                        })), function(e) {
                            return t.apply(this, arguments);
                        })
                    },
                    {
                        key: "addPlugin",
                        value: function(e) {
                            this.hasPlugin(e.dispatcherName) ? u.default.warn("'".concat(e.dispatcherName, "' is already installed")) : (e.initialize(this), this.__dispatchers__.push(e));
                        }
                    },
                    {
                        key: "hasPlugin",
                        value: function(e) {
                            return -1 != this.dispatchers.findIndex(function(t) {
                                return t && t.dispatcherName === e;
                            });
                        }
                    },
                    {
                        key: "invokeTrap",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.dispatchers.forEach(function(n) {
                                n && n.invokeSelfTrap(e, t);
                            });
                        }
                    },
                    {
                        key: "play",
                        value: function() {
                            null != this.__media__ ? this.media.play() : u.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "pause",
                        value: function() {
                            null != this.__media__ ? this.media.pause() : u.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "stop",
                        value: function() {
                            null != this.__media__ ? this.media.stop() : u.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "seekTo",
                        value: function(e) {
                            null != this.__media__ ? this.invokeTrap("seek", {
                                target: this,
                                data: {
                                    positionTime: e
                                }
                            }) : u.default.warn("Player don't has a media, Please set a media using 'Songle.Player#useMedia'");
                        }
                    },
                    {
                        key: "__getCachedMedia__",
                        value: function(e, t) {
                            return this.mediaCaches.find(function(n) {
                                var r;
                                switch(!0){
                                    case null == e:
                                        return !1;
                                    case "string" === l.default.typeOf(e):
                                        r = e;
                                        break;
                                    case "object" === l.default.typeOf(e) && null != e.targetMediaSourceUrl:
                                        r = e.targetMediaSourceUrl;
                                        break;
                                    case "object" === l.default.typeOf(e) && null != e.permalink:
                                        r = e.permalink;
                                        break;
                                    case "object" === l.default.typeOf(e) && null != e.sourceUrl:
                                        r = e.sourceUrl;
                                        break;
                                    case "object" === l.default.typeOf(e) && null != e.src:
                                        r = e.src;
                                        break;
                                    default:
                                        return !1;
                                }
                                var i = n.sourceUrl === r, a = t.headless && null == n.originalPlayer || !t.headless && null != n.originalPlayer, o = t.altSourceUrl && t.altSourceUrl == n.altSourceUrl || !t.altSourceUrl;
                                return i && a && o;
                            });
                        }
                    },
                    {
                        key: "dispatcherName",
                        get: function() {
                            return d.Name;
                        }
                    },
                    {
                        key: "dispatcherType",
                        get: function() {
                            return d.Type;
                        }
                    },
                    {
                        key: "accessToken",
                        get: function() {
                            return this.__accessToken__ || "";
                        },
                        set: function(e) {
                            this.__accessToken__ = e;
                        }
                    },
                    {
                        key: "secretToken",
                        get: function() {
                            return this.__secretToken__ || "";
                        },
                        set: function(e) {
                            this.__secretToken__ = e;
                        }
                    },
                    {
                        key: "mediaElement",
                        get: function() {
                            return c.default.querySelector(this.__mediaElement__);
                        },
                        set: function(e) {
                            this.__mediaElement__ = e;
                        }
                    },
                    {
                        key: "dispatchers",
                        get: function() {
                            return this.__dispatchers__.concat([
                                this,
                                this.media
                            ]);
                        }
                    },
                    {
                        key: "media",
                        get: function() {
                            return this.__media__;
                        }
                    },
                    {
                        key: "mediaCaches",
                        get: function() {
                            return this.__mediaCaches__;
                        }
                    },
                    {
                        key: "musicMap",
                        get: function() {
                            return null == this.__media__ ? null : this.__media__.musicMap;
                        }
                    },
                    {
                        key: "isReady",
                        get: function() {
                            return null == this.media ? o.default.DefaultStateReady : this.media.isReady;
                        }
                    },
                    {
                        key: "isPlaying",
                        get: function() {
                            return null == this.media ? o.default.DefaultStatePlaying : this.media.isPlaying;
                        }
                    },
                    {
                        key: "isPaused",
                        get: function() {
                            return null == this.media ? o.default.DefaultStatePaused : this.media.isPaused;
                        }
                    },
                    {
                        key: "isSeeking",
                        get: function() {
                            return null == this.media ? o.default.DefaultStateSeeking : this.media.isSeeking;
                        }
                    },
                    {
                        key: "durationTime",
                        get: function() {
                            return null == this.media ? 0 : this.hasPlugin(p.default.Name) ? this.playlist.mediaDurationTime : this.media.durationTime;
                        }
                    },
                    {
                        key: "positionTime",
                        get: function() {
                            return null == this.__media__ ? 0 : this.hasPlugin(p.default.Name) ? this.playlist.mediaPositionTime : this.media.positionTime;
                        }
                    },
                    {
                        key: "muted",
                        get: function() {
                            return null != this.__media__ && this.media.muted;
                        },
                        set: function(e) {
                            null != this.__media__ && (this.media.muted = e);
                        }
                    },
                    {
                        key: "volume",
                        get: function() {
                            return null == this.__media__ ? 100 : this.media.volume;
                        },
                        set: function(e) {
                            null != this.__media__ && (this.media.volume = e < 0 ? 0 : e > 100 ? 100 : e);
                        }
                    }
                ]), d;
            }(a.default);
            t.default = P;
        },
        78: function(e, t, n) {
            var r = n(95), i = n(96);
            e.exports = function(e, t, n) {
                var a = t && n || 0;
                "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
                var o = (e = e || {}).random || (e.rng || r)();
                if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) for(var u = 0; u < 16; ++u)t[a + u] = o[u];
                return t || i(o);
            };
        },
        8: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(1);
            function i() {
                return document.querySelector(".".concat("songle-api-license"));
            }
            var a = {
                createLicense: function(e) {
                    if (!r.default.isStandalone) {
                        var t = i();
                        if (!t) {
                            switch((t = document.createElement("img")).className = "songle-api-license", t.style.cursor = "pointer", t.style.borderRadius = "4px", t.style.position = "fixed", t.style.zIndex = "9999", e){
                                case "left-top":
                                    t.style.left = "4px", t.style.top = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                case "left-bottom":
                                    t.style.left = "4px", t.style.bottom = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                case "right-top":
                                    t.style.right = "4px", t.style.top = "4px", t.style.width = "24px", t.style.height = "24px";
                                    break;
                                default:
                                case "right-bottom":
                                    t.style.right = "4px", t.style.bottom = "4px", t.style.width = "24px", t.style.height = "24px";
                            }
                            t.alt = "Powered by Songle API", t.src = "https://api.songle.jp/license-icons/songle.png", t.width = 24, t.height = 24, t.addEventListener("click", function(e) {
                                return open("https://api.songle.jp");
                            }, !1), t.addEventListener("touch", function(e) {
                                return open("https://api.songle.jp");
                            }, !1), document.body && document.body.appendChild(t);
                        }
                    }
                },
                removeLicense: function() {
                    if (!r.default.isStandalone) {
                        var e = i();
                        e && e.remove();
                    }
                }
            };
            t.default = a;
        },
        83: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(30), i = n(1), a = "https://w.soundcloud.com/player/api.js";
            var o = {
                importClass: function() {
                    return new Promise(function(e, t) {
                        if (i.default.ScFactoryClass) return e(i.default.ScFactoryClass);
                        (options.element || i.default.global.document.body).appendChild(r.default.createScriptElement(a, {
                            onAbort: function(e) {
                                return t();
                            },
                            onError: function(e) {
                                return t();
                            },
                            onLoad: function(e) {
                                var t = setInterval(function() {
                                    i.default.global.SC && (i.default.ScFactoryClass = i.default.global.SC, i.default.ScFactoryClass && (clearInterval(t), read(i.default.ScFactoryClass)));
                                }, 1);
                            }
                        }));
                    });
                }
            };
            t.default = o;
        },
        95: function(e, t) {
            var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (n) {
                var r = new Uint8Array(16);
                e.exports = function() {
                    return n(r), r;
                };
            } else {
                var i = new Array(16);
                e.exports = function() {
                    for(var e, t = 0; t < 16; t++)0 === (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                    return i;
                };
            }
        },
        96: function(e, t) {
            for(var n = [], r = 0; r < 256; ++r)n[r] = (r + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var r = t || 0, i = n;
                return [
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    "-",
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]],
                    i[e[r++]]
                ].join("");
            };
        }
    });
}); //# sourceMappingURL=api-f23f6209be72cbdcea7e.js.map

},{}],"hezZX":[function(require,module,exports) {
/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2016-2017 Yamagishi Kazutoshi
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ "use strict";
/* global window */ module.exports = {
    XMLHttpRequest: window.XMLHttpRequest,
    XMLHttpRequestUpload: window.XMLHttpRequestUpload,
    FormData: window.FormData
};

},{}]},["eF1lK"], null, "parcelRequiref6b1")

//# sourceMappingURL=main.fb82e34c.js.map
