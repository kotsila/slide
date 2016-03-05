/*!
 * VERSION: 1.11.1
 * DATE: 2013-10-29
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

/*!
document.onmousedown=disableclick;
status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}
 **/




$(document).ready(function(){
    $('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
    
        $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
            
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';

            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    });    
});


function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(e){mejs.YouTubeApi.flashReady(e)}/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.9
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
 function FastClick(e) {
    "use strict";
    var t, i = this;
    if (this.trackingClick = !1, this.trackingClickStart = 0, this.targetElement = null, this.touchStartX = 0, this.touchStartY = 0, this.lastTouchIdentifier = 0, this.touchBoundary = 10, this.layer = e, !e || !e.nodeType) throw new TypeError("Layer must be a document node");
    this.onClick = function() {
        return FastClick.prototype.onClick.apply(i, arguments)
    }, this.onMouse = function() {
        return FastClick.prototype.onMouse.apply(i, arguments)
    }, this.onTouchStart = function() {
        return FastClick.prototype.onTouchStart.apply(i, arguments)
    }, this.onTouchEnd = function() {
        return FastClick.prototype.onTouchEnd.apply(i, arguments)
    }, this.onTouchCancel = function() {
        return FastClick.prototype.onTouchCancel.apply(i, arguments)
    }, FastClick.notNeeded(e) || (this.deviceIsAndroid && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)), e.addEventListener("click", this.onClick, !0), e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchend", this.onTouchEnd, !1), e.addEventListener("touchcancel", this.onTouchCancel, !1), Event.prototype.stopImmediatePropagation || (e.removeEventListener = function(t, i, n) {
        var o = Node.prototype.removeEventListener;
        "click" === t ? o.call(e, t, i.hijacked || i, n) : o.call(e, t, i, n)
    }, e.addEventListener = function(t, i, n) {
        var o = Node.prototype.addEventListener;
        "click" === t ? o.call(e, t, i.hijacked || (i.hijacked = function(e) {
            e.propagationStopped || i(e)
        }), n) : o.call(e, t, i, n)
    }), "function" == typeof e.onclick && (t = e.onclick, e.addEventListener("click", function(e) {
        t(e)
    }, !1), e.onclick = null))
}

function isMobile() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
}(window._gsQueue || (window._gsQueue = [])).push(function() {
        "use strict";
        window._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = [].slice,
                    o = function(e, t, n) {
                        i.call(this, e, t, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                    },
                    s = 1e-10,
                    a = i._internals.isSelector,
                    r = i._internals.isArray,
                    l = o.prototype = i.to({}, .1, {}),
                    c = [];
                o.version = "1.11.1", l.constructor = o, l.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.ticker = i.ticker, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(e, t) {
                    var n, o = this.ratio;
                    t && this.timeline && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in e) this.vars[n] = e[n];
                    if (this._initted)
                        if (t) this._initted = !1;
                        else if (this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var s = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, r = 1 / (1 - o), l = this._firstPT; l;) a = l.s + l.c, l.c *= r, l.s = a - l.c, l = l._next
                    }
                    return this
                }, l.render = function(e, t, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, o, a, r, l, d, u, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        v = this._duration;
                    if (e >= p ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, o = "onComplete"), 0 === v && (h = this._rawPrevTime, (0 === e || 0 > h || h === s) && h !== e && (i = !0, h > s && (o = "onReverseComplete")), this._rawPrevTime = h = !t || e ? e : s)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && this._rawPrevTime > s) && (o = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === v && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = h = !t || e ? e : s)) : this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (r = v + this._repeatDelay, this._cycle = this._totalTime / r >> 0, 0 !== this._cycle && this._cycle === this._totalTime / r && this._cycle--, this._time = this._totalTime - this._cycle * r, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, d = this._easeType, u = this._easePower, (1 === d || 3 === d && l >= .5) && (l = 1 - l), 3 === d && (l *= 2), 1 === u ? l *= l : 2 === u ? l *= l * l : 3 === u ? l *= l * l * l : 4 === u && (l *= l * l * l * l), this.ratio = 1 === d ? 1 - l : 2 === d ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), f === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / v) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== f && e >= 0 && (this._active = !0), 0 === m && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || c))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || c)), this._cycle !== g && (t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || c)), o && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || c), 0 === v && this._rawPrevTime === s && h !== s && (this._rawPrevTime = 0)))
                }, o.to = function(e, t, i) {
                    return new o(e, t, i)
                }, o.from = function(e, t, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(e, t, i)
                }, o.fromTo = function(e, t, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new o(e, t, n)
                }, o.staggerTo = o.allTo = function(e, t, s, l, d, u, h) {
                    l = l || 0;
                    var p, f, m, g, v = s.delay || 0,
                        T = [],
                        y = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), d.apply(h || this, u || c)
                        };
                    for (r(e) || ("string" == typeof e && (e = i.selector(e) || e), a(e) && (e = n.call(e, 0))), p = e.length, m = 0; p > m; m++) {
                        f = {};
                        for (g in s) f[g] = s[g];
                        f.delay = v, m === p - 1 && d && (f.onComplete = y), T[m] = new o(e[m], t, f), v += l
                    }
                    return T
                }, o.staggerFrom = o.allFrom = function(e, t, i, n, s, a, r) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(e, t, i, n, s, a, r)
                }, o.staggerFromTo = o.allFromTo = function(e, t, i, n, s, a, r, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, o.staggerTo(e, t, n, s, a, r, l)
                }, o.delayedCall = function(e, t, i, n, s) {
                    return new o(t, 0, {
                        delay: e,
                        onComplete: t,
                        onCompleteParams: i,
                        onCompleteScope: n,
                        onReverseComplete: t,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: n,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, o.set = function(e, t) {
                    return new o(e, 0, t)
                }, o.isTweening = function(e) {
                    return i.getTweensOf(e, !0).length > 0
                };
                var d = function(e, t) {
                        for (var n = [], o = 0, s = e._first; s;) s instanceof i ? n[o++] = s : (t && (n[o++] = s), n = n.concat(d(s, t)), o = n.length), s = s._next;
                        return n
                    },
                    u = o.getAllTweens = function(t) {
                        return d(e._rootTimeline, t).concat(d(e._rootFramesTimeline, t))
                    };
                o.killAll = function(e, i, n, o) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, a, r, l = u(0 != o),
                        c = l.length,
                        d = i && n && o;
                    for (r = 0; c > r; r++) a = l[r], (d || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && (e ? a.totalTime(a.totalDuration()) : a._enabled(!1, !1))
                }, o.killChildTweensOf = function(e, t) {
                    if (null != e) {
                        var s, l, c, d, u, h = i._tweenLookup;
                        if ("string" == typeof e && (e = i.selector(e) || e), a(e) && (e = n(e, 0)), r(e))
                            for (d = e.length; --d > -1;) o.killChildTweensOf(e[d], t);
                        else {
                            s = [];
                            for (c in h)
                                for (l = h[c].target.parentNode; l;) l === e && (s = s.concat(h[c].tweens)), l = l.parentNode;
                            for (u = s.length, d = 0; u > d; d++) t && s[d].totalTime(s[d].totalDuration()), s[d]._enabled(!1, !1)
                        }
                    }
                };
                var h = function(e, i, n, o) {
                    i = i !== !1, n = n !== !1, o = o !== !1;
                    for (var s, a, r = u(o), l = i && n && o, c = r.length; --c > -1;) a = r[c], (l || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(e)
                };
                return o.pauseAll = function(e, t, i) {
                    h(!0, e, t, i)
                }, o.resumeAll = function(e, t, i) {
                    h(!1, e, t, i)
                }, o.globalTimeScale = function(t) {
                    var n = e._rootTimeline,
                        o = i.ticker.time;
                    return arguments.length ? (t = t || s, n._startTime = o - (o - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, o = i.ticker.frame, n._startTime = o - (o - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
                }, l.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, l.duration = function(t) {
                    return arguments.length ? e.prototype.duration.call(this, t) : this._duration
                }, l.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, o
            }, !0), window._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
                var n = function(e) {
                        t.call(this, e), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, o = this.vars;
                        for (n in o) i = o[n], a(i) && -1 !== i.join("").indexOf("{self}") && (o[n] = this._swapSelfInParams(i));
                        a(o.tweens) && this.add(o.tweens, 0, o.align, o.stagger)
                    },
                    o = 1e-10,
                    s = i._internals.isSelector,
                    a = i._internals.isArray,
                    r = [],
                    l = function(e) {
                        var t, i = {};
                        for (t in e) i[t] = e[t];
                        return i
                    },
                    c = function(e, t, i, n) {
                        e._timeline.pause(e._startTime), t && t.apply(n || e._timeline, i || r)
                    },
                    d = r.slice,
                    u = n.prototype = new t;
                return n.version = "1.11.0", u.constructor = n, u.kill()._gc = !1, u.to = function(e, t, n, o) {
                    return t ? this.add(new i(e, t, n), o) : this.set(e, n, o)
                }, u.from = function(e, t, n, o) {
                    return this.add(i.from(e, t, n), o)
                }, u.fromTo = function(e, t, n, o, s) {
                    return t ? this.add(i.fromTo(e, t, n, o), s) : this.set(e, o, s)
                }, u.staggerTo = function(e, t, o, a, r, c, u, h) {
                    var p, f = new n({
                        onComplete: c,
                        onCompleteParams: u,
                        onCompleteScope: h
                    });
                    for ("string" == typeof e && (e = i.selector(e) || e), s(e) && (e = d.call(e, 0)), a = a || 0, p = 0; e.length > p; p++) o.startAt && (o.startAt = l(o.startAt)), f.to(e[p], t, l(o), p * a);
                    return this.add(f, r)
                }, u.staggerFrom = function(e, t, i, n, o, s, a, r) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, o, s, a, r)
                }, u.staggerFromTo = function(e, t, i, n, o, s, a, r, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, o, s, a, r, l)
                }, u.call = function(e, t, n, o) {
                    return this.add(i.delayedCall(0, e, t, n), o)
                }, u.set = function(e, t, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
                }, n.exportRoot = function(e, t) {
                    e = e || {}, null == e.smoothChildTiming && (e.smoothChildTiming = !0);
                    var o, s, a = new n(e),
                        r = a._timeline;
                    for (null == t && (t = !0), r._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = r._time, o = r._first; o;) s = o._next, t && o instanceof i && o.target === o.vars.onComplete || a.add(o, o._startTime - o._delay), o = s;
                    return r.add(a, 0), a
                }, u.add = function(o, s, r, l) {
                    var c, d, u, h, p, f;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, o)), !(o instanceof e)) {
                        if (o instanceof Array || o && o.push && a(o)) {
                            for (r = r || "normal", l = l || 0, c = s, d = o.length, u = 0; d > u; u++) a(h = o[u]) && (h = new n({
                                tweens: h
                            })), this.add(h, c), "string" != typeof h && "function" != typeof h && ("sequence" === r ? c = h._startTime + h.totalDuration() / h._timeScale : "start" === r && (h._startTime -= h.delay())), c += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof o) return this.addLabel(o, s);
                        if ("function" != typeof o) throw "Cannot add " + o + " into the timeline; it is not a tween, timeline, function, or string.";
                        o = i.delayedCall(0, o)
                    }
                    if (t.prototype.add.call(this, o, s), this._gc && !this._paused && this._duration < this.duration())
                        for (p = this, f = p.rawTime() > o._startTime; p._gc && p._timeline;) p._timeline.smoothChildTiming && f ? p.totalTime(p._totalTime, !0) : p._enabled(!0, !1), p = p._timeline;
                    return this
                }, u.remove = function(t) {
                    if (t instanceof e) return this._remove(t, !1);
                    if (t instanceof Array || t && t.push && a(t)) {
                        for (var i = t.length; --i > -1;) this.remove(t[i]);
                        return this
                    }
                    return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
                }, u._remove = function(e, i) {
                    t.prototype._remove.call(this, e, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = 0, this
                }, u.append = function(e, t) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
                }, u.insert = u.insertMultiple = function(e, t, i, n) {
                    return this.add(e, t || 0, i, n)
                }, u.appendMultiple = function(e, t, i, n) {
                    return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
                }, u.addLabel = function(e, t) {
                    return this._labels[e] = this._parseTimeOrLabel(t), this
                }, u.addPause = function(e, t, i, n) {
                    return this.call(c, ["{self}", t, i, n], this, e)
                }, u.removeLabel = function(e) {
                    return delete this._labels[e], this
                }, u.getLabelTime = function(e) {
                    return null != this._labels[e] ? this._labels[e] : -1
                }, u._parseTimeOrLabel = function(t, i, n, o) {
                    var s;
                    if (o instanceof e && o.timeline === this) this.remove(o);
                    else if (o && (o instanceof Array || o.push && a(o)))
                        for (s = o.length; --s > -1;) o[s] instanceof e && o[s].timeline === this && this.remove(o[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
                    else {
                        if (s = t.indexOf("="), -1 === s) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
                        i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(t) + i
                }, u.seek = function(e, t) {
                    return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), t !== !1)
                }, u.stop = function() {
                    return this.paused(!0)
                }, u.gotoAndPlay = function(e, t) {
                    return this.play(e, t)
                }, u.gotoAndStop = function(e, t) {
                    return this.pause(e, t)
                }, u.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, a, l, c, d = this._dirty ? this.totalDuration() : this._totalDuration,
                        u = this._time,
                        h = this._startTime,
                        p = this._timeScale,
                        f = this._paused;
                    if (e >= d ? (this._totalTime = this._time = d, this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", 0 === this._duration && (0 === e || 0 > this._rawPrevTime || this._rawPrevTime === o) && this._rawPrevTime !== e && this._first && (c = !0, this._rawPrevTime > o && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : o, e = d + 1e-6) : 1e-7 > e ? (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && (this._rawPrevTime > o || 0 > e && this._rawPrevTime >= 0)) && (l = "onReverseComplete", s = this._reversed), 0 > e ? (this._active = !1, 0 === this._duration && this._rawPrevTime >= 0 && this._first && (c = !0), this._rawPrevTime = e) : (this._rawPrevTime = this._duration || !t || e ? e : o, e = 0, this._initted || (c = !0))) : this._totalTime = this._time = this._rawPrevTime = e, this._time !== u && this._first || i || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && e > 0 && (this._active = !0), 0 === u && this.vars.onStart && 0 !== this._time && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || r)), this._time >= u)
                            for (n = this._first; n && (a = n._next, !this._paused || f);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, !this._paused || f);)(n._active || u >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a;
                        this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || r)), l && (this._gc || (h === this._startTime || p !== this._timeScale) && (0 === this._time || d >= this.totalDuration()) && (s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || r)))
                    }
                }, u._hasPausedChild = function() {
                    for (var e = this._first; e;) {
                        if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
                        e = e._next
                    }
                    return !1
                }, u.getChildren = function(e, t, n, o) {
                    o = o || -9999999999;
                    for (var s = [], a = this._first, r = 0; a;) o > a._startTime || (a instanceof i ? t !== !1 && (s[r++] = a) : (n !== !1 && (s[r++] = a), e !== !1 && (s = s.concat(a.getChildren(!0, t, n)), r = s.length))), a = a._next;
                    return s
                }, u.getTweensOf = function(e, t) {
                    for (var n = i.getTweensOf(e), o = n.length, s = [], a = 0; --o > -1;)(n[o].timeline === this || t && this._contains(n[o])) && (s[a++] = n[o]);
                    return s
                }, u._contains = function(e) {
                    for (var t = e.timeline; t;) {
                        if (t === this) return !0;
                        t = t.timeline
                    }
                    return !1
                }, u.shiftChildren = function(e, t, i) {
                    i = i || 0;
                    for (var n, o = this._first, s = this._labels; o;) o._startTime >= i && (o._startTime += e), o = o._next;
                    if (t)
                        for (n in s) s[n] >= i && (s[n] += e);
                    return this._uncache(!0)
                }, u._kill = function(e, t) {
                    if (!e && !t) return this._enabled(!1, !1);
                    for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, o = !1; --n > -1;) i[n]._kill(e, t) && (o = !0);
                    return o
                }, u.clear = function(e) {
                    var t = this.getChildren(!1, !0, !0),
                        i = t.length;
                    for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
                    return e !== !1 && (this._labels = {}), this._uncache(!0)
                }, u.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return this
                }, u._enabled = function(e, i) {
                    if (e === this._gc)
                        for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
                    return t.prototype._enabled.call(this, e, i)
                }, u.duration = function(e) {
                    return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
                }, u.totalDuration = function(e) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var t, i, n = 0, o = this._last, s = 999999999999; o;) t = o._prev, o._dirty && o.totalDuration(), o._startTime > s && this._sortChildren && !o._paused ? this.add(o, o._startTime - o._delay) : s = o._startTime, 0 > o._startTime && !o._paused && (n -= o._startTime, this._timeline.smoothChildTiming && (this._startTime += o._startTime / this._timeScale), this.shiftChildren(-o._startTime, !1, -9999999999), s = 0), i = o._startTime + o._totalDuration / o._timeScale, i > n && (n = i), o = t;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== e && this.timeScale(this._totalDuration / e), this
                }, u.usesFrames = function() {
                    for (var t = this._timeline; t._timeline;) t = t._timeline;
                    return t === e._rootFramesTimeline
                }, u.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), window._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
                var n = function(t) {
                        e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    o = 1e-10,
                    s = [],
                    a = new i(null, null, 1, 0),
                    r = n.prototype = new e;
                return r.constructor = n, r.kill()._gc = !1, n.version = "1.11.0", r.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
                }, r.addCallback = function(e, i, n, o) {
                    return this.add(t.delayedCall(0, e, n, o), i)
                }, r.removeCallback = function(e, t) {
                    if (e)
                        if (null == t) this._kill(null, e);
                        else
                            for (var i = this.getTweensOf(e, !1), n = i.length, o = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === o && i[n]._enabled(!1, !1);
                    return this
                }, r.tweenTo = function(e, i) {
                    i = i || {};
                    var n, o, r = {
                        ease: a,
                        overwrite: 2,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (n in i) r[n] = i[n];
                    return r.time = this._parseTimeOrLabel(e), o = new t(this, Math.abs(Number(r.time) - this._time) / this._timeScale || .001, r), r.onStart = function() {
                        o.target.paused(!0), o.vars.time !== o.target.time() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || o, i.onStartParams || s)
                    }, o
                }, r.tweenFromTo = function(e, t, i) {
                    i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [e],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(t, i);
                    return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
                }, r.render = function(e, t, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, a, r, l, c, d, u = this._dirty ? this.totalDuration() : this._totalDuration,
                        h = this._duration,
                        p = this._time,
                        f = this._totalTime,
                        m = this._startTime,
                        g = this._timeScale,
                        v = this._rawPrevTime,
                        T = this._paused,
                        y = this._cycle;
                    if (e >= u ? (this._locked || (this._totalTime = u, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, l = "onComplete", 0 === this._duration && (0 === e || 0 > v || v === o) && v !== e && this._first && (c = !0, v > o && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e ? e : o, this._yoyo && 0 !== (1 & this._cycle) ? this._time = e = 0 : (this._time = h, e = h + 1e-6)) : 1e-7 > e ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === h && (v > o || 0 > e && v >= 0) && !this._locked) && (l = "onReverseComplete", a = this._reversed), 0 > e ? (this._active = !1, 0 === h && v >= 0 && this._first && (c = !0), this._rawPrevTime = e) : (this._rawPrevTime = h || !t || e ? e : o, e = 0, this._initted || (c = !0))) : (0 === h && 0 > v && (c = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (d = h + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 !== (1 & this._cycle) && (this._time = h - this._time), this._time > h ? (this._time = h, e = h + 1e-6) : 0 > this._time ? this._time = e = 0 : e = this._time))), this._cycle !== y && !this._locked) {
                        var w = this._yoyo && 0 !== (1 & y),
                            _ = w === (this._yoyo && 0 !== (1 & this._cycle)),
                            b = this._totalTime,
                            P = this._cycle,
                            x = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = y * h, y > this._cycle ? w = !w : this._totalTime += h, this._time = p, this._rawPrevTime = 0 === h ? v - 1e-5 : v, this._cycle = y, this._locked = !0, p = w ? 0 : h, this.render(p, t, 0 === h), t || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || s), _ && (p = w ? h + 1e-6 : -1e-6, this.render(p, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = C, this._totalTime = b, this._cycle = P, this._rawPrevTime = x
                    }
                    if (!(this._time !== p && this._first || i || c)) return void(f !== this._totalTime && this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && 0 !== this._totalTime && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || s)), this._time >= p)
                        for (n = this._first; n && (r = n._next, !this._paused || T);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r;
                    else
                        for (n = this._last; n && (r = n._prev, !this._paused || T);)(n._active || p >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = r;
                    this._onUpdate && (t || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || s)), l && (this._locked || this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || u >= this.totalDuration()) && (a && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[l] && this.vars[l].apply(this.vars[l + "Scope"] || this, this.vars[l + "Params"] || s)))
                }, r.getActive = function(e, t, i) {
                    null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
                    var n, o, s = [],
                        a = this.getChildren(e, t, i),
                        r = 0,
                        l = a.length;
                    for (n = 0; l > n; n++) o = a[n], o.isActive() && (s[r++] = o);
                    return s
                }, r.getLabelAfter = function(e) {
                    e || 0 !== e && (e = this._time);
                    var t, i = this.getLabelsArray(),
                        n = i.length;
                    for (t = 0; n > t; t++)
                        if (i[t].time > e) return i[t].name;
                    return null
                }, r.getLabelBefore = function(e) {
                    null == e && (e = this._time);
                    for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
                        if (e > t[i].time) return t[i].name;
                    return null
                }, r.getLabelsArray = function() {
                    var e, t = [],
                        i = 0;
                    for (e in this._labels) t[i++] = {
                        time: this._labels[e],
                        name: e
                    };
                    return t.sort(function(e, t) {
                        return e.time - t.time
                    }), t
                }, r.progress = function(e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, r.totalProgress = function(e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * e, !1) : this._totalTime / this.totalDuration()
                }, r.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, r.time = function(e, t) {
                    return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
                }, r.repeat = function(e) {
                    return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
                }, r.repeatDelay = function(e) {
                    return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
                }, r.yoyo = function(e) {
                    return arguments.length ? (this._yoyo = e, this) : this._yoyo
                }, r.currentLabel = function(e) {
                    return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var e = 180 / Math.PI,
                    t = [],
                    i = [],
                    n = [],
                    o = {},
                    s = function(e, t, i, n) {
                        this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    r = function(e, t, i, n) {
                        var o = {
                                a: e
                            },
                            s = {},
                            a = {},
                            r = {
                                c: n
                            },
                            l = (e + t) / 2,
                            c = (t + i) / 2,
                            d = (i + n) / 2,
                            u = (l + c) / 2,
                            h = (c + d) / 2,
                            p = (h - u) / 8;
                        return o.b = l + (e - l) / 4, s.b = u + p, o.c = s.a = (o.b + s.b) / 2, s.c = a.a = (u + h) / 2, a.b = h - p, r.b = d + (n - d) / 4, a.c = r.a = (a.b + r.b) / 2, [o, s, a, r]
                    },
                    l = function(e, o, s, a, l) {
                        var c, d, u, h, p, f, m, g, v, T, y, w, _, b = e.length - 1,
                            P = 0,
                            x = e[0].a;
                        for (c = 0; b > c; c++) p = e[P], d = p.a, u = p.d, h = e[P + 1].d, l ? (y = t[c], w = i[c], _ = .25 * (w + y) * o / (a ? .5 : n[c] || .5), f = u - (u - d) * (a ? .5 * o : 0 !== y ? _ / y : 0), m = u + (h - u) * (a ? .5 * o : 0 !== w ? _ / w : 0), g = u - (f + ((m - f) * (3 * y / (y + w) + .5) / 4 || 0))) : (f = u - .5 * (u - d) * o, m = u + .5 * (h - u) * o, g = u - (f + m) / 2), f += g, m += g, p.c = v = f, p.b = 0 !== c ? x : x = p.a + .6 * (p.c - p.a), p.da = u - d, p.ca = v - d, p.ba = x - d, s ? (T = r(d, x, v, u), e.splice(P, 1, T[0], T[1], T[2], T[3]), P += 4) : P++, x = m;
                        p = e[P], p.b = x, p.c = x + .4 * (p.d - x), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = x - p.a, s && (T = r(p.a, x, p.c, p.d), e.splice(P, 1, T[0], T[1], T[2], T[3]))
                    },
                    c = function(e, n, o, a) {
                        var r, l, c, d, u, h, p = [];
                        if (a)
                            for (e = [a].concat(e), l = e.length; --l > -1;) "string" == typeof(h = e[l][n]) && "=" === h.charAt(1) && (e[l][n] = a[n] + Number(h.charAt(0) + h.substr(2)));
                        if (r = e.length - 2, 0 > r) return p[0] = new s(e[0][n], 0, 0, e[-1 > r ? 0 : 1][n]), p;
                        for (l = 0; r > l; l++) c = e[l][n], d = e[l + 1][n], p[l] = new s(c, 0, 0, d), o && (u = e[l + 2][n], t[l] = (t[l] || 0) + (d - c) * (d - c), i[l] = (i[l] || 0) + (u - d) * (u - d));
                        return p[l] = new s(e[l][n], 0, 0, e[l + 1][n]), p
                    },
                    d = function(e, s, r, d, u, h) {
                        var p, f, m, g, v, T, y, w, _ = {},
                            b = [],
                            P = h || e[0];
                        u = "string" == typeof u ? "," + u + "," : a, null == s && (s = 1);
                        for (f in e[0]) b.push(f);
                        if (e.length > 1) {
                            for (w = e[e.length - 1], y = !0, p = b.length; --p > -1;)
                                if (f = b[p], Math.abs(P[f] - w[f]) > .05) {
                                    y = !1;
                                    break
                                }
                            y && (e = e.concat(), h && e.unshift(h), e.push(e[1]), h = e[e.length - 3])
                        }
                        for (t.length = i.length = n.length = 0, p = b.length; --p > -1;) f = b[p], o[f] = -1 !== u.indexOf("," + f + ","), _[f] = c(e, f, o[f], h);
                        for (p = t.length; --p > -1;) t[p] = Math.sqrt(t[p]), i[p] = Math.sqrt(i[p]);
                        if (!d) {
                            for (p = b.length; --p > -1;)
                                if (o[f])
                                    for (m = _[b[p]], T = m.length - 1, g = 0; T > g; g++) v = m[g + 1].da / i[g] + m[g].da / t[g], n[g] = (n[g] || 0) + v * v;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = b.length, g = r ? 4 : 1; --p > -1;) f = b[p], m = _[f], l(m, s, r, d, o[f]), y && (m.splice(0, g), m.splice(m.length - g, g));
                        return _
                    },
                    u = function(e, t, i) {
                        t = t || "soft";
                        var n, o, a, r, l, c, d, u, h, p, f, m = {},
                            g = "cubic" === t ? 3 : 2,
                            v = "soft" === t,
                            T = [];
                        if (v && i && (e = [i].concat(e)), null == e || g + 1 > e.length) throw "invalid Bezier data";
                        for (h in e[0]) T.push(h);
                        for (c = T.length; --c > -1;) {
                            for (h = T[c], m[h] = l = [], p = 0, u = e.length, d = 0; u > d; d++) n = null == i ? e[d][h] : "string" == typeof(f = e[d][h]) && "=" === f.charAt(1) ? i[h] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && d > 1 && u - 1 > d && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
                            for (u = p - g + 1, p = 0, d = 0; u > d; d += g) n = l[d], o = l[d + 1], a = l[d + 2], r = 2 === g ? 0 : l[d + 3], l[p++] = f = 3 === g ? new s(n, o, a, r) : new s(n, (2 * o + n) / 3, (2 * o + a) / 3, a);
                            l.length = p
                        }
                        return m
                    },
                    h = function(e, t, i) {
                        for (var n, o, s, a, r, l, c, d, u, h, p, f = 1 / i, m = e.length; --m > -1;)
                            for (h = e[m], s = h.a, a = h.d - s, r = h.c - s, l = h.b - s, n = o = 0, d = 1; i >= d; d++) c = f * d, u = 1 - c, n = o - (o = (c * c * a + 3 * u * (c * r + u * l)) * c), p = m * i + d - 1, t[p] = (t[p] || 0) + n * n
                    },
                    p = function(e, t) {
                        t = t >> 0 || 6;
                        var i, n, o, s, a = [],
                            r = [],
                            l = 0,
                            c = 0,
                            d = t - 1,
                            u = [],
                            p = [];
                        for (i in e) h(e[i], a, t);
                        for (o = a.length, n = 0; o > n; n++) l += Math.sqrt(a[n]), s = n % t, p[s] = l, s === d && (c += l, s = n / t >> 0, u[s] = p, r[s] = c, l = 0, p = []);
                        return {
                            length: c,
                            lengths: r,
                            segments: u
                        }
                    },
                    f = window._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        API: 2,
                        global: !0,
                        init: function(e, t, i) {
                            this._target = e, t instanceof Array && (t = {
                                values: t
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
                            var n, o, s, a, r, l = t.values || [],
                                c = {},
                                h = l[0],
                                f = t.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in h) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), o = this._func[n] = "function" == typeof e[n], c[n] = o ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), r || c[n] !== l[0][n] && (r = c);
                            if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? d(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, r) : u(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = p(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;)
                                    for (a = 0; 3 > a; a++) n = f[s][a], this._func[n] = "function" == typeof e[n] ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;
                            return !0
                        },
                        set: function(t) {
                            var i, n, o, s, a, r, l, c, d, u, h = this._segCount,
                                p = this._func,
                                f = this._target;
                            if (this._timeRes) {
                                if (d = this._lengths, u = this._curSeg, t *= this._length, o = this._li, t > this._l2 && h - 1 > o) {
                                    for (c = h - 1; c > o && t >= (this._l2 = d[++o]););
                                    this._l1 = d[o - 1], this._li = o, this._curSeg = u = this._segments[o], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > t && o > 0) {
                                    for (; o > 0 && (this._l1 = d[--o]) >= t;);
                                    0 === o && this._l1 > t ? this._l1 = 0 : o++, this._l2 = d[o], this._li = o, this._curSeg = u = this._segments[o], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = o, t -= this._l1, o = this._si, t > this._s2 && u.length - 1 > o) {
                                    for (c = u.length - 1; c > o && t >= (this._s2 = u[++o]););
                                    this._s1 = u[o - 1], this._si = o
                                } else if (this._s1 > t && o > 0) {
                                    for (; o > 0 && (this._s1 = u[--o]) >= t;);
                                    0 === o && this._s1 > t ? this._s1 = 0 : o++, this._s2 = u[o], this._si = o
                                }
                                r = (o + (t - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0, r = (t - i * (1 / h)) * h;
                            for (n = 1 - r, o = this._props.length; --o > -1;) s = this._props[o], a = this._beziers[s][i], l = (r * r * a.da + 3 * n * (r * a.ca + n * a.ba)) * r + a.a, this._round[s] && (l = l + (l > 0 ? .5 : -.5) >> 0), p[s] ? f[s](l) : f[s] = l;
                            if (this._autoRotate) {
                                var m, g, v, T, y, w, _, b = this._autoRotate;
                                for (o = b.length; --o > -1;) s = b[o][2], w = b[o][3] || 0, _ = b[o][4] === !0 ? 1 : e, a = this._beziers[b[o][0]], m = this._beziers[b[o][1]], a && m && (a = a[i], m = m[i], g = a.a + (a.b - a.a) * r, T = a.b + (a.c - a.b) * r, g += (T - g) * r, T += (a.c + (a.d - a.c) * r - T) * r, v = m.a + (m.b - m.a) * r, y = m.b + (m.c - m.b) * r, v += (y - v) * r, y += (m.c + (m.d - m.c) * r - y) * r, l = Math.atan2(y - v, T - g) * _ + w, p[s] ? f[s](l) : f[s] = l)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = d, f.cubicToQuadratic = r, f._autoCSS = !0, f.quadraticToCubic = function(e, t, i) {
                    return new s(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
                }, f._cssRegister = function() {
                    var e = window._gsDefine.globals.CSSPlugin;
                    if (e) {
                        var t = e._internals,
                            i = t._parseToProxy,
                            n = t._setPluginRatio,
                            o = t.CSSPropTween;
                        t._registerComplexSpecialProp("bezier", {
                            parser: function(e, t, s, a, r, l) {
                                t instanceof Array && (t = {
                                    values: t
                                }), l = new f;
                                var c, d, u, h = t.values,
                                    p = h.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > p) return r;
                                for (c = 0; p >= c; c++) u = i(e, h[c], a, r, l, p !== c), m[c] = u.end;
                                for (d in t) g[d] = t[d];
                                return g.values = m, r = new o(e, "bezier", 0, 0, u.pt, 2), r.data = u, r.plugin = l, r.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", c, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", c, !1]
                                ] : !1), g.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), l._onInitTween(u.proxy, g, a._tween), r
                            }
                        })
                    }
                }, m._roundProps = function(e, t) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t)
                }, m._kill = function(e) {
                    var t, i, n = this._props;
                    for (t in this._beziers)
                        if (t in e)
                            for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
                    return this._super._kill.call(this, e)
                }
            }(), window._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
                var i, n, o, s, a = function() {
                        e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    r = {},
                    l = a.prototype = new e("css");
                l.constructor = a, a.version = "1.11.0", a.API = 2, a.defaultTransformPerspective = 0, l = "px", a.suffixMap = {
                    top: l,
                    right: l,
                    bottom: l,
                    left: l,
                    width: l,
                    height: l,
                    fontSize: l,
                    padding: l,
                    margin: l,
                    perspective: l
                };
                var c, d, u, h, p, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    T = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    w = /opacity *= *([^)]*)/,
                    _ = /opacity:([^;]*)/,
                    b = /alpha\(opacity *=.+?\)/i,
                    P = /^(rgb|hsl)/,
                    x = /([A-Z])/g,
                    C = /-([a-z])/gi,
                    M = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    S = function(e, t) {
                        return t.toUpperCase()
                    },
                    k = /(?:Left|Right|Width)/i,
                    E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    L = /,(?=[^\)]*(?:\(|$))/gi,
                    I = Math.PI / 180,
                    O = 180 / Math.PI,
                    F = {},
                    A = document,
                    R = A.createElement("div"),
                    D = A.createElement("img"),
                    N = a._internals = {
                        _specialProps: r
                    },
                    z = navigator.userAgent,
                    V = function() {
                        var e, t = z.indexOf("Android"),
                            i = A.createElement("div");
                        return u = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === t || Number(z.substr(t + 8, 1)) > 3), p = u && 6 > Number(z.substr(z.indexOf("Version/index.html") + 8, 1)), h = -1 !== z.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z), f = parseFloat(RegExp.$1), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", e = i.getElementsByTagName("a")[0], e ? /^0.55/.test(e.style.opacity) : !1
                    }(),
                    W = function(e) {
                        return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    B = function(e) {
                        window.console && console.log(e)
                    },
                    H = "",
                    Y = "",
                    X = function(e, t) {
                        t = t || R;
                        var i, n, o = t.style;
                        if (void 0 !== o[e]) return e;
                        for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === o[i[n] + e];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], H = "-" + Y.toLowerCase() + "-", Y + e) : null
                    },
                    U = A.defaultView ? A.defaultView.getComputedStyle : function() {},
                    Q = a.getStyle = function(e, t, i, n, o) {
                        var s;
                        return V || "opacity" !== t ? (!n && e.style[t] ? s = e.style[t] : (i = i || U(e, null)) ? (e = i.getPropertyValue(t.replace(x, "-$1").toLowerCase()), s = e || i.length ? e : i[t]) : e.currentStyle && (s = e.currentStyle[t]), null == o || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : o) : W(e)
                    },
                    $ = function(e, t, i, n, o) {
                        if ("px" === n || !n) return i;
                        if ("auto" === n || !i) return 0;
                        var s, a = k.test(t),
                            r = e,
                            l = R.style,
                            c = 0 > i;
                        return c && (i = -i), "%" === n && -1 !== t.indexOf("border") ? s = i / 100 * (a ? e.clientWidth : e.clientHeight) : (l.cssText = "border-style:solid;border-width:0;position:absolute;line-height:0;", "%" !== n && r.appendChild ? l[a ? "borderLeftWidth" : "borderTopWidth"] = i + n : (r = e.parentNode || A.body, l[a ? "width" : "height"] = i + n), r.appendChild(R), s = parseFloat(R[a ? "offsetWidth" : "offsetHeight"]), r.removeChild(R), 0 !== s || o || (s = $(e, t, i, n, !0))), c ? -s : s
                    },
                    G = function(e, t, i) {
                        if ("absolute" !== Q(e, "position", i)) return 0;
                        var n = "left" === t ? "Left" : "Top",
                            o = Q(e, "margin" + n, i);
                        return e["offset" + n] - ($(e, t, parseFloat(o), o.replace(y, "")) || 0)
                    },
                    q = function(e, t) {
                        var i, n, o = {};
                        if (t = t || U(e, null))
                            if (i = t.length)
                                for (; --i > -1;) o[t[i].replace(C, S)] = t.getPropertyValue(t[i]);
                            else
                                for (i in t) o[i] = t[i];
                        else if (t = e.currentStyle || e.style)
                            for (i in t) "string" == typeof i && void 0 !== o[i] && (o[i.replace(C, S)] = t[i]);
                        return V || (o.opacity = W(e)), n = Pe(e, t, !1), o.rotation = n.rotation, o.skewX = n.skewX, o.scaleX = n.scaleX, o.scaleY = n.scaleY, o.x = n.x, o.y = n.y, be && (o.z = n.z, o.rotationX = n.rotationX, o.rotationY = n.rotationY, o.scaleZ = n.scaleZ), o.filters && delete o.filters, o
                    },
                    Z = function(e, t, i, n, o) {
                        var s, a, r, l = {},
                            c = e.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = i[a]) || o && o[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[a] || "" === t[a].replace(T, "") ? s : 0 : G(e, a), void 0 !== c[a] && (r = new ue(c, a, c[a], r)));
                        if (n)
                            for (a in n) "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: r
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ee = function(e, t, i) {
                        var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
                            o = K[t],
                            s = o.length;
                        for (i = i || U(e, null); --s > -1;) n -= parseFloat(Q(e, "padding" + o[s], i, !0)) || 0, n -= parseFloat(Q(e, "border" + o[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    te = function(e, t) {
                        (null == e || "" === e || "auto" === e || "auto auto" === e) && (e = "0 0");
                        var i = e.split(" "),
                            n = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : i[0],
                            o = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : i[1];
                        return null == o ? o = "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t && (t.oxp = -1 !== n.indexOf("%"), t.oyp = -1 !== o.indexOf("%"), t.oxr = "=" === n.charAt(1), t.oyr = "=" === o.charAt(1), t.ox = parseFloat(n.replace(T, "")), t.oy = parseFloat(o.replace(T, ""))), n + " " + o + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function(e, t) {
                        return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t)
                    },
                    ne = function(e, t) {
                        return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * Number(e.substr(2)) + t : parseFloat(e)
                    },
                    oe = function(e, t, i, n) {
                        var o, s, a, r, l = 1e-6;
                        return null == e ? r = t : "number" == typeof e ? r = e : (o = 360, s = e.split("_"), a = Number(s[0].replace(T, "")) * (-1 === e.indexOf("rad") ? 1 : O) - ("=" === e.charAt(1) ? 0 : t), s.length && (n && (n[i] = t + a), -1 !== e.indexOf("short") && (a %= o, a !== a % (o / 2) && (a = 0 > a ? a + o : a - o)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * o) % o - (0 | a / o) * o : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * o) % o - (0 | a / o) * o)), r = t + a), l > r && r > -l && (r = 0), r
                    },
                    se = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ae = function(e, t, i) {
                        return e = 0 > e ? e + 1 : e > 1 ? e - 1 : e, 0 | 255 * (1 > 6 * e ? t + 6 * (i - t) * e : .5 > e ? i : 2 > 3 * e ? t + 6 * (i - t) * (2 / 3 - e) : t) + .5
                    },
                    re = function(e) {
                        var t, i, n, o, s, a;
                        return e && "" !== e ? "number" == typeof e ? [e >> 16, 255 & e >> 8, 255 & e] : ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), se[e] ? se[e] : "#" === e.charAt(0) ? (4 === e.length && (t = e.charAt(1), i = e.charAt(2), n = e.charAt(3), e = "#" + t + t + i + i + n + n), e = parseInt(e.substr(1), 16), [e >> 16, 255 & e >> 8, 255 & e]) : "hsl" === e.substr(0, 3) ? (e = e.match(m), o = Number(e[0]) % 360 / 360, s = Number(e[1]) / 100, a = Number(e[2]) / 100, i = .5 >= a ? a * (s + 1) : a + s - a * s, t = 2 * a - i, e.length > 3 && (e[3] = Number(e[3])), e[0] = ae(o + 1 / 3, t, i), e[1] = ae(o, t, i), e[2] = ae(o - 1 / 3, t, i), e) : (e = e.match(m) || se.transparent, e[0] = Number(e[0]), e[1] = Number(e[1]), e[2] = Number(e[2]), e.length > 3 && (e[3] = Number(e[3])), e)) : se.black
                    },
                    le = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (l in se) le += "|" + l + "\\b";
                le = RegExp(le + ")", "gi");
                var ce = function(e, t, i, n) {
                        if (null == e) return function(e) {
                            return e
                        };
                        var o, s = t ? (e.match(le) || [""])[0] : "",
                            a = e.split(s).join("").match(v) || [],
                            r = e.substr(0, e.indexOf(a[0])),
                            l = ")" === e.charAt(e.length - 1) ? ")" : "",
                            c = -1 !== e.indexOf(" ") ? " " : ",",
                            d = a.length,
                            u = d > 0 ? a[0].replace(m, "") : "";
                        return d ? o = t ? function(e) {
                            var t, h, p, f;
                            if ("number" == typeof e) e += u;
                            else if (n && L.test(e)) {
                                for (f = e.replace(L, "|").split("|"), p = 0; f.length > p; p++) f[p] = o(f[p]);
                                return f.join(",")
                            }
                            if (t = (e.match(le) || [s])[0], h = e.split(t).join("").match(v) || [], p = h.length, d > p--)
                                for (; d > ++p;) h[p] = i ? h[0 | (p - 1) / 2] : a[p];
                            return r + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
                        } : function(e) {
                            var t, s, h;
                            if ("number" == typeof e) e += u;
                            else if (n && L.test(e)) {
                                for (s = e.replace(L, "|").split("|"), h = 0; s.length > h; h++) s[h] = o(s[h]);
                                return s.join(",")
                            }
                            if (t = e.match(v) || [], h = t.length, d > h--)
                                for (; d > ++h;) t[h] = i ? t[0 | (h - 1) / 2] : a[h];
                            return r + t.join(c) + l
                        } : function(e) {
                            return e
                        }
                    },
                    de = function(e) {
                        return e = e.split(","),
                            function(t, i, n, o, s, a, r) {
                                var l, c = (i + "").split(" ");
                                for (r = {}, l = 0; 4 > l; l++) r[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                                return o.parse(t, r, s, a)
                            }
                    },
                    ue = (N._setPluginRatio = function(e) {
                        this.plugin.setRatio(e);
                        for (var t, i, n, o, s = this.data, a = s.proxy, r = s.firstMPT, l = 1e-6; r;) t = a[r.v], r.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : l > t && t > -l && (t = 0), r.t[r.p] = t, r = r._next;
                        if (s.autoRotate && (s.autoRotate.rotation = a.rotation), 1 === e)
                            for (r = s.firstMPT; r;) {
                                if (i = r.t, i.type) {
                                    if (1 === i.type) {
                                        for (o = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) o += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = o
                                    }
                                } else i.e = i.s + i.xs0;
                                r = r._next
                            }
                    }, function(e, t, i, n, o) {
                        this.t = e, this.p = t, this.v = i, this.r = o, n && (n._prev = this, this._next = n)
                    }),
                    he = (N._parseToProxy = function(e, t, i, n, o, s) {
                        var a, r, l, c, d, u = n,
                            h = {},
                            p = {},
                            f = i._transform,
                            m = F;
                        for (i._transform = null, F = t, n = d = i.parse(e, t, n, o), F = m, s && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (1 >= n.type && (r = n.p, p[r] = n.s + n.c, h[r] = n.s, s || (c = new ue(n, "s", r, c, n.r), n.c = 0), 1 === n.type))
                                for (a = n.l; --a > 0;) l = "xn" + a, r = n.p + "_" + l, p[r] = n.data[l], h[r] = n[l], s || (c = new ue(n, l, r, c, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: h,
                            end: p,
                            firstMPT: c,
                            pt: d
                        }
                    }, N.CSSPropTween = function(e, t, n, o, a, r, l, c, d, u, h) {
                        this.t = e, this.p = t, this.s = n, this.c = o, this.n = l || t, e instanceof he || s.push(this.n), this.r = c, this.type = r || 0, d && (this.pr = d, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === h ? n + o : h, a && (this._next = a, a._prev = this)
                    }),
                    pe = a.parseComplex = function(e, t, i, n, o, s, a, r, l, d) {
                        i = i || s || "", a = new he(e, t, 0, 0, a, d ? 2 : 1, null, !1, r, i, n), n += "";
                        var u, h, p, f, v, T, y, w, _, b, x, C, M = i.split(", ").join(",").split(" "),
                            S = n.split(", ").join(",").split(" "),
                            k = M.length,
                            E = c !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (M = M.join(" ").replace(L, ", ").split(" "), S = S.join(" ").replace(L, ", ").split(" "), k = M.length), k !== S.length && (M = (s || "").split(" "), k = M.length), a.plugin = l, a.setRatio = d, u = 0; k > u; u++)
                            if (f = M[u], v = S[u], w = parseFloat(f), w || 0 === w) a.appendXtra("", w, ie(v, w), v.replace(g, ""), E && -1 !== v.indexOf("px"), !0);
                            else if (o && ("#" === f.charAt(0) || se[f] || P.test(f))) C = "," === v.charAt(v.length - 1) ? ")," : ")", f = re(f), v = re(v), _ = f.length + v.length > 6, _ && !V && 0 === v[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(S[u]).join("transparent")) : (V || (_ = !1), a.appendXtra(_ ? "rgba(" : "rgb(", f[0], v[0] - f[0], ",", !0, !0).appendXtra("", f[1], v[1] - f[1], ",", !0).appendXtra("", f[2], v[2] - f[2], _ ? "," : C, !0), _ && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > v.length ? 1 : v[3]) - f, C, !1)));
                        else if (T = f.match(m)) {
                            if (y = v.match(g), !y || y.length !== T.length) return a;
                            for (p = 0, h = 0; T.length > h; h++) x = T[h], b = f.indexOf(x, p), a.appendXtra(f.substr(p, b - p), Number(x), ie(y[h], x), "", E && "px" === f.substr(b + x.length, 2), 0 === h), p = b + x.length;
                            a["xs" + a.l] += f.substr(p)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (C = a.xs0 + a.data.s, u = 1; a.l > u; u++) C += a["xs" + u] + a.data["xn" + u];
                            a.e = C + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    fe = 9;
                for (l = he.prototype, l.l = l.pr = 0; --fe > 0;) l["xn" + fe] = 0, l["xs" + fe] = "";
                l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(e, t, i, n, o, s) {
                    var a = this,
                        r = a.l;
                    return a["xs" + r] += s && r ? " " + e : e || "", i || 0 === r || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", r > 0 ? (a.data["xn" + r] = t + i, a.rxp["xn" + r] = o, a["xn" + r] = t, a.plugin || (a.xfirst = new he(a, "xn" + r, t, i, a.xfirst || a, 0, a.n, o, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: t + i
                    }, a.rxp = {}, a.s = t, a.c = i, a.r = o, a)) : (a["xs" + r] += t + (n || ""), a)
                };
                var me = function(e, t) {
                        t = t || {}, this.p = t.prefix ? X(e) || e : e, r[e] = r[this.p] = this, this.format = t.formatter || ce(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
                    },
                    ge = N._registerComplexSpecialProp = function(e, t, i) {
                        "object" != typeof t && (t = {
                            parser: i
                        });
                        var n, o, s = e.split(","),
                            a = t.defaultValue;
                        for (i = i || [a], n = 0; s.length > n; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || a, o = new me(s[n], t)
                    },
                    ve = function(e) {
                        if (!r[e]) {
                            var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
                            ge(e, {
                                parser: function(e, i, n, o, s, a, l) {
                                    var c = (window.GreenSockGlobals || window).com.greensock.plugins[t];
                                    return c ? (c._cssRegister(), r[n].parse(e, i, n, o, s, a, l)) : (B("Error: " + t + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                l = me.prototype, l.parseComplex = function(e, t, i, n, o, s) {
                    var a, r, l, c, d, u, h = this.keyword;
                    if (this.multi && (L.test(i) || L.test(t) ? (r = t.replace(L, "|").split("|"), l = i.replace(L, "|").split("|")) : h && (r = [t], l = [i])), l) {
                        for (c = l.length > r.length ? l.length : r.length, a = 0; c > a; a++) t = r[a] = r[a] || this.dflt, i = l[a] = l[a] || this.dflt, h && (d = t.indexOf(h), u = i.indexOf(h), d !== u && (i = -1 === u ? l : r, i[a] += " " + h));
                        t = r.join(", "), i = l.join(", ")
                    }
                    return pe(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, o, s)
                }, l.parse = function(e, t, i, n, s, a) {
                    return this.parseComplex(e.style, this.format(Q(e, this.p, o, !1, this.dflt)), this.format(t), s, a)
                }, a.registerSpecialProp = function(e, t, i) {
                    ge(e, {
                        parser: function(e, n, o, s, a, r) {
                            var l = new he(e, o, 0, 0, a, 2, o, !1, i);
                            return l.plugin = r, l.setRatio = t(e, n, s._tween, o), l
                        },
                        priority: i
                    })
                };
                var Te = "scaleX,scaleY,scaleZ,x,y,z,skewX,rotation,rotationX,rotationY,perspective".split(","),
                    ye = X("transform"),
                    we = H + "transform",
                    _e = X("transformOrigin"),
                    be = null !== X("perspective"),
                    Pe = function(e, t, i, n) {
                        if (e._gsTransform && i && !n) return e._gsTransform;
                        var o, s, r, l, c, d, u, h, p, f, m, g, v, T = i ? e._gsTransform || {
                                skewY: 0
                            } : {
                                skewY: 0
                            },
                            y = 0 > T.scaleX,
                            w = 2e-5,
                            _ = 1e5,
                            b = 179.99,
                            P = b * I,
                            x = be ? parseFloat(Q(e, _e, t, !1, "0 0 0").split(" ")[2]) || T.zOrigin || 0 : 0;
                        for (ye ? o = Q(e, we, t, !0) : e.currentStyle && (o = e.currentStyle.filter.match(E), o = o && 4 === o.length ? [o[0].substr(4), Number(o[2].substr(4)), Number(o[1].substr(4)), o[3].substr(4), T.x || 0, T.y || 0].join(",") : ""), s = (o || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], r = s.length; --r > -1;) l = Number(s[r]), s[r] = (c = l - (l |= 0)) ? (0 | c * _ + (0 > c ? -.5 : .5)) / _ + l : l;
                        if (16 === s.length) {
                            var C = s[8],
                                M = s[9],
                                S = s[10],
                                k = s[12],
                                j = s[13],
                                L = s[14];
                            if (T.zOrigin && (L = -T.zOrigin, k = C * L - s[12], j = M * L - s[13], L = S * L + T.zOrigin - s[14]), !i || n || null == T.rotationX) {
                                var F, A, R, D, N, z, V, W = s[0],
                                    B = s[1],
                                    H = s[2],
                                    Y = s[3],
                                    X = s[4],
                                    U = s[5],
                                    $ = s[6],
                                    G = s[7],
                                    q = s[11],
                                    Z = Math.atan2($, S),
                                    K = -P > Z || Z > P;
                                T.rotationX = Z * O, Z && (D = Math.cos(-Z), N = Math.sin(-Z), F = X * D + C * N, A = U * D + M * N, R = $ * D + S * N, C = X * -N + C * D, M = U * -N + M * D, S = $ * -N + S * D, q = G * -N + q * D, X = F, U = A, $ = R), Z = Math.atan2(C, W), T.rotationY = Z * O, Z && (z = -P > Z || Z > P, D = Math.cos(-Z), N = Math.sin(-Z), F = W * D - C * N, A = B * D - M * N, R = H * D - S * N, M = B * N + M * D, S = H * N + S * D, q = Y * N + q * D, W = F, B = A, H = R), Z = Math.atan2(B, U), T.rotation = Z * O, Z && (V = -P > Z || Z > P, D = Math.cos(-Z), N = Math.sin(-Z), W = W * D + X * N, A = B * D + U * N, U = B * -N + U * D, $ = H * -N + $ * D, B = A), V && K ? T.rotation = T.rotationX = 0 : V && z ? T.rotation = T.rotationY = 0 : z && K && (T.rotationY = T.rotationX = 0), T.scaleX = (0 | Math.sqrt(W * W + B * B) * _ + .5) / _, T.scaleY = (0 | Math.sqrt(U * U + M * M) * _ + .5) / _, T.scaleZ = (0 | Math.sqrt($ * $ + S * S) * _ + .5) / _, T.skewX = 0, T.perspective = q ? 1 / (0 > q ? -q : q) : 0, T.x = k, T.y = j, T.z = L
                            }
                        } else if (!(be && !n && s.length && T.x === s[4] && T.y === s[5] && (T.rotationX || T.rotationY) || void 0 !== T.x && "none" === Q(e, "display", t))) {
                            var J = s.length >= 6,
                                ee = J ? s[0] : 1,
                                te = s[1] || 0,
                                ie = s[2] || 0,
                                ne = J ? s[3] : 1;
                            T.x = s[4] || 0, T.y = s[5] || 0, d = Math.sqrt(ee * ee + te * te), u = Math.sqrt(ne * ne + ie * ie), h = ee || te ? Math.atan2(te, ee) * O : T.rotation || 0, p = ie || ne ? Math.atan2(ie, ne) * O + h : T.skewX || 0, f = d - Math.abs(T.scaleX || 0), m = u - Math.abs(T.scaleY || 0), Math.abs(p) > 90 && 270 > Math.abs(p) && (y ? (d *= -1, p += 0 >= h ? 180 : -180, h += 0 >= h ? 180 : -180) : (u *= -1, p += 0 >= p ? 180 : -180)), g = (h - T.rotation) % 180, v = (p - T.skewX) % 180, (void 0 === T.skewX || f > w || -w > f || m > w || -w > m || g > -b && b > g && !1 | g * _ || v > -b && b > v && !1 | v * _) && (T.scaleX = d, T.scaleY = u, T.rotation = h, T.skewX = p), be && (T.rotationX = T.rotationY = T.z = 0, T.perspective = parseFloat(a.defaultTransformPerspective) || 0, T.scaleZ = 1)
                        }
                        T.zOrigin = x;
                        for (r in T) w > T[r] && T[r] > -w && (T[r] = 0);
                        return i && (e._gsTransform = T), T
                    },
                    xe = function(e) {
                        var t, i, n = this.data,
                            o = -n.rotation * I,
                            s = o + n.skewX * I,
                            a = 1e5,
                            r = (0 | Math.cos(o) * n.scaleX * a) / a,
                            l = (0 | Math.sin(o) * n.scaleX * a) / a,
                            c = (0 | Math.sin(s) * -n.scaleY * a) / a,
                            d = (0 | Math.cos(s) * n.scaleY * a) / a,
                            u = this.t.style,
                            h = this.t.currentStyle;
                        if (h) {
                            i = l, l = -c, c = -i, t = h.filter, u.filter = "";
                            var p, m, g = this.t.offsetWidth,
                                v = this.t.offsetHeight,
                                T = "absolute" !== h.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + r + ", M12=" + l + ", M21=" + c + ", M22=" + d,
                                b = n.x,
                                P = n.y;
                            if (null != n.ox && (p = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, m = (n.oyp ? .01 * v * n.oy : n.oy) - v / 2, b += p - (p * r + m * l), P += m - (p * c + m * d)), T ? (p = g / 2, m = v / 2, _ += ", Dx=" + (p - (p * r + m * l) + b) + ", Dy=" + (m - (p * c + m * d) + P) + ")") : _ += ", sizingMethod='auto expand')", u.filter = -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? t.replace(j, _) : _ + " " + t, (0 === e || 1 === e) && 1 === r && 0 === l && 0 === c && 1 === d && (T && -1 === _.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf("gradient(" && t.indexOf("Alpha")) && u.removeAttribute("filter")), !T) {
                                var x, C, M, S = 8 > f ? 1 : -1;
                                for (p = n.ieOffsetX || 0, m = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > r ? -r : r) * g + (0 > l ? -l : l) * v)) / 2 + b), n.ieOffsetY = Math.round((v - ((0 > d ? -d : d) * v + (0 > c ? -c : c) * g)) / 2 + P), fe = 0; 4 > fe; fe++) C = J[fe], x = h[C], i = -1 !== x.indexOf("px") ? parseFloat(x) : $(this.t, C, parseFloat(x), x.replace(y, "")) || 0, M = i !== n[C] ? 2 > fe ? -n.ieOffsetX : -n.ieOffsetY : 2 > fe ? p - n.ieOffsetX : m - n.ieOffsetY, u[C] = (n[C] = Math.round(i - M * (0 === fe || 2 === fe ? 1 : S))) + "px"
                            }
                        }
                    },
                    Ce = function() {
                        var e, t, i, n, o, s, a, r, l, c, d, u, p, f, m, g, v, T, y, w, _, b, P, x, C, M, S = this.data,
                            k = this.t.style,
                            E = S.rotation * I,
                            j = S.scaleX,
                            L = S.scaleY,
                            O = S.scaleZ,
                            F = S.perspective;
                        if (h && (x = k.top ? "top" : k.bottom ? "bottom" : parseFloat(Q(this.t, "top", null, !1)) ? "bottom" : "top", w = Q(this.t, x, null, !1), C = parseFloat(w) || 0, M = w.substr((C + "").length) || "px", S._ffFix = !S._ffFix, k[x] = (S._ffFix ? C + .05 : C - .05) + M), E || S.skewX) T = Math.cos(E), y = Math.sin(E), e = T, o = y, S.skewX && (E -= S.skewX * I, T = Math.cos(E), y = Math.sin(E)), t = -y, s = T;
                        else {
                            if (!(S.rotationY || S.rotationX || 1 !== O || F)) return void(k[ye] = "translate3d(" + S.x + "px," + S.y + "px," + S.z + "px)" + (1 !== j || 1 !== L ? " scale(" + j + "," + L + ")" : ""));
                            e = s = 1, t = o = 0
                        }
                        d = 1, i = n = a = r = l = c = u = p = f = 0, m = F ? -1 / F : 0, g = S.zOrigin, v = 1e5, E = S.rotationY * I, E && (T = Math.cos(E), y = Math.sin(E), l = d * -y, p = m * -y, i = e * y, a = o * y, d *= T, m *= T, e *= T, o *= T), E = S.rotationX * I, E && (T = Math.cos(E), y = Math.sin(E), w = t * T + i * y, _ = s * T + a * y, b = c * T + d * y, P = f * T + m * y, i = t * -y + i * T, a = s * -y + a * T, d = c * -y + d * T, m = f * -y + m * T, t = w, s = _, c = b, f = P), 1 !== O && (i *= O, a *= O, d *= O, m *= O), 1 !== L && (t *= L, s *= L, c *= L, f *= L), 1 !== j && (e *= j, o *= j, l *= j, p *= j), g && (u -= g, n = i * u, r = a * u, u = d * u + g), n = (w = (n += S.x) - (n |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + n : n, r = (w = (r += S.y) - (r |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + r : r, u = (w = (u += S.z) - (u |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + u : u, k[ye] = "matrix3d(" + [(0 | e * v) / v, (0 | o * v) / v, (0 | l * v) / v, (0 | p * v) / v, (0 | t * v) / v, (0 | s * v) / v, (0 | c * v) / v, (0 | f * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | d * v) / v, (0 | m * v) / v, n, r, u, F ? 1 + -u / F : 1].join(",") + ")"
                    },
                    Me = function() {
                        var e, t, i, n, o, s, a, r, l, c = this.data,
                            d = this.t,
                            u = d.style;
                        h && (e = u.top ? "top" : u.bottom ? "bottom" : parseFloat(Q(d, "top", null, !1)) ? "bottom" : "top", t = Q(d, e, null, !1), i = parseFloat(t) || 0, n = t.substr((i + "").length) || "px", c._ffFix = !c._ffFix, u[e] = (c._ffFix ? i + .05 : i - .05) + n), c.rotation || c.skewX ? (o = c.rotation * I, s = o - c.skewX * I, a = 1e5, r = c.scaleX * a, l = c.scaleY * a, u[ye] = "matrix(" + (0 | Math.cos(o) * r) / a + "," + (0 | Math.sin(o) * r) / a + "," + (0 | Math.sin(s) * -l) / a + "," + (0 | Math.cos(s) * l) / a + "," + c.x + "," + c.y + ")") : u[ye] = "matrix(" + c.scaleX + ",0,0," + c.scaleY + "," + c.x + "," + c.y + ")"
                    };
                ge("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D", {
                    parser: function(e, t, i, n, s, a, r) {
                        if (n._transform) return s;
                        var l, c, d, u, h, p, f, m = n._transform = Pe(e, o, !0, r.parseTransform),
                            g = e.style,
                            v = 1e-6,
                            T = Te.length,
                            y = r,
                            w = {};
                        if ("string" == typeof y.transform && ye) d = g.cssText, g[ye] = y.transform, g.display = "block", l = Pe(e, null, !1), g.cssText = d;
                        else if ("object" == typeof y) {
                            if (l = {
                                    scaleX: ne(null != y.scaleX ? y.scaleX : y.scale, m.scaleX),
                                    scaleY: ne(null != y.scaleY ? y.scaleY : y.scale, m.scaleY),
                                    scaleZ: ne(null != y.scaleZ ? y.scaleZ : y.scale, m.scaleZ),
                                    x: ne(y.x, m.x),
                                    y: ne(y.y, m.y),
                                    z: ne(y.z, m.z),
                                    perspective: ne(y.transformPerspective, m.perspective)
                                }, f = y.directionalRotation, null != f)
                                if ("object" == typeof f)
                                    for (d in f) y[d] = f[d];
                                else y.rotation = f;
                            l.rotation = oe("rotation" in y ? y.rotation : "shortRotation" in y ? y.shortRotation + "_short" : "rotationZ" in y ? y.rotationZ : m.rotation, m.rotation, "rotation", w), be && (l.rotationX = oe("rotationX" in y ? y.rotationX : "shortRotationX" in y ? y.shortRotationX + "_short" : m.rotationX || 0, m.rotationX, "rotationX", w), l.rotationY = oe("rotationY" in y ? y.rotationY : "shortRotationY" in y ? y.shortRotationY + "_short" : m.rotationY || 0, m.rotationY, "rotationY", w)), l.skewX = null == y.skewX ? m.skewX : oe(y.skewX, m.skewX), l.skewY = null == y.skewY ? m.skewY : oe(y.skewY, m.skewY), (c = l.skewY - m.skewY) && (l.skewX += c, l.rotation += c)
                        }
                        for (null != y.force3D && (m.force3D = y.force3D, p = !0), h = m.force3D || m.z || m.rotationX || m.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, h || null == y.scale || (l.scaleZ = 1); --T > -1;) i = Te[T], u = l[i] - m[i], (u > v || -v > u || null != F[i]) && (p = !0, s = new he(m, i, m[i], u, s), i in w && (s.e = w[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return u = y.transformOrigin, (u || be && h && m.zOrigin) && (ye ? (p = !0, i = _e, u = (u || Q(e, i, o, !1, "50% 50%")) + "", s = new he(g, i, 0, 0, s, -1, "transformOrigin"), s.b = g[i], s.plugin = a, be ? (d = m.zOrigin, u = u.split(" "), m.zOrigin = (u.length > 2 && (0 === d || "0px" !== u[2]) ? parseFloat(u[2]) : d) || 0, s.xs0 = s.e = g[i] = u[0] + " " + (u[1] || "50%") + " 0px", s = new he(m, "zOrigin", 0, 0, s, -1, s.n), s.b = d, s.xs0 = s.e = m.zOrigin) : s.xs0 = s.e = g[i] = u) : te(u + "", m)), p && (n._transformType = h || 3 === this._transformType ? 3 : 2), s
                    },
                    prefix: !0
                }), ge("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), ge("borderRadius", {
                    defaultValue: "0px",
                    parser: function(e, t, i, s, a) {
                        t = this.format(t);
                        var r, l, c, d, u, h, p, f, m, g, v, T, y, w, _, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            x = e.style;
                        for (m = parseFloat(e.offsetWidth), g = parseFloat(e.offsetHeight), r = t.split(" "), l = 0; P.length > l; l++) this.p.indexOf("border") && (P[l] = X(P[l])), u = d = Q(e, P[l], o, !1, "0px"), -1 !== u.indexOf(" ") && (d = u.split(" "), u = d[0], d = d[1]), h = c = r[l], p = parseFloat(u), T = u.substr((p + "").length), y = "=" === h.charAt(1), y ? (f = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), f *= parseFloat(h), v = h.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(h), v = h.substr((f + "").length)), "" === v && (v = n[i] || T), v !== T && (w = $(e, "borderLeft", p, T), _ = $(e, "borderTop", p, T), "%" === v ? (u = 100 * (w / m) + "%", d = 100 * (_ / g) + "%") : "em" === v ? (b = $(e, "borderLeft", 1, "em"), u = w / b + "em", d = _ / b + "em") : (u = w + "px", d = _ + "px"), y && (h = parseFloat(u) + f + v, c = parseFloat(d) + f + v)), a = pe(x, P[l], u + " " + d, h + " " + c, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: ce("0px 0px 0px 0px", !1, !0)
                }), ge("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(e, t, i, n, s, a) {
                        var r, l, c, d, u, h, p = "background-position",
                            m = o || U(e, null),
                            g = this.format((m ? f ? m.getPropertyValue(p + "-x") + " " + m.getPropertyValue(p + "-y") : m.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
                            v = this.format(t);
                        if (-1 !== g.indexOf("%") != (-1 !== v.indexOf("%")) && (h = Q(e, "backgroundImage").replace(M, ""), h && "none" !== h)) {
                            for (r = g.split(" "), l = v.split(" "), D.setAttribute("src", h), c = 2; --c > -1;) g = r[c], d = -1 !== g.indexOf("%"), d !== (-1 !== l[c].indexOf("%")) && (u = 0 === c ? e.offsetWidth - D.width : e.offsetHeight - D.height, r[c] = d ? parseFloat(g) / 100 * u + "px" : 100 * (parseFloat(g) / u) + "%");
                            g = r.join(" ")
                        }
                        return this.parseComplex(e.style, g, v, s, a)
                    },
                    formatter: te
                }), ge("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: te
                }), ge("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), ge("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), ge("transformStyle", {
                    prefix: !0
                }), ge("backfaceVisibility", {
                    prefix: !0
                }), ge("userSelect", {
                    prefix: !0
                }), ge("margin", {
                    parser: de("marginTop,marginRight,marginBottom,marginLeft")
                }), ge("padding", {
                    parser: de("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), ge("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(e, t, i, n, s, a) {
                        var r, l, c;
                        return 9 > f ? (l = e.currentStyle, c = 8 > f ? " " : ",", r = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (r = this.format(Q(e, this.p, o, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, r, t, s, a)
                    }
                }), ge("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), ge("autoRound,strictUnits", {
                    parser: function(e, t, i, n, o) {
                        return o
                    }
                }), ge("border", {
                    defaultValue: "0px solid #000",
                    parser: function(e, t, i, n, s, a) {
                        return this.parseComplex(e.style, this.format(Q(e, "borderTopWidth", o, !1, "0px") + " " + Q(e, "borderTopStyle", o, !1, "solid") + " " + Q(e, "borderTopColor", o, !1, "#000")), this.format(t), s, a)
                    },
                    color: !0,
                    formatter: function(e) {
                        var t = e.split(" ");
                        return t[0] + " " + (t[1] || "solid") + " " + (e.match(le) || ["#000"])[0]
                    }
                }), ge("float,cssFloat,styleFloat", {
                    parser: function(e, t, i, n, o) {
                        var s = e.style,
                            a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new he(s, a, 0, 0, o, -1, i, !1, 0, s[a], t)
                    }
                });
                var Se = function(e) {
                    var t, i = this.t,
                        n = i.filter || Q(this.data, "filter"),
                        o = 0 | this.s + this.c * e;
                    100 === o && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !Q(this.data, "filter")) : (i.filter = n.replace(b, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + o + ")"), -1 === n.indexOf("opacity") ? 0 === o && this.xn1 || (i.filter = n + " alpha(opacity=" + o + ")") : i.filter = n.replace(w, "opacity=" + o))
                };
                ge("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(e, t, i, n, s, a) {
                        var r = parseFloat(Q(e, "opacity", o, !1, "1")),
                            l = e.style,
                            c = "autoAlpha" === i;
                        return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + r), c && 1 === r && "hidden" === Q(e, "visibility", o) && 0 !== t && (r = 0), V ? s = new he(l, "opacity", r, t - r, s) : (s = new he(l, "opacity", 100 * r, 100 * (t - r), s), s.xn1 = c ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = a, s.setRatio = Se), c && (s = new he(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== r ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var ke = function(e, t) {
                        t && (e.removeProperty ? e.removeProperty(t.replace(x, "-$1").toLowerCase()) : e.removeAttribute(t))
                    },
                    $e = function(e) {
                        if (this.t._gsClassPT = this, 1 === e || 0 === e) {
                            this.t.className = 0 === e ? this.b : this.e;
                            for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : ke(i, t.p), t = t._next;
                            1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.className !== this.e && (this.t.className = this.e)
                    };
                ge("className", {
                    parser: function(e, t, n, s, a, r, l) {
                        var c, d, u, h, p, f = e.className,
                            m = e.style.cssText;
                        if (a = s._classNamePT = new he(e, n, 0, 0, a, 2), a.setRatio = $e, a.pr = -11, i = !0, a.b = f, d = q(e, o), u = e._gsClassPT) {
                            for (h = {}, p = u.data; p;) h[p.p] = 1, p = p._next;
                            u.setRatio(1)
                        }
                        return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : f.replace(RegExp("\\s*\\b" + t.substr(2) + "\\b"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), s._tween._duration && (e.className = a.e, c = Z(e, d, q(e), l, h), e.className = f, a.data = c.firstMPT, e.style.cssText = m, a = a.xfirst = s.parse(e, c.difs, a, r)), a
                    }
                });
                var Ee = function(e) {
                    if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var t, i, n, o, s = this.t.style,
                            a = r.transform.parse;
                        if ("all" === this.e) s.cssText = "", o = !0;
                        else
                            for (t = this.e.split(","), n = t.length; --n > -1;) i = t[n], r[i] && (r[i].parse === a ? o = !0 : i = "transformOrigin" === i ? _e : r[i].p), ke(s, i);
                        o && (ke(s, ye), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (ge("clearProps", {
                        parser: function(e, t, n, o, s) {
                            return s = new he(e, n, 0, 0, s, 2), s.setRatio = Ee, s.e = t, s.pr = -10, s.data = o._tween, i = !0, s
                        }
                    }), l = "bezier,throwProps,physicsProps,physics2D".split(","), fe = l.length; fe--;) ve(l[fe]);
                l = a.prototype, l._firstPT = null, l._onInitTween = function(e, t, r) {
                    if (!e.nodeType) return !1;
                    this._target = e, this._tween = r, this._vars = t, c = t.autoRound, i = !1, n = t.suffixMap || a.suffixMap, o = U(e, ""), s = this._overwriteProps;
                    var l, h, f, m, g, v, T, y, w, b = e.style;
                    if (d && "" === b.zIndex && (l = Q(e, "zIndex", o), ("auto" === l || "" === l) && (b.zIndex = 0)), "string" == typeof t && (m = b.cssText, l = q(e, o), b.cssText = m + ";" + t, l = Z(e, l, q(e)).difs, !V && _.test(t) && (l.opacity = parseFloat(RegExp.$1)), t = l, b.cssText = m), this._firstPT = h = this.parse(e, t, null), this._transformType) {
                        for (w = 3 === this._transformType, ye ? u && (d = !0, "" === b.zIndex && (T = Q(e, "zIndex", o), ("auto" === T || "" === T) && (b.zIndex = 0)), p && (b.WebkitBackfaceVisibility = this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : b.zoom = 1, f = h; f && f._next;) f = f._next;
                        y = new he(e, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = w && be ? Ce : ye ? Me : xe, y.data = this._transform || Pe(e, o, !0), s.pop()
                    }
                    if (i) {
                        for (; h;) {
                            for (v = h._next, f = m; f && f.pr > h.pr;) f = f._next;
                            (h._prev = f ? f._prev : g) ? h._prev._next = h: m = h, (h._next = f) ? f._prev = h : g = h, h = v
                        }
                        this._firstPT = m
                    }
                    return !0
                }, l.parse = function(e, t, i, s) {
                    var a, l, d, u, h, p, f, m, g, v, T = e.style;
                    for (a in t) p = t[a], l = r[a], l ? i = l.parse(e, p, a, this, i, s, t) : (h = Q(e, a, o) + "", g = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && P.test(p) ? (g || (p = re(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = pe(T, a, h, p, !0, "transparent", i, 0, s)) : !g || -1 === p.indexOf(" ") && -1 === p.indexOf(",") ? (d = parseFloat(h), f = d || 0 === d ? h.substr((d + "").length) : "", ("" === h || "auto" === h) && ("width" === a || "height" === a ? (d = ee(e, a, o), f = "px") : "left" === a || "top" === a ? (d = G(e, a, o), f = "px") : (d = "opacity" !== a ? 0 : 1, f = "")), v = g && "=" === p.charAt(1), v ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), m = p.replace(y, "")) : (u = parseFloat(p),
                        m = g ? p.substr((u + "").length) || "" : ""), "" === m && (m = n[a] || f), p = u || 0 === u ? (v ? u + d : u) + m : t[a], f !== m && "" !== m && (u || 0 === u) && (d || 0 === d) && (d = $(e, a, d, f), "%" === m ? (d /= $(e, a, 100, "%") / 100, d > 100 && (d = 100), t.strictUnits !== !0 && (h = d + "%")) : "em" === m ? d /= $(e, a, 1, "em") : (u = $(e, a, u, m), m = "px"), v && (u || 0 === u) && (p = u + d + m)), v && (u += d), !d && 0 !== d || !u && 0 !== u ? void 0 !== T[a] && (p || "NaN" != p + "" && null != p) ? (i = new he(T, a, u || d || 0, 0, i, -1, a, !1, 0, h, p), i.xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : h) : B("invalid " + a + " tween value: " + t[a]) : (i = new he(T, a, d, u - d, i, 0, a, c !== !1 && ("px" === m || "zIndex" === a), 0, h, p), i.xs0 = m)) : i = pe(T, a, h, p, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, l.setRatio = function(e) {
                    var t, i, n, o = this._firstPT,
                        s = 1e-6;
                    if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; o;) {
                                if (t = o.c * e + o.s, o.r ? t = t > 0 ? 0 | t + .5 : 0 | t - .5 : s > t && t > -s && (t = 0), o.type)
                                    if (1 === o.type)
                                        if (n = o.l, 2 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2;
                                        else if (3 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3;
                                else if (4 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4;
                                else if (5 === n) o.t[o.p] = o.xs0 + t + o.xs1 + o.xn1 + o.xs2 + o.xn2 + o.xs3 + o.xn3 + o.xs4 + o.xn4 + o.xs5;
                                else {
                                    for (i = o.xs0 + t + o.xs1, n = 1; o.l > n; n++) i += o["xn" + n] + o["xs" + (n + 1)];
                                    o.t[o.p] = i
                                } else -1 === o.type ? o.t[o.p] = o.xs0 : o.setRatio && o.setRatio(e);
                                else o.t[o.p] = t + o.xs0;
                                o = o._next
                            } else
                                for (; o;) 2 !== o.type ? o.t[o.p] = o.b : o.setRatio(e), o = o._next;
                        else
                            for (; o;) 2 !== o.type ? o.t[o.p] = o.e : o.setRatio(e), o = o._next
                }, l._enableTransforms = function(e) {
                    this._transformType = e || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Pe(this._target, o, !0)
                }, l._linkCSSP = function(e, t, i, n) {
                    return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
                }, l._kill = function(t) {
                    var i, n, o, s = t;
                    if (t.autoAlpha || t.alpha) {
                        s = {};
                        for (n in t) s[n] = t[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return t.className && (i = this._classNamePT) && (o = i.xfirst, o && o._prev ? this._linkCSSP(o._prev, i._next, o._prev._prev) : o === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, o._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
                };
                var je = function(e, t, i) {
                    var n, o, s, a;
                    if (e.slice)
                        for (o = e.length; --o > -1;) je(e[o], t, i);
                    else
                        for (n = e.childNodes, o = n.length; --o > -1;) s = n[o], a = s.type, s.style && (t.push(q(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || je(s, t, i)
                };
                return a.cascadeTo = function(e, i, n) {
                    var o, s, a, r = t.to(e, i, n),
                        l = [r],
                        c = [],
                        d = [],
                        u = [],
                        h = t._internals.reservedProps;
                    for (e = r._targets || r.target, je(e, c, u), r.render(i, !0), je(e, d), r.render(0, !0), r._enabled(!0), o = u.length; --o > -1;)
                        if (s = Z(u[o], c[o], d[o]), s.firstMPT) {
                            s = s.difs;
                            for (a in n) h[a] && (s[a] = n[a]);
                            l.push(t.to(u[o], i, s))
                        }
                    return l
                }, e.activate([a]), a
            }, !0),
            function() {
                var e = window._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(e, t, i) {
                            return this._tween = i, !0
                        }
                    }),
                    t = e.prototype;
                t._onInitAllProps = function() {
                    for (var e, t, i, n = this._tween, o = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = o.length, a = {}, r = n._propLookup.roundProps; --s > -1;) a[o[s]] = 1;
                    for (s = o.length; --s > -1;)
                        for (e = o[s], t = n._firstPT; t;) i = t._next, t.pg ? t.t._roundProps(a, !0) : t.n === e && (this._add(t.t, e, t.s, t.c), i && (i._prev = t._prev), t._prev ? t._prev._next = i : n._firstPT === t && (n._firstPT = i), t._next = t._prev = null, n._propLookup[e] = r), t = i;
                    return !1
                }, t._add = function(e, t, i, n) {
                    this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t)
                }
            }(), window._gsDefine.plugin({
                propName: "attr",
                API: 2,
                init: function(e, t) {
                    var i;
                    if ("function" != typeof e.setAttribute) return !1;
                    this._target = e, this._proxy = {};
                    for (i in t) this._addTween(this._proxy, i, parseFloat(e.getAttribute(i)), t[i], i) && this._overwriteProps.push(i);
                    return !0
                },
                set: function(e) {
                    this._super.setRatio.call(this, e);
                    for (var t, i = this._overwriteProps, n = i.length; --n > -1;) t = i[n], this._target.setAttribute(t, this._proxy[t] + "")
                }
            }), window._gsDefine.plugin({
                propName: "directionalRotation",
                API: 2,
                init: function(e, t) {
                    "object" != typeof t && (t = {
                        rotation: t
                    }), this.finals = {};
                    var i, n, o, s, a, r, l = t.useRadians === !0 ? 2 * Math.PI : 360,
                        c = 1e-6;
                    for (i in t) "useRadians" !== i && (r = (t[i] + "").split("_"), n = r[0], o = parseFloat("function" != typeof e[i] ? e[i] : e[i.indexOf("set") || "function" != typeof e["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? o + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, a = s - o, r.length && (n = r.join("_"), -1 !== n.indexOf("short") && (a %= l, a !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== n.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (0 | a / l) * l : -1 !== n.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (0 | a / l) * l)), (a > c || -c > a) && (this._addTween(e, i, o, o + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(e) {
                    var t;
                    if (1 !== e) this._super.setRatio.call(this, e);
                    else
                        for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
                }
            })._autoCSS = !0, window._gsDefine("easing.Back", ["easing.Ease"], function(e) {
                var t, i, n, o = window.GreenSockGlobals || window,
                    s = o.com.greensock,
                    a = 2 * Math.PI,
                    r = Math.PI / 2,
                    l = s._class,
                    c = function(t, i) {
                        var n = l("easing." + t, function() {}, !0),
                            o = n.prototype = new e;
                        return o.constructor = n, o.getRatio = i, n
                    },
                    d = e.register || function() {},
                    u = function(e, t, i, n) {
                        var o = l("easing." + e, {
                            easeOut: new t,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return d(o, e), o
                    },
                    h = function(e, t, i) {
                        this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
                    },
                    p = function(t, i) {
                        var n = l("easing." + t, function(e) {
                                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            o = n.prototype = new e;
                        return o.constructor = n, o.getRatio = i, o.config = function(e) {
                            return new n(e)
                        }, n
                    },
                    f = u("Back", p("BackOut", function(e) {
                        return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
                    }), p("BackIn", function(e) {
                        return e * e * ((this._p1 + 1) * e - this._p1)
                    }), p("BackInOut", function(e) {
                        return 1 > (e *= 2) ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(e, t, i) {
                        t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new e;
                return g.constructor = m, g.getRatio = function(e) {
                    var t = e + (.5 - e) * this._p;
                    return this._p1 > e ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
                }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, i) {
                    return new m(e, t, i)
                }, t = l("easing.SteppedEase", function(e) {
                    e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
                }, !0), g = t.prototype = new e, g.constructor = t, g.getRatio = function(e) {
                    return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
                }, g.config = t.config = function(e) {
                    return new t(e)
                }, i = l("easing.RoughEase", function(t) {
                    t = t || {};
                    for (var i, n, o, s, a, r, l = t.taper || "none", c = [], d = 0, u = 0 | (t.points || 20), p = u, f = t.randomize !== !1, m = t.clamp === !0, g = t.template instanceof e ? t.template : null, v = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = g ? g.getRatio(i) : i, "none" === l ? o = v : "out" === l ? (s = 1 - i, o = s * s * v) : "in" === l ? o = i * i * v : .5 > i ? (s = 2 * i, o = .5 * s * s * v) : (s = 2 * (1 - i), o = .5 * s * s * v), f ? n += Math.random() * o - .5 * o : p % 2 ? n += .5 * o : n -= .5 * o, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[d++] = {
                        x: i,
                        y: n
                    };
                    for (c.sort(function(e, t) {
                            return e.x - t.x
                        }), r = new h(1, 1, null), p = u; --p > -1;) a = c[p], r = new h(a.x, a.y, r);
                    this._prev = new h(0, 0, 0 !== r.t ? r : r.next)
                }, !0), g = i.prototype = new e, g.constructor = i, g.getRatio = function(e) {
                    var t = this._prev;
                    if (e > t.t) {
                        for (; t.next && e >= t.t;) t = t.next;
                        t = t.prev
                    } else
                        for (; t.prev && t.t >= e;) t = t.prev;
                    return this._prev = t, t.v + (e - t.t) / t.gap * t.c
                }, g.config = function(e) {
                    return new i(e)
                }, i.ease = new i, u("Bounce", c("BounceOut", function(e) {
                    return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
                }), c("BounceIn", function(e) {
                    return 1 / 2.75 > (e = 1 - e) ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
                }), c("BounceInOut", function(e) {
                    var t = .5 > e;
                    return e = t ? 1 - 2 * e : 2 * e - 1, e = 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
                })), u("Circ", c("CircOut", function(e) {
                    return Math.sqrt(1 - (e -= 1) * e)
                }), c("CircIn", function(e) {
                    return -(Math.sqrt(1 - e * e) - 1)
                }), c("CircInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })), n = function(t, i, n) {
                    var o = l("easing." + t, function(e, t) {
                            this._p1 = e || 1, this._p2 = t || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        s = o.prototype = new e;
                    return s.constructor = o, s.getRatio = i, s.config = function(e, t) {
                        return new o(e, t)
                    }, o
                }, u("Elastic", n("ElasticOut", function(e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * a / this._p2) + 1
                }, .3), n("ElasticIn", function(e) {
                    return -(this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2))
                }, .3), n("ElasticInOut", function(e) {
                    return 1 > (e *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", c("ExpoOut", function(e) {
                    return 1 - Math.pow(2, -10 * e)
                }), c("ExpoIn", function(e) {
                    return Math.pow(2, 10 * (e - 1)) - .001
                }), c("ExpoInOut", function(e) {
                    return 1 > (e *= 2) ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
                })), u("Sine", c("SineOut", function(e) {
                    return Math.sin(e * r)
                }), c("SineIn", function(e) {
                    return -Math.cos(e * r) + 1
                }), c("SineInOut", function(e) {
                    return -.5 * (Math.cos(Math.PI * e) - 1)
                })), l("easing.EaseLookup", {
                    find: function(t) {
                        return e.map[t]
                    }
                }, !0), d(o.SlowMo, "SlowMo", "ease,"), d(i, "RoughEase", "ease,"), d(t, "SteppedEase", "ease,"), f
            }, !0)
    }),
    function(e) {
        "use strict";
        var t = e.GreenSockGlobals || e;
        if (!t.TweenLite) {
            var i, n, o, s, a, r = function(e) {
                    var i, n = e.split("."),
                        o = t;
                    for (i = 0; n.length > i; i++) o[n[i]] = o = o[n[i]] || {};
                    return o
                },
                l = r("com.greensock"),
                c = 1e-10,
                d = [].slice,
                u = function() {},
                h = function() {
                    var e = Object.prototype.toString,
                        t = e.call([]);
                    return function(i) {
                        return i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t
                    }
                }(),
                p = {},
                f = function(i, n, o, s) {
                    this.sc = p[i] ? p[i].sc : [], p[i] = this, this.gsClass = null, this.func = o;
                    var a = [];
                    this.check = function(l) {
                        for (var c, d, u, h, m = n.length, g = m; --m > -1;)(c = p[n[m]] || new f(n[m], [])).gsClass ? (a[m] = c.gsClass, g--) : l && c.sc.push(this);
                        if (0 === g && o)
                            for (d = ("com.greensock." + i).split("."), u = d.pop(), h = r(d.join("."))[u] = this.gsClass = o.apply(o, a), s && (t[u] = h, "function" == typeof define && define.amd ? define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + i.split(".").join("http://www.ctrus.eu/"), [], function() {
                                    return h
                                }) : "undefined" != typeof module && module.exports && (module.exports = h)), m = 0; this.sc.length > m; m++) this.sc[m].check()
                    }, this.check(!0)
                },
                m = e._gsDefine = function(e, t, i, n) {
                    return new f(e, t, i, n)
                },
                g = l._class = function(e, t, i) {
                    return t = t || function() {}, m(e, [], function() {
                        return t
                    }, i), t
                };
            m.globals = t;
            var v = [0, 0, 1, 1],
                T = [],
                y = g("easing.Ease", function(e, t, i, n) {
                    this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? v.concat(t) : v
                }, !0),
                w = y.map = {},
                _ = y.register = function(e, t, i, n) {
                    for (var o, s, a, r, c = t.split(","), d = c.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --d > -1;)
                        for (s = c[d], o = n ? g("easing." + s, null, !0) : l.easing[s] || {}, a = u.length; --a > -1;) r = u[a], w[s + "." + r] = w[r + s] = o[r] = e.getRatio ? e : e[r] || new e
                };
            for (o = y.prototype, o._calcEnd = !1, o.getRatio = function(e) {
                    if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
                    var t = this._type,
                        i = this._power,
                        n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
                }, i = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], n = i.length; --n > -1;) o = i[n] + ",Power" + n, _(new y(null, null, 1, n), o, "easeOut", !0), _(new y(null, null, 2, n), o, "easeIn" + (0 === n ? ",easeNone" : "")), _(new y(null, null, 3, n), o, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(e) {
                this._listeners = {}, this._eventTarget = e || this
            });
            o = b.prototype, o.addEventListener = function(e, t, i, n, o) {
                o = o || 0;
                var r, l, c = this._listeners[e],
                    d = 0;
                for (null == c && (this._listeners[e] = c = []), l = c.length; --l > -1;) r = c[l], r.c === t && r.s === i ? c.splice(l, 1) : 0 === d && o > r.pr && (d = l + 1);
                c.splice(d, 0, {
                    c: t,
                    s: i,
                    up: n,
                    pr: o
                }), this !== s || a || s.wake()
            }, o.removeEventListener = function(e, t) {
                var i, n = this._listeners[e];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === t) return void n.splice(i, 1)
            }, o.dispatchEvent = function(e) {
                var t, i, n, o = this._listeners[e];
                if (o)
                    for (t = o.length, i = this._eventTarget; --t > -1;) n = o[t], n.up ? n.c.call(n.s || i, {
                        type: e,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var P = e.requestAnimationFrame,
                x = e.cancelAnimationFrame,
                C = Date.now || function() {
                    return (new Date).getTime()
                },
                M = C();
            for (i = ["ms", "moz", "webkit", "o"], n = i.length; --n > -1 && !P;) P = e[i[n] + "RequestAnimationFrame"], x = e[i[n] + "CancelAnimationFrame"] || e[i[n] + "CancelRequestAnimationFrame"];
            g("Ticker", function(e, t) {
                var i, n, o, r, l, c = this,
                    d = C(),
                    h = t !== !1 && P,
                    p = function(e) {
                        M = C(), c.time = (M - d) / 1e3;
                        var t, s = c.time - l;
                        (!i || s > 0 || e === !0) && (c.frame++, l += s + (s >= r ? .004 : r - s), t = !0), e !== !0 && (o = n(p)), t && c.dispatchEvent("tick")
                    };
                b.call(c), c.time = c.frame = 0, c.tick = function() {
                    p(!0)
                }, c.sleep = function() {
                    null != o && (h && x ? x(o) : clearTimeout(o), n = u, o = null, c === s && (a = !1))
                }, c.wake = function() {
                    null !== o && c.sleep(), n = 0 === i ? u : h && P ? P : function(e) {
                        return setTimeout(e, 0 | 1e3 * (l - c.time) + 1)
                    }, c === s && (a = !0), p(2)
                }, c.fps = function(e) {
                    return arguments.length ? (i = e, r = 1 / (i || 60), l = this.time + r, void c.wake()) : i
                }, c.useRAF = function(e) {
                    return arguments.length ? (c.sleep(), h = e, void c.fps(i)) : h
                }, c.fps(e), setTimeout(function() {
                    h && (!o || 5 > c.frame) && c.useRAF(!1)
                }, 1500)
            }), o = l.Ticker.prototype = new l.events.EventDispatcher, o.constructor = l.Ticker;
            var S = g("core.Animation", function(e, t) {
                if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = t.immediateRender === !0, this.data = t.data, this._reversed = t.reversed === !0, V) {
                    a || s.wake();
                    var i = this.vars.useFrames ? z : V;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            s = S.ticker = new l.Ticker, o = S.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var k = function() {
                C() - M > 2e3 && s.wake(), setTimeout(k, 2e3)
            };
            k(), o.play = function(e, t) {
                return arguments.length && this.seek(e, t), this.reversed(!1).paused(!1)
            }, o.pause = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!0)
            }, o.resume = function(e, t) {
                return arguments.length && this.seek(e, t), this.paused(!1)
            }, o.seek = function(e, t) {
                return this.totalTime(Number(e), t !== !1)
            }, o.restart = function(e, t) {
                return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, t !== !1, !0)
            }, o.reverse = function(e, t) {
                return arguments.length && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this
            }, o.isActive = function() {
                var e, t = this._timeline,
                    i = this._startTime;
                return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && i + this.totalDuration() / this._timeScale > e
            }, o._enabled = function(e, t) {
                return a || s.wake(), this._gc = !e, this._active = this.isActive(), t !== !0 && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(e, t) {
                return this._kill(e, t), this
            }, o._uncache = function(e) {
                for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
                return this
            }, o._swapSelfInParams = function(e) {
                for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
                return i
            }, o.eventCallback = function(e, t, i, n) {
                if ("on" === (e || "").substr(0, 2)) {
                    var o = this.vars;
                    if (1 === arguments.length) return o[e];
                    null == t ? delete o[e] : (o[e] = t, o[e + "Params"] = h(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, o[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
                }
                return this
            }, o.delay = function(e) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
            }, o.duration = function(e) {
                return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(e) {
                return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
            }, o.time = function(e, t) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
            }, o.totalTime = function(e, t, i) {
                if (a || s.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            o = this._timeline;
                        if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : o._time) - (this._reversed ? n - e : e) / this._timeScale, o._dirty || this._uncache(!1), o._timeline)
                            for (; o._timeline;) o._timeline._time !== (o._startTime + o._totalTime) / o._timeScale && o.totalTime(o._totalTime, !0), o = o._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && this.render(e, t, !1)
                }
                return this
            }, o.progress = o.totalProgress = function(e, t) {
                return arguments.length ? this.totalTime(this.duration() * e, t) : this._time / this.duration()
            }, o.startTime = function(e) {
                return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
            }, o.timeScale = function(e) {
                if (!arguments.length) return this._timeScale;
                if (e = e || c, this._timeline && this._timeline.smoothChildTiming) {
                    var t = this._pauseTime,
                        i = t || 0 === t ? t : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / e
                }
                return this._timeScale = e, this._uncache(!1)
            }, o.reversed = function(e) {
                return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(e) {
                if (!arguments.length) return this._paused;
                if (e != this._paused && this._timeline) {
                    a || e || s.wake();
                    var t = this._timeline,
                        i = t.rawTime(),
                        n = i - this._pauseTime;
                    !e && t.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = e ? i : null, this._paused = e, this._active = this.isActive(), !e && 0 !== n && this._initted && this.duration() && this.render(t.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !e && this._enabled(!0, !1), this
            };
            var E = g("core.SimpleTimeline", function(e) {
                S.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = E.prototype = new S, o.constructor = E, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = o.insert = function(e, t) {
                var i, n;
                if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = e._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (e._next = i._next, i._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = i, this._timeline && this._uncache(!0), this
            }, o._remove = function(e, t) {
                return e.timeline === this && (t || e._enabled(!1, !0), e.timeline = null, e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), this._timeline && this._uncache(!0)), this
            }, o.render = function(e, t, i) {
                var n, o = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = e; o;) n = o._next, (o._active || e >= o._startTime && !o._paused) && (o._reversed ? o.render((o._dirty ? o.totalDuration() : o._totalDuration) - (e - o._startTime) * o._timeScale, t, i) : o.render((e - o._startTime) * o._timeScale, t, i)), o = n
            }, o.rawTime = function() {
                return a || s.wake(), this._totalTime
            };
            var j = g("TweenLite", function(t, i, n) {
                    if (S.call(this, i, n), this.render = j.prototype.render, null == t) throw "Cannot tween a null target.";
                    this.target = t = "string" != typeof t ? t : j.selector(t) || t;
                    var o, s, a, r = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? N[j.defaultOverwrite] : "number" == typeof l ? l >> 0 : N[l], (r || t instanceof Array || t.push && h(t)) && "number" != typeof t[0])
                        for (this._targets = a = d.call(t, 0), this._propLookup = [], this._siblings = [], o = 0; a.length > o; o++) s = a[o], s ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(o--, 1), this._targets = a = a.concat(d.call(s, 0))) : (this._siblings[o] = W(s, this, !1), 1 === l && this._siblings[o].length > 1 && B(s, this, null, 1, this._siblings[o])) : (s = a[o--] = j.selector(s), "string" == typeof s && a.splice(o + 1, 1)) : a.splice(o--, 1);
                    else this._propLookup = {}, this._siblings = W(t, this, !1), 1 === l && this._siblings.length > 1 && B(t, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && this.render(-this._delay, !1, !0)
                }, !0),
                L = function(t) {
                    return t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
                },
                I = function(e, t) {
                    var i, n = {};
                    for (i in e) D[i] || i in t && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (n[i] = e[i], delete e[i]);
                    e.css = n
                };
            o = j.prototype = new S, o.constructor = j, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = !1, j.version = "1.11.1", j.defaultEase = o._ease = new y(null, null, 1, 1), j.defaultOverwrite = "auto", j.ticker = s, j.autoSleep = !0, j.selector = e.$ || e.jQuery || function(t) {
                return e.$ ? (j.selector = e.$, e.$(t)) : e.document ? e.document.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t
            };
            var O = j._internals = {
                    isArray: h,
                    isSelector: L
                },
                F = j._plugins = {},
                A = j._tweenLookup = {},
                R = 0,
                D = O.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1
                },
                N = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                z = S._rootFramesTimeline = new E,
                V = S._rootTimeline = new E;
            V._startTime = s.time, z._startTime = s.frame, V._active = z._active = !0, S._updateRoot = function() {
                if (V.render((s.time - V._startTime) * V._timeScale, !1, !1), z.render((s.frame - z._startTime) * z._timeScale, !1, !1), !(s.frame % 120)) {
                    var e, t, i;
                    for (i in A) {
                        for (t = A[i].tweens, e = t.length; --e > -1;) t[e]._gc && t.splice(e, 1);
                        0 === t.length && delete A[i]
                    }
                    if (i = V._first, (!i || i._paused) && j.autoSleep && !z._first && 1 === s._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || s.sleep()
                    }
                }
            }, s.addEventListener("tick", S._updateRoot);
            var W = function(e, t, i) {
                    var n, o, s = e._gsTweenID;
                    if (A[s || (e._gsTweenID = s = "t" + R++)] || (A[s] = {
                            target: e,
                            tweens: []
                        }), t && (n = A[s].tweens, n[o = n.length] = t, i))
                        for (; --o > -1;) n[o] === t && n.splice(o, 1);
                    return A[s].tweens
                },
                B = function(e, t, i, n, o) {
                    var s, a, r, l;
                    if (1 === n || n >= 4) {
                        for (l = o.length, s = 0; l > s; s++)
                            if ((r = o[s]) !== t) r._gc || r._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var d, u = t._startTime + c,
                        h = [],
                        p = 0,
                        f = 0 === t._duration;
                    for (s = o.length; --s > -1;)(r = o[s]) === t || r._gc || r._paused || (r._timeline !== t._timeline ? (d = d || H(t, 0, f), 0 === H(r, d, f) && (h[p++] = r)) : u >= r._startTime && r._startTime + r.totalDuration() / r._timeScale + c > u && ((f || !r._initted) && 2e-10 >= u - r._startTime || (h[p++] = r)));
                    for (s = p; --s > -1;) r = h[s], 2 === n && r._kill(i, e) && (a = !0), (2 !== n || !r._firstPT && r._initted) && r._enabled(!1, !1) && (a = !0);
                    return a
                },
                H = function(e, t, i) {
                    for (var n = e._timeline, o = n._timeScale, s = e._startTime; n._timeline;) {
                        if (s += n._startTime, o *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= o, s > t ? s - t : i && s === t || !e._initted && 2 * c > s - t ? c : (s += e.totalDuration() / e._timeScale / o) > t + c ? 0 : s - t - c
                };
            o._init = function() {
                var e, t, i, n, o = this.vars,
                    s = this._overwrittenProps,
                    a = this._duration,
                    r = o.immediateRender,
                    l = o.ease;
                if (o.startAt) {
                    if (this._startAt && this._startAt.render(-1, !0), o.startAt.overwrite = 0, o.startAt.immediateRender = !0, this._startAt = j.to(this.target, 0, o.startAt), r)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (o.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt = null;
                    else {
                        i = {};
                        for (n in o) D[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", this._startAt = j.to(this.target, 0, i), o.immediateRender) {
                            if (0 === this._time) return
                        } else this._startAt.render(-1, !0)
                    }
                if (this._ease = l ? l instanceof y ? o.easeParams instanceof Array ? l.config.apply(l, o.easeParams) : l : "function" == typeof l ? new y(l, o.easeParams) : w[l] || j.defaultEase : j.defaultEase, this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], s ? s[e] : null) && (t = !0);
                else t = this._initProps(this.target, this._propLookup, this._siblings, s);
                if (t && j._onPluginEvent("_onInitAllProps", this), s && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(t, i, n, o) {
                var s, a, r, l, c, d;
                if (null == t) return !1;
                this.vars.css || t.style && t !== e && t.nodeType && F.css && this.vars.autoCSS !== !1 && I(this.vars, t);
                for (s in this.vars) {
                    if (d = this.vars[s], D[s]) d && (d instanceof Array || d.push && h(d)) && -1 !== d.join("").indexOf("{self}") && (this.vars[s] = d = this._swapSelfInParams(d, this));
                    else if (F[s] && (l = new F[s])._onInitTween(t, this.vars[s], this)) {
                        for (this._firstPT = c = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (r = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = c = {
                        _next: this._firstPT,
                        t: t,
                        p: s,
                        f: "function" == typeof t[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, c.s = c.f ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), c.c = "string" == typeof d && "=" === d.charAt(1) ? parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2)) : Number(d) - c.s || 0;
                    c && c._next && (c._next._prev = c)
                }
                return o && this._kill(o, t) ? this._initProps(t, i, n, o) : this._overwrite > 1 && this._firstPT && n.length > 1 && B(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, o)) : r
            }, o.render = function(e, t, i) {
                var n, o, s, a, r = this._time,
                    l = this._duration;
                if (e >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, o = "onComplete"), 0 === l && (a = this._rawPrevTime, (0 === e || 0 > a || a === c) && a !== e && (i = !0, a > c && (o = "onReverseComplete")), this._rawPrevTime = a = !t || e ? e : c);
                else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === l && this._rawPrevTime > c) && (o = "onReverseComplete", n = this._reversed), 0 > e ? (this._active = !1, 0 === l && (this._rawPrevTime >= 0 && (i = !0), this._rawPrevTime = a = !t || e ? e : c)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = e, this._easeType) {
                    var d = e / l,
                        u = this._easeType,
                        h = this._easePower;
                    (1 === u || 3 === u && d >= .5) && (d = 1 - d), 3 === u && (d *= 2), 1 === h ? d *= d : 2 === h ? d *= d * d : 3 === h ? d *= d * d * d : 4 === h && (d *= d * d * d * d), this.ratio = 1 === u ? 1 - d : 2 === u ? d : .5 > e / l ? d / 2 : 1 - d / 2
                } else this.ratio = this._ease.getRatio(e / l);
                if (this._time !== r || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._active || !this._paused && this._time !== r && e >= 0 && (this._active = !0), 0 === r && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : o || (o = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || T))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || i && 0 === this._time && 0 === r || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || T)), o && (this._gc || (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || T), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0)))
                }
            }, o._kill = function(e, t) {
                if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._enabled(!1, !1);
                t = "string" != typeof t ? t || this._targets || this.target : j.selector(t) || t;
                var i, n, o, s, a, r, l, c;
                if ((h(t) || L(t)) && "number" != typeof t[0])
                    for (i = t.length; --i > -1;) this._kill(e, t[i]) && (r = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (t === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = e ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (t !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        l = e || a, c = e !== n && "all" !== n && e !== a && ("object" != typeof e || !e._tempKill);
                        for (o in l)(s = a[o]) && (s.pg && s.t._kill(l) && (r = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), c && (n[o] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return r
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && j._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = !1, this._propLookup = this._targets ? {} : [], this
            }, o._enabled = function(e, t) {
                if (a || s.wake(), e && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = W(n[i], this, !0);
                    else this._siblings = W(this.target, this, !0)
                }
                return S.prototype._enabled.call(this, e, t), this._notifyPluginsOfEnabled && this._firstPT ? j._onPluginEvent(e ? "_onEnable" : "_onDisable", this) : !1
            }, j.to = function(e, t, i) {
                return new j(e, t, i)
            }, j.from = function(e, t, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new j(e, t, i)
            }, j.fromTo = function(e, t, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new j(e, t, n)
            }, j.delayedCall = function(e, t, i, n, o) {
                return new j(t, 0, {
                    delay: e,
                    onComplete: t,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: t,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: o,
                    overwrite: 0
                })
            }, j.set = function(e, t) {
                return new j(e, 0, t)
            }, j.getTweensOf = function(e, t) {
                if (null == e) return [];
                e = "string" != typeof e ? e : j.selector(e) || e;
                var i, n, o, s;
                if ((h(e) || L(e)) && "number" != typeof e[0]) {
                    for (i = e.length, n = []; --i > -1;) n = n.concat(j.getTweensOf(e[i], t));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], o = i; --o > -1;) s === n[o] && n.splice(i, 1)
                } else
                    for (n = W(e).concat(), i = n.length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, j.killTweensOf = j.killDelayedCallsTo = function(e, t, i) {
                "object" == typeof t && (i = t, t = !1);
                for (var n = j.getTweensOf(e, t), o = n.length; --o > -1;) n[o]._kill(i, e)
            };
            var Y = g("plugins.TweenPlugin", function(e, t) {
                this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = Y.prototype
            }, !0);
            if (o = Y.prototype, Y.version = "1.10.1", Y.API = 2, o._firstPT = null, o._addTween = function(e, t, i, n, o, s) {
                    var a, r;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = r = {
                        _next: this._firstPT,
                        t: e,
                        p: t,
                        s: i,
                        c: a,
                        f: "function" == typeof e[t],
                        n: o || t,
                        r: s
                    }, r._next && (r._next._prev = r), r) : void 0
                }, o.setRatio = function(e) {
                    for (var t, i = this._firstPT, n = 1e-6; i;) t = i.c * e + i.s, i.r ? t = 0 | t + (t > 0 ? .5 : -.5) : n > t && t > -n && (t = 0), i.f ? i.t[i.p](t) : i.t[i.p] = t, i = i._next
                }, o._kill = function(e) {
                    var t, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != e[this._propName]) this._overwriteProps = [];
                    else
                        for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
                    for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._roundProps = function(e, t) {
                    for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
                }, j._onPluginEvent = function(e, t) {
                    var i, n, o, s, a, r = t._firstPT;
                    if ("_onInitAllProps" === e) {
                        for (; r;) {
                            for (a = r._next, n = o; n && n.pr > r.pr;) n = n._next;
                            (r._prev = n ? n._prev : s) ? r._prev._next = r: o = r, (r._next = n) ? n._prev = r : s = r,
                                r = a
                        }
                        r = t._firstPT = o
                    }
                    for (; r;) r.pg && "function" == typeof r.t[e] && r.t[e]() && (i = !0), r = r._next;
                    return i
                }, Y.activate = function(e) {
                    for (var t = e.length; --t > -1;) e[t].API === Y.API && (F[(new e[t])._propName] = e[t]);
                    return !0
                }, m.plugin = function(e) {
                    if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
                    var t, i = e.propName,
                        n = e.priority || 0,
                        o = e.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Y.call(this, i, n), this._overwriteProps = o || []
                        }, e.global === !0),
                        r = a.prototype = new Y(i);
                    r.constructor = a, a.API = e.API;
                    for (t in s) "function" == typeof e[t] && (r[s[t]] = e[t]);
                    return a.version = e.version, Y.activate([a]), a
                }, i = e._gsQueue) {
                for (n = 0; i.length > n; n++) i[n]();
                for (o in p) p[o].func || e.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            a = !1
        }
    }(window),
    /*! * VERSION: beta 1.7.1
 * DATE: 2013-10-23
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/

$(document).ready(function(){

$("img.a").hover(
function() {
$(this).stop().animate({"opacity": "0"}, "slow");
},
function() {
$(this).stop().animate({"opacity": "1"}, "slow");
});

});

(window._gsQueue || (window._gsQueue = [])).push(function() {
    "use strict";
    var e = document.documentElement,
        t = window,
        i = function(i, n) {
            var o = "x" === n ? "Width" : "Height",
                s = "scroll" + o,
                a = "client" + o,
                r = document.body;
            return i === t || i === e || i === r ? Math.max(e[s], r[s]) - (t["inner" + o] || Math.max(e[a], r[a])) : i[s] - i["offset" + o]
        },
        n = window._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            init: function(e, n, o) {
                return this._wdw = e === t, this._target = e, this._tween = o, "object" != typeof n && (n = {
                    y: n
                }), this._autoKill = n.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? this._addTween(this, "x", this.x, "max" === n.x ? i(e, "x") : n.x, "scrollTo_x", !0) : this.skipX = !0, null != n.y ? this._addTween(this, "y", this.y, "max" === n.y ? i(e, "y") : n.y, "scrollTo_y", !0) : this.skipY = !0, !0
            },
            set: function(e) {
                this._super.setRatio.call(this, e);
                var i = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    n = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    o = n - this.yPrev,
                    s = i - this.xPrev;
                this._autoKill && (!this.skipX && (s > 7 || -7 > s) && (this.skipX = !0), !this.skipY && (o > 7 || -7 > o) && (this.skipY = !0), this.skipX && this.skipY && this._tween.kill()), this._wdw ? t.scrollTo(this.skipX ? i : this.x, this.skipY ? n : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        o = n.prototype;
    n.max = i, o.getX = function() {
        return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, o.getY = function() {
        return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, o._kill = function(e) {
        return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
    }
}), window._gsDefine && window._gsQueue.pop()();
var mejs = mejs || {};
if (mejs.version = "2.12.1", mejs.meIndex = 0, mejs.plugins = {
        silverlight: [{
            version: [3, 0],
            types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
        }],
        flash: [{
            version: [9, 0, 124],
            types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
        }],
        youtube: [{
            version: null,
            types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
        }],
        vimeo: [{
            version: null,
            types: ["video/vimeo", "video/x-vimeo"]
        }]
    }, mejs.Utility = {
        encodeUrl: function(e) {
            return encodeURIComponent(e)
        },
        escapeHTML: function(e) {
            return e.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
        },
        absolutizeUrl: function(e) {
            var t = document.createElement("div");
            return t.innerHTML = '<a href="' + this.escapeHTML(e) + '">x</a>', t.firstChild.href
        },
        getScriptPath: function(e) {
            for (var t = 0, i, n = "", o = "", s, a, r, l, c, d = document.getElementsByTagName("script"), u = d.length, h = e.length; u > t; t++) {
                for (r = d[t].src, s = r.lastIndexOf("http://www.ctrus.eu/"), s > -1 ? (c = r.substring(s + 1), l = r.substring(0, s + 1)) : (c = r, l = ""), i = 0; h > i; i++)
                    if (o = e[i], a = c.indexOf(o), a > -1) {
                        n = l;
                        break
                    }
                if ("" !== n) break
            }
            return n
        },
        secondsToTimeCode: function(e, t, i, n) {
            "undefined" == typeof i ? i = !1 : "undefined" == typeof n && (n = 25);
            var o = Math.floor(e / 3600) % 24,
                s = Math.floor(e / 60) % 60,
                a = Math.floor(e % 60),
                r = Math.floor((e % 1 * n).toFixed(3)),
                l = (t || o > 0 ? (10 > o ? "0" + o : o) + ":" : "") + (10 > s ? "0" + s : s) + ":" + (10 > a ? "0" + a : a) + (i ? ":" + (10 > r ? "0" + r : r) : "");
            return l
        },
        timeCodeToSeconds: function(e, t, i, n) {
            "undefined" == typeof i ? i = !1 : "undefined" == typeof n && (n = 25);
            var o = e.split(":"),
                s = parseInt(o[0], 10),
                a = parseInt(o[1], 10),
                r = parseInt(o[2], 10),
                l = 0,
                c = 0;
            return i && (l = parseInt(o[3]) / n), c = 3600 * s + 60 * a + r + l
        },
        convertSMPTEtoSeconds: function(e) {
            if ("string" != typeof e) return !1;
            e = e.replace(",", ".");
            var t = 0,
                i = -1 != e.indexOf(".") ? e.split(".")[1].length : 0,
                n = 1;
            e = e.split(":").reverse();
            for (var o = 0; o < e.length; o++) n = 1, o > 0 && (n = Math.pow(60, o)), t += Number(e[o]) * n;
            return Number(t.toFixed(i))
        },
        removeSwf: function(e) {
            var t = document.getElementById(e);
            t && /object|embed/i.test(t.nodeName) && (mejs.MediaFeatures.isIE ? (t.style.display = "none", function() {
                4 == t.readyState ? mejs.Utility.removeObjectInIE(e) : setTimeout(arguments.callee, 10)
            }()) : t.parentNode.removeChild(t))
        },
        removeObjectInIE: function(e) {
            var t = document.getElementById(e);
            if (t) {
                for (var i in t) "function" == typeof t[i] && (t[i] = null);
                t.parentNode.removeChild(t)
            }
        }
    }, mejs.PluginDetector = {
        hasPluginVersion: function(e, t) {
            var i = this.plugins[e];
            return t[1] = t[1] || 0, t[2] = t[2] || 0, i[0] > t[0] || i[0] == t[0] && i[1] > t[1] || i[0] == t[0] && i[1] == t[1] && i[2] >= t[2] ? !0 : !1
        },
        nav: window.navigator,
        ua: window.navigator.userAgent.toLowerCase(),
        plugins: [],
        addPlugin: function(e, t, i, n, o) {
            this.plugins[e] = this.detectPlugin(t, i, n, o)
        },
        detectPlugin: function(e, t, i, n) {
            var o = [0, 0, 0],
                s, a, r;
            if ("undefined" != typeof this.nav.plugins && "object" == typeof this.nav.plugins[e]) {
                if (s = this.nav.plugins[e].description, s && ("undefined" == typeof this.nav.mimeTypes || !this.nav.mimeTypes[t] || this.nav.mimeTypes[t].enabledPlugin))
                    for (o = s.replace(e, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split("."), a = 0; a < o.length; a++) o[a] = parseInt(o[a].match(/\d+/), 10)
            } else if ("undefined" != typeof window.ActiveXObject) try {
                r = new ActiveXObject(i), r && (o = n(r))
            } catch (l) {}
            return o
        }
    }, mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(e) {
        var t = [],
            i = e.GetVariable("$version");
        return i && (i = i.split(" ")[1].split(","), t = [parseInt(i[0], 10), parseInt(i[1], 10), parseInt(i[2], 10)]), t
    }), mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(e) {
        var t = [0, 0, 0, 0],
            i = function(e, t, i, n) {
                for (; e.isVersionSupported(t[0] + "." + t[1] + "." + t[2] + "." + t[3]);) t[i] += n;
                t[i] -= n
            };
        return i(e, t, 0, 1), i(e, t, 1, 1), i(e, t, 2, 1e4), i(e, t, 2, 1e3), i(e, t, 2, 100), i(e, t, 2, 10), i(e, t, 2, 1), i(e, t, 3, 1), t
    }), mejs.MediaFeatures = {
        init: function() {
            var e = this,
                t = document,
                i = mejs.PluginDetector.nav,
                n = mejs.PluginDetector.ua.toLowerCase(),
                o, s, a = ["source", "track", "audio", "video"];
            e.isiPad = null !== n.match(/ipad/i), e.isiPhone = null !== n.match(/iphone/i), e.isiOS = e.isiPhone || e.isiPad, e.isAndroid = null !== n.match(/android/i), e.isBustedAndroid = null !== n.match(/android 2\.[12]/), e.isBustedNativeHTTPS = "https:" === location.protocol && (null !== n.match(/android [12]\./) || null !== n.match(/macintosh.* version.* safari/)), e.isIE = -1 != i.appName.toLowerCase().indexOf("microsoft"), e.isChrome = null !== n.match(/chrome/gi), e.isFirefox = null !== n.match(/firefox/gi), e.isWebkit = null !== n.match(/webkit/gi), e.isGecko = null !== n.match(/gecko/gi) && !e.isWebkit, e.isOpera = null !== n.match(/opera/gi), e.hasTouch = "ontouchstart" in window && null != window.ontouchstart, e.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
            for (o = 0; o < a.length; o++) s = document.createElement(a[o]);
            e.supportsMediaTag = "undefined" != typeof s.canPlayType || e.isBustedAndroid;
            try {
                s.canPlayType("video/mp4")
            } catch (r) {
                e.supportsMediaTag = !1
            }
            e.hasSemiNativeFullScreen = "undefined" != typeof s.webkitEnterFullscreen, e.hasWebkitNativeFullScreen = "undefined" != typeof s.webkitRequestFullScreen, e.hasMozNativeFullScreen = "undefined" != typeof s.mozRequestFullScreen, e.hasTrueNativeFullScreen = e.hasWebkitNativeFullScreen || e.hasMozNativeFullScreen, e.nativeFullScreenEnabled = e.hasTrueNativeFullScreen, e.hasMozNativeFullScreen && (e.nativeFullScreenEnabled = s.mozFullScreenEnabled), this.isChrome && (e.hasSemiNativeFullScreen = !1), e.hasTrueNativeFullScreen && (e.fullScreenEventName = e.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange", e.isFullScreen = function() {
                return s.mozRequestFullScreen ? t.mozFullScreen : s.webkitRequestFullScreen ? t.webkitIsFullScreen : void 0
            }, e.requestFullScreen = function(t) {
                e.hasWebkitNativeFullScreen ? t.webkitRequestFullScreen() : e.hasMozNativeFullScreen && t.mozRequestFullScreen()
            }, e.cancelFullScreen = function() {
                e.hasWebkitNativeFullScreen ? document.webkitCancelFullScreen() : e.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }), e.hasSemiNativeFullScreen && n.match(/mac os x 10_5/i) && (e.hasNativeFullScreen = !1, e.hasSemiNativeFullScreen = !1)
        }
    }, mejs.MediaFeatures.init(), mejs.HtmlMediaElement = {
        pluginType: "native",
        isFullScreen: !1,
        setCurrentTime: function(e) {
            this.currentTime = e
        },
        setMuted: function(e) {
            this.muted = e
        },
        setVolume: function(e) {
            this.volume = e
        },
        stop: function() {
            this.pause()
        },
        setSrc: function(e) {
            for (var t = this.getElementsByTagName("source"); t.length > 0;) this.removeChild(t[0]);
            if ("string" == typeof e) this.src = e;
            else {
                var i, n;
                for (i = 0; i < e.length; i++)
                    if (n = e[i], this.canPlayType(n.type)) {
                        this.src = n.src;
                        break
                    }
            }
        },
        setVideoSize: function(e, t) {
            this.width = e, this.height = t
        }
    }, mejs.PluginMediaElement = function(e, t, i) {
        this.id = e, this.pluginType = t, this.src = i, this.events = {}, this.attributes = {}
    }, mejs.PluginMediaElement.prototype = {
        pluginElement: null,
        pluginType: "",
        isFullScreen: !1,
        playbackRate: -1,
        defaultPlaybackRate: -1,
        seekable: [],
        played: [],
        paused: !0,
        ended: !1,
        seeking: !1,
        duration: 0,
        error: null,
        tagName: "",
        muted: !1,
        volume: 1,
        currentTime: 0,
        play: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.playVideo() : this.pluginApi.playMedia(), this.paused = !1)
        },
        load: function() {
            null != this.pluginApi && ("youtube" == this.pluginType || this.pluginApi.loadMedia(), this.paused = !1)
        },
        pause: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia(), this.paused = !0)
        },
        stop: function() {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia(), this.paused = !0)
        },
        canPlayType: function(e) {
            var t, i, n, o = mejs.plugins[this.pluginType];
            for (t = 0; t < o.length; t++)
                if (n = o[t], mejs.PluginDetector.hasPluginVersion(this.pluginType, n.version))
                    for (i = 0; i < n.types.length; i++)
                        if (e == n.types[i]) return "probably";
            return ""
        },
        positionFullscreenButton: function(e, t, i) {
            null != this.pluginApi && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(e), Math.floor(t), i)
        },
        hideFullscreenButton: function() {
            null != this.pluginApi && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
        },
        setSrc: function(e) {
            if ("string" == typeof e) this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(e)), this.src = mejs.Utility.absolutizeUrl(e);
            else {
                var t, i;
                for (t = 0; t < e.length; t++)
                    if (i = e[t], this.canPlayType(i.type)) {
                        this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(i.src)), this.src = mejs.Utility.absolutizeUrl(e);
                        break
                    }
            }
        },
        setCurrentTime: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.seekTo(e) : this.pluginApi.setCurrentTime(e), this.currentTime = e)
        },
        setVolume: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? this.pluginApi.setVolume(100 * e) : this.pluginApi.setVolume(e), this.volume = e)
        },
        setMuted: function(e) {
            null != this.pluginApi && ("youtube" == this.pluginType ? (e ? this.pluginApi.mute() : this.pluginApi.unMute(), this.muted = e, this.dispatchEvent("volumechange")) : this.pluginApi.setMuted(e), this.muted = e)
        },
        setVideoSize: function(e, t) {
            this.pluginElement.style && (this.pluginElement.style.width = e + "px", this.pluginElement.style.height = t + "px"), null != this.pluginApi && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(e, t)
        },
        setFullscreen: function(e) {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(e)
        },
        enterFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!0)
        },
        exitFullScreen: function() {
            null != this.pluginApi && this.pluginApi.setFullscreen && this.setFullscreen(!1)
        },
        addEventListener: function(e, t, i) {
            this.events[e] = this.events[e] || [], this.events[e].push(t)
        },
        removeEventListener: function(e, t) {
            if (!e) return this.events = {}, !0;
            var n = this.events[e];
            if (!n) return !0;
            if (!t) return this.events[e] = [], !0;
            for (i = 0; i < n.length; i++)
                if (n[i] === t) return this.events[e].splice(i, 1), !0;
            return !1
        },
        dispatchEvent: function(e) {
            var t, i, n = this.events[e];
            if (n)
                for (i = Array.prototype.slice.call(arguments, 1), t = 0; t < n.length; t++) n[t].apply(null, i)
        },
        hasAttribute: function(e) {
            return e in this.attributes
        },
        removeAttribute: function(e) {
            delete this.attributes[e]
        },
        getAttribute: function(e) {
            return this.hasAttribute(e) ? this.attributes[e] : ""
        },
        setAttribute: function(e, t) {
            this.attributes[e] = t
        },
        remove: function() {
            mejs.Utility.removeSwf(this.pluginElement.id), mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
        }
    }, mejs.MediaPluginBridge = {
        pluginMediaElements: {},
        htmlMediaElements: {},
        registerPluginElement: function(e, t, i) {
            this.pluginMediaElements[e] = t, this.htmlMediaElements[e] = i
        },
        unregisterPluginElement: function(e) {
            delete this.pluginMediaElements[e], delete this.htmlMediaElements[e]
        },
        initPlugin: function(e) {
            var t = this.pluginMediaElements[e],
                i = this.htmlMediaElements[e];
            if (t) {
                switch (t.pluginType) {
                    case "flash":
                        t.pluginElement = t.pluginApi = document.getElementById(e);
                        break;
                    case "silverlight":
                        t.pluginElement = document.getElementById(t.id), t.pluginApi = t.pluginElement.Content.MediaElementJS
                }
                null != t.pluginApi && t.success && t.success(t, i)
            }
        },
        fireEvent: function(e, t, i) {
            var n, o, s, a = this.pluginMediaElements[e];
            if (a) {
                n = {
                    type: t,
                    target: a
                };
                for (o in i) a[o] = i[o], n[o] = i[o];
                s = i.bufferedTime || 0, n.target.buffered = n.buffered = {
                    start: function(e) {
                        return 0
                    },
                    end: function(e) {
                        return s
                    },
                    length: 1
                }, a.dispatchEvent(n.type, n)
            }
        }
    }, mejs.MediaElementDefaults = {
        mode: "auto",
        plugins: ["flash", "silverlight", "youtube", "vimeo"],
        enablePluginDebug: !1,
        httpsBasicAuthSite: !1,
        type: "",
        pluginPath: TEMPLATE_URL + "/js/vendor/mediaelement/",
        flashName: "flashmediaelement.swf",
        flashStreamer: "",
        enablePluginSmoothing: !1,
        enablePseudoStreaming: !1,
        pseudoStreamingStartQueryParam: "start",
        silverlightName: "silverlightmediaelement.xap",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        pluginWidth: -1,
        pluginHeight: -1,
        pluginVars: [],
        timerRate: 250,
        startVolume: .8,
        success: function() {},
        error: function() {}
    }, mejs.MediaElement = function(e, t) {
        return mejs.HtmlMediaElementShim.create(e, t)
    }, mejs.HtmlMediaElementShim = {
        create: function(e, t) {
            var i = mejs.MediaElementDefaults,
                n = "string" == typeof e ? document.getElementById(e) : e,
                o = n.tagName.toLowerCase(),
                s = "audio" === o || "video" === o,
                a = s ? n.getAttribute("src") : n.getAttribute("href"),
                r = n.getAttribute("poster"),
                l = n.getAttribute("autoplay"),
                c = n.getAttribute("preload"),
                d = n.getAttribute("controls"),
                u, h;
            for (h in t) i[h] = t[h];
            return a = "undefined" == typeof a || null === a || "" == a ? null : a, r = "undefined" == typeof r || null === r ? "" : r, c = "undefined" == typeof c || null === c || "false" === c ? "none" : c, l = !("undefined" == typeof l || null === l || "false" === l), d = !("undefined" == typeof d || null === d || "false" === d), u = this.determinePlayback(n, i, mejs.MediaFeatures.supportsMediaTag, s, a), u.url = null !== u.url ? mejs.Utility.absolutizeUrl(u.url) : "", "native" == u.method ? (mejs.MediaFeatures.isBustedAndroid && (n.src = u.url, n.addEventListener("click", function() {
                n.play()
            }, !1)), this.updateNative(u, i, l, c)) : "" !== u.method ? this.createPlugin(u, i, r, l, c, d) : (this.createErrorMessage(u, i, r), this)
        },
        determinePlayback: function(e, t, i, n, o) {
            var s = [],
                a, r, l, c, d, u, h = {
                    method: "",
                    url: "",
                    htmlMediaElement: e,
                    isVideo: "audio" != e.tagName.toLowerCase()
                },
                p, f, m, g, v;
            if ("undefined" != typeof t.type && "" !== t.type)
                if ("string" == typeof t.type) s.push({
                    type: t.type,
                    url: o
                });
                else
                    for (a = 0; a < t.type.length; a++) s.push({
                        type: t.type[a],
                        url: o
                    });
            else if (null !== o) u = this.formatType(o, e.getAttribute("type")), s.push({
                type: u,
                url: o
            });
            else
                for (a = 0; a < e.childNodes.length; a++) d = e.childNodes[a], 1 == d.nodeType && "source" == d.tagName.toLowerCase() && (o = d.getAttribute("src"), u = this.formatType(o, d.getAttribute("type")), v = d.getAttribute("media"), (!v || !window.matchMedia || window.matchMedia && window.matchMedia(v).matches) && s.push({
                    type: u,
                    url: o
                }));
            if (!n && s.length > 0 && null !== s[0].url && this.getTypeFromFile(s[0].url).indexOf("audio") > -1 && (h.isVideo = !1), mejs.MediaFeatures.isBustedAndroid && (e.canPlayType = function(e) {
                    return null !== e.match(/video\/(mp4|m4v)/gi) ? "maybe" : ""
                }), !(!i || "auto" !== t.mode && "auto_plugin" !== t.mode && "native" !== t.mode || mejs.MediaFeatures.isBustedNativeHTTPS && t.httpsBasicAuthSite === !0)) {
                for (n || (g = document.createElement(h.isVideo ? "video" : "audio"), e.parentNode.insertBefore(g, e), e.style.display = "none", h.htmlMediaElement = e = g), a = 0; a < s.length; a++)
                    if ("" !== e.canPlayType(s[a].type).replace(/no/, "") || "" !== e.canPlayType(s[a].type.replace(/mp3/, "mpeg")).replace(/no/, "")) {
                        h.method = "native", h.url = s[a].url;
                        break
                    }
                if ("native" === h.method && (null !== h.url && (e.src = h.url), "auto_plugin" !== t.mode)) return h
            }
            if ("auto" === t.mode || "auto_plugin" === t.mode || "shim" === t.mode)
                for (a = 0; a < s.length; a++)
                    for (u = s[a].type, r = 0; r < t.plugins.length; r++)
                        for (p = t.plugins[r], f = mejs.plugins[p], l = 0; l < f.length; l++)
                            if (m = f[l], null == m.version || mejs.PluginDetector.hasPluginVersion(p, m.version))
                                for (c = 0; c < m.types.length; c++)
                                    if (u == m.types[c]) return h.method = p, h.url = s[a].url, h;
            return "auto_plugin" === t.mode && "native" === h.method ? h : ("" === h.method && s.length > 0 && (h.url = s[0].url), h)
        },
        formatType: function(e, t) {
            var i;
            return e && !t ? this.getTypeFromFile(e) : t && ~t.indexOf(";") ? t.substr(0, t.indexOf(";")) : t
        },
        getTypeFromFile: function(e) {
            e = e.split("?")[0];
            var t = e.substring(e.lastIndexOf(".") + 1).toLowerCase();
            return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(t) ? "video" : "audio") + "/" + this.getTypeFromExtension(t)
        },
        getTypeFromExtension: function(e) {
            switch (e) {
                case "mp4":
                case "m4v":
                    return "mp4";
                case "webm":
                case "webma":
                case "webmv":
                    return "webm";
                case "ogg":
                case "oga":
                case "ogv":
                    return "ogg";
                default:
                    return e
            }
        },
        createErrorMessage: function(e, t, i) {
            var n = e.htmlMediaElement,
                o = document.createElement("div");
            o.className = "me-cannotplay";
            try {
                o.style.width = n.width + "px", o.style.height = n.height + "px"
            } catch (s) {}
            t.customError ? o.innerHTML = t.customError : o.innerHTML = "" !== i ? '<a href="' + e.url + '"><img src="' + i + '" width="100%" height="100%" /></a>' : '<a href="' + e.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>", n.parentNode.insertBefore(o, n), n.style.display = "none", t.error(n)
        },
        createPlugin: function(e, t, i, n, o, s) {
            var a = e.htmlMediaElement,
                r = 1,
                l = 1,
                c = "me_" + e.method + "_" + mejs.meIndex++,
                d = new mejs.PluginMediaElement(c, e.method, e.url),
                u = document.createElement("div"),
                h, p, f;
            d.tagName = a.tagName;
            for (var m = 0; m < a.attributes.length; m++) {
                var g = a.attributes[m];
                1 == g.specified && d.setAttribute(g.name, g.value)
            }
            for (p = a.parentNode; null !== p && "body" != p.tagName.toLowerCase();) {
                if ("p" == p.parentNode.tagName.toLowerCase()) {
                    p.parentNode.parentNode.insertBefore(p, p.parentNode);
                    break
                }
                p = p.parentNode
            }
            switch (e.isVideo ? (r = t.pluginWidth > 0 ? t.pluginWidth : t.videoWidth > 0 ? t.videoWidth : null !== a.getAttribute("width") ? a.getAttribute("width") : t.defaultVideoWidth, l = t.pluginHeight > 0 ? t.pluginHeight : t.videoHeight > 0 ? t.videoHeight : null !== a.getAttribute("height") ? a.getAttribute("height") : t.defaultVideoHeight, r = mejs.Utility.encodeUrl(r), l = mejs.Utility.encodeUrl(l)) : t.enablePluginDebug && (r = 320, l = 240), d.success = t.success, mejs.MediaPluginBridge.registerPluginElement(c, d, a), u.className = "me-plugin", u.id = c + "_container", e.isVideo ? a.parentNode.insertBefore(u, a) : document.body.insertBefore(u, document.body.childNodes[0]), f = ["id=" + c, "isvideo=" + (e.isVideo ? "true" : "false"), "autoplay=" + (n ? "true" : "false"), "preload=" + o, "width=" + r, "startvolume=" + t.startVolume, "timerrate=" + t.timerRate, "flashstreamer=" + t.flashStreamer, "height=" + l, "pseudostreamstart=" + t.pseudoStreamingStartQueryParam], null !== e.url && ("flash" == e.method ? f.push("file=" + mejs.Utility.encodeUrl(e.url)) : f.push("file=" + e.url)), t.enablePluginDebug && f.push("debug=true"), t.enablePluginSmoothing && f.push("smoothing=true"), t.enablePseudoStreaming && f.push("pseudostreaming=true"), s && f.push("controls=true"), t.pluginVars && (f = f.concat(t.pluginVars)), e.method) {
                case "silverlight":
                    u.innerHTML = '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + c + '" name="' + c + '" width="' + r + '" height="' + l + '" class="mejs-shim"><param name="initParams" value="' + f.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + t.pluginPath + t.silverlightName + '" /></object>';
                    break;
                case "flash":
                    mejs.MediaFeatures.isIE ? (h = document.createElement("div"), u.appendChild(h), h.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + c + '" width="' + r + '" height="' + l + '" class="mejs-shim"><param name="movie" value="' + t.pluginPath + t.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + f.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : u.innerHTML = '<embed id="' + c + '" name="' + c + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + t.pluginPath + t.flashName + '" flashvars="' + f.join("&") + '" width="' + r + '" height="' + l + '" class="mejs-shim"></embed>';
                    break;
                case "youtube":
                    var v = e.url.substr(e.url.lastIndexOf("=") + 1);
                    youtubeSettings = {
                        container: u,
                        containerId: u.id,
                        pluginMediaElement: d,
                        pluginId: c,
                        videoId: v,
                        height: l,
                        width: r
                    }, mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                    break;
                case "vimeo":
                    d.vimeoid = e.url.substr(e.url.lastIndexOf("http://www.ctrus.eu/") + 1), u.innerHTML = '<iframe src="http://player.vimeo.com/video/' + d.vimeoid + '?portrait=0&byline=0&title=0" width="' + r + '" height="' + l + '" frameborder="0" class="mejs-shim"></iframe>'
            }
            return a.style.display = "none", a.removeAttribute("autoplay"), d
        },
        updateNative: function(e, t, i, n) {
            var o = e.htmlMediaElement,
                s;
            for (s in mejs.HtmlMediaElement) o[s] = mejs.HtmlMediaElement[s];
            return t.success(o, o), o
        }
    }, mejs.YouTubeApi = {
        isIframeStarted: !1,
        isIframeLoaded: !1,
        loadIframeApi: function() {
            if (!this.isIframeStarted) {
                var e = document.createElement("script");
                e.src = "http://www.youtube.com/player_api";
                var t = document.getElementsByTagName("script")[0];
                t.parentNode.insertBefore(e, t), this.isIframeStarted = !0
            }
        },
        iframeQueue: [],
        enqueueIframe: function(e) {
            this.isLoaded ? this.createIframe(e) : (this.loadIframeApi(), this.iframeQueue.push(e))
        },
        createIframe: function(e) {
            var t = e.pluginMediaElement,
                i = new YT.Player(e.containerId, {
                    height: e.height,
                    width: e.width,
                    videoId: e.videoId,
                    playerVars: {
                        controls: 2,
                        hd: 1
                    },
                    events: {
                        onReady: function() {
                            e.pluginMediaElement.pluginApi = i, mejs.MediaPluginBridge.initPlugin(e.pluginId), setInterval(function() {
                                mejs.YouTubeApi.createEvent(i, t, "timeupdate")
                            }, 250)
                        },
                        onStateChange: function(e) {
                            mejs.YouTubeApi.handleStateChange(e.data, i, t)
                        }
                    }
                })
        },
        createEvent: function(e, t, i) {
            var n = {
                type: i,
                target: t
            };
            if (e && e.getDuration) {
                t.currentTime = n.currentTime = e.getCurrentTime(), t.duration = n.duration = e.getDuration(), n.paused = t.paused, n.ended = t.ended, n.muted = e.isMuted(), n.volume = e.getVolume() / 100, n.bytesTotal = e.getVideoBytesTotal(), n.bufferedBytes = e.getVideoBytesLoaded();
                var o = n.bufferedBytes / n.bytesTotal * n.duration;
                n.target.buffered = n.buffered = {
                    start: function(e) {
                        return 0
                    },
                    end: function(e) {
                        return o
                    },
                    length: 1
                }
            }
            t.dispatchEvent(n.type, n)
        },
        iFrameReady: function() {
            for (this.isLoaded = !0, this.isIframeLoaded = !0; this.iframeQueue.length > 0;) {
                var e = this.iframeQueue.pop();
                this.createIframe(e)
            }
        },
        flashPlayers: {},
        createFlash: function(e) {
            this.flashPlayers[e.pluginId] = e;
            var t, i = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + e.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
            mejs.MediaFeatures.isIE ? (t = document.createElement("div"), e.container.appendChild(t), t.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + e.pluginId + '" width="' + e.width + '" height="' + e.height + '" class="mejs-shim"><param name="movie" value="' + i + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>') : e.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + e.pluginId + '" data="' + i + '" width="' + e.width + '" height="' + e.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
        },
        flashReady: function(e) {
            var t = this.flashPlayers[e],
                i = document.getElementById(e),
                n = t.pluginMediaElement;
            n.pluginApi = n.pluginElement = i, mejs.MediaPluginBridge.initPlugin(e), i.cueVideoById(t.videoId);
            var o = t.containerId + "_callback";
            window[o] = function(e) {
                mejs.YouTubeApi.handleStateChange(e, i, n)
            }, i.addEventListener("onStateChange", o), setInterval(function() {
                mejs.YouTubeApi.createEvent(i, n, "timeupdate")
            }, 250)
        },
        handleStateChange: function(e, t, i) {
            switch (e) {
                case -1:
                    i.paused = !0, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "loadedmetadata");
                    break;
                case 0:
                    i.paused = !1, i.ended = !0, mejs.YouTubeApi.createEvent(t, i, "ended");
                    break;
                case 1:
                    i.paused = !1, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "play"), mejs.YouTubeApi.createEvent(t, i, "playing");
                    break;
                case 2:
                    i.paused = !0, i.ended = !1, mejs.YouTubeApi.createEvent(t, i, "pause");
                    break;
                case 3:
                    mejs.YouTubeApi.createEvent(t, i, "progress");
                    break;
                case 5:
            }
        }
    }, window.mejs = mejs, window.MediaElement = mejs.MediaElement, function(e, t, i) {
        "use strict";
        var n = {
            locale: {
                language: "",
                strings: {}
            },
            methods: {}
        };
        n.locale.getLanguage = function() {
            return n.locale.language || navigator.language
        }, "undefined" != typeof mejsL10n && (n.locale.language = mejsL10n.language), n.locale.INIT_LANGUAGE = n.locale.getLanguage(), n.methods.checkPlain = function(e) {
            var t, i, n = {
                "&": "&amp;",
                '"': "&quot;",
                "<": "&lt;",
                ">": "&gt;"
            };
            e = String(e);
            for (t in n) n.hasOwnProperty(t) && (i = new RegExp(t, "g"), e = e.replace(i, n[t]));
            return e
        }, n.methods.formatString = function(e, t) {
            for (var i in t) {
                switch (i.charAt(0)) {
                    case "@":
                        t[i] = n.methods.checkPlain(t[i]);
                        break;
                    case "!":
                        break;
                    case "%":
                    default:
                        t[i] = '<em class="placeholder">' + n.methods.checkPlain(t[i]) + "</em>"
                }
                e = e.replace(i, t[i])
            }
            return e
        }, n.methods.t = function(e, t, i) {
            return n.locale.strings && n.locale.strings[i.context] && n.locale.strings[i.context][e] && (e = n.locale.strings[i.context][e]), t && (e = n.methods.formatString(e, t)), e
        }, n.t = function(e, t, i) {
            if ("string" == typeof e && e.length > 0) {
                var o = n.locale.getLanguage();
                return i = i || {
                    context: o
                }, n.methods.t(e, t, i)
            }
            throw {
                name: "InvalidArgumentException",
                message: "First argument is either not a string or empty."
            }
        }, t.i18n = n
    }(document, mejs), function(e, t) {
        "use strict";
        "undefined" != typeof mejsL10n && (e[mejsL10n.language] = mejsL10n.strings)
    }(mejs.i18n.locale.strings), function(e, t) {
        "use strict";
        e.de = {
            Fullscreen: "Vollbild",
            "Go Fullscreen": "Vollbild an",
            "Turn off Fullscreen": "Vollbild aus",
            Close: "Schließen"
        }
    }(mejs.i18n.locale.strings), function(e, t) {
        "use strict";
        e.zh = {
            Fullscreen: "全螢幕",
            "Go Fullscreen": "全屏模式",
            "Turn off Fullscreen": "退出全屏模式",
            Close: "關閉"
        }
    }(mejs.i18n.locale.strings), "undefined" != typeof jQuery ? mejs.$ = jQuery : "undefined" != typeof ender && (mejs.$ = ender), function($) {
        mejs.MepDefaults = {
                poster: "",
                showPosterWhenEnded: !1,
                defaultVideoWidth: 480,
                defaultVideoHeight: 270,
                videoWidth: -1,
                videoHeight: -1,
                defaultAudioWidth: 400,
                defaultAudioHeight: 30,
                defaultSeekBackwardInterval: function(e) {
                    return .05 * e.duration
                },
                defaultSeekForwardInterval: function(e) {
                    return .05 * e.duration
                },
                audioWidth: -1,
                audioHeight: -1,
                startVolume: .8,
                loop: !1,
                autoRewind: !0,
                enableAutosize: !0,
                alwaysShowHours: !1,
                showTimecodeFrameCount: !1,
                framesPerSecond: 25,
                autosizeProgress: !0,
                alwaysShowControls: !1,
                hideVideoControlsOnLoad: !1,
                clickToPlayPause: !0,
                iPadUseNativeControls: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
                isVideo: !0,
                enableKeyboard: !0,
                pauseOtherPlayers: !0,
                keyActions: [{
                    keys: [32, 179],
                    action: function(e, t) {
                        t.paused || t.ended ? t.play() : t.pause()
                    }
                }, {
                    keys: [38],
                    action: function(e, t) {
                        var i = Math.min(t.volume + .1, 1);
                        t.setVolume(i)
                    }
                }, {
                    keys: [40],
                    action: function(e, t) {
                        var i = Math.max(t.volume - .1, 0);
                        t.setVolume(i)
                    }
                }, {
                    keys: [37, 227],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var i = Math.max(t.currentTime - e.options.defaultSeekBackwardInterval(t), 0);
                            t.setCurrentTime(i)
                        }
                    }
                }, {
                    keys: [39, 228],
                    action: function(e, t) {
                        if (!isNaN(t.duration) && t.duration > 0) {
                            e.isVideo && (e.showControls(), e.startControlsTimer());
                            var i = Math.min(t.currentTime + e.options.defaultSeekForwardInterval(t), t.duration);
                            t.setCurrentTime(i)
                        }
                    }
                }, {
                    keys: [70],
                    action: function(e, t) {
                        "undefined" != typeof e.enterFullScreen && (e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen())
                    }
                }]
            }, mejs.mepIndex = 0, mejs.players = {}, mejs.MediaElementPlayer = function(e, t) {
                if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(e, t);
                var i = this;
                return i.$media = i.$node = $(e), i.node = i.media = i.$media[0], "undefined" != typeof i.node.player ? i.node.player : (i.node.player = i, "undefined" == typeof t && (t = i.$node.data("mejsoptions")), i.options = $.extend({}, mejs.MepDefaults, t), i.id = "mep_" + mejs.mepIndex++, mejs.players[i.id] = i, i.init(), i)
            }, mejs.MediaElementPlayer.prototype = {
                hasFocus: !1,
                controlsAreVisible: !0,
                init: function() {
                    var e = this,
                        t = mejs.MediaFeatures,
                        i = $.extend(!0, {}, e.options, {
                            success: function(t, i) {
                                e.meReady(t, i)
                            },
                            error: function(t) {
                                e.handleError(t)
                            }
                        }),
                        n = e.media.tagName.toLowerCase();
                    if (e.isDynamic = "audio" !== n && "video" !== n, e.isDynamic ? e.isVideo = e.options.isVideo : e.isVideo = "audio" !== n && e.options.isVideo, t.isiPad && e.options.iPadUseNativeControls || t.isiPhone && e.options.iPhoneUseNativeControls) e.$media.attr("controls", "controls"), t.isiPad && null !== e.media.getAttribute("autoplay") && (e.media.load(), e.media.play());
                    else if (t.isAndroid && e.options.AndroidUseNativeControls);
                    else {
                        if (e.$media.removeAttr("controls"), e.container = $('<div id="' + e.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(e.$media[0].className).insertBefore(e.$media), e.container.addClass((t.isAndroid ? "mejs-android " : "") + (t.isiOS ? "mejs-ios " : "") + (t.isiPad ? "mejs-ipad " : "") + (t.isiPhone ? "mejs-iphone " : "") + (e.isVideo ? "mejs-video " : "mejs-audio ")), t.isiOS) {
                            var o = e.$media.clone();
                            e.container.find(".mejs-mediaelement").append(o), e.$media.remove(), e.$node = e.$media = o, e.node = e.media = o[0]
                        } else e.container.find(".mejs-mediaelement").append(e.$media);
                        e.controls = e.container.find(".mejs-controls"), e.layers = e.container.find(".mejs-layers");
                        var s = e.isVideo ? "video" : "audio",
                            a = s.substring(0, 1).toUpperCase() + s.substring(1);
                        e.options[s + "Width"] > 0 || e.options[s + "Width"].toString().indexOf("%") > -1 ? e.width = e.options[s + "Width"] : "" !== e.media.style.width && null !== e.media.style.width ? e.width = e.media.style.width : null !== e.media.getAttribute("width") ? e.width = e.$media.attr("width") : e.width = e.options["default" + a + "Width"], e.options[s + "Height"] > 0 || e.options[s + "Height"].toString().indexOf("%") > -1 ? e.height = e.options[s + "Height"] : "" !== e.media.style.height && null !== e.media.style.height ? e.height = e.media.style.height : null !== e.$media[0].getAttribute("height") ? e.height = e.$media.attr("height") : e.height = e.options["default" + a + "Height"], e.setPlayerSize(e.width, e.height), i.pluginWidth = e.width, i.pluginHeight = e.height
                    }
                    mejs.MediaElement(e.$media[0], i), "undefined" != typeof e.container && e.controlsAreVisible && e.container.trigger("controlsshown")
                },
                showControls: function(e) {
                    var t = this;
                    e = "undefined" == typeof e || e, t.controlsAreVisible || (e ? (t.controls.css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0, t.container.trigger("controlsshown")
                    }), t.container.find(".mejs-control").css("visibility", "visible").stop(!0, !0).fadeIn(200, function() {
                        t.controlsAreVisible = !0
                    })) : (t.controls.css("visibility", "visible").css("display", "block"), t.container.find(".mejs-control").css("visibility", "visible").css("display", "block"), t.controlsAreVisible = !0, t.container.trigger("controlsshown")), t.setControlsSize())
                },
                hideControls: function(e) {
                    var t = this;
                    e = "undefined" == typeof e || e, t.controlsAreVisible && !t.options.alwaysShowControls && (e ? (t.controls.stop(!0, !0).fadeOut(200, function() {
                        $(this).css("visibility", "hidden").css("display", "block"), t.controlsAreVisible = !1, t.container.trigger("controlshidden")
                    }), t.container.find(".mejs-control").stop(!0, !0).fadeOut(200, function() {
                        $(this).css("visibility", "hidden").css("display", "block")
                    })) : (t.controls.css("visibility", "hidden").css("display", "block"), t.container.find(".mejs-control").css("visibility", "hidden").css("display", "block"), t.controlsAreVisible = !1, t.container.trigger("controlshidden")))
                },
                controlsTimer: null,
                startControlsTimer: function(e) {
                    var t = this;
                    e = "undefined" != typeof e ? e : 1500, t.killControlsTimer("start"), t.controlsTimer = setTimeout(function() {
                        t.hideControls(), t.killControlsTimer("hide")
                    }, e)
                },
                killControlsTimer: function(e) {
                    var t = this;
                    null !== t.controlsTimer && (clearTimeout(t.controlsTimer), delete t.controlsTimer, t.controlsTimer = null)
                },
                controlsEnabled: !0,
                disableControls: function() {
                    var e = this;
                    e.killControlsTimer(), e.hideControls(!1), this.controlsEnabled = !1
                },
                enableControls: function() {
                    var e = this;
                    e.showControls(!1), e.controlsEnabled = !0
                },
                meReady: function(e, t) {
                    var i = this,
                        n = mejs.MediaFeatures,
                        o = t.getAttribute("autoplay"),
                        s = !("undefined" == typeof o || null === o || "false" === o),
                        a, r;
                    if (!i.created) {
                        if (i.created = !0, i.media = e, i.domNode = t, !(n.isAndroid && i.options.AndroidUseNativeControls || n.isiPad && i.options.iPadUseNativeControls || n.isiPhone && i.options.iPhoneUseNativeControls)) {
                            i.buildposter(i, i.controls, i.layers, i.media), i.buildkeyboard(i, i.controls, i.layers, i.media), i.buildoverlays(i, i.controls, i.layers, i.media), i.findTracks();
                            for (a in i.options.features)
                                if (r = i.options.features[a], i["build" + r]) try {
                                    i["build" + r](i, i.controls, i.layers, i.media)
                                } catch (l) {}
                            i.container.trigger("controlsready"), i.setPlayerSize(i.width, i.height), i.setControlsSize(), i.isVideo && (mejs.MediaFeatures.hasTouch ? i.$media.bind("touchstart", function() {
                                i.controlsAreVisible ? i.hideControls(!1) : i.controlsEnabled && i.showControls(!1)
                            }) : (mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function() {
                                i.options.clickToPlayPause && (i.media.paused ? i.media.play() : i.media.pause())
                            }, i.media.addEventListener("click", i.clickToPlayPauseCallback, !1), i.container.bind("mouseenter mouseover", function() {
                                i.controlsEnabled && (i.options.alwaysShowControls || (i.killControlsTimer("enter"), i.showControls(), i.startControlsTimer(2500)))
                            }).bind("mousemove", function() {
                                i.controlsEnabled && (i.controlsAreVisible || i.showControls(), i.options.alwaysShowControls || i.startControlsTimer(2500))
                            }).bind("mouseleave", function() {
                                i.controlsEnabled && (i.media.paused || i.options.alwaysShowControls || i.startControlsTimer(1e3))
                            })), i.options.hideVideoControlsOnLoad && i.hideControls(!1), s && !i.options.alwaysShowControls && i.hideControls(), i.options.enableAutosize && i.media.addEventListener("loadedmetadata", function(e) {
                                i.options.videoHeight <= 0 && null === i.domNode.getAttribute("height") && !isNaN(e.target.videoHeight) && (i.setPlayerSize(e.target.videoWidth, e.target.videoHeight), i.setControlsSize(), i.media.setVideoSize(e.target.videoWidth, e.target.videoHeight))
                            }, !1)), e.addEventListener("play", function() {
                                var e;
                                for (e in mejs.players) {
                                    var t = mejs.players[e];
                                    t.id == i.id || !i.options.pauseOtherPlayers || t.paused || t.ended || t.pause(), t.hasFocus = !1
                                }
                                i.hasFocus = !0
                            }, !1), i.media.addEventListener("ended", function(e) {
                                if (i.options.autoRewind) try {
                                    i.media.setCurrentTime(0)
                                } catch (t) {}
                                i.media.pause(), i.setProgressRail && i.setProgressRail(), i.setCurrentRail && i.setCurrentRail(), i.options.loop ? i.media.play() : !i.options.alwaysShowControls && i.controlsEnabled && i.showControls()
                            }, !1), i.media.addEventListener("loadedmetadata", function(e) {
                                i.updateDuration && i.updateDuration(), i.updateCurrent && i.updateCurrent(), i.isFullScreen || (i.setPlayerSize(i.width, i.height), i.setControlsSize())
                            }, !1), setTimeout(function() {
                                i.setPlayerSize(i.width, i.height), i.setControlsSize()
                            }, 50), i.globalBind("resize", function() {
                                i.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || i.setPlayerSize(i.width, i.height), i.setControlsSize()
                            }), "youtube" == i.media.pluginType && i.container.find(".mejs-overlay-play").hide()
                        }
                        s && "native" == e.pluginType && (e.load(), e.play()), i.options.success && ("string" == typeof i.options.success ? window[i.options.success](i.media, i.domNode, i) : i.options.success(i.media, i.domNode, i))
                    }
                },
                handleError: function(e) {
                    var t = this;
                    t.controls.hide(), t.options.error && t.options.error(e)
                },
                setPlayerSize: function(e, t) {
                    var i = this;
                    if ("undefined" != typeof e && (i.width = e), "undefined" != typeof t && (i.height = t), i.height.toString().indexOf("%") > 0 || "100%" === i.$node.css("max-width") || parseInt(i.$node.css("max-width").replace(/px/, ""), 10) / i.$node.offsetParent().width() === 1 || i.$node[0].currentStyle && "100%" === i.$node[0].currentStyle.maxWidth) {
                        var n = i.isVideo ? i.media.videoWidth && i.media.videoWidth > 0 ? i.media.videoWidth : i.options.defaultVideoWidth : i.options.defaultAudioWidth,
                            o = i.isVideo ? i.media.videoHeight && i.media.videoHeight > 0 ? i.media.videoHeight : i.options.defaultVideoHeight : i.options.defaultAudioHeight,
                            s = i.container.parent().closest(":visible").width(),
                            a = i.isVideo || !i.options.autosizeProgress ? parseInt(s * o / n, 10) : o;
                        "body" === i.container.parent()[0].tagName.toLowerCase() && (s = $(window).width(), a = $(window).height()), 0 != a && 0 != s && (i.container.width(s).height(a), i.$media.add(i.container.find(".mejs-shim")).width("100%").height("100%"), i.isVideo && i.media.setVideoSize && i.media.setVideoSize(s, a), i.layers.children(".mejs-layer").width("100%").height("100%"))
                    } else i.container.width(i.width).height(i.height), i.layers.children(".mejs-layer").width(i.width).height(i.height);
                    var r = i.layers.find(".mejs-overlay-play"),
                        l = r.find(".mejs-overlay-button");
                    r.height(i.container.height() - i.controls.height()), l.css("margin-top", "-" + (l.height() / 2 - i.controls.height() / 2).toString() + "px")
                },
                setControlsSize: function() {
                    var e = this,
                        t = 0,
                        i = 0,
                        n = e.controls.find(".mejs-time-rail"),
                        o = e.controls.find(".mejs-time-total"),
                        s = e.controls.find(".mejs-time-current"),
                        a = e.controls.find(".mejs-time-loaded"),
                        r = n.siblings();
                    e.options && !e.options.autosizeProgress && (i = parseInt(n.css("width"))), 0 !== i && i || (r.each(function() {
                        var e = $(this);
                        "absolute" != e.css("position") && e.is(":visible") && (t += $(this).outerWidth(!0))
                    }), i = e.controls.width() - t - (n.outerWidth(!0) - n.width())), n.width(i), o.width(i - (o.outerWidth(!0) - o.width())), e.setProgressRail && e.setProgressRail(), e.setCurrentRail && e.setCurrentRail()
                },
                buildposter: function(e, t, i, n) {
                    var o = this,
                        s = $('<div class="mejs-poster mejs-layer"></div>').appendTo(i),
                        a = e.$media.attr("poster");
                    "" !== e.options.poster && (a = e.options.poster), "" !== a && null != a ? o.setPoster(a) : s.hide(), n.addEventListener("play", function() {
                        s.hide()
                    }, !1), e.options.showPosterWhenEnded && e.options.autoRewind && n.addEventListener("ended", function() {
                        s.show()
                    }, !1)
                },
                setPoster: function(e) {
                    var t = this,
                        i = t.container.find(".mejs-poster"),
                        n = i.find("img");
                    0 == n.length && (n = $('<img width="100%" height="100%" />').appendTo(i)), n.attr("src", e), i.css({
                        "background-image": "url(" + e + ")"
                    })
                },
                buildoverlays: function(e, t, i, n) {
                    var o = this;
                    if (e.isVideo) {
                        var s = $('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(i),
                            a = $('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(i),
                            r = $('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(i).click(function() {
                                o.options.clickToPlayPause && (n.paused ? n.play() : n.pause())
                            });
                        n.addEventListener("play", function() {
                            r.hide(), s.hide(), t.find(".mejs-time-buffering").hide(), a.hide()
                        }, !1), n.addEventListener("playing", function() {
                            r.hide(), s.hide(), t.find(".mejs-time-buffering").hide(), a.hide()
                        }, !1), n.addEventListener("seeking", function() {
                            s.show(), t.find(".mejs-time-buffering").show()
                        }, !1), n.addEventListener("seeked", function() {
                            s.hide(), t.find(".mejs-time-buffering").hide()
                        }, !1), n.addEventListener("pause", function() {
                            mejs.MediaFeatures.isiPhone || r.show()
                        }, !1), n.addEventListener("waiting", function() {
                            s.show(), t.find(".mejs-time-buffering").show()
                        }, !1), n.addEventListener("loadeddata", function() {
                            s.show(), t.find(".mejs-time-buffering").show()
                        }, !1), n.addEventListener("canplay", function() {
                            s.hide(), t.find(".mejs-time-buffering").hide()
                        }, !1), n.addEventListener("error", function() {
                            s.hide(), t.find(".mejs-time-buffering").hide(), a.show(), a.find("mejs-overlay-error").html("Error loading this resource")
                        }, !1)
                    }
                },
                buildkeyboard: function(e, t, i, n) {
                    var o = this;
                    o.globalBind("keydown", function(t) {
                        if (e.hasFocus && e.options.enableKeyboard)
                            for (var i = 0, o = e.options.keyActions.length; o > i; i++)
                                for (var s = e.options.keyActions[i], a = 0, r = s.keys.length; r > a; a++)
                                    if (t.keyCode == s.keys[a]) return t.preventDefault(), s.action(e, n, t.keyCode), !1;
                        return !0
                    }), o.globalBind("click", function(t) {
                        0 == $(t.target).closest(".mejs-container").length && (e.hasFocus = !1)
                    })
                },
                findTracks: function() {
                    var e = this,
                        t = e.$media.find("track");
                    e.tracks = [], t.each(function(t, i) {
                        i = $(i), e.tracks.push({
                            srclang: i.attr("srclang") ? i.attr("srclang").toLowerCase() : "",
                            src: i.attr("src"),
                            kind: i.attr("kind"),
                            label: i.attr("label") || "",
                            entries: [],
                            isLoaded: !1
                        })
                    })
                },
                changeSkin: function(e) {
                    this.container[0].className = "mejs-container " + e, this.setPlayerSize(this.width, this.height), this.setControlsSize()
                },
                play: function() {
                    this.media.play()
                },
                pause: function() {
                    try {
                        this.media.pause()
                    } catch (e) {}
                },
                load: function() {
                    this.media.load()
                },
                setMuted: function(e) {
                    this.media.setMuted(e)
                },
                setCurrentTime: function(e) {
                    this.media.setCurrentTime(e)
                },
                getCurrentTime: function() {
                    return this.media.currentTime
                },
                setVolume: function(e) {
                    this.media.setVolume(e)
                },
                getVolume: function() {
                    return this.media.volume
                },
                setSrc: function(e) {
                    this.media.setSrc(e)
                },
                remove: function() {
                    var e = this,
                        t, i;
                    for (t in e.options.features)
                        if (i = e.options.features[t], e["clean" + i]) try {
                            e["clean" + i](e)
                        } catch (n) {}
                    e.isDynamic ? e.$node.insertBefore(e.container) : (e.$media.prop("controls", !0), e.$node.clone().show().insertBefore(e.container), e.$node.remove()), "native" !== e.media.pluginType && e.media.remove(), delete mejs.players[e.id], e.container.remove(), e.globalUnbind(), delete e.node.player
                }
            },
            function() {
                function e(e, i) {
                    var n = {
                        d: [],
                        w: []
                    };
                    return $.each((e || "").split(" "), function(e, o) {
                        var s = o + "." + i;
                        0 === s.indexOf(".") ? (n.d.push(s), n.w.push(s)) : n[t.test(o) ? "w" : "d"].push(s)
                    }), n.d = n.d.join(" "), n.w = n.w.join(" "), n
                }
                var t = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
                mejs.MediaElementPlayer.prototype.globalBind = function(t, i, n) {
                    var o = this;
                    t = e(t, o.id), t.d && $(document).bind(t.d, i, n), t.w && $(window).bind(t.w, i, n)
                }, mejs.MediaElementPlayer.prototype.globalUnbind = function(t, i) {
                    var n = this;
                    t = e(t, n.id), t.d && $(document).unbind(t.d, i), t.w && $(window).unbind(t.w, i)
                }
            }(), "undefined" != typeof jQuery && (jQuery.fn.mediaelementplayer = function(e) {
                return e === !1 ? this.each(function() {
                    var e = jQuery(this).data("mediaelementplayer");
                    e && e.remove(), jQuery(this).removeData("mediaelementplayer")
                }) : this.each(function() {
                    jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, e))
                }), this
            }), $(document).ready(function() {
                $(".mejs-player").mediaelementplayer()
            }), window.MediaElementPlayer = mejs.MediaElementPlayer
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            playpauseText: mejs.i18n.t("Play/Pause")
        }), $.extend(MediaElementPlayer.prototype, {
            buildplaypause: function(e, t, i, n) {
                var o = this,
                    s = $('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + o.id + '" title="' + o.options.playpauseText + '" aria-label="' + o.options.playpauseText + '"></button></div>').appendTo(t).click(function(e) {
                        return e.preventDefault(), n.paused ? n.play() : n.pause(), !1
                    });
                n.addEventListener("play", function() {
                    s.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), n.addEventListener("playing", function() {
                    s.removeClass("mejs-play").addClass("mejs-pause")
                }, !1), n.addEventListener("pause", function() {
                    s.removeClass("mejs-pause").addClass("mejs-play")
                }, !1), n.addEventListener("paused", function() {
                    s.removeClass("mejs-pause").addClass("mejs-play")
                }, !1)
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            stopText: "Stop"
        }), $.extend(MediaElementPlayer.prototype, {
            buildstop: function(e, t, i, n) {
                var o = this,
                    s = $('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + o.id + '" title="' + o.options.stopText + '" aria-label="' + o.options.stopText + '"></button></div>').appendTo(t).click(function() {
                        n.paused || n.pause(), n.currentTime > 0 && (n.setCurrentTime(0), n.pause(), t.find(".mejs-time-current").width("0px"), t.find(".mejs-time-handle").css("left", "0px"), t.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0)), t.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0)), i.find(".mejs-poster").show())
                    })
            }
        })
    }(mejs.$), function($) {
        $.extend(MediaElementPlayer.prototype, {
            buildprogress: function(e, t, i, n) {
                $('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(t), t.find(".mejs-time-buffering").hide();
                var o = this,
                    s = t.find(".mejs-time-total"),
                    a = t.find(".mejs-time-loaded"),
                    r = t.find(".mejs-time-current"),
                    l = t.find(".mejs-time-handle"),
                    c = t.find(".mejs-time-float"),
                    d = t.find(".mejs-time-float-current"),
                    u = function(e) {
                        var t = e.pageX,
                            i = s.offset(),
                            o = s.outerWidth(!0),
                            a = 0,
                            r = 0,
                            l = 0;
                        n.duration && (t < i.left ? t = i.left : t > o + i.left && (t = o + i.left), l = t - i.left, a = l / o, r = .02 >= a ? 0 : a * n.duration, h && r !== n.currentTime && n.setCurrentTime(r), mejs.MediaFeatures.hasTouch || (c.css("left", l), d.html(mejs.Utility.secondsToTimeCode(r)), c.show()))
                    },
                    h = !1,
                    p = !1;
                s.bind("mousedown", function(e) {
                    return 1 === e.which ? (h = !0, u(e), o.globalBind("mousemove.dur", function(e) {
                        u(e)
                    }), o.globalBind("mouseup.dur", function(e) {
                        h = !1, c.hide(), o.globalUnbind(".dur")
                    }), !1) : void 0
                }).bind("mouseenter", function(e) {
                    p = !0, o.globalBind("mousemove.dur", function(e) {
                        u(e)
                    }), mejs.MediaFeatures.hasTouch || c.show()
                }).bind("mouseleave", function(e) {
                    p = !1, h || (o.globalUnbind(".dur"), c.hide())
                }), n.addEventListener("progress", function(t) {
                    e.setProgressRail(t), e.setCurrentRail(t)
                }, !1), n.addEventListener("timeupdate", function(t) {
                    e.setProgressRail(t), e.setCurrentRail(t)
                }, !1), o.loaded = a, o.total = s, o.current = r, o.handle = l
            },
            setProgressRail: function(e) {
                var t = this,
                    i = void 0 != e ? e.target : t.media,
                    n = null;
                i && i.buffered && i.buffered.length > 0 && i.buffered.end && i.duration ? n = i.buffered.end(0) / i.duration : i && void 0 != i.bytesTotal && i.bytesTotal > 0 && void 0 != i.bufferedBytes ? n = i.bufferedBytes / i.bytesTotal : e && e.lengthComputable && 0 != e.total && (n = e.loaded / e.total), null !== n && (n = Math.min(1, Math.max(0, n)), t.loaded && t.total && t.loaded.width(t.total.width() * n))
            },
            setCurrentRail: function() {
                var e = this;
                if (void 0 != e.media.currentTime && e.media.duration && e.total && e.handle) {
                    var t = Math.round(e.total.width() * e.media.currentTime / e.media.duration),
                        i = t - Math.round(e.handle.outerWidth(!0) / 2);
                    e.current.width(t), e.handle.css("left", i)
                }
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            duration: -1,
            timeAndDurationSeparator: "<span> | </span>"
        }), $.extend(MediaElementPlayer.prototype, {
            buildcurrent: function(e, t, i, n) {
                var o = this;
                $('<div class="mejs-time"><span class="mejs-currenttime">' + (e.options.alwaysShowHours ? "00:" : "") + (e.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(t), o.currenttime = o.controls.find(".mejs-currenttime"), n.addEventListener("timeupdate", function() {
                    e.updateCurrent()
                }, !1)
            },
            buildduration: function(e, t, i, n) {
                var o = this;
                t.children().last().find(".mejs-currenttime").length > 0 ? $(o.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (e.options.alwaysShowHours ? "00:" : "") + (e.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(t.find(".mejs-time")) : (t.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container"), $('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (o.options.duration > 0 ? mejs.Utility.secondsToTimeCode(o.options.duration, o.options.alwaysShowHours || o.media.duration > 3600, o.options.showTimecodeFrameCount, o.options.framesPerSecond || 25) : (e.options.alwaysShowHours ? "00:" : "") + (e.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(t)), o.durationD = o.controls.find(".mejs-duration"), n.addEventListener("timeupdate", function() {
                    e.updateDuration()
                }, !1)
            },
            updateCurrent: function() {
                var e = this;
                e.currenttime && e.currenttime.html(mejs.Utility.secondsToTimeCode(e.media.currentTime, e.options.alwaysShowHours || e.media.duration > 3600, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            },
            updateDuration: function() {
                var e = this;
                e.container.toggleClass("mejs-long-video", e.media.duration > 3600), e.durationD && (e.options.duration > 0 || e.media.duration) && e.durationD.html(mejs.Utility.secondsToTimeCode(e.options.duration > 0 ? e.options.duration : e.media.duration, e.options.alwaysShowHours, e.options.showTimecodeFrameCount, e.options.framesPerSecond || 25))
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            muteText: mejs.i18n.t("Mute Toggle"),
            hideVolumeOnTouchDevices: !0,
            audioVolume: "horizontal",
            videoVolume: "vertical"
        }), $.extend(MediaElementPlayer.prototype, {
            buildvolume: function(e, t, i, n) {
                if (!mejs.MediaFeatures.hasTouch || !this.options.hideVolumeOnTouchDevices) {
                    var o = this,
                        s = o.isVideo ? o.options.videoVolume : o.options.audioVolume,
                        a = "horizontal" == s ? $('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(t) : $('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + o.id + '" title="' + o.options.muteText + '" aria-label="' + o.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(t),
                        r = o.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                        l = o.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                        c = o.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                        d = o.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                        u = function(e, t) {
                            if (!r.is(":visible") && "undefined" == typeof t) return r.show(), u(e, !0), void r.hide();
                            if (e = Math.max(0, e), e = Math.min(e, 1), 0 == e ? a.removeClass("mejs-mute").addClass("mejs-unmute") : a.removeClass("mejs-unmute").addClass("mejs-mute"), "vertical" == s) {
                                var i = l.height(),
                                    n = l.position(),
                                    o = i - i * e;
                                d.css("top", Math.round(n.top + o - d.height() / 2)), c.height(i - o), c.css("top", n.top + o)
                            } else {
                                var h = l.width(),
                                    n = l.position(),
                                    p = h * e;
                                d.css("left", Math.round(n.left + p - d.width() / 2)), c.width(Math.round(p))
                            }
                        },
                        h = function(e) {
                            var t = null,
                                i = l.offset();
                            if ("vertical" == s) {
                                var o = l.height(),
                                    a = parseInt(l.css("top").replace(/px/, ""), 10),
                                    r = e.pageY - i.top;
                                if (t = (o - r) / o, 0 == i.top || 0 == i.left) return
                            } else {
                                var c = l.width(),
                                    d = e.pageX - i.left;
                                t = d / c
                            }
                            t = Math.max(0, t), t = Math.min(t, 1), u(t), 0 == t ? n.setMuted(!0) : n.setMuted(!1), n.setVolume(t)
                        },
                        p = !1,
                        f = !1;
                    a.hover(function() {
                        r.show(), f = !0
                    }, function() {
                        f = !1, p || "vertical" != s || r.hide()
                    }), r.bind("mouseover", function() {
                        f = !0
                    }).bind("mousedown", function(e) {
                        return h(e), o.globalBind("mousemove.vol", function(e) {
                            h(e)
                        }), o.globalBind("mouseup.vol", function() {
                            p = !1, o.globalUnbind(".vol"), f || "vertical" != s || r.hide()
                        }), p = !0, !1
                    }), a.find("button").click(function() {
                        n.setMuted(!n.muted)
                    }), n.addEventListener("volumechange", function(e) {
                        p || (n.muted ? (u(0), a.removeClass("mejs-mute").addClass("mejs-unmute")) : (u(n.volume), a.removeClass("mejs-unmute").addClass("mejs-mute")))
                    }, !1), o.container.is(":visible") && (u(e.options.startVolume), 0 === e.options.startVolume && n.setMuted(!0), "native" === n.pluginType && n.setVolume(e.options.startVolume))
                }
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            usePluginFullScreen: !0,
            newWindowCallback: function() {
                return ""
            },
            fullscreenText: mejs.i18n.t("Fullscreen")
        }), $.extend(MediaElementPlayer.prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            buildfullscreen: function(e, t, i, n) {
                if (e.isVideo) {
                    if (e.isInIframe = window.location != window.parent.location, mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        var o = function(t) {
                            e.isFullScreen && (mejs.MediaFeatures.isFullScreen() ? (e.isNativeFullScreen = !0, e.setControlsSize()) : (e.isNativeFullScreen = !1, e.exitFullScreen()))
                        };
                        mejs.MediaFeatures.hasMozNativeFullScreen ? e.globalBind(mejs.MediaFeatures.fullScreenEventName, o) : e.container.bind(mejs.MediaFeatures.fullScreenEventName, o)
                    }
                    var s = this,
                        a = 0,
                        r = 0,
                        l = e.container,
                        c = $('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + s.id + '" title="' + s.options.fullscreenText + '" aria-label="' + s.options.fullscreenText + '"></button></div>').appendTo(t);
                    if ("native" === s.media.pluginType || !s.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) c.click(function() {
                        var t = mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || e.isFullScreen;
                        t ? e.exitFullScreen() : e.enterFullScreen()
                    });
                    else {
                        var d = null,
                            u = function() {
                                var e = document.createElement("x"),
                                    t = document.documentElement,
                                    i = window.getComputedStyle,
                                    n;
                                return "pointerEvents" in e.style ? (e.style.pointerEvents = "auto", e.style.pointerEvents = "x", t.appendChild(e), n = i && "auto" === i(e, "").pointerEvents, t.removeChild(e), !!n) : !1
                            }();
                        if (u && !mejs.MediaFeatures.isOpera) {
                            var h = !1,
                                p = function() {
                                    if (h) {
                                        for (var e in f) f[e].hide();
                                        c.css("pointer-events", ""), s.controls.css("pointer-events", ""), s.media.removeEventListener("click", s.clickToPlayPauseCallback), h = !1
                                    }
                                },
                                f = {},
                                m = ["top", "left", "right", "bottom"],
                                g, v, T = function() {
                                    var e = c.offset().left - s.container.offset().left,
                                        t = c.offset().top - s.container.offset().top,
                                        i = c.outerWidth(!0),
                                        n = c.outerHeight(!0),
                                        o = s.container.width(),
                                        a = s.container.height();
                                    for (g in f) f[g].css({
                                        position: "absolute",
                                        top: 0,
                                        left: 0
                                    });
                                    f.top.width(o).height(t), f.left.width(e).height(n).css({
                                        top: t
                                    }), f.right.width(o - e - i).height(n).css({
                                        top: t,
                                        left: e + i
                                    }), f.bottom.width(o).height(a - n - t).css({
                                        top: t + n
                                    })
                                };
                            for (s.globalBind("resize", function() {
                                    T()
                                }), g = 0, v = m.length; v > g; g++) f[m[g]] = $('<div class="mejs-fullscreen-hover" />').appendTo(s.container).mouseover(p).hide();
                            c.on("mouseover", function() {
                                if (!s.isFullScreen) {
                                    var t = c.offset(),
                                        i = e.container.offset();
                                    n.positionFullscreenButton(t.left - i.left, t.top - i.top, !1), c.css("pointer-events", "none"), s.controls.css("pointer-events", "none"), s.media.addEventListener("click", s.clickToPlayPauseCallback);
                                    for (g in f) f[g].show();
                                    T(), h = !0
                                }
                            }), n.addEventListener("fullscreenchange", function(e) {
                                s.isFullScreen = !s.isFullScreen, s.isFullScreen ? s.media.removeEventListener("click", s.clickToPlayPauseCallback) : s.media.addEventListener("click", s.clickToPlayPauseCallback), p()
                            }), s.globalBind("mousemove", function(e) {
                                if (h) {
                                    var t = c.offset();
                                    (e.pageY < t.top || e.pageY > t.top + c.outerHeight(!0) || e.pageX < t.left || e.pageX > t.left + c.outerWidth(!0)) && (c.css("pointer-events", ""), s.controls.css("pointer-events", ""), h = !1)
                                }
                            })
                        } else c.on("mouseover", function() {
                            null !== d && (clearTimeout(d), delete d);
                            var t = c.offset(),
                                i = e.container.offset();
                            n.positionFullscreenButton(t.left - i.left, t.top - i.top, !0)
                        }).on("mouseout", function() {
                            null !== d && (clearTimeout(d), delete d), d = setTimeout(function() {
                                n.hideFullscreenButton()
                            }, 1500)
                        })
                    }
                    e.fullscreenBtn = c, s.globalBind("keydown", function(t) {
                        (mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || s.isFullScreen) && 27 == t.keyCode && e.exitFullScreen()
                    })
                }
            },
            cleanfullscreen: function(e) {
                e.exitFullScreen()
            },
            containerSizeTimeout: null,
            enterFullScreen: function() {
                var e = this;
                if ("native" === e.media.pluginType || !mejs.MediaFeatures.isFirefox && !e.options.usePluginFullScreen) {
                    if ($(document.documentElement).addClass("mejs-fullscreen"), normalHeight = e.container.height(), normalWidth = e.container.width(), "native" === e.media.pluginType)
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) mejs.MediaFeatures.requestFullScreen(e.container[0]), e.isInIframe && setTimeout(function i() {
                            e.isNativeFullScreen && ($(window).width() !== screen.width ? e.exitFullScreen() : setTimeout(i, 500))
                        }, 500);
                        else if (mejs.MediaFeatures.hasSemiNativeFullScreen) return void e.media.webkitEnterFullscreen();
                    if (e.isInIframe) {
                        var t = e.options.newWindowCallback(this);
                        if ("" !== t) {
                            if (!mejs.MediaFeatures.hasTrueNativeFullScreen) return e.pause(), void window.open(t, e.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            setTimeout(function() {
                                e.isNativeFullScreen || (e.pause(), window.open(t, e.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no"))
                            }, 250)
                        }
                    }
                    e.container.addClass("mejs-container-fullscreen").width("100%").height("100%"), e.containerSizeTimeout = setTimeout(function() {
                        e.container.css({
                            width: "100%",
                            height: "100%"
                        }), e.setControlsSize()
                    }, 500), "native" === e.media.pluginType ? e.$media.width("100%").height("100%") : (e.container.find(".mejs-shim").width("100%").height("100%"), e.media.setVideoSize($(window).width(), $(window).height())), e.layers.children("div").width("100%").height("100%"), e.fullscreenBtn && e.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen"), e.setControlsSize(), e.isFullScreen = !0
                }
            },
            exitFullScreen: function() {
                var e = this;
                return clearTimeout(e.containerSizeTimeout), "native" !== e.media.pluginType && mejs.MediaFeatures.isFirefox ? void e.media.setFullscreen(!1) : (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || e.isFullScreen) && mejs.MediaFeatures.cancelFullScreen(), $(document.documentElement).removeClass("mejs-fullscreen"), e.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight), "native" === e.media.pluginType ? e.$media.width(normalWidth).height(normalHeight) : (e.container.find(".mejs-shim").width(normalWidth).height(normalHeight), e.media.setVideoSize(normalWidth, normalHeight)), e.layers.children("div").width(normalWidth).height(normalHeight), e.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen"), e.setControlsSize(), void(e.isFullScreen = !1))
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            startLanguage: "",
            tracksText: mejs.i18n.t("Captions/Subtitles"),
            hideCaptionsButtonWhenEmpty: !0,
            toggleCaptionsButtonWhenOnlyOne: !1,
            slidesSelector: ""
        }), $.extend(MediaElementPlayer.prototype, {
            hasChapters: !1,
            buildtracks: function(e, t, i, n) {
                if (0 != e.tracks.length) {
                    var o = this,
                        s, a = "";
                    if (o.domNode.textTracks)
                        for (var s = o.domNode.textTracks.length - 1; s >= 0; s--) o.domNode.textTracks[s].mode = "hidden";
                    e.chapters = $('<div class="mejs-chapters mejs-layer"></div>').prependTo(i).hide(), e.captions = $('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(i).hide(), e.captionsText = e.captions.find(".mejs-captions-text"), e.captionsButton = $('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + o.id + '" title="' + o.options.tracksText + '" aria-label="' + o.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + e.id + '_captions" id="' + e.id + '_captions_none" value="none" checked="checked" /><label for="' + e.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(t);
                    var r = 0;
                    for (s = 0; s < e.tracks.length; s++) "subtitles" == e.tracks[s].kind && r++;
                    for (o.options.toggleCaptionsButtonWhenOnlyOne && 1 == r ? e.captionsButton.on("click", function() {
                            if (null == e.selectedTrack) var t = e.tracks[0].srclang;
                            else var t = "none";
                            e.setTrack(t)
                        }) : e.captionsButton.hover(function() {
                            $(this).find(".mejs-captions-selector").css("visibility", "visible")
                        }, function() {
                            $(this).find(".mejs-captions-selector").css("visibility", "hidden")
                        }).on("click", "input[type=radio]", function() {
                            lang = this.value, e.setTrack(lang)
                        }), e.options.alwaysShowControls ? e.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : e.container.bind("controlsshown", function() {
                            e.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                        }).bind("controlshidden", function() {
                            n.paused || e.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                        }), e.trackToLoad = -1, e.selectedTrack = null, e.isLoadingTrack = !1, s = 0; s < e.tracks.length; s++) "subtitles" == e.tracks[s].kind && e.addTrackButton(e.tracks[s].srclang, e.tracks[s].label);
                    e.loadNextTrack(), n.addEventListener("timeupdate", function(t) {
                        e.displayCaptions()
                    }, !1), "" != e.options.slidesSelector && (e.slidesContainer = $(e.options.slidesSelector), n.addEventListener("timeupdate", function(t) {
                        e.displaySlides()
                    }, !1)), n.addEventListener("loadedmetadata", function(t) {
                        e.displayChapters()
                    }, !1), e.container.hover(function() {
                        e.hasChapters && (e.chapters.css("visibility", "visible"), e.chapters.fadeIn(200).height(e.chapters.find(".mejs-chapter").outerHeight()))
                    }, function() {
                        e.hasChapters && !n.paused && e.chapters.fadeOut(200, function() {
                            $(this).css("visibility", "hidden"), $(this).css("display", "block")
                        })
                    }), null !== e.node.getAttribute("autoplay") && e.chapters.css("visibility", "hidden")
                }
            },
            setTrack: function(e) {
                var t = this,
                    i;
                if ("none" == e) t.selectedTrack = null, t.captionsButton.removeClass("mejs-captions-enabled");
                else
                    for (i = 0; i < t.tracks.length; i++)
                        if (t.tracks[i].srclang == e) {
                            null == t.selectedTrack && t.captionsButton.addClass("mejs-captions-enabled"), t.selectedTrack = t.tracks[i], t.captions.attr("lang", t.selectedTrack.srclang), t.displayCaptions();
                            break
                        }
            },
            loadNextTrack: function() {
                var e = this;
                e.trackToLoad++, e.trackToLoad < e.tracks.length ? (e.isLoadingTrack = !0, e.loadTrack(e.trackToLoad)) : (e.isLoadingTrack = !1, e.checkForTracks())
            },
            loadTrack: function(e) {
                var t = this,
                    i = t.tracks[e],
                    n = function() {
                        i.isLoaded = !0, t.enableTrackButton(i.srclang, i.label), t.loadNextTrack()
                    };
                $.ajax({
                    url: i.src,
                    dataType: "text",
                    success: function(e) {
                        "string" == typeof e && /<tt\s+xml/gi.exec(e) ? i.entries = mejs.TrackFormatParser.dfxp.parse(e) : i.entries = mejs.TrackFormatParser.webvvt.parse(e), n(), "chapters" == i.kind && t.media.addEventListener("play", function(e) {
                            t.media.duration > 0 && t.displayChapters(i)
                        }, !1), "slides" == i.kind && t.setupSlides(i)
                    },
                    error: function() {
                        t.loadNextTrack()
                    }
                })
            },
            enableTrackButton: function(e, t) {
                var i = this;
                "" === t && (t = mejs.language.codes[e] || e), i.captionsButton.find("input[value=" + e + "]").prop("disabled", !1).siblings("label").html(t), i.options.startLanguage == e && $("#" + i.id + "_captions_" + e).click(), i.adjustLanguageBox()
            },
            addTrackButton: function(e, t) {
                var i = this;
                "" === t && (t = mejs.language.codes[e] || e), i.captionsButton.find("ul").append($('<li><input type="radio" name="' + i.id + '_captions" id="' + i.id + "_captions_" + e + '" value="' + e + '" disabled="disabled" /><label for="' + i.id + "_captions_" + e + '">' + t + " (loading)</label></li>")), i.adjustLanguageBox(), i.container.find(".mejs-captions-translations option[value=" + e + "]").remove()
            },
            adjustLanguageBox: function() {
                var e = this;
                e.captionsButton.find(".mejs-captions-selector").height(e.captionsButton.find(".mejs-captions-selector ul").outerHeight(!0) + e.captionsButton.find(".mejs-captions-translations").outerHeight(!0))
            },
            checkForTracks: function() {
                var e = this,
                    t = !1;
                if (e.options.hideCaptionsButtonWhenEmpty) {
                    for (i = 0; i < e.tracks.length; i++)
                        if ("subtitles" == e.tracks[i].kind) {
                            t = !0;
                            break
                        }
                    t || (e.captionsButton.hide(), e.setControlsSize())
                }
            },
            displayCaptions: function() {
                if ("undefined" != typeof this.tracks) {
                    var e = this,
                        t, i = e.selectedTrack;
                    if (null != i && i.isLoaded) {
                        for (t = 0; t < i.entries.times.length; t++)
                            if (e.media.currentTime >= i.entries.times[t].start && e.media.currentTime <= i.entries.times[t].stop) return e.captionsText.html(i.entries.text[t]), void e.captions.show().height(0);
                        e.captions.hide()
                    } else e.captions.hide()
                }
            },
            setupSlides: function(e) {
                var t = this;
                t.slides = e, t.slides.entries.imgs = [t.slides.entries.text.length], t.showSlide(0)
            },
            showSlide: function(e) {
                if ("undefined" != typeof this.tracks && "undefined" != typeof this.slidesContainer) {
                    var t = this,
                        i = t.slides.entries.text[e],
                        n = t.slides.entries.imgs[e];
                    "undefined" == typeof n || "undefined" == typeof n.fadeIn ? t.slides.entries.imgs[e] = n = $('<img src="' + i + '">').on("load", function() {
                        n.appendTo(t.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                    }) : n.is(":visible") || n.is(":animated") || n.fadeIn().siblings(":visible").fadeOut()
                }
            },
            displaySlides: function() {
                if ("undefined" != typeof this.slides) {
                    var e = this,
                        t = e.slides,
                        i;
                    for (i = 0; i < t.entries.times.length; i++)
                        if (e.media.currentTime >= t.entries.times[i].start && e.media.currentTime <= t.entries.times[i].stop) return void e.showSlide(i)
                }
            },
            displayChapters: function() {
                var e = this,
                    t;
                for (t = 0; t < e.tracks.length; t++)
                    if ("chapters" == e.tracks[t].kind && e.tracks[t].isLoaded) {
                        e.drawChapters(e.tracks[t]), e.hasChapters = !0;
                        break
                    }
            },
            drawChapters: function(e) {
                var t = this,
                    i, n, o = 0,
                    s = 0;
                for (t.chapters.empty(), i = 0; i < e.entries.times.length; i++) n = e.entries.times[i].stop - e.entries.times[i].start, o = Math.floor(n / t.media.duration * 100), (o + s > 100 || i == e.entries.times.length - 1 && 100 > o + s) && (o = 100 - s), t.chapters.append($('<div class="mejs-chapter" rel="' + e.entries.times[i].start + '" style="left: ' + s.toString() + "%;width: " + o.toString() + '%;"><div class="mejs-chapter-block' + (i == e.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + e.entries.text[i] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(e.entries.times[i].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(e.entries.times[i].stop) + "</span></div></div>")), s += o;
                t.chapters.find("div.mejs-chapter").click(function() {
                    t.media.setCurrentTime(parseFloat($(this).attr("rel"))), t.media.paused && t.media.play()
                }), t.chapters.show()
            }
        }), mejs.language = {
            codes: {
                af: "Afrikaans",
                sq: "Albanian",
                ar: "Arabic",
                be: "Belarusian",
                bg: "Bulgarian",
                ca: "Catalan",
                zh: "Chinese",
                "zh-cn": "Chinese Simplified",
                "zh-tw": "Chinese Traditional",
                hr: "Croatian",
                cs: "Czech",
                da: "Danish",
                nl: "Dutch",
                en: "English",
                et: "Estonian",
                tl: "Filipino",
                fi: "Finnish",
                fr: "French",
                gl: "Galician",
                de: "German",
                el: "Greek",
                ht: "Haitian Creole",
                iw: "Hebrew",
                hi: "Hindi",
                hu: "Hungarian",
                is: "Icelandic",
                id: "Indonesian",
                ga: "Irish",
                it: "Italian",
                ja: "Japanese",
                ko: "Korean",
                lv: "Latvian",
                lt: "Lithuanian",
                mk: "Macedonian",
                ms: "Malay",
                mt: "Maltese",
                no: "Norwegian",
                fa: "Persian",
                pl: "Polish",
                pt: "Portuguese",
                ro: "Romanian",
                ru: "Russian",
                sr: "Serbian",
                sk: "Slovak",
                sl: "Slovenian",
                es: "Spanish",
                sw: "Swahili",
                sv: "Swedish",
                tl: "Tagalog",
                th: "Thai",
                tr: "Turkish",
                uk: "Ukrainian",
                vi: "Vietnamese",
                cy: "Welsh",
                yi: "Yiddish"
            }
        }, mejs.TrackFormatParser = {
            webvvt: {
                pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
                pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
                parse: function(e) {
                    for (var t = 0, i = mejs.TrackFormatParser.split2(e, /\r?\n/), n = {
                            text: [],
                            times: []
                        }, o, s; t < i.length; t++)
                        if (this.pattern_identifier.exec(i[t]) && (t++, o = this.pattern_timecode.exec(i[t]), o && t < i.length)) {
                            for (t++, s = i[t], t++;
                                "" !== i[t] && t < i.length;) s = s + "\n" + i[t], t++;
                            s = $.trim(s).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), n.text.push(s), n.times.push({
                                start: 0 == mejs.Utility.convertSMPTEtoSeconds(o[1]) ? .2 : mejs.Utility.convertSMPTEtoSeconds(o[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(o[3]),
                                settings: o[5]
                            })
                        }
                    return n
                }
            },
            dfxp: {
                parse: function(e) {
                    e = $(e).filter("tt");
                    var t = 0,
                        i = e.children("div").eq(0),
                        n = i.find("p"),
                        o = e.find("#" + i.attr("style")),
                        s, a, r, l, c = {
                            text: [],
                            times: []
                        };
                    if (o.length) {
                        var d = o.removeAttr("id").get(0).attributes;
                        if (d.length)
                            for (s = {}, t = 0; t < d.length; t++) s[d[t].name.split(":")[1]] = d[t].value
                    }
                    for (t = 0; t < n.length; t++) {
                        var u, h = {
                            start: null,
                            stop: null,
                            style: null
                        };
                        if (n.eq(t).attr("begin") && (h.start = mejs.Utility.convertSMPTEtoSeconds(n.eq(t).attr("begin"))), !h.start && n.eq(t - 1).attr("end") && (h.start = mejs.Utility.convertSMPTEtoSeconds(n.eq(t - 1).attr("end"))), n.eq(t).attr("end") && (h.stop = mejs.Utility.convertSMPTEtoSeconds(n.eq(t).attr("end"))), !h.stop && n.eq(t + 1).attr("begin") && (h.stop = mejs.Utility.convertSMPTEtoSeconds(n.eq(t + 1).attr("begin"))), s) {
                            u = "";
                            for (var p in s) u += p + ":" + s[p] + ";"
                        }
                        u && (h.style = u), 0 == h.start && (h.start = .2), c.times.push(h), l = $.trim(n.eq(t).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a href='$1' target='_blank'>$1</a>"), c.text.push(l), 0 == c.times.start && (c.times.start = 2)
                    }
                    return c
                }
            },
            split2: function(e, t) {
                return e.split(t)
            }
        }, 3 != "x\n\ny".split(/\n/gi).length && (mejs.TrackFormatParser.split2 = function(e, t) {
            var i = [],
                n = "",
                o;
            for (o = 0; o < e.length; o++) n += e.substring(o, o + 1), t.test(n) && (i.push(n.replace(t, "")), n = "");
            return i.push(n), i
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            contextMenuItems: [{
                render: function(e) {
                    return "undefined" == typeof e.enterFullScreen ? null : e.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
                },
                click: function(e) {
                    e.isFullScreen ? e.exitFullScreen() : e.enterFullScreen()
                }
            }, {
                render: function(e) {
                    return e.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
                },
                click: function(e) {
                    e.media.muted ? e.setMuted(!1) : e.setMuted(!0)
                }
            }, {
                isSeparator: !0
            }, {
                render: function(e) {
                    return mejs.i18n.t("Download Video")
                },
                click: function(e) {
                    window.location.href = e.media.currentSrc
                }
            }]
        }), $.extend(MediaElementPlayer.prototype, {
            buildcontextmenu: function(e, t, i, n) {
                e.contextMenu = $('<div class="mejs-contextmenu"></div>').appendTo($("body")).hide(), e.container.bind("contextmenu", function(t) {
                    return e.isContextMenuEnabled ? (t.preventDefault(), e.renderContextMenu(t.clientX - 1, t.clientY - 1), !1) : void 0
                }), e.container.bind("click", function() {
                    e.contextMenu.hide()
                }), e.contextMenu.bind("mouseleave", function() {
                    e.startContextMenuTimer()
                })
            },
            cleancontextmenu: function(e) {
                e.contextMenu.remove()
            },
            isContextMenuEnabled: !0,
            enableContextMenu: function() {
                this.isContextMenuEnabled = !0
            },
            disableContextMenu: function() {
                this.isContextMenuEnabled = !1
            },
            contextMenuTimeout: null,
            startContextMenuTimer: function() {
                var e = this;
                e.killContextMenuTimer(), e.contextMenuTimer = setTimeout(function() {
                    e.hideContextMenu(), e.killContextMenuTimer()
                }, 750)
            },
            killContextMenuTimer: function() {
                var e = this.contextMenuTimer;
                null != e && (clearTimeout(e), delete e, e = null)
            },
            hideContextMenu: function() {
                this.contextMenu.hide()
            },
            renderContextMenu: function(e, t) {
                for (var i = this, n = "", o = i.options.contextMenuItems, s = 0, a = o.length; a > s; s++)
                    if (o[s].isSeparator) n += '<div class="mejs-contextmenu-separator"></div>';
                    else {
                        var r = o[s].render(i);
                        null != r && (n += '<div class="mejs-contextmenu-item" data-itemindex="' + s + '" id="element-' + 1e6 * Math.random() + '">' + r + "</div>")
                    }
                i.contextMenu.empty().append($(n)).css({
                    top: t,
                    left: e
                }).show(), i.contextMenu.find(".mejs-contextmenu-item").each(function() {
                    var e = $(this),
                        t = parseInt(e.data("itemindex"), 10),
                        n = i.options.contextMenuItems[t];
                    "undefined" != typeof n.show && n.show(e, i), e.click(function() {
                        "undefined" != typeof n.click && n.click(i), i.contextMenu.hide()
                    })
                }), setTimeout(function() {
                    i.killControlsTimer("rev3")
                }, 100)
            }
        })
    }(mejs.$), function($) {
        $.extend(mejs.MepDefaults, {
            postrollCloseText: mejs.i18n.t("Close")
        }), $.extend(MediaElementPlayer.prototype, {
            buildpostroll: function(e, t, i, n) {
                var o = this,
                    s = o.container.find('link[rel="postroll"]').attr("href");
                "undefined" != typeof s && (e.postroll = $('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + o.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(i).hide(), o.media.addEventListener("ended", function(t) {
                    $.ajax({
                        dataType: "html",
                        url: s,
                        success: function(e, t) {
                            i.find(".mejs-postroll-layer-content").html(e)
                        }
                    }), e.postroll.show()
                }, !1))
            }
        })
    }(mejs.$), function(e, t, i, n) {
        var o = i("html"),
            s = i(e),
            a = i(t),
            r = i.fancybox = function() {
                r.open.apply(this, arguments)
            },
            l = navigator.userAgent.match(/msie/i),
            c = null,
            d = t.createTouch !== n,
            u = function(e) {
                return e && e.hasOwnProperty && e instanceof i
            },
            h = function(e) {
                return e && "string" === i.type(e)
            },
            p = function(e) {
                return h(e) && 0 < e.indexOf("%")
            },
            f = function(e, t) {
                var i = parseInt(e, 10) || 0;
                return t && p(e) && (i *= r.getViewport()[t] / 100), Math.ceil(i)
            },
            m = function(e, t) {
                return f(e, t) + "px"
            };
        i.extend(r, {
            version: "2.1.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: 800,
                height: 600,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                pixelRatio: 1,
                autoSize: !0,
                autoHeight: !1,
                autoWidth: !1,
                autoResize: !0,
                autoCenter: !d,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                leftRatio: .5,
                scrolling: "auto",
                wrapCSS: "",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                iframe: {
                    scrolling: "auto",
                    preload: !0
                },
                swf: {
                    wmode: "transparent",
                    allowfullscreen: "true",
                    allowscriptaccess: "always"
                },
                keys: {
                    next: {
                        13: "left",
                        34: "up",
                        39: "left",
                        40: "up"
                    },
                    prev: {
                        8: "right",
                        33: "down",
                        37: "right",
                        38: "down"
                    },
                    close: [27],
                    play: [32],
                    toggle: [70]
                },
                direction: {
                    next: "left",
                    prev: "right"
                },
                scrollOutside: !0,
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (l ? ' allowtransparency="true"' : "") + "></iframe>",
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 250,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 250,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: !0,
                    title: !0
                },
                onCancel: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeChange: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop
            },
            group: {},
            opts: {},
            previous: null,
            coming: null,
            current: null,
            isActive: !1,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            skin: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(e, t) {
                return e && (i.isPlainObject(t) || (t = {}), !1 !== r.close(!0)) ? (i.isArray(e) || (e = u(e) ? i(e).get() : [e]), i.each(e, function(o, s) {
                    var a = {},
                        l, c, d, p, f;
                    "object" === i.type(s) && (s.nodeType && (s = i(s)), u(s) ? (a = {
                        href: s.data("fancybox-href") || s.attr("href"),
                        title: s.data("fancybox-title") || s.attr("title"),
                        isDom: !0,
                        element: s
                    }, i.metadata && i.extend(!0, a, s.metadata())) : a = s), l = t.href || a.href || (h(s) ? s : null), c = t.title !== n ? t.title : a.title || "", p = (d = t.content || a.content) ? "html" : t.type || a.type, !p && a.isDom && (p = s.data("fancybox-type"), p || (p = (p = s.prop("class").match(/fancybox\.(\w+)/)) ? p[1] : null)), h(l) && (p || (r.isImage(l) ? p = "image" : r.isSWF(l) ? p = "swf" : "#" === l.charAt(0) ? p = "inline" : h(s) && (p = "html", d = s)), "ajax" === p && (f = l.split(/\s+/, 2), l = f.shift(), f = f.shift())), d || ("inline" === p ? l ? d = i(h(l) ? l.replace(/.*(?=#[^\s]+$)/, "") : l) : a.isDom && (d = s) : "html" === p ? d = l : !p && !l && a.isDom && (p = "inline", d = s)), i.extend(a, {
                        href: l,
                        type: p,
                        content: d,
                        title: c,
                        selector: f
                    }), e[o] = a
                }), r.opts = i.extend(!0, {}, r.defaults, t), t.keys !== n && (r.opts.keys = t.keys ? i.extend({}, r.defaults.keys, t.keys) : !1), r.group = e, r._start(r.opts.index)) : void 0
            },
            cancel: function() {
                var e = r.coming;
                e && !1 !== r.trigger("onCancel") && (r.hideLoading(), r.ajaxLoad && r.ajaxLoad.abort(), r.ajaxLoad = null, r.imgPreload && (r.imgPreload.onload = r.imgPreload.onerror = null), e.wrap && e.wrap.stop(!0, !0).trigger("onReset").remove(), r.coming = null, r.current || r._afterZoomOut(e))
            },
            close: function(e) {
                r.cancel(), !1 !== r.trigger("beforeClose") && (r.unbindEvents(), r.isActive && (r.isOpen && !0 !== e ? (r.isOpen = r.isOpened = !1, r.isClosing = !0, i(".fancybox-item, .fancybox-nav").remove(), r.wrap.stop(!0, !0).removeClass("fancybox-opened"), r.transitions[r.current.closeMethod]()) : (i(".fancybox-wrap").stop(!0).trigger("onReset").remove(), r._afterZoomOut())))
            },
            play: function(e) {
                var t = function() {
                        clearTimeout(r.player.timer)
                    },
                    i = function() {
                        t(), r.current && r.player.isActive && (r.player.timer = setTimeout(r.next, r.current.playSpeed))
                    },
                    n = function() {
                        t(), a.unbind(".player"), r.player.isActive = !1, r.trigger("onPlayEnd")
                    };
                !0 === e || !r.player.isActive && !1 !== e ? r.current && (r.current.loop || r.current.index < r.group.length - 1) && (r.player.isActive = !0, a.bind({
                    "onCancel.player beforeClose.player": n,
                    "onUpdate.player": i,
                    "beforeLoad.player": t
                }), i(), r.trigger("onPlayStart")) : n()
            },
            next: function(e) {
                var t = r.current;
                t && (h(e) || (e = t.direction.next), r.jumpto(t.index + 1, e, "next"))
            },
            prev: function(e) {
                var t = r.current;
                t && (h(e) || (e = t.direction.prev), r.jumpto(t.index - 1, e, "prev"))
            },
            jumpto: function(e, t, i) {
                var o = r.current;
                o && (e = f(e), r.direction = t || o.direction[e >= o.index ? "next" : "prev"], r.router = i || "jumpto", o.loop && (0 > e && (e = o.group.length + e % o.group.length), e %= o.group.length), o.group[e] !== n && (r.cancel(), r._start(e)))
            },
            reposition: function(e, t) {
                var n = r.current,
                    o = n ? n.wrap : null,
                    s;
                o && (s = r._getPosition(t), e && "scroll" === e.type ? (delete s.position, o.stop(!0, !0).animate(s, 200)) : (o.css(s), n.pos = i.extend({}, n.dim, s)))
            },
            update: function(e) {
                var t = e && e.type,
                    i = !t || "orientationchange" === t;
                i && (clearTimeout(c), c = null), r.isOpen && !c && (c = setTimeout(function() {
                    var n = r.current;
                    n && !r.isClosing && (r.wrap.removeClass("fancybox-tmp"), (i || "load" === t || "resize" === t && n.autoResize) && r._setDimension(), "scroll" === t && n.canShrink || r.reposition(e), r.trigger("onUpdate"), c = null)
                }, i && !d ? 0 : 300))
            },
            toggle: function(e) {
                r.isOpen && (r.current.fitToView = "boolean" === i.type(e) ? e : !r.current.fitToView, d && (r.wrap.removeAttr("style").addClass("fancybox-tmp"), r.trigger("onUpdate")), r.update())
            },
            hideLoading: function() {
                a.unbind(".loading"), i("#fancybox-loading").remove()
            },
            showLoading: function() {
                var e, t;
                r.hideLoading(), e = i('<div id="fancybox-loading"><div></div></div>').click(r.cancel).appendTo("body"), a.bind("keydown.loading", function(e) {
                    27 === (e.which || e.keyCode) && (e.preventDefault(), r.cancel())
                }), r.defaults.fixed || (t = r.getViewport(), e.css({
                    position: "absolute",
                    top: .5 * t.h + t.y,
                    left: .5 * t.w + t.x
                }))
            },
            getViewport: function() {
                var t = r.current && r.current.locked || !1,
                    i = {
                        x: s.scrollLeft(),
                        y: s.scrollTop()
                    };
                return t ? (i.w = t[0].clientWidth, i.h = t[0].clientHeight) : (i.w = d && e.innerWidth ? e.innerWidth : s.width(), i.h = d && e.innerHeight ? e.innerHeight : s.height()), i
            },
            unbindEvents: function() {
                r.wrap && u(r.wrap) && r.wrap.unbind(".fb"), a.unbind(".fb"), s.unbind(".fb")
            },
            bindEvents: function() {
                var e = r.current,
                    t;
                e && (s.bind("orientationchange.fb" + (d ? "" : " resize.fb") + (e.autoCenter && !e.locked ? " scroll.fb" : ""), r.update), (t = e.keys) && a.bind("keydown.fb", function(o) {
                    var s = o.which || o.keyCode,
                        a = o.target || o.srcElement;
                    return 27 === s && r.coming ? !1 : void!(o.ctrlKey || o.altKey || o.shiftKey || o.metaKey || a && (a.type || i(a).is("[contenteditable]")) || !i.each(t, function(t, a) {
                        return 1 < e.group.length && a[s] !== n ? (r[t](a[s]), o.preventDefault(), !1) : -1 < i.inArray(s, a) ? (r[t](), o.preventDefault(), !1) : void 0
                    }))
                }), i.fn.mousewheel && e.mouseWheel && r.wrap.bind("mousewheel.fb", function(t, n, o, s) {
                    for (var a = i(t.target || null), l = !1; a.length && !l && !a.is(".fancybox-skin") && !a.is(".fancybox-wrap");) l = a[0] && !(a[0].style.overflow && "hidden" === a[0].style.overflow) && (a[0].clientWidth && a[0].scrollWidth > a[0].clientWidth || a[0].clientHeight && a[0].scrollHeight > a[0].clientHeight), a = i(a).parent();
                    0 !== n && !l && 1 < r.group.length && !e.canShrink && (s > 0 || o > 0 ? r.prev(s > 0 ? "down" : "left") : (0 > s || 0 > o) && r.next(0 > s ? "up" : "right"), t.preventDefault())
                }))
            },
            trigger: function(e, t) {
                var n, o = t || r.coming || r.current;
                if (o) {
                    if (i.isFunction(o[e]) && (n = o[e].apply(o, Array.prototype.slice.call(arguments, 1))), !1 === n) return !1;
                    o.helpers && i.each(o.helpers, function(t, n) {
                        n && r.helpers[t] && i.isFunction(r.helpers[t][e]) && r.helpers[t][e](i.extend(!0, {}, r.helpers[t].defaults, n), o)
                    }), a.trigger(e)
                }
            },
            isImage: function(e) {
                return h(e) && e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
            },
            isSWF: function(e) {
                return h(e) && e.match(/\.(swf)((\?|#).*)?$/i)
            },
            _start: function(e) {
                var t = {},
                    n, o;
                if (e = f(e), n = r.group[e] || null, !n) return !1;
                if (t = i.extend(!0, {}, r.opts, n), n = t.margin, o = t.padding, "number" === i.type(n) && (t.margin = [n, n, n, n]), "number" === i.type(o) && (t.padding = [o, o, o, o]), t.modal && i.extend(!0, t, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                closeClick: !1
                            }
                        }
                    }), t.autoSize && (t.autoWidth = t.autoHeight = !0), "auto" === t.width && (t.autoWidth = !0), "auto" === t.height && (t.autoHeight = !0), t.group = r.group, t.index = e, r.coming = t, !1 === r.trigger("beforeLoad")) r.coming = null;
                else {
                    if (o = t.type, n = t.href, !o) return r.coming = null, r.current && r.router && "jumpto" !== r.router ? (r.current.index = e, r[r.router](r.direction)) : !1;
                    if (r.isActive = !0, ("image" === o || "swf" === o) && (t.autoHeight = t.autoWidth = !1, t.scrolling = "visible"), "image" === o && (t.aspectRatio = !0), "iframe" === o && d && (t.scrolling = "scroll"), t.wrap = i(t.tpl.wrap).addClass("fancybox-" + (d ? "mobile" : "desktop") + " fancybox-type-" + o + " fancybox-tmp " + t.wrapCSS).appendTo(t.parent || "body"), i.extend(t, {
                            skin: i(".fancybox-skin", t.wrap),
                            outer: i(".fancybox-outer", t.wrap),
                            inner: i(".fancybox-inner", t.wrap)
                        }), i.each(["Top", "Right", "Bottom", "Left"], function(e, i) {
                            t.skin.css("padding" + i, m(t.padding[e]))
                        }), r.trigger("onReady"), "inline" === o || "html" === o) {
                        if (!t.content || !t.content.length) return r._error("content")
                    } else if (!n) return r._error("href");
                    "image" === o ? r._loadImage() : "ajax" === o ? r._loadAjax() : "iframe" === o ? r._loadIframe() : r._afterLoad()
                }
            },
            _error: function(e) {
                i.extend(r.coming, {
                    type: "html",
                    autoWidth: !0,
                    autoHeight: !0,
                    minWidth: 0,
                    minHeight: 0,
                    scrolling: "no",
                    hasError: e,
                    content: r.coming.tpl.error
                }), r._afterLoad()
            },
            _loadImage: function() {
                var e = r.imgPreload = new Image;
                e.onload = function() {
                    this.onload = this.onerror = null, r.coming.width = this.width / r.opts.pixelRatio, r.coming.height = this.height / r.opts.pixelRatio, r._afterLoad()
                }, e.onerror = function() {
                    this.onload = this.onerror = null, r._error("image")
                }, e.src = r.coming.href, !0 !== e.complete && r.showLoading()
            },
            _loadAjax: function() {
                var e = r.coming;
                r.showLoading(), r.ajaxLoad = i.ajax(i.extend({}, e.ajax, {
                    url: e.href,
                    error: function(e, t) {
                        r.coming && "abort" !== t ? r._error("ajax", e) : r.hideLoading()
                    },
                    success: function(t, i) {
                        "success" === i && (e.content = t, r._afterLoad())
                    }
                }))
            },
            _loadIframe: function() {
                var e = r.coming,
                    t = i(e.tpl.iframe.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", d ? "auto" : e.iframe.scrolling).attr("src", e.href);
                i(e.wrap).bind("onReset", function() {
                    try {
                        i(this).find("iframe").hide().attr("src", "//about:blank").end().empty()
                    } catch (e) {}
                }), e.iframe.preload && (r.showLoading(), t.one("load", function() {
                    i(this).data("ready", 1), d || i(this).bind("load.fb", r.update), i(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(), r._afterLoad()
                })), e.content = t.appendTo(e.inner), e.iframe.preload || r._afterLoad()
            },
            _preloadImages: function() {
                var e = r.group,
                    t = r.current,
                    i = e.length,
                    n = t.preload ? Math.min(t.preload, i - 1) : 0,
                    o, s;
                for (s = 1; n >= s; s += 1) o = e[(t.index + s) % i], "image" === o.type && o.href && ((new Image).src = o.href)
            },
            _afterLoad: function() {
                var e = r.coming,
                    t = r.current,
                    n, o, s, a, l;
                if (r.hideLoading(), e && !1 !== r.isActive)
                    if (!1 === r.trigger("afterLoad", e, t)) e.wrap.stop(!0).trigger("onReset").remove(), r.coming = null;
                    else {
                        switch (t && (r.trigger("beforeChange", t), t.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()), r.unbindEvents(), n = e.content, o = e.type, s = e.scrolling, i.extend(r, {
                            wrap: e.wrap,
                            skin: e.skin,
                            outer: e.outer,
                            inner: e.inner,
                            current: e,
                            previous: t
                        }), a = e.href, o) {
                            case "inline":
                            case "ajax":
                            case "html":
                                e.selector ? n = i("<div>").html(n).find(e.selector) : u(n) && (n.data("fancybox-placeholder") || n.data("fancybox-placeholder", i('<div class="fancybox-placeholder"></div>').insertAfter(n).hide()), n = n.show().detach(), e.wrap.bind("onReset", function() {
                                    i(this).find(n).length && n.hide().replaceAll(n.data("fancybox-placeholder")).data("fancybox-placeholder", !1)
                                }));
                                break;
                            case "image":
                                n = e.tpl.image.replace("{href}", a);
                                break;
                            case "swf":
                                n = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + a + '"></param>', l = "", i.each(e.swf, function(e, t) {
                                    n += '<param name="' + e + '" value="' + t + '"></param>', l += " " + e + '="' + t + '"'
                                }), n += '<embed src="' + a + '" type="application/x-shockwave-flash" width="100%" height="100%"' + l + "></embed></object>"
                        }(!u(n) || !n.parent().is(e.inner)) && e.inner.append(n), r.trigger("beforeShow"), e.inner.css("overflow", "yes" === s ? "scroll" : "no" === s ? "hidden" : s), r._setDimension(), r.reposition(), r.isOpen = !1, r.coming = null, r.bindEvents(), r.isOpened ? t.prevMethod && r.transitions[t.prevMethod]() : i(".fancybox-wrap").not(e.wrap).stop(!0).trigger("onReset").remove(), r.transitions[r.isOpened ? e.nextMethod : e.openMethod](), r._preloadImages()
                    }
            },
            _setDimension: function() {
                var e = r.getViewport(),
                    t = 0,
                    n = !1,
                    o = !1,
                    n = r.wrap,
                    s = r.skin,
                    a = r.inner,
                    l = r.current,
                    o = l.width,
                    c = l.height,
                    d = l.minWidth,
                    u = l.minHeight,
                    h = l.maxWidth,
                    g = l.maxHeight,
                    v = l.scrolling,
                    T = l.scrollOutside ? l.scrollbarWidth : 0,
                    y = l.margin,
                    w = f(y[1] + y[3]),
                    _ = f(y[0] + y[2]),
                    b, P, x, C, M, S, k, E, j;
                if (n.add(s).add(a).width("auto").height("auto").removeClass("fancybox-tmp"), y = f(s.outerWidth(!0) - s.width()), b = f(s.outerHeight(!0) - s.height()), P = w + y, x = _ + b, C = p(o) ? (e.w - P) * f(o) / 100 : o, M = p(c) ? (e.h - x) * f(c) / 100 : c, "iframe" === l.type) {
                    if (j = l.content, l.autoHeight && 1 === j.data("ready")) try {
                        j[0].contentWindow.document.location && (a.width(C).height(9999), S = j.contents().find("body"), T && S.css("overflow-x", "hidden"), M = S.outerHeight(!0))
                    } catch (L) {}
                } else(l.autoWidth || l.autoHeight) && (a.addClass("fancybox-tmp"), l.autoWidth || a.width(C), l.autoHeight || a.height(M), l.autoWidth && (C = a.width()), l.autoHeight && (M = a.height()), a.removeClass("fancybox-tmp"));
                if (o = f(C), c = f(M), E = C / M, d = f(p(d) ? f(d, "w") - P : d), h = f(p(h) ? f(h, "w") - P : h), u = f(p(u) ? f(u, "h") - x : u), g = f(p(g) ? f(g, "h") - x : g), S = h, k = g, l.fitToView && (h = Math.min(e.w - P, h), g = Math.min(e.h - x, g)), P = e.w - w, _ = e.h - _, l.aspectRatio ? (o > h && (o = h, c = f(o / E)), c > g && (c = g, o = f(c * E)), d > o && (o = d, c = f(o / E)), u > c && (c = u, o = f(c * E))) : (o = Math.max(d, Math.min(o, h)), l.autoHeight && "iframe" !== l.type && (a.width(o), c = a.height()), c = Math.max(u, Math.min(c, g))), l.fitToView)
                    if (a.width(o).height(c), n.width(o + y), e = n.width(), w = n.height(), l.aspectRatio)
                        for (;
                            (e > P || w > _) && o > d && c > u && !(19 < t++);) c = Math.max(u, Math.min(g, c - 10)), o = f(c * E), d > o && (o = d, c = f(o / E)), o > h && (o = h, c = f(o / E)), a.width(o).height(c), n.width(o + y), e = n.width(), w = n.height();
                    else o = Math.max(d, Math.min(o, o - (e - P))), c = Math.max(u, Math.min(c, c - (w - _)));
                T && "auto" === v && M > c && P > o + y + T && (o += T), a.width(o).height(c), n.width(o + y), e = n.width(), w = n.height(), n = (e > P || w > _) && o > d && c > u, o = l.aspectRatio ? S > o && k > c && C > o && M > c : (S > o || k > c) && (C > o || M > c), i.extend(l, {
                    dim: {
                        width: m(e),
                        height: m(w)
                    },
                    origWidth: C,
                    origHeight: M,
                    canShrink: n,
                    canExpand: o,
                    wPadding: y,
                    hPadding: b,
                    wrapSpace: w - s.outerHeight(!0),
                    skinSpace: s.height() - c
                }), !j && l.autoHeight && c > u && g > c && !o && a.height("auto")
            },
            _getPosition: function(e) {
                var t = r.current,
                    i = r.getViewport(),
                    n = t.margin,
                    o = r.wrap.width() + n[1] + n[3],
                    s = r.wrap.height() + n[0] + n[2],
                    n = {
                        position: "absolute",
                        top: n[0],
                        left: n[3]
                    };
                return t.autoCenter && t.fixed && !e && s <= i.h && o <= i.w ? n.position = "fixed" : t.locked || (n.top += i.y, n.left += i.x), n.top = m(Math.max(n.top, n.top + (i.h - s) * t.topRatio)), n.left = m(Math.max(n.left, n.left + (i.w - o) * t.leftRatio)), n
            },
            _afterZoomIn: function() {
                var e = r.current;
                e && (r.isOpen = r.isOpened = !0, r.wrap.css("overflow", "visible").addClass("fancybox-opened"), r.update(), (e.closeClick || e.nextClick && 1 < r.group.length) && r.inner.css("cursor", "pointer").bind("click.fb", function(t) {
                    !i(t.target).is("a") && !i(t.target).parent().is("a") && (t.preventDefault(), r[e.closeClick ? "close" : "next"]())
                }), e.closeBtn && i(e.tpl.closeBtn).appendTo(r.skin).bind("click.fb", function(e) {
                    e.preventDefault(), r.close()
                }), e.arrows && 1 < r.group.length && ((e.loop || 0 < e.index) && i(e.tpl.prev).appendTo(r.outer).bind("click.fb", r.prev), (e.loop || e.index < r.group.length - 1) && i(e.tpl.next).appendTo(r.outer).bind("click.fb", r.next)), r.trigger("afterShow"), e.loop || e.index !== e.group.length - 1 ? r.opts.autoPlay && !r.player.isActive && (r.opts.autoPlay = !1, r.play()) : r.play(!1))
            },
            _afterZoomOut: function(e) {
                e = e || r.current, i(".fancybox-wrap").trigger("onReset").remove(), i.extend(r, {
                    group: {},
                    opts: {},
                    router: !1,
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    isClosing: !1,
                    wrap: null,
                    skin: null,
                    outer: null,
                    inner: null
                }), r.trigger("afterClose", e)
            }
        }), r.transitions = {
            getOrigPosition: function() {
                var e = r.current,
                    t = e.element,
                    i = e.orig,
                    n = {},
                    o = 50,
                    s = 50,
                    a = e.hPadding,
                    l = e.wPadding,
                    c = r.getViewport();
                return !i && e.isDom && t.is(":visible") && (i = t.find("img:first"), i.length || (i = t)), u(i) ? (n = i.offset(), i.is("img") && (o = i.outerWidth(), s = i.outerHeight())) : (n.top = c.y + (c.h - s) * e.topRatio, n.left = c.x + (c.w - o) * e.leftRatio), ("fixed" === r.wrap.css("position") || e.locked) && (n.top -= c.y, n.left -= c.x), n = {
                    top: m(n.top - a * e.topRatio),
                    left: m(n.left - l * e.leftRatio),
                    width: m(o + l),
                    height: m(s + a)
                }
            },
            step: function(e, t) {
                var i, n, o = t.prop;
                n = r.current;
                var s = n.wrapSpace,
                    a = n.skinSpace;
                ("width" === o || "height" === o) && (i = t.end === t.start ? 1 : (e - t.start) / (t.end - t.start), r.isClosing && (i = 1 - i), n = "width" === o ? n.wPadding : n.hPadding, n = e - n, r.skin[o](f("width" === o ? n : n - s * i)), r.inner[o](f("width" === o ? n : n - s * i - a * i)))
            },
            zoomIn: function() {
                var e = r.current,
                    t = e.pos,
                    n = e.openEffect,
                    o = "elastic" === n,
                    s = i.extend({
                        opacity: 1
                    }, t);
                delete s.position, o ? (t = this.getOrigPosition(), e.openOpacity && (t.opacity = .1)) : "fade" === n && (t.opacity = .1), r.wrap.css(t).animate(s, {
                    duration: "none" === n ? 0 : e.openSpeed,
                    easing: e.openEasing,
                    step: o ? this.step : null,
                    complete: r._afterZoomIn
                })
            },
            zoomOut: function() {
                var e = r.current,
                    t = e.closeEffect,
                    i = "elastic" === t,
                    n = {
                        opacity: .1
                    };
                i && (n = this.getOrigPosition(), e.closeOpacity && (n.opacity = .1)), r.wrap.animate(n, {
                    duration: "none" === t ? 0 : e.closeSpeed,
                    easing: e.closeEasing,
                    step: i ? this.step : null,
                    complete: r._afterZoomOut
                })
            },
            changeIn: function() {
                var e = r.current,
                    t = e.nextEffect,
                    i = e.pos,
                    n = {
                        opacity: 1
                    },
                    o = r.direction,
                    s;
                i.opacity = .1, "elastic" === t && (s = "down" === o || "up" === o ? "top" : "left", "down" === o || "right" === o ? (i[s] = m(f(i[s]) - 200), n[s] = "+=200px") : (i[s] = m(f(i[s]) + 200), n[s] = "-=200px")), "none" === t ? r._afterZoomIn() : r.wrap.css(i).animate(n, {
                    duration: e.nextSpeed,
                    easing: e.nextEasing,
                    complete: r._afterZoomIn
                })
            },
            changeOut: function() {
                var e = r.previous,
                    t = e.prevEffect,
                    n = {
                        opacity: .1
                    },
                    o = r.direction;
                "elastic" === t && (n["down" === o || "up" === o ? "top" : "left"] = ("up" === o || "left" === o ? "-" : "+") + "=200px"), e.wrap.animate(n, {
                    duration: "none" === t ? 0 : e.prevSpeed,
                    easing: e.prevEasing,
                    complete: function() {
                        i(this).trigger("onReset").remove()
                    }
                })
            }
        }, r.helpers.overlay = {
            defaults: {
                closeClick: !0,
                speedOut: 200,
                showEarly: !0,
                css: {},
                locked: !d,
                fixed: !0
            },
            overlay: null,
            fixed: !1,
            el: i("html"),
            create: function(e) {
                e = i.extend({}, this.defaults, e), this.overlay && this.close(), this.overlay = i('<div class="fancybox-overlay"></div>').appendTo(r.coming ? r.coming.parent : e.parent), this.fixed = !1, e.fixed && r.defaults.fixed && (this.overlay.addClass("fancybox-overlay-fixed"), this.fixed = !0)
            },
            open: function(e) {
                var t = this;
                e = i.extend({}, this.defaults, e), this.overlay ? this.overlay.unbind(".overlay").width("auto").height("auto") : this.create(e), this.fixed || (s.bind("resize.overlay", i.proxy(this.update, this)), this.update()), e.closeClick && this.overlay.bind("click.overlay", function(e) {
                    return i(e.target).hasClass("fancybox-overlay") ? (r.isActive ? r.close() : t.close(), !1) : void 0
                }), this.overlay.css(e.css).show()
            },
            close: function() {
                var e, t;
                s.unbind("resize.overlay"), this.el.hasClass("fancybox-lock") && (i(".fancybox-margin").removeClass("fancybox-margin"), e = s.scrollTop(), t = s.scrollLeft(), this.el.removeClass("fancybox-lock"), s.scrollTop(e).scrollLeft(t)), i(".fancybox-overlay").remove().hide(), i.extend(this, {
                    overlay: null,
                    fixed: !1
                })
            },
            update: function() {
                var e = "100%",
                    i;
                this.overlay.width(e).height("100%"), l ? (i = Math.max(t.documentElement.offsetWidth, t.body.offsetWidth), a.width() > i && (e = a.width())) : a.width() > s.width() && (e = a.width()), this.overlay.width(e).height(a.height())
            },
            onReady: function(e, t) {
                var n = this.overlay;
                i(".fancybox-overlay").stop(!0, !0), n || this.create(e), e.locked && this.fixed && t.fixed && (n || (this.margin = a.height() > s.height() ? i("html").css("margin-right").replace("px", "") : !1), t.locked = this.overlay.append(t.wrap), t.fixed = !1), !0 === e.showEarly && this.beforeShow.apply(this, arguments)
            },
            beforeShow: function(e, t) {
                var n, o;
                t.locked && (!1 !== this.margin && (i("*").filter(function() {
                    return "fixed" === i(this).css("position") && !i(this).hasClass("fancybox-overlay") && !i(this).hasClass("fancybox-wrap")
                }).addClass("fancybox-margin"), this.el.addClass("fancybox-margin")), n = s.scrollTop(), o = s.scrollLeft(), this.el.addClass("fancybox-lock"), s.scrollTop(n).scrollLeft(o)), this.open(e)
            },
            onUpdate: function() {
                this.fixed || this.update()
            },
            afterClose: function(e) {
                this.overlay && !r.coming && this.overlay.fadeOut(e.speedOut, i.proxy(this.close, this))
            }
        }, r.helpers.title = {
            defaults: {
                type: "float",
                position: "bottom"
            },
            beforeShow: function(e) {
                var t = r.current,
                    n = t.title,
                    o = e.type;
                if (i.isFunction(n) && (n = n.call(t.element, t)), h(n) && "" !== i.trim(n)) {
                    switch (t = i('<div class="fancybox-title fancybox-title-' + o + '-wrap">' + n + "</div>"), o) {
                        case "inside":
                            o = r.skin;
                            break;
                        case "outside":
                            o = r.wrap;
                            break;
                        case "over":
                            o = r.inner;
                            break;
                        default:
                            o = r.skin, t.appendTo("body"), l && t.width(t.width()), t.wrapInner('<span class="child"></span>'), r.current.margin[2] += Math.abs(f(t.css("margin-bottom")))
                    }
                    t["top" === e.position ? "prependTo" : "appendTo"](o)
                }
            }
        }, i.fn.fancybox = function(e) {
            var t, n = i(this),
                o = this.selector || "",
                s = function(s) {
                    var a = i(this).blur(),
                        l = t,
                        c, d;
                    !(s.ctrlKey || s.altKey || s.shiftKey || s.metaKey || a.is(".fancybox-wrap") || (c = e.groupAttr || "data-fancybox-group", d = a.attr(c), d || (c = "rel", d = a.get(0)[c]), d && "" !== d && "nofollow" !== d && (a = o.length ? i(o) : n, a = a.filter("[" + c + '="' + d + '"]'), l = a.index(this)), e.index = l, !1 === r.open(a, e) || !s.preventDefault()))
                };
            return e = e || {}, t = e.index || 0, o && !1 !== e.live ? a.undelegate(o, "click.fb-start").delegate(o + ":not('.fancybox-item, .fancybox-nav')", "click.fb-start", s) : n.unbind("click.fb-start").bind("click.fb-start", s), this.filter("[data-fancybox-start=1]").trigger("click"), this
        }, a.ready(function() {
            var t, s;
            if (i.scrollbarWidth === n && (i.scrollbarWidth = function() {
                    var e = i('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),
                        t = e.children(),
                        t = t.innerWidth() - t.height(99).innerWidth();
                    return e.remove(), t
                }), i.support.fixedPosition === n) {
                t = i.support, s = i('<div style="position:fixed;top:20px;"></div>').appendTo("body");
                var a = 20 === s[0].offsetTop || 15 === s[0].offsetTop;
                s.remove(), t.fixedPosition = a
            }
            i.extend(r.defaults, {
                scrollbarWidth: i.scrollbarWidth(),
                fixed: i.support.fixedPosition,
                parent: i("body")
            }), t = i(e).width(), o.addClass("fancybox-lock-test"), s = i(e).width(), o.removeClass("fancybox-lock-test"), i("<style type='text/css'>.fancybox-margin{margin-right:" + (s - t) + "px;}</style>").appendTo("head")
        })
    }(window, document, jQuery), function() {
        for (var e, t = function() {}, i = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], n = i.length, o = window.console = window.console || {}; n--;) e = i[n], o[e] || (o[e] = t)
    }(), MediaElementPlayer.prototype.buildfs = function(e, t, i, n) {
        var o = $('<div class="mejs-button mejs-fs-button ' + (e.options.fs ? "mejs-fs-on" : "mejs-fs-off") + '"><button type="button" aria-controls="mep_0" title="Fullscreen"></button></div>').appendTo(t).click(function() {
            e.options.fs ? window.location.href = "" : window.location.href = $(this).parents(".video-player").find(".poster").attr("href")
        })
    }, MediaElementPlayer.prototype.buildshare = function(e, t, i, n) {
        var o = $('<div class="mejs-button mejs-share-button ' + (e.options.share ? "mejs-share-on" : "mejs-share-off") + '"><button type="button" aria-controls="mep_0" title="Share"></button><div class="share-foldout"><a>Youtube</a></div></div>').appendTo(t).click(function(e) {
            e.preventDefault(), $(this).parents("article").find("a.share-helper").length > 0 ? (console.log("article share helper"), $(this).parents("article").find("a.share-helper").trigger("click")) : (console.log("global share helper"), $(".share-helper").trigger("click"))
        })
    }, function($) {
        $.fn.youtubePlayerWithPoster = function(e) {
            var t = {
                    defaultYoutubePlayer: !1,
                    customFullscreen: !0,
                    playCallback: null
                },
                i = $.extend({}, t, e);
            return this.each(function() {
                var e = $(this),
                    t = e.find("a"),
                    n = $(this).find(".vp");
                t.on("click", function(o) {
                    o.preventDefault();
                    var s = n.data("youtubeid");
                    if (i.defaultYoutubePlayer ? n.find("#ytplayer").length > 0 ? n.show().css({
                            "z-index": 2
                        }) : $('<iframe id="ytplayer" type="text/html" width="100%" height="100%" src="//www.youtube.com/embed/' + s + '?autoplay=1&hd=1" frameborder="0"/>').appendTo(n) : n.find("#video-player").length > 0 ? n.show().css({
                            "z-index": 2
                        }) : $('<video width="100%" height="100%" id="video-player" style="width: 100%; height: 100%;" preload="none"><source type="video/youtube" src="http://www.youtube.com/watch?v=' + s + '" /></video>').appendTo(n), n.show().css({
                            "z-index": 2
                        }), i.defaultYoutubePlayer) t.css({
                        "z-index": 1,
                        visibility: "hidden"
                    });
                    else {
                        var a = ["playpause", "volume", "progress", "share"];
                        i.customFullscreen ? a.push("fs") : a.push("fullscreen");
                        var r = new MediaElementPlayer(e.find("video"), {
                            features: a,
                            success: function(e, n) {
                                e.addEventListener("canplay", function() {
                                    e.play(), $("html").hasClass("lt-ie9") && (r.setPlayerSize(t.width(), t.height()), e.setVideoSize(t.width(), t.height()), r.setControlsSize()), "function" == typeof i.playCallback && (console.log("settings.callback"), i.playCallback.call())
                                }, !1), t.css({
                                    "z-index": 1,
                                    visibility: "hidden"
                                })
                            }
                        });
                        Modernizr.touch && t.css({
                            "z-index": 1,
                            visibility: "hidden"
                        })
                    }
                })
            })
        }
    }(jQuery), function($) {
        $.fn.tabs = function(e) {
            var t = {},
                i = $.extend({}, t, e);
            return this.each(function() {
                function e(e) {
                    if (e.preventDefault(), $(this).hasClass("active")) return !0;
                    i.find("a").removeClass("active"), $(this).addClass("active");
                    var t = $(this).parent("li").index(),
                        o = n.filter(".active"),
                        s = o.outerHeight(!0);
                    TweenMax.to(o, .2, {
                        opacity: 0,
                        onComplete: function() {
                            o.removeClass("active"), n.eq(t).css({
                                opacity: 0
                            }).addClass("active");
                            var e = n.eq(t).outerHeight(!0);
                            n.eq(t).css({
                                height: s
                            }), TweenMax.to(n.eq(t), .2, {
                                delay: .2,
                                opacity: 1,
                                height: e,
                                onComplete: function() {
                                    n.eq(t).css({
                                        height: ""
                                    })
                                }
                            })
                        }
                    })
                }
                var t = $(this),
                    i = t.find("ul").first(),
                    n = t.find(".tab");
                n.css({
                    paddingTop: 1,
                    paddingBottom: 1
                }), i.find("li").each(function() {
                    $(this).find("a").css({
                        width: $(this).width() + 10,
                        overflow: "hidden",
                        "text-align": "center"
                    })
                }), i.on("click", "a", e)
            })
        }
    }(jQuery), function($) {
        $.fn.selectBox = function(e) {
            var t = {},
                i = $.extend({}, t, e);
            return this.each(function() {
                function e(e) {
                    e.preventDefault(), o.addClass("open");
                    var i = a.height();
                    a.css({
                        height: 0,
                        overflow: "hidden"
                    }), TweenMax.to(a, .5, {
                        height: i,
                        ease: Quad.easeOut,
                        onComplete: function() {
                            a.css({
                                height: "",
                                overflow: ""
                            }), $(window).on("click", t)
                        }
                    })
                }

                function t(e) {
                    "undefined" != typeof i.callback && e.preventDefault(), $(window).off("click", t), a.css({
                        overflow: "hidden"
                    }), s.find("a").css({
                        "border-radius": 0
                    }), TweenMax.to(a, .5, {
                        height: 0,
                        ease: Quad.easeOut,
                        onComplete: function() {
                            o.removeClass("open"), a.css({
                                height: "",
                                overflow: ""
                            }), TweenMax.to(s.find("a"), .3, {
                                "border-radius": 20,
                                ease: Quad.easeOut,
                                onComplete: function() {
                                    s.find("a").css({
                                        "border-radius": ""
                                    })
                                }
                            })
                        }
                    })
                }

                function n(e) {
                    e.preventDefault();
                    var t = $(this).data();
                    s.find("span").html($(this).html()), o.data(t), i.callback($(this).attr("href"), t, this)
                }
                var o = $(this),
                    s = $(this).find(".selected-item"),
                    a = $(this).find("ul"),
                    r = a.find("li > a");
                s.on("click", e), "undefined" != typeof i.callback && r.on("click", n)
            })
        }
    }(jQuery), function($) {
        $.fn.filterBox = function(e) {
            var t = {},
                i = $.extend({}, t, e);
            return this.each(function() {
                function e(e) {
                    e.preventDefault(), a.hasClass("active") ? i() : t()
                }

                function t() {
                    var e = r.outerHeight();
                    a.css({
                        height: r.outerHeight(),
                        overflow: "hidden"
                    }).addClass("active");
                    var t = l.outerHeight(!0);
                    TweenMax.to(a, .5, {
                        height: e + t,
                        ease: Quad.easeOut,
                        onComplete: function() {
                            a.css({
                                height: "",
                                overflow: ""
                            }), $(window).trigger("scroll")
                        }
                    })
                }

                function i() {
                    var e = r.outerHeight(),
                        t = l.outerHeight(!0);
                    a.css({
                        height: e + t,
                        overflow: "hidden"
                    }), TweenMax.to(a, .5, {
                        height: e,
                        ease: Quad.easeOut,
                        onComplete: function() {
                            a.css({
                                height: "",
                                overflow: ""
                            }).removeClass("active"), $(window).trigger("scroll")
                        }
                    })
                }

                function n(e) {
                    e.preventDefault();
                    var t = $(this);
                    t.hasClass("active") ? s(t) : o(t)
                }

                function o(e) {
                    e.addClass("active")
                }

                function s(e) {
                    e.removeClass("active")
                }
                var a = $(this),
                    r = $(this).find("h3"),
                    l = $(this).find("ul");
                a.on("click", "h3 a", e), a.on("click", "li a", n)
            })
        }
    }(jQuery), function(e, t) {
        var $ = e.jQuery || e.Cowboy || (e.Cowboy = {}),
            i;
        $.throttle = i = function(e, i, n, o) {
            function s() {
                function s() {
                    r = +new Date, n.apply(c, u)
                }

                function l() {
                    a = t
                }
                var c = this,
                    d = +new Date - r,
                    u = arguments;
                o && !a && s(), a && clearTimeout(a), o === t && d > e ? s() : i !== !0 && (a = setTimeout(o ? l : s, o === t ? e - d : e))
            }
            var a, r = 0;
            return "boolean" != typeof i && (o = n, n = i, i = t), $.guid && (s.guid = n.guid = n.guid || $.guid++), s
        }, $.debounce = function(e, n, o) {
            return o === t ? i(e, n, !1) : i(e, o, n !== !1)
        }
    }(this), function(e, t) {
        "use strict";

        function i() {
            if (!n.READY) {
                n.event.determineEventTypes();
                for (var e in n.gestures) n.gestures.hasOwnProperty(e) && n.detection.register(n.gestures[e]);
                n.event.onTouch(n.DOCUMENT, n.EVENT_MOVE, n.detection.detect), n.event.onTouch(n.DOCUMENT, n.EVENT_END, n.detection.detect), n.READY = !0
            }
        }
        var n = function(e, t) {
            return new n.Instance(e, t || {})
        };
        n.defaults = {
            stop_browser_behavior: {
                userSelect: "none",
                touchAction: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        }, n.HAS_POINTEREVENTS = navigator.pointerEnabled || navigator.msPointerEnabled, n.HAS_TOUCHEVENTS = "ontouchstart" in e, n.MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i, n.NO_MOUSEEVENTS = n.HAS_TOUCHEVENTS && navigator.userAgent.match(n.MOBILE_REGEX), n.EVENT_TYPES = {}, n.DIRECTION_DOWN = "down", n.DIRECTION_LEFT = "left", n.DIRECTION_UP = "up", n.DIRECTION_RIGHT = "right", n.POINTER_MOUSE = "mouse", n.POINTER_TOUCH = "touch", n.POINTER_PEN = "pen", n.EVENT_START = "start", n.EVENT_MOVE = "move", n.EVENT_END = "end", n.DOCUMENT = document, n.plugins = {}, n.READY = !1, n.Instance = function(e, t) {
            var o = this;
            return i(), this.element = e, this.enabled = !0, this.options = n.utils.extend(n.utils.extend({}, n.defaults), t || {}), this.options.stop_browser_behavior && n.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior), n.event.onTouch(e, n.EVENT_START, function(e) {
                o.enabled && n.detection.startDetect(o, e)
            }), this
        }, n.Instance.prototype = {
            on: function(e, t) {
                for (var i = e.split(" "), n = 0; i.length > n; n++) this.element.addEventListener(i[n], t, !1);
                return this
            },
            off: function(e, t) {
                for (var i = e.split(" "), n = 0; i.length > n; n++) this.element.removeEventListener(i[n], t, !1);
                return this
            },
            trigger: function(e, t) {
                var i = n.DOCUMENT.createEvent("Event");
                i.initEvent(e, !0, !0), i.gesture = t;
                var o = this.element;
                return n.utils.hasParent(t.target, o) && (o = t.target), o.dispatchEvent(i), this
            },
            enable: function(e) {
                return this.enabled = e, this
            }
        };
        var o = null,
            s = !1,
            a = !1;
        n.event = {
            bindDom: function(e, t, i) {
                for (var n = t.split(" "), o = 0; n.length > o; o++) e.addEventListener(n[o], i, !1)
            },
            onTouch: function(e, t, i) {
                var r = this;
                this.bindDom(e, n.EVENT_TYPES[t], function(l) {
                    var c = l.type.toLowerCase();
                    if (!c.match(/mouse/) || !a) {
                        c.match(/touch/) || c.match(/pointerdown/) || c.match(/mouse/) && 1 === l.which ? s = !0 : c.match(/mouse/) && 1 !== l.which && (s = !1), c.match(/touch|pointer/) && (a = !0);
                        var d = 0;
                        s && (n.HAS_POINTEREVENTS && t != n.EVENT_END ? d = n.PointerEvent.updatePointer(t, l) : c.match(/touch/) ? d = l.touches.length : a || (d = c.match(/up/) ? 0 : 1), d > 0 && t == n.EVENT_END ? t = n.EVENT_MOVE : d || (t = n.EVENT_END), d || null === o ? o = l : l = o, i.call(n.detection, r.collectEventData(e, t, l)), n.HAS_POINTEREVENTS && t == n.EVENT_END && (d = n.PointerEvent.updatePointer(t, l))), d || (o = null, s = !1, a = !1, n.PointerEvent.reset())
                    }
                })
            },
            determineEventTypes: function() {
                var e;
                e = n.HAS_POINTEREVENTS ? n.PointerEvent.getEvents() : n.NO_MOUSEEVENTS ? ["touchstart", "touchmove", "touchend touchcancel"] : ["touchstart mousedown", "touchmove mousemove", "touchend touchcancel mouseup"], n.EVENT_TYPES[n.EVENT_START] = e[0], n.EVENT_TYPES[n.EVENT_MOVE] = e[1], n.EVENT_TYPES[n.EVENT_END] = e[2]
            },
            getTouchList: function(e) {
                return n.HAS_POINTEREVENTS ? n.PointerEvent.getTouchList() : e.touches ? e.touches : [{
                    identifier: 1,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    target: e.target
                }]
            },
            collectEventData: function(e, t, i) {
                var o = this.getTouchList(i, t),
                    s = n.POINTER_TOUCH;
                return (i.type.match(/mouse/) || n.PointerEvent.matchType(n.POINTER_MOUSE, i)) && (s = n.POINTER_MOUSE), {
                    center: n.utils.getCenter(o),
                    timeStamp: (new Date).getTime(),
                    target: i.target,
                    touches: o,
                    eventType: t,
                    pointerType: s,
                    srcEvent: i,
                    preventDefault: function() {
                        this.srcEvent.preventManipulation && this.srcEvent.preventManipulation(), this.srcEvent.preventDefault && this.srcEvent.preventDefault()
                    },
                    stopPropagation: function() {
                        this.srcEvent.stopPropagation()
                    },
                    stopDetect: function() {
                        return n.detection.stopDetect()
                    }
                }
            }
        }, n.PointerEvent = {
            pointers: {},
            getTouchList: function() {
                var e = this,
                    t = [];
                return Object.keys(e.pointers).sort().forEach(function(i) {
                    t.push(e.pointers[i])
                }), t
            },
            updatePointer: function(e, t) {
                return e == n.EVENT_END ? this.pointers = {} : (t.identifier = t.pointerId, this.pointers[t.pointerId] = t), Object.keys(this.pointers).length
            },
            matchType: function(e, t) {
                if (!t.pointerType) return !1;
                var i = {};
                return i[n.POINTER_MOUSE] = t.pointerType == t.MSPOINTER_TYPE_MOUSE || t.pointerType == n.POINTER_MOUSE, i[n.POINTER_TOUCH] = t.pointerType == t.MSPOINTER_TYPE_TOUCH || t.pointerType == n.POINTER_TOUCH, i[n.POINTER_PEN] = t.pointerType == t.MSPOINTER_TYPE_PEN || t.pointerType == n.POINTER_PEN, i[e]
            },
            getEvents: function() {
                return ["pointerdown MSPointerDown", "pointermove MSPointerMove", "pointerup pointercancel MSPointerUp MSPointerCancel"]
            },
            reset: function() {
                this.pointers = {}
            }
        }, n.utils = {
            extend: function(e, i, n) {
                for (var o in i) e[o] !== t && n || (e[o] = i[o]);
                return e
            },
            hasParent: function(e, t) {
                for (; e;) {
                    if (e == t) return !0;
                    e = e.parentNode
                }
                return !1
            },
            getCenter: function(e) {
                for (var t = [], i = [], n = 0, o = e.length; o > n; n++) t.push(e[n].pageX), i.push(e[n].pageY);
                return {
                    pageX: (Math.min.apply(Math, t) + Math.max.apply(Math, t)) / 2,
                    pageY: (Math.min.apply(Math, i) + Math.max.apply(Math, i)) / 2
                }
            },
            getVelocity: function(e, t, i) {
                return {
                    x: Math.abs(t / e) || 0,
                    y: Math.abs(i / e) || 0
                }
            },
            getAngle: function(e, t) {
                var i = t.pageY - e.pageY,
                    n = t.pageX - e.pageX;
                return 180 * Math.atan2(i, n) / Math.PI
            },
            getDirection: function(e, t) {
                var i = Math.abs(e.pageX - t.pageX),
                    o = Math.abs(e.pageY - t.pageY);
                return i >= o ? e.pageX - t.pageX > 0 ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT : e.pageY - t.pageY > 0 ? n.DIRECTION_UP : n.DIRECTION_DOWN
            },
            getDistance: function(e, t) {
                var i = t.pageX - e.pageX,
                    n = t.pageY - e.pageY;
                return Math.sqrt(i * i + n * n)
            },
            getScale: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getDistance(t[0], t[1]) / this.getDistance(e[0], e[1]) : 1
            },
            getRotation: function(e, t) {
                return e.length >= 2 && t.length >= 2 ? this.getAngle(t[1], t[0]) - this.getAngle(e[1], e[0]) : 0
            },
            isVertical: function(e) {
                return e == n.DIRECTION_UP || e == n.DIRECTION_DOWN
            },
            stopDefaultBrowserBehavior: function(e, t) {
                var i, n = ["webkit", "khtml", "moz", "ms", "o", ""];
                if (t && e.style) {
                    for (var o = 0; n.length > o; o++)
                        for (var s in t) t.hasOwnProperty(s) && (i = s, n[o] && (i = n[o] + i.substring(0, 1).toUpperCase() + i.substring(1)), e.style[i] = t[s]);
                    "none" == t.userSelect && (e.onselectstart = function() {
                        return !1
                    })
                }
            }
        }, n.detection = {
            gestures: [],
            current: null,
            previous: null,
            stopped: !1,
            startDetect: function(e, t) {
                this.current || (this.stopped = !1, this.current = {
                    inst: e,
                    startEvent: n.utils.extend({}, t),
                    lastEvent: !1,
                    name: ""
                }, this.detect(t))
            },
            detect: function(e) {
                if (this.current && !this.stopped) {
                    e = this.extendEventData(e);
                    for (var t = this.current.inst.options, i = 0, o = this.gestures.length; o > i; i++) {
                        var s = this.gestures[i];
                        if (!this.stopped && t[s.name] !== !1 && s.handler.call(s, e, this.current.inst) === !1) {
                            this.stopDetect();
                            break
                        }
                    }
                    return this.current && (this.current.lastEvent = e), e.eventType == n.EVENT_END && !e.touches.length - 1 && this.stopDetect(), e
                }
            },
            stopDetect: function() {
                this.previous = n.utils.extend({}, this.current), this.current = null, this.stopped = !0
            },
            extendEventData: function(e) {
                var t = this.current.startEvent;
                if (t && (e.touches.length != t.touches.length || e.touches === t.touches)) {
                    t.touches = [];
                    for (var i = 0, o = e.touches.length; o > i; i++) t.touches.push(n.utils.extend({}, e.touches[i]))
                }
                var s = e.timeStamp - t.timeStamp,
                    a = e.center.pageX - t.center.pageX,
                    r = e.center.pageY - t.center.pageY,
                    l = n.utils.getVelocity(s, a, r);
                return n.utils.extend(e, {
                    deltaTime: s,
                    deltaX: a,
                    deltaY: r,
                    velocityX: l.x,
                    velocityY: l.y,
                    distance: n.utils.getDistance(t.center, e.center),
                    angle: n.utils.getAngle(t.center, e.center),
                    direction: n.utils.getDirection(t.center, e.center),
                    scale: n.utils.getScale(t.touches, e.touches),
                    rotation: n.utils.getRotation(t.touches, e.touches),
                    startEvent: t
                }), e
            },
            register: function(e) {
                var i = e.defaults || {};
                return i[e.name] === t && (i[e.name] = !0), n.utils.extend(n.defaults, i, !0), e.index = e.index || 1e3, this.gestures.push(e), this.gestures.sort(function(e, t) {
                    return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
                }), this.gestures
            }
        }, n.gestures = n.gestures || {}, n.gestures.Hold = {
            name: "hold",
            index: 10,
            defaults: {
                hold_timeout: 500,
                hold_threshold: 1
            },
            timer: null,
            handler: function(e, t) {
                switch (e.eventType) {
                    case n.EVENT_START:
                        clearTimeout(this.timer), n.detection.current.name = this.name, this.timer = setTimeout(function() {
                            "hold" == n.detection.current.name && t.trigger("hold", e)
                        }, t.options.hold_timeout);
                        break;
                    case n.EVENT_MOVE:
                        e.distance > t.options.hold_threshold && clearTimeout(this.timer);
                        break;
                    case n.EVENT_END:
                        clearTimeout(this.timer)
                }
            }
        }, n.gestures.Tap = {
            name: "tap",
            index: 100,
            defaults: {
                tap_max_touchtime: 250,
                tap_max_distance: 10,
                tap_always: !0,
                doubletap_distance: 20,
                doubletap_interval: 300
            },
            handler: function(e, t) {
                if (e.eventType == n.EVENT_END) {
                    var i = n.detection.previous,
                        o = !1;
                    if (e.deltaTime > t.options.tap_max_touchtime || e.distance > t.options.tap_max_distance) return;
                    i && "tap" == i.name && e.timeStamp - i.lastEvent.timeStamp < t.options.doubletap_interval && e.distance < t.options.doubletap_distance && (t.trigger("doubletap", e), o = !0), (!o || t.options.tap_always) && (n.detection.current.name = "tap", t.trigger(n.detection.current.name, e))
                }
            }
        }, n.gestures.Swipe = {
            name: "swipe",
            index: 40,
            defaults: {
                swipe_max_touches: 1,
                swipe_velocity: .7
            },
            handler: function(e, t) {
                if (e.eventType == n.EVENT_END) {
                    if (t.options.swipe_max_touches > 0 && e.touches.length > t.options.swipe_max_touches) return;
                    (e.velocityX > t.options.swipe_velocity || e.velocityY > t.options.swipe_velocity) && (t.trigger(this.name, e), t.trigger(this.name + e.direction, e))
                }
            }
        }, n.gestures.Drag = {
            name: "drag",
            index: 50,
            defaults: {
                drag_min_distance: 10,
                drag_max_touches: 1,
                drag_block_horizontal: !1,
                drag_block_vertical: !1,
                drag_lock_to_axis: !1,
                drag_lock_min_distance: 25
            },
            triggered: !1,
            handler: function(e, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", e), this.triggered = !1, t;
                if (!(i.options.drag_max_touches > 0 && e.touches.length > i.options.drag_max_touches)) switch (e.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        if (e.distance < i.options.drag_min_distance && n.detection.current.name != this.name) return;
                        n.detection.current.name = this.name, (n.detection.current.lastEvent.drag_locked_to_axis || i.options.drag_lock_to_axis && i.options.drag_lock_min_distance <= e.distance) && (e.drag_locked_to_axis = !0);
                        var o = n.detection.current.lastEvent.direction;
                        e.drag_locked_to_axis && o !== e.direction && (e.direction = n.utils.isVertical(o) ? 0 > e.deltaY ? n.DIRECTION_UP : n.DIRECTION_DOWN : 0 > e.deltaX ? n.DIRECTION_LEFT : n.DIRECTION_RIGHT), this.triggered || (i.trigger(this.name + "start", e), this.triggered = !0), i.trigger(this.name, e), i.trigger(this.name + e.direction, e), (i.options.drag_block_vertical && n.utils.isVertical(e.direction) || i.options.drag_block_horizontal && !n.utils.isVertical(e.direction)) && e.preventDefault();
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", e), this.triggered = !1
                }
            }
        }, n.gestures.Transform = {
            name: "transform",
            index: 45,
            defaults: {
                transform_min_scale: .01,
                transform_min_rotation: 1,
                transform_always_block: !1
            },
            triggered: !1,
            handler: function(e, i) {
                if (n.detection.current.name != this.name && this.triggered) return i.trigger(this.name + "end", e), this.triggered = !1, t;
                if (!(2 > e.touches.length)) switch (i.options.transform_always_block && e.preventDefault(), e.eventType) {
                    case n.EVENT_START:
                        this.triggered = !1;
                        break;
                    case n.EVENT_MOVE:
                        var o = Math.abs(1 - e.scale),
                            s = Math.abs(e.rotation);
                        if (i.options.transform_min_scale > o && i.options.transform_min_rotation > s) return;
                        n.detection.current.name = this.name, this.triggered || (i.trigger(this.name + "start", e), this.triggered = !0), i.trigger(this.name, e), s > i.options.transform_min_rotation && i.trigger("rotate", e), o > i.options.transform_min_scale && (i.trigger("pinch", e), i.trigger("pinch" + (1 > e.scale ? "in" : "out"), e));
                        break;
                    case n.EVENT_END:
                        this.triggered && i.trigger(this.name + "end", e), this.triggered = !1
                }
            }
        }, n.gestures.Touch = {
            name: "touch",
            index: -1 / 0,
            defaults: {
                prevent_default: !1,
                prevent_mouseevents: !1
            },
            handler: function(e, i) {
                return i.options.prevent_mouseevents && e.pointerType == n.POINTER_MOUSE ? (e.stopDetect(), t) : (i.options.prevent_default && e.preventDefault(), e.eventType == n.EVENT_START && i.trigger(this.name, e), t)
            }
        }, n.gestures.Release = {
            name: "release",
            index: 1 / 0,
            handler: function(e, t) {
                e.eventType == n.EVENT_END && t.trigger(this.name, e)
            }
        }, "object" == typeof module && "object" == typeof module.exports ? module.exports = n : (e.Hammer = n, "function" == typeof e.define && e.define.amd && e.define("hammer", [], function() {
            return n
        }))
    }(this), function(e, t) {
        "use strict";
        e !== t && (Hammer.event.bindDom = function(i, n, o) {
            e(i).on(n, function(e) {
                var i = e.originalEvent || e;
                i.pageX === t && (i.pageX = e.pageX, i.pageY = e.pageY), i.target || (i.target = e.target), i.which === t && (i.which = i.button), i.preventDefault || (i.preventDefault = e.preventDefault), i.stopPropagation || (i.stopPropagation = e.stopPropagation), o.call(this, i)
            })
        }, Hammer.Instance.prototype.on = function(t, i) {
            return e(this.element).on(t, i)
        }, Hammer.Instance.prototype.off = function(t, i) {
            return e(this.element).off(t, i)
        }, Hammer.Instance.prototype.trigger = function(t, i) {
            var n = e(this.element);
            return n.has(i.target).length && (n = e(i.target)), n.trigger({
                type: t,
                gesture: i
            })
        }, e.fn.hammer = function(t) {
            return this.each(function() {
                var i = e(this),
                    n = i.data("hammer");
                n ? n && t && Hammer.utils.extend(n.options, t) : i.data("hammer", new Hammer(this, t || {}))
            })
        })
    }(window.jQuery || window.Zepto), function(e) {
        (jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))
    }(navigator.userAgent || navigator.vendor || window.opera), function(e, t, i) {
        e.fn.jScrollPane = function(n) {
            function o(n, o) {
                function s(t) {
                    var o, r, c, u, h, p, g = !1,
                        v = !1;
                    if (W = t, H === i) h = n.scrollTop(), p = n.scrollLeft(), n.css({
                        overflow: "hidden",
                        padding: 0
                    }), Y = n.innerWidth() + _e, X = n.innerHeight(), n.width(Y), H = e('<div class="jspPane" />').css("padding", we).append(n.children()), U = e('<div class="jspContainer" />').css({
                        width: Y + "px",
                        height: X + "px"
                    }).append(H).appendTo(n);
                    else {
                        if (n.css("width", ""), g = W.stickToBottom && k(), v = W.stickToRight && E(), u = n.innerWidth() + _e != Y || n.outerHeight() != X, u && (Y = n.innerWidth() + _e, X = n.innerHeight(), U.css({
                                width: Y + "px",
                                height: X + "px"
                            })), !u && be == Q && H.outerHeight() == G) return void n.width(Y);
                        be = Q, H.css("width", ""), n.width(Y), U.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                    }
                    H.css("overflow", "auto"), Q = t.contentWidth ? t.contentWidth : H[0].scrollWidth, G = H[0].scrollHeight, H.css("overflow", ""), q = Q / Y, Z = G / X, K = Z > 1, J = q > 1, J || K ? (n.addClass("jspScrollable"), o = W.maintainPosition && (ie || se), o && (r = M(), c = S()), a(), l(), d(), o && (x(v ? Q - Y : r, !1), P(g ? G - X : c, !1)), O(), j(), z(), W.enableKeyboardNavigation && A(), W.clickOnTrack && f(), D(), W.hijackInternalLinks && N()) : (n.removeClass("jspScrollable"), H.css({
                        top: 0,
                        width: U.width() - _e
                    }), L(), F(), R(), m()), W.autoReinitialise && !ye ? ye = setInterval(function() {
                        s(W)
                    }, W.autoReinitialiseDelay) : !W.autoReinitialise && ye && clearInterval(ye), h && n.scrollTop(0) && P(h, !1), p && n.scrollLeft(0) && x(p, !1), n.trigger("jsp-initialised", [J || K])
                }

                function a() {
                    K && (U.append(e('<div class="jspVerticalBar" />').append(e('<div class="jspCap jspCapTop" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragTop" />'), e('<div class="jspDragBottom" />'))), e('<div class="jspCap jspCapBottom" />'))), ae = U.find(">.jspVerticalBar"), re = ae.find(">.jspTrack"), ee = re.find(">.jspDrag"), W.showArrows && (ue = e('<a class="jspArrow jspArrowUp" />').bind("mousedown.html", h(0, -1)).bind("click.html", I), he = e('<a class="jspArrow jspArrowDown" />').bind("mousedown.html", h(0, 1)).bind("click.html", I), W.arrowScrollOnHover && (ue.bind("mouseover.html", h(0, -1, ue)), he.bind("mouseover.html", h(0, 1, he))), u(re, W.verticalArrowPositions, ue, he)), ce = X, U.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                        ce -= e(this).outerHeight()
                    }), ee.hover(function() {
                        ee.addClass("jspHover")
                    }, function() {
                        ee.removeClass("jspHover")
                    }).bind("mousedown.html", function(t) {
                        e("html").bind("dragstart.jsp%20selectstart.html", I), ee.addClass("jspActive");
                        var i = t.pageY - ee.position().top;
                        return e("html").bind("mousemove.html", function(e) {
                            v(e.pageY - i, !1)
                        }).bind("mouseup.jsp%20mouseleave.html", g), !1
                    }), r())
                }

                function r() {
                    re.height(ce + "px"), ie = 0, le = W.verticalGutter + re.outerWidth(), H.width(Y - le - _e);
                    try {
                        0 === ae.position().left && H.css("margin-left", le + "px")
                    } catch (e) {}
                }

                function l() {
                    J && (U.append(e('<div class="jspHorizontalBar" />').append(e('<div class="jspCap jspCapLeft" />'), e('<div class="jspTrack" />').append(e('<div class="jspDrag" />').append(e('<div class="jspDragLeft" />'), e('<div class="jspDragRight" />'))), e('<div class="jspCap jspCapRight" />'))), pe = U.find(">.jspHorizontalBar"), fe = pe.find(">.jspTrack"), ne = fe.find(">.jspDrag"), W.showArrows && (ve = e('<a class="jspArrow jspArrowLeft" />').bind("mousedown.html", h(-1, 0)).bind("click.html", I), Te = e('<a class="jspArrow jspArrowRight" />').bind("mousedown.html", h(1, 0)).bind("click.html", I), W.arrowScrollOnHover && (ve.bind("mouseover.html", h(-1, 0, ve)), Te.bind("mouseover.html", h(1, 0, Te))), u(fe, W.horizontalArrowPositions, ve, Te)), ne.hover(function() {
                        ne.addClass("jspHover")
                    }, function() {
                        ne.removeClass("jspHover")
                    }).bind("mousedown.html", function(t) {
                        e("html").bind("dragstart.jsp%20selectstart.html", I), ne.addClass("jspActive");
                        var i = t.pageX - ne.position().left;
                        return e("html").bind("mousemove.html", function(e) {
                            y(e.pageX - i, !1)
                        }).bind("mouseup.jsp%20mouseleave.html", g), !1
                    }), me = U.innerWidth(), c())
                }

                function c() {
                    U.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                        me -= e(this).outerWidth()
                    }), fe.width(me + "px"), se = 0
                }

                function d() {
                    if (J && K) {
                        var t = fe.outerHeight(),
                            i = re.outerWidth();
                        ce -= t, e(pe).find(">.jspCap:visible,>.jspArrow").each(function() {
                            me += e(this).outerWidth()
                        }), me -= i, X -= i, Y -= t, fe.parent().append(e('<div class="jspCorner" />').css("width", t + "px")), r(), c()
                    }
                    J && H.width(U.outerWidth() - _e + "px"), G = H.outerHeight(), Z = G / X, J && (ge = Math.ceil(1 / q * me), ge > W.horizontalDragMaxWidth ? ge = W.horizontalDragMaxWidth : ge < W.horizontalDragMinWidth && (ge = W.horizontalDragMinWidth), ne.width(ge + "px"), oe = me - ge, w(se)), K && (de = Math.ceil(1 / Z * ce), de > W.verticalDragMaxHeight ? de = W.verticalDragMaxHeight : de < W.verticalDragMinHeight && (de = W.verticalDragMinHeight), ee.height(de + "px"), te = ce - de, T(ie))
                }

                function u(e, t, i, n) {
                    var o = "before",
                        s = "after",
                        a;
                    "os" == t && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == o ? s = t : t == s && (o = t, a = i, i = n, n = a), e[o](i)[s](n)
                }

                function h(e, t, i) {
                    return function() {
                        return p(e, t, this, i), this.blur(), !1
                    }
                }

                function p(t, i, n, o) {
                    n = e(n).addClass("jspActive");
                    var s, a, r = !0,
                        l = function() {
                            0 !== t && B.scrollByX(t * W.arrowButtonSpeed), 0 !== i && B.scrollByY(i * W.arrowButtonSpeed), a = setTimeout(l, r ? W.initialDelay : W.arrowRepeatFreq), r = !1
                        };
                    l(), s = o ? "mouseout.jsp" : "mouseup.jsp", o = o || e("html"), o.bind(s, function() {
                        n.removeClass("jspActive"), a && clearTimeout(a), a = null, o.unbind(s)
                    })
                }

                function f() {
                    m(), K && re.bind("mousedown.html", function(t) {
                        if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                            var n = e(this),
                                o = n.offset(),
                                s = t.pageY - o.top - ie,
                                a, r = !0,
                                l = function() {
                                    var e = n.offset(),
                                        i = t.pageY - e.top - de / 2,
                                        o = X * W.scrollPagePercent,
                                        d = te * o / (G - X);
                                    if (0 > s) ie - d > i ? B.scrollByY(-o) : v(i);
                                    else {
                                        if (!(s > 0)) return void c();
                                        i > ie + d ? B.scrollByY(o) : v(i)
                                    }
                                    a = setTimeout(l, r ? W.initialDelay : W.trackClickRepeatFreq), r = !1
                                },
                                c = function() {
                                    a && clearTimeout(a), a = null, e(document).unbind("mouseup.html", c)
                                };
                            return l(), e(document).bind("mouseup.html", c), !1
                        }
                    }), J && fe.bind("mousedown.html", function(t) {
                        if (t.originalTarget === i || t.originalTarget == t.currentTarget) {
                            var n = e(this),
                                o = n.offset(),
                                s = t.pageX - o.left - se,
                                a, r = !0,
                                l = function() {
                                    var e = n.offset(),
                                        i = t.pageX - e.left - ge / 2,
                                        o = Y * W.scrollPagePercent,
                                        d = oe * o / (Q - Y);
                                    if (0 > s) se - d > i ? B.scrollByX(-o) : y(i);
                                    else {
                                        if (!(s > 0)) return void c();
                                        i > se + d ? B.scrollByX(o) : y(i)
                                    }
                                    a = setTimeout(l, r ? W.initialDelay : W.trackClickRepeatFreq), r = !1
                                },
                                c = function() {
                                    a && clearTimeout(a), a = null, e(document).unbind("mouseup.html", c)
                                };
                            return l(), e(document).bind("mouseup.html", c), !1
                        }
                    })
                }

                function m() {
                    fe && fe.unbind("mousedown.html"), re && re.unbind("mousedown.html")
                }

                function g() {
                    e("html").unbind("dragstart.jsp%20selectstart.jsp%20mousemove.jsp%20mouseup.jsp%20mouseleave.html"), ee && ee.removeClass("jspActive"), ne && ne.removeClass("jspActive")
                }

                function v(e, t) {
                    K && (0 > e ? e = 0 : e > te && (e = te), t === i && (t = W.animateScroll), t ? B.animate(ee, "top", e, T) : (ee.css("top", e), T(e)))
                }

                function T(e) {
                    e === i && (e = ee.position().top), U.scrollTop(0), ie = e;
                    var t = 0 === ie,
                        o = ie == te,
                        s = e / te,
                        a = -s * (G - X);
                    (Pe != t || Ce != o) && (Pe = t, Ce = o, n.trigger("jsp-arrow-change", [Pe, Ce, xe, Me])), _(t, o), H.css("top", a), n.trigger("jsp-scroll-y", [-a, t, o]).trigger("scroll")
                }

                function y(e, t) {
                    J && (0 > e ? e = 0 : e > oe && (e = oe), t === i && (t = W.animateScroll), t ? B.animate(ne, "left", e, w) : (ne.css("left", e), w(e)))
                }

                function w(e) {
                    e === i && (e = ne.position().left), U.scrollTop(0), se = e;
                    var t = 0 === se,
                        o = se == oe,
                        s = e / oe,
                        a = -s * (Q - Y);
                    (xe != t || Me != o) && (xe = t, Me = o, n.trigger("jsp-arrow-change", [Pe, Ce, xe, Me])), b(t, o), H.css("left", a), n.trigger("jsp-scroll-x", [-a, t, o]).trigger("scroll")
                }

                function _(e, t) {
                    W.showArrows && (ue[e ? "addClass" : "removeClass"]("jspDisabled"), he[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function b(e, t) {
                    W.showArrows && (ve[e ? "addClass" : "removeClass"]("jspDisabled"), Te[t ? "addClass" : "removeClass"]("jspDisabled"))
                }

                function P(e, t) {
                    var i = e / (G - X);
                    v(i * te, t)
                }

                function x(e, t) {
                    var i = e / (Q - Y);
                    y(i * oe, t)
                }

                function C(t, i, n) {
                    var o, s, a, r = 0,
                        l = 0,
                        c, d, u, h, p, f;
                    try {
                        o = e(t)
                    } catch (m) {
                        return
                    }
                    for (s = o.outerHeight(), a = o.outerWidth(), U.scrollTop(0), U.scrollLeft(0); !o.is(".jspPane");)
                        if (r += o.position().top, l += o.position().left, o = o.offsetParent(), /^body|html$/i.test(o[0].nodeName)) return;
                    c = S(), u = c + X, c > r || i ? p = r - W.verticalGutter : r + s > u && (p = r - X + s + W.verticalGutter), p && P(p, n), d = M(), h = d + Y, d > l || i ? f = l - W.horizontalGutter : l + a > h && (f = l - Y + a + W.horizontalGutter), f && x(f, n)
                }

                function M() {
                    return -H.position().left
                }

                function S() {
                    return -H.position().top
                }

                function k() {
                    var e = G - X;
                    return e > 20 && e - S() < 10
                }

                function E() {
                    var e = Q - Y;
                    return e > 20 && e - M() < 10
                }

                function j() {
                    U.unbind(ke).bind(ke, function(e, t, i, n) {
                        var o = se,
                            s = ie;
                        return B.scrollBy(i * W.mouseWheelSpeed, -n * W.mouseWheelSpeed, !1), o == se && s == ie
                    })
                }

                function L() {
                    U.unbind(ke)
                }

                function I() {
                    return !1
                }

                function O() {
                    H.find(":input,a").unbind("focus.html").bind("focus.html", function(e) {
                        C(e.target, !1)
                    })
                }

                function F() {
                    H.find(":input,a").unbind("focus.html")
                }

                function A() {
                    function t() {
                        var e = se,
                            t = ie;
                        switch (i) {
                            case 40:
                                B.scrollByY(W.keyboardSpeed, !1);
                                break;
                            case 38:
                                B.scrollByY(-W.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                B.scrollByY(X * W.scrollPagePercent, !1);
                                break;
                            case 33:
                                B.scrollByY(-X * W.scrollPagePercent, !1);
                                break;
                            case 39:
                                B.scrollByX(W.keyboardSpeed, !1);
                                break;
                            case 37:
                                B.scrollByX(-W.keyboardSpeed, !1)
                        }
                        return o = e != se || t != ie
                    }
                    var i, o, s = [];
                    J && s.push(pe[0]), K && s.push(ae[0]), H.focus(function() {
                        n.focus()
                    }), n.attr("tabindex", 0).unbind("keydown.jsp%20keypress.html").bind("keydown.html", function(n) {
                        if (n.target === this || s.length && e(n.target).closest(s).length) {
                            var a = se,
                                r = ie;
                            switch (n.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    i = n.keyCode, t();
                                    break;
                                case 35:
                                    P(G - X), i = null;
                                    break;
                                case 36:
                                    P(0), i = null
                            }
                            return o = n.keyCode == i && a != se || r != ie, !o
                        }
                    }).bind("keypress.html", function(e) {
                        return e.keyCode == i && t(), !o
                    }), W.hideFocus ? (n.css("outline", "none"), "hideFocus" in U[0] && n.attr("hideFocus", !0)) : (n.css("outline", ""), "hideFocus" in U[0] && n.attr("hideFocus", !1))
                }

                function R() {
                    n.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp%20keypress.html")
                }

                function D() {
                    if (location.hash && location.hash.length > 1) {
                        var t, i, n = escape(location.hash.substr(1));
                        try {
                            t = e("#" + n + ', a[name="' + n + '"]')
                        } catch (o) {
                            return
                        }
                        t.length && H.find(n) && (0 === U.scrollTop() ? i = setInterval(function() {
                            U.scrollTop() > 0 && (C(t, !0), e(document).scrollTop(U.position().top), clearInterval(i))
                        }, 50) : (C(t, !0), e(document).scrollTop(U.position().top)))
                    }
                }

                function N() {
                    e(document.body).data("jspHijack") || (e(document.body).data("jspHijack", !0), e(document.body).delegate("a[href*=#]", "click", function(i) {
                        var n = this.href.substr(0, this.href.indexOf("#")),
                            o = location.href,
                            s, a, r, l, c, d;
                        if (-1 !== location.href.indexOf("#") && (o = location.href.substr(0, location.href.indexOf("#"))), n === o) {
                            s = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try {
                                a = e("#" + s + ', a[name="' + s + '"]')
                            } catch (u) {
                                return
                            }
                            a.length && (r = a.closest(".jspScrollable"), l = r.data("jsp"), l.scrollToElement(a, !0), r[0].scrollIntoView && (c = e(t).scrollTop(), d = a.offset().top, (c > d || d > c + e(t).height()) && r[0].scrollIntoView()), i.preventDefault())
                        }
                    }))
                }

                function z() {
                    var e, t, i, n, o, s = !1;
                    U.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.html", function(a) {
                        var r = a.originalEvent.touches[0];
                        e = M(), t = S(), i = r.pageX, n = r.pageY, o = !1, s = !0
                    }).bind("touchmove.html", function(a) {
                        if (s) {
                            var r = a.originalEvent.touches[0],
                                l = se,
                                c = ie;
                            return B.scrollTo(e + i - r.pageX, t + n - r.pageY), o = o || Math.abs(i - r.pageX) > 5 || Math.abs(n - r.pageY) > 5, l == se && c == ie
                        }
                    }).bind("touchend.html", function(e) {
                        s = !1
                    }).bind("click.jsp-touchclick", function(e) {
                        return o ? (o = !1, !1) : void 0
                    })
                }

                function V() {
                    var e = S(),
                        t = M();
                    n.removeClass("jspScrollable").unbind(".jsp"), n.replaceWith(Se.append(H.children())), Se.scrollTop(e), Se.scrollLeft(t), ye && clearInterval(ye)
                }
                var W, B = this,
                    H, Y, X, U, Q, G, q, Z, K, J, ee, te, ie, ne, oe, se, ae, re, le, ce, de, ue, he, pe, fe, me, ge, ve, Te, ye, we, _e, be, Pe = !0,
                    xe = !0,
                    Ce = !1,
                    Me = !1,
                    Se = n.clone(!1, !1).empty(),
                    ke = e.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                we = n.css("paddingTop") + " " + n.css("paddingRight") + " " + n.css("paddingBottom") + " " + n.css("paddingLeft"), _e = (parseInt(n.css("paddingLeft"), 10) || 0) + (parseInt(n.css("paddingRight"), 10) || 0), e.extend(B, {
                    reinitialise: function(t) {
                        t = e.extend({}, W, t), s(t)
                    },
                    scrollToElement: function(e, t, i) {
                        C(e, t, i)
                    },
                    scrollTo: function(e, t, i) {
                        x(e, i), P(t, i)
                    },
                    scrollToX: function(e, t) {
                        x(e, t)
                    },
                    scrollToY: function(e, t) {
                        P(e, t)
                    },
                    scrollToPercentX: function(e, t) {
                        x(e * (Q - Y), t)
                    },
                    scrollToPercentY: function(e, t) {
                        P(e * (G - X), t)
                    },
                    scrollBy: function(e, t, i) {
                        B.scrollByX(e, i), B.scrollByY(t, i)
                    },
                    scrollByX: function(e, t) {
                        var i = M() + Math[0 > e ? "floor" : "ceil"](e),
                            n = i / (Q - Y);
                        y(n * oe, t)
                    },
                    scrollByY: function(e, t) {
                        var i = S() + Math[0 > e ? "floor" : "ceil"](e),
                            n = i / (G - X);
                        v(n * te, t)
                    },
                    positionDragX: function(e, t) {
                        y(e, t)
                    },
                    positionDragY: function(e, t) {
                        v(e, t)
                    },
                    animate: function(e, t, i, n) {
                        var o = {};
                        o[t] = i, e.animate(o, {
                            duration: W.animateDuration,
                            easing: W.animateEase,
                            queue: !1,
                            step: n
                        })
                    },
                    getContentPositionX: function() {
                        return M()
                    },
                    getContentPositionY: function() {
                        return S()
                    },
                    getContentWidth: function() {
                        return Q
                    },
                    getContentHeight: function() {
                        return G
                    },
                    getPercentScrolledX: function() {
                        return M() / (Q - Y)
                    },
                    getPercentScrolledY: function() {
                        return S() / (G - X)
                    },
                    getIsScrollableH: function() {
                        return J
                    },
                    getIsScrollableV: function() {
                        return K
                    },
                    getContentPane: function() {
                        return H
                    },
                    scrollToBottom: function(e) {
                        v(te, e)
                    },
                    hijackInternalLinks: e.noop,
                    destroy: function() {
                        V()
                    }
                }), s(o)
            }
            return n = e.extend({}, e.fn.jScrollPane.defaults, n), e.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
                n[this] = n[this] || n.speed
            }), this.each(function() {
                var t = e(this),
                    i = t.data("jsp");
                i ? i.reinitialise(n) : (e("script", t).filter('[type="text/javascript"],:not([type])').remove(), i = new o(t, n), t.data("jsp", i))
            })
        }, e.fn.jScrollPane.defaults = {
            showArrows: !1,
            maintainPosition: !0,
            stickToBottom: !1,
            stickToRight: !1,
            clickOnTrack: !0,
            autoReinitialise: !1,
            autoReinitialiseDelay: 500,
            verticalDragMinHeight: 0,
            verticalDragMaxHeight: 99999,
            horizontalDragMinWidth: 0,
            horizontalDragMaxWidth: 99999,
            contentWidth: i,
            animateScroll: !1,
            animateDuration: 300,
            animateEase: "linear",
            hijackInternalLinks: !1,
            verticalGutter: 4,
            horizontalGutter: 4,
            mouseWheelSpeed: 3,
            arrowButtonSpeed: 0,
            arrowRepeatFreq: 50,
            arrowScrollOnHover: !1,
            trackClickSpeed: 0,
            trackClickRepeatFreq: 70,
            verticalArrowPositions: "split",
            horizontalArrowPositions: "split",
            enableKeyboardNavigation: !0,
            hideFocus: !1,
            keyboardSpeed: 0,
            initialDelay: 300,
            speed: 30,
            scrollPagePercent: .8
        }
    }(jQuery, this), function(e) {
        "use strict";

        function t() {}

        function i(e, t) {
            if (o) return t.indexOf(e);
            for (var i = t.length; i--;)
                if (t[i] === e) return i;
            return -1
        }
        var n = t.prototype,
            o = Array.prototype.indexOf ? !0 : !1;
        n._getEvents = function() {
            return this._events || (this._events = {})
        }, n.getListeners = function(e) {
            var t, i, n = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (i in n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i])
            } else t = n[e] || (n[e] = []);
            return t
        }, n.getListenersAsObject = function(e) {
            var t, i = this.getListeners(e);
            return i instanceof Array && (t = {}, t[e] = i), t || i
        }, n.addListener = function(e, t) {
            var n, o = this.getListenersAsObject(e);
            for (n in o) o.hasOwnProperty(n) && -1 === i(t, o[n]) && o[n].push(t);
            return this
        }, n.on = n.addListener, n.defineEvent = function(e) {
            return this.getListeners(e), this
        }, n.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, n.removeListener = function(e, t) {
            var n, o, s = this.getListenersAsObject(e);
            for (o in s) s.hasOwnProperty(o) && (n = i(t, s[o]), -1 !== n && s[o].splice(n, 1));
            return this
        }, n.off = n.removeListener, n.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, n.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, n.manipulateListeners = function(e, t, i) {
            var n, o, s = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (n = i.length; n--;) s.call(this, t, i[n]);
            else
                for (n in t) t.hasOwnProperty(n) && (o = t[n]) && ("function" == typeof o ? s.call(this, n, o) : a.call(this, n, o));
            return this
        }, n.removeEvent = function(e) {
            var t, i = typeof e,
                n = this._getEvents();
            if ("string" === i) delete n[e];
            else if ("object" === i)
                for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
            else delete this._events;
            return this
        }, n.emitEvent = function(e, t) {
            var i, n, o, s = this.getListenersAsObject(e);
            for (n in s)
                if (s.hasOwnProperty(n))
                    for (i = s[n].length; i--;) o = t ? s[n][i].apply(null, t) : s[n][i](), o === !0 && this.removeListener(e, s[n][i]);
            return this
        }, n.trigger = n.emitEvent, n.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, "function" == typeof define && define.amd ? define(function() {
            return t
        }) : e.EventEmitter = t
    }(this), function(e) {
        "use strict";
        var t = document.documentElement,
            i = function() {};
        t.addEventListener ? i = function(e, t, i) {
            e.addEventListener(t, i, !1)
        } : t.attachEvent && (i = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var t = e.event;
                t.target = t.target || t.srcElement, n.handleEvent.call(n, t)
            } : function() {
                var i = e.event;
                i.target = i.target || i.srcElement, n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var n = function() {};
        t.removeEventListener ? n = function(e, t, i) {
            e.removeEventListener(t, i, !1)
        } : t.detachEvent && (n = function(e, t, i) {
            e.detachEvent("on" + t, e[t + i]);
            try {
                delete e[t + i]
            } catch (n) {
                e[t + i] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: n
        };
        "function" == typeof define && define.amd ? define(o) : e.eventie = o
    }(this), function(e) {
        "use strict";

        function t(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function i(e) {
            return "[object Array]" === l.call(e)
        }

        function n(e) {
            var t = [];
            if (i(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, o = e.length; o > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e, i) {
            function o(e, i, a) {
                if (!(this instanceof o)) return new o(e, i);
                "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = t({}, this.options), "function" == typeof i ? a = i : t(this.options, i), a && this.on("always", a), this.getImages(), s && (this.jqDeferred = new s.Deferred);
                var r = this;
                setTimeout(function() {
                    r.check()
                })
            }

            function l(e) {
                this.img = e
            }
            o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function() {
                this.images = [];
                for (var e = 0, t = this.elements.length; t > e; e++) {
                    var i = this.elements[e];
                    "IMG" === i.nodeName && this.addImage(i);
                    for (var n = i.querySelectorAll("img"), o = 0, s = n.length; s > o; o++) {
                        var a = n[o];
                        this.addImage(a)
                    }
                }
            }, o.prototype.addImage = function(e) {
                var t = new l(e);
                this.images.push(t)
            }, o.prototype.check = function() {
                function e(e, o) {
                    return t.options.debug && r && a.log("confirm", e, o), t.progress(e), i++, i === n && t.complete(), !0
                }
                var t = this,
                    i = 0,
                    n = this.images.length;
                if (this.hasAnyBroken = !1, !n) return void this.complete();
                for (var o = 0; n > o; o++) {
                    var s = this.images[o];
                    s.on("confirm", e), s.check()
                }
            }, o.prototype.progress = function(e) {
                this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emit("progress", this, e), this.jqDeferred && this.jqDeferred.notify(this, e)
            }, o.prototype.complete = function() {
                var e = this.hasAnyBroken ? "fail" : "done";
                if (this.isComplete = !0, this.emit(e, this), this.emit("always", this), this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";
                    this.jqDeferred[t](this)
                }
            }, s && (s.fn.imagesLoaded = function(e, t) {
                var i = new o(this, e, t);
                return i.jqDeferred.promise(s(this))
            });
            var c = {};
            return l.prototype = new e, l.prototype.check = function() {
                var e = c[this.img.src];
                if (e) return void this.useCached(e);
                if (c[this.img.src] = this, this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
                var t = this.proxyImage = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.img.src
            }, l.prototype.useCached = function(e) {
                if (e.isConfirmed) this.confirm(e.isLoaded, "cached was confirmed");
                else {
                    var t = this;
                    e.on("confirm", function(e) {
                        return t.confirm(e.isLoaded, "cache emitted confirmed"), !0
                    })
                }
            }, l.prototype.confirm = function(e, t) {
                this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
            }, l.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, l.prototype.onload = function() {
                this.confirm(!0, "onload"), this.unbindProxyEvents()
            }, l.prototype.onerror = function() {
                this.confirm(!1, "onerror"), this.unbindProxyEvents()
            }, l.prototype.unbindProxyEvents = function() {
                i.unbind(this.proxyImage, "load", this), i.unbind(this.proxyImage, "error", this)
            }, o
        }
        var s = e.jQuery,
            a = e.console,
            r = void 0 !== a,
            l = Object.prototype.toString;
        "function" == typeof define && define.amd ? define(["eventEmitter", "eventie"], o) : e.imagesLoaded = o(e.EventEmitter, e.eventie)
    }(window), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
    }(function($) {
        function e(e) {
            var t = e || window.event,
                i = [].slice.call(arguments, 1),
                s = 0,
                a = 0,
                r = 0,
                l = 0,
                c = 0,
                d;
            return e = $.event.fix(t), e.type = "mousewheel", t.wheelDelta && (s = t.wheelDelta), t.detail && (s = -1 * t.detail), t.deltaY && (r = -1 * t.deltaY, s = r), t.deltaX && (a = t.deltaX, s = -1 * a), void 0 !== t.wheelDeltaY && (r = t.wheelDeltaY), void 0 !== t.wheelDeltaX && (a = -1 * t.wheelDeltaX), l = Math.abs(s), (!n || n > l) && (n = l), c = Math.max(Math.abs(r), Math.abs(a)), (!o || o > c) && (o = c), d = s > 0 ? "floor" : "ceil", s = Math[d](s / n), a = Math[d](a / o), r = Math[d](r / o), i.unshift(e, s, a, r), ($.event.dispatch || $.event.handle).apply(this, i)
        }
        var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            n, o;
        if ($.event.fixHooks)
            for (var s = t.length; s;) $.event.fixHooks[t[--s]] = $.event.mouseHooks;
        $.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var t = i.length; t;) this.addEventListener(i[--t], e, !1);
                else this.onmousewheel = e
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = i.length; t;) this.removeEventListener(i[--t], e, !1);
                else this.onmousewheel = null
            }
        }, $.fn.extend({
            mousewheel: function(e) {
                return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
            },
            unmousewheel: function(e) {
                return this.unbind("mousewheel", e)
            }
        })
    }), function(e) {
        "use strict";

        function t(e) {
            if (e) {
                if ("string" == typeof n[e]) return e;
                e = e.charAt(0).toUpperCase() + e.slice(1);
                for (var t, o = 0, s = i.length; s > o; o++)
                    if (t = i[o] + e, "string" == typeof n[t]) return t
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define(function() {
            return t
        }) : e.getStyleProperty = t
    }(window), function(e) {
        "use strict";

        function t(e) {
            var t = parseFloat(e),
                i = -1 === e.indexOf("%") && !isNaN(t);
            return i && t
        }

        function i() {
            for (var e = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, t = 0, i = a.length; i > t; t++) {
                var n = a[t];
                e[n] = 0
            }
            return e
        }

        function n(e) {
            function n(e) {
                if ("string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
                    var n = s(e);
                    if ("none" === n.display) return i();
                    var l = {};
                    l.width = e.offsetWidth, l.height = e.offsetHeight;
                    for (var c = l.isBorderBox = !(!r || !n[r] || "border-box" !== n[r]), d = 0, u = a.length; u > d; d++) {
                        var h = a[d],
                            p = n[h],
                            f = parseFloat(p);
                        l[h] = isNaN(f) ? 0 : f
                    }
                    var m = l.paddingLeft + l.paddingRight,
                        g = l.paddingTop + l.paddingBottom,
                        v = l.marginLeft + l.marginRight,
                        T = l.marginTop + l.marginBottom,
                        y = l.borderLeftWidth + l.borderRightWidth,
                        w = l.borderTopWidth + l.borderBottomWidth,
                        _ = c && o,
                        b = t(n.width);
                    b !== !1 && (l.width = b + (_ ? 0 : m + y));
                    var P = t(n.height);
                    return P !== !1 && (l.height = P + (_ ? 0 : g + w)), l.innerWidth = l.width - (m + y), l.innerHeight = l.height - (g + w), l.outerWidth = l.width + v, l.outerHeight = l.height + T, l
                }
            }
            var o, r = e("boxSizing");
            return function() {
                if (r) {
                    var e = document.createElement("div");
                    e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[r] = "border-box";
                    var i = document.body || document.documentElement;
                    i.appendChild(e);
                    var n = s(e);
                    o = 200 === t(n.width), i.removeChild(e)
                }
            }(), n
        }
        var o = document.defaultView,
            s = o && o.getComputedStyle ? function(e) {
                return o.getComputedStyle(e, null)
            } : function(e) {
                return e.currentStyle
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define(["get-style-property/get-style-property"], n) : e.getSize = n(e.getStyleProperty)
    }(window), function(e) {
        "use strict";
        var t = document.documentElement,
            i = function() {};
        t.addEventListener ? i = function(e, t, i) {
            e.addEventListener(t, i, !1)
        } : t.attachEvent && (i = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var t = e.event;
                t.target = t.target || t.srcElement, n.handleEvent.call(n, t)
            } : function() {
                var i = e.event;
                i.target = i.target || i.srcElement, n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var n = function() {};
        t.removeEventListener ? n = function(e, t, i) {
            e.removeEventListener(t, i, !1)
        } : t.detachEvent && (n = function(e, t, i) {
            e.detachEvent("on" + t, e[t + i]);
            try {
                delete e[t + i]
            } catch (n) {
                e[t + i] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: n
        };
        "function" == typeof define && define.amd ? define(o) : e.eventie = o
    }(this), function(e) {
        "use strict";

        function t(e) {
            "function" == typeof e && (t.isReady ? e() : s.push(e))
        }

        function i(e) {
            var i = "readystatechange" === e.type && "complete" !== o.readyState;
            if (!t.isReady && !i) {
                t.isReady = !0;
                for (var n = 0, a = s.length; a > n; n++) {
                    var r = s[n];
                    r()
                }
            }
        }

        function n(n) {
            return n.bind(o, "DOMContentLoaded", i), n.bind(o, "readystatechange", i), n.bind(e, "load", i), t
        }
        var o = e.document,
            s = [];
        t.isReady = !1, "function" == typeof define && define.amd ? define(["eventie/eventie"], n) : e.docReady = n(e.eventie)
    }(this), function() {
        "use strict";

        function e() {}

        function t(e, t) {
            for (var i = e.length; i--;)
                if (e[i].listener === t) return i;
            return -1
        }
        var i = e.prototype;
        i.getListeners = function(e) {
            var t, i, n = this._getEvents();
            if ("object" == typeof e) {
                t = {};
                for (i in n) n.hasOwnProperty(i) && e.test(i) && (t[i] = n[i])
            } else t = n[e] || (n[e] = []);
            return t
        }, i.flattenListeners = function(e) {
            var t, i = [];
            for (t = 0; e.length > t; t += 1) i.push(e[t].listener);
            return i
        }, i.getListenersAsObject = function(e) {
            var t, i = this.getListeners(e);
            return i instanceof Array && (t = {}, t[e] = i), t || i
        }, i.addListener = function(e, i) {
            var n, o = this.getListenersAsObject(e),
                s = "object" == typeof i;
            for (n in o) o.hasOwnProperty(n) && -1 === t(o[n], i) && o[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, i.on = i.addListener, i.addOnceListener = function(e, t) {
            return this.addListener(e, {
                listener: t,
                once: !0
            })
        }, i.once = i.addOnceListener, i.defineEvent = function(e) {
            return this.getListeners(e), this
        }, i.defineEvents = function(e) {
            for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
            return this
        }, i.removeListener = function(e, i) {
            var n, o, s = this.getListenersAsObject(e);
            for (o in s) s.hasOwnProperty(o) && (n = t(s[o], i), -1 !== n && s[o].splice(n, 1));
            return this
        }, i.off = i.removeListener, i.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t)
        }, i.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t)
        }, i.manipulateListeners = function(e, t, i) {
            var n, o, s = e ? this.removeListener : this.addListener,
                a = e ? this.removeListeners : this.addListeners;
            if ("object" != typeof t || t instanceof RegExp)
                for (n = i.length; n--;) s.call(this, t, i[n]);
            else
                for (n in t) t.hasOwnProperty(n) && (o = t[n]) && ("function" == typeof o ? s.call(this, n, o) : a.call(this, n, o));
            return this
        }, i.removeEvent = function(e) {
            var t, i = typeof e,
                n = this._getEvents();
            if ("string" === i) delete n[e];
            else if ("object" === i)
                for (t in n) n.hasOwnProperty(t) && e.test(t) && delete n[t];
            else delete this._events;
            return this
        }, i.emitEvent = function(e, t) {
            var i, n, o, s, a = this.getListenersAsObject(e);
            for (o in a)
                if (a.hasOwnProperty(o))
                    for (n = a[o].length; n--;) i = a[o][n], s = i.listener.apply(this, t || []), (s === this._getOnceReturnValue() || i.once === !0) && this.removeListener(e, a[o][n].listener);
            return this
        }, i.trigger = i.emitEvent, i.emit = function(e) {
            var t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t)
        }, i.setOnceReturnValue = function(e) {
            return this._onceReturnValue = e, this
        }, i._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, i._getEvents = function() {
            return this._events || (this._events = {})
        }, "function" == typeof define && define.amd ? define(function() {
            return e
        }) : "undefined" != typeof module && module.exports ? module.exports = e : this.EventEmitter = e
    }.call(this), function(e) {
        "use strict";

        function t() {}

        function i(e) {
            function i(t) {
                t.prototype.option || (t.prototype.option = function(t) {
                    e.isPlainObject(t) && (this.options = e.extend(!0, this.options, t))
                })
            }

            function o(t, i) {
                e.fn[t] = function(o) {
                    if ("string" == typeof o) {
                        for (var a = n.call(arguments, 1), r = 0, l = this.length; l > r; r++) {
                            var c = this[r],
                                d = e.data(c, t);
                            if (d)
                                if (e.isFunction(d[o]) && "_" !== o.charAt(0)) {
                                    var u = d[o].apply(d, a);
                                    if (void 0 !== u) return u
                                } else s("no such method '" + o + "' for " + t + " instance");
                            else s("cannot call methods on " + t + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = e.data(this, t);
                        n ? (n.option(o), n._init()) : (n = new i(this, o), e.data(this, t, n))
                    })
                }
            }
            if (e) {
                var s = "undefined" == typeof console ? t : function(e) {
                    console.error(e)
                };
                e.bridget = function(e, t) {
                    i(t), o(e, t)
                }
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define(["jquery"], i) : i(e.jQuery)
    }(window), function(e, t) {
        "use strict";

        function i(e, t) {
            return e[r](t)
        }

        function n(e) {
            if (!e.parentNode) {
                var t = document.createDocumentFragment();
                t.appendChild(e)
            }
        }

        function o(e, t) {
            n(e);
            for (var i = e.parentNode.querySelectorAll(t), o = 0, s = i.length; s > o; o++)
                if (i[o] === e) return !0;
            return !1
        }

        function s(e, t) {
            return n(e), i(e, t)
        }
        var a, r = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    s = o + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (r) {
            var l = document.createElement("div"),
                c = i(l, "div");
            a = c ? i : s
        } else a = o;
        "function" == typeof define && define.amd ? define(function() {
            return a
        }) : window.matchesSelector = a
    }(this, Element.prototype), function(e) {
        "use strict";

        function t(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function i(e, i, n) {
            function s(e, t) {
                e && (this.element = e, this.layout = t, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var a = n("transition"),
                r = n("transform"),
                l = a && r,
                c = !!n("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[a],
                u = ["transform", "transition", "transitionDuration", "transitionProperty"],
                h = function() {
                    for (var e = {}, t = 0, i = u.length; i > t; t++) {
                        var o = u[t],
                            s = n(o);
                        s && s !== o && (e[o] = s)
                    }
                    return e
                }();
            t(s.prototype, e.prototype), s.prototype._create = function() {
                this.css({
                    position: "absolute"
                })
            }, s.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, s.prototype.getSize = function() {
                this.size = i(this.element)
            }, s.prototype.css = function(e) {
                var t = this.element.style;
                for (var i in e) {
                    var n = h[i] || i;
                    t[n] = e[i]
                }
            }, s.prototype.getPosition = function() {
                var e = o(this.element),
                    t = this.layout.options,
                    i = t.isOriginLeft,
                    n = t.isOriginTop,
                    s = parseInt(e[i ? "left" : "right"], 10),
                    a = parseInt(e[n ? "top" : "bottom"], 10);
                s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a;
                var r = this.layout.size;
                s -= i ? r.paddingLeft : r.paddingRight, a -= n ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
            }, s.prototype.layoutPosition = function() {
                var e = this.layout.size,
                    t = this.layout.options,
                    i = {};
                t.isOriginLeft ? (i.left = this.position.x + e.paddingLeft + "px", i.right = "") : (i.right = this.position.x + e.paddingRight + "px", i.left = ""), t.isOriginTop ? (i.top = this.position.y + e.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + e.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var p = c ? function(e, t) {
                return "translate3d(" + e + "px, " + t + "px, 0)"
            } : function(e, t) {
                return "translate(" + e + "px, " + t + "px)"
            };
            s.prototype._transitionTo = function(e, t) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(e, 10),
                    s = parseInt(t, 10),
                    a = o === this.position.x && s === this.position.y;
                if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
                var r = e - i,
                    l = t - n,
                    c = {},
                    d = this.layout.options;
                r = d.isOriginLeft ? r : -r, l = d.isOriginTop ? l : -l, c.transform = p(r, l), this.transition({
                    to: c,
                    onTransitionEnd: this.layoutPosition,
                    isCleaning: !0
                })
            }, s.prototype.goTo = function(e, t) {
                this.setPosition(e, t), this.layoutPosition()
            }, s.prototype.moveTo = l ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function(e, t) {
                this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
            }, s.prototype._nonTransition = function(e) {
                this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd && e.onTransitionEnd.call(this)
            }, s.prototype._transition = function(e) {
                var t = this.layout.options.transitionDuration;
                if (!parseFloat(t)) return void this._nonTransition(e);
                var i = e.to,
                    n = [];
                for (var o in i) n.push(o);
                var s = {};
                if (s.transitionProperty = n.join(","), s.transitionDuration = t, this.element.addEventListener(d, this, !1), (e.isCleaning || e.onTransitionEnd) && this.on("transitionEnd", function(t) {
                        return e.isCleaning && t._removeStyles(i), e.onTransitionEnd && e.onTransitionEnd.call(t), !0
                    }), e.from) {
                    this.css(e.from);
                    var a = this.element.offsetHeight;
                    a = null
                }
                this.css(s), this.css(i), this.isTransitioning = !0
            }, s.prototype.transition = s.prototype[a ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function(e) {
                this.ontransitionend(e)
            }, s.prototype.onotransitionend = function(e) {
                this.ontransitionend(e)
            }, s.prototype.ontransitionend = function(e) {
                e.target === this.element && (this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1, this.emitEvent("transitionEnd", [this]))
            }, s.prototype._removeStyles = function(e) {
                var t = {};
                for (var i in e) t[i] = "";
                this.css(t)
            };
            var f = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return s.prototype.removeTransitionStyles = function() {
                this.css(f)
            }, s.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, s.prototype.remove = a ? function() {
                var e = this;
                this.on("transitionEnd", function() {
                    return e.removeElem(), !0
                }), this.hide()
            } : s.prototype.removeElem, s.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.hiddenStyle,
                    to: e.visibleStyle,
                    isCleaning: !0
                })
            }, s.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var e = this.layout.options;
                this.transition({
                    from: e.visibleStyle,
                    to: e.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: function() {
                        this.css({
                            display: "none"
                        })
                    }
                })
            }, s.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, s
        }
        var n = document.defaultView,
            o = n && n.getComputedStyle ? function(e) {
                return n.getComputedStyle(e, null)
            } : function(e) {
                return e.currentStyle
            };
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], i) : (e.Outlayer = {}, e.Outlayer.Item = i(e.EventEmitter, e.getSize, e.getStyleProperty))
    }(window), function(e) {
        "use strict";

        function t(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function i(e) {
            return "[object Array]" === d.call(e)
        }

        function n(e) {
            var t = [];
            if (i(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, o = e.length; o > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function o(e) {
            return e.replace(/(.)([A-Z])/g, function(e, t, i) {
                return t + "-" + i
            }).toLowerCase()
        }

        function s(i, s, d, p, f, m) {
            function g(e, i) {
                if ("string" == typeof e && (e = a.querySelector(e)), !e || !u(e)) return void(r && r.error("Bad " + this.settings.namespace + " element: " + e));
                this.element = e, this.options = t({}, this.options), t(this.options, i);
                var n = ++T;
                this.element.outlayerGUID = n, y[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            function v(e, i) {
                e.prototype[i] = t({}, g.prototype[i])
            }
            var T = 0,
                y = {};
            return g.prototype.settings = {
                namespace: "outlayer",
                item: m
            }, g.prototype.options = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, t(g.prototype, d.prototype), g.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), t(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function() {
                this.items = this._getItems(this.element.children)
            }, g.prototype._getItems = function(e) {
                for (var t = this._filterFindItemElements(e), i = this.settings.item, n = [], o = 0, s = t.length; s > o; o++) {
                    var a = t[o],
                        r = new i(a, this, this.options.itemOptions);
                    n.push(r)
                }
                return n
            }, g.prototype._filterFindItemElements = function(e) {
                e = n(e);
                var t = this.options.itemSelector;
                if (!t) return e;
                for (var i = [], o = 0, s = e.length; s > o; o++) {
                    var a = e[o];
                    f(a, t) && i.push(a);
                    for (var r = a.querySelectorAll(t), l = 0, c = r.length; c > l; l++) i.push(r[l])
                }
                return i
            }, g.prototype.getItemElements = function() {
                for (var e = [], t = 0, i = this.items.length; i > t; t++) e.push(this.items[t].element);
                return e
            }, g.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var e = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, e), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function() {
                this.getSize()
            }, g.prototype.getSize = function() {
                this.size = p(this.element)
            }, g.prototype._getMeasurement = function(e, t) {
                var i, n = this.options[e];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : u(n) && (i = n), this[e] = i ? p(i)[t] : n) : this[e] = 0
            }, g.prototype.layoutItems = function(e, t) {
                e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
            }, g.prototype._getItemsForLayout = function(e) {
                for (var t = [], i = 0, n = e.length; n > i; i++) {
                    var o = e[i];
                    o.isIgnored || t.push(o)
                }
                return t
            }, g.prototype._layoutItems = function(e, t) {
                if (!e || !e.length) return void this.emitEvent("layoutComplete", [this, e]);
                this._itemsOn(e, "layout", function() {
                    this.emitEvent("layoutComplete", [this, e])
                });
                for (var i = [], n = 0, o = e.length; o > n; n++) {
                    var s = e[n],
                        a = this._getItemLayoutPosition(s);
                    a.item = s, a.isInstant = t, i.push(a)
                }
                this._processLayoutQueue(i)
            }, g.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, g.prototype._processLayoutQueue = function(e) {
                for (var t = 0, i = e.length; i > t; t++) {
                    var n = e[t];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, g.prototype._positionItem = function(e, t, i, n) {
                n ? e.goTo(t, i) : e.moveTo(t, i)
            }, g.prototype._postLayout = function() {
                var e = this._getContainerSize();
                e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
            }, g.prototype._getContainerSize = c, g.prototype._setContainerMeasure = function(e, t) {
                if (void 0 !== e) {
                    var i = this.size;
                    i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
                }
            }, g.prototype._itemsOn = function(e, t, i) {
                function n() {
                    return o++, o === s && i.call(a), !0
                }
                for (var o = 0, s = e.length, a = this, r = 0, l = e.length; l > r; r++) {
                    var c = e[r];
                    c.on(t, n)
                }
            }, g.prototype.ignore = function(e) {
                var t = this.getItem(e);
                t && (t.isIgnored = !0)
            }, g.prototype.unignore = function(e) {
                var t = this.getItem(e);
                t && delete t.isIgnored
            }, g.prototype.stamp = function(e) {
                if (e = this._find(e)) {
                    this.stamps = this.stamps.concat(e);
                    for (var t = 0, i = e.length; i > t; t++) {
                        var n = e[t];
                        this.ignore(n)
                    }
                }
            }, g.prototype.unstamp = function(e) {
                if (e = this._find(e))
                    for (var t = 0, i = e.length; i > t; t++) {
                        var n = e[t],
                            o = h(this.stamps, n); - 1 !== o && this.stamps.splice(o, 1), this.unignore(n)
                    }
            }, g.prototype._find = function(e) {
                return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n(e)) : void 0
            }, g.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var e = 0, t = this.stamps.length; t > e; e++) {
                        var i = this.stamps[e];
                        this._manageStamp(i)
                    }
                }
            }, g.prototype._getBoundingRect = function() {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
                }
            }, g.prototype._manageStamp = c, g.prototype._getElementOffset = function(e) {
                var t = e.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = p(e),
                    o = {
                        left: t.left - i.left - n.marginLeft,
                        top: t.top - i.top - n.marginTop,
                        right: i.right - t.right - n.marginRight,
                        bottom: i.bottom - t.bottom - n.marginBottom
                    };
                return o
            }, g.prototype.handleEvent = function(e) {
                var t = "on" + e.type;
                this[t] && this[t](e)
            }, g.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(e, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function() {
                i.unbind(e, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function() {
                function e() {
                    t.resize()
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var t = this;
                this.resizeTimeout = setTimeout(e, 100)
            }, g.prototype.resize = function() {
                var e = p(this.element),
                    t = this.size && e;
                t && e.innerWidth === this.size.innerWidth || (this.layout(), delete this.resizeTimeout)
            }, g.prototype.addItems = function(e) {
                var t = this._getItems(e);
                return t.length ? (this.items = this.items.concat(t), t) : void 0
            }, g.prototype.appended = function(e) {
                var t = this.addItems(e);
                t.length && (this.layoutItems(t, !0), this.reveal(t))
            }, g.prototype.prepended = function(e) {
                var t = this._getItems(e);
                if (t.length) {
                    var i = this.items.slice(0);
                    this.items = t.concat(i), this._resetLayout(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
                }
            }, g.prototype.reveal = function(e) {
                if (e && e.length)
                    for (var t = 0, i = e.length; i > t; t++) {
                        var n = e[t];
                        n.reveal()
                    }
            }, g.prototype.hide = function(e) {
                if (e && e.length)
                    for (var t = 0, i = e.length; i > t; t++) {
                        var n = e[t];
                        n.hide()
                    }
            }, g.prototype.getItem = function(e) {
                for (var t = 0, i = this.items.length; i > t; t++) {
                    var n = this.items[t];
                    if (n.element === e) return n
                }
            }, g.prototype.getItems = function(e) {
                if (e && e.length) {
                    for (var t = [], i = 0, n = e.length; n > i; i++) {
                        var o = e[i],
                            s = this.getItem(o);
                        s && t.push(s)
                    }
                    return t
                }
            }, g.prototype.remove = function(e) {
                e = n(e);
                var t = this.getItems(e);
                this._itemsOn(t, "remove", function() {
                    this.emitEvent("removeComplete", [this, t])
                });
                for (var i = 0, o = t.length; o > i; i++) {
                    var s = t[i];
                    s.remove();
                    var a = h(this.items, s);
                    this.items.splice(a, 1)
                }
            }, g.prototype.destroy = function() {
                var e = this.element.style;
                e.height = "", e.position = "", e.width = "";
                for (var t = 0, i = this.items.length; i > t; t++) {
                    var n = this.items[t];
                    n.destroy()
                }
                this.unbindResize(), delete this.element.outlayerGUID
            }, g.data = function(e) {
                var t = e && e.outlayerGUID;
                return t && y[t]
            }, g.create = function(e, i) {
                function n() {
                    g.apply(this, arguments)
                }
                return t(n.prototype, g.prototype), v(n, "options"), v(n, "settings"), t(n.prototype.options, i), n.prototype.settings.namespace = e, n.data = g.data, n.Item = function() {
                    m.apply(this, arguments)
                }, n.Item.prototype = new m, n.prototype.settings.item = n.Item, s(function() {
                    for (var t = o(e), i = a.querySelectorAll(".js-" + t), s = "data-" + t + "-options", c = 0, d = i.length; d > c; c++) {
                        var u, h = i[c],
                            p = h.getAttribute(s);
                        try {
                            u = p && JSON.parse(p)
                        } catch (f) {
                            r && r.error("Error parsing " + s + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + f);
                            continue
                        }
                        var m = new n(h, u);
                        l && l.data(h, e, m)
                    }
                }), l && l.bridget && l.bridget(e, n), n
            }, g.Item = m, g
        }
        var a = e.document,
            r = e.console,
            l = e.jQuery,
            c = function() {},
            d = Object.prototype.toString,
            u = "object" == typeof HTMLElement ? function(e) {
                return e instanceof HTMLElement
            } : function(e) {
                return e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName
            },
            h = Array.prototype.indexOf ? function(e, t) {
                return e.indexOf(t)
            } : function(e, t) {
                for (var i = 0, n = e.length; n > i; i++)
                    if (e[i] === t) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define(["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : e.Outlayer = s(e.eventie, e.docReady, e.EventEmitter, e.getSize, e.matchesSelector, e.Outlayer.Item)
    }(window), function(e) {
        "use strict";

        function t(e, t) {
            var n = e.create("masonry");
            return n.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var e = this.cols;
                for (this.colYs = []; e--;) this.colYs.push(0);
                this.maxY = 0
            }, n.prototype.measureColumns = function() {
                var e = this._getSizingContainer(),
                    i = this.items[0],
                    n = i && i.element;
                this.columnWidth || (this.columnWidth = n ? t(n).outerWidth : this.size.innerWidth), this.columnWidth += this.gutter, this._containerWidth = t(e).innerWidth, this.cols = Math.floor((this._containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, n.prototype._getSizingContainer = function() {
                return this.options.isFitWidth ? this.element.parentNode : this.element
            }, n.prototype._getItemLayoutPosition = function(e) {
                e.getSize();
                var t = Math.ceil(e.size.outerWidth / this.columnWidth);
                t = Math.min(t, this.cols);
                for (var n = this._getColGroup(t), o = Math.min.apply(Math, n), s = i(n, o), a = {
                        x: this.columnWidth * s,
                        y: o
                    }, r = o + e.size.outerHeight, l = this.cols + 1 - n.length, c = 0; l > c; c++) this.colYs[s + c] = r;
                return a
            }, n.prototype._getColGroup = function(e) {
                if (1 === e) return this.colYs;
                for (var t = [], i = this.cols + 1 - e, n = 0; i > n; n++) {
                    var o = this.colYs.slice(n, n + e);
                    t[n] = Math.max.apply(Math, o)
                }
                return t
            }, n.prototype._manageStamp = function(e) {
                var i = t(e),
                    n = this._getElementOffset(e),
                    o = this.options.isOriginLeft ? n.left : n.right,
                    s = o + i.outerWidth,
                    a = Math.floor(o / this.columnWidth);
                a = Math.max(0, a);
                var r = Math.floor(s / this.columnWidth);
                r = Math.min(this.cols - 1, r);
                for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, c = a; r >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
            }, n.prototype._getContainerSize = function() {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = {
                    height: this.maxY
                };
                return this.options.isFitWidth && (e.width = this._getContainerFitWidth()), e
            }, n.prototype._getContainerFitWidth = function() {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
                return (this.cols - e) * this.columnWidth - this.gutter
            }, n.prototype.resize = function() {
                var e = this._getSizingContainer(),
                    i = t(e),
                    n = this.size && i;
                n && i.innerWidth === this._containerWidth || (this.layout(), delete this.resizeTimeout)
            }, n
        }
        var i = Array.prototype.indexOf ? function(e, t) {
            return e.indexOf(t)
        } : function(e, t) {
            for (var i = 0, n = e.length; n > i; i++) {
                var o = e[i];
                if (o === t) return i
            }
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : e.Masonry = t(e.Outlayer, e.getSize)
    }(window), FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0, FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent), FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent), FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent), FastClick.prototype.needsClick = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
                if (e.disabled) return !0;
                break;
            case "input":
                if (this.deviceIsIOS && "file" === e.type || e.disabled) return !0;
                break;
            case "label":
            case "video":
                return !0
        }
        return /\bneedsclick\b/.test(e.className)
    }, FastClick.prototype.needsFocus = function(e) {
        "use strict";
        switch (e.nodeName.toLowerCase()) {
            case "textarea":
            case "select":
                return !0;
            case "input":
                switch (e.type) {
                    case "button":
                    case "checkbox":
                    case "file":
                    case "image":
                    case "radio":
                    case "submit":
                        return !1
                }
                return !e.disabled && !e.readOnly;
            default:
                return /\bneedsfocus\b/.test(e.className)
        }
    }, FastClick.prototype.sendClick = function(e, t) {
        "use strict";
        var i, n;
        document.activeElement && document.activeElement !== e && document.activeElement.blur(),
            n = t.changedTouches[0], i = document.createEvent("MouseEvents"), i.initMouseEvent("click", !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null), i.forwardedTouchEvent = !0, e.dispatchEvent(i)
    }, FastClick.prototype.focus = function(e) {
        "use strict";
        var t;
        this.deviceIsIOS && e.setSelectionRange ? (t = e.value.length, e.setSelectionRange(t, t)) : e.focus()
    }, FastClick.prototype.updateScrollParent = function(e) {
        "use strict";
        var t, i;
        if (t = e.fastClickScrollParent, !t || !t.contains(e)) {
            i = e;
            do {
                if (i.scrollHeight > i.offsetHeight) {
                    t = i, e.fastClickScrollParent = i;
                    break
                }
                i = i.parentElement
            } while (i)
        }
        t && (t.fastClickLastScrollTop = t.scrollTop)
    }, FastClick.prototype.getTargetElementFromEventTarget = function(e) {
        "use strict";
        return e.nodeType === Node.TEXT_NODE ? e.parentNode : e
    }, FastClick.prototype.onTouchStart = function(e) {
        "use strict";
        var t, i, n;
        if (e.targetTouches.length > 1) return !0;
        if (t = this.getTargetElementFromEventTarget(e.target), i = e.targetTouches[0], this.deviceIsIOS) {
            if (n = window.getSelection(), n.rangeCount && !n.isCollapsed) return !0;
            if (!this.deviceIsIOS4) {
                if (i.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                this.lastTouchIdentifier = i.identifier, this.updateScrollParent(t)
            }
        }
        return this.trackingClick = !0, this.trackingClickStart = e.timeStamp, this.targetElement = t, this.touchStartX = i.pageX, this.touchStartY = i.pageY, e.timeStamp - this.lastClickTime < 200 && e.preventDefault(), !0
    }, FastClick.prototype.touchHasMoved = function(e) {
        "use strict";
        var t = e.changedTouches[0],
            i = this.touchBoundary;
        return Math.abs(t.pageX - this.touchStartX) > i || Math.abs(t.pageY - this.touchStartY) > i ? !0 : !1
    }, FastClick.prototype.findControl = function(e) {
        "use strict";
        return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")
    }, FastClick.prototype.onTouchEnd = function(e) {
        "use strict";
        var t, i, n, o, s, a = this.targetElement;
        if (this.touchHasMoved(e) && (this.trackingClick = !1, this.targetElement = null), !this.trackingClick) return !0;
        if (e.timeStamp - this.lastClickTime < 200) return this.cancelNextClick = !0, !0;
        if (this.lastClickTime = e.timeStamp, i = this.trackingClickStart, this.trackingClick = !1, this.trackingClickStart = 0, this.deviceIsIOSWithBadTarget && (s = e.changedTouches[0], a = document.elementFromPoint(s.pageX - window.pageXOffset, s.pageY - window.pageYOffset) || a, a.fastClickScrollParent = this.targetElement.fastClickScrollParent), n = a.tagName.toLowerCase(), "label" === n) {
            if (t = this.findControl(a)) {
                if (this.focus(a), this.deviceIsAndroid) return !1;
                a = t
            }
        } else if (this.needsFocus(a)) return e.timeStamp - i > 100 || this.deviceIsIOS && window.top !== window && "input" === n ? (this.targetElement = null, !1) : (this.focus(a), this.deviceIsIOS4 && "select" === n || (this.targetElement = null, e.preventDefault()), !1);
        return this.deviceIsIOS && !this.deviceIsIOS4 && (o = a.fastClickScrollParent, o && o.fastClickLastScrollTop !== o.scrollTop) ? !0 : (this.needsClick(a) || (e.preventDefault(), this.sendClick(a, e)), !1)
    }, FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = !1, this.targetElement = null
    }, FastClick.prototype.onMouse = function(e) {
        "use strict";
        return this.targetElement ? e.forwardedTouchEvent ? !0 : e.cancelable && (!this.needsClick(this.targetElement) || this.cancelNextClick) ? (e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.propagationStopped = !0, e.stopPropagation(), e.preventDefault(), !1) : !0 : !0
    }, FastClick.prototype.onClick = function(e) {
        "use strict";
        var t;
        return this.trackingClick ? (this.targetElement = null, this.trackingClick = !1, !0) : "submit" === e.target.type && 0 === e.detail ? !0 : (t = this.onMouse(e), t || (this.targetElement = null), t)
    }, FastClick.prototype.destroy = function() {
        "use strict";
        var e = this.layer;
        this.deviceIsAndroid && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)), e.removeEventListener("click", this.onClick, !0), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchend", this.onTouchEnd, !1), e.removeEventListener("touchcancel", this.onTouchCancel, !1)
    }, FastClick.notNeeded = function(e) {
        "use strict";
        var t;
        if ("undefined" == typeof window.ontouchstart) return !0;
        if (/Chrome\/[0-9]+/.test(navigator.userAgent)) {
            if (!FastClick.prototype.deviceIsAndroid) return !0;
            if (t = document.querySelector("meta[name=viewport]"), t && -1 !== t.content.indexOf("user-scalable=no")) return !0
        }
        return "none" === e.style.msTouchAction ? !0 : !1
    }, FastClick.attach = function(e) {
        "use strict";
        return new FastClick(e)
    }, "undefined" != typeof define && define.amd ? define(function() {
        "use strict";
        return FastClick
    }) : "undefined" != typeof module && module.exports ? (module.exports = FastClick.attach, module.exports.FastClick = FastClick) : window.FastClick = FastClick, function($, e, t) {
        "$:nomunge";
        $.scrollbarWidth = function() {
            var i, n;
            return t === e && (i = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"), n = i.children(), t = n.innerWidth() - n.height(99).innerWidth(), i.remove()), t
        }
    }(jQuery), function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
    }(function($) {
        function e(e) {
            return a.raw ? e : encodeURIComponent(e)
        }

        function t(e) {
            return a.raw ? e : decodeURIComponent(e)
        }

        function i(t) {
            return e(a.json ? JSON.stringify(t) : String(t))
        }

        function n(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(s, " ")), a.json ? JSON.parse(e) : e
            } catch (t) {}
        }

        function o(e, t) {
            var i = a.raw ? e : n(e);
            return $.isFunction(t) ? t(i) : i
        }
        var s = /\+/g,
            a = $.cookie = function(n, s, r) {
                if (void 0 !== s && !$.isFunction(s)) {
                    if (r = $.extend({}, a.defaults, r), "number" == typeof r.expires) {
                        var l = r.expires,
                            c = r.expires = new Date;
                        c.setTime(+c + 864e5 * l)
                    }
                    return document.cookie = [e(n), "=", i(s), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")
                }
                for (var d = n ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], h = 0, p = u.length; p > h; h++) {
                    var f = u[h].split("="),
                        m = t(f.shift()),
                        g = f.join("=");
                    if (n && n === m) {
                        d = o(g, s);
                        break
                    }
                    n || void 0 === (g = o(g)) || (d[m] = g)
                }
                return d
            };
        a.defaults = {}, $.removeCookie = function(e, t) {
            return void 0 === $.cookie(e) ? !1 : ($.cookie(e, "", $.extend({}, t, {
                expires: -1
            })), !$.cookie(e))
        }
    }), function(e, t, $) {
        function i(e) {
            var t = {},
                i = /^jQuery\d+$/;
            return $.each(e.attributes, function(e, n) {
                n.specified && !i.test(n.name) && (t[n.name] = n.value)
            }), t
        }

        function n(e, i) {
            var n = this,
                o = $(n);
            if (n.value == o.attr("placeholder") && o.hasClass("placeholder"))
                if (o.data("placeholder-password")) {
                    if (o = o.hide().next().show().attr("id", o.removeAttr("id").data("placeholder-id")), e === !0) return o[0].value = i;
                    o.focus()
                } else n.value = "", o.removeClass("placeholder"), n == t.activeElement && n.select()
        }

        function o() {
            var e, t = this,
                o = $(t),
                s = this.id;
            if ("" == t.value) {
                if ("password" == t.type) {
                    if (!o.data("placeholder-textinput")) {
                        try {
                            e = o.clone().attr({
                                type: "text"
                            })
                        } catch (a) {
                            e = $("<input>").attr($.extend(i(this), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-password": o,
                            "placeholder-id": s
                        }).bind("focus.placeholder", n), o.data({
                            "placeholder-textinput": e,
                            "placeholder-id": s
                        }).before(e)
                    }
                    o = o.removeAttr("id").hide().prev().attr("id", s).show()
                }
                o.addClass("placeholder"), o[0].value = o.attr("placeholder")
            } else o.removeClass("placeholder")
        }
        var s = "placeholder" in t.createElement("input"),
            a = "placeholder" in t.createElement("textarea"),
            r = $.fn,
            l = $.valHooks,
            c = $.propHooks,
            d, u;
        s && a ? (u = r.placeholder = function() {
            return this
        }, u.input = u.textarea = !0) : (u = r.placeholder = function() {
            var e = this;
            return e.filter((s ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": n,
                "blur.placeholder": o
            }).data("placeholder-enabled", !0).trigger("blur.placeholder"), e
        }, u.input = s, u.textarea = a, d = {
            get: function(e) {
                var t = $(e),
                    i = t.data("placeholder-password");
                return i ? i[0].value : t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, i) {
                var s = $(e),
                    a = s.data("placeholder-password");
                return a ? a[0].value = i : s.data("placeholder-enabled") ? ("" == i ? (e.value = i, e != t.activeElement && o.call(e)) : s.hasClass("placeholder") ? n.call(e, !0, i) || (e.value = i) : e.value = i, s) : e.value = i
            }
        }, s || (l.input = d, c.value = d), a || (l.textarea = d, c.value = d), $(function() {
            $(t).delegate("form", "submit.placeholder", function() {
                var e = $(".placeholder", this).each(n);
                setTimeout(function() {
                    e.each(o)
                }, 10)
            })
        }), $(e).bind("beforeunload.placeholder", function() {
            $(".placeholder").each(function() {
                this.value = ""
            })
        }))
    }(this, document, jQuery), !jQuery.support.cors && jQuery.ajaxTransport && window.XDomainRequest) {
    var httpRegEx = /^https?:\/\//i,
        getOrPostRegEx = /^get|post$/i,
        sameSchemeRegEx = new RegExp("^" + location.protocol, "i"),
        htmlRegEx = /text\/html/i,
        jsonRegEx = /\/json/i,
        xmlRegEx = /\/xml/i;
    jQuery.ajaxTransport("text html xml json", function(e, t, i) {
        if (e.crossDomain && e.async && getOrPostRegEx.test(e.type) && httpRegEx.test(e.url) && sameSchemeRegEx.test(e.url)) {
            var n = null,
                o = (t.dataType || "").toLowerCase();
            return {
                send: function(i, s) {
                    n = new XDomainRequest, /^\d+$/.test(t.timeout) && (n.timeout = t.timeout), n.ontimeout = function() {
                        s(500, "timeout")
                    }, n.onload = function() {
                        var e = "Content-Length: " + n.responseText.length + "\r\nContent-Type: " + n.contentType,
                            t = {
                                code: 200,
                                message: "success"
                            },
                            i = {
                                text: n.responseText
                            };
                        try {
                            if ("html" === o || htmlRegEx.test(n.contentType)) i.html = n.responseText;
                            else if ("json" === o || "text" !== o && jsonRegEx.test(n.contentType)) try {
                                i.json = jQuery.parseJSON(n.responseText)
                            } catch (a) {
                                t.code = 500, t.message = "parseerror"
                            } else if ("xml" === o || "text" !== o && xmlRegEx.test(n.contentType)) {
                                var r = new ActiveXObject("Microsoft.XMLDOM");
                                r.async = !1;
                                try {
                                    r.loadXML(n.responseText)
                                } catch (a) {
                                    r = void 0
                                }
                                if (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) throw t.code = 500, t.message = "parseerror", "Invalid XML: " + n.responseText;
                                i.xml = r
                            }
                        } catch (l) {
                            throw l
                        } finally {
                            s(t.code, t.message, i, e)
                        }
                    }, n.onprogress = function() {}, n.onerror = function() {
                        s(500, "error", {
                            text: n.responseText
                        })
                    };
                    var a = "";
                    t.data && (a = "string" === jQuery.type(t.data) ? t.data : jQuery.param(t.data)), n.open(e.type, e.url), n.send(a)
                },
                abort: function() {
                    n && n.abort()
                }
            }
        }
    })
}! function(e) {
    window.MBP = window.MBP || {}, MBP.viewportmeta = e.querySelector && e.querySelector('meta[name="viewport"]'), MBP.ua = navigator.userAgent, MBP.scaleFix = function() {
        MBP.viewportmeta && /iPhone|iPad|iPod/.test(MBP.ua) && !/Opera Mini/.test(MBP.ua) && (MBP.viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0", e.addEventListener("gesturestart", MBP.gestureStart, !1))
    }, MBP.gestureStart = function() {
        MBP.viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6"
    }, MBP.BODY_SCROLL_TOP = !1, MBP.getScrollTop = function() {
        var t = window,
            i = e;
        return t.pageYOffset || "CSS1Compat" === i.compatMode && i.documentElement.scrollTop || i.body.scrollTop || 0
    }, MBP.hideUrlBar = function() {
        var e = window;
        location.hash || MBP.BODY_SCROLL_TOP === !1 || e.scrollTo(0, 1 === MBP.BODY_SCROLL_TOP ? 0 : 1)
    }, MBP.hideUrlBarOnLoad = function() {
        var e = window,
            t = e.document,
            i;
        !location.hash && e.addEventListener && (window.scrollTo(0, 1), MBP.BODY_SCROLL_TOP = 1, i = setInterval(function() {
            t.body && (clearInterval(i), MBP.BODY_SCROLL_TOP = MBP.getScrollTop(), MBP.hideUrlBar())
        }, 15), e.addEventListener("load", function() {
            setTimeout(function() {
                MBP.getScrollTop() < 20 && MBP.hideUrlBar()
            }, 0)
        }))
    }
}(document);
var PTT = PTT || {};
PTT.Resolutions = {
    EXTRA_LARGE: 1120,
    TABLET: 1030,
    LARGE: 1016,
    MEDIUM: 960,
    SMALL: 720,
    maxWidth: function(e) {
        return PTT.Globals.windowWidth < e
    },
    minWidth: function(e) {
        return PTT.Globals.windowWidth >= e
    }
}, PTT.Globals = {
    windowWidth: 0,
    windowHeight: 0,
    scrollTop: 0,
    $window: null,
    $body: null
}, PTT.Analytics = {
    init: function() {
        $(".track-event").on("click", function() {
            var e = $(this).data("eventdata"),
                t = e.split("http://www.ctrus.eu/");
            PTT.Analytics.trackEvent(t[0], t[1], t[2])
        })
    },
    trackEvent: function(e, t, i) {
        "undefined" != typeof _gaq && _gaq.push(["_trackEvent", e, t, i])
    }
}, PTT.NavigationManager = {
    init: function() {
        $('<div class="animation-overlay"></div>').appendTo($("#container")), $(".transition.from-bottom").on("click", PTT.NavigationManager.fromBottom), $(".transition.from-top").on("click", PTT.NavigationManager.fromTop), $(".transition.from-center").on("click", PTT.NavigationManager.fromCenter), $(".transition.from-outside").on("click", PTT.NavigationManager.fromOutside)
    },
    fromBottom: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            top: "100%"
        }).show(), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            left: 0,
            top: 0,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        }), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    fromTop: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        PTT.MainNavigation.close(), $(".animation-overlay").css({
            top: "-100%"
        }).show(), TweenMax.to($(".animation-overlay"), 1, {
            left: 0,
            top: 0,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        })
    },
    fromCenter: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            top: "50%",
            left: "50%",
            width: 1,
            height: 1
        }).show(), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        }), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    fromOutside: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        $(".animation-overlay").css({
            opacity: 0,
            background: "transparent",
            border: "1px solid #fff"
        }).show(), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            "border-top": .5 * PTT.Globals.windowHeight,
            "border-bottom": .5 * PTT.Globals.windowHeight,
            "border-left": .5 * PTT.Globals.windowWidth,
            "border-right": .5 * PTT.Globals.windowWidth,
            ease: Quint.easeOut,
            onComplete: function() {
                window.location.href = t
            }
        }), TweenMax.to($(".animation-overlay"), .5, {
            opacity: 1,
            ease: Quad.easeOut
        })
    }
}, PTT.SlideManager = {
    activated: !0,
    currentSlide: 0,
    animating: !1,
    initiatedByWheel: !1,
    initiatedByClick: !1,
    snapping: !1,
    mouseDown: !1,
    scrolledWithMouseDown: !1,
    $slides: null,
    slideCount: 0,
    $currentSlide: null,
    $newSlide: null,
    $footerActive: !1,
    firstSlide: !0,
    scrollTarget: window,
    smallScreen: !1,
    slideshowTimeout: null,
    init: function() { // footer bottom find :
        return 0 == $(".slides").length ? !1 : (PTT.SlideManager.$slides = $(".slides").find(".slide"), PTT.SlideManager.slideCount = PTT.SlideManager.$slides.length, $(".slides").find("footer.bottom").append($(".main-content > footer.bottom").html()), PTT.SlideManager.addListeners(), PTT.SlideManager.smallScreen || Modernizr.touch || PTT.SlideManager.addMouseAnimation($(".slide.active")), void PTT.SlideManager.$slides.each(function() {
            $(this).find(".slide-background").each(function() {
                var e = $(this);
                "undefined" != typeof e.data("bgmobile") && (PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.touch ? e.css({
                    "background-image": "url(" + e.data("bgmobile") + ")"
                }) : e.css({
                    "background-image": "url(" + e.data("bg") + ")"
                }))
            }), $(this).find("img").each(function() {
                var e = $(this);
                "undefined" != typeof e.data("imgsrcmobile") && (PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.touch ? e.attr("src", e.data("imgsrcmobile")) : e.attr("src", e.data("imgsrc")))
            })
        }))
    },
    addListeners: function() {
        if ($(".slide-navigator li a").each(function() {
                var e = $(this).find("h3");
                $(this).data({
                    titlewidth: e.outerWidth()
                }), e.css({
                    opacity: 0
                }).hide()
            }), $(".slide-navigator li a").on("click", function(e) {
                if (e.preventDefault(), PTT.SlideManager.smallScreen) return !1;
                var t = $(this).parent("li").index();
                PTT.SlideManager.animateTo(t, "click")
            }), $(".slide-navigator li a").on("mouseover", function(e) {
                if (Modernizr.touch) return !0;
                var t = $(this).find("h3");
                return 1 == t.data("ignoreMouse") ? void e.preventDefault() : (t.css({
                    display: "inline-block"
                }), void TweenMax.to(t, 1, {
                    opacity: 1,
                    ease: Quint.easeOut
                }))
            }), $(".slide-navigator li a").on("mouseleave", function(e) {
                if (Modernizr.touch) return !0;
                var t = $(this).find("h3");
                t.data("ignoreMouse", !0), TweenMax.to(t, .5, {
                    opacity: 0,
                    ease: Quint.easeOut,
                    onComplete: function() {
                        t.hide(), t.data("ignoreMouse", !1)
                    }
                })
            }), $(".video-player").youtubePlayerWithPoster({
                customFullscreen: !1,
                playCallback: PTT.SlideManager.resizeVideoSlide
            }), $(".slide-arrow-nav").on("click", function(e) {
                if (e.preventDefault(), PTT.SlideManager.smallScreen) return !1;
                var t = PTT.SlideManager.currentSlide;
                PTT.SlideManager.$footerActive || ($(this).is(".down") ? PTT.SlideManager.scrollDown("click") : PTT.SlideManager.scrollUp("click"))
            }), $(".scroll-down.button, .slide-background.scroll-down").on("click", function(e) {
                e.preventDefault(), PTT.SlideManager.scrollDown("click")
            }), PTT.SlideManager.$slides.filter(".product").find(".product-image").find("img").each(function() {
                var e = $(this);
                e.imagesLoaded(function() {
                    e.parents(".product-image").addClass("loaded"), PTT.SlideManager.resizeProductImage(e.parents(".product-image"))
                })
            }), $(window).on("keyup", function(e) {
                PTT.Footer.newsletterFormActive || (38 == e.which ? PTT.SlideManager.scrollUp("click") : 40 == e.which && PTT.SlideManager.scrollDown("click"))
            }), ($("body").hasClass("frontpage") || $("body").hasClass("ctrus")) && PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            var e = $(".touch .slides").hammer(),
                t = $(".touch .slides .featured-products").hammer();
            t.on("dragup dragdown", function(e) {
                e.gesture.stopPropagation(), e.stopPropagation()
            }), e.on("dragup", function(e) {
                e.gesture.preventDefault(), PTT.SlideManager.scrollDown("click")
            }), e.on("dragdown", function(e) {
                e.gesture.preventDefault(), PTT.SlideManager.scrollUp("click")
            })
        }
        Modernizr.touch || $("body").mousewheel(function(e, t, i, n) {
            if (PTT.SlideManager.smallScreen) return !0;
            if (PTT.SlideManager.animating) return !1;
            if (PTT.FeaturedProducts.isScrolling) return !1;
            e.preventDefault(), $("html").hasClass("lt-ie9") && (n = t);
            var o = PTT.SlideManager.currentSlide;
            return 0 > n ? PTT.SlideManager.scrollDown("mousewheel") : PTT.SlideManager.scrollUp("mousewheel"), !1
        }), PTT.SlideManager.$slides.on("click", "a.transition", function() {
            $.cookie("ptt_slide_currentslide", PTT.SlideManager.currentSlide, {
                expires: 1 / 48,
                path: "/"
            }), $.cookie("ptt_slide_slideshow", $("section.slides").attr("id"), {
                expires: 1 / 48,
                path: "/"
            })
        }), PTT.Globals.$window.on("resize", PTT.SlideManager.resize), PTT.SlideManager.resize();
        var i = -1;
        $.cookie("ptt_slide_slideshow") == $("section.slides").attr("id") && "undefined" != typeof $.cookie("ptt_slide_currentslide") && (i = $.cookie("ptt_slide_currentslide"), $.removeCookie("ptt_slide_currentslide", {
            path: "/"
        }), $.removeCookie("ptt_slide_slideshow", {
            path: "/"
        })), PTT.SlideManager.smallScreen || $("body").hasClass("ctrus") || -1 != i || PTT.SlideManager.transitionIn(), !PTT.SlideManager.smallScreen && i > -1 && PTT.SlideManager.animateTo(i, "history")
    },
    transitionIn: function() {
        TweenMax.from($(".slide-navigator"), 1, {
            delay: 1,
            left: -100,
            ease: Quad.easeInOut
        }), TweenMax.delayedCall(2, function() {
            PTT.SlideManager.showFeaturedProducts(PTT.SlideManager.$slides.filter(".active"))
        }), TweenMax.delayedCall(3, function() {
            PTT.SlideManager.hideFeaturedProducts()
        })
    },
    startSlideshow: function() {
        PTT.SlideManager.slideshowTimeout = setInterval(function() {
            PTT.SlideManager.currentSlide == PTT.SlideManager.slideCount - 2 ? PTT.SlideManager.animateTo(0, "slideshow") : PTT.SlideManager.scrollDown("slideshow")
        }, 1e4)
    },
    stopSlideshow: function() {
        null !== PTT.SlideManager.slideshowTimeout && (clearInterval(PTT.SlideManager.slideshowTimeout), PTT.SlideManager.slideshowTimeout = null)
    },
    scrollUp: function(e) {
        var t = PTT.SlideManager.currentSlide;
        return 0 == PTT.SlideManager.currentSlide ? (PTT.SlideManager.animating = !1, !1) : (PTT.SlideManager.$footerActive || (t = PTT.SlideManager.currentSlide - 1), void PTT.SlideManager.animateTo(t, e))
    },
    scrollDown: function(e) {
        var t = PTT.SlideManager.currentSlide;
        return PTT.SlideManager.currentSlide == PTT.SlideManager.slideCount - 1 ? (PTT.SlideManager.animating = !1, !1) : (PTT.SlideManager.$footerActive || (t = PTT.SlideManager.currentSlide + 1), void PTT.SlideManager.animateTo(t, e))
    },
    slideMouseAnimation: function(e) {
        if (!Modernizr.touch || !PTT.SlideManager.smallScreen) {
            var t = $(this),
                i = t.height() / 2,
                n = t.width() / 2,
                o = e.clientX - t.offset().left,
                s = e.clientY - t.offset().top,
                a = (n - o) / t.width(),
                r = (i - s) / t.height(),
                l = a * (t.width() / 18),
                c = r * (t.height() / 18);
            TweenMax.to(t.find(".slide-background"), 6, {
                x: l,
                y: c,
                z: 0,
                overwrite: 1
            })
        }
    },
    animateTo: function(e, t) {
        if (PTT.SlideManager.animating) return !1;
        if ("mousewheel" == t && (PTT.SlideManager.initiatedByWheel = !0), "click" == t && (PTT.SlideManager.initiatedByClick = !0), "snapping" == t && (PTT.SlideManager.snapping = !0), "slideshow" != t && PTT.SlideManager.stopSlideshow(), PTT.SlideManager.currentSlide == e && !PTT.SlideManager.snapping && !PTT.SlideManager.$footerActive) return !1;
        var i = e * (PTT.SlideManager.scrollTarget == window ? PTT.Globals.windowHeight : $(".slide").first().height());
        i > $(".slides").height() - PTT.Globals.windowHeight && (i = "max"), TweenMax.killAll(!1, !1, !0);
        var n = e - PTT.SlideManager.currentSlide;
        PTT.SlideManager.animating = !0, PTT.SlideManager.slideOutTransition(n);
        var o = PTT.SlideManager.$slides.eq(e),
            s = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        if (!PTT.SlideManager.smallScreen) {
            if (e != PTT.SlideManager.currentSlide && (s.addClass("transition-out"), PTT.SlideManager.removeMouseAnimation(s), o.addClass("transition-in")), o.is("footer")) PTT.SlideManager.$footerActive || (PTT.Footer.resize(), TweenMax.to(s, .9, {
                delay: .05,
                top: -o.outerHeight(),
                ease: Quad.easeOut
            }), o.addClass("down").css({
                bottom: -o.height()
            }), TweenMax.to(o, .9, {
                delay: .05,
                bottom: 0,
                ease: Quad.easeOut,
                onComplete: PTT.SlideManager.slideTransitionComplete,
                onCompleteParams: [o]
            }));
            else {
                var a = 0;
                PTT.SlideManager.$footerActive && (TweenMax.to(s, .9, {
                    delay: .05,
                    top: 0,
                    ease: Quad.easeOut
                }), TweenMax.to($("footer.bottom"), .9, {
                    delay: .05,
                    bottom: -$("footer.bottom").outerHeight(),
                    ease: Quad.easeOut,
                    onComplete: function() {
                        PTT.SlideManager.$footerActive = !1, e == PTT.SlideManager.currentSlide && (TweenMax.killAll(!1, !1, !0), PTT.SlideManager.slideTransitionComplete(o))
                    }
                }), a = 0), TweenMax.delayedCall(a, function() {
                    PTT.SlideManager.resizeSlide(o), $(".slide-navigator li a").trigger("mouseleave"), $(".slide-navigator li a.active").trigger("mouseover"), n > 0 ? (o.find(".slide-background").css({
                        top: "10%",
                        bottom: "auto"
                    }), o.find(".text-overlay").each(function() {
                        $(this).data("targettop", $(this).css("top")).css({
                            top: "70%"
                        })
                    })) : 0 > n && (o.find(".slide-background").css({
                        bottom: "10%",
                        top: "auto"
                    }), o.find(".text-overlay").each(function() {
                        $(this).data("targettop", $(this).css("top")).css({
                            top: "30%"
                        })
                    })), n > 0 ? (o.addClass("down"), s.addClass("down"), TweenMax.to(o.find(".slide-background"), .9, {
                        delay: .05,
                        top: "-0%",
                        ease: Quad.easeOut
                    }), o.find(".text-overlay").each(function() {
                        var e = $(this);
                        TweenMax.to(e, .9, {
                            delay: .05,
                            top: e.data("targettop"),
                            ease: Quad.easeOut,
                            onComplete: function() {
                                e.css({
                                    top: ""
                                })
                            }
                        })
                    }), PTT.SlideManager.slideInTransition(o), TweenMax.to(s, .9, {
                        delay: .05,
                        height: "0",
                        ease: Quad.easeOut,
                        onComplete: PTT.SlideManager.slideTransitionComplete,
                        onCompleteParams: [o]
                    })) : 0 > n && (o.css({
                        top: 0,
                        bottom: "auto",
                        height: 0
                    }), o.addClass("up"), s.addClass("up"), o.find(".text-overlay").each(function() {
                        var e = $(this);
                        TweenMax.to(e, .9, {
                            delay: .05,
                            top: e.data("targettop"),
                            ease: Quad.easeOut,
                            onComplete: function() {
                                e.css({
                                    top: ""
                                })
                            }
                        })
                    }), TweenMax.to(o.find(".slide-background"), .9, {
                        delay: .05,
                        bottom: "0%",
                        ease: Quad.easeOut
                    }), PTT.SlideManager.slideInTransition(o), TweenMax.to(o, .9, {
                        delay: .05,
                        height: "100%",
                        ease: Quad.easeOut,
                        onComplete: PTT.SlideManager.slideTransitionComplete,
                        onCompleteParams: [o]
                    }))
                })
            }
            PTT.SlideManager.updateNavigator(e)
        }
    },
    addMouseAnimation: function(e) {
        $("body").hasClass("ctrus") || $("html").hasClass("lt-ie9") || e.find(".slide-background").length > 0 && (e.hasClass("multiple") ? e.find(".block").each(function() {
            1 == $(this).find(".slide-background").length && $(this).on("mousemove", PTT.SlideManager.slideMouseAnimation)
        }) : e.on("mousemove", PTT.SlideManager.slideMouseAnimation))
    },
    removeMouseAnimation: function(e) {
        e.hasClass("multiple") ? e.find(".block").each(function() {
            $(this).off("mousemove")
        }) : e.off("mousemove")
    },
    slideInTransition: function(e, t) {
        PTT.SlideManager.smallScreen
    },
    slideOutTransition: function(e) {
        if (!PTT.SlideManager.smallScreen) {
            var t = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
            PTT.SlideManager.hideFeaturedProducts(t)
        }
    },
    slideTransitionComplete: function(e) {
        e.is("footer") ? PTT.SlideManager.$footerActive = !0 : (PTT.SlideManager.currentSlide = e.index(".slide"), PTT.SlideManager.$slides.removeClass("active")), PTT.SlideManager.$slides.removeClass("transition-in transition-out up down"), e.addClass("active"), PTT.SlideManager.addMouseAnimation(e), PTT.SlideManager.initiatedByWheel ? TweenMax.delayedCall(.5, PTT.SlideManager.readyForNewAnimation) : PTT.SlideManager.readyForNewAnimation(), PTT.SlideManager.pulsateFeaturedProducts(), $(".slide-navigator li a").trigger("mouseleave"), PTT.SlideManager.snapping = !1, PTT.SlideManager.initiatedByWheel = !1, PTT.SlideManager.initiatedByClick = !1
    },
    readyForNewAnimation: function() {
        PTT.SlideManager.animating = !1
    },
    snap: function() {
        if (PTT.SlideManager.smallScreen) return !1;
        for (var e = PTT.Globals.$window.scrollTop() + PTT.Globals.windowHeight / 2, t = 0; t < PTT.SlideManager.slideCount; t++) {
            var i = PTT.SlideManager.$slides.eq(t);
            if (e > i.position().top && e < i.position().top + i.height()) {
                PTT.SlideManager.animateTo(i.index(".slide"), "snapping");
                break
            }
        }
    },
    resize: function() {
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? (PTT.SlideManager.smallScreen = !1, PTT.SlideManager.scrollTarget = window, $(".slides").css({
            width: PTT.Globals.windowWidth,
            height: PTT.Globals.windowHeight
        }), $(".slides").find(".slide-background").css({
            transform: "",
            "-webkit-transform": ""
        }), PTT.SlideManager.$slides.not("footer").each(function() {
            PTT.SlideManager.resizeSlide($(this))
        }), PTT.SlideManager.stopSlideshow()) : (PTT.SlideManager.smallScreen = !0, PTT.SlideManager.scrollTarget = $(".main-content"), $(".slides").css({
            width: "",
            heigth: ""
        }), PTT.SlideManager.$slides.not("footer").each(function() {
            var e = $(this);
            e.css({
                width: "",
                height: ""
            }), e.find(".slide-inner").css({
                width: "",
                height: ""
            });
            var t = e.find(".text-overlay"),
                i = e.filter(".product").find(".product-image");
            t.length > 0 && t.css({
                "margin-top": "",
                "margin-left": "",
                opacity: "",
                top: ""
            }), i.length > 0 && i.find("img").css({
                "margin-top": "",
                "margin-left": "",
                width: "",
                height: "",
                opacity: 1
            })
        }))
    },
    resizeSlide: function(e) {
        e.css({
            width: PTT.Globals.windowWidth,
            height: PTT.Globals.windowHeight
        }), e.find(".slide-inner").css({
            width: PTT.Globals.windowWidth,
            height: PTT.Globals.windowHeight
        });
        var t = e.find(".text-overlay"),
            i = e.filter(".product").find(".product-image");
        if (t.length > 0) {
            var n = t.height(),
                o = t.width();
            t.css({
                "margin-top": Math.ceil(n * -.5 + .5 * $("header.top").height())
            }), t.hasClass("horizontal-centered") && t.css({
                "margin-left": Math.ceil(o * -.5)
            })
        }
        i.length > 0 && PTT.SlideManager.resizeProductImage(i), PTT.SlideManager.resizeVideoSlide()
    },
    resizeVideoSlide: function() {
        var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide).find(".vp");
        e.length > 0 && e.css({
            marginTop: Math.round(e.height() * -.5)
        })
    },
    resizeProductImage: function(e) {
        if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) || !e.hasClass("loaded") || !e.parents(".slide").hasClass("transition-in") && !e.parents(".slide").hasClass("active")) return !1;
        var t = e.find("img"),
            i = e.width() - .15 * e.width(),
            n = e.height() - .15 * e.height(),
            o, s;
        "undefined" == typeof t.data("owidth") && t.data({
            owidth: t.width(),
            oheight: t.height()
        }), o = t.data("owidth"), s = t.data("oheight");
        var a = Math.min(i / o, n / s);
        o *= a, s *= a, t.css({
            "margin-top": s * -.5 + .5 * $("header.top").height(),
            "margin-left": o * -.5,
            width: o,
            height: s,
            opacity: 1
        })
    },
    updateNavigator: function(e) {
        $(".slide-navigator li a").removeClass("active"), $(".slide-navigator li").eq(e).find("a").addClass("active")
    },
    showFeaturedProducts: function(e) {
        if ("undefined" == typeof e) var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        var t = e.find(".featured-products");
        t.hasClass("active") ? PTT.FeaturedProducts.hide(t) : PTT.FeaturedProducts.show(null, t)
    },
    hideFeaturedProducts: function(e) {
        if ("undefined" == typeof e) var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
        var t = e.find(".featured-products");
        PTT.FeaturedProducts.hide(t)
    },
    pulsateFeaturedProducts: function(e) {
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
            if ("undefined" == typeof e) var e = PTT.SlideManager.$slides.eq(PTT.SlideManager.currentSlide);
            var t = e.find(".featured-products");
            PTT.FeaturedProducts.pulsate(t)
        }
    }
}, PTT.ctrus = {
    init: function() {
        PTT.ctrus.addListeners()
    },
    addListeners: function() {
        $(".button.get-inspired").on("click", function(e) {
            e.preventDefault(), PTT.SlideManager.showFeaturedProducts($(this).parents(".slide"))
        })
    }
}, PTT.FeaturedProducts = {
    isScrolling: !1,
    init: function() {
        $(".featured-products").find(".handle").on("click", PTT.FeaturedProducts.show), Modernizr.touch || ($(".featured-products").on("mousemove", PTT.FeaturedProducts.move), $(".featured-products").on("mousemove", $.debounce(500, PTT.FeaturedProducts.endScrolling)));
        var e = $(".featured-products").first().data("targetwidth"),
            t = $(".featured-products").first().data("targetsmallwidth"),
            i = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? e : t;
        1 > i ? (PTT.FeaturedProducts.closedPosition = PTT.Globals.windowWidth * i, $(".featured-products").css({
            width: PTT.Globals.windowWidth * i
        })) : (PTT.FeaturedProducts.closedPosition = i, $(".featured-products").css({
            width: i
        })), $(".featured-products").css({
            right: -PTT.FeaturedProducts.closedPosition
        }), PTT.Globals.$window.on("resize", PTT.FeaturedProducts.resize), $(".featured-products img").imagesLoaded(function() {
            PTT.FeaturedProducts.resize()
        })
    },
    show: function(e, t) {
        var i;
        if (null !== e && (e.preventDefault(), t = $(this).parent(".featured-products")), t.hasClass("active")) PTT.FeaturedProducts.hide(t);
        else {
            var n = -1;
            $("body").hasClass("ctrus") && (t.find(".articles article").each(function() {
                var e = $(this).find(".button");
                console.log($(this).data("originalheight")), null == $(this).data("originalheight") && $(this).data("originalheight", $(this).height()), n = Math.max(n, $(this).data("originalheight") + e.outerHeight(!0))
            }), t.find(".articles article").height(n)), t.addClass("active"), TweenMax.to(t, .8, {
                right: 0,
                ease: Quad.easeInOut
            })
        }
    },
    pulsate: function(e) {
        e.hasClass("active") || (TweenMax.delayedCall(.2, function() {
            TweenMax.to(e, .5, {
                right: -PTT.FeaturedProducts.closedPosition + 70,
                ease: Linear.easeNone
            })
        }), TweenMax.delayedCall(.7, function() {
            TweenMax.to(e, .5, {
                right: -PTT.FeaturedProducts.closedPosition,
                ease: Quad.easeInOut
            })
        }))
    },
    hide: function(e) {
        e.removeClass("active"), TweenMax.to(e.find(".products-holder"), .2, {
            scrollTop: 0,
            overwrite: 1
        }), TweenMax.to(e, .8, {
            right: -PTT.FeaturedProducts.closedPosition,
            ease: Quad.easeInOut
        })
    },
    move: function(e) {
        if ($(this).hasClass("active")) {
            var t = $(this),
                i = t.find(".products"),
                n = t.find(".products-holder"),
                o = 80,
                s = i.height(),
                a = n.height(),
                r = 0 === $(".slides").length ? PTT.Globals.$window.scrollTop() : 0,
                l = e.pageY - t.offset().top - parseInt(t.css("padding-top"), 10),
                c = a - r - o,
                d = Math.min(l / c, 1),
                u = s - a;
            PTT.SlideManager.stopSlideshow(), PTT.FeaturedProducts.isScrolling = !0, s > a && TweenMax.to(n, .2, {
                scrollTop: d * u,
                overwrite: 1
            })
        }
    },
    endScrolling: function() {
        PTT.FeaturedProducts.isScrolling = !1
    },
    resize: function() {
        var e = $(".featured-products").first().data("targetwidth"),
            t = $(".featured-products").first().data("targetsmallwidth"),
            i = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? e : t;
        1 > i ? (PTT.FeaturedProducts.closedPosition = PTT.Globals.windowWidth * i, $(".featured-products").css({
            width: PTT.Globals.windowWidth * i
        })) : (PTT.FeaturedProducts.closedPosition = i, $(".featured-products").css({
            width: i
        })), $(".featured-products").each(function() {
            $(this).hasClass("active") || $(".featured-products").css({
                right: -PTT.FeaturedProducts.closedPosition
            })
        }), $("body").hasClass("ctrus") && $(".featured-products").find(".articles article").css("height", "auto").data("originalheight", null)
    }
}, PTT.MainNavigation = {
    $header: null,
    $navIndicator: null,
    currentCategoryOpen: "",
    opened: !1,
    init: function() {
        PTT.MainNavigation.$header = $("header.top"), PTT.MainNavigation.$navIndicator = PTT.MainNavigation.$header.find(".nav-indicator-hover"), PTT.MainNavigation.$activeIndicator = PTT.MainNavigation.$header.find(".nav-indicator-active"), $(".main-content").append($('<div class="nav-overlay"></div>')), $(".nav-overlay").on("click", function(e) {
            PTT.MainNavigation.close()
        }), PTT.MainNavigation.addListeners();
        var e = PTT.MainNavigation.$header.find(".account-bag"),
            t = PTT.MainNavigation.$header.find(".topbar");
        if (0 != PTT.MainNavigation.$header.length)
            if ("" != e.data("bag")) {
                var i = e.data("bag");
                $.get(i + "?action=bag&ajax=1&r=" + Math.floor(9999999 * Math.random()), function(t) {
                    e.html(t), PTT.MainNavigation.$header.find(".bag-items").jScrollPane()
                }), $.get(i + "?action=login&ajax=1&r=" + Math.floor(9999999 * Math.random()), function(e) {
                    t.html(e), PTT.MainNavigation.prepareMobileMenu(), PTT.MainNavigation.returnToActive(), PTT.MainNavigation.activeIndicatorMoveTo()
                })
            } else PTT.MainNavigation.prepareMobileMenu()
    },
    prepareMobileMenu: function() {
        var e = PTT.MainNavigation.$header;
        e.find(".level-2").each(function() {
            var e = $(this);
            e.find("> li.page").each(function() {
                var t = $(this).clone().addClass("small-only");
                t.hasClass("home") ? t.prependTo(e.find(".level-3")) : t.appendTo(e.find(".level-3"))
            });
            var t = e.find("> li:not(.page)");
            t.length <= 1 ? e.parent(".category").addClass("small-hide-level-2") : t.width(Math.floor(100 / t.length) + "%")
        }), e.find(".level-1 > li.page, .level-1 > .topbar > li.page").clone().addClass("small-only").appendTo(e.find(".level-3"));
        var t = $("<li></li>");
        t.append(e.find(".search-field").clone()), t.addClass("small-only").prependTo(e.find(".level-3"))
    },
    addListeners: function() {
        var e = PTT.MainNavigation.$header.find(".account-bag"),
            t = PTT.MainNavigation.$header.find(".login-dropdown"),
            i = PTT.MainNavigation.$header.find(".loggedin-dropdown");
        PTT.MainNavigation.$header.on("click", ".level-1 .category > a", function(e) {
            e.preventDefault(), $(this).hasClass("open") ? PTT.MainNavigation.close() : PTT.MainNavigation.open($(this))
        }), PTT.MainNavigation.$header.on("click", ".menu-close-button", function(e) {
            e.preventDefault(), PTT.MainNavigation.close()
        }), PTT.MainNavigation.$header.on("click", "#nav-bag", function(n) {
            PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && n.preventDefault(), PTT.MainNavigation.showDropdown(e), PTT.MainNavigation.hideDropdown(i), PTT.MainNavigation.hideDropdown(t)
        }), PTT.MainNavigation.$header.on("click", "#nav-login:not(.direct,.logged-in)", function(n) {
            n.preventDefault(), PTT.MainNavigation.showDropdown(t), PTT.MainNavigation.hideDropdown(i), PTT.MainNavigation.hideDropdown(e)
        }), PTT.MainNavigation.$header.on("click", "#nav-login.logged-in", function(n) {
            n.preventDefault(), PTT.MainNavigation.showDropdown(i), PTT.MainNavigation.hideDropdown(t), PTT.MainNavigation.hideDropdown(e)
        }), $(".main-content").on("click", function() {
            PTT.MainNavigation.hideDropdown(t), PTT.MainNavigation.hideDropdown(i), PTT.MainNavigation.hideDropdown(e)
        }), PTT.MainNavigation.$header.on("click", "#nav-search", function(e) {
            e.preventDefault();
            var t = PTT.MainNavigation.$header.find("> .search-field"),
                i = t.find("input[type=text]");
            t.addClass("active");
            var n = $(this).position().left + $(this).outerWidth() - 200 - parseInt($(this).css("padding-right"), 10);
            t.css({
                left: n
            }), $("html").hasClass("lt-ie9") || TweenMax.from(i, .2, {
                delay: .5,
                "background-position": "130% 6px",
                onComplete: function() {
                    i.css({
                        width: "",
                        opacity: "",
                        "background-position": ""
                    }), i.focus()
                }
            }), TweenMax.from(i, .5, {
                width: 0,
                opacity: 0,
                ease: Quad.easeOut
            })
        }), PTT.MainNavigation.$header.find("a").each(function() {
            "" != $(this).attr("href") && "#" != $(this).attr("href") && 0 == $(this).parents(".icons").length && $(this).addClass("transition from-top")
        }), PTT.MainNavigation.$header.find("> .search-field").find("input[type=text]").on("blur", function() {
            var e = PTT.MainNavigation.$header.find("> .search-field"),
                t = e.find("input[type=text]");
            "" == $(this).val() && ($("html").hasClass("lt-ie9") || TweenMax.to(t, .2, {
                "background-position": "130% 6px"
            }), TweenMax.to(t, .5, {
                delay: .2,
                width: 0,
                opacity: 0,
                ease: Quad.easeOut,
                onComplete: function() {
                    e.removeClass("active"), t.css({
                        width: "",
                        opacity: ""
                    }), $("html").hasClass("lt-ie9") || t.css({
                        "background-position": ""
                    })
                }
            }))
        }).on("keyup", function() {
            "" != $(this).val() ? $(this).addClass("filled") : $(this).removeClass("filled")
        });
        var n = PTT.MainNavigation.$header.find(".login-dropdown");
        n.find("#login-username").on("keyup", function() {
            "" != $(this).val() ? ($("#login-login-button").removeClass("light"), $("#login-new-customer-button").addClass("light")) : ($("#login-login-button").addClass("light"), $("#login-new-customer-button").removeClass("light"))
        }), PTT.MainNavigation.$header.find(".level-1").on("mousemove", "> li > a", PTT.MainNavigation.hoverIndicatorMoveTo), PTT.MainNavigation.$header.find(".level-1").on("mousemove", ".icons li > a", PTT.MainNavigation.hoverIndicatorMoveTo), PTT.MainNavigation.$header.find(".level-1").on("mouseleave", PTT.MainNavigation.returnToActive), PTT.MainNavigation.$header.find(".level-2").on("mouseenter", PTT.MainNavigation.returnToActive), PTT.MainNavigation.$header.find(".level-2").on("click", "> li:not(.page) > a", PTT.MainNavigation.switchLevel3), PTT.MainNavigation.$header.find(".level-3").on("click", "> li:not(.shoplink,.page) > a", PTT.MainNavigation.toLevel4), PTT.MainNavigation.$header.find(".level-4").on("click", ".back", PTT.MainNavigation.toLevel3), PTT.MainNavigation.returnToActive(), PTT.MainNavigation.activeIndicatorMoveTo(), PTT.Globals.$window.on("resize", $.debounce(100, PTT.MainNavigation.resize))
    },
    showDropdown: function(e) {
        if (e.hasClass("animating")) return !0;
        if (e.hasClass("active")) return PTT.MainNavigation.hideDropdown(e), !0;
        (e.is(".login-dropdown") || e.is(".loggedin-dropdown")) && 0 == e.find(".padded").length && e.wrapInner($('<div class="padded"></div>')), e.addClass("active animating");
        var t = 0;
        e.find(".custom-scroll").length > 0 && (t = e.find(".custom-scroll").height(), e.is(".account-bag") && $(".bag-items").find("li").length > 1 && (t = 300), e.find(".custom-scroll").height(t).data("jsp").reinitialise());
        var i = e.outerHeight(!0);
        e.css({
            height: 0,
            overflow: "hidden"
        }), TweenMax.to(e, .5, {
            height: i,
            ease: Quad.easeOut,
            onComplete: function() {
                e.css({
                    height: "",
                    overflow: ""
                }).removeClass("animating")
            }
        })
    },
    hideDropdown: function(e) {
        return !e.hasClass("active") || e.hasClass("animating") ? !0 : (e.css({
            overflow: "hidden"
        }).addClass("animating"), void TweenMax.to(e, .5, {
            height: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                e.css({
                    height: "",
                    overflow: ""
                }), e.removeClass("active animating")
            }
        }))
    },
    hoverIndicatorMoveTo: function(e, t) {
        e && (t = $(this), TweenMax.killDelayedCallsTo(PTT.MainNavigation.activeIndicatorMoveTo), TweenMax.killDelayedCallsTo(PTT.MainNavigation.hoverIndicatorMoveTo)), null !== t && t.length > 0 && TweenMax.to(PTT.MainNavigation.$navIndicator, .4, {
            left: Math.ceil(t.offset().left),
            width: Math.ceil(t.outerWidth() + 2),
            backgroundColor: t.css("border-top-color")
        })
    },
    activeIndicatorMoveTo: function(e) {
        (null == e || 0 == e.length) && (e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.active"), e.length > 1 && (e = PTT.MainNavigation.$header.find(".level-1").find("> li.page > a.active").first())), e.length > 0 && TweenMax.to(PTT.MainNavigation.$activeIndicator, .4, {
            delay: .5,
            left: Math.ceil(e.position().left),
            width: Math.ceil(e.outerWidth() + 2),
            backgroundColor: e.css("border-top-color")
        })
    },
    returnToActive: function() {
        var e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.open");
        0 == e.length && (e = PTT.MainNavigation.$header.find(".level-1").find("> li > a.active"), e.length > 1 && (e = PTT.MainNavigation.$header.find(".level-1").find("> li.page > a.active").first())), TweenMax.killDelayedCallsTo(PTT.MainNavigation.hoverIndicatorMoveTo), TweenMax.delayedCall(.5, PTT.MainNavigation.hoverIndicatorMoveTo, [null, e])
    },
    open: function(e) {
        if (PTT.MainNavigation.opened && PTT.MainNavigation.close(), PTT.MainNavigation.opened = !0, e.hasClass("animation")) return !0;
        e.addClass("open animation");
        var t = e.parent().find(".level-2"),
            i = e.parent().find(".level-2 > li > a.active").next(".level-3");
        0 == i.length && (i = e.parent().find(".level-3").first());
        var n = e.parent().find(".level-4");
        t.addClass("active"), i.addClass("pre-active"), TweenMax.killTweensOf($(".nav-overlay")), $(".nav-overlay").is(":visible") || $(".nav-overlay").css({
            opacity: 0
        }).show(), TweenMax.to($(".nav-overlay"), 1, {
            delay: .2,
            opacity: 1,
            ease: Quad.easeOut
        }), i.find(".collection-teaser").length > 0 && parseInt(i.css("padding-left"), 10) != i.find(".collection-teaser").position().left && i.find(".collection-teaser").is(":visible") ? t.find(".menu-close-button").css({
            position: "absolute",
            left: i.find(".collection-teaser").position().left + i.find(".collection-teaser").width() - 40,
            paddingLeft: 0,
            paddingRight: 0
        }) : t.find(".menu-close-button").css({
            position: "relative",
            left: "",
            paddingLeft: "",
            paddingRight: ""
        });
        var o = Math.max(i.outerHeight(!0), n.outerHeight(!0));
        i.css({
            height: o
        }), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? e.parent().hasClass("small-hide-level-2") || (o += t.height()) : o += t.height(), t.wrap($('<div class="animation-holder" style="position: absolute; overflow: hidden; width: 100%; top: ' + e.outerHeight(!0) + 'px; left: 0; height: 65px;"></div>'));
        var s = e.parent().find(".animation-holder");
        t.css({
            top: -t.outerHeight(!0)
        }), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && e.parent().hasClass("small-hide-level-2") && t.css({
            visibility: "hidden"
        }), TweenMax.to(t, .5, {
            top: 0,
            ease: Quad.easeOut
        }), TweenMax.to(s, .7, {
            delay: .3,
            onStart: function() {
                i.addClass("active").removeClass("pre-active")
            },
            height: o,
            ease: Quad.easeOut,
            onComplete: function() {
                t.css({
                    top: "",
                    visibility: ""
                }), t.unwrap(), e.removeClass("animation"), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && ($(".small-close").show(), $(".nav-bag").hide())
            }
        }), TweenMax.to($(".main-content"), .7, {
            delay: .3,
            top: o,
            ease: Quad.easeOut
        }), TweenMax.to($(".slide-navigator"), .7, {
            delay: .3,
            marginTop: o - 85,
            ease: Quad.easeOut
        })
    },
    close: function() {
        PTT.MainNavigation.opened = !1;
        var e = PTT.MainNavigation.$header,
            t = e.find(".level-1 a.open");
        if (t.hasClass("animation")) return !0;
        t.addClass("animation");
        var i = t.parent().find(".level-2"),
            n = t.parent().find(".level-3"),
            o = t.parent().find(".level-4"),
            s = i.outerHeight(!0) + n.outerHeight(!0);
        i.wrap($('<div class="animation-holder" style="position: absolute; overflow: hidden; width: 100%; top: ' + t.outerHeight(!0) + "px; left: 0; height: " + s + 'px;"></div>'));
        var a = t.parent().find(".animation-holder");
        i.css({
            top: 0
        }), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && t.parent().hasClass("small-hide-level-2") && i.css({
            visibility: "hidden"
        });
        var r = null;
        i.find("> li > a.active").length > 0 && (r = i.find("> li > a.active")), null != r && TweenMax.to(r, .3, {
            "background-position": "50% 150%"
        }), TweenMax.to(a, .7, {
            height: i.outerHeight(!0),
            ease: Quad.easeOut
        }), TweenMax.to(i, .5, {
            onStart: function() {
                n.removeClass("active")
            },
            delay: .5,
            top: -63,
            ease: Quad.easeOut,
            onComplete: function() {
                i.css({
                    top: "",
                    visibility: ""
                }), i.unwrap(), i.removeClass("active"), t.removeClass("animation"), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && ($(".small-close").hide(), $(".nav-bag").show())
            }
        }), TweenMax.to($(".nav-overlay"), 1, {
            delay: .2,
            opacity: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(".nav-overlay").hide()
            }
        }), TweenMax.to($(".main-content"), .7, {
            top: 0,
            ease: Quad.easeOut
        }), TweenMax.to($(".slide-navigator"), .7, {
            marginTop: -85,
            ease: Quad.easeOut
        }), t.removeClass("open")
    },
    switchLevel3: function(e) {
        e.preventDefault(), $(this).parents(".level-2").find(".level-3").hide(), $(this).next(".level-3").show().addClass("active"), $(this).parents(".level-2").find(">li > a").removeClass("active"), $(this).addClass("active")
    },
    toLevel3: function(e) {
        e.preventDefault();
        var t = $(this).parents(".level-3");
        t.css({
            left: 0
        })
    },
    toLevel4: function(e) {
        if (e.preventDefault(), PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
            $(this).parents(".level-3").find(".level-4").hide(), $(this).next(".level-4").show();
            var t = $(this).parents(".level-3");
            t.css({
                left: "-100%"
            })
        }
    },
    resize: function() {
        PTT.MainNavigation.activeIndicatorMoveTo(), PTT.MainNavigation.returnToActive(), !Modernizr.touch && PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && PTT.MainNavigation.close()
    }
}, PTT.VideoPlayer = {
    isNative: !1,
    mediaElement: null,
    mediaElementPlayer: null,
    init: function() {
        if (0 != $("body.tv.video").length) {
            var e = new MediaElementPlayer("video", {
                features: ["playpause", "volume", "progress", "share", "fs"],
                fs: !0,
                success: function(t, i) {
                    PTT.VideoPlayer.mediaElement = t, PTT.VideoPlayer.mediaElementPlayer = e, PTT.VideoPlayer.isNative = "undefined" != typeof e && "native" == e.media.pluginType, t.addEventListener("canplay", function() {
                        t.play(), PTT.VideoPlayer.resize()
                    }, !1)
                }
            });
            PTT.VideoPlayer.addListeners(), PTT.VideoPlayer.resize(), TweenMax.delayedCall(2, function() {
                PTT.FeaturedProducts.show(null, $(".featured-products"))
            }), TweenMax.delayedCall(3, function() {
                PTT.FeaturedProducts.hide($(".featured-products"))
            })
        }
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", $.debounce(250, PTT.VideoPlayer.resize))
    },
    resize: function() {
        var e = PTT.Globals.windowHeight - $("header.top").outerHeight(),
            t = PTT.Globals.windowWidth;
        $(".video-holder").css({
            width: t,
            height: e
        }), "undefined" != typeof PTT.VideoPlayer.mediaElementPlayer && null !== PTT.VideoPlayer.mediaElementPlayer && (PTT.VideoPlayer.mediaElementPlayer.setPlayerSize(t, e), PTT.VideoPlayer.mediaElementPlayer.setControlsSize(), PTT.VideoPlayer.isNative || PTT.VideoPlayer.mediaElement.setVideoSize(t, e))
    }
}, PTT.TeamOverview = {
    $header: null,
    currentChapter: null,
    $currentChapter: null,
    init: function() {
        0 != $(".team.overview").length && ($(".team.overview .articles img").imagesLoaded(function() {
            $(".team.overview .articles").masonry({
                transitionDuration: 0,
                itemSelector: "article",
                isOriginLeft: !1,
                isResizeBound: !1
            }), PTT.TeamOverview.scroll(), $(".team.overview .articles").addClass("active")
        }), PTT.TeamOverview.$header = $("header.sections"), PTT.TeamOverview.$header.data({
            defaultbackground: PTT.TeamOverview.$header.css("background-color")
        }), PTT.TeamOverview.addListeners())
    },
    addListeners: function() {
        PTT.TeamOverview.$header.find(".filters a").on("click", function(e) {
            if (e.preventDefault(), !$(this).hasClass("active")) {
                var t = $(this).attr("class").replace(" track-event", "");
                PTT.TeamOverview.scrollTo(t)
            }
        }), $(".select-box").selectBox({
            callback: function(e, t) {
                PTT.TeamOverview.scrollTo(t.type)
            }
        }), $(window).on("resize", PTT.TeamOverview.resize), PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? $(window).on("scroll", $.throttle(50, PTT.TeamOverview.scroll)) : $(".main-content").on("scroll", PTT.TeamOverview.scroll)
    },
    scrollTo: function(e) {
        var t = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window : $(".main-content"),
            i = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            n = null;
        $("section").each(function() {
            $(this).data("type") == e && (n = $(this))
        });
        var o = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? n.position().top : n.offset().top + i;
        TweenMax.to(t, 1, {
            scrollTo: o - 10,
            autoKill: !1
        })
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? $(".team.overview .articles ").masonry("destroy") : $(".team.overview .articles ").masonry()
    },
    scroll: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            t = PTT.TeamOverview.$header.position().top + PTT.TeamOverview.$header.outerHeight(!0),
            i = $("section"),
            n = .5 * PTT.Globals.windowHeight,
            o = .5 * PTT.Globals.windowWidth;
        PTT.TeamOverview.$header.css({
            "padding-top": Math.max(Math.min(55 - e, 55), 23),
            "padding-bottom": Math.max(Math.min(80 - e, 80), 10)
        });
        var s = !1;
        e > 70 && i.each(function() {
            var i = $(this),
                n = i.position().top - e,
                o = i.position().top + i.outerHeight(!0) - e;
            t >= n && o > t && (s = !0, PTT.TeamOverview.currentChapter != i.data("type") && (PTT.TeamOverview.$header.find(".filters a").removeClass("active"), PTT.TeamOverview.$header.find(".filters a." + i.data("type")).addClass("active"), PTT.TeamOverview.currentChapter = i.data("type"), PTT.TeamOverview.$currentChapter = i))
        }), PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch ? ($("article").each(function(t) {
            var i = $(this),
                s = i.find(">a");
            i.offset().left >= o - 10 ? TweenMax.to(s, .3, {
                left: Math.max(0, i.offset().top - (n + e)),
                onUpdate: function() {
                    s.css({
                        top: .5 * Math.max(0, Math.abs(parseInt(s.css("left"), 10)))
                    })
                },
                overwrite: 1,
                autoKill: !1,
                ease: Quad.easeOut
            }) : TweenMax.to(s, .3, {
                left: Math.min(0, -1 * (i.offset().top - (n + e))),
                onUpdate: function() {
                    s.css({
                        top: .5 * Math.max(0, Math.abs(parseInt(s.css("left"), 10)))
                    })
                },
                overwrite: 1,
                autoKill: !1,
                ease: Quad.easeOut
            })
        }), s || (PTT.TeamOverview.$currentChapter = null, PTT.TeamOverview.currentChapter = null)) : $("article").find(">a").css({
            top: "",
            left: ""
        })
    }
}, PTT.TeamRider = {
    $photos: null,
    photoCount: 0,
    init: function() {
        0 != $("body.team.rider").length && (PTT.TeamRider.$photos = $(".photos .photo"), PTT.TeamRider.photoCount = PTT.TeamRider.$photos.length, PTT.TeamRider.addListeners(), PTT.TeamRider.transitionIn())
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", PTT.TeamRider.resize);
        var e = 0;
        PTT.TeamRider.$photos.each(function() {
            var t = $(this),
                i = $(this).find("img");
            $(this).imagesLoaded(function() {
                t.addClass("loaded"), t.data({
                    owidth: i.width(),
                    oheight: i.height()
                }), i.css({
                    width: "100%",
                    height: "100%"
                }), e++, e == PTT.TeamRider.photoCount && PTT.TeamRider.start()
            })
        }), $(".photo-arrows").on("click", "a", function(e) {
            e.preventDefault();
            var t = $(this);
            "photo-prev" == t.attr("id") ? PTT.TeamRider.previous() : PTT.TeamRider.next()
        }), PTT.Globals.$window.on("scroll", PTT.TeamRider.scroll)
    },
    start: function() {
        PTT.TeamRider.resize(), PTT.TeamRider.next()
    },
    next: function() {
        var e = PTT.TeamRider.$photos.filter(".active").next();
        0 == e.length && (e = PTT.TeamRider.$photos.first()), PTT.TeamRider.animate(e)
    },
    previous: function() {
        var e = PTT.TeamRider.$photos.filter(".active").prev();
        0 == e.length && (e = PTT.TeamRider.$photos.last()), PTT.TeamRider.animate(e)
    },
    animate: function(e) {
        PTT.TeamRider.$photos.filter(".active").removeClass("active"), e.addClass("active"), PTT.TeamRider.repositionControls(), PTT.TeamRider.updateCounter()
    },
    transitionIn: function() {
        $(".rider-name").append($('<div class="transition-overlay" />'));
        var e = $(".rider-name").find(".transition-overlay");
        e.css({
            height: $(".rider-name").parent().height(),
            bottom: -($(".rider-name").parent().height() - $(".rider-name").height())
        }), TweenMax.to($(".rider-name").find(".transition-overlay"), .6, {
            delay: .4,
            height: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(".rider-name").find(".transition-overlay").remove()
            }
        }), TweenMax.allFrom([$(".rider-info dl"), $(".rider-info .socials")], .5, {
            delay: 1,
            opacity: 0,
            ease: Quad.easeOut
        })
    },
    resize: function() {
        var e = Math.ceil(.8 * PTT.Globals.windowHeight),
            t = Math.ceil(.75 * PTT.Globals.windowWidth);
        $(".photos").height(e), PTT.TeamRider.$photos.filter(".loaded").each(function() {
            var i = $(this),
                n = i.data("owidth"),
                o = i.data("oheight"),
                s = t / n,
                a = .85 * e / o,
                r = Math.min(s, a),
                l = n * r,
                c = o * r;
            i.css({
                width: Math.round(l),
                height: Math.round(c),
                marginLeft: -Math.round(.5 * l),
                marginTop: -Math.round(.5 * c),
                top: "50%",
                left: "50%"
            })
        }), PTT.TeamRider.repositionControls()
    },
    scroll: function() {
        var e = PTT.Globals.$window.scrollTop(),
            t = .5 * PTT.Globals.windowHeight,
            i = .5 * PTT.Globals.windowWidth;
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch ? $(".favourites article").each(function(n) {
            var o = $(this),
                s = o.find(">div");
            o.offset().left >= i ? TweenMax.to(s, .3, {
                left: Math.max(0, o.offset().top - (t + e) + .35 * (o.offset().left - i)),
                onUpdate: function() {
                    s.css({
                        top: .5 * Math.max(0, Math.abs(parseInt(s.css("left"), 10)))
                    })
                },
                overwrite: 1,
                ease: Quad.easeOut
            }) : TweenMax.to(s, .3, {
                left: Math.min(0, -1 * (o.offset().top - (t + e) - .35 * o.offset().left)),
                onUpdate: function() {
                    s.css({
                        top: .5 * Math.max(0, Math.abs(parseInt(s.css("left"), 10)))
                    })
                },
                overwrite: 1,
                ease: Quad.easeOut
            })
        }) : $(".favourites article > div").css({
            top: "",
            left: ""
        })
    },
    updateCounter: function() {
        $(".photo-counter").find(".counter-count").text(PTT.TeamRider.$photos.filter(".active").index() + 1), $(".photo-counter").find(".counter-total").text(PTT.TeamRider.photoCount)
    },
    repositionControls: function() {
        var e = PTT.TeamRider.$photos.filter(".active");
        if (e.length > 0) {
            var t = e.width(),
                i = e.height();
            $(".photo-counter").css({
                bottom: .5 * ($(".photos").height() - i) - 30
            }), TweenMax.to($(".photo-arrows").find("#photo-prev"), .5, {
                left: e.position().left - .5 * t,
                overwrite: 1,
                ease: Quint.easeOut
            }), TweenMax.to($(".photo-arrows").find("#photo-next"), .5, {
                right: e.position().left - .5 * t,
                overwrite: 1,
                ease: Quint.easeOut
            })
        }
    }
}, PTT.About = {
    init: function() {
        0 != $(".about").length && (PTT.About.addListeners(), PTT.About.scroll(), TweenMax.delayedCall(1, function() {
            TweenMax.to(window, 2, {
                scrollTo: 550
            })
        }))
    },
    addListeners: function() {
        $(window).on("scroll", PTT.About.scroll), $(window).on("resize", PTT.About.resize)
    },
    scroll: function() {
        if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
            var e = PTT.Globals.$window.scrollTop(),
                t = .5 * PTT.Globals.windowHeight;
            $(".column").each(function(t) {
                var i = $(this),
                    n = i.find("img");
                i.css({
                    "margin-top": $(".columns").offset().top - (.35 * PTT.Globals.windowHeight + e * i.data("speed"))
                }), n.css({
                    top: parseInt(i.css("margin-top"), 10) * n.data("speed")
                })
            });
            var i = $(".our-mission"),
                n = $(".we-are");
            TweenMax.to(n, .4, {
                marginTop: Math.min(320, Math.max(0, e)),
                ease: Quad.easeOut
            }), TweenMax.to(i, .4, {
                marginTop: 160 + Math.min(160, Math.max(0, e - 160)),
                ease: Quad.easeOut
            })
        }
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? ($(".column").css({
            "margin-top": ""
        }), $(".column img").css({
            "margin-top": ""
        }), $(".about-brand img").css({
            top: ""
        })) : PTT.About.scroll()
    }
}, PTT.TvOverview = {
    $header: null,
    articleCount: 0,
    $articles: null,
    init: function() {
        if (0 != $(".tv.overview").length) {
            PTT.TvOverview.$header = $("header.sections"), PTT.TvOverview.$articles = $("article"), PTT.TvOverview.articleCount = PTT.TvOverview.$articles.length;
            var e = {};
            $("body").hasClass("facebook-ctrus-tv") && (e.defaultYoutubePlayer = !0), $(".video-player").youtubePlayerWithPoster(e), PTT.TvOverview.addListeners()
        }
    },
    addListeners: function() {
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? $(window).on("scroll", PTT.TvOverview.scroll) : $(".main-content").on("scroll", PTT.TvOverview.scroll), $(window).on("resize", PTT.TvOverview.resize), PTT.TvOverview.scroll(), $("header .filters").find("a").on("click", function(e) {
            e.preventDefault(), $(this).hasClass("active") || ($("header .filters").find("a").removeClass("active"), $(this).addClass("active"), PTT.TvOverview.filter($(this).data("tvtype")))
        }), $(".select-box").selectBox({
            callback: function(e, t) {
                PTT.TvOverview.filter(t.tvtype)
            }
        })
    },
    filter: function(e) {
        TweenMax.to($("article"), .5, {
            opacity: 0,
            onComplete: function() {
                $("article").hide(), "" == e || "all" == e ? ($("article").show(), TweenMax.to($("article"), .5, {
                    opacity: 1
                })) : $("article").each(function(t) {
                    var i = $(this);
                    i.data("tvtype") == e ? (i.show(), TweenMax.to(i, .5, {
                        opacity: 1
                    })) : TweenMax.to(i, .5, {
                        opacity: 0,
                        onComplete: function() {
                            i.hide()
                        }
                    })
                })
            }
        });
        var t = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? window : $(".main-content");
        TweenMax.to(t, 1, {
            scrollTo: 1,
            ease: Quad.easeOut
        }), TweenMax.delayedCall(.5, PTT.TvOverview.scroll)
    },
    scroll: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(),
            t = .5 * PTT.Globals.windowHeight,
            i = .5 * PTT.Globals.windowWidth;
        PTT.TvOverview.$header.css({
            "padding-top": Math.max(Math.min(55 - e, 55), 23),
            "padding-bottom": Math.max(Math.min(80 - e, 80), 10)
        });
        for (var n = 0; n < PTT.TvOverview.articleCount; n++) {
            var o = $(PTT.TvOverview.$articles[n]);
            if (!(o.offset().top - (e - 100) < 0)) {
                if (o.offset().top - (e + 100) > PTT.Globals.windowHeight) break;
                var s = o.find("img");
                if ("" != o.find("img").data("loadsrc") && (s.attr("src", s.data("loadsrc")), s.data("loadsrc", "")), PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
                    var a = o.find(".video-player"),
                        r = o.find(".info");
                    if (o.hasClass("odd")) {
                        var l = o.offset().top - (t + e),
                            c = -1 * (o.offset().top - (t + e));
                        TweenMax.to(a, .3, {
                            left: Math.max(0, l),
                            top: Math.max(0, .5 * l),
                            overwrite: 1,
                            ease: Quad.easeOut
                        }), TweenMax.to(r, .3, {
                            left: Math.min(0, c),
                            top: Math.max(0, .5 * l),
                            overwrite: 1,
                            ease: Quad.easeOut
                        })
                    } else {
                        var l = -1 * (o.offset().top - (t + e)),
                            c = o.offset().top - (t + e);
                        TweenMax.to(a, .3, {
                            left: Math.min(0, l),
                            top: Math.max(0, .5 * c),
                            overwrite: 1,
                            ease: Quad.easeOut
                        }), TweenMax.to(r, .3, {
                            left: Math.max(0, c),
                            top: Math.max(0, .5 * c),
                            overwrite: 1,
                            ease: Quad.easeOut
                        })
                    }
                }
            }
        }
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? ($(".video-player").css({
            left: "",
            top: ""
        }), $(".info").css({
            opacity: ""
        }), $(".info > p").css({
            "margin-top": ""
        })) : PTT.TvOverview.scroll()
    }
}, PTT.PinIt = {
    $header: null,
    articleCount: 0,
    $articles: null,
    init: function() {
        0 != $(".video-promo").length && (PTT.PinIt.$header = $("header.pinit"), PTT.PinIt.$articles = $("article"), PTT.PinIt.articleCount = PTT.PinIt.$articles.length, PTT.PinIt.addListeners())
    },
    addListeners: function() {
        PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? $(window).on("scroll", PTT.PinIt.scroll) : $(".main-content").on("scroll", PTT.PinIt.scroll), $(window).on("resize", PTT.PinIt.resize), PTT.PinIt.scroll(), $(".button-holder a").on("click", PTT.PinIt.handlePlayClick)
    },
    handlePlayClick: function(e) {
        e.preventDefault(), $scrollElement = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window : $(".main-content"), TweenMax.to($scrollElement, 1, {
            scrollTo: $($(this).attr("href")).offset().top - .3 * PTT.Globals.windowHeight
        });
        var t = $(this).attr("href").replace("video", "vimeo");
        $(t)[0].contentWindow.postMessage(JSON.stringify({
            method: "play"
        }), $(t).attr("src").split("?")[0])
    },
    scroll: function() {
        for (var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? PTT.Globals.$window.scrollTop() : $(".main-content").scrollTop(), t = .5 * PTT.Globals.windowHeight, i = .5 * PTT.Globals.windowWidth, n = 0; n < PTT.PinIt.articleCount; n++) {
            var o = $(PTT.PinIt.$articles[n]);
            if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && !Modernizr.touch) {
                var s = o.find(".video-player"),
                    a = o.find(".info");
                if (o.hasClass("odd")) {
                    var r = o.offset().top - (t + e),
                        l = -1 * (o.offset().top - (t + e));
                    TweenMax.to(s, .3, {
                        left: Math.max(0, r),
                        top: Math.max(0, .5 * r),
                        overwrite: 1,
                        ease: Quad.easeOut
                    }), TweenMax.to(a, .3, {
                        left: Math.min(0, l),
                        top: Math.max(0, .5 * r),
                        overwrite: 1,
                        ease: Quad.easeOut
                    })
                } else {
                    var r = -1 * (o.offset().top - (t + e)),
                        l = o.offset().top - (t + e);
                    TweenMax.to(s, .3, {
                        left: Math.min(0, r),
                        top: Math.max(0, .5 * l),
                        overwrite: 1,
                        ease: Quad.easeOut
                    }), TweenMax.to(a, .3, {
                        left: Math.max(0, l),
                        top: Math.max(0, .5 * l),
                        overwrite: 1,
                        ease: Quad.easeOut
                    })
                }
            }
        }
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? ($(".video-player").css({
            left: "",
            top: ""
        }), $(".info").css({
            opacity: ""
        }), $(".info > p").css({
            "margin-top": ""
        })) : PTT.PinIt.scroll()
    }
}, PTT.Contact = {
    map: null,
    init: function() {
        $("body").hasClass("contact") && (PTT.Contact.initMap(), PTT.Contact.addListeners())
    },
    addListeners: function() {
        $(".contact-form").on("submit", function(e) {
            e.preventDefault();
            var t = $(this).find("input[name=contact_name]").val(),
                i = $(this).find("input[name=contact_company]").val(),
                n = $(this).find("input[name=contact_email]").val(),
                o = $(this).find("input[name=contact_phone]").val(),
                s = $(this).find("textarea[name=contact_message]").val();
            "" != t && "" != n && "" != o && "" != s ? ($(".error-validate").hide(), $.post($(this).attr("action"), {
                contact_name: t,
                contact_company: i,
                contact_email: n,
                contact_phone: o,
                contact_message: s
            }, function(e) {
                $(".form-fields").hide(), $(".error-success").fadeIn("fast")
            })) : ($(".error-validate").fadeIn("fast"), $(".error-success").fadeOut("fast"))
        })
    },
    initMap: function() {
        var e = {
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1
        };
        PTT.Contact.map = new google.maps.Map(document.getElementById("address-map"), e), PTT.Contact.addMarkers()
    },
    addMarkers: function() {
        var e = new google.maps.LatLng(52.1886449, 4.5011289);
        PTT.Contact.map.setCenter(e);
        var t = new google.maps.Marker({
            position: e,
            map: PTT.Contact.map,
            icon: {
                url: TEMPLATE_URL + "/img/storefinder-icon.png",
                size: new google.maps.Size(28, 33),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(14, 33),
                scaledSize: new google.maps.Size(28, 33)
            }
        })
    }
}, PTT.StoreLocator = {
    map: null,
    markers: [],
    $form: null,
    currentLocation: {
        lat: 0,
        lng: 0
    },
    geolocation: !1,
    init: function() {
        $("body").hasClass("storefinder") && (PTT.StoreLocator.$form = $("#storelocator-find"), PTT.StoreLocator.initMap(), PTT.StoreLocator.addListeners(), "" != $("#search-query").val() ? PTT.StoreLocator.addMarkers() : $(".map").addClass("no-results"), navigator.geolocation && navigator.geolocation.getCurrentPosition(function(e) {
            PTT.StoreLocator.currentLocation = {
                lat: e.coords.latitude,
                lng: e.coords.longitude
            }, PTT.StoreLocator.geolocation = !0, "" == $("#search-query").val() && PTT.StoreLocator.map.panTo(new google.maps.LatLng(PTT.StoreLocator.currentLocation.lat, PTT.StoreLocator.currentLocation.lng)), PTT.StoreLocator.searchByLatLon()
        }))
    },
    addListeners: function() {
        $(".addresses").on("click", "li", PTT.StoreLocator.navigateToMarker), PTT.StoreLocator.$form.on("submit", PTT.StoreLocator.searchQuery)
    },
    initMap: function() {
        var e = {
            center: new google.maps.LatLng(52.1886449, 4.5011289),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: !1
        };
        PTT.StoreLocator.map = new google.maps.Map(document.getElementById("address-map"), e)
    },
    searchQuery: function(e) {
        e.preventDefault();
        var t = PTT.StoreLocator.$form.attr("action");
        PTT.StoreLocator.clearMarkers(), $("#storelocator-loader").show(), $.post(t, {
            query: $("#search-query").val(),
            ajax: "ajax"
        }, function(e) {
            var t = $(".addresses ul", "<html><body>" + e + "</body></html>");
            $(".addresses ul").html($(".addresses ul", "<html><body>" + e + "</body></html>").html()), $(".map").hasClass("no-results") ? ($(".map").css({
                width: "70%"
            }).removeClass("no-results"), TweenMax.to($(".map"), .5, {
                width: "30%",
                ease: Quad.easeOut,
                onComplete: function() {
                    $(".map").css({
                        width: ""
                    }), google.maps.event.trigger(PTT.StoreLocator.map, "resize"), 1 == t.data("matches") && PTT.StoreLocator.addMarkers()
                }
            })) : 1 == t.data("matches") && PTT.StoreLocator.addMarkers(), $("#storelocator-loader").hide()
        })
    },
    searchByLatLon: function() {
        var e = PTT.StoreLocator.$form.attr("action");
        PTT.StoreLocator.clearMarkers(), $("#storelocator-loader").show(), $.post(e, {
            latlon: PTT.StoreLocator.currentLocation.lat + "," + PTT.StoreLocator.currentLocation.lng,
            ajax: "ajax"
        }, function(e) {
            var t = $(".addresses ul", "<html><body>" + e + "</body></html>");
            $(".addresses ul").html($(".addresses ul", "<html><body>" + e + "</body></html>").html()), $(".map").hasClass("no-results") ? ($(".map").css({
                width: "70%"
            }).removeClass("no-results"), TweenMax.to($(".map"), .5, {
                width: "30%",
                ease: Quad.easeOut,
                onComplete: function() {
                    $(".map").css({
                        width: ""
                    }), google.maps.event.trigger(PTT.StoreLocator.map, "resize"), 1 == t.data("matches") && PTT.StoreLocator.addMarkers()
                }
            })) : 1 == t.data("matches") && PTT.StoreLocator.addMarkers(), $("#storelocator-loader").hide()
        })
    },
    addMarkers: function() {
        var e = new google.maps.LatLngBounds;
        PTT.StoreLocator.markers = [], $(".addresses > ul > li").each(function() {
            var t = $(this).data("ll");
            t = t.split(", ");
            var i = $(this).find(".google-maps-link"),
                n = i.attr("href");
            PTT.StoreLocator.geolocation ? i.attr("href", n + PTT.StoreLocator.currentLocation.lat + "," + PTT.StoreLocator.currentLocation.lng) : i.attr("href", n + $("#search-query").val());
            var o = new google.maps.LatLng(t[0], t[1]),
                s = new google.maps.Marker({
                    position: o,
                    map: PTT.StoreLocator.map,
                    icon: {
                        url: TEMPLATE_URL + "/img/storefinder-icon.png",
                        size: new google.maps.Size(28, 33),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(14, 33),
                        scaledSize: new google.maps.Size(28, 33)
                    }
                }),
                a = $(this);
            google.maps.event.addListener(s, "click", function() {
                a.trigger("click"), TweenMax.to(window, .5, {
                    scrollTo: a.offset().top - 100
                })
            }), PTT.StoreLocator.markers.push(s), e.extend(o), a.find(".open-shopping-hours").on("click", function(e) {
                e.preventDefault(), a.find(".shopping-hours").slideDown()
            })
        }), PTT.StoreLocator.map.fitBounds(e)
    },
    clearMarkers: function() {
        for (var e = 0; e < PTT.StoreLocator.markers.length; e++) PTT.StoreLocator.markers[e].setMap(null)
    },
    navigateToMarker: function(e) {
        var t = $(this).data("ll");
        t = t.split(", "), $(".addresses li").removeClass("active"), $(this).addClass("active"), PTT.StoreLocator.map.panTo(new google.maps.LatLng(t[0], t[1])), PTT.StoreLocator.map.setZoom(15)
    }
}, PTT.Footer = {
    newsletterFormActive: !1,
    init: function() {
        PTT.Footer.$footer = $("footer.bottom"), PTT.Footer.$lists = PTT.Footer.$footer.find(".list"), PTT.Footer.addListeners(), PTT.Footer.resize()
    },
    addListeners: function() {
        PTT.Globals.$window.on("resize", PTT.Footer.resize), PTT.Footer.$footer.find("a").each(function() {
            "" != $(this).attr("href") && "#" != $(this).attr("href") && "undefined" == typeof $(this).attr("target") && $(this).addClass("transition from-top")
        }), PTT.Footer.$footer.find(".newsletter form input[type=text]").on("focus", function() {
            PTT.Footer.newsletterFormActive = !0, PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.mq("(orientation: landscape)") && $("html").hasClass("touch") && PTT.Footer.$footer.filter(".slide").css({
                position: "static"
            })
        }), PTT.Footer.$footer.find(".newsletter form input[type=text]").on("blur", function() {
            PTT.Footer.newsletterFormActive = !1, PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Resolutions.maxWidth(PTT.Resolutions.TABLET) && Modernizr.mq("(orientation: landscape)") && $("html").hasClass("touch") && PTT.Footer.$footer.filter(".slide").css({
                position: "absolute"
            })
        }), PTT.Footer.$footer.find(".newsletter form").on("submit", function(e) {
            e.preventDefault();
            var t = $(this).find("input[type=text]").val();
            /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t) ? (PTT.Footer.$footer.find(".newsletter").find(".error").hide(),
                PTT.Footer.$footer.find(".newsletter").find(".success").show(), PTT.Footer.$footer.find(".newsletter form").hide(), $.post($(this).attr("action"), {
                    f: $(this).serialize()
                })) : (PTT.Footer.$footer.find(".newsletter").find(".error").show(), PTT.Footer.$footer.find(".newsletter").find(".success").hide())
        })
    },
    resize: function() {
        var e = -1;
        PTT.Footer.$lists.each(function() {
            ("block" == $(this).css("display") || "inline-block" == $(this).css("display")) && ($(this).css({
                height: ""
            }), e = Math.max($(this).outerHeight(), e))
        }), PTT.Footer.$lists.height(e)
    }
}, PTT.Collabs = {
    init: function() {
        $("body").hasClass("collabs") && (PTT.Collabs.transitionIn(), $(".video-player").youtubePlayerWithPoster({
            customFullscreen: !1
        }))
    },
    transitionIn: function() {
        var e = .4;
        $(".collabs .photo").append($('<div class="transition-overlay" />')), TweenMax.to($(".collabs .photo").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        })
    },
    resize: function() {}
}, PTT.MainContainer = {
    resize: function() {
        if (PTT.Globals.windowHeight = window.innerHeight ? window.innerHeight : PTT.Globals.$window.height(), PTT.Globals.windowWidth = window.innerWidth ? window.innerWidth : PTT.Globals.$window.width(), PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) && PTT.Globals.$body.addClass("resizing"), !PTT.Globals.$body.hasClass("overlay"))
            if (PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL)) {
                PTT.Globals.$body.addClass("small-screen");
                var e = $("header.top").is(":visible") ? 55 : 0;
                PTT.Globals.$mainContent.css({
                    height: PTT.Globals.windowHeight - e,
                    width: PTT.Globals.windowWidth,
                    webkitOverflowScrolling: "touch",
                    overflow: "auto"
                })
            } else PTT.Globals.$body.removeClass("small-screen"), PTT.Globals.$mainContent.css({
                height: "",
                width: ""
            }), $(".fixed").length > 0 && $(".fixed-height-wrapper").css({
                minHeight: PTT.Globals.windowHeight - $("header.top").outerHeight()
            })
    }
}, $(function() {
    function e() {
        $("body").removeClass("resizing")
    }
    FastClick.attach(document.body), $("body").removeClass("men women kids").addClass($.cookie("ptt_gender")), $("header.top ul li.category > a").removeClass("active"), $("header.top ul li.category." + $.cookie("ptt_gender") + " > a").addClass("active"), PTT.Globals.$window = $(window), PTT.Globals.$body = $("body"), PTT.Globals.$window.on("resize", $.debounce(400, e)), PTT.Globals.$window.on("resize", PTT.MainContainer.resize), PTT.Globals.$mainContent = $(".main-content"), PTT.Globals.$footer = $("footer.bottom"), PTT.Globals.windowHeight = window.innerHeight ? window.innerHeight : PTT.Globals.$window.height(), PTT.Globals.windowWidth = window.innerWidth ? window.innerWidth : PTT.Globals.$window.width(), PTT.MainContainer.resize(), e(), PTT.MainNavigation.init(), PTT.SlideManager.init(), PTT.ctrus.init(), PTT.VideoPlayer.init(), PTT.FeaturedProducts.init(), PTT.TeamRider.init(), PTT.TvOverview.init(), PTT.PinIt.init(), PTT.Contact.init(), PTT.StoreLocator.init(), PTT.TeamOverview.init(), PTT.About.init(), PTT.Footer.init(), PTT.Collabs.init(), PTT.NavigationManager.init(), $(".custom-scroll").jScrollPane(), $("html").hasClass("lt-ie9") && ($("input[type=radio]").on("change", function(e) {
        var t = $(this);
        $('input[name="' + t.attr("name") + '"]').each(function() {
            $(this).is(":checked") ? $(this).next("label").addClass("checked") : $(this).next("label").removeClass("checked")
        })
    }), $("input[type=checkbox]").on("change", function(e) {
        var t = $(this);
        t.is(":checked") ? t.next("label").addClass("checked") : t.next("label").removeClass("checked")
    }), $("input[type=radio]").each(function(e) {
        var t = $(this);
        $('input[name="' + t.attr("name") + '"]').each(function() {
            $(this).is(":checked") ? $(this).next("label").addClass("checked") : $(this).next("label").removeClass("checked")
        })
    }), $("input[type=checkbox]").each(function(e) {
        var t = $(this);
        t.is(":checked") ? t.next("label").addClass("checked") : t.next("label").removeClass("checked")
    })), $(".gender-selection").on("mouseover", "a", function() {
        var e = $("#" + $(this).data("background"));
        TweenMax.to(e, 1, {
            opacity: 1
        })
    }), $(".gender-selection").on("mouseleave", "a", function() {
        var e = $("#" + $(this).data("background"));
        TweenMax.to(e, 1, {
            opacity: 0
        })
    }), $(".select-box").selectBox(), TweenMax.to($(".main-content"), 1, {
        delay: .2,
        opacity: 1,
        ease: Quad.easeOut
    });
    var t = $(".gender-selection").find("#intro-ctrus").width() + 1;
    TweenMax.to($(".gender-selection").find("#intro-ctrus"), .5, {
        delay: 1,
        marginLeft: 0,
        marginTop: 0,
        top: 0,
        left: 0,
        ease: Quint.easeOut
    }), TweenMax.to($(".gender-selection").find("#intro-women"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: 0,
        left: t,
        ease: Quint.easeOut
    }), TweenMax.to($(".gender-selection").find("#intro-kids"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: t,
        left: 0,
        ease: Quint.easeOut
    }), TweenMax.to($(".gender-selection").find("#intro-men"), .6, {
        delay: 1.1,
        marginLeft: 0,
        marginTop: 0,
        top: t,
        left: t,
        ease: Quint.easeOut
    }), ($("body").hasClass("contact") || $("body").hasClass("storefinder") || $("body").hasClass("list-with-article") || $("body").hasClass("two-column-photo")) && ($(window).on("scroll", function() {
        if (!PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) return void $(".fixed").css({
            position: "",
            height: "",
            top: "",
            bottom: ""
        }).scrollTop(0);
        var e = PTT.Globals.$window.scrollTop(),
            t = e + PTT.Globals.windowHeight,
            i = $("footer.bottom");
        TweenMax.to($(".fixed"), .35, {
            scrollTop: e,
            overwrite: 2
        });
        var n = i.position().top + parseInt(i.css("margin-top"), 10);
        t > n ? $(".fixed").css({
            position: "",
            height: "",
            top: "auto",
            bottom: Math.min(t - n, i.outerHeight())
        }) : $(".fixed").css({
            position: "",
            height: "",
            top: "",
            bottom: ""
        })
    }), $(window).on("resize", function() {
        $(window).trigger("scroll")
    })), $("body").hasClass("contact") && $(".form-small").html($("div.form").html()), $("body").hasClass("list-with-article") && PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) && ($(".list > li").removeClass("active"), $(".list").on("click", "> li > article > h2 a", function(e) {
        e.preventDefault();
        var t = $(this),
            i = t.parents("li");
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? i.hasClass("active") ? $(".list > li").removeClass("active") : ($(".list > li").removeClass("active"), i.addClass("active"), $(".main-content").scrollTop(i.offset().top + $(".main-content").scrollTop() - 50)) : ($(".list > li").removeClass("active"), i.addClass("active"), TweenMax.to(window, .5, {
            scrollTo: 0,
            ease: Quad.easeOut
        })), $("article.text").find("h3").html(t.parent("h2").find("a").html()), $("article.text").find("div").html(t.parents("article").find("div").html())
    })), $(window).bind("pageshow", function(e) {
        e.originalEvent.persisted && window.location.reload()
    }), $("input, textarea").placeholder(), PTT.Analytics.init(), $(".fancybox").fancybox()
});
var PTT = PTT || {};
PTT.Collection = {
    $footer: null,
    init: function() {
        $("body").hasClass("collection") && (PTT.Collection.$footer = $("footer.bottom"), PTT.Collection.addListeners(), PTT.Collection.resize())
    },
    addListeners: function() {
        PTT.Globals.$window.on("scroll", PTT.Collection.scroll), PTT.Globals.$window.on("resize", PTT.Collection.scroll)
    },
    resize: function() {
        PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? $(".collection-items").css("min-height", "") : $(".collection-items").css("min-height", PTT.Globals.windowHeight - $("header.top").outerHeight())
    },
    scroll: function() {
        if (!PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) return void $("aside:not(.small-category-sidebar)").css({
            top: "",
            bottom: ""
        }).scrollTop(0);
        var e = PTT.Globals.$window.scrollTop(),
            t = e + PTT.Globals.windowHeight;
        TweenMax.to($("aside:not(.small-category-sidebar)"), .35, {
            scrollTop: e,
            overwrite: 2
        });
        var i = PTT.Collection.$footer.position().top + parseInt(PTT.Collection.$footer.css("margin-top"), 10);
        t > i ? ($("aside:not(.small-category-sidebar)").addClass("footer-in-view"), $("aside:not(.small-category-sidebar)").css({
            top: "",
            bottom: t - i - $("header.top").outerHeight()
        })) : ($("aside:not(.small-category-sidebar)").removeClass("footer-in-view"), $("aside:not(.small-category-sidebar)").css({
            top: "",
            bottom: ""
        }))
    }
}, PTT.CollectionOverview = {
    init: function() {
        0 != $("body.collection.overview").length && (PTT.CollectionOverview.prepareMobile(), PTT.CollectionOverview.addListeners(), PTT.CollectionOverview.scroll(), PTT.CollectionOverview.transitionIn())
    },
    prepareMobile: function() {
        $("aside").find(".small-sidebar").clone().appendTo($(".small-category-sidebar"))
    },
    addListeners: function() {
        function e(e) {
            e.preventDefault();
            var i = $(this),
                n = i.parent("li"),
                o = n.find("ul");
            return i.hasClass("active") ? !0 : (t(), i.addClass("active"), n.addClass("active"), o.css({
                "margin-top": -o.outerHeight(!0)
            }), void TweenMax.to(o, .5, {
                marginTop: 0,
                ease: Quad.easeOut
            }))
        }

        function t() {
            $(".category-accordion").find("> li.active").each(function() {
                var e = $(this).find("a"),
                    t = $(this),
                    i = t.find("ul");
                e.removeClass("active"), TweenMax.to(i, .5, {
                    marginTop: -i.outerHeight(!0),
                    ease: Quad.easeOut,
                    onComplete: function() {
                        i.css({
                            "margin-top": ""
                        }), t.removeClass("active")
                    }
                })
            })
        }
        $(".filter").filterBox(), $(".category-accordion").on("click", "> li > a", e), $(".opener").on("click", function(e) {
            e.preventDefault(), $(this).hasClass("open") ? ($(this).removeClass("open"), TweenMax.to($(".collection-overview-holder"), .5, {
                left: "0",
                ease: Quad.easeOut,
                onComplete: function() {
                    $(".small-category-sidebar").css({
                        display: ""
                    }), $(".collection-overview-holder").css({
                        left: ""
                    })
                }
            })) : ($(this).addClass("open"), TweenMax.to($(".collection-overview-holder"), .5, {
                left: "-90%",
                ease: Quad.easeOut
            }), $(".small-category-sidebar").css({
                display: "block"
            }))
        }), PTT.Globals.$window.on("scroll", PTT.CollectionOverview.scroll), PTT.Globals.$window.on("resize", PTT.CollectionOverview.scroll)
    },
    transitionIn: function() {
        var e = .4,
            t = $(".category-accordion").find("> li > a.active");
        t.parent("li").removeClass("active"), t.removeClass("active"), $(".collection-overview-holder aside").append($('<div class="transition-overlay" />')), TweenMax.to($(".collection-overview-holder aside").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        }), TweenMax.delayedCall(.8, function() {
            t.trigger("click")
        });
        var e = .8;
        $(".collection-items article").each(function(t) {
            var i = $(this);
            TweenMax.from(i, .6, {
                delay: e + t % 6 * .1,
                marginTop: "30%",
                ease: Quad.easeOut
            }), TweenMax.from(i, .4, {
                delay: e + t % 6 * .1,
                opacity: 0,
                ease: Quad.easeOut
            }), TweenMax.from(i.find("footer"), .3, {
                delay: e + t % 6 * .15,
                marginLeft: "-100%",
                ease: Quad.easeOut
            })
        })
    },
    scroll: function() {
        return PTT.Resolutions.maxWidth(PTT.Resolutions.SMALL) ? !0 : void 0
    }
}, PTT.CollectionItemViewer = {
    overviewPhotosLoaded: !1,
    currentActive: 0,
    viewerHeight: 0,
    deepZoomViewer: null,
    startTime: 0,
    init: function() {
        PTT.CollectionItemViewer.$photoHolder = PTT.CollectionItem.$page.find($(".photo-slider")), PTT.CollectionItemViewer.$zoom = PTT.CollectionItem.$page.find("#collection-item-zoom"), PTT.CollectionItemViewer.$zoomControls = PTT.CollectionItem.$page.find("#collection-item-zoom-controls"), PTT.CollectionItemViewer.$counter = PTT.CollectionItem.$page.find(".photo-counter");
        var e = PTT.CollectionItemViewer.$photoHolder.data("itemid");
        PTT.CollectionItemViewer.loadRelatedItems(e), Seadragon.Config.imagePath = "http://wearectrus.poort80.net/themes/base/gfx/seadragon_ui_images/", Seadragon.Config.transformOverlays = !0, PTT.CollectionItemViewer.deepZoomViewer = new Seadragon.Viewer("collection-item-zoom"), PTT.CollectionItemViewer.deepZoomViewer.addEventListener("open", function(e) {
            var t = new Seadragon.TouchController(PTT.CollectionItemViewer.deepZoomViewer);
            PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomTo(.6)
        }), $(PTT.CollectionItemViewer.deepZoomViewer.getNavControl()).remove(), PTT.CollectionItemViewer.startTime = (new Date).getTime()
    },
    loadRelatedItems: function(e) {
        var t = "http://wearectrus.poort80.net/bbsearch",
            i = "{'SearchString' : '" + e + "', 'InitialImage' : '" + e + "'}";
        t = t + "?callback=PTT.CollectionItemViewer.addCollectionPhotos&searchData=" + i, Poort80.executeJsonpRequest(t)
    },
    loadDeepZoomSpecs: function(e) {
        var t = e + "&fmt=jsonp&callback=PTT.CollectionItemViewer.loadDeepZoom";
        Poort80.executeJsonpRequest(t)
    },
    loadDeepZoom: function(e, t) {
        PTT.CollectionItemViewer.openZoom(), PTT.CollectionItemViewer.deepZoomViewer.openDzi(t)
    },
    addCollectionPhotos: function(e) {
        for (var t = 0; t < e.Collection.length; t++) {
            var i = e.Collection[t].Thumbnail,
                n = i.substr(0, i.indexOf("$")) + "$ProductDetail$",
                o = $('<div class="photo"><a href="#"><img src="' + n + '" /></a></div>');
            o.data("deepzoomurl", e.Collection[t].ImageResourceFile), PTT.CollectionItemViewer.$photoHolder.append(o)
        }
        PTT.CollectionItemViewer.$overviewPhotos = PTT.CollectionItemViewer.$photoHolder.find(".photo"), PTT.CollectionItemViewer.totalOverviewPhotos = PTT.CollectionItemViewer.$photoHolder.find(".photo").length, PTT.CollectionItemViewer.addListeners(), PTT.CollectionItemViewer.loadOverviewPhotos()
    },
    addListeners: function() {
        if (PTT.Globals.$window.on("resize", PTT.CollectionItemViewer.resize), Modernizr.touch) {
            var e = $(".photo-slider").hammer(),
                t = 0;
            e.on("dragstart", function(e) {
                e.stopPropagation(), t = parseInt(PTT.CollectionItemViewer.$photoHolder.css("left"), 10), PTT.CollectionItemViewer.dragging = !0
            }), e.on("dragleft dragright", function(e) {
                e.stopPropagation();
                var i = -1 * (PTT.CollectionItemViewer.$photoHolder.outerWidth(!0) - $(".product-photos").width()) - .15 * $(".product-photos").width(),
                    n = .15 * $(".product-photos").width();
                PTT.CollectionItemViewer.$photoHolder.css({
                    left: Math.min(n, Math.max(t + e.gesture.deltaX, i))
                }), PTT.CollectionItemViewer.scrollTransition()
            }), e.on("dragend", function(e) {
                e.stopPropagation();
                var t = Math.abs(parseInt(PTT.CollectionItemViewer.$photoHolder.css("left"), 10)) / $(".photo").width();
                "left" == e.gesture.direction ? t % 1 > .35 && (t = Math.ceil(t)) : "right" == e.gesture.direction && .65 > t % 1 && (t = Math.floor(t)), PTT.CollectionItemViewer.switchTo(Math.round(t)), PTT.CollectionItemViewer.dragging = !1
            });
            var i = PTT.CollectionItemViewer.$overviewPhotos.find("a").hammer();
            i.on("tap", function() {
                $(this).parent().hasClass("active") ? PTT.CollectionItemViewer.loadDeepZoomSpecs($(this).parent().data("deepzoomurl")) : PTT.CollectionItemViewer.switchTo($(this).parent().index())
            })
        } else PTT.CollectionItemViewer.$overviewPhotos.on("click", "a", function(e) {
            e.preventDefault(), $(this).parent().hasClass("active") ? PTT.CollectionItemViewer.loadDeepZoomSpecs($(this).parent().data("deepzoomurl")) : PTT.CollectionItemViewer.switchTo($(this).parent().index())
        });
        PTT.CollectionItemViewer.$overviewPhotos.on("mouseover", "a", function() {
            $(this).parent(".photo").hasClass("active") || TweenMax.to($(this).find("img"), 2, {
                opacity: 1,
                ease: Quint.easeOut
            })
        }), PTT.CollectionItemViewer.$overviewPhotos.on("mouseout", "a", function() {
            $(this).parent(".photo").hasClass("active") || TweenMax.to($(this).find("img"), 2, {
                opacity: $(this).find("img").data("currentopacity"),
                ease: Quint.easeOut
            })
        }), PTT.CollectionItemViewer.$zoomControls.find("#zoom-in").on("click", function(e) {
            e.preventDefault(), PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomBy(1.3)
        }), PTT.CollectionItemViewer.$zoomControls.find("#zoom-out").on("click", function(e) {
            e.preventDefault(), PTT.CollectionItemViewer.deepZoomViewer.viewport.zoomBy(.7)
        }), PTT.CollectionItemViewer.$zoomControls.find("#zoom-close").on("click", function(e) {
            e.preventDefault(), PTT.CollectionItemViewer.deepZoomViewer.close(), PTT.CollectionItemViewer.closeZoom()
        })
    },
    loadOverviewPhotos: function() {
        var e = 0;
        PTT.CollectionItemViewer.$photoHolder.css({
            opacity: 0
        }), PTT.CollectionItemViewer.$overviewPhotos.find("img").each(function() {
            var t = $(this);
            t.imagesLoaded(function() {
                if (t.data({
                        owidth: t.width(),
                        oheight: t.height()
                    }), e++, e == PTT.CollectionItemViewer.totalOverviewPhotos) {
                    PTT.CollectionItemViewer.overviewPhotosLoaded = !0;
                    var i = (new Date).getTime(),
                        n = i - PTT.CollectionItemViewer.startTime;
                    500 > n ? setTimeout(function() {
                        PTT.CollectionItemViewer.enableOverviewPhotos(), PTT.CollectionItemViewer.resize()
                    }, 500 - n) : (PTT.CollectionItemViewer.enableOverviewPhotos(), PTT.CollectionItemViewer.resize())
                }
            })
        })
    },
    enableOverviewPhotos: function() {
        PTT.CollectionItemViewer.resize(), PTT.CollectionItemViewer.$photoHolder.css({
            width: Math.round(52 * PTT.CollectionItemViewer.totalOverviewPhotos) + "%"
        }).addClass("active"), PTT.CollectionItemViewer.$overviewPhotos.css({
            width: Math.round(100 / PTT.CollectionItemViewer.totalOverviewPhotos) + "%"
        }), PTT.CollectionItemViewer.switchTo(0), TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .75, {
            opacity: 1,
            ease: Quad.easeOut
        })
    },
    switchTo: function(e) {
        TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .5, {
            left: -52 * e + "%",
            overwrite: 1,
            onUpdate: function() {
                PTT.CollectionItemViewer.scrollTransition()
            },
            onComplete: function() {
                PTT.CollectionItemViewer.$overviewPhotos.removeClass("active").eq(e).addClass("active")
            }
        }), PTT.CollectionItemViewer.currentActive = e, PTT.CollectionItemViewer.updateCounter()
    },
    scrollTransition: function() {
        var e = PTT.CollectionItemViewer.$photoHolder.width() / (PTT.CollectionItemViewer.totalOverviewPhotos - 1);
        PTT.CollectionItemViewer.$overviewPhotos.each(function() {
            var t = $(this),
                i = Math.abs(Math.abs(PTT.CollectionItemViewer.$photoHolder.position().left) - t.position().left),
                n = (e - i) / e;
            TweenMax.killTweensOf(t.find("img")), t.find("img").css({
                opacity: n
            }).data({
                currentopacity: n
            })
        })
    },
    updateCounter: function() {
        PTT.CollectionItemViewer.$counter.find(".counter-count").text(PTT.CollectionItemViewer.currentActive + 1), PTT.CollectionItemViewer.$counter.find(".counter-total").text(PTT.CollectionItemViewer.totalOverviewPhotos)
    },
    openZoom: function() {
        PTT.CollectionItemViewer.$zoom.show().addClass("active"), PTT.CollectionItemViewer.$zoomControls.show()
    },
    performZoom: function(e) {
        if ($(this).hasClass("active")) {
            var t = $(this).find("img"),
                i = $(this),
                n = $("header.top").outerHeight(),
                o = t.height() + n,
                s = i.outerHeight() - n;
            o > s && TweenMax.to(i, .3, {
                scrollTop: (o - s) * ((e.clientY - n) / s),
                overwrite: 1
            })
        }
    },
    closeZoom: function() {
        PTT.CollectionItemViewer.$zoom.hide().removeClass("active"), PTT.CollectionItemViewer.$zoomControls.hide()
    },
    resize: function() {
        var e = PTT.Resolutions.minWidth(PTT.Resolutions.SMALL) ? 625 : 300;
        if (PTT.CollectionItemViewer.viewerHeight = Math.round(Math.min(e, Math.max(300, PTT.Globals.windowHeight - PTT.CollectionItem.$page.find("header.top").height() - 90))), TweenMax.to(PTT.CollectionItemViewer.$photoHolder, .5, {
                height: PTT.CollectionItemViewer.viewerHeight,
                ease: Quad.easeOut
            }), PTT.CollectionItemViewer.overviewPhotosLoaded) {
            var t = parseInt(PTT.CollectionItemViewer.$overviewPhotos.css("padding-top"), 10) + parseInt(PTT.CollectionItemViewer.$overviewPhotos.css("padding-bottom"), 10);
            PTT.CollectionItemViewer.$overviewPhotos.each(function() {
                var e = $(this).find("img"),
                    i = (PTT.CollectionItemViewer.viewerHeight - t) / e.data("oheight");
                e.css({
                    marginLeft: Math.round(i * e.data("owidth")) * -.5,
                    width: Math.round(i * e.data("owidth")),
                    height: PTT.CollectionItemViewer.viewerHeight - t
                })
            })
        }
    }
}, PTT.CollectionItem = {
    $sizeTable: null,
    init: function() {
        0 != $("body.collection.item").length && (PTT.CollectionItem.$page = $(".collection.item"), PTT.CollectionItem.$sizeTable = $(".sizetable"), PTT.CollectionItem.prepareMobile(), PTT.CollectionItem.addListeners(), PTT.CollectionItemViewer.init(), PTT.CollectionItem.resize(), PTT.CollectionItem.transitionIn())
    },
    prepareMobile: function() {
        PTT.CollectionItem.$page.find(".product-photos").after(PTT.CollectionItem.$page.find("aside").clone())
    },
    addListeners: function() {
        PTT.CollectionItem.$page.find(".tabs").tabs(), $(".size-table-button").on("click", PTT.CollectionItem.openSizeTable), PTT.Globals.$window.on("resize", PTT.CollectionItem.resize), $(".sizes:not(.noselect) ul li a").click(function(e) {
            e.preventDefault(), "disabled" != $(this).attr("class") && ($(".sizes ul li a").removeClass("active"), $(this).addClass("active"), $("#select_ProductRefID").val($(this).attr("productdata-val")), $("#ID_ProductRefID").val($(this).attr("productdata-ref")))
        }), $(".sizes:not(.noselect) ul li a").click(function(e) {
            e.preventDefault()
        })
    },
    openSizeTable: function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        "#" != t && (PTT.CollectionItem.$sizeTable.html(""), $.ajax({
            url: t + "?ajax=1",
            cache: !1,
            type: "GET",
            crossDomain: !0,
            dataType: "html",
            success: function(e) {
                PTT.CollectionItem.$sizeTable.html($("<div/>").html(e).contents().find(".size-holder").parent().html()), PTT.CollectionItem.$sizeTable.find(".close-button a").on("click", PTT.CollectionItem.closeSizeTable), $(".select-box").selectBox({
                    callback: PTT.CollectionItem.switchSizeTable
                })
            }
        }), PTT.CollectionItem.$sizeTable.css({
            height: $(".main-content").height()
        }).show(), $(".main-content").scrollTop(0))
    },
    switchSizeTable: function(e, t) {
        var i = $("#select-cat").data(),
            n = $("#select-subcat").data();
        if ("undefined" != typeof i.section && "undefined" != typeof n.section) {
            var o = $(".sizetable-section#" + i.section + "-" + n.section);
            if (o.length > 0 && !o.hasClass("active")) {
                var s = PTT.CollectionItem.$sizeTable.find(".sizetable-section.active");
                TweenMax.to(s, .25, {
                    opacity: 0,
                    onComplete: function() {
                        s.removeClass("active"), o.css({
                            opacity: 0
                        }).addClass("active"), TweenMax.to(o, .25, {
                            delay: .25,
                            opacity: 1
                        })
                    }
                })
            }
        }
    },
    closeSizeTable: function(e) {
        e && e.preventDefault(), PTT.CollectionItem.$sizeTable.hide()
    },
    resize: function() {},
    transitionIn: function() {
        var e = .4;
        $("aside").append($('<div class="transition-overlay" />')), TweenMax.to($("aside").find(".transition-overlay"), .6, {
            delay: e,
            height: 0,
            ease: Quad.easeOut
        }), $(".sharing").css({
            opacity: 0
        }), TweenMax.to($(".sharing"), .5, {
            delay: 1.2,
            opacity: 1
        })
    }
}, PTT.Account = {
    init: function() {
        $("body").hasClass("account") && (PTT.Account.addListeners(), PTT.Account.resize())
    },
    addListeners: function() {
        if ($("body.account").hasClass("settings")) {
            var e = 0;
            $(".settings .button-holder .button.light").each(function() {
                e = Math.max($(this).width(), e)
            }), $(".settings .button-holder .button.light").width(e + 10)
        }
        $('input[type="radio"], input[type="checkbox"]').each(function() {
            $(this).addClass("needsclick"), $(this).next("label").addClass("needsclick"), $(this).next("label").find("span").addClass("needsclick"), $(this).next("label").find(">div").addClass("needsclick")
        }), $("body.account").hasClass("bag") && ($(".remove-button").on("click", function(e) {
            e.preventDefault(), $(this).hide();
            var t = $(this).parents(".remove");
            t.find(".remove-confirm").show(), t.find(".add-to-bag").hide()
        }), $(".remove-cancel").on("click", function(e) {
            e.preventDefault();
            var t = $(this).parents(".remove");
            t.find(".remove-button").show(), t.find(".add-to-bag").show(), $(this).parents(".remove-confirm").hide()
        }), $("#discountcode").on("change", function() {
            $(this).is(":checked") ? $(".discount-code").show() : $(".discount-code").hide()
        }), $(".discount-code").on("click", ".discount-code-button", function(e) {
            e.preventDefault(), $("#discount").addClass("discount-check"), $(".discount-code").find(".discount-code-button").hide(), $(".discount-code").find(".discount-code-button-close").show(), $(".discount-calculation-line").show()
        }), $(".discount-code").on("click", ".discount-code-button-close", function(e) {
            e.preventDefault(), $("#discount").removeClass("discount-check").val(""), $(".discount-code").find(".discount-code-button").show(), $(".discount-code").find(".discount-code-button-close").hide(), $(".discount-calculation-line").hide()
        })), $("input[name=paymethod]").on("change", function() {
            $("#afterpay").is(":checked") ? $(".afterpay-form").show() : $(".afterpay-form").hide()
        }), $("body.account").hasClass("checkout-address") && $(".new-address > h2 a").on("click", function(e) {
            e.preventDefault(), $(".new-address").find("fieldset").toggleClass("active")
        }), $("body").hasClass("checkout") && $("#open-terms").fancybox(), PTT.Globals.$window.on("resize", PTT.Account.resize)
    },
    resize: function() {
        if ($("body.account").hasClass("bag") && $(".bag-items .product .product-description").css("width", $(".bag-items .product .product-description").parent().width() - 80), $("body.account").hasClass("checkout")) {
            var e = $(".checkout .addresses .content-holder");
            if (PTT.Resolutions.minWidth(PTT.Resolutions.SMALL)) {
                if ("undefined" == typeof e.data("equalheight")) {
                    var t = 0;
                    e.each(function() {
                        t = Math.max($(this).height(), t)
                    }), e.data("equalheight", t + 60)
                }
                e.css({
                    height: e.data("equalheight")
                })
            } else e.css({
                height: ""
            })
        }
    }
}, $(function() {
    PTT.Collection.init(), PTT.CollectionOverview.init(), PTT.CollectionItem.init(), PTT.Account.init(), $(".collection-items, .product-bar").find("article").on("mouseover", function() {
        var e = $(this).find("img");
        $(this).css({
            overflow: "visible"
        }), TweenMax.to(e, .5, {
            marginTop: -10,
            ease: Quad.easeOut
        })
    }).on("mouseleave", function() {
        var e = $(this).find("img");
        TweenMax.to(e, .5, {
            marginTop: 0,
            ease: Quad.easeOut,
            onComplete: function() {
                $(this).css({
                    overflow: "hidden"
                })
            }
        })
    })
});

