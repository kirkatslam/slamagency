/*!
 * VERSION: 0.1.6
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e,t,r=/(\d|\.)+/g,i=["redMultiplier","greenMultiplier","blueMultiplier","alphaMultiplier","redOffset","greenOffset","blueOffset","alphaOffset"],n={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},l=function(e){return""===e||null==e||"none"===e?n.transparent:n[e]?n[e]:"number"==typeof e?[e>>16,255&e>>8,255&e]:"#"===e.charAt(0)?(4===e.length&&(e="#"+e.charAt(1)+e.charAt(1)+e.charAt(2)+e.charAt(2)+e.charAt(3)+e.charAt(3)),e=parseInt(e.substr(1),16),[e>>16,255&e>>8,255&e]):e.match(r)||n.transparent},o=function(t,r,n){if(!e&&(e=_gsScope.ColorFilter||_gsScope.createjs.ColorFilter,!e))throw"EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded.";for(var o,s,a,u,f,c=t.filters||[],p=c.length;--p>-1;)if(c[p]instanceof e){s=c[p];break}if(s||(s=new e,c.push(s),t.filters=c),a=s.clone(),null!=r.tint)o=l(r.tint),u=null!=r.tintAmount?Number(r.tintAmount):1,a.redOffset=Number(o[0])*u,a.greenOffset=Number(o[1])*u,a.blueOffset=Number(o[2])*u,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-u;else for(f in r)"exposure"!==f&&"brightness"!==f&&(a[f]=Number(r[f]));for(null!=r.exposure?(a.redOffset=a.greenOffset=a.blueOffset=255*(Number(r.exposure)-1),a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1):null!=r.brightness&&(u=Number(r.brightness)-1,a.redOffset=a.greenOffset=a.blueOffset=u>0?255*u:0,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-Math.abs(u)),p=8;--p>-1;)f=i[p],s[f]!==a[f]&&n._addTween(s,f,s[f],a[f],"easel_colorFilter");if(n._overwriteProps.push("easel_colorFilter"),!t.cacheID)throw"EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. "+t},s=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],a=.212671,u=.71516,f=.072169,c=function(e,t){if(!(e instanceof Array&&t instanceof Array))return t;var r,i,n=[],l=0,o=0;for(r=0;4>r;r++){for(i=0;5>i;i++)o=4===i?e[l+4]:0,n[l+i]=e[l]*t[i]+e[l+1]*t[i+5]+e[l+2]*t[i+10]+e[l+3]*t[i+15]+o;l+=5}return n},p=function(e,t){if(isNaN(t))return e;var r=1-t,i=r*a,n=r*u,l=r*f;return c([i+t,n,l,0,0,i,n+t,l,0,0,i,n,l+t,0,0,0,0,0,1,0],e)},h=function(e,t,r){isNaN(r)&&(r=1);var i=l(t),n=i[0]/255,o=i[1]/255,s=i[2]/255,p=1-r;return c([p+r*n*a,r*n*u,r*n*f,0,0,r*o*a,p+r*o*u,r*o*f,0,0,r*s*a,r*s*u,p+r*s*f,0,0,0,0,0,1,0],e)},g=function(e,t){if(isNaN(t))return e;t*=Math.PI/180;var r=Math.cos(t),i=Math.sin(t);return c([a+r*(1-a)+i*-a,u+r*-u+i*-u,f+r*-f+i*(1-f),0,0,a+r*-a+.143*i,u+r*(1-u)+.14*i,f+r*-f+i*-.283,0,0,a+r*-a+i*-(1-a),u+r*-u+i*u,f+r*(1-f)+i*f,0,0,0,0,0,1,0,0,0,0,0,1],e)},_=function(e,t){return isNaN(t)?e:(t+=.01,c([t,0,0,0,128*(1-t),0,t,0,0,128*(1-t),0,0,t,0,128*(1-t),0,0,0,1,0],e))},b=function(e,r,i){if(!t&&(t=_gsScope.ColorMatrixFilter||_gsScope.createjs.ColorMatrixFilter,!t))throw"EaselPlugin error: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded.";for(var n,l,o,a=e.filters||[],u=a.length;--u>-1;)if(a[u]instanceof t){o=a[u];break}for(o||(o=new t(s.slice()),a.push(o),e.filters=a),l=o.matrix,n=s.slice(),null!=r.colorize&&(n=h(n,r.colorize,Number(r.colorizeAmount))),null!=r.contrast&&(n=_(n,Number(r.contrast))),null!=r.hue&&(n=g(n,Number(r.hue))),null!=r.saturation&&(n=p(n,Number(r.saturation))),u=n.length;--u>-1;)n[u]!==l[u]&&i._addTween(l,u,l[u],n[u],"easel_colorMatrixFilter");if(i._overwriteProps.push("easel_colorMatrixFilter"),!e.cacheID)throw"EaselPlugin warning: for filters to display in EaselJS, you must call the object's cache() method first. "+e;i._matrix=l};_gsScope._gsDefine.plugin({propName:"easel",priority:-1,version:"0.1.6",API:2,init:function(e,t){this._target=e;var r,i,n,l;for(r in t)"colorFilter"===r||"tint"===r||"tintAmount"===r||"exposure"===r||"brightness"===r?n||(o(e,t.colorFilter||t,this),n=!0):"saturation"===r||"contrast"===r||"hue"===r||"colorize"===r||"colorizeAmount"===r?l||(b(e,t.colorMatrixFilter||t,this),l=!0):"frame"===r?(this._firstPT=i={_next:this._firstPT,t:e,p:"gotoAndStop",s:e.currentFrame,f:!0,n:"frame",pr:0,type:0,r:!0},i.c="number"==typeof t[r]?t[r]-i.s:"string"==typeof t[r]?parseFloat(t[r].split("=").join("")):0,i._next&&(i._next._prev=i)):null!=e[r]&&(this._firstPT=i={_next:this._firstPT,t:e,p:r,f:"function"==typeof e[r],n:r,pr:0,type:0},i.s=i.f?e[r.indexOf("set")||"function"!=typeof e["get"+r.substr(3)]?r:"get"+r.substr(3)]():parseFloat(e[r]),i.c="number"==typeof t[r]?t[r]-i.s:"string"==typeof t[r]?parseFloat(t[r].split("=").join("")):0,i._next&&(i._next._prev=i));return!0},set:function(e){for(var t,r=this._firstPT,i=1e-6;r;)t=r.c*e+r.s,r.r?t=Math.round(t):i>t&&t>-i&&(t=0),r.f?r.t[r.p](t):r.t[r.p]=t,r=r._next;this._target.cacheID&&this._target.updateCache()}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();