"use strict";var v=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var o=v(function(A,l){
var j=require('@stdlib/number-float64-base-to-float32/dist'),b=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-assert-is-nanf/dist');function R(a,e,i,c){var s,n,t,r,u;if(a<=0)return NaN;if(a===1||i===0)return f(e[c])?NaN:0;if(t=c,r=e[t],f(r))return r;for(n=b(r),s=n,u=1;u<a;u++){if(t+=i,r=e[t],f(r))return r;r=b(r),r<n?n=r:r>s&&(s=r)}return j(s-n)}l.exports=R
});var p=v(function(B,m){
var _=require('@stdlib/strided-base-stride2offset/dist'),E=o();function F(a,e,i){return E(a,e,i,_(a,i))}m.exports=F
});var g=v(function(C,d){
var N=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=p(),O=o();N(y,"ndarray",O);d.exports=y
});var T=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=g(),q,x=h(T(__dirname,"./native.js"));k(x)?q=w:q=x;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
