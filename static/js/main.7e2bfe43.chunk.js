(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(4),s=n.n(o),i=n(1),c=n(5),l=n(6),r=n(8),a=n(7),u=n(2),d=n.n(u),b=(n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(r.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={isVisible:!1,lengthGoods:1,goodsList:[].concat(h),filterGoods:[].concat(h)},t.lengthList=[1,2,3,4,5,6,7,8,9,10],t}return Object(l.a)(n,[{key:"toggleGoodsVisibility",value:function(t){this.setState({isVisible:t})}},{key:"reverse",value:function(){this.setState((function(t){return{filterGoods:Object(i.a)(t.filterGoods.reverse())}}))}},{key:"sortAlphabetically",value:function(){this.setState((function(t){return{filterGoods:Object(i.a)(t.filterGoods.sort((function(t,e){return t.localeCompare(e)})))}}))}},{key:"sortLength",value:function(){this.setState((function(t){return{filterGoods:Object(i.a)(t.filterGoods.sort((function(t,e){return t.length-e.length})))}}))}},{key:"reset",value:function(){this.setState({filterGoods:[].concat(h),lengthGoods:1})}},{key:"selectChange",value:function(t){this.setState((function(e){var n=Number(t.target.value);return{lengthGoods:n,filterGoods:Object(i.a)(e.goodsList.filter((function(t){return t.length>=n})))}}))}},{key:"render",value:function(){var t=this,e=this.state,n=e.isVisible,o=e.filterGoods,s=e.lengthGoods;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"App__title",children:"Goods"}),Object(b.jsxs)("div",{className:"App__goods goods",children:[!n&&Object(b.jsx)("button",{type:"button",onClick:function(){return t.toggleGoodsVisibility(!0)},className:"goods__startButton",children:"Start"}),n&&Object(b.jsx)("ul",{className:"goods__list",children:o.map((function(t){return Object(b.jsx)("li",{className:"goods__item",children:t},t)}))})]}),Object(b.jsxs)("div",{className:"App__buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return t.reverse()},className:"App__button--disabled ".concat(n&&"App__button"),disabled:!n,children:"Reverse"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.sortAlphabetically()},className:"App__button--disabled ".concat(n&&"App__button"),disabled:!n,children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.reset()},className:"App__button--disabled ".concat(n&&"App__button"),disabled:!n,children:"Reset"}),Object(b.jsx)("button",{type:"button",onClick:function(){return t.sortLength()},className:"App__button--disabled ".concat(n&&"App__button"),disabled:!n,children:"Sort by length"})]}),Object(b.jsx)("span",{className:"App__selectTitle",children:"Select a length of goods"}),Object(b.jsx)("select",{value:s,onChange:function(e){return t.selectChange(e)},children:this.lengthList.map((function(t){return Object(b.jsx)("option",{value:t,children:t},t)}))})]})}}]),n}(d.a.Component),f=p;s.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7e2bfe43.chunk.js.map