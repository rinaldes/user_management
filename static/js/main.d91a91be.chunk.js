(this.webpackJsonprelier=this.webpackJsonprelier||[]).push([[0],{174:function(e,t,a){e.exports=a.p+"static/media/upload-photo.fecd348b.jpg"},199:function(e,t,a){e.exports=a(344)},205:function(e,t,a){},344:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(45),o=a.n(r),c=(a(204),a(205),a(54)),i=a(55),s=a(59),m=a(58),u=a(359),d=a(36),h=a(357),g=a(56),E=a.n(g),p=a(356);var f=function(){return l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Row,{className:"add-five-margin-top"},l.a.createElement(u.a.Column,{width:"8"},l.a.createElement("img",{src:E.a}))),l.a.createElement(u.a.Row,null,l.a.createElement(u.a.Column,{width:"12"},l.a.createElement(p.a,{relaxed:!0},l.a.createElement(p.a.Item,{icon:"home",content:"Org Management"}),l.a.createElement(p.a.Item,{icon:"users",content:"User Management"}),l.a.createElement(p.a.Item,{icon:"users",content:"Event"}),l.a.createElement(p.a.Item,{icon:"users",content:"Corporate Contact"}),l.a.createElement(p.a.Item,{icon:"users",content:"My Contact"})))))},v=a(38),C=a(174),w=a.n(C),b=a(360),I=a(361),_=a(355),S=a(353),k=a(345),N=a(29),y=a.n(N),O="https://apistaging.linikerja.id/",j=function(){var e=localStorage.getItem("user");return e?JSON.parse(e):null},A=function(){return localStorage.getItem("token")||null},L=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(c.a)(this,a),(n=t.call(this,e)).handleChangeRole=function(e,t){var a=t.value;e.persist(),n.setState({jobrole:a})},n.handleChangeContact=function(e,t){var a=t.value;e.persist(),n.setState({corporate:a})};var l=window.location.search,r=new URLSearchParams(l);return console.log(r.get("code")),n.state={code:r.get("code"),contactListAPI:[],contactList:[],get_done:!1,get_done_user:!1,previous_uid:"",email:"",fullname:"",corporate:"",jobrole:!1,is_active:null,dataUser:{},roleList:[{key:"Ya",value:!0,text:"Ya"},{key:"Bukan",value:!1,text:"Bukan"}]},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"GetContact",value:function(){var e=this;y.a.get(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+"/contacts",{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}).then((function(t){e.state.contactListAPI=[t.data.Data],e.state.contactListAPI.map((function(t){e.state.previous_uid!==t.UID&&(e.state.contactList.push({key:t.UID,value:t.UID,text:t.Title}),e.state.previous_uid=t.UID)})),e.state.get_done=!0}))}},{key:"GetUserData",value:function(){setTimeout(function(){var e=this;y.a.get(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+"/users/"+this.state.code,{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}).then((function(t){e.setState({dataUser:t.data.Data,get_done_user:!0,email:t.data.Data.Email,fullname:t.data.Data.FullName,jobrole:t.data.Data.IsAdministrator,corporate:localStorage.getItem("orgLogin"),is_active:t.data.Data.IsActive})}))}.bind(this),300)}},{key:"handleSubmit",value:function(){var e={FullName:this.state.fullname,Email:this.state.email,IsAdministrator:this.state.jobrole,IsActive:this.state.is_active,OrganizationUID:this.state.corporate,Username:this.state.email,NickName:this.state.fullname.substring(0,4),Picture:"foto.png",Status:"",IsOnline:!1,IsIdle:!1,IsOnCall:!1,LastOnlineAt:"0001-01-01T00:00:00Z"};"/create"===window.location.pathname?y.a.post(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+"/users",e,{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}):"/edit"===window.location.pathname&&y.a.put(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+"/users/"+this.state.code,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}),setTimeout(function(){window.location.replace("/")}.bind(this),400)}},{key:"handleChange",value:function(e){"user_email"===e.target.id?this.setState({email:e.target.value}):"fullname"===e.target.id?this.setState({fullname:e.target.value}):"is_active"===e.target.id&&this.setState({is_active:!this.state.is_active})}},{key:"render",value:function(){return!1===this.state.get_done&&this.GetContact(),!1===this.state.get_done_user&&"/edit"===window.location.pathname&&this.GetUserData(),l.a.createElement(b.a,null,l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Column,{width:"14"},l.a.createElement(u.a,null,l.a.createElement(u.a.Row,{className:"add-five-margin-top"},l.a.createElement(u.a.Column,{width:"9",floated:"left"},l.a.createElement(I.a,{as:"h1"},"/create"===window.location.pathname?"Add":"Edit"," User"))),l.a.createElement(u.a.Row,{className:"add-eight-padding-top"},l.a.createElement(u.a.Column,null,l.a.createElement(u.a,null,l.a.createElement(u.a.Column,{width:"10"},l.a.createElement(_.a,{onSubmit:this.handleSubmit},l.a.createElement(_.a.Field,null,l.a.createElement(u.a,null,l.a.createElement(u.a.Column,{width:"12"},l.a.createElement("label",null,"Email *"),l.a.createElement("input",{id:"user_email",placeholder:"Enter user company email",onChange:this.handleChange,value:this.state.email})),l.a.createElement(u.a.Column,{width:"4"},l.a.createElement("label",null,"Sync LDAP"),l.a.createElement("br",null),l.a.createElement(S.a,{toggle:!0})))),l.a.createElement(_.a.Field,null,l.a.createElement("label",null,"Full Name *"),l.a.createElement("input",{id:"fullname",placeholder:"Enter fullname",onChange:this.handleChange,value:this.state.fullname})),l.a.createElement(_.a.Field,null,l.a.createElement("label",null,"Corporate Contact"),l.a.createElement(h.a,{id:"corporate_contact",placeholder:"Choose Corporate Contact",fluid:!0,search:!0,selection:!0,options:this.state.contactList,onChange:this.handleChangeContact,value:this.state.corporate})),l.a.createElement(_.a.Field,null,l.a.createElement(u.a,null,l.a.createElement(u.a.Column,{width:"8"},l.a.createElement("label",null,"Admin"),l.a.createElement(h.a,{id:"role",placeholder:"Choose Role",fluid:!0,search:!0,selection:!0,options:this.state.roleList,onChange:this.handleChangeRole,value:this.state.jobrole})),l.a.createElement(u.a.Column,{width:"8"},l.a.createElement("label",null,"Active Status"),l.a.createElement("br",null),l.a.createElement(S.a,{toggle:!0,id:"is_active",onChange:this.handleChange,checked:this.state.is_active})))),l.a.createElement(k.a,{type:"submit"},"Save"))),l.a.createElement(u.a.Column,null,l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Column,{width:"8"},l.a.createElement("img",{src:w.a})))))))))))}}]),a}(l.a.Component),D=a(354),U=a(358),x=a(44),R=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=function(e){y.a.delete(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+"/users/"+e,{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}),setTimeout(function(){window.location.reload()}.bind(Object(v.a)(n)),400)},n.handlechange=function(){n.state.search_item=document.getElementById("user_keyword").value,n.componentDidMount()},n.state={user_list:[],get_done:!1,search_item:"",arah_sort:null,column_sort:null},n.handleSort=n.handleSort.bind(Object(v.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="/users";""!=this.state.search_item&&null!=this.state.search_item&&0!=this.state.search_item&&(t+="?keyword="+this.state.search_item),console.log(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+t),y.a.get(O+"restricted/orgs/"+localStorage.getItem("orgLogin")+t,{headers:{Authorization:"Bearer "+localStorage.getItem("token-access")}}).then((function(t){e.setState({user_list:t.data.Data})})),this.state.get_done=!0}},{key:"handleSort",value:function(e,t){var a=this.state,n=a.user_list,l=a.column_sort,r=a.arah_sort;null===this.state.column_sort||this.state.column_sort!==t?(n.sort((function(e,a){return e[t].localeCompare(a[t])})),l=t,r="up"):(n.reverse(),r="up"===this.state.arah_sort?"down":"up"),this.setState({user_list:n,column_sort:l,arah_sort:r})}},{key:"render",value:function(){var e=this;return!1===this.state.get_done&&this.componentDidMount(),l.a.createElement(b.a,null,l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Column,{width:"14"},l.a.createElement(u.a,null,l.a.createElement(u.a.Row,{className:"add-five-margin-top"},l.a.createElement(u.a.Column,{width:"9",floated:"left"},l.a.createElement(I.a,{as:"h1"},"User List")),l.a.createElement(u.a.Column,{width:"7",floated:"right"},l.a.createElement(u.a,null,l.a.createElement(u.a.Column,{width:"10",className:"fluid"},l.a.createElement(D.a,{icon:"search",placeholder:"Masukan username",id:"user_keyword",onChange:this.handlechange})),l.a.createElement(u.a.Column,{width:"6"},l.a.createElement(x.b,{to:"/create"},l.a.createElement(k.a,{content:"Add User",className:"fluid green-button"})))))),l.a.createElement(u.a.Row,{className:"add-eight-padding-top"},l.a.createElement(u.a.Column,null,l.a.createElement(U.a,null,l.a.createElement(U.a.Header,{className:"add-five-padding-top"},l.a.createElement(U.a.Row,null,l.a.createElement(U.a.HeaderCell,{onClick:function(t){return e.handleSort(t,"FullName")}},l.a.createElement(u.a,{columns:"equal"},l.a.createElement(u.a.Column,null,"Nama"),l.a.createElement(u.a.Column,{width:2},l.a.createElement(d.a,{name:"FullName"!==this.state.column_sort?"sort":"up"===this.state.arah_sort?"sort ascending":"sort descending"})))),l.a.createElement(U.a.HeaderCell,{onClick:function(t){return e.handleSort(t,"Username")}},l.a.createElement(u.a,{columns:"equal"},l.a.createElement(u.a.Column,null,"Username"),l.a.createElement(u.a.Column,{width:2},l.a.createElement(d.a,{name:"Username"!==this.state.column_sort?"sort":"up"===this.state.arah_sort?"sort ascending":"sort descending"})))),l.a.createElement(U.a.HeaderCell,{onClick:function(t){return e.handleSort(t,"Email")}},l.a.createElement(u.a,{columns:"equal"},l.a.createElement(u.a.Column,null,"Email"),l.a.createElement(u.a.Column,{width:2},l.a.createElement(d.a,{name:"Email"!==this.state.column_sort?"sort":"up"===this.state.arah_sort?"sort ascending":"sort descending"})))),l.a.createElement(U.a.HeaderCell,null,"Admin"),l.a.createElement(U.a.HeaderCell,null,"Status"),l.a.createElement(U.a.HeaderCell,null))),l.a.createElement(U.a.Body,null,this.state.user_list.map((function(t){return l.a.createElement(U.a.Row,null,l.a.createElement(U.a.Cell,null,t.FullName),l.a.createElement(U.a.Cell,null,t.Username),l.a.createElement(U.a.Cell,null,t.Email),t.IsAdministrator?l.a.createElement(U.a.Cell,null,l.a.createElement("font",{color:"green"},"Ya")):l.a.createElement(U.a.Cell,null,l.a.createElement("font",{color:"red"},"Bukan")),t.IsActive?l.a.createElement(U.a.Cell,null,l.a.createElement("font",{color:"green"},"Ya")):l.a.createElement(U.a.Cell,null,l.a.createElement("font",{color:"red"},"Tidak")),l.a.createElement(U.a.Cell,null,l.a.createElement(x.b,{to:"/edit?code="+t.UID},l.a.createElement(k.a,{className:"fluid green-button"},"Edit")),l.a.createElement("br",null),l.a.createElement(k.a,{className:"fluid",color:"red",onClick:function(){e.handleClick(t.UID)}},"Hapus")))}))))))))))}}]),a}(l.a.Component);var B=function(){return"/create"===window.location.pathname||"/edit"===window.location.pathname?l.a.createElement(L,null):l.a.createElement(R,null)},F=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleLogout=function(){localStorage.removeItem("token"),localStorage.removeItem("user"),localStorage.removeItem("orgLogin"),localStorage.removeItem("orgName"),localStorage.removeItem("token-access"),n.props.history.push("/login")},n.state={user_login:j()},n}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(u.a,{className:"no-padding"},l.a.createElement(u.a.Row,{className:"no-padding no-margin"},l.a.createElement(u.a.Column,{width:"16",className:"app-headbar"},l.a.createElement("div",null,l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Column,{width:"4",floated:"right",className:"add-five-margin-top add-two-margin-bottom"},l.a.createElement("span",null,l.a.createElement(d.a,{circular:!0,inverted:!0,name:"users"}),l.a.createElement(h.a,{text:localStorage.getItem("orgName"),className:"white-text"},l.a.createElement(h.a.Menu,null,l.a.createElement(h.a.Item,{text:" "})))),"\xa0\xa0\xa0\xa0",l.a.createElement("span",null,l.a.createElement(d.a,{circular:!0,inverted:!0,name:"users"}),l.a.createElement(h.a,{text:this.state.user_login.FullName,className:"white-text"},l.a.createElement(h.a.Menu,null,l.a.createElement(h.a.Item,{text:"Logout",onClick:this.handleLogout}))))))))),l.a.createElement(u.a.Row,{columns:"equal",className:"no-padding no-margin"},l.a.createElement(u.a.Column,{width:"3",className:"app-sidebar"},l.a.createElement(f,null)),l.a.createElement(u.a.Column,{className:"add-ten-padding-top app-content"},l.a.createElement(u.a,{centered:!0},l.a.createElement(u.a.Column,{width:"14"},l.a.createElement(B,null))))))}}]),a}(l.a.Component),z=a(187),P=a(186);var M=function(e){var t=Object(n.useState)(e),a=Object(z.a)(t,2),l=a[0],r=a[1];return{value:l,onChange:function(e){r(e.target.value)}}},T=function(e){var t=this,a=M(""),n=M("");return l.a.createElement(u.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle"},l.a.createElement(u.a.Column,{style:{maxWidth:450}},l.a.createElement(P.a,{src:E.a,textAlign:"center",style:{marginRight:"auto",marginLeft:"auto"}}),l.a.createElement("br",null),l.a.createElement(_.a,{size:"large"},l.a.createElement(b.a,{stacked:!0},l.a.createElement(_.a.Input,Object.assign({fluid:!0,icon:"user"},a,{iconPosition:"left",placeholder:"E-mail address"})),l.a.createElement(_.a.Input,Object.assign({fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password"},n)),l.a.createElement(k.a,{color:"teal",fluid:!0,size:"large",value:"Login",onClick:function(){y.a.post(O+"public/auth/login",{username:a.value,password:n.value}).then((function(t){var a,n,l;console.log(t),a=t.data.Data.Token,n=t.data.Data.User,l=t.data.Data.Organizations[0],localStorage.setItem("token",a),localStorage.setItem("user",JSON.stringify(n)),localStorage.setItem("orgLogin",l.UID),localStorage.setItem("orgName",l.Title),localStorage.setItem("token-access",a.Access),e.history.push("/")})),setTimeout(function(){e.history.push("/")}.bind(t),400)}},"Login")))))};var H=function(){return l.a.createElement(u.a,{textAlign:"center",style:{height:"85vh"},verticalAlign:"middle"},l.a.createElement(u.a.Column,{style:{maxWidth:450}},l.a.createElement(P.a,{src:E.a,textAlign:"center",style:{marginRight:"auto",marginLeft:"auto"}}),l.a.createElement("br",null),l.a.createElement("h2",{className:"white"},"404 Not Found")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(16),q=a(92);var J=function(e){var t=e.component,a=Object(q.a)(e,["component"]);return l.a.createElement(G.b,Object.assign({},a,{render:function(e){return A()?l.a.createElement(t,e):l.a.createElement(G.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var W=function(e){var t=e.component,a=Object(q.a)(e,["component"]);return l.a.createElement(G.b,Object.assign({},a,{render:function(e){return A()?l.a.createElement(G.a,{to:{pathname:"/"}}):l.a.createElement(t,e)}}))},Y=l.a.createElement(x.a,null,l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(G.d,null,l.a.createElement(J,{exact:!0,path:"/",component:F}),l.a.createElement(J,{path:"/create",component:F}),l.a.createElement(J,{path:"/edit",component:F}),l.a.createElement(W,{path:"/login",component:T}),l.a.createElement(G.b,{component:H})))));o.a.render(Y,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){e.exports=a.p+"static/media/logo.ff26501f.PNG"}},[[199,1,2]]]);
//# sourceMappingURL=main.d91a91be.chunk.js.map