(this["webpackJsonpcmc-react-test"]=this["webpackJsonpcmc-react-test"]||[]).push([[0],{15:function(t,e,a){},16:function(t,e,a){},18:function(t,e,a){"use strict";a.r(e);var c=a(0),s=a(1),n=a.n(s),r=a(4),i=a.n(r),o=(a(15),a(16),a(3)),l=a.n(o),j=a(5),h=a(6),d=a(7),b=a(9),m=a(8),p=function(t){Object(b.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(t=e.call.apply(e,[this].concat(s))).state={loading:!0,marketcap:0,errorMsg:""},t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=Object(j.a)(l.a.mark((function t(){var e,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return" https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest","",t.next=4,fetch(" https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest",{method:"GET",headers:{"X-CMC_PRO_API_KEY":""}});case 4:if(!(e=t.sent).ok){t.next=13;break}return t.next=8,e.json();case 8:a=t.sent,console.log(a),this.setState({marketcap:a,loading:!1}),t.next=14;break;case 13:this.setState({errorMsg:"API ERROR"});case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"coinComponent",children:[Object(c.jsx)("h1",{children:"State of Crypto:"}),this.state.loading?Object(c.jsxs)("div",{children:["loading... ",this.state.errorMsg]}):Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"coinText",children:["Current Market Capitalization:  ",Object(c.jsxs)("p",{className:"numbers",children:[this.state.marketcap.data.quote.USD.total_market_cap," US$"]}),Object(c.jsx)("br",{}),"Total Trading Volume (24h):     ",Object(c.jsxs)("p",{className:"numbers",children:[this.state.marketcap.data.quote.USD.total_volume_24h," US$"]}),Object(c.jsx)("br",{}),"Dominance of Bitcoin:           ",Object(c.jsxs)("p",{className:"numbers",children:[this.state.marketcap.data.btc_dominance," %"]}),Object(c.jsx)("br",{})]})})]})}}]),a}(n.a.Component);var u=function(){return Object(c.jsxs)("div",{className:"footer",children:[Object(c.jsx)("p",{children:"Small test using CoinMarketCap's API"}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"EliasVincent 2021"})}),Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:Object(c.jsx)("a",{href:"https://eliasvsimon.com",children:"eliasvsimon.com"})})})]})};var O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(p,{})}),Object(c.jsx)(u,{})]})};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.29c9f76d.chunk.js.map