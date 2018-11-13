/**
 * Speech-Framework
 * 
 * Version: 0.5.2
 * Build:   0041
 * TYPE:    ALPHA
 * Datum:   11.11.2018
 * Autor:   LinguaLogic Team
 * Lizenz:  MIT
 * 
 * THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
 * CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
 * TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
 * SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

!function(t, e) {
    'object' == typeof exports && 'undefined' != typeof module ? e(exports) : 'function' == typeof define && define.amd ? define([ 'exports' ], e) : e(t.speech = {});
}(this, function(t) {
    'use strict';
    var e = 'BaseComponent', n = 'ActionComponent', o = n, i = 1e4, r = function(t, e) {
        return (r = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function u(t, e) {
        function n() {
            this.constructor = t;
        }
        r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
        new n());
    }
    function s(t, e) {
        var n, o, i, r, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1];
            },
            trys: [],
            ops: []
        };
        return r = {
            next: s(0),
            throw: s(1),
            return: s(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
            return this;
        }), r;
        function s(r) {
            return function(s) {
                return function(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (;u; ) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
                        0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [ 2 & r[0], i.value ]), r[0]) {
                          case 0:
                          case 1:
                            i = r;
                            break;

                          case 4:
                            return u.label++, {
                                value: r[1],
                                done: !1
                            };

                          case 5:
                            u.label++, o = r[1], r = [ 0 ];
                            continue;

                          case 7:
                            r = u.ops.pop(), u.trys.pop();
                            continue;

                          default:
                            if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                u = 0;
                                continue;
                            }
                            if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                u.label = r[1];
                                break;
                            }
                            if (6 === r[0] && u.label < i[1]) {
                                u.label = i[1], i = r;
                                break;
                            }
                            if (i && u.label < i[2]) {
                                u.label = i[2], u.ops.push(r);
                                break;
                            }
                            i[2] && u.ops.pop(), u.trys.pop();
                            continue;
                        }
                        r = e.call(t, u);
                    } catch (t) {
                        r = [ 6, t ], o = 0;
                    } finally {
                        n = i = 0;
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    };
                }([ r, s ]);
            };
        }
    }
    var a = !0, p = function() {
        function t(t) {
            this.mErrorClassName = 'ErrorBase', this.mErrorOutputFlag = a, this.mErrorOutputFunc = null, 
            this.mErrorClassName = t;
        }
        return t.prototype._setErrorClassName = function(t) {
            this.mErrorClassName = t;
        }, t.prototype._getErrorClassName = function() {
            return this.mErrorClassName;
        }, t.prototype._setErrorOutput = function(t) {
            this.mErrorOutputFlag = t;
        }, t.prototype._setErrorOutputDefault = function() {
            this._setErrorOutput(a);
        }, t.prototype._setErrorOutputFunc = function(t) {
            this.mErrorOutputFunc = t;
        }, t.prototype._error = function(t, e) {
            if (this.mErrorOutputFlag && console.log('===> ERROR ', this.mErrorClassName + '.' + t + ':', e), 
            'function' == typeof this.mErrorOutputFunc) try {
                this.mErrorOutputFunc(this.mErrorClassName + '.' + t + ': ' + e);
            } catch (t) {
                console.log('ErrorBase._error: Exception ', t.message);
            }
        }, t.prototype._exception = function(t, e) {
            if (this.mErrorOutputFlag && console.log('===> EXCEPTION ', this.mErrorClassName + '.' + t + ':', e.message), 
            'function' == typeof this.mErrorOutputFunc) try {
                this.mErrorOutputFunc('EXCEPTION ' + this.mErrorClassName + '.' + t + ': ' + e.message);
            } catch (t) {
                console.log('ErrorBase._exception: Exception ', t.message);
            }
        }, t.prototype.isErrorOutput = function() {
            return this.mErrorOutputFlag;
        }, t.prototype.setErrorOutputOn = function() {
            this._setErrorOutput(!0);
        }, t.prototype.setErrorOutputOff = function() {
            this._setErrorOutput(!1);
        }, t;
    }(), c = function(t) {
        function e() {
            var e = t.call(this, 'BuilderList') || this;
            return e.mBuilderList = new Map(), e.mBuilderIterator = e.mBuilderList.values(), 
            e;
        }
        return u(e, t), e.prototype.getSize = function() {
            return this.mBuilderList.size;
        }, e.prototype.insert = function(t, e) {
            try {
                return t ? e ? this.mBuilderList.has(t) ? (this._error('insert', 'Builder existiert bereits'), 
                -1) : (this.mBuilderList.set(t, e), 0) : (this._error('insert', 'kein Builder uebergeben'), 
                -1) : (this._error('insert', 'kein Buildername uebergeben'), -1);
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.find = function(t) {
            try {
                return this.mBuilderList.get(t);
            } catch (t) {
                return void this._exception('find', t);
            }
        }, e.prototype.first = function() {
            try {
                return this.mBuilderIterator = this.mBuilderList.values(), this.mBuilderIterator.next().value;
            } catch (t) {
                return void this._exception('first', t);
            }
        }, e.prototype.next = function() {
            try {
                return this.mBuilderIterator.next().value;
            } catch (t) {
                return void this._exception('next', t);
            }
        }, e.prototype.remove = function(t) {
            try {
                return this.mBuilderList.delete(t), 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.clear = function() {
            try {
                return this.mBuilderList.clear(), 0;
            } catch (t) {
                return this._exception('clear', t), -1;
            }
        }, e;
    }(p), l = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            t.mBuilderList.setErrorOutputOn(), t.mErrorBase.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            t.mBuilderList.setErrorOutputOff(), t.mErrorBase.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(e) {
            t.mBuilderList._setErrorOutputFunc(e), t.mErrorBase._setErrorOutputFunc(e);
        }, t.getSize = function() {
            return t.mBuilderList.getSize();
        }, t.get = function(e, n) {
            if (!e) return t.mErrorBase._error('get', 'kein Buildername uebergeben'), null;
            var o = t.find(e);
            if (o) return o;
            if (!n) return t.mErrorBase._error('get', 'keine Builderklasse uebergeben'), null;
            try {
                o = new n();
            } catch (e) {
                return t.mErrorBase._exception('get', e), null;
            }
            return e !== o.getName() ? (t.mErrorBase._error('get', 'Buildernamen stimmen nicht ueberein ' + e + ' != ' + o.getName()), 
            t.remove(o.getName()), null) : o;
        }, t.find = function(e) {
            var n = t.mBuilderList.find(e);
            return n || null;
        }, t.insert = function(e, n) {
            return t.mBuilderList.insert(e, n);
        }, t.remove = function(e) {
            return t.mBuilderList.remove(e);
        }, t.clear = function() {
            return t.mBuilderList.clear();
        }, t.mBuilderList = new c(), t.mErrorBase = new p('BuilderManager'), t;
    }(), h = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Komponente nicht initialisiert');
        }
        return t.prototype._getBuilderName = function() {
            return '';
        }, t.prototype._init = function(t) {
            var e = !0;
            t && 'boolean' == typeof t.errorOutputFlag && (e = t.errorOutputFlag);
            var n = this._getBuilderName();
            t && 'string' == typeof t.builderName && (n = t.builderName);
            try {
                var o = l.get(n);
                if (!o) return e && console.log('Base._init: Kein Builder vorhanden'), -1;
                if (this.mComponent = o.build(), !this.mComponent) return e && console.log('Base._init: keine Komponente erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return e && console.log('Base._init: Komponente nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log(this.getType() + '-API Version: ', this.getVersion());
                }
                return 0;
            } catch (t) {
                return e && console.log('Base._init: Exception ', t.message), -1;
            }
        }, t.prototype.reset = function(t) {
            return this.mComponent.reset(t);
        }, t.prototype.getType = function() {
            return this.mComponent.getType();
        }, t.prototype.getName = function() {
            return this.mComponent.getName();
        }, t.prototype.getVersion = function() {
            return this.mComponent.getVersion();
        }, t.prototype.getServerVersion = function() {
            return '';
        }, t.prototype.isActive = function() {
            return this.mComponent.isActive();
        }, t.prototype.setActiveOn = function() {
            return this.mComponent.setActiveOn();
        }, t.prototype.setActiveOff = function() {
            return this.mComponent.setActiveOff();
        }, t.prototype.isErrorOutput = function() {
            return this.mComponent.isErrorOutput();
        }, t.prototype.setErrorOutputOn = function() {
            this.mComponent.setErrorOutputOn();
        }, t.prototype.setErrorOutputOff = function() {
            this.mComponent.setErrorOutputOff();
        }, t.prototype.addInitEvent = function(t, e) {
            return this.mComponent.addInitEvent(t, e);
        }, t.prototype.addStartEvent = function(t, e) {
            return this.mComponent.addStartEvent(t, e);
        }, t.prototype.addStopEvent = function(t, e) {
            return this.mComponent.addStopEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeInitEvent = function(t) {
            return this.mComponent.removeInitEvent(t);
        }, t.prototype.removeStartEvent = function(t) {
            return this.mComponent.removeStartEvent(t);
        }, t.prototype.removeStopEvent = function(t) {
            return this.mComponent.removeStopEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.isRunning = function() {
            return this.mComponent.isRunning();
        }, t.prototype.start = function() {
            return this.mComponent.start();
        }, t.prototype.stop = function() {
            return this.mComponent.stop();
        }, t.prototype.test = function(t, e) {
            return this.mComponent.test(t, e);
        }, t;
    }(), m = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mActionComponent = null, n.mActionComponent = n.mComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Action";
        }, e.prototype.setActionName = function(t) {
            return this.mActionComponent.setActionName(t);
        }, e.prototype.getActionName = function() {
            return this.mActionComponent.getActionName();
        }, e.prototype.setElementType = function(t) {
            return this.mActionComponent.setElementType(t);
        }, e.prototype.getElementType = function() {
            return this.mActionComponent.getElementType();
        }, e.prototype.setElementName = function(t) {
            return this.mActionComponent.setElementName(t);
        }, e.prototype.getElementName = function() {
            return this.mActionComponent.getElementName();
        }, e.prototype.addFunction = function(t, e, n) {
            return this.mActionComponent.addFunction(t, e, n);
        }, e.prototype.removeFunction = function(t) {
            return this.mActionComponent.removeFunction(t);
        }, e.prototype.addElement = function(t, e, n) {
            return this.mActionComponent.addElement(t, e, n);
        }, e.prototype.removeElement = function(t) {
            return this.mActionComponent.removeElement(t);
        }, e;
    }(h), g = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new m(e);
            } catch (t) {
                return console.log('ActionFactory.create: Exception', t), null;
            }
        }, t;
    }(), f = 'AudioPlayer', y = "mp3", d = function(t) {
        function e() {
            var e = t.call(this, 'FactoryList') || this;
            return e.mFactoryList = new Map(), e.mFactoryIterator = null, e.mFactoryIterator = e.mFactoryList.values(), 
            e;
        }
        return u(e, t), e.prototype.getSize = function() {
            return this.mFactoryList.size;
        }, e.prototype.insert = function(t, e) {
            try {
                return t ? e ? this.mFactoryList.has(t) ? (this._error('insert', 'Factory existiert bereits'), 
                -1) : (this.mFactoryList.set(t, e), 0) : (this._error('insert', 'keine Factory uebergeben'), 
                -1) : (this._error('insert', 'kein Factoryname uebergeben'), -1);
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.find = function(t) {
            try {
                return this.mFactoryList.get(t);
            } catch (t) {
                return void this._exception('find', t);
            }
        }, e.prototype.first = function() {
            try {
                return this.mFactoryIterator = this.mFactoryList.values(), this.mFactoryIterator.next().value;
            } catch (t) {
                return void this._exception('first', t);
            }
        }, e.prototype.next = function() {
            try {
                return this.mFactoryIterator.next().value;
            } catch (t) {
                return void this._exception('next', t);
            }
        }, e.prototype.remove = function(t) {
            try {
                return this.mFactoryList.delete(t), 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.clear = function() {
            try {
                return this.mFactoryList.clear(), 0;
            } catch (t) {
                return this._exception('clear', t), -1;
            }
        }, e;
    }(p), S = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            t.mFactoryList.setErrorOutputOn(), t.mErrorBase.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            t.mFactoryList.setErrorOutputOff(), t.mErrorBase.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(e) {
            t.mFactoryList._setErrorOutputFunc(e), t.mErrorBase._setErrorOutputFunc(e);
        }, t.getSize = function() {
            return t.mFactoryList.getSize();
        }, t.get = function(e, n) {
            if (!e) return this.mErrorBase._error('get', 'kein FactoryName uebergeben'), null;
            var o = t.find(e);
            if (o) return o;
            if (!n) return this.mErrorBase._error('get', 'keine Factoryklasse uebergeben'), 
            null;
            try {
                o = new n();
            } catch (t) {
                return this.mErrorBase._exception('get', t), null;
            }
            return e !== o.getName() ? (this.mErrorBase._error('get', 'FactoryName stimmen nicht ueberein ' + e + ' != ' + o.getName()), 
            t.remove(o.getName()), null) : o;
        }, t.find = function(e) {
            var n = t.mFactoryList.find(e);
            return n || null;
        }, t.insert = function(e, n) {
            return t.mFactoryList.insert(e, n);
        }, t.remove = function(e) {
            return t.mFactoryList.remove(e);
        }, t.clear = function() {
            return t.mFactoryList.clear();
        }, t.mFactoryList = new d(), t.mErrorBase = new p('FactoryManager'), t;
    }(), v = function(t) {
        function e() {
            var e = t.call(this, 'PluginList') || this;
            return e.mPluginList = new Map(), e.mPluginIterator = e.mPluginList.values(), e;
        }
        return u(e, t), e.prototype.getSize = function() {
            return this.mPluginList.size;
        }, e.prototype.insert = function(t, e) {
            try {
                return t ? e ? this.mPluginList.has(t) ? (this._error('insert', 'Plugin existiert bereits ' + t), 
                -1) : (this.mPluginList.set(t, e), 0) : (this._error('insert', 'kein Plugin uebergeben'), 
                -1) : (this._error('insert', 'kein Pluginname uebergeben'), -1);
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.find = function(t) {
            try {
                return this.mPluginList.get(t);
            } catch (t) {
                return void this._exception('find', t);
            }
        }, e.prototype.first = function() {
            try {
                return this.mPluginIterator = this.mPluginList.values(), this.mPluginIterator.next().value;
            } catch (t) {
                return void this._exception('first', t);
            }
        }, e.prototype.next = function() {
            try {
                return this.mPluginIterator.next().value;
            } catch (t) {
                return void this._exception('next', t);
            }
        }, e.prototype.getNameList = function() {
            return Array.from(this.mPluginList.keys());
        }, e.prototype.remove = function(t) {
            try {
                return this.mPluginList.delete(t), 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.clear = function() {
            try {
                return this.mPluginList.clear(), 0;
            } catch (t) {
                return this._exception('clear', t), -1;
            }
        }, e;
    }(p), _ = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            t.mPluginList.setErrorOutputOn(), t.mErrorBase.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            t.mPluginList.setErrorOutputOff(), t.mErrorBase.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(e) {
            t.mPluginList._setErrorOutputFunc(e), t.mErrorBase._setErrorOutputFunc(e);
        }, t.getSize = function() {
            return t.mPluginList.getSize();
        }, t.get = function(e, n) {
            if (!e) return t.mErrorBase._error('get', 'kein PluginName uebergeben'), null;
            var o = t.find(e);
            return o || (n ? n.create(e) : (t.mErrorBase._error('get', 'keine PluginFactoryClass uebergeben'), 
            null));
        }, t.find = function(e) {
            var n = t.mPluginList.find(e);
            return n || null;
        }, t.insert = function(e, n) {
            return t.mPluginList.insert(e, n);
        }, t.remove = function(e) {
            return t.mPluginList.remove(e);
        }, t.clear = function() {
            for (var e = t.mPluginList.first(); e; ) {
                try {
                    e.done();
                } catch (e) {
                    t.mErrorBase._exception('clear', e);
                }
                e = t.mPluginList.next();
            }
            return t.mPluginList.clear();
        }, t.mPluginList = new v(), t.mErrorBase = new p('PluginManager'), t;
    }(), E = function(t) {
        function e(e) {
            var n = t.call(this, e || 'Factory') || this;
            if (0 !== S.insert(n.getName(), n)) throw new Error('Factory ' + n.getName() + ' existiert bereits im FactoryManager');
            return n;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return 'any';
        }, e.prototype.getName = function() {
            return 'Factory';
        }, e.prototype.create = function(t, e) {
            return void 0 === e && (e = !0), null;
        }, e;
    }(p), A = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, 'Plugin') || this;
            if (o.mPluginName = '', o.mOnInitFunc = null, o.mOnErrorFunc = null, o.mInitFlag = !1, 
            o.mActiveFlag = !1, o._setErrorClassName(o.getClass()), o.mPluginName = e, n && 0 !== _.insert(e, o)) throw new Error('Plugin ' + o.getName() + ' ist bereits im PluginManager vorhanden');
            return o._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return 'Plugin';
        }, e.prototype.getClass = function() {
            return 'Plugin';
        }, e.prototype.getName = function() {
            return this.mPluginName;
        }, e.prototype.init = function(t) {
            return this.mActiveFlag = !0, t && ('boolean' == typeof t.activeFlag && (this.mActiveFlag = t.activeFlag), 
            'boolean' == typeof t.errorOutputFlag && this._setErrorOutput(t.errorOutputFlag)), 
            this.mInitFlag = !0, 0;
        }, e.prototype.done = function() {
            return this.mInitFlag = !1, this.mActiveFlag = !1, this.mOnInitFunc = null, this.mOnErrorFunc = null, 
            t.prototype._setErrorOutputDefault.call(this), 0;
        }, e.prototype.reset = function(t) {
            return this.mActiveFlag = this.isInit(), 0;
        }, e.prototype.isInit = function() {
            return this.mInitFlag;
        }, e.prototype._clearInit = function() {
            this.mInitFlag = !1, this.mActiveFlag = !1;
        }, e.prototype.setFeatureList = function(t) {
            return 0;
        }, e.prototype.isActive = function() {
            return this.mActiveFlag;
        }, e.prototype.setActiveOn = function() {
            return this.mActiveFlag = !0, 0;
        }, e.prototype.setActiveOff = function() {
            return this.mActiveFlag = !1, 0;
        }, e.prototype._getErrorOutputFunc = function() {
            var t = this;
            return function(e) {
                return t._onError(new Error(e));
            };
        }, e.prototype.handleMessage = function(t) {
            return 0;
        }, e.prototype.getHandleMessageFunc = function() {
            var t = this;
            return function(e) {
                return t.handleMessage(e);
            };
        }, e.prototype._onInit = function() {
            if ('function' == typeof this.mOnInitFunc) try {
                return this.mOnInitFunc(this.getName());
            } catch (t) {
                return this._exception('Plugin._onInit', t), -1;
            }
            return 0;
        }, e.prototype._onError = function(t) {
            if ('function' == typeof this.mOnErrorFunc) try {
                return this.mOnErrorFunc(t);
            } catch (t) {
                return this.isErrorOutput() && console.log('===> EXCEPTION Plugin._onError: ', t.message), 
                -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onInit", {
            get: function() {
                var t = this;
                return function() {
                    return t._onInit();
                };
            },
            set: function(t) {
                this.mOnInitFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onError", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onError(e);
                };
            },
            set: function(t) {
                this.mOnErrorFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.test = function(t, e) {
            return {
                result: 0
            };
        }, e;
    }(p), F = function(t) {
        function e(e) {
            return t.call(this, e || 'PluginFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'Plugin';
        }, e.prototype.getName = function() {
            return 'PluginFactory';
        }, e.prototype._newPlugin = function(t, e) {
            return new A(t, e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || 'Plugin';
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('PluginFactory.create', t), null;
            }
        }, e;
    }(E), D = function(t) {
        function e() {
            return t.call(this, 'AudioContextFactory') || this;
        }
        return u(e, t), e.prototype.getAudioContextClass = function() {
            try {
                return window.AudioContext || window.webkitAudioContext || null;
            } catch (t) {
                return this._exception('getAudioContextClass', t), null;
            }
        }, e.prototype.getXMLHttpRequestClass = function() {
            try {
                return window.XMLHttpRequest || null;
            } catch (t) {
                return this._exception('getXMLHttpRequestClass', t), null;
            }
        }, e.prototype.createAudioContext = function() {
            var t = this.getAudioContextClass();
            if (!t) return null;
            try {
                return new t();
            } catch (t) {
                return this._exception('createAudioContext', t), null;
            }
        }, e.prototype.createXMLHttpRequest = function() {
            var t = this.getXMLHttpRequestClass();
            if (!t) return null;
            try {
                return new t();
            } catch (t) {
                return this._exception('createXMLHttpRequest', t), null;
            }
        }, e;
    }(p), P = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, f, n) || this;
            return o.mAudioContextClass = null, o.mAudioContext = null, o.mAudioFormat = y, 
            o.mAudioBuffer = null, o.mXMLHttpRequest = null, o.mRequest = null, o.mSource = null, 
            o.mAudioLoadFlag = !1, o.mAudioPlayFlag = !1, o.mAudioCancelFlag = !1, o.mOnAudioStartFunc = null, 
            o.mOnAudioStopFunc = null, o.mAudioContextFactory = e, o._setErrorClassName('AudioPlayer'), 
            o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'AudioPlayer';
        }, e.prototype._detectAudioContext = function() {
            if (!this.mAudioContextFactory) return this._error('_detectAudioContext', 'keine AudioContext-Fabrik vorhanden'), 
            !1;
            try {
                this.mAudioContextClass = this.mAudioContextFactory.getAudioContextClass();
            } catch (t) {
                return this._exception('_detectAudioContext', t), !1;
            }
            return null !== this.mAudioContextClass || (this._error('_detectAudioContext', 'kein AudioContext vorhanden'), 
            !1);
        }, e.prototype._detectXMLHttpRequest = function() {
            if (!this.mAudioContextFactory) return this._error('_detectXMLHttpRequest', 'keine Audio-Fabrik vorhanden'), 
            !1;
            try {
                this.mXMLHttpRequest = this.mAudioContextFactory.getXMLHttpRequestClass();
            } catch (t) {
                return this._exception('_detectXMLHttpRequest', t), !1;
            }
            return null !== this.mXMLHttpRequest || (this._error('_detectXMLHttpRequest', 'kein XMLHttpRequest vorhanden'), 
            !1);
        }, e.prototype.init = function(e) {
            var n = this;
            if (this.isInit()) return this._error('init', 'init doppelt aufgerufen'), -1;
            if (0 !== t.prototype.init.call(this, e)) return -1;
            if (!this._detectXMLHttpRequest()) return this.setActiveOff(), 0;
            if (e && e.audioFormat && this.setAudioFormat(e.audioFormat), e && e.audioContext) this.mAudioContext = e.audioContext; else {
                if (!this._detectAudioContext()) return this.setActiveOff(), 0;
                try {
                    if (!this.mAudioContextClass) return t.prototype._clearInit.call(this), -1;
                    this.mAudioContext = new this.mAudioContextClass(), this.mAudioContext.onstatechange = function() {
                        n.mAudioContext;
                    };
                } catch (e) {
                    return this._closeAudioContext(), this._exception('init', e), t.prototype._clearInit.call(this), 
                    -1;
                }
            }
            return 0;
        }, e.prototype.done = function() {
            return this.isInit() && this.stop(), this._closeAudioContext(), this.mAudioContext = null, 
            this.mAudioContextClass = null, this.mAudioFormat = y, this.mXMLHttpRequest = null, 
            this.mRequest = null, this.mSource = null, this.mAudioBuffer = null, this.mAudioContext = null, 
            this.mAudioLoadFlag = !1, this.mAudioPlayFlag = !1, this.mAudioCancelFlag = !1, 
            this.mOnAudioStartFunc = null, this.mOnAudioStopFunc = null, t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this.mAudioContext && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mAudioContext ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype._closeAudioContext = function() {
            if (this.mAudioContextClass) {
                if (this.mAudioContext) try {
                    this.mAudioContext.close();
                } catch (t) {
                    this._exception('_closeAudioContext', t);
                }
                this.mAudioContext = null;
            }
        }, e.prototype._onAudioStart = function() {
            if ('function' == typeof this.mOnAudioStartFunc) try {
                return this.mOnAudioStartFunc();
            } catch (t) {
                return this._exception('_onAudioStart', t), -1;
            }
            return 0;
        }, e.prototype._onAudioStop = function() {
            if ('function' == typeof this.mOnAudioStopFunc) try {
                return this.mOnAudioStopFunc();
            } catch (t) {
                return this._exception('_onAudioStop', t), -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onAudioStart", {
            set: function(t) {
                this.mOnAudioStartFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onAudioStop", {
            set: function(t) {
                this.mOnAudioStopFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.getAudioContext = function() {
            return this.mAudioContext;
        }, e.prototype.setAudioFormat = function(t) {
            return "mp3" !== t && "wav" !== t ? (this._error('setAudioFormat', 'kein gueltiges Audioformat uebergeben: ' + t), 
            -1) : (this.mAudioFormat = t, 0);
        }, e.prototype.getAudioFormat = function() {
            return this.mAudioFormat;
        }, e.prototype.isLoad = function() {
            return this.mAudioLoadFlag;
        }, e.prototype.isPlay = function() {
            return this.mAudioPlayFlag;
        }, e.prototype.isCancel = function() {
            var t = this.mAudioCancelFlag;
            return this.mAudioCancelFlag = !1, t;
        }, e.prototype._cancel = function() {
            this.isLoad() && (this.mAudioCancelFlag = !0);
        }, e.prototype._loadAudioFile = function(t) {
            var e = this;
            if (!this.mXMLHttpRequest) return this._error('_loadAudioFile', 'keine XMLHttpRequest Klasse'), 
            -1;
            try {
                this.mAudioLoadFlag = !0, this.mRequest = new this.mXMLHttpRequest(), this.mRequest.open('GET', t, !0), 
                this.mRequest.responseType = 'arraybuffer';
                var n = this.mRequest;
                return this.mRequest.onload = function() {
                    e._decodeAudio();
                }, this.mRequest.onloadend = function() {
                    404 === n.status && e._error('_requestDialogFile', 'Error 404');
                }, this.mRequest.onerror = function(t) {
                    e.mAudioLoadFlag = !1, e._onError(t);
                }, this.mRequest.onabord = function(t) {
                    console.log('AudioPlayer._loadAudioFile: onabord', t), e.mAudioLoadFlag = !1;
                }, this.mRequest.send(), 0;
            } catch (t) {
                return this._exception('_loadAudioFile', t), this.mAudioLoadFlag = !1, -1;
            }
        }, e.prototype._decodeAudio = function() {
            var t = this;
            if (!this.isInit()) return this._error('_decodeAudio', 'nicht initialisiert'), -1;
            if (this.isCancel()) return this.mAudioLoadFlag = !1, 0;
            if (!this.mAudioContext) return this._error('_decodeAudio', 'kein AudioContext vorhanden'), 
            -1;
            try {
                return this.mAudioContext.decodeAudioData(this.mRequest.response, function(e) {
                    t.mAudioBuffer = e, t._playStart();
                }, function(e) {
                    t._error('_decodeAudio', 'DOMException'), t.mAudioLoadFlag = !1;
                }), 0;
            } catch (t) {
                return this._exception('_decodeAudio', t), this.mAudioLoadFlag = !1, -1;
            }
        }, e.prototype._playStart = function() {
            var t = this;
            if (!this.mAudioBuffer) return -1;
            if (this.isCancel()) return this.mAudioLoadFlag = !1, 0;
            if (!this.mAudioContext) return this._error('_playStart', 'kein AudioContext vorhanden'), 
            -1;
            try {
                return this.mAudioPlayFlag = !0, this.mAudioLoadFlag = !1, this.mAudioCancelFlag = !1, 
                this.mSource = this.mAudioContext.createBufferSource(), this.mSource.onended = function() {
                    t.isPlay() && (t.mAudioPlayFlag = !1, t._onAudioStop());
                }, this.mSource.buffer = this.mAudioBuffer, this.mSource.connect(this.mAudioContext.destination), 
                this.mSource.start(0), this._onAudioStart(), 0;
            } catch (t) {
                return this._exception('_playStart', t), this.mAudioPlayFlag = !1, -1;
            }
        }, e.prototype.play = function(t, e) {
            if (!this.isActive()) return this.isErrorOutput() && console.log('AudioPlayer.play: AudioPlayer ist nicht aktiv'), 
            0;
            (this.isLoad() || this.isPlay()) && (this._cancel(), this.stop());
            try {
                var n = './';
                t && (n = t);
                var o = n + e + '.' + this.mAudioFormat;
                return this.mSource = null, this.mAudioBuffer = null, this._loadAudioFile(o);
            } catch (t) {
                return this._exception('play', t), -1;
            }
        }, e.prototype.playFile = function(t) {
            if (!this.isActive()) return this.isErrorOutput() && console.log('AudioPlayer.playFile: AudioPlayer ist nicht aktiv'), 
            0;
            (this.isLoad() || this.isPlay()) && (this._cancel(), this.stop());
            try {
                return this.mSource = null, this.mAudioBuffer = null, this._loadAudioFile(t);
            } catch (t) {
                return this._exception('playFile', t), -1;
            }
        }, e.prototype.getPlayFunc = function() {
            var t = this;
            return function(e, n) {
                return t.play(e, n);
            };
        }, e.prototype.stop = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('AudioPlayer.stop: AudioPlayer ist nicht aktiv'), 
            0;
            if (this._cancel(), this.mSource) {
                try {
                    this.mAudioPlayFlag = !1, this.mSource.stop(0), this.mSource.disconnect(0);
                } catch (t) {
                    this._exception('stop', t);
                }
                this.mSource = null, this.mAudioBuffer = null, this.mAudioCancelFlag = !1, this._onAudioStop();
            }
            return this.mAudioLoadFlag = !1, 0;
        }, e.prototype.getStopFunc = function() {
            var t = this;
            return function() {
                return t.stop();
            };
        }, e;
    }(A), L = function(t) {
        function e() {
            return t.call(this, 'AudioPlayerFactory') || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getName = function() {
            return "AudioPlayerFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new P(new D(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || f;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), k = function() {
        function t(t) {
            if (this.mAudioPlayer = null, 0 !== this._init(t)) throw new Error('Audio nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            if (this.mAudioPlayer) return 0;
            try {
                var e = S.get("AudioPlayerFactory", L);
                return this.mAudioPlayer = _.get(f, e), this.mAudioPlayer ? this.mAudioPlayer.isInit() || 0 === this.mAudioPlayer.init(t) ? 0 : (console.log('Audio._init: AudioPlayer nicht initialisiert'), 
                -1) : (console.log('Audio._init: kein AudioPlayer erzeugt'), -1);
            } catch (t) {
                return console.log('Audio._init: Exception ', t.message), -1;
            }
        }, t.prototype.playFile = function(t) {
            return this.mAudioPlayer.playFile(t);
        }, t.prototype.stop = function() {
            return this.mAudioPlayer.stop();
        }, t;
    }(), T = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new k(e);
            } catch (t) {
                return console.log('AudioFactory.create: Exception', t), null;
            }
        }, t;
    }(), C = 'SpeakComponent', O = 'assets/', b = !1, R = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mSpeakComponent = null, n.mSpeakComponent = n.mComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Speak";
        }, e.prototype.isAudio = function() {
            return this.mSpeakComponent.isAudio();
        }, e.prototype.setAudioOn = function() {
            return this.mSpeakComponent.setAudioOn();
        }, e.prototype.setAudioOff = function() {
            return this.mSpeakComponent.setAudioOff();
        }, e.prototype.setAudioFormat = function(t) {
            return this.mSpeakComponent.setAudioFormat(t);
        }, e.prototype.getAudioFormat = function() {
            return this.mSpeakComponent.getAudioFormat();
        }, e.prototype.getAudioContext = function() {
            return this.mSpeakComponent.getAudioContext();
        }, e.prototype.setAudioFilePath = function(t) {
            return this.mSpeakComponent.setAudioFilePath(t);
        }, e.prototype.getAudioFilePath = function() {
            return this.mSpeakComponent.getAudioFilePath();
        }, e.prototype.setAudioFileName = function(t) {
            return this.mSpeakComponent.setAudioFileName(t);
        }, e.prototype.getAudioFileName = function() {
            return this.mSpeakComponent.getAudioFileName();
        }, e.prototype.setTTS = function(t) {
            return this.mSpeakComponent.setTTS(t);
        }, e.prototype.getTTS = function() {
            return this.mSpeakComponent.getTTS();
        }, e.prototype.getTTSList = function() {
            return this.mSpeakComponent.getTTSList();
        }, e.prototype.setLanguage = function(t) {
            return this.mSpeakComponent.setLanguage(t);
        }, e.prototype.getLanguage = function() {
            return this.mSpeakComponent.getLanguage();
        }, e.prototype.getLanguageList = function() {
            return this.mSpeakComponent.getLanguageList();
        }, e.prototype.setVoice = function(t) {
            return this.mSpeakComponent.setVoice(t);
        }, e.prototype.getVoice = function() {
            return this.mSpeakComponent.getVoice();
        }, e.prototype.getVoiceList = function() {
            return this.mSpeakComponent.getVoiceList();
        }, e.prototype.setSpeakText = function(t) {
            return this.mSpeakComponent.setSpeakText(t);
        }, e.prototype.getSpeakText = function() {
            return this.mSpeakComponent.getSpeakText();
        }, e;
    }(h), N = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new R(e);
            } catch (t) {
                return console.log('===> EXCEPTION SpeakFactory.create: Exception', t.message), 
                null;
            }
        }, t;
    }(), x = 'ListenComponent', w = x, B = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mListenComponent = null, n.mListenComponent = n.mComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Listen";
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.mListenComponent.addListenResultEvent(t, e);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.mListenComponent.removeListenResultEvent(t);
        }, e.prototype.setLanguage = function(t) {
            return this.mListenComponent.setLanguage(t);
        }, e.prototype.getLanguage = function() {
            return this.mListenComponent.getLanguage();
        }, e.prototype.abort = function() {
            return this.mListenComponent.abort();
        }, e;
    }(h), I = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new B(e);
            } catch (t) {
                return console.log('ListenFactory.create: Exception', t), null;
            }
        }, t;
    }(), M = 'DialogComponent', K = 'assets/', G = 'speech.def', q = !1, H = 'main', V = 'root', j = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mDialogComponent = null, n.mDialogComponent = n.mDialogComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Dialog";
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.mDialogComponent.addDialogParseEvent(t, e);
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.mDialogComponent.addDialogSetEvent(t, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.mDialogComponent.addDialogStartEvent(t, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.mDialogComponent.addDialogStopEvent(t, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.mDialogComponent.addDialogStateSetEvent(t, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.mDialogComponent.addDialogActionEvent(t, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.mDialogComponent.addDialogActionStopEvent(t, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.mDialogComponent.addDialogSpeakEvent(t, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.mDialogComponent.addDialogSpeakStartEvent(t, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.mDialogComponent.addDialogSpeakStopEvent(t, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.mDialogComponent.addErrorEvent(t, e);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.mDialogComponent.removeDialogParseEvent(t);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.mDialogComponent.removeDialogSetEvent(t);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.mDialogComponent.removeDialogStartEvent(t);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.mDialogComponent.removeDialogStopEvent(t);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.mDialogComponent.removeDialogStateSetEvent(t);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.mDialogComponent.removeDialogActionEvent(t);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.mDialogComponent.removeDialogActionStopEvent(t);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.mDialogComponent.removeDialogSpeakEvent(t);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.mDialogComponent.removeDialogSpeakStartEvent(t);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.mDialogComponent.removeDialogSpeakStopEvent(t);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.mDialogComponent.removeErrorEvent(t);
        }, e.prototype.removeAllEvent = function(t) {
            return this.mDialogComponent.removeAllEvent(t);
        }, e.prototype.parseSpeechDefFile = function(t) {
            return this.mDialogComponent.parseSpeechDefFile(t);
        }, e.prototype.parseSpeechDefData = function(t) {
            return this.mDialogComponent.parseSpeechDefData(t);
        }, e.prototype.clearDialog = function() {
            return this.mDialogComponent.clearDialog();
        }, e.prototype.setDialog = function(t) {
            return this.mDialogComponent.setDialog(t);
        }, e.prototype.getDialog = function() {
            return this.mDialogComponent.getDialog();
        }, e.prototype.toggleDialog = function() {
            return this.mDialogComponent.toggleDialog();
        }, e.prototype.setDialogFilePath = function(t) {
            return this.mDialogComponent.setDialogFilePath(t);
        }, e.prototype.getDialogFilePath = function() {
            return this.mDialogComponent.getDialogFilePath();
        }, e.prototype.setDialogFileName = function(t) {
            return this.mDialogComponent.setDialogFileName(t);
        }, e.prototype.getDialogFileName = function() {
            return this.mDialogComponent.getDialogFileName();
        }, e.prototype.loadDialogFile = function(t) {
            return this.mDialogComponent.loadDialogFile(t);
        }, e.prototype.writeDialogData = function(t) {
            return this.mDialogComponent.writeDialogData(t);
        }, e.prototype.skipNextSpeak = function() {
            return this.mDialogComponent.skipNextSpeak();
        }, e.prototype.setDialogState = function(t, e) {
            return this.mDialogComponent.setDialogState(t, e);
        }, e.prototype.getDialogState = function() {
            return this.mDialogComponent.getDialogState();
        }, e.prototype.setDialogStateContext = function(t) {
            return this.mDialogComponent.setDialogStateContext(t);
        }, e;
    }(h), X = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new j(e);
            } catch (t) {
                return console.log('DialogFactory.create: Exception', t), null;
            }
        }, t;
    }(), U = 'BotComponent', z = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mBotComponent = null, n.mBotComponent = n.mComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Bot";
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.mBotComponent.addDialogSetEvent(t, e);
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.mBotComponent.addDialogParseEvent(t, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.mBotComponent.addDialogStartEvent(t, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.mBotComponent.addDialogStopEvent(t, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.mBotComponent.addDialogStateSetEvent(t, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.mBotComponent.addDialogActionEvent(t, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.mBotComponent.addDialogActionStopEvent(t, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.mBotComponent.addDialogSpeakEvent(t, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.mBotComponent.addDialogSpeakStartEvent(t, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.mBotComponent.addDialogSpeakStopEvent(t, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.mBotComponent.addErrorEvent(t, e);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.mBotComponent.removeDialogSetEvent(t);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.mBotComponent.removeDialogParseEvent(t);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.mBotComponent.removeDialogStartEvent(t);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.mBotComponent.removeDialogStopEvent(t);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.mBotComponent.removeDialogStateSetEvent(t);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.mBotComponent.removeDialogActionEvent(t);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.mBotComponent.removeDialogActionStopEvent(t);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.mBotComponent.removeDialogSpeakEvent(t);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.mBotComponent.removeDialogSpeakStartEvent(t);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.mBotComponent.removeDialogSpeakStopEvent(t);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.mBotComponent.removeErrorEvent(t);
        }, e.prototype.removeAllEvent = function(t) {
            return this.mBotComponent.removeAllEvent(t);
        }, e.prototype.isSpeak = function() {
            return this.mBotComponent.isSpeak();
        }, e.prototype.setSpeakOn = function() {
            return this.mBotComponent.setSpeakOn();
        }, e.prototype.setSpeakOff = function() {
            return this.mBotComponent.setSpeakOff();
        }, e.prototype.getSpeak = function() {
            return this.mBotComponent.getSpeak();
        }, e.prototype.isListen = function() {
            return this.mBotComponent.isListen();
        }, e.prototype.setListenOn = function() {
            return this.mBotComponent.setListenOn();
        }, e.prototype.setListenOff = function() {
            return this.mBotComponent.setListenOff();
        }, e.prototype.getListen = function() {
            return this.mBotComponent.getListen();
        }, e.prototype.isAction = function() {
            return this.mBotComponent.isAction();
        }, e.prototype.setActionOn = function() {
            return this.mBotComponent.setActionOn();
        }, e.prototype.setActionOff = function() {
            return this.mBotComponent.setActionOff();
        }, e.prototype.getAction = function() {
            return this.mBotComponent.getAction();
        }, e.prototype.parseSpeechDefFile = function(t) {
            return this.mBotComponent.parseSpeechDefFile(t);
        }, e.prototype.parseSpeechDefData = function(t) {
            return this.mBotComponent.parseSpeechDefData(t);
        }, e.prototype.clearDialog = function() {
            return this.mBotComponent.clearDialog();
        }, e.prototype.setDialog = function(t) {
            return this.mBotComponent.setDialog(t);
        }, e.prototype.getDialog = function() {
            return this.mBotComponent.getDialog();
        }, e.prototype.toggleDialog = function() {
            return this.mBotComponent.toggleDialog();
        }, e.prototype.setDialogFilePath = function(t) {
            return this.mBotComponent.setDialogFilePath(t);
        }, e.prototype.getDialogFilePath = function() {
            return this.mBotComponent.getDialogFilePath();
        }, e.prototype.setDialogFileName = function(t) {
            return this.mBotComponent.setDialogFileName(t);
        }, e.prototype.getDialogFileName = function() {
            return this.mBotComponent.getDialogFileName();
        }, e.prototype.loadDialogFile = function(t) {
            return this.mBotComponent.loadDialogFile(t);
        }, e.prototype.writeDialogData = function(t) {
            return this.mBotComponent.writeDialogData(t);
        }, e.prototype.skipNextSpeak = function() {
            return this.mBotComponent.skipNextSpeak();
        }, e.prototype.setDialogState = function(t, e) {
            return this.mBotComponent.setDialogState(t, e);
        }, e.prototype.getDialogState = function() {
            return this.mBotComponent.getDialogState();
        }, e.prototype.setDialogStateContext = function(t) {
            return this.mBotComponent.setDialogStateContext(t);
        }, e.prototype.clearContext = function() {
            return this.mBotComponent.clearContext();
        }, e.prototype.addContextElement = function(t, e) {
            return this.mBotComponent.addContextElement(t, e);
        }, e.prototype.removeContextElement = function(t, e) {
            return this.mBotComponent.removeContextElement(t, e);
        }, e;
    }(h), W = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new z(e);
            } catch (t) {
                return console.log('BotFactory.create: Exception', t.message), null;
            }
        }, t;
    }(), Y = function(t) {
        function e() {
            var e = t.call(this, 'PortList') || this;
            return e.mPortList = new Map(), e.mPortIterator = e.mPortList.values(), e;
        }
        return u(e, t), e.prototype.getSize = function() {
            return this.mPortList.size;
        }, e.prototype.insert = function(t, e) {
            try {
                return t ? e ? this.mPortList.has(t) ? (this._error('insert', 'Port existiert bereits: ' + t), 
                -1) : (this.mPortList.set(t, e), 0) : (this._error('insert', 'kein Port uebergeben'), 
                -1) : (this._error('insert', 'kein Portname uebergeben'), -1);
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.find = function(t) {
            try {
                return this.mPortList.get(t);
            } catch (t) {
                return void this._exception('find', t);
            }
        }, e.prototype.first = function() {
            try {
                return this.mPortIterator = this.mPortList.values(), this.mPortIterator.next().value;
            } catch (t) {
                return void this._exception('first', t);
            }
        }, e.prototype.next = function() {
            try {
                return this.mPortIterator.next().value;
            } catch (t) {
                return void this._exception('next', t);
            }
        }, e.prototype.remove = function(t) {
            try {
                return this.mPortList.delete(t), 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.clear = function() {
            try {
                return this.mPortList.clear(), 0;
            } catch (t) {
                return this._exception('clear', t), -1;
            }
        }, e;
    }(p), Z = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            t.mPortList.setErrorOutputOn(), t.mErrorBase.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            t.mPortList.setErrorOutputOff(), t.mErrorBase.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(e) {
            t.mPortList._setErrorOutputFunc(e), t.mErrorBase._setErrorOutputFunc(e);
        }, t.getSize = function() {
            return t.mPortList.getSize();
        }, t.get = function(e, n) {
            if (!e) return t.mErrorBase._error('get', 'kein Portname uebergeben'), null;
            var o = t.find(e);
            if (o) return o;
            if (!n) return t.mErrorBase._error('get', 'keine Portklasse uebergeben'), null;
            try {
                o = new n(e);
            } catch (e) {
                return t.mErrorBase._exception('get', e), null;
            }
            return e !== o.getName() ? (t.mErrorBase._error('get', 'Portnamen stimmen nicht ueberein ' + e + ' != ' + o.getName()), 
            t.remove(o.getName()), null) : o;
        }, t.find = function(e) {
            var n = t.mPortList.find(e);
            return n || null;
        }, t.insert = function(e, n) {
            return t.mPortList.insert(e, n);
        }, t.remove = function(e) {
            return t.mPortList.remove(e);
        }, t.clear = function() {
            for (var e = t.mPortList.first(); e; ) {
                try {
                    e.done(!0);
                } catch (e) {
                    t.mErrorBase._exception('clear', e);
                }
                e = t.mPortList.next();
            }
            return t.mPortList.clear();
        }, t.mPortList = new Y(), t.mErrorBase = new p('PortManager'), t;
    }(), J = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            l.setErrorOutputOn(), S.setErrorOutputOn(), _.setErrorOutputOn(), Z.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            l.setErrorOutputOff(), S.setErrorOutputOff(), _.setErrorOutputOff(), Z.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(t) {
            l._setErrorOutputFunc(t), S._setErrorOutputFunc(t), _._setErrorOutputFunc(t), Z._setErrorOutputFunc(t);
        }, t.insertBuilder = function(t, e) {
            return l.mBuilderList.insert(t, e);
        }, t.getBuilder = function(t, e) {
            return l.get(t, e);
        }, t.findBuilder = function(t) {
            return l.find(t);
        }, t.insertPort = function(t, e) {
            return Z.mPortList.insert(t, e);
        }, t.clear = function() {
            l.clear(), S.clear(), _.clear(), Z.clear();
        }, t;
    }(), Q = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, 'Builder') || this;
            if (o._setErrorClassName(o.getClass()), n && 0 !== l.insert(e || o.getName(), o)) throw new Error('Builder ' + o.getName() + ' existiert bereits im BuilderManager');
            return o;
        }
        return u(e, t), e.prototype.getType = function() {
            return '';
        }, e.prototype.getClass = function() {
            return 'Builder';
        }, e.prototype.getName = function() {
            return 'Builder';
        }, e.prototype.build = function() {
            return null;
        }, e.prototype._getBuilder = function(t, e) {
            return l.get(t, e);
        }, e.prototype._getFactory = function(t, e) {
            return S.get(t, e);
        }, e.prototype._getComponent = function(t, e, n) {
            if (e) {
                var o = this._getBuilder(e, n);
                if (o) return o.build();
            }
            return _.get(t);
        }, e.prototype._getPlugin = function(t, e, n) {
            if (e && n) {
                var o = this._getFactory(e, n);
                if (o) return _.get(t, o);
            }
            return _.get(t);
        }, e;
    }(p), $ = 'ActionFunction', tt = function(t) {
        function e() {
            var e = t.call(this, 'ActionFunctionList') || this;
            return e.mActionStartFuncList = new Map(), e.mActionStopFuncList = new Map(), e.mStopActionFunc = function() {
                return 0;
            }, e;
        }
        return u(e, t), e.prototype.clear = function() {
            this.mActionStartFuncList.clear(), this.mActionStopFuncList.clear(), this.mStopActionFunc = function() {
                return 0;
            };
        }, e.prototype.insert = function(t, e, n) {
            if (!t) return this._error('insert', 'kein Action-Funktionsname uebergeben'), -1;
            if (this.mActionStartFuncList.get(t)) return this._error('insert', 'Actionsfunktion bereits eingetragen'), 
            -1;
            if ('function' != typeof e) return this._error('insert', 'keine StartAction-Funktion uebergeben'), 
            -1;
            try {
                return this.mActionStartFuncList.set(t, e), 'function' == typeof n ? this.mActionStopFuncList.set(t, n) : this.mActionStopFuncList.set(t, function() {
                    return 0;
                }), 0;
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.remove = function(t) {
            if (!t) return this._error('remove', 'kein Action-Funktionsname uebergeben'), -1;
            try {
                return this.mActionStartFuncList.delete(t), this.mActionStopFuncList.delete(t), 
                0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.startAction = function(t) {
            if (!t.action) return this._error('startAction', 'kein Action Name'), -1;
            this.mStopActionFunc = function() {
                return 0;
            };
            try {
                var e = this.mActionStartFuncList.get(t.action);
                return 'function' != typeof e ? 0 : (this.mStopActionFunc = this.mActionStopFuncList.get(t.action), 
                e(t), 0);
            } catch (t) {
                return this._exception('startAction', t), -1;
            }
        }, e.prototype.stopAction = function() {
            var t = this.mStopActionFunc;
            this.mStopActionFunc = function() {
                return 0;
            };
            try {
                return 'function' != typeof t ? 0 : (t(), 0);
            } catch (t) {
                return this._exception('stopAction:', t), -1;
            }
        }, e;
    }(p), et = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, $, e) || this;
            return n.mActionFunctionList = new tt(), n._setErrorClassName('ActionFunction'), 
            n.mActionFunctionList._setErrorOutputFunc(n._getErrorOutputFunc()), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mActionFunctionList.clear(), t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mActionFunctionList._setErrorOutput(e);
        }, e.prototype.getStartActionFunc = function() {
            var t = this;
            return function(e) {
                return t.startAction(e);
            };
        }, e.prototype.getStopActionFunc = function() {
            var t = this;
            return function() {
                return t.stopAction();
            };
        }, e.prototype.startAction = function(t) {
            return this.mActionFunctionList.startAction(t);
        }, e.prototype.stopAction = function() {
            return this.mActionFunctionList.stopAction();
        }, e.prototype.insert = function(t, e, n) {
            return this.mActionFunctionList.insert(t, e, n);
        }, e.prototype.remove = function(t) {
            return this.mActionFunctionList.remove(t);
        }, e.prototype.clear = function() {
            return this.mActionFunctionList.clear(), 0;
        }, e;
    }(A), nt = function(t) {
        function e() {
            return t.call(this, 'ActionFunctionFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionFunctionFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new et(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || $;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), ot = 'ActionElement', it = function(t) {
        function e() {
            var e = t.call(this, 'ActionElementList') || this;
            return e.mActionFuncList = new Map(), e.mActionStopFuncList = new Map(), e;
        }
        return u(e, t), e.prototype.clear = function() {
            this.mActionFuncList.clear(), this.mActionStopFuncList.clear();
        }, e.prototype.insert = function(t, e, n) {
            if (!t) return this._error('insert', 'kein Elementname uebergeben'), -1;
            if (this.mActionFuncList.get(t)) return this._error('insert', 'Element bereits eingetragen'), 
            -1;
            if ('function' != typeof e) return this._error('insert', 'keine ActionStart-Funktion uebergeben'), 
            -1;
            if ('function' != typeof n) return this._error('insert', 'keine ActionStop-Funktion uebergeben'), 
            -1;
            try {
                var o = [ e, n ];
                return this.mActionFuncList.set(t, o), 0;
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.remove = function(t) {
            if (!t) return this._error('remove', 'kein Action-Elementname uebergeben'), -1;
            try {
                return this.mActionFuncList.delete(t), 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e.prototype.getStartAction = function(t) {
            try {
                var e = this.mActionFuncList.get(t);
                if (e) return e[0];
            } catch (t) {
                this._exception('getStartAction', t);
            }
            return this._error('getStartAction', 'keine Funktion vorhanden'), function(t) {
                return 0;
            };
        }, e.prototype.getStopAction = function(t) {
            try {
                var e = this.mActionFuncList.get(t);
                if (e) return e[1];
            } catch (t) {
                this._exception('getStopAction', t);
            }
            return this._error('getStopAction', 'keine Funktion vorhanden'), function() {
                return 0;
            };
        }, e.prototype.getActionTuple = function(t) {
            try {
                return this.mActionFuncList.get(t);
            } catch (t) {
                return this._exception('getActionTupel', t), null;
            }
        }, e.prototype.startAction = function(t) {
            try {
                var e = t.id || '';
                if (!e) return this._error('startAction', 'kein Elementname vorhanden'), -1;
                var n = this.getActionTuple(e);
                if (!n) return 0;
                var o = n[0];
                if ('function' != typeof o) return this._error('startAction', 'keine StartAction-Funktion vorhanden'), 
                -1;
                var i = n[1];
                return 'function' != typeof i ? (this._error('startAction', 'keine StopAction-Funktion vorhanden'), 
                -1) : (this.mActionStopFuncList.set(e, i), o(t), 0);
            } catch (t) {
                return this._exception('startAction', t), -1;
            }
        }, e.prototype.stopAction = function() {
            try {
                return this.mActionStopFuncList.forEach(function(t) {
                    'function' == typeof t && t();
                }), this.mActionStopFuncList.clear(), 0;
            } catch (t) {
                return this._exception('stopAction', t), -1;
            }
        }, e;
    }(p), rt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ot, e) || this;
            return n.mActionElementList = new it(), n._setErrorClassName('ActionElement'), n.mActionElementList._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mActionElementList.clear(), t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mActionElementList._setErrorOutput(e);
        }, e.prototype.getStartActionFunc = function() {
            var t = this;
            return function(e) {
                return t.startAction(e);
            };
        }, e.prototype.getStopActionFunc = function() {
            var t = this;
            return function() {
                return t.stopAction();
            };
        }, e.prototype.startAction = function(t) {
            return this.mActionElementList.startAction(t);
        }, e.prototype.stopAction = function() {
            return this.mActionElementList.stopAction();
        }, e.prototype.insert = function(t, e, n) {
            return this.mActionElementList.insert(t, e, n);
        }, e.prototype.remove = function(t) {
            return this.mActionElementList.remove(t);
        }, e.prototype.clear = function() {
            return this.mActionElementList.clear(), 0;
        }, e;
    }(A), ut = function(t) {
        function e() {
            return t.call(this, 'ActionElementFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionElementFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new rt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ot;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), st = 'init', at = 'start', pt = 'stop', ct = 'error', lt = 'listenResult', ht = 'dialogSet', mt = 'dialogStart', gt = 'dialogStop', ft = 'dialogParse', yt = 'dialogStateSet', dt = 'dialogAction', St = 'dialogActionStop', vt = 'dialogSpeak', _t = 'dialogSpeakStart', Et = 'dialogSpeakStop', At = function(t) {
        function e(e, n) {
            var o = t.call(this, 'EventFunctionList') || this;
            return o.mEventName = 'Event', o.mComponentName = 'Component', o.mFunctionList = new Map(), 
            o.mEventName = e, o.mComponentName = n, o;
        }
        return u(e, t), e.prototype.setComponentName = function(t) {
            this.mComponentName = t;
        }, e.prototype.getComponentName = function() {
            return this.mComponentName;
        }, e.prototype.getName = function() {
            return this.mEventName;
        }, e.prototype.getSize = function() {
            return this.mFunctionList.size;
        }, e.prototype.addListener = function(t, e) {
            return t ? 'function' != typeof e ? (this._error('addListener', 'keine Eventfunktion uebergeben ' + t + ',' + this.getComponentName() + ',' + this.getName()), 
            -1) : this.mFunctionList.has(t) ? (this._error('addListener', 'Eventfunktion bereits vorhanden ' + t + ',' + this.getComponentName() + ',' + this.getName()), 
            -1) : (this.mFunctionList.set(t, e), 0) : (this._error('addListener', 'kein Listenername uebergeben ' + this.getComponentName() + ',' + this.getName()), 
            -1);
        }, e.prototype.removeListener = function(t) {
            return t ? (this.mFunctionList.delete(t), 0) : (this._error('removeListener', "kein Listenername uebergeben," + this.getComponentName() + ',' + this.getName()), 
            -1);
        }, e.prototype.dispatch = function(t) {
            var e = this, n = 0;
            return this.mFunctionList.forEach(function(o) {
                try {
                    0 !== o(t) && (n = -1);
                } catch (t) {
                    return e._exception('dispatch', t), n = -1, -1;
                }
            }), n;
        }, e.prototype.clear = function() {
            this.mFunctionList.clear();
        }, e;
    }(p), Ft = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mSendMessageFunc = null, o.mPluginList = new v(), o.mCurrentPlugin = null, 
            o.mPluginList._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'PluginGroup';
        }, e.prototype.getClass = function() {
            return 'PluginGroup';
        }, e.prototype.init = function(e) {
            return 0 !== t.prototype.init.call(this, e) ? -1 : 0 !== this.startAllPlugin(e) ? (this._clearInit(), 
            -1) : 0;
        }, e.prototype.done = function() {
            return this.mCurrentPlugin = null, this.stopAllPlugin(), t.prototype.done.call(this);
        }, e.prototype.setFeatureList = function(e) {
            if ('object' != typeof e) return this._error('setFeatureList', 'keine gueltige Feature Liste'), 
            -1;
            if (function(t) {
                for (var e in t) if (t.hasOwnProperty(e)) return !1;
                return !0;
            }(e)) return 0;
            try {
                for (var n = t.prototype.setFeatureList.call(this, e), o = this.mPluginList.first(); o; ) 0 !== o.setFeatureList(e) && (n = -1), 
                o = this.mPluginList.next();
                return n;
            } catch (t) {
                return this._exception('setFeatureList', t), -1;
            }
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mPluginList._setErrorOutput(e), 
            this._setErrorOutputAllPlugin(e);
        }, e.prototype.insertPlugin = function(t, e) {
            return this.mPluginList.insert(t, e);
        }, e.prototype.removePlugin = function(t) {
            return this.mPluginList.remove(t);
        }, e.prototype.removeAllPlugin = function() {
            return this.mPluginList.clear();
        }, e.prototype.findPlugin = function(t, e) {
            var n = this.mPluginList.find(t);
            return n || null;
        }, e.prototype.firstPlugin = function() {
            return this.mPluginList.first();
        }, e.prototype.nextPlugin = function() {
            return this.mPluginList.next();
        }, e.prototype.getPluginNameList = function() {
            return this.mPluginList.getNameList();
        }, e.prototype.isCurrentPlugin = function() {
            return !!this.mCurrentPlugin;
        }, e.prototype.setCurrentPlugin = function(t) {
            var e = this.findPlugin(t);
            return e ? (this.mCurrentPlugin = e, 0) : (this._error('setCurrentPlugin', 'Kein Plugin vorhanden'), 
            0);
        }, e.prototype.getCurrentPlugin = function() {
            return this.mCurrentPlugin;
        }, e.prototype.getCurrentPluginName = function() {
            return this.mCurrentPlugin ? this.mCurrentPlugin.getName() : '';
        }, e.prototype.isPlugin = function(t) {
            return !!this.mPluginList.find(t);
        }, e.prototype.getPluginSize = function() {
            return this.mPluginList.getSize();
        }, e.prototype.startPlugin = function(t, e) {
            var n = this.mPluginList.find(t);
            return n ? n.isInit() ? 0 : n.init(e) : (this._error('startPlugin', 'Plugin nicht vorhanden'), 
            -1);
        }, e.prototype.stopPlugin = function(t) {
            var e = this.mPluginList.find(t);
            return e ? e.done() : (this._error('stopPlugin', 'Plugin nicht vorhanden'), -1);
        }, e.prototype.startAllPlugin = function(t) {
            try {
                for (var e = 0, n = this.mPluginList.first(); n; ) n.isInit() || 0 === n.init(t) || (e = -1), 
                n = this.mPluginList.next();
                return e;
            } catch (t) {
                return this._exception('startAllPlugin', t), -1;
            }
        }, e.prototype.stopAllPlugin = function() {
            try {
                for (var t = 0, e = this.mPluginList.first(); e; ) 0 !== e.done() && (t = -1), e = this.mPluginList.next();
                return t;
            } catch (t) {
                return this._exception('stopAllPlugin', t), -1;
            }
        }, e.prototype._setErrorOutputAllPlugin = function(t) {
            try {
                for (var e = this.mPluginList.first(); e; ) t ? e.setErrorOutputOn() : e.setErrorOutputOff(), 
                e = this.mPluginList.next();
                return 0;
            } catch (t) {
                return this._exception('_setErrorOutputAllPlugin', t), -1;
            }
        }, e;
    }(A), Dt = function(t) {
        function n(n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n, o) || this;
            return i.mStartEvent = new At(at, e), i.mStopEvent = new At(pt, e), i.mRunningFlag = !1, 
            i.mStartEvent.setComponentName(n), i.mStopEvent.setComponentName(n), i.mStartEvent._setErrorOutputFunc(i._getErrorOutputFunc()), 
            i.mStopEvent._setErrorOutputFunc(i._getErrorOutputFunc()), i;
        }
        return u(n, t), n.prototype.getType = function() {
            return "Base";
        }, n.prototype.getClass = function() {
            return 'BaseComponent';
        }, n.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, n.prototype.getServerVersion = function() {
            return '';
        }, n.prototype._setOption = function(t) {
            return 0;
        }, n.prototype._initAllPlugin = function() {
            return 0;
        }, n.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('BaseComponent.init: bereits initialisiert'), 
            0) : 0 !== t.prototype.init.call(this, e) ? -1 : 0 !== this._initAllPlugin() ? (this._clearInit(), 
            -1) : (this._setOption(e), 0);
        }, n.prototype._doneAllPlugin = function() {}, n.prototype._doneAllEvent = function() {}, 
        n.prototype._doneAllAttribute = function() {}, n.prototype.done = function() {
            return this.isRunning() && this.stop(), this._doneAllEvent(), this.mStartEvent.clear(), 
            this.mStopEvent.clear(), this._doneAllPlugin(), this._doneAllAttribute(), t.prototype.done.call(this);
        }, n.prototype._resetAllDefault = function() {}, n.prototype.reset = function(t) {
            return this.isInit() ? (this.isRunning() && this.stop(), this.setActiveOn(), this._resetAllDefault(), 
            this._setOption(t), 0) : (this._error('reset', 'Komponente nicht initialisiert'), 
            -1);
        }, n.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mStartEvent._setErrorOutput(e), 
            this.mStopEvent._setErrorOutput(e);
        }, n.prototype._onStart = function() {
            return this.mStartEvent.dispatch();
        }, n.prototype._onStop = function() {
            return this.mStopEvent.dispatch();
        }, Object.defineProperty(n.prototype, "onStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "onStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case at:
                i = this.mStartEvent.addListener(e, o);
                break;

              case pt:
                i = this.mStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, n.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case at:
                o = this.mStartEvent.removeListener(e);
                break;

              case pt:
                o = this.mStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, n.prototype.addInitEvent = function(t, e) {
            return this.addEventListener(t, st, e);
        }, n.prototype.addStartEvent = function(t, e) {
            return this.addEventListener(t, at, e);
        }, n.prototype.addStopEvent = function(t, e) {
            return this.addEventListener(t, pt, e);
        }, n.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, ct, e);
        }, n.prototype.removeInitEvent = function(t) {
            return this.removeEventListener(t, st);
        }, n.prototype.removeStartEvent = function(t) {
            return this.removeEventListener(t, at);
        }, n.prototype.removeStopEvent = function(t) {
            return this.removeEventListener(t, pt);
        }, n.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, ct);
        }, n.prototype.removeAllEvent = function(t) {
            return t ? (this.removeInitEvent(t), this.removeStartEvent(t), this.removeStopEvent(t), 
            this.removeErrorEvent(t), 0) : (this._error('removeAllEvent', 'kein Pluginname uebergeben'), 
            -1);
        }, n.prototype.getStartFunc = function() {
            var t = this;
            return function() {
                return t.start();
            };
        }, n.prototype.getStopFunc = function() {
            var t = this;
            return function() {
                return t.stop();
            };
        }, n.prototype.isRunning = function() {
            return !!this.isActive() && this.mRunningFlag;
        }, n.prototype.start = function() {
            return 0;
        }, n.prototype.stop = function() {
            return 0;
        }, n.prototype.test = function(t, e) {
            return {
                result: -1,
                errorText: 'kein Test implementiert'
            };
        }, n;
    }(function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mSendMessageFunc = null, o.mInitEvent = new At(st), o.mErrorEvent = new At(ct), 
            o.mInitEvent.setComponentName(e), o.mErrorEvent.setComponentName(e), o.mInitEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mErrorEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'Component';
        }, e.prototype.getClass = function() {
            return 'Component';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.init = function(e) {
            return 0 !== t.prototype.init.call(this, e) ? -1 : 0;
        }, e.prototype.done = function() {
            return this.mInitEvent.clear(), this.mErrorEvent.clear(), t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mInitEvent._setErrorOutput(e), this.mErrorEvent._setErrorOutput(e), 
            this._setErrorOutputAllPlugin(e);
        }, e.prototype.connect = function() {
            return 0;
        }, e.prototype.isConnect = function() {
            return !0;
        }, e.prototype.getNetType = function() {
            return 'undefined';
        }, e.prototype._addEventListenerAllPlugin = function(t, n, o) {
            try {
                for (var i = -1, r = this.mPluginList.first(); r; ) {
                    if (r instanceof e) {
                        r && 0 === r.addEventListener(t, n, o) && (i = 0);
                    }
                    r = this.mPluginList.next();
                }
                return i;
            } catch (t) {
                return this._exception('addEventListenerAllPlugin', t), -1;
            }
        }, e.prototype._removeEventListenerAllPlugin = function(t, n) {
            try {
                for (var o = -1, i = this.mPluginList.first(); i; ) {
                    if (i instanceof e) {
                        i && 0 === i.removeEventListener(t, n) && (o = 0);
                    }
                    i = this.mPluginList.next();
                }
                return o;
            } catch (t) {
                return this._exception('removeEventListenerAllPlugin', t), -1;
            }
        }, e.prototype.setSendMessageFunc = function(t) {
            return this.mSendMessageFunc = t, 0;
        }, e.prototype.sendMessage = function(t) {
            return 'function' != typeof this.mSendMessageFunc ? -1 : this.mSendMessageFunc(t);
        }, e.prototype.handleMessage = function(t) {
            try {
                var e = 0;
                switch (t.event) {
                  case st:
                    e = this.mInitEvent.dispatch(t);
                    break;

                  case ct:
                    e = this.mErrorEvent.dispatch(t);
                    break;

                  default:
                    this._error('handleMessage', 'ungueltige Nachricht: ' + t.event), e = -1;
                }
                return e;
            } catch (t) {
                return this._exception('handleMessage', t), -1;
            }
        }, e.prototype._onInit = function() {
            return this.mInitEvent.dispatch(this.getName());
        }, Object.defineProperty(e.prototype, "onInit", {
            get: function() {
                var t = this;
                return function() {
                    return t._onInit();
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._onError = function(t) {
            return this.mErrorEvent.dispatch(t);
        }, Object.defineProperty(e.prototype, "onError", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onError(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addEventListener = function(t, e, n) {
            var o = 0;
            switch (e) {
              case st:
                o = this.mInitEvent.addListener(t, n);
                break;

              case ct:
                this._addEventListenerAllPlugin(t, e, n), o = this.mErrorEvent.addListener(t, n);
                break;

              default:
                o = this._addEventListenerAllPlugin(t, e, n);
            }
            return o;
        }, e.prototype.removeEventListener = function(t, e) {
            var n = 0;
            switch (e) {
              case st:
                n = this.mInitEvent.removeListener(t);
                break;

              case ct:
                this._removeEventListenerAllPlugin(t, e), n = this.mErrorEvent.removeListener(t);
                break;

              default:
                n = this._removeEventListenerAllPlugin(t, e);
            }
            return n;
        }, e;
    }(Ft)), Pt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var o = t.call(this, n, e) || this;
            return o.mActionFunction = null, o.mActionElement = null, o.mActionRunningFlag = !1, 
            o.mActionName = '', o.mActionElementType = '', o.mActionElementName = '', o.mActionTimeout = i, 
            o.mActionTimeoutId = 0, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Action";
        }, e.prototype.getClass = function() {
            return 'ActionComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._initAllPlugin = function() {
            return this.mActionFunction = this.findPlugin($), this.mActionElement = this.findPlugin(ot), 
            0;
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mActionFunction = null, this.mActionElement = null;
        }, e.prototype._doneAllAttribute = function() {
            this.mActionName = '', this.mActionElementType = '', this.mActionElementName = '', 
            this.mActionTimeout = i;
        }, e.prototype._resetAllDefault = function() {
            this.mActionName = '', this.mActionElementType = '', this.mActionElementName = '', 
            this.mActionTimeout = i;
        }, e.prototype.reset = function(e) {
            return t.prototype.reset.call(this, e);
        }, e.prototype.getActionFunc = function() {
            var t = this;
            return function(e) {
                return t.action(e);
            };
        }, e.prototype.setActionName = function(t) {
            return this.mActionName = t, 0;
        }, e.prototype.getActionName = function() {
            return this.mActionName;
        }, e.prototype.setElementType = function(t) {
            return this.mActionElementType = t, 0;
        }, e.prototype.getElementType = function() {
            return this.mActionElementType;
        }, e.prototype.setElementName = function(t) {
            return this.mActionElementName = t, 0;
        }, e.prototype.getElementName = function() {
            return this.mActionElementName;
        }, e.prototype.isRunning = function() {
            return !!this.isActive() && this.mActionRunningFlag;
        }, e.prototype.action = function(t) {
            var e = this;
            if (!this.isActive()) return 0;
            if (this.isRunning()) return this._error('startAction', 'Aktion laeuft bereits'), 
            -1;
            this.mActionRunningFlag = !0;
            var n = 0;
            return this.mActionFunction && 0 !== this.mActionFunction.startAction(t) && (n = -1), 
            this.mActionElement && 0 !== this.mActionElement.startAction(t) && (n = -1), this.mActionTimeoutId = setTimeout(function() {
                return e.stop();
            }, this.mActionTimeout), this._onStart(), n;
        }, e.prototype.start = function() {
            if (!this.mActionName) return this._error('startAction', 'kein Aktionsname vorhanden'), 
            -1;
            if (!this.mActionElementName) return this._error('startAction', 'kein Elementname vorhanden'), 
            -1;
            var t = {
                action: this.mActionName,
                type: this.mActionElementType,
                id: this.mActionElementName
            };
            return this.action(t);
        }, e.prototype.stop = function() {
            if (!this.isActive()) return 0;
            if (this.mActionTimeoutId && (clearTimeout(this.mActionTimeoutId), this.mActionTimeoutId = 0), 
            !this.isRunning()) return 0;
            var t = 0;
            return this.mActionFunction && 0 !== this.mActionFunction.stopAction() && (t = -1), 
            this.mActionElement && 0 !== this.mActionElement.stopAction() && (t = -1), this.mActionRunningFlag = !1, 
            this._onStop(), t;
        }, e.prototype.addFunction = function(t, e, n) {
            return this.mActionFunction ? this.mActionFunction.insert(t, e, n) : (this._error('addFunction', 'kein ActionFunction-Plugin vorhanden'), 
            -1);
        }, e.prototype.removeFunction = function(t) {
            return this.mActionFunction ? this.mActionFunction.remove(t) : (this._error('removeFunction', 'kein ActionFunction-Plugin vorhanden'), 
            -1);
        }, e.prototype.addElement = function(t, e, n) {
            return this.mActionElement ? this.mActionElement.insert(t, e, n) : (this._error('addElement', 'kein ActionElement-Plugin vorhanden'), 
            -1);
        }, e.prototype.removeElement = function(t) {
            return this.mActionElement ? this.mActionElement.remove(t) : (this._error('removeElement', 'kein ActionElement-Plugin vorhanden'), 
            -1);
        }, e;
    }(Dt), Lt = function(t) {
        function e() {
            return t.call(this, 'ActionComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionComponentFactory";
        }, e.prototype.getType = function() {
            return "Action";
        }, e.prototype._newPlugin = function(t, e) {
            return new Pt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var o = t || n;
            try {
                return this._newPlugin(o, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), kt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'ActionComponentBuilder', n) || this;
            return o.mActionComponent = null, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'ActionComponentBuilder';
        }, e.prototype.getName = function() {
            return "ActionComponentBuilder";
        }, e.prototype.getType = function() {
            return "Action";
        }, e.prototype.build = function() {
            if (this.mActionComponent) return this.mActionComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin($, "ActionFunctionFactory", nt), n = this._getPlugin(ot, "ActionElementFactory", ut);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mActionComponent || (this.mActionComponent = this._getPlugin(n, "ActionComponentFactory", Lt)), 
            this.mActionComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t ? e ? n ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'ActionFunction-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'ActionElement-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onError = t.onError, n.onError = t.onError, 0) : (this._error('_binder', 'Kein ActionElement-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Kein ActionFunction-Plugin vorhanden'), -1) : (this._error('_binder', 'Keine Action-Komponente vorhanden'), 
            -1);
        }, e;
    }(Q), Tt = 'ASR', Ct = 'ASRMock', Ot = 'ASRHtml5', bt = 3e4, Rt = "de-DE", Nt = function(t) {
        function e() {
            return t.call(this, 'SpeechRecognitionFactory') || this;
        }
        return u(e, t), e.prototype.getSpeechRecognitionClass = function() {
            try {
                return window.SpeechRecognition || window.webkitSpeechRecognition || null;
            } catch (t) {
                return this._exception('getSpeechRecognitionClass', t), null;
            }
        }, e.prototype.getSpeechGrammarListClass = function() {
            try {
                return window.SpeechGrammarList || window.webkitSpeechGrammarList || null;
            } catch (t) {
                return this._exception('getSpeechGrammarListClass', t), null;
            }
        }, e;
    }(p), xt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Tt, n) || this;
            return o.mListenRunningFlag = !1, o.mListenLanguage = Rt, o.mListenTimeoutId = 0, 
            o.mListenTimeoutTime = bt, o.mOnListenStartFunc = null, o.mOnListenStopFunc = null, 
            o.mOnListenResultFunc = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "ASR";
        }, e.prototype.getClass = function() {
            return 'ASRPlugin';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : 0 !== t.prototype.init.call(this, e) ? -1 : this._detectRecognition() ? 0 !== this._initRecognition(e) ? (this.setActiveOff(), 
            0) : 0 : (this.setActiveOff(), 0);
        }, e.prototype.done = function() {
            return this.isListenRunning() && this.stopListen(), this._clearRecognitionTimeout(), 
            this.mListenTimeoutTime = bt, this.mListenRunningFlag = !1, this.mListenLanguage = Rt, 
            this.mOnListenStartFunc = null, this.mOnListenStopFunc = null, this.mOnListenResultFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this._isRecognition() && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this._isRecognition() ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype._onListenStart = function() {
            try {
                return 'function' == typeof this.mOnListenStartFunc ? this.mOnListenStartFunc() : 0;
            } catch (t) {
                return this._exception('_onListenStart', t), -1;
            }
        }, e.prototype._onListenStop = function() {
            try {
                return 'function' == typeof this.mOnListenStopFunc ? this.mOnListenStopFunc() : 0;
            } catch (t) {
                return this._exception('_onListenStop', t), -1;
            }
        }, e.prototype._onListenResult = function(t) {
            try {
                return 'function' == typeof this.mOnListenResultFunc ? this.mOnListenResultFunc(t) : 0;
            } catch (t) {
                return this._exception('_onListenResult', t), -1;
            }
        }, Object.defineProperty(e.prototype, "onListenStart", {
            set: function(t) {
                this.mOnListenStartFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStop", {
            set: function(t) {
                this.mOnListenStopFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenResult", {
            set: function(t) {
                this.mOnListenResultFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._detectRecognition = function() {
            return !1;
        }, e.prototype._initRecognition = function(t) {
            return -1;
        }, e.prototype._isRecognition = function() {
            return !1;
        }, e.prototype._setRecognitionTimeout = function() {
            var t = this;
            this._clearRecognitionTimeout(), this.mListenTimeoutId = setTimeout(function() {
                t.stopListen();
            }, this.mListenTimeoutTime);
        }, e.prototype._clearRecognitionTimeout = function() {
            this.mListenTimeoutId && (clearTimeout(this.mListenTimeoutId), this.mListenTimeoutId = 0);
        }, e.prototype._onRecognitionStart = function() {
            return 0;
        }, e.prototype._onRecognitionEnd = function() {
            return this._stopListen();
        }, e.prototype._onRecognitionSpeechStart = function() {
            return this._clearRecognitionTimeout(), 0;
        }, e.prototype._onRecognitionSpeechEnd = function() {
            return this._stopListen();
        }, e.prototype._getRecognitionResult = function(t) {
            return t;
        }, e.prototype._onRecognitionResult = function(t) {
            var e = 0;
            try {
                e = this._onListenResult(this._getRecognitionResult(t));
            } catch (t) {
                this._exception('_onRecognitionResult', t), e = -1;
            }
            return 0 !== this._stopListen() && (e = -1), e;
        }, e.prototype._onRecognitionNoMatch = function(t) {
            return this._stopListen();
        }, e.prototype._onRecognitionError = function(t) {
            try {
                var e = t;
                if ('string' == typeof t.error && !t.message) switch (t.error) {
                  case 'network':
                    e = new Error('Netzwerk nicht eingeschaltet');
                    break;

                  case 'no-speech':
                    e = new Error('Keine Sprache aufgenommen');
                    break;

                  default:
                    e = new Error(t.error);
                }
                var n = this._onError(e);
                return 0 !== this._stopListen() && (n = -1), n;
            } catch (t) {
                return this._exception('_onRecognitionError', t), -1;
            }
        }, e.prototype._startRecognition = function() {
            return -1;
        }, e.prototype._stopRecognition = function() {
            return -1;
        }, e.prototype._abortRecognition = function() {
            return -1;
        }, e.prototype.setLanguage = function(t) {
            var e = 0;
            switch (t) {
              case 'de':
                this.mListenLanguage = "de-DE";
                break;

              case 'en':
                this.mListenLanguage = "en-US";
                break;

              default:
                e = -1;
            }
            return e;
        }, e.prototype.getLanguage = function() {
            var t = '';
            switch (this.mListenLanguage) {
              case "de-DE":
                t = 'de';
                break;

              case "en-US":
                t = 'en';
            }
            return t;
        }, e.prototype._getASRLanguage = function() {
            return this.mListenLanguage;
        }, e.prototype.isListenRunning = function() {
            return this.mListenRunningFlag;
        }, e.prototype.setListenTimeout = function(t) {
            this.mListenTimeoutTime = t;
        }, e.prototype.startListen = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('ASRPlugin.startListen: ASR ist nicht aktiv'), 
            0;
            if (this.isListenRunning()) return this._error('startListen', 'Spracheingabe laeuft bereits'), 
            -1;
            this._setRecognitionTimeout();
            try {
                if (0 !== this._startRecognition()) return -1;
            } catch (t) {
                return this._exception('startListen', t), -1;
            }
            return this.mListenRunningFlag = !0, this._onListenStart();
        }, e.prototype.getStartListenFunc = function() {
            var t = this;
            return function() {
                return t.startListen();
            };
        }, e.prototype._stopListen = function() {
            var t = 0;
            return this.isListenRunning() && (this._clearRecognitionTimeout(), this.mListenRunningFlag = !1, 
            0 !== this._onListenStop() && (t = -1)), t;
        }, e.prototype.stopListen = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('ASRPlugin.stopListen: ASR ist nicht aktiv'), 
            0;
            if (!this.isListenRunning()) return 0;
            this._clearRecognitionTimeout();
            var t = 0;
            try {
                t = this._stopRecognition();
            } catch (e) {
                this._exception('stopListen', e), t = -1;
            }
            return this.isListenRunning() && (this.mListenRunningFlag = !1, 0 !== this._onListenStop() && (t = -1)), 
            t;
        }, e.prototype.getStopListenFunc = function() {
            var t = this;
            return function() {
                return t.stopListen();
            };
        }, e.prototype.abortListen = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('ASRPlugin.abortListen: ASR ist nicht aktiv'), 
            0;
            if (!this.isListenRunning()) return 0;
            this._clearRecognitionTimeout();
            var t = 0;
            try {
                t = this._abortRecognition();
            } catch (e) {
                this._exception('abortListen', e), t = -1;
            }
            return this.isListenRunning() && (this.mListenRunningFlag = !1, 0 !== this._onListenStop() && (t = -1)), 
            t;
        }, e;
    }(A), wt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Ct, n) || this;
            return o.recognitionFlag = !0, o.recognitionResult = '', o.initRecognitionResult = 0, 
            o.startRecognitionResult = 0, o.startRecognitionExceptionFlag = !1, o.startRecognitionExceptionText = 'TestException startRecognition', 
            o.stopRecognitionResult = 0, o.stopRecognitionExceptionFlag = !1, o.stopRecognitionExceptionText = 'TestException stopRecognition', 
            o.abortRecognitionResult = 0, o.abortRecognitionExceptionFlag = !1, o.abortRecognitionExceptionText = 'TestException abortRecognition', 
            o.onStartFunc = function() {
                return 0;
            }, o.onEndFunc = function() {
                return 0;
            }, o.onSpeechStartFunc = function() {
                return 0;
            }, o.onSpeechEndFunc = function() {
                return 0;
            }, o.onResultFunc = function() {
                return '';
            }, o.onNoMatchFunc = function() {
                return 0;
            }, o.onErrorFunc = function() {
                return 0;
            }, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'ASRMock';
        }, e.prototype.isMock = function() {
            return !0;
        }, e.prototype.done = function() {
            return this.recognitionFlag = !0, this.recognitionResult = null, this.initRecognitionResult = 0, 
            this.startRecognitionResult = 0, this.stopRecognitionResult = 0, this.abortRecognitionResult = 0, 
            this.startRecognitionExceptionFlag = !1, this.stopRecognitionExceptionFlag = !1, 
            this.abortRecognitionExceptionFlag = !1, this.startRecognitionExceptionText = 'TestException startRecognition', 
            this.stopRecognitionExceptionText = 'TestException stopRecognition', this.abortRecognitionExceptionText = 'TestException abortRecognition', 
            this.onStartFunc = function() {
                return 0;
            }, this.onEndFunc = function() {
                return 0;
            }, this.onSpeechStartFunc = function() {
                return 0;
            }, this.onSpeechEndFunc = function() {
                return 0;
            }, this.onResultFunc = function() {
                return '';
            }, this.onNoMatchFunc = function() {
                return 0;
            }, this.onErrorFunc = function() {
                return 0;
            }, t.prototype.done.call(this);
        }, e.prototype._detectRecognition = function() {
            return this.recognitionFlag;
        }, e.prototype._initRecognition = function(t) {
            return this.initRecognitionResult;
        }, e.prototype._isRecognition = function() {
            return this.recognitionFlag;
        }, e.prototype._getRecognitionResult = function(t) {
            return this.recognitionResult;
        }, e.prototype._startRecognition = function() {
            if (this.startRecognitionExceptionFlag) throw new Error(this.startRecognitionExceptionText);
            return this.onStartFunc(), this.onSpeechStartFunc(), this.onResultFunc(), this.onNoMatchFunc(), 
            this.onSpeechEndFunc(), this.onErrorFunc(), this.onEndFunc(), this.startRecognitionResult;
        }, e.prototype._stopRecognition = function() {
            if (this.stopRecognitionExceptionFlag) throw new Error(this.stopRecognitionExceptionText);
            return this.onSpeechEndFunc(), this.onErrorFunc(), this.onEndFunc(), this.stopRecognitionResult;
        }, e.prototype._abortRecognition = function() {
            if (this.abortRecognitionExceptionFlag) throw new Error(this.abortRecognitionExceptionText);
            return this.onEndFunc(), this.onErrorFunc(), this.abortRecognitionResult;
        }, e;
    }(xt), Bt = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || Ot, o) || this;
            return i.mRecognitionFactory = null, i.mRecognitionClass = null, i.mGrammarListClass = null, 
            i.mGrammarList = null, i.mRecognition = null, i.mRecognitionFactory = e, i.mRecognitionFactory._setErrorOutputFunc(i._getErrorOutputFunc()), 
            i;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'ASRHtml5';
        }, e.prototype.done = function() {
            if (this.isListenRunning() && this.mRecognition) try {
                this.mRecognition.abort();
            } catch (t) {
                this._exception('done', t);
            }
            return this.mRecognitionClass = null, this.mGrammarListClass = null, this.mGrammarList = null, 
            this.mRecognition = null, t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            this.mRecognitionFactory && this.mRecognitionFactory._setErrorOutput(e), t.prototype._setErrorOutput.call(this, e);
        }, e.prototype._detectRecognition = function() {
            if (!this.mRecognitionFactory) return this._error('_detectRecognition', 'keine Recognition-Fabrik vorhanden'), 
            !1;
            try {
                this.mRecognitionClass = this.mRecognitionFactory.getSpeechRecognitionClass();
            } catch (t) {
                return this._exception('_detectRecognition', t), !1;
            }
            return null !== this.mRecognitionClass || (this._error('_detectRecognition', 'Kein HTML5 SpeechRecognition API vorhanden'), 
            !1);
        }, e.prototype._initRecognition = function(t) {
            var e = this;
            try {
                this.mRecognition = new this.mRecognitionClass(), this.mRecognition.lang = this._getASRLanguage(), 
                this.mRecognition.continuous = !1, this.mRecognition.interimResults = !1, this.mRecognition.maxAlternatives = 1;
            } catch (t) {
                return this._exception('_initRecognition', t), -1;
            }
            return this.mRecognition.onstart = function() {
                return e._onRecognitionStart();
            }, this.mRecognition.onend = function() {
                return e._onRecognitionEnd();
            }, this.mRecognition.onspeechstart = function() {
                return e._onRecognitionSpeechStart();
            }, this.mRecognition.onspeechend = function() {
                return e._onRecognitionSpeechEnd();
            }, this.mRecognition.onresult = function(t) {
                return e._onRecognitionResult(t);
            }, this.mRecognition.onnomatch = function(t) {
                return e._onRecognitionNoMatch(t);
            }, this.mRecognition.onerror = function(t) {
                return e._onRecognitionError(t);
            }, 0;
        }, e.prototype._isRecognition = function() {
            return !!this.mRecognition;
        }, e.prototype._getRecognitionResult = function(t) {
            return t.results[0][0].transcript;
        }, e.prototype._startRecognition = function() {
            return this.mRecognition ? (this.mRecognition.lang = this._getASRLanguage(), this.mRecognition.abort(), 
            this.mRecognition.start(), 0) : -1;
        }, e.prototype._stopRecognition = function() {
            return this.mRecognition ? (this.mRecognition.stop(), 0) : -1;
        }, e.prototype._abortRecognition = function() {
            return this.mRecognition ? (this.mRecognition.abort(), 0) : -1;
        }, e.prototype.test = function(t, e) {
            var n = '', o = -1, i = '';
            switch (t) {
              case 'say':
                e && e.sayText && (n = e.sayText), this.mRecognition && 'function' == typeof this.mRecognition.say ? (this.mRecognition.say(n), 
                o = 0) : i = 'Kein Corti-Mock von SpeechRecognition vorhanden';
                break;

              default:
                i = 'kein gueltiges Testkommando uebergeben';
            }
            return {
                result: o,
                errorText: i
            };
        }, e;
    }(xt), It = function(t) {
        function e() {
            return t.call(this, 'ASRFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "ASR";
        }, e.prototype.getName = function() {
            return "ASRFactory";
        }, e.prototype._newPlugin = function(t, e) {
            var n = null;
            switch (t) {
              case Tt:
              case Ot:
                n = new Bt(new Nt(), t, e);
                break;

              case Ct:
                n = new wt(Ct, e);
                break;

              default:
                this._error('_newPlugin', 'keine ASR vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Tt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), Mt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, x, e) || this;
            return n.mASRPlugin = null, n.mListenResultEvent = new At(lt, x), n.mASRActiveFlag = !1, 
            n.mASRFeatureFlag = !1, n.mListenResultEvent._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Listen";
        }, e.prototype.getClass = function() {
            return 'ListenComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? (e.listenLanguage && this.setLanguage(e.listenLanguage), t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype._initAllPlugin = function() {
            return this.mASRPlugin = this.findPlugin(Tt), this.mASRPlugin && (this.mASRActiveFlag = this.mASRPlugin.isActive()), 
            0;
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mASRPlugin = null;
        }, e.prototype._doneAllEvent = function() {
            this.mListenResultEvent.clear();
        }, e.prototype._doneAllAttribute = function() {
            this.mASRActiveFlag = !1, this.mASRFeatureFlag = !1;
        }, e.prototype._resetAllDefault = function() {
            this.setLanguage("de");
        }, e.prototype.reset = function(e) {
            return t.prototype.reset.call(this, e);
        }, e.prototype.isActive = function() {
            return !!this.mASRActiveFlag && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mASRActiveFlag ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype.setFeatureList = function(t) {
            return t.features ? (t.features.ASR && 'boolean' == typeof t.features.ASR && (this.mASRFeatureFlag = t.features.ASR), 
            0) : (this._error('setFeatureList', 'keine FeatureInfos uebergeben'), -1);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mListenResultEvent._setErrorOutput(e);
        }, e.prototype._onListenResult = function(t) {
            return this.mListenResultEvent.dispatch(t);
        }, Object.defineProperty(e.prototype, "onListenResult", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onListenResult(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case lt:
                i = this.mListenResultEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case lt:
                o = this.mListenResultEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.addEventListener(t, lt, e);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.removeEventListener(t, lt);
        }, e.prototype.removeAllEvent = function(e) {
            return t.prototype.removeAllEvent.call(this, e), this.removeListenResultEvent(e), 
            0;
        }, e.prototype.setLanguage = function(t) {
            return this.mASRPlugin ? this.mASRPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mASRPlugin ? this.mASRPlugin.getLanguage() : "";
        }, e.prototype.isRunning = function() {
            return !!this.isActive() && (!!this.mASRPlugin && this.mASRPlugin.isListenRunning());
        }, e.prototype.start = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.startListen() : (this._error('start', 'kein ASR vorhanden'), 
            -1) : 0;
        }, e.prototype.stop = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.stopListen() : (this._error('stop', 'kein ASR vorhanden'), 
            -1) : 0;
        }, e.prototype.abort = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.abortListen() : (this._error('abort', 'kein ASR vorhanden'), 
            -1) : 0;
        }, e.prototype.test = function(t, e) {
            var n = '';
            switch (t) {
              case 'say':
                if (this.mASRPlugin) return this.mASRPlugin.test(t, e);
                n = 'kein ASRPlugin vorhanden';
                break;

              default:
                n = 'kein gueltiges Testkommando uebergeben';
            }
            return {
                result: -1,
                errorText: n
            };
        }, e;
    }(Dt), Kt = function(t) {
        function e() {
            return t.call(this, 'ListenComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ListenComponentFactory";
        }, e.prototype.getType = function() {
            return "Listen";
        }, e.prototype._newPlugin = function(t, e) {
            return new Mt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || x;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), Gt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'ListenComponentBuilder', n) || this;
            return o.mListenComponent = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Listen";
        }, e.prototype.getClass = function() {
            return 'ListenComponentBuilder';
        }, e.prototype.getName = function() {
            return "ListenComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mListenComponent) return this.mListenComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(Tt, "ASRFactory", It);
                return 0 !== this._binder(t, e) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mListenComponent || (this.mListenComponent = this._getPlugin(x, "ListenComponentFactory", Kt)), 
            this.mListenComponent;
        }, e.prototype._binder = function(t, e) {
            return t ? e ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'ASR-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onListenStart = t.onStart, e.onListenStop = t.onStop, e.onListenResult = t.onListenResult, 
            e.onError = t.onError, 0) : (this._error('_binder', 'Kein ASR-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Listen-Komponente vorhanden'), -1);
        }, e;
    }(Q), qt = 'TTS', Ht = 'TTSMock', Vt = 'TTSHtml5', jt = 'TTSNuance', Xt = 'TTSGroup', Ut = Xt, zt = "de-DE", Wt = function(t) {
        function e() {
            return t.call(this, 'SpeechSynthesisFactory') || this;
        }
        return u(e, t), e.prototype.getSpeechSynthesisUtteranceClass = function() {
            try {
                return window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance || null;
            } catch (t) {
                return this._exception('getSpeechSynthesisUtteranceClass', t), null;
            }
        }, e.prototype.getSpeechSynthesis = function() {
            try {
                return window.speechSynthesis || null;
            } catch (t) {
                return this._exception('getSpeechSynthesis', t), null;
            }
        }, e;
    }(p), Yt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || qt, n) || this;
            return o.mSpeakRunningFlag = !1, o.mSpeakLanguage = zt, o.mSpeakVoice = '', o.mOnSpeakStartFunc = null, 
            o.mOnSpeakStopFunc = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "TTS";
        }, e.prototype.getClass = function() {
            return 'TTSPlugin';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : 0 !== t.prototype.init.call(this, e) ? -1 : this._detectSynthesis() ? 0 !== this._initSynthesis(e) ? (this._clearInit(), 
            -1) : (e && e.language && this.setLanguage(e.language), e && e.voice && this.setVoice(e.voice), 
            0) : (this.setActiveOff(), 0);
        }, e.prototype.done = function() {
            return this.isSpeakRunning() && this.stopSpeak(), this.mSpeakRunningFlag = !1, this.mSpeakLanguage = zt, 
            this.mSpeakVoice = '', this.mOnSpeakStartFunc = null, this.mOnSpeakStopFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this._isSynthesis() && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this._isSynthesis() ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype._onSpeakStart = function() {
            if ('function' == typeof this.mOnSpeakStartFunc) try {
                return this.mOnSpeakStartFunc();
            } catch (t) {
                return this._exception('_onSpeakStart', t), -1;
            }
            return 0;
        }, e.prototype._onSpeakStop = function() {
            if ('function' == typeof this.mOnSpeakStopFunc) try {
                return this.mOnSpeakStopFunc();
            } catch (t) {
                return this._exception('_onSpeakStop', t), -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onSpeakStart", {
            set: function(t) {
                this.mOnSpeakStartFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onSpeakStop", {
            set: function(t) {
                this.mOnSpeakStopFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._detectSynthesis = function() {
            return !1;
        }, e.prototype._initSynthesis = function(t) {
            return -1;
        }, e.prototype._isSynthesis = function() {
            return !1;
        }, e.prototype._onSynthesisStart = function() {
            return 0;
        }, e.prototype._onSynthesisEnd = function() {
            var t = 0;
            return this.isSpeakRunning() && (this.mSpeakRunningFlag = !1, t = this._onSpeakStop()), 
            t;
        }, e.prototype._onSynthesisError = function(t) {
            try {
                var e = this._onError(t.error);
                return this.isSpeakRunning() && (this.mSpeakRunningFlag = !1, 0 !== this._onSpeakStop() && (e = -1)), 
                e;
            } catch (t) {
                return this._exception('_onSynthesisError', t), -1;
            }
        }, e.prototype._createSynthesis = function(t) {
            return -1;
        }, e.prototype._startSynthesis = function(t) {
            return -1;
        }, e.prototype._stopSynthesis = function() {
            return -1;
        }, e.prototype.setTTS = function(t) {
            return 0;
        }, e.prototype.getTTS = function() {
            return this.getName();
        }, e.prototype.getTTSList = function() {
            return [ this.getName() ];
        }, e.prototype.setLanguage = function(t) {
            var e = 0;
            switch (t) {
              case 'de':
                this.mSpeakLanguage = "de-DE";
                break;

              case 'en':
                this.mSpeakLanguage = "en-US";
                break;

              default:
                e = -1;
            }
            return e;
        }, e.prototype.getLanguage = function() {
            var t = '';
            switch (this.mSpeakLanguage) {
              case "de-DE":
                t = 'de';
                break;

              case "en-US":
                t = 'en';
            }
            return t;
        }, e.prototype.getLanguageList = function() {
            return [ 'de', 'en' ];
        }, e.prototype._getTTSLanguage = function() {
            return this.mSpeakLanguage;
        }, e.prototype.setVoice = function(t) {
            return this.mSpeakVoice = t, 0;
        }, e.prototype.getVoice = function() {
            return this.mSpeakVoice;
        }, e.prototype.getVoiceList = function() {
            return [];
        }, e.prototype.isSpeakRunning = function() {
            return this.mSpeakRunningFlag;
        }, e.prototype.startSpeak = function(t) {
            if (!this.isActive()) return this.isErrorOutput() && console.log('TTSPlugin.startSpeak: TTS ist nicht aktiv'), 
            0;
            if (!t) return this._error('startSpeak', 'kein text uebergeben'), -1;
            if (this.isSpeakRunning()) return this._error('startSpeak', 'Sprachausgabe laeuft bereits'), 
            -1;
            this.mSpeakRunningFlag = !0;
            try {
                return 0 !== this._createSynthesis(t) ? (this.mSpeakRunningFlag = !1, -1) : 0 !== this._startSynthesis(t) ? (this.mSpeakRunningFlag = !1, 
                -1) : this._onSpeakStart();
            } catch (t) {
                return this._exception('startSpeak', t), this.mSpeakRunningFlag = !1, -1;
            }
        }, e.prototype.getStartSpeakFunc = function() {
            var t = this;
            return function(e) {
                return t.startSpeak(e);
            };
        }, e.prototype.stopSpeak = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('TTSPlugin.stopSpeak: TTS ist nicht aktiv'), 
            0;
            if (!this.isSpeakRunning()) return this.isErrorOutput() && console.log('TTSPlugin.stopSpeak: keine aktive Sprachausgabe'), 
            0;
            var t = 0;
            try {
                t = this._stopSynthesis();
            } catch (e) {
                this._exception('stopSpeak', e), t = -1;
            }
            return this.isSpeakRunning() && (this.mSpeakRunningFlag = !1, 0 !== this._onSpeakStop() && (t = -1)), 
            t;
        }, e.prototype.getStopSpeakFunc = function() {
            var t = this;
            return function() {
                return t.stopSpeak();
            };
        }, e;
    }(A), Zt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Ht, n) || this;
            return o.synthesisFlag = !0, o.initSynthesisResult = 0, o.startSynthesisResult = 0, 
            o.startSynthesisExceptionFlag = !1, o.startSynthesisExceptionText = 'TestException startSynthesis', 
            o.stopSynthesisResult = 0, o.stopSynthesisExceptionFlag = !1, o.stopSynthesisExceptionText = 'TestException stopSynthesis', 
            o.onStartFunc = function() {
                return 0;
            }, o.onEndFunc = function() {
                return 0;
            }, o.onErrorFunc = function() {
                return 0;
            }, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'TTSMock';
        }, e.prototype.isMock = function() {
            return !0;
        }, e.prototype.done = function() {
            return this.synthesisFlag = !0, this.initSynthesisResult = 0, this.startSynthesisResult = 0, 
            this.stopSynthesisResult = 0, this.startSynthesisExceptionFlag = !1, this.stopSynthesisExceptionFlag = !1, 
            this.startSynthesisExceptionText = 'TestException startSynthesis', this.stopSynthesisExceptionText = 'TestException stopSynthesis', 
            this.onStartFunc = function() {
                return 0;
            }, this.onEndFunc = function() {
                return 0;
            }, this.onErrorFunc = function() {
                return 0;
            }, t.prototype.done.call(this);
        }, e.prototype._detectSynthesis = function() {
            return this.synthesisFlag;
        }, e.prototype._initSynthesis = function(t) {
            return this._onInit(), this.initSynthesisResult;
        }, e.prototype._isSynthesis = function() {
            return this.synthesisFlag;
        }, e.prototype._createSynthesis = function(t) {
            return 0;
        }, e.prototype._startSynthesis = function(t) {
            if (this.startSynthesisExceptionFlag) throw new Error(this.startSynthesisExceptionText);
            return this.onStartFunc(), this.onErrorFunc(), this.onEndFunc(), this.startSynthesisResult;
        }, e.prototype._stopSynthesis = function() {
            if (this.stopSynthesisExceptionFlag) throw new Error(this.stopSynthesisExceptionText);
            return this.onErrorFunc(), this.onEndFunc(), this.stopSynthesisResult;
        }, e;
    }(Yt), Jt = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || Vt, o) || this;
            return i.mSynthesis = null, i.mUtteranceClass = null, i.mUtterance = null, i.mSynthesisFactory = e, 
            i.mSynthesisFactory._setErrorOutputFunc(i._getErrorOutputFunc()), i;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'TTSHtml5';
        }, e.prototype.done = function() {
            if (this.isSpeakRunning() && this.mSynthesis) try {
                this.mSynthesis.cancel();
            } catch (t) {
                this._exception('done', t);
            }
            return this.mSynthesis = null, this.mUtteranceClass = null, this.mUtterance = null, 
            t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            this.mSynthesisFactory && this.mSynthesisFactory._setErrorOutput(e), t.prototype._setErrorOutput.call(this, e);
        }, e.prototype.getVoiceList = function() {
            if (!this.mSynthesis) return this._error('getVoiceList', 'keine SpeechSynthesis vorhanden'), 
            [];
            var t = this._getTTSLanguage();
            if (!t) return this._error('getVoiceList', 'keine Sprache vorhanden'), [];
            var e = [];
            try {
                var n = this.mSynthesis.getVoices();
                if (!Array.isArray(n)) return this._error('getVoiceList', 'keine Voice-Liste als Array vorhanden'), 
                [];
                for (var o = 0; o < n.length; o++) n[o].lang === t && e.push(n[o].name);
                return e;
            } catch (t) {
                return this._exception('getVoiceList', t), [];
            }
        }, e.prototype._getTTSVoice = function(t) {
            if (void 0 === t && (t = !0), this.mSynthesis) {
                var e = this._getTTSLanguage();
                if (e) {
                    var n = this.getVoice();
                    try {
                        var o = this.mSynthesis.getVoices();
                        if (!Array.isArray(o)) return void this._error('_getTTSVoice', 'keine Voice-Liste als Array vorhanden');
                        if (n) for (var i = 0; i < o.length; i++) if (o[i].name === n) return o[i];
                        var r = void 0, u = void 0;
                        for (i = 0; i < o.length; i++) if (o[i].lang === e && (r || o[i].localService !== t || (r = o[i]), 
                        o[i].default && (u = o[i], o[i].localService === t))) return u;
                        return r || u;
                    } catch (t) {
                        return void this._exception('_getTTSVoice', t);
                    }
                } else this._error('_getTTSVoice', 'keine Sprache vorhanden');
            } else this._error('_getTTSVoice', 'keine SpeechSynthesis vorhanden');
        }, e.prototype._detectSynthesis = function() {
            if (!this.mSynthesisFactory) return this._error('_detectSynthesis', 'keine SpeechSynthesis-Fabrik vorhanden'), 
            !1;
            try {
                this.mSynthesis = this.mSynthesisFactory.getSpeechSynthesis(), this.mUtteranceClass = this.mSynthesisFactory.getSpeechSynthesisUtteranceClass();
            } catch (t) {
                return this._exception('_detectSynthesis', t), !1;
            }
            return null === this.mSynthesis ? (this._error('_detectSynthesis', 'Kein HTML5 SpeechSynthesis API vorhanden'), 
            !1) : null !== this.mUtteranceClass || (this._error('_detectSynthesis', 'Kein HTML5 SpeechSynthesisUtterance API vorhanden'), 
            !1);
        }, e.prototype._initSynthesis = function(t) {
            return this._onInit();
        }, e.prototype._createSynthesis = function(t) {
            var e = this;
            try {
                this.mUtterance = new this.mUtteranceClass(t), this.mUtterance.lang = this._getTTSLanguage(), 
                this.mUtterance.voice = this._getTTSVoice();
            } catch (t) {
                return this._exception('_createSynthesis', t), -1;
            }
            return this.mUtterance.onstart = function() {
                return e._onSynthesisStart();
            }, this.mUtterance.onend = function() {
                return e._onSynthesisEnd();
            }, this.mUtterance.onerror = function(t) {
                return e._onSynthesisError(t);
            }, 0;
        }, e.prototype._isSynthesis = function() {
            return !!this.mSynthesis;
        }, e.prototype._startSynthesis = function(t) {
            return this.mSynthesis && this.mUtterance ? (this.mSynthesis.cancel(), this.mSynthesis.speak(this.mUtterance), 
            0) : -1;
        }, e.prototype._stopSynthesis = function() {
            return this.mSynthesis ? (this.mSynthesis.cancel(), 0) : -1;
        }, e;
    }(Yt), Qt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || jt, n) || this;
            return o.mNuancePort = null, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'TTSNuance';
        }, e.prototype.done = function() {
            return this.mNuancePort && (this.mNuancePort.removeAllEvent(jt), this.mNuancePort.done(), 
            this.mNuancePort = null), t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mNuancePort && (e ? this.mNuancePort.setErrorOutputOn() : this.mNuancePort.setErrorOutputOff());
        }, e.prototype.getVoiceList = function() {
            return 'de' === this.getLanguage() ? [ 'Anna-ML', 'Petra-ML', 'Markus', 'Yannick' ] : 'en' === this.getLanguage() ? [ 'Allison', 'Ava', 'Samantha', 'Susan', 'Zoe', 'Tom' ] : [];
        }, e.prototype._detectSynthesis = function() {
            return this.mNuancePort = Z.find("Nuance"), !!this.mNuancePort || (this._error('_detectSynthesis', 'kein Nuance-Port vorhanden'), 
            !1);
        }, e.prototype._initSynthesis = function(t) {
            var e = this;
            return this.mNuancePort ? (this.mNuancePort.addOpenEvent(jt, function(t) {
                return e._onInit(), 0;
            }), this.mNuancePort.addStartEvent(jt, function(t) {
                return e._onSynthesisStart(), 0;
            }), this.mNuancePort.addStopEvent(jt, function(t) {
                return e._onSynthesisEnd(), 0;
            }), this.mNuancePort.addErrorEvent(jt, function(t) {
                return e._onError(t), 0;
            }), 0 !== this.mNuancePort.init(t) ? (this._error('_initSynthesis', 'Nuance-Port nicht initialisiert'), 
            -1) : 0 !== this.mNuancePort.open(t) ? (this._error('_initSynthesis', 'Nuance-Port nicht geoeffnet'), 
            -1) : 0) : (this._error('_initSynthesis', 'kein Nuance-Port vorhanden'), -1);
        }, e.prototype._isSynthesis = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("TTS");
        }, e.prototype._createSynthesis = function(t) {
            return 0;
        }, e.prototype._startSynthesis = function(t) {
            return this.mNuancePort ? (console.log('TTSNuance._startSynthesis:', this._getTTSLanguage(), this.getVoice()), 
            this.mNuancePort.start("TTS", {
                text: t,
                language: this._getTTSLanguage(),
                voice: this.getVoice()
            })) : -1;
        }, e.prototype._stopSynthesis = function() {
            return this.mNuancePort ? this.mNuancePort.stop("TTS") : -1;
        }, e;
    }(Yt), $t = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || Xt, o) || this;
            return i.mTTSFactory = null, i.mTTSHtml5 = null, i.mTTSNuance = null, i.mCurrentTTS = null, 
            i.mTTSFactory = e, i._insertAllTTS(), i;
        }
        return u(e, t), e.prototype.getType = function() {
            return "TTS";
        }, e.prototype.getClass = function() {
            return 'TTSGroup';
        }, e.prototype._insertAllTTS = function() {
            this.mTTSFactory ? (this.insertPlugin(Vt, this.mTTSFactory.create(Vt, !1)), this.insertPlugin(jt, this.mTTSFactory.create(jt, !1))) : this._error('_insertAllTTS', 'keine TTS-Fabrik vorhanden');
        }, e.prototype._initTTSHtml5 = function(t) {
            if (this.mTTSHtml5 = this.findPlugin(Vt), this.mTTSHtml5) {
                if (this.mTTSHtml5.init(t), this.mTTSHtml5.isActive()) return void (this.isErrorOutput() && console.log('TTSGroup._initTTSHtml5: TTS eingefuegt'));
                this.removePlugin(Vt), this.mTTSHtml5.done(), this.mTTSHtml5 = null;
            }
            this.isErrorOutput() && console.log('TTSGroup._initTTSHtml5: TTS nicht eingefuegt');
        }, e.prototype._initTTSNuance = function(t) {
            if (this.mTTSNuance = this.findPlugin(jt), this.mTTSNuance) {
                if (this.mTTSNuance.init(t), this.mTTSNuance.isActive()) return void (this.isErrorOutput() && console.log('TTSGroup._initTTSNuance: TTS eingefuegt'));
                this.removePlugin(jt), this.mTTSNuance.done(), this.mTTSNuance = null;
            }
            this.isErrorOutput() && console.log('TTSGroup._initTTSNuance: TTS nicht eingefuegt');
        }, e.prototype.init = function(e) {
            if (this.isInit()) return this._error('init', 'init doppelt aufgerufen'), -1;
            if (!this.mTTSFactory) return this._error('init', 'keine TTS-Fabrik vorhanden'), 
            -1;
            var n = e || {};
            return this.isErrorOutput() || (n.errorOutputFlag = !1), this._initTTSHtml5(n), 
            this._initTTSNuance(n), 0 !== t.prototype.init.call(this, e) ? -1 : (this.mCurrentTTS = this.firstPlugin(), 
            this.mCurrentTTS || (this.isErrorOutput() && console.log('TTSGroup.init: keine TTS verfuegbar'), 
            this.setActiveOff()), e && e.tts && this.setTTS(e.tts), 0);
        }, e.prototype.done = function() {
            return this.mTTSHtml5 = null, this.mTTSNuance = null, this.mCurrentTTS = null, t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this.mCurrentTTS && (!!this.mCurrentTTS.isActive() && t.prototype.isActive.call(this));
        }, e.prototype.setActiveOn = function() {
            return this.mCurrentTTS && this.mCurrentTTS.isActive() ? t.prototype.setActiveOn.call(this) : -1;
        }, Object.defineProperty(e.prototype, "onInit", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onInit = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onSpeakStart", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onSpeakStart = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onSpeakStop", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onSpeakStop = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onError", {
            set: function(t) {
                this.mOnErrorFunc = t;
                for (var e = this.firstPlugin(); e; ) e.onError = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.setTTS = function(t) {
            var e = null;
            switch (t) {
              case Vt:
                e = this.mTTSHtml5;
                break;

              case jt:
                e = this.mTTSNuance;
            }
            return e ? (this.mCurrentTTS = e, 0) : (this._error('setTTS', 'Keine TTS vorhanden'), 
            -1);
        }, e.prototype.getTTS = function() {
            return this.mCurrentTTS ? this.mCurrentTTS.getName() : '';
        }, e.prototype.getTTSList = function() {
            return this.getPluginNameList();
        }, e.prototype.setLanguage = function(t) {
            for (var e = 0, n = this.firstPlugin(); n; ) 0 !== n.setLanguage(t) && (e = -1), 
            n = this.nextPlugin();
            return e;
        }, e.prototype.getLanguage = function() {
            return this.mCurrentTTS ? this.mCurrentTTS.getLanguage() : '';
        }, e.prototype.getLanguageList = function() {
            return this.mCurrentTTS ? this.mCurrentTTS.getLanguageList() : [];
        }, e.prototype.setVoice = function(t) {
            return this.mCurrentTTS ? this.mCurrentTTS.setVoice(t) : -1;
        }, e.prototype.getVoice = function() {
            return this.mCurrentTTS ? this.mCurrentTTS.getVoice() : '';
        }, e.prototype.getVoiceList = function() {
            return this.mCurrentTTS ? this.mCurrentTTS.getVoiceList() : [];
        }, e.prototype.isSpeakRunning = function() {
            return !!this.mCurrentTTS && this.mCurrentTTS.isSpeakRunning();
        }, e.prototype.startSpeak = function(t) {
            return this.isActive() ? this.mCurrentTTS.startSpeak(t) : (this.isErrorOutput() && console.log('TTSGroup.startSpeak: TTS ist nicht aktiv'), 
            0);
        }, e.prototype.getStartSpeakFunc = function() {
            var t = this;
            return function(e) {
                return t.startSpeak(e);
            };
        }, e.prototype.stopSpeak = function() {
            return this.isActive() ? this.mCurrentTTS.stopSpeak() : (this.isErrorOutput() && console.log('TTSGroup.startSpeak: TTS ist nicht aktiv'), 
            0);
        }, e.prototype.getStopSpeakFunc = function() {
            var t = this;
            return function() {
                return t.stopSpeak();
            };
        }, e;
    }(Ft), te = function(t) {
        function e() {
            return t.call(this, 'TTSFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "TTS";
        }, e.prototype.getName = function() {
            return "TTSFactory";
        }, e.prototype._newPlugin = function(t, e) {
            var n = null;
            switch (t) {
              case Xt:
                n = new $t(this, t, e);
                break;

              case qt:
              case Vt:
                n = new Jt(new Wt(), t, e);
                break;

              case jt:
                n = new Qt(t, e);
                break;

              case Ht:
                n = new Zt(Ht, e);
                break;

              default:
                this._error('_newPlugin', 'keine TTS vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || qt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), ee = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, C, e) || this;
            return n.mTTSPlugin = null, n.mAudioPlayer = null, n.mTTSActiveFlag = !1, n.mAudioPlayerActiveFlag = !1, 
            n.mTTSFeatureFlag = !1, n.mAudioFeatureFlag = !1, n.mAudioFilePath = O, n.mAudioFileName = '', 
            n.mAudioFlag = b, n.mSpeakText = '', n.mSpeakStopSelector = '', n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getClass = function() {
            return 'SpeakComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? ('string' == typeof e.audioFilePath && (this.mAudioFilePath = e.audioFilePath), 
            'boolean' == typeof e.audioFlag && (!0 === e.audioFlag ? this.mAudioFlag = !0 : this.mAudioFlag = !1), 
            e.speakLanguage && this.setLanguage(e.speakLanguage), t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype._initAllPlugin = function() {
            return this.mTTSPlugin = this.findPlugin(Ut), this.mAudioPlayer = this.findPlugin(f), 
            this.mTTSPlugin && (this.mTTSActiveFlag = this.mTTSPlugin.isActive()), this.mAudioPlayer && (this.mAudioPlayerActiveFlag = this.mAudioPlayer.isActive(), 
            this.mAudioPlayerActiveFlag || (this.mAudioFlag = !1)), 0;
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mTTSPlugin = null, this.mAudioPlayer = null;
        }, e.prototype._doneAllAttribute = function() {
            this.mTTSActiveFlag = !1, this.mAudioPlayerActiveFlag = !1, this.mTTSFeatureFlag = !1, 
            this.mAudioFeatureFlag = !1, this.mAudioFilePath = O, this.mAudioFileName = '', 
            this.mAudioFlag = b, this.mSpeakText = '', this.mSpeakStopSelector = '';
        }, e.prototype._resetAllDefault = function() {
            this.setAudioFormat(y), this.setLanguage("de"), this.mSpeakStopSelector = '', this.mAudioFilePath = O, 
            this.mAudioFileName = '', this.mAudioFlag = b, this.mSpeakText = '';
        }, e.prototype.reset = function(e) {
            return t.prototype.reset.call(this, e);
        }, e.prototype.isActive = function() {
            return !(!this.mTTSActiveFlag && !this.mAudioPlayerActiveFlag) && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mTTSActiveFlag || this.mAudioPlayerActiveFlag ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype.setFeatureList = function(t) {
            return t.features ? (t.features.TTS && 'boolean' == typeof t.features.TTS && (this.mTTSFeatureFlag = t.features.TTS), 
            t.features.AUDIO && 'boolean' == typeof t.features.AUDIO && (this.mAudioFeatureFlag = t.features.AUDIO), 
            0) : (this._error('setFeatureList', 'keine FeatureInfos uebergeben'), -1);
        }, e.prototype.isAudio = function() {
            return !!this.mAudioPlayerActiveFlag && this.mAudioFlag;
        }, e.prototype.setAudioOn = function() {
            return this.mAudioPlayerActiveFlag ? (this.mAudioFlag = !0, 0) : -1;
        }, e.prototype.setAudioOff = function() {
            return this.mAudioFlag = !1, 0;
        }, e.prototype.getAudioContext = function() {
            return this.mAudioPlayer ? this.mAudioPlayer.getAudioContext() : null;
        }, e.prototype.setAudioFormat = function(t) {
            return this.mAudioPlayer ? this.mAudioPlayer.setAudioFormat(t) : -1;
        }, e.prototype.getAudioFormat = function() {
            return this.mAudioPlayer ? this.mAudioPlayer.getAudioFormat() : '';
        }, e.prototype.setAudioFilePath = function(t) {
            return this.mAudioFilePath = t, 0;
        }, e.prototype.getAudioFilePath = function() {
            return this.mAudioFilePath;
        }, e.prototype.setAudioFileName = function(t) {
            return this.mAudioFileName = t, 0;
        }, e.prototype.getAudioFileName = function() {
            return this.mAudioFileName;
        }, e.prototype.setTTS = function(t) {
            return this.mTTSPlugin ? this.mTTSPlugin.setTTS(t) : -1;
        }, e.prototype.getTTS = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getTTS() : '';
        }, e.prototype.getTTSList = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getTTSList() : [];
        }, e.prototype.setLanguage = function(t) {
            return this.mTTSPlugin ? this.mTTSPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getLanguage() : "";
        }, e.prototype.getLanguageList = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getLanguageList() : [];
        }, e.prototype.setVoice = function(t) {
            return this.mTTSPlugin ? this.mTTSPlugin.setVoice(t) : -1;
        }, e.prototype.getVoice = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getVoice() : "";
        }, e.prototype.getVoiceList = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getVoiceList() : [];
        }, e.prototype.setSpeakText = function(t) {
            return this.mSpeakText = t, 0;
        }, e.prototype.getSpeakText = function() {
            return this.mSpeakText;
        }, e.prototype.isRunning = function() {
            return !!this.isActive() && (this.mAudioFlag ? !!this.mAudioPlayer && (this.mAudioPlayer.isPlay() || this.mAudioPlayer.isLoad()) : !!this.mTTSPlugin && this.mTTSPlugin.isSpeakRunning());
        }, e.prototype.start = function() {
            return this.isActive() ? this.isRunning() ? (this._error('start', 'Sprachausgabe laeuft bereits'), 
            -1) : this.mAudioFlag ? this._startSpeakAudio() : this._startSpeakTTS() : 0;
        }, e.prototype._startSpeakAudio = function() {
            return this.mSpeakStopSelector = '', this.mAudioFeatureFlag ? 0 : this.mAudioPlayer ? this.mAudioFileName ? (this.mSpeakStopSelector = "audio", 
            this.mAudioPlayer.play(this.mAudioFilePath, this.mAudioFileName)) : (this._error('_startSpeakAudio', 'kein Audiodateiname fuer die Sprachausgabe vorhanden'), 
            -1) : (this._error('_startSpeakAudio', 'kein AudioPlayer vorhanden'), -1);
        }, e.prototype._startSpeakTTS = function() {
            return this.mSpeakStopSelector = '', this.mTTSFeatureFlag ? 0 : this.mTTSPlugin ? this.mSpeakText ? (this.mSpeakStopSelector = "tts", 
            this.mTTSPlugin.startSpeak(this.mSpeakText)) : (this._error('_startSpeakTTS', 'kein Text fuer die Sprachausgabe vorhanden'), 
            -1) : (this._error('_startSpeakTTS', 'kein TTSPlugin vorhanden'), -1);
        }, e.prototype.stop = function() {
            return this.isRunning() ? this.mSpeakStopSelector ? "audio" === this.mSpeakStopSelector ? (this.mSpeakStopSelector = '', 
            this.mAudioPlayer ? this.mAudioPlayer.stop() : (this._error('stop', 'kein AudioPlayer vorhanden'), 
            -1)) : "tts" === this.mSpeakStopSelector ? (this.mSpeakStopSelector = '', this.mTTSPlugin ? this.mTTSPlugin.stopSpeak() : (this._error('stop', 'kein TTSPlugin vorhanden'), 
            -1)) : (this._error('stop', 'kein gueltiger StopSelector vorhanden'), -1) : (this._error('stop', 'kein StopSelector vorhanden'), 
            -1) : (this.mSpeakStopSelector = '', 0);
        }, e;
    }(Dt), ne = function(t) {
        function e() {
            return t.call(this, 'SpeakComponentFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getName = function() {
            return "SpeakComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new ee(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || C;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), oe = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'SpeakComponentBuilder', n) || this;
            return o.mSpeakComponent = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getClass = function() {
            return 'SpeakComponentBuilder';
        }, e.prototype.getName = function() {
            return "SpeakComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mSpeakComponent) return this.mSpeakComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(Ut, "TTSFactory", te), n = this._getPlugin(f, "AudioPlayerFactory", L);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mSpeakComponent || (this.mSpeakComponent = this._getPlugin(C, "SpeakComponentFactory", ne)), 
            this.mSpeakComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t ? e ? n ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'TTS-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'AudioPlayer-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onInit = t.onInit, e.onSpeakStart = t.onStart, e.onSpeakStop = t.onStop, 
            e.onError = t.onError, n.onAudioStart = t.onStart, n.onAudioStop = t.onStop, n.onError = t.onError, 
            0) : (this._error('_binder', 'Kein AudioPlayer-Plugin vorhanden'), -1) : (this._error('_binder', 'Kein TTS-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Speak-Komponente vorhanden'), -1);
        }, e;
    }(Q), ie = 'FileReader', re = function(t) {
        function e() {
            return t.call(this, 'XMLHttpRequestFactory') || this;
        }
        return u(e, t), e.prototype.getXMLHttpRequestClass = function() {
            try {
                return XMLHttpRequest || null;
            } catch (t) {
                return this._exception('getXMLHttpRequestClass', t), null;
            }
        }, e.prototype.createXMLHttpRequest = function() {
            var t = this.getXMLHttpRequestClass();
            if (!t) return null;
            try {
                return new t();
            } catch (t) {
                return this._exception('createXMLHttpRequest', t), null;
            }
        }, e;
    }(p), ue = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, ie, n) || this;
            return o.mXMLHttpRequest = null, o.mRequest = null, o.mOnReadFunc = null, o.mXMLHttpRequestFactory = e, 
            o._setErrorClassName('FileReader'), o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'FileReader';
        }, e.prototype._detectXMLHttpRequest = function() {
            if (!this.mXMLHttpRequestFactory) return this._error('_detectXMLHttpRequest', 'keine File-Fabrik vorhanden'), 
            !1;
            try {
                this.mXMLHttpRequest = this.mXMLHttpRequestFactory.getXMLHttpRequestClass();
            } catch (t) {
                return this._exception('_detectXMLHttpRequest', t), !1;
            }
            return null !== this.mXMLHttpRequest || (this._error('_detectXMLHttpRequest', 'kein XMLHttpRequest vorhanden'), 
            !1);
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : this._detectXMLHttpRequest() ? t.prototype.init.call(this, e) : -1;
        }, e.prototype.done = function() {
            return this.mXMLHttpRequest = null, this.mRequest = null, this.mOnReadFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype._requestDialogFile = function(t) {
            var e = this;
            if (!this.mXMLHttpRequest) return this._error('_requestDialogFile', 'kein XMLHttpRequest vorhanden'), 
            -1;
            try {
                this.mRequest = new this.mXMLHttpRequest(), this.mRequest.open('GET', t, !0), this.mRequest.responseType = 'text';
                var n = this.mRequest;
                return this.mRequest.onload = function() {
                    if (e.mOnReadFunc) try {
                        e.mOnReadFunc(n.response);
                    } catch (t) {
                        e._exception('_requestDialogFile', t);
                    }
                }, this.mRequest.onloadend = function() {
                    404 === n.status && e._error('_requestDialogFile', 'Error 404');
                }, this.mRequest.onerror = function(t) {
                    console.log('FileReader._loadAudioFile: onerror', t), e._onError(t);
                }, this.mRequest.onabord = function(t) {
                    console.log('FileReader._loadAudioFile: onabord', t);
                }, this.mRequest.send(), 0;
            } catch (t) {
                return this._exception('_requestDialogFile', t), -1;
            }
        }, e.prototype.getReadFunc = function() {
            var t = this;
            return function(e) {
                return t.read(e);
            };
        }, e.prototype.read = function(t) {
            return this.isInit() ? this._requestDialogFile(t) : (this._error('read', 'nicht initialisiert'), 
            -1);
        }, e.prototype.loadDialogFile = function(t) {
            return this.read(t);
        }, Object.defineProperty(e.prototype, "onRead", {
            set: function(t) {
                this.mOnReadFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onLoadDialogFile", {
            set: function(t) {
                this.mOnReadFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(A), se = function(t) {
        function e() {
            return t.call(this, 'FileReaderFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "FileReaderFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new ue(new re(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ie;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), ae = 'StorePlugin', pe = function() {
        function t(t, e, n, o, i) {
            this.mNodeType = '', this.mStateId = 0, this.mParentId = 0, this.mNodeId = 0, this.mNextId = 0, 
            this.mName = '', this.mObjectType = '', this.mObjectName = '', this.mText = '', 
            this.mTimeout = 0, this.mProperty = '', this.mNodeType = t, this.mStateId = n, this.mParentId = o, 
            this.mNodeId = e, this.mNextId = i;
        }
        return t.prototype.getNodeType = function() {
            return this.mNodeType;
        }, t.prototype.getStateId = function() {
            return this.mStateId;
        }, t.prototype.getParentId = function() {
            return this.mParentId;
        }, t.prototype.getNodeId = function() {
            return this.mNodeId;
        }, t.prototype.getNextId = function() {
            return this.mNextId;
        }, t.prototype.setName = function(t) {
            this.mName = t;
        }, t.prototype.getName = function() {
            return this.mName;
        }, t.prototype.setObjectType = function(t) {
            this.mObjectType = t;
        }, t.prototype.getObjectType = function() {
            return this.mObjectType;
        }, t.prototype.setObjectName = function(t) {
            this.mObjectName = t;
        }, t.prototype.getObjectName = function() {
            return this.mObjectName;
        }, t.prototype.setText = function(t) {
            this.mText = t;
        }, t.prototype.getText = function() {
            return this.mText;
        }, t.prototype.setTimeout = function(t) {
            this.mTimeout = t;
        }, t.prototype.getTimeout = function() {
            return this.mTimeout;
        }, t.prototype.setProperty = function(t) {
            this.mProperty = t;
        }, t.prototype.getProperty = function() {
            return this.mProperty;
        }, t;
    }(), ce = function() {
        function t(t, e, n) {
            this.mDialogName = '', this.mStateName = '', this.mStateId = 0, this.mNodeList = new Map(), 
            this.mNodeKeys = null, this.mDialogName = t, this.mStateName = e, this.mStateId = n;
        }
        return t.prototype.getDialogName = function() {
            return this.mDialogName;
        }, t.prototype.getName = function() {
            return this.mStateName;
        }, t.prototype.getId = function() {
            return this.mStateId;
        }, t.prototype.newDialogNode = function(t, e, n, o) {
            var i = new pe(t, e, this.mStateId, n, o);
            return this.mNodeList.set(i.getNodeId(), i), i;
        }, t.prototype.getDialogNode = function(t) {
            return this.mNodeList.get(t);
        }, t.prototype.getFirstDialogNodeId = function() {
            this.mNodeKeys = this.mNodeList.keys();
            var t = this.mNodeKeys.next();
            return t.value ? t.value : -1;
        }, t.prototype.getNextDialogNodeId = function() {
            if (null === this.mNodeKeys) return this.getFirstDialogNodeId();
            var t = this.mNodeKeys.next();
            return !t.value || t.done ? -1 : t.value;
        }, t;
    }(), le = function() {
        function t(t) {
            this.mDialogName = '', this.mDialogStateList = new Map(), this.mDialogName = t;
        }
        return t.prototype.getName = function() {
            return this.mDialogName;
        }, t.prototype.newDialogState = function(t, e) {
            var n = new ce(this.mDialogName, t, e);
            return this.mDialogStateList.set(t, n), n;
        }, t.prototype.getDialogState = function(t) {
            return this.mDialogStateList.get(t);
        }, t;
    }(), he = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ae, e) || this;
            return n.mDialogList = new Map(), n._setErrorClassName('StorePlugin'), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogList.clear(), t.prototype.done.call(this);
        }, e.prototype.clear = function() {
            this.mDialogList.clear();
        }, e.prototype.newDialog = function(t) {
            var e = new le(t);
            return this.mDialogList.set(t, e), e;
        }, e.prototype.newDialogState = function(t, e, n) {
            var o = this.getDialog(t);
            return o ? o.newDialogState(e, n) : (this._error('newDialogState', 'kein dialog vorhanden ' + t), 
            null);
        }, e.prototype.getDialog = function(t) {
            return this.mDialogList.get(t);
        }, e.prototype.getDialogState = function(t, e) {
            var n = this.getDialog(t);
            return n ? n.getDialogState(e) : (this._error('getDialogState', 'kein dialog vorhanden ' + t), 
            null);
        }, e.prototype.getNewDialogFunc = function() {
            var t = this;
            return function(e) {
                return t.newDialog(e);
            };
        }, e.prototype.getNewDialogStateFunc = function() {
            var t = this;
            return function(e, n, o) {
                return t.newDialogState(e, n, o);
            };
        }, e.prototype.getGetDialogStateFunc = function() {
            var t = this;
            return function(e, n) {
                return t.getDialogState(e, n);
            };
        }, e;
    }(A), me = function(t) {
        function e() {
            return t.call(this, 'StoreFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "StoreFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new he(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ae;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), ge = 'ParserPlugin', fe = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ge, e) || this;
            return n.mOnParserEndFunc = null, n.mNewDialogFunc = null, n.mNewDialogStateFunc = null, 
            n._setErrorClassName('ParserPlugin'), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mOnParserEndFunc = null, this.mNewDialogFunc = null, this.mNewDialogStateFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype._onParserEnd = function() {
            if ('function' == typeof this.mOnParserEndFunc) try {
                return this.mOnParserEndFunc();
            } catch (t) {
                return this._exception('_onParserEnd', t), -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onParserEnd", {
            set: function(t) {
                this.mOnParserEndFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._newDialog = function(t) {
            return 'function' == typeof this.mNewDialogFunc ? this.mNewDialogFunc(t) : null;
        }, e.prototype._newDialogState = function(t, e, n) {
            return 'function' == typeof this.mNewDialogStateFunc ? this.mNewDialogStateFunc(t, e, n) : null;
        }, e.prototype.parseSpeechDefFile = function(t) {
            if (!t) return this._error('parseSpeechDefFile', 'kein Dateiname uebergeben'), -1;
            try {
                return this._error('parseSpeechDefFile', 'nicht implementiert'), 0;
            } catch (t) {
                return this._exception('parseSpeechDefFile', t), -1;
            }
        }, e.prototype.parseSpeechDefData = function(t) {
            if (!t) return this._error('parseSpeechDefData', 'keine Def-Daten uebergeben'), 
            -1;
            var e = t.split('\n'), n = '', o = '', i = null, r = null, u = 0, s = 0, a = 0, p = [], c = '', l = '', h = 0, m = 0, g = '', f = '', y = '', d = '', S = 0, v = 0, _ = 0, E = '', A = !1;
            try {
                for (var F = 0; F < e.length; ++F) if (c = e[F].trim(), l = '', F < e.length - 1 && (l = e[F + 1].trim()), 
                c && 0 !== (v = c.indexOf('#'))) {
                    switch (-1 === (v = c.indexOf(' ')) && (v = c.length), n = c.substr(0, v), 'GROUPEND' === l && (A = !0, 
                    l = '', F < e.length - 2 && (l = e[F + 2].trim())), p = (c = c.substr(v + 1, c.length)).split(','), 
                    n) {
                      case 'DIALOG':
                        o = p[0].trim(), this._newDialog(o);
                        break;

                      case 'STATE':
                        a = ++u, g = p[0].trim(), i = this._newDialogState(o, g, a);
                        break;

                      case 'GROUP':
                        h = ++s, E = p[0].trim(), m = h + 1, l || (m = 0), _ = h, (r = i.newDialogNode("group", h, 0, m)).setProperty(E);
                        break;

                      case 'GROUPEND':
                        break;

                      case 'ACTION':
                        h = ++s, g = p[0].trim(), f = p[1].trim(), y = p[2].trim(), m = h + 1, l || (m = 0), 
                        (r = i.newDialogNode("action", h, _, m)).setName(g), r.setObjectType(f), r.setObjectName(y), 
                        r.setProperty(E);
                        break;

                      case 'SPEAK':
                        h = ++s, S = 1e3 * parseInt(p[0].trim(), 10), d = p[1].trim();
                        for (var D = 2; D < p.length; D++) d += ',' + p[D].trim();
                        m = h + 1, l || (m = 0), (r = i.newDialogNode("speak", h, _, m)).setTimeout(S), 
                        r.setText(d), r.setProperty(E);
                        break;

                      case 'WAIT':
                        h = ++s, S = 1e3 * parseInt(p[0].trim(), 10), m = h + 1, l || (m = 0), (r = i.newDialogNode("wait", h, _, m)).setTimeout(S), 
                        r.setProperty(E);
                        break;

                      case '':
                        break;

                      default:
                        return this._error('parseSpeechDefData', 'ParserFehler'), -1;
                    }
                    A && (_ = 0, E = '', A = !1);
                }
                return this._onParserEnd();
            } catch (t) {
                return this._exception('parseSpeechDefData', t), -1;
            }
        }, e.prototype.getParseSpeechDefFileFunc = function() {
            var t = this;
            return function(e) {
                return t.parseSpeechDefFile(e);
            };
        }, e.prototype.getParseSpeechDefDataFunc = function() {
            var t = this;
            return function(e) {
                return t.parseSpeechDefData(e);
            };
        }, e.prototype.setNewDialogFunc = function(t) {
            return this.mNewDialogFunc = t, 0;
        }, e.prototype.setNewDialogStateFunc = function(t) {
            return this.mNewDialogStateFunc = t, 0;
        }, e;
    }(A), ye = function(t) {
        function e() {
            return t.call(this, 'ParserFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ParserFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new fe(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ge;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), de = 'InterpreterPlugin', Se = (function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        u(e, t), e.prototype.cancel = function() {
            this.cancelMethod && this.cancelMethod();
        };
    }(Promise), function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, de, e) || this;
            return n.mDialogName = H, n.mStateName = V, n.mStateContext = null, n.mNodePromise = null, 
            n.mDialogRunFlag = !1, n.mSpeakRunFlag = !1, n.mGroupId = 0, n.mGroupProperty = '', 
            n.mGroupActionFlag = !1, n.mNoWaitNodeFlag = !1, n.mGetDialogStateFunc = null, n.mDialogSetFunc = null, 
            n.mDialogStartFunc = null, n.mDialogStopFunc = null, n.mDialogStateSetFunc = null, 
            n.mDialogActionFunc = null, n.mDialogSpeakFunc = null, n.mDialogSpeakStartFunc = null, 
            n.mDialogSpeakStopFunc = null, n._setErrorClassName('InterpreterPlugin'), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogName = H, this.mStateName = V, this.mStateContext = null, this.mNodePromise = null, 
            this.mDialogRunFlag = !1, this.mSpeakRunFlag = !1, this.mGroupId = 0, this.mGroupProperty = '', 
            this.mGroupActionFlag = !1, this.mNoWaitNodeFlag = !1, this.mGetDialogStateFunc = null, 
            this.mDialogSetFunc = null, this.mDialogStartFunc = null, this.mDialogStopFunc = null, 
            this.mDialogStateSetFunc = null, this.mDialogActionFunc = null, this.mDialogSpeakFunc = null, 
            this.mDialogSpeakStartFunc = null, this.mDialogSpeakStopFunc = null, t.prototype.done.call(this);
        }, e.prototype._onDialogSet = function(t) {
            if ('function' == typeof this.mDialogSetFunc) try {
                return this.mDialogSetFunc(t);
            } catch (t) {
                return this._exception('_onDialogSet', t), -1;
            }
            return 0;
        }, e.prototype._onDialogStart = function() {
            if ('function' == typeof this.mDialogStartFunc) try {
                return this.mDialogStartFunc(0);
            } catch (t) {
                return this._exception('_onDialogStart', t), -1;
            }
            return 0;
        }, e.prototype._onDialogStop = function() {
            if ('function' == typeof this.mDialogStopFunc) try {
                return this.mDialogStopFunc();
            } catch (t) {
                return this._exception('_onDialogStop', t), -1;
            }
            return 0;
        }, e.prototype._onDialogStateSet = function(t) {
            if ('function' == typeof this.mDialogStateSetFunc) try {
                return this.mDialogStateSetFunc(t);
            } catch (t) {
                return this._exception('_onDialogStateSet', t), -1;
            }
            return 0;
        }, e.prototype._onDialogAction = function(t) {
            if ('function' == typeof this.mDialogActionFunc) try {
                var e = {
                    event: dt,
                    state: this.mStateName,
                    action: t.getName(),
                    type: t.getObjectType(),
                    id: t.getObjectName()
                };
                return this.mDialogActionFunc(e);
            } catch (t) {
                return this._exception('_onDialogAction', t), -1;
            }
            return 0;
        }, e.prototype._onDialogSpeak = function(t) {
            if ('function' == typeof this.mDialogSpeakFunc) try {
                var e = {
                    event: vt,
                    state: this.mStateName,
                    id: t.getNodeId().toString(),
                    text: t.getText(),
                    timeout: t.getTimeout()
                };
                return this.mDialogSpeakFunc(e);
            } catch (t) {
                return this._exception('_onDialogSpeak', t), -1;
            }
            return 0;
        }, e.prototype._onDialogSpeakStart = function() {
            if ('function' == typeof this.mDialogSpeakStartFunc) try {
                return this.mDialogSpeakStartFunc();
            } catch (t) {
                return this._exception('_onDialogSpeakStart', t), -1;
            }
            return 0;
        }, e.prototype._onDialogSpeakStop = function() {
            if ('function' == typeof this.mDialogSpeakStopFunc) try {
                return this.mDialogSpeakStopFunc();
            } catch (t) {
                return this._exception('_onDialogSpeakStop', t), -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onDialogSet", {
            set: function(t) {
                this.mDialogSetFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStart", {
            set: function(t) {
                this.mDialogStartFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStop", {
            set: function(t) {
                this.mDialogStopFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStateSet", {
            set: function(t) {
                this.mDialogStateSetFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogAction", {
            set: function(t) {
                this.mDialogActionFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeak", {
            set: function(t) {
                this.mDialogSpeakFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeakStart", {
            set: function(t) {
                this.mDialogSpeakStartFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeakStop", {
            set: function(t) {
                this.mDialogSpeakStopFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._getDialogState = function(t, e) {
            return 'function' == typeof this.mGetDialogStateFunc ? this.mGetDialogStateFunc(t, e) : null;
        }, e.prototype.setDialog = function(t) {
            return t ? t === this.mDialogName ? 0 : (this.stopDialog(), this.mDialogName = t, 
            this._onDialogSet(t)) : (this._error('setDialog', 'kein Dialogname uebergeben'), 
            -1);
        }, e.prototype.getDialog = function() {
            return this.mDialogName;
        }, e.prototype.startDialog = function() {
            try {
                if (this.isDialogRunning()) return this._error('startDialog', 'Dialog laeuft bereits'), 
                -1;
                var t = this._getDialogState(this.mDialogName, this.mStateName);
                return t ? (this._runState(t), 0) : (this._error('startDialog', 'kein DialogState vorhanden'), 
                -1);
            } catch (t) {
                return this._exception('startDialog', t), -1;
            }
        }, e.prototype.stopDialog = function() {
            try {
                return this._clearGroup(), this._clearNodePromise(), this._clearSpeakRunFlag(), 
                this._clearDialogRunFlag(), 0;
            } catch (t) {
                return this._exception('stopDialog', t), -1;
            }
        }, e.prototype.isDialogRunning = function() {
            return this.mDialogRunFlag;
        }, e.prototype.setState = function(t, e) {
            return t ? t === this.mStateName ? 0 : (this.stopDialog(), this.mStateName = t, 
            this.mStateContext = e, this._onDialogStateSet(t)) : (this._error('setState', 'kein StateName uebergeben'), 
            -1);
        }, e.prototype.getState = function() {
            return this.mStateName;
        }, e.prototype.setStateContext = function(t) {
            return this.isDialogRunning() ? -1 : (this.mStateContext = t, 0);
        }, e.prototype._setDialogRunFlag = function() {
            var t = this.mDialogRunFlag;
            return this.mDialogRunFlag = !0, t ? 0 : this._onDialogStart();
        }, e.prototype._clearDialogRunFlag = function() {
            var t = this.mDialogRunFlag;
            return this.mDialogRunFlag = !1, t ? this._onDialogStop() : 0;
        }, e.prototype.isSpeakRunning = function() {
            return this.mSpeakRunFlag;
        }, e.prototype._setSpeakRunFlag = function() {
            var t = this.mSpeakRunFlag;
            return this.mSpeakRunFlag = !0, t ? 0 : this._onDialogSpeakStart();
        }, e.prototype._clearSpeakRunFlag = function() {
            var t = this.mSpeakRunFlag;
            return this.mSpeakRunFlag = !1, t ? this._onDialogSpeakStop() : 0;
        }, e.prototype._getWaitNode = function() {
            return new pe("wait", 0, 0, 0, 0);
        }, e.prototype._setNodePromise = function(t) {
            this.mNodePromise = t;
        }, e.prototype._clearNodePromise = function() {
            this.mNodePromise && this.mNodePromise.cancel && (this.mNodePromise.cancel(), this.mNodePromise = null);
        }, e.prototype.skipNextSpeakNode = function() {
            if (!this.isDialogRunning()) return 0;
            if (!this.isSpeakRunning()) return 0;
            if (!this.mNodePromise) return this._error('skipNextSpeakNode', 'keine Knoten-Promise vorhanden'), 
            -1;
            try {
                return this.mNodePromise.cancel(), this.mSpeakRunFlag = !1, 0;
            } catch (t) {
                return this._exception('skipNextSpeakNode', t), -1;
            }
        }, e.prototype._runState = function(t) {
            return e = this, n = void 0, i = function() {
                var e, n, o, i, r;
                return s(this, function(u) {
                    switch (u.label) {
                      case 0:
                        if (!(e = t.getFirstDialogNodeId())) return this._error('runState', 'kein Knoten vorhanden'), 
                        [ 2 ];
                        this._setDialogRunFlag(), n = t.getDialogNode(e), o = 0, i = 0, this.mNoWaitNodeFlag = !1, 
                        u.label = 1;

                      case 1:
                        if (!n || !this.mDialogRunFlag) return [ 3, 6 ];
                        u.label = 2;

                      case 2:
                        return u.trys.push([ 2, 4, , 5 ]), [ 4, this._runAsyncNode(n, i) ];

                      case 3:
                        return u.sent(), [ 3, 5 ];

                      case 4:
                        return r = u.sent(), this._exception('_runState', r), [ 3, 5 ];

                      case 5:
                        if (o = n.getNextId(), i = n.getTimeout(), o) this.mNoWaitNodeFlag && (i = 0), (n = t.getDialogNode(o)) || this._error('_runState', 'kein Knoten zur Knoten-ID vorhanden'); else {
                            if (!(i > 0 && !1 === this.mNoWaitNodeFlag)) return [ 3, 6 ];
                            n = this._getWaitNode();
                        }
                        return [ 3, 1 ];

                      case 6:
                        return this._clearSpeakRunFlag(), this._clearDialogRunFlag(), [ 2 ];
                    }
                });
            }, new ((o = void 0) || (o = Promise))(function(t, r) {
                function u(t) {
                    try {
                        a(i.next(t));
                    } catch (t) {
                        r(t);
                    }
                }
                function s(t) {
                    try {
                        a(i.throw(t));
                    } catch (t) {
                        r(t);
                    }
                }
                function a(e) {
                    e.done ? t(e.value) : new o(function(t) {
                        t(e.value);
                    }).then(u, s);
                }
                a((i = i.apply(e, n || [])).next());
            });
            var e, n, o, i;
        }, e.prototype._runAsyncNode = function(t, e) {
            var n = this, o = null, i = new Promise(function(i, r) {
                if (!n.isDialogRunning()) return n._clearNodePromise(), void i();
                var u = setTimeout(function() {
                    try {
                        n._runNode(t), n._clearNodePromise(), i();
                    } catch (t) {
                        n._exception('_runAsyncNode', t), n._clearNodePromise(), r(t);
                    }
                }, e);
                o = function() {
                    clearTimeout(u), i();
                };
            });
            return i.cancel = function() {
                o();
            }, this._setNodePromise(i), i;
        }, e.prototype._runNode = function(t) {
            if (this.isDialogRunning()) switch (this._clearSpeakRunFlag(), t.getNodeType()) {
              case "group":
                this._runGroup(t);
                break;

              case "action":
                this._runAction(t);
                break;

              case "speak":
                this._runSpeak(t);
                break;

              case "wait":
                this._runWait(t);
                break;

              default:
                this._error('_runNode', 'kein gueltiger Knoten ' + t.getNodeId());
            }
        }, e.prototype._runGroup = function(t) {
            this.mGroupId = t.getNodeId(), this.mGroupProperty = t.getProperty(), this.mGroupActionFlag = !1;
        }, e.prototype._clearGroup = function() {
            this.mGroupId = 0, this.mGroupProperty = '', this.mGroupActionFlag = !1, this.mNoWaitNodeFlag = !1;
        }, e.prototype._isGroupProperty = function(t, e) {
            if (!this.mStateContext) return !1;
            var n = this.mStateContext.property;
            if (!n) return !1;
            var o = n[t];
            if (!o) return !1;
            for (var i = 0, r = o; i < r.length; i++) {
                if (r[i] === e) return !0;
            }
            return !1;
        }, e.prototype._checkRunNode = function(t) {
            return 0 === this.mGroupId || (t.getParentId() === this.mGroupId ? this.mGroupProperty.length > 0 && this.mGroupProperty === t.getProperty() && this._isGroupProperty(t.getProperty(), t.getObjectName()) : (0 === t.getParentId() && this._clearGroup(), 
            !0));
        }, e.prototype._runAction = function(t) {
            this._checkRunNode(t) && (this._onDialogAction(t), this.mGroupActionFlag = !0);
        }, e.prototype._runSpeak = function(t) {
            if (this.isSpeakRunning()) this._error('_runSpeak', 'Speak laeuft bereits'); else {
                if (0 !== this.mGroupId && t.getParentId() === this.mGroupId) {
                    if (!1 === this.mGroupActionFlag) return void (this.mNoWaitNodeFlag = !0);
                } else this._clearGroup();
                this._onDialogSpeak(t), this._setSpeakRunFlag();
            }
        }, e.prototype._runWait = function(t) {}, e.prototype.setGetDialogStateFunc = function(t) {
            return this.mGetDialogStateFunc = t, 0;
        }, e;
    }(A)), ve = function(t) {
        function e() {
            return t.call(this, 'InterpreterFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "InterpreterFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Se(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || de;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), _e = function(t) {
        function e() {
            var e = t.call(this, 'DialogContext') || this;
            return e.mContext = {
                property: {}
            }, e;
        }
        return u(e, t), e.prototype.clear = function() {
            this.mContext = {
                property: {}
            };
        }, e.prototype.getContext = function() {
            return this.mContext;
        }, e.prototype.insert = function(t, e) {
            if (!t) return this._error('insert', 'kein Komponentenname'), -1;
            if (!e) return this._error('insert', 'kein Kontextname'), -1;
            var n = this.mContext.property;
            n[e] || (n[e] = []);
            try {
                for (var o = 0, i = n[e]; o < i.length; o++) if (i[o] === t) return 0;
                return n[e].push(t), 0;
            } catch (t) {
                return this._exception('insert', t), -1;
            }
        }, e.prototype.remove = function(t, e) {
            if (!t) return this._error('remove', 'kein Komponentenname'), -1;
            if (!e) return this._error('remove', 'kein Kontextname'), -1;
            var n = this.mContext.property;
            if (!n[e]) return 0;
            try {
                for (var o = [], i = 0, r = n[e]; i < r.length; i++) {
                    var u = r[i];
                    u && u !== t && o.push(u);
                }
                return o.length > 0 ? n[e] = o : delete n[e], 0;
            } catch (t) {
                return this._exception('remove', t), -1;
            }
        }, e;
    }(p), Ee = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, M, e) || this;
            return n.mStore = null, n.mInterpreter = null, n._setErrorClassName('DialogComponent'), 
            n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('DialogComponent.init: bereits initialisiert'), 
            0) : (this.mStore = this.findPlugin(ae), this.mStore ? (this.mInterpreter = this.findPlugin(de), 
            this.mInterpreter ? t.prototype.init.call(this, e) : -1) : -1);
        }, e.prototype.done = function() {
            return this.mInterpreter && (this.stop(), this.mInterpreter = null), t.prototype.done.call(this);
        }, e.prototype.clearDialog = function() {
            try {
                return this.mStore.clear(), 0;
            } catch (t) {
                return this._exception('clearDialog', t), -1;
            }
        }, e.prototype.setDialog = function(t) {
            try {
                return this.mInterpreter.setDialog(t);
            } catch (t) {
                return this._exception('setDialog', t), -1;
            }
        }, e.prototype.getDialog = function() {
            try {
                return this.mInterpreter.getDialog();
            } catch (t) {
                return this._exception('getDialog', t), '';
            }
        }, e.prototype.isRunning = function() {
            return !!this.mInterpreter && this.mInterpreter.isDialogRunning();
        }, e.prototype.start = function() {
            return this.mInterpreter ? (t.prototype.start.call(this), this.mInterpreter.startDialog()) : -1;
        }, e.prototype.stop = function() {
            return this.mInterpreter ? (t.prototype.stop.call(this), this.mInterpreter.stopDialog()) : -1;
        }, e.prototype.setDialogState = function(t, e) {
            try {
                return this.mInterpreter.setState(t, e);
            } catch (t) {
                return this._exception('setDialogState', t), -1;
            }
        }, e.prototype.getDialogState = function() {
            try {
                return this.mInterpreter.getState();
            } catch (t) {
                return this._exception('getDialogState', t), '';
            }
        }, e.prototype.setDialogStateContext = function(t) {
            try {
                return this.mInterpreter.setStateContext(t);
            } catch (t) {
                return this._exception('setDialogStateContext', t), -1;
            }
        }, e.prototype.skipNextSpeak = function() {
            return this.mInterpreter ? 0 : -1;
        }, e;
    }(function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mDialogContext = new _e(), o.mParseSpeechDefFileFunc = null, o.mParseSpeechDefDataFunc = null, 
            o.mReadFileFunc = null, o.mDialogParseEvent = new At(ft), o.mDialogSetEvent = new At(ht), 
            o.mDialogStartEvent = new At(mt), o.mDialogStopEvent = new At(gt), o.mDialogStateSetEvent = new At(yt), 
            o.mDialogActionEvent = new At(dt), o.mDialogActionStopEvent = new At(St), o.mDialogSpeakEvent = new At(vt), 
            o.mDialogSpeakStartEvent = new At(_t), o.mDialogSpeakStopEvent = new At(Et), o.mDialogLoadFlag = q, 
            o.mDialogFilePath = K, o.mDialogFileName = G, o.mActivDialogFlag = !1, o.mDialogContext._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogParseEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogSetEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogStartEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogStateSetEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogActionEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogActionStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogSpeakEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogSpeakStartEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogSpeakStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogParseEvent.setComponentName(e), o.mDialogSetEvent.setComponentName(e), 
            o.mDialogStartEvent.setComponentName(e), o.mDialogStopEvent.setComponentName(e), 
            o.mDialogStateSetEvent.setComponentName(e), o.mDialogActionEvent.setComponentName(e), 
            o.mDialogActionStopEvent.setComponentName(e), o.mDialogSpeakEvent.setComponentName(e), 
            o.mDialogSpeakStartEvent.setComponentName(e), o.mDialogSpeakStopEvent.setComponentName(e), 
            o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.getClass = function() {
            return 'DialogBase';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? ('string' == typeof e.dialogName && this.setDialog(e.dialogName), 'string' == typeof e.dialogRootState && this.setDialogState(e.dialogRootState), 
            'boolean' == typeof e.dialogLoadFlag && (!0 === e.dialogLoadFlag ? this.mDialogLoadFlag = !0 : this.mDialogLoadFlag = !1), 
            'string' == typeof e.dialogFilePath && this.setDialogFilePath(e.dialogFilePath), 
            'string' == typeof e.dialogFileName && this.setDialogFileName(e.dialogFileName), 
            t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype.init = function(e) {
            return 0 !== t.prototype.init.call(this, e) ? -1 : 0 !== this.connect() ? (this._clearInit(), 
            -1) : this.mDialogLoadFlag && 0 !== this.loadDialogFile() ? (this._error('init', 'Dialogdatei nicht geladen'), 
            this._clearInit(), -1) : 0;
        }, e.prototype._doneAllEvent = function() {
            this.mDialogParseEvent.clear(), this.mDialogSetEvent.clear(), this.mDialogStartEvent.clear(), 
            this.mDialogStopEvent.clear(), this.mDialogStateSetEvent.clear(), this.mDialogActionEvent.clear(), 
            this.mDialogActionStopEvent.clear(), this.mDialogSpeakEvent.clear(), this.mDialogSpeakStartEvent.clear(), 
            this.mDialogSpeakStopEvent.clear();
        }, e.prototype._doneAllAttribute = function() {
            this.mDialogContext.clear(), this.mReadFileFunc = null, this.mDialogFilePath = K, 
            this.mDialogFileName = G, this.mDialogLoadFlag = q, this.mActivDialogFlag = !1;
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.stop(), this.setActiveOn(), this.clearDialog(), this.mDialogContext.clear(), 
            this.setDialog(H), this.setDialogState(V), this.mDialogFilePath = K, this.mDialogFileName = G, 
            this.mDialogLoadFlag = q, this.mActivDialogFlag = !1, this._setOption(t), this.mDialogLoadFlag && 0 !== this.loadDialogFile() ? (this._error('reset', 'Dialogdatei nicht geladen'), 
            -1) : 0) : (this._error('reset', 'Komponente nicht initialisiert'), -1);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mDialogParseEvent._setErrorOutput(e), 
            this.mDialogSetEvent._setErrorOutput(e), this.mDialogStartEvent._setErrorOutput(e), 
            this.mDialogStopEvent._setErrorOutput(e), this.mDialogStateSetEvent._setErrorOutput(e), 
            this.mDialogActionEvent._setErrorOutput(e), this.mDialogActionStopEvent._setErrorOutput(e), 
            this.mDialogSpeakEvent._setErrorOutput(e), this.mDialogSpeakStartEvent._setErrorOutput(e), 
            this.mDialogSpeakStopEvent._setErrorOutput(e), this.mDialogContext._setErrorOutput(e);
        }, e.prototype.connect = function() {
            return 0;
        }, e.prototype.isConnect = function() {
            return !1;
        }, e.prototype.getNetType = function() {
            return '';
        }, e.prototype._onDialogParse = function() {
            return this.mDialogParseEvent.dispatch();
        }, e.prototype._onDialogSet = function(t) {
            return this.mDialogSetEvent.dispatch(t);
        }, e.prototype._onDialogStart = function() {
            return this.mActivDialogFlag = !0, this.mDialogStartEvent.dispatch();
        }, e.prototype._onDialogStop = function() {
            return this._stop(), this.mDialogStopEvent.dispatch();
        }, e.prototype._onDialogStateSet = function(t) {
            return this.mDialogStateSetEvent.dispatch(t);
        }, e.prototype._onDialogAction = function(t) {
            return this.mDialogActionEvent.dispatch(t);
        }, e.prototype._onDialogActionStop = function() {
            return this.mDialogActionStopEvent.dispatch();
        }, e.prototype._onDialogSpeak = function(t) {
            return this.mDialogSpeakEvent.dispatch(t);
        }, e.prototype._onDialogSpeakStart = function() {
            return this.mDialogSpeakStartEvent.dispatch();
        }, e.prototype._onDialogSpeakStop = function() {
            return this._onDialogActionStop(), this.mDialogSpeakStopEvent.dispatch();
        }, Object.defineProperty(e.prototype, "onDialogParse", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogParse();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSet", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onDialogSet(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogStateSet", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onDialogStateSet(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogAction", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onDialogAction(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogActionStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogActionStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeak", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onDialogSpeak(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeakStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogSpeakStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDialogSpeakStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onDialogSpeakStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case ft:
                i = this.mDialogParseEvent.addListener(e, o);
                break;

              case ht:
                i = this.mDialogSetEvent.addListener(e, o);
                break;

              case mt:
                i = this.mDialogStartEvent.addListener(e, o);
                break;

              case gt:
                i = this.mDialogStopEvent.addListener(e, o);
                break;

              case yt:
                i = this.mDialogStateSetEvent.addListener(e, o);
                break;

              case dt:
                i = this.mDialogActionEvent.addListener(e, o);
                break;

              case St:
                i = this.mDialogActionStopEvent.addListener(e, o);
                break;

              case vt:
                i = this.mDialogSpeakEvent.addListener(e, o);
                break;

              case _t:
                i = this.mDialogSpeakStartEvent.addListener(e, o);
                break;

              case Et:
                i = this.mDialogSpeakStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case ft:
                o = this.mDialogParseEvent.removeListener(e);
                break;

              case ht:
                o = this.mDialogSetEvent.removeListener(e);
                break;

              case mt:
                o = this.mDialogStartEvent.removeListener(e);
                break;

              case gt:
                o = this.mDialogStopEvent.removeListener(e);
                break;

              case yt:
                o = this.mDialogStateSetEvent.removeListener(e);
                break;

              case dt:
                o = this.mDialogActionEvent.removeListener(e);
                break;

              case St:
                o = this.mDialogActionStopEvent.removeListener(e);
                break;

              case vt:
                o = this.mDialogSpeakEvent.removeListener(e);
                break;

              case _t:
                o = this.mDialogSpeakStartEvent.removeListener(e);
                break;

              case Et:
                o = this.mDialogSpeakStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, ft, e);
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.addEventListener(t, ht, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, mt, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, gt, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, yt, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, dt, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, St, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, vt, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, _t, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, Et, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, ct, e);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, ft);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, ht);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, mt);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, gt);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, yt);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, dt);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, St);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, vt);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, _t);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, Et);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, ct);
        }, e.prototype.removeAllEvent = function(t) {
            return this.removeDialogParseEvent(t), this.removeDialogSetEvent(t), this.removeDialogStartEvent(t), 
            this.removeDialogStopEvent(t), this.removeDialogStateSetEvent(t), this.removeDialogActionEvent(t), 
            this.removeDialogActionStopEvent(t), this.removeDialogSpeakEvent(t), this.removeDialogSpeakStartEvent(t), 
            this.removeDialogSpeakStopEvent(t), this.removeErrorEvent(t), 0;
        }, e.prototype.setReadFileFunc = function(t) {
            return this.mReadFileFunc = t, 0;
        }, e.prototype.getWriteFileDataFunc = function() {
            var t = this;
            return function(e) {
                return t.writeDialogData(e);
            };
        }, e.prototype.setParseSpeechDefFileFunc = function(t) {
            return this.mParseSpeechDefFileFunc = t, 0;
        }, e.prototype.setParseSpeechDefDataFunc = function(t) {
            return this.mParseSpeechDefDataFunc = t, 0;
        }, e.prototype._stop = function() {
            this.mActivDialogFlag = !1, this._onDialogActionStop();
        }, e.prototype.parseSpeechDefFile = function(t) {
            return 'function' == typeof this.mParseSpeechDefFileFunc ? this.mParseSpeechDefFileFunc(t) : -1;
        }, e.prototype.parseSpeechDefData = function(t) {
            try {
                return 'function' != typeof this.mParseSpeechDefDataFunc ? (this._error('parseSpeechDefData', 'keine ParseDefData funktion'), 
                -1) : this.mParseSpeechDefDataFunc(t);
            } catch (t) {
                return this._exception('parseSpeechDefData', t), -1;
            }
        }, e.prototype.setDialogFilePath = function(t) {
            return this.mDialogFilePath = t, 0;
        }, e.prototype.getDialogFilePath = function() {
            return this.mDialogFilePath;
        }, e.prototype.setDialogFileName = function(t) {
            return this.mDialogFileName = t, 0;
        }, e.prototype.getDialogFileName = function() {
            return this.mDialogFileName;
        }, e.prototype.loadDialogFile = function(t) {
            var e = this.mDialogFilePath + this.mDialogFileName;
            return t && (e = this.mDialogFilePath + t), 'function' != typeof this.mReadFileFunc ? (this._error('loadDialogFile', 'keine ReadFileFunc vorhanden'), 
            -1) : this.mReadFileFunc(e);
        }, e.prototype.writeDialogData = function(t) {
            return this.parseSpeechDefData(t);
        }, e.prototype.isRunning = function() {
            return this.mActivDialogFlag;
        }, e.prototype.toggleDialog = function() {
            return this.isRunning() ? this.stop() : this.start();
        }, e.prototype.clearDialog = function() {
            return 0;
        }, e.prototype.setDialog = function(t) {
            return 0;
        }, e.prototype.getDialog = function() {
            return '';
        }, e.prototype.start = function() {
            return this.mActivDialogFlag = !0, 0;
        }, e.prototype.stop = function() {
            return this._stop(), 0;
        }, e.prototype.setDialogState = function(t, e) {
            return 0;
        }, e.prototype.getDialogState = function() {
            return '';
        }, e.prototype.setDialogStateContext = function(t) {
            return 0;
        }, e.prototype.skipNextSpeak = function() {
            return 0;
        }, e.prototype.clearContext = function() {
            return this.mDialogContext.clear(), 0;
        }, e.prototype._getContext = function() {
            return this.mDialogContext.getContext();
        }, e.prototype.addContextElement = function(t, e) {
            return 0 !== this.mDialogContext.insert(t, e) ? -1 : this.setDialogStateContext(this.mDialogContext.getContext());
        }, e.prototype.removeContextElement = function(t, e) {
            return 0 !== this.mDialogContext.remove(t, e) ? -1 : this.setDialogStateContext(this.mDialogContext.getContext());
        }, e;
    }(Dt)), Ae = function(t) {
        function e() {
            return t.call(this, 'DialogComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "DialogComponentFactory";
        }, e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return new Ee(e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), Fe = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'DialogComponentBuilder', n) || this;
            return o.mDialogComponent = null, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'DialogComponentBuilder';
        }, e.prototype.getName = function() {
            return "DialogComponentBuilder";
        }, e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.build = function() {
            if (this.mDialogComponent) return this.mDialogComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(ie, "FileReaderFactory", se), n = this._getPlugin(ae, "StoreFactory", me), o = this._getPlugin(ge, "ParserFactory", ye), i = this._getPlugin(de, "InterpreterFactory", ve);
                return 0 !== this._binder(t, e, n, o, i) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mDialogComponent || (this.mDialogComponent = this._getPlugin(M, "DialogComponentFactory", Ae)), 
            this.mDialogComponent;
        }, e.prototype._binder = function(t, e, n, o, i) {
            return t ? e ? n ? o ? i ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : 0 !== t.insertPlugin(o.getName(), o) ? -1 : 0 !== t.insertPlugin(i.getName(), i) ? -1 : 0 !== t.setReadFileFunc(e.getReadFunc()) ? -1 : (e.onRead = t.getWriteFileDataFunc(), 
            e.onError = t.onError, o.setNewDialogFunc(n.getNewDialogFunc()), o.setNewDialogStateFunc(n.getNewDialogStateFunc()), 
            o.onError = t.onError, i.setGetDialogStateFunc(n.getGetDialogStateFunc()), i.onError = t.onError, 
            t.setParseSpeechDefFileFunc(o.getParseSpeechDefFileFunc()), t.setParseSpeechDefDataFunc(o.getParseSpeechDefDataFunc()), 
            o.onParserEnd = t.onDialogParse, o.onError = t.onError, i.onDialogSet = t.onDialogSet, 
            i.onDialogStart = t.onDialogStart, i.onDialogStop = t.onDialogStop, i.onDialogStateSet = t.onDialogStateSet, 
            i.onDialogAction = t.onDialogAction, i.onDialogSpeak = t.onDialogSpeak, i.onDialogSpeakStart = t.onDialogSpeakStart, 
            i.onDialogSpeakStop = t.onDialogSpeakStop, i.onError = t.onError, 0) : (this._error('_binder', 'Interpreter nicht vorhanden'), 
            -1) : (this._error('_binder', 'Parser nicht vorhanden'), -1) : (this._error('_binder', 'Store nicht vorhanden'), 
            -1) : (this._error('_binder', 'FileReader nicht vorhanden'), -1) : (this._error('_binder', 'Dialog nicht vorhanden'), 
            -1);
        }, e;
    }(Q), De = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, U, e) || this;
            return n.mAudioPlayer = null, n.mSpeak = null, n.mListen = null, n.mAction = null, 
            n.mDialog = null, n.mSpeakEnableFlag = !0, n.mListenEnableFlag = !0, n.mActionEnableFlag = !0, 
            n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getClass = function() {
            return 'BotComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.2.0041 vom 11.11.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return this.mDialog ? this.mDialog.getServerVersion() : '';
        }, e.prototype._initAllPlugin = function() {
            return this.mAudioPlayer = this.findPlugin(f), this.mSpeak = this.findPlugin(C), 
            this.mListen = this.findPlugin(w), this.mAction = this.findPlugin(o), this.mDialog = this.findPlugin(M), 
            this.mDialog ? 0 : (this._error('_initAllPlugin', 'keine Dialog-Komponente vorhanden'), 
            this._clearInit(), -1);
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mAudioPlayer = null, this.mSpeak = null, this.mListen = null, this.mAction = null, 
            this.mDialog = null;
        }, e.prototype._doneAllAttribute = function() {
            this.mSpeakEnableFlag = !0, this.mListenEnableFlag = !0, this.mActionEnableFlag = !0;
        }, e.prototype._resetAllDefault = function() {
            this.mSpeakEnableFlag = !0, this.mListenEnableFlag = !0, this.mActionEnableFlag = !0;
        }, e.prototype.reset = function(e) {
            return 0 !== t.prototype.reset.call(this, e) ? -1 : this.mDialog ? this.mDialog.reset(e) : 0;
        }, e.prototype.isActive = function() {
            return !!this.mDialog && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mDialog ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype.connect = function() {
            return 0;
        }, e.prototype.isConnect = function() {
            return !1;
        }, e.prototype.getNetType = function() {
            return 'undefined';
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.addEventListener(t, ht, e);
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, ft, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, mt, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, gt, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, yt, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, dt, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, St, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, vt, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, _t, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, Et, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, ct, e);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, ht);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, ft);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, mt);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, gt);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, yt);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, dt);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, St);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, vt);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, _t);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, Et);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, ct);
        }, e.prototype.removeAllEvent = function(t) {
            return this.mDialog && this.mDialog.removeAllEvent(t), this.removeErrorEvent(t), 
            0;
        }, e.prototype._dialogSpeak = function(t) {
            return this.isActive() && this.isSpeak() ? (this.mSpeak.setSpeakText(t.text), this.mSpeak.setAudioFileName(t.id), 
            this.mSpeak.start()) : 0;
        }, e.prototype._dialogSpeakStop = function() {
            return this.isActive() && this.isSpeak() ? this.mSpeak.stop() : 0;
        }, e.prototype.getDialogSpeakFunc = function() {
            var t = this;
            return function(e) {
                return t._dialogSpeak(e);
            };
        }, e.prototype.getDialogSpeakStopFunc = function() {
            var t = this;
            return function() {
                return t._dialogSpeakStop();
            };
        }, e.prototype._dialogAction = function(t) {
            if (this.isActive() && this.isAction()) {
                var e = {
                    action: t.action,
                    type: t.type,
                    id: t.id
                };
                return this.mAction.action(e);
            }
            return 0;
        }, e.prototype._dialogActionStop = function() {
            return this.isActive() && this.isAction() ? this.mAction.stop() : 0;
        }, e.prototype.getDialogActionFunc = function() {
            var t = this;
            return function(e) {
                return t._dialogAction(e);
            };
        }, e.prototype.getDialogActionStopFunc = function() {
            var t = this;
            return function() {
                return t._dialogActionStop();
            };
        }, e.prototype.isSpeak = function() {
            return !(!this.mSpeakEnableFlag || !this.mSpeak) && this.mSpeak.isActive();
        }, e.prototype.setSpeakOn = function() {
            return this.mSpeak ? (this.mSpeakEnableFlag = !0, 0) : -1;
        }, e.prototype.setSpeakOff = function() {
            return this.mSpeak ? (this.mSpeakEnableFlag = !1, 0) : -1;
        }, e.prototype.getSpeak = function() {
            return this.mSpeak;
        }, e.prototype.isListen = function() {
            return !(!this.mListenEnableFlag || !this.mListen) && this.mListen.isActive();
        }, e.prototype.setListenOn = function() {
            return this.mListen ? (this.mListenEnableFlag = !0, 0) : -1;
        }, e.prototype.setListenOff = function() {
            return this.mListen ? (this.mListenEnableFlag = !1, 0) : -1;
        }, e.prototype.getListen = function() {
            return this.mListen;
        }, e.prototype.isAction = function() {
            return !(!this.mActionEnableFlag || !this.mAction) && this.mAction.isActive();
        }, e.prototype.setActionOn = function() {
            return this.mAction ? (this.mActionEnableFlag = !0, 0) : -1;
        }, e.prototype.setActionOff = function() {
            return this.mAction ? (this.mActionEnableFlag = !1, 0) : -1;
        }, e.prototype.getAction = function() {
            return this.mAction;
        }, e.prototype.parseSpeechDefFile = function(t) {
            return this.isActive() ? this.mDialog.parseSpeechDefFile(t) : (this._error('parseSpeechDefFile', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.parseSpeechDefData = function(t) {
            return this.isActive() ? this.mDialog.parseSpeechDefData(t) : (this._error('parseSpeechDefData', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.setDialogFilePath = function(t) {
            return this.isActive() ? this.mDialog.setDialogFilePath(t) : (this._error('setDialogFilePath', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.getDialogFilePath = function() {
            return this.mDialog ? this.mDialog.getDialogFilePath() : (this._error('getDialogFilePath', 'keine Dialog-Komponente vorhanden'), 
            '');
        }, e.prototype.setDialogFileName = function(t) {
            return this.isActive() ? this.mDialog.setDialogFileName(t) : (this._error('setDialogFileName', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.getDialogFileName = function() {
            return this.mDialog ? this.mDialog.getDialogFileName() : (this._error('getDialogFileName', 'keine Dialog-Komponente vorhanden'), 
            '');
        }, e.prototype.loadDialogFile = function(t) {
            return this.isActive() ? this.mDialog.loadDialogFile(t) : (this._error('loadDialogFile', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.writeDialogData = function(t) {
            return this.isActive() ? this.mDialog.writeDialogData(t) : (this._error('writeDialogData', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.clearDialog = function() {
            return this.isActive() ? this.mDialog.clearDialog() : (this._error('clearDialog', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.setDialog = function(t) {
            return this.isActive() ? this.mDialog.setDialog(t) : (this._error('setDialog', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.getDialog = function() {
            return this.mDialog ? this.mDialog.getDialog() : (this._error('getDialog', 'keine Dialog-Komponente vorhanden'), 
            '');
        }, e.prototype.isRunning = function() {
            return !!this.mDialog && this.mDialog.isRunning();
        }, e.prototype.toggleDialog = function() {
            return this.isActive() ? this.mDialog.toggleDialog() : (this._error('toggleDialog', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.start = function() {
            return this.isActive() ? this.mDialog.start() : (this._error('start', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.stop = function() {
            return this.isActive() ? this.mDialog.stop() : (this._error('stop', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.setDialogState = function(t, e) {
            return this.isActive() ? this.mDialog.setDialogState(t, e) : (this._error('setDialogState', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.getDialogState = function() {
            return this.mDialog ? this.mDialog.getDialogState() : (this._error('getDialogState', 'keine Dialog-Komponente vorhanden'), 
            '');
        }, e.prototype.setDialogStateContext = function(t) {
            return this.isActive() ? this.mDialog.setDialogStateContext(t) : (this._error('setDialogStateContext', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.skipNextSpeak = function() {
            return this.isActive() ? 0 : (this._error('skipNextSpeak', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.clearContext = function() {
            return this.isActive() ? this.mDialog.clearContext() : (this._error('clearContext', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.addContextElement = function(t, e) {
            return this.isActive() ? this.mDialog.addContextElement(t, e) : (this._error('addContextElement', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.removeContextElement = function(t, e) {
            return this.isActive() ? this.mDialog.removeContextElement(t, e) : (this._error('removeContextElement', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e;
    }(Dt), Pe = function(t) {
        function e() {
            return t.call(this, 'BotComponentFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getName = function() {
            return "BotComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new De(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || U;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(F), Le = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'BotComponentBuilder', n) || this;
            return o.mBotComponent = null, o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'BotComponentBuilder';
        }, e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getName = function() {
            return "BotComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mBotComponent) return this.mBotComponent;
            try {
                var t = this._buildComponent(), e = this._getComponent(M, "Dialog"), o = this._getComponent(n, "Action"), i = this._getComponent(x, "Listen"), r = this._getComponent(C, "Speak"), u = this._getPlugin(f, "AudioPlayerFactory", L);
                return 0 !== this._binder(t, e, o, i, r, u) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mBotComponent || (this.mBotComponent = this._getPlugin(U, "BotComponentFactory", Pe)), 
            this.mBotComponent;
        }, e.prototype._binder = function(t, e, n, o, i, r) {
            return t ? e ? n ? o ? i ? r ? 0 !== t.insertPlugin(r.getName(), r) ? (this._error('_binder', 'AudioPlayer-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(i.getName(), i) ? (this._error('_binder', 'Speak-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(o.getName(), o) ? (this._error('_binder', 'Listen-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'Action-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'Dialog-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== e.addDialogActionEvent(U, t.getDialogActionFunc()) ? -1 : 0 !== e.addDialogActionStopEvent(U, t.getDialogActionStopFunc()) ? -1 : 0 !== e.addDialogSpeakEvent(U, t.getDialogSpeakFunc()) ? -1 : 0 !== e.addDialogSpeakStopEvent(U, t.getDialogSpeakStopFunc()) ? -1 : 0 : (this._error('_binder', 'Kein AudioPlayer-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Speak-Komponente vorhanden'), -1) : (this._error('_binder', 'Keine Listen-Komponente vorhanden'), 
            -1) : (this._error('_binder', 'Keine Action-Komponente vorhanden'), -1) : (this._error('_binder', 'Keine Dialog-Komponente vorhanden'), 
            -1) : (this._error('_binder', 'Keine Bot-Komponente vorhanden'), -1);
        }, e;
    }(Q), ke = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            J.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            J.setErrorOutputOff();
        }, t._createAllBuilder = function() {
            var t = 0;
            return 0 !== J.insertBuilder("Speak", new oe('', !1)) && (t = -1), 0 !== J.insertBuilder("Listen", new Gt('', !1)) && (t = -1), 
            0 !== J.insertBuilder("Action", new kt('', !1)) && (t = -1), 0 !== J.insertBuilder("Dialog", new Fe('', !1)) && (t = -1), 
            0 !== J.insertBuilder("Bot", new Le('', !1)) && (t = -1), t;
        }, t.init = function() {
            return t.initFlag ? 0 : 0 !== t._createAllBuilder() ? -1 : (t.initFlag = !0, 0);
        }, t.isInit = function() {
            return t.initFlag;
        }, t.done = function() {
            return J.clear(), t.initFlag = !1, 0;
        }, t.initFlag = !1, t;
    }();
    t.SPEECH_API_VERSION = "0.5.2.0041 vom 11.11.2018 (ALPHA)", t.BASE_TYPE_NAME = "Base", 
    t.BASE_COMPONENT_NAME = e, t.ACTION_TYPE_NAME = "Action", t.ACTION_COMPONENT_NAME = n, 
    t.ActionFactory = g, t.AUDIO_PLUGIN_NAME = 'AudioPlugin', t.AudioFactory = T, t.SPEAK_TYPE_NAME = "Speak", 
    t.SPEAK_COMPONENT_NAME = C, t.SPEAK_DE_LANGUAGE = "de", t.SPEAK_EN_LANGUAGE = 'en', 
    t.SpeakFactory = N, t.LISTEN_TYPE_NAME = "Listen", t.LISTEN_COMPONENT_NAME = x, 
    t.LISTEN_DE_LANGUAGE = "de", t.LISTEN_EN_LANGUAGE = 'en', t.ListenFactory = I, t.DIALOG_TYPE_NAME = "Dialog", 
    t.DIALOG_COMPONENT_NAME = M, t.DIALOG_MAIN_NAME = H, t.DIALOG_ROOTSTATE_NAME = V, 
    t.DialogFactory = X, t.BOT_TYPE_NAME = "Bot", t.BOT_COMPONENT_NAME = U, t.BotFactory = W, 
    t.SpeechMain = ke, Object.defineProperty(t, '__esModule', {
        value: !0
    });
});
