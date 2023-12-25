/*! For license information please see storage.service.js.LICENSE.txt */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var o=t();for(var r in o)("object"==typeof exports?exports:e)[r]=o[r]}}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)e[r]=o[r]}return e}e.r(t),e.d(t,{default:function(){return i}});var r=function e(t,r){function n(e,n,i){if("undefined"!=typeof document){"number"==typeof(i=o({},r,i)).expires&&(i.expires=new Date(Date.now()+864e5*i.expires)),i.expires&&(i.expires=i.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var c in i)i[c]&&(s+="; "+c,!0!==i[c]&&(s+="="+i[c].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+s}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var o=document.cookie?document.cookie.split("; "):[],r={},n=0;n<o.length;n++){var i=o[n].split("="),s=i.slice(1).join("=");try{var c=decodeURIComponent(i[0]);if(r[c]=t.read(s,c),e===c)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){n(e,"",o({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,o({},this.attributes,t))},withConverter:function(t){return e(o({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"});class n{storage=r;set(e,t,o){return t=o&&o.isObject?JSON.stringify(t):t,this.storage.set(e,t)}get(e){try{return JSON.parse(this.storage.get(e))}catch(t){return this.storage.get(e)}}}var i=new class{storage=new n;localstorage=window.localStorage;key_GoogleLoginResponse="key_GoogleLoginResponse";setGoogleLoginResponse(e){this.storage.set(this.key_GoogleLoginResponse,JSON.stringify(e))}getGoogleLoginResponse(){return this.storage.get(this.key_GoogleLoginResponse)}clearGoogleLoginResponse(){return this.localstorage.removeItem(this.key_GoogleLoginResponse)}};return t}()}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliL2dhcGkvc3RvcmFnZS5zZXJ2aWNlLmpzIiwibWFwcGluZ3MiOiI7Q0FBQSxTQUEyQ0EsRUFBTUMsR0FDaEQsR0FBc0IsaUJBQVpDLFNBQTBDLGlCQUFYQyxPQUN4Q0EsT0FBT0QsUUFBVUQsU0FDYixHQUFxQixtQkFBWEcsUUFBeUJBLE9BQU9DLElBQzlDRCxPQUFPLEdBQUlILE9BQ1AsQ0FDSixJQUFJSyxFQUFJTCxJQUNSLElBQUksSUFBSU0sS0FBS0QsR0FBdUIsaUJBQVpKLFFBQXVCQSxRQUFVRixHQUFNTyxHQUFLRCxFQUFFQyxFQUN2RSxDQUNBLENBVEQsQ0FTR0MsTUFBTSxXQUNULCtCQ1RBLElBQUlDLEVBQXNCLENDQTFCQSxFQUF3QixTQUFTUCxFQUFTUSxHQUN6QyxJQUFJLElBQUlDLEtBQU9ELEVBQ1hELEVBQW9CRyxFQUFFRixFQUFZQyxLQUFTRixFQUFvQkcsRUFBRVYsRUFBU1MsSUFDNUVFLE9BQU9DLGVBQWVaLEVBQVNTLEVBQUssQ0FBRUksWUFBWSxFQUFNQyxJQUFLTixFQUFXQyxJQUczRSxFQ1BBRixFQUF3QixTQUFTUSxFQUFLQyxHQUFRLE9BQU9MLE9BQU9NLFVBQVVDLGVBQWVDLEtBQUtKLEVBQUtDLEVBQU8sRUNDdEdULEVBQXdCLFNBQVNQLEdBQ1gsb0JBQVhvQixRQUEwQkEsT0FBT0MsYUFDMUNWLE9BQU9DLGVBQWVaLEVBQVNvQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RYLE9BQU9DLGVBQWVaLEVBQVMsYUFBYyxDQUFFc0IsT0FBTyxHQUN2RCxRQ0pBLFNBQVMsRUFBUUMsR0FDZixJQUFLLElBQUlsQixFQUFJLEVBQUdBLEVBQUltQixVQUFVQyxPQUFRcEIsSUFBSyxDQUN6QyxJQUFJcUIsRUFBU0YsVUFBVW5CLEdBQ3ZCLElBQUssSUFBSUksS0FBT2lCLEVBQ2RILEVBQU9kLEdBQU9pQixFQUFPakIsRUFFekIsQ0FDQSxPQUFPYyxDQUNULDhDQXdIQSxJQUFJSSxFQWxHSixTQUFTQyxFQUFNQyxFQUFXQyxHQUN4QixTQUFTQyxFQUFLQyxFQUFNVixFQUFPVyxHQUN6QixHQUF3QixvQkFBYkMsU0FBWCxDQU1rQyxpQkFGbENELEVBQWEsRUFBTyxDQUFDLEVBQUdILEVBQW1CRyxJQUVyQkUsVUFDcEJGLEVBQVdFLFFBQVUsSUFBSUMsS0FBS0EsS0FBS0MsTUFBNkIsTUFBckJKLEVBQVdFLFVBRXBERixFQUFXRSxVQUNiRixFQUFXRSxRQUFVRixFQUFXRSxRQUFRRyxlQUcxQ04sRUFBT08sbUJBQW1CUCxHQUN2QlEsUUFBUSx1QkFBd0JDLG9CQUNoQ0QsUUFBUSxRQUFTRSxRQUVwQixJQUFJQyxFQUF3QixHQUM1QixJQUFLLElBQUlDLEtBQWlCWCxFQUNuQkEsRUFBV1csS0FJaEJELEdBQXlCLEtBQU9DLEdBRUUsSUFBOUJYLEVBQVdXLEtBV2ZELEdBQXlCLElBQU1WLEVBQVdXLEdBQWVDLE1BQU0sS0FBSyxLQUd0RSxPQUFRWCxTQUFTWSxPQUNmZCxFQUFPLElBQU1ILEVBQVVrQixNQUFNekIsRUFBT1UsR0FBUVcsQ0F0QzlDLENBdUNGLENBNEJBLE9BQU9oQyxPQUFPcUMsT0FDWixDQUNFakIsTUFDQWpCLElBN0JKLFNBQWNrQixHQUNaLEdBQXdCLG9CQUFiRSxZQUE2QlYsVUFBVUMsUUFBV08sR0FBN0QsQ0FRQSxJQUZBLElBQUlpQixFQUFVZixTQUFTWSxPQUFTWixTQUFTWSxPQUFPRCxNQUFNLE1BQVEsR0FDMURLLEVBQU0sQ0FBQyxFQUNGN0MsRUFBSSxFQUFHQSxFQUFJNEMsRUFBUXhCLE9BQVFwQixJQUFLLENBQ3ZDLElBQUk4QyxFQUFRRixFQUFRNUMsR0FBR3dDLE1BQU0sS0FDekJ2QixFQUFRNkIsRUFBTUMsTUFBTSxHQUFHQyxLQUFLLEtBRWhDLElBQ0UsSUFBSUMsRUFBUWIsbUJBQW1CVSxFQUFNLElBR3JDLEdBRkFELEVBQUlJLEdBQVN6QixFQUFVMEIsS0FBS2pDLEVBQU9nQyxHQUUvQnRCLElBQVNzQixFQUNYLEtBRUosQ0FBRSxNQUFPRSxHQUFJLENBQ2YsQ0FFQSxPQUFPeEIsRUFBT2tCLEVBQUlsQixHQUFRa0IsQ0FwQjFCLENBcUJGLEVBTUlPLE9BQVEsU0FBVXpCLEVBQU1DLEdBQ3RCRixFQUNFQyxFQUNBLEdBQ0EsRUFBTyxDQUFDLEVBQUdDLEVBQVksQ0FDckJFLFNBQVUsSUFHaEIsRUFDQXVCLGVBQWdCLFNBQVV6QixHQUN4QixPQUFPTCxFQUFLK0IsS0FBSzlCLFVBQVcsRUFBTyxDQUFDLEVBQUc4QixLQUFLMUIsV0FBWUEsR0FDMUQsRUFDQTJCLGNBQWUsU0FBVS9CLEdBQ3ZCLE9BQU9ELEVBQUssRUFBTyxDQUFDLEVBQUcrQixLQUFLOUIsVUFBV0EsR0FBWThCLEtBQUsxQixXQUMxRCxHQUVGLENBQ0VBLFdBQVksQ0FBRVgsTUFBT1gsT0FBT2tELE9BQU8vQixJQUNuQ0QsVUFBVyxDQUFFUCxNQUFPWCxPQUFPa0QsT0FBT2hDLEtBR3hDLENBRVVELENBcEhhLENBQ3JCMkIsS0FBTSxTQUFVakMsR0FJZCxNQUhpQixNQUFiQSxFQUFNLEtBQ1JBLEVBQVFBLEVBQU04QixNQUFNLEdBQUksSUFFbkI5QixFQUFNa0IsUUFBUSxtQkFBb0JDLG1CQUMzQyxFQUNBTSxNQUFPLFNBQVV6QixHQUNmLE9BQU9pQixtQkFBbUJqQixHQUFPa0IsUUFDL0IsMkNBQ0FDLG1CQUVKLEdBd0crQixDQUFFcUIsS0FBTSxNQ2xIekMsTUFBTUMsRUFDSkMsUUFBVSxFQUVWLEdBQUFqQyxDQUFJdEIsRUFBYWEsRUFBWTJDLEdBRTNCLE9BREEzQyxFQUFRMkMsR0FBV0EsRUFBUUMsU0FBV0MsS0FBS0MsVUFBVTlDLEdBQVNBLEVBQ3ZEcUMsS0FBS0ssUUFBUWpDLElBQUl0QixFQUFLYSxFQUMvQixDQUNBLEdBQUFSLENBQUlMLEdBQ0YsSUFDRSxPQUFPMEQsS0FBS0UsTUFBTVYsS0FBS0ssUUFBUWxELElBQUlMLEdBQ3JDLENBQUUsTUFBTzZELEdBQ1AsT0FBT1gsS0FBS0ssUUFBUWxELElBQUlMLEVBQzFCLENBQ0YsRUF3QkYsTUFGNEIsSUFwQjVCLE1BRUV1RCxRQUFVLElBQUlELEVBQ2RRLGFBQWVDLE9BQU9DLGFBR3RCQyx3QkFBa0MsMEJBRWxDLHNCQUFBQyxDQUF1QkMsR0FDckJqQixLQUFLSyxRQUFRakMsSUFBSTRCLEtBQUtlLHdCQUF5QlAsS0FBS0MsVUFBVVEsR0FDaEUsQ0FFQSxzQkFBQUMsR0FDRSxPQUFPbEIsS0FBS0ssUUFBUWxELElBQUk2QyxLQUFLZSx3QkFDL0IsQ0FDQSx3QkFBQUksR0FDRSxPQUFPbkIsS0FBS1ksYUFBYVEsV0FBV3BCLEtBQUtlLHdCQUMzQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nob3Bpbnplbi1hbmFseXRpY3Mvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3Nob3Bpbnplbi1hbmFseXRpY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hvcGluemVuLWFuYWx5dGljcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hvcGluemVuLWFuYWx5dGljcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Nob3Bpbnplbi1hbmFseXRpY3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaG9waW56ZW4tYW5hbHl0aWNzLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2pzLWNvb2tpZUAzLjAuNS9ub2RlX21vZHVsZXMvanMtY29va2llL2Rpc3QvanMuY29va2llLm1qcyIsIndlYnBhY2s6Ly9zaG9waW56ZW4tYW5hbHl0aWNzLy4vc3JjL2xpYi9nYXBpL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gZmFjdG9yeSgpO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoc2VsZiwgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyohIGpzLWNvb2tpZSB2My4wLjUgfCBNSVQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xuZnVuY3Rpb24gYXNzaWduICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXRcbn1cbi8qIGVzbGludC1lbmFibGUgbm8tdmFyICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciAqL1xudmFyIGRlZmF1bHRDb252ZXJ0ZXIgPSB7XG4gIHJlYWQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVswXSA9PT0gJ1wiJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxLCAtMSk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC8oJVtcXGRBLUZdezJ9KSsvZ2ksIGRlY29kZVVSSUNvbXBvbmVudClcbiAgfSxcbiAgd3JpdGU6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoXG4gICAgICAvJSgyWzM0NkJGXXwzW0FDLUZdfDQwfDVbQkRFXXw2MHw3W0JDRF0pL2csXG4gICAgICBkZWNvZGVVUklDb21wb25lbnRcbiAgICApXG4gIH1cbn07XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cblxuZnVuY3Rpb24gaW5pdCAoY29udmVydGVyLCBkZWZhdWx0QXR0cmlidXRlcykge1xuICBmdW5jdGlvbiBzZXQgKG5hbWUsIHZhbHVlLCBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF0dHJpYnV0ZXMgPSBhc3NpZ24oe30sIGRlZmF1bHRBdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKTtcblxuICAgIGlmICh0eXBlb2YgYXR0cmlidXRlcy5leHBpcmVzID09PSAnbnVtYmVyJykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIGF0dHJpYnV0ZXMuZXhwaXJlcyAqIDg2NGU1KTtcbiAgICB9XG4gICAgaWYgKGF0dHJpYnV0ZXMuZXhwaXJlcykge1xuICAgICAgYXR0cmlidXRlcy5leHBpcmVzID0gYXR0cmlidXRlcy5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKVxuICAgICAgLnJlcGxhY2UoLyUoMlszNDZCXXw1RXw2MHw3QykvZywgZGVjb2RlVVJJQ29tcG9uZW50KVxuICAgICAgLnJlcGxhY2UoL1soKV0vZywgZXNjYXBlKTtcblxuICAgIHZhciBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgPSAnJztcbiAgICBmb3IgKHZhciBhdHRyaWJ1dGVOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgIGlmICghYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBzdHJpbmdpZmllZEF0dHJpYnV0ZXMgKz0gJzsgJyArIGF0dHJpYnV0ZU5hbWU7XG5cbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdID09PSB0cnVlKSB7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIC8vIENvbnNpZGVycyBSRkMgNjI2NSBzZWN0aW9uIDUuMjpcbiAgICAgIC8vIC4uLlxuICAgICAgLy8gMy4gIElmIHRoZSByZW1haW5pbmcgdW5wYXJzZWQtYXR0cmlidXRlcyBjb250YWlucyBhICV4M0IgKFwiO1wiKVxuICAgICAgLy8gICAgIGNoYXJhY3RlcjpcbiAgICAgIC8vIENvbnN1bWUgdGhlIGNoYXJhY3RlcnMgb2YgdGhlIHVucGFyc2VkLWF0dHJpYnV0ZXMgdXAgdG8sXG4gICAgICAvLyBub3QgaW5jbHVkaW5nLCB0aGUgZmlyc3QgJXgzQiAoXCI7XCIpIGNoYXJhY3Rlci5cbiAgICAgIC8vIC4uLlxuICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc9JyArIGF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0uc3BsaXQoJzsnKVswXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICBuYW1lICsgJz0nICsgY29udmVydGVyLndyaXRlKHZhbHVlLCBuYW1lKSArIHN0cmluZ2lmaWVkQXR0cmlidXRlcylcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldCAobmFtZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8IChhcmd1bWVudHMubGVuZ3RoICYmICFuYW1lKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gVG8gcHJldmVudCB0aGUgZm9yIGxvb3AgaW4gdGhlIGZpcnN0IHBsYWNlIGFzc2lnbiBhbiBlbXB0eSBhcnJheVxuICAgIC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLlxuICAgIHZhciBjb29raWVzID0gZG9jdW1lbnQuY29va2llID8gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7ICcpIDogW107XG4gICAgdmFyIGphciA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgICAgdmFyIHZhbHVlID0gcGFydHMuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICB0cnkge1xuICAgICAgICB2YXIgZm91bmQgPSBkZWNvZGVVUklDb21wb25lbnQocGFydHNbMF0pO1xuICAgICAgICBqYXJbZm91bmRdID0gY29udmVydGVyLnJlYWQodmFsdWUsIGZvdW5kKTtcblxuICAgICAgICBpZiAobmFtZSA9PT0gZm91bmQpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHJldHVybiBuYW1lID8gamFyW25hbWVdIDogamFyXG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmNyZWF0ZShcbiAgICB7XG4gICAgICBzZXQsXG4gICAgICBnZXQsXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIChuYW1lLCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHNldChcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgICcnLFxuICAgICAgICAgIGFzc2lnbih7fSwgYXR0cmlidXRlcywge1xuICAgICAgICAgICAgZXhwaXJlczogLTFcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHdpdGhBdHRyaWJ1dGVzOiBmdW5jdGlvbiAoYXR0cmlidXRlcykge1xuICAgICAgICByZXR1cm4gaW5pdCh0aGlzLmNvbnZlcnRlciwgYXNzaWduKHt9LCB0aGlzLmF0dHJpYnV0ZXMsIGF0dHJpYnV0ZXMpKVxuICAgICAgfSxcbiAgICAgIHdpdGhDb252ZXJ0ZXI6IGZ1bmN0aW9uIChjb252ZXJ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGluaXQoYXNzaWduKHt9LCB0aGlzLmNvbnZlcnRlciwgY29udmVydGVyKSwgdGhpcy5hdHRyaWJ1dGVzKVxuICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgYXR0cmlidXRlczogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShkZWZhdWx0QXR0cmlidXRlcykgfSxcbiAgICAgIGNvbnZlcnRlcjogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShjb252ZXJ0ZXIpIH1cbiAgICB9XG4gIClcbn1cblxudmFyIGFwaSA9IGluaXQoZGVmYXVsdENvbnZlcnRlciwgeyBwYXRoOiAnLycgfSk7XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG5leHBvcnQgeyBhcGkgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGNvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuY2xhc3MgTG9jYWxTdG9yYWdlIHtcbiAgc3RvcmFnZTogYW55ID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnksIG9wdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gICAgdmFsdWUgPSBvcHRpb25zICYmIG9wdGlvbnMuaXNPYmplY3QgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcy5zdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gIH1cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuc3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICB9XG4gIH1cbn1cbmNsYXNzIENvb2tpZXNTdG9yYWdlIHtcbiAgc3RvcmFnZSA9IGNvb2tpZXM7XG5cbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBvcHRpb25zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICAgIHZhbHVlID0gb3B0aW9ucyAmJiBvcHRpb25zLmlzT2JqZWN0ID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmFnZS5zZXQoa2V5LCB2YWx1ZSk7XG4gIH1cbiAgZ2V0KGtleSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLnN0b3JhZ2UuZ2V0KGtleSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yYWdlLmdldChrZXkpO1xuICAgIH1cbiAgfVxufVxuY2xhc3MgTG9jYWxTdG9yYWdlU2VydmljZSB7XG4gIC8vIHN0b3JhZ2UgPSBuZXcgTG9jYWxTdG9yYWdlKCk7XG4gIHN0b3JhZ2UgPSBuZXcgQ29va2llc1N0b3JhZ2UoKTtcbiAgbG9jYWxzdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcblxuICAvLyBrZXlzXG4gIGtleV9Hb29nbGVMb2dpblJlc3BvbnNlOiBzdHJpbmcgPSBcImtleV9Hb29nbGVMb2dpblJlc3BvbnNlXCI7XG5cbiAgc2V0R29vZ2xlTG9naW5SZXNwb25zZShkYXRhKSB7XG4gICAgdGhpcy5zdG9yYWdlLnNldCh0aGlzLmtleV9Hb29nbGVMb2dpblJlc3BvbnNlLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cblxuICBnZXRHb29nbGVMb2dpblJlc3BvbnNlKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JhZ2UuZ2V0KHRoaXMua2V5X0dvb2dsZUxvZ2luUmVzcG9uc2UpO1xuICB9XG4gIGNsZWFyR29vZ2xlTG9naW5SZXNwb25zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbHN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleV9Hb29nbGVMb2dpblJlc3BvbnNlKTtcbiAgfVxufVxuXG5jb25zdCBsb2NhbFN0b3JhZ2VTZXJ2aWNlID0gbmV3IExvY2FsU3RvcmFnZVNlcnZpY2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9jYWxTdG9yYWdlU2VydmljZTtcbiJdLCJuYW1lcyI6WyJyb290IiwiZmFjdG9yeSIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZpbmUiLCJhbWQiLCJhIiwiaSIsInNlbGYiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInRhcmdldCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInNvdXJjZSIsImFwaSIsImluaXQiLCJjb252ZXJ0ZXIiLCJkZWZhdWx0QXR0cmlidXRlcyIsInNldCIsIm5hbWUiLCJhdHRyaWJ1dGVzIiwiZG9jdW1lbnQiLCJleHBpcmVzIiwiRGF0ZSIsIm5vdyIsInRvVVRDU3RyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVwbGFjZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImVzY2FwZSIsInN0cmluZ2lmaWVkQXR0cmlidXRlcyIsImF0dHJpYnV0ZU5hbWUiLCJzcGxpdCIsImNvb2tpZSIsIndyaXRlIiwiY3JlYXRlIiwiY29va2llcyIsImphciIsInBhcnRzIiwic2xpY2UiLCJqb2luIiwiZm91bmQiLCJyZWFkIiwiZSIsInJlbW92ZSIsIndpdGhBdHRyaWJ1dGVzIiwidGhpcyIsIndpdGhDb252ZXJ0ZXIiLCJmcmVlemUiLCJwYXRoIiwiQ29va2llc1N0b3JhZ2UiLCJzdG9yYWdlIiwib3B0aW9ucyIsImlzT2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIiwiZXJyb3IiLCJsb2NhbHN0b3JhZ2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJrZXlfR29vZ2xlTG9naW5SZXNwb25zZSIsInNldEdvb2dsZUxvZ2luUmVzcG9uc2UiLCJkYXRhIiwiZ2V0R29vZ2xlTG9naW5SZXNwb25zZSIsImNsZWFyR29vZ2xlTG9naW5SZXNwb25zZSIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9