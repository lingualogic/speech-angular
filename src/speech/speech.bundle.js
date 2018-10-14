/**
 * Speech-Framework
 * 
 * Version: 0.5.1
 * Build:   0040
 * TYPE:    ALPHA
 * Datum:   11.10.2018
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
    var e = 'ActionComponent', n = e, o = 1e4, i = !0, r = function() {
        function t(t) {
            this.mErrorClassName = 'ErrorBase', this.mErrorOutputFlag = i, this.mErrorOutputFunc = null, 
            this.mErrorClassName = t;
        }
        return t.prototype._setErrorClassName = function(t) {
            this.mErrorClassName = t;
        }, t.prototype._getErrorClassName = function() {
            return this.mErrorClassName;
        }, t.prototype._setErrorOutput = function(t) {
            this.mErrorOutputFlag = t;
        }, t.prototype._setErrorOutputDefault = function() {
            this._setErrorOutput(i);
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
    }(), u = function(t, e) {
        return (u = Object.setPrototypeOf || {
            __proto__: []
        } instanceof Array && function(t, e) {
            t.__proto__ = e;
        } || function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        })(t, e);
    };
    function s(t, e) {
        function n() {
            this.constructor = t;
        }
        u(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, 
        new n());
    }
    function a(t, e) {
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
    var p = function(t) {
        function e() {
            var e = t.call(this, 'BuilderList') || this;
            return e.mBuilderList = new Map(), e.mBuilderIterator = e.mBuilderList.values(), 
            e;
        }
        return s(e, t), e.prototype.getSize = function() {
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
    }(r), c = function() {
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
        }, t.mBuilderList = new p(), t.mErrorBase = new r('BuilderManager'), t;
    }(), l = function(t) {
        function e() {
            var e = t.call(this, 'FactoryList') || this;
            return e.mFactoryList = new Map(), e.mFactoryIterator = null, e.mFactoryIterator = e.mFactoryList.values(), 
            e;
        }
        return s(e, t), e.prototype.getSize = function() {
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
    }(r), h = function() {
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
        }, t.mFactoryList = new l(), t.mErrorBase = new r('FactoryManager'), t;
    }(), m = function(t) {
        function e() {
            var e = t.call(this, 'PluginList') || this;
            return e.mPluginList = new Map(), e.mPluginIterator = e.mPluginList.values(), e;
        }
        return s(e, t), e.prototype.getSize = function() {
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
    }(r), g = function() {
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
            if (!e) return this.mErrorBase._error('get', 'kein PluginName uebergeben'), null;
            var o = t.find(e);
            return o || (n ? n.create(e) : (this.mErrorBase._error('get', 'keine PluginFactoryClass uebergeben'), 
            null));
        }, t.find = function(e) {
            var n = t.mPluginList.find(e);
            return n || null;
        }, t.insert = function(e, n) {
            return t.mPluginList.insert(e, n);
        }, t.remove = function(e) {
            return t.mPluginList.remove(e);
        }, t.clear = function() {
            return t.mPluginList.clear();
        }, t.mPluginList = new m(), t.mErrorBase = new r('PluginManager'), t;
    }(), f = function(t) {
        function e() {
            var e = t.call(this, 'Builder') || this;
            if (0 !== c.insert(e.getName(), e)) throw new Error('Builder ' + e.getName() + ' existiert bereits im BuilderManager');
            return e;
        }
        return s(e, t), e.prototype.getType = function() {
            return '';
        }, e.prototype.getName = function() {
            return 'Builder';
        }, e.prototype.build = function() {
            return null;
        }, e.prototype._getBuilder = function(t, e) {
            return c.get(t, e);
        }, e.prototype._getFactory = function(t, e) {
            return h.get(t, e);
        }, e.prototype._getComponent = function(t, e, n) {
            if (e && n) {
                var o = this._getBuilder(e, n);
                if (o) return o.build();
            }
            return g.get(t);
        }, e.prototype._getPlugin = function(t, e, n) {
            if (e && n) {
                var o = this._getFactory(e, n);
                if (o) return g.get(t, o);
            }
            return g.get(t);
        }, e;
    }(r), y = 'ActionFunction', d = function(t) {
        function e(e) {
            var n = t.call(this, e || 'Factory') || this;
            if (0 !== h.insert(n.getName(), n)) throw new Error('Factory ' + n.getName() + ' existiert bereits im FactoryManager');
            return n;
        }
        return s(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return 'any';
        }, e.prototype.getName = function() {
            return 'Factory';
        }, e.prototype.create = function(t, e) {
            return void 0 === e && (e = !0), null;
        }, e;
    }(r), S = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, 'Plugin') || this;
            if (o.mPluginName = '', o.mOnInitFunc = null, o.mOnErrorFunc = null, o.mInitFlag = !1, 
            o.mActiveFlag = !1, o._setErrorClassName(o.getClass()), o.mPluginName = e, n && 0 !== g.insert(e, o)) throw new Error('Plugin ' + o.getName() + ' ist bereits im PluginManager vorhanden');
            return o._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return s(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getType = function() {
            return 'Plugin';
        }, e.prototype.getClass = function() {
            return 'Plugin';
        }, e.prototype.getName = function() {
            return this.mPluginName;
        }, e.prototype.init = function(t) {
            return t && 'boolean' == typeof t.errorOutputFlag && this._setErrorOutput(t.errorOutputFlag), 
            this.mInitFlag = !0, this.mActiveFlag = !0, 0;
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
    }(r), v = function(t) {
        function e(e) {
            return t.call(this, e || 'PluginFactory') || this;
        }
        return s(e, t), e.prototype.getType = function() {
            return 'Plugin';
        }, e.prototype.getName = function() {
            return 'PluginFactory';
        }, e.prototype._newPlugin = function(t, e) {
            return new S(t, e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || 'Plugin';
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('PluginFactory.create', t), null;
            }
        }, e;
    }(d), E = function(t) {
        function e() {
            var e = t.call(this, 'ActionFunctionList') || this;
            return e.mActionStartFuncList = new Map(), e.mActionStopFuncList = new Map(), e.mStopActionFunc = function() {
                return 0;
            }, e;
        }
        return s(e, t), e.prototype.clear = function() {
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
    }(r), _ = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, y, e) || this;
            return n.mActionFunctionList = new E(), n._setErrorClassName('ActionFunction'), 
            n.mActionFunctionList._setErrorOutputFunc(n._getErrorOutputFunc()), n;
        }
        return s(e, t), e.prototype.init = function(e) {
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
    }(S), D = function(t) {
        function e() {
            return t.call(this, 'ActionFunctionFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "ActionFunctionFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new _(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || y;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), F = 'ActionElement', A = function(t) {
        function e() {
            var e = t.call(this, 'ActionElementList') || this;
            return e.mActionFuncList = new Map(), e.mActionStopFuncList = new Map(), e;
        }
        return s(e, t), e.prototype.clear = function() {
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
    }(r), k = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, F, e) || this;
            return n.mActionElementList = new A(), n._setErrorClassName('ActionElement'), n.mActionElementList._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n;
        }
        return s(e, t), e.prototype.init = function(e) {
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
    }(S), L = function(t) {
        function e() {
            return t.call(this, 'ActionElementFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "ActionElementFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new k(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || F;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), C = 'init', b = 'error', P = 'speakStart', O = 'speakStop', R = 'listenStart', N = 'listenStop', x = 'listenResult', w = 'actionStart', T = 'actionStop', I = 'dialogSet', M = 'dialogStart', W = 'dialogStop', B = 'dialogParse', q = 'dialogStateSet', H = 'dialogAction', j = 'dialogActionStop', G = 'dialogSpeak', K = 'dialogSpeakStart', X = 'dialogSpeakStop', U = function(t) {
        function e(e, n) {
            var o = t.call(this, 'EventFunctionList') || this;
            return o.mEventName = 'Event', o.mComponentName = 'Component', o.mFunctionList = new Map(), 
            o.mEventName = e, o.mComponentName = n, o;
        }
        return s(e, t), e.prototype.setComponentName = function(t) {
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
    }(r), V = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mSendMessageFunc = null, o.mInitEvent = new U(C), o.mErrorEvent = new U(b), 
            o.mInitEvent.setComponentName(e), o.mErrorEvent.setComponentName(e), o.mInitEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mErrorEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return s(e, t), e.prototype.getType = function() {
            return 'Component';
        }, e.prototype.getClass = function() {
            return 'Component';
        }, e.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
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
                  case C:
                    e = this.mInitEvent.dispatch(t);
                    break;

                  case b:
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
        }, e.prototype._onError = function(t) {
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
              case C:
                o = this.mInitEvent.addListener(t, n);
                break;

              case b:
                this._addEventListenerAllPlugin(t, e, n), o = this.mErrorEvent.addListener(t, n);
                break;

              default:
                o = this._addEventListenerAllPlugin(t, e, n);
            }
            return o;
        }, e.prototype.removeEventListener = function(t, e) {
            var n = 0;
            switch (e) {
              case C:
                n = this.mInitEvent.removeListener(t);
                break;

              case b:
                this._removeEventListenerAllPlugin(t, e), n = this.mErrorEvent.removeListener(t);
                break;

              default:
                n = this._removeEventListenerAllPlugin(t, e);
            }
            return n;
        }, e;
    }(function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mSendMessageFunc = null, o.mPluginList = new m(), o.mPluginList._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o;
        }
        return s(e, t), e.prototype.getType = function() {
            return 'PluginGroup';
        }, e.prototype.getClass = function() {
            return 'PluginGroup';
        }, e.prototype.init = function(e) {
            return 0 !== t.prototype.init.call(this, e) ? -1 : 0 !== this.startAllPlugin(e) ? (this._clearInit(), 
            -1) : 0;
        }, e.prototype.done = function() {
            return this.stopAllPlugin(), t.prototype.done.call(this);
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
    }(S)), z = function(t) {
        function n(n) {
            void 0 === n && (n = !0);
            var i = t.call(this, e, n) || this;
            return i.mActionFunction = null, i.mActionElement = null, i.mActionStartEvent = new U(w, e), 
            i.mActionStopEvent = new U(T, e), i.mActionRunningFlag = !1, i.mActionName = '', 
            i.mActionElementType = '', i.mActionElementName = '', i.mActionTimeout = o, i.mActionTimeoutId = 0, 
            i._setErrorClassName('ActionComponent'), i.mActionStartEvent._setErrorOutputFunc(i._getErrorOutputFunc()), 
            i.mActionStopEvent._setErrorOutputFunc(i._getErrorOutputFunc()), i;
        }
        return s(n, t), n.prototype.getType = function() {
            return "Action";
        }, n.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
        }, n.prototype.getServerVersion = function() {
            return '';
        }, n.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('ActionComponent.init: bereits initialisiert'), 
            0) : 0 !== t.prototype.init.call(this, e) ? -1 : (this.mActionFunction = this.findPlugin(y), 
            this.mActionElement = this.findPlugin(F), 0);
        }, n.prototype.done = function() {
            return this.stopAction(), this.mActionFunction = null, this.mActionElement = null, 
            this.mActionName = '', this.mActionElementType = '', this.mActionElementName = '', 
            this.mActionTimeout = o, t.prototype.done.call(this);
        }, n.prototype.reset = function(t) {
            return this.isInit() ? (this.stopAction(), this.setActiveOn(), this.mActionName = '', 
            this.mActionElementType = '', this.mActionElementName = '', this.mActionTimeout = o, 
            0) : (this._error('reset', 'Komponente nicht initialisiert'), -1);
        }, n.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mActionStartEvent._setErrorOutput(e), 
            this.mActionStopEvent._setErrorOutput(e);
        }, n.prototype._onActionStart = function() {
            return this.mActionStartEvent.dispatch();
        }, n.prototype._onActionStop = function() {
            return this.mActionStopEvent.dispatch();
        }, Object.defineProperty(n.prototype, "onActionStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onActionStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(n.prototype, "onActionStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onActionStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), n.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case w:
                i = this.mActionStartEvent.addListener(e, o);
                break;

              case T:
                i = this.mActionStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, n.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case w:
                o = this.mActionStartEvent.removeListener(e);
                break;

              case T:
                o = this.mActionStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, n.prototype.addActionStartEvent = function(t, e) {
            return this.addEventListener(t, w, e);
        }, n.prototype.addActionStopEvent = function(t, e) {
            return this.addEventListener(t, T, e);
        }, n.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, b, e);
        }, n.prototype.removeActionStartEvent = function(t) {
            return this.removeEventListener(t, w);
        }, n.prototype.removeActionStopEvent = function(t) {
            return this.removeEventListener(t, T);
        }, n.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, b);
        }, n.prototype.removeAllEvent = function(t) {
            return t ? (this.removeActionStartEvent(t), this.removeActionStopEvent(t), this.removeErrorEvent(t), 
            0) : (this._error('removeAllEvent', 'kein Pluginname uebergeben'), -1);
        }, n.prototype.getActionFunc = function() {
            var t = this;
            return function(e) {
                return t.action(e);
            };
        }, n.prototype.getStopActionFunc = function() {
            var t = this;
            return function() {
                return t.stopAction();
            };
        }, n.prototype.setActionName = function(t) {
            return this.mActionName = t, 0;
        }, n.prototype.getActionName = function() {
            return this.mActionName;
        }, n.prototype.setElementType = function(t) {
            return this.mActionElementType = t, 0;
        }, n.prototype.getElementType = function() {
            return this.mActionElementType;
        }, n.prototype.setElementName = function(t) {
            return this.mActionElementName = t, 0;
        }, n.prototype.getElementName = function() {
            return this.mActionElementName;
        }, n.prototype.isActionRunning = function() {
            return !!this.isActive() && this.mActionRunningFlag;
        }, n.prototype.action = function(t) {
            var e = this;
            if (!this.isActive()) return 0;
            if (this.isActionRunning()) return this._error('startAction', 'Aktion laeuft bereits'), 
            -1;
            this.mActionRunningFlag = !0;
            var n = 0;
            return this.mActionFunction && 0 !== this.mActionFunction.startAction(t) && (n = -1), 
            this.mActionElement && 0 !== this.mActionElement.startAction(t) && (n = -1), this.mActionTimeoutId = setTimeout(function() {
                return e.stopAction();
            }, this.mActionTimeout), this._onActionStart(), n;
        }, n.prototype.startAction = function() {
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
        }, n.prototype.stopAction = function() {
            if (!this.isActive()) return 0;
            if (!this.isActionRunning()) return 0;
            this.mActionTimeoutId && (clearTimeout(this.mActionTimeoutId), this.mActionTimeoutId = 0);
            var t = 0;
            return this.mActionFunction && 0 !== this.mActionFunction.stopAction() && (t = -1), 
            this.mActionElement && 0 !== this.mActionElement.stopAction() && (t = -1), this.mActionRunningFlag = !1, 
            this._onActionStop(), t;
        }, n.prototype.addFunction = function(t, e, n) {
            return this.mActionFunction ? this.mActionFunction.insert(t, e, n) : (this._error('addFunction', 'kein ActionFunction-Plugin vorhanden'), 
            -1);
        }, n.prototype.removeFunction = function(t) {
            return this.mActionFunction ? this.mActionFunction.remove(t) : (this._error('removeFunction', 'kein ActionFunction-Plugin vorhanden'), 
            -1);
        }, n.prototype.addElement = function(t, e, n) {
            return this.mActionElement ? this.mActionElement.insert(t, e, n) : (this._error('addElement', 'kein ActionElement-Plugin vorhanden'), 
            -1);
        }, n.prototype.removeElement = function(t) {
            return this.mActionElement ? this.mActionElement.remove(t) : (this._error('removeElement', 'kein ActionElement-Plugin vorhanden'), 
            -1);
        }, n;
    }(V), Y = function(t) {
        function n() {
            return t.call(this, 'ActionComponentFactory') || this;
        }
        return s(n, t), n.prototype.getName = function() {
            return "ActionComponentFactory";
        }, n.prototype.getType = function() {
            return "Action";
        }, n.prototype._newPlugin = function(t, e) {
            return new z(e);
        }, n.prototype.create = function(t, n) {
            void 0 === n && (n = !0);
            var o = t || e;
            try {
                return this._newPlugin(o, n);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, n;
    }(v), J = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.mActionComponent = null, e._setErrorClassName('ActionComponentBuilder'), 
            e;
        }
        return s(n, t), n.prototype.getName = function() {
            return "ActionComponentBuilder";
        }, n.prototype.getType = function() {
            return "Action";
        }, n.prototype.build = function() {
            if (this.mActionComponent) return this.mActionComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(y, "ActionFunctionFactory", D), n = this._getPlugin(F, "ActionElementFactory", L);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, n.prototype._buildComponent = function() {
            return this.mActionComponent || (this.mActionComponent = this._getPlugin(e, "ActionComponentFactory", Y)), 
            this.mActionComponent;
        }, n.prototype._binder = function(t, e, n) {
            return t && e && n ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : (e.onError = t.onError, 
            n.onError = t.onError, 0) : -1;
        }, n;
    }(f), Q = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Action nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            var e = !0;
            t && 'boolean' == typeof t.errorOutputFlag && (e = t.errorOutputFlag);
            try {
                var n = "ActionComponentBuilder";
                t && t.actionBuilder && (n = t.actionBuilder);
                var o = null;
                if ("ActionComponentBuilder" === n && (o = c.get("ActionComponentBuilder", J)), 
                !o) return e && console.log('Action._init: ActionBuilder nicht vorhanden'), -1;
                if (this.mComponent = o.build(), !this.mComponent) return e && console.log('Action._init: keine ActionComponent erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return e && console.log('Action._init: ActionComponent nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log('Action-API Version: ', "0.5.1.0040 vom 11.10.2018 (ALPHA)", t);
                }
                return 0;
            } catch (t) {
                return e && console.log('Action._init: Exception ', t.message), -1;
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
        }, t.prototype.addActionStartEvent = function(t, e) {
            return this.mComponent.addActionStartEvent(t, e);
        }, t.prototype.addActionStopEvent = function(t, e) {
            return this.mComponent.addActionStopEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeActionStartEvent = function(t) {
            return this.mComponent.removeActionStartEvent(t);
        }, t.prototype.removeActionStopEvent = function(t) {
            return this.mComponent.removeActionStopEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.setActionName = function(t) {
            return this.mComponent.setActionName(t);
        }, t.prototype.getActionName = function() {
            return this.mComponent.getActionName();
        }, t.prototype.setElementType = function(t) {
            return this.mComponent.setElementType(t);
        }, t.prototype.getElementType = function() {
            return this.mComponent.getElementType();
        }, t.prototype.setElementName = function(t) {
            return this.mComponent.setElementName(t);
        }, t.prototype.getElementName = function() {
            return this.mComponent.getElementName();
        }, t.prototype.isActionRunning = function() {
            return this.mComponent.isActionRunning();
        }, t.prototype.startAction = function() {
            return this.mComponent.startAction();
        }, t.prototype.stopAction = function() {
            return this.mComponent.stopAction();
        }, t.prototype.addFunction = function(t, e, n) {
            return this.mComponent.addFunction(t, e, n);
        }, t.prototype.removeFunction = function(t) {
            return this.mComponent.removeFunction(t);
        }, t.prototype.addElement = function(t, e, n) {
            return this.mComponent.addElement(t, e, n);
        }, t.prototype.removeElement = function(t) {
            return this.mComponent.removeElement(t);
        }, t;
    }(), Z = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new Q(e);
            } catch (t) {
                return console.log('ActionFactory.create: Exception', t), null;
            }
        }, t;
    }(), $ = 'AudioPlayer', tt = "mp3", et = function(t) {
        function e() {
            return t.call(this, 'AudioContextFactory') || this;
        }
        return s(e, t), e.prototype.getAudioContextClass = function() {
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
    }(r), nt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, $, n) || this;
            return o.mAudioContextClass = null, o.mAudioContext = null, o.mAudioFormat = tt, 
            o.mAudioBuffer = null, o.mXMLHttpRequest = null, o.mRequest = null, o.mSource = null, 
            o.mAudioLoadFlag = !1, o.mAudioPlayFlag = !1, o.mAudioCancelFlag = !1, o.mOnAudioStartFunc = null, 
            o.mOnAudioStopFunc = null, o.mAudioContextFactory = e, o._setErrorClassName('AudioPlayer'), 
            o;
        }
        return s(e, t), e.prototype.getType = function() {
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
            this.mAudioContextClass = null, this.mAudioFormat = tt, this.mXMLHttpRequest = null, 
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
                    t.isPlay() && t._onAudioStop(), t.mAudioPlayFlag = !1;
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
                    this.mAudioPlayFlag = !1, this.mSource.stop(0), this.mSource.disconnect(0), this._onAudioStop();
                } catch (t) {
                    this._exception('stop', t);
                }
                this.mSource = null, this.mAudioBuffer = null, this.mAudioCancelFlag = !1;
            }
            return this.mAudioLoadFlag = !1, 0;
        }, e.prototype.getStopFunc = function() {
            var t = this;
            return function() {
                return t.stop();
            };
        }, e;
    }(S), ot = function(t) {
        function e() {
            return t.call(this, 'AudioPlayerFactory') || this;
        }
        return s(e, t), e.prototype.isMock = function() {
            return !1;
        }, e.prototype.getName = function() {
            return "AudioPlayerFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new nt(new et(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || $;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), it = function() {
        function t(t) {
            if (this.mAudioPlayer = null, 0 !== this._init(t)) throw new Error('Audio nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            if (this.mAudioPlayer) return 0;
            try {
                var e = h.get("AudioPlayerFactory", ot);
                return this.mAudioPlayer = g.get($, e), this.mAudioPlayer ? this.mAudioPlayer.isInit() || 0 === this.mAudioPlayer.init(t) ? 0 : (console.log('Audio._init: AudioPlayer nicht initialisiert'), 
                -1) : (console.log('Audio._init: kein AudioPlayer erzeugt'), -1);
            } catch (t) {
                return console.log('Audio._init: Exception ', t.message), -1;
            }
        }, t.prototype.playFile = function(t) {
            return this.mAudioPlayer.playFile(t);
        }, t.prototype.stop = function() {
            return this.mAudioPlayer.stop();
        }, t;
    }(), rt = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new it(e);
            } catch (t) {
                return console.log('AudioFactory.create: Exception', t), null;
            }
        }, t;
    }(), ut = 'SpeakComponent', st = 'assets/', at = !1, pt = 'TTS', ct = "de-DE", lt = function(t) {
        function e() {
            return t.call(this, 'SpeechSynthesisFactory') || this;
        }
        return s(e, t), e.prototype.getSpeechSynthesisUtteranceClass = function() {
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
        }, e.prototype.createSpeechSynthesisUtterance = function() {
            var t = this.getSpeechSynthesisUtteranceClass();
            if (!t) return null;
            try {
                return new t();
            } catch (t) {
                return this._exception('createSpeechSynthesisUtterance', t), null;
            }
        }, e;
    }(r), ht = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, pt, n) || this;
            return o.mSpeechSynthesisUtteranceClass = null, o.mSpeechSynthesis = null, o.mUtteranceObject = null, 
            o.mOnSpeakStartFunc = null, o.mOnSpeakStopFunc = null, o.mSpeakRunningFlag = !1, 
            o.mSpeakLanguage = ct, o._setErrorClassName('TTSPlugin'), o.mSpeechSynthesisFactory = e, 
            o.mSpeechSynthesisFactory._setErrorOutputFunc(o._getErrorOutputFunc()), o;
        }
        return s(e, t), e.prototype._detectSpeechSynthesis = function() {
            if (!this.mSpeechSynthesisFactory) return this._error('_detectSpeechSynthesis', 'keine TTS-Fabrik vorhanden'), 
            !1;
            try {
                this.mSpeechSynthesisUtteranceClass = this.mSpeechSynthesisFactory.getSpeechSynthesisUtteranceClass(), 
                this.mSpeechSynthesis = this.mSpeechSynthesisFactory.getSpeechSynthesis();
            } catch (t) {
                return this._exception('_detectSpeechSynthesis', t), !1;
            }
            return null === this.mSpeechSynthesisUtteranceClass ? (this._error('_detectSpechSynthesis', 'Kein HTML5 SpeechSynthesisUtterance API vorhanden'), 
            !1) : null !== this.mSpeechSynthesis || (this._error('_detectSpeechSynthesis', 'Kein HTML5 SpeechSynthesis API vorhanden'), 
            !1);
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : 0 !== t.prototype.init.call(this, e) ? -1 : this._detectSpeechSynthesis() ? 0 : (this.setActiveOff(), 
            0);
        }, e.prototype.done = function() {
            return this.mSpeechSynthesisUtteranceClass && (this.isSpeakRunning() && this.stopSpeak(), 
            this.mSpeechSynthesisUtteranceClass = null, this.mSpeechSynthesis = null, this.mUtteranceObject = null, 
            this.mOnSpeakStartFunc = null, this.mOnSpeakStopFunc = null, this.mSpeakRunningFlag = !1, 
            this.mSpeakLanguage = ct), t.prototype.done.call(this);
        }, e.prototype.isActive = function() {
            return !!this.mSpeechSynthesisUtteranceClass && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mSpeechSynthesisUtteranceClass ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mSpeechSynthesisFactory && this.mSpeechSynthesisFactory._setErrorOutput(e);
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
        }), e.prototype.setLanguage = function(t) {
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
        }, e.prototype.isSpeakRunning = function() {
            return this.mSpeakRunningFlag;
        }, e.prototype.startSpeak = function(t) {
            var e = this;
            try {
                return this.isActive() ? t ? this.isSpeakRunning() ? (this._error('startSpeak', 'Sprachausgabe laeuft bereits'), 
                -1) : (this.mSpeakRunningFlag = !0, this.mUtteranceObject = new this.mSpeechSynthesisUtteranceClass(t), 
                this.mUtteranceObject.lang = this.mSpeakLanguage, this.mUtteranceObject.onstart = function() {}, 
                this.mUtteranceObject.onend = function() {
                    e.mSpeakRunningFlag && (e.mSpeakRunningFlag = !1, e._onSpeakStop());
                }, this.mUtteranceObject.onerror = function(t) {
                    e.mSpeakRunningFlag && (e.mSpeakRunningFlag = !1, e._onSpeakStop()), e._onError(t.error);
                }, this.mSpeechSynthesis.speak(this.mUtteranceObject), this._onSpeakStart()) : (this._error('startSpeak', 'kein text uebergeben'), 
                -1) : (this.isErrorOutput() && console.log('TTSPlugin.startSpeak: TTS ist nicht aktiv'), 
                0);
            } catch (t) {
                return this._exception('startSpeak', t), -1;
            }
        }, e.prototype.getStartSpeakFunc = function() {
            var t = this;
            return function(e) {
                return t.startSpeak(e);
            };
        }, e.prototype.stopSpeak = function() {
            try {
                return this.isActive() ? this.isSpeakRunning() ? (this.mSpeakRunningFlag = !1, this.mSpeechSynthesis.cancel(), 
                this._onSpeakStop()) : 0 : (this.isErrorOutput() && console.log('TTSPlugin.stopSpeak: TTS ist nicht aktiv'), 
                0);
            } catch (t) {
                return this._exception('speakStop', t), -1;
            }
        }, e.prototype.getStopSpeakFunc = function() {
            var t = this;
            return function() {
                return t.stopSpeak();
            };
        }, e;
    }(S), mt = function(t) {
        function e() {
            return t.call(this, 'TTSFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "TTSFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new ht(new lt(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || pt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), gt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ut, e) || this;
            return n.mTTSPlugin = null, n.mAudioPlayer = null, n.mSpeakStartEvent = new U(P, ut), 
            n.mSpeakStopEvent = new U(O, ut), n.mTTSFeatureFlag = !1, n.mAudioFeatureFlag = !1, 
            n.mSpeakStopSelector = '', n.mAudioFilePath = st, n.mAudioFileName = '', n.mAudioFlag = at, 
            n.mSpeakText = '', n.mSpeakStartEvent._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n.mSpeakStopEvent._setErrorOutputFunc(n._getErrorOutputFunc()), n;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getClass = function() {
            return 'SpeakComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(t) {
            return t ? ('string' == typeof t.audioFilePath && (this.mAudioFilePath = t.audioFilePath), 
            'boolean' == typeof t.audioFlag && (!0 === t.audioFlag ? this.mAudioFlag = !0 : this.mAudioFlag = !1), 
            t.speakLanguage && this.setLanguage(t.speakLanguage), 0) : -1;
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('SpeakComponent.init: bereits initialisiert'), 
            0) : 0 !== t.prototype.init.call(this, e) ? (this._error('init', 'super.init() Fehler'), 
            -1) : (this.mAudioPlayer = this.findPlugin($), this.mTTSPlugin = this.findPlugin(pt), 
            this._setOption(e), 0);
        }, e.prototype.done = function() {
            return this.mTTSPlugin = null, this.mAudioPlayer = null, this.mTTSFeatureFlag = !1, 
            this.mAudioFeatureFlag = !1, this.mSpeakStopSelector = '', this.mSpeakStartEvent.clear(), 
            this.mSpeakStopEvent.clear(), this.mAudioFilePath = st, this.mAudioFileName = '', 
            this.mAudioFlag = at, this.mSpeakText = '', t.prototype.done.call(this);
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.stopSpeak(), this.setActiveOn(), this.setAudioFormat(tt), 
            this.setLanguage("de"), this.mSpeakStopSelector = '', this.mAudioFilePath = st, 
            this.mAudioFileName = '', this.mAudioFlag = at, this.mSpeakText = '', this._setOption(t), 
            0) : (this._error('reset', 'Komponente nicht initialisiert'), -1);
        }, e.prototype.setFeatureList = function(t) {
            return t.features ? (t.features.TTS && 'boolean' == typeof t.features.TTS && (this.mTTSFeatureFlag = t.features.TTS), 
            t.features.AUDIO && 'boolean' == typeof t.features.AUDIO && (this.mAudioFeatureFlag = t.features.AUDIO), 
            0) : (this._error('setFeatureList', 'keine FeatureInfos uebergeben'), -1);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mSpeakStartEvent._setErrorOutput(e), 
            this.mSpeakStopEvent._setErrorOutput(e);
        }, e.prototype._onSpeakStart = function() {
            return this.mSpeakStartEvent.dispatch();
        }, e.prototype._onSpeakStop = function() {
            return this.mSpeakStopEvent.dispatch();
        }, Object.defineProperty(e.prototype, "onSpeakStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onSpeakStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onSpeakStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onSpeakStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.addEventListener = function(e, n, o) {
            var i = 0;
            switch (n) {
              case P:
                i = this.mSpeakStartEvent.addListener(e, o);
                break;

              case O:
                i = this.mSpeakStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case P:
                o = this.mSpeakStartEvent.removeListener(e);
                break;

              case O:
                o = this.mSpeakStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, P, e);
        }, e.prototype.addSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, O, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, b, e);
        }, e.prototype.removeSpeakStartEvent = function(t) {
            return this.removeEventListener(t, P);
        }, e.prototype.removeSpeakStopEvent = function(t) {
            return this.removeEventListener(t, O);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, b);
        }, e.prototype.removeAllEvent = function(t) {
            return this.removeSpeakStartEvent(t), this.removeSpeakStopEvent(t), this.removeErrorEvent(t), 
            0;
        }, e.prototype.isAudio = function() {
            return this.mAudioFlag;
        }, e.prototype.setAudioOn = function() {
            return this.mAudioFlag = !0, 0;
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
        }, e.prototype.setLanguage = function(t) {
            return this.mTTSPlugin ? this.mTTSPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mTTSPlugin ? this.mTTSPlugin.getLanguage() : "";
        }, e.prototype.setSpeakText = function(t) {
            return this.mSpeakText = t, 0;
        }, e.prototype.getSpeakText = function() {
            return this.mSpeakText;
        }, e.prototype.isSpeakRunning = function() {
            return !!this.isActive() && (this.mAudioFlag ? !!this.mAudioPlayer && (this.mAudioPlayer.isPlay() || this.mAudioPlayer.isLoad()) : !!this.mTTSPlugin && this.mTTSPlugin.isSpeakRunning());
        }, e.prototype.startSpeak = function() {
            return this.isActive() ? this.isSpeakRunning() ? (this._error('startSpeak', 'Sprachausgabe laeuft bereits'), 
            -1) : this.mAudioFlag ? this._startSpeakAudio() : this._startSpeakTTS() : 0;
        }, e.prototype.getStartSpeakFunc = function() {
            var t = this;
            return function() {
                return t.startSpeak();
            };
        }, e.prototype._startSpeakAudio = function() {
            return this.mSpeakStopSelector = '', this.mAudioFeatureFlag ? 0 : this.mAudioPlayer ? this.mAudioFileName ? (this.mSpeakStopSelector = "audio", 
            this.mAudioPlayer.play(this.mAudioFilePath, this.mAudioFileName)) : (this._error('_startSpeakAudio', 'kein Audiodateiname fuer die Sprachausgabe vorhanden'), 
            -1) : (this._error('_startSpeakAudio', 'kein AudioPlayer vorhanden'), -1);
        }, e.prototype._startSpeakTTS = function() {
            return this.mSpeakStopSelector = '', this.mTTSFeatureFlag ? 0 : this.mTTSPlugin ? this.mSpeakText ? (this.mSpeakStopSelector = "tts", 
            this.mTTSPlugin.startSpeak(this.mSpeakText)) : (this._error('_startSpeakTTS', 'kein Text fuer die Sprachausgabe vorhanden'), 
            -1) : (this._error('_startSpeakTTS', 'kein TTSPlugin vorhanden'), -1);
        }, e.prototype.stopSpeak = function() {
            return this.isSpeakRunning() ? this.mSpeakStopSelector ? "audio" === this.mSpeakStopSelector ? (this.mSpeakStopSelector = '', 
            this.mAudioPlayer ? this.mAudioPlayer.stop() : (this._error('stopSpeak', 'kein AudioPlayer vorhanden'), 
            -1)) : "tts" === this.mSpeakStopSelector ? (this.mSpeakStopSelector = '', this.mTTSPlugin ? this.mTTSPlugin.stopSpeak() : (this._error('stopSpeak', 'kein TTSPlugin vorhanden'), 
            -1)) : (this._error('stopSpeak', 'kein gueltiger StopSelector vorhanden'), -1) : (this._error('stopSpeak', 'kein StopSelector vorhanden'), 
            -1) : (this.mSpeakStopSelector = '', 0);
        }, e.prototype.getStopSpeakFunc = function() {
            var t = this;
            return function() {
                return t.stopSpeak();
            };
        }, e;
    }(V), ft = function(t) {
        function e() {
            return t.call(this, 'SpeakComponentFactory') || this;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getName = function() {
            return "SpeakComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new gt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ut;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), yt = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.mSpeakComponent = null, e._setErrorClassName('SpeakComponentBuilder'), 
            e;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Speak";
        }, e.prototype.getName = function() {
            return "SpeakComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mSpeakComponent) return this.mSpeakComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(pt, "TTSFactory", mt), n = this._getPlugin($, "AudioPlayerFactory", ot);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mSpeakComponent || (this.mSpeakComponent = this._getPlugin(ut, "SpeakComponentFactory", ft)), 
            this.mSpeakComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t && e && n ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : (e.onSpeakStart = t.onSpeakStart, 
            e.onSpeakStop = t.onSpeakStop, e.onError = t.onError, n.onAudioStart = t.onSpeakStart, 
            n.onAudioStop = t.onSpeakStop, n.onError = t.onError, 0) : -1;
        }, e;
    }(f), dt = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Speak nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            var e = !0;
            t && 'boolean' == typeof t.errorOutputFlag && (e = t.errorOutputFlag);
            try {
                var n = c.get("SpeakComponentBuilder", yt);
                if (!n) return e && console.log('Speak._init: SpeakComponentBuilder nicht vorhanden'), 
                -1;
                if (this.mComponent = n.build(), !this.mComponent) return e && console.log('Speak._init: keine SpeakComponent erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return e && console.log('Speak._init: SpeakComponent nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log('Speak-API Version: ', "0.5.1.0040 vom 11.10.2018 (ALPHA)");
                }
                return 0;
            } catch (t) {
                return e && console.log('Speak._init: Exception', t.message), -1;
            }
        }, t.prototype.reset = function(t) {
            return this.mComponent.reset(t);
        }, t.prototype.getType = function() {
            return this.mComponent.getType();
        }, t.prototype.getName = function() {
            return this.mComponent.getName();
        }, t.prototype.getVersion = function() {
            return this.mComponent.getVersion();
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
        }, t.prototype.addSpeakStartEvent = function(t, e) {
            return this.mComponent.addSpeakStartEvent(t, e);
        }, t.prototype.addSpeakStopEvent = function(t, e) {
            return this.mComponent.addSpeakStopEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeSpeakStartEvent = function(t) {
            return this.mComponent.removeSpeakStartEvent(t);
        }, t.prototype.removeSpeakStopEvent = function(t) {
            return this.mComponent.removeSpeakStopEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.isAudio = function() {
            return this.mComponent.isAudio();
        }, t.prototype.setAudioOn = function() {
            return this.mComponent.setAudioOn();
        }, t.prototype.setAudioOff = function() {
            return this.mComponent.setAudioOff();
        }, t.prototype.setAudioFormat = function(t) {
            return this.mComponent.setAudioFormat(t);
        }, t.prototype.getAudioFormat = function() {
            return this.mComponent.getAudioFormat();
        }, t.prototype.getAudioContext = function() {
            return this.mComponent.getAudioContext();
        }, t.prototype.setAudioFilePath = function(t) {
            return this.mComponent.setAudioFilePath(t);
        }, t.prototype.getAudioFilePath = function() {
            return this.mComponent.getAudioFilePath();
        }, t.prototype.setAudioFileName = function(t) {
            return this.mComponent.setAudioFileName(t);
        }, t.prototype.getAudioFileName = function() {
            return this.mComponent.getAudioFileName();
        }, t.prototype.setLanguage = function(t) {
            return this.mComponent.setLanguage(t);
        }, t.prototype.getLanguage = function() {
            return this.mComponent.getLanguage();
        }, t.prototype.setSpeakText = function(t) {
            return this.mComponent.setSpeakText(t);
        }, t.prototype.getSpeakText = function() {
            return this.mComponent.getSpeakText();
        }, t.prototype.isSpeakRunning = function() {
            return this.mComponent.isSpeakRunning();
        }, t.prototype.startSpeak = function() {
            return this.mComponent.startSpeak();
        }, t.prototype.stopSpeak = function() {
            return this.mComponent.stopSpeak();
        }, t;
    }(), St = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new dt(e);
            } catch (t) {
                return console.log('===> EXCEPTION SpeakFactory.create: Exception', t.message), 
                null;
            }
        }, t;
    }(), vt = 'ListenComponent', Et = vt, _t = 'ASR', Dt = 'ASRMock', Ft = 'ASRHtml5', At = 3e4, kt = "de-DE", Lt = function(t) {
        function e() {
            return t.call(this, 'SpeechRecognitionFactory') || this;
        }
        return s(e, t), e.prototype.getSpeechRecognitionClass = function() {
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
    }(r), Ct = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || _t, n) || this;
            return o.mListenRunningFlag = !1, o.mListenLanguage = kt, o.mListenTimeoutId = 0, 
            o.mListenTimeoutTime = At, o.mOnListenStartFunc = null, o.mOnListenStopFunc = null, 
            o.mOnListenResultFunc = null, o;
        }
        return s(e, t), e.prototype.getType = function() {
            return "ASR";
        }, e.prototype.getClass = function() {
            return 'ASRPlugin';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : 0 !== t.prototype.init.call(this, e) ? -1 : this._detectRecognition() ? 0 !== this._initRecognition(e) ? (this.setActiveOff(), 
            0) : 0 : (this.setActiveOff(), 0);
        }, e.prototype.done = function() {
            return this.isListenRunning() && this.stopListen(), this._clearRecognitionTimeout(), 
            this.mListenTimeoutTime = At, this.mListenRunningFlag = !1, this.mListenLanguage = kt, 
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
            return this.isListenRunning() && (this.mListenRunningFlag = !1, this._onListenStop()), 
            0;
        }, e.prototype._onRecognitionSpeechStart = function() {
            return this._clearRecognitionTimeout(), 0;
        }, e.prototype._onRecognitionSpeechEnd = function() {
            var t = 0;
            return this.isListenRunning() && (this.mListenRunningFlag = !1, t = this._onListenStop()), 
            t;
        }, e.prototype._getRecognitionResult = function(t) {
            return t;
        }, e.prototype._onRecognitionResult = function(t) {
            var e = 0;
            try {
                e = this._onListenResult(this._getRecognitionResult(t));
            } catch (t) {
                this._exception('_onRecognitionResult', t), e = -1;
            }
            return this.isListenRunning() && (this.mListenRunningFlag = !1, 0 !== this._onListenStop() && (e = -1)), 
            e;
        }, e.prototype._onRecognitionNoMatch = function(t) {
            var e = 0;
            return this.isListenRunning() && (this.mListenRunningFlag = !1, e = this._onListenStop()), 
            e;
        }, e.prototype._onRecognitionError = function(t) {
            try {
                var e = this._onError(t.error);
                return this.isListenRunning() && (this.mListenRunningFlag = !1, 0 !== this._onListenStop() && (e = -1)), 
                e;
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
            if (this.isListenRunning()) return this._error('startListen', 'listen laeuft bereits'), 
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
        }, e.prototype.stopListen = function() {
            if (!this.isActive()) return this.isErrorOutput() && console.log('ASRPlugin.stopListen: ASR ist nicht aktiv'), 
            0;
            if (!this.isListenRunning()) return this._error('stopListen', 'listen nicht gestartet'), 
            -1;
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
            if (!this.isListenRunning()) return this._error('abortListen', 'listen nicht gestartet'), 
            -1;
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
    }(S), bt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e || Dt, n) || this;
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
        return s(e, t), e.prototype.getClass = function() {
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
    }(Ct), Pt = function(t) {
        function e(e, n, o) {
            void 0 === o && (o = !0);
            var i = t.call(this, n || Ft, o) || this;
            return i.mSpeechRecognitionFactory = null, i.mSpeechRecognition = null, i.mSpeechGrammarList = null, 
            i.mGrammarList = null, i.mRecognition = null, i.mSpeechRecognitionFactory = e, i;
        }
        return s(e, t), e.prototype.getClass = function() {
            return 'ASRHtml5';
        }, e.prototype.done = function() {
            if (this.isListenRunning() && this.mRecognition) try {
                this.mRecognition.abort();
            } catch (t) {
                this._exception('done', t);
            }
            return this.mSpeechRecognition = null, this.mSpeechGrammarList = null, this.mGrammarList = null, 
            this.mRecognition = null, t.prototype.done.call(this);
        }, e.prototype._detectRecognition = function() {
            if (!this.mSpeechRecognitionFactory) return this._error('_detectRecognition', 'keine Recognition-Fabrik vorhanden'), 
            !1;
            try {
                this.mSpeechRecognition = this.mSpeechRecognitionFactory.getSpeechRecognitionClass();
            } catch (t) {
                return this._exception('_detectRecognition', t), !1;
            }
            return null !== this.mSpeechRecognition || (this._error('_detectRecognition', 'Kein HTML5 SpeechRecognition API vorhanden'), 
            !1);
        }, e.prototype._initRecognition = function(t) {
            var e = this;
            try {
                this.mRecognition = new this.mSpeechRecognition(), this.mRecognition.lang = this._getASRLanguage(), 
                this.mRecognition.continuous = !1, this.mRecognition.interimResults = !1, this.mRecognition.maxAlternatives = 1;
            } catch (t) {
                return this._exception('init', t), -1;
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
    }(Ct), Ot = function(t) {
        function e() {
            return t.call(this, 'ASRFactory') || this;
        }
        return s(e, t), e.prototype.getType = function() {
            return "ASR";
        }, e.prototype.getName = function() {
            return "ASRFactory";
        }, e.prototype._newPlugin = function(t, e) {
            var n = null;
            switch (t) {
              case _t:
              case Ft:
                n = new Pt(new Lt(), t, e);
                break;

              case Dt:
                n = new bt(Dt, e);
                break;

              default:
                this._error('_newPlugin', 'keine ASR vorhanden');
            }
            return n;
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || _t;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), Rt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, vt, e) || this;
            return n.mASRPlugin = null, n.mListenStartEvent = new U(R, vt), n.mListenStopEvent = new U(N, vt), 
            n.mListenResultEvent = new U(x, vt), n.mASRActiveFlag = !1, n.mASRFeatureFlag = !1, 
            n.mListenStartEvent._setErrorOutputFunc(n._getErrorOutputFunc()), n.mListenStopEvent._setErrorOutputFunc(n._getErrorOutputFunc()), 
            n.mListenResultEvent._setErrorOutputFunc(n._getErrorOutputFunc()), n;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Listen";
        }, e.prototype.getClass = function() {
            return 'ListenComponent';
        }, e.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(t) {
            return t ? (t.listenLanguage && this.setLanguage(t.listenLanguage), 0) : -1;
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('ListenComponent.init: bereits initialisiert'), 
            0) : 0 !== t.prototype.init.call(this, e) ? (this._error('init', 'super.init() Fehler'), 
            -1) : (this.mASRPlugin = this.findPlugin(_t), this.mASRPlugin && (this.mASRActiveFlag = this.mASRPlugin.isActive()), 
            this._setOption(e), 0);
        }, e.prototype.done = function() {
            return this.isListenRunning() && this.abortListen(), this.mASRPlugin = null, this.mASRActiveFlag = !1, 
            this.mASRFeatureFlag = !1, this.mListenStartEvent.clear(), this.mListenStopEvent.clear(), 
            this.mListenResultEvent.clear(), t.prototype.done.call(this);
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.isListenRunning() && this.abortListen(), this.setActiveOn(), 
            this.setLanguage("de"), this._setOption(t), 0) : (this._error('reset', 'Komponente nicht initialisiert'), 
            -1);
        }, e.prototype.isActive = function() {
            return !!this.mASRActiveFlag && t.prototype.isActive.call(this);
        }, e.prototype.setActiveOn = function() {
            return this.mASRActiveFlag ? t.prototype.setActiveOn.call(this) : -1;
        }, e.prototype.setFeatureList = function(t) {
            return t.features ? (t.features.ASR && 'boolean' == typeof t.features.ASR && (this.mASRFeatureFlag = t.features.ASR), 
            0) : (this._error('setFeatureList', 'keine FeatureInfos uebergeben'), -1);
        }, e.prototype._setErrorOutput = function(e) {
            t.prototype._setErrorOutput.call(this, e), this.mListenStartEvent._setErrorOutput(e), 
            this.mListenStopEvent._setErrorOutput(e), this.mListenResultEvent._setErrorOutput(e);
        }, e.prototype._onListenStart = function() {
            return this.mListenStartEvent.dispatch();
        }, e.prototype._onListenStop = function() {
            return this.mListenStopEvent.dispatch();
        }, e.prototype._onListenResult = function(t) {
            return this.mListenResultEvent.dispatch(t);
        }, Object.defineProperty(e.prototype, "onListenStart", {
            get: function() {
                var t = this;
                return function() {
                    return t._onListenStart();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenStop", {
            get: function() {
                var t = this;
                return function() {
                    return t._onListenStop();
                };
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onListenResult", {
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
              case R:
                i = this.mListenStartEvent.addListener(e, o);
                break;

              case N:
                i = this.mListenStopEvent.addListener(e, o);
                break;

              case x:
                i = this.mListenResultEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case R:
                o = this.mListenStartEvent.removeListener(e);
                break;

              case N:
                o = this.mListenStopEvent.removeListener(e);
                break;

              case x:
                o = this.mListenResultEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addListenStartEvent = function(t, e) {
            return this.addEventListener(t, R, e);
        }, e.prototype.addListenStopEvent = function(t, e) {
            return this.addEventListener(t, N, e);
        }, e.prototype.addListenResultEvent = function(t, e) {
            return this.addEventListener(t, x, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, b, e);
        }, e.prototype.removeListenStartEvent = function(t) {
            return this.removeEventListener(t, R);
        }, e.prototype.removeListenStopEvent = function(t) {
            return this.removeEventListener(t, N);
        }, e.prototype.removeListenResultEvent = function(t) {
            return this.removeEventListener(t, x);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, b);
        }, e.prototype.removeAllEvent = function(t) {
            return this.removeListenStartEvent(t), this.removeListenStopEvent(t), this.removeListenResultEvent(t), 
            this.removeErrorEvent(t), 0;
        }, e.prototype.setLanguage = function(t) {
            return this.mASRPlugin ? this.mASRPlugin.setLanguage(t) : -1;
        }, e.prototype.getLanguage = function() {
            return this.mASRPlugin ? this.mASRPlugin.getLanguage() : "";
        }, e.prototype.isListenRunning = function() {
            return !!this.isActive() && (!!this.mASRPlugin && this.mASRPlugin.isListenRunning());
        }, e.prototype.startListen = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.startListen() : (this._error('startListen', 'kein ASR vorhanden'), 
            -1) : 0;
        }, e.prototype.getStartListenFunc = function() {
            var t = this;
            return function() {
                return t.startListen();
            };
        }, e.prototype.stopListen = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.stopListen() : (this._error('stopListen', 'kein ASR vorhanden'), 
            -1) : 0;
        }, e.prototype.getStopListenFunc = function() {
            var t = this;
            return function() {
                return t.stopListen();
            };
        }, e.prototype.abortListen = function() {
            return this.isActive() ? this.mASRPlugin ? this.mASRPlugin.abortListen() : (this._error('abortListen', 'kein ASR vorhanden'), 
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
    }(V), Nt = function(t) {
        function e() {
            return t.call(this, 'ListenComponentFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "ListenComponentFactory";
        }, e.prototype.getType = function() {
            return "Listen";
        }, e.prototype._newPlugin = function(t, e) {
            return new Rt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || vt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), xt = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.mListenComponent = null, e._setErrorClassName('ListenComponentBuilder'), 
            e;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Listen";
        }, e.prototype.getName = function() {
            return "ListenComponentBuilder";
        }, e.prototype.build = function() {
            if (this.mListenComponent) return this.mListenComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(_t, "ASRFactory", Ot);
                return 0 !== this._binder(t, e) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mListenComponent || (this.mListenComponent = this._getPlugin(vt, "ListenComponentFactory", Nt)), 
            this.mListenComponent;
        }, e.prototype._binder = function(t, e) {
            return t && e ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : (e.onListenStart = t.onListenStart, 
            e.onListenStop = t.onListenStop, e.onListenResult = t.onListenResult, e.onError = t.onError, 
            0) : -1;
        }, e;
    }(f), wt = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Listen nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            var e = !0;
            t && 'boolean' == typeof t.errorOutputFlag && (e = t.errorOutputFlag);
            try {
                var n = c.get("ListenComponentBuilder", xt);
                if (!n) return e && console.log('Listen._init: ListenComponentBuilder nicht vorhanden'), 
                -1;
                if (this.mComponent = n.build(), !this.mComponent) return e && console.log('Listen._init: keine ListenComponent erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return e && console.log('Listen._init: ListenComponent nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log('Listen-API Version: ', "0.5.1.0040 vom 11.10.2018 (ALPHA)");
                }
                return 0;
            } catch (t) {
                return e && console.log('Listen._init: Exception', t.message), -1;
            }
        }, t.prototype.reset = function(t) {
            return this.mComponent.reset(t);
        }, t.prototype.getType = function() {
            return this.mComponent.getType();
        }, t.prototype.getName = function() {
            return this.mComponent.getName();
        }, t.prototype.getVersion = function() {
            return this.mComponent.getVersion();
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
        }, t.prototype.addListenStartEvent = function(t, e) {
            return this.mComponent.addListenStartEvent(t, e);
        }, t.prototype.addListenStopEvent = function(t, e) {
            return this.mComponent.addListenStopEvent(t, e);
        }, t.prototype.addListenResultEvent = function(t, e) {
            return this.mComponent.addListenResultEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeListenStartEvent = function(t) {
            return this.mComponent.removeListenStartEvent(t);
        }, t.prototype.removeListenStopEvent = function(t) {
            return this.mComponent.removeListenStopEvent(t);
        }, t.prototype.removeListenResultEvent = function(t) {
            return this.mComponent.removeListenResultEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.setLanguage = function(t) {
            return this.mComponent.setLanguage(t);
        }, t.prototype.getLanguage = function() {
            return this.mComponent.getLanguage();
        }, t.prototype.isListenRunning = function() {
            return this.mComponent.isListenRunning();
        }, t.prototype.startListen = function() {
            return this.mComponent.startListen();
        }, t.prototype.stopListen = function() {
            return this.mComponent.stopListen();
        }, t.prototype.abortListen = function() {
            return this.mComponent.abortListen();
        }, t.prototype.test = function(t, e) {
            return this.mComponent.test(t, e);
        }, t;
    }(), Tt = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new wt(e);
            } catch (t) {
                return console.log('ListenFactory.create: Exception', t), null;
            }
        }, t;
    }(), It = 'DialogComponent', Mt = 'DialogProxy', Wt = 'assets/', Bt = 'speech.def', qt = !1, Ht = 'main', jt = 'root', Gt = 'FileReader', Kt = function(t) {
        function e() {
            return t.call(this, 'XMLHttpRequestFactory') || this;
        }
        return s(e, t), e.prototype.getXMLHttpRequestClass = function() {
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
    }(r), Xt = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, Gt, n) || this;
            return o.mXMLHttpRequest = null, o.mRequest = null, o.mOnReadFunc = null, o.mXMLHttpRequestFactory = e, 
            o._setErrorClassName('FileReader'), o;
        }
        return s(e, t), e.prototype.getType = function() {
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
    }(S), Ut = function(t) {
        function e() {
            return t.call(this, 'FileReaderFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "FileReaderFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Xt(new Kt(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Gt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), Vt = 'StorePlugin', zt = function() {
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
    }(), Yt = function() {
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
            var i = new zt(t, e, this.mStateId, n, o);
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
    }(), Jt = function() {
        function t(t) {
            this.mDialogName = '', this.mDialogStateList = new Map(), this.mDialogName = t;
        }
        return t.prototype.getName = function() {
            return this.mDialogName;
        }, t.prototype.newDialogState = function(t, e) {
            var n = new Yt(this.mDialogName, t, e);
            return this.mDialogStateList.set(t, n), n;
        }, t.prototype.getDialogState = function(t) {
            return this.mDialogStateList.get(t);
        }, t;
    }(), Qt = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, Vt, e) || this;
            return n.mDialogList = new Map(), n._setErrorClassName('StorePlugin'), n;
        }
        return s(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogList.clear(), t.prototype.done.call(this);
        }, e.prototype.clear = function() {
            this.mDialogList.clear();
        }, e.prototype.newDialog = function(t) {
            var e = new Jt(t);
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
    }(S), Zt = function(t) {
        function e() {
            return t.call(this, 'StoreFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "StoreFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Qt(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || Vt;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), $t = 'ParserPlugin', te = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, $t, e) || this;
            return n.mOnParserEndFunc = null, n.mNewDialogFunc = null, n.mNewDialogStateFunc = null, 
            n._setErrorClassName('ParserPlugin'), n;
        }
        return s(e, t), e.prototype.init = function(e) {
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
            var e = t.split('\n'), n = '', o = '', i = null, r = null, u = 0, s = 0, a = 0, p = [], c = '', l = '', h = 0, m = 0, g = '', f = '', y = '', d = '', S = 0, v = 0, E = 0, _ = '', D = !1;
            try {
                for (var F = 0; F < e.length; ++F) if (c = e[F].trim(), l = '', F < e.length - 1 && (l = e[F + 1].trim()), 
                c && 0 !== (v = c.indexOf('#'))) {
                    switch (-1 === (v = c.indexOf(' ')) && (v = c.length), n = c.substr(0, v), 'GROUPEND' === l && (D = !0, 
                    l = '', F < e.length - 2 && (l = e[F + 2].trim())), p = (c = c.substr(v + 1, c.length)).split(','), 
                    n) {
                      case 'DIALOG':
                        o = p[0].trim(), this._newDialog(o);
                        break;

                      case 'STATE':
                        a = ++u, g = p[0].trim(), i = this._newDialogState(o, g, a);
                        break;

                      case 'GROUP':
                        h = ++s, _ = p[0].trim(), m = h + 1, l || (m = 0), E = h, (r = i.newDialogNode("group", h, 0, m)).setProperty(_);
                        break;

                      case 'GROUPEND':
                        break;

                      case 'ACTION':
                        h = ++s, g = p[0].trim(), f = p[1].trim(), y = p[2].trim(), m = h + 1, l || (m = 0), 
                        (r = i.newDialogNode("action", h, E, m)).setName(g), r.setObjectType(f), r.setObjectName(y), 
                        r.setProperty(_);
                        break;

                      case 'SPEAK':
                        h = ++s, S = 1e3 * parseInt(p[0].trim(), 10), d = p[1].trim();
                        for (var A = 2; A < p.length; A++) d += ',' + p[A].trim();
                        m = h + 1, l || (m = 0), (r = i.newDialogNode("speak", h, E, m)).setTimeout(S), 
                        r.setText(d), r.setProperty(_);
                        break;

                      case 'WAIT':
                        h = ++s, S = 1e3 * parseInt(p[0].trim(), 10), m = h + 1, l || (m = 0), (r = i.newDialogNode("wait", h, E, m)).setTimeout(S), 
                        r.setProperty(_);
                        break;

                      case '':
                        break;

                      default:
                        return this._error('parseSpeechDefData', 'ParserFehler'), -1;
                    }
                    D && (E = 0, _ = '', D = !1);
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
    }(S), ee = function(t) {
        function e() {
            return t.call(this, 'ParserFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "ParserFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new te(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || $t;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), ne = 'InterpreterPlugin', oe = (function(t) {
        function e(e) {
            return t.call(this, e) || this;
        }
        s(e, t), e.prototype.cancel = function() {
            this.cancelMethod && this.cancelMethod();
        };
    }(Promise), function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ne, e) || this;
            return n.mDialogName = Ht, n.mStateName = jt, n.mStateContext = null, n.mNodePromise = null, 
            n.mDialogRunFlag = !1, n.mSpeakRunFlag = !1, n.mGroupId = 0, n.mGroupProperty = '', 
            n.mGroupActionFlag = !1, n.mNoWaitNodeFlag = !1, n.mGetDialogStateFunc = null, n.mDialogSetFunc = null, 
            n.mDialogStartFunc = null, n.mDialogStopFunc = null, n.mDialogStateSetFunc = null, 
            n.mDialogActionFunc = null, n.mDialogSpeakFunc = null, n.mDialogSpeakStartFunc = null, 
            n.mDialogSpeakStopFunc = null, n._setErrorClassName('InterpreterPlugin'), n;
        }
        return s(e, t), e.prototype.init = function(e) {
            return t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mDialogName = Ht, this.mStateName = jt, this.mStateContext = null, this.mNodePromise = null, 
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
                    event: H,
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
                    event: G,
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
            return new zt("wait", 0, 0, 0, 0);
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
                return a(this, function(u) {
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
    }(S)), ie = function(t) {
        function e() {
            return t.call(this, 'InterpreterFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "InterpreterFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new oe(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ne;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), re = function(t) {
        function e() {
            var e = t.call(this, 'DialogContext') || this;
            return e.mContext = {
                property: {}
            }, e;
        }
        return s(e, t), e.prototype.clear = function() {
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
    }(r), ue = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mDialogContext = new re(), o.mParseSpeechDefFileFunc = null, o.mParseSpeechDefDataFunc = null, 
            o.mReadFileFunc = null, o.mDialogParseEvent = new U(B), o.mDialogSetEvent = new U(I), 
            o.mDialogStartEvent = new U(M), o.mDialogStopEvent = new U(W), o.mDialogStateSetEvent = new U(q), 
            o.mDialogActionEvent = new U(H), o.mDialogActionStopEvent = new U(j), o.mDialogSpeakEvent = new U(G), 
            o.mDialogSpeakStartEvent = new U(K), o.mDialogSpeakStopEvent = new U(X), o.mDialogLoadFlag = qt, 
            o.mDialogFilePath = Wt, o.mDialogFileName = Bt, o.mActivDialogFlag = !1, o._setErrorClassName('DialogBase'), 
            o.mDialogContext._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogParseEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogSetEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogStartEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogStateSetEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogActionEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogActionStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogSpeakEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogSpeakStartEvent._setErrorOutputFunc(o._getErrorOutputFunc()), 
            o.mDialogSpeakStopEvent._setErrorOutputFunc(o._getErrorOutputFunc()), o.mDialogParseEvent.setComponentName(e), 
            o.mDialogSetEvent.setComponentName(e), o.mDialogStartEvent.setComponentName(e), 
            o.mDialogStopEvent.setComponentName(e), o.mDialogStateSetEvent.setComponentName(e), 
            o.mDialogActionEvent.setComponentName(e), o.mDialogActionStopEvent.setComponentName(e), 
            o.mDialogSpeakEvent.setComponentName(e), o.mDialogSpeakStartEvent.setComponentName(e), 
            o.mDialogSpeakStopEvent.setComponentName(e), o;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return '';
        }, e.prototype._setOption = function(t) {
            t && ('string' == typeof t.dialogName && this.setDialog(t.dialogName), 'string' == typeof t.dialogRootState && this.setDialogState(t.dialogRootState), 
            'boolean' == typeof t.dialogLoadFlag && (!0 === t.dialogLoadFlag ? this.mDialogLoadFlag = !0 : this.mDialogLoadFlag = !1), 
            'string' == typeof t.dialogFilePath && this.setDialogFilePath(t.dialogFilePath), 
            'string' == typeof t.dialogFileName && this.setDialogFileName(t.dialogFileName));
        }, e.prototype.init = function(e) {
            return 0 !== t.prototype.init.call(this, e) ? -1 : 0 !== this.connect() ? (this._clearInit(), 
            -1) : (this._setOption(e), this.mDialogLoadFlag && 0 !== this.loadDialogFile() ? (this._error('init', 'Dialogdatei nicht geladen'), 
            -1) : 0);
        }, e.prototype.done = function() {
            return this.isInit() && this.stopDialog(), this.mDialogContext.clear(), this.mReadFileFunc = null, 
            this.mDialogParseEvent.clear(), this.mDialogSetEvent.clear(), this.mDialogStartEvent.clear(), 
            this.mDialogStopEvent.clear(), this.mDialogStateSetEvent.clear(), this.mDialogActionEvent.clear(), 
            this.mDialogActionStopEvent.clear(), this.mDialogSpeakEvent.clear(), this.mDialogSpeakStartEvent.clear(), 
            this.mDialogSpeakStopEvent.clear(), this.mDialogFilePath = Wt, this.mDialogFileName = Bt, 
            this.mDialogLoadFlag = qt, this.mActivDialogFlag = !1, t.prototype.done.call(this);
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.stopDialog(), this.setActiveOn(), this.clearDialog(), 
            this.mDialogContext.clear(), this.setDialog(Ht), this.setDialogState(jt), this.mDialogFilePath = Wt, 
            this.mDialogFileName = Bt, this.mDialogLoadFlag = qt, this.mActivDialogFlag = !1, 
            this._setOption(t), this.mDialogLoadFlag && 0 !== this.loadDialogFile() ? (this._error('init', 'Dialogdatei nicht geladen'), 
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
              case B:
                i = this.mDialogParseEvent.addListener(e, o);
                break;

              case I:
                i = this.mDialogSetEvent.addListener(e, o);
                break;

              case M:
                i = this.mDialogStartEvent.addListener(e, o);
                break;

              case W:
                i = this.mDialogStopEvent.addListener(e, o);
                break;

              case q:
                i = this.mDialogStateSetEvent.addListener(e, o);
                break;

              case H:
                i = this.mDialogActionEvent.addListener(e, o);
                break;

              case j:
                i = this.mDialogActionStopEvent.addListener(e, o);
                break;

              case G:
                i = this.mDialogSpeakEvent.addListener(e, o);
                break;

              case K:
                i = this.mDialogSpeakStartEvent.addListener(e, o);
                break;

              case X:
                i = this.mDialogSpeakStopEvent.addListener(e, o);
                break;

              default:
                i = t.prototype.addEventListener.call(this, e, n, o);
            }
            return i;
        }, e.prototype.removeEventListener = function(e, n) {
            var o = 0;
            switch (n) {
              case B:
                o = this.mDialogParseEvent.removeListener(e);
                break;

              case I:
                o = this.mDialogSetEvent.removeListener(e);
                break;

              case M:
                o = this.mDialogStartEvent.removeListener(e);
                break;

              case W:
                o = this.mDialogStopEvent.removeListener(e);
                break;

              case q:
                o = this.mDialogStateSetEvent.removeListener(e);
                break;

              case H:
                o = this.mDialogActionEvent.removeListener(e);
                break;

              case j:
                o = this.mDialogActionStopEvent.removeListener(e);
                break;

              case G:
                o = this.mDialogSpeakEvent.removeListener(e);
                break;

              case K:
                o = this.mDialogSpeakStartEvent.removeListener(e);
                break;

              case X:
                o = this.mDialogSpeakStopEvent.removeListener(e);
                break;

              default:
                o = t.prototype.removeEventListener.call(this, e, n);
            }
            return o;
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, B, e);
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.addEventListener(t, I, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, M, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, W, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, q, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, H, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, j, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, G, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, K, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, X, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, b, e);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, B);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, I);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, M);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, W);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, q);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, H);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, j);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, G);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, K);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, X);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, b);
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
        }, e.prototype.isDialogRunning = function() {
            return this.mActivDialogFlag;
        }, e.prototype.toggleDialog = function() {
            return this.isDialogRunning() ? this.stopDialog() : this.startDialog();
        }, e.prototype.clearDialog = function() {
            return 0;
        }, e.prototype.setDialog = function(t) {
            return 0;
        }, e.prototype.getDialog = function() {
            return '';
        }, e.prototype.startDialog = function() {
            return this.mActivDialogFlag = !0, 0;
        }, e.prototype.stopDialog = function() {
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
    }(V), se = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, It, e) || this;
            return n.mStore = null, n.mInterpreter = null, n._setErrorClassName('DialogComponent'), 
            n;
        }
        return s(e, t), e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('DialogComponent.init: bereits initialisiert'), 
            0) : (this.mStore = this.findPlugin(Vt), this.mStore ? (this.mInterpreter = this.findPlugin(ne), 
            this.mInterpreter ? t.prototype.init.call(this, e) : -1) : -1);
        }, e.prototype.done = function() {
            return this.mInterpreter && (this.stopDialog(), this.mInterpreter = null), t.prototype.done.call(this);
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
        }, e.prototype.isDialogRunning = function() {
            return !!this.mInterpreter && this.mInterpreter.isDialogRunning();
        }, e.prototype.startDialog = function() {
            return this.mInterpreter ? (t.prototype.startDialog.call(this), this.mInterpreter.startDialog()) : -1;
        }, e.prototype.stopDialog = function() {
            return this.mInterpreter ? (t.prototype.stopDialog.call(this), this.mInterpreter.stopDialog()) : -1;
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
    }(ue), ae = function(t) {
        function e() {
            return t.call(this, 'DialogComponentFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "DialogComponentFactory";
        }, e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return new se(e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), pe = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.mDialogComponent = null, e._setErrorClassName('DialogComponentBuilder'), 
            e;
        }
        return s(e, t), e.prototype.getName = function() {
            return "DialogComponentBuilder";
        }, e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.build = function() {
            if (this.mDialogComponent) return this.mDialogComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(Gt, "FileReaderFactory", Ut), n = this._getPlugin(Vt, "StoreFactory", Zt), o = this._getPlugin($t, "ParserFactory", ee), i = this._getPlugin(ne, "InterpreterFactory", ie);
                return 0 !== this._binder(t, e, n, o, i) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mDialogComponent || (this.mDialogComponent = this._getPlugin(It, "DialogComponentFactory", ae)), 
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
    }(f), ce = 'NetWebWorker', le = 'NetWebSocket', he = ce, me = function(t) {
        function e() {
            return t.call(this, 'WebSocketFactory') || this;
        }
        return s(e, t), e.prototype.createWebSocket = function(t) {
            try {
                return new WebSocket(t);
            } catch (t) {
                return this._exception('createWebSocket', t), null;
            }
        }, e;
    }(r), ge = function(t) {
        function e() {
            return t.call(this, 'WebWorkerFactory') || this;
        }
        return s(e, t), e.prototype.getWebWorkerClass = function() {
            try {
                return window.Worker || null;
            } catch (t) {
                return this._exception('getWebWorkerClass', t), null;
            }
        }, e.prototype.createWebWorker = function(t) {
            var e = this.getWebWorkerClass();
            if (!e) return null;
            try {
                return new e(t);
            } catch (t) {
                return this._exception('createWebWorker', t), null;
            }
        }, e;
    }(r), fe = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, e, n) || this;
            return o.mHandleMessageList = new Map(), o.mOnOpenFunc = null, o.mOnCloseFunc = null, 
            o.mOnMessageFunc = null, o._setErrorClassName('NetPlugin'), o;
        }
        return s(e, t), e.prototype.getType = function() {
            return 'NetPlugin';
        }, e.prototype.init = function(e) {
            return this.mOnMessageFunc = this.getHandleMessageFunc(), t.prototype.init.call(this, e);
        }, e.prototype.done = function() {
            return this.mOnOpenFunc = null, this.mOnCloseFunc = null, this.mOnMessageFunc = null, 
            t.prototype.done.call(this);
        }, e.prototype._onOpen = function() {
            if ('function' == typeof this.mOnOpenFunc) try {
                return this.mOnOpenFunc();
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
        }, e.prototype.open = function() {
            return -1;
        }, e.prototype.close = function() {
            return 0;
        }, e.prototype.isOpen = function() {
            return !1;
        }, e.prototype.getState = function() {
            return '';
        }, e.prototype.sendMessage = function(t) {
            return 0;
        }, e.prototype.getSendMessageFunc = function() {
            var t = this;
            return function(e) {
                return t.sendMessage(e);
            };
        }, e.prototype.handleMessage = function(t) {
            return this.mHandleMessageList.forEach(function(e) {
                e(t);
            }), 0;
        }, e.prototype.getHandleMessageFunc = function() {
            var t = this;
            return function(e) {
                return t.handleMessage(e);
            };
        }, e.prototype.setHandleMessageFunc = function(t, e) {
            return this.mHandleMessageList.set(t, e), 0;
        }, Object.defineProperty(e.prototype, "onOpen", {
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
        }), e;
    }(S), ye = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, le, n) || this;
            return o.mWebSocket = null, o.mWebSocketOpenFlag = !1, o.mConnectIntervalId = 0, 
            o.mConnectInfinite = !1, o.mWebSocketFactory = e, o._setErrorClassName('NetWebSocket'), 
            o;
        }
        return s(e, t), e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : (e && e.connectInfinite && (this.mConnectInfinite = !0, 
            console.log('NetWebSocket.init: ConnectInfinite eingeschaltet')), t.prototype.init.call(this, e));
        }, e.prototype.done = function() {
            try {
                return this.close(), this.mConnectIntervalId = 0, this.mConnectInfinite = !1, t.prototype.done.call(this);
            } catch (t) {
                return this._exception('done', t), -1;
            }
        }, e.prototype.getType = function() {
            return "WebSocket";
        }, e.prototype.open = function() {
            return this.isInit() ? this.isOpen() ? (this._error('.open', 'bereits geoeffnet'), 
            -1) : 0 !== this._connect() ? (this._error('open', 'keine Verbindung moeglich'), 
            -1) : 0 : (this._error('open', 'nicht initialisiert'), -1);
        }, e.prototype.close = function() {
            if (this.mWebSocketOpenFlag = !1, this.mWebSocket) {
                this._clearInfiniteConnect();
                try {
                    this.mWebSocket.onclose = function() {}, this.mWebSocket.close(), this.mWebSocket = null;
                } catch (t) {
                    return this._exception('close', t), this.mWebSocket = null, -1;
                }
            }
            return 0;
        }, e.prototype.isOpen = function() {
            return this.mWebSocketOpenFlag;
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
        }, e.prototype._webSocketOpen = function(t) {
            return this.mWebSocketOpenFlag = !0, this._clearInfiniteConnect(), 0 !== this._onMessage({
                event: 'start'
            }) ? -1 : 0 !== this._onOpen() ? -1 : 0;
        }, e.prototype._webSocketClose = function(t) {
            return this.mWebSocketOpenFlag = !1, this._setInfiniteConnect(), this._onClose();
        }, e.prototype._webSocketMessage = function(t) {
            try {
                return this._onMessage(JSON.parse(t.data));
            } catch (t) {
                return this._exception('_websocketMessage', t), -1;
            }
        }, e.prototype._webSocketError = function(t) {
            return this._onError(t);
        }, e.prototype._connect = function() {
            var t = this;
            if (this.mWebSocket && this.isOpen()) return 0;
            if (!this.isInit()) return this._error('_connect', 'nicht initialisiert'), -1;
            if (!this.mWebSocketFactory) return this._error('_connect', 'keine WebSocketFactory Funktion vorhanden'), 
            -1;
            try {
                return this.mWebSocket = this.mWebSocketFactory.createWebSocket("ws://localhost:7050"), 
                this.mWebSocket ? (this.mWebSocket.onopen = function(e) {
                    t._webSocketOpen(e);
                }, this.mWebSocket.onclose = function(e) {
                    t._webSocketClose(e);
                }, this.mWebSocket.onmessage = function(e) {
                    t._webSocketMessage(e);
                }, this.mWebSocket.onerror = function(e) {
                    t._webSocketError(e);
                }, 0) : (this._error('_connect', 'keine WebSocket erzeugt'), -1);
            } catch (t) {
                return this._exception('_connect', t), this.mWebSocket = null, -1;
            }
        }, e.prototype._setInfiniteConnect = function() {
            var t = this;
            this.mConnectInfinite && 0 === this.mConnectIntervalId && (this.mConnectIntervalId = setInterval(function() {
                t._connect();
            }, 5e3));
        }, e.prototype._clearInfiniteConnect = function() {
            0 !== this.mConnectIntervalId && (clearInterval(this.mConnectIntervalId), this.mConnectIntervalId = 0);
        }, e;
    }(fe), de = function(t) {
        function e(e, n) {
            void 0 === n && (n = !0);
            var o = t.call(this, ce, n) || this;
            return o.mWebWorkerClass = null, o.mWebWorker = null, o.mWebWorkerPath = '', o.mWebWorkerFactory = e, 
            o._setErrorClassName('NetWebWorker'), o;
        }
        return s(e, t), e.prototype._detectWebWorker = function() {
            if (!this.mWebWorkerFactory) return this._error('_detectWebWorker', 'keine WebWorker-Fabrik vorhanden'), 
            !1;
            try {
                this.mWebWorkerClass = this.mWebWorkerFactory.getWebWorkerClass();
            } catch (t) {
                return this._exception('_detectWebWorker', t), !1;
            }
            return null !== this.mWebWorkerClass || (this._error('_detectWebWorker', 'Unable to use the WebWorker API'), 
            !1);
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this._error('init', 'init doppelt aufgerufen'), -1) : this._detectWebWorker() ? (e && e.webWorkerPath && (this.mWebWorkerPath = e.webWorkerPath), 
            t.prototype.init.call(this, e)) : -1;
        }, e.prototype.done = function() {
            return this.mWebWorkerClass = null, this.mWebWorker = null, this.mWebWorkerPath = '', 
            this.close(), t.prototype.done.call(this);
        }, e.prototype.getType = function() {
            return "WebWorker";
        }, e.prototype._webWorkerOpen = function(t) {
            return 0 !== this._onMessage({
                event: 'start'
            }) ? -1 : 0 !== this._onOpen() ? -1 : 0;
        }, e.prototype._webWorkerClose = function(t) {
            return this._onClose();
        }, e.prototype._webWorkerMessage = function(t) {
            try {
                this._onMessage(t.data);
            } catch (t) {
                return this._exception('_webWorkerMessage', t), -1;
            }
            return 0;
        }, e.prototype._webWorkerError = function(t) {
            return this._onError(t);
        }, e.prototype.open = function() {
            var t = this;
            if (!this.isInit()) return this._error('open', 'nicht initialisiert'), -1;
            if (this.isOpen()) return this._error('open', 'bereits geoeffnet'), -1;
            try {
                if (!this.mWebWorkerClass) return this._error('open', 'keine WebWorkerClass vorhanden'), 
                -1;
                var e = this.mWebWorkerPath + "speechworker.js";
                return this.mWebWorker = new this.mWebWorkerClass(e), this.mWebWorker ? (this.mWebWorker.onmessage = function(e) {
                    t._webWorkerMessage(e);
                }, this.mWebWorker.onerror = function(e) {
                    e.preventDefault(), console.log('NetWebWorker.open: Error', e), t.mWebWorker = null, 
                    t._webWorkerError(new Error('WebWorker nicht initialisiert'));
                }, this._webWorkerOpen('')) : (this._error('open', 'kein WebWorker erzeugt'), -1);
            } catch (t) {
                return this._exception('open', t), -1;
            }
        }, e.prototype.close = function() {
            if (this.mWebWorker) {
                var t = this.mWebWorker;
                this.mWebWorker = null;
                try {
                    return this._webWorkerClose(''), t.terminate(), 0;
                } catch (t) {
                    return this._exception('close', t), -1;
                }
            }
            return 0;
        }, e.prototype.isOpen = function() {
            return !!this.mWebWorker;
        }, e.prototype.getState = function() {
            return this.mWebWorker ? 'OPEN' : 'NULL';
        }, e.prototype.sendMessage = function(t) {
            if (this.mWebWorker) try {
                return this.mWebWorker.postMessage(t), 0;
            } catch (t) {
                this._exception('sendMessage', t);
            }
            return -1;
        }, e;
    }(fe), Se = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e._setErrorClassName('NetFactory'), e;
        }
        return s(e, t), e.prototype.getName = function() {
            return "NetFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return t === le ? new ye(new me(), e) : new de(new ge(), e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || he;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), ve = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, Mt, e) || this;
            return n.mNet = null, n.mServerVersion = '', n._setErrorClassName('DialogProxy'), 
            n;
        }
        return s(e, t), e.prototype.getServerVersion = function() {
            return this.mServerVersion;
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('DialogProxy.init: bereits initialisiert'), 
            0) : (this.mNet = this.findPlugin(he), this.mNet ? t.prototype.init.call(this, e) : (this._error('init', 'kein NetPlugin vorhanden'), 
            -1));
        }, e.prototype.done = function() {
            return this.mNet && (this.mNet.close(), this.mNet = null), t.prototype.done.call(this);
        }, e.prototype.connect = function() {
            return this.isInit() ? this.isConnect() ? 0 : 0 !== this.mNet.open() ? (this._error('connect', 'keine Verbindung aufgebaut'), 
            -1) : 0 : (this._error('connect', 'nicht initialisiert'), -1);
        }, e.prototype.isConnect = function() {
            return !!this.mNet && this.mNet.isOpen();
        }, e.prototype.getNetType = function() {
            return this.mNet ? this.mNet.getType() : 'undefined';
        }, e.prototype.handleMessage = function(e) {
            try {
                var n = 0;
                switch (e.event) {
                  case C:
                    break;

                  case "start":
                    this.getFeatureInfo();
                    break;

                  case "stop":
                    break;

                  case "featureInfo":
                    this.setFeatureList(e);
                    break;

                  case B:
                    n = this._onDialogParse();
                    break;

                  case I:
                    var o = e.dialog || '';
                    n = this._onDialogSet(o);
                    break;

                  case M:
                    n = this._onDialogStart();
                    break;

                  case W:
                    n = this._onDialogStop();
                    break;

                  case q:
                    var i = e.state || '';
                    n = this._onDialogStateSet(i);
                    break;

                  case H:
                    var r = {
                        event: e.event,
                        state: e.state || '',
                        action: e.action || '',
                        type: e.type || '',
                        id: e.id || ''
                    };
                    n = this._onDialogAction(r);
                    break;

                  case G:
                    var u = {
                        event: e.event,
                        state: e.state || '',
                        id: e.id || '',
                        text: e.text || '',
                        timeout: e.timeout || 0
                    };
                    n = this._onDialogSpeak(u);
                    break;

                  case K:
                    n = this._onDialogSpeakStart();
                    break;

                  case X:
                    n = this._onDialogSpeakStop();
                    break;

                  case b:
                    n = this.mErrorEvent.dispatch(e);
                    break;

                  default:
                    n = t.prototype.handleMessage.call(this, e);
                }
                return n;
            } catch (t) {
                return this._exception('handleMessage', t), -1;
            }
        }, e.prototype.getFeatureInfo = function() {
            var t = {
                event: "featureInfo"
            };
            return this.sendMessage(t);
        }, e.prototype.setFeatureList = function(e) {
            return e.version && (this.mServerVersion = 'Speech-' + this.getNetType() + '-Server Version: ' + e.version), 
            t.prototype.setFeatureList.call(this, e);
        }, e.prototype.setting = function() {
            if (this.mNet) {
                var t = {
                    event: "setting"
                };
                return this.mNet.sendMessage(t);
            }
            return -1;
        }, e.prototype.writeDialogData = function(t) {
            if (!t) return this._error('writeDialogData', 'keine Dialogdaten uebergeben'), -1;
            var e = {
                event: "writeData",
                dialogData: t
            };
            return this.sendMessage(e);
        }, e.prototype.setDialog = function(t) {
            return this._error('setDialog', 'nicht implementiert'), -1;
        }, e.prototype.getDialog = function() {
            return this._error('getDialog', 'nicht implementiert'), '';
        }, e.prototype.startDialog = function() {
            t.prototype.startDialog.call(this);
            var e = {
                event: "startDialog"
            };
            return this.sendMessage(e);
        }, e.prototype.stopDialog = function() {
            t.prototype.stopDialog.call(this);
            var e = {
                event: "stopDialog"
            };
            return this.sendMessage(e);
        }, e.prototype.setDialogState = function(t, e) {
            var n = {
                event: "setState",
                state: t,
                context: e || null
            };
            return this.sendMessage(n);
        }, e.prototype.getDialogState = function() {
            return this._error('getDialogState', 'nicht implementiert'), '';
        }, e.prototype.setDialogStateContext = function(t) {
            var e = {
                event: "setStateContext",
                context: t
            };
            return this.sendMessage(e);
        }, e.prototype.skipNextSpeak = function() {
            var t = {
                event: "skipNextSpeak"
            };
            return this.sendMessage(t);
        }, e;
    }(ue), Ee = function(t) {
        function e() {
            return t.call(this, 'DialogProxyFactory') || this;
        }
        return s(e, t), e.prototype.getName = function() {
            return "DialogProxyFactory";
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            try {
                return new ve(e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), _e = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.mDialogComponent = null, e._setErrorClassName('DialogProxyBuilder'), e;
        }
        return s(e, t), e.prototype.getName = function() {
            return "DialogProxyBuilder";
        }, e.prototype.build = function() {
            if (this.mDialogComponent) return this.mDialogComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(Gt, "FileReaderFactory", Ut), n = this._getPlugin(he, "NetFactory", Se);
                return 0 !== this._binder(t, e, n) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mDialogComponent || (this.mDialogComponent = this._getPlugin(Mt, "DialogProxyFactory", Ee)), 
            this.mDialogComponent;
        }, e.prototype._binder = function(t, e, n) {
            return t ? e ? n ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : 0 !== t.setReadFileFunc(e.getReadFunc()) ? -1 : (e.onRead = t.getWriteFileDataFunc(), 
            e.onError = t.onError, n.onError = t.onError, 0 !== t.setSendMessageFunc(n.getSendMessageFunc()) ? -1 : 0 !== n.setHandleMessageFunc(t.getName(), t.getHandleMessageFunc()) ? -1 : 0) : (this._error('_binder', 'Net nicht vorhanden'), 
            -1) : (this._error('_binder', 'FileReader nicht vorhanden'), -1) : (this._error('_binder', 'Dialog nicht vorhanden'), 
            -1);
        }, e;
    }(f), De = function(t) {
        function e() {
            var e = t.call(this) || this;
            return e.mDialogComponent = null, e._setErrorClassName('DialogServerBuilder'), e;
        }
        return s(e, t), e.prototype.getName = function() {
            return "DialogServerBuilder";
        }, e.prototype.getType = function() {
            return "Dialog";
        }, e.prototype.build = function() {
            if (this.mDialogComponent) return this.mDialogComponent;
            try {
                var t = this._buildComponent(), e = this._getPlugin(Vt, "StoreFactory", Zt), n = this._getPlugin($t, "ParserFactory", ee), o = this._getPlugin(ne, "InterpreterFactory", ie);
                return 0 !== this._binder(t, e, n, o) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, e.prototype._buildComponent = function() {
            return this.mDialogComponent || (this.mDialogComponent = this._getPlugin(It, "DialogComponentFactory", ae)), 
            this.mDialogComponent;
        }, e.prototype._binder = function(t, e, n, o) {
            return t ? e ? n ? o ? 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : 0 !== t.insertPlugin(o.getName(), o) ? -1 : (n.setNewDialogFunc(e.getNewDialogFunc()), 
            n.setNewDialogStateFunc(e.getNewDialogStateFunc()), n.onError = t.onError, o.setGetDialogStateFunc(e.getGetDialogStateFunc()), 
            o.onError = t.onError, t.setParseSpeechDefFileFunc(n.getParseSpeechDefFileFunc()), 
            t.setParseSpeechDefDataFunc(n.getParseSpeechDefDataFunc()), n.onParserEnd = t.onDialogParse, 
            n.onError = t.onError, o.onDialogSet = t.onDialogSet, o.onDialogStart = t.onDialogStart, 
            o.onDialogStop = t.onDialogStop, o.onDialogStateSet = t.onDialogStateSet, o.onDialogAction = t.onDialogAction, 
            o.onDialogSpeak = t.onDialogSpeak, o.onDialogSpeakStart = t.onDialogSpeakStart, 
            o.onDialogSpeakStop = t.onDialogSpeakStop, o.onError = t.onError, 0) : (this._error('_binder', 'Interpreter nicht vorhanden'), 
            -1) : (this._error('_binder', 'Parser nicht vorhanden'), -1) : (this._error('_binder', 'Store nicht vorhanden'), 
            -1) : (this._error('_binder', 'Dialog nicht vorhanden'), -1);
        }, e;
    }(f), Fe = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Dialog nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            try {
                var e = "DialogComponentBuilder";
                t && t.dialogBuilder && (e = t.dialogBuilder);
                var n = null;
                if ("DialogComponentBuilder" === e ? n = c.get("DialogComponentBuilder", pe) : "DialogProxyBuilder" === e ? n = c.get("DialogProxyBuilder", _e) : "DialogServerBuilder" === e && (n = c.get("DialogServerBuilder", De)), 
                !n) return console.log('Dialog._init: DialogBuilder nicht vorhanden'), -1;
                if (this.mComponent = n.build(), !this.mComponent) return console.log('Dialog._init: keine DialogComponent erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return console.log('Dialog._init: DialogComponent nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log('Dialog-API Version: ', "0.5.1.0040 vom 11.10.2018 (ALPHA)");
                }
                return 0;
            } catch (t) {
                return console.log('Dialog._init: Exception ', t.message), -1;
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
            return this.mComponent.getServerVersion();
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
        }, t.prototype.addDialogParseEvent = function(t, e) {
            return this.mComponent.addDialogParseEvent(t, e);
        }, t.prototype.addDialogSetEvent = function(t, e) {
            return this.mComponent.addDialogSetEvent(t, e);
        }, t.prototype.addDialogStartEvent = function(t, e) {
            return this.mComponent.addDialogStartEvent(t, e);
        }, t.prototype.addDialogStopEvent = function(t, e) {
            return this.mComponent.addDialogStopEvent(t, e);
        }, t.prototype.addDialogStateSetEvent = function(t, e) {
            return this.mComponent.addDialogStateSetEvent(t, e);
        }, t.prototype.addDialogActionEvent = function(t, e) {
            return this.mComponent.addDialogActionEvent(t, e);
        }, t.prototype.addDialogActionStopEvent = function(t, e) {
            return this.mComponent.addDialogActionStopEvent(t, e);
        }, t.prototype.addDialogSpeakEvent = function(t, e) {
            return this.mComponent.addDialogSpeakEvent(t, e);
        }, t.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.mComponent.addDialogSpeakStartEvent(t, e);
        }, t.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.mComponent.addDialogSpeakStopEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeDialogParseEvent = function(t) {
            return this.mComponent.removeDialogParseEvent(t);
        }, t.prototype.removeDialogSetEvent = function(t) {
            return this.mComponent.removeDialogSetEvent(t);
        }, t.prototype.removeDialogStartEvent = function(t) {
            return this.mComponent.removeDialogStartEvent(t);
        }, t.prototype.removeDialogStopEvent = function(t) {
            return this.mComponent.removeDialogStopEvent(t);
        }, t.prototype.removeDialogStateSetEvent = function(t) {
            return this.mComponent.removeDialogStateSetEvent(t);
        }, t.prototype.removeDialogActionEvent = function(t) {
            return this.mComponent.removeDialogActionEvent(t);
        }, t.prototype.removeDialogActionStopEvent = function(t) {
            return this.mComponent.removeDialogActionStopEvent(t);
        }, t.prototype.removeDialogSpeakEvent = function(t) {
            return this.mComponent.removeDialogSpeakEvent(t);
        }, t.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.mComponent.removeDialogSpeakStartEvent(t);
        }, t.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.mComponent.removeDialogSpeakStopEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.parseSpeechDefFile = function(t) {
            return this.mComponent.parseSpeechDefFile(t);
        }, t.prototype.parseSpeechDefData = function(t) {
            return this.mComponent.parseSpeechDefData(t);
        }, t.prototype.clearDialog = function() {
            return this.mComponent.clearDialog();
        }, t.prototype.setDialog = function(t) {
            return this.mComponent.setDialog(t);
        }, t.prototype.getDialog = function() {
            return this.mComponent.getDialog();
        }, t.prototype.isDialogRunning = function() {
            return this.mComponent.isDialogRunning();
        }, t.prototype.toggleDialog = function() {
            return this.mComponent.toggleDialog();
        }, t.prototype.startDialog = function() {
            return this.mComponent.startDialog();
        }, t.prototype.stopDialog = function() {
            return this.mComponent.stopDialog();
        }, t.prototype.setDialogFilePath = function(t) {
            return this.mComponent.setDialogFilePath(t);
        }, t.prototype.getDialogFilePath = function() {
            return this.mComponent.getDialogFilePath();
        }, t.prototype.setDialogFileName = function(t) {
            return this.mComponent.setDialogFileName(t);
        }, t.prototype.getDialogFileName = function() {
            return this.mComponent.getDialogFileName();
        }, t.prototype.loadDialogFile = function(t) {
            return this.mComponent.loadDialogFile(t);
        }, t.prototype.writeDialogData = function(t) {
            return this.mComponent.writeDialogData(t);
        }, t.prototype.skipNextSpeak = function() {
            return this.mComponent.skipNextSpeak();
        }, t.prototype.setDialogState = function(t, e) {
            return this.mComponent.setDialogState(t, e);
        }, t.prototype.getDialogState = function() {
            return this.mComponent.getDialogState();
        }, t.prototype.setDialogStateContext = function(t) {
            return this.mComponent.setDialogStateContext(t);
        }, t;
    }(), Ae = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new Fe(e);
            } catch (t) {
                return console.log('DialogFactory.create: Exception', t), null;
            }
        }, t;
    }(), ke = 'BotComponent', Le = function(t) {
        function e(e) {
            void 0 === e && (e = !0);
            var n = t.call(this, ke, e) || this;
            return n.mAudioPlayer = null, n.mSpeak = null, n.mListen = null, n.mAction = null, 
            n.mDialog = null, n.mSpeakEnableFlag = !0, n.mListenEnableFlag = !0, n.mActionEnableFlag = !0, 
            n._setErrorClassName('BotComponent'), n;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getVersion = function() {
            return "0.5.1.0040 vom 11.10.2018 (ALPHA)";
        }, e.prototype.getServerVersion = function() {
            return this.mDialog ? this.mDialog.getServerVersion() : '';
        }, e.prototype.init = function(e) {
            return this.isInit() ? (this.isErrorOutput() && console.log('BotComponent.init: bereits initialisiert'), 
            0) : 0 !== t.prototype.init.call(this, e) ? -1 : (this.mAudioPlayer = this.findPlugin($), 
            this.mSpeak = this.findPlugin(ut), this.mListen = this.findPlugin(Et), this.mAction = this.findPlugin(n), 
            this.mDialog = this.findPlugin(It), this.mDialog ? 0 : (this._error('init', 'keine DialogComponent vorhanden'), 
            this._clearInit(), -1));
        }, e.prototype.done = function() {
            return this.isActive() && this.stopDialog(), this.mAudioPlayer = null, this.mSpeak = null, 
            this.mListen = null, this.mAction = null, this.mDialog = null, this.mSpeakEnableFlag = !0, 
            this.mListenEnableFlag = !0, this.mActionEnableFlag = !0, t.prototype.done.call(this);
        }, e.prototype.reset = function(t) {
            return this.isInit() ? (this.isActive() && this.stopDialog(), this.setActiveOn(), 
            this.mSpeakEnableFlag = !0, this.mListenEnableFlag = !0, this.mActionEnableFlag = !0, 
            this.mDialog ? this.mDialog.reset(t) : 0) : (this._error('reset', 'Komponente nicht initialisiert'), 
            -1);
        }, e.prototype.isActive = function() {
            return !!this.mDialog && t.prototype.isActive.call(this);
        }, e.prototype.connect = function() {
            return 0;
        }, e.prototype.isConnect = function() {
            return !1;
        }, e.prototype.getNetType = function() {
            return 'undefined';
        }, e.prototype.addDialogSetEvent = function(t, e) {
            return this.addEventListener(t, I, e);
        }, e.prototype.addDialogParseEvent = function(t, e) {
            return this.addEventListener(t, B, e);
        }, e.prototype.addDialogStartEvent = function(t, e) {
            return this.addEventListener(t, M, e);
        }, e.prototype.addDialogStopEvent = function(t, e) {
            return this.addEventListener(t, W, e);
        }, e.prototype.addDialogStateSetEvent = function(t, e) {
            return this.addEventListener(t, q, e);
        }, e.prototype.addDialogActionEvent = function(t, e) {
            return this.addEventListener(t, H, e);
        }, e.prototype.addDialogActionStopEvent = function(t, e) {
            return this.addEventListener(t, j, e);
        }, e.prototype.addDialogSpeakEvent = function(t, e) {
            return this.addEventListener(t, G, e);
        }, e.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, K, e);
        }, e.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, X, e);
        }, e.prototype.addSpeakStartEvent = function(t, e) {
            return this.addEventListener(t, P, e);
        }, e.prototype.addSpeakStopEvent = function(t, e) {
            return this.addEventListener(t, O, e);
        }, e.prototype.addErrorEvent = function(t, e) {
            return this.addEventListener(t, b, e);
        }, e.prototype.removeDialogSetEvent = function(t) {
            return this.removeEventListener(t, I);
        }, e.prototype.removeDialogParseEvent = function(t) {
            return this.removeEventListener(t, B);
        }, e.prototype.removeDialogStartEvent = function(t) {
            return this.removeEventListener(t, M);
        }, e.prototype.removeDialogStopEvent = function(t) {
            return this.removeEventListener(t, W);
        }, e.prototype.removeDialogStateSetEvent = function(t) {
            return this.removeEventListener(t, q);
        }, e.prototype.removeDialogActionEvent = function(t) {
            return this.removeEventListener(t, H);
        }, e.prototype.removeDialogActionStopEvent = function(t) {
            return this.removeEventListener(t, j);
        }, e.prototype.removeDialogSpeakEvent = function(t) {
            return this.removeEventListener(t, G);
        }, e.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.removeEventListener(t, K);
        }, e.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.removeEventListener(t, X);
        }, e.prototype.removeSpeakStartEvent = function(t) {
            return this.removeEventListener(t, P);
        }, e.prototype.removeSpeakStopEvent = function(t) {
            return this.removeEventListener(t, O);
        }, e.prototype.removeErrorEvent = function(t) {
            return this.removeEventListener(t, b);
        }, e.prototype.removeAllEvent = function(t) {
            return this.mDialog && this.mDialog.removeAllEvent(t), this.removeSpeakStartEvent(t), 
            this.removeSpeakStopEvent(t), this.removeErrorEvent(t), 0;
        }, e.prototype._dialogSpeak = function(t) {
            return this.isActive() && this.isSpeak() ? (this.mSpeak.setSpeakText(t.text), this.mSpeak.setAudioFileName(t.id), 
            this.mSpeak.startSpeak()) : 0;
        }, e.prototype._dialogSpeakStop = function() {
            return this.isActive() && this.isSpeak() ? this.mSpeak.stopSpeak() : 0;
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
            return this.isActive() && this.isAction() ? this.mAction.stopAction() : 0;
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
        }, e.prototype.isDialogRunning = function() {
            return this.mDialog ? this.mDialog.isDialogRunning() : (this._error('isDialogRunning', 'keine Dialog-Komponente vorhanden'), 
            !1);
        }, e.prototype.toggleDialog = function() {
            return this.isActive() ? this.mDialog.toggleDialog() : (this._error('toggleDialog', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.startDialog = function() {
            return this.isActive() ? this.mDialog.startDialog() : (this._error('startDialog', 'Komponente ist nicht aktiviert'), 
            -1);
        }, e.prototype.stopDialog = function() {
            return this.isActive() ? this.mDialog.stopDialog() : (this._error('stopDialog', 'Komponente ist nicht aktiviert'), 
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
    }(V), Ce = function(t) {
        function e() {
            return t.call(this, 'BotComponentFactory') || this;
        }
        return s(e, t), e.prototype.getType = function() {
            return "Bot";
        }, e.prototype.getName = function() {
            return "BotComponentFactory";
        }, e.prototype._newPlugin = function(t, e) {
            return new Le(e);
        }, e.prototype.create = function(t, e) {
            void 0 === e && (e = !0);
            var n = t || ke;
            try {
                return this._newPlugin(n, e);
            } catch (t) {
                return this._exception('create', t), null;
            }
        }, e;
    }(v), be = function(t) {
        function n() {
            var e = t.call(this) || this;
            return e.mBotComponent = null, e._setErrorClassName('BotComponentBuilder'), e;
        }
        return s(n, t), n.prototype.getType = function() {
            return "Bot";
        }, n.prototype.getName = function() {
            return "BotComponentBuilder";
        }, n.prototype.build = function() {
            if (this.mBotComponent) return this.mBotComponent;
            try {
                var t = this._buildComponent(), n = this._getComponent(It, "DialogComponentBuilder", pe), o = this._getComponent(e, "ActionComponentBuilder", J), i = this._getComponent(vt, "ListenComponentBuilder", xt), r = this._getComponent(ut, "SpeakComponentBuilder", yt), u = this._getPlugin($, "AudioPlayerFactory", ot);
                return 0 !== this._binder(t, n, o, i, r, u) ? (this._error('build', 'Komponenten nicht verbunden'), 
                null) : t;
            } catch (t) {
                return this._exception('build', t), null;
            }
        }, n.prototype._buildComponent = function() {
            return this.mBotComponent || (this.mBotComponent = this._getPlugin(ke, "BotComponentFactory", Ce)), 
            this.mBotComponent;
        }, n.prototype._binder = function(t, e, n, o, i, r) {
            return t && e && n && o && i && r ? 0 !== t.insertPlugin(r.getName(), r) ? -1 : 0 !== t.insertPlugin(i.getName(), i) ? -1 : 0 !== t.insertPlugin(o.getName(), o) ? -1 : 0 !== t.insertPlugin(n.getName(), n) ? -1 : 0 !== t.insertPlugin(e.getName(), e) ? -1 : 0 !== e.addDialogActionEvent(ke, t.getDialogActionFunc()) ? -1 : 0 !== e.addDialogActionStopEvent(ke, t.getDialogActionStopFunc()) ? -1 : 0 !== e.addDialogSpeakEvent(ke, t.getDialogSpeakFunc()) ? -1 : 0 !== e.addDialogSpeakStopEvent(ke, t.getDialogSpeakStopFunc()) ? -1 : 0 : -1;
        }, n;
    }(f), Pe = function() {
        function t(t) {
            if (this.mComponent = null, 0 !== this._init(t)) throw new Error('Bot nicht initialisiert');
        }
        return t.prototype._init = function(t) {
            var e = !0;
            t && 'boolean' == typeof t.errorOutputFlag && (e = t.errorOutputFlag);
            try {
                var n = "BotComponentBuilder";
                t && t.botBuilder && (n = t.botBuilder);
                var o = null;
                if ("BotComponentBuilder" === n && (o = c.get("BotComponentBuilder", be)), !o) return e && console.log('Bot._init: BotBuilder nicht vorhanden'), 
                -1;
                if (this.mComponent = o.build(), !this.mComponent) return e && console.log('Bot._init: keine BotComponent erzeugt'), 
                -1;
                if (!this.mComponent.isInit()) {
                    if (0 !== this.mComponent.init(t)) return e && console.log('Bot._init: BotComponent nicht initialisiert'), 
                    -1;
                    this.mComponent.isErrorOutput() && console.log('Bot-API Version: ', "0.5.1.0040 vom 11.10.2018 (ALPHA)");
                }
                return 0;
            } catch (t) {
                return e && console.log('Bot._init: Exception ', t.message), -1;
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
            return this.mComponent.getServerVersion();
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
        }, t.prototype.addDialogSetEvent = function(t, e) {
            return this.mComponent.addDialogSetEvent(t, e);
        }, t.prototype.addDialogParseEvent = function(t, e) {
            return this.mComponent.addDialogParseEvent(t, e);
        }, t.prototype.addDialogStartEvent = function(t, e) {
            return this.mComponent.addDialogStartEvent(t, e);
        }, t.prototype.addDialogStopEvent = function(t, e) {
            return this.mComponent.addDialogStopEvent(t, e);
        }, t.prototype.addDialogStateSetEvent = function(t, e) {
            return this.mComponent.addDialogStateSetEvent(t, e);
        }, t.prototype.addDialogActionEvent = function(t, e) {
            return this.mComponent.addDialogActionEvent(t, e);
        }, t.prototype.addDialogActionStopEvent = function(t, e) {
            return this.mComponent.addDialogActionStopEvent(t, e);
        }, t.prototype.addDialogSpeakEvent = function(t, e) {
            return this.mComponent.addDialogSpeakEvent(t, e);
        }, t.prototype.addDialogSpeakStartEvent = function(t, e) {
            return this.mComponent.addDialogSpeakStartEvent(t, e);
        }, t.prototype.addDialogSpeakStopEvent = function(t, e) {
            return this.mComponent.addDialogSpeakStopEvent(t, e);
        }, t.prototype.addSpeakStartEvent = function(t, e) {
            return this.mComponent.addSpeakStartEvent(t, e);
        }, t.prototype.addSpeakStopEvent = function(t, e) {
            return this.mComponent.addSpeakStopEvent(t, e);
        }, t.prototype.addErrorEvent = function(t, e) {
            return this.mComponent.addErrorEvent(t, e);
        }, t.prototype.removeDialogSetEvent = function(t) {
            return this.mComponent.removeDialogSetEvent(t);
        }, t.prototype.removeDialogParseEvent = function(t) {
            return this.mComponent.removeDialogParseEvent(t);
        }, t.prototype.removeDialogStartEvent = function(t) {
            return this.mComponent.removeDialogStartEvent(t);
        }, t.prototype.removeDialogStopEvent = function(t) {
            return this.mComponent.removeDialogStopEvent(t);
        }, t.prototype.removeDialogStateSetEvent = function(t) {
            return this.mComponent.removeDialogStateSetEvent(t);
        }, t.prototype.removeDialogActionEvent = function(t) {
            return this.mComponent.removeDialogActionEvent(t);
        }, t.prototype.removeDialogActionStopEvent = function(t) {
            return this.mComponent.removeDialogActionStopEvent(t);
        }, t.prototype.removeDialogSpeakEvent = function(t) {
            return this.mComponent.removeDialogSpeakEvent(t);
        }, t.prototype.removeDialogSpeakStartEvent = function(t) {
            return this.mComponent.removeDialogSpeakStartEvent(t);
        }, t.prototype.removeDialogSpeakStopEvent = function(t) {
            return this.mComponent.removeDialogSpeakStopEvent(t);
        }, t.prototype.removeSpeakStartEvent = function(t) {
            return this.mComponent.removeSpeakStartEvent(t);
        }, t.prototype.removeSpeakStopEvent = function(t) {
            return this.mComponent.removeSpeakStopEvent(t);
        }, t.prototype.removeErrorEvent = function(t) {
            return this.mComponent.removeErrorEvent(t);
        }, t.prototype.removeAllEvent = function(t) {
            return this.mComponent.removeAllEvent(t);
        }, t.prototype.isSpeak = function() {
            return this.mComponent.isSpeak();
        }, t.prototype.setSpeakOn = function() {
            return this.mComponent.setSpeakOn();
        }, t.prototype.setSpeakOff = function() {
            return this.mComponent.setSpeakOff();
        }, t.prototype.getSpeak = function() {
            return this.mComponent.getSpeak();
        }, t.prototype.isListen = function() {
            return this.mComponent.isListen();
        }, t.prototype.setListenOn = function() {
            return this.mComponent.setListenOn();
        }, t.prototype.setListenOff = function() {
            return this.mComponent.setListenOff();
        }, t.prototype.getListen = function() {
            return this.mComponent.getListen();
        }, t.prototype.isAction = function() {
            return this.mComponent.isAction();
        }, t.prototype.setActionOn = function() {
            return this.mComponent.setActionOn();
        }, t.prototype.setActionOff = function() {
            return this.mComponent.setActionOff();
        }, t.prototype.getAction = function() {
            return this.mComponent.getAction();
        }, t.prototype.parseSpeechDefFile = function(t) {
            return this.mComponent.parseSpeechDefFile(t);
        }, t.prototype.parseSpeechDefData = function(t) {
            return this.mComponent.parseSpeechDefData(t);
        }, t.prototype.clearDialog = function() {
            return this.mComponent.clearDialog();
        }, t.prototype.setDialog = function(t) {
            return this.mComponent.setDialog(t);
        }, t.prototype.getDialog = function() {
            return this.mComponent.getDialog();
        }, t.prototype.isDialogRunning = function() {
            return this.mComponent.isDialogRunning();
        }, t.prototype.toggleDialog = function() {
            return this.mComponent.toggleDialog();
        }, t.prototype.startDialog = function() {
            return this.mComponent.startDialog();
        }, t.prototype.stopDialog = function() {
            return this.mComponent.stopDialog();
        }, t.prototype.setDialogFilePath = function(t) {
            return this.mComponent.setDialogFilePath(t);
        }, t.prototype.getDialogFilePath = function() {
            return this.mComponent.getDialogFilePath();
        }, t.prototype.setDialogFileName = function(t) {
            return this.mComponent.setDialogFileName(t);
        }, t.prototype.getDialogFileName = function() {
            return this.mComponent.getDialogFileName();
        }, t.prototype.loadDialogFile = function(t) {
            return this.mComponent.loadDialogFile(t);
        }, t.prototype.writeDialogData = function(t) {
            return this.mComponent.writeDialogData(t);
        }, t.prototype.skipNextSpeak = function() {
            return this.mComponent.skipNextSpeak();
        }, t.prototype.setDialogState = function(t, e) {
            return this.mComponent.setDialogState(t, e);
        }, t.prototype.getDialogState = function() {
            return this.mComponent.getDialogState();
        }, t.prototype.setDialogStateContext = function(t) {
            return this.mComponent.setDialogStateContext(t);
        }, t.prototype.clearContext = function() {
            return this.mComponent.clearContext();
        }, t.prototype.addContextElement = function(t, e) {
            return this.mComponent.addContextElement(t, e);
        }, t.prototype.removeContextElement = function(t, e) {
            return this.mComponent.removeContextElement(t, e);
        }, t;
    }(), Oe = function() {
        function t() {}
        return t.create = function(t, e) {
            try {
                return new Pe(e);
            } catch (t) {
                return console.log('BotFactory.create: Exception', t.message), null;
            }
        }, t;
    }();
    t.SPEECH_API_VERSION = "0.5.1.0040 vom 11.10.2018 (ALPHA)", t.ACTION_TYPE_NAME = "Action", 
    t.ACTION_COMPONENT_NAME = e, t.ActionFactory = Z, t.AUDIO_PLUGIN_NAME = 'AudioPlugin', 
    t.AudioFactory = rt, t.SPEAK_TYPE_NAME = "Speak", t.SPEAK_COMPONENT_NAME = ut, t.SPEAK_DE_LANGUAGE = "de", 
    t.SPEAK_EN_LANGUAGE = 'en', t.SpeakFactory = St, t.LISTEN_TYPE_NAME = "Listen", 
    t.LISTEN_COMPONENT_NAME = vt, t.ListenFactory = Tt, t.DIALOG_TYPE_NAME = "Dialog", 
    t.DIALOG_COMPONENT_NAME = It, t.DIALOG_MAIN_NAME = Ht, t.DIALOG_ROOTSTATE_NAME = jt, 
    t.DialogFactory = Ae, t.BOT_TYPE_NAME = "Bot", t.BOT_COMPONENT_NAME = ke, t.BotFactory = Oe, 
    Object.defineProperty(t, '__esModule', {
        value: !0
    });
});
