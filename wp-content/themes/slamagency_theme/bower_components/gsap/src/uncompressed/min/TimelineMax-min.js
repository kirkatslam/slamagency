/*!
 * VERSION: 1.16.0
 * DATE: 2015-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},r=1e-10,a=[],n=e._internals,h=n.lazyTweens,o=n.lazyRender,_=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.16.0",l.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s={ease:_,useFrames:this.usesFrames(),immediateRender:!1},r,n,h;for(n in i)s[n]=i[n];return s.time=this._parseTimeOrLabel(t),r=Math.abs(Number(s.time)-this._time)/this._timeScale||.001,h=new e(this,r,s),s.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&r===h.duration()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||h,i.onStartParams||a)},h},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=i.immediateRender!==!1;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s=this._dirty?this.totalDuration():this._totalDuration,n=this._duration,_=this._time,l=this._totalTime,m=this._startTime,u=this._timeScale,d=this._rawPrevTime,c=this._paused,f=this._cycle,p,v,T,y,g,b;if(t>=s)this._locked||(this._totalTime=s,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(v=!0,y="onComplete",0===this._duration&&(0===t||0>d||d===r)&&d!==t&&this._first&&(g=!0,d>r&&(y="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!==(1&this._cycle)?this._time=t=0:(this._time=n,t=n+1e-4);else if(1e-7>t)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==_||0===n&&d!==r&&(d>0||0>t&&d>=0)&&!this._locked)&&(y="onReverseComplete",v=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(g=v=!0,y="onReverseComplete"):d>=0&&this._first&&(g=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=n||!e||t||this._rawPrevTime===t?t:r,0===t&&v)for(p=this._first;p&&0===p._startTime;)p._duration||(v=!1),p=p._next;t=0,this._initted||(g=!0)}else 0===n&&0>d&&(g=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(b=n+this._repeatDelay,this._cycle=this._totalTime/b>>0,0!==this._cycle&&this._cycle===this._totalTime/b&&this._cycle--,this._time=this._totalTime-this._cycle*b,this._yoyo&&0!==(1&this._cycle)&&(this._time=n-this._time),this._time>n?(this._time=n,t=n+1e-4):this._time<0?this._time=t=0:t=this._time));if(this._cycle!==f&&!this._locked){var w=this._yoyo&&0!==(1&f),S=w===(this._yoyo&&0!==(1&this._cycle)),P=this._totalTime,C=this._cycle,D=this._rawPrevTime,L=this._time;if(this._totalTime=f*n,this._cycle<f?w=!w:this._totalTime+=n,this._time=_,this._rawPrevTime=0===n?d-1e-4:d,this._cycle=f,this._locked=!0,_=w?0:n,this.render(_,e,0===n),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||a),S&&(_=w?n+1e-4:-1e-4,this.render(_,!0,!1)),this._locked=!1,this._paused&&!c)return;this._time=L,this._totalTime=P,this._cycle=C,this._rawPrevTime=D}if(!(this._time!==_&&this._first||i||g))return void(l!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||a)));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==l&&t>0&&(this._active=!0),0===l&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||a)),this._time>=_)for(p=this._first;p&&(T=p._next,!this._paused||c);)(p._active||p._startTime<=this._time&&!p._paused&&!p._gc)&&(p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(t-p._startTime)*p._timeScale,e,i):p.render((t-p._startTime)*p._timeScale,e,i)),p=T;else for(p=this._last;p&&(T=p._prev,!this._paused||c);)(p._active||p._startTime<=_&&!p._paused&&!p._gc)&&(p._reversed?p.render((p._dirty?p.totalDuration():p._totalDuration)-(t-p._startTime)*p._timeScale,e,i):p.render((t-p._startTime)*p._timeScale,e,i)),p=T;this._onUpdate&&(e||(h.length&&o(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||a))),y&&(this._locked||this._gc||(m===this._startTime||u!==this._timeScale)&&(0===this._time||s>=this.totalDuration())&&(v&&(h.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[y]&&this.vars[y].apply(this.vars[y+"Scope"]||this,this.vars[y+"Params"]||a)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s=[],r=this.getChildren(t,e,i),a=0,n=r.length,h,o;for(h=0;n>h;h++)o=r[h],o.isActive()&&(s[a++]=o);return s},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e=this.getLabelsArray(),i=e.length,s;for(s=0;i>s;s++)if(e[s].time>t)return e[s].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(e[i].time<t)return e[i].name;return null},l.getLabelsArray=function(){var t=[],e=0,i;for(i in this._labels)t[e++]={time:this._labels[i],name:i};return t.sort(function(t,e){return t.time-e.time}),t},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!==(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i=this.vars,s,r;for(r in i)s=i[r],o(s)&&-1!==s.join("").indexOf("{self}")&&(i[r]=this._swapSelfInParams(s));o(i.tweens)&&this.add(i.tweens,0,i.align,i.stagger)},r=1e-10,a=i._internals,n=s._internals={},h=a.isSelector,o=a.isArray,_=a.lazyTweens,l=a.lazyRender,m=[],u=_gsScope._gsDefine.globals,d=function(t){var e={},i;for(i in t)e[i]=t[i];return e},c=n.pauseCallback=function(t,e,i,s){var a=t._timeline,n=a._totalTime,h=t._startTime,o=t.ratio?r:0,_=t.ratio?0:r,l;if(e||!this._forcingPlayhead){for(a.pause(h),l=t._prev;l&&l._startTime===h;)l._rawPrevTime=_,l=l._prev;for(l=t._next;l&&l._startTime===h;)l._rawPrevTime=o,l=l._next;e&&e.apply(s||a,i||m),this._forcingPlayhead&&a.seek(n)}},f=function(t){var e=[],i=t.length,s;for(s=0;s!==i;e.push(t[s++]));return e},p=s.prototype=new e;return s.version="1.16.0",p.constructor=s,p.kill()._gc=p._forcingPlayhead=!1,p.to=function(t,e,s,r){var a=s.repeat&&u.TweenMax||i;return e?this.add(new a(t,e,s),r):this.set(t,s,r)},p.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},p.fromTo=function(t,e,s,r,a){var n=r.repeat&&u.TweenMax||i;return e?this.add(n.fromTo(t,e,s,r),a):this.set(t,r,a)},p.staggerTo=function(t,e,r,a,n,o,_,l){var m=new s({onComplete:o,onCompleteParams:_,onCompleteScope:l,smoothChildTiming:this.smoothChildTiming}),u;for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],h(t)&&(t=f(t)),a=a||0,0>a&&(t=f(t),t.reverse(),a*=-1),u=0;u<t.length;u++)r.startAt&&(r.startAt=d(r.startAt)),m.to(t[u],e,d(r),u*a);return this.add(m,n)},p.staggerFrom=function(t,e,i,s,r,a,n,h){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,a,n,h)},p.staggerFromTo=function(t,e,i,s,r,a,n,h,o){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,a,n,h,o)},p.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},p.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r=new s(t),a=r._timeline,n,h;for(null==e&&(e=!0),a._remove(r,!0),r._startTime=0,r._rawPrevTime=r._time=r._totalTime=a._time,n=a._first;n;)h=n._next,e&&n instanceof i&&n.target===n.vars.onComplete||r.add(n,n._startTime-n._delay),n=h;return a.add(r,0),r},p.add=function(r,a,n,h){var _,l,m,u,d,c;if("number"!=typeof a&&(a=this._parseTimeOrLabel(a,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(n=n||"normal",h=h||0,_=a,l=r.length,m=0;l>m;m++)o(u=r[m])&&(u=new s({tweens:u})),this.add(u,_),"string"!=typeof u&&"function"!=typeof u&&("sequence"===n?_=u._startTime+u.totalDuration()/u._timeScale:"start"===n&&(u._startTime-=u.delay())),_+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,a);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,a),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(d=this,c=d.rawTime()>r._startTime;d._timeline;)c&&d._timeline.smoothChildTiming?d.totalTime(d._totalTime,!0):d._gc&&d._enabled(!0,!1),d=d._timeline;return this},p.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},p._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},p.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},p.insert=p.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},p.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},p.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},p.addPause=function(t,e,s,r){var a=i.delayedCall(0,c,["{self}",e,s,r],this);return a.data="isPause",this.add(a,t)},p.removeLabel=function(t){return delete this._labels[t],this},p.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},p._parseTimeOrLabel=function(e,i,s,r){var a;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(a=r.length;--a>-1;)r[a]instanceof t&&r[a].timeline===this&&this.remove(r[a]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(a=e.indexOf("="),-1===a)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(a-1)+"1",10)*Number(e.substr(a+1)),e=a>1?this._parseTimeOrLabel(e.substr(0,a-1),0,s):this.duration()}return Number(e)+i},p.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},p.stop=function(){return this.paused(!0)},p.gotoAndPlay=function(t,e){return this.play(t,e)},p.gotoAndStop=function(t,e){return this.pause(t,e)},p.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s=this._dirty?this.totalDuration():this._totalDuration,a=this._time,n=this._startTime,h=this._timeScale,o=this._paused,u,d,c,f,p;if(t>=s)this._totalTime=this._time=s,this._reversed||this._hasPausedChild()||(d=!0,f="onComplete",0===this._duration&&(0===t||this._rawPrevTime<0||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(p=!0,this._rawPrevTime>r&&(f="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=s+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==a||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(f="onReverseComplete",d=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(p=d=!0,f="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(p=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&d)for(u=this._first;u&&0===u._startTime;)u._duration||(d=!1),u=u._next;t=0,this._initted||(p=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==a&&this._first||i||p){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==a&&t>0&&(this._active=!0),0===a&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||m)),this._time>=a)for(u=this._first;u&&(c=u._next,!this._paused||o);)(u._active||u._startTime<=this._time&&!u._paused&&!u._gc)&&(u._reversed?u.render((u._dirty?u.totalDuration():u._totalDuration)-(t-u._startTime)*u._timeScale,e,i):u.render((t-u._startTime)*u._timeScale,e,i)),u=c;else for(u=this._last;u&&(c=u._prev,!this._paused||o);)(u._active||u._startTime<=a&&!u._paused&&!u._gc)&&(u._reversed?u.render((u._dirty?u.totalDuration():u._totalDuration)-(t-u._startTime)*u._timeScale,e,i):u.render((t-u._startTime)*u._timeScale,e,i)),u=c;this._onUpdate&&(e||(_.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||m))),f&&(this._gc||(n===this._startTime||h!==this._timeScale)&&(0===this._time||s>=this.totalDuration())&&(d&&(_.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||m)))}},p._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},p.getChildren=function(t,e,s,r){r=r||-9999999999;for(var a=[],n=this._first,h=0;n;)n._startTime<r||(n instanceof i?e!==!1&&(a[h++]=n):(s!==!1&&(a[h++]=n),t!==!1&&(a=a.concat(n.getChildren(!0,e,s)),h=a.length))),n=n._next;return a},p.getTweensOf=function(t,e){var s=this._gc,r=[],a=0,n,h;for(s&&this._enabled(!0,!0),n=i.getTweensOf(t),h=n.length;--h>-1;)(n[h].timeline===this||e&&this._contains(n[h]))&&(r[a++]=n[h]);return s&&this._enabled(!1,!0),r},p.recent=function(){return this._recent},p._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},p.shiftChildren=function(t,e,i){i=i||0;for(var s=this._first,r=this._labels,a;s;)s._startTime>=i&&(s._startTime+=t),s=s._next;if(e)for(a in r)r[a]>=i&&(r[a]+=t);return this._uncache(!0)},p._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},p.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},p.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},p._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},p.totalTime=function(e,i,s){this._forcingPlayhead=!0;var r=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,r},p.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},p.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e=0,i=this._last,s=999999999999,r,a;i;)r=i._prev,i._dirty&&i.totalDuration(),i._startTime>s&&this._sortChildren&&!i._paused?this.add(i,i._startTime-i._delay):s=i._startTime,i._startTime<0&&!i._paused&&(e-=i._startTime,this._timeline.smoothChildTiming&&(this._startTime+=i._startTime/this._timeScale),this.shiftChildren(-i._startTime,!1,-9999999999),s=0),a=i._startTime+i._totalDuration/i._timeScale,a>e&&(e=a),i=r;this._duration=this._totalDuration=e,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},p.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=s),i=i._next;return t.prototype.paused.apply(this,arguments)},p.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},p.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineMax");