/**
 * Speech-Framework
 * 
 * Version: 0.5.3
 * Build:   0042
 * TYPE:    ALPHA
 * Datum:   17.12.2018
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
    var a = !0, c = function() {
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
    }(), p = function(t) {
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
    }(c), l = function() {
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
        }, t.mBuilderList = new p(), t.mErrorBase = new c('BuilderManager'), t;
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
    }(c), S = function() {
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
        }, t.mFactoryList = new d(), t.mErrorBase = new c('FactoryManager'), t;
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
    }(c), _ = function() {
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
        }, t.mPluginList = new v(), t.mErrorBase = new c('PluginManager'), t;
    }(), E = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'Factory') || this;
            if (n && 0 !== S.insert(o.getName(), o)) throw new Error('Factory ' + o.getName() + ' existiert bereits im FactoryManager');
            return o;
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
    }(c), A = function(t) {
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
    }(c), L = function(t) {
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
    }(E), F = 'AudioContextFactory', N = function(t) {
        function e(e, n) {
            return void 0 === n && (n = !0), t.call(this, e || F, n) || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "AudioContext";
        }, e.prototype.getName = function() {
            return F;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return window.AudioContext || window.webkitAudioContext || null;
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(E), R = 'XMLHttpRequestFactory', P = function(t) {
        function e(e, n) {
            return void 0 === n && (n = !0), t.call(this, e || R, n) || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "XMLHttpRequest";
        }, e.prototype.getName = function() {
            return R;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return XMLHttpRequest || null;
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e.prototype.getXMLHttpRequestClass = function() {
            return this.create();
        }, e;
    }(E), D = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || f, n) || this;
            return o.mAudioContextClass = null, o.mAudioContext = null, o.mAudioFormat = y, 
            o.mAudioBuffer = null, o.mXMLHttpRequestClass = null, o.mRequest = null, o.mSource = null, 
            o.mAudioLoadFlag = !1, o.mAudioPlayFlag = !1, o.mAudioCancelFlag = !1, o.mOnAudioStartFunc = null, 
            o.mOnAudioStopFunc = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'AudioPlayer';
        }, e.prototype.getClass = function() {
            return 'AudioPlayer';
        }, e.prototype._detectAudioContext = function() {
            var t = S.get(F, N);
            return t ? (this.mAudioContextClass = t.create(), null !== this.mAudioContextClass || (this._error('_detectAudioContext', 'kein AudioContext vorhanden'), 
            !1)) : (this._error('_detectAudioContext', 'keine AudioContext-Fabrik vorhanden'), 
            !1);
        }, e.prototype._detectXMLHttpRequest = function() {
            var t = S.get(R, P);
            return t ? (this.mXMLHttpRequestClass = t.create(), null !== this.mXMLHttpRequestClass || (this._error('_detectXMLHttpRequest', 'kein XMLHttpRequest vorhanden'), 
            !1)) : (this._error('_detectXMLHttpRequest', 'keine XMLHttpRequest-Fabrik vorhanden'), 
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
            this.mAudioContextClass = null, this.mAudioFormat = y, this.mXMLHttpRequestClass = null, 
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
            if (!this.mXMLHttpRequestClass) return this._error('_loadAudioFile', 'keine XMLHttpRequest Klasse'), 
            -1;
            try {
                this.mAudioLoadFlag = !0, this.mRequest = new this.mXMLHttpRequestClass(), this.mRequest.open('GET', t, !0), 
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
    }(A), C = function(t) {
        function e() {
            return t.call(this, 'AudioPlayerFactory') || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getName = function() {
            return "AudioPlayerFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new D(f, e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || f;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), k = function() {
        function t(t) {
            if (this.mAudioPlayer = null, 0 !== this._init(t)) throw new Error('Audio nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            if (this.mAudioPlayer) return 0;
            try {
                var e = S.get("AudioPlayerFactory", C);
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
    }(), b = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new k(e);
            } catch (t) {
                return console.log('AudioFactory.create: Exception', t), null;
            }
        }, t;
    }(), T = 'SpeakComponent', O = 'assets/', x = !1, I = function(t) {
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
    }(h), w = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new I(e);
            } catch (t) {
                return console.log('===> EXCEPTION SpeakFactory.create: Exception', t.message), 
                null;
            }
        }, t;
    }(), U = 'ListenComponent', B = U, M = function(t) {
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
        }, e.prototype.setASR = function(t) {
            return this.mListenComponent.setASR(t);
        }, e.prototype.getASR = function() {
            return this.mListenComponent.getASR();
        }, e.prototype.getASRList = function() {
            return this.mListenComponent.getASRList();
        }, e.prototype.setLanguage = function(t) {
            return this.mListenComponent.setLanguage(t);
        }, e.prototype.getLanguage = function() {
            return this.mListenComponent.getLanguage();
        }, e.prototype.getLanguageList = function() {
            return this.mListenComponent.getLanguageList();
        }, e.prototype.abort = function() {
            return this.mListenComponent.abort();
        }, e;
    }(h), K = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new M(e);
            } catch (t) {
                return console.log('ListenFactory.create: Exception', t), null;
            }
        }, t;
    }(), H = 'IntentComponent', G = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mIntentComponent = null, n.mIntentComponent = n.mComponent, n;
        }
        return u(e, t), e.prototype._getBuilderName = function() {
            return "Intent";
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.mIntentComponent.addListenResultEvent(t, e);
        }, e.prototype.addIntentResultEvent = function(t, e) {
            return this.mIntentComponent.addIntentResultEvent(t, e);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.mIntentComponent.removeListenResultEvent(t);
        }, e.prototype.removeIntentResultEvent = function(t) {
            return this.mIntentComponent.removeIntentResultEvent(t);
        }, e.prototype.setNLU = function(t) {
            return this.mIntentComponent.setNLU(t);
        }, e.prototype.getNLU = function() {
            return this.mIntentComponent.getNLU();
        }, e.prototype.getNLUList = function() {
            return this.mIntentComponent.getNLUList();
        }, e.prototype.setLanguage = function(t) {
            return this.mIntentComponent.setLanguage(t);
        }, e.prototype.getLanguage = function() {
            return this.mIntentComponent.getLanguage();
        }, e.prototype.getLanguageList = function() {
            return this.mIntentComponent.getLanguageList();
        }, e.prototype.setIntentText = function(t) {
            return this.mIntentComponent.setIntentText(t);
        }, e.prototype.getIntentText = function() {
            return this.mIntentComponent.getIntentText();
        }, e.prototype.abort = function() {
            return this.mIntentComponent.abort();
        }, e;
    }(h), W = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new G(e);
            } catch (t) {
                return console.log('IntentFactory.create: Exception', t), null;
            }
        }, t;
    }(), j = 'DialogComponent', q = 'assets/', V = 'speech.def', X = !1, z = 'main', Q = 'root', J = function(t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return n.mDialogComponent = null, n.mDialogComponent = n.mComponent, n;
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
    }(h), Y = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new J(e);
            } catch (t) {
                return console.log('DialogFactory.create: Exception', t), null;
            }
        }, t;
    }(), Z = 'BotComponent', $ = function(t) {
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
    }(h), tt = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new $(e);
            } catch (t) {
                return console.log('BotFactory.create: Exception', t.message), null;
            }
        }, t;
    }(), et = function(t) {
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
    }(c), nt = function() {
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
                    e.done();
                } catch (e) {
                    t.mErrorBase._exception('clear', e);
                }
                e = t.mPortList.next();
            }
            return t.mPortList.clear();
        }, t.mPortList = new et(), t.mErrorBase = new c('PortManager'), t;
    }(), ot = 'NuancePort', it = 'wss://ws.dev.nuance.com/v2', rt = 'assets/', ut = 'nuance.json', st = !1, at = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !1);
            var i = t.call(this, 'EventFunctionList') || this;
            return i.mEventName = 'Event', i.mComponentName = 'Component', i.mAsyncFlag = !1, 
            i.mFunctionList = new Map(), i.mEventName = e, i.mComponentName = n, i.mAsyncFlag = o, 
            i;
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
                if (e.mAsyncFlag) setTimeout(function() {
                    try {
                        o(t);
                    } catch (t) {
                        console.log('EventFunction.dispatch: Exception', t);
                    }
                }, 0); else try {
                    0 !== o(t) && (n = -1);
                } catch (t) {
                    e._exception('dispatch', t), n = -1;
                }
            }), n;
        }, e.prototype.dispatchListener = function(t, e) {
            if (!t) return this._error('dispatchListener', 'kein Listenername uebergeben ' + this.getComponentName() + ',' + this.getName()), 
            -1;
            var n = 0, o = this.mFunctionList.get(t);
            if (o) if (this.mAsyncFlag) setTimeout(function() {
                try {
                    o(e);
                } catch (t) {
                    console.log('EventFunction.dispatchListener: Exception', t);
                }
            }, 0); else try {
                n = o(e);
            } catch (t) {
                this._exception('dispatchListener', t), n = -1;
            }
            return n;
        }, e.prototype.clear = function() {
            this.mFunctionList.clear();
        }, e;
    }(c), ct = 'portInit', pt = 'portOpen', lt = 'portClose', ht = 'portStart', mt = 'portStop', gt = 'portResult', ft = 'portError', yt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, 'Port') || this;
            if (o.mPortName = '', o.mPluginName = '', o.mInitEvent = new at(ct), o.mOpenEvent = new at(pt), 
            o.mCloseEvent = new at(lt), o.mStartEvent = new at(ht), o.mStopEvent = new at(mt), 
            o.mResultEvent = new at(gt), o.mErrorEvent = new at(ft), o.mInitFlag = !1, o.mOpenFlag = !1, 
            o.mRunFlag = !1, o._setErrorClassName(o.getClass()), o.mPortName = e, n && 0 !== nt.insert(e, o)) throw new Error('Port ' + o.getName() + ' ist bereits im PortManager vorhanden');
            return o._setErrorOutputFunc(o._getErrorOutputFunc()), o.mInitEvent.setComponentName(e), 
            o.mOpenEvent.setComponentName(e), o.mCloseEvent.setComponentName(e), o.mStartEvent.setComponentName(e), 
            o.mStopEvent.setComponentName(e), o.mResultEvent.setComponentName(e), o.mErrorEvent.setComponentName(e), 
            o.mInitEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mOpenEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mCloseEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mStartEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mResultEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mErrorEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return 'Port';
        }, e.prototype.getClass = function() {
            return 'Port';
        }, e.prototype.getName = function() {
            return this.mPortName;
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.init = function(t) {
            return this.mInitFlag ? (this._error('init', 'Port ist bereits initialisiert'), 
            -1) : (t && 'boolean' == typeof t.errorOutputFlag && this._setErrorOutput(t.errorOutputFlag), 
            this.mInitFlag = !0, 0);
        }, e.prototype.done = function() {
            return this.stop(this.mPluginName), this.close(), this.mPluginName = '', this.mInitFlag = !1, 
            this.mOpenFlag = !1, this.mRunFlag = !1, this.mInitEvent.clear(), this.mOpenEvent.clear(), 
            this.mCloseEvent.clear(), this.mStartEvent.clear(), this.mStopEvent.clear(), this.mResultEvent.clear(), 
            this.mErrorEvent.clear(), t.prototype._setErrorOutputDefault.call(this), 0;
        }, e.prototype.reset = function(t) {
            return 0;
        }, e.prototype.isInit = function() {
            return this.mInitFlag;
        }, e.prototype._clearInit = function() {
            this.mInitFlag = !1;
        }, e.prototype._getErrorOutputFunc = function() {
            var t = this;
            return function(e) {
                return t._onError(new Error(e));
            };
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mInitEvent._setErrorOutput(e), this.mOpenEvent._setErrorOutput(e), 
            this.mCloseEvent._setErrorOutput(e), this.mStartEvent._setErrorOutput(e), this.mStopEvent._setErrorOutput(e), 
            this.mResultEvent._setErrorOutput(e), this.mErrorEvent._setErrorOutput(e);
        }, e.prototype._onInit = function(t) {
            var e = {
                event: ct,
                type: '',
                source: this.getName(),
                dest: '',
                result: t,
                data: null
            };
            return this.mInitEvent.dispatch(e);
        }, e.prototype._onOpen = function() {
            var t = {
                event: pt,
                type: '',
                source: this.getName(),
                dest: '',
                result: 0,
                data: null
            };
            return this.mOpenEvent.dispatch(t);
        }, e.prototype._onClose = function() {
            var t = {
                event: lt,
                type: '',
                source: this.getName(),
                dest: '',
                result: 0,
                data: null
            };
            return this.mCloseEvent.dispatch(t);
        }, e.prototype._onStart = function(t, e) {
            void 0 === t && (t = ''), void 0 === e && (e = '');
            var n = {
                event: ht,
                type: e,
                source: this.getName(),
                dest: t,
                result: 0,
                data: null
            };
            return t ? this.mStartEvent.dispatchListener(t, n) : this.mStartEvent.dispatch(n);
        }, e.prototype._onStop = function(t, e) {
            void 0 === t && (t = ''), void 0 === e && (e = '');
            var n = {
                event: mt,
                type: e,
                source: this.getName(),
                dest: t,
                result: 0,
                data: null
            };
            return t ? this.mStopEvent.dispatchListener(t, n) : this.mStopEvent.dispatch(n);
        }, e.prototype._onResult = function(t, e, n) {
            void 0 === e && (e = ''), void 0 === n && (n = '');
            var o = {
                event: gt,
                type: n,
                source: this.getName(),
                dest: e,
                result: 0,
                data: t
            };
            return e ? this.mResultEvent.dispatchListener(e, o) : this.mResultEvent.dispatch(o);
        }, e.prototype._onError = function(t, e, n) {
            return void 0 === e && (e = ''), void 0 === n && (n = ''), e ? this.mErrorEvent.dispatchListener(e, t) : this.mErrorEvent.dispatch(t);
        }, e.prototype.addInitEvent = function(t, e) {
            return this.mInitEvent.addListener(t, e);
        }, e.prototype.addOpenEvent = function(t, e) {
            return this.mOpenEvent.addListener(t, e);
        }, e.prototype.addCloseEvent = function(t, e) {
            return this.mCloseEvent.addListener(t, e);
        }, e.prototype.addStartEvent = function(t, e) {
            return this.mStartEvent.addListener(t, e);
        }, e.prototype.addStopEvent = function(t, e) {
            return this.mStopEvent.addListener(t, e);
        }, e.prototype.addResultEvent = function(t, e) {
            return this.mResultEvent.addListener(t, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.mErrorEvent.addListener(t, e);
        }, e.prototype.removeInitEvent = function(t) {
            return this.mInitEvent.removeListener(t);
        }, e.prototype.removeOpenEvent = function(t) {
            return this.mOpenEvent.removeListener(t);
        }, e.prototype.removeCloseEvent = function(t) {
            return this.mCloseEvent.removeListener(t);
        }, e.prototype.removeStartEvent = function(t) {
            return this.mStartEvent.removeListener(t);
        }, e.prototype.removeStopEvent = function(t) {
            return this.mStopEvent.removeListener(t);
        }, e.prototype.removeResultEvent = function(t) {
            return this.mResultEvent.removeListener(t);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.mErrorEvent.removeListener(t);
        }, e.prototype.removeAllEvent = function(t) {
            return this.removeInitEvent(t), this.removeOpenEvent(t), this.removeCloseEvent(t), 
            this.removeStartEvent(t), this.removeStopEvent(t), this.removeResultEvent(t), this.removeErrorEvent(t), 
            0;
        }, e.prototype.setConfig = function(t) {
            return 0;
        }, e.prototype.isOpen = function() {
            return this.mOpenFlag;
        }, e.prototype.open = function(t) {
            return 0;
        }, e.prototype.close = function() {
            return 0;
        }, e.prototype.getPluginName = function() {
            return this.mPluginName;
        }, e.prototype.isRunning = function() {
            return this.mRunFlag;
        }, e.prototype.isAction = function(t) {
            return !1;
        }, e.prototype.start = function(t, e, n) {
            return 0;
        }, e.prototype.stop = function(t, e, n) {
            return 0;
        }, e.prototype.test = function(t, e, n) {
            return {
                result: 0
            };
        }, e;
    }(c), dt = function(t) {
        function e(e) {
            var n = t.call(this, e || 'FileHtml5Reader') || this;
            return n.mXMLHttpRequestClass = null, n.mRequest = null, n.mOnReadFunc = null, n;
        }
        return u(e, t), e.prototype.init = function(t) {
            return this._detectXMLHttpRequest() ? 0 : -1;
        }, e.prototype.done = function() {
            return this.mXMLHttpRequestClass = null, this.mRequest = null, this.mOnReadFunc = null, 
            0;
        }, e.prototype._detectXMLHttpRequest = function() {
            var t = S.get(R, P);
            return t ? (this.mXMLHttpRequestClass = t.create(), null !== this.mXMLHttpRequestClass || (this._error('_detectXMLHttpRequest', 'kein XMLHttpRequest vorhanden'), 
            !1)) : (this._error('_detectXMLHttpRequest', 'keine File-Fabrik vorhanden'), !1);
        }, e.prototype._onLoad = function(t) {
            if (this.mOnReadFunc) try {
                this.mOnReadFunc(t);
            } catch (t) {
                return this._exception('_onLoad', t), -1;
            }
            return 0;
        }, e.prototype._onLoadEnd = function(t) {
            return 404 === t ? (this._error('_onLoadEnd', 'Error 404'), -1) : 0;
        }, e.prototype._onLoadError = function(t) {
            this._error('_onLoadError', t);
        }, e.prototype._onLoadAbort = function(t) {
            this._error('_onLoadAbort', t);
        }, e.prototype._loadFile = function(t, e) {
            var n = this;
            if (!this.mXMLHttpRequestClass) return this._error('_loadFile', 'kein XMLHttpRequest vorhanden'), 
            -1;
            if (!t) return this._error('_loadFile', 'keine URL uebergeben'), -1;
            try {
                this.mRequest = new this.mXMLHttpRequestClass(), this.mRequest.open('GET', t, !0), 
                this.mRequest.responseType = e;
                var o = this.mRequest;
                return this.mRequest.onload = function() {
                    return n._onLoad(o.response);
                }, this.mRequest.onloadend = function() {
                    return n._onLoadEnd(o.status);
                }, this.mRequest.onerror = function(t) {
                    return n._onLoadError(t);
                }, this.mRequest.onabord = function(t) {
                    return n._onLoadAbort(t);
                }, this.mRequest.send(), 0;
            } catch (t) {
                return this._exception('_loadFile', t), -1;
            }
        }, Object.defineProperty(e.prototype, "onRead", {
            set: function(t) {
                this.mOnReadFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onError", {
            set: function(t) {
                this._setErrorOutputFunc(t);
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.read = function(t, e) {
            return void 0 === e && (e = "text"), this._loadFile(t, e);
        }, e;
    }(c), St = "mp3", vt = function(t) {
        function e(e) {
            var n = t.call(this, e || 'AudioHtml5Reader') || this;
            return n.mAudioContextClass = null, n.mAudioContext = null, n.mAudioFormat = St, 
            n.mOnAudioReadFunc = null, n;
        }
        return u(e, t), e.prototype._detectAudioContext = function() {
            var t = S.get(F, N);
            return t ? (this.mAudioContextClass = t.create(), null !== this.mAudioContextClass || (this._error('_detectAudioContext', 'kein AudioContext vorhanden'), 
            !1)) : (this._error('_detectAudioContext', 'keine AudioContext-Fabrik vorhanden'), 
            !1);
        }, e.prototype.init = function(e) {
            var n = this;
            if (0 !== t.prototype.init.call(this, e)) return -1;
            if (e && e.audioFormat && this.setAudioFormat(e.audioFormat), e && e.audioContext) this.mAudioContext = e.audioContext; else {
                if (!this._detectAudioContext()) return -1;
                try {
                    if (!this.mAudioContextClass) return -1;
                    this.mAudioContext = new this.mAudioContextClass(), this.mAudioContext.onstatechange = function() {
                        n.mAudioContext;
                    };
                } catch (t) {
                    return this._closeAudioContext(), this._exception('init', t), -1;
                }
            }
            return this.mOnReadFunc = function(t) {
                return n._decodeAudio(t);
            }, 0;
        }, e.prototype.done = function() {
            return this._closeAudioContext(), this.mAudioContextClass = null, this.mAudioFormat = St, 
            this.mOnAudioReadFunc = null, t.prototype.done.call(this);
        }, e.prototype._closeAudioContext = function() {
            if (this.mAudioContextClass && this.mAudioContext) try {
                this.mAudioContext.close();
            } catch (t) {
                this._exception('_closeAudioContext', t);
            }
            this.mAudioContext = null;
        }, Object.defineProperty(e.prototype, "onRead", {
            set: function(t) {
                this.mOnAudioReadFunc = t;
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
        }, e.prototype._decodeAudio = function(t) {
            var e = this;
            if (!this.mAudioContext) return this._error('_decodeAudio', 'kein AudioContext vorhanden'), 
            -1;
            try {
                return this.mAudioContext.decodeAudioData(t, function(t) {
                    if (e.mOnAudioReadFunc) try {
                        e.mOnAudioReadFunc(t);
                    } catch (t) {
                        e._exception('_decodeAudio', t);
                    }
                }, function(t) {
                    e._error('_decodeAudio', 'DOMException');
                }), 0;
            } catch (t) {
                return this._exception('_decodeAudio', t), -1;
            }
        }, e.prototype.read = function(e, n) {
            return void 0 === n && (n = "arraybuffer"), t.prototype.read.call(this, e, n);
        }, e;
    }(dt), _t = function() {
        function t(e, n) {
            void 0 === e && (e = ''), void 0 === n && (n = ''), this.transactionId = 0, this.plugin = '', 
            this.type = '', this.result = null, this.error = null, this.plugin = e, this.type = n, 
            t.mTransactionCounter += 1, this.transactionId = t.mTransactionCounter;
        }
        return t.mTransactionCounter = 0, t;
    }(), Et = function(t) {
        function e(e) {
            var n = t.call(this, 'NuanceConfig') || this;
            return n.mInitFlag = !1, n.mConfigPath = rt, n.mConfigFile = ut, n.mConfigLoadFlag = st, 
            n.mConfigServerUrl = it, n.mConfigAppId = '', n.mConfigAppKey = '', n.mConfigUserId = '', 
            n.mConfigNluTag = '', n.mFileReader = null, n.mOnInitFunc = null, n.mOnErrorFunc = null, 
            n.mFileReader = e, n._setErrorOutputFunc(function(t) {
                return n._onError(new Error(t));
            }), n;
        }
        return u(e, t), e.prototype._setOption = function(t) {
            t && ('string' == typeof t.nuanceConfigPath && (this.mConfigPath = t.nuanceConfigPath), 
            'string' == typeof t.nuanceConfigFile && (this.mConfigFile = t.nuanceConfigFile), 
            'boolean' == typeof t.nuanceConfigLoadFlag && (this.mConfigLoadFlag = t.nuanceConfigLoadFlag), 
            'string' == typeof t.nuanceServerUrl && (this.mConfigServerUrl = t.nuanceServerUrl), 
            'string' == typeof t.nuanceAppId && (this.mConfigAppId = t.nuanceAppId), 'string' == typeof t.nuanceAppKey && (this.mConfigAppKey = t.nuanceAppKey), 
            'string' == typeof t.nuanceUserId && (this.mConfigUserId = t.nuanceUserId), 'string' == typeof t.nuanceNluTag && (this.mConfigNluTag = t.nuanceNluTag));
        }, e.prototype.init = function(t) {
            return this._setOption(t), this.mInitFlag = !0, 0;
        }, e.prototype.done = function() {
            return this.mInitFlag = !1, this.mConfigPath = rt, this.mConfigFile = ut, this.mConfigLoadFlag = st, 
            this.mConfigServerUrl = it, this.mConfigAppId = '', this.mConfigAppKey = '', this.mConfigUserId = '', 
            this.mConfigNluTag = '', this.mFileReader = null, this.mOnInitFunc = null, 0;
        }, e.prototype.isInit = function() {
            return this.mInitFlag;
        }, e.prototype._onInit = function(t) {
            0 === t && (this.mInitFlag = !0), 'function' == typeof this.mOnInitFunc && this.mOnInitFunc(t);
        }, e.prototype._onError = function(t) {
            if ('function' == typeof this.mOnErrorFunc) try {
                return this.mOnErrorFunc(t), 0;
            } catch (t) {
                return this.isErrorOutput() && console.log('===> EXCEPTION NuanceConfig._onError: ', t.message), 
                -1;
            }
            return 0;
        }, Object.defineProperty(e.prototype, "onInit", {
            set: function(t) {
                this.mOnInitFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onError", {
            set: function(t) {
                this.mOnErrorFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._readConfigData = function(t) {
            if (!t) return this._error('_readConfigData', 'keine Daten uebergeben'), -1;
            try {
                var e = JSON.parse(t);
                return e.URL && (this.serverUrl = e.URL), e.APP_ID && (this.appId = e.APP_ID), e.APP_KEY && (this.appKey = e.APP_KEY), 
                e.USER_ID && (this.userId = e.USER_ID), e.NLU_TAG && (this.nluTag = e.NLU_TAG), 
                this._onInit(0), 0;
            } catch (t) {
                return this._exception('_readConfigData', t), -1;
            }
        }, e.prototype._readError = function(t) {
            this._error('_readError', t), this._onInit(-1);
        }, e.prototype.read = function() {
            if (!this.mFileReader) return this._error('read', 'kein FileReader vorhanden'), 
            this._onInit(-1), -1;
            var t = this.mConfigPath + this.mConfigFile;
            return this.mFileReader.read(t);
        }, Object.defineProperty(e.prototype, "serverUrl", {
            get: function() {
                return this.mConfigServerUrl;
            },
            set: function(t) {
                this.mConfigServerUrl = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "appId", {
            get: function() {
                return this.mConfigAppId;
            },
            set: function(t) {
                this.mConfigAppId = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "appKey", {
            get: function() {
                return this.mConfigAppKey;
            },
            set: function(t) {
                this.mConfigAppKey = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "userId", {
            get: function() {
                return this.mConfigUserId;
            },
            set: function(t) {
                this.mConfigUserId = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "nluTag", {
            get: function() {
                return this.mConfigNluTag;
            },
            set: function(t) {
                this.mConfigNluTag = t;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(c), At = 'WebSocketFactory', Lt = function(t) {
        function e(e, n) {
            return void 0 === n && (n = !0), t.call(this, e || At, n) || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "WebSocket";
        }, e.prototype.getName = function() {
            return At;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return window.WebSocket || null;
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(E), Ft = function(t) {
        function e() {
            return t.call(this, 'NuanceWebSocket') || this;
        }
        return u(e, t), e.prototype.connect = function(t) {
            return t ? 0 !== this._connect(t) ? (console.log('NuanceWebSocket.connect: keine Verbindung moeglich', t), 
            this._error('open', 'keine Verbindung moeglich'), -1) : 0 : (this._error('connect', 'keine URL vorhanden'), 
            -1);
        }, e.prototype.disconnect = function() {
            this.close();
        }, e.prototype.sendJSON = function(t) {
            this.sendMessage(t);
        }, e;
    }(function(t) {
        function e(e) {
            var n = t.call(this, e || 'NetHtml5WebSocket') || this;
            return n.mWebSocketClass = null, n.mWebSocketUrl = '', n.mWebSocket = null, n.mWebSocketOpenFlag = !1, 
            n.mConnectIntervalId = 0, n.mConnectInfinite = !1, n.mOnOpenFunc = null, n.mOnCloseFunc = null, 
            n.mOnMessageFunc = null, n.mOnErrorFunc = null, n._setErrorOutputFunc(function(t) {
                return n._onError(new Error(t));
            }), n;
        }
        return u(e, t), e.prototype.init = function(t) {
            return this._detectWebSocket() ? (t && t.connectInfinite && (this.mConnectInfinite = !0, 
            console.log('NetHtml5WebSocket.init: ConnectInfinite eingeschaltet')), 0) : -1;
        }, e.prototype.done = function() {
            return this.close(), this.mWebSocketClass = null, this.mConnectIntervalId = 0, this.mConnectInfinite = !1, 
            0;
        }, e.prototype.isInit = function() {
            return !!this.mWebSocketClass;
        }, e.prototype._detectWebSocket = function() {
            var t = S.get(At, Lt);
            if (!t) return this._error('_detectWebSocket', 'keine WebSocket-Fabrik vorhanden'), 
            !1;
            try {
                this.mWebSocketClass = t.create();
            } catch (t) {
                return this._exception('_detectWebSocket', t), !1;
            }
            return null !== this.mWebSocketClass || (this._error('_detectWebSocket', 'keine WebSocketClass vorhanden'), 
            !1);
        }, e.prototype.open = function(t) {
            return this.isOpen() ? (this._error('open', 'bereits geoeffnet'), -1) : 0 !== this._connect(t) ? (this._error('open', 'keine Verbindung moeglich'), 
            -1) : 0;
        }, e.prototype.close = function() {
            if (this.mWebSocketOpenFlag = !1, this.mWebSocket) {
                this._clearInfiniteConnect();
                try {
                    this.mWebSocket.close(1e3, 'Closing normally'), this.mWebSocket = null;
                } catch (t) {
                    return this._exception('close', t), this.mWebSocket = null, -1;
                }
            }
            return 0;
        }, e.prototype.isOpen = function() {
            return this.mWebSocketOpenFlag;
        }, e.prototype.isConnect = function() {
            return !(!this.mWebSocket || 1 !== this.mWebSocket.readyState);
        }, e.prototype.getState = function() {
            if (!this.mWebSocket) return 'NULL';
            var t = '';
            switch (this.mWebSocket.readyState) {
              case 0:
                t = 'CONNECTING';
                break;

              case 1:
                t = 'OPEN';
                break;

              case 2:
                t = 'CLOSING';
                break;

              case 3:
                t = 'CLOSED';
                break;

              default:
                t = 'UNKNOW';
            }
            return t;
        }, e.prototype.sendMessage = function(t) {
            if (this.isOpen()) {
                if (!this.mWebSocket) return this._error('sendMessage', 'keine WebSocket vorhanden'), 
                -1;
                try {
                    return this.mWebSocket.send(JSON.stringify(t)), 0;
                } catch (t) {
                    this._exception('sendMessage', t);
                }
            }
            return -1;
        }, Object.defineProperty(e.prototype, "webSocket", {
            get: function() {
                return this.mWebSocket;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "webSocketUrl", {
            get: function() {
                return this.mWebSocketUrl;
            },
            set: function(t) {
                this.mWebSocketUrl = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onOpen", {
            set: function(t) {
                this.mOnOpenFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onClose", {
            set: function(t) {
                this.mOnCloseFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onMessage", {
            set: function(t) {
                this.mOnMessageFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onError", {
            set: function(t) {
                this.mOnErrorFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._onOpen = function() {
            if ('function' == typeof this.mOnOpenFunc) try {
                return this.mOnOpenFunc(this.mWebSocketUrl);
            } catch (t) {
                return this._exception('_onOpen', t), -1;
            }
            return 0;
        }, e.prototype._onClose = function() {
            if ('function' == typeof this.mOnCloseFunc) try {
                return this.mOnCloseFunc();
            } catch (t) {
                return this._exception('_onClose', t), -1;
            }
            return 0;
        }, e.prototype._onMessage = function(t) {
            if ('function' == typeof this.mOnMessageFunc) try {
                return this.mOnMessageFunc(t);
            } catch (t) {
                return this._exception('_onMessage', t), -1;
            }
            return 0;
        }, e.prototype._onError = function(t) {
            if ('function' == typeof this.mOnErrorFunc) try {
                var e = t;
                return 'error' === t.type && this.mWebSocket && 3 === this.mWebSocket.readyState && (e = new Error('Verbindung wurde nicht aufgebaut')), 
                this.mOnErrorFunc(e);
            } catch (t) {
                return this.isErrorOutput() && console.log('===> EXCEPTION Plugin._onError: ', t.message), 
                -1;
            }
            return 0;
        }, e.prototype._webSocketOpen = function(t) {
            return this.mWebSocketOpenFlag = !0, this._clearInfiniteConnect(), 0 !== this._onMessage({
                event: 'start'
            }) ? -1 : 0 !== this._onOpen() ? -1 : 0;
        }, e.prototype._webSocketClose = function(t) {
            return this.mWebSocketOpenFlag = !1, this._setInfiniteConnect(), this._onClose();
        }, e.prototype._webSocketMessage = function(t) {
            try {
                return this._onMessage(t);
            } catch (t) {
                return this._exception('_webSocketMessage', t), -1;
            }
        }, e.prototype._webSocketError = function(t) {
            return this._onError(t);
        }, e.prototype._connect = function(t) {
            var e = this;
            if (this.mWebSocket && this.isOpen()) return 0;
            if (!this.mWebSocketClass) return this._error('_connect', 'keine WebSocketClass vorhanden'), 
            -1;
            if (t && (this.mWebSocketUrl = t), !this.mWebSocketUrl) return this._error('_connect', 'keine WebSocketUrl vorhanden'), 
            -1;
            try {
                return this.mWebSocket = new this.mWebSocketClass(this.mWebSocketUrl), this.mWebSocket ? (this.mWebSocket.binaryType = 'arraybuffer', 
                this.mWebSocket.onopen = function(t) {
                    return e._webSocketOpen(t);
                }, this.mWebSocket.onclose = function(t) {
                    return e._webSocketClose(t);
                }, this.mWebSocket.onmessage = function(t) {
                    return e._webSocketMessage(t);
                }, this.mWebSocket.onerror = function(t) {
                    return e._webSocketError(t);
                }, 0) : (console.log('NetHtml5WebSocket._connect: keine WebSocket erzeugt'), this._error('_connect', 'keine WebSocket erzeugt'), 
                -1);
            } catch (t) {
                return this._exception('_connect', t), this.mWebSocket = null, -1;
            }
        }, e.prototype._setInfiniteConnect = function() {
            var t = this;
            this.mConnectInfinite && 0 === this.mConnectIntervalId && (this.mConnectIntervalId = setInterval(function() {
                t._connect(t.mWebSocketUrl);
            }, 5e3));
        }, e.prototype._clearInfiniteConnect = function() {
            0 !== this.mConnectIntervalId && (clearInterval(this.mConnectIntervalId), this.mConnectIntervalId = 0);
        }, e;
    }(c)), Nt = function(t) {
        function e(e) {
            var n = t.call(this, 'NuanceConnect') || this;
            return n.mWebSocket = null, n.mWebSocket = e, n;
        }
        return u(e, t), e.prototype._sendConnectMessage = function(t) {
            var e = window.navigator, n = [ e.platform, e.vendor, e.language ].join('_').replace(/\s/g, ''), o = {
                message: 'connect',
                user_id: t.userId,
                codec: t.codec || 'audio/L16;rate=16000',
                app_id: t.appId,
                app_key: t.appKey,
                device_id: n,
                phone_model: 'nuance_internal_mixjsapp',
                phone_number: t.userId
            };
            return this.mWebSocket.sendMessage(o);
        }, e.prototype.connect = function(t) {
            t = t || {}, this._sendConnectMessage(t), t.onopen(), this.mWebSocket.onMessage = function(e) {
                try {
                    switch (typeof e.data) {
                      case 'object':
                        t.onttsdecode(t, e.data);
                        break;

                      case 'string':
                        var n = JSON.parse(e.data);
                        'volume' === n.message ? t.onvolume(n.volume) : t.onresult(n), 'audio_begin' === n.message && t.onttsstart(), 
                        'audio_end' === n.message && t.onttscomplete();
                        break;

                      default:
                        t.onresult(e.data);
                    }
                } catch (t) {
                    console.log('NuanceConnect.connect: Exception', t.message);
                }
            }, this.mWebSocket.onClose = t.onclose, this.mWebSocket.onError = t.onerror;
        }, e.prototype.sendJSON = function(t) {
            return this.mWebSocket ? this.mWebSocket.sendMessage(t) : -1;
        }, Object.defineProperty(e.prototype, "webSocket", {
            get: function() {
                return this.mWebSocket.webSocket;
            },
            enumerable: !0,
            configurable: !0
        }), e;
    }(c), Rt = function(t) {
        function e(e, n, o) {
            var i = t.call(this, e || 'NuanceDevice') || this;
            return i.mConfig = null, i.mConnect = null, i.mTransaction = null, i.onStart = null, 
            i.onStop = null, i.onResult = null, i.onError = null, i.onClose = null, i.mConfig = n, 
            i.mConnect = o, i;
        }
        return u(e, t), e.prototype._onStart = function() {
            return this.mTransaction && this.onStart && this.onStart(this.mTransaction), 0;
        }, e.prototype._onStop = function() {
            return this.mTransaction && this.onStop && this.onStop(this.mTransaction), this.mTransaction = null, 
            0;
        }, e.prototype._onResult = function(t) {
            return this.mTransaction && this.onResult && (this.mTransaction.result = t, this.onResult(this.mTransaction)), 
            0;
        }, e.prototype._onError = function(t) {
            return this.mTransaction && this.onError && (this.mTransaction.error = t, this.onError(this.mTransaction)), 
            0;
        }, e.prototype._onClose = function() {
            return this.mTransaction && this.onClose && this.onClose(this.mTransaction), 0;
        }, e.prototype._getDefaultOption = function() {
            var t = this;
            return {
                onopen: function() {
                    t._onStart();
                },
                onclose: function() {
                    t._onClose(), t._onStop();
                },
                onerror: function(e) {
                    t._onError(e), t._onStop();
                }
            };
        }, e.prototype._createOption = function(t) {
            var e = Object.assign(t, this._getDefaultOption());
            return e.appId = t.appId || this.mConfig.appId || '', e.appKey = t.appKey || this.mConfig.appKey || '', 
            e.userId = t.userId || this.mConfig.userId, e.tag = t.tag || this.mConfig.nluTag || '', 
            e.language = t.language || "deu-DEU", e.text = t.text || '', e.voice = t.voice || "Petra-ML", 
            e.codec = t.codec || "audio/L16;rate=16000", e;
        }, e.prototype._sendQueryEndMessage = function(t) {
            var e = {
                message: 'query_end',
                transaction_id: t
            };
            return this.mConnect.sendJSON(e);
        }, e.prototype._start = function(t) {}, e.prototype._stop = function() {}, e.prototype.start = function(t, e) {
            if (!t) return this._error('start', 'keine Transaktion uebergeben'), -1;
            if (this.mTransaction) return this._error('start', 'vorherige Transaktion nicht beendet'), 
            -1;
            this.mTransaction = t;
            try {
                return this._start(e), 0;
            } catch (t) {
                return this._exception('start', t), -1;
            }
        }, e.prototype.stop = function(t) {
            if (!t) return this._error('stop', 'keine Transaktion uebergeben'), -1;
            if (!this.mTransaction) return this._error('stop', 'keine Transaktion gestartet'), 
            -1;
            if (this.mTransaction.transactionId !== t.transactionId) return this._error('stop', 'Transaktions-ID stimmt nicht ueberein'), 
            -1;
            try {
                return this._stop(), this._onStop(), 0;
            } catch (t) {
                return this._exception('stop', t), -1;
            }
        }, e.prototype.isTransaction = function() {
            return !!this.mTransaction;
        }, e.prototype.getTransaction = function() {
            return this.mTransaction;
        }, e.prototype.clearTransaction = function() {
            this.mTransaction = null;
        }, e;
    }(c), Pt = function(t) {
        function e(e, n) {
            return t.call(this, 'NuanceNLU', e, n) || this;
        }
        return u(e, t), e.prototype._getDefaultOption = function() {
            var e = this, n = t.prototype._getDefaultOption.call(this);
            return n.onresult = function(t) {
                if ('NDSP_APP_CMD' === t.result_type) if ('nlu_interpretation_results' === t.result_format) {
                    if ('failure' !== t.nlu_interpretation_results.status) try {
                        e._onResult(t.nlu_interpretation_results.payload.interpretations);
                    } catch (t) {
                        e._onError(new Error('NLU-Exception: ' + t.message));
                    } else e._onError(new Error('NLU-Error: ' + t.nlu_interpretation_results.reason));
                    e._onStop();
                } else console.log('ASR', t); else 'NDSP_CONCEPT_UPLOAD_FULL_CMD' === t.result_type ? console.log('Concept Upload', t) : 'NDSP_DELETE_ALL_CONCEPTS_DATA_CMD' === t.result_type ? console.log('Concept Upload Reset', t) : 'query_error' === t.message ? (e._onError(new Error('NLU-Error.' + t.message + ': ' + t.reason)), 
                e._onStop()) : 'disconnect' === t.message && 'Transaction completed.' !== t.reason && e._onError(new Error('NLU-Error.' + t.message + ': ' + t.reason));
            }, n;
        }, e.prototype._sendQueryBeginMessage = function(t, e, n) {
            var o = {
                message: 'query_begin',
                transaction_id: t,
                command: 'NDSP_APP_CMD',
                language: e,
                context_tag: n
            };
            return this.mConnect.sendJSON(o);
        }, e.prototype._sendQueryParameterMessage = function(t, e) {
            var n = {
                message: 'query_parameter',
                transaction_id: t,
                parameter_name: 'REQUEST_INFO',
                parameter_type: 'dictionary',
                dictionary: {
                    application_data: {
                        text_input: e
                    }
                }
            };
            return this.mConnect.sendJSON(n);
        }, e.prototype._start = function(t) {
            var e = this;
            t = this._createOption(t);
            var n = Object.assign({}, t);
            n.onopen = function() {
                t.onopen(), e._sendQueryBeginMessage(e.mTransaction.transactionId, n.language, n.tag), 
                e._sendQueryParameterMessage(e.mTransaction.transactionId, n.text), e._sendQueryEndMessage(e.mTransaction.transactionId);
            }, this.mConnect.connect(n);
        }, e;
    }(Rt), Dt = [ 'audio/opus;rate=8000', 'audio/opus;rate=16000' ], Ct = [ 'audio/L16;rate=8000', 'audio/L16;rate=16000' ], kt = function() {
        function t(t) {
            this.mAudioContext = null, this.mQueue = [], this.mAudioArray = [], this.mBeginSpeakFlag = !0, 
            this.mOpusDecoder = null, this.mOnAudioEndFunc = null, this.mAudioSource = null, 
            this.mAudioStopFlag = !1, this.mAudioContext = t;
        }
        return t.prototype.start = function() {
            this.mQueue = [], this.mAudioArray = [], this.mAudioSource = null, this.mOnAudioEndFunc = null, 
            this.mAudioStopFlag = !1, this.mBeginSpeakFlag = !0;
        }, t.prototype.findCodec = function(t, e) {
            for (var n = 0; n < e.length; n++) if (t === e[n]) return !0;
            return !1;
        }, t.prototype.decodePCM = function(t) {
            for (var e = new Int16Array(t), n = e.length, o = new Float32Array(n), i = 0; i < n; ++i) o[i] = e[i] / 32768;
            return o;
        }, t.prototype.playByStream = function(t, e) {
            var n = this;
            if (this.mOnAudioEndFunc = t.onaudioend, 0 === e.length || this.mAudioStopFlag) return this.mBeginSpeakFlag = !0, 
            t.onaudioend(), this.mOnAudioEndFunc = null, void (this.mAudioSource = null);
            var o = e.shift(), i = o.length, r = new Float32Array(i);
            r.set(o), this.mAudioSource = this.mAudioContext.createBufferSource(), this.mAudioSource.onended = function() {
                return n.playByStream(t, e);
            };
            var u = this.mAudioContext.createBuffer(1, r.length, 16e3);
            u.getChannelData(0).set(r), this.mAudioSource.buffer = u, this.mAudioSource.connect(this.mAudioContext.destination), 
            this.mAudioSource.start ? (this.mAudioSource.start(0), t.onaudiostart()) : this.mAudioSource.noteOn(0);
        }, t.prototype.decode = function(t, e) {
            if (this.findCodec(t.codec, Ct)) {
                var n = this.decodePCM(e);
                this.mAudioArray.push(n), this.mQueue.push(n), this.mBeginSpeakFlag && (this.mBeginSpeakFlag = !1, 
                this.playByStream(t, this.mAudioArray));
            } else this.findCodec(t.codec, Dt);
        }, t.prototype.stop = function() {
            this.mAudioStopFlag = !0, this.mAudioSource && (this.mAudioSource.stop(0), this.mAudioSource.disconnect(0), 
            'function' == typeof this.mOnAudioEndFunc && this.mOnAudioEndFunc());
        }, t;
    }(), bt = function(t) {
        function e(e, n, o) {
            var i = t.call(this, 'NuanceTTS', e, n) || this;
            return i.mAudioContext = null, i.mAudioSink = null, i.mAudioContext = o, i;
        }
        return u(e, t), e.prototype._getDefaultOption = function() {
            var e = this, n = t.prototype._getDefaultOption.call(this);
            return n.onresult = function(t) {
                'NMDP_TTS_CMD' === t.result_type || 'NVC_TTS_CMD' === t.result_type || ('query_error' === t.message ? (e._onError(new Error('TTS-Error.' + t.message + ': ' + t.reason)), 
                e._onStop()) : 'disconnect' === t.message && 'Transaction completed.' !== t.reason && e._onError(new Error('TTS-Error.' + t.message + ': ' + t.reason)));
            }, n.onttsdecode = function(t, n) {
                e.mAudioSink && e.mAudioSink.decode(t, n);
            }, n.onttsstart = function() {
                e.mAudioSink && e.mAudioSink.start();
            }, n.onttscomplete = function() {
                e.mAudioSink && e._onResult(e.mAudioSink.mQueue);
            }, n.onaudiostart = function() {
                e._onStart();
            }, n.onaudioend = function() {
                e.mAudioSink = null, e._onStop();
            }, n;
        }, e.prototype._sendQueryBeginMessage = function(t, e, n, o) {
            var i = {
                message: 'query_begin',
                transaction_id: t,
                command: 'NMDP_TTS_CMD',
                language: e,
                codec: o,
                tts_voice: n
            };
            return this.mConnect.sendJSON(i);
        }, e.prototype._sendQueryParameterMessage = function(t, e) {
            var n = {
                message: 'query_parameter',
                transaction_id: t,
                parameter_name: 'TEXT_TO_READ',
                parameter_type: 'dictionary',
                dictionary: {
                    audio_id: 789,
                    tts_input: e,
                    tts_type: 'text'
                }
            };
            return this.mConnect.sendJSON(n);
        }, e.prototype._start = function(t) {
            var e = this;
            t = this._createOption(t);
            var n = Object.assign({}, t);
            n.onopen = function() {
                t.onopen(), e.mAudioSink = new kt(e.mAudioContext), e._sendQueryBeginMessage(e.mTransaction.transactionId, t.language, t.voice, t.codec), 
                e._sendQueryParameterMessage(e.mTransaction.transactionId, t.text), e._sendQueryEndMessage(e.mTransaction.transactionId);
            }, this.mConnect.connect(n);
        }, e.prototype._stop = function() {
            this.mAudioSink && this.mAudioSink.stop();
        }, e;
    }(Rt), Tt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || ot, n) || this;
            return o.mAudioContext = null, o.mNuanceConfig = null, o.mNuanceWebSocket = null, 
            o.mNuanceConnect = null, o.mNuanceTTS = null, o.mNuanceNLU = null, o.mTransaction = null, 
            o.mRunningFlag = !1, o.defaultOptions = null, o.codec = '', o;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "Nuance";
        }, e.prototype.getClass = function() {
            return 'NuancePort';
        }, e.prototype.getVersion = function() {
            return "0.1.0.0001 vom 16.12.2018 (ALPHA)";
        }, e.prototype._checkCredentials = function(t) {
            return !!t && ('string' == typeof t.nuanceAppId && (!!t.nuanceAppId && ('string' == typeof t.nuanceAppKey && !!t.nuanceAppKey)));
        }, e.prototype._initAllObject = function(t) {
            var e = this, n = new dt();
            return n.init(), new vt().init({
                audioContext: this.mAudioContext
            }), this.mNuanceConfig = new Et(n), 0 !== this.mNuanceConfig.init(t) ? -1 : (this.mNuanceWebSocket = new Ft(), 
            this.mNuanceWebSocket.onOpen = function(t) {
                return e._onOpen();
            }, this.mNuanceWebSocket.onClose = function() {
                return e._onClose();
            }, this.mNuanceWebSocket.onError = function(t) {
                return e._onError(t);
            }, 0 !== this.mNuanceWebSocket.init(t) ? -1 : (this.mNuanceConnect = new Nt(this.mNuanceWebSocket), 
            this.mNuanceNLU = new Pt(this.mNuanceConfig, this.mNuanceConnect), this.mNuanceNLU.onStart = function(t) {
                return e._onStart(t.plugin, t.type);
            }, this.mNuanceNLU.onStop = function(t) {
                return e._onStop(t.plugin, t.type);
            }, this.mNuanceNLU.onResult = function(t) {
                return e._onResult(t.result, t.plugin, t.type);
            }, this.mNuanceNLU.onError = function(t) {
                return e._onError(t.error, t.plugin, t.type);
            }, this.mNuanceNLU.onClose = function(t) {
                return e._onClose();
            }, this.mAudioContext && (this.mNuanceTTS = new bt(this.mNuanceConfig, this.mNuanceConnect, this.mAudioContext), 
            this.mNuanceTTS.onStart = function(t) {
                return e._onStart(t.plugin, t.type);
            }, this.mNuanceTTS.onStop = function(t) {
                return e._onStop(t.plugin, t.type);
            }, this.mNuanceTTS.onResult = function(t) {
                return e._onResult(t.result, t.plugin, t.type);
            }, this.mNuanceTTS.onError = function(t) {
                return e._onError(t.error, t.plugin, t.type);
            }, this.mNuanceTTS.onClose = function(t) {
                return e._onClose();
            }), 0));
        }, e.prototype.init = function(e) {
            if (this.mInitFlag) return this._error('init', 'Port ist bereits initialisiert'), 
            0;
            if (!this._checkCredentials(e)) return (this.isErrorOutput() || e && e.errorOutputFlag) && this._error('init', 'keine AppId und/oder AppKey als Parameter uebergeben'), 
            -1;
            var n = S.get(F, N);
            if (n) {
                var o = n.create();
                o && (this.mAudioContext = new o());
            }
            return 0 !== this._initAllObject(e) ? -1 : 0 !== t.prototype.init.call(this, e) ? -1 : (this.isErrorOutput() && (this.mNuanceNLU ? console.log('NuancePort: NLU ist vorhanden') : console.log('NuancePort: NLU ist nicht vorhanden'), 
            this.mNuanceTTS ? console.log('NuancePort: TTS ist vorhanden') : console.log('NuancePort: TTS ist nicht vorhanden')), 
            0);
        }, e.prototype.done = function() {
            return t.prototype.done.call(this), this.mAudioContext = null, this.mNuanceConfig = null, 
            this.mNuanceWebSocket = null, this.mNuanceConnect = null, this.mNuanceTTS = null, 
            this.mNuanceNLU = null, this.mTransaction = null, this.mRunningFlag = !1, this.defaultOptions = null, 
            this.codec = '', 0;
        }, e.prototype.reset = function(e) {
            return this.mTransaction = null, t.prototype.reset.call(this, e);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mNuanceConfig && this.mNuanceConfig._setErrorOutput(e), 
            this.mNuanceWebSocket && this.mNuanceWebSocket._setErrorOutput(e), this.mNuanceConnect && this.mNuanceConnect._setErrorOutput(e), 
            this.mNuanceTTS && this.mNuanceTTS._setErrorOutput(e), this.mNuanceNLU && this.mNuanceNLU._setErrorOutput(e);
        }, e.prototype._onStop = function(e, n) {
            return this.mTransaction = null, this.mRunningFlag = !1, t.prototype._onStop.call(this, e, n);
        }, e.prototype.isOpen = function() {
            return this._isConnect();
        }, e.prototype.open = function(t) {
            return this._connect(t);
        }, e.prototype.close = function() {
            return this._disconnect();
        }, e.prototype.isRunning = function() {
            return this.mRunningFlag;
        }, e.prototype.isAction = function(t) {
            var e = !1;
            switch (t) {
              case "NLU":
                e = !!this.mNuanceNLU;
                break;

              case "TTS":
                e = !!this.mNuanceTTS;
            }
            return e;
        }, e.prototype.start = function(t, e, n) {
            if (this.isRunning()) return this._error('start', 'Aktion laeuft bereits'), -1;
            if (!this.isOpen()) return this._error('start', 'Port ist nicht geoeffnet'), -1;
            if (this.mTransaction) return this._error('start', 'andere Transaktion laeuft noch'), 
            -1;
            var o = n || {};
            this.mRunningFlag = !0;
            var i = 0;
            switch (e) {
              case "NLU":
                this.mTransaction = new _t(t, "NLU"), i = this._startNLU(this.mTransaction, o.text, o.language || "deu-DEU");
                break;

              case "TTS":
                this.mTransaction = new _t(t, "TTS"), i = this._startTTS(this.mTransaction, o.text, o.language || "deu-DEU", o.voice || "Petra-ML");
                break;

              default:
                this._error('start', 'Keine gueltige Aktion uebergeben ' + e), i = -1;
            }
            return i;
        }, e.prototype.stop = function(t, e, n) {
            if (!this.isRunning()) return 0;
            if (!this.isOpen()) return this._error('stop', 'Port ist nicht geoeffnet'), -1;
            if (!this.mTransaction) return this._error('stop', 'keine Transaktion vorhanden'), 
            -1;
            if (t !== this.mTransaction.plugin) return this._error('stop', 'PluginName der Transaktion stimmt nicht ueberein ' + t + ' != ' + this.mTransaction.plugin), 
            -1;
            if (e !== this.mTransaction.type) return this._error('stop', 'Typ der Transaktion stimmt nicht ueberein ' + e + ' != ' + this.mTransaction.type), 
            -1;
            var o = 0;
            switch (e) {
              case "NLU":
                o = this._stopNLU(this.mTransaction);
                break;

              case "TTS":
                o = this._stopTTS(this.mTransaction);
                break;

              default:
                this._error('stop', 'Keine gueltige Aktion uebergeben ' + e), o = -1;
            }
            return this.mRunningFlag = !1, o;
        }, e.prototype._initRecognition = function(t) {
            var e = this;
            return this.defaultOptions = {
                onopen: function() {
                    console.log('Websocket Opened');
                },
                onclose: function() {
                    console.log('Websocket Closed'), e._onClose();
                },
                onerror: function(t) {
                    console.error(t), e._onError(t);
                }
            }, 0;
        }, e.prototype._isConnect = function() {
            return !!this.mNuanceWebSocket && this.mNuanceWebSocket.isConnect();
        }, e.prototype._connect = function(t) {
            if (this._isConnect()) return 0;
            if (!this.mNuanceWebSocket) return this._error('_connect', 'kein NuanceWebSocket vorhanden'), 
            -1;
            try {
                return this.mNuanceWebSocket.connect(this.mNuanceConfig.serverUrl || it), 0;
            } catch (t) {
                return this._exception('_connect', t), -1;
            }
        }, e.prototype._disconnect = function() {
            if (!this._isConnect()) return 0;
            if (!this.mNuanceWebSocket) return this._error('_disconnect', 'kein NuanceWebSocket vorhanden'), 
            -1;
            try {
                return this.mNuanceWebSocket.disconnect(), 0;
            } catch (t) {
                return this._exception('_disconnect', t), -1;
            }
        }, e.prototype._startNLU = function(t, e, n) {
            if (!e) return this._error('_startNLU', 'keinen Text uebergeben'), -1;
            if (!n) return this._error('_startNLU', 'keine Sprache uebergeben'), -1;
            if (!this.mNuanceNLU) return this._error('_startNLU', 'keine Nuance NLU-Anbindung vorhanden'), 
            -1;
            try {
                var o = {
                    text: e,
                    language: n
                };
                return this.mNuanceNLU.start(t, o);
            } catch (t) {
                return this._exception('_startNLU', t), -1;
            }
        }, e.prototype._stopNLU = function(t) {
            if (!this.mNuanceNLU) return this._error('_stopNLU', 'keine Nuance NLU-Anbindung vorhanden'), 
            -1;
            try {
                return this.mNuanceNLU.stop(t);
            } catch (t) {
                return this._exception('_stopNLU', t), -1;
            }
        }, e.prototype._startTTS = function(t, e, n, o) {
            if (!e) return this._error('_startTTS', 'keinen Text uebergeben'), -1;
            if (!this.mNuanceTTS) return this._error('_startTTS', 'keine Nuance TTS-Anbindung vorhanden'), 
            -1;
            try {
                var i = {
                    text: e,
                    language: n,
                    voice: o
                };
                return this.mNuanceTTS.start(t, i);
            } catch (t) {
                return this._exception('_startTTS', t), -1;
            }
        }, e.prototype._stopTTS = function(t) {
            if (!this.mNuanceTTS) return this._error('_stopTTS', 'keine Nuance TTS-Anbindung vorhanden'), 
            -1;
            try {
                return this.mNuanceTTS.stop(t);
            } catch (t) {
                return this._exception('_stopTTS', t), -1;
            }
        }, e;
    }(yt), Ot = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            t.mErrorOutputFlag = !0, nt.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            t.mErrorOutputFlag = !1, nt.setErrorOutputOff();
        }, t.setErrorOutputFunc = function(t) {
            nt._setErrorOutputFunc(t);
        }, t._initNuancePort = function(t) {
            var e = nt.get("Nuance", Tt);
            return e ? 0 !== e.init(t) ? (nt.remove("Nuance"), -1) : 0 : -1;
        }, t.init = function(e) {
            return t.mInitFlag ? 0 : e ? ('boolean' == typeof e.errorOutputFlag && (e.errorOutputFlag ? t.setErrorOutputOn() : t.setErrorOutputOff()), 
            0 !== t._initNuancePort(e) ? -1 : (t.mInitFlag = !0, 0)) : (t.mErrorOutputFlag && console.log('Nuance.init: Keine Nuance-Parameter uebergeben'), 
            -1);
        }, t.isInit = function() {
            return t.mInitFlag;
        }, t.done = function() {
            var e = nt.get("Nuance");
            if (!e) return 0;
            var n = e.done();
            return nt.remove("Nuance"), t.mInitFlag = !1, n;
        }, t._onOpenEvent = function(e, n, o, i) {
            if ('function' == typeof i) try {
                return i(e, n, o), 0;
            } catch (e) {
                return t.mErrorOutputFlag && console.log('Nuance._onOpenEvent: Exception', e.message), 
                -1;
            }
            return 0;
        }, t._openNuancePort = function(e) {
            var n = nt.get("Nuance");
            return n ? (n.addOpenEvent("Nuance", function(o) {
                return n.removeErrorEvent("Nuance"), n.removeOpenEvent("Nuance"), 'function' == typeof e && t._onOpenEvent(null, "Nuance", o.result, e), 
                o.result;
            }), n.addErrorEvent("Nuance", function(o) {
                return n.removeOpenEvent("Nuance"), n.removeErrorEvent("Nuance"), 'function' == typeof e && t._onOpenEvent(o, "Nuance", -1, e), 
                0;
            }), n.open()) : (t.mErrorOutputFlag && console.log('Nuance._openNuancePort: kein Port vorhanden'), 
            t._onOpenEvent(new Error('Nuance._openNUancePort: Kein Port vorhanden'), "Nuance", -1, e), 
            -1);
        }, t.open = function(e) {
            return t.mInitFlag ? t._openNuancePort(e) : (t.mErrorOutputFlag && console.log('Nuance.open: Init wurde nicht aufgerufen'), 
            t._onOpenEvent(new Error('Nuance.open: Init wurde nicht aufgerufen'), "Nuance", -1, e), 
            -1);
        }, t.mInitFlag = !1, t.mErrorOutputFlag = !1, t;
    }(), xt = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            l.setErrorOutputOn(), S.setErrorOutputOn(), _.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            l.setErrorOutputOff(), S.setErrorOutputOff(), _.setErrorOutputOff();
        }, t._setErrorOutputFunc = function(t) {
            l._setErrorOutputFunc(t), S._setErrorOutputFunc(t), _._setErrorOutputFunc(t);
        }, t.insertBuilder = function(t, e) {
            return l.mBuilderList.insert(t, e);
        }, t.getBuilder = function(t, e) {
            return l.get(t, e);
        }, t.findBuilder = function(t) {
            return l.find(t);
        }, t.clear = function() {
            l.clear(), S.clear(), _.clear();
        }, t;
    }(), It = function(t) {
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
    }(c), wt = 'ActionFunction', Ut = function(t) {
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
    }(c), Bt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, wt, e) || this;
            return n.mActionFunctionList = new Ut(), n._setErrorClassName('ActionFunction'), 
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
    }(A), Mt = function(t) {
        function e() {
            return t.call(this, 'ActionFunctionFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionFunctionFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Bt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || wt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Kt = 'ActionElement', Ht = function(t) {
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
    }(c), Gt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, Kt, e) || this;
            return n.mActionElementList = new Ht(), n._setErrorClassName('ActionElement'), n.mActionElementList._setErrorOutputFunc(n._getErrorOutputFunc()), 
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
    }(A), Wt = function(t) {
        function e() {
            return t.call(this, 'ActionElementFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionElementFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Gt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Kt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), jt = 'init', qt = 'start', Vt = 'stop', Xt = 'error', zt = 'listenResult', Qt = 'intentResult', Jt = 'dialogSet', Yt = 'dialogStart', Zt = 'dialogStop', $t = 'dialogParse', te = 'dialogStateSet', ee = 'dialogAction', ne = 'dialogActionStop', oe = 'dialogSpeak', ie = 'dialogSpeakStart', re = 'dialogSpeakStop', ue = function(t) {
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
    }(A), se = function(t) {
        function n(n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n, o) || this;
            return i.mStartEvent = new at(qt, e), i.mStopEvent = new at(Vt, e), i.mRunningFlag = !1, 
            i.mStartEvent.setComponentName(n), i.mStopEvent.setComponentName(n), i.mStartEvent._setErrorOutputFunc(i._getErrorOutputFunc()), 
            i.mStopEvent._setErrorOutputFunc(i._getErrorOutputFunc()), i;
        }
        return u(n, t), n.prototype.getType = function() {
            return "Base";
        }, n.prototype.getClass = function() {
            return 'BaseComponent';
        }, n.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
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
              case qt:
                i = this.mStartEvent.addListener(e, o);
                break;

              case Vt:
                i = this.mStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, n.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case qt:
                o = this.mStartEvent.removeListener(e);
                break;

              case Vt:
                o = this.mStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, n.prototype.addInitEvent = function(t, e) {
            return this.addEventListener(t, jt, e);
        }, n.prototype.addStartEvent = function(t, e) {
            return this.addEventListener(t, qt, e);
        }, n.prototype.addStopEvent = function(t, e) {
            return this.addEventListener(t, Vt, e);
        }, n.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, Xt, e);
        }, n.prototype.removeInitEvent = function(t) {
            return this.removeEventListener(t, jt);
        }, n.prototype.removeStartEvent = function(t) {
            return this.removeEventListener(t, qt);
        }, n.prototype.removeStopEvent = function(t) {
            return this.removeEventListener(t, Vt);
        }, n.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, Xt);
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
            return o.mSendMessageFunc = null, o.mInitEvent = new at(jt), o.mErrorEvent = new at(Xt), 
            o.mInitEvent.setComponentName(e), o.mErrorEvent.setComponentName(e), o.mInitEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mErrorEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'Component';
        }, e.prototype.getClass = function() {
            return 'Component';
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
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
                  case jt:
                    e = this.mInitEvent.dispatch(t);
                    break;

                  case Xt:
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
              case jt:
                o = this.mInitEvent.addListener(t, n);
                break;

              case Xt:
                this._addEventListenerAllPlugin(t, e, n), o = this.mErrorEvent.addListener(t, n);
                break;

              default:
                o = this._addEventListenerAllPlugin(t, e, n);
            }
            return o;
        }, e.prototype.removeEventListener = function(t, e) {
            var n = 0;
            switch (e) {
              case jt:
                n = this.mInitEvent.removeListener(t);
                break;

              case Xt:
                this._removeEventListenerAllPlugin(t, e), n = this.mErrorEvent.removeListener(t);
                break;

              default:
                n = this._removeEventListenerAllPlugin(t, e);
            }
            return n;
        }, e;
    }(ue)), ae = function(t) {
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
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._initAllPlugin = function() {
            return this.mActionFunction = this.findPlugin(wt), this.mActionElement = this.findPlugin(Kt), 
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
    }(se), ce = function(t) {
        function e() {
            return t.call(this, 'ActionComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ActionComponentFactory";
        }, e.prototype.getType = function() {
            return "Action";
        }, e.prototype._newPlugin = function(t, e) {
            return new ae(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var o = t || n;
            try {
                return this._newPlugin(o, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), pe = function(t) {
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
                var t = this._buildComponent(), e = this._getPlugin(wt, "ActionFunctionFactory", Mt), n = this._getPlugin(Kt, "ActionElementFactory", Wt);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mActionComponent || (this.mActionComponent = this._getPlugin(n, "ActionComponentFactory", ce)), 
            this.mActionComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t ? e ? n ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'ActionFunction-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'ActionElement-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onError = t.onError, n.onError = t.onError, 0) : (this._error('_binder', 'Kein ActionElement-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Kein ActionFunction-Plugin vorhanden'), -1) : (this._error('_binder', 'Keine Action-Komponente vorhanden'), 
            -1);
        }, e;
    }(It), le = 'ASR', he = 'ASRMock', me = 'ASRHtml5', ge = 'ASRNuance', fe = 'ASRGroup', ye = fe, de = 3e4, Se = "de-DE", ve = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || le, n) || this;
            return o.mListenRunningFlag = !1, o.mListenLanguage = Se, o.mListenTimeoutId = 0, 
            o.mListenTimeoutTime = de, o.mOnListenStartFunc = null, o.mOnListenStopFunc = null, 
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
            this.mListenTimeoutTime = de, this.mListenRunningFlag = !1, this.mListenLanguage = Se, 
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
        }, e.prototype.setASR = function(t) {
            return 0;
        }, e.prototype.getASR = function() {
            return this.getName();
        }, e.prototype.getASRList = function() {
            return [ this.getName() ];
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
        }, e.prototype.getLanguageList = function() {
            return [ 'de', 'en' ];
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
    }(A), _e = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || he, n) || this;
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
    }(ve), Ee = 'SpeechRecognitionFactory', Ae = function(t) {
        function e(e, n) {
            return void 0 === n && (n = !0), t.call(this, e || Ee, n) || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "SpeechRecognition";
        }, e.prototype.getName = function() {
            return Ee;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || "SpeechRecognition";
            try {
                return "SpeechRecognition" === n ? window.SpeechRecognition || window.webkitSpeechRecognition || null : "SpeechGrammar" === n && (window.SpeechGrammarList || window.webkitSpeechGrammarList) || null;
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e.prototype.getSpeechRecognitionClass = function() {
            return this.create();
        }, e.prototype.getSpeechGrammarListClass = function() {
            return this.create("SpeechGrammar");
        }, e;
    }(E), Le = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || me, n) || this;
            return o.mRecognitionFactory = null, o.mRecognitionClass = null, o.mGrammarListClass = null, 
            o.mGrammarList = null, o.mRecognition = null, o.mRecognitionFactory = S.get(Ee, Ae), 
            o.mRecognitionFactory._setErrorOutputFunc(o._getErrorOutputFunc()), o;
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
    }(ve), Fe = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || ge, n) || this;
            return o.mNuancePort = null, o.mListenLanguage = 'deu-DEU', o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'ASRNuance';
        }, e.prototype.done = function() {
            return this.mNuancePort && (this.mNuancePort.removeAllEvent(ge), this.mNuancePort = null), 
            t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mNuancePort && (e ? this.mNuancePort.setErrorOutputOn() : this.mNuancePort.setErrorOutputOff());
        }, e.prototype.setLanguage = function(t) {
            var e = 0;
            switch (t) {
              case 'de':
                this.mListenLanguage = 'deu-DEU';
                break;

              case 'en':
                this.mListenLanguage = 'eng-USA';
                break;

              default:
                e = -1;
            }
            return e;
        }, e.prototype.getLanguage = function() {
            var t = '';
            switch (this.mListenLanguage) {
              case 'deu-DEU':
                t = 'de';
                break;

              case 'eng-USA':
                t = 'en';
            }
            return t;
        }, e.prototype._detectRecognition = function() {
            return this.mNuancePort = nt.find("Nuance"), !!this.mNuancePort || (this._error('_detectRecognition', 'kein Nuance-Port vorhanden'), 
            !1);
        }, e.prototype._initRecognition = function(t) {
            var e = this;
            return this.mNuancePort ? this.mNuancePort.isInit() ? this.mNuancePort.isOpen() ? (this.mNuancePort.addStartEvent(ge, function(t) {
                return e._onRecognitionStart(), 0;
            }), this.mNuancePort.addStopEvent(ge, function(t) {
                return e._onRecognitionEnd(), 0;
            }), this.mNuancePort.addResultEvent(ge, function(t) {
                return e._onRecognitionResult(t.data), 0;
            }), this.mNuancePort.addErrorEvent(ge, function(t) {
                return e._onError(t), 0;
            }), 0) : (this._error('_initRecognition', 'Nuance-Port ist nicht geoeffnet'), -1) : (this._error('_initRecognition', 'Nuance-Port ist nicht initialisiert'), 
            -1) : (this._error('_initRecognition', 'kein Nuance-Port vorhanden'), -1);
        }, e.prototype._isRecognition = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("ASR");
        }, e.prototype._getRecognitionResult = function(t) {
            return t[0];
        }, e.prototype._startRecognition = function() {
            return this.mNuancePort ? this.mNuancePort.start(ge, "ASR", {
                language: this._getASRLanguage()
            }) : -1;
        }, e.prototype._stopRecognition = function() {
            return this.mNuancePort ? this.mNuancePort.stop(ge, "ASR") : -1;
        }, e.prototype._abortRecognition = function() {
            return this.mNuancePort ? this._stopRecognition() : -1;
        }, e;
    }(ve), Ne = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || fe, o) || this;
            return i.mASRFactory = null, i.mASRHtml5 = null, i.mASRNuance = null, i.mCurrentASR = null, 
            i.mASRFactory = e, i._insertAllASR(), i;
        }
        return u(e, t), e.prototype.getType = function() {
            return "ASR";
        }, e.prototype.getClass = function() {
            return 'ASRGroup';
        }, e.prototype._insertAllASR = function() {
            this.mASRFactory ? (this.insertPlugin(me, this.mASRFactory.create(me, !1)), this.insertPlugin(ge, this.mASRFactory.create(ge, !1))) : this._error('_insertAllASR', 'keine ASR-Fabrik vorhanden');
        }, e.prototype._initASRHtml5 = function(t) {
            if (this.mASRHtml5 = this.findPlugin(me), this.mASRHtml5) {
                if (this.mASRHtml5.init(t), this.mASRHtml5.isActive()) return void (this.isErrorOutput() && console.log('ASRGroup._initASRHtml5: ASR eingefuegt'));
                this.removePlugin(me), this.mASRHtml5.done(), this.mASRHtml5 = null;
            }
            this.isErrorOutput() && console.log('ASRGroup._initASRHtml5: ASR nicht eingefuegt');
        }, e.prototype._initASRNuance = function(t) {
            if (this.mASRNuance = this.findPlugin(ge), this.mASRNuance) {
                if (this.mASRNuance.init(t), this.mASRNuance.isActive()) return void (this.isErrorOutput() && console.log('ASRGroup._initASRNuance: ASR eingefuegt'));
                this.removePlugin(ge), this.mASRNuance.done(), this.mASRNuance = null;
            }
            this.isErrorOutput() && console.log('ASRGroup._initASRNuance: ASR nicht eingefuegt');
        }, e.prototype.init = function(e) {
            if (this.isInit()) return this._error('init', 'init doppelt aufgerufen'), -1;
            if (!this.mASRFactory) return this._error('init', 'keine ASR-Fabrik vorhanden'), 
            -1;
            var n = e || {};
            return this.isErrorOutput() || (n.errorOutputFlag = !1), this._initASRHtml5(n), 
            this._initASRNuance(n), 0 !== t.prototype.init.call(this, e) ? -1 : (this.mCurrentASR = this.firstPlugin(), 
            this.mCurrentASR || (this.isErrorOutput() && console.log('ASRGroup.init: keine ASR verfuegbar'), 
            this.setActiveOff()), e && e.tts && this.setASR(e.tts), 0);
        }, e.prototype.done = function() {
            return this.mASRHtml5 = null, this.mASRNuance = null, this.mCurrentASR = null, t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this.mCurrentASR && (!!this.mCurrentASR.isActive() && t.prototype.isActive.call(this));
        }, e.prototype.setActiveOn = function() {
            return this.mCurrentASR && this.mCurrentASR.isActive() ? t.prototype.setActiveOn.call(this) : -1;
        }, Object.defineProperty(e.prototype, "onInit", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onInit = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStart", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenStart = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStop", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenStop = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenResult", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenResult = t, e = this.nextPlugin();
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
        }), e.prototype.setASR = function(t) {
            var e = null;
            switch (t) {
              case me:
                e = this.mASRHtml5;
                break;

              case ge:
                e = this.mASRNuance;
            }
            return e ? (this.mCurrentASR = e, 0) : (this._error('setASR', 'Keine ASR vorhanden'), 
            -1);
        }, e.prototype.getASR = function() {
            return this.mCurrentASR ? this.mCurrentASR.getName() : '';
        }, e.prototype.getASRList = function() {
            return this.getPluginNameList();
        }, e.prototype.setLanguage = function(t) {
            for (var e = 0, n = this.firstPlugin(); n; ) 0 !== n.setLanguage(t) && (e = -1), 
            n = this.nextPlugin();
            return e;
        }, e.prototype.getLanguage = function() {
            return this.mCurrentASR ? this.mCurrentASR.getLanguage() : '';
        }, e.prototype.getLanguageList = function() {
            return this.mCurrentASR ? this.mCurrentASR.getLanguageList() : [];
        }, e.prototype.isListenRunning = function() {
            return !!this.mCurrentASR && this.mCurrentASR.isListenRunning();
        }, e.prototype.setListenTimeout = function(t) {
            this.mCurrentASR && this.mCurrentASR.setListenTimeout(t);
        }, e.prototype.startListen = function() {
            return this.isActive() ? this.mCurrentASR.startListen() : (this.isErrorOutput() && console.log('ASRGroup.startListen: ASR ist nicht aktiv'), 
            0);
        }, e.prototype.getStartListenFunc = function() {
            var t = this;
            return function() {
                return t.startListen();
            };
        }, e.prototype.stopListen = function() {
            return this.isActive() ? this.mCurrentASR.stopListen() : (this.isErrorOutput() && console.log('ASRGroup.stopListen: ASR ist nicht aktiv'), 
            0);
        }, e.prototype.getStopListenFunc = function() {
            var t = this;
            return function() {
                return t.stopListen();
            };
        }, e.prototype.abortListen = function() {
            return this.isActive() ? this.mCurrentASR.abortListen() : (this.isErrorOutput() && console.log('ASRGroup.abortListen: ASR ist nicht aktiv'), 
            0);
        }, e.prototype.test = function(t, e) {
            return this.isActive() ? this.mCurrentASR.test(t, e) : (this.isErrorOutput() && console.log('ASRGroup.abortListen: ASR ist nicht aktiv'), 
            0);
        }, e;
    }(ue), Re = function(t) {
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
              case fe:
                n = new Ne(this, t, e);
                break;

              case le:
              case me:
                n = new Le(t, e);
                break;

              case ge:
                n = new Fe(t, e);
                break;

              case he:
                n = new _e(he, e);
                break;

              default:
                this._error('_newPlugin', 'keine ASR vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ye;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Pe = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, U, e) || this;
            return n.mASRPlugin = null, n.mListenResultEvent = new at(zt, U), n.mASRActiveFlag = !1, 
            n.mASRFeatureFlag = !1, n.mListenResultEvent._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Listen";
        }, e.prototype.getClass = function() {
            return 'ListenComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? (e.listenLanguage && this.setLanguage(e.listenLanguage), t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype._initAllPlugin = function() {
            return this.mASRPlugin = this.findPlugin(ye), this.mASRPlugin && (this.mASRActiveFlag = this.mASRPlugin.isActive()), 
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
              case zt:
                i = this.mListenResultEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case zt:
                o = this.mListenResultEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.addEventListener(t, zt, e);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.removeEventListener(t, zt);
        }, e.prototype.removeAllEvent = function(e) {
            return t.prototype.removeAllEvent.call(this, e), this.removeListenResultEvent(e), 
            0;
        }, e.prototype.setASR = function(t) {
            return this.mASRPlugin ? this.mASRPlugin.setASR(t) : -1;
        }, e.prototype.getASR = function() {
            return this.mASRPlugin ? this.mASRPlugin.getASR() : '';
        }, e.prototype.getASRList = function() {
            return this.mASRPlugin ? this.mASRPlugin.getASRList() : [];
        }, e.prototype.setLanguage = function(t) {
            return this.mASRPlugin ? this.mASRPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mASRPlugin ? this.mASRPlugin.getLanguage() : "";
        }, e.prototype.getLanguageList = function() {
            return this.mASRPlugin ? this.mASRPlugin.getLanguageList() : [];
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
    }(se), De = function(t) {
        function e() {
            return t.call(this, 'ListenComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ListenComponentFactory";
        }, e.prototype.getType = function() {
            return "Listen";
        }, e.prototype._newPlugin = function(t, e) {
            return new Pe(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || U;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Ce = function(t) {
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
                var t = this._buildComponent(), e = this._getPlugin(ye, "ASRFactory", Re);
                return 0 !== this._binder(t, e) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mListenComponent || (this.mListenComponent = this._getPlugin(U, "ListenComponentFactory", De)), 
            this.mListenComponent;
        }, e.prototype._binder = function(t, e) {
            return t ? e ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'ASR-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onInit = t.onInit, e.onListenStart = t.onStart, e.onListenStop = t.onStop, 
            e.onListenResult = t.onListenResult, e.onError = t.onError, 0) : (this._error('_binder', 'Kein ASR-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Listen-Komponente vorhanden'), -1);
        }, e;
    }(It), ke = 'TTS', be = 'TTSMock', Te = 'TTSHtml5', Oe = 'TTSNuance', xe = 'TTSGroup', Ie = xe, we = "de-DE", Ue = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || ke, n) || this;
            return o.mSpeakRunningFlag = !1, o.mSpeakLanguage = we, o.mSpeakVoice = '', o.mOnSpeakStartFunc = null, 
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
            return this.isSpeakRunning() && this.stopSpeak(), this.mSpeakRunningFlag = !1, this.mSpeakLanguage = we, 
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
    }(A), Be = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || be, n) || this;
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
    }(Ue), Me = 'SpeechSynthesisFactory', Ke = function(t) {
        function e(e, n) {
            return void 0 === n && (n = !0), t.call(this, e || Me, n) || this;
        }
        return u(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return "SpeechSynthesis";
        }, e.prototype.getName = function() {
            return Me;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || "SpeechSynthesis";
            try {
                return "SpeechSynthesis" === n ? window.speechSynthesis || null : "SpeechUtterance" === n && (window.SpeechSynthesisUtterance || window.webkitSpeechSynthesisUtterance) || null;
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e.prototype.getSpeechSynthesis = function() {
            return this.create();
        }, e.prototype.getSpeechSynthesisUtteranceClass = function() {
            return this.create("SpeechUtterance");
        }, e;
    }(E), He = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Te, n) || this;
            return o.mSynthesis = null, o.mUtteranceClass = null, o.mUtterance = null, o.mSynthesisFactory = S.get(Me, Ke), 
            o.mSynthesisFactory._setErrorOutputFunc(o._getErrorOutputFunc()), o;
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
    }(Ue), Ge = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Oe, n) || this;
            return o.mNuancePort = null, o.mSpeakLanguage = 'deu-DEU', o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'TTSNuance';
        }, e.prototype.done = function() {
            return this.mNuancePort && (this.mNuancePort.removeAllEvent(Oe), this.mNuancePort = null), 
            t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mNuancePort && (e ? this.mNuancePort.setErrorOutputOn() : this.mNuancePort.setErrorOutputOff());
        }, e.prototype.setLanguage = function(t) {
            var e = 0;
            switch (t) {
              case 'de':
                this.mSpeakLanguage = 'deu-DEU';
                break;

              case 'en':
                this.mSpeakLanguage = 'eng-USA';
                break;

              default:
                e = -1;
            }
            return e;
        }, e.prototype.getLanguage = function() {
            var t = '';
            switch (this.mSpeakLanguage) {
              case 'deu-DEU':
                t = 'de';
                break;

              case 'eng-USA':
                t = 'en';
            }
            return t;
        }, e.prototype.getVoiceList = function() {
            return 'de' === this.getLanguage() ? [ 'Anna-ML', 'Petra-ML', 'Markus', 'Yannick' ] : 'en' === this.getLanguage() ? [ 'Allison', 'Ava', 'Samantha', 'Susan', 'Zoe', 'Tom' ] : [];
        }, e.prototype._detectSynthesis = function() {
            return this.mNuancePort = nt.find("Nuance"), !!this.mNuancePort || (this._error('_detectSynthesis', 'kein Nuance-Port vorhanden'), 
            !1);
        }, e.prototype._initSynthesis = function(t) {
            var e = this;
            return this.mNuancePort ? this.mNuancePort.isInit() ? this.mNuancePort.isOpen() ? (this.mNuancePort.addStartEvent(Oe, function(t) {
                return e._onSynthesisStart(), 0;
            }), this.mNuancePort.addStopEvent(Oe, function(t) {
                return e._onSynthesisEnd(), 0;
            }), this.mNuancePort.addErrorEvent(Oe, function(t) {
                return e._onError(t), 0;
            }), 0) : (this._error('_initSynthesis', 'Nuance-Port ist nicht geoeffnet'), -1) : (this._error('_initSynthesis', 'Nuance-Port ist nicht initialisiert'), 
            -1) : (this._error('_initSynthesis', 'kein Nuance-Port vorhanden'), -1);
        }, e.prototype._isSynthesis = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("TTS");
        }, e.prototype._createSynthesis = function(t) {
            return 0;
        }, e.prototype._startSynthesis = function(t) {
            return this.mNuancePort ? this.mNuancePort.start(Oe, "TTS", {
                text: t,
                language: this._getTTSLanguage(),
                voice: this.getVoice()
            }) : -1;
        }, e.prototype._stopSynthesis = function() {
            return this.mNuancePort ? this.mNuancePort.stop(Oe, "TTS") : -1;
        }, e;
    }(Ue), We = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || xe, o) || this;
            return i.mTTSFactory = null, i.mTTSHtml5 = null, i.mTTSNuance = null, i.mCurrentTTS = null, 
            i.mTTSFactory = e, i._insertAllTTS(), i;
        }
        return u(e, t), e.prototype.getType = function() {
            return "TTS";
        }, e.prototype.getClass = function() {
            return 'TTSGroup';
        }, e.prototype._insertAllTTS = function() {
            this.mTTSFactory ? (this.insertPlugin(Te, this.mTTSFactory.create(Te, !1)), this.insertPlugin(Oe, this.mTTSFactory.create(Oe, !1))) : this._error('_insertAllTTS', 'keine TTS-Fabrik vorhanden');
        }, e.prototype._initTTSHtml5 = function(t) {
            if (this.mTTSHtml5 = this.findPlugin(Te), this.mTTSHtml5) {
                if (this.mTTSHtml5.init(t), this.mTTSHtml5.isActive()) return void (this.isErrorOutput() && console.log('TTSGroup._initTTSHtml5: TTS eingefuegt'));
                this.removePlugin(Te), this.mTTSHtml5.done(), this.mTTSHtml5 = null;
            }
            this.isErrorOutput() && console.log('TTSGroup._initTTSHtml5: TTS nicht eingefuegt');
        }, e.prototype._initTTSNuance = function(t) {
            if (this.mTTSNuance = this.findPlugin(Oe), this.mTTSNuance) {
                if (this.mTTSNuance.init(t), this.mTTSNuance.isActive()) return void (this.isErrorOutput() && console.log('TTSGroup._initTTSNuance: TTS eingefuegt'));
                this.removePlugin(Oe), this.mTTSNuance.done(), this.mTTSNuance = null;
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
              case Te:
                e = this.mTTSHtml5;
                break;

              case Oe:
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
            return this.isActive() ? this.mCurrentTTS.stopSpeak() : (this.isErrorOutput() && console.log('TTSGroup.stopSpeak: TTS ist nicht aktiv'), 
            0);
        }, e.prototype.getStopSpeakFunc = function() {
            var t = this;
            return function() {
                return t.stopSpeak();
            };
        }, e;
    }(ue), je = function(t) {
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
              case xe:
                n = new We(this, t, e);
                break;

              case ke:
              case Te:
                n = new He(t, e);
                break;

              case Oe:
                n = new Ge(t, e);
                break;

              case be:
                n = new Be(be, e);
                break;

              default:
                this._error('_newPlugin', 'keine TTS vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Ie;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), qe = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, T, e) || this;
            return n.mTTSPlugin = null, n.mAudioPlayer = null, n.mTTSActiveFlag = !1, n.mAudioPlayerActiveFlag = !1, 
            n.mTTSFeatureFlag = !1, n.mAudioFeatureFlag = !1, n.mAudioFilePath = O, n.mAudioFileName = '', 
            n.mAudioFlag = x, n.mSpeakText = '', n.mSpeakStopSelector = '', n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getClass = function() {
            return 'SpeakComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? ('string' == typeof e.audioFilePath && (this.mAudioFilePath = e.audioFilePath), 
            'boolean' == typeof e.audioFlag && (!0 === e.audioFlag ? this.mAudioFlag = !0 : this.mAudioFlag = !1), 
            e.speakLanguage && this.setLanguage(e.speakLanguage), t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype._initAllPlugin = function() {
            return this.mTTSPlugin = this.findPlugin(Ie), this.mAudioPlayer = this.findPlugin(f), 
            this.mTTSPlugin && (this.mTTSActiveFlag = this.mTTSPlugin.isActive()), this.mAudioPlayer && (this.mAudioPlayerActiveFlag = this.mAudioPlayer.isActive(), 
            this.mAudioPlayerActiveFlag || (this.mAudioFlag = !1)), 0;
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mTTSPlugin = null, this.mAudioPlayer = null;
        }, e.prototype._doneAllAttribute = function() {
            this.mTTSActiveFlag = !1, this.mAudioPlayerActiveFlag = !1, this.mTTSFeatureFlag = !1, 
            this.mAudioFeatureFlag = !1, this.mAudioFilePath = O, this.mAudioFileName = '', 
            this.mAudioFlag = x, this.mSpeakText = '', this.mSpeakStopSelector = '';
        }, e.prototype._resetAllDefault = function() {
            this.setAudioFormat(y), this.setLanguage("de"), this.mSpeakStopSelector = '', this.mAudioFilePath = O, 
            this.mAudioFileName = '', this.mAudioFlag = x, this.mSpeakText = '';
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
    }(se), Ve = function(t) {
        function e() {
            return t.call(this, 'SpeakComponentFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getName = function() {
            return "SpeakComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new qe(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || T;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Xe = function(t) {
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
                var t = this._buildComponent(), e = this._getPlugin(Ie, "TTSFactory", je), n = this._getPlugin(f, "AudioPlayerFactory", C);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mSpeakComponent || (this.mSpeakComponent = this._getPlugin(T, "SpeakComponentFactory", Ve)), 
            this.mSpeakComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t ? e ? n ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'TTS-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'AudioPlayer-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onInit = t.onInit, e.onSpeakStart = t.onStart, e.onSpeakStop = t.onStop, 
            e.onError = t.onError, n.onAudioStart = t.onStart, n.onAudioStop = t.onStop, n.onError = t.onError, 
            0) : (this._error('_binder', 'Kein AudioPlayer-Plugin vorhanden'), -1) : (this._error('_binder', 'Kein TTS-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Speak-Komponente vorhanden'), -1);
        }, e;
    }(It), ze = 'FileReader', Qe = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ze, e) || this;
            return n.mXMLHttpRequest = null, n.mRequest = null, n.mOnReadFunc = null, n;
        }
        return u(e, t), e.prototype.getType = function() {
            return 'FileReader';
        }, e.prototype.getClass = function() {
            return 'FileReader';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : (this.mXMLHttpRequestFactory = S.get(R, P), 
            this._detectXMLHttpRequest() ? t.prototype.init.call(this, e) : -1);
        }, e.prototype.done = function() {
            return this.mXMLHttpRequest = null, this.mRequest = null, this.mOnReadFunc = null, 
            t.prototype.done.call(this);
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
    }(A), Je = function(t) {
        function e() {
            return t.call(this, 'FileReaderFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "FileReaderFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Qe(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ze;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Ye = 'StorePlugin', Ze = function() {
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
    }(), $e = function() {
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
            var i = new Ze(t, e, this.mStateId, n, o);
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
    }(), tn = function() {
        function t(t) {
            this.mDialogName = '', this.mDialogStateList = new Map(), this.mDialogName = t;
        }
        return t.prototype.getName = function() {
            return this.mDialogName;
        }, t.prototype.newDialogState = function(t, e) {
            var n = new $e(this.mDialogName, t, e);
            return this.mDialogStateList.set(t, n), n;
        }, t.prototype.getDialogState = function(t) {
            return this.mDialogStateList.get(t);
        }, t;
    }(), en = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, Ye, e) || this;
            return n.mDialogList = new Map(), n._setErrorClassName('StorePlugin'), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogList.clear(), t.prototype.done.call(this);
        }, e.prototype.clear = function() {
            this.mDialogList.clear();
        }, e.prototype.newDialog = function(t) {
            var e = new tn(t);
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
    }(A), nn = function(t) {
        function e() {
            return t.call(this, 'StoreFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "StoreFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new en(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Ye;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), on = 'ParserPlugin', rn = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, on, e) || this;
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
            var e = t.split('\n'), n = '', o = '', i = null, r = null, u = 0, s = 0, a = 0, c = [], p = '', l = '', h = 0, m = 0, g = '', f = '', y = '', d = '', S = 0, v = 0, _ = 0, E = '', A = !1;
            try {
                for (var L = 0; L < e.length; ++L) if (p = e[L].trim(), l = '', L < e.length - 1 && (l = e[L + 1].trim()), 
                p && 0 !== (v = p.indexOf('#'))) {
                    switch (-1 === (v = p.indexOf(' ')) && (v = p.length), n = p.substr(0, v), 'GROUPEND' === l && (A = !0, 
                    l = '', L < e.length - 2 && (l = e[L + 2].trim())), c = (p = p.substr(v + 1, p.length)).split(','), 
                    n) {
                      case 'DIALOG':
                        o = c[0].trim(), this._newDialog(o);
                        break;

                      case 'STATE':
                        a = ++u, g = c[0].trim(), i = this._newDialogState(o, g, a);
                        break;

                      case 'GROUP':
                        h = ++s, E = c[0].trim(), m = h + 1, l || (m = 0), _ = h, (r = i.newDialogNode("group", h, 0, m)).setProperty(E);
                        break;

                      case 'GROUPEND':
                        break;

                      case 'ACTION':
                        h = ++s, g = c[0].trim(), f = c[1].trim(), y = c[2].trim(), m = h + 1, l || (m = 0), 
                        (r = i.newDialogNode("action", h, _, m)).setName(g), r.setObjectType(f), r.setObjectName(y), 
                        r.setProperty(E);
                        break;

                      case 'SPEAK':
                        h = ++s, S = 1e3 * parseInt(c[0].trim(), 10), d = c[1].trim();
                        for (var F = 2; F < c.length; F++) d += ',' + c[F].trim();
                        m = h + 1, l || (m = 0), (r = i.newDialogNode("speak", h, _, m)).setTimeout(S), 
                        r.setText(d), r.setProperty(E);
                        break;

                      case 'WAIT':
                        h = ++s, S = 1e3 * parseInt(c[0].trim(), 10), m = h + 1, l || (m = 0), (r = i.newDialogNode("wait", h, _, m)).setTimeout(S), 
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
    }(A), un = function(t) {
        function e() {
            return t.call(this, 'ParserFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "ParserFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new rn(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || on;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), sn = 'InterpreterPlugin', an = (function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        u(e, t), e.prototype.cancel = function() {
            this.cancelMethod && this.cancelMethod();
        };
    }(Promise), function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, sn, e) || this;
            return n.mDialogName = z, n.mStateName = Q, n.mStateContext = null, n.mNodePromise = null, 
            n.mDialogRunFlag = !1, n.mSpeakRunFlag = !1, n.mGroupId = 0, n.mGroupProperty = '', 
            n.mGroupActionFlag = !1, n.mNoWaitNodeFlag = !1, n.mGetDialogStateFunc = null, n.mDialogSetFunc = null, 
            n.mDialogStartFunc = null, n.mDialogStopFunc = null, n.mDialogStateSetFunc = null, 
            n.mDialogActionFunc = null, n.mDialogSpeakFunc = null, n.mDialogSpeakStartFunc = null, 
            n.mDialogSpeakStopFunc = null, n._setErrorClassName('InterpreterPlugin'), n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogName = z, this.mStateName = Q, this.mStateContext = null, this.mNodePromise = null, 
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
                    event: ee,
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
                    event: oe,
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
            return new Ze("wait", 0, 0, 0, 0);
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
    }(A)), cn = function(t) {
        function e() {
            return t.call(this, 'InterpreterFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "InterpreterFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new an(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || sn;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), pn = function(t) {
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
    }(c), ln = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, j, e) || this;
            return n.mStore = null, n.mInterpreter = null, n._setErrorClassName('DialogComponent'), 
            n;
        }
        return u(e, t), e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('DialogComponent.init: bereits initialisiert'), 
            0) : (this.mStore = this.findPlugin(Ye), this.mStore ? (this.mInterpreter = this.findPlugin(sn), 
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
            return o.mDialogContext = new pn(), o.mParseSpeechDefFileFunc = null, o.mParseSpeechDefDataFunc = null, 
            o.mReadFileFunc = null, o.mDialogParseEvent = new at($t), o.mDialogSetEvent = new at(Jt), 
            o.mDialogStartEvent = new at(Yt), o.mDialogStopEvent = new at(Zt), o.mDialogStateSetEvent = new at(te), 
            o.mDialogActionEvent = new at(ee), o.mDialogActionStopEvent = new at(ne), o.mDialogSpeakEvent = new at(oe), 
            o.mDialogSpeakStartEvent = new at(ie), o.mDialogSpeakStopEvent = new at(re), o.mDialogLoadFlag = X, 
            o.mDialogFilePath = q, o.mDialogFileName = V, o.mActivDialogFlag = !1, o.mDialogContext._setErrorOutputFunc(o._getErrorOutputFunc()), 
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
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
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
            this.mDialogContext.clear(), this.mReadFileFunc = null, this.mDialogFilePath = q, 
            this.mDialogFileName = V, this.mDialogLoadFlag = X, this.mActivDialogFlag = !1;
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.stop(), this.setActiveOn(), this.clearDialog(), this.mDialogContext.clear(), 
            this.setDialog(z), this.setDialogState(Q), this.mDialogFilePath = q, this.mDialogFileName = V, 
            this.mDialogLoadFlag = X, this.mActivDialogFlag = !1, this._setOption(t), this.mDialogLoadFlag && 0 !== this.loadDialogFile() ? (this._error('reset', 'Dialogdatei nicht geladen'), 
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
              case $t:
                i = this.mDialogParseEvent.addListener(e, o);
                break;

              case Jt:
                i = this.mDialogSetEvent.addListener(e, o);
                break;

              case Yt:
                i = this.mDialogStartEvent.addListener(e, o);
                break;

              case Zt:
                i = this.mDialogStopEvent.addListener(e, o);
                break;

              case te:
                i = this.mDialogStateSetEvent.addListener(e, o);
                break;

              case ee:
                i = this.mDialogActionEvent.addListener(e, o);
                break;

              case ne:
                i = this.mDialogActionStopEvent.addListener(e, o);
                break;

              case oe:
                i = this.mDialogSpeakEvent.addListener(e, o);
                break;

              case ie:
                i = this.mDialogSpeakStartEvent.addListener(e, o);
                break;

              case re:
                i = this.mDialogSpeakStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case $t:
                o = this.mDialogParseEvent.removeListener(e);
                break;

              case Jt:
                o = this.mDialogSetEvent.removeListener(e);
                break;

              case Yt:
                o = this.mDialogStartEvent.removeListener(e);
                break;

              case Zt:
                o = this.mDialogStopEvent.removeListener(e);
                break;

              case te:
                o = this.mDialogStateSetEvent.removeListener(e);
                break;

              case ee:
                o = this.mDialogActionEvent.removeListener(e);
                break;

              case ne:
                o = this.mDialogActionStopEvent.removeListener(e);
                break;

              case oe:
                o = this.mDialogSpeakEvent.removeListener(e);
                break;

              case ie:
                o = this.mDialogSpeakStartEvent.removeListener(e);
                break;

              case re:
                o = this.mDialogSpeakStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, $t, e);
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.addEventListener(t, Jt, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, Yt, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, Zt, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, te, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, ee, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, ne, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, oe, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, ie, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, re, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, Xt, e);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, $t);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, Jt);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, Yt);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, Zt);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, te);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, ee);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, ne);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, oe);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, ie);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, re);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, Xt);
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
    }(se)), hn = function(t) {
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
                return new ln(e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), mn = function(t) {
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
                var t = this._buildComponent(), e = this._getPlugin(ze, "FileReaderFactory", Je), n = this._getPlugin(Ye, "StoreFactory", nn), o = this._getPlugin(on, "ParserFactory", un), i = this._getPlugin(sn, "InterpreterFactory", cn);
                return 0 !== this._binder(t, e, n, o, i) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mDialogComponent || (this.mDialogComponent = this._getPlugin(j, "DialogComponentFactory", hn)), 
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
    }(It), gn = 'NLU', fn = 'NLUMock', yn = 'NLUHtml5', dn = 'NLUNuance', Sn = 'NLUGroup', vn = Sn, _n = 3e4, En = "de-DE", An = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || gn, n) || this;
            return o.mListenRunningFlag = !1, o.mListenLanguage = En, o.mListenTimeoutId = 0, 
            o.mListenTimeoutTime = _n, o.mOnConnectFunc = null, o.mOnDisconnectFunc = null, 
            o.mOnListenStartFunc = null, o.mOnListenStopFunc = null, o.mOnListenResultFunc = null, 
            o.mOnIntentResultFunc = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "NLU";
        }, e.prototype.getClass = function() {
            return 'NLUPlugin';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : 0 !== t.prototype.init.call(this, e) ? -1 : this._detectRecognition() ? 0 !== this._initRecognition(e) ? (this.setActiveOff(), 
            0) : 0 : (this.setActiveOff(), 0);
        }, e.prototype.done = function() {
            return this.isListenRunning() && this.stopListen(), this._clearRecognitionTimeout(), 
            this.mListenTimeoutTime = _n, this.mListenRunningFlag = !1, this.mListenLanguage = En, 
            this.mOnConnectFunc = null, this.mOnDisconnectFunc = null, this.mOnListenStartFunc = null, 
            this.mOnListenStopFunc = null, this.mOnListenResultFunc = null, this.mOnIntentResultFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this._isRecognition() && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this._isRecognition() ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype._onConnect = function() {
            try {
                return 'function' == typeof this.mOnConnectFunc ? this.mOnConnectFunc() : 0;
            } catch (t) {
                return this._exception('_onConnect', t), -1;
            }
        }, e.prototype._onDisconnect = function() {
            try {
                return 'function' == typeof this.mOnDisconnectFunc ? this.mOnDisconnectFunc() : 0;
            } catch (t) {
                return this._exception('_onDisconnect', t), -1;
            }
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
        }, e.prototype._onIntentResult = function(t) {
            try {
                return 'function' == typeof this.mOnIntentResultFunc ? this.mOnIntentResultFunc(t) : 0;
            } catch (t) {
                return this._exception('_onIntentResult', t), -1;
            }
        }, Object.defineProperty(e.prototype, "onConnect", {
            set: function(t) {
                this.mOnConnectFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDisconnect", {
            set: function(t) {
                this.mOnDisconnectFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStart", {
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
        }), Object.defineProperty(e.prototype, "onIntentResult", {
            set: function(t) {
                this.mOnIntentResultFunc = t;
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype._detectRecognition = function() {
            return !1;
        }, e.prototype._initRecognition = function(t) {
            return -1;
        }, e.prototype._isRecognition = function() {
            return !1;
        }, e.prototype.isIntent = function() {
            return !1;
        }, e.prototype.isListen = function() {
            return !1;
        }, e.prototype._setRecognitionTimeout = function() {
            var t = this;
            this._clearRecognitionTimeout(), this.mListenTimeoutId = setTimeout(function() {
                t.stopListen();
            }, this.mListenTimeoutTime);
        }, e.prototype._clearRecognitionTimeout = function() {
            this.mListenTimeoutId && (clearTimeout(this.mListenTimeoutId), this.mListenTimeoutId = 0);
        }, e.prototype._onRecognitionOpen = function() {
            return this._onConnect();
        }, e.prototype._onRecognitionClose = function() {
            return this._onDisconnect();
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
        }, e.prototype._getRecognitionIntentResult = function(t) {
            return t;
        }, e.prototype._onRecognitionIntentResult = function(t) {
            var e = 0;
            try {
                e = this._onIntentResult(this._getRecognitionIntentResult(t));
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
        }, e.prototype.setNLU = function(t) {
            return 0;
        }, e.prototype.getNLU = function() {
            return this.getName();
        }, e.prototype.getNLUList = function() {
            return [ this.getName() ];
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
        }, e.prototype.getLanguageList = function() {
            return [ 'de', 'en' ];
        }, e.prototype._getNLULanguage = function() {
            return this.mListenLanguage;
        }, e.prototype._startRecognitionIntent = function(t) {
            return this._error('_startRecognitionIntent', 'Keine NLU vorhanden'), -1;
        }, e.prototype.startIntent = function(t) {
            if (!this.isActive()) return this.isErrorOutput() && console.log('NLUPlugin.startIntent: NLU ist nicht aktiv'), 
            0;
            if (!this.isIntent()) return this._error('startIntent', 'keine NLU vorhanden'), 
            -1;
            if (!t) return this._error('startIntent', 'kein text uebergeben'), -1;
            if (this.isListenRunning()) return this._error('startIntent', 'Sprachanalyse laeuft bereits'), 
            -1;
            try {
                if (0 !== this._startRecognitionIntent(t)) return -1;
            } catch (t) {
                return this._exception('startIntent', t), -1;
            }
            return this.mListenRunningFlag = !0, this._onListenStart();
        }, e.prototype.isListenRunning = function() {
            return this.mListenRunningFlag;
        }, e.prototype.setListenTimeout = function(t) {
            this.mListenTimeoutTime = t;
        }, e.prototype.startListen = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('NLUPlugin.startListen: NLU ist nicht aktiv'), 
            0;
            if (!this.isListen()) return this._error('startIntent', 'keine ASRNLU vorhanden'), 
            -1;
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
            if (!this.isActive()) return this.isErrorOutput() && console.log('NLUPlugin.stopListen: NLU ist nicht aktiv'), 
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
            if (!this.isActive()) return this.isErrorOutput() && console.log('NLUPlugin.abortListen: NLU ist nicht aktiv'), 
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
    }(A), Ln = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || fn, n) || this;
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
            return 'NLUMock';
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
    }(An), Fn = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || yn, n) || this;
            return o.mRecognitionFactory = null, o.mRecognitionClass = null, o.mGrammarListClass = null, 
            o.mGrammarList = null, o.mRecognition = null, o.mRecognitionFactory = S.get(Ee, Ae), 
            o.mRecognitionFactory._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'NLUHtml5';
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
                this.mRecognition = new this.mRecognitionClass(), this.mRecognition.lang = this._getNLULanguage(), 
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
            return this.mRecognition ? (this.mRecognition.lang = this._getNLULanguage(), this.mRecognition.abort(), 
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
    }(An), Nn = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || dn, n) || this;
            return o.mNuancePort = null, o.mListenLanguage = 'deu-DEU', o;
        }
        return u(e, t), e.prototype.getClass = function() {
            return 'NLUNuance';
        }, e.prototype.done = function() {
            return this.mNuancePort && (this.mNuancePort.removeAllEvent(dn), this.mNuancePort = null), 
            t.prototype.done.call(this);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mNuancePort && (e ? this.mNuancePort.setErrorOutputOn() : this.mNuancePort.setErrorOutputOff());
        }, e.prototype.setLanguage = function(t) {
            var e = 0;
            switch (t) {
              case 'de':
                this.mListenLanguage = 'deu-DEU';
                break;

              case 'en':
                this.mListenLanguage = 'eng-USA';
                break;

              default:
                e = -1;
            }
            return e;
        }, e.prototype.getLanguage = function() {
            var t = '';
            switch (this.mListenLanguage) {
              case 'deu-DEU':
                t = 'de';
                break;

              case 'eng-USA':
                t = 'en';
            }
            return t;
        }, e.prototype._detectRecognition = function() {
            return this.mNuancePort = nt.find("Nuance"), !!this.mNuancePort || (this._error('_detectRecognition', 'kein Nuance-Port vorhanden'), 
            !1);
        }, e.prototype._onInternResult = function(t) {
            return "NLU" === t.type || "ASRNLU" === t.type ? this._onRecognitionIntentResult(t.data) : "ASR" === t.type ? this._onRecognitionResult(t.data) : 0;
        }, e.prototype._initRecognition = function(t) {
            var e = this;
            return this.mNuancePort ? this.mNuancePort.isInit() ? this.mNuancePort.isOpen() ? (this.mNuancePort.addStartEvent(dn, function(t) {
                return e._onRecognitionStart(), 0;
            }), this.mNuancePort.addStopEvent(dn, function(t) {
                return e._onRecognitionEnd(), 0;
            }), this.mNuancePort.addResultEvent(dn, function(t) {
                return e._onInternResult(t), 0;
            }), this.mNuancePort.addErrorEvent(dn, function(t) {
                return e._onError(t), 0;
            }), 0) : (this._error('_initRecognition', 'Nuance-Port ist nicht geoeffnet'), -1) : (this._error('_initRecognition', 'Nuance-Port ist nicht initialisiert'), 
            -1) : (this._error('_initRecognition', 'kein Nuance-Port vorhanden'), -1);
        }, e.prototype._isRecognition = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("NLU");
        }, e.prototype.isIntent = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("NLU");
        }, e.prototype.isListen = function() {
            return !!this.mNuancePort && this.mNuancePort.isAction("ASRNLU");
        }, e.prototype._getRecognitionResult = function(t) {
            return t[0];
        }, e.prototype._getRecognitionIntentResult = function(t) {
            var e = {
                intent: '',
                confidence: 0,
                literal: '',
                error: ''
            };
            try {
                e.intent = t[0].action.intent.value, e.confidence = t[0].action.intent.confidence, 
                e.literal = t[0].action.literal;
            } catch (t) {
                this._exception('_getRecognitionIntentResult', t), e.error = 'Exception:' + t.message;
            }
            return e;
        }, e.prototype._startRecognition = function() {
            return this.mNuancePort ? this.mNuancePort.start(dn, "ASRNLU", {
                language: this._getNLULanguage()
            }) : -1;
        }, e.prototype._startRecognitionIntent = function(t) {
            return this.mNuancePort ? this.mNuancePort.start(dn, "NLU", {
                text: t,
                language: this._getNLULanguage()
            }) : -1;
        }, e.prototype._stopRecognition = function() {
            return this.mNuancePort ? this.mNuancePort.stop(dn) : -1;
        }, e.prototype._abortRecognition = function() {
            return this._stopRecognition();
        }, e;
    }(An), Rn = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || Sn, o) || this;
            return i.mNLUFactory = null, i.mNLUHtml5 = null, i.mNLUNuance = null, i.mCurrentNLU = null, 
            i.mNLUFactory = e, i._insertAllNLU(), i;
        }
        return u(e, t), e.prototype.getType = function() {
            return "NLU";
        }, e.prototype.getClass = function() {
            return 'NLUGroup';
        }, e.prototype._insertAllNLU = function() {
            this.mNLUFactory ? (this.insertPlugin(dn, this.mNLUFactory.create(dn, !1)), this.insertPlugin(yn, this.mNLUFactory.create(yn, !1))) : this._error('_insertAllNLU', 'keine NLU-Fabrik vorhanden');
        }, e.prototype._initNLUHtml5 = function(t) {
            if (this.mNLUHtml5 = this.findPlugin(yn), this.mNLUHtml5) {
                if (this.mNLUHtml5.init(t), this.mNLUHtml5.isActive()) return void (this.isErrorOutput() && console.log('NLUGroup._initNLUHtml5: NLU eingefuegt'));
                this.removePlugin(yn), this.mNLUHtml5.done(), this.mNLUHtml5 = null;
            }
            this.isErrorOutput() && console.log('NLUGroup._initNLUHtml5: NLU nicht eingefuegt');
        }, e.prototype._initNLUNuance = function(t) {
            if (this.mNLUNuance = this.findPlugin(dn), this.mNLUNuance) {
                if (this.mNLUNuance.init(t), this.mNLUNuance.isActive()) return void (this.isErrorOutput() && console.log('NLUGroup._initNLUNuance: NLU eingefuegt'));
                this.removePlugin(dn), this.mNLUNuance.done(), this.mNLUNuance = null;
            }
            this.isErrorOutput() && console.log('NLUGroup._initNLUNuance: NLU nicht eingefuegt');
        }, e.prototype.init = function(e) {
            if (this.isInit()) return this._error('init', 'init doppelt aufgerufen'), -1;
            if (!this.mNLUFactory) return this._error('init', 'keine NLU-Fabrik vorhanden'), 
            -1;
            var n = e || {};
            return this.isErrorOutput() || (n.errorOutputFlag = !1), this._initNLUNuance(n), 
            this._initNLUHtml5(n), 0 !== t.prototype.init.call(this, e) ? -1 : (this.mCurrentNLU = this.firstPlugin(), 
            this.mCurrentNLU || (this.isErrorOutput() && console.log('NLUGroup.init: keine NLU verfuegbar'), 
            this.setActiveOff()), e && e.tts && this.setNLU(e.tts), 0);
        }, e.prototype.done = function() {
            return this.mNLUHtml5 = null, this.mNLUNuance = null, this.mCurrentNLU = null, t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this.mCurrentNLU && (!!this.mCurrentNLU.isActive() && t.prototype.isActive.call(this));
        }, e.prototype.setActiveOn = function() {
            return this.mCurrentNLU && this.mCurrentNLU.isActive() ? t.prototype.setActiveOn.call(this) : -1;
        }, Object.defineProperty(e.prototype, "onInit", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onInit = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onConnect", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onConnect = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onDisconnect", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onDisconnect = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStart", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenStart = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStop", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenStop = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenResult", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onListenResult = t, e = this.nextPlugin();
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onIntentResult", {
            set: function(t) {
                for (var e = this.firstPlugin(); e; ) e.onIntentResult = t, e = this.nextPlugin();
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
        }), e.prototype.setNLU = function(t) {
            var e = null;
            switch (t) {
              case yn:
                e = this.mNLUHtml5;
                break;

              case dn:
                e = this.mNLUNuance;
            }
            return e ? (this.mCurrentNLU = e, 0) : (this._error('setNLU', 'Keine NLU vorhanden'), 
            -1);
        }, e.prototype.getNLU = function() {
            return this.mCurrentNLU ? this.mCurrentNLU.getName() : '';
        }, e.prototype.getNLUList = function() {
            return this.getPluginNameList();
        }, e.prototype.setLanguage = function(t) {
            for (var e = 0, n = this.firstPlugin(); n; ) 0 !== n.setLanguage(t) && (e = -1), 
            n = this.nextPlugin();
            return e;
        }, e.prototype.getLanguage = function() {
            return this.mCurrentNLU ? this.mCurrentNLU.getLanguage() : '';
        }, e.prototype.getLanguageList = function() {
            return this.mCurrentNLU ? this.mCurrentNLU.getLanguageList() : [];
        }, e.prototype.isIntent = function() {
            return !!this.mCurrentNLU && this.mCurrentNLU.isIntent();
        }, e.prototype.startIntent = function(t) {
            return this.isActive() ? this.mCurrentNLU.startIntent(t) : (this.isErrorOutput() && console.log('NLUGroup.startIntent: NLU ist nicht aktiv'), 
            0);
        }, e.prototype.isListen = function() {
            return !!this.mCurrentNLU && this.mCurrentNLU.isListen();
        }, e.prototype.isListenRunning = function() {
            return !!this.mCurrentNLU && this.mCurrentNLU.isListenRunning();
        }, e.prototype.setListenTimeout = function(t) {
            this.mCurrentNLU && this.mCurrentNLU.setListenTimeout(t);
        }, e.prototype.startListen = function() {
            return this.isActive() ? this.mCurrentNLU.startListen() : (this.isErrorOutput() && console.log('NLUGroup.startListen: NLU ist nicht aktiv'), 
            0);
        }, e.prototype.getStartListenFunc = function() {
            var t = this;
            return function() {
                return t.startListen();
            };
        }, e.prototype.stopListen = function() {
            return this.isActive() ? this.mCurrentNLU.stopListen() : (this.isErrorOutput() && console.log('NLUGroup.stopListen: NLU ist nicht aktiv'), 
            0);
        }, e.prototype.getStopListenFunc = function() {
            var t = this;
            return function() {
                return t.stopListen();
            };
        }, e.prototype.abortListen = function() {
            return this.isActive() ? this.mCurrentNLU.abortListen() : (this.isErrorOutput() && console.log('NLUGroup.abortListen: NLU ist nicht aktiv'), 
            0);
        }, e.prototype.test = function(t, e) {
            return this.isActive() ? this.mCurrentNLU.test(t, e) : (this.isErrorOutput() && console.log('NLUGroup.abortListen: NLU ist nicht aktiv'), 
            0);
        }, e;
    }(ue), Pn = function(t) {
        function e() {
            return t.call(this, 'NLUFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "NLU";
        }, e.prototype.getName = function() {
            return "NLUFactory";
        }, e.prototype._newPlugin = function(t, e) {
            var n = null;
            switch (t) {
              case Sn:
                n = new Rn(this, t, e);
                break;

              case gn:
              case dn:
                n = new Nn(t, e);
                break;

              case yn:
                n = new Fn(t, e);
                break;

              case fn:
                n = new Ln(fn, e);
                break;

              default:
                this._error('_newPlugin', 'keine NLU vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || vn;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), Dn = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, H, e) || this;
            return n.mNLUPlugin = null, n.mListenResultEvent = new at(zt, H), n.mIntentResultEvent = new at(Qt, H), 
            n.mASRActiveFlag = !1, n.mNLUActiveFlag = !1, n.mNLUFeatureFlag = !1, n.mASRFeatureFlag = !1, 
            n.mIntentText = '', n.mListenResultEvent._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n.mIntentResultEvent._setErrorOutputFunc(n._getErrorOutputFunc()), n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Intent";
        }, e.prototype.getClass = function() {
            return 'IntentComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(e) {
            return e ? (e.intentLanguage && this.setLanguage(e.intentLanguage), t.prototype._setOption.call(this, e)) : -1;
        }, e.prototype._initAllPlugin = function() {
            return this.mNLUPlugin = this.findPlugin(vn), this.mNLUPlugin && (this.mNLUActiveFlag = this.mNLUPlugin.isActive()), 
            0;
        }, e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype._doneAllPlugin = function() {
            this.mNLUPlugin = null;
        }, e.prototype._doneAllEvent = function() {
            this.mListenResultEvent.clear(), this.mIntentResultEvent.clear();
        }, e.prototype._doneAllAttribute = function() {
            this.mASRActiveFlag = !1, this.mNLUActiveFlag = !1, this.mASRFeatureFlag = !1, this.mNLUFeatureFlag = !1;
        }, e.prototype._resetAllDefault = function() {
            this.setLanguage("de"), this.setIntentText('');
        }, e.prototype.reset = function(e) {
            return t.prototype.reset.call(this, e);
        }, e.prototype.isActive = function() {
            return !!this.mNLUActiveFlag && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mNLUActiveFlag ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype.setFeatureList = function(t) {
            return t.features ? (t.features.ASR && 'boolean' == typeof t.features.ASR && (this.mASRFeatureFlag = t.features.ASR), 
            t.features.NLU && 'boolean' == typeof t.features.NLU && (this.mNLUFeatureFlag = t.features.NLU), 
            0) : (this._error('setFeatureList', 'keine FeatureInfos uebergeben'), -1);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mListenResultEvent._setErrorOutput(e), 
            this.mIntentResultEvent._setErrorOutput(e);
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
        }), e.prototype._onIntentResult = function(t) {
            return this.mIntentResultEvent.dispatch(t);
        }, Object.defineProperty(e.prototype, "onIntentResult", {
            get: function() {
                var t = this;
                return function(e) {
                    return t._onIntentResult(e);
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case zt:
                i = this.mListenResultEvent.addListener(e, o);
                break;

              case Qt:
                i = this.mIntentResultEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case zt:
                o = this.mListenResultEvent.removeListener(e);
                break;

              case Qt:
                o = this.mIntentResultEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.addEventListener(t, zt, e);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.removeEventListener(t, zt);
        }, e.prototype.addIntentResultEvent = function(t, e) {
            return this.addEventListener(t, Qt, e);
        }, e.prototype.removeIntentResultEvent = function(t) {
            return this.removeEventListener(t, Qt);
        }, e.prototype.removeAllEvent = function(e) {
            return t.prototype.removeAllEvent.call(this, e), this.removeListenResultEvent(e), 
            this.removeIntentResultEvent(e), 0;
        }, e.prototype.setNLU = function(t) {
            return this.mNLUPlugin ? this.mNLUPlugin.setNLU(t) : -1;
        }, e.prototype.getNLU = function() {
            return this.mNLUPlugin ? this.mNLUPlugin.getNLU() : '';
        }, e.prototype.getNLUList = function() {
            return this.mNLUPlugin ? this.mNLUPlugin.getNLUList() : [];
        }, e.prototype.setLanguage = function(t) {
            return this.mNLUPlugin ? this.mNLUPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mNLUPlugin ? this.mNLUPlugin.getLanguage() : "";
        }, e.prototype.getLanguageList = function() {
            return this.mNLUPlugin ? this.mNLUPlugin.getLanguageList() : [];
        }, e.prototype.setIntentText = function(t) {
            return this.mIntentText = t, 0;
        }, e.prototype.getIntentText = function() {
            return this.mIntentText;
        }, e.prototype.isRunning = function() {
            return !!this.isActive() && (!!this.mNLUPlugin && this.mNLUPlugin.isListenRunning());
        }, e.prototype.start = function() {
            return this.isActive() ? this.mNLUFeatureFlag ? 0 : this.mNLUPlugin ? this.mIntentText ? this.mNLUPlugin.startIntent(this.mIntentText) : this.mNLUPlugin.isListen() ? this.mNLUPlugin.startListen() : (this._error('start', 'Keinen Text zur Sprachanalyse uebergeben'), 
            -1) : (this._error('start', 'keine NLU vorhanden'), -1) : 0;
        }, e.prototype.stop = function() {
            return this.isActive() ? this.mNLUPlugin ? this.mIntentText ? 0 : this.mNLUPlugin.stopListen() : (this._error('stop', 'keine NLU vorhanden'), 
            -1) : 0;
        }, e.prototype.abort = function() {
            return this.isActive() ? this.mNLUPlugin ? this.mIntentText ? 0 : this.mNLUPlugin.abortListen() : (this._error('abort', 'keine NLU vorhanden'), 
            -1) : 0;
        }, e.prototype.test = function(t, e) {
            var n = '';
            switch (t) {
              case 'say':
                if (this.mNLUPlugin) return this.mNLUPlugin.test(t, e);
                n = 'kein NLUPlugin vorhanden';
                break;

              default:
                n = 'kein gueltiges Testkommando uebergeben';
            }
            return {
                result: -1,
                errorText: n
            };
        }, e;
    }(se), Cn = function(t) {
        function e() {
            return t.call(this, 'IntentComponentFactory') || this;
        }
        return u(e, t), e.prototype.getName = function() {
            return "IntentComponentFactory";
        }, e.prototype.getType = function() {
            return "Intent";
        }, e.prototype._newPlugin = function(t, e) {
            return new Dn(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || H;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), kn = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || 'IntentComponentBuilder', n) || this;
            return o.mIntentComponent = null, o;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Intent";
        }, e.prototype.getClass = function() {
            return 'IntentComponentBuilder';
        }, e.prototype.getName = function() {
            return "IntentComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mIntentComponent) return this.mIntentComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(vn, "NLUFactory", Pn);
                return 0 !== this._binder(t, e) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mIntentComponent || (this.mIntentComponent = this._getPlugin(H, "IntentComponentFactory", Cn)), 
            this.mIntentComponent;
        }, e.prototype._binder = function(t, e) {
            return t ? e ? 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'NLU-Plugin wurde nicht eingefuegt'), 
            -1) : (e.onInit = t.onInit, e.onListenStart = t.onStart, e.onListenStop = t.onStop, 
            e.onListenResult = t.onListenResult, e.onIntentResult = t.onIntentResult, e.onError = t.onError, 
            0) : (this._error('_binder', 'Kein NLU-Plugin vorhanden'), -1) : (this._error('_binder', 'Keine Intent-Komponente vorhanden'), 
            -1);
        }, e;
    }(It), bn = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, Z, e) || this;
            return n.mAudioPlayer = null, n.mSpeak = null, n.mListen = null, n.mAction = null, 
            n.mDialog = null, n.mSpeakEnableFlag = !0, n.mListenEnableFlag = !0, n.mActionEnableFlag = !0, 
            n;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getClass = function() {
            return 'BotComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.3.0042 vom 17.12.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return this.mDialog ? this.mDialog.getServerVersion() : '';
        }, e.prototype._initAllPlugin = function() {
            return this.mAudioPlayer = this.findPlugin(f), this.mSpeak = this.findPlugin(T), 
            this.mListen = this.findPlugin(B), this.mAction = this.findPlugin(o), this.mDialog = this.findPlugin(j), 
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
            return this.addEventListener(t, Jt, e);
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, $t, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, Yt, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, Zt, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, te, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, ee, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, ne, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, oe, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, ie, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, re, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, Xt, e);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, Jt);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, $t);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, Yt);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, Zt);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, te);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, ee);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, ne);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, oe);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, ie);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, re);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, Xt);
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
    }(se), Tn = function(t) {
        function e() {
            return t.call(this, 'BotComponentFactory') || this;
        }
        return u(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getName = function() {
            return "BotComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new bn(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Z;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(L), On = function(t) {
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
                var t = this._buildComponent(), e = this._getComponent(j, "Dialog"), o = this._getComponent(n, "Action"), i = this._getComponent(U, "Listen"), r = this._getComponent(T, "Speak"), u = this._getPlugin(f, "AudioPlayerFactory", C);
                return 0 !== this._binder(t, e, o, i, r, u) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mBotComponent || (this.mBotComponent = this._getPlugin(Z, "BotComponentFactory", Tn)), 
            this.mBotComponent;
        }, e.prototype._binder = function(t, e, n, o, i, r) {
            return t ? e ? n ? o ? i ? r ? 0 !== t.insertPlugin(r.getName(), r) ? (this._error('_binder', 'AudioPlayer-Plugin wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(i.getName(), i) ? (this._error('_binder', 'Speak-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(o.getName(), o) ? (this._error('_binder', 'Listen-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(n.getName(), n) ? (this._error('_binder', 'Action-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== t.insertPlugin(e.getName(), e) ? (this._error('_binder', 'Dialog-Komponente wurde nicht eingefuegt'), 
            -1) : 0 !== e.addDialogActionEvent(Z, t.getDialogActionFunc()) ? -1 : 0 !== e.addDialogActionStopEvent(Z, t.getDialogActionStopFunc()) ? -1 : 0 !== e.addDialogSpeakEvent(Z, t.getDialogSpeakFunc()) ? -1 : 0 !== e.addDialogSpeakStopEvent(Z, t.getDialogSpeakStopFunc()) ? -1 : 0 : (this._error('_binder', 'Kein AudioPlayer-Plugin vorhanden'), 
            -1) : (this._error('_binder', 'Keine Speak-Komponente vorhanden'), -1) : (this._error('_binder', 'Keine Listen-Komponente vorhanden'), 
            -1) : (this._error('_binder', 'Keine Action-Komponente vorhanden'), -1) : (this._error('_binder', 'Keine Dialog-Komponente vorhanden'), 
            -1) : (this._error('_binder', 'Keine Bot-Komponente vorhanden'), -1);
        }, e;
    }(It), xn = function() {
        function t() {}
        return t.setErrorOutputOn = function() {
            xt.setErrorOutputOn();
        }, t.setErrorOutputOff = function() {
            xt.setErrorOutputOff();
        }, t._createAllBuilder = function() {
            var t = 0;
            return 0 !== xt.insertBuilder("Speak", new Xe('', !1)) && (t = -1), 0 !== xt.insertBuilder("Listen", new Ce('', !1)) && (t = -1), 
            0 !== xt.insertBuilder("Action", new pe('', !1)) && (t = -1), 0 !== xt.insertBuilder("Dialog", new mn('', !1)) && (t = -1), 
            0 !== xt.insertBuilder("Intent", new kn('', !1)) && (t = -1), 0 !== xt.insertBuilder("Bot", new On('', !1)) && (t = -1), 
            t;
        }, t.init = function() {
            return t.initFlag ? 0 : 0 !== t._createAllBuilder() ? -1 : (t.initFlag = !0, 0);
        }, t.isInit = function() {
            return t.initFlag;
        }, t.done = function() {
            return xt.clear(), t.initFlag = !1, 0;
        }, t.initFlag = !1, t;
    }();
    t.SPEECH_API_VERSION = "0.5.3.0042 vom 17.12.2018 (ALPHA)", t.BASE_TYPE_NAME = "Base", 
    t.BASE_COMPONENT_NAME = e, t.ACTION_TYPE_NAME = "Action", t.ACTION_COMPONENT_NAME = n, 
    t.ActionFactory = g, t.AUDIO_PLUGIN_NAME = 'AudioPlugin', t.AudioFactory = b, t.SPEAK_TYPE_NAME = "Speak", 
    t.SPEAK_COMPONENT_NAME = T, t.SPEAK_DE_LANGUAGE = "de", t.SPEAK_EN_LANGUAGE = 'en', 
    t.SPEAK_HTML5_TTS = 'TTSHtml5', t.SPEAK_NUANCE_TTS = 'TTSNuance', t.SpeakFactory = w, 
    t.LISTEN_TYPE_NAME = "Listen", t.LISTEN_COMPONENT_NAME = U, t.LISTEN_DE_LANGUAGE = "de", 
    t.LISTEN_EN_LANGUAGE = 'en', t.LISTEN_HTML5_ASR = 'ASRHtml5', t.LISTEN_NUANCE_ASR = 'ASRNuance', 
    t.ListenFactory = K, t.INTENT_TYPE_NAME = "Intent", t.INTENT_COMPONENT_NAME = H, 
    t.INTENT_DE_LANGUAGE = "de", t.INTENT_EN_LANGUAGE = 'en', t.INTENT_HTML5_NLU = 'NLUHtml5', 
    t.INTENT_NUANCE_NLU = 'NLUNuance', t.IntentFactory = W, t.DIALOG_TYPE_NAME = "Dialog", 
    t.DIALOG_COMPONENT_NAME = j, t.DIALOG_MAIN_NAME = z, t.DIALOG_ROOTSTATE_NAME = Q, 
    t.DialogFactory = Y, t.BOT_TYPE_NAME = "Bot", t.BOT_COMPONENT_NAME = Z, t.BotFactory = tt, 
    t.Nuance = Ot, t.SpeechMain = xn, Object.defineProperty(t, '__esModule', {
        value: !0
    });
});
