(this["webpackJsonpreact-images"]=this["webpackJsonpreact-images"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),s=n(17),i=n.n(s),c=n(8),u=n.n(c),o=n(18),l=n(3),m=n(4),h=n(6),j=n(5),p=n(19),b=n.n(p).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID l81te753elIjcBENLtsRnghk1uY8veCBI5rZ2TiuxP8"}}),f=n(0),d=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.urls,n=e.description;return Object(f.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(f.jsx)("img",{ref:this.imageRef,src:t.regular,alt:n})})}}]),n}(a.Component),v=(n(44),function(e){var t=e.images.map((function(e){return Object(f.jsx)(d,{image:e},e.id)}));return Object(f.jsx)("div",{className:"image-list",children:t})}),O=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.OnSubmit(e.state.term)},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"ui segment",children:Object(f.jsx)("form",{className:"ui form",onSubmit:this.onFormSubmit,children:Object(f.jsxs)("div",{className:"field",children:[Object(f.jsx)("label",{children:"Image Search"}),Object(f.jsx)("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}})]})})})}}]),n}(a.Component),g=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.OnSearchSubmit=function(){var t=Object(o.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.get("/search/photos",{params:{query:n}});case 2:a=t.sent,e.setState({images:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"ui container",style:{marginTop:"20px"},children:[Object(f.jsx)(O,{OnSubmit:this.OnSearchSubmit}),Object(f.jsx)(v,{images:this.state.images})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(g,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e5081ef4.chunk.js.map