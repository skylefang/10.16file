(function(window){var svgSprite='<svg><symbol id="icon-guanbi" viewBox="0 0 1025 1024"><path d="M644.913778 307.504762L512.369778 440.04673 379.825778 307.503746l-72.157461 72.15746 132.545016 132.542984-132.544 132.544 72.157461 72.157461L512.369778 584.360635l132.544 132.544 72.15746-72.15746-132.544-132.544L717.071238 379.662222l-72.15746-72.15746zM512.369778 0.451048C229.370921 0.452063 0.617651 229.206349 0.617651 512.20419c0 282.999873 228.75327 511.753143 511.752127 511.753143 282.999873 0 511.753143-228.754286 511.753143-511.753143S795.367619 0.452063 512.369778 0.452063z m0 935.974603C278.517841 936.425651 88.148317 746.057143 88.148317 512.203175c0-233.851937 190.369524-424.22146 424.221461-424.221461s424.222476 190.369524 424.222476 424.221461c0 233.852952-190.37054 424.22146-424.222476 424.22146z"  ></path></symbol><symbol id="icon-zuoyoujiantou-copy-copy-copy-copy" viewBox="0 0 1024 1024"><path d="M855.1229999999999 517.0039999999999c2.6645352591003757e-15 8.244999999999997-3.1669999999999945 15.509999999999998-9.50299999999999 21.823l-442.6209999999999 442.64300000000014c-6.3359999999999985 6.336000000000001-13.624999999999996 9.477000000000002-21.869 9.477000000000007s-15.509999999999998-3.141999999999996-21.845000000000002-9.476999999999993l-47.485000000000014-47.509999999999984c-6.336000000000001-6.3359999999999985-9.502000000000004-13.599999999999994-9.502000000000006-21.845-1.7763568394002505e-15-8.222 3.1669999999999945-15.509999999999998 9.501999999999992-21.845l373.2899999999999-373.2900000000001-373.2930000000001-373.2669999999999c-6.336000000000001-6.3359999999999985-9.502000000000004-13.599999999999994-9.502000000000006-21.845s3.1669999999999954-15.533 9.502999999999997-21.869l47.48399999999998-47.484000000000016c6.3359999999999985-6.336000000000001 13.599999999999994-9.502000000000004 21.845-9.502000000000006s15.533 3.1669999999999954 21.869 9.502999999999997l442.62100000000004 442.62199999999984c6.3340000000000005 6.333999999999998 9.503000000000002 13.624999999999996 9.503 21.869z"  ></path></symbol><symbol id="icon-icon-right" viewBox="0 0 1024 1024"><path d="M168.877 506.996c0-8.245 3.167-15.51 9.503-21.823l442.621-442.643c6.336-6.336 13.625-9.477 21.869-9.477s15.51 3.142 21.845 9.477l47.485 47.51c6.336 6.336 9.502 13.6 9.502 21.845 0 8.222-3.167 15.51-9.502 21.845l-373.29 373.29 373.293 373.267c6.336 6.336 9.502 13.6 9.502 21.845s-3.167 15.533-9.503 21.869l-47.484 47.484c-6.336 6.336-13.6 9.502-21.845 9.502s-15.533-3.167-21.869-9.503l-442.621-442.622c-6.334-6.334-9.503-13.625-9.503-21.869z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)