!function(e,t,a){function r(e){var t={},r=/^jQuery\d+$/;return a.each(e.attributes,function(e,a){a.specified&&!r.test(a.name)&&(t[a.name]=a.value)}),t}function l(e,r){var l=this,n=a(l);if(l.value==n.attr("placeholder")&&n.hasClass("placeholder"))if(n.data("placeholder-password")){if(n=n.hide().next().show().attr("id",n.removeAttr("id").data("placeholder-id")),e===!0)return n[0].value=r;n.focus()}else l.value="",n.removeClass("placeholder"),l==t.activeElement&&l.select()}function n(){var e,t=this,n=a(t),i=this.id;if(""==t.value){if("password"==t.type){if(!n.data("placeholder-textinput")){try{e=n.clone().attr({type:"text"})}catch(o){e=a("<input>").attr(a.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":i}).bind("focus.placeholder",l),n.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}n=n.removeAttr("id").hide().prev().attr("id",i).show()}n.addClass("placeholder"),n[0].value=n.attr("placeholder")}else n.removeClass("placeholder")}var i,o,c="placeholder"in t.createElement("input"),d="placeholder"in t.createElement("textarea"),u=a.fn,h=a.valHooks;c&&d?(o=u.placeholder=function(){return this},o.input=o.textarea=!0):(o=u.placeholder=function(){var e=this;return e.filter((c?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":l,"blur.placeholder":n}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},o.input=c,o.textarea=d,i={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var i=a(e);return i.data("placeholder-enabled")?(""==r?(e.value=r,e!=t.activeElement&&n.call(e)):i.hasClass("placeholder")?l.call(e,!0,r)||(e.value=r):e.value=r,i):e.value=r}},c||(h.input=i),d||(h.textarea=i),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(l);setTimeout(function(){e.each(n)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);var Site=window.Site||{};!function(e){e(function(){e("input, textarea").placeholder()})}(jQuery),function(e){function t(){u.setAttribute("content",p),v=!0}function a(){u.setAttribute("content",s),v=!1}function r(r){d=r.accelerationIncludingGravity,i=Math.abs(d.x),o=Math.abs(d.y),c=Math.abs(d.z),e.orientation&&180!==e.orientation||!(i>7||(c>6&&8>o||8>c&&o>6)&&i>5)?v||t():v&&a()}var l=navigator.userAgent;if(/iPhone|iPad|iPod/.test(navigator.platform)&&/OS [1-5]_[0-9_]* like Mac OS X/i.test(l)&&l.indexOf("AppleWebKit")>-1){var n=e.document;if(n.querySelector){var i,o,c,d,u=n.querySelector("meta[name=viewport]"),h=u&&u.getAttribute("content"),s=h+",maximum-scale=1",p=h+",maximum-scale=10",v=!0;u&&(e.addEventListener("orientationchange",t,!1),e.addEventListener("devicemotion",r,!1))}}}(this);