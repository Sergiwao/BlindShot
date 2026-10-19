(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="170",Qh=0,Tc=1,eu=2,Wl=1,ql=2,Dn=3,ui=0,Ht=1,tn=2,oi=0,Zi=1,wc=2,Ac=3,Rc=4,tu=5,bi=100,nu=101,iu=102,su=103,ru=104,ou=200,au=201,cu=202,lu=203,Go=204,Ho=205,hu=206,uu=207,du=208,fu=209,pu=210,mu=211,gu=212,_u=213,vu=214,Wo=0,qo=1,Xo=2,ns=3,Yo=4,$o=5,jo=6,Ko=7,Xl=0,xu=1,yu=2,ai=0,Mu=1,Su=2,bu=3,Yl=4,Eu=5,Tu=6,wu=7,$l=300,is=301,ss=302,Zo=303,Jo=304,Wr=306,Qo=1e3,Ti=1001,ea=1002,un=1003,Au=1004,er=1005,vn=1006,eo=1007,wi=1008,Wn=1009,jl=1010,Kl=1011,Fs=1012,Ba=1013,Ci=1014,Fn=1015,Ys=1016,za=1017,Va=1018,rs=1020,Zl=35902,Jl=1021,Ql=1022,hn=1023,eh=1024,th=1025,Ji=1026,os=1027,nh=1028,Ga=1029,ih=1030,Ha=1031,Wa=1033,Tr=33776,wr=33777,Ar=33778,Rr=33779,ta=35840,na=35841,ia=35842,sa=35843,ra=36196,oa=37492,aa=37496,ca=37808,la=37809,ha=37810,ua=37811,da=37812,fa=37813,pa=37814,ma=37815,ga=37816,_a=37817,va=37818,xa=37819,ya=37820,Ma=37821,Cr=36492,Sa=36494,ba=36495,sh=36283,Ea=36284,Ta=36285,wa=36286,Ru=3200,Cu=3201,rh=0,Pu=1,ii="",Yt="srgb",ds="srgb-linear",qr="linear",rt="srgb",Ui=7680,Cc=519,Lu=512,Du=513,Iu=514,oh=515,Uu=516,Nu=517,Ou=518,Fu=519,Pc=35044,Lc="300 es",kn=2e3,Fr=2001;class fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dc=1234567;const Ps=Math.PI/180,ks=180/Math.PI;function ps(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function kt(i,e,t){return Math.max(e,Math.min(t,i))}function qa(i,e){return(i%e+e)%e}function ku(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Bu(i,e,t){return i!==e?(t-i)/(e-i):0}function Ls(i,e,t){return(1-t)*i+t*e}function zu(i,e,t,n){return Ls(i,e,1-Math.exp(-t*n))}function Vu(i,e=1){return e-Math.abs(qa(i,e*2)-e)}function Gu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function qu(i,e){return i+Math.random()*(e-i)}function Xu(i){return i*(.5-Math.random())}function Yu(i){i!==void 0&&(Dc=i);let e=Dc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $u(i){return i*Ps}function ju(i){return i*ks}function Ku(i){return(i&i-1)===0&&i!==0}function Zu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Ju(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qu(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*u,c*h,c*d,a*l);break;case"YZY":i.set(c*d,a*u,c*h,a*l);break;case"ZXZ":i.set(c*h,c*d,a*u,a*l);break;case"XZX":i.set(a*u,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*u,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ed={DEG2RAD:Ps,RAD2DEG:ks,generateUUID:ps,clamp:kt,euclideanModulo:qa,mapLinear:ku,inverseLerp:Bu,lerp:Ls,damp:zu,pingpong:Vu,smoothstep:Gu,smootherstep:Hu,randInt:Wu,randFloat:qu,randFloatSpread:Xu,seededRandom:Yu,degToRad:$u,radToDeg:ju,isPowerOfTwo:Ku,ceilPowerOfTwo:Zu,floorPowerOfTwo:Ju,setQuaternionFromProperEuler:Qu,normalize:Nt,denormalize:$i};class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,s,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],E=s[1],x=s[4],v=s[7],R=s[2],T=s[5],w=s[8];return r[0]=o*_+a*E+c*R,r[3]=o*m+a*x+c*T,r[6]=o*p+a*v+c*w,r[1]=l*_+u*E+h*R,r[4]=l*m+u*x+h*T,r[7]=l*p+u*v+h*w,r[2]=d*_+f*E+g*R,r[5]=d*m+f*x+g*T,r[8]=d*p+f*v+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*l-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*c)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(to.makeScale(e,t)),this}rotate(e){return this.premultiply(to.makeRotation(-e)),this}translate(e,t){return this.premultiply(to.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const to=new ke;function ah(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function kr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function td(){const i=kr("canvas");return i.style.display="block",i}const Ic={};function As(i){i in Ic||(Ic[i]=!0,console.warn(i))}function nd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function id(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sd(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ze={enabled:!0,workingColorSpace:ds,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===rt&&(i.r=Hn(i.r),i.g=Hn(i.g),i.b=Hn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===rt&&(i.r=Qi(i.r),i.g=Qi(i.g),i.b=Qi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?qr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uc=[.64,.33,.3,.6,.15,.06],Nc=[.2126,.7152,.0722],Oc=[.3127,.329],Fc=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ze.define({[ds]:{primaries:Uc,whitePoint:Oc,transfer:qr,toXYZ:Fc,fromXYZ:kc,luminanceCoefficients:Nc,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:Uc,whitePoint:Oc,transfer:rt,toXYZ:Fc,fromXYZ:kc,luminanceCoefficients:Nc,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}});let Ni;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=kr("canvas")),Ni.width=e.width,Ni.height=e.height;const n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=kr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Hn(t[n]/255)*255):t[n]=Hn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let od=0;class ch{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:od++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(no(s[o].image)):r.push(no(s[o]))}else r=no(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ad=0;class Bt extends fs{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Ti,s=Ti,r=vn,o=wi,a=hn,c=Wn,l=Bt.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=ps(),this.name="",this.source=new ch(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$l)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=$l;Bt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,n=0,s=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(u+d)/4,w=(h+_)/4,C=(g+m)/4;return x>v&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=w/n):v>R?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=w/r,s=C/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-_)/E,this.z=(d-u)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends fs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ch(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends cd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lh extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ld extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-a;const p=c*d+l*f+u*g+h*_,E=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,p*E);m=Math.sin(m*T)/R,a=Math.sin(a*T)/R}const v=a*E;if(c=c*m+d*v,l=l*m+f*v,u=u*m+g*v,h=h*m+_*v,m===1-a){const R=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=R,l*=R,u*=R,h*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-a*f,e[t+2]=l*g+u*f+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),h=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>h){const f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>h){const f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=s+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return io.copy(this).projectOnVector(e),this.sub(io)}reflect(e){return this.sub(io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(kt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new O,Bc=new $s;class js{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tr.copy(n.boundingBox)),tr.applyMatrix4(e.matrixWorld),this.union(tr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),nr.subVectors(this.max,ys),Oi.subVectors(e.a,ys),Fi.subVectors(e.b,ys),ki.subVectors(e.c,ys),Kn.subVectors(Fi,Oi),Zn.subVectors(ki,Fi),mi.subVectors(Oi,ki);let t=[0,-Kn.z,Kn.y,0,-Zn.z,Zn.y,0,-mi.z,mi.y,Kn.z,0,-Kn.x,Zn.z,0,-Zn.x,mi.z,0,-mi.x,-Kn.y,Kn.x,0,-Zn.y,Zn.x,0,-mi.y,mi.x,0];return!so(t,Oi,Fi,ki,nr)||(t=[1,0,0,0,1,0,0,0,1],!so(t,Oi,Fi,ki,nr))?!1:(ir.crossVectors(Kn,Zn),t=[ir.x,ir.y,ir.z],so(t,Oi,Fi,ki,nr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new O,new O,new O,new O,new O,new O,new O,new O],rn=new O,tr=new js,Oi=new O,Fi=new O,ki=new O,Kn=new O,Zn=new O,mi=new O,ys=new O,nr=new O,ir=new O,gi=new O;function so(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const hd=new js,Ms=new O,ro=new O;class Xa{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const t=Ms.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ro.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(ro)),this.expandByPoint(Ms.copy(e.center).sub(ro))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new O,oo=new O,sr=new O,Jn=new O,ao=new O,rr=new O,co=new O;class hh{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rn.copy(this.origin).addScaledVector(this.direction,t),Rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oo.copy(e).add(t).multiplyScalar(.5),sr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(oo);const r=e.distanceTo(t)*.5,o=-this.direction.dot(sr),a=Jn.dot(this.direction),c=-Jn.dot(sr),l=Jn.lengthSq(),u=Math.abs(1-o*o);let h,d,f,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(oo).addScaledVector(sr,d),f}intersectSphere(e,t){Rn.subVectors(e.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Rn)!==null}intersectTriangle(e,t,n,s,r){ao.subVectors(t,e),rr.subVectors(n,e),co.crossVectors(ao,rr);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const c=a*this.direction.dot(rr.crossVectors(Jn,rr));if(c<0)return null;const l=a*this.direction.dot(ao.cross(Jn));if(l<0||c+l>o)return null;const u=-a*Jn.dot(co);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m)}set(e,t,n,s,r,o,a,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),r=1/Bi.setFromMatrixColumn(e,1).length(),o=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-a*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*a,t[4]=g*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,f=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,dd)}lookAt(e,t,n){const s=this.elements;return qt.subVectors(e,t),qt.lengthSq()===0&&(qt.z=1),qt.normalize(),Qn.crossVectors(n,qt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?qt.x+=1e-4:qt.z+=1e-4,qt.normalize(),Qn.crossVectors(n,qt)),Qn.normalize(),or.crossVectors(qt,Qn),s[0]=Qn.x,s[4]=or.x,s[8]=qt.x,s[1]=Qn.y,s[5]=or.y,s[9]=qt.y,s[2]=Qn.z,s[6]=or.z,s[10]=qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],x=n[7],v=n[11],R=n[15],T=s[0],w=s[4],C=s[8],S=s[12],y=s[1],P=s[5],B=s[9],F=s[13],Y=s[2],j=s[6],X=s[10],Q=s[14],H=s[3],re=s[7],fe=s[11],me=s[15];return r[0]=o*T+a*y+c*Y+l*H,r[4]=o*w+a*P+c*j+l*re,r[8]=o*C+a*B+c*X+l*fe,r[12]=o*S+a*F+c*Q+l*me,r[1]=u*T+h*y+d*Y+f*H,r[5]=u*w+h*P+d*j+f*re,r[9]=u*C+h*B+d*X+f*fe,r[13]=u*S+h*F+d*Q+f*me,r[2]=g*T+_*y+m*Y+p*H,r[6]=g*w+_*P+m*j+p*re,r[10]=g*C+_*B+m*X+p*fe,r[14]=g*S+_*F+m*Q+p*me,r[3]=E*T+x*y+v*Y+R*H,r[7]=E*w+x*P+v*j+R*re,r[11]=E*C+x*B+v*X+R*fe,r[15]=E*S+x*F+v*Q+R*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-s*l*h-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+t*c*f-t*l*d+r*o*d-s*o*f+s*l*u-r*c*u)+m*(+t*l*h-t*a*f-r*o*h+n*o*f+r*a*u-n*l*u)+p*(-s*a*u-t*c*h+t*a*d+s*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=h*m*l-_*d*l+_*c*f-a*m*f-h*c*p+a*d*p,x=g*d*l-u*m*l-g*c*f+o*m*f+u*c*p-o*d*p,v=u*_*l-g*h*l+g*a*f-o*_*f-u*a*p+o*h*p,R=g*h*c-u*_*c-g*a*d+o*_*d+u*a*m-o*h*m,T=t*E+n*x+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return e[0]=E*w,e[1]=(_*d*r-h*m*r-_*s*f+n*m*f+h*s*p-n*d*p)*w,e[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*w,e[3]=(h*c*r-a*d*r-h*s*l+n*d*l+a*s*f-n*c*f)*w,e[4]=x*w,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*w,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*p-t*c*p)*w,e[7]=(o*d*r-u*c*r+u*s*l-t*d*l-o*s*f+t*c*f)*w,e[8]=v*w,e[9]=(g*h*r-u*_*r-g*n*f+t*_*f+u*n*p-t*h*p)*w,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*w,e[12]=R*w,e[13]=(u*_*s-g*h*s+g*n*d-t*_*d-u*n*m+t*h*m)*w,e[14]=(g*a*s-o*_*s-g*n*c+t*_*c+o*n*m-t*a*m)*w,e[15]=(o*h*s-u*a*s+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,g=r*h,_=o*u,m=o*h,p=a*h,E=c*l,x=c*u,v=c*h,R=n.x,T=n.y,w=n.z;return s[0]=(1-(_+p))*R,s[1]=(f+v)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+x)*w,s[9]=(m-E)*w,s[10]=(1-(d+_))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=Bi.set(s[0],s[1],s[2]).length();const o=Bi.set(s[4],s[5],s[6]).length(),a=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const l=1/r,u=1/o,h=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=kn){const c=this.elements,l=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),d=(n+s)/(n-s);let f,g;if(a===kn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Fr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=kn){const c=this.elements,l=1/(t-e),u=1/(n-s),h=1/(o-r),d=(t+e)*l,f=(n+s)*u;let g,_;if(a===kn)g=(o+r)*h,_=-2*h;else if(a===Fr)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new O,on=new _t,ud=new O(0,0,0),dd=new O(1,1,1),Qn=new O,or=new O,qt=new O,zc=new _t,Vc=new $s;class Sn{constructor(e=0,t=0,n=0,s=Sn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vc.setFromEuler(this),this.setFromQuaternion(Vc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sn.DEFAULT_ORDER="XYZ";class Ya{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fd=0;const Gc=new O,zi=new $s,Cn=new _t,ar=new O,Ss=new O,pd=new O,md=new $s,Hc=new O(1,0,0),Wc=new O(0,1,0),qc=new O(0,0,1),Xc={type:"added"},gd={type:"removed"},Vi={type:"childadded",child:null},lo={type:"childremoved",child:null};class Rt extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new O,t=new Sn,n=new $s,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new ke}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ya,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Wc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Wc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ss,ar,this.up):Cn.lookAt(ar,Ss,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(Cn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gd),lo.child=e,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),Vi.child=e,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,pd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,md,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Rt.DEFAULT_UP=new O(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new O,Pn=new O,ho=new O,Ln=new O,Gi=new O,Hi=new O,Yc=new O,uo=new O,fo=new O,po=new O,mo=new xt,go=new xt,_o=new xt;class ln{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){an.subVectors(s,t),Pn.subVectors(n,t),ho.subVectors(e,t);const o=an.dot(an),a=an.dot(Pn),c=an.dot(ho),l=Pn.dot(Pn),u=Pn.dot(ho),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(e,t),go.fromBufferAttribute(e,n),_o.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(e,t,n,s){return an.subVectors(n,t),Pn.subVectors(e,t),an.cross(Pn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),an.cross(Pn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Gi.subVectors(s,n),Hi.subVectors(r,n),uo.subVectors(e,n);const c=Gi.dot(uo),l=Hi.dot(uo);if(c<=0&&l<=0)return t.copy(n);fo.subVectors(e,s);const u=Gi.dot(fo),h=Hi.dot(fo);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Gi,o);po.subVectors(e,r);const f=Gi.dot(po),g=Hi.dot(po);if(g>=0&&f<=g)return t.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Hi,a);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Yc.subVectors(r,s),a=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Yc,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Gi,o).addScaledVector(Hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},cr={h:0,s:0,l:0};function vo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=qa(e,1),t=kt(t,0,1),n=kt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vo(o,r,e+1/3),this.g=vo(o,r,e),this.b=vo(o,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=uh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(kt(Lt.r*255,0,255))*65536+Math.round(kt(Lt.g*255,0,255))*256+Math.round(kt(Lt.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,s=Lt.g,r=Lt.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Yt){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,s=Lt.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(cr);const n=Ls(ei.h,cr.h,t),s=Ls(ei.s,cr.s,t),r=Ls(ei.l,cr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ee;Ee.NAMES=uh;let _d=0;class Ks extends fs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=ps(),this.name="",this.blending=Zi,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vt extends Ks{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new O,lr=new Ge;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Nt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),n=Nt(n,this.array),s=Nt(s,this.array),r=Nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pc&&(e.usage=this.usage),e}}class dh extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fh extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vd=0;const Jt=new _t,xo=new Rt,Wi=new O,Xt=new js,bs=new js,wt=new O;class jt extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ah(e)?fh:dh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ft(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Xt.min,bs.min),Xt.expandByPoint(wt),wt.addVectors(Xt.max,bs.max),Xt.expandByPoint(wt)):(Xt.expandByPoint(bs.min),Xt.expandByPoint(bs.max))}Xt.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)wt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(wt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)wt.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(e,l),wt.add(Wi)),s=Math.max(s,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new O,c[C]=new O;const l=new O,u=new O,h=new O,d=new Ge,f=new Ge,g=new Ge,_=new O,m=new O;function p(C,S,y){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,y),d.fromBufferAttribute(r,C),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(P),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(P),a[C].add(_),a[S].add(_),a[y].add(_),c[C].add(m),c[S].add(m),c[y].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,S=E.length;C<S;++C){const y=E[C],P=y.start,B=y.count;for(let F=P,Y=P+B;F<Y;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new O,v=new O,R=new O,T=new O;function w(C){R.fromBufferAttribute(s,C),T.copy(R);const S=a[C];x.copy(S),x.sub(R.multiplyScalar(R.dot(S))).normalize(),v.crossVectors(T,S);const P=v.dot(c[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,S=E.length;C<S;++C){const y=E[C],P=y.start,B=y.count;for(let F=P,Y=P+B;F<Y;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new yn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new _t,_i=new hh,hr=new Xa,jc=new O,ur=new O,dr=new O,fr=new O,yo=new O,pr=new O,Kc=new O,mr=new O;class G extends Rt{constructor(e=new jt,t=new Vt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){pr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(yo.fromBufferAttribute(h,e),o?pr.addScaledVector(yo,u):pr.addScaledVector(yo.sub(t),u))}t.add(pr)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(r),_i.copy(e.ray).recast(e.near),!(hr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(hr,jc)===null||_i.origin.distanceToSquared(jc)>(e.far-e.near)**2))&&($c.copy(r).invert(),_i.copy(e.ray).applyMatrix4($c),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,R=x;v<R;v+=3){const T=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);s=gr(this,p,e,n,l,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=a.getX(m),x=a.getX(m+1),v=a.getX(m+2);s=gr(this,o,e,n,l,u,h,E,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],E=Math.max(m.start,f.start),x=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,R=x;v<R;v+=3){const T=v,w=v+1,C=v+2;s=gr(this,p,e,n,l,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const E=m,x=m+1,v=m+2;s=gr(this,o,e,n,l,u,h,E,x,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function xd(i,e,t,n,s,r,o,a){let c;if(e.side===Ht?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===ui,a),c===null)return null;mr.copy(a),mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(mr);return l<t.near||l>t.far?null:{distance:l,point:mr.clone(),object:i}}function gr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,ur),i.getVertexPosition(c,dr),i.getVertexPosition(l,fr);const u=xd(i,e,t,n,ur,dr,fr,Kc);if(u){const h=new O;ln.getBarycoord(Kc,ur,dr,fr,h),s&&(u.uv=ln.getInterpolatedAttribute(s,a,c,l,h,new Ge)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,c,l,h,new Ge)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,c,l,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new O,materialIndex:0};ln.getNormal(ur,dr,fr,d.normal),u.face=d,u.barycoord=h}return u}class Ke extends jt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(_,m,p,E,x,v,R,T,w,C,S){const y=v/w,P=R/C,B=v/2,F=R/2,Y=T/2,j=w+1,X=C+1;let Q=0,H=0;const re=new O;for(let fe=0;fe<X;fe++){const me=fe*P-F;for(let Ne=0;Ne<j;Ne++){const et=Ne*y-B;re[_]=et*E,re[m]=me*x,re[p]=Y,l.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=T>0?1:-1,u.push(re.x,re.y,re.z),h.push(Ne/w),h.push(1-fe/C),Q+=1}}for(let fe=0;fe<C;fe++)for(let me=0;me<w;me++){const Ne=d+me+j*fe,et=d+me+j*(fe+1),$=d+(me+1)+j*(fe+1),te=d+(me+1)+j*fe;c.push(Ne,et,te),c.push(et,$,te),H+=6}a.addGroup(f,H,S),f+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function as(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=as(i[t]);for(const s in n)e[s]=n[s]}return e}function yd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ph(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Md={clone:as,merge:Ot};var Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Ks{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=as(e.uniforms),this.uniformsGroups=yd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mh extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new O,Zc=new Ge,Jc=new Ge;class Qt extends mh{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ks*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,Zc,Jc),t.subVectors(Jc,Zc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qi=-90,Xi=1;class Ed extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qt(qi,Xi,e,t);s.layers=this.layers,this.add(s);const r=new Qt(qi,Xi,e,t);r.layers=this.layers,this.add(r);const o=new Qt(qi,Xi,e,t);o.layers=this.layers,this.add(o);const a=new Qt(qi,Xi,e,t);a.layers=this.layers,this.add(a);const c=new Qt(qi,Xi,e,t);c.layers=this.layers,this.add(c);const l=new Qt(qi,Xi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gh extends Bt{constructor(e,t,n,s,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:is,super(e,t,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Td extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gh(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new di({name:"CubemapFromEquirect",uniforms:as(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:oi});r.uniforms.tEquirect.value=t;const o=new G(s,r),a=t.minFilter;return t.minFilter===wi&&(t.minFilter=vn),new Ed(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Mo=new O,wd=new O,Ad=new ke;class ni{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Mo.subVectors(n,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ad.getNormalMatrix(e),s=this.coplanarPoint(Mo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vi=new Xa,_r=new O;class $a{constructor(e=new ni,t=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],E=s[13],x=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+u,m+g,v+E).normalize(),n[3].setComponents(c-o,d-u,m-g,v-E).normalize(),n[4].setComponents(c-a,d-h,m-_,v-x).normalize(),t===kn)n[5].setComponents(c+a,d+h,m+_,v+x).normalize();else if(t===Fr)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(e){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(e.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _h(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Rd(i){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class qn extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,h=e/a,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-o;for(let x=0;x<l;x++){const v=x*h-r;g.push(v,-E,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){const x=E+l*p,v=E+l*(p+1),R=E+1+l*(p+1),T=E+1+l*p;f.push(x,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Od=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ef=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,of="gl_FragColor = linearToOutputTexel( gl_FragColor );",af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_f=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Af=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ff=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$f=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ep=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Op=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Fp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,em=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,am=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Cd,alphahash_pars_fragment:Pd,alphamap_fragment:Ld,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:Ud,aomap_fragment:Nd,aomap_pars_fragment:Od,batching_pars_vertex:Fd,batching_vertex:kd,begin_vertex:Bd,beginnormal_vertex:zd,bsdfs:Vd,iridescence_fragment:Gd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Xd,clipping_planes_vertex:Yd,color_fragment:$d,color_pars_fragment:jd,color_pars_vertex:Kd,color_vertex:Zd,common:Jd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:ef,displacementmap_pars_vertex:tf,displacementmap_vertex:nf,emissivemap_fragment:sf,emissivemap_pars_fragment:rf,colorspace_fragment:of,colorspace_pars_fragment:af,envmap_fragment:cf,envmap_common_pars_fragment:lf,envmap_pars_fragment:hf,envmap_pars_vertex:uf,envmap_physical_pars_fragment:Sf,envmap_vertex:df,fog_vertex:ff,fog_pars_vertex:pf,fog_fragment:mf,fog_pars_fragment:gf,gradientmap_pars_fragment:_f,lightmap_pars_fragment:vf,lights_lambert_fragment:xf,lights_lambert_pars_fragment:yf,lights_pars_begin:Mf,lights_toon_fragment:bf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Tf,lights_phong_pars_fragment:wf,lights_physical_fragment:Af,lights_physical_pars_fragment:Rf,lights_fragment_begin:Cf,lights_fragment_maps:Pf,lights_fragment_end:Lf,logdepthbuf_fragment:Df,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Uf,logdepthbuf_vertex:Nf,map_fragment:Of,map_pars_fragment:Ff,map_particle_fragment:kf,map_particle_pars_fragment:Bf,metalnessmap_fragment:zf,metalnessmap_pars_fragment:Vf,morphinstance_vertex:Gf,morphcolor_vertex:Hf,morphnormal_vertex:Wf,morphtarget_pars_vertex:qf,morphtarget_vertex:Xf,normal_fragment_begin:Yf,normal_fragment_maps:$f,normal_pars_fragment:jf,normal_pars_vertex:Kf,normal_vertex:Zf,normalmap_pars_fragment:Jf,clearcoat_normal_fragment_begin:Qf,clearcoat_normal_fragment_maps:ep,clearcoat_pars_fragment:tp,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:op,dithering_fragment:ap,dithering_pars_fragment:cp,roughnessmap_fragment:lp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:fp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:xp,specularmap_pars_fragment:yp,tonemapping_fragment:Mp,tonemapping_pars_fragment:Sp,transmission_fragment:bp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:wp,uv_vertex:Ap,worldpos_vertex:Rp,background_vert:Cp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Ip,cube_frag:Up,depth_vert:Np,depth_frag:Op,distanceRGBA_vert:Fp,distanceRGBA_frag:kp,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:Vp,linedashed_frag:Gp,meshbasic_vert:Hp,meshbasic_frag:Wp,meshlambert_vert:qp,meshlambert_frag:Xp,meshmatcap_vert:Yp,meshmatcap_frag:$p,meshnormal_vert:jp,meshnormal_frag:Kp,meshphong_vert:Zp,meshphong_frag:Jp,meshphysical_vert:Qp,meshphysical_frag:em,meshtoon_vert:tm,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:om,sprite_vert:am,sprite_frag:cm},oe={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},gn={basic:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ot([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ot([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ot([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ee(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ot([oe.points,oe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ot([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ot([oe.common,oe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ot([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ot([oe.sprite,oe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ot([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ot([oe.lights,oe.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};gn.physical={uniforms:Ot([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const vr={r:0,b:0,g:0},xi=new Sn,lm=new _t;function hm(i,e,t,n,s,r,o){const a=new Ee(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(E){let x=E.isScene===!0?E.background:null;return x&&x.isTexture&&(x=(E.backgroundBlurriness>0?t:e).get(x)),x}function _(E){let x=!1;const v=g(E);v===null?p(a,c):v&&v.isColor&&(p(v,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,x){const v=g(x);v&&(v.isCubeTexture||v.mapping===Wr)?(u===void 0&&(u=new G(new Ke(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:as(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xi.copy(x.backgroundRotation),xi.x*=-1,xi.y*=-1,xi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(xi)),u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,(h!==v||d!==v.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new G(new qn(2,2),new di({name:"BackgroundMaterial",uniforms:as(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(v.colorSpace)!==rt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function p(E,x){E.getRGB(vr,ph(i)),n.buffers.color.setClear(vr.r,vr.g,vr.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(E,x=1){a.set(E),c=x,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,p(a,c)},render:_,addToRenderList:m}}function um(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(y,P,B,F,Y){let j=!1;const X=h(F,B,P);r!==X&&(r=X,l(r.object)),j=f(y,F,B,Y),j&&g(y,F,B,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,v(y,P,B,F),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function h(y,P,B){const F=B.wireframe===!0;let Y=n[y.id];Y===void 0&&(Y={},n[y.id]=Y);let j=Y[P.id];j===void 0&&(j={},Y[P.id]=j);let X=j[F];return X===void 0&&(X=d(c()),j[F]=X),X}function d(y){const P=[],B=[],F=[];for(let Y=0;Y<t;Y++)P[Y]=0,B[Y]=0,F[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function f(y,P,B,F){const Y=r.attributes,j=P.attributes;let X=0;const Q=B.getAttributes();for(const H in Q)if(Q[H].location>=0){const fe=Y[H];let me=j[H];if(me===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(me=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(me=y.instanceColor)),fe===void 0||fe.attribute!==me||me&&fe.data!==me.data)return!0;X++}return r.attributesNum!==X||r.index!==F}function g(y,P,B,F){const Y={},j=P.attributes;let X=0;const Q=B.getAttributes();for(const H in Q)if(Q[H].location>=0){let fe=j[H];fe===void 0&&(H==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),H==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const me={};me.attribute=fe,fe&&fe.data&&(me.data=fe.data),Y[H]=me,X++}r.attributes=Y,r.attributesNum=X,r.index=F}function _(){const y=r.newAttributes;for(let P=0,B=y.length;P<B;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const B=r.newAttributes,F=r.enabledAttributes,Y=r.attributeDivisors;B[y]=1,F[y]===0&&(i.enableVertexAttribArray(y),F[y]=1),Y[y]!==P&&(i.vertexAttribDivisor(y,P),Y[y]=P)}function E(){const y=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==y[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function x(y,P,B,F,Y,j,X){X===!0?i.vertexAttribIPointer(y,P,B,Y,j):i.vertexAttribPointer(y,P,B,F,Y,j)}function v(y,P,B,F){_();const Y=F.attributes,j=B.getAttributes(),X=P.defaultAttributeValues;for(const Q in j){const H=j[Q];if(H.location>=0){let re=Y[Q];if(re===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),re!==void 0){const fe=re.normalized,me=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const et=Ne.buffer,$=Ne.type,te=Ne.bytesPerElement,Me=$===i.INT||$===i.UNSIGNED_INT||re.gpuType===Ba;if(re.isInterleavedBufferAttribute){const ce=re.data,Pe=ce.stride,Ue=re.offset;if(ce.isInstancedInterleavedBuffer){for(let He=0;He<H.locationSize;He++)p(H.location+He,ce.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let He=0;He<H.locationSize;He++)m(H.location+He);i.bindBuffer(i.ARRAY_BUFFER,et);for(let He=0;He<H.locationSize;He++)x(H.location+He,me/H.locationSize,$,fe,Pe*te,(Ue+me/H.locationSize*He)*te,Me)}else{if(re.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce,re.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,et);for(let ce=0;ce<H.locationSize;ce++)x(H.location+ce,me/H.locationSize,$,fe,me*te,me/H.locationSize*ce*te,Me)}}else if(X!==void 0){const fe=X[Q];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(H.location,fe);break;case 3:i.vertexAttrib3fv(H.location,fe);break;case 4:i.vertexAttrib4fv(H.location,fe);break;default:i.vertexAttrib1fv(H.location,fe)}}}}E()}function R(){C();for(const y in n){const P=n[y];for(const B in P){const F=P[B];for(const Y in F)u(F[Y].object),delete F[Y];delete P[B]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const B in P){const F=P[B];for(const Y in F)u(F[Y].object),delete F[Y];delete P[B]}delete n[y.id]}function w(y){for(const P in n){const B=n[P];if(B[y.id]===void 0)continue;const F=B[y.id];for(const Y in F)u(F[Y].object),delete F[Y];delete B[y.id]}}function C(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function dm(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==hn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Wn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Fn&&!C)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function pm(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new ni,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,x=E*4;let v=p.clippingState||null;c.value=v,v=u(g,d,x,f);for(let R=0;R!==x;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,v=f;x!==_;++x,v+=4)o.copy(h[x]).applyMatrix4(E,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function mm(i){let e=new WeakMap;function t(o,a){return a===Zo?o.mapping=is:a===Jo&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zo||a===Jo)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Td(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vh extends mh{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ki=4,Qc=[.125,.215,.35,.446,.526,.582],Ei=20,So=new vh,el=new Ee;let bo=null,Eo=0,To=0,wo=!1;const Si=(1+Math.sqrt(5))/2,Yi=1/Si,tl=[new O(-Si,Yi,0),new O(Si,Yi,0),new O(-Yi,0,Si),new O(Yi,0,Si),new O(0,Si,-Yi),new O(0,Si,Yi),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class nl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,Eo,To),this._renderer.xr.enabled=wo,e.scissorTest=!1,xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Ys,format:hn,colorSpace:ds,depthBuffer:!1},s=il(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=_m(r,e,t)}return s}_compileMaterial(e){const t=new G(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,n,s){const a=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(el),u.toneMapping=ai,u.autoClear=!1;const f=new Vt({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new G(new Ke,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(el),_=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):E===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const x=this._cubeSize;xr(s,E*x,p>2?x:0,x,x),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===is||e.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new G(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;xr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,So)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tl[(s-r-1)%tl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new G(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ei-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):Ei;m>Ei&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ei}`);const p=[];let E=0;for(let w=0;w<Ei;++w){const C=w/_,S=Math.exp(-C*C/2);p.push(S),w===0?E+=S:w<m&&(E+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-n;const v=this._sizeLods[s],R=3*v*(s>x-Ki?s-x+Ki:0),T=4*(this._cubeSize-v);xr(t,R,T,3*v,2*v),c.setRenderTarget(t),c.render(h,So)}}function gm(i){const e=[],t=[],n=[];let s=i;const r=i-Ki+1+Qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Ki?c=Qc[o-i+Ki-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*f),x=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const w=T%3*2/3-1,C=T>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];E.set(S,_*g*T),x.set(d,m*g*T);const y=[T,T,T,T,T,T];v.set(y,p*g*T)}const R=new jt;R.setAttribute("position",new yn(E,_)),R.setAttribute("uv",new yn(x,m)),R.setAttribute("faceIndex",new yn(v,p)),e.push(R),s>Ki&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function il(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _m(i,e,t){const n=new Float32Array(Ei),s=new O(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:Ei,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function sl(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function rl(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vm(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Zo||c===Jo,u=c===is||c===ss;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nl(i)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const f=a.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new nl(i)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function xm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,e,t,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],i.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const E=f.array;_=f.version;for(let x=0,v=E.length;x<v;x+=3){const R=E[x+0],T=E[x+1],w=E[x+2];d.push(R,T,T,w,w,R)}}else if(g!==void 0){const E=g.array;_=g.version;for(let x=0,v=E.length/3-1;x<v;x+=3){const R=x+0,T=x+1,w=x+2;d.push(R,T,T,w,w,R)}}else return;const m=new(ah(d)?fh:dh)(d,1);m.version=_;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Mm(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=f[E]*_[E];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function bm(i,e,t){const n=new WeakMap,s=new xt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let y=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var f=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,T=1;R>e.maxTextureSize&&(T=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const w=new Float32Array(R*T*4*h),C=new lh(w,R,T,h);C.type=Fn,C.needsUpdate=!0;const S=v*4;for(let P=0;P<h;P++){const B=p[P],F=E[P],Y=x[P],j=R*T*4*P;for(let X=0;X<B.count;X++){const Q=X*S;g===!0&&(s.fromBufferAttribute(B,X),w[j+Q+0]=s.x,w[j+Q+1]=s.y,w[j+Q+2]=s.z,w[j+Q+3]=0),_===!0&&(s.fromBufferAttribute(F,X),w[j+Q+4]=s.x,w[j+Q+5]=s.y,w[j+Q+6]=s.z,w[j+Q+7]=0),m===!0&&(s.fromBufferAttribute(Y,X),w[j+Q+8]=s.x,w[j+Q+9]=s.y,w[j+Q+10]=s.z,w[j+Q+11]=Y.itemSize===4?s.w:1)}}d={count:h,texture:C,size:new Ge(R,T)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Em(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class xh extends Bt{constructor(e,t,n,s,r,o,a,c,l,u=Ji){if(u!==Ji&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ji&&(n=Ci),n===void 0&&u===os&&(n=rs),super(null,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const yh=new Bt,ol=new xh(1,1),Mh=new lh,Sh=new ld,bh=new gh,al=[],cl=[],ll=new Float32Array(16),hl=new Float32Array(9),ul=new Float32Array(4);function ms(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=al[s];if(r===void 0&&(r=new Float32Array(s),al[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Xr(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Cm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;ul.set(n),i.uniformMatrix2fv(this.addr,!1,ul),Tt(t,n)}}function Pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),Tt(t,n)}}function Lm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;ll.set(n),i.uniformMatrix4fv(this.addr,!1,ll),Tt(t,n)}}function Dm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Im(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Um(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Bm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function zm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=oh,r=ol):r=yh,t.setTexture2D(e||r,s)}function Vm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Sh,s)}function Gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bh,s)}function Hm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Mh,s)}function Wm(i){switch(i){case 5126:return Tm;case 35664:return wm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Om;case 36294:return Fm;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function qm(i,e){i.uniform1fv(this.addr,e)}function Xm(i,e){const t=ms(e,this.size,2);i.uniform2fv(this.addr,t)}function Ym(i,e){const t=ms(e,this.size,3);i.uniform3fv(this.addr,t)}function $m(i,e){const t=ms(e,this.size,4);i.uniform4fv(this.addr,t)}function jm(i,e){const t=ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Km(i,e){const t=ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Zm(i,e){const t=ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Jm(i,e){i.uniform1iv(this.addr,e)}function Qm(i,e){i.uniform2iv(this.addr,e)}function e0(i,e){i.uniform3iv(this.addr,e)}function t0(i,e){i.uniform4iv(this.addr,e)}function n0(i,e){i.uniform1uiv(this.addr,e)}function i0(i,e){i.uniform2uiv(this.addr,e)}function s0(i,e){i.uniform3uiv(this.addr,e)}function r0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yh,r[o])}function a0(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Sh,r[o])}function c0(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||bh,r[o])}function l0(i,e,t){const n=this.cache,s=e.length,r=Xr(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Mh,r[o])}function h0(i){switch(i){case 5126:return qm;case 35664:return Xm;case 35665:return Ym;case 35666:return $m;case 35674:return jm;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return l0}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wm(t.type)}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function p0(i,e,t){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){dl(t,l===void 0?new u0(a,i,e):new d0(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new f0(a),dl(t,h)),t=h}}}class Pr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);p0(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const m0=37297;let g0=0;function _0(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const pl=new ke;function v0(i){Ze._getMatrix(pl,Ze.workingColorSpace,i);const e=`mat3( ${pl.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case qr:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ml(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_0(i.getShaderSource(e),o)}else return s}function x0(i,e){const t=v0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y0(i,e){let t;switch(e){case Mu:t="Linear";break;case Su:t="Reinhard";break;case bu:t="Cineon";break;case Yl:t="ACESFilmic";break;case Tu:t="AgX";break;case wu:t="Neutral";break;case Eu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new O;function M0(){Ze.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function S0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function b0(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function E0(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Rs(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _l(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const T0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(i){return i.replace(T0,A0)}const w0=new Map;function A0(i,e){let t=ze[e];if(t===void 0){const n=w0.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Aa(t)}const R0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vl(i){return i.replace(R0,C0)}function C0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Wl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ql?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(e="SHADOWMAP_TYPE_VSM"),e}function L0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:e="ENVMAP_TYPE_CUBE";break;case Wr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:e="ENVMAP_MODE_REFRACTION";break}return e}function I0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:e="ENVMAP_BLENDING_MULTIPLY";break;case xu:e="ENVMAP_BLENDING_MIX";break;case yu:e="ENVMAP_BLENDING_ADD";break}return e}function U0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function N0(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=P0(t),l=L0(t),u=D0(t),h=I0(t),d=U0(t),f=S0(t),g=b0(r),_=s.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[xl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?ze.tonemapping_pars_fragment:"",t.toneMapping!==ai?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),M0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Aa(o),o=gl(o,t),o=_l(o,t),a=Aa(a),a=gl(a,t),a=_l(a,t),o=vl(o),a=vl(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=E+m+o,v=E+p+a,R=fl(s,s.VERTEX_SHADER,x),T=fl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,R),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(T).trim();let j=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const Q=ml(s,R,"vertex"),H=ml(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Q+`
`+H)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||Y==="")&&(X=!1);X&&(P.diagnostics={runnable:j,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(R),s.deleteShader(T),C=new Pr(s,_),S=E0(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,m0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let O0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new k0(e),t.set(e,n)),n}}class k0{constructor(e){this.id=O0++,this.code=e,this.usedTimes=0}}function B0(i,e,t,n,s,r,o){const a=new Ya,c=new F0,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,y,P,B,F){const Y=B.fog,j=F.geometry,X=S.isMeshStandardMaterial?B.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),H=Q&&Q.mapping===Wr?Q.image.height:null,re=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,me=fe!==void 0?fe.length:0;let Ne=0;j.morphAttributes.position!==void 0&&(Ne=1),j.morphAttributes.normal!==void 0&&(Ne=2),j.morphAttributes.color!==void 0&&(Ne=3);let et,$,te,Me;if(re){const st=gn[re];et=st.vertexShader,$=st.fragmentShader}else et=S.vertexShader,$=S.fragmentShader,c.update(S),te=c.getVertexShaderID(S),Me=c.getFragmentShaderID(S);const ce=i.getRenderTarget(),Pe=i.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,He=F.isBatchedMesh===!0,mt=!!S.map,$e=!!S.matcap,Mt=!!Q,N=!!S.aoMap,Kt=!!S.lightMap,qe=!!S.bumpMap,Xe=!!S.normalMap,we=!!S.displacementMap,ct=!!S.emissiveMap,Te=!!S.metalnessMap,A=!!S.roughnessMap,M=S.anisotropy>0,k=S.clearcoat>0,Z=S.dispersion>0,ee=S.iridescence>0,K=S.sheen>0,Se=S.transmission>0,le=M&&!!S.anisotropyMap,pe=k&&!!S.clearcoatMap,je=k&&!!S.clearcoatNormalMap,ne=k&&!!S.clearcoatRoughnessMap,ge=ee&&!!S.iridescenceMap,Re=ee&&!!S.iridescenceThicknessMap,Le=K&&!!S.sheenColorMap,_e=K&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Be=!!S.specularColorMap,ot=!!S.specularIntensityMap,D=Se&&!!S.transmissionMap,ae=Se&&!!S.thicknessMap,W=!!S.gradientMap,J=!!S.alphaMap,de=S.alphaTest>0,he=!!S.alphaHash,Oe=!!S.extensions;let vt=ai;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(vt=i.toneMapping);const Ct={shaderID:re,shaderType:S.type,shaderName:S.name,vertexShader:et,fragmentShader:$,defines:S.defines,customVertexShaderID:te,customFragmentShaderID:Me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:He,batchingColor:He&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ds,alphaToCoverage:!!S.alphaToCoverage,map:mt,matcap:$e,envMap:Mt,envMapMode:Mt&&Q.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:Kt,bumpMap:qe,normalMap:Xe,displacementMap:d&&we,emissiveMap:ct,normalMapObjectSpace:Xe&&S.normalMapType===Pu,normalMapTangentSpace:Xe&&S.normalMapType===rh,metalnessMap:Te,roughnessMap:A,anisotropy:M,anisotropyMap:le,clearcoat:k,clearcoatMap:pe,clearcoatNormalMap:je,clearcoatRoughnessMap:ne,dispersion:Z,iridescence:ee,iridescenceMap:ge,iridescenceThicknessMap:Re,sheen:K,sheenColorMap:Le,sheenRoughnessMap:_e,specularMap:Ye,specularColorMap:Be,specularIntensityMap:ot,transmission:Se,transmissionMap:D,thicknessMap:ae,gradientMap:W,opaque:S.transparent===!1&&S.blending===Zi&&S.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:he,combine:S.combine,mapUv:mt&&_(S.map.channel),aoMapUv:N&&_(S.aoMap.channel),lightMapUv:Kt&&_(S.lightMap.channel),bumpMapUv:qe&&_(S.bumpMap.channel),normalMapUv:Xe&&_(S.normalMap.channel),displacementMapUv:we&&_(S.displacementMap.channel),emissiveMapUv:ct&&_(S.emissiveMap.channel),metalnessMapUv:Te&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:le&&_(S.anisotropyMap.channel),clearcoatMapUv:pe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:_e&&_(S.sheenRoughnessMap.channel),specularMapUv:Ye&&_(S.specularMap.channel),specularColorMapUv:Be&&_(S.specularColorMap.channel),specularIntensityMapUv:ot&&_(S.specularIntensityMap.channel),transmissionMapUv:D&&_(S.transmissionMap.channel),thicknessMapUv:ae&&_(S.thicknessMap.channel),alphaMapUv:J&&_(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Xe||M),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!j.attributes.uv&&(mt||J),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Pe,skinning:F.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Ne,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:vt,decodeVideoTexture:mt&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:ct&&S.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===tn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Oe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&S.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function p(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)y.push(P),y.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(E(y,S),x(y,S),y.push(i.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function E(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const y=g[S.type];let P;if(y){const B=gn[y];P=Md.clone(B.uniforms)}else P=S.uniforms;return P}function R(S,y){let P;for(let B=0,F=u.length;B<F;B++){const Y=u[B];if(Y.cacheKey===y){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new N0(i,y,S,r),u.push(P)),P}function T(S){if(--S.usedTimes===0){const y=u.indexOf(S);u[y]=u[u.length-1],u.pop(),S.destroy()}}function w(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function z0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function V0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ml(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=o(h,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||V0),n.length>1&&n.sort(d||yl),s.length>1&&s.sort(d||yl)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:u,sort:l}}function G0(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ml,i.set(n,[o])):s>=r.length?(o=new Ml,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function H0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ee};break;case"SpotLight":t={position:new O,direction:new O,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function W0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let q0=0;function X0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Y0(i){const e=new H0,t=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new O);const s=new O,r=new _t,o=new _t;function a(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,E=0,x=0,v=0,R=0,T=0,w=0;l.sort(X0);for(let S=0,y=l.length;S<y;S++){const P=l[S],B=P.color,F=P.intensity,Y=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*F,h+=B.g*F,d+=B.b*F;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],F);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=P.shadow.matrix,E++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(B).multiplyScalar(F),X.distance=Y,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[_]=X;const Q=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,Q.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=j,v++}_++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(B).multiplyScalar(F),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(F),X.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==E||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=E,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=w,n.version=q0++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=l.length;p<E;p++){const x=l[p];if(x.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(x.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),d++}else if(x.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function Sl(i){const e=new Y0(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function $0(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Sl(i),e.set(s,[a])):r>=o.length?(a=new Sl(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class j0 extends Ks{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K0 extends Ks{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q0(i,e,t){let n=new $a;const s=new Ge,r=new Ge,o=new xt,a=new j0({depthPacking:Cu}),c=new K0,l={},u=t.maxTextureSize,h={[ui]:Ht,[Ht]:ui,[tn]:tn},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Z0,fragmentShader:J0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new G(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),y=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=p!==Dn&&this.type===Dn,Y=p===Dn&&this.type!==Dn;for(let j=0,X=T.length;j<X;j++){const Q=T[j],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const re=H.getFrameExtents();if(s.multiply(re),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,H.mapSize.y=r.y)),H.map===null||F===!0||Y===!0){const me=this.type!==Dn?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new Pi(s.x,s.y,me),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const fe=H.getViewportCount();for(let me=0;me<fe;me++){const Ne=H.getViewport(me);o.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),B.viewport(o),H.updateMatrices(Q,me),n=H.getFrustum(),v(w,C,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Dn&&E(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,y,P)};function E(T,w){const C=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,C,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,C,f,_,null)}function x(T,w,C,S){let y=null;const P=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)y=P;else if(y=C.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=y.uuid,F=w.uuid;let Y=l[B];Y===void 0&&(Y={},l[B]=Y);let j=Y[F];j===void 0&&(j=y.clone(),Y[F]=j,w.addEventListener("dispose",R)),y=j}if(y.visible=w.visible,y.wireframe=w.wireframe,S===Dn?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,C.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=C}return y}function v(T,w,C,S,y){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Dn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const F=e.update(T),Y=T.material;if(Array.isArray(Y)){const j=F.groups;for(let X=0,Q=j.length;X<Q;X++){const H=j[X],re=Y[H.materialIndex];if(re&&re.visible){const fe=x(T,re,S,y);T.onBeforeShadow(i,T,w,C,F,fe,H),i.renderBufferDirect(C,null,F,fe,T,H),T.onAfterShadow(i,T,w,C,F,fe,H)}}}else if(Y.visible){const j=x(T,Y,S,y);T.onBeforeShadow(i,T,w,C,F,j,null),i.renderBufferDirect(C,null,F,j,T,null),T.onAfterShadow(i,T,w,C,F,j,null)}}const B=T.children;for(let F=0,Y=B.length;F<Y;F++)v(B[F],w,C,S,y)}function R(T){T.target.removeEventListener("dispose",R);for(const C in l){const S=l[C],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const eg={[Wo]:qo,[Xo]:jo,[Yo]:Ko,[ns]:$o,[qo]:Wo,[jo]:Xo,[Ko]:Yo,[$o]:ns};function tg(i,e){function t(){let D=!1;const ae=new xt;let W=null;const J=new xt(0,0,0,0);return{setMask:function(de){W!==de&&!D&&(i.colorMask(de,de,de,de),W=de)},setLocked:function(de){D=de},setClear:function(de,he,Oe,vt,Ct){Ct===!0&&(de*=vt,he*=vt,Oe*=vt),ae.set(de,he,Oe,vt),J.equals(ae)===!1&&(i.clearColor(de,he,Oe,vt),J.copy(ae))},reset:function(){D=!1,W=null,J.set(-1,0,0,0)}}}function n(){let D=!1,ae=!1,W=null,J=null,de=null;return{setReversed:function(he){if(ae!==he){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const vt=de;de=null,this.setClear(vt)}ae=he},getReversed:function(){return ae},setTest:function(he){he?ce(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(he){W!==he&&!D&&(i.depthMask(he),W=he)},setFunc:function(he){if(ae&&(he=eg[he]),J!==he){switch(he){case Wo:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Yo:i.depthFunc(i.EQUAL);break;case $o:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=he}},setLocked:function(he){D=he},setClear:function(he){de!==he&&(ae&&(he=1-he),i.clearDepth(he),de=he)},reset:function(){D=!1,W=null,J=null,de=null,ae=!1}}}function s(){let D=!1,ae=null,W=null,J=null,de=null,he=null,Oe=null,vt=null,Ct=null;return{setTest:function(st){D||(st?ce(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(st){ae!==st&&!D&&(i.stencilMask(st),ae=st)},setFunc:function(st,nn,Tn){(W!==st||J!==nn||de!==Tn)&&(i.stencilFunc(st,nn,Tn),W=st,J=nn,de=Tn)},setOp:function(st,nn,Tn){(he!==st||Oe!==nn||vt!==Tn)&&(i.stencilOp(st,nn,Tn),he=st,Oe=nn,vt=Tn)},setLocked:function(st){D=st},setClear:function(st){Ct!==st&&(i.clearStencil(st),Ct=st)},reset:function(){D=!1,ae=null,W=null,J=null,de=null,he=null,Oe=null,vt=null,Ct=null}}}const r=new t,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,x=null,v=null,R=null,T=null,w=new Ee(0,0,0),C=0,S=!1,y=null,P=null,B=null,F=null,Y=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),X=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),X=Q>=2);let re=null,fe={};const me=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),et=new xt().fromArray(me),$=new xt().fromArray(Ne);function te(D,ae,W,J){const de=new Uint8Array(4),he=i.createTexture();i.bindTexture(D,he),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ae,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(ae+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return he}const Me={};Me[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),Me[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Me[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ce(i.DEPTH_TEST),o.setFunc(ns),qe(!1),Xe(Tc),ce(i.CULL_FACE),N(oi);function ce(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Pe(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Ue(D,ae){return h[D]!==ae?(i.bindFramebuffer(D,ae),h[D]=ae,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ae),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ae),!0):!1}function He(D,ae){let W=f,J=!1;if(D){W=d.get(ae),W===void 0&&(W=[],d.set(ae,W));const de=D.textures;if(W.length!==de.length||W[0]!==i.COLOR_ATTACHMENT0){for(let he=0,Oe=de.length;he<Oe;he++)W[he]=i.COLOR_ATTACHMENT0+he;W.length=de.length,J=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,J=!0);J&&i.drawBuffers(W)}function mt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const $e={[bi]:i.FUNC_ADD,[nu]:i.FUNC_SUBTRACT,[iu]:i.FUNC_REVERSE_SUBTRACT};$e[su]=i.MIN,$e[ru]=i.MAX;const Mt={[ou]:i.ZERO,[au]:i.ONE,[cu]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[pu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[hu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[fu]:i.ONE_MINUS_DST_COLOR,[uu]:i.ONE_MINUS_DST_ALPHA,[mu]:i.CONSTANT_COLOR,[gu]:i.ONE_MINUS_CONSTANT_COLOR,[_u]:i.CONSTANT_ALPHA,[vu]:i.ONE_MINUS_CONSTANT_ALPHA};function N(D,ae,W,J,de,he,Oe,vt,Ct,st){if(D===oi){_===!0&&(Pe(i.BLEND),_=!1);return}if(_===!1&&(ce(i.BLEND),_=!0),D!==tu){if(D!==m||st!==S){if((p!==bi||v!==bi)&&(i.blendEquation(i.FUNC_ADD),p=bi,v=bi),st)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,x=null,R=null,T=null,w.set(0,0,0),C=0,m=D,S=st}return}de=de||ae,he=he||W,Oe=Oe||J,(ae!==p||de!==v)&&(i.blendEquationSeparate($e[ae],$e[de]),p=ae,v=de),(W!==E||J!==x||he!==R||Oe!==T)&&(i.blendFuncSeparate(Mt[W],Mt[J],Mt[he],Mt[Oe]),E=W,x=J,R=he,T=Oe),(vt.equals(w)===!1||Ct!==C)&&(i.blendColor(vt.r,vt.g,vt.b,Ct),w.copy(vt),C=Ct),m=D,S=!1}function Kt(D,ae){D.side===tn?Pe(i.CULL_FACE):ce(i.CULL_FACE);let W=D.side===Ht;ae&&(W=!W),qe(W),D.blending===Zi&&D.transparent===!1?N(oi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ct(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){y!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),y=D)}function Xe(D){D!==Qh?(ce(i.CULL_FACE),D!==P&&(D===Tc?i.cullFace(i.BACK):D===eu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),P=D}function we(D){D!==B&&(X&&i.lineWidth(D),B=D)}function ct(D,ae,W){D?(ce(i.POLYGON_OFFSET_FILL),(F!==ae||Y!==W)&&(i.polygonOffset(ae,W),F=ae,Y=W)):Pe(i.POLYGON_OFFSET_FILL)}function Te(D){D?ce(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+j-1),re!==D&&(i.activeTexture(D),re=D)}function M(D,ae,W){W===void 0&&(re===null?W=i.TEXTURE0+j-1:W=re);let J=fe[W];J===void 0&&(J={type:void 0,texture:void 0},fe[W]=J),(J.type!==D||J.texture!==ae)&&(re!==W&&(i.activeTexture(W),re=W),i.bindTexture(D,ae||Me[D]),J.type=D,J.texture=ae)}function k(){const D=fe[re];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){et.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),et.copy(D))}function _e(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Ye(D,ae){let W=l.get(ae);W===void 0&&(W=new WeakMap,l.set(ae,W));let J=W.get(D);J===void 0&&(J=i.getUniformBlockIndex(ae,D.name),W.set(D,J))}function Be(D,ae){const J=l.get(ae).get(D);c.get(ae)!==J&&(i.uniformBlockBinding(ae,J,D.__bindingPointIndex),c.set(ae,J))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},re=null,fe={},h={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,E=null,x=null,v=null,R=null,T=null,w=new Ee(0,0,0),C=0,S=!1,y=null,P=null,B=null,F=null,Y=null,et.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ce,disable:Pe,bindFramebuffer:Ue,drawBuffers:He,useProgram:mt,setBlending:N,setMaterial:Kt,setFlipSided:qe,setCullFace:Xe,setLineWidth:we,setPolygonOffset:ct,setScissorTest:Te,activeTexture:A,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:ge,texImage3D:Re,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:ne,texSubImage2D:K,texSubImage3D:Se,compressedTexSubImage2D:le,compressedTexSubImage3D:pe,scissor:Le,viewport:_e,reset:ot}}function bl(i,e,t,n){const s=ng(n);switch(t){case Jl:return i*e;case eh:return i*e;case th:return i*e*2;case nh:return i*e/s.components*s.byteLength;case Ga:return i*e/s.components*s.byteLength;case ih:return i*e*2/s.components*s.byteLength;case Ha:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case hn:return i*e*4/s.components*s.byteLength;case Wa:return i*e*4/s.components*s.byteLength;case Tr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ar:case Rr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case na:case sa:return Math.max(i,16)*Math.max(e,8)/4;case ta:case ia:return Math.max(i,8)*Math.max(e,8)/2;case ra:case oa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ha:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ua:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ga:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case _a:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case va:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ya:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ma:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Cr:case Sa:case ba:return Math.ceil(i/4)*Math.ceil(e/4)*16;case sh:case Ea:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ta:case wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ng(i){switch(i){case Wn:case jl:return{byteLength:1,components:1};case Fs:case Kl:case Ys:return{byteLength:2,components:1};case za:case Va:return{byteLength:2,components:4};case Ci:case Ba:case Fn:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ig(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ge,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):kr("canvas")}function _(A,M,k){let Z=1;const ee=Te(A);if((ee.width>k||ee.height>k)&&(Z=k/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*ee.width),Se=Math.floor(Z*ee.height);h===void 0&&(h=g(K,Se));const le=M?g(K,Se):h;return le.width=K,le.height=Se,le.getContext("2d").drawImage(A,0,0,K,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+K+"x"+Se+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,M,k,Z,ee=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=M;if(M===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),M===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),M===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const Se=ee?qr:Ze.getTransfer(Z);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=Se===rt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function v(A,M){let k;return A?M===null||M===Ci||M===rs?k=i.DEPTH24_STENCIL8:M===Fn?k=i.DEPTH32F_STENCIL8:M===Fs&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===rs?k=i.DEPTH_COMPONENT24:M===Fn?k=i.DEPTH_COMPONENT32F:M===Fs&&(k=i.DEPTH_COMPONENT16),k}function R(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==vn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),C(M),M.isVideoTexture&&u.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),y(M)}function C(A){const M=n.get(A);if(M.__webglInit===void 0)return;const k=A.source,Z=d.get(k);if(Z){const ee=Z[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&S(A),Object.keys(Z).length===0&&d.delete(k)}n.remove(A)}function S(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const k=A.source,Z=d.get(k);delete Z[M.__cacheKey],o.memory.textures--}function y(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let ee=0;ee<M.__webglFramebuffer[Z].length;ee++)i.deleteFramebuffer(M.__webglFramebuffer[Z][ee]);else i.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)i.deleteFramebuffer(M.__webglFramebuffer[Z]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=A.textures;for(let Z=0,ee=k.length;Z<ee;Z++){const K=n.get(k[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(k[Z])}n.remove(A)}let P=0;function B(){P=0}function F(){const A=P;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),P+=1,A}function Y(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function j(A,M){const k=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(k,A,M);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+M)}function X(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+M)}function Q(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){$(k,A,M);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+M)}function H(A,M){const k=n.get(A);if(A.version>0&&k.__version!==A.version){te(k,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+M)}const re={[Qo]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},fe={[un]:i.NEAREST,[Au]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},me={[Lu]:i.NEVER,[Fu]:i.ALWAYS,[Du]:i.LESS,[oh]:i.LEQUAL,[Iu]:i.EQUAL,[Ou]:i.GEQUAL,[Uu]:i.GREATER,[Nu]:i.NOTEQUAL};function Ne(A,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===vn||M.magFilter===eo||M.magFilter===er||M.magFilter===wi||M.minFilter===vn||M.minFilter===eo||M.minFilter===er||M.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,re[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,re[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,re[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,me[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==er&&M.minFilter!==wi||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function et(A,M){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const Z=M.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const K=Y(M);if(K!==A.__cacheKey){ee[K]===void 0&&(ee[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[K].usedTimes++;const Se=ee[A.__cacheKey];Se!==void 0&&(ee[A.__cacheKey].usedTimes--,Se.usedTimes===0&&S(M)),A.__cacheKey=K,A.__webglTexture=ee[K].texture}return k}function $(A,M,k){let Z=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=i.TEXTURE_3D);const ee=et(A,M),K=M.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+k);const Se=n.get(K);if(K.version!==Se.__version||ee===!0){t.activeTexture(i.TEXTURE0+k);const le=Ze.getPrimaries(Ze.workingColorSpace),pe=M.colorSpace===ii?null:Ze.getPrimaries(M.colorSpace),je=M.colorSpace===ii||le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ne=_(M.image,!1,s.maxTextureSize);ne=ct(M,ne);const ge=r.convert(M.format,M.colorSpace),Re=r.convert(M.type);let Le=x(M.internalFormat,ge,Re,M.colorSpace,M.isVideoTexture);Ne(Z,M);let _e;const Ye=M.mipmaps,Be=M.isVideoTexture!==!0,ot=Se.__version===void 0||ee===!0,D=K.dataReady,ae=R(M,ne);if(M.isDepthTexture)Le=v(M.format===os,M.type),ot&&(Be?t.texStorage2D(i.TEXTURE_2D,1,Le,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,ge,Re,null));else if(M.isDataTexture)if(Ye.length>0){Be&&ot&&t.texStorage2D(i.TEXTURE_2D,ae,Le,Ye[0].width,Ye[0].height);for(let W=0,J=Ye.length;W<J;W++)_e=Ye[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Re,_e.data):t.texImage2D(i.TEXTURE_2D,W,Le,_e.width,_e.height,0,ge,Re,_e.data);M.generateMipmaps=!1}else Be?(ot&&t.texStorage2D(i.TEXTURE_2D,ae,Le,ne.width,ne.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Re,ne.data)):t.texImage2D(i.TEXTURE_2D,0,Le,ne.width,ne.height,0,ge,Re,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Le,Ye[0].width,Ye[0].height,ne.depth);for(let W=0,J=Ye.length;W<J;W++)if(_e=Ye[W],M.format!==hn)if(ge!==null)if(Be){if(D)if(M.layerUpdates.size>0){const de=bl(_e.width,_e.height,M.format,M.type);for(const he of M.layerUpdates){const Oe=_e.data.subarray(he*de/_e.data.BYTES_PER_ELEMENT,(he+1)*de/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,he,_e.width,_e.height,1,ge,Oe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ne.depth,ge,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,Le,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,_e.width,_e.height,ne.depth,ge,Re,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,Le,_e.width,_e.height,ne.depth,0,ge,Re,_e.data)}else{Be&&ot&&t.texStorage2D(i.TEXTURE_2D,ae,Le,Ye[0].width,Ye[0].height);for(let W=0,J=Ye.length;W<J;W++)_e=Ye[W],M.format!==hn?ge!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,W,Le,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,_e.width,_e.height,ge,Re,_e.data):t.texImage2D(i.TEXTURE_2D,W,Le,_e.width,_e.height,0,ge,Re,_e.data)}else if(M.isDataArrayTexture)if(Be){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ae,Le,ne.width,ne.height,ne.depth),D)if(M.layerUpdates.size>0){const W=bl(ne.width,ne.height,M.format,M.type);for(const J of M.layerUpdates){const de=ne.data.subarray(J*W/ne.data.BYTES_PER_ELEMENT,(J+1)*W/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ne.width,ne.height,1,ge,Re,de)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Le,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(M.isData3DTexture)Be?(ot&&t.texStorage3D(i.TEXTURE_3D,ae,Le,ne.width,ne.height,ne.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Re,ne.data)):t.texImage3D(i.TEXTURE_3D,0,Le,ne.width,ne.height,ne.depth,0,ge,Re,ne.data);else if(M.isFramebufferTexture){if(ot)if(Be)t.texStorage2D(i.TEXTURE_2D,ae,Le,ne.width,ne.height);else{let W=ne.width,J=ne.height;for(let de=0;de<ae;de++)t.texImage2D(i.TEXTURE_2D,de,Le,W,J,0,ge,Re,null),W>>=1,J>>=1}}else if(Ye.length>0){if(Be&&ot){const W=Te(Ye[0]);t.texStorage2D(i.TEXTURE_2D,ae,Le,W.width,W.height)}for(let W=0,J=Ye.length;W<J;W++)_e=Ye[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,ge,Re,_e):t.texImage2D(i.TEXTURE_2D,W,Le,ge,Re,_e);M.generateMipmaps=!1}else if(Be){if(ot){const W=Te(ne);t.texStorage2D(i.TEXTURE_2D,ae,Le,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,Re,ne)}else t.texImage2D(i.TEXTURE_2D,0,Le,ge,Re,ne);m(M)&&p(Z),Se.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,k){if(M.image.length!==6)return;const Z=et(A,M),ee=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const K=n.get(ee);if(ee.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+k);const Se=Ze.getPrimaries(Ze.workingColorSpace),le=M.colorSpace===ii?null:Ze.getPrimaries(M.colorSpace),pe=M.colorSpace===ii||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let J=0;J<6;J++)!je&&!ne?ge[J]=_(M.image[J],!0,s.maxCubemapSize):ge[J]=ne?M.image[J].image:M.image[J],ge[J]=ct(M,ge[J]);const Re=ge[0],Le=r.convert(M.format,M.colorSpace),_e=r.convert(M.type),Ye=x(M.internalFormat,Le,_e,M.colorSpace),Be=M.isVideoTexture!==!0,ot=K.__version===void 0||Z===!0,D=ee.dataReady;let ae=R(M,Re);Ne(i.TEXTURE_CUBE_MAP,M);let W;if(je){Be&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ye,Re.width,Re.height);for(let J=0;J<6;J++){W=ge[J].mipmaps;for(let de=0;de<W.length;de++){const he=W[de];M.format!==hn?Le!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,he.width,he.height,Le,_e,he.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ye,he.width,he.height,0,Le,_e,he.data)}}}else{if(W=M.mipmaps,Be&&ot){W.length>0&&ae++;const J=Te(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ae,Ye,J.width,J.height)}for(let J=0;J<6;J++)if(ne){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ge[J].width,ge[J].height,Le,_e,ge[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,ge[J].width,ge[J].height,0,Le,_e,ge[J].data);for(let de=0;de<W.length;de++){const Oe=W[de].image[J].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Oe.width,Oe.height,Le,_e,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ye,Oe.width,Oe.height,0,Le,_e,Oe.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,_e,ge[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ye,Le,_e,ge[J]);for(let de=0;de<W.length;de++){const he=W[de];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Le,_e,he.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ye,Le,_e,he.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),K.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Me(A,M,k,Z,ee,K){const Se=r.convert(k.format,k.colorSpace),le=r.convert(k.type),pe=x(k.internalFormat,Se,le,k.colorSpace),je=n.get(M),ne=n.get(k);if(ne.__renderTarget=M,!je.__hasExternalTextures){const ge=Math.max(1,M.width>>K),Re=Math.max(1,M.height>>K);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,K,pe,ge,Re,M.depth,0,Se,le,null):t.texImage2D(ee,K,pe,ge,Re,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ee,ne.__webglTexture,0,qe(M)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ee,ne.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(A,M,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const Z=M.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,K=v(M.stencilBuffer,ee),Se=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=qe(M);Xe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,K,M.width,M.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,A)}else{const Z=M.textures;for(let ee=0;ee<Z.length;ee++){const K=Z[ee],Se=r.convert(K.format,K.colorSpace),le=r.convert(K.type),pe=x(K.internalFormat,Se,le,K.colorSpace),je=qe(M);k&&Xe(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,pe,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,pe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,pe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(M.depthTexture);Z.__renderTarget=M,(!Z.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const ee=Z.__webglTexture,K=qe(M);if(M.depthTexture.format===Ji)Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===os)Xe(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Ue(A){const M=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=Z}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,A)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=i.createRenderbuffer(),ce(M.__webglDepthbuffer[Z],A,!1);else{const ee=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ee,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ce(M.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,M,k){const Z=n.get(A);M!==void 0&&Me(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Ue(A)}function mt(A){const M=A.texture,k=n.get(A),Z=n.get(M);A.addEventListener("dispose",w);const ee=A.textures,K=A.isWebGLCubeRenderTarget===!0,Se=ee.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=M.version,o.memory.textures++),K){k.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[le]=[];for(let pe=0;pe<M.mipmaps.length;pe++)k.__webglFramebuffer[le][pe]=i.createFramebuffer()}else k.__webglFramebuffer[le]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)k.__webglFramebuffer[le]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(Se)for(let le=0,pe=ee.length;le<pe;le++){const je=n.get(ee[le]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const pe=ee[le];k.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[le]);const je=r.convert(pe.format,pe.colorSpace),ne=r.convert(pe.type),ge=x(pe.internalFormat,je,ne,pe.colorSpace,A.isXRRenderTarget===!0),Re=qe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ge,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,k.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Me(k.__webglFramebuffer[le][pe],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,pe);else Me(k.__webglFramebuffer[le],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let le=0,pe=ee.length;le<pe;le++){const je=ee[le],ne=n.get(je);t.bindTexture(i.TEXTURE_2D,ne.__webglTexture),Ne(i.TEXTURE_2D,je),Me(k.__webglFramebuffer,A,je,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,0),m(je)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Z.__webglTexture),Ne(le,M),M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)Me(k.__webglFramebuffer[pe],A,M,i.COLOR_ATTACHMENT0,le,pe);else Me(k.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,le,0);m(M)&&p(le),t.unbindTexture()}A.depthBuffer&&Ue(A)}function $e(A){const M=A.textures;for(let k=0,Z=M.length;k<Z;k++){const ee=M[k];if(m(ee)){const K=E(A),Se=n.get(ee).__webglTexture;t.bindTexture(K,Se),p(K),t.unbindTexture()}}}const Mt=[],N=[];function Kt(A){if(A.samples>0){if(Xe(A)===!1){const M=A.textures,k=A.width,Z=A.height;let ee=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(A),le=M.length>1;if(le)for(let pe=0;pe<M.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let pe=0;pe<M.length;pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const je=n.get(M[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,k,Z,0,0,k,Z,ee,i.NEAREST),c===!0&&(Mt.length=0,N.length=0,Mt.push(i.COLOR_ATTACHMENT0+pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Mt.push(K),N.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let pe=0;pe<M.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Se.__webglColorRenderbuffer[pe]);const je=n.get(M[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function qe(A){return Math.min(s.maxSamples,A.samples)}function Xe(A){const M=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(A){const M=o.render.frame;u.get(A)!==M&&(u.set(A,M),A.update())}function ct(A,M){const k=A.colorSpace,Z=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==ds&&k!==ii&&(Ze.getTransfer(k)===rt?(Z!==hn||ee!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=He,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Xe}function sg(i,e){function t(n,s=ii){let r;const o=Ze.getTransfer(s);if(n===Wn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jl)return i.BYTE;if(n===Kl)return i.SHORT;if(n===Fs)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Ci)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Ys)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===hn)return i.RGBA;if(n===eh)return i.LUMINANCE;if(n===th)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===nh)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===ih)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===Tr||n===wr||n===Ar||n===Rr)if(o===rt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ta||n===na||n===ia||n===sa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ra||n===oa||n===aa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ra||n===oa)return o===rt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===aa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ca||n===la||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===ya||n===Ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ca)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===la)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ha)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ua)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===da)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===pa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ga)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_a)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===va)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xa)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ya)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ma)return o===rt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cr||n===Sa||n===ba)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Cr)return o===rt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sh||n===Ea||n===Ta||n===wa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ta)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class rg extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qe extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const og={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(og)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Qe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:ag,fragmentShader:cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new G(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hg extends fs{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new lg,m=t.getContextAttributes();let p=null,E=null;const x=[],v=[],R=new Ge;let T=null;const w=new Qt;w.viewport=new xt;const C=new Qt;C.viewport=new xt;const S=[w,C],y=new rg;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=x[$];return te===void 0&&(te=new Ro,x[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=x[$];return te===void 0&&(te=new Ro,x[$]=te),te.getGripSpace()},this.getHand=function($){let te=x[$];return te===void 0&&(te=new Ro,x[$]=te),te.getHandSpace()};function F($){const te=v.indexOf($.inputSource);if(te===-1)return;const Me=x[te];Me!==void 0&&(Me.update($.inputSource,$.frame,l||o),Me.dispatchEvent({type:$.type,data:$.inputSource}))}function Y(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",j);for(let $=0;$<x.length;$++){const te=v[$];te!==null&&(v[$]=null,x[$].disconnect(te))}P=null,B=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,E=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),E=new Pi(f.framebufferWidth,f.framebufferHeight,{format:hn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,Me=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?os:Ji,Me=m.stencil?rs:Ci);const Pe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Pe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Pi(d.textureWidth,d.textureHeight,{format:hn,type:Wn,depthTexture:new xh(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),et.setContext(s),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function j($){for(let te=0;te<$.removed.length;te++){const Me=$.removed[te],ce=v.indexOf(Me);ce>=0&&(v[ce]=null,x[ce].disconnect(Me))}for(let te=0;te<$.added.length;te++){const Me=$.added[te];let ce=v.indexOf(Me);if(ce===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=v.length){v.push(Me),ce=Ue;break}else if(v[Ue]===null){v[Ue]=Me,ce=Ue;break}if(ce===-1)break}const Pe=x[ce];Pe&&Pe.connect(Me)}}const X=new O,Q=new O;function H($,te,Me){X.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(Me.matrixWorld);const ce=X.distanceTo(Q),Pe=te.projectionMatrix.elements,Ue=Me.projectionMatrix.elements,He=Pe[14]/(Pe[10]-1),mt=Pe[14]/(Pe[10]+1),$e=(Pe[9]+1)/Pe[5],Mt=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],Kt=(Ue[8]+1)/Ue[0],qe=He*N,Xe=He*Kt,we=ce/(-N+Kt),ct=we*-N;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ct),$.translateZ(we),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=He+we,A=mt+we,M=qe-ct,k=Xe+(ce-ct),Z=$e*mt/A*Te,ee=Mt*mt/A*Te;$.projectionMatrix.makePerspective(M,k,Z,ee,Te,A),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function re($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,Me=$.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(Me=_.depthFar)),y.near=C.near=w.near=te,y.far=C.far=w.far=Me,(P!==y.near||B!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,B=y.far),w.layers.mask=$.layers.mask|2,C.layers.mask=$.layers.mask|4,y.layers.mask=w.layers.mask|C.layers.mask;const ce=$.parent,Pe=y.cameras;re(y,ce);for(let Ue=0;Ue<Pe.length;Ue++)re(Pe[Ue],ce);Pe.length===2?H(y,w,C):y.projectionMatrix.copy(w.projectionMatrix),fe($,y,ce)};function fe($,te,Me){Me===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(Me.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ks*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let me=null;function Ne($,te){if(u=te.getViewerPose(l||o),g=te,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(E,f.framebuffer),e.setRenderTarget(E));let ce=!1;Me.length!==y.cameras.length&&(y.cameras.length=0,ce=!0);for(let Ue=0;Ue<Me.length;Ue++){const He=Me[Ue];let mt=null;if(f!==null)mt=f.getViewport(He);else{const Mt=h.getViewSubImage(d,He);mt=Mt.viewport,Ue===0&&(e.setRenderTargetTextures(E,Mt.colorTexture,d.ignoreDepthValues?void 0:Mt.depthStencilTexture),e.setRenderTarget(E))}let $e=S[Ue];$e===void 0&&($e=new Qt,$e.layers.enable(Ue),$e.viewport=new xt,S[Ue]=$e),$e.matrix.fromArray(He.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(He.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(mt.x,mt.y,mt.width,mt.height),Ue===0&&(y.matrix.copy($e.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ce===!0&&y.cameras.push($e)}const Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Ue=h.getDepthInformation(Me[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,s.renderState)}}for(let Me=0;Me<x.length;Me++){const ce=v[Me],Pe=x[Me];ce!==null&&Pe!==void 0&&Pe.update(ce,te,l||o)}me&&me($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const et=new _h;et.setAnimationLoop(Ne),this.setAnimationLoop=function($){me=$},this.dispose=function(){}}}const yi=new Sn,ug=new _t;function dg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ph(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,E,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ht&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ht&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),x=E.envMap,v=E.envMapRotation;x&&(m.envMap.value=x,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),m.envMapRotation.value.setFromMatrix4(ug.makeRotationFromEuler(yi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ht&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,x){const v=x.program;n.uniformBlockBinding(E,v)}function l(E,x){let v=s[E.id];v===void 0&&(g(E),v=u(E),s[E.id]=v,E.addEventListener("dispose",m));const R=x.program;n.updateUBOMapping(E,R);const T=e.render.frame;r[E.id]!==T&&(d(E),r[E.id]=T)}function u(E){const x=h();E.__bindingPointIndex=x;const v=i.createBuffer(),R=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=s[E.id],v=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,w=v.length;T<w;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,y=C.length;S<y;S++){const P=C[S];if(f(P,T,S,R)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let j=0;j<F.length;j++){const X=F[j],Q=_(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+Y,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(E,x,v,R){const T=E.value,w=x+"_"+v;if(R[w]===void 0)return typeof T=="number"||typeof T=="boolean"?R[w]=T:R[w]=T.clone(),!0;{const C=R[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return R[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(E){const x=E.uniforms;let v=0;const R=16;for(let w=0,C=x.length;w<C;w++){const S=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,P=S.length;y<P;y++){const B=S[y],F=Array.isArray(B.value)?B.value:[B.value];for(let Y=0,j=F.length;Y<j;Y++){const X=F[Y],Q=_(X),H=v%R,re=H%Q.boundary,fe=H+re;v+=re,fe!==0&&R-fe<Q.storage&&(v+=R-fe),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=Q.storage}}}const T=v%R;return T>0&&(v+=R-T),E.__size=v,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),x}function m(E){const x=E.target;x.removeEventListener("dispose",m);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class pg{constructor(e={}){const{canvas:t=td(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const E=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let R=!1,T=0,w=0,C=null,S=-1,y=null;const P=new xt,B=new xt;let F=null;const Y=new Ee(0);let j=0,X=t.width,Q=t.height,H=1,re=null,fe=null;const me=new xt(0,0,X,Q),Ne=new xt(0,0,X,Q);let et=!1;const $=new $a;let te=!1,Me=!1;const ce=new _t,Pe=new _t,Ue=new O,He=new xt,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Mt(){return C===null?H:1}let N=n;function Kt(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",he,!1),N===null){const I="webgl2";if(N=Kt(I,b),N===null)throw Kt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let qe,Xe,we,ct,Te,A,M,k,Z,ee,K,Se,le,pe,je,ne,ge,Re,Le,_e,Ye,Be,ot,D;function ae(){qe=new xm(N),qe.init(),Be=new sg(N,qe),Xe=new fm(N,qe,e,Be),we=new tg(N,qe),Xe.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),ct=new Sm(N),Te=new z0,A=new ig(N,qe,we,Te,Xe,Be,ct),M=new mm(v),k=new vm(v),Z=new Rd(N),ot=new um(N,Z),ee=new ym(N,Z,ct,ot),K=new Em(N,ee,Z,ct),Le=new bm(N,Xe,A),ne=new pm(Te),Se=new B0(v,M,k,qe,Xe,ot,ne),le=new dg(v,Te),pe=new G0,je=new $0(qe),Re=new hm(v,M,k,we,K,f,c),ge=new Q0(v,K,Xe),D=new fg(N,ct,Xe,we),_e=new dm(N,qe,ct),Ye=new Mm(N,qe,ct),ct.programs=Se.programs,v.capabilities=Xe,v.extensions=qe,v.properties=Te,v.renderLists=pe,v.shadowMap=ge,v.state=we,v.info=ct}ae();const W=new hg(v,N);this.xr=W,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=qe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=qe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(b){b!==void 0&&(H=b,this.setSize(X,Q,!1))},this.getSize=function(b){return b.set(X,Q)},this.setSize=function(b,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,Q=I,t.width=Math.floor(b*H),t.height=Math.floor(I*H),z===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(X*H,Q*H).floor()},this.setDrawingBufferSize=function(b,I,z){X=b,Q=I,H=z,t.width=Math.floor(b*z),t.height=Math.floor(I*z),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(me)},this.setViewport=function(b,I,z,V){b.isVector4?me.set(b.x,b.y,b.z,b.w):me.set(b,I,z,V),we.viewport(P.copy(me).multiplyScalar(H).round())},this.getScissor=function(b){return b.copy(Ne)},this.setScissor=function(b,I,z,V){b.isVector4?Ne.set(b.x,b.y,b.z,b.w):Ne.set(b,I,z,V),we.scissor(B.copy(Ne).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(b){we.setScissorTest(et=b)},this.setOpaqueSort=function(b){re=b},this.setTransparentSort=function(b){fe=b},this.getClearColor=function(b){return b.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor.apply(Re,arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha.apply(Re,arguments)},this.clear=function(b=!0,I=!0,z=!0){let V=0;if(b){let U=!1;if(C!==null){const ie=C.texture.format;U=ie===Wa||ie===Ha||ie===Ga}if(U){const ie=C.texture.type,ue=ie===Wn||ie===Ci||ie===Fs||ie===rs||ie===za||ie===Va,ve=Re.getClearColor(),xe=Re.getClearAlpha(),De=ve.r,Fe=ve.g,ye=ve.b;ue?(g[0]=De,g[1]=Fe,g[2]=ye,g[3]=xe,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=De,_[1]=Fe,_[2]=ye,_[3]=xe,N.clearBufferiv(N.COLOR,0,_))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT),z&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",he,!1),pe.dispose(),je.dispose(),Te.dispose(),M.dispose(),k.dispose(),K.dispose(),ot.dispose(),D.dispose(),Se.dispose(),W.dispose(),W.removeEventListener("sessionstart",_c),W.removeEventListener("sessionend",vc),pi.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const b=ct.autoReset,I=ge.enabled,z=ge.autoUpdate,V=ge.needsUpdate,U=ge.type;ae(),ct.autoReset=b,ge.enabled=I,ge.autoUpdate=z,ge.needsUpdate=V,ge.type=U}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Oe(b){const I=b.target;I.removeEventListener("dispose",Oe),vt(I)}function vt(b){Ct(b),Te.remove(b)}function Ct(b){const I=Te.get(b).programs;I!==void 0&&(I.forEach(function(z){Se.releaseProgram(z)}),b.isShaderMaterial&&Se.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,z,V,U,ie){I===null&&(I=mt);const ue=U.isMesh&&U.matrixWorld.determinant()<0,ve=Kh(b,I,z,V,U);we.setMaterial(V,ue);let xe=z.index,De=1;if(V.wireframe===!0){if(xe=ee.getWireframeAttribute(z),xe===void 0)return;De=2}const Fe=z.drawRange,ye=z.attributes.position;let Je=Fe.start*De,at=(Fe.start+Fe.count)*De;ie!==null&&(Je=Math.max(Je,ie.start*De),at=Math.min(at,(ie.start+ie.count)*De)),xe!==null?(Je=Math.max(Je,0),at=Math.min(at,xe.count)):ye!=null&&(Je=Math.max(Je,0),at=Math.min(at,ye.count));const lt=at-Je;if(lt<0||lt===1/0)return;ot.setup(U,V,ve,z,xe);let zt,nt=_e;if(xe!==null&&(zt=Z.get(xe),nt=Ye,nt.setIndex(zt)),U.isMesh)V.wireframe===!0?(we.setLineWidth(V.wireframeLinewidth*Mt()),nt.setMode(N.LINES)):nt.setMode(N.TRIANGLES);else if(U.isLine){let be=V.linewidth;be===void 0&&(be=1),we.setLineWidth(be*Mt()),U.isLineSegments?nt.setMode(N.LINES):U.isLineLoop?nt.setMode(N.LINE_LOOP):nt.setMode(N.LINE_STRIP)}else U.isPoints?nt.setMode(N.POINTS):U.isSprite&&nt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)nt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,wn=U._multiDrawCounts,it=U._multiDrawCount,sn=xe?Z.get(xe).bytesPerElement:1,Ii=Te.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<it;Wt++)Ii.setValue(N,"_gl_DrawID",Wt),nt.render(be[Wt]/sn,wn[Wt])}else if(U.isInstancedMesh)nt.renderInstances(Je,lt,U.count);else if(z.isInstancedBufferGeometry){const be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wn=Math.min(z.instanceCount,be);nt.renderInstances(Je,lt,wn)}else nt.render(Je,lt)};function st(b,I,z){b.transparent===!0&&b.side===tn&&b.forceSinglePass===!1?(b.side=Ht,b.needsUpdate=!0,Qs(b,I,z),b.side=ui,b.needsUpdate=!0,Qs(b,I,z),b.side=tn):Qs(b,I,z)}this.compile=function(b,I,z=null){z===null&&(z=b),p=je.get(z),p.init(I),x.push(p),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),b!==z&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const V=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ie=U.material;if(ie)if(Array.isArray(ie))for(let ue=0;ue<ie.length;ue++){const ve=ie[ue];st(ve,z,U),V.add(ve)}else st(ie,z,U),V.add(ie)}),x.pop(),p=null,V},this.compileAsync=function(b,I,z=null){const V=this.compile(b,I,z);return new Promise(U=>{function ie(){if(V.forEach(function(ue){Te.get(ue).currentProgram.isReady()&&V.delete(ue)}),V.size===0){U(b);return}setTimeout(ie,10)}qe.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let nn=null;function Tn(b){nn&&nn(b)}function _c(){pi.stop()}function vc(){pi.start()}const pi=new _h;pi.setAnimationLoop(Tn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(b){nn=b,W.setAnimationLoop(b),b===null?pi.stop():pi.start()},W.addEventListener("sessionstart",_c),W.addEventListener("sessionend",vc),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,C),p=je.get(b,x.length),p.init(I),x.push(p),Pe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Pe),Me=this.localClippingEnabled,te=ne.init(this.clippingPlanes,Me),m=pe.get(b,E.length),m.init(),E.push(m),W.enabled===!0&&W.isPresenting===!0){const ie=v.xr.getDepthSensingMesh();ie!==null&&Qr(ie,I,-1/0,v.sortObjects)}Qr(b,I,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,fe),$e=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,$e&&Re.addToRenderList(m,b),this.info.render.frame++,te===!0&&ne.beginShadows();const z=p.state.shadowsArray;ge.render(z,b,I),te===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(p.setupLights(),I.isArrayCamera){const ie=I.cameras;if(U.length>0)for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];yc(V,U,b,xe)}$e&&Re.render(b);for(let ue=0,ve=ie.length;ue<ve;ue++){const xe=ie[ue];xc(m,b,xe,xe.viewport)}}else U.length>0&&yc(V,U,b,I),$e&&Re.render(b),xc(m,b,I);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(v,b,I),ot.resetDefaultState(),S=-1,y=null,x.pop(),x.length>0?(p=x[x.length-1],te===!0&&ne.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Qr(b,I,z,V){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||$.intersectsSprite(b)){V&&He.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Pe);const ue=K.update(b),ve=b.material;ve.visible&&m.push(b,ue,ve,z,He.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||$.intersectsObject(b))){const ue=K.update(b),ve=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),He.copy(b.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),He.copy(ue.boundingSphere.center)),He.applyMatrix4(b.matrixWorld).applyMatrix4(Pe)),Array.isArray(ve)){const xe=ue.groups;for(let De=0,Fe=xe.length;De<Fe;De++){const ye=xe[De],Je=ve[ye.materialIndex];Je&&Je.visible&&m.push(b,ue,Je,z,He.z,ye)}}else ve.visible&&m.push(b,ue,ve,z,He.z,null)}}const ie=b.children;for(let ue=0,ve=ie.length;ue<ve;ue++)Qr(ie[ue],I,z,V)}function xc(b,I,z,V){const U=b.opaque,ie=b.transmissive,ue=b.transparent;p.setupLightsView(z),te===!0&&ne.setGlobalState(v.clippingPlanes,z),V&&we.viewport(P.copy(V)),U.length>0&&Js(U,I,z),ie.length>0&&Js(ie,I,z),ue.length>0&&Js(ue,I,z),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function yc(b,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Pi(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?Ys:Wn,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const ie=p.state.transmissionRenderTarget[V.id],ue=V.viewport||P;ie.setSize(ue.z,ue.w);const ve=v.getRenderTarget();v.setRenderTarget(ie),v.getClearColor(Y),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),$e&&Re.render(z);const xe=v.toneMapping;v.toneMapping=ai;const De=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),te===!0&&ne.setGlobalState(v.clippingPlanes,V),Js(b,z,V),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ye=0,Je=I.length;ye<Je;ye++){const at=I[ye],lt=at.object,zt=at.geometry,nt=at.material,be=at.group;if(nt.side===tn&&lt.layers.test(V.layers)){const wn=nt.side;nt.side=Ht,nt.needsUpdate=!0,Mc(lt,z,V,zt,nt,be),nt.side=wn,nt.needsUpdate=!0,Fe=!0}}Fe===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}v.setRenderTarget(ve),v.setClearColor(Y,j),De!==void 0&&(V.viewport=De),v.toneMapping=xe}function Js(b,I,z){const V=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ie=b.length;U<ie;U++){const ue=b[U],ve=ue.object,xe=ue.geometry,De=V===null?ue.material:V,Fe=ue.group;ve.layers.test(z.layers)&&Mc(ve,I,z,xe,De,Fe)}}function Mc(b,I,z,V,U,ie){b.onBeforeRender(v,I,z,V,U,ie),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,I,z,V,b,ie),U.transparent===!0&&U.side===tn&&U.forceSinglePass===!1?(U.side=Ht,U.needsUpdate=!0,v.renderBufferDirect(z,I,V,U,b,ie),U.side=ui,U.needsUpdate=!0,v.renderBufferDirect(z,I,V,U,b,ie),U.side=tn):v.renderBufferDirect(z,I,V,U,b,ie),b.onAfterRender(v,I,z,V,U,ie)}function Qs(b,I,z){I.isScene!==!0&&(I=mt);const V=Te.get(b),U=p.state.lights,ie=p.state.shadowsArray,ue=U.state.version,ve=Se.getParameters(b,U.state,ie,I,z),xe=Se.getProgramCacheKey(ve);let De=V.programs;V.environment=b.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(b.isMeshStandardMaterial?k:M).get(b.envMap||V.environment),V.envMapRotation=V.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Oe),De=new Map,V.programs=De);let Fe=De.get(xe);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===ue)return bc(b,ve),Fe}else ve.uniforms=Se.getUniforms(b),b.onBeforeCompile(ve,v),Fe=Se.acquireProgram(ve,xe),De.set(xe,Fe),V.uniforms=ve.uniforms;const ye=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ye.clippingPlanes=ne.uniform),bc(b,ve),V.needsLights=Jh(b),V.lightsStateVersion=ue,V.needsLights&&(ye.ambientLightColor.value=U.state.ambient,ye.lightProbe.value=U.state.probe,ye.directionalLights.value=U.state.directional,ye.directionalLightShadows.value=U.state.directionalShadow,ye.spotLights.value=U.state.spot,ye.spotLightShadows.value=U.state.spotShadow,ye.rectAreaLights.value=U.state.rectArea,ye.ltc_1.value=U.state.rectAreaLTC1,ye.ltc_2.value=U.state.rectAreaLTC2,ye.pointLights.value=U.state.point,ye.pointLightShadows.value=U.state.pointShadow,ye.hemisphereLights.value=U.state.hemi,ye.directionalShadowMap.value=U.state.directionalShadowMap,ye.directionalShadowMatrix.value=U.state.directionalShadowMatrix,ye.spotShadowMap.value=U.state.spotShadowMap,ye.spotLightMatrix.value=U.state.spotLightMatrix,ye.spotLightMap.value=U.state.spotLightMap,ye.pointShadowMap.value=U.state.pointShadowMap,ye.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function Sc(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Pr.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function bc(b,I){const z=Te.get(b);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Kh(b,I,z,V,U){I.isScene!==!0&&(I=mt),A.resetTextureUnits();const ie=I.fog,ue=V.isMeshStandardMaterial?I.environment:null,ve=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ds,xe=(V.isMeshStandardMaterial?k:M).get(V.envMap||ue),De=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Fe=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ye=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let lt=ai;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(lt=v.toneMapping);const zt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=zt!==void 0?zt.length:0,be=Te.get(V),wn=p.state.lights;if(te===!0&&(Me===!0||b!==y)){const Zt=b===y&&V.id===S;ne.setState(V,b,Zt)}let it=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==wn.state.version||be.outputColorSpace!==ve||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==xe||V.fog===!0&&be.fog!==ie||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==ne.numPlanes||be.numIntersection!==ne.numIntersection)||be.vertexAlphas!==De||be.vertexTangents!==Fe||be.morphTargets!==ye||be.morphNormals!==Je||be.morphColors!==at||be.toneMapping!==lt||be.morphTargetsCount!==nt)&&(it=!0):(it=!0,be.__version=V.version);let sn=be.currentProgram;it===!0&&(sn=Qs(V,I,U));let Ii=!1,Wt=!1,vs=!1;const ht=sn.getUniforms(),dn=be.uniforms;if(we.useProgram(sn.program)&&(Ii=!0,Wt=!0,vs=!0),V.id!==S&&(S=V.id,Wt=!0),Ii||y!==b){we.buffers.depth.getReversed()?(ce.copy(b.projectionMatrix),id(ce),sd(ce),ht.setValue(N,"projectionMatrix",ce)):ht.setValue(N,"projectionMatrix",b.projectionMatrix),ht.setValue(N,"viewMatrix",b.matrixWorldInverse);const $n=ht.map.cameraPosition;$n!==void 0&&$n.setValue(N,Ue.setFromMatrixPosition(b.matrixWorld)),Xe.logarithmicDepthBuffer&&ht.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Wt=!0,vs=!0)}if(U.isSkinnedMesh){ht.setOptional(N,U,"bindMatrix"),ht.setOptional(N,U,"bindMatrixInverse");const Zt=U.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),ht.setValue(N,"boneTexture",Zt.boneTexture,A))}U.isBatchedMesh&&(ht.setOptional(N,U,"batchingTexture"),ht.setValue(N,"batchingTexture",U._matricesTexture,A),ht.setOptional(N,U,"batchingIdTexture"),ht.setValue(N,"batchingIdTexture",U._indirectTexture,A),ht.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ht.setValue(N,"batchingColorTexture",U._colorsTexture,A));const xs=z.morphAttributes;if((xs.position!==void 0||xs.normal!==void 0||xs.color!==void 0)&&Le.update(U,z,sn),(Wt||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,ht.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(dn.envMap.value=xe,dn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(dn.envMapIntensity.value=I.environmentIntensity),Wt&&(ht.setValue(N,"toneMappingExposure",v.toneMappingExposure),be.needsLights&&Zh(dn,vs),ie&&V.fog===!0&&le.refreshFogUniforms(dn,ie),le.refreshMaterialUniforms(dn,V,H,Q,p.state.transmissionRenderTarget[b.id]),Pr.upload(N,Sc(be),dn,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Pr.upload(N,Sc(be),dn,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(N,"center",U.center),ht.setValue(N,"modelViewMatrix",U.modelViewMatrix),ht.setValue(N,"normalMatrix",U.normalMatrix),ht.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Zt=V.uniformsGroups;for(let $n=0,jn=Zt.length;$n<jn;$n++){const Ec=Zt[$n];D.update(Ec,sn),D.bind(Ec,sn)}}return sn}function Zh(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function Jh(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,I,z){Te.get(b.texture).__webglTexture=I,Te.get(b.depthTexture).__webglTexture=z;const V=Te.get(b);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const z=Te.get(b);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,z=0){C=b,T=I,w=z;let V=!0,U=null,ie=!1,ue=!1;if(b){const xe=Te.get(b);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(xe.__hasExternalTextures)A.rebindTextures(b,Te.get(b.texture).__webglTexture,Te.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ye=b.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(b.width!==ye.image.width||b.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ue=!0);const Fe=Te.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Fe[I])?U=Fe[I][z]:U=Fe[I],ie=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?U=Te.get(b).__webglMultisampledFramebuffer:Array.isArray(Fe)?U=Fe[z]:U=Fe,P.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else P.copy(me).multiplyScalar(H).floor(),B.copy(Ne).multiplyScalar(H).floor(),F=et;if(we.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&we.drawBuffers(b,U),we.viewport(P),we.scissor(B),we.setScissorTest(F),ie){const xe=Te.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,z)}else if(ue){const xe=Te.get(b.texture),De=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,De)}S=-1},this.readRenderTargetPixels=function(b,I,z,V,U,ie,ue){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){we.bindFramebuffer(N.FRAMEBUFFER,ve);try{const xe=b.texture,De=xe.format,Fe=xe.type;if(!Xe.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-V&&z>=0&&z<=b.height-U&&N.readPixels(I,z,V,U,Be.convert(De),Be.convert(Fe),ie)}finally{const xe=C!==null?Te.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(b,I,z,V,U,ie,ue){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Te.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){const xe=b.texture,De=xe.format,Fe=xe.type;if(!Xe.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-V&&z>=0&&z<=b.height-U){we.bindFramebuffer(N.FRAMEBUFFER,ve);const ye=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.bufferData(N.PIXEL_PACK_BUFFER,ie.byteLength,N.STREAM_READ),N.readPixels(I,z,V,U,Be.convert(De),Be.convert(Fe),0);const Je=C!==null?Te.get(C).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,Je);const at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await nd(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ye),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ie),N.deleteBuffer(ye),N.deleteSync(at),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,z=0){b.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const V=Math.pow(2,-z),U=Math.floor(b.image.width*V),ie=Math.floor(b.image.height*V),ue=I!==null?I.x:0,ve=I!==null?I.y:0;A.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,z,0,0,ue,ve,U,ie),we.unbindTexture()},this.copyTextureToTexture=function(b,I,z=null,V=null,U=0){b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let ie,ue,ve,xe,De,Fe,ye,Je,at;const lt=b.isCompressedTexture?b.mipmaps[U]:b.image;z!==null?(ie=z.max.x-z.min.x,ue=z.max.y-z.min.y,ve=z.isBox3?z.max.z-z.min.z:1,xe=z.min.x,De=z.min.y,Fe=z.isBox3?z.min.z:0):(ie=lt.width,ue=lt.height,ve=lt.depth||1,xe=0,De=0,Fe=0),V!==null?(ye=V.x,Je=V.y,at=V.z):(ye=0,Je=0,at=0);const zt=Be.convert(I.format),nt=Be.convert(I.type);let be;I.isData3DTexture?(A.setTexture3D(I,0),be=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),be=N.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),be=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const wn=N.getParameter(N.UNPACK_ROW_LENGTH),it=N.getParameter(N.UNPACK_IMAGE_HEIGHT),sn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ii=N.getParameter(N.UNPACK_SKIP_ROWS),Wt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xe),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Fe);const vs=b.isDataArrayTexture||b.isData3DTexture,ht=I.isDataArrayTexture||I.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const dn=Te.get(b),xs=Te.get(I),Zt=Te.get(dn.__renderTarget),$n=Te.get(xs.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,Zt.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let jn=0;jn<ve;jn++)vs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(b).__webglTexture,U,Fe+jn),b.isDepthTexture?(ht&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,U,at+jn),N.blitFramebuffer(xe,De,ie,ue,ye,Je,ie,ue,N.DEPTH_BUFFER_BIT,N.NEAREST)):ht?N.copyTexSubImage3D(be,U,ye,Je,at+jn,xe,De,ie,ue):N.copyTexSubImage2D(be,U,ye,Je,at+jn,xe,De,ie,ue);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ht?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(be,U,ye,Je,at,ie,ue,ve,zt,nt,lt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(be,U,ye,Je,at,ie,ue,ve,zt,lt.data):N.texSubImage3D(be,U,ye,Je,at,ie,ue,ve,zt,nt,lt):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,ye,Je,ie,ue,zt,nt,lt.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,ye,Je,lt.width,lt.height,zt,lt.data):N.texSubImage2D(N.TEXTURE_2D,U,ye,Je,ie,ue,zt,nt,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,wn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it),N.pixelStorei(N.UNPACK_SKIP_PIXELS,sn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ii),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt),U===0&&I.generateMipmaps&&N.generateMipmap(be),we.unbindTexture()},this.copyTextureToTexture3D=function(b,I,z=null,V=null,U=0){return b.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,I,z,V,U)},this.initRenderTarget=function(b){Te.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,we.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}class Ds{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new Ds(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mg extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ka extends Bt{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Za extends jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new O,u=new Ge;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ie extends jt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;E(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function E(){const v=new O,R=new O;let T=0;const w=(t-e)/n;for(let C=0;C<=r;C++){const S=[],y=C/r,P=y*(t-e)+e;for(let B=0;B<=s;B++){const F=B/s,Y=F*c+a,j=Math.sin(Y),X=Math.cos(Y);R.x=P*j,R.y=-y*n+m,R.z=P*X,h.push(R.x,R.y,R.z),v.set(j,w,X).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-y),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const y=_[S][C],P=_[S+1][C],B=_[S+1][C+1],F=_[S][C+1];(e>0||S!==0)&&(u.push(y,P,F),T+=3),(t>0||S!==r-1)&&(u.push(P,B,F),T+=3)}l.addGroup(p,T,0),p+=T}function x(v){const R=g,T=new Ge,w=new O;let C=0;const S=v===!0?e:t,y=v===!0?1:-1;for(let B=1;B<=s;B++)h.push(0,m*y,0),d.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let B=0;B<=s;B++){const Y=B/s*c+a,j=Math.cos(Y),X=Math.sin(Y);w.x=S*X,w.y=m*y,w.z=S*j,h.push(w.x,w.y,w.z),d.push(0,y,0),T.x=j*.5+.5,T.y=X*.5*y+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){const F=R+B,Y=P+B;v===!0?u.push(Y,Y+1,F):u.push(Y+1,Y,F),C+=3}l.addGroup(p,C,v===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ie(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class At extends Ie{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new At(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gs extends jt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],o=[];a(s),l(n),u(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){const x=new O,v=new O,R=new O;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],v),f(t[T+2],R),c(x,v,R,E)}function c(E,x,v,R){const T=R+1,w=[];for(let C=0;C<=T;C++){w[C]=[];const S=E.clone().lerp(v,C/T),y=x.clone().lerp(v,C/T),P=T-C;for(let B=0;B<=P;B++)B===0&&C===T?w[C][B]=S:w[C][B]=S.clone().lerp(y,B/P)}for(let C=0;C<T;C++)for(let S=0;S<2*(T-C)-1;S++){const y=Math.floor(S/2);S%2===0?(d(w[C][y+1]),d(w[C+1][y]),d(w[C][y])):(d(w[C][y+1]),d(w[C+1][y+1]),d(w[C+1][y]))}}function l(E){const x=new O;for(let v=0;v<r.length;v+=3)x.x=r[v+0],x.y=r[v+1],x.z=r[v+2],x.normalize().multiplyScalar(E),r[v+0]=x.x,r[v+1]=x.y,r[v+2]=x.z}function u(){const E=new O;for(let x=0;x<r.length;x+=3){E.x=r[x+0],E.y=r[x+1],E.z=r[x+2];const v=m(E)/2/Math.PI+.5,R=p(E)/Math.PI+.5;o.push(v,1-R)}g(),h()}function h(){for(let E=0;E<o.length;E+=6){const x=o[E+0],v=o[E+2],R=o[E+4],T=Math.max(x,v,R),w=Math.min(x,v,R);T>.9&&w<.1&&(x<.2&&(o[E+0]+=1),v<.2&&(o[E+2]+=1),R<.2&&(o[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function f(E,x){const v=E*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){const E=new O,x=new O,v=new O,R=new O,T=new Ge,w=new Ge,C=new Ge;for(let S=0,y=0;S<r.length;S+=9,y+=6){E.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),w.set(o[y+2],o[y+3]),C.set(o[y+4],o[y+5]),R.copy(E).add(x).add(v).divideScalar(3);const P=m(R);_(T,y+0,E,P),_(w,y+2,x,P),_(C,y+4,v,P)}}function _(E,x,v,R){R<0&&E.x===1&&(o[x]=E.x-1),v.x===0&&v.z===0&&(o[x]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.vertices,e.indices,e.radius,e.details)}}class bn extends gs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new bn(e.radius,e.detail)}}class Bn extends gs{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bn(e.radius,e.detail)}}class cs extends gs{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cs(e.radius,e.detail)}}class zn extends jt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new O,g=new Ge;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const E=p+m,x=E,v=E+n+1,R=E+n+2,T=E+1;a.push(x,v,T),a.push(v,R,T)}}this.setIndex(a),this.setAttribute("position",new ft(c,3)),this.setAttribute("normal",new ft(l,3)),this.setAttribute("uv",new ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bs extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new O,d=new O,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const E=[],x=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const T=R/t;h.x=-e*Math.cos(s+T*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(s+T*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-x),E.push(l++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<t;E++){const x=u[p][E+1],v=u[p][E],R=u[p+1][E],T=u[p+1][E+1];(p!==0||o>0)&&f.push(x,v,T),(p!==n-1||c<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ja extends gs{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ja(e.radius,e.detail)}}class Vn extends jt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],u=new O,h=new O,d=new O;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,E=(s+1)*f+g;o.push(_,m,E),o.push(m,p,E)}this.setIndex(o),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Li extends Ks{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rh,this.normalScale=new Ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Eh extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class gg extends Eh{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Co=new _t,El=new O,Tl=new O;class _g{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ge(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $a,this._frameExtents=new Ge(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;El.setFromMatrixPosition(e.matrixWorld),t.position.copy(El),Tl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tl),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends _g{constructor(){super(new vh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xg extends Eh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new vg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wl=new _t;class yg{constructor(e,t,n=0,s=1/0){this.ray=new hh(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ya,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(e,t=!0,n=[]){return Ra(e,this,n,t),n.sort(Al),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ra(e[s],this,n,t);return n.sort(Al),n}}function Al(i,e){return i.distance-e.distance}function Ra(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ra(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);const En=Object.create(null);En.open="0";En.close="1";En.ping="2";En.pong="3";En.message="4";En.upgrade="5";En.noop="6";const Lr=Object.create(null);Object.keys(En).forEach(i=>{Lr[En[i]]=i});const Ca={type:"error",data:"parser error"},Th=typeof Blob=="function"||typeof Blob<"u"&&Object.prototype.toString.call(Blob)==="[object BlobConstructor]",wh=typeof ArrayBuffer=="function",Ah=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i&&i.buffer instanceof ArrayBuffer,Qa=({type:i,data:e},t,n)=>Th&&e instanceof Blob?t?n(e):Rl(e,n):wh&&(e instanceof ArrayBuffer||Ah(e))?t?n(e):Rl(new Blob([e]),n):n(En[i]+(e||"")),Rl=(i,e)=>{const t=new FileReader;return t.onload=function(){const n=t.result.split(",")[1];e("b"+(n||""))},t.readAsDataURL(i)};function Cl(i){return i instanceof Uint8Array?i:i instanceof ArrayBuffer?new Uint8Array(i):new Uint8Array(i.buffer,i.byteOffset,i.byteLength)}let Po;function Mg(i,e){if(Th&&i.data instanceof Blob)return i.data.arrayBuffer().then(Cl).then(e);if(wh&&(i.data instanceof ArrayBuffer||Ah(i.data)))return e(Cl(i.data));Qa(i,!1,t=>{Po||(Po=new TextEncoder),e(Po.encode(t))})}const Pl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Cs=typeof Uint8Array>"u"?[]:new Uint8Array(256);for(let i=0;i<Pl.length;i++)Cs[Pl.charCodeAt(i)]=i;const Sg=i=>{let e=i.length*.75,t=i.length,n,s=0,r,o,a,c;i[i.length-1]==="="&&(e--,i[i.length-2]==="="&&e--);const l=new ArrayBuffer(e),u=new Uint8Array(l);for(n=0;n<t;n+=4)r=Cs[i.charCodeAt(n)],o=Cs[i.charCodeAt(n+1)],a=Cs[i.charCodeAt(n+2)],c=Cs[i.charCodeAt(n+3)],u[s++]=r<<2|o>>4,u[s++]=(o&15)<<4|a>>2,u[s++]=(a&3)<<6|c&63;return l},bg=typeof ArrayBuffer=="function",ec=(i,e)=>{if(typeof i!="string")return{type:"message",data:Rh(i,e)};const t=i.charAt(0);return t==="b"?{type:"message",data:Eg(i.substring(1),e)}:Lr[t]?i.length>1?{type:Lr[t],data:i.substring(1)}:{type:Lr[t]}:Ca},Eg=(i,e)=>{if(bg){const t=Sg(i);return Rh(t,e)}else return{base64:!0,data:i}},Rh=(i,e)=>{switch(e){case"blob":return i instanceof Blob?i:new Blob([i]);case"arraybuffer":default:return i instanceof ArrayBuffer?i:i.buffer}},Ch="",Tg=(i,e)=>{const t=i.length,n=new Array(t);let s=0;i.forEach((r,o)=>{Qa(r,!1,a=>{n[o]=a,++s===t&&e(n.join(Ch))})})},wg=(i,e)=>{const t=i.split(Ch),n=[];for(let s=0;s<t.length;s++){const r=ec(t[s],e);if(n.push(r),r.type==="error")break}return n};function Ag(){return new TransformStream({transform(i,e){Mg(i,t=>{const n=t.length;let s;if(n<126)s=new Uint8Array(1),new DataView(s.buffer).setUint8(0,n);else if(n<65536){s=new Uint8Array(3);const r=new DataView(s.buffer);r.setUint8(0,126),r.setUint16(1,n)}else{s=new Uint8Array(9);const r=new DataView(s.buffer);r.setUint8(0,127),r.setBigUint64(1,BigInt(n))}i.data&&typeof i.data!="string"&&(s[0]|=128),e.enqueue(s),e.enqueue(t)})}})}let Lo;function Mr(i){return i.reduce((e,t)=>e+t.length,0)}function Sr(i,e){if(i[0].length===e)return i.shift();const t=new Uint8Array(e);let n=0;for(let s=0;s<e;s++)t[s]=i[0][n++],n===i[0].length&&(i.shift(),n=0);return i.length&&n<i[0].length&&(i[0]=i[0].slice(n)),t}function Rg(i,e){Lo||(Lo=new TextDecoder);const t=[];let n=0,s=-1,r=!1;return new TransformStream({transform(o,a){for(t.push(o);;){if(n===0){if(Mr(t)<1)break;const c=Sr(t,1);r=(c[0]&128)===128,s=c[0]&127,s<126?n=3:s===126?n=1:n=2}else if(n===1){if(Mr(t)<2)break;const c=Sr(t,2);s=new DataView(c.buffer,c.byteOffset,c.length).getUint16(0),n=3}else if(n===2){if(Mr(t)<8)break;const c=Sr(t,8),l=new DataView(c.buffer,c.byteOffset,c.length),u=l.getUint32(0);if(u>Math.pow(2,21)-1){a.enqueue(Ca);break}s=u*Math.pow(2,32)+l.getUint32(4),n=3}else{if(Mr(t)<s)break;const c=Sr(t,s);a.enqueue(ec(r?c:Lo.decode(c),e)),n=0}if(s===0||s>i){a.enqueue(Ca);break}}}})}const Ph=4;function bt(i){if(i)return Cg(i)}function Cg(i){for(var e in bt.prototype)i[e]=bt.prototype[e];return i}bt.prototype.on=bt.prototype.addEventListener=function(i,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+i]=this._callbacks["$"+i]||[]).push(e),this};bt.prototype.once=function(i,e){function t(){this.off(i,t),e.apply(this,arguments)}return t.fn=e,this.on(i,t),this};bt.prototype.off=bt.prototype.removeListener=bt.prototype.removeAllListeners=bt.prototype.removeEventListener=function(i,e){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var t=this._callbacks["$"+i];if(!t)return this;if(arguments.length==1)return delete this._callbacks["$"+i],this;for(var n,s=0;s<t.length;s++)if(n=t[s],n===e||n.fn===e){t.splice(s,1);break}return t.length===0&&delete this._callbacks["$"+i],this};bt.prototype.emit=function(i){this._callbacks=this._callbacks||{};for(var e=new Array(arguments.length-1),t=this._callbacks["$"+i],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(t){t=t.slice(0);for(var n=0,s=t.length;n<s;++n)t[n].apply(this,e)}return this};bt.prototype.emitReserved=bt.prototype.emit;bt.prototype.listeners=function(i){return this._callbacks=this._callbacks||{},this._callbacks["$"+i]||[]};bt.prototype.hasListeners=function(i){return!!this.listeners(i).length};const Yr=typeof Promise=="function"&&typeof Promise.resolve=="function"?e=>Promise.resolve().then(e):(e,t)=>t(e,0),en=typeof self<"u"?self:typeof window<"u"?window:Function("return this")(),Pg="arraybuffer";function Lh(i,...e){return e.reduce((t,n)=>(i.hasOwnProperty(n)&&(t[n]=i[n]),t),{})}const Lg=en.setTimeout,Dg=en.clearTimeout;function $r(i,e){e.useNativeTimers?(i.setTimeoutFn=Lg.bind(en),i.clearTimeoutFn=Dg.bind(en)):(i.setTimeoutFn=en.setTimeout.bind(en),i.clearTimeoutFn=en.clearTimeout.bind(en))}const Ig=1.33;function Ug(i){return typeof i=="string"?Ng(i):Math.ceil((i.byteLength||i.size)*Ig)}function Ng(i){let e=0,t=0;for(let n=0,s=i.length;n<s;n++)e=i.charCodeAt(n),e<128?t+=1:e<2048?t+=2:e<55296||e>=57344?t+=3:(n++,t+=4);return t}function Dh(){return Date.now().toString(36).substring(3)+Math.random().toString(36).substring(2,5)}function Og(i){let e="";for(let t in i)i.hasOwnProperty(t)&&(e.length&&(e+="&"),e+=encodeURIComponent(t)+"="+encodeURIComponent(i[t]));return e}function Fg(i){let e={},t=i.split("&");for(let n=0,s=t.length;n<s;n++){let r=t[n].split("=");e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}return e}class kg extends Error{constructor(e,t,n){super(e),this.description=t,this.context=n,this.type="TransportError"}}class tc extends bt{constructor(e){super(),this.writable=!1,$r(this,e),this.opts=e,this.query=e.query,this.socket=e.socket,this.supportsBinary=!e.forceBase64}onError(e,t,n){return super.emitReserved("error",new kg(e,t,n)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return(this.readyState==="opening"||this.readyState==="open")&&(this.doClose(),this.onClose()),this}send(e){this.readyState==="open"&&this.write(e)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(e){const t=ec(e,this.socket.binaryType);this.onPacket(t)}onPacket(e){super.emitReserved("packet",e)}onClose(e){this.readyState="closed",super.emitReserved("close",e)}pause(e){}createUri(e,t={}){return e+"://"+this._hostname()+this._port()+this.opts.path+this._query(t)}_hostname(){const e=this.opts.hostname;return e.indexOf(":")===-1?e:"["+e+"]"}_port(){return this.opts.port&&(this.opts.secure&&Number(this.opts.port)!==443||!this.opts.secure&&Number(this.opts.port)!==80)?":"+this.opts.port:""}_query(e){const t=Og(e);return t.length?"?"+t:""}}class Bg extends tc{constructor(){super(...arguments),this._polling=!1}get name(){return"polling"}doOpen(){this._poll()}pause(e){this.readyState="pausing";const t=()=>{this.readyState="paused",e()};if(this._polling||!this.writable){let n=0;this._polling&&(n++,this.once("pollComplete",function(){--n||t()})),this.writable||(n++,this.once("drain",function(){--n||t()}))}else t()}_poll(){this._polling=!0,this.doPoll(),this.emitReserved("poll")}onData(e){const t=n=>{if(this.readyState==="opening"&&n.type==="open"&&this.onOpen(),n.type==="close")return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(n)};wg(e,this.socket.binaryType).forEach(t),this.readyState!=="closed"&&(this._polling=!1,this.emitReserved("pollComplete"),this.readyState==="open"&&this._poll())}doClose(){const e=()=>{this.write([{type:"close"}])};this.readyState==="open"?e():this.once("open",e)}write(e){this.writable=!1,Tg(e,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){const e=this.opts.secure?"https":"http",t=this.query||{};return this.opts.timestampRequests!==!1&&(t[this.opts.timestampParam]=Dh()),!this.supportsBinary&&!t.sid&&(t.b64=1),this.createUri(e,t)}}let Ih=!1;try{Ih=typeof XMLHttpRequest<"u"&&"withCredentials"in new XMLHttpRequest}catch{}const zg=Ih;function Vg(){}class Gg extends Bg{constructor(e){if(super(e),typeof location<"u"){const t=location.protocol==="https:";let n=location.port;n||(n=t?"443":"80"),this.xd=typeof location<"u"&&e.hostname!==location.hostname||n!==e.port}}doWrite(e,t){const n=this.request({method:"POST",data:e});n.on("success",t),n.on("error",(s,r)=>{this.onError("xhr post error",s,r)})}doPoll(){const e=this.request();e.on("data",this.onData.bind(this)),e.on("error",(t,n)=>{this.onError("xhr poll error",t,n)}),this.pollXhr=e}}class Mn extends bt{constructor(e,t,n){super(),this.createRequest=e,$r(this,n),this._opts=n,this._method=n.method||"GET",this._uri=t,this._data=n.data!==void 0?n.data:null,this._create()}_create(){var e;const t=Lh(this._opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this._opts.xd;const n=this._xhr=this.createRequest(t);try{n.open(this._method,this._uri,!0);try{if(this._opts.extraHeaders){n.setDisableHeaderCheck&&n.setDisableHeaderCheck(!0);for(let s in this._opts.extraHeaders)this._opts.extraHeaders.hasOwnProperty(s)&&n.setRequestHeader(s,this._opts.extraHeaders[s])}}catch{}if(this._method==="POST")try{n.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch{}try{n.setRequestHeader("Accept","*/*")}catch{}(e=this._opts.cookieJar)===null||e===void 0||e.addCookies(n),"withCredentials"in n&&(n.withCredentials=this._opts.withCredentials),this._opts.requestTimeout&&(n.timeout=this._opts.requestTimeout),n.onreadystatechange=()=>{var s;n.readyState===3&&((s=this._opts.cookieJar)===null||s===void 0||s.parseCookies(n.getResponseHeader("set-cookie"))),n.readyState===4&&(n.status===200||n.status===1223?this._onLoad():this.setTimeoutFn(()=>{this._onError(typeof n.status=="number"?n.status:0)},0))},n.send(this._data)}catch(s){this.setTimeoutFn(()=>{this._onError(s)},0);return}typeof document<"u"&&(this._index=Mn.requestsCount++,Mn.requests[this._index]=this)}_onError(e){this.emitReserved("error",e,this._xhr),this._cleanup(!0)}_cleanup(e){if(!(typeof this._xhr>"u"||this._xhr===null)){if(this._xhr.onreadystatechange=Vg,e)try{this._xhr.abort()}catch{}typeof document<"u"&&delete Mn.requests[this._index],this._xhr=null}}_onLoad(){const e=this._xhr.responseText;e!==null&&(this.emitReserved("data",e),this.emitReserved("success"),this._cleanup())}abort(){this._cleanup()}}Mn.requestsCount=0;Mn.requests={};if(typeof document<"u"){if(typeof attachEvent=="function")attachEvent("onunload",Ll);else if(typeof addEventListener=="function"){const i="onpagehide"in en?"pagehide":"unload";addEventListener(i,Ll,!1)}}function Ll(){for(let i in Mn.requests)Mn.requests.hasOwnProperty(i)&&Mn.requests[i].abort()}const Hg=(function(){const i=Uh({xdomain:!1});return i&&i.responseType!==null})();class Wg extends Gg{constructor(e){super(e);const t=e&&e.forceBase64;this.supportsBinary=Hg&&!t}request(e={}){return Object.assign(e,{xd:this.xd},this.opts),new Mn(Uh,this.uri(),e)}}function Uh(i){const e=i.xdomain;try{if(typeof XMLHttpRequest<"u"&&(!e||zg))return new XMLHttpRequest}catch{}if(!e)try{return new en[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch{}}const Nh=typeof navigator<"u"&&typeof navigator.product=="string"&&navigator.product.toLowerCase()==="reactnative";class qg extends tc{get name(){return"websocket"}doOpen(){const e=this.uri(),t=this.opts.protocols,n=Nh?{}:Lh(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(n.headers=this.opts.extraHeaders);try{this.ws=this.createSocket(e,t,n)}catch(s){return this.emitReserved("error",s)}this.ws.binaryType=this.socket.binaryType,this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=e=>this.onClose({description:"websocket connection closed",context:e}),this.ws.onmessage=e=>this.onData(e.data),this.ws.onerror=e=>this.onError("websocket error",e)}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;Qa(n,this.supportsBinary,r=>{try{this.doWrite(n,r)}catch{}s&&Yr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){typeof this.ws<"u"&&(this.ws.onerror=()=>{},this.ws.close(),this.ws=null)}uri(){const e=this.opts.secure?"wss":"ws",t=this.query||{};return this.opts.timestampRequests&&(t[this.opts.timestampParam]=Dh()),this.supportsBinary||(t.b64=1),this.createUri(e,t)}}const Do=en.WebSocket||en.MozWebSocket;class Xg extends qg{createSocket(e,t,n){return Nh?new Do(e,t,n):t?new Do(e,t):new Do(e)}doWrite(e,t){this.ws.send(t)}}class Yg extends tc{get name(){return"webtransport"}doOpen(){try{this._transport=new WebTransport(this.createUri("https"),this.opts.transportOptions[this.name])}catch(e){return this.emitReserved("error",e)}this._transport.closed.then(()=>{this.onClose()}).catch(e=>{this.onError("webtransport error",e)}),this._transport.ready.then(()=>{this._transport.createBidirectionalStream().then(e=>{const t=Rg(Number.MAX_SAFE_INTEGER,this.socket.binaryType),n=e.readable.pipeThrough(t).getReader(),s=Ag();s.readable.pipeTo(e.writable),this._writer=s.writable.getWriter();const r=()=>{n.read().then(({done:a,value:c})=>{a||(this.onPacket(c),r())}).catch(a=>{})};r();const o={type:"open"};this.query.sid&&(o.data=`{"sid":"${this.query.sid}"}`),this._writer.write(o).then(()=>this.onOpen())})})}write(e){this.writable=!1;for(let t=0;t<e.length;t++){const n=e[t],s=t===e.length-1;this._writer.write(n).then(()=>{s&&Yr(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){var e;(e=this._transport)===null||e===void 0||e.close()}}const $g={websocket:Xg,webtransport:Yg,polling:Wg},jg=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Kg=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function Pa(i){if(i.length>8e3)throw"URI too long";const e=i,t=i.indexOf("["),n=i.indexOf("]");t!=-1&&n!=-1&&(i=i.substring(0,t)+i.substring(t,n).replace(/:/g,";")+i.substring(n,i.length));let s=jg.exec(i||""),r={},o=14;for(;o--;)r[Kg[o]]=s[o]||"";return t!=-1&&n!=-1&&(r.source=e,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=Zg(r,r.path),r.queryKey=Jg(r,r.query),r}function Zg(i,e){const t=/\/{2,9}/g,n=e.replace(t,"/").split("/");return(e.slice(0,1)=="/"||e.length===0)&&n.splice(0,1),e.slice(-1)=="/"&&n.splice(n.length-1,1),n}function Jg(i,e){const t={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(n,s,r){s&&(t[s]=r)}),t}const La=typeof addEventListener=="function"&&typeof removeEventListener=="function",Dr=[];La&&addEventListener("offline",()=>{Dr.forEach(i=>i())},!1);let Oh=class ji extends bt{constructor(e,t={}){var n,s;if(super(),this.binaryType=Pg,this.writeBuffer=[],this._prevBufferLen=0,this._upgrades=[],this._pingInterval=-1,this._pingTimeout=-1,this._maxPayload=-1,this._pingTimeoutTime=1/0,e&&typeof e=="object"&&(t=e,e=null),e){const r=Pa(e);t.hostname=r.host,t.secure=r.protocol==="https"||r.protocol==="wss",t.port=r.port,r.query&&(t.query=r.query)}else t.host&&(t.hostname=Pa(t.host).host);if($r(this,t),this.secure=t.secure!=null?t.secure:typeof location<"u"&&location.protocol==="https:",t.hostname&&!t.port&&(t.port=this.secure?"443":"80"),this.hostname=t.hostname||(typeof location<"u"?location.hostname:"localhost"),this.port=t.port||(typeof location<"u"&&location.port?location.port:this.secure?"443":"80"),t.transportImplementations&&t.transports)throw new Error("specifying both 'transportImplementations' and 'transports' options is not supported");t.transportImplementations||!((n=t.transports)===null||n===void 0)&&n.length&&typeof t.transports[0]=="function"?(this.transports=[],this._transportsByName=Object.create(null),((s=t.transportImplementations)!==null&&s!==void 0?s:t.transports).forEach(r=>{const o=r.prototype.name;this.transports.push(o),this._transportsByName[o]=r})):(this.transports=t.transports?[...t.transports]:["polling","websocket","webtransport"],this._transportsByName=$g),this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!1},t),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),typeof this.opts.query=="string"&&(this.opts.query=Fg(this.opts.query)),La&&(this.opts.closeOnBeforeunload&&(this._beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this._beforeunloadEventListener,!1)),this.hostname!=="localhost"&&(this._offlineEventListener=()=>{this._onClose("transport close",{description:"network connection lost"})},Dr.push(this._offlineEventListener))),this.opts.withCredentials&&(this._cookieJar=void 0),this._open()}createTransport(e){const t=Object.assign({},this.opts.query);t.EIO=Ph,t.transport=e,this.id&&(t.sid=this.id);const n=Object.assign({},this.opts,{query:t,socket:this,hostname:this.hostname,secure:this.secure,port:this.port},this.opts.transportOptions[e]);return new this._transportsByName[e](n)}_open(){if(this.transports.length===0){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}const e=this.opts.rememberUpgrade&&ji.priorWebsocketSuccess&&this.transports.indexOf("websocket")!==-1?"websocket":this.transports[0];this.readyState="opening";const t=this.createTransport(e);t.open(),this.setTransport(t)}setTransport(e){this.transport&&this.transport.removeAllListeners(),this.transport=e,e.on("drain",this._onDrain.bind(this)).on("packet",this._onPacket.bind(this)).on("error",this._onError.bind(this)).on("close",t=>this._onClose("transport close",t))}_probe(e){let t=this.createTransport(e),n=!1;ji.priorWebsocketSuccess=!1;const s=()=>{n||(t.send([{type:"ping",data:"probe"}]),t.once("packet",h=>{if(!n)if(h.type==="pong"&&h.data==="probe"){if(this.upgrading=!0,this.emitReserved("upgrading",t),!t)return;ji.priorWebsocketSuccess=t.name==="websocket",this.transport.pause(()=>{n||this.readyState!=="closed"&&(u(),this.setTransport(t),t.send([{type:"upgrade"}]),this.emitReserved("upgrade",t),t=null,this.upgrading=!1,this.flush())})}else{const d=new Error("probe error");d.transport=t.name,this.emitReserved("upgradeError",d)}}))};function r(){n||(n=!0,u(),t.close(),t=null)}const o=h=>{const d=new Error("probe error: "+h);d.transport=t.name,r(),this.emitReserved("upgradeError",d)};function a(){o("transport closed")}function c(){o("socket closed")}function l(h){t&&h.name!==t.name&&r()}const u=()=>{t.removeListener("open",s),t.removeListener("error",o),t.removeListener("close",a),this.off("close",c),this.off("upgrading",l)};t.once("open",s),t.once("error",o),t.once("close",a),this.once("close",c),this.once("upgrading",l),this._upgrades.indexOf("webtransport")!==-1&&e!=="webtransport"?this.setTimeoutFn(()=>{n||t.open()},200):t.open()}onOpen(){if(this.readyState="open",ji.priorWebsocketSuccess=this.transport.name==="websocket",this.emitReserved("open"),this.flush(),this.readyState==="open"&&this.opts.upgrade)for(let e=0;e<this._upgrades.length;e++)this._probe(this._upgrades[e])}_onPacket(e){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing")switch(this.emitReserved("packet",e),this.emitReserved("heartbeat"),e.type){case"open":this.onHandshake(JSON.parse(e.data));break;case"ping":this._sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong"),this._resetPingTimeout();break;case"error":const t=new Error("server error");t.code=e.data,this._onError(t);break;case"message":this.emitReserved("data",e.data),this.emitReserved("message",e.data);break}}onHandshake(e){this.emitReserved("handshake",e),this.id=e.sid,this.transport.query.sid=e.sid,this._upgrades=this._filterUpgrades(e.upgrades),this._pingInterval=e.pingInterval,this._pingTimeout=e.pingTimeout,this._maxPayload=e.maxPayload,this.onOpen(),this.readyState!=="closed"&&this._resetPingTimeout()}_resetPingTimeout(){this.clearTimeoutFn(this._pingTimeoutTimer);const e=this._pingInterval+this._pingTimeout;this._pingTimeoutTime=Date.now()+e,this._pingTimeoutTimer=this.setTimeoutFn(()=>{this._onClose("ping timeout")},e),this.opts.autoUnref&&this._pingTimeoutTimer.unref()}_onDrain(){this.writeBuffer.splice(0,this._prevBufferLen),this._prevBufferLen=0,this.writeBuffer.length===0?this.emitReserved("drain"):this.flush()}flush(){if(this.readyState!=="closed"&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){const e=this._getWritablePackets();this.transport.send(e),this._prevBufferLen=e.length,this.emitReserved("flush")}}_getWritablePackets(){if(!(this._maxPayload&&this.transport.name==="polling"&&this.writeBuffer.length>1))return this.writeBuffer;let t=1;for(let n=0;n<this.writeBuffer.length;n++){const s=this.writeBuffer[n].data;if(s&&(t+=Ug(s)),n>0&&t>this._maxPayload)return this.writeBuffer.slice(0,n);t+=2}return this.writeBuffer}_hasPingExpired(){if(!this._pingTimeoutTime)return!0;const e=Date.now()>this._pingTimeoutTime;return e&&(this._pingTimeoutTime=0,Yr(()=>{this._onClose("ping timeout")},this.setTimeoutFn)),e}write(e,t,n){return this._sendPacket("message",e,t,n),this}send(e,t,n){return this._sendPacket("message",e,t,n),this}_sendPacket(e,t,n,s){if(typeof t=="function"&&(s=t,t=void 0),typeof n=="function"&&(s=n,n=null),this.readyState==="closing"||this.readyState==="closed")return;n=n||{},n.compress=n.compress!==!1;const r={type:e,data:t,options:n};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),s&&this.once("flush",s),this.flush()}close(){const e=()=>{this._onClose("forced close"),this.transport.close()},t=()=>{this.off("upgrade",t),this.off("upgradeError",t),e()},n=()=>{this.once("upgrade",t),this.once("upgradeError",t)};return(this.readyState==="opening"||this.readyState==="open")&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?n():e()}):this.upgrading?n():e()),this}_onError(e){if(ji.priorWebsocketSuccess=!1,this.opts.tryAllTransports&&this.transports.length>1&&this.readyState==="opening")return this.transports.shift(),this._open();this.emitReserved("error",e),this._onClose("transport error",e)}_onClose(e,t){if(this.readyState==="opening"||this.readyState==="open"||this.readyState==="closing"){if(this.clearTimeoutFn(this._pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),La&&(this._beforeunloadEventListener&&removeEventListener("beforeunload",this._beforeunloadEventListener,!1),this._offlineEventListener)){const n=Dr.indexOf(this._offlineEventListener);n!==-1&&Dr.splice(n,1)}this.readyState="closed",this.id=null,this.emitReserved("close",e,t),this.writeBuffer=[],this._prevBufferLen=0}}_filterUpgrades(e){const t=[];for(let n=0;n<e.length;n++)~this.transports.indexOf(e[n])&&t.push(e[n]);return t}};Oh.protocol=Ph;function Qg(i,e="",t){let n=i;t=t||typeof location<"u"&&location,i==null&&(i=t.protocol+"//"+t.host),typeof i=="string"&&(i.charAt(0)==="/"&&(i.charAt(1)==="/"?i=t.protocol+i:i=t.host+i),/^(https?|wss?):\/\//.test(i)||(typeof t<"u"?i=t.protocol+"//"+i:i="https://"+i),n=Pa(i)),n.port||(/^(http|ws)$/.test(n.protocol)?n.port="80":/^(http|ws)s$/.test(n.protocol)&&(n.port="443")),n.path=n.path||"/";const r=n.host.indexOf(":")!==-1?"["+n.host+"]":n.host;return n.id=n.protocol+"://"+r+":"+n.port+e,n.href=n.protocol+"://"+r+(t&&t.port===n.port?"":":"+n.port),n}const e_=typeof ArrayBuffer=="function",t_=i=>typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(i):i.buffer instanceof ArrayBuffer,Fh=Object.prototype.toString,n_=typeof Blob=="function"||typeof Blob<"u"&&Fh.call(Blob)==="[object BlobConstructor]",i_=typeof File=="function"||typeof File<"u"&&Fh.call(File)==="[object FileConstructor]";function nc(i){return e_&&(i instanceof ArrayBuffer||t_(i))||n_&&i instanceof Blob||i_&&i instanceof File}function Ir(i,e){if(!i||typeof i!="object")return!1;if(Array.isArray(i)){for(let t=0,n=i.length;t<n;t++)if(Ir(i[t]))return!0;return!1}if(nc(i))return!0;if(i.toJSON&&typeof i.toJSON=="function"&&arguments.length===1)return Ir(i.toJSON(),!0);for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&Ir(i[t]))return!0;return!1}function s_(i){const e=[],t=i.data,n=i;return n.data=Ur(t,e),n.attachments=e.length,{packet:n,buffers:e}}function Ur(i,e,t){if(!i)return i;if(nc(i)){const n={_placeholder:!0,num:e.length};return e.push(i),n}else if(Array.isArray(i)){const n=new Array(i.length);for(let s=0;s<i.length;s++)n[s]=Ur(i[s],e);return n}else if(typeof i=="object"&&!(i instanceof Date)){if(i.toJSON&&typeof i.toJSON=="function"&&!t)return Ur(i.toJSON(),e,!0);const n={};for(const s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=Ur(i[s],e));return n}return i}function r_(i,e){return i.data=Da(i.data,e),delete i.attachments,i}function Da(i,e){if(!i)return i;if(i&&i._placeholder===!0){if(typeof i.num=="number"&&i.num>=0&&i.num<e.length)return e[i.num];throw new Error("illegal attachments")}else if(Array.isArray(i))for(let t=0;t<i.length;t++)i[t]=Da(i[t],e);else if(typeof i=="object")for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&(i[t]=Da(i[t],e));return i}const o_=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"];var We;(function(i){i[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK"})(We||(We={}));class a_{constructor(e){this.replacer=e}encode(e){return(e.type===We.EVENT||e.type===We.ACK)&&Ir(e)?this.encodeAsBinary({type:e.type===We.EVENT?We.BINARY_EVENT:We.BINARY_ACK,nsp:e.nsp,data:e.data,id:e.id}):[this.encodeAsString(e)]}encodeAsString(e){let t=""+e.type;return(e.type===We.BINARY_EVENT||e.type===We.BINARY_ACK)&&(t+=e.attachments+"-"),e.nsp&&e.nsp!=="/"&&(t+=e.nsp+","),e.id!=null&&(t+=e.id),e.data!=null&&(t+=JSON.stringify(e.data,this.replacer)),t}encodeAsBinary(e){const t=s_(e),n=this.encodeAsString(t.packet),s=t.buffers;return s.unshift(n),s}}class ic extends bt{constructor(e){super(),this.opts=Object.assign({reviver:void 0,maxAttachments:10},typeof e=="function"?{reviver:e}:e)}add(e){let t;if(typeof e=="string"){if(this.reconstructor)throw new Error("got plaintext data when reconstructing a packet");t=this.decodeString(e);const n=t.type===We.BINARY_EVENT;n||t.type===We.BINARY_ACK?(t.type=n?We.EVENT:We.ACK,this.reconstructor=new c_(t)):super.emitReserved("decoded",t)}else if(nc(e)||e.base64)if(this.reconstructor)t=this.reconstructor.takeBinaryData(e),t&&(this.reconstructor=null,super.emitReserved("decoded",t));else throw new Error("got binary data when not reconstructing a packet");else throw new Error("Unknown type: "+e)}decodeString(e){let t=0;const n={type:Number(e.charAt(0))};if(We[n.type]===void 0)throw new Error("unknown packet type "+n.type);if(n.type===We.BINARY_EVENT||n.type===We.BINARY_ACK){const r=t+1;for(;e.charAt(++t)!=="-"&&t!=e.length;);const o=e.substring(r,t);if(o!=Number(o)||e.charAt(t)!=="-")throw new Error("Illegal attachments");const a=Number(o);if(!l_(a)||a<1)throw new Error("Illegal attachments");if(a>this.opts.maxAttachments)throw new Error("too many attachments");n.attachments=a}if(e.charAt(t+1)==="/"){const r=t+1;for(;++t&&!(e.charAt(t)===","||t===e.length););n.nsp=e.substring(r,t)}else n.nsp="/";const s=e.charAt(t+1);if(s!==""&&Number(s)==s){const r=t+1;for(;++t;){const o=e.charAt(t);if(o==null||Number(o)!=o){--t;break}if(t===e.length)break}n.id=Number(e.substring(r,t+1))}if(e.charAt(++t)){const r=this.tryParse(e.substr(t));if(ic.isPayloadValid(n.type,r))n.data=r;else throw new Error("invalid payload")}return n}tryParse(e){try{return JSON.parse(e,this.opts.reviver)}catch{return!1}}static isPayloadValid(e,t){switch(e){case We.CONNECT:return Dl(t);case We.DISCONNECT:return t===void 0;case We.CONNECT_ERROR:return typeof t=="string"||Dl(t);case We.EVENT:case We.BINARY_EVENT:return Array.isArray(t)&&(typeof t[0]=="number"||typeof t[0]=="string"&&o_.indexOf(t[0])===-1);case We.ACK:case We.BINARY_ACK:return Array.isArray(t)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class c_{constructor(e){this.packet=e,this.buffers=[],this.reconPack=e}takeBinaryData(e){if(this.buffers.push(e),this.buffers.length===this.reconPack.attachments){const t=r_(this.reconPack,this.buffers);return this.finishedReconstruction(),t}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}const l_=Number.isInteger||function(i){return typeof i=="number"&&isFinite(i)&&Math.floor(i)===i};function Dl(i){return Object.prototype.toString.call(i)==="[object Object]"}const h_=Object.freeze(Object.defineProperty({__proto__:null,Decoder:ic,Encoder:a_,get PacketType(){return We}},Symbol.toStringTag,{value:"Module"}));function cn(i,e,t){return i.on(e,t),function(){i.off(e,t)}}const u_=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class kh extends bt{constructor(e,t,n){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=e,this.nsp=t,n&&n.auth&&(this.auth=n.auth),this._opts=Object.assign({},n),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;const e=this.io;this.subs=[cn(e,"open",this.onopen.bind(this)),cn(e,"packet",this.onpacket.bind(this)),cn(e,"error",this.onerror.bind(this)),cn(e,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected?this:(this.subEvents(),this.io._reconnecting||this.io.open(),this.io._readyState==="open"&&this.onopen(),this)}open(){return this.connect()}send(...e){return e.unshift("message"),this.emit.apply(this,e),this}emit(e,...t){var n,s,r;if(u_.hasOwnProperty(e))throw new Error('"'+e.toString()+'" is a reserved event name');if(t.unshift(e),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(t),this;const o={type:We.EVENT,data:t};if(o.options={},o.options.compress=this.flags.compress!==!1,typeof t[t.length-1]=="function"){const u=this.ids++,h=t.pop();this._registerAckCallback(u,h),o.id=u}const a=(s=(n=this.io.engine)===null||n===void 0?void 0:n.transport)===null||s===void 0?void 0:s.writable,c=this.connected&&!(!((r=this.io.engine)===null||r===void 0)&&r._hasPingExpired());return this.flags.volatile&&!a||(c?(this.notifyOutgoingListeners(o),this.packet(o)):this.sendBuffer.push(o)),this.flags={},this}_registerAckCallback(e,t){var n;const s=(n=this.flags.timeout)!==null&&n!==void 0?n:this._opts.ackTimeout;if(s===void 0){this.acks[e]=t;return}const r=this.io.setTimeoutFn(()=>{delete this.acks[e];for(let a=0;a<this.sendBuffer.length;a++)this.sendBuffer[a].id===e&&this.sendBuffer.splice(a,1);t.call(this,new Error("operation has timed out"))},s),o=(...a)=>{this.io.clearTimeoutFn(r),t.apply(this,a)};o.withError=!0,this.acks[e]=o}emitWithAck(e,...t){return new Promise((n,s)=>{const r=(o,a)=>o?s(o):n(a);r.withError=!0,t.push(r),this.emit(e,...t)})}_addToQueue(e){let t;typeof e[e.length-1]=="function"&&(t=e.pop());const n={id:this._queueSeq++,tryCount:0,pending:!1,args:e,flags:Object.assign({fromQueue:!0},this.flags)};e.push((s,...r)=>(this._queue[0],s!==null?n.tryCount>this._opts.retries&&(this._queue.shift(),t&&t(s)):(this._queue.shift(),t&&t(null,...r)),n.pending=!1,this._drainQueue())),this._queue.push(n),this._drainQueue()}_drainQueue(e=!1){if(!this.connected||this._queue.length===0)return;const t=this._queue[0];t.pending&&!e||(t.pending=!0,t.tryCount++,this.flags=t.flags,this.emit.apply(this,t.args))}packet(e){e.nsp=this.nsp,this.io._packet(e)}onopen(){typeof this.auth=="function"?this.auth(e=>{this._sendConnectPacket(e)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(e){this.packet({type:We.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},e):e})}onerror(e){this.connected||this.emitReserved("connect_error",e)}onclose(e,t){this.connected=!1,delete this.id,this.emitReserved("disconnect",e,t),this._clearAcks()}_clearAcks(){Object.keys(this.acks).forEach(e=>{if(!this.sendBuffer.some(n=>String(n.id)===e)){const n=this.acks[e];delete this.acks[e],n.withError&&n.call(this,new Error("socket has been disconnected"))}})}onpacket(e){if(e.nsp===this.nsp)switch(e.type){case We.CONNECT:e.data&&e.data.sid?this.onconnect(e.data.sid,e.data.pid):this.emitReserved("connect_error",new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case We.EVENT:case We.BINARY_EVENT:this.onevent(e);break;case We.ACK:case We.BINARY_ACK:this.onack(e);break;case We.DISCONNECT:this.ondisconnect();break;case We.CONNECT_ERROR:this.destroy();const n=new Error(e.data.message);n.data=e.data.data,this.emitReserved("connect_error",n);break}}onevent(e){const t=e.data||[];e.id!=null&&t.push(this.ack(e.id)),this.connected?this.emitEvent(t):this.receiveBuffer.push(Object.freeze(t))}emitEvent(e){if(this._anyListeners&&this._anyListeners.length){const t=this._anyListeners.slice();for(const n of t)n.apply(this,e)}super.emit.apply(this,e),this._pid&&e.length&&typeof e[e.length-1]=="string"&&(this._lastOffset=e[e.length-1])}ack(e){const t=this;let n=!1;return function(...s){n||(n=!0,t.packet({type:We.ACK,id:e,data:s}))}}onack(e){const t=this.acks[e.id];typeof t=="function"&&(delete this.acks[e.id],t.withError&&e.data.unshift(null),t.apply(this,e.data))}onconnect(e,t){this.id=e,this.recovered=t&&this._pid===t,this._pid=t,this.connected=!0,this.emitBuffered(),this._drainQueue(!0),this.emitReserved("connect")}emitBuffered(){this.receiveBuffer.forEach(e=>this.emitEvent(e)),this.receiveBuffer=[],this.sendBuffer.forEach(e=>{this.notifyOutgoingListeners(e),this.packet(e)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(e=>e()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:We.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(e){return this.flags.compress=e,this}get volatile(){return this.flags.volatile=!0,this}timeout(e){return this.flags.timeout=e,this}onAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(e),this}prependAny(e){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(e),this}offAny(e){if(!this._anyListeners)return this;if(e){const t=this._anyListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(e),this}prependAnyOutgoing(e){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(e),this}offAnyOutgoing(e){if(!this._anyOutgoingListeners)return this;if(e){const t=this._anyOutgoingListeners;for(let n=0;n<t.length;n++)if(e===t[n])return t.splice(n,1),this}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(e){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){const t=this._anyOutgoingListeners.slice();for(const n of t)n.apply(this,e.data)}}}function _s(i){i=i||{},this.ms=i.min||100,this.max=i.max||1e4,this.factor=i.factor||2,this.jitter=i.jitter>0&&i.jitter<=1?i.jitter:0,this.attempts=0}_s.prototype.duration=function(){var i=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),t=Math.floor(e*this.jitter*i);i=(Math.floor(e*10)&1)==0?i-t:i+t}return Math.min(i,this.max)|0};_s.prototype.reset=function(){this.attempts=0};_s.prototype.setMin=function(i){this.ms=i};_s.prototype.setMax=function(i){this.max=i};_s.prototype.setJitter=function(i){this.jitter=i};class Ia extends bt{constructor(e,t){var n;super(),this.nsps={},this.subs=[],e&&typeof e=="object"&&(t=e,e=void 0),t=t||{},t.path=t.path||"/socket.io",this.opts=t,$r(this,t),this.reconnection(t.reconnection!==!1),this.reconnectionAttempts(t.reconnectionAttempts||1/0),this.reconnectionDelay(t.reconnectionDelay||1e3),this.reconnectionDelayMax(t.reconnectionDelayMax||5e3),this.randomizationFactor((n=t.randomizationFactor)!==null&&n!==void 0?n:.5),this.backoff=new _s({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(t.timeout==null?2e4:t.timeout),this._readyState="closed",this.uri=e;const s=t.parser||h_;this.encoder=new s.Encoder,this.decoder=new s.Decoder,this._autoConnect=t.autoConnect!==!1,this._autoConnect&&this.open()}reconnection(e){return arguments.length?(this._reconnection=!!e,e||(this.skipReconnect=!0),this):this._reconnection}reconnectionAttempts(e){return e===void 0?this._reconnectionAttempts:(this._reconnectionAttempts=e,this)}reconnectionDelay(e){var t;return e===void 0?this._reconnectionDelay:(this._reconnectionDelay=e,(t=this.backoff)===null||t===void 0||t.setMin(e),this)}randomizationFactor(e){var t;return e===void 0?this._randomizationFactor:(this._randomizationFactor=e,(t=this.backoff)===null||t===void 0||t.setJitter(e),this)}reconnectionDelayMax(e){var t;return e===void 0?this._reconnectionDelayMax:(this._reconnectionDelayMax=e,(t=this.backoff)===null||t===void 0||t.setMax(e),this)}timeout(e){return arguments.length?(this._timeout=e,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&this.backoff.attempts===0&&this.reconnect()}open(e){if(~this._readyState.indexOf("open"))return this;this.engine=new Oh(this.uri,this.opts);const t=this.engine,n=this;this._readyState="opening",this.skipReconnect=!1;const s=cn(t,"open",function(){n.onopen(),e&&e()}),r=a=>{this.cleanup(),this._readyState="closed",this.emitReserved("error",a),e?e(a):this.maybeReconnectOnOpen()},o=cn(t,"error",r);if(this._timeout!==!1){const a=this._timeout,c=this.setTimeoutFn(()=>{s(),r(new Error("timeout")),t.close()},a);this.opts.autoUnref&&c.unref(),this.subs.push(()=>{this.clearTimeoutFn(c)})}return this.subs.push(s),this.subs.push(o),this}connect(e){return this.open(e)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");const e=this.engine;this.subs.push(cn(e,"ping",this.onping.bind(this)),cn(e,"data",this.ondata.bind(this)),cn(e,"error",this.onerror.bind(this)),cn(e,"close",this.onclose.bind(this)),cn(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(e){try{this.decoder.add(e)}catch(t){this.onclose("parse error",t)}}ondecoded(e){Yr(()=>{this.emitReserved("packet",e)},this.setTimeoutFn)}onerror(e){this.emitReserved("error",e)}socket(e,t){let n=this.nsps[e];return n?this._autoConnect&&!n.active&&n.connect():(n=new kh(this,e,t),this.nsps[e]=n),n}_destroy(e){const t=Object.keys(this.nsps);for(const n of t)if(this.nsps[n].active)return;this._close()}_packet(e){const t=this.encoder.encode(e);for(let n=0;n<t.length;n++)this.engine.write(t[n],e.options)}cleanup(){this.subs.forEach(e=>e()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close")}disconnect(){return this._close()}onclose(e,t){var n;this.cleanup(),(n=this.engine)===null||n===void 0||n.close(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",e,t),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;const e=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{const t=this.backoff.duration();this._reconnecting=!0;const n=this.setTimeoutFn(()=>{e.skipReconnect||(this.emitReserved("reconnect_attempt",e.backoff.attempts),!e.skipReconnect&&e.open(s=>{s?(e._reconnecting=!1,e.reconnect(),this.emitReserved("reconnect_error",s)):e.onreconnect()}))},t);this.opts.autoUnref&&n.unref(),this.subs.push(()=>{this.clearTimeoutFn(n)})}}onreconnect(){const e=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",e)}}const Es={};function Is(i,e){typeof i=="object"&&(e=i,i=void 0),e=e||{};const t=Qg(i,e.path||"/socket.io"),n=t.source,s=t.id,r=t.path,o=Es[s]&&r in Es[s].nsps,a=e.forceNew||e["force new connection"]||e.multiplex===!1||o;let c;return a?c=new Ia(n,e):(Es[s]||(Es[s]=new Ia(n,e)),c=Es[s]),t.query&&!e.query&&(e.query=t.queryKey),c.socket(t.path,e)}Object.assign(Is,{Manager:Ia,Socket:kh,io:Is,connect:Is});function Il(i){let e=i>>>0||1;return()=>(e=e*1664525+1013904223>>>0)/4294967296}function mn(i,e={}){return new Li({color:i,flatShading:!0,roughness:.88,metalness:.05,...e})}function jr(i,e={}){return new Li({color:i,flatShading:!0,roughness:.68,metalness:.02,...e})}function zs(i,e={}){return new Li({color:i,flatShading:!0,roughness:.32,metalness:.78,...e})}function In(i,e={}){return new Li({color:i,flatShading:!0,roughness:.86,metalness:0,...e})}function Bh(i){return new Vt({color:i})}function Dt(i,e={}){return mn(i,e)}function si(i,e,t,n=!1){var o;const s=i.attributes.position,r=new Map;for(let a=0;a<s.count;a++){const c=`${s.getX(a).toFixed(3)},${s.getY(a).toFixed(3)},${s.getZ(a).toFixed(3)}`;r.has(c)||r.set(c,[(t()-.5)*e,(t()-.5)*e,(t()-.5)*e]);const[l,u,h]=r.get(c),d=n&&s.getY(a)<-.49*(((o=i.parameters)==null?void 0:o.height)??1);s.setXYZ(a,s.getX(a)+l,s.getY(a)+(d?0:u),s.getZ(a)+h)}return i.computeVertexNormals(),i}function Io(i,e=1,t="pine"){const n=new Qe,s=6703410,r=new G(new Ie(.12,.22,1.1,5),jr(s));if(r.position.y=.55,r.castShadow=!0,r.receiveShadow=!0,n.add(r),t==="cypress"){const o=[3104331,3829336,2379582],a=o[Math.floor(i()*o.length)],c=new G(si(new At(.55,2.8,6),.1,i),In(a));c.position.y=1.95,c.castShadow=!0,n.add(c)}else if(t==="cactus"){n.remove(r);const o=5669698,a=new G(new Ie(.18,.22,2,6),In(o));a.position.y=1,a.castShadow=!0,n.add(a);for(const c of[-1,1])if(i()>.2){const l=.8+i()*.3,u=new G(new Ie(.11,.12,.45,5),In(o));u.position.set(c*.28,1.1+i()*.25,0),u.rotation.z=-c*(Math.PI/2),u.castShadow=!0;const h=new G(new Ie(.1,.11,l,5),In(o));h.position.set(c*.5,1.1+l*.5,0),h.castShadow=!0,n.add(u,h)}}else if(t==="oak"){const o=[6262602,7315540,5407294,8037714],a=o[Math.floor(i()*o.length)],c=new Qe,l=[{x:0,y:1.6,z:0,s:.95},{x:.35,y:1.4,z:.2,s:.72},{x:-.32,y:1.35,z:-.22,s:.7},{x:.1,y:1.85,z:-.15,s:.65}];for(const u of l){const h=new G(new bn(u.s,0),In(a));h.position.set(u.x,u.y,u.z),h.rotation.set(i()*2,i()*2,i()*2),h.castShadow=!0,c.add(h)}n.add(c)}else{const o=[5077570,5933645,4090678,6855252],a=o[Math.floor(i()*o.length)],c=i()>.4?4:3;for(let l=0;l<c;l++){const u=.92-l*.17,h=1.15,d=new G(si(new At(u,h,6),.1,i),In(a));d.position.y=1.05+l*.58,d.rotation.y=i()*3,d.castShadow=!0,n.add(d)}}return n.scale.setScalar(e),n}function Ts(i,e,t=1){const n=new G(si(new bn(.65,0),.32,i),mn(e));return n.scale.set(t*(.85+i()*.5),t*(.55+i()*.45),t*(.85+i()*.5)),n.rotation.set(i()*.3,i()*6,i()*.3),n.castShadow=!0,n.receiveShadow=!0,n}function Ul(i=5914155,e=16760647){const t=new Qe,n=new G(new Ie(.08,.1,1.6,5),jr(i));n.position.y=.8,n.castShadow=!0;const s=new G(new Ke(.04,.18,.18),zs(2632240));s.position.set(0,1.45,.12);const r=new G(new Ie(.11,.08,.22,5),zs(2237480));r.position.set(0,1.35,.22),r.castShadow=!0;const o=new G(new bn(.07,0),Bh(e));return o.position.set(0,1.35,.22),t.add(n,s,r,o),t}function d_(i=7230011,e=1){const t=new Qe,n=new G(new Ke(.75,.75,.75),jr(i));n.castShadow=n.receiveShadow=!0;const s=new G(new Ke(.77,.08,.77),zs(3487808)),r=new G(new Ke(.77,.77,.08),zs(3487808));return t.add(n,s,r),t.scale.setScalar(e),t}class f_{constructor(e){const t=matchMedia("(pointer: coarse)").matches;this.renderer=new pg({canvas:e,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,t?1.75:2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ql,this.renderer.toneMapping=Yl,this.renderer.toneMappingExposure=1.15,this.scene=new mg,this.scene.background=new Ee(13623516),this.scene.fog=new Ds(13623516,120,350),this.camera=new Qt(42,1,.1,350),this.camTarget=new O(0,1,0),this.camera.position.set(0,14,18),this.camPos=new O(0,4,6),this.camLook=new O(0,1,0),this.arenaIntroT=0,this.hemi=new gg(16775144,6121564,1.5),this.sun=new xg(16772050,2.6),this.sun.position.set(-14,24,12),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(t?1024:2048,t?1024:2048);const n=this.sun.shadow.camera;n.left=n.bottom=-26,n.right=n.top=26,n.far=90,this.sun.shadow.bias=-4e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.hemi,this.sun),this.arenaGroup=new Qe,this.scene.add(this.arenaGroup),this.fx=[],this.shake=0,this.addPedestal(),addEventListener("resize",()=>this.resize()),this.resize()}resize(){const e=innerWidth,t=innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.fitSize&&this.fitArena(this.fitSize)}setSky(e,t=!1){this.scene.background.setHex(e),t?this.scene.fog=new Ds(e,160,450):this.scene.fog=new Ds(e,90,260)}addPedestal(){const e=new Qe,t=Il(7),n=new G(new Ie(2.4,2.4,.3,7),Dt(9680239));n.position.y=-.15,n.receiveShadow=!0;const s=new G(si(new At(2.4,2.6,7,2),.35,t),Dt(10259064));s.rotation.x=Math.PI,s.position.y=-1.6,s.castShadow=!0;const r=new G(new Ie(.95,1.05,.22,6),Dt(15126435));r.position.y=0,r.scale.y=.5,r.receiveShadow=!0,r.castShadow=!0;const o=Ul(7230011,16760386);o.position.set(-1.8,0,.8),o.rotation.y=.4,e.add(n,s,r,o);const a=Io(t,.8);a.position.set(-1.4,0,-1.2),e.add(a);const c=Io(t,.6);c.position.set(-.4,0,-1.9),e.add(c);const l=Ts(t,10259064,.6);l.position.set(1.5,.1,-1.1),e.add(l);const u=Ts(t,9407104,.35);u.position.set(1.8,.05,.6),e.add(u),this.pedestal=e,this.scene.add(e),this.showcaseGroup=new Qe,this.showcaseGroup.position.set(0,1.18,0),this.showcaseGroup.visible=!1,this.scene.add(this.showcaseGroup)}setShowcaseMesh(e){if(this.showcaseGroup.clear(),!e)return;const t=innerWidth<innerHeight;e.scale.setScalar(t?1.6:2.4),this.showcaseGroup.add(e)}showMenu(e="menu"){this.pedestal.visible=!0,this.arenaGroup.visible=!1,this.showcaseGroup.visible=e==="armory",this.fitSize=null,this.camMode=e,this.setSky(e==="armory"?14213080:13623516,!1)}fitArena(e){this.fitSize=e;const t=this.camera.aspect,n=ed.degToRad(this.camera.fov),r=e*2.12/2/Math.tan(n/2),o=t<1?Math.max(r*1.08,e*1.82/(2*Math.tan(n/2)*Math.max(t,.62))):r*1.02,a=t<1?1.06:1.02;this.camPos.set(0,Math.sin(a)*o,Math.cos(a)*o+(t<1?.6:0)),this.camLook.set(0,0,t<1?.8:.4)}buildArena(e,t){this.pedestal.visible=!1,this.showcaseGroup.visible=!1,this.arenaGroup.visible=!0,this.arenaGroup.clear(),this.camMode="arena";const n=e.theme;this.setSky(n.sky,!0),this.arena=e;const s=e.size,r=Il(s*97+e.id.length),o=e.shape==="circle",a=new qn(220,220,40,40);a.rotateX(-Math.PI/2);const c=a.attributes.position;for(let x=0;x<c.count;x++){const v=c.getX(x),R=c.getZ(x),T=Math.hypot(v,R),w=Math.max(0,T-s-6)*.06;c.setY(x,-1.6+(r()-.5)*.5+Math.min(w,4)+(T>s+30?r()*3:0))}a.computeVertexNormals();const l=new G(a,Dt(n.ground));l.receiveShadow=!0,this.arenaGroup.add(l);const u=new Qe,h=new Ee(n.floor);if(o){const x=Math.ceil(s/2.2);for(let v=0;v<x;v++){const R=v/x*s,T=(v+1)/x*s,w=Math.max(6,Math.round(6+v*5));for(let C=0;C<w;C++){const S=C/w*Math.PI*2,y=(C+1)/w*Math.PI*2,P=new zn(R+.04,T-.04,2,1,S+.006,y-S-.012);P.rotateX(-Math.PI/2);const B=h.clone().offsetHSL(0,0,(r()-.5)*.06),F=new G(P,Dt(B));F.receiveShadow=!0,u.add(F)}}}else{const x=s>12?2.5:2.25,v=Math.round(s*2/x),R=s*2/v;for(let T=0;T<v;T++)for(let w=0;w<v;w++){const C=h.clone().offsetHSL(0,0,(r()-.5)*.07+((T+w)%2?.015:-.015)),S=new G(new Ke(R-.08,.12,R-.08),Dt(C));S.position.set(-s+R*(T+.5),-.06,-s+R*(w+.5)),S.receiveShadow=!0,u.add(S)}}const d=Dt(h.clone().multiplyScalar(.72)),f=o?new G(new Ie(s,s,.2,48),d):new G(new Ke(s*2,.2,s*2),d);f.position.y=-.2,f.receiveShadow=!0,u.add(f),this.arenaGroup.add(u);const g=Dt(n.rock),_=o?new G(si(new Ie(s+.3,s+1.2,1.6,24,2),.35,r),g):new G(si(new Ke(s*2+.6,1.6,s*2+.6,8,2,8),.3,r),g);_.position.y=-1.1,_.receiveShadow=!0,_.castShadow=!0,this.arenaGroup.add(_);const m=Dt(n.line);if(o){const x=new G(new Vn(s,.14,4,48),m);x.rotation.x=Math.PI/2,x.position.y=.02,x.castShadow=!0,this.arenaGroup.add(x)}else{for(const[x,v,R,T]of[[0,s,s*2+.3,.3],[0,-s,s*2+.3,.3],[s,0,.3,s*2+.3],[-s,0,.3,s*2+.3]]){const w=new G(new Ke(R,.22,T),m);w.position.set(x,.05,v),w.castShadow=w.receiveShadow=!0,this.arenaGroup.add(w)}for(const[x,v]of[[s,s],[s,-s],[-s,s],[-s,-s]]){const R=new G(new Ie(.34,.44,1.3,6),mn(n.rock));R.position.set(x,.6,v),R.castShadow=!0;const T=new G(new Ie(.48,.48,.18,6),mn(n.line));T.position.y=.72,T.castShadow=!0,R.add(T);const w=Ul(n.line,16761933);w.position.set(x,1.32,v),this.arenaGroup.add(R,w)}}for(const x of e.obstacles){const v=new Qe;if(e.id==="sanctuary")if(Math.hypot(x.x,x.z)<1){const T=new G(new Ke(x.w,.45,x.d),mn(n.rock));T.position.y=.22,T.castShadow=T.receiveShadow=!0;const w=new G(new Ke(x.w*.75,.85,x.d*.75),mn(16184041));w.position.y=.85,w.castShadow=w.receiveShadow=!0;const C=new G(new cs(.45,0),Bh(4382975));C.position.y=1.85,v.add(T,w,C)}else{const T=x.w*.46,w=new G(new Ke(x.w,.28,x.d),mn(n.rock));w.position.y=.14,w.castShadow=w.receiveShadow=!0;const C=new G(new Ie(T*.88,T,1.8,8),mn(16052454));C.position.y=1.18,C.castShadow=C.receiveShadow=!0;const S=new G(new Ke(x.w*1.05,.22,x.d*1.05),mn(n.line));S.position.y=2.14,S.castShadow=!0,v.add(w,C,S)}else if(e.id==="bastion"){const R=x.w>=x.d,T=new G(new Ke(x.w,1.6,x.d),jr(7228984));T.position.y=.8,T.castShadow=T.receiveShadow=!0;const w=new G(new Ke(R?x.w+.05:x.w-.02,.18,R?x.d-.02:x.d+.05),zs(3487810));if(w.position.y=.95,Math.max(x.w,x.d)>2){const C=d_(5914155,.65);C.position.set(R?x.w*.28:0,.26,R?0:x.d*.28),v.add(C)}v.add(T,w)}else if(e.id==="forest"){const R=Ts(r,n.rock,Math.max(x.w,x.d)*.75);R.scale.set(x.w*.85,1.6,x.d*.85),R.position.y=.8;const T=new G(si(new Ke(x.w*.88,.2,x.d*.88,3,1,3),.08,r),In(5078075));T.position.y=1.65,T.castShadow=!0,v.add(R,T)}else{for(let S=0;S<3;S++){const y=x.w>=x.d,P=y?x.w:x.d,B=Math.max(1,Math.round(P/1.1)),F=S%2?.5:0;for(let Y=-F;Y<B;Y++){const j=Math.max(0,Y),X=Math.min(B,Y+1);if(X-j<.2)continue;const Q=(X-j)/B*P-.04,H=-P/2+(j+X)/2/B*P,re=new Ke(y?Q:x.w-.02,.6-.04,y?x.d-.02:Q),fe=new Ee(n.rock).offsetHSL(0,0,(r()-.5)*.08),me=new G(re,mn(fe));me.position.set(y?H:0,.6*(S+.5),y?0:H),me.castShadow=me.receiveShadow=!0,v.add(me)}}const w=e.id==="bastion"?n.line:n.accent,C=new G(si(new Ke(x.w+.08,.16,x.d+.08,3,1,3),.08,r),In(w));C.position.y=1.86,C.castShadow=!0,v.add(C)}v.position.set(x.x,0,x.z),this.arenaGroup.add(v)}const p=s+3,E=Math.round(s*3.5);for(let x=0;x<E;x++){const v=r()*Math.PI*2,R=p+r()*16,T=Math.cos(v)*R,w=Math.sin(v)*R,C=-1.6+Math.min(Math.max(0,R-s-6)*.06,4);let S="pine";e.id==="sanctuary"?S="cypress":e.id==="bastion"?S="cactus":e.id==="forest"?S=r()>.45?"oak":"pine":e.id==="dune"&&(S=r()>.6?"cactus":"pine");const y=r()>.35?Io(r,.85+r()*.9,S):Ts(r,n.rock,.75+r()*1.3);y.position.set(T,C,w),this.arenaGroup.add(y)}for(let x=0;x<20;x++){const v=r()*Math.PI*2,R=s+1.2+r()*2.2,T=Ts(r,n.rock,.25+r()*.35);T.position.set(Math.cos(v)*R,-1.45,Math.sin(v)*R),this.arenaGroup.add(T)}for(let x=0;x<26;x++){const v=r()*Math.PI*2,R=s+.6+r()*3.5,T=new G(new At(.12,.45,4),In(n.accent));T.position.set(Math.cos(v)*R,-.25,Math.sin(v)*R),T.rotation.set((r()-.5)*.35,r()*3,(r()-.5)*.35),this.arenaGroup.add(T)}if(this.zoneRing=null,o&&e.shrinkStep){const x=new G(new zn(s-.01,s,64),new Li({color:5910314,flatShading:!0,roughness:1,transparent:!0,opacity:.82}));x.rotation.x=-Math.PI/2,x.position.y=.012;const v=new G(new Vn(1,.012,4,64),Dt(n.line));v.rotation.x=Math.PI/2,v.position.y=.04;const R=new Qe;for(let T=0;T<28;T++){const w=new G(new At(.09,.55,4),Dt(n.accent)),C=T/28*Math.PI*2;w.position.set(Math.cos(C),.27,Math.sin(C)),w.castShadow=!0,R.add(w)}this.arenaGroup.add(x,v,R),this.zoneRing={danger:x,edge:v,stakes:R,cur:t,target:t},this.setZone(t,!0)}this.fitArena(s),this.camera.position.set(this.camPos.x-10,this.camPos.y*1.55,this.camPos.z*1.35),this.camTarget.set(0,2,0)}setZone(e,t){this.zoneRing&&(this.zoneRing.target=e,t&&(this.zoneRing.cur=e,this.zoneRing.last=void 0))}updateZone(e){const t=this.zoneRing;if(!t)return;t.cur+=(t.target-t.cur)*Math.min(1,e*2.5);const n=this.arena.size,s=t.cur;(t.last===void 0||Math.abs(t.last-s)>.01)&&(t.last=s,t.danger.geometry.dispose(),t.danger.geometry=new zn(s,n+.01,64),t.edge.scale.set(s,s,1),t.stakes.children.forEach((r,o)=>{const a=o/t.stakes.children.length*Math.PI*2;r.position.set(Math.cos(a)*s,.27,Math.sin(a)*s)}))}beam(e,t,n,s,r,o=0,a="blaster"){const c=Math.max(.01,Math.hypot(n-e,s-t)),l=new Qe,u=a==="orbital"?.48:a==="vortex"?.36:a==="bazooka"?.3:a==="shark"?.22:a==="zeus"?.24:a==="royal"?.2:.16,h=a==="orbital"?new Ee("#ffe26a"):a==="vortex"?new Ee("#9b4df0"):a==="zeus"?new Ee("#46d2ff"):a==="duck"?new Ee("#f2c12e"):r,d=a==="orbital"?16777215:a==="vortex"?2822218:a==="royal"?16770713:16777215,f=new G(new Ke(1,u,u),new Vt({color:h,transparent:!0,opacity:a==="vortex"?.92:.85})),g=new G(new Ke(1,u*.45,u*1.15),new Vt({color:d,transparent:!0}));f.position.x=g.position.x=.5,l.add(f,g),l.position.set(e,.95,t),l.rotation.y=-Math.atan2(s-t,n-e),l.scale.set(.001,1,1),l.visible=!1,this.scene.add(l);const _=new G(new qn(1,u*1.4),new Vt({color:0,transparent:!0,opacity:.18,depthWrite:!1}));_.geometry.translate(.5,0,0),_.rotation.x=-Math.PI/2;const m=new Qe;m.add(_),m.position.set(e,.02,t),m.rotation.y=l.rotation.y,m.visible=!1,this.scene.add(m);let p=!1;this.fx.push({t:-o,life:1.3,update:E=>{if(E<0)return;l.visible=m.visible=!0;const x=Math.min(1,E/.1);l.scale.set(c*x,1,1),_.scale.x=c*x,x>=1&&!p&&(p=!0,this.chips(n,.95,s,h,a==="bazooka"?18:10,a==="bazooka"?.75:.5));const v=E>.6?Math.max(0,1-(E-.6)/.6):1,R=a==="tesla"?.85+Math.sin(E*70)*.3:1,T=(E>.6?v:1)*R;l.scale.y=l.scale.z=T,f.material.opacity=v,g.material.opacity=v,_.material.opacity=.18*v},dispose:()=>{this.scene.remove(l,m)}}),this.shake=Math.max(this.shake,a==="bazooka"?.3:.18)}grenadeLob(e,t,n,s,r,o=3.2,a=0){const c=new G(new Bn(.24,0),Dt("#4b6b3e"));c.castShadow=!0,c.visible=!1,this.scene.add(c);const l=new zn(.1,o,28);l.rotateX(-Math.PI/2);const u=new Vt({color:15228988,transparent:!0,opacity:0}),h=new G(l,u);h.position.set(n,.04,s),h.visible=!1,this.scene.add(h);const d=new G(new Bn(o*.72,1),Dt(15903035,{transparent:!0,opacity:0}));d.position.set(n,.2,s),d.visible=!1,this.scene.add(d);let f=!1;const g=.35;this.fx.push({t:-a,life:1.35,update:_=>{if(!(_<0))if(_<g){c.visible=!0;const m=_/g;c.position.set(e+(n-e)*m,.95*(1-m)+Math.sin(m*Math.PI)*3.4,t+(s-t)*m),c.rotation.x+=.25,c.rotation.z+=.2}else{c.visible=!1,f||(f=!0,h.visible=d.visible=!0,this.chips(n,.6,s,new Ee("#e8603c"),38,1.35),this.chips(n,.4,s,r,20,1.1),this.shake=Math.max(this.shake,.55));const m=(_-g)/(1.35-g);h.scale.setScalar(.35+m*.75),u.opacity=Math.max(0,.85*(1-m)),d.scale.setScalar(.5+m*1.15),d.material.opacity=Math.max(0,.85*(1-m*1.25)),d.rotation.y=m*2.5}},dispose:()=>{this.scene.remove(c,h,d),c.geometry.dispose(),l.dispose(),u.dispose(),d.geometry.dispose(),d.material.dispose()}})}chips(e,t,n,s,r=24,o=1){const a=new Ja(.12,0),c=Dt(s,{transparent:!0}),l=[];for(let u=0;u<r;u++){const h=new G(a,c);h.position.set(e+(Math.random()-.5)*.4,t+(Math.random()-.3)*.8,n+(Math.random()-.5)*.4),h.scale.setScalar(.6+Math.random()*1.2),h.castShadow=!0;const d=new O((Math.random()-.5)*6*o,(1.5+Math.random()*4)*o,(Math.random()-.5)*6*o),f=new O(Math.random()*8,Math.random()*8,Math.random()*8);l.push({m:h,v:d,spin:f}),this.scene.add(h)}this.fx.push({t:0,life:1.5,update:(u,h)=>{for(const d of l)d.v.y-=14*h,d.m.position.addScaledVector(d.v,h),d.m.position.y<.06&&(d.m.position.y=.06,d.v.y*=-.35,d.v.x*=.7,d.v.z*=.7,d.spin.multiplyScalar(.7)),d.m.rotation.x+=d.spin.x*h,d.m.rotation.y+=d.spin.y*h,d.m.rotation.z+=d.spin.z*h;c.opacity=u>1?1-(u-1)/.5:1},dispose:()=>{for(const u of l)this.scene.remove(u.m);a.dispose(),c.dispose()}})}burst(e,t,n){this.chips(e,.9,t,n,34,1);const s=new G(new Bn(.7,0),new Li({color:16052198,flatShading:!0,transparent:!0,roughness:1}));s.position.set(e,.9,t),this.scene.add(s),this.fx.push({t:0,life:.7,update:r=>{const o=r/.7;s.scale.setScalar(1+o*2.2),s.material.opacity=.9*(1-o),s.rotation.y=o*2},dispose:()=>{this.scene.remove(s),s.geometry.dispose(),s.material.dispose()}}),this.shake=Math.max(this.shake,.4)}coinShower(e=30){const t=new Ie(.18,.18,.055,8),n=new Ie(.12,.12,.068,6),s=Dt(16757568,{transparent:!0}),r=Dt(14254616,{transparent:!0}),o=[];for(let a=0;a<e;a++){const c=new Qe,l=new G(t,s),u=new G(n,r);l.castShadow=!0,c.add(l,u);const h=Math.random()*Math.PI*2,d=.15+Math.random()*1.35;c.position.set(Math.cos(h)*d,2.5+Math.random()*2.2,Math.sin(h)*d),c.rotation.set(Math.random()*6,Math.random()*6,Math.random()*6);const f=new O((Math.random()-.5)*1.4,-1.5-Math.random()*2.5,(Math.random()-.5)*1.4),g=new O((Math.random()-.5)*14,(Math.random()-.5)*14,(Math.random()-.5)*14);o.push({grp:c,v:f,spin:g}),this.scene.add(c)}this.fx.push({t:0,life:2.2,update:(a,c)=>{for(const u of o)u.v.y-=13.5*c,u.grp.position.addScaledVector(u.v,c),u.grp.position.y<.08&&(u.grp.position.y=.08,u.v.y*=-.48,u.v.x*=.78,u.v.z*=.78,u.spin.multiplyScalar(.75)),u.grp.rotation.x+=u.spin.x*c,u.grp.rotation.y+=u.spin.y*c,u.grp.rotation.z+=u.spin.z*c;const l=a>1.6?Math.max(0,1-(a-1.6)/.6):1;s.opacity=l,r.opacity=l},dispose:()=>{for(const a of o)this.scene.remove(a.grp);t.dispose(),n.dispose(),s.dispose(),r.dispose()}})}update(e,t){this.updateZone(e);for(let s=this.fx.length-1;s>=0;s--){const r=this.fx[s];r.t+=e,r.update(r.t,e),r.t>r.life&&(r.dispose(),this.fx.splice(s,1))}const n=this.camera.aspect<1;if(this.camMode==="menu"){const s=t*.15;this.camPos.set(Math.sin(s)*.6+4.5,2.4,Math.cos(s)*.6+2.4),this.camLook.set(0,n?.6:1,0),n&&this.camPos.multiplyScalar(1.3)}else if(this.camMode==="custom"){const s=n?4.8:4.1;this.camPos.set(0,1.75,s),this.camLook.set(0,.35,0)}else if(this.camMode==="armory"){const s=n?3.85:2.95;this.camPos.set(0,n?1.62:1.52,s),this.camLook.set(0,n?1.05:.86,0),this.showcaseGroup.visible&&(this.showcaseGroup.position.y=(n?1.28:1.18)+Math.sin(t*2.5)*.04)}this.camera.position.lerp(this.camPos,Math.min(1,e*4)),this.camTarget.lerp(this.camLook,Math.min(1,e*4)),this.shake>0&&(this.camera.position.x+=(Math.random()-.5)*this.shake,this.camera.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-e*1.5)),this.camera.lookAt(this.camTarget),this.renderer.render(this.scene,this.camera)}}const Vs=["#e8603c","#3d7fd9","#e6b52e","#4fa36b","#8a5cc7","#2fa6a0","#f1ebe0","#3a3a46"],Gs=["#e8603c","#3d7fd9","#e6b52e","#4fa36b","#d94a8c","#f1ebe0"],sc={none:"Aucun",cap:"Casquette",crown:"Couronne",cone:"Fête",halo:"Auréole",horns:"Cornes"},rc={happy:"Joyeux",cool:"Cool",angry:"Vénère",cute:"Mignon"},Nl="#22202b",Uo=new Map;function p_(i){if(Uo.has(i))return Uo.get(i);const e=document.createElement("canvas");e.width=e.height=128;const t=e.getContext("2d");t.fillStyle=Nl,t.strokeStyle=Nl,t.lineWidth=7,t.lineCap="round";const n=(r,o,a=10)=>{t.beginPath(),t.ellipse(r,o,a*.8,a*1.1,0,0,7),t.fill()};i==="cool"?(t.beginPath(),t.roundRect(22,46,38,18,4),t.roundRect(68,46,38,18,4),t.fill(),t.fillRect(56,50,16,5),t.beginPath(),t.moveTo(50,90),t.lineTo(80,86),t.stroke()):i==="angry"?(n(44,64,8),n(84,64,8),t.beginPath(),t.moveTo(30,44),t.lineTo(56,54),t.moveTo(98,44),t.lineTo(72,54),t.stroke(),t.beginPath(),t.moveTo(50,96),t.lineTo(78,96),t.stroke()):i==="cute"?(n(42,60,13),n(86,60,13),t.fillStyle="rgba(226,110,110,.45)",t.beginPath(),t.ellipse(28,82,9,6,0,0,7),t.ellipse(100,82,9,6,0,0,7),t.fill(),t.beginPath(),t.arc(64,84,7,.1,Math.PI-.1),t.stroke()):(n(44,58),n(84,58),t.beginPath(),t.arc(64,76,18,.2*Math.PI,.8*Math.PI),t.stroke());const s=new Ka(e);return s.colorSpace=Yt,Uo.set(i,s),s}function Ce(i,e={}){return new Li({color:i,roughness:.75,metalness:0,flatShading:!0,transparent:!0,...e})}function m_(i,e,t){const n=new Qe;if(i==="cap"){const s=Ce(e,{roughness:.7}),r=new G(new Bs(.33,7,5,0,Math.PI*2,0,Math.PI*.58),s);r.scale.set(1.05,.85,1.05),r.position.y=.16;const o=new G(new Ke(.26,.03,.28),s);o.position.set(.24,.17,0),o.rotation.z=-.12;const a=new G(new Ie(.04,.04,.03,5),Ce(t));a.position.y=.38,n.add(r,o,a),n.position.y=.22}else if(i==="crown"){const s=Ce("#f0be3d",{roughness:.28,metalness:.8}),r=Ce("#d9384a",{roughness:.2,metalness:.3}),o=new G(new Ie(.3,.28,.14,8,1,!0),s);o.position.y=.07,n.add(o);for(let a=0;a<8;a++){const c=a/8*Math.PI*2,l=Math.cos(c)*.29,u=Math.sin(c)*.29,h=new G(new At(.065,.18,4),s);if(h.position.set(l,.2,u),n.add(h),a%2===0){const d=new G(new cs(.035,0),r);d.position.set(l*1.05,.08,u*1.05),n.add(d)}}n.position.y=.36}else if(i==="cone"){const s=Ce("#e84d5d",{roughness:.65}),r=new G(new At(.2,.52,7),s);r.rotation.z=-.15,r.position.y=.26;const o=new G(new bn(.075,0),Ce("#fbf7f0",{roughness:.9}));o.position.set(-.06,.52,0),n.add(r,o),n.position.y=.35}else if(i==="halo"){const s=Ce("#ffd84d",{roughness:.25,metalness:.6}),r=new G(new Vn(.28,.038,5,12),s);r.rotation.x=Math.PI/2,n.add(r),n.position.y=.62,n.userData.spin=r}else if(i==="horns"){const s=Ce("#eee4d4",{roughness:.6});for(const r of[-1,1]){const o=new Qe,a=new G(new At(.08,.26,5),s);a.position.y=.13;const c=new G(new At(.06,.22,5),s);c.position.set(.04,.28,0),c.rotation.z=-.35,o.add(a,c),o.position.set(-.05,.28,r*.24),o.rotation.x=r*.45,o.rotation.y=-r*.2,n.add(o)}n.position.y=.24}return n}function oc(i,e,t){const n=new Qe,s=new G(new bn(.1,0),t);if(n.add(s),i==="grenade"){const c=new G(new Bn(.19,0),Ce("#4b6b3e",{roughness:.6}));c.position.set(.14,.06,0),c.scale.set(1,1.2,1),c.castShadow=!0;const l=new G(new Ie(.06,.07,.08,6),Ce("#8a8a90",{metalness:.4}));l.position.set(.14,.26,0);const u=new G(new Vn(.055,.015,4,8),Ce("#e6b52e"));return u.position.set(.18,.28,.04),n.add(c,l,u),n}if(i==="bazooka"){const c=new G(new Ie(.12,.09,.58,7),Ce("#2d2e38",{roughness:.45}));c.rotation.z=Math.PI/2,c.position.x=.18,c.castShadow=!0;const l=new G(new Ie(.21,.12,.22,7),Ce("#d9a93a",{metalness:.35,roughness:.4}));l.rotation.z=-Math.PI/2,l.position.x=.52,l.castShadow=!0;const u=new G(new Ie(.135,.135,.09,7),Ce(e));return u.rotation.z=Math.PI/2,u.position.x=.24,n.add(c,l,u),n}if(i==="duck"){const c=Ce("#f2c12e",{roughness:.5}),l=new G(new Bn(.2,1),c);l.scale.set(1.35,.9,.95),l.position.set(.16,0,0),l.castShadow=!0;const u=new G(new Bn(.15,1),c);u.position.set(.36,.14,0),u.castShadow=!0;const h=new G(new At(.09,.22,5),Ce("#e8603c"));h.rotation.z=-Math.PI/2,h.position.set(.54,.13,0);for(const d of[-1,1]){const f=new G(new Bs(.03,5,5),Ce("#22202b"));f.position.set(.41,.19,d*.11),n.add(f)}return n.add(l,u,h),n}if(i==="tesla"){const c=new G(new Ie(.06,.08,.56,6),Ce("#4a5262",{metalness:.4}));c.rotation.z=Math.PI/2,c.position.x=.2,c.castShadow=!0;for(const u of[.18,.34]){const h=new G(new Vn(.14,.03,5,8),Ce("#d9a93a",{metalness:.5}));h.rotation.y=Math.PI/2,h.position.x=u,n.add(h)}const l=new G(new Bn(.11,0),Ce(e));return l.position.x=.54,n.add(c,l),n}if(i==="shark"){const c=Ce("#4e6e8e"),l=new G(new At(.17,.68,6),c);l.rotation.z=-Math.PI/2,l.position.x=.25,l.castShadow=!0;const u=new G(new At(.09,.24,4),c);u.position.set(.2,.2,0),u.rotation.z=.25;const h=new G(new At(.13,.2,4),c);h.rotation.z=Math.PI/2,h.position.x=-.08;const d=new G(new Ie(.07,.07,.12,6),Ce(e));return d.rotation.z=Math.PI/2,d.position.x=.54,n.add(l,u,h,d),n}if(i==="royal"){const c=new G(new Ie(.045,.055,.66,6),Ce("#d9a93a",{metalness:.55,roughness:.35}));c.rotation.z=Math.PI/2,c.position.x=.22,c.castShadow=!0;const l=new G(new Ie(.12,.06,.14,6),Ce("#d9a93a",{metalness:.55}));l.rotation.z=-Math.PI/2,l.position.x=.5;const u=new G(new cs(.13,0),Ce(e,{roughness:.25}));return u.position.x=.62,n.add(c,l,u),n.userData.spinGem=u,n}if(i==="vortex"){const c=Ce("#181424",{roughness:.35,metalness:.3}),l=new G(new Ie(.09,.13,.52,7),c);l.rotation.z=Math.PI/2,l.position.x=.22,l.castShadow=!0;const u=new G(new Vn(.16,.025,4,10),Ce("#7a3cd9",{metalness:.5}));u.rotation.y=Math.PI/2,u.position.x=.38;const h=new G(new Vn(.2,.022,4,10),Ce("#d93cb0",{metalness:.5}));h.rotation.y=Math.PI/2,h.position.x=.5;const d=new G(new bn(.12,0),Ce("#2b104a",{roughness:.2}));return d.position.x=.52,n.add(l,u,h,d),n.userData.spinGem=h,n}if(i==="zeus"){const c=Ce("#d9a93a",{metalness:.65,roughness:.3}),l=new G(new Ie(.05,.06,.44,6),Ce("#22202b"));l.rotation.z=Math.PI/2,l.position.x=.16;const u=new G(new Ke(.08,.32,.08),c);u.position.x=.34;for(const h of[-.13,0,.13]){const d=new G(new At(.035,.28,5),c);d.rotation.z=-Math.PI/2,d.position.set(.48,h,0);const f=new G(new cs(.045,0),Ce("#42d9ff",{roughness:.2}));f.position.set(.64,h,0),n.add(d,f)}return n.add(l,u),n}if(i==="orbital"){const c=Ce("#353b4d",{metalness:.45,roughness:.4}),l=new G(new Ke(.72,.16,.14),c);l.position.x=.28,l.castShadow=!0;const u=new G(new Ie(.04,.04,.62,6),Ce("#d9a93a",{metalness:.6}));u.rotation.z=Math.PI/2,u.position.set(.28,.11,0);const h=new G(new Ie(.24,.08,.14,8),Ce("#202430",{metalness:.6}));h.rotation.z=-Math.PI/2,h.position.x=.66;const d=new G(new Bs(.09,8,8),Ce("#ffdc62",{roughness:.1}));return d.position.x=.7,n.add(l,u,h,d),n}const r=new G(new Ke(.55,.16,.14),Ce("#3a3a46",{roughness:.5}));r.position.x=.15,r.castShadow=!0;const o=new G(new Ie(.055,.055,.1,6),Ce(e));o.rotation.z=Math.PI/2,o.position.x=.46;const a=new G(new Ke(.36,.04,.15),Ce(e));return a.position.set(.12,.06,0),n.add(r,o,a),n}function ac(i){const e=new Qe,t=new Qe;e.add(t);const n=Ce("#f2cca6",{roughness:.75,metalness:0}),s=new Ee(i.body),r=s.clone().multiplyScalar(.55),o=s.clone().multiplyScalar(.35),a=Ce(s,{roughness:.72}),c=Ce(r,{roughness:.82}),l=Ce("#2a2320",{roughness:.55,metalness:.1}),u=Ce("#d9a93a",{roughness:.35,metalness:.7}),h=new Qe;h.position.y=.88;const d=new G(new Ie(.32,.25,.52,6),a);d.scale.set(1.15,1,.9),d.castShadow=!0,d.receiveShadow=!0;const f=new G(new Ie(.2,.24,.1,6,1,!0),Ce(r));f.position.y=.28,f.scale.set(1.1,1,.95);const g=new G(new Ie(.12,.13,.14,5),n);g.position.y=.32;const _=new G(new Ie(.265,.265,.09,6),l);_.position.y=-.25,_.scale.set(1.12,1,.92);const m=new G(new Ke(.04,.08,.1),u);m.position.set(.29,-.25,0);const p=new G(new Ke(.08,.12,.12),l);p.position.set(.05,-.25,-.26),p.rotation.y=-.15,h.add(d,f,g,_,m,p),t.add(h);const E=new Qe;E.position.y=1.48;const x=new G(new bn(.29,0),n);x.scale.set(1.02,1.15,.98),x.castShadow=!0;const v=Ce(o,{roughness:.85}),R=new G(new At(.26,.22,5),v);R.position.set(-.06,.24,0),R.rotation.z=.35,R.rotation.y=.2;const T=new G(new qn(.42,.42),new Vt({map:p_(i.face),transparent:!0}));T.position.set(.28,.02,0),T.rotation.y=Math.PI/2;const w=m_(i.hat,s.getStyle(),r.getStyle());E.add(x,R,T,w),t.add(E);const C=[];for(const fe of[-1,1]){const me=new Qe;me.position.set(0,.58,fe*.15);const Ne=new G(new Ie(.11,.09,.3,5),c);Ne.position.y=-.15,Ne.castShadow=!0;const et=new G(new Ie(.09,.08,.26,5),c);et.position.y=-.38,et.castShadow=!0;const $=new G(new Ke(.26,.13,.15),l);$.position.set(.05,-.52,0),$.castShadow=!0;const te=new G(new Ke(.28,.03,.16),Ce("#171518",{roughness:.9}));te.position.set(.05,-.59,0),te.receiveShadow=!0,me.add(Ne,et,$,te),C.push(me),t.add(me)}const S=new Qe;S.position.set(.06,1.05,.26);const y=new G(new Ie(.08,.07,.24,5),a);y.position.set(.08,-.1,0),y.rotation.z=-.65,y.rotation.y=.25;const P=new G(new Ie(.07,.08,.24,5),a);P.position.set(.24,-.16,-.04),P.rotation.z=-1.25,S.add(y,P);const B=new Ee(i.laser),F=new Qe;F.position.set(.38,.88,.2);const Y=oc(i.weapon||"blaster",B,a);F.add(Y);const j=new Qe;j.position.set(.04,1.05,-.26);const X=new G(new Ie(.08,.07,.24,5),a);X.position.set(.06,-.1,0),X.rotation.z=-.55,X.rotation.y=-.35;const Q=new G(new Ie(.07,.08,.22,5),a);Q.position.set(.2,-.14,.08),Q.rotation.z=-1.15,Q.rotation.y=-.45;const H=new G(new bn(.09,0),n);H.position.set(.31,.82,-.06),j.add(X,Q),t.add(S,F,j,H);const re=new G(new zn(.68,.82,6),new Vt({color:B,transparent:!0,opacity:.88,side:tn}));return re.rotation.x=-Math.PI/2,re.position.y=.02,e.add(re),e.userData={model:t,torsoG:h,headG:E,legs:C,feet:C,rightArmG:S,leftArmG:j,leftHand:H,ring:re,gunHolder:F,gun:Y,bodyMat:a,laserColor:B,weaponId:i.weapon||"blaster",walk:0,hat:w},e}function Gn(i,e){const t=i==null?void 0:i.userData;!t||t.weaponId===e||(t.weaponId=e,t.gunHolder.clear(),t.gun=oc(e,t.laserColor,t.bodyMat),t.gunHolder.add(t.gun))}function g_(i,e="#e89b3c"){const t=new Qe,n=new Ee(e),s=Ce("#3a3a46",{roughness:.55}),r=oc(i,n,s);return r.children.length>1&&r.remove(r.children[0]),r.position.x=i==="grenade"?-.05:-.22,i==="grenade"&&r.scale.setScalar(1.45),t.add(r),t.userData={weaponMesh:r,weaponId:i},t}function Ua(i,e,t,n){var c,l,u,h;const s=i.userData;if(!s||!s.legs||s.legs.length<2)return;t?s.walk+=e*11:s.walk*=.82;const r=Math.sin(s.walk);Math.cos(s.walk),s.legs[0].rotation.z=r*.55,s.legs[1].rotation.z=-r*.55,s.leftArmG&&(s.leftArmG.rotation.x=-r*.35),s.rightArmG&&(s.rightArmG.rotation.x=r*.2);const o=Math.abs(r)*.07,a=Math.sin(n*2.4)*.016;s.model.position.y=o+a,s.torsoG&&(s.torsoG.rotation.z=t?.06:0,s.torsoG.rotation.y=r*.05),s.headG&&(s.headG.rotation.z=Math.sin(n*1.6)*.035,s.headG.position.y=1.48+a*.5),(l=(c=s.hat)==null?void 0:c.userData)!=null&&l.spin&&(s.hat.rotation.y+=e*2.2),(h=(u=s.gun)==null?void 0:u.userData)!=null&&h.spinGem&&(s.gun.userData.spinGem.rotation.x+=e*3.2),s.ring&&(s.ring.rotation.z+=e*.5)}function Xn(i,e){i.traverse(t=>{t.material&&(t.material.opacity=e,t.material.depthWrite=e>.95)}),i.visible=e>.01}const Br=5e3,zh=4e3,ls=6,$t=.6,__=60,Hs=6,v_=5,x_=20,Us=10,ci=8.5,li=3.2,fi={blaster:{id:"blaster",name:"Blaster Classique",price:0,desc:"Précis et équilibré. Le standard de tout tireur."},bazooka:{id:"bazooka",name:"Méga-Tromblon",price:15,desc:"Gros canon évasé au son de plasma lourd."},duck:{id:"duck",name:"Canard-Laser",price:25,desc:"Un canard en plastique qui tire par le bec avec un coin-coin."},tesla:{id:"tesla",name:"Bobine Tesla",price:40,desc:"Propulse un arc électrique crépitant à haute tension."},shark:{id:"shark",name:"Requin-Canon",price:55,desc:"Mini-requin féroce à aileron dorsal et tir sonar."},royal:{id:"royal",name:"Sceptre Royal",price:75,desc:"Sceptre doré serti d'un cristal rubis résonnant."},vortex:{id:"vortex",name:"Vortex Cosmique",price:85,desc:"Canon à gravité obscure projetant une onde d'impact élargie."},zeus:{id:"zeus",name:"Triple Foudre",price:110,desc:"Foudroyeur divin : projette 3 éclairs en éventail pour faucher plusieurs cibles !"},orbital:{id:"orbital",name:"Canon Orbital",price:145,desc:"Satellite photonique : rayon colossal géant qui pulvérise toute l'arène."}},Gt={neon:{id:"neon",name:"Le Plateau",desc:"Petite arène ouverte. Nulle part où se cacher.",shape:"square",size:9,obstacles:[],theme:{floor:15126435,line:11039564,accent:7314012,sky:13623516,ground:9680239,rock:10259064}},ruins:{id:"ruins",name:"Ruines",desc:"Grande arène avec des murs qui bloquent les lasers.",shape:"square",size:15,obstacles:[{x:-7,z:-6,w:4,d:1.2},{x:7,z:6,w:4,d:1.2},{x:6,z:-7,w:1.2,d:4},{x:-6,z:7,w:1.2,d:4},{x:0,z:0,w:2.2,d:2.2},{x:-11,z:1,w:1.2,d:3},{x:11,z:-1,w:1.2,d:3}],theme:{floor:13220246,line:8219221,accent:6261326,sky:14275264,ground:8364128,rock:9407104}},vise:{id:"vise",name:"L'Étau",desc:"Arène ronde qui rétrécit à chaque élimination.",shape:"circle",size:13,shrinkStep:2.2,minSize:4.5,obstacles:[],theme:{floor:9413544,line:13654074,accent:14721850,sky:15257520,ground:7307124,rock:6185830}},sanctuary:{id:"sanctuary",name:"Le Sanctuaire",desc:"Temple circulaire bordé de colonnes antiques et autel central.",shape:"circle",size:14,obstacles:[{x:0,z:0,w:2.4,d:2.4},{x:6.5,z:0,w:1.5,d:1.5},{x:-6.5,z:0,w:1.5,d:1.5},{x:0,z:6.5,w:1.5,d:1.5},{x:0,z:-6.5,w:1.5,d:1.5},{x:4.6,z:4.6,w:1.4,d:1.4},{x:-4.6,z:4.6,w:1.4,d:1.4},{x:4.6,z:-4.6,w:1.4,d:1.4},{x:-4.6,z:-4.6,w:1.4,d:1.4}],theme:{floor:15722973,line:12884549,accent:4029032,sky:14018032,ground:8169090,rock:12103842}},bastion:{id:"bastion",name:"Le Canyon",desc:"Quatre bastions rocheux forment une croisée fatale au centre.",shape:"square",size:13.5,obstacles:[{x:-5.2,z:-3.2,w:4.2,d:1.4},{x:-3.8,z:-5.6,w:1.4,d:3.4},{x:5.2,z:3.2,w:4.2,d:1.4},{x:3.8,z:5.6,w:1.4,d:3.4},{x:5.2,z:-3.2,w:4.2,d:1.4},{x:3.8,z:-5.6,w:1.4,d:3.4},{x:-5.2,z:3.2,w:4.2,d:1.4},{x:-3.8,z:5.6,w:1.4,d:3.4}],theme:{floor:14394235,line:9387817,accent:7048782,sky:15915458,ground:12877142,rock:10376249}}};function It(i,e,t,n){if(i.shape==="circle"){const s=Math.max(.1,e-$t),r=Math.hypot(t,n);r>s&&(t=t/r*s,n=n/r*s)}else{const s=e-$t;t=Math.max(-s,Math.min(s,t)),n=Math.max(-s,Math.min(s,n))}for(const s of i.obstacles){const r=s.w/2+$t,o=s.d/2+$t,a=t-s.x,c=n-s.z;if(Math.abs(a)<r&&Math.abs(c)<o){const l=r-Math.abs(a),u=o-Math.abs(c);l<u?t=s.x+Math.sign(a||1)*r:n=s.z+Math.sign(c||1)*o}}return[t,n]}function y_(i,e,t,n,s){const r=s.x-s.w/2,o=s.x+s.w/2,a=s.z-s.d/2,c=s.z+s.d/2;let l=-1/0,u=1/0;if(Math.abs(t)<1e-9){if(i<r||i>o)return 1/0}else{let h=(r-i)/t,d=(o-i)/t;h>d&&([h,d]=[d,h]),l=Math.max(l,h),u=Math.min(u,d)}if(Math.abs(n)<1e-9){if(e<a||e>c)return 1/0}else{let h=(a-e)/n,d=(c-e)/n;h>d&&([h,d]=[d,h]),l=Math.max(l,h),u=Math.min(u,d)}return u<Math.max(l,0)?1/0:l>0?l:1/0}function M_(i,e,t,n,s,r,o){const a=i-s,c=e-r,l=a*t+c*n,u=a*a+c*c-o*o,h=l*l-u;if(h<0)return 1/0;const d=-l-Math.sqrt(h);return d>0?d:1/0}function cc(i,e,t,n){var u;const s=((u=t.look)==null?void 0:u.weapon)||t.weapon||"blaster",r=new Set,o=[];function a(h,d=$t){const f=Math.cos(h),g=Math.sin(h),_=t.x+f*($t+.05),m=t.z+g*($t+.05);let p=__,E=null;for(const x of i.obstacles){const v=y_(_,m,f,g,x);v<p&&(p=v,E=null)}for(const x of n){if(x===t||x.id===t.id)continue;const v=M_(_,m,f,g,x.x,x.z,d);v<p&&(p=v,E=x)}if(i.shape==="square"){const x=e,v=f>0?(x-_)/f:f<0?(-x-_)/f:1/0,R=g>0?(x-m)/g:g<0?(-x-m)/g:1/0,T=Math.min(v,R);T<p&&(p=T,E=null)}else{const x=_*f+m*g,v=_*_+m*m-e*e,R=-x+Math.sqrt(Math.max(0,x*x-v));R<p&&(p=R,E=null)}return E&&r.add(E.id),{x:_,z:m,ex:_+f*p,ez:m+g*p,hit:E}}let c;if(s==="zeus"){const d=[t.angle-.26,t.angle,t.angle+.26].map(f=>a(f,$t*1.05));c=d[1],o.push(d[0],d[1],d[2])}else s==="orbital"?(c=a(t.angle,$t*1.55),o.push(c)):s==="vortex"?(c=a(t.angle,$t*1.35),o.push(c)):(c=a(t.angle,$t),o.push(c));const l=n.filter(h=>r.has(h.id));return{x:c.x,z:c.z,ex:c.ex,ez:c.ez,hit:l[0]||null,hits:l,subBeams:o}}function lc(i,e,t,n){const s=Math.cos(t.angle),r=Math.sin(t.angle),o=t.x+s*.5,a=t.z+r*.5,c=t.x+s*ci,l=t.z+r*ci,[u,h]=It(i,e,c,l),d=[];for(const f of n)f!==t&&Math.hypot(f.x-u,f.z-h)<=li+$t*.5&&d.push(f);return{x:o,z:a,ex:u,ez:h,hits:d}}class S_{constructor(){this.ctx=null,this.muted=!1,this.uiStep=0}init(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}return this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx}rand(e,t){return e+Math.random()*(t-e)}ui(e="tap"){if(this.muted)return;const t=this.init();if(!t)return;const n=t.currentTime,s=[261.6,293.7,329.6,392,440,523.3,587.3,659.3];this.uiStep=(this.uiStep+1+Math.floor(Math.random()*2))%s.length;const r=s[this.uiStep]*this.rand(.985,1.015);if(e==="primary"){[1,1.25].forEach((h,d)=>{const f=t.createOscillator(),g=t.createGain();f.type=d%2?"sine":"triangle";const _=n+d*.055;f.frequency.setValueAtTime(r*h*.9,_),f.frequency.exponentialRampToValueAtTime(r*h*1.08,_+.09),g.gain.setValueAtTime(.001,_),g.gain.linearRampToValueAtTime(.14,_+.012),g.gain.exponentialRampToValueAtTime(.001,_+.16),f.connect(g).connect(t.destination),f.start(_),f.stop(_+.17)});return}if(e==="back"){const h=t.createOscillator(),d=t.createGain();h.type="sine",h.frequency.setValueAtTime(r*.95,n),h.frequency.exponentialRampToValueAtTime(r*.62,n+.09),d.gain.setValueAtTime(.001,n),d.gain.linearRampToValueAtTime(.11,n+.008),d.gain.exponentialRampToValueAtTime(.001,n+.1),h.connect(d).connect(t.destination),h.start(n),h.stop(n+.11);return}const o=t.createOscillator(),a=t.createOscillator(),c=t.createGain();o.type=Math.random()>.5?"triangle":"sine",a.type="sine";const l=[1.5,2,2.5,3][Math.floor(Math.random()*4)];o.frequency.setValueAtTime(r*.85,n),o.frequency.exponentialRampToValueAtTime(r,n+.045),a.frequency.setValueAtTime(r*l,n);const u=t.createGain();u.gain.setValueAtTime(.03,n),u.gain.exponentialRampToValueAtTime(.001,n+.05),c.gain.setValueAtTime(.001,n),c.gain.linearRampToValueAtTime(.11,n+.008),c.gain.exponentialRampToValueAtTime(.001,n+.11),o.connect(c),a.connect(u).connect(c),c.connect(t.destination),o.start(n),a.start(n),o.stop(n+.12),a.stop(n+.06)}buy(){if(this.muted)return;const e=this.init();if(!e)return;const t=e.currentTime;[587.33,880,1174.66].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="triangle";const a=t+s*.055;r.frequency.setValueAtTime(n,a),o.gain.setValueAtTime(.001,a),o.gain.linearRampToValueAtTime(.15,a+.01),o.gain.exponentialRampToValueAtTime(.001,a+.22),r.connect(o).connect(e.destination),r.start(a),r.stop(a+.24)});for(let n=0;n<9;n++){const s=e.createOscillator(),r=e.createGain();s.type="sine";const o=t+.08+n*.065+Math.random()*.025,a=1480+n%4*260+Math.random()*140;s.frequency.setValueAtTime(a,o),s.frequency.exponentialRampToValueAtTime(a*1.18,o+.04),r.gain.setValueAtTime(.001,o),r.gain.linearRampToValueAtTime(.09,o+.006),r.gain.exponentialRampToValueAtTime(.001,o+.11),s.connect(r).connect(e.destination),s.start(o),s.stop(o+.12)}}switchWeapon(){if(this.muted)return;const e=this.init();if(!e)return;const t=e.currentTime;[280,420].forEach((n,s)=>{const r=e.createOscillator(),o=e.createGain();r.type="triangle";const a=t+s*.035;r.frequency.setValueAtTime(n*this.rand(.96,1.04),a),r.frequency.exponentialRampToValueAtTime(n*1.35,a+.03),o.gain.setValueAtTime(.001,a),o.gain.linearRampToValueAtTime(.13,a+.005),o.gain.exponentialRampToValueAtTime(.001,a+.045),r.connect(o).connect(e.destination),r.start(a),r.stop(a+.05)})}tick(e=!1){if(this.muted)return;const t=this.init();if(!t)return;const n=t.currentTime,s=t.createOscillator(),r=t.createGain();s.type="triangle";const o=e?this.rand(680,740):this.rand(420,460);s.frequency.setValueAtTime(o,n),s.frequency.exponentialRampToValueAtTime(o*.7,n+.06),r.gain.setValueAtTime(.001,n),r.gain.linearRampToValueAtTime(e?.12:.07,n+.005),r.gain.exponentialRampToValueAtTime(.001,n+.07),s.connect(r).connect(t.destination),s.start(n),s.stop(n+.08)}roundStart(){if(this.muted)return;const e=this.init();if(!e)return;const t=e.currentTime;[330,440,554.37].forEach((s,r)=>{const o=e.createOscillator(),a=e.createGain();o.type="triangle";const c=t+r*.065;o.frequency.setValueAtTime(s*this.rand(.99,1.01),c),a.gain.setValueAtTime(.001,c),a.gain.linearRampToValueAtTime(.11,c+.01),a.gain.exponentialRampToValueAtTime(.001,c+.22),o.connect(a).connect(e.destination),o.start(c),o.stop(c+.24)})}laser(e=0,t="blaster"){if(this.muted)return;const n=this.init();if(!n)return;const s=n.currentTime+Math.max(0,e);if(t==="duck"){[0,.11].forEach((h,d)=>{const f=s+h,g=n.createOscillator(),_=n.createBiquadFilter(),m=n.createGain();g.type="sawtooth";const p=d===0?390:340;g.frequency.setValueAtTime(p*this.rand(.95,1.05),f),g.frequency.exponentialRampToValueAtTime(p*1.45,f+.035),g.frequency.exponentialRampToValueAtTime(p*.72,f+.095),_.type="bandpass",_.frequency.setValueAtTime(1150,f),_.Q.value=5.5,m.gain.setValueAtTime(.001,f),m.gain.linearRampToValueAtTime(.24,f+.01),m.gain.exponentialRampToValueAtTime(.001,f+.1),g.connect(_).connect(m).connect(n.destination),g.start(f),g.stop(f+.11)});return}if(t==="bazooka"){const h=n.createOscillator(),d=n.createOscillator(),f=n.createGain();h.type="sawtooth",d.type="sine",h.frequency.setValueAtTime(280,s),h.frequency.exponentialRampToValueAtTime(42,s+.36),d.frequency.setValueAtTime(130,s),d.frequency.exponentialRampToValueAtTime(30,s+.36);const g=n.createBiquadFilter();g.type="lowpass",g.frequency.setValueAtTime(950,s),g.frequency.exponentialRampToValueAtTime(180,s+.36),f.gain.setValueAtTime(.001,s),f.gain.linearRampToValueAtTime(.26,s+.012),f.gain.exponentialRampToValueAtTime(.001,s+.38),h.connect(g),d.connect(g),g.connect(f).connect(n.destination),h.start(s),d.start(s),h.stop(s+.4),d.stop(s+.4);return}if(t==="tesla"){const h=n.createOscillator(),d=n.createGain(),f=n.createOscillator(),g=n.createGain();h.type="square",h.frequency.setValueAtTime(55,s),d.gain.setValueAtTime(480,s),f.type="sawtooth",f.frequency.setValueAtTime(1450,s),f.frequency.exponentialRampToValueAtTime(380,s+.28),h.connect(d).connect(f.frequency),g.gain.setValueAtTime(.001,s),g.gain.linearRampToValueAtTime(.16,s+.01),g.gain.exponentialRampToValueAtTime(.001,s+.29),f.connect(g).connect(n.destination),h.start(s),f.start(s),h.stop(s+.3),f.stop(s+.3);return}if(t==="shark"){const h=n.createOscillator(),d=n.createOscillator(),f=n.createGain();h.type="sine",d.type="triangle",h.frequency.setValueAtTime(780,s),h.frequency.exponentialRampToValueAtTime(520,s+.26),d.frequency.setValueAtTime(420,s),d.frequency.exponentialRampToValueAtTime(85,s+.16),f.gain.setValueAtTime(.001,s),f.gain.linearRampToValueAtTime(.2,s+.008),f.gain.exponentialRampToValueAtTime(.001,s+.28),h.connect(f),d.connect(f),f.connect(n.destination),h.start(s),d.start(s),h.stop(s+.29),d.stop(s+.18);return}if(t==="royal"){[523.25,659.25,783.99,1046.5].forEach((h,d)=>{const f=n.createOscillator(),g=n.createGain();f.type="triangle";const _=s+d*.018;f.frequency.setValueAtTime(h*1.2,_),f.frequency.exponentialRampToValueAtTime(h*.85,_+.26),g.gain.setValueAtTime(.001,_),g.gain.linearRampToValueAtTime(.09,_+.01),g.gain.exponentialRampToValueAtTime(.001,_+.28),f.connect(g).connect(n.destination),f.start(_),f.stop(_+.29)});return}if(t==="vortex"){const h=n.createOscillator(),d=n.createOscillator(),f=n.createGain(),g=n.createGain(),_=n.createBiquadFilter();d.type="sine",d.frequency.setValueAtTime(32,s),d.frequency.exponentialRampToValueAtTime(140,s+.28),f.gain.setValueAtTime(320,s),h.type="sawtooth",h.frequency.setValueAtTime(440,s),h.frequency.exponentialRampToValueAtTime(65,s+.38),d.connect(f),f.connect(h.frequency),_.type="bandpass",_.frequency.setValueAtTime(650,s),_.frequency.exponentialRampToValueAtTime(220,s+.38),_.Q.value=4.2,g.gain.setValueAtTime(.001,s),g.gain.linearRampToValueAtTime(.24,s+.02),g.gain.exponentialRampToValueAtTime(.001,s+.42),h.connect(_).connect(g).connect(n.destination),d.start(s),h.start(s),d.stop(s+.44),h.stop(s+.44);return}if(t==="zeus"){[0,.045,.09].forEach((h,d)=>{const f=s+h,g=n.createOscillator(),_=n.createOscillator(),m=n.createBiquadFilter(),p=n.createGain();g.type="sawtooth",g.frequency.setValueAtTime(1800-d*280,f),g.frequency.exponentialRampToValueAtTime(120,f+.16),_.type="square",_.frequency.setValueAtTime(220,f),m.type="bandpass",m.frequency.setValueAtTime(2400-d*300,f),m.Q.value=6,p.gain.setValueAtTime(.001,f),p.gain.linearRampToValueAtTime(.22,f+.008),p.gain.exponentialRampToValueAtTime(.001,f+.18),g.connect(m),_.connect(m),m.connect(p).connect(n.destination),g.start(f),_.start(f),g.stop(f+.2),_.stop(f+.2)});return}if(t==="orbital"){const h=n.createOscillator(),d=n.createOscillator(),f=n.createBiquadFilter(),g=n.createGain();h.type="sawtooth",h.frequency.setValueAtTime(2200,s),h.frequency.exponentialRampToValueAtTime(180,s+.45),d.type="triangle",d.frequency.setValueAtTime(160,s),d.frequency.exponentialRampToValueAtTime(32,s+.52),f.type="lowpass",f.frequency.setValueAtTime(4500,s),f.frequency.exponentialRampToValueAtTime(350,s+.45),f.Q.value=2.5,g.gain.setValueAtTime(.001,s),g.gain.linearRampToValueAtTime(.28,s+.015),g.gain.setValueAtTime(.25,s+.18),g.gain.exponentialRampToValueAtTime(.001,s+.54),h.connect(f),d.connect(f),f.connect(g).connect(n.destination),h.start(s),d.start(s),h.stop(s+.56),d.stop(s+.56);return}const r=n.createOscillator(),o=n.createOscillator(),a=n.createBiquadFilter(),c=n.createGain();r.type="sawtooth",o.type="triangle";const l=this.rand(950,1380),u=this.rand(110,175);r.frequency.setValueAtTime(l,s),r.frequency.exponentialRampToValueAtTime(u,s+.22),o.frequency.setValueAtTime(220,s),o.frequency.exponentialRampToValueAtTime(55,s+.18),a.type="lowpass",a.frequency.setValueAtTime(3200,s),a.frequency.exponentialRampToValueAtTime(450,s+.22),a.Q.value=3.5,c.gain.setValueAtTime(.001,s),c.gain.linearRampToValueAtTime(.18,s+.008),c.gain.exponentialRampToValueAtTime(.001,s+.25),r.connect(a),o.connect(a),a.connect(c).connect(n.destination),r.start(s),o.start(s),r.stop(s+.26),o.stop(s+.22)}grenade(e=0){if(this.muted)return;const t=this.init();if(!t)return;const n=t.currentTime+Math.max(0,e),s=t.createOscillator(),r=t.createGain();s.type="sine",s.frequency.setValueAtTime(520,n),s.frequency.exponentialRampToValueAtTime(760,n+.15),s.frequency.exponentialRampToValueAtTime(260,n+.34),r.gain.setValueAtTime(.001,n),r.gain.linearRampToValueAtTime(.11,n+.04),r.gain.exponentialRampToValueAtTime(.001,n+.35),s.connect(r).connect(t.destination),s.start(n),s.stop(n+.36);const o=n+.35,a=Math.floor(t.sampleRate*.45),c=t.createBuffer(1,a,t.sampleRate),l=c.getChannelData(0);for(let _=0;_<a;_++)l[_]=(Math.random()*2-1)*Math.exp(-_/(t.sampleRate*.14));const u=t.createBufferSource();u.buffer=c;const h=t.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(750,o),h.frequency.exponentialRampToValueAtTime(140,o+.42);const d=t.createGain();d.gain.setValueAtTime(.34,o),d.gain.exponentialRampToValueAtTime(.001,o+.44),u.connect(h).connect(d).connect(t.destination),u.start(o);const f=t.createOscillator(),g=t.createGain();f.type="sine",f.frequency.setValueAtTime(150,o),f.frequency.exponentialRampToValueAtTime(28,o+.4),g.gain.setValueAtTime(.35,o),g.gain.exponentialRampToValueAtTime(.001,o+.42),f.connect(g).connect(t.destination),f.start(o),f.stop(o+.43)}hitAndScream(e=0){if(this.muted)return;const t=this.init();if(!t)return;const n=t.currentTime+Math.max(0,e),s=Math.floor(t.sampleRate*.22),r=t.createBuffer(1,s,t.sampleRate),o=r.getChannelData(0);for(let T=0;T<s;T++)o[T]=(Math.random()*2-1)*Math.exp(-T/(t.sampleRate*.055));const a=t.createBufferSource();a.buffer=r;const c=t.createBiquadFilter();c.type="bandpass",c.frequency.setValueAtTime(this.rand(420,680),n),c.Q.value=1.4;const l=t.createGain();l.gain.setValueAtTime(.24,n),l.gain.exponentialRampToValueAtTime(.001,n+.21),a.connect(c).connect(l).connect(t.destination),a.start(n);const u=t.createOscillator(),h=t.createGain();u.type="sine",u.frequency.setValueAtTime(160,n),u.frequency.exponentialRampToValueAtTime(42,n+.2),h.gain.setValueAtTime(.26,n),h.gain.exponentialRampToValueAtTime(.001,n+.22),u.connect(h).connect(t.destination),u.start(n),u.stop(n+.23);const d=Math.floor(Math.random()*4),f=n+.04,g=t.createOscillator(),_=t.createOscillator(),m=t.createGain(),p=t.createBiquadFilter(),E=t.createBiquadFilter(),x=t.createGain();g.type="sawtooth",_.frequency.value=this.rand(11,16),m.gain.value=this.rand(14,28),_.connect(m).connect(g.frequency);let v=.38;const R=this.rand(.9,1.22);d===0?(v=.42,g.frequency.setValueAtTime(340*R,f),g.frequency.exponentialRampToValueAtTime(620*R,f+.13),g.frequency.exponentialRampToValueAtTime(210*R,f+v)):d===1?(v=.3,g.frequency.setValueAtTime(520*R,f),g.frequency.exponentialRampToValueAtTime(180*R,f+v)):d===2?(v=.36,g.frequency.setValueAtTime(400*R,f),g.frequency.setValueAtTime(590*R,f+.09),g.frequency.exponentialRampToValueAtTime(260*R,f+v)):(v=.4,m.gain.value=38,g.frequency.setValueAtTime(460*R,f),g.frequency.exponentialRampToValueAtTime(240*R,f+v)),p.type="bandpass",p.frequency.setValueAtTime(820,f),p.frequency.exponentialRampToValueAtTime(460,f+v),p.Q.value=4.5,E.type="bandpass",E.frequency.setValueAtTime(1400,f),E.frequency.exponentialRampToValueAtTime(950,f+v),E.Q.value=5,x.gain.setValueAtTime(.001,f),x.gain.linearRampToValueAtTime(.18,f+.03),x.gain.setValueAtTime(.16,f+v*.65),x.gain.exponentialRampToValueAtTime(.001,f+v),g.connect(p),g.connect(E),p.connect(x),E.connect(x),x.connect(t.destination),g.start(f),_.start(f),g.stop(f+v+.02),_.stop(f+v+.02)}victory(){if(this.muted)return;const e=this.init();if(!e)return;const t=e.currentTime;[261.63,329.63,392,523.25].forEach((s,r)=>{const o=e.createOscillator(),a=e.createGain();o.type="triangle";const c=t+r*.08;o.frequency.setValueAtTime(s,c),a.gain.setValueAtTime(.001,c),a.gain.linearRampToValueAtTime(.13,c+.015),a.gain.exponentialRampToValueAtTime(.001,c+.45),o.connect(a).connect(e.destination),o.start(c),o.stop(c+.48)})}introWhoosh(){if(this.muted)return;const e=this.init();if(!e)return;const t=e.currentTime,n=e.createOscillator(),s=e.createGain();n.type="sine",n.frequency.setValueAtTime(110,t),n.frequency.exponentialRampToValueAtTime(440,t+.25),n.frequency.exponentialRampToValueAtTime(88,t+.55),s.gain.setValueAtTime(.001,t),s.gain.linearRampToValueAtTime(.16,t+.12),s.gain.exponentialRampToValueAtTime(.001,t+.58),n.connect(s).connect(e.destination),n.start(t),n.stop(t+.6)}startBgm(){if(this.muted||this.bgmActive)return;const e=this.init();if(!e)return;this.bgmActive=!0,this.bgmStep=0,this.bgmMaster=e.createGain(),this.bgmMaster.gain.setValueAtTime(.001,e.currentTime),this.bgmMaster.gain.linearRampToValueAtTime(.07,e.currentTime+1.2),this.bgmFilter=e.createBiquadFilter(),this.bgmFilter.type="lowpass",this.bgmFilter.frequency.value=1100,this.bgmFilter.Q.value=1.2,this.bgmFilter.connect(this.bgmMaster),this.bgmMaster.connect(e.destination);const t=[[261.63,329.63,392,493.88],[220,261.63,329.63,440],[174.61,220,261.63,329.63],[196,246.94,293.66,392]],n=[[523.25,587.33,659.25],[440,523.25,659.25],[349.23,440,523.25],[392,493.88,587.33]],s=()=>{if(!this.bgmActive||!this.ctx)return;const r=this.ctx.currentTime,o=this.bgmStep%t.length,a=t[o],c=n[o];this.bgmStep++,a.forEach((l,u)=>{const h=this.ctx.createOscillator(),d=this.ctx.createGain();h.type=u%2===0?"triangle":"sine",h.frequency.setValueAtTime(l*(1+(Math.random()-.5)*.003),r),d.gain.setValueAtTime(.001,r),d.gain.linearRampToValueAtTime(.12,r+.15),d.gain.setValueAtTime(.1,r+1.2),d.gain.exponentialRampToValueAtTime(.001,r+1.95),h.connect(d),d.connect(this.bgmFilter),h.start(r),h.stop(r+2)}),[.45,.95,1.4].forEach((l,u)=>{if(Math.random()>.15){const h=r+l,d=this.ctx.createOscillator(),f=this.ctx.createGain(),g=c[u%c.length];d.type="sine",d.frequency.setValueAtTime(g,h),f.gain.setValueAtTime(.001,h),f.gain.linearRampToValueAtTime(.08,h+.02),f.gain.exponentialRampToValueAtTime(.001,h+.55),d.connect(f),f.connect(this.bgmFilter),d.start(h),d.stop(h+.6)}})};s(),this.bgmTimer=setInterval(s,1900)}stopBgm(){if(this.bgmActive&&(this.bgmActive=!1,clearInterval(this.bgmTimer),this.bgmTimer=null,this.bgmMaster&&this.ctx))try{const e=this.ctx.currentTime;this.bgmMaster.gain.setValueAtTime(this.bgmMaster.gain.value,e),this.bgmMaster.gain.linearRampToValueAtTime(.001,e+.45),setTimeout(()=>{var t,n;(t=this.bgmMaster)==null||t.disconnect(),(n=this.bgmFilter)==null||n.disconnect(),this.bgmMaster=null,this.bgmFilter=null},500)}catch{this.bgmMaster=null}}}const se=new S_,Ol=["#e8603c","#3d7fd9","#e6b52e","#4fa36b","#8a5cc7","#2fa6a0"],b_=["cap","crown","cone","horns","halo","none"],E_=["happy","cool","angry","cute","happy","cool"],T_=[5,7,10],No=.22,Mi={SOUTH:0,EAST:1,R1:5,R2:7,START:9},tt=i=>document.querySelector(i),fn=i=>i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Fl(i,e){const t=Math.hypot(i,e);if(t<No)return[0,0];const n=Math.min(1,(t-No)/(1-No))/t;return[i*n,e*n]}function Oo(i){return/dualsense|0ce6/i.test(i)?"DualSense":/dualshock|054c|wireless controller/i.test(i)?"DualShock 4":/xbox|xinput|045e/i.test(i)?"Manette Xbox":"Manette"}class w_{constructor({world:e,show:t,toast:n}){this.world=e,this.show=t,this.toast=n,this.active=!1,this.state="off",this.players=[],this.arenaId="neon",this.time=5,this.prev=new Map,this.keys=new Set,this.kbEdge=new Set,this.lastSec=-1,addEventListener("keydown",l=>{if(!this.active||l.target.tagName==="INPUT")return;const u=l.key.toLowerCase();this.keys.has(u)||this.kbEdge.add(u),this.keys.add(u),[" ","tab","arrowup","arrowdown","arrowleft","arrowright"].includes(u)&&l.preventDefault()}),addEventListener("keyup",l=>this.keys.delete(l.key.toLowerCase())),addEventListener("gamepadconnected",l=>this.toast(`${Oo(l.gamepad.id)} connectée`)),addEventListener("gamepaddisconnected",l=>{this.toast(`${Oo(l.gamepad.id)} déconnectée`),this.state==="lobby"&&this.removeDev(l.gamepad.index)});const s=document.createElement("canvas");s.width=256,s.height=8;const r=s.getContext("2d");for(let l=0;l<256;l+=20)r.fillStyle=`rgba(255,255,255,${1-l/300})`,r.fillRect(l,0,12,8);const o=new Ka(s),a=new G(new qn(1,.14),new Vt({map:o,transparent:!0,depthWrite:!1}));a.geometry.translate(.5,0,0),a.rotation.x=-Math.PI/2,a.scale.x=30,this.aim=new Qe,this.aim.add(a),this.aim.visible=!1,this.aim.userData.mat=a.material,this.aim.userData.beamMesh=a;const c=new zn(li-.14,li,32);c.rotateX(-Math.PI/2),this.grenAim=new G(c,new Vt({color:15228988,transparent:!0,opacity:.75})),this.grenAim.visible=!1,e.scene.add(this.aim,this.grenAim),tt("#btn-local-back").onclick=()=>{se.ui("back"),this.exit()},tt("#btn-local-start").onclick=()=>{se.ui("primary"),this.start()},tt("#btn-lhud-switch").onclick=()=>{this.state==="aim"&&this.shooter()&&this.cycleShooterWeapon(this.shooter())},this.paused=!1,tt("#btn-local-pause").onclick=()=>{se.ui("chip"),this.togglePause()},tt("#btn-pause-resume").onclick=()=>{se.ui("chip"),this.resume()},tt("#btn-pause-restart").onclick=()=>{se.ui("primary"),this.restart()},tt("#btn-pause-quit").onclick=()=>{se.ui("back"),this.quitToLobby()}}openLobby(){this.active=!0,this.state="lobby",this.clearMeshes(),this.aim.visible=!1,this.grenAim.visible=!1;for(const e of this.players)e.alive=!0,e.kills=0;this.show("local"),this.renderLobby()}pause(){if(this.paused||!["intro","aim","reveal"].includes(this.state))return;this.paused=!0;const e=tt("#dlg-local-pause");if(e&&typeof e.showModal=="function")try{e.showModal()}catch{}}resume(){this.paused=!1;const e=tt("#dlg-local-pause");if(e&&e.open)try{e.close()}catch{}}togglePause(){this.paused?this.resume():this.pause()}restart(){this.resume(),this.start()}quitToLobby(){this.resume(),this.openLobby()}exit(){this.resume(),this.clearMeshes(),this.aim.visible=!1,this.grenAim.visible=!1,this.active=!1,this.state="off",se.startBgm(),this.show("menu")}clearMeshes(){for(const e of this.players)e.mesh&&(this.world.scene.remove(e.mesh),e.mesh=null)}addDev(e){var o,a;if(this.players.some(c=>c.dev===e))return;if(this.players.length>=Hs)return this.toast("6 joueurs maximum");const t=new Set(this.players.map(c=>c.slot));let n=0;for(;t.has(n);)n++;const s=e==="kb"?null:navigator.getGamepads()[e],r=((a=(o=this.hooks)==null?void 0:o.getDefaultWeapon)==null?void 0:a.call(o))||"blaster";this.players.push({slot:n,dev:e,name:`Joueur ${n+1}`,devName:e==="kb"?"Clavier":Oo((s==null?void 0:s.id)||""),look:{body:Ol[n],laser:Ol[n],hat:b_[n],face:E_[n],weapon:r},alive:!0,kills:0,x:0,z:0,angle:0,opacity:1,target:1,mesh:null,moving:!1,onWall:!1,lastWallRumble:0,mode:"weapon",weaponIdx:0,grenades:0}),this.players.sort((c,l)=>c.slot-l.slot),se.ui("primary"),this.rumble(e,120,.5),this.renderLobby()}removeDev(e){const t=this.players.findIndex(n=>n.dev===e);t>=0&&(se.ui("back"),this.players.splice(t,1),this.renderLobby())}renderLobby(){const e=tt("#local-slots");e.innerHTML="";for(let s=0;s<Hs;s++){const r=this.players.find(a=>a.slot===s),o=document.createElement("li");r?o.innerHTML=`<div class="who"><span class="dot" style="background:${r.look.body};border-color:${r.look.body}"></span><span class="nm">${fn(r.name)}</span></div><span class="dev">${fn(r.devName)}</span>`:(o.className="empty",o.textContent=`Joueur ${s+1} – libre`),e.appendChild(o)}const t=tt("#local-arena");t.innerHTML="";for(const s of Object.values(Gt)){const r=document.createElement("button");r.className="pill"+(s.id===this.arenaId?" sel":""),r.textContent=s.name,r.onclick=()=>{se.ui(),this.arenaId=s.id,this.renderLobby()},t.appendChild(r)}const n=tt("#local-time");n.innerHTML="";for(const s of T_){const r=document.createElement("button");r.className="pill"+(s===this.time?" sel":""),r.textContent=`${s} s`,r.onclick=()=>{se.ui(),this.time=s,this.renderLobby()},n.appendChild(r)}tt("#btn-local-start").disabled=this.players.length<2}cycleShooterWeapon(e){var a,c;const n=[...((c=(a=this.hooks)==null?void 0:a.getOwnedWeapons)==null?void 0:c.call(a))||["blaster"]];if(e.grenades>0&&n.push("grenade"),n.length<=1){this.toast("Achète des armes ou grenades dans l'Armurerie");return}const s=e.mode==="grenade"?"grenade":e.look.weapon,r=(n.indexOf(s)+1)%n.length,o=n[r];o==="grenade"?(e.mode="grenade",Gn(e.mesh,"grenade")):(e.mode="weapon",e.look.weapon=o,Gn(e.mesh,o)),se.switchWeapon(),this.rumble(e.dev,45,.35),this.updateSwitchHud()}updateSwitchHud(){var s;const e=this.shooter();if(!e)return;const t=tt("#btn-lhud-switch"),n=tt("#lhud-weapon-name");if(e.mode==="grenade")t.classList.add("grenade-mode"),n.textContent=`Grenade (x${e.grenades})`;else{t.classList.remove("grenade-mode");const r=((s=fi[e.look.weapon])==null?void 0:s.name)||"Blaster Classique";n.textContent=e.grenades>0?`${r} · Grenade (${e.grenades})`:r}}start(){var r,o,a,c,l,u;if(this.players.length<2)return this.toast("Il faut au moins 2 joueurs");this.resume(),se.stopBgm(),this.arena=Gt[this.arenaId],this.zone=this.arena.size,this.turn=0,this.turnCount=0,this.world.buildArena(this.arena,this.zone),(o=(r=this.hooks)==null?void 0:r.hideMenuChar)==null||o.call(r);const e=this.arena.shape==="circle"?this.zone*.65:this.zone*.7,t=Math.random()*Math.PI*2,n=Math.max(1,((c=(a=this.hooks)==null?void 0:a.getGrenades)==null?void 0:c.call(a))||0),s=((u=(l=this.hooks)==null?void 0:l.getDefaultWeapon)==null?void 0:u.call(l))||"blaster";this.players.forEach((h,d)=>{const f=t+d/this.players.length*Math.PI*2;[h.x,h.z]=It(this.arena,this.zone,Math.cos(f)*e,Math.sin(f)*e),h.angle=Math.atan2(-h.z,-h.x),h.alive=!0,h.kills=0,h.opacity=1,h.target=1,h.onWall=!1,h.mode="weapon",h.look.weapon=s,h.grenades=n,h.mesh=ac(h.look),h.mesh.position.set(h.x,0,h.z),h.mesh.rotation.y=-h.angle,this.world.scene.add(h.mesh)}),tt("#lfeed").innerHTML="",this.show("lhud"),this.turn=0,this.beginTurn()}shooter(){return this.players[this.turn]}beginTurn(){this.turnCount++;const e=this.shooter();e.mode==="grenade"&&e.grenades<=0&&(e.mode="weapon",Gn(e.mesh,e.look.weapon)),this.state="intro",this.timer=1.6;for(const t of this.players)t.alive&&(t.target=1);tt("#lhud-turn").textContent=`Tour ${this.turnCount}`,tt("#lhud-shooter").innerHTML=`Tireur : <b style="color:${e.look.body}">${fn(e.name)}</b>`,this.banner(`${fn(e.name)} tire<small>Les autres : préparez-vous à disparaître</small>`,1500),this.renderRoster(),this.updateSwitchHud()}beginAim(){this.state="aim",this.timer=this.time,this.lastSec=Math.ceil(this.time),this.aimElapsed=0;const e=this.shooter();for(const t of this.players)t!==e&&(t.target=0,t.onWall=!1);this.aim.visible=!0,this.aim.userData.mat.color.set(e.look.laser),this.banner(`Cachez-vous<small>${fn(e.name)} vise – ${this.time} secondes</small>`,1300),se.roundStart(),this.updateSwitchHud();for(const t of this.players)t.alive&&this.rumble(t.dev,90,t===e?.3:.6)}fire(){var n,s;this.state="reveal",this.timer=3.2,this.aim.visible=!1,this.grenAim.visible=!1;const e=this.shooter(),t=this.players.filter(r=>r.alive);for(const r of t)r!==e&&(r.target=1,r.opacity=0,r.mesh.position.set(r.x,0,r.z),r.mesh.userData.model.position.y=1.6);if(this.banner("Verdict",900),e.mode==="grenade"&&e.grenades>0){e.grenades--,(s=(n=this.hooks)==null?void 0:n.consumeGrenade)==null||s.call(n);const r=lc(this.arena,this.zone,e,t);this.pending=[{at:2.65,fn:()=>{se.grenade(),this.world.grenadeLob(r.x,r.z,r.ex,r.ez,new Ee(e.look.laser),li)}},{at:2.25,fn:()=>{this.resolveHits(e,r.hits),e.mode="weapon",Gn(e.mesh,e.look.weapon),this.updateSwitchHud()}}]}else{const r=cc(this.arena,this.zone,e,t),o=e.look.weapon||"blaster";this.pending=[{at:2.6,fn:()=>{se.laser(0,o),this.world.beam(r.x,r.z,r.ex,r.ez,new Ee(e.look.laser),0,o)}},{at:2.35,fn:()=>this.resolveHits(e,r.hit?[r.hit]:[])}]}}resolveHits(e,t){if(t&&t.length){t.forEach((s,r)=>{s.alive=!1,e.kills++,se.hitAndScream(r*.08),this.world.burst(s.x,s.z,new Ee(s.look.body)),Xn(s.mesh,0),s.target=0,s.opacity=0,this.feed(`<b style="color:${e.look.body}">${fn(e.name)}</b> élimine <b style="color:${s.look.body}">${fn(s.name)}</b>`),this.rumble(s.dev,450,1)}),this.rumble(e.dev,150,.4);const n=t.map(s=>fn(s.name)).join(" & ");this.banner(`Pouf<small>${n} ${t.length>1?"sont éliminés":"est éliminé"}</small>`,1400),this.arena.shape==="circle"&&this.arena.shrinkStep&&(this.zone=Math.max(this.arena.minSize,this.zone-this.arena.shrinkStep*t.length),setTimeout(()=>{this.world.setZone(this.zone);for(const s of this.players)s.alive&&([s.x,s.z]=It(this.arena,this.zone,s.x,s.z))},900))}else this.banner("Raté<small>Personne n'est touché</small>",1300);this.renderRoster()}nextTurn(){const e=this.players.filter(n=>n.alive);if(e.length<=1)return this.finish(e[0]||null);let t=this.turn;do t=(t+1)%this.players.length;while(!this.players[t].alive);this.turn=t,this.beginTurn()}finish(e){this.state="over",this.aim.visible=!1,this.grenAim.visible=!1,se.startBgm();const t=e?e.kills:Math.max(0,...this.players.map(n=>n.kills));setTimeout(()=>{var n,s;se.victory(),(s=(n=this.hooks)==null?void 0:n.awardCoins)==null||s.call(n,t,!!e),tt("#over-kicker").textContent="Mode local",tt("#over-title").textContent=e?`${e.name} gagne`:"Égalité",tt("#over-rank").innerHTML=[...this.players].sort((r,o)=>o.kills-r.kills).map(r=>`<li><b style="color:${r.look.body}">${fn(r.name)}</b> — ${r.kills} élim.</li>`).join(""),tt("#btn-over-lobby").textContent="Rejouer",this.show("over"),e&&this.rumble(e.dev,400,.6)},900)}readDev(e){if(e==="kb"){const c=this.keys,l=this.kbEdge,u=[(c.has("d")?1:0)-(c.has("a")||c.has("q")?1:0),(c.has("s")?1:0)-(c.has("w")||c.has("z")?1:0)],h=[(c.has("arrowright")?1:0)-(c.has("arrowleft")?1:0),(c.has("arrowdown")?1:0)-(c.has("arrowup")?1:0)],d=Math.hypot(...u);return d>1&&(u[0]/=d,u[1]/=d),{move:u,aim:h,fire:l.has(" "),switchW:l.has("e")||l.has("tab"),join:l.has("enter"),back:l.has("escape"),start:!1,pause:l.has("p")||l.has("escape")}}const t=navigator.getGamepads()[e];if(!t)return{move:[0,0],aim:[0,0]};const n=this.prev.get(e)||[],s=c=>{var l;return!!((l=t.buttons[c])!=null&&l.pressed)},r=c=>s(c)&&!n[c];let o=Fl(t.axes[0]||0,t.axes[1]||0);!o[0]&&!o[1]&&(o=[(s(15)?1:0)-(s(14)?1:0),(s(13)?1:0)-(s(12)?1:0)]);const a=Fl(t.axes[2]||0,t.axes[3]||0);return{move:o,aim:a,fire:r(Mi.SOUTH)||r(Mi.R1),switchW:r(Mi.R2),join:r(Mi.SOUTH),back:r(Mi.EAST),start:r(Mi.START),pause:r(Mi.START)}}pollPads(){const e=[...navigator.getGamepads()].filter(Boolean),t=[];for(const n of e)t.push([n.index,this.readDev(n.index)]);return t}endPoll(){for(const e of navigator.getGamepads())e&&this.prev.set(e.index,e.buttons.map(t=>t.pressed));this.kbEdge.clear()}rumble(e,t,n){var r,o,a,c;if(e==="kb")return;const s=navigator.getGamepads()[e];(c=(a=(o=(r=s==null?void 0:s.vibrationActuator)==null?void 0:r.playEffect)==null?void 0:o.call(r,"dual-rumble",{startDelay:0,duration:t,weakMagnitude:n*.7,strongMagnitude:n}))==null?void 0:a.catch)==null||c.call(a,()=>{})}banner(e,t){const n=tt("#lbanner");n.innerHTML=e,n.classList.add("show"),clearTimeout(n._t),t&&(n._t=setTimeout(()=>n.classList.remove("show"),t))}feed(e){const t=document.createElement("div");t.innerHTML=e,tt("#lfeed").prepend(t),setTimeout(()=>t.remove(),5e3)}renderRoster(){const e=this.shooter();tt("#local-roster").innerHTML=this.players.map(t=>`<div class="${t.alive?"":"dead"} ${t===e&&t.alive?"shooter":""}"><i style="background:${t.look.body}"></i>${fn(t.name)}</div>`).join("")}update(e,t){if(!this.active)return;const n=this.pollPads();if(this.state==="lobby"){for(const[a,c]of n)c.join&&this.addDev(a),c.back&&this.removeDev(a),c.start&&(se.ui("primary"),this.start());const o=this.readDev("kb");o.join&&this.addDev("kb"),o.back&&this.removeDev("kb"),this.endPoll();return}if(this.state==="over"){for(const[,o]of n)if(o.start||o.join){se.ui("primary"),this.openLobby();break}this.endPoll();return}if(this.paused){for(const[,a]of n)if(a.pause||a.back){this.resume();break}const o=this.readDev("kb");(o.pause||o.back)&&this.resume(),this.endPoll();return}for(const[,o]of n)if(o.pause){this.pause(),this.endPoll();return}if(this.readDev("kb").pause){this.pause(),this.endPoll();return}const r=this.shooter();if(this.timer-=e,this.state==="intro"&&this.timer<=0&&this.beginAim(),this.state==="aim"){this.aimElapsed+=e;const o=performance.now();for(const l of this.players){if(l.moving=!1,!l.alive)continue;const u=this.readDev(l.dev);if(l===r){const h=Math.hypot(...u.aim)>.3?u.aim:u.move;Math.hypot(...h)>.3&&(l.angle=Math.atan2(h[1],h[0])),u.switchW&&this.cycleShooterWeapon(r),u.fire&&this.aimElapsed>.8&&(this.timer=0)}else if(Math.hypot(...u.move)>.05){l.moving=!0;const h=l.x+u.move[0]*ls*e,d=l.z+u.move[1]*ls*e,[f,g]=It(this.arena,this.zone,h,d),_=Math.hypot(f-h,g-d)>5e-4,m=this.zone-$t,p=this.arena.shape==="circle"?m-Math.hypot(f,g):m-Math.max(Math.abs(f),Math.abs(g));_||p<.05?l.onWall?o-l.lastWallRumble>210&&(this.rumble(l.dev,85,.65),l.lastWallRumble=o):(this.rumble(l.dev,150,.95),l.onWall=!0,l.lastWallRumble=o):(l.onWall=!1,p<.85&&o-l.lastWallRumble>340&&(this.rumble(l.dev,45,.25),l.lastWallRumble=o)),l.x=f,l.z=g,Math.hypot(...u.aim)>.3?l.angle=Math.atan2(u.aim[1],u.aim[0]):l.angle=Math.atan2(u.move[1],u.move[0])}else l.onWall=!1}const a=Math.max(0,this.timer),c=Math.ceil(a);c!==this.lastSec&&c>0&&(this.lastSec=c,se.tick(c<=2)),tt("#ltimer-num").textContent=c,tt("#ltimer-bar").style.strokeDashoffset=276.5*(1-a/this.time),tt("#lhud-timer").classList.toggle("urgent",a<2),this.timer<=0&&this.fire()}else tt("#ltimer-num").textContent=this.state==="reveal"?"!":"–",tt("#ltimer-bar").style.strokeDashoffset=0,tt("#lhud-timer").classList.remove("urgent");if(this.state==="reveal"){for(const o of this.pending)!o.done&&this.timer<=o.at&&(o.done=!0,o.fn());this.timer<=0&&this.nextTurn()}for(const o of this.players){if(!o.mesh)continue;if(!o.alive){o.mesh.visible=!1;continue}o.opacity+=(o.target-o.opacity)*Math.min(1,e*8),Xn(o.mesh,o.opacity),o.mesh.position.x+=(o.x-o.mesh.position.x)*Math.min(1,e*20),o.mesh.position.z+=(o.z-o.mesh.position.z)*Math.min(1,e*20);let a=-o.angle-o.mesh.rotation.y;a=Math.atan2(Math.sin(a),Math.cos(a)),o.mesh.rotation.y+=a*Math.min(1,e*18),o.mesh.userData.model.position.y*=.85,Ua(o.mesh,e,o.moving,t)}if(this.aim.visible&&(r!=null&&r.mesh))if(this.aim.position.set(r.mesh.position.x,.95,r.mesh.position.z),this.aim.rotation.y=r.mesh.rotation.y,this.aim.userData.mat.opacity=.75+Math.sin(t*8)*.15,r.mode==="grenade"){this.aim.userData.beamMesh.scale.x=ci;const[o,a]=It(this.arena,this.zone,r.x+Math.cos(r.angle)*ci,r.z+Math.sin(r.angle)*ci);this.grenAim.visible=!0,this.grenAim.position.set(o,.04,a)}else this.aim.userData.beamMesh.scale.x=30,this.grenAim.visible=!1;else this.grenAim.visible=!1;this.endPoll()}}const A_=["Zappy","Bzzt","Pixel","Nova","Kiwi","Bolt","Rico","Mochi"],br=Object.keys(fi);class R_{constructor({toast:e,onRoom:t,onStart:n,onPhase:s,onReveal:r,onSync:o,onOver:a,onHostLost:c}){this.toast=e,this.callbacks={onRoom:t,onStart:n,onPhase:s,onReveal:r,onSync:o,onOver:a,onHostLost:c},this.mode="none",this.transport="none",this.socket=null,this.isHost=!1,this.hostEngine=null,this.active=!1,this.peers=new Map,this.guestPeer=null}get isLanActive(){return this.active}createHostRoom({name:e,look:t,arena:n="neon"}){this.leave(),this.active=!0,this.mode="host",this.isHost=!0,this.transport="host_engine";const s=Gt[n]||Gt.neon;return this.hostEngine={code:"HOTSPOT",arena:s,hostId:"lan_host",state:"lobby",players:new Map,zone:s.size,round:0,phase:null,timer:null},this.hostEngine.players.set("lan_host",{id:"lan_host",name:(e||"Hôte").slice(0,14),look:{...t},bot:!1,alive:!0,kills:0,x:0,z:0,angle:0,mode:"weapon"}),this.hostAddBot(!0),this.hostAddBot(!0),this.broadcastRoom(),{ok:!0,code:"HOTSPOT"}}getHostRoomInfo(){if(!this.hostEngine)return null;const e=this.hostEngine;return{code:e.code,arena:e.arena.id,host:e.hostId,state:e.state,isLan:!0,players:[...e.players.values()].map(t=>({id:t.id,name:t.name,look:t.look,alive:t.alive,bot:t.bot,kills:t.kills}))}}broadcastRoom(){var t,n;const e=this.getHostRoomInfo();e&&((n=(t=this.callbacks).onRoom)==null||n.call(t,e),this.broadcastToGuests("room",e))}hostAddBot(e=!1){const t=this.hostEngine;if(!t||t.state!=="lobby"||t.players.size>=Hs)return;const n="bot_"+Math.random().toString(36).slice(2,8),s=new Set([...t.players.values()].map(u=>u.name)),r=A_.find(u=>!s.has(u))||"Bot",o=["cap","crown","cone","horns","halo","none"],a=["happy","cool","angry","cute"],c=["#e8603c","#3d7fd9","#e6b52e","#4fa36b","#8a5cc7","#2fa6a0"],l=["#e8603c","#3d7fd9","#2fa6a0","#e6b52e","#8a5cc7","#ffffff"];t.players.set(n,{id:n,name:r,bot:!0,alive:!0,kills:0,x:0,z:0,angle:0,mode:"weapon",look:{body:c[Math.floor(Math.random()*c.length)],laser:l[Math.floor(Math.random()*l.length)],hat:o[Math.floor(Math.random()*o.length)],face:a[Math.floor(Math.random()*a.length)],weapon:br[Math.floor(Math.random()*br.length)]}}),e||this.broadcastRoom()}hostKick(e){var n,s;const t=this.hostEngine;if(!(!t||t.state!=="lobby")&&t.players.has(e)&&e!=="lan_host"){const r=t.players.get(e);if(t.players.delete(e),this.peers.has(e)){this.sendToGuest(e,"kicked",{});try{(n=this.peers.get(e).dc)==null||n.close()}catch{}this.peers.delete(e)}this.broadcastRoom(),(s=this.toast)==null||s.call(this,`${r.name} a été retiré`)}}hostSetArena(e){const t=this.hostEngine;!t||t.state!=="lobby"||!Gt[e]||(t.arena=Gt[e],t.zone=t.arena.size,this.broadcastRoom())}hostStartGame(e){var a,c,l;const t=this.hostEngine;if(!t||t.state!=="lobby")return;if(t.players.size<2){(a=this.toast)==null||a.call(this,"Il faut au moins 2 joueurs (ajoute un bot !)");return}t.state="playing",t.round=0,t.zone=t.arena.size;const n=t.players.get("lan_host");n&&e&&(n.look={...e});const s=[...t.players.values()],r=t.arena.shape==="circle"?t.zone*.7:t.zone*.75,o=Math.random()*Math.PI*2;s.forEach((u,h)=>{const d=o+h/s.length*Math.PI*2,[f,g]=It(t.arena,t.zone,Math.cos(d)*r,Math.sin(d)*r);u.x=f,u.z=g,u.angle=Math.atan2(-g,-f),u.alive=!0,u.kills=0,u.mode="weapon"}),(l=(c=this.callbacks).onStart)==null||l.call(c,{you:{x:n.x,z:n.z,angle:n.angle},zone:t.zone});for(const[u,h]of this.peers.entries()){const d=t.players.get(u);d&&this.sendToGuest(u,"start",{you:{x:d.x,z:d.z,angle:d.angle},zone:t.zone})}this.broadcastRoom(),clearTimeout(t.timer),t.timer=setTimeout(()=>this.hostMovePhase(),1500)}hostMovePhase(){var s,r;const e=this.hostEngine;if(!e||e.state!=="playing")return;e.round++,e.phase="move";const t=[...e.players.values()].filter(o=>o.alive);for(const o of t)if(o.mode="weapon",o.bot){const a=t.filter(h=>h!==o),c=Math.random()*Math.PI*2,l=Math.random()*ls*4;o.target=It(e.arena,e.zone,o.x+Math.cos(c)*l,o.z+Math.sin(c)*l);const u=a[Math.floor(Math.random()*a.length)];u&&(o.aimAt=[u.x+(Math.random()-.5)*6,u.z+(Math.random()-.5)*6])}const n={phase:"move",round:e.round,duration:Br,zone:e.zone,alive:t.map(o=>o.id)};(r=(s=this.callbacks).onPhase)==null||r.call(s,n),this.broadcastToGuests("phase",n),clearTimeout(e.timer),e.timer=setTimeout(()=>this.hostRevealPhase(),Br+150)}hostRevealPhase(){var l,u;const e=this.hostEngine;if(!e||e.state!=="playing")return;e.phase="reveal";const t=[...e.players.values()].filter(h=>h.alive);for(const h of t)h.bot&&h.target&&([h.x,h.z]=h.target,h.aimAt&&(h.angle=Math.atan2(h.aimAt[1]-h.z,h.aimAt[0]-h.x)));const n=[],s=new Set;for(const h of t)if(h.mode==="grenade"){const d=lc(e.arena,e.zone,h,t),f=d.hits.map(g=>g.id);for(const g of f)s.add(g);h.kills+=f.length,n.push({id:h.id,type:"grenade",weapon:"grenade",x:d.x,z:d.z,ex:d.ex,ez:d.ez,hits:f,hit:f[0]||null}),h.mode="weapon"}else{const d=cc(e.arena,e.zone,h,t);d.hit&&(s.add(d.hit.id),h.kills++),n.push({id:h.id,type:"laser",weapon:h.look.weapon||"blaster",x:d.x,z:d.z,ex:d.ex,ez:d.ez,hits:d.hit?[d.hit.id]:[],hit:d.hit?d.hit.id:null})}for(const h of s){const d=e.players.get(h);d&&(d.alive=!1)}const r=[...s],o=[...e.players.values()].filter(h=>h.alive);let a=e.zone;e.arena.shape==="circle"&&e.arena.shrinkStep&&r.length&&(a=Math.max(e.arena.minSize,e.zone-e.arena.shrinkStep*r.length));const c={round:e.round,players:t.map(h=>({id:h.id,x:h.x,z:h.z,angle:h.angle,weapon:h.look.weapon||"blaster"})),shots:n,eliminated:r,zone:a};(u=(l=this.callbacks).onReveal)==null||u.call(l,c),this.broadcastToGuests("reveal",c),e.zone=a;for(const h of o)[h.x,h.z]=It(e.arena,e.zone,h.x,h.z);clearTimeout(e.timer),e.timer=setTimeout(()=>{var h,d;if(this.hostEngine){if(o.length<=1){const f=o[0]||null;e.state="lobby",e.phase=null;const g=[...e.players.values()].sort((m,p)=>p.kills-m.kills).map(m=>({id:m.id,name:m.name,kills:m.kills})),_={winner:f?{id:f.id,name:f.name,look:f.look,alive:!0,bot:f.bot,kills:f.kills}:null,draw:[],ranking:g};(d=(h=this.callbacks).onOver)==null||d.call(h,_),this.broadcastToGuests("over",_);for(const m of e.players.values())m.alive=!0;this.broadcastRoom();return}for(const[f,g]of this.peers.entries()){const _=e.players.get(f);_&&_.alive&&this.sendToGuest(f,"sync",{x:_.x,z:_.z,angle:_.angle})}this.hostMovePhase()}},zh)}handleGuestInput(e,{x:t,z:n,angle:s,mode:r,weapon:o}){const a=this.hostEngine;if(!a||a.phase!=="move")return;const c=a.players.get(e);!c||!c.alive||([c.x,c.z]=It(a.arena,a.zone,t,n),c.angle=s,(r==="grenade"||r==="weapon")&&(c.mode=r),br.includes(o)&&(c.look.weapon=o))}handleHostInput({x:e,z:t,angle:n,mode:s,weapon:r}){const o=this.hostEngine;if(!o||o.phase!=="move")return;const a=o.players.get("lan_host");!a||!a.alive||([a.x,a.z]=It(o.arena,o.zone,e,t),a.angle=n,(s==="grenade"||s==="weapon")&&(a.mode=s),br.includes(r)&&(a.look.weapon=r))}sendToGuest(e,t,n){const s=this.peers.get(e);if(!(!s||!s.dc||s.dc.readyState!=="open"))try{s.dc.send(JSON.stringify({ev:t,data:n}))}catch(r){console.warn("Failed to send to guest",e,r)}}broadcastToGuests(e,t){const n=JSON.stringify({ev:e,data:t});for(const s of this.peers.values())if(s.dc&&s.dc.readyState==="open")try{s.dc.send(n)}catch{}}registerGuest(e,t,n){var r;const s=this.hostEngine;if(s){if(s.players.size>=Hs){try{n.send(JSON.stringify({ev:"error",data:"Salon complet"}))}catch{}return}s.players.set(e,{id:e,name:(t.name||"Invité").slice(0,14),look:{...t.look},bot:!1,alive:!0,kills:0,x:0,z:0,angle:0,mode:"weapon"}),(r=this.toast)==null||r.call(this,`${t.name||"Un joueur"} a rejoint le salon local`),this.broadcastRoom()}}unregisterGuest(e){var s;const t=this.hostEngine;if(!t||!t.players.has(e))return;const n=t.players.get(e);t.players.delete(e),this.peers.delete(e),(s=this.toast)==null||s.call(this,`${n.name} s'est déconnecté du salon local`),this.broadcastRoom()}async createWebRtcHostOffer(){const e=new RTCPeerConnection({iceServers:[]}),t="peer_"+Math.random().toString(36).slice(2,8),n=e.createDataChannel("blindshot_lan",{ordered:!0}),s={pc:e,dc:n,guestId:t};this.peers.set(t,s),n.onopen=()=>{console.log("WebRTC LAN Host DC Open for",t)},n.onclose=()=>{this.unregisterGuest(t)},n.onmessage=a=>{try{const{ev:c,data:l}=JSON.parse(a.data);c==="join"?this.registerGuest(t,l,n):c==="input"?this.handleGuestInput(t,l):c==="leave"&&this.unregisterGuest(t)}catch(c){console.error("WebRTC msg parse error",c)}};const r=await e.createOffer();return await e.setLocalDescription(r),await new Promise(a=>{if(e.iceGatheringState==="complete")return a();const c=()=>{e.iceGatheringState==="complete"&&(e.removeEventListener("icegatheringstatechange",c),a())};e.addEventListener("icegatheringstatechange",c),setTimeout(a,600)}),{ticket:btoa(JSON.stringify({sdp:e.localDescription.sdp,type:e.localDescription.type,guestId:t})),guestId:t,pc:e}}async applyWebRtcGuestAnswer(e,t){const n=this.peers.get(e);if(!n||!n.pc)throw new Error("Hôte introuvable");const{sdp:s,type:r}=JSON.parse(atob(t.trim()));await n.pc.setRemoteDescription(new RTCSessionDescription({sdp:s,type:r}))}async joinWebRtcGuest(e,t){this.leave(),this.active=!0,this.mode="guest",this.isHost=!1,this.transport="webrtc";const{sdp:n,type:s,guestId:r}=JSON.parse(atob(e.trim())),o=new RTCPeerConnection({iceServers:[]});return this.guestPeer={pc:o,dc:null},new Promise(async(a,c)=>{o.ondatachannel=l=>{const u=l.channel;this.guestPeer.dc=u,u.onopen=()=>{u.send(JSON.stringify({ev:"join",data:t})),a({ok:!0})},u.onclose=()=>{var h,d;(d=(h=this.callbacks).onHostLost)==null||d.call(h),this.leave()},u.onmessage=h=>{var d,f,g,_,m,p,E,x,v,R,T,w,C;try{const{ev:S,data:y}=JSON.parse(h.data);S==="room"?(f=(d=this.callbacks).onRoom)==null||f.call(d,y):S==="start"?(_=(g=this.callbacks).onStart)==null||_.call(g,y):S==="phase"?(p=(m=this.callbacks).onPhase)==null||p.call(m,y):S==="reveal"?(x=(E=this.callbacks).onReveal)==null||x.call(E,y):S==="sync"?(R=(v=this.callbacks).onSync)==null||R.call(v,y):S==="over"?(w=(T=this.callbacks).onOver)==null||w.call(T,y):S==="kicked"&&((C=this.toast)==null||C.call(this,"Tu as été exclu du salon"),this.leave())}catch(S){console.error("Guest parse error",S)}}};try{await o.setRemoteDescription(new RTCSessionDescription({sdp:n,type:s}));const l=await o.createAnswer();await o.setLocalDescription(l),await new Promise(h=>{if(o.iceGatheringState==="complete")return h();const d=()=>{o.iceGatheringState==="complete"&&(o.removeEventListener("icegatheringstatechange",d),h())};o.addEventListener("icegatheringstatechange",d),setTimeout(h,600)});const u=btoa(JSON.stringify({sdp:o.localDescription.sdp,type:o.localDescription.type,guestId:r}));a({answerTicket:u})}catch(l){c(l)}})}joinByIp(e,t,n){var o;this.leave(),this.active=!0,this.mode="guest",this.isHost=!1,this.transport="socket";let s=e.trim();s||(s="192.168.43.1:2567"),/^https?:\/\//i.test(s)||(s="http://"+s);try{const a=new URL(s);!a.port&&!s.includes(":2567")&&(s=`${a.protocol}//${a.hostname}:2567`)}catch{}(o=this.toast)==null||o.call(this,`Connexion à ${s}…`);const r=Is(s,{transports:["websocket","polling"],timeout:5e3,reconnectionAttempts:2});this.socket=r,r.on("connect",()=>{var a;(a=this.toast)==null||a.call(this,"Connecté à l'hôte local !"),r.emit("join",{code:"SOLO",name:t.name,look:t.look},c=>{c!=null&&c.ok?n==null||n(c):r.emit("create",{name:t.name,look:t.look,arena:"neon"},l=>{n==null||n(l)})})}),r.on("room",a=>{var c,l;a.isLan=!0,(l=(c=this.callbacks).onRoom)==null||l.call(c,a)}),r.on("start",a=>{var c,l;return(l=(c=this.callbacks).onStart)==null?void 0:l.call(c,a)}),r.on("phase",a=>{var c,l;return(l=(c=this.callbacks).onPhase)==null?void 0:l.call(c,a)}),r.on("reveal",a=>{var c,l;return(l=(c=this.callbacks).onReveal)==null?void 0:l.call(c,a)}),r.on("sync",a=>{var c,l;return(l=(c=this.callbacks).onSync)==null?void 0:l.call(c,a)}),r.on("over",a=>{var c,l;return(l=(c=this.callbacks).onOver)==null?void 0:l.call(c,a)}),r.on("toast",a=>{var c;return(c=this.toast)==null?void 0:c.call(this,a)}),r.on("disconnect",()=>{var a,c;this.active&&this.mode==="guest"&&((c=(a=this.callbacks).onHostLost)==null||c.call(a),this.leave())}),r.on("connect_error",()=>{var a;(a=this.toast)==null||a.call(this,`Impossible de joindre ${s}. Vérifie l'adresse de l'hôte`),n==null||n({ok:!1,error:"Connexion échouée"})})}sendInput(e){var t,n,s;if(this.active)if(this.isHost)this.handleHostInput(e);else if(this.transport==="webrtc"&&((n=(t=this.guestPeer)==null?void 0:t.dc)==null?void 0:n.readyState)==="open")try{this.guestPeer.dc.send(JSON.stringify({ev:"input",data:e}))}catch{}else this.transport==="socket"&&((s=this.socket)!=null&&s.connected)&&this.socket.emit("input",e)}startGame(e){var t;!this.active||!this.isHost||(this.transport==="host_engine"?this.hostStartGame(e):(t=this.socket)!=null&&t.connected&&this.socket.emit("start"))}addBot(){var e;!this.active||!this.isHost||(this.transport==="host_engine"?this.hostAddBot():(e=this.socket)!=null&&e.connected&&this.socket.emit("bot"))}kick(e){var t;!this.active||!this.isHost||(this.transport==="host_engine"?this.hostKick(e):(t=this.socket)!=null&&t.connected&&this.socket.emit("kick",{id:e}))}setArena(e){var t;!this.active||!this.isHost||(this.transport==="host_engine"?this.hostSetArena(e):(t=this.socket)!=null&&t.connected&&this.socket.emit("arena",e))}leave(){var e,t,n,s,r;if(this.isHost){this.broadcastToGuests("kicked",{reason:"L'hôte a fermé le salon"}),clearTimeout((e=this.hostEngine)==null?void 0:e.timer),this.hostEngine=null;for(const o of this.peers.values())try{(t=o.dc)==null||t.close(),(n=o.pc)==null||n.close()}catch{}this.peers.clear()}else if(this.guestPeer){try{(s=this.guestPeer.dc)==null||s.close(),(r=this.guestPeer.pc)==null||r.close()}catch{}this.guestPeer=null}if(this.socket){try{this.socket.disconnect()}catch{}this.socket=null}this.active=!1,this.mode="none",this.transport="none",this.isHost=!1}}async function C_(i){const e=["192.168.43.1","172.20.10.1","127.0.0.1","192.168.1.1","192.168.1.2","192.168.1.100","192.168.0.1","192.168.0.2"],t=[];return await Promise.all(e.map(async n=>{const s=`http://${n}:2567/api/stats`;try{const r=new AbortController,o=setTimeout(()=>r.abort(),950),a=await fetch(s,{signal:r.signal,mode:"cors"});if(clearTimeout(o),a.ok){const c=await a.json(),l={ip:`${n}:2567`,totalOnline:c.totalOnline,rooms:c.activeRoomsCount};t.push(l),i==null||i(l)}}catch{}})),t}const q=i=>document.querySelector(i),dt={get:(i,e)=>{try{return JSON.parse(localStorage.getItem("lp_"+i))??e}catch{return e}},set:(i,e)=>{try{localStorage.setItem("lp_"+i,JSON.stringify(e))}catch{}}};let kl;function yt(i){const e=q("#toast");e.textContent=i,e.classList.add("show"),clearTimeout(kl),kl=setTimeout(()=>e.classList.remove("show"),2400)}function pt(i){if(document.querySelectorAll(".screen").forEach(e=>e.classList.toggle("active",e.id==="screen-"+i)),L.screen=i,i==="custom")Nr("custom");else if(i==="armory"){Nr("armory");const e=xn.findIndex(t=>t.id===L.look.weapon);e>=0&&(_n=e),ts(!0)}else["name","menu","create","lobby","local","lan"].includes(i)&&Nr(i==="lobby"?"lobby":"menu");Kr(),Zs()}function Ws(i){var e;(e=navigator.vibrate)==null||e.call(navigator,i)}const xn=[...Object.values(fi).map(i=>({...i,kind:"weapon"})),{id:"grenade",kind:"grenade",name:"Grenade Frag",price:Us,desc:"Explose en zone large et élimine plusieurs cibles d'un coup. Consommable (1 par lancer)."}];let _n=0;const pn=dt.get("look",{}),Fo=dt.get("weapons",["blaster"]),Ns=Array.isArray(Fo)&&Fo.length?Fo.filter(i=>fi[i]):["blaster"];Ns.includes("blaster")||Ns.unshift("blaster");const L={screen:null,name:dt.get("name",""),coins:Number.isFinite(dt.get("coins",null))?dt.get("coins",30):30,ownedWeapons:Ns,grenades:Math.max(0,parseInt(dt.get("grenades",1),10)||0),combatMode:"weapon",look:{body:Vs.includes(pn.body)?pn.body:Vs[0],laser:Gs.includes(pn.laser)?pn.laser:Gs[1],hat:sc[pn.hat]?pn.hat:"cap",face:rc[pn.face]?pn.face:"happy",weapon:Ns.includes(pn.weapon)?pn.weapon:Ns[0]},room:null,me:{x:0,z:0,angle:0,alive:!0},phase:null,arena:null,zone:0,phaseEnd:0,phaseDur:1,createArena:"neon",lastTickSec:-1};function hs(){dt.set("coins",L.coins),dt.set("weapons",L.ownedWeapons),dt.set("grenades",L.grenades),dt.set("look",L.look),Kr(),Zs()}function Kr(){const i=q("#menu-coins");i&&(i.textContent=`${L.coins} SC`);const e=q("#armory-coins");e&&(e.textContent=`${L.coins} SC`);const t=q("#armory-gren-count");t&&(t.textContent=`Stock : x${L.grenades}`)}function Vh(){gt.coinShower(30);const i=q("#coin-rain");if(i)for(let e=0;e<22;e++){const t=document.createElement("div");t.className="falling-coin";const n=6+Math.random()*88,s=(Math.random()*.42).toFixed(2)+"s",r=(1.1+Math.random()*.55).toFixed(2)+"s",o=(62+Math.random()*26).toFixed(1)+"vh",a=((Math.random()>.5?1:-1)*(220+Math.random()*260)).toFixed(0)+"deg";t.style.left=`${n}%`,t.style.setProperty("--delay",s),t.style.setProperty("--dur",r),t.style.setProperty("--drop",o),t.style.setProperty("--rot",a),i.appendChild(t),setTimeout(()=>t.remove(),1900)}}function Gh(i,e){const t=Math.max(0,i||0),n=t*v_,s=e?x_:0,r=n+s;L.coins+=r,hs();const o=q("#over-coins");if(o){const a=[];t>0&&a.push(`${t} élim. (+${n} SC)`),e&&a.push(`Survie Top 1 (+${s} SC)`);const c=a.length?a.join(" · "):"Aucune élimination (0 SC)";o.innerHTML=`+${r} Shoot Coins<small>${c} — Solde : ${L.coins} SC</small>`}}const gt=new f_(q("#game"));let Ae=null,Ut=null;const ri=new Map;let hi=-Math.PI*.38,Di=-Math.PI*.22,qs=!1,Na=0;function us(){const i=Ae?Ae.rotation.y:hi;Ae&&gt.scene.remove(Ae),Ae=ac(L.look),L.screen==="hud"&&L.combatMode==="grenade"&&L.grenades>0&&Gn(Ae,"grenade"),Ae.rotation.y=i,gt.scene.add(Ae)}function Nr(i="menu"){Hh(),gt.showMenu(i),Ae||us(),Gn(Ae,L.look.weapon),i==="armory"||i==="lobby"?Xn(Ae,0):(Xn(Ae,1),Ae.position.set(0,0,0)),i==="custom"&&(hi=-Math.PI*.38),Nn.visible=!1,On.visible=!1}function Hh(){for(const i of ri.values())gt.scene.remove(i.mesh);ri.clear()}function Zr(){return window.innerHeight>window.innerWidth?1.55:2.45}function es(i=null){if(L.screen==="armory"){const a=xn[_n]||xn[0],c=-(Ut?Ut.rotation.y:Di),l=Math.cos(c),u=Math.sin(c);a.id==="grenade"?(se.grenade(0),gt.grenadeLob(0,0,l*2.4,u*2.4,new Ee(L.look.laser),1.8,0)):(se.laser(0,a.id),gt.beam(l*.5,u*.5,l*5.8,u*5.8,new Ee(L.look.laser),0,a.id)),Ut&&Ut.scale.setScalar(Zr()*1.25);return}if(!Ae)return;const e=-Ae.rotation.y,t=Math.cos(e),n=Math.sin(e),s=t*.75,r=n*.75,o=i||Ae.userData.weaponId||L.look.weapon;o==="grenade"?(se.grenade(0),gt.grenadeLob(s,r,s+t*3.8,r+n*3.8,new Ee(L.look.laser),2,0)):(se.laser(0,o),gt.beam(s,r,s+t*6.5,r+n*6.5,new Ee(L.look.laser),0,o)),Ae.userData.model.scale.set(1.12,.9,1.12)}q("#game").addEventListener("pointerdown",i=>{L.screen!=="custom"&&L.screen!=="armory"||(qs=!0,Na=i.clientX)});addEventListener("pointermove",i=>{if(!qs||L.screen!=="custom"&&L.screen!=="armory")return;const e=i.clientX-Na;Na=i.clientX,L.screen==="armory"?(Di+=e*.014,Ut&&(Ut.rotation.y=Di)):(hi+=e*.012,Ae&&(Ae.rotation.y=hi))});addEventListener("pointerup",()=>{qs=!1});const Nn=(()=>{const i=document.createElement("canvas");i.width=256,i.height=8;const e=i.getContext("2d");for(let r=0;r<256;r+=16)e.fillStyle=`rgba(255,255,255,${1-r/256})`,e.fillRect(r,0,10,8);const t=new Ka(i),n=new G(new qn(1,.12),new Vt({map:t,transparent:!0,depthWrite:!1}));n.geometry.translate(.5,0,0),n.rotation.x=-Math.PI/2,n.scale.x=14;const s=new Qe;return s.add(n),s.visible=!1,gt.scene.add(s),s.userData.mat=n.material,s})(),On=(()=>{const i=new Qe,e=new G(new zn(li*.86,li,32),new Vt({color:16757568,side:tn,transparent:!0,opacity:.78}));e.rotation.x=-Math.PI/2;const t=new G(new Za(li*.86,32),new Vt({color:16757568,side:tn,transparent:!0,opacity:.18}));return t.rotation.x=-Math.PI/2,i.add(e,t),i.position.y=.06,i.visible=!1,i.userData={ring:e,fill:t},gt.scene.add(i),i})();function Jr(){const i=q("#btn-hud-switch");if(!i)return;L.combatMode==="grenade"&&L.grenades<=0&&(L.combatMode="weapon");const e=q("#hud-weapon-name"),t=q("#hud-weapon-hint");if(L.combatMode==="grenade")e&&(e.textContent=`Grenade Frag (x${L.grenades})`),t&&(t.textContent="Zone large · Switch (Clic / R2)"),i.classList.add("grenade-mode"),Ae&&Gn(Ae,"grenade");else{const n=fi[L.look.weapon]||fi.blaster,s=L.grenades>0?` · Grenade x${L.grenades}`:"";e&&(e.textContent=`${n.name}${s}`),t&&(t.textContent="Changer (Clic / R2)"),i.classList.remove("grenade-mode"),Ae&&Gn(Ae,L.look.weapon)}}function hc(){if(L.screen!=="hud"||L.phase!=="move"||!L.me.alive)return;const i=[...L.ownedWeapons];if(L.grenades>0&&i.push("grenade"),i.length<=1){yt("Achète des armes ou grenades dans l'Armurerie");return}const e=L.combatMode==="grenade"?"grenade":L.look.weapon,t=i.indexOf(e),n=i[(t+1)%i.length];n==="grenade"?L.combatMode="grenade":(L.combatMode="weapon",L.look.weapon=n,dt.set("look",L.look)),se.switchWeapon(),Jr(),Ae&&Ae.userData.model.scale.set(1.12,.9,1.12),Yn("input",{x:L.me.x,z:L.me.z,angle:L.me.angle,mode:L.combatMode,weapon:L.look.weapon})}q("#btn-hud-switch").onclick=i=>{i.stopPropagation(),hc()};const P_="https://blindshot-19b3.onrender.com",uc=location.protocol==="https:"||location.hostname&&location.hostname!=="localhost"&&!location.port?location.origin:P_;let Or=dt.get("server","");Or&&Or.includes("192.168.")&&(Or="",dt.set("server",""));let Ri=Or||uc,Ve,ut;function zr(){var i;return ut!=null&&ut.isLanActive?ut.isHost?"lan_host":((i=ut.socket)==null?void 0:i.id)||"lan_guest":L.offlineMode?"local_me":Ve==null?void 0:Ve.id}const L_=["Zappy","Bzzt","Pixel","Nova","Kiwi","Bolt","Rico","Mochi"],ko=Object.keys(fi),Bo={room:null,timer:null,roomInfo(){const i=this.room;return{code:i.code,arena:i.arena.id,host:i.host,state:i.state,players:[...i.players.values()].map(e=>({id:e.id,name:e.name,look:e.look,alive:e.alive,bot:e.bot,kills:e.kills}))}},create({name:i,look:e,arena:t},n){this.leave(),L.offlineMode=!0;const s=Gt[t]||Gt.neon;this.room={code:"SOLO",host:"local_me",state:"lobby",arena:s,players:new Map,zone:s.size,round:0,phase:null},this.room.players.set("local_me",{id:"local_me",name:(i||"Joueur").slice(0,14),look:{...e},bot:!1,alive:!0,kills:0,x:0,z:0,angle:0,mode:"weapon"});for(let r=0;r<3;r++)this.addBot(!0);Un(this.roomInfo()),n==null||n({ok:!0,code:"SOLO"})},addBot(i=!1){const e=this.room;if(!e||e.state!=="lobby"||e.players.size>=Hs)return;const t="bot_"+Math.random().toString(36).slice(2,8),n=new Set([...e.players.values()].map(a=>a.name)),s=L_.find(a=>!n.has(a))||"Bot",r=Object.keys(sc),o=Object.keys(rc);e.players.set(t,{id:t,name:s,bot:!0,alive:!0,kills:0,x:0,z:0,angle:0,mode:"weapon",look:{body:Vs[Math.floor(Math.random()*Vs.length)],laser:Gs[Math.floor(Math.random()*Gs.length)],hat:r[Math.floor(Math.random()*r.length)],face:o[Math.floor(Math.random()*o.length)],weapon:ko[Math.floor(Math.random()*ko.length)]}}),i||Un(this.roomInfo())},kick(i){var t;const e=this.room;!e||e.state!=="lobby"||(t=e.players.get(i))!=null&&t.bot&&(e.players.delete(i),Un(this.roomInfo()))},arena(i){const e=this.room;!e||e.state!=="lobby"||!Gt[i]||(e.arena=Gt[i],e.zone=e.arena.size,Un(this.roomInfo()))},start(){const i=this.room;if(!i||i.state!=="lobby")return;if(i.players.size<2)return yt("Il faut au moins 2 joueurs (ajoute un bot !)");i.state="playing",i.round=0,i.zone=i.arena.size;const e=i.players.get("local_me");e&&(e.look={...L.look});const t=[...i.players.values()],n=i.arena.shape==="circle"?i.zone*.7:i.zone*.75,s=Math.random()*Math.PI*2;t.forEach((r,o)=>{const a=s+o/t.length*Math.PI*2,[c,l]=It(i.arena,i.zone,Math.cos(a)*n,Math.sin(a)*n);r.x=c,r.z=l,r.angle=Math.atan2(-l,-c),r.alive=!0,r.kills=0,r.mode="weapon"}),fc({you:{x:e.x,z:e.z,angle:e.angle},zone:i.zone}),Un(this.roomInfo()),clearTimeout(this.timer),this.timer=setTimeout(()=>this.movePhase(),1500)},movePhase(){const i=this.room;if(!i||i.state!=="playing")return;i.round++,i.phase="move";const e=[...i.players.values()].filter(t=>t.alive);for(const t of e)if(t.mode="weapon",t.bot){const n=e.filter(a=>a!==t),s=Math.random()*Math.PI*2,r=Math.random()*ls*4;t.target=It(i.arena,i.zone,t.x+Math.cos(s)*r,t.z+Math.sin(s)*r);const o=n[Math.floor(Math.random()*n.length)];o&&(t.aimAt=[o.x+(Math.random()-.5)*6,o.z+(Math.random()-.5)*6])}pc({round:i.round,duration:Br,zone:i.zone,alive:e.map(t=>t.id)}),clearTimeout(this.timer),this.timer=setTimeout(()=>this.revealPhase(),Br+150)},revealPhase(){const i=this.room;if(!i||i.state!=="playing")return;i.phase="reveal";const e=[...i.players.values()].filter(a=>a.alive);for(const a of e)a.bot&&a.target&&([a.x,a.z]=a.target,a.aimAt&&(a.angle=Math.atan2(a.aimAt[1]-a.z,a.aimAt[0]-a.x)));const t=[],n=new Set;for(const a of e)if(a.mode==="grenade"){const c=lc(i.arena,i.zone,a,e),l=c.hits.map(u=>u.id);for(const u of l)n.add(u);a.kills+=l.length,t.push({id:a.id,type:"grenade",weapon:"grenade",x:c.x,z:c.z,ex:c.ex,ez:c.ez,hits:l,hit:l[0]||null}),a.mode="weapon"}else{const c=cc(i.arena,i.zone,a,e);c.hit&&(n.add(c.hit.id),a.kills++),t.push({id:a.id,type:"laser",weapon:a.look.weapon||"blaster",x:c.x,z:c.z,ex:c.ex,ez:c.ez,hits:c.hit?[c.hit.id]:[],hit:c.hit?c.hit.id:null})}for(const a of n){const c=i.players.get(a);c&&(c.alive=!1)}const s=[...n],r=[...i.players.values()].filter(a=>a.alive);let o=i.zone;i.arena.shape==="circle"&&i.arena.shrinkStep&&s.length&&(o=Math.max(i.arena.minSize,i.zone-i.arena.shrinkStep*s.length)),mc({round:i.round,players:e.map(a=>({id:a.id,x:a.x,z:a.z,angle:a.angle,weapon:a.look.weapon||"blaster"})),shots:t,eliminated:s,zone:o}),i.zone=o;for(const a of r)[a.x,a.z]=It(i.arena,i.zone,a.x,a.z);clearTimeout(this.timer),this.timer=setTimeout(()=>{if(!this.room)return;if(r.length<=1){const c=r[0]||null;i.state="lobby",i.phase=null;const l=[...i.players.values()].sort((u,h)=>h.kills-u.kills).map(u=>({id:u.id,name:u.name,kills:u.kills}));gc({winner:c?{id:c.id,name:c.name,look:c.look,bot:c.bot,kills:c.kills}:null,ranking:l});for(const u of i.players.values())u.alive=!0;Un(this.roomInfo());return}const a=i.players.get("local_me");a&&a.alive&&Object.assign(L.me,{x:a.x,z:a.z,angle:a.angle}),this.movePhase()},zh)},input({x:i,z:e,angle:t,mode:n,weapon:s}){const r=this.room;if(!r||r.phase!=="move")return;const o=r.players.get("local_me");!o||!o.alive||([o.x,o.z]=It(r.arena,r.zone,i,e),o.angle=t,(n==="grenade"||n==="weapon")&&(o.mode=n),ko.includes(s)&&(o.look.weapon=s))},leave(){clearTimeout(this.timer),this.room=null,L.offlineMode=!1}};function Yn(i,e,t){if(ut!=null&&ut.isLanActive){i==="input"?ut.sendInput(e):i==="start"?ut.startGame(L.look):i==="addBot"||i==="bot"?ut.addBot():i==="kick"?ut.kick((e==null?void 0:e.id)||e):i==="arena"?ut.setArena(e):i==="leave"&&ut.leave();return}if(i==="create"){Ve!=null&&Ve.connected?(L.offlineMode=!1,Ve.emit("create",e,t)):Bo.create(e,t);return}if(L.offlineMode){typeof Bo[i]=="function"&&Bo[i](e);return}Ve==null||Ve.emit(i,e,t)}ut=new R_({toast:yt,onRoom:i=>Un(i),onStart:i=>fc(i),onPhase:i=>pc(i),onReveal:i=>mc(i),onSync:i=>Object.assign(L.me,i),onOver:i=>gc(i),onHostLost:()=>{const i=q("#dlg-lan-host-lost");if(i)try{i.showModal()}catch{i.setAttribute("open","")}}});function Zs(){Ve!=null&&Ve.connected&&Ve.emit("presence",{name:L.name||"Anonyme",weapon:L.look.weapon,screen:L.screen||"menu"})}const Oa=dt.get("client_session_id")||"sess_"+Math.random().toString(36).slice(2,10);dt.set("client_session_id",Oa);let ws=null;function Wh(){Ve==null||Ve.disconnect(),Ve=Is(Ri,{transports:["websocket","polling"],auth:{sessionId:Oa}}),Ve.on("connect",()=>{var e;q("#conn").classList.add("ok"),q("#conn").textContent="Connecté au serveur ("+Ri+")",ws&&(clearTimeout(ws),ws=null),Zs();const i=((e=L.room)==null?void 0:e.code)||dt.get("current_room_code");i&&["lobby","hud"].includes(L.screen)&&Ve.emit("resume",{sessionId:Oa,roomCode:i,name:L.name,look:L.look},t=>{t!=null&&t.ok&&t.room&&(L.room=t.room,dt.set("current_room_code",t.room.code),yt("Session rétablie"),Un(t.room))})}),Ve.on("disconnect",()=>{q("#conn").classList.remove("ok"),q("#conn").textContent="Connexion en pause… reconnexion en cours",L.room&&!L.offlineMode&&(ws||(ws=setTimeout(()=>{Ve!=null&&Ve.connected||(L.room=null,dt.set("current_room_code",null),pt("menu"),yt("Connexion perdue"))},55e3)))}),Ve.on("connect_error",()=>{q("#conn").classList.remove("ok"),q("#conn").textContent="Mode Autonome prêt (Solo & Bots) · Serveur : "+Ri}),Ve.on("toast",yt),Ve.on("room",Un),Ve.on("start",fc),Ve.on("phase",pc),Ve.on("reveal",mc),Ve.on("sync",i=>Object.assign(L.me,i)),Ve.on("over",gc)}document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ve&&!Ve.connected&&Ve.connect()});q("#btn-name-ok").onclick=()=>{const i=q("#input-name").value.trim();if(!i)return yt("Choisis un pseudo");se.ui("primary"),L.name=i.slice(0,14),dt.set("name",L.name),q("#menu-name").textContent=L.name,Zs(),pt("custom")};q("#input-name").addEventListener("keydown",i=>i.key==="Enter"&&q("#btn-name-ok").click());q("#btn-custom").onclick=()=>{se.ui(),pt("custom")};q("#btn-armory").onclick=()=>{se.ui("primary"),pt("armory")};q("#btn-menu-coins").onclick=()=>{se.ui(),pt("armory")};q("#btn-create").onclick=()=>{se.ui("primary"),Yh(),pt("create")};q("#btn-join").onclick=()=>{const i=q("#input-code").value.trim().toUpperCase();if(i.length!==4)return yt("Le code fait 4 lettres");if(!(Ve!=null&&Ve.connected))return yt("Pour rejoindre un ami en ligne, vérifie l'adresse du serveur");se.ui("primary"),L.offlineMode=!1,Ve.emit("join",{code:i,name:L.name,look:L.look},e=>{e.ok||yt(e.error)})};q("#input-code").addEventListener("keydown",i=>i.key==="Enter"&&q("#btn-join").click());q("#btn-menu-lan").onclick=()=>{se.ui("primary"),pt("lan")};q("#btn-lan-back").onclick=()=>{se.ui("back"),pt("menu")};q("#btn-lan-host").onclick=()=>{se.ui("primary"),L.offlineMode=!1,ut.createHostRoom({name:L.name||"Hôte",look:L.look,arena:L.createArena||"neon"}),pt("lobby"),yt("Salon local créé ! Tes amis peuvent te rejoindre.")};q("#btn-lan-pre-android").onclick=()=>{se.ui(),q("#input-lan-ip").value="192.168.43.1:2567"};q("#btn-lan-pre-iphone").onclick=()=>{se.ui(),q("#input-lan-ip").value="172.20.10.1:2567"};q("#btn-lan-pre-pc").onclick=()=>{se.ui(),q("#input-lan-ip").value="localhost:2567"};q("#btn-lan-join").onclick=()=>{const i=q("#input-lan-ip").value.trim();if(!i)return yt("Saisis l'adresse IP de l'hôte");se.ui("primary"),L.offlineMode=!1,ut.joinByIp(i,{name:L.name,look:L.look},e=>{e!=null&&e.ok&&(pt("lobby"),yt("Connecté au salon local !"))})};q("#input-lan-ip").addEventListener("keydown",i=>i.key==="Enter"&&q("#btn-lan-join").click());q("#btn-lan-scan").onclick=async()=>{se.ui();const i=q("#lan-scan-results");i.style.display="block",i.innerHTML=`<div style="font-size:12px;color:var(--muted);text-align:center;">Recherche d'hôtes sur le réseau local…</div>`;const e=await C_();e.length?(i.innerHTML=e.map(t=>`
      <div class="lan-host-pill" data-ip="${t.ip}">
        <span>📡 Hôte détecté (${t.ip})</span>
        <b>Rejoindre &rarr;</b>
      </div>
    `).join(""),i.querySelectorAll(".lan-host-pill").forEach(t=>{t.onclick=()=>{const n=t.dataset.ip;q("#input-lan-ip").value=n,q("#btn-lan-join").click()}})):i.innerHTML='<div style="font-size:12px;color:var(--muted);text-align:center;">Aucun hôte automatique détecté. Utilise les raccourcis Hotspot (192.168.43.1).</div>'};q("#btn-lan-host-lost-ok").onclick=()=>{se.ui("back");const i=q("#dlg-lan-host-lost");try{i.open&&i.close()}catch{}i.removeAttribute("open"),ut.leave(),L.room=null,dt.set("current_room_code",null),pt("menu")};function dc(){const i=q("#dlg-settings");if(i){try{i.open&&i.close()}catch{}i.removeAttribute("open")}}function D_(i){let e=String(i||"").trim().replace(/\/+$/,"");return e?(/^https?:\/\//i.test(e)||(e=(/^(localhost|\d+\.\d+\.\d+\.\d+)/i.test(e)?"http://":"https://")+e),e):uc}q("#btn-settings").onclick=()=>{se.ui(),q("#input-server").value=Ri;const i=q("#dlg-settings");try{i.showModal()}catch{i.setAttribute("open","")}};q("#btn-settings-cancel").onclick=i=>{i.preventDefault(),i.stopPropagation(),se.ui("back"),dc()};q("#btn-settings-ok").onclick=i=>{i.preventDefault(),i.stopPropagation(),se.ui("primary"),Ri=D_(q("#input-server").value),dt.set("server",Ri===uc?"":Ri),dc(),Wh(),yt("Serveur enregistré")};q("#input-server").addEventListener("keydown",i=>{i.key==="Enter"&&q("#btn-settings-ok").click(),i.key==="Escape"&&q("#btn-settings-cancel").click()});q("#dlg-settings").addEventListener("click",i=>{i.target===q("#dlg-settings")&&(se.ui("back"),dc())});document.querySelectorAll("#custom-tabs .ctab").forEach(i=>{i.onclick=()=>{se.ui();const e=i.dataset.tab;document.querySelectorAll("#custom-tabs .ctab").forEach(t=>t.classList.toggle("active",t===i)),document.querySelectorAll(".custom-pane").forEach(t=>t.classList.toggle("active",t.dataset.pane===e)),e==="face"||e==="hat"?hi=-Math.PI*.48:e==="laser"?hi=-Math.PI*.25:hi=-Math.PI*.38}});q("#btn-custom-shot").onclick=()=>es("weapon");function qh(){const i=(t,n,s)=>{t.innerHTML="";for(const r of n){const o=document.createElement("button");o.className="swatch"+(L.look[s]===r?" sel":""),o.style.background=r,o.style.color=r,o.ariaLabel=r,o.onclick=()=>Bl(s,r),t.appendChild(o)}},e=(t,n,s)=>{t.innerHTML="";for(const[r,o]of Object.entries(n)){const a=document.createElement("button");a.className="pill"+(L.look[s]===r?" sel":""),a.textContent=o,a.onclick=()=>Bl(s,r),t.appendChild(a)}};i(q("#sw-body"),Vs,"body"),i(q("#sw-laser"),Gs,"laser"),e(q("#pl-hat"),sc,"hat"),e(q("#pl-face"),rc,"face"),q("#input-rename").value=L.name}function Bl(i,e){L.look[i]=e,dt.set("look",L.look),us(),qh(),Ws(10),Ae.userData.model.scale.setScalar(1.15),i==="laser"?es():se.ui()}q("#input-rename").addEventListener("change",i=>{const e=i.target.value.trim().slice(0,14);e&&(L.name=e,dt.set("name",e),q("#menu-name").textContent=e,se.ui("primary"),Zs())});q("#btn-custom-back").onclick=()=>{se.ui("back"),pt("menu")};function ts(i=!1){Kr();const e=xn[_n]||xn[0];if(q("#armory-counter").textContent=`${_n+1} / ${xn.length}`,i){Ut=g_(e.id,L.look.laser),Di=-Math.PI*.22,Ut.rotation.y=Di,gt.setShowcaseMesh(Ut);const a=Zr();Ut.scale.setScalar(a*1.12)}const t=q("#armory-strip");t&&(t.innerHTML="",xn.forEach((a,c)=>{const l=document.createElement("button"),u=a.kind==="grenade"?L.grenades>0:L.ownedWeapons.includes(a.id);l.className="strip-item"+(c===_n?" active":"")+(u?" owned":""),l.textContent=a.name,l.onclick=()=>{_n!==c&&(_n=c,se.switchWeapon(),ts(!0))},t.appendChild(l)}));const n=q("#armory-item-name"),s=q("#armory-item-badge"),r=q("#armory-item-desc"),o=q("#btn-armory-action");if(n.textContent=e.name,r.textContent=e.desc,e.kind==="grenade")s.className="tag hot",s.textContent=`Stock : x${L.grenades}`,o.className="btn primary big",o.textContent=`Acheter 1 Grenade · ${Us} SC`,o.onclick=()=>Xh();else{const a=L.ownedWeapons.includes(e.id);L.look.weapon===e.id?(s.className="tag eq",s.textContent="Équipé",o.className="btn dark big",o.textContent="Équipée · Tester le tir",o.onclick=()=>es(e.id)):a?(s.className="tag",s.textContent="Possédé",o.className="btn primary big",o.textContent="Équiper cette arme",o.onclick=()=>{L.look.weapon=e.id,L.combatMode="weapon",hs(),us(),se.switchWeapon(),es(e.id),ts(!1),yt(`${e.name} équipée`)}):(s.className="tag price",s.textContent=`${e.price} SC`,o.className="btn primary big",o.textContent=`Acheter · ${e.price} SC`,o.onclick=()=>{if(L.coins<e.price)return se.ui("back"),yt(`Il te manque ${e.price-L.coins} Shoot Coins`);L.coins-=e.price,L.ownedWeapons.includes(e.id)||L.ownedWeapons.push(e.id),L.look.weapon=e.id,L.combatMode="weapon",hs(),us(),se.buy(),Vh(),es(e.id),yt(`${e.name} débloquée et équipée`),ts(!1)})}}function Vr(i){_n=(_n+i+xn.length)%xn.length,se.switchWeapon(),ts(!0)}function Xh(){var i;if(L.coins<Us)return se.ui("back"),yt(`Il te manque ${Us-L.coins} Shoot Coins`);L.coins-=Us,L.grenades+=1,hs(),se.buy(),Vh(),((i=xn[_n])==null?void 0:i.kind)==="grenade"&&Ut&&Ut.scale.setScalar(Zr()*1.25),ts(!1),yt(`Grenade achetée (Stock : x${L.grenades})`)}q("#btn-armory-prev").onclick=()=>Vr(-1);q("#btn-armory-next").onclick=()=>Vr(1);q("#btn-buy-grenade").onclick=()=>Xh();q("#btn-armory-shot").onclick=()=>es();q("#btn-armory-back").onclick=()=>{se.ui("back"),pt("menu")};function I_(i){const e="#"+i.theme.line.toString(16).padStart(6,"0"),t="#"+i.theme.floor.toString(16).padStart(6,"0"),n="#"+i.theme.ground.toString(16).padStart(6,"0"),s=i.shape==="circle"?"border-radius:50%;":"border-radius:6px;",r=i.obstacles.map(o=>`<i style="position:absolute;left:${50+o.x/i.size*40-o.w/i.size*20}%;top:${50+o.z/i.size*40-o.d/i.size*40}%;width:${o.w/i.size*40}%;height:${o.d/i.size*40}%;background:#8f8a80"></i>`).join("");return`<div class="arena-thumb" style="background:${n}"><div style="position:absolute;inset:${i.size<10?16:6}px;${s}background:${t};border:2px solid ${e}"></div>${r}</div>`}function Yh(){const i=q("#arena-list");i.innerHTML="";for(const e of Object.values(Gt)){const t=document.createElement("div");t.className="arena-card panel"+(L.createArena===e.id?" sel":""),t.id="arena-"+e.id;const n=e.shrinkStep?'<span class="tag hot">Rétrécit</span>':e.obstacles.length>6?'<span class="tag">Tactique</span>':e.size>12?'<span class="tag">Grande</span>':'<span class="tag">Petite</span>';t.innerHTML=`${I_(e)}<div><h3>${e.name}${n}</h3><p>${e.desc}</p></div>`,t.onclick=()=>{se.ui(),L.createArena=e.id,Yh()},i.appendChild(t)}}q("#btn-create-back").onclick=()=>{se.ui("back"),pt("menu")};q("#btn-create-ok").onclick=()=>{se.ui("primary"),Yn("create",{name:L.name,look:L.look,arena:L.createArena},i=>{i!=null&&i.ok||yt("Erreur de création")})};function Un(i){var s,r;L.room=i;const e=i.host===zr();q("#lobby-code").textContent=i.isLan?`${i.code} · Local`:i.code;const t=Gt[i.arena];q("#lobby-arena").innerHTML=e?`<span>Arène</span><select id="sel-arena">${Object.values(Gt).map(o=>`<option value="${o.id}" ${o.id===t.id?"selected":""}>${o.name}</option>`).join("")}</select>`:`<span>Arène</span><b>${t.name}</b>`,e&&(q("#sel-arena").onchange=o=>{se.ui(),Yn("arena",o.target.value)});const n=q("#lobby-players");n.innerHTML="";for(const o of i.players){const a=document.createElement("li"),c=((r=fi[(s=o.look)==null?void 0:s.weapon])==null?void 0:r.name)||"Blaster";if(a.innerHTML=`<span class="dot" style="background:${o.look.body};border-color:${o.look.laser}"></span><span class="nm">${Gr(o.name)}</span><span class="tag">${c}</span>${o.bot?'<span class="tag">Bot</span>':""}${o.id===i.host?'<span class="tag">Hôte</span>':""}`,e&&(o.bot||ut!=null&&ut.isLanActive&&o.id!==zr())){const l=document.createElement("button");l.className="x",l.innerHTML="&times;",l.onclick=()=>{se.ui("back"),Yn("kick",o.id)},a.appendChild(l)}n.appendChild(a)}for(let o=i.players.length;o<6;o++){const a=document.createElement("li");a.className="empty",a.textContent="Libre",n.appendChild(a)}q("#btn-start").style.display=e?"":"none",q("#btn-bot").style.display=e?"":"none",q("#btn-bot").disabled=i.players.length>=6,q("#lobby-wait").style.display=e?"none":"",dt.set("current_room_code",i.code),i.state==="lobby"&&["menu","create","custom","armory","name","lan"].includes(L.screen)&&pt("lobby")}function Gr(i){return i.replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e])}q("#btn-bot").onclick=()=>{se.ui(),Yn("addBot")};q("#btn-start").onclick=()=>{se.ui("primary"),Yn("start")};q("#btn-lobby-leave").onclick=()=>{se.ui("back"),Yn("leave"),ut!=null&&ut.isLanActive&&ut.leave(),L.room=null,dt.set("current_room_code",null),se.startBgm(),pt("menu")};q("#btn-copy").onclick=()=>{var i,e;se.ui(),(e=navigator.clipboard)==null||e.writeText(((i=L.room)==null?void 0:i.code)||""),yt("Code copié")};q("#btn-over-lobby").onclick=()=>{se.ui("primary"),se.startBgm(),Xs.active?Xs.openLobby():L.room?pt("lobby"):pt("menu")};function Ai(i,e=1200){const t=q("#banner");t.innerHTML=i,t.classList.add("show"),clearTimeout(t._t),e&&(t._t=setTimeout(()=>t.classList.remove("show"),e))}function U_(i){const e=document.createElement("div");e.innerHTML=i,q("#feed").prepend(e),setTimeout(()=>e.remove(),4e3)}function Er(i){var e;return(e=L.room)==null?void 0:e.players.find(t=>t.id===i)}function fc({you:i,zone:e}){se.stopBgm(),L.arena=Gt[L.room.arena],L.zone=e,L.combatMode="weapon",Object.assign(L.me,i,{alive:!0}),Hh(),gt.buildArena(L.arena,e),Ae||us(),Gn(Ae,L.look.weapon),Xn(Ae,1),Ae.position.set(i.x,0,i.z),q("#feed").innerHTML="",q("#screen-hud").classList.add("locked"),Jr(),pt("hud"),se.introWhoosh(),Ai("Prêt ?<small>Tu ne verras que toi…</small>",1400)}function pc(i){L.phase="move",L.phaseDur=i.duration,L.phaseEnd=performance.now()+i.duration,L.lastTickSec=Math.ceil(i.duration/1e3),L.zone=i.zone,L.combatMode==="grenade"&&L.grenades<=0&&(L.combatMode="weapon"),Jr(),q("#hud-round").textContent="Manche "+i.round,q("#hud-alive").textContent=i.alive.length+" en vie";for(const e of ri.values())e.target=0;se.roundStart(),L.me.alive?(q("#screen-hud").classList.remove("locked"),Ai("Bouge<small>Vise là où ils iront…</small>",1300),Nn.visible=!0,On.visible=L.combatMode==="grenade",Yn("input",{x:L.me.x,z:L.me.z,angle:L.me.angle,mode:L.combatMode,weapon:L.look.weapon})):(Ai("Spectateur",1300),Nn.visible=!1,On.visible=!1),Ws(30)}function mc(i){L.phase="reveal",q("#screen-hud").classList.add("locked"),Nn.visible=!1,On.visible=!1,Ai("Verdict",1100),Ws([20,40,20]);const e=zr();for(const n of i.players){if(n.id===e){L.me.x=n.x,L.me.z=n.z,L.me.angle=n.angle;continue}let s=ri.get(n.id);if(!s){const r=Er(n.id),o=ac((r==null?void 0:r.look)||{body:"#888888",laser:"#ffffff",hat:"none",face:"happy",weapon:"blaster"});Xn(o,0),gt.scene.add(o),s={mesh:o,opacity:0,target:1},ri.set(n.id,s)}s.target=1,s.opacity=0,s.mesh.position.set(n.x,0,n.z),s.mesh.rotation.y=-n.angle,s.mesh.userData.model.position.y=2}const t=i.shots.find(n=>n.id===e);t&&t.type==="grenade"&&(L.grenades=Math.max(0,L.grenades-1),L.combatMode="weapon",hs(),Jr()),setTimeout(()=>{i.shots.forEach((n,s)=>{var c,l;const r=Er(n.id),o=s*.035+Math.random()*.04,a=new Ee((r==null?void 0:r.look.laser)||"#fff");n.type==="grenade"?(se.grenade(o),gt.grenadeLob(n.x,n.z,n.ex,n.ez,a,n.radius||li,o)):(se.laser(o,n.weapon||((c=r==null?void 0:r.look)==null?void 0:c.weapon)||"blaster"),gt.beam(n.x,n.z,n.ex,n.ez,a,o,n.weapon||((l=r==null?void 0:r.look)==null?void 0:l.weapon)||"blaster"))})},700),setTimeout(()=>{i.eliminated.forEach((n,s)=>{const r=Er(n),o=i.shots.find(l=>Array.isArray(l.hits)?l.hits.includes(n):l.hit===n),a=o&&Er(o.id),c=(o==null?void 0:o.type)==="grenade"?" (Grenade)":"";if(se.hitAndScream(s*.09),U_(`<b style="color:${a==null?void 0:a.look.laser}">${Gr((a==null?void 0:a.name)||"?")}</b> élimine ${Gr((r==null?void 0:r.name)||"?")}${c}`),n===e)L.me.alive=!1,gt.burst(L.me.x,L.me.z,new Ee(L.look.body)),Xn(Ae,0),Ai("Pouf<small>Tu as été éliminé</small>",2e3),Ws(300);else{const l=ri.get(n);l&&(gt.burst(l.mesh.position.x,l.mesh.position.z,new Ee((r==null?void 0:r.look.body)||"#fff")),gt.scene.remove(l.mesh),ri.delete(n))}}),i.eliminated.length||Ai("Raté<small>Personne n'est touché</small>",1300)},950),setTimeout(()=>{i.zone!==L.zone&&Ai("L'arène rétrécit",1300),L.zone=i.zone,gt.setZone(i.zone)},2e3)}function gc({winner:i,ranking:e}){setTimeout(()=>{const t=zr(),n=(i==null?void 0:i.id)===t,s=e.find(o=>o.id===t),r=(s==null?void 0:s.kills)||0;Gh(r,n),i&&se.victory(),se.startBgm(),q("#over-title").textContent=i?n?"Victoire":`${i.name} gagne`:"Égalité",q("#over-kicker").textContent="Fin de partie",q("#btn-over-lobby").textContent="Retour au salon",q("#over-rank").innerHTML=e.map(o=>`<li><b>${Gr(o.name)}</b> — ${o.kills} élim.</li>`).join(""),pt("over"),n&&Ws([50,50,100])},400)}const Ft={move:new Ge,aim:new Ge,keys:new Set,mouseAim:null};let zo=!1,zl=0;function N_(){const i=navigator.getGamepads?navigator.getGamepads():[];for(const e of i)if(e&&e.connected)return e;return null}function O_(i,e=120,t=.8,n=.4){var s,r;if(i)try{const o=i.vibrationActuator;o!=null&&o.playEffect?o.playEffect(o.type||"dual-rumble",{startDelay:0,duration:e,strongMagnitude:t,weakMagnitude:n}).catch(()=>{}):(r=(s=i.hapticActuators)==null?void 0:s[0])!=null&&r.pulse&&i.hapticActuators[0].pulse(t,e).catch(()=>{})}catch{}}function $h(i,e){const t=i.querySelector(".knob");let n=null;const s=50,r=a=>{const c=i.getBoundingClientRect();let l=a.clientX-(c.left+c.width/2),u=a.clientY-(c.top+c.height/2);const h=Math.hypot(l,u);h>s&&(l*=s/h,u*=s/h),t.style.transform=`translate(${l}px, ${u}px)`,e.set(l/s,u/s)};i.addEventListener("pointerdown",a=>{n=a.pointerId,i.setPointerCapture(n),r(a)}),i.addEventListener("pointermove",a=>a.pointerId===n&&r(a));const o=a=>{a.pointerId===n&&(n=null,t.style.transform="",e.set(0,0))};i.addEventListener("pointerup",o),i.addEventListener("pointercancel",o)}$h(q("#joy-move"),Ft.move);$h(q("#joy-aim"),Ft.aim);addEventListener("keydown",i=>{if(i.target.tagName==="INPUT")return;const e=i.key.toLowerCase();if(L.screen==="armory"&&!i.repeat){if(e==="arrowleft"||e==="a"||e==="q"){Vr(-1);return}if(e==="arrowright"||e==="d"){Vr(1);return}}if((e==="e"||e==="r")&&!i.repeat&&L.screen==="hud"){hc();return}Ft.keys.add(e)});addEventListener("keyup",i=>Ft.keys.delete(i.key.toLowerCase()));const Vl=new yg,F_=new ni(new O(0,1,0),-.9),Gl=new O;q("#game").addEventListener("pointermove",i=>{i.pointerType!=="mouse"||L.screen!=="hud"||(Vl.setFromCamera(new Ge(i.clientX/innerWidth*2-1,-(i.clientY/innerHeight)*2+1),gt.camera),Vl.ray.intersectPlane(F_,Gl)&&(Ft.mouseAim=Gl.clone()))});let Hl=performance.now(),Vo=0;function jh(i){var o,a,c,l,u,h,d,f;requestAnimationFrame(jh);const e=Math.min(.05,(i-Hl)/1e3);Hl=i;const t=i/1e3,n=N_(),s=q("#pad-status");s&&(s.style.display=n?"":"none");let r=!1;if(L.screen==="hud"&&L.phase==="move"&&L.me.alive){const g=Ft.keys,_=Ft.move.clone();(g.has("w")||g.has("z")||g.has("arrowup"))&&(_.y-=1),(g.has("s")||g.has("arrowdown"))&&(_.y+=1),(g.has("a")||g.has("q")||g.has("arrowleft"))&&(_.x-=1),(g.has("d")||g.has("arrowright"))&&(_.x+=1);let m=0,p=0;if(n){const R=Math.abs(n.axes[0]||0)<.18?0:n.axes[0]||0,T=Math.abs(n.axes[1]||0)<.18?0:n.axes[1]||0,w=Math.abs(n.axes[2]||0)<.18?0:n.axes[2]||0,C=Math.abs(n.axes[3]||0)<.18?0:n.axes[3]||0,S=((o=n.buttons[15])!=null&&o.pressed?1:0)-((a=n.buttons[14])!=null&&a.pressed?1:0),y=((c=n.buttons[13])!=null&&c.pressed?1:0)-((l=n.buttons[12])!=null&&l.pressed?1:0);Math.hypot(R+S,T+y)>.1&&(_.x+=R+S,_.y+=T+y,Ft.mouseAim=null),Math.hypot(w,C)>.25&&(m=w,p=C,Ft.mouseAim=null);const P=!!((u=n.buttons[7])!=null&&u.pressed||(((h=n.buttons[7])==null?void 0:h.value)||0)>.45);P&&!zo&&hc(),zo=P}else zo=!1;if(_.length()>1&&_.normalize(),_.length()>.1){r=!0;const v=L.me.x+_.x*ls*e,R=L.me.z+_.y*ls*e,[T,w,C]=It(L.arena,L.zone,v,R);L.me.x=T,L.me.z=w,C&&n&&i-zl>240&&(zl=i,O_(n,130,.85,.45))}Math.hypot(m,p)>.25?L.me.angle=Math.atan2(p,m):Ft.aim.length()>.3?L.me.angle=Math.atan2(Ft.aim.y,Ft.aim.x):Ft.mouseAim?L.me.angle=Math.atan2(Ft.mouseAim.z-L.me.z,Ft.mouseAim.x-L.me.x):r&&!matchMedia("(pointer: coarse)").matches&&(L.me.angle=Math.atan2(_.y,_.x)),Vo+=e,Vo>1/15&&(Vo=0,Yn("input",{x:L.me.x,z:L.me.z,angle:L.me.angle,mode:L.combatMode,weapon:L.look.weapon}));const E=Math.max(0,L.phaseEnd-i),x=Math.ceil(E/1e3);x!==L.lastTickSec&&x>0&&(L.lastTickSec=x,se.tick(x<=2)),q("#timer-num").textContent=x,q("#timer-bar").style.strokeDashoffset=276.5*(1-E/L.phaseDur),q("#hud-timer").classList.toggle("urgent",E<2e3)}else L.screen==="hud"&&(q("#timer-num").textContent=L.phase==="reveal"?"!":"–",q("#timer-bar").style.strokeDashoffset=0,q("#hud-timer").classList.remove("urgent"));if(L.screen==="armory"&&Ut){qs||(Di+=e*.75,Ut.rotation.y=Di);const g=Zr();Ut.scale.lerp(new O(g,g,g),e*8);const _=(f=(d=Ut.userData.weaponMesh)==null?void 0:d.userData)==null?void 0:f.spinGem;_&&(_.rotation.x+=e*3)}if(Ae){if(L.screen==="hud"){Ae.position.x+=(L.me.x-Ae.position.x)*Math.min(1,e*20),Ae.position.z+=(L.me.z-Ae.position.z)*Math.min(1,e*20);let _=-L.me.angle-Ae.rotation.y;if(_=Math.atan2(Math.sin(_),Math.cos(_)),Ae.rotation.y+=_*Math.min(1,e*18),Nn.position.set(Ae.position.x,.95,Ae.position.z),Nn.rotation.y=Ae.rotation.y,Nn.userData.mat.color.set(L.look.laser),Nn.userData.mat.opacity=.7+Math.sin(t*8)*.2,Nn.scale.x=L.combatMode==="grenade"?ci/14:1,L.phase==="move"&&L.me.alive&&L.combatMode==="grenade"){const m=L.me.x+Math.cos(L.me.angle)*ci,p=L.me.z+Math.sin(L.me.angle)*ci,[E,x]=It(L.arena,L.zone,m,p);On.visible=!0,On.position.set(E,.06,x),On.userData.ring.material.color.set(L.look.laser),On.userData.fill.material.color.set(L.look.laser)}else On.visible=!1}else if(L.screen==="custom"){if(!qs){let g=hi-Ae.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),Ae.rotation.y+=g*Math.min(1,e*10)}Ae.userData.model.scale.lerp(new O(1,1,1),e*8)}else Ae.rotation.y+=e*.5,Ae.userData.model.scale.lerp(new O(1,1,1),e*8);Ua(Ae,e,r,t)}for(const g of ri.values()){g.opacity+=(g.target-g.opacity)*Math.min(1,e*8),Xn(g.mesh,g.opacity);const _=g.mesh.userData.model;_.position.y*=.82,Ua(g.mesh,e,!1,t)}Xs.update(e,t),gt.update(e,t)}const Xs=new w_({world:gt,show:pt,toast:yt});Xs.hooks={hideMenuChar:()=>{Ae&&Xn(Ae,0)},getOwnedWeapons:()=>L.ownedWeapons,getDefaultWeapon:()=>L.look.weapon,getGrenades:()=>L.grenades,consumeGrenade:()=>{L.grenades>0&&(L.grenades-=1,hs())},awardCoins:(i,e)=>Gh(i,e)};q("#btn-local").onclick=()=>{se.ui("primary"),Xs.openLobby()};const Os=q("#intro-splash"),Fa=()=>{if(!(!Os||Os.classList.contains("hide"))){try{se.introWhoosh()}catch{}Os.classList.add("hide")}};Os&&(Os.addEventListener("pointerdown",Fa),setTimeout(Fa,2100));try{if(Wh(),Kr(),qh(),us(),Nr("menu"),L.name){const i=q("#menu-name");i&&(i.textContent=L.name),pt("menu")}else pt("name")}catch(i){console.error("Boot initialization error:",i),Fa(),pt(L.name?"menu":"name")}const Hr=()=>{se.startBgm(),removeEventListener("pointerdown",Hr),removeEventListener("keydown",Hr)};addEventListener("pointerdown",Hr);addEventListener("keydown",Hr);requestAnimationFrame(jh);
