/*!
 * VERSION: beta 1.3.4
 * DATE: 2014-11-15
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=180/Math.PI,e=[],i=[],s=[],n={},r=_gsScope._gsDefine.globals,o=function(t,e,i,s){this.a=t,this.b=e,this.c=i,this.d=s,this.da=s-t,this.ca=i-t,this.ba=e-t},a=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",h=function(t,e,i,s){var n={a:t},r={},o={},a={c:s},h=(t+e)/2,u=(e+i)/2,_=(i+s)/2,l=(h+u)/2,f=(u+_)/2,c=(f-l)/8;return n.b=h+(t-h)/4,r.b=l+c,n.c=r.a=(n.b+r.b)/2,r.c=o.a=(l+f)/2,o.b=f-c,a.b=_+(s-_)/4,o.c=a.a=(o.b+a.b)/2,[n,r,o,a]},u=function(t,n,r,o,a){var u,_,l,f,c,g,p,b,d,m,v,R,y,S=t.length-1,w=0,z=t[0].a;for(u=0;S>u;u++)c=t[w],_=c.a,l=c.d,f=t[w+1].d,a?(v=e[u],R=i[u],y=.25*(R+v)*n/(o?.5:s[u]||.5),g=l-(l-_)*(o?.5*n:0!==v?y/v:0),p=l+(f-l)*(o?.5*n:0!==R?y/R:0),b=l-(g+((p-g)*(3*v/(v+R)+.5)/4||0))):(g=l-.5*(l-_)*n,p=l+.5*(f-l)*n,b=l-(g+p)/2),g+=b,p+=b,c.c=d=g,c.b=0!==u?z:z=c.a+.6*(c.c-c.a),c.da=l-_,c.ca=d-_,c.ba=z-_,r?(m=h(_,z,d,l),t.splice(w,1,m[0],m[1],m[2],m[3]),w+=4):w++,z=p;c=t[w],c.b=z,c.c=z+.4*(c.d-z),c.da=c.d-c.a,c.ca=c.c-c.a,c.ba=z-c.a,r&&(m=h(c.a,z,c.c,c.d),t.splice(w,1,m[0],m[1],m[2],m[3]))},_=function(t,s,n,r){var a,h,u,_,l,f,c=[];if(r)for(t=[r].concat(t),h=t.length;--h>-1;)"string"==typeof(f=t[h][s])&&"="===f.charAt(1)&&(t[h][s]=r[s]+Number(f.charAt(0)+f.substr(2)));if(a=t.length-2,0>a)return c[0]=new o(t[0][s],0,0,t[-1>a?0:1][s]),c;for(h=0;a>h;h++)u=t[h][s],_=t[h+1][s],c[h]=new o(u,0,0,_),n&&(l=t[h+2][s],e[h]=(e[h]||0)+(_-u)*(_-u),i[h]=(i[h]||0)+(l-_)*(l-_));return c[h]=new o(t[h][s],0,0,t[h+1][s]),c},l=function(t,r,o,h,l,f){var c,g,p,b,d,m,v,R,y={},S=[],w=f||t[0];l="string"==typeof l?","+l+",":a,null==r&&(r=1);for(g in t[0])S.push(g);if(t.length>1){for(R=t[t.length-1],v=!0,c=S.length;--c>-1;)if(g=S[c],Math.abs(w[g]-R[g])>.05){v=!1;break}v&&(t=t.concat(),f&&t.unshift(f),t.push(t[1]),f=t[t.length-3])}for(e.length=i.length=s.length=0,c=S.length;--c>-1;)g=S[c],n[g]=-1!==l.indexOf(","+g+","),y[g]=_(t,g,n[g],f);for(c=e.length;--c>-1;)e[c]=Math.sqrt(e[c]),i[c]=Math.sqrt(i[c]);if(!h){for(c=S.length;--c>-1;)if(n[g])for(p=y[S[c]],m=p.length-1,b=0;m>b;b++)d=p[b+1].da/i[b]+p[b].da/e[b],s[b]=(s[b]||0)+d*d;for(c=s.length;--c>-1;)s[c]=Math.sqrt(s[c])}for(c=S.length,b=o?4:1;--c>-1;)g=S[c],p=y[g],u(p,r,o,h,n[g]),v&&(p.splice(0,b),p.splice(p.length-b,b));return y},f=function(t,e,i){e=e||"soft";var s,n,r,a,h,u,_,l,f,c,g,p={},b="cubic"===e?3:2,d="soft"===e,m=[];if(d&&i&&(t=[i].concat(t)),null==t||b+1>t.length)throw"invalid Bezier data";for(f in t[0])m.push(f);for(u=m.length;--u>-1;){for(f=m[u],p[f]=h=[],c=0,l=t.length,_=0;l>_;_++)s=null==i?t[_][f]:"string"==typeof(g=t[_][f])&&"="===g.charAt(1)?i[f]+Number(g.charAt(0)+g.substr(2)):Number(g),d&&_>1&&l-1>_&&(h[c++]=(s+h[c-2])/2),h[c++]=s;for(l=c-b+1,c=0,_=0;l>_;_+=b)s=h[_],n=h[_+1],r=h[_+2],a=2===b?0:h[_+3],h[c++]=g=3===b?new o(s,n,r,a):new o(s,(2*n+s)/3,(2*n+r)/3,r);h.length=c}return p},c=function(t,e,i){for(var s,n,r,o,a,h,u,_,l,f,c,g=1/i,p=t.length;--p>-1;)for(f=t[p],r=f.a,o=f.d-r,a=f.c-r,h=f.b-r,s=n=0,_=1;i>=_;_++)u=g*_,l=1-u,s=n-(n=(u*u*o+3*l*(u*a+l*h))*u),c=p*i+_-1,e[c]=(e[c]||0)+s*s},g=function(t,e){e=e>>0||6;var i,s,n,r,o=[],a=[],h=0,u=0,_=e-1,l=[],f=[];for(i in t)c(t[i],o,e);for(n=o.length,s=0;n>s;s++)h+=Math.sqrt(o[s]),r=s%e,f[r]=h,r===_&&(u+=h,r=s/e>>0,l[r]=f,a[r]=u,h=0,f=[]);return{length:u,lengths:a,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(t,e,i){this._target=t,e instanceof Array&&(e={values:e}),this._func={},this._round={},this._props=[],this._timeRes=null==e.timeResolution?6:parseInt(e.timeResolution,10);var s,n,r,o,a,h=e.values||[],u={},_=h[0],c=e.autoRotate||i.vars.orientToBezier;this._autoRotate=c?c instanceof Array?c:[["x","y","rotation",c===!0?0:Number(c)||0]]:null;for(s in _)this._props.push(s);for(r=this._props.length;--r>-1;)s=this._props[r],this._overwriteProps.push(s),n=this._func[s]="function"==typeof t[s],u[s]=n?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]():parseFloat(t[s]),a||u[s]!==h[0][s]&&(a=u);if(this._beziers="cubic"!==e.type&&"quadratic"!==e.type&&"soft"!==e.type?l(h,isNaN(e.curviness)?1:e.curviness,!1,"thruBasic"===e.type,e.correlate,a):f(h,e.type,u),this._segCount=this._beziers[s].length,this._timeRes){var p=g(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(c=this._autoRotate)for(this._initialRotations=[],c[0]instanceof Array||(this._autoRotate=c=[c]),r=c.length;--r>-1;){for(o=0;3>o;o++)s=c[r][o],this._func[s]="function"==typeof t[s]?t[s.indexOf("set")||"function"!=typeof t["get"+s.substr(3)]?s:"get"+s.substr(3)]:!1;s=c[r][2],this._initialRotations[r]=this._func[s]?this._func[s].call(this._target):this._target[s]}return this._startRatio=i.vars.runBackwards?1:0,!0},set:function(e){var i,s,n,r,o,a,h,u,_,l,f=this._segCount,c=this._func,g=this._target,p=e!==this._startRatio;if(this._timeRes){if(_=this._lengths,l=this._curSeg,e*=this._length,n=this._li,e>this._l2&&f-1>n){for(u=f-1;u>n&&e>=(this._l2=_[++n]););this._l1=_[n-1],this._li=n,this._curSeg=l=this._segments[n],this._s2=l[this._s1=this._si=0]}else if(this._l1>e&&n>0){for(;n>0&&(this._l1=_[--n])>=e;);0===n&&this._l1>e?this._l1=0:n++,this._l2=_[n],this._li=n,this._curSeg=l=this._segments[n],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(i=n,e-=this._l1,n=this._si,e>this._s2&&l.length-1>n){for(u=l.length-1;u>n&&e>=(this._s2=l[++n]););this._s1=l[n-1],this._si=n}else if(this._s1>e&&n>0){for(;n>0&&(this._s1=l[--n])>=e;);0===n&&this._s1>e?this._s1=0:n++,this._s2=l[n],this._si=n}a=(n+(e-this._s1)/(this._s2-this._s1))*this._prec}else i=0>e?0:e>=1?f-1:f*e>>0,a=(e-i*(1/f))*f;for(s=1-a,n=this._props.length;--n>-1;)r=this._props[n],o=this._beziers[r][i],h=(a*a*o.da+3*s*(a*o.ca+s*o.ba))*a+o.a,this._round[r]&&(h=Math.round(h)),c[r]?g[r](h):g[r]=h;if(this._autoRotate){var b,d,m,v,R,y,S,w=this._autoRotate;for(n=w.length;--n>-1;)r=w[n][2],y=w[n][3]||0,S=w[n][4]===!0?1:t,o=this._beziers[w[n][0]],b=this._beziers[w[n][1]],o&&b&&(o=o[i],b=b[i],d=o.a+(o.b-o.a)*a,v=o.b+(o.c-o.b)*a,d+=(v-d)*a,v+=(o.c+(o.d-o.c)*a-v)*a,m=b.a+(b.b-b.a)*a,R=b.b+(b.c-b.b)*a,m+=(R-m)*a,R+=(b.c+(b.d-b.c)*a-R)*a,h=p?Math.atan2(R-m,v-d)*S+y:this._initialRotations[n],c[r]?g[r](h):g[r]=h)}}}),b=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=h,p._autoCSS=!0,p.quadraticToCubic=function(t,e,i){return new o(t,(2*e+t)/3,(2*e+i)/3,i)},p._cssRegister=function(){var t=r.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,n=e.CSSPropTween;e._registerComplexSpecialProp("bezier",{parser:function(t,e,r,o,a,h){e instanceof Array&&(e={values:e}),h=new p;var u,_,l,f=e.values,c=f.length-1,g=[],b={};if(0>c)return a;for(u=0;c>=u;u++)l=i(t,f[u],o,a,h,c!==u),g[u]=l.end;for(_ in e)b[_]=e[_];return b.values=g,a=new n(t,"bezier",0,0,l.pt,2),a.data=l,a.plugin=h,a.setRatio=s,0===b.autoRotate&&(b.autoRotate=!0),!b.autoRotate||b.autoRotate instanceof Array||(u=b.autoRotate===!0?0:Number(b.autoRotate),b.autoRotate=null!=l.end.left?[["left","top","rotation",u,!1]]:null!=l.end.x?[["x","y","rotation",u,!1]]:!1),b.autoRotate&&(o._transform||o._enableTransforms(!1),l.autoRotate=o._target._gsTransform),h._onInitTween(l.proxy,b,o._tween),a}})}},b._roundProps=function(t,e){for(var i=this._overwriteProps,s=i.length;--s>-1;)(t[i[s]]||t.bezier||t.bezierThrough)&&(this._round[i[s]]=e)},b._kill=function(t){var e,i,s=this._props;for(e in this._beziers)if(e in t)for(delete this._beziers[e],delete this._func[e],i=s.length;--i>-1;)s[i]===e&&s.splice(i,1);return this._super._kill.call(this,t)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("BezierPlugin");