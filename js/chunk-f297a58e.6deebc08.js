(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f297a58e"],{"0ccb":function(t,e,n){var r=n("50c4"),i=n("1148"),a=n("1d80"),o=Math.ceil,c=function(t){return function(e,n,c){var s,f,u=String(a(e)),l=u.length,d=void 0===c?" ":String(c),p=r(n);return p<=l||""==d?u:(s=p-l,f=i.call(d,o(s/d.length)),f.length>s&&(f=f.slice(0,s)),t?u+f:f+u)}};t.exports={start:c(!1),end:c(!0)}},1148:function(t,e,n){"use strict";var r=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",a=r(t);if(a<0||a==1/0)throw RangeError("Wrong number of repetitions");for(;a>0;(a>>>=1)&&(e+=e))1&a&&(n+=e);return n}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,f=s[c],u=a((function(){return"/a/b"!=f.call({source:"a",flags:"b"})})),l=f.name!=c;(u||l)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=n("ae40"),c=a("filter"),s=o("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},8418:function(t,e,n){"use strict";var r=n("c04e"),i=n("9bf2"),a=n("5c6c");t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,a(0,n)):t[o]=n}},"843c":function(t,e,n){"use strict";var r=n("23e7"),i=n("0ccb").end,a=n("9a0c");r({target:"String",proto:!0,forced:a},{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"99af":function(t,e,n){"use strict";var r=n("23e7"),i=n("d039"),a=n("e8b5"),o=n("861d"),c=n("7b0b"),s=n("50c4"),f=n("8418"),u=n("65f0"),l=n("1dde"),d=n("b622"),p=n("2d00"),g=d("isConcatSpreadable"),v=9007199254740991,h="Maximum allowed index exceeded",m=p>=51||!i((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),b=l("concat"),E=function(t){if(!o(t))return!1;var e=t[g];return void 0!==e?!!e:a(t)},I=!m||!b;r({target:"Array",proto:!0,forced:I},{concat:function(t){var e,n,r,i,a,o=c(this),l=u(o,0),d=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],E(a)){if(i=s(a.length),d+i>v)throw TypeError(h);for(n=0;n<i;n++,d++)n in a&&f(l,d,a[n])}else{if(d>=v)throw TypeError(h);f(l,d++,a)}return l.length=d,l}})},"9a0c":function(t,e,n){var r=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r)},a322:function(t,e,n){},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("5135"),s=n("c6b6"),f=n("7156"),u=n("c04e"),l=n("d039"),d=n("7c73"),p=n("241c").f,g=n("06cf").f,v=n("9bf2").f,h=n("58a8").trim,m="Number",b=i[m],E=b.prototype,I=s(d(E))==m,N=function(t){var e,n,r,i,a,o,c,s,f=u(t,!1);if("string"==typeof f&&f.length>2)if(f=h(f),e=f.charCodeAt(0),43===e||45===e){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+f}for(a=f.slice(2),o=a.length,c=0;c<o;c++)if(s=a.charCodeAt(c),s<48||s>i)return NaN;return parseInt(a,r)}return+f};if(a(m,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var y,_=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof _&&(I?l((function(){E.valueOf.call(n)})):s(n)!=m)?f(new b(N(e)),n,_):N(e)},x=r?p(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;x.length>S;S++)c(b,y=x[S])&&!c(_,y)&&v(_,y,g(b,y));_.prototype=E,E.constructor=_,o(i,m,_)}},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b4de:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"up-coming"},[n("ul",{on:{touchmove:function(e){t.moveflag=!0}}},t._l(t.movieList,(function(e){return n("li",{key:e.filmId,staticClass:"item",on:{touchend:function(n){return t.handleEnterMovieDetail(e.filmId)}}},[n("div",{staticClass:"item-img"},[n("img",{attrs:{src:e.poster}})]),n("div",{staticClass:"item-info"},[n("h3",{staticClass:"title"},[t._v(t._s(e.name))]),n("p",{staticClass:"actor"},[t._v("主演: "),t._l(e.actors,(function(e,r){return n("span",{key:r},[t._v(" "+t._s(e.name)+" ")])}))],2),n("p",{staticClass:"run-time"},[t._v("上映时间："+t._s(t._f("setTime")(e.premiereAt)))])])])})),0)])},i=[],a=(n("99af"),n("4de4"),n("a9e3"),n("d3b7"),n("25f0"),n("843c"),{name:"upcoming",data:function(){return{movieList:[],moveflag:!1}},activated:function(){this.getUpComingMovieList()},methods:{getUpComingMovieList:function(){var t=this;this.axios({url:"https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=3308357",headers:{"X-Client-Info":'{"a":"3000","ch":"1002","v":"5.0.4","e":"1583716737571230650801","bc":"440100"}',"X-Host":"mall.film-ticket.film.list"}}).then((function(e){t.movieList=e.data.data.films}))},handleEnterMovieDetail:function(t){this.moveflag?this.moveflag=!1:this.$router.push("filmDetail/coming/"+t)}},filters:{setTime:function(t){t=t.toString().padEnd(13,"0");var e=new Date(Number(t)),n=["日","一","二","三","四","五","六"].filter((function(t,n){return n===e.getDay()}));return"周".concat(n," ").concat(e.getMonth()+1,"月").concat(e.getDate(),"日")}}}),o=a,c=(n("fafc"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"73dfa45b",null);e["default"]=s.exports},fafc:function(t,e,n){"use strict";var r=n("a322"),i=n.n(r);i.a}}]);
//# sourceMappingURL=chunk-f297a58e.6deebc08.js.map