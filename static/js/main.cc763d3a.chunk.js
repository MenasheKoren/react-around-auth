(this.webpackJsonpweb_project_14=this.webpackJsonpweb_project_14||[]).push([[0],{10:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(11),r=n(4),i=n(9),o=n(3),l=n(2),u=c.a.createContext(),d=(n(10),n(12)),p=n(13),j=function(){function e(t){var n=t.baseUrl,a=t.headers;Object(d.a)(this,e),this._baseUrl=n,this._headers=a}return Object(p.a)(e,[{key:"getInitialCards",value:function(){return m("".concat(this._baseUrl,"/cards"),{headers:this._headers})}},{key:"getUserInfo",value:function(){return m("".concat(this._baseUrl,"/users/me"),{headers:this._headers})}},{key:"editUserInfo",value:function(e){return m("".concat(this._baseUrl,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(e)})}},{key:"editAvatar",value:function(e){return m("".concat(this._baseUrl,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify({avatar:e})})}},{key:"createCard",value:function(e){return m("".concat(this._baseUrl,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(e)})}},{key:"deleteCard",value:function(e){return m("".concat(this._baseUrl,"/cards/").concat(e),{headers:this._headers,method:"DELETE"})}},{key:"addLikes",value:function(e){return m("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"PUT"})}},{key:"removeLikes",value:function(e){return m("".concat(this._baseUrl,"/cards/likes/").concat(e),{headers:this._headers,method:"DELETE"})}}]),e}(),m=function(e,t){return fetch(e,t).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)}))},h=new j({baseUrl:"https://around.nomoreparties.co/v1/group-12",headers:{authorization:"a422b90c-eef7-4772-9177-7c895e07d221","Content-Type":"application/json"}});function b(e){return e.ok?e.json():Promise.reject("Error ".concat(e.status))}var f="https://register.nomoreparties.co",O=localStorage.getItem("token"),g=n(0),x=function(e){var t=e.name,n=e.title,a=e.children,c=e.isOpen,s=e.closeAllPopups,r=e.buttonText,i=e.handleSubmit;return Object(g.jsx)("section",{className:["popup popup_type_".concat(t),c?"popup_opened":""].join(" "),children:Object(g.jsxs)("div",{className:"popup__container",children:[Object(g.jsx)("button",{className:"popup__close button button_hover_dark",type:"button",onClick:s}),Object(g.jsx)("h2",{className:"popup__title",children:n}),Object(g.jsxs)("form",{className:"popup__form",onSubmit:i,children:[a,Object(g.jsx)("button",{className:"popup__save button button_hover_darker",type:"submit",children:r})]})]})})};function v(e){var t=e.isOpen,n=e.onUpdateAddPlace,a=e.closeAllPopups,s=c.a.useState(""),r=Object(o.a)(s,2),i=r[0],l=r[1],u=c.a.useState(""),d=Object(o.a)(u,2),p=d[0],j=d[1];return c.a.useEffect((function(){l(""),j("")}),[t]),Object(g.jsxs)(x,{name:"add-card",title:"New place",buttonText:"Create",isOpen:t,handleSubmit:function(e){e.preventDefault(),n({title:i,link:p})},closeAllPopups:a,children:[Object(g.jsx)("input",{id:"card-title-input",className:"field-input field-input_type_card-title",name:i,onChange:function(e){e.preventDefault(),l(e.target.value)},type:"text",placeholder:"Title",required:!0,minLength:"1",maxLength:"30",pattern:".*\\S.*"}),Object(g.jsx)("span",{className:"error-message",id:"card-title-input-error"}),Object(g.jsx)("input",{id:"card-link-input",className:"field-input field-input_type_card-link",name:p,onChange:function(e){e.preventDefault(),j(e.target.value)},type:"url",placeholder:"Image URL",required:!0}),Object(g.jsx)("span",{className:"error-message",id:"card-link-input-error"})]})}var N=function(e){var t=e.isOpen,n=e.onUpdateAvatar,a=e.closeAllPopups,s=e.avatar,r=c.a.useRef(null);return Object(g.jsxs)(x,{name:s,title:"Update profile picture",buttonText:"Save",isOpen:t,handleSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})},closeAllPopups:a,children:[Object(g.jsx)("input",{ref:r,id:"image-link-input",className:"field-input field-input_type_image-link",name:"image-link",type:"url",placeholder:"Image URL",required:!0}),Object(g.jsx)("span",{className:"error-message",id:"image-link-input-error"})]})},_=function(e){var t=e.isOpen,n=e.closeAllPopups,a=e.onUpdateUser,s=c.a.useState(""),r=Object(o.a)(s,2),i=r[0],l=r[1],d=c.a.useState(""),p=Object(o.a)(d,2),j=p[0],m=p[1],h=c.a.useContext(u);return c.a.useEffect((function(){l(h.name),m(h.about)}),[h,t]),Object(g.jsxs)(x,{isOpen:t,handleSubmit:function(e){e.preventDefault(),a({name:i,description:j})},closeAllPopups:n,name:"edit",buttonText:"Save",children:[Object(g.jsx)("input",{id:"name-input",className:"field-input field-input_type_name",name:"name",onChange:function(e){e.preventDefault(),l(e.target.value)},value:i||"",type:"text",placeholder:"Name",required:!0,minLength:"2",maxLength:"40",pattern:".*\\S.*"}),Object(g.jsx)("span",{className:"error-message",id:"name-input-error"}),Object(g.jsx)("input",{id:"profession-input",className:"field-input field-input_type_profession",name:"description",onChange:function(e){e.preventDefault(),m(e.target.value)},value:j||"",type:"text",placeholder:"Profession",required:!0,minLength:"2",maxLength:"200",pattern:".*\\S.*"}),Object(g.jsx)("span",{className:"error-message",id:"profession-input-error"})]})},k=function(e){return Object(g.jsx)("section",{className:["popup popup_type_image",e.isOpen?"popup_opened":""].join(" "),children:Object(g.jsxs)("div",{className:"popup__container popup__container_type_image",children:[Object(g.jsx)("button",{className:"popup__close popup__close_type_image button button_hover_dark",type:"button",onClick:e.closeAllPopups}),Object(g.jsxs)("figure",{className:"popup__figure",children:[Object(g.jsx)("img",{className:"popup__image",src:e.selectedCardData.link,alt:e.selectedCardData.title}),Object(g.jsx)("figcaption",{className:"popup__caption",children:e.selectedCardData.title})]})]})})},A=function(e){var t=e.closeAllPopups,n=e.isOpen,a=e.isRegistered,c=e.handleCloseSuccessPopup,s=Object(l.g)();return Object(g.jsx)("section",{className:["popup popup_type_info-tool-tip",n?"popup_opened":""].join(" "),children:Object(g.jsxs)("div",{className:"popup__container popup__container_type_info-tool-tip",children:[a&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{className:"popup__close button button_hover_dark",type:"button",onClick:c}),Object(g.jsx)("img",{src:"data:image/png;base64,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",alt:"Success checkmark",className:"info-tool-tip__image"}),Object(g.jsx)("h2",{className:"popup__title info-tool-tip__title",children:"Success! You have now been registered."})]}),"signup"===s.pathname&&!a&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{className:"popup__close  button button_hover_dark",type:"button",onClick:t}),Object(g.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAApJSURBVHgB7Z2Ndds2EMcPoPXhtu9VnaDqBNEGdiZIOkHcCZINmk7QblBng2aC2BNEmcDKBFbeS54ViQSKo0gJhECJkijiQOH3nhNaop5F/HkH8ADcMWgBcjAYxF+/jhhjQ8b5M5BygMcSYLg8QQ6AsYHloxMGMIXsJ5Hyk5RyyqQcX/z005hNp1PwHAYesri4uJaMjS44v1IijiAXsn7wBhjHQtyj6J04vgPP8EJgtNDFt283StAXysJGJdbYwBdR1s3YnRDi/SKK7i5nswkQh6zABVEBrrefLNGVTtTPWAB8VtY2kVE0iZevQb/fn9rc7VO/P4ySZMCiaMCSZCjRxQM8wxuIVbiR1Lko9jvKYpMTGN0v5/yVOny5pYEnStQ7Zc33p2zceacz4lE0AiGuleVewbauQMpbFNtHN94IKKzo9T4kvZ60/cTqvXmv9watDhwh1d+O+/2beMv3VNfwMe50biCwBIVVDfOwTVR010CMXOyk2/1YIvbDWQtdarHd7uOi1/tn0e9fgyegK4+73dsyofFa4VzAO79U2H7/LUVrrQpeG96cVo/U7f7rsntpBNnrvUYh2yasSSq0uiaLNT/KbvdPaBtbrPbfNglrkvbTdtf90BprtlktjjR96mOPBYW2uG1skzfgK2iZSty/zbsXXRecKTa3LTudv8E3MpdsPj484GgTzpwSa/bHZaOI5gXgyLLNfe2+qNDrIBtt+yWyGlC8NPvbuc/9zImZX16+MftlbEOgiHI9r8zHn+CSd2PzeNiWQIkNcdv0GNAAtn6ZjMhB3HogKXLa5wZxa8MmsrM+Of0yxQFVELcGLCI3P5axfIkgbo04b98g7ukxPSQGjhqJJZjhx/AodDqyR6jmwprpxEEIYjSKJRhymjY3XQaG2iDQCEZY8/EkXaLZ74bYcnNg7Fpvf5xbhzpR1vun7ibCoKp5zP64Nle94Zq73bcQcIIxn1yPq8ZlNbprhoBThLZM92hXjctqgmumhanJUUtyCwMrZckQIIG+kO9gK8ZV+cF6aZKOqvVx0SFWrFtvGFjRwxhw7Tc2Mqw3xJoJcpQV6xuqvFzWeSboVly5L6Y6cg6Rs02qWDHfeEGI9TIRKW8p7FzHSJp4eiK1rprC6kdMICMYe5f/nm2cLyebaCY1FWiESUms1MyDPxQ2khke93Grp9MHVxgxAceYMXAKIhuRPRIi6xv7tk7h6ifi7nVwSIm4TkU2xaUiMoq6c7BlumfHuTC2ietE5DJxKYicTSeuv4vmpleDrCRJrrUPOEsLlG5cE6LKVNgg4vxDEyKnYVrGbradowY7b12JjIMtTOmU/754errJj9ejaM5frD+xHpk1DVM3ViLl8yz31S5OLnIVcXNih2mp1N9+nx9fALzYOEF/nqLw7JtOcJvpHhp217vccmFWx3E41+hiHwtvGkNtMnO+LkX2SdycRJ8/yIIeqYtO8z/mSHkHROguFmMX7noftyyk/Kszn78FAmDmv9UxZuiDTGD1z9XqDc7vgRBNi+yruCmacfIsv2cqMFum5E0RSTIGYjQlstfiKqIousuP06Sq+D8+Q4l1pzyNvn//BYiCokWMfaiYTniaCPEcb44K53ovbg6OWfL24ZeXv3AVsVrd6UpsctarcypLbou4GZP8ALPg88IAC+ALEKdukVsmLhrpp9UxY0POsJ5B/oKUpC04py6R2yYuIjULZpyPOGPs2epNKSfgCceK3EZxEaZpqNzzz1wNowe2N33gUJHbKi6CpQxWx8pFX8hlyZn8hSoNRQoUWYn2PAKoMrpGkSvPc/smLqLi0BORHStVh1xvlE4UPYKH7GnJlfBRXBsM45b5L+oZ2Ms6Sjl7PieX4rO4ZlyDQ4uow5J9t9ysklvOoFUCI8eI3Ba3rNM6gZGVyHvAhfinbeIirRQYUX3x633OF5zftDFjENddWVt2D+zznKvR2BqvJsHHpHVfNZv9DJ5zoLg53ossi8utJq1y0UeKm+O1yIso0iOTU8706aU4/g08pSZxc7wVmSXJSmChvDNXjwaf8xcwdgkespe4Ut5SWZJ7CrBMrvbrF67Hn5mHAu87cRDN539QWnddN7qR4vQvZ0Ks5oBVh/wreMShs0KuVms2QWH6F120Pr2kL76jzrFTfm0VuTD9myRjrxbd5dQ5n3vKhXwu2Fh0lwWnJ9n7A/UcRdpN1z1Z3yZLnv/440i7USdsOl3OJumrKRdJslcMt0lOtRKjLSLz+VxfIZsuvksFFgCr3QzKXV0BQU69zKYNIjNNO5FtJ+XZG2PtrGsgRlNrqLwXWdOOmTtU9F18lPphF7v8KGxd3Zey7aOrWLRuxQspfwcCuFr96KMlGxkaVl3uSuCdO8QbxvXS1kNEdrlxvpAji7H/Nk7YlsijaSwl85xtvq7qrl1uAq+cQKdyvqUGsJVDd9Wou0R2vcNfz28Wb8tZWSnfUoNsE7npRi0TmUL6Bj157Nb8ZrUkmq4Zm8iuGtUUmYK4GL2q5J5z9HTxVIpf6SK7btRcZDKJV/THyCplF/ZKbtkgKDKVRqXSJubgqrLH1QdbIZ0/XRKtUOheyWOpWnFgjVljeO/ksUkoykEaI2Hr/snrghXTxex7D079rPfFlUZogUaordxgrWXUArVw8Mi5DN2KsY48BJyS1F1uMJSXpUNhYKU0qW32yqwj38ZtltTZcM11G1phwBVKvDcKtnXBNZ8ip7fpqkPJu+aQWsSqVtdsYrrqxPGc8TmgxH1d6B5P3eY4wxT642ZIZ670freJ2b10q4s2wYxRrlB+tn7MWHPSZC0N2x8PItcHifa1LGEJItfAhrinHFTtwrL6MYh8BBbLlfEPP7wEl+BMRhD5eKziOi4QuiKIfBykxc2xiRweoXZjW45LTtyctE/eXDscgiElmEEMbDvnfe4ubO4Gw5ohdr0G26IQfvTN49lEDv3ykiw6VWgbnGf3sm3MsGZqzQRq3rsCr91sD2wjr71bOkGx2S+flTXjshq0UrO/db3BrzZKXHa65KTNQqfzuJYMBbgDsJXXne4xsuzQQ9fVpgtOB1Hojs1rbZPVloHWrG9w0902jix9FrpU2DZbbRnZktwHi9Cp6/YpSIJ9bIKPPSXC4rXCuZJFwKxC48AEd69TvPPRWtVN+MZYq1bwSGctrEkqdHEhgSn2B9di49/eISo5iyVX6Qwbhwlxwxh7teW0Cdarl1LeC4DxqZKDoqCdJLlOM8gtk4wNrScuM/H8Jzh/15nN7oAQZEvZpY9WANeq8V4x/H/ryXKa5fmaJlJ+wiqqWCoX8yUnUTS9nM0mGx9RLnY2m6UBhos4HmIy9LSgMsCv6nikPj/clYFWAtypG+x95/LyFhN/AkG8qFW4EluIF6nYR9YmPPyLyKm6CcbURdXxshglunEsTc+lvEJrgzLXeTzoCcaCsXv0ENTcbxW8rjaag+42ns3QrY6wZL26qGdo5WxZGxmtfbj5IdVvZvUqsCw6unUl5BcscYBZ8C/6/bEPFrqL/wE1uHY7nLjFmgAAAABJRU5ErkJggg==",alt:"X for failure to register",className:"info-tool-tip__image"}),Object(g.jsx)("h2",{className:"popup__title info-tool-tip__title",children:"Oops, something went wrong! Please try again."})]})]})})};function y(){var e=(new Date).getFullYear();return Object(g.jsx)("footer",{className:"footer",children:Object(g.jsxs)("p",{className:"footer__text",children:["\xa9 ",e," Around The U.S."]})})}var C=n.p+"static/media/logo.18d6d792.svg";function S(e){var t=e.handleLogout,n=(e.isRegistered,e.localEmail),a=Object(l.g)();return Object(g.jsxs)("header",{className:"header",children:[Object(g.jsx)(r.b,{to:"/",className:"link link__hover",children:Object(g.jsx)("img",{src:C,alt:"Around the U.S. logo",className:"header__logo"})}),Object(g.jsxs)("div",{className:"header__user-area",children:[Object(g.jsx)("p",{className:"header__email",children:n}),n&&Object(g.jsx)(r.b,{to:"/signin",onClick:t,className:"link link__hover",children:"Log out"}),"/signin"===a.pathname&&Object(g.jsx)(r.b,{className:"link link__hover",to:"signup",children:"Sign up"}),"/signup"===a.pathname&&Object(g.jsx)(r.b,{className:"link link__hover",to:"signin",children:"Log in"})]})]})}function E(e){var t=e.handleLogout,n=e.isRegistered,a=e.localEmail;return Object(g.jsx)("div",{className:"page",children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)(S,{handleLogout:t,isRegistered:n,localEmail:a}),Object(g.jsx)(l.b,{}),Object(g.jsx)(y,{})]})})}function P(e){var t=e.handleInputEmail,n=e.handleInputPassword,a=e.email,c=e.password,s=e.handleSubmitLogin;return Object(g.jsxs)("section",{className:"entry entry_type_login",children:[Object(g.jsx)("h2",{className:"entry__title",children:"Log in"}),Object(g.jsxs)("form",{className:"entry__form",onSubmit:s,children:[Object(g.jsx)("input",{type:"email",className:"field-input field-input_type_entry",placeholder:"Email",id:"email-input",name:"email",value:a||"",onChange:t,required:!0}),Object(g.jsx)("span",{className:"error-message",id:"email-input-error"}),Object(g.jsx)("input",{type:"password",className:"field-input field-input_type_entry",placeholder:"Password",id:"password-input",name:"password",value:c||"",onChange:n,required:!0,minLength:"2",maxLength:"40",pattern:".*\\S.*"}),Object(g.jsx)("span",{className:"error-message",id:"password-input-error"}),Object(g.jsx)("button",{className:"entry__save button button_hover_dark",type:"submit",children:"Log in"})]}),Object(g.jsx)(r.b,{to:"/signup",className:"link link__hover entry__redirect-text",children:"Not a member yet? Sign up here!"})]})}var w=n.p+"static/media/edit.52a1d7c0.svg";var L=function(e){var t=c.a.useContext(u),n=e.card.owner._id===t._id,a=e.card.likes.some((function(e){return e._id===t._id}));return Object(g.jsxs)("li",{className:"card",children:[n&&Object(g.jsx)("button",{className:"card__remove button button_hover_dark",onClick:function(){e.onCardDelete(e.card)}}),Object(g.jsx)("img",{className:"card__image",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(g.jsxs)("div",{className:"card__caption",children:[Object(g.jsx)("h3",{className:"card__location ellipses",children:e.card.name}),Object(g.jsxs)("div",{className:"likes-container",children:[Object(g.jsx)("button",{className:["card__like button button_hover_light",a?"button_filled":"button_empty"].join(" "),type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(g.jsx)("span",{className:"card__likes-count",children:e.card.likes.length})]})]})]})};var R=function(e){var t=e.cardList,n=e.handleCardClick,a=e.handleCardLike,s=e.handleDeleteCard,r=e.onAddPlaceClick,i=e.onEditAvatarClick,o=e.onEditProfileClick,l=c.a.useContext(u);return Object(g.jsxs)("main",{className:"main",children:[Object(g.jsxs)("section",{className:"profile",children:[Object(g.jsxs)("div",{className:"avatar",children:[Object(g.jsx)("img",{className:"avatar__image",src:l.avatar,alt:"Jacques Cousteau smiling on the sea"}),Object(g.jsx)("img",{onClick:i,className:"avatar__edit-icon",src:w,alt:"Edit icon"})]}),Object(g.jsxs)("div",{className:" profile-info",children:[Object(g.jsxs)("div",{className:" profile-info__name",children:[Object(g.jsxs)("div",{className:" profile-info__edit",children:[Object(g.jsx)("h1",{className:" edit-name ellipses",children:l.name}),Object(g.jsx)("button",{onClick:o,className:" edit-button button button_hover_dark",type:" button"})]}),Object(g.jsx)("p",{className:" profile-info__profession ellipses",children:l.about})]}),Object(g.jsx)("button",{onClick:r,className:" add-button button button_hover_dark",type:" button"})]})]}),Object(g.jsx)("section",{className:"cards",children:Object(g.jsx)("ul",{className:"card-list",children:t.map((function(e){return Object(g.jsx)(L,{card:e,onCardClick:n,onCardLike:a,onCardDelete:s},e._id)}))})})]})},I=function(e){var t=e.children,n=e.isRegistered,a=Object(l.g)();return n?t:Object(g.jsx)(l.a,{to:"signin",replace:!0,state:{from:a.pathname}})};function U(e){var t=e.handleInputEmail,n=e.handleInputPassword,a=e.email,c=e.password,s=e.handleSubmitRegister;return Object(g.jsxs)("section",{className:"entry entry_type_signup",children:[Object(g.jsx)("h2",{className:"entry__title",children:"Sign up"}),Object(g.jsxs)("form",{className:"entry__form",onSubmit:s,children:[Object(g.jsx)("input",{type:"email",className:"field-input field-input_type_entry",placeholder:"Email",id:"email-input",name:"email",value:a||"",onChange:t,required:!0}),Object(g.jsx)("span",{className:"error-message",id:"email-input-error"}),Object(g.jsx)("input",{type:"password",className:"field-input field-input_type_entry",placeholder:"Password",id:"password-input",name:"password",value:c||"",onChange:n,required:!0,minLength:"2",maxLength:"40",pattern:".*\\S.*"}),Object(g.jsx)("span",{className:"error-message",id:"password-input-error"}),Object(g.jsx)("button",{className:"entry__save button button_hover_dark",type:"submit",children:"Sign up"})]}),Object(g.jsx)(r.b,{to:"/signin",className:"link link__hover entry__redirect-text",children:"Already a member? Log in here!"})]})}var q=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),r=Object(o.a)(s,2),d=r[0],p=r[1],j=Object(a.useState)(!1),m=Object(o.a)(j,2),y=m[0],C=m[1],S=Object(a.useState)(!1),w=Object(o.a)(S,2),L=w[0],q=w[1],X=Object(a.useState)(!1),D=Object(o.a)(X,2),J=D[0],Z=D[1],K=Object(a.useState)(!1),Y=Object(o.a)(K,2),H=Y[0],T=Y[1],M=Object(a.useState)({}),B=Object(o.a)(M,2),V=B[0],G=B[1],F=Object(a.useState)([]),Q=Object(o.a)(F,2),z=Q[0],W=Q[1],$=Object(a.useState)({}),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)(""),ce=Object(o.a)(ae,2),se=ce[0],re=ce[1],ie=Object(a.useState)(""),oe=Object(o.a)(ie,2),le=oe[0],ue=oe[1],de=Object(a.useState)(!1),pe=Object(o.a)(de,2),je=pe[0],me=pe[1],he=localStorage.getItem("localEmail"),be=Object(l.h)(),fe=Object(l.g)();function Oe(e){e.preventDefault(),re(e.target.value)}function ge(e){e.preventDefault(),ue(e.target.value)}function xe(){me(!0)}function ve(){c(!0)}function Ne(){p(!1),C(!1),q(!1),Z(!1),T(!1),G({}),c(!1)}return Object(a.useEffect)((function(){h.getUserInfo().then((function(e){ne(e)})).catch((function(e){return console.log("Error.....: ".concat(e))}))}),[]),Object(a.useEffect)((function(){h.getInitialCards().then((function(e){W(Object(i.a)(e))})).catch((function(e){return console.log("Error.....: ".concat(e))}))}),[]),Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&("/signup"===fe.pathname&&je&&(be("/signin"),Ne()),Ne())};return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}}),[je,be,fe]),Object(a.useEffect)((function(){var e;O&&(localStorage.getItem(O),(e=O,fetch("".concat(f,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(b).then((function(e){return e}))).then((function(){me(!0),re(he),be("/")})).catch((function(e){return console.log("Error.....: ".concat(e))})))}),[be,he]),Object(g.jsx)(u.Provider,{value:te,children:Object(g.jsx)(l.e,{children:Object(g.jsxs)(l.c,{path:"/",element:Object(g.jsx)(E,{handleLogout:function(){return new Promise((function(e){me(!1),e()})).then((function(){localStorage.removeItem("token"),localStorage.removeItem("localEmail")})).catch((function(e){return console.log("Error.....: ".concat(e))}))},isRegistered:je,localEmail:he}),children:[Object(g.jsx)(l.c,{index:!0,element:Object(g.jsxs)(I,{isRegistered:je,children:[Object(g.jsx)(R,{onEditAvatarClick:function(){p(!0)},onEditProfileClick:function(){C(!0)},onAddPlaceClick:function(){q(!0)},handleCardClick:function(e){var t=e.link,n=e.name;T(!0),G({title:n,link:t})},onDeletePlaceClick:function(){Z(!0)},cardList:z,handleCardLike:function(e){var t=e.likes.some((function(e){return e._id===te._id}));t?h.removeLikes(e._id,t).then((function(t){W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("Error.....: ".concat(e))})):h.addLikes(e._id,!t).then((function(t){W((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log("Error.....: ".concat(e))}))},handleDeleteCard:function(e){h.deleteCard(e._id).then((function(){var t=e._id;W(z.filter((function(e){return e._id!==t})))})).catch((function(e){return console.log("Error.....: ".concat(e))}))}}),Object(g.jsx)(N,{isOpen:d,closeAllPopups:Ne,onUpdateAvatar:function(e){var t=e.avatar.valueOf();h.editAvatar(t).then((function(e){ne(e)})).then((function(){Ne()})).catch((function(e){return console.log("Error.....: ".concat(e))}))}}),Object(g.jsx)(_,{isOpen:y,closeAllPopups:Ne,onUpdateUser:function(e){var t=e.name,n=e.description;h.editUserInfo({name:t,about:n}).then((function(e,t){ne(e,t)})).then((function(){Ne()})).catch((function(e){return console.log("Error.....: ".concat(e))}))}}),Object(g.jsx)(v,{isOpen:L,closeAllPopups:Ne,onUpdateAddPlace:function(e){var t=e.title,n=e.link;h.createCard({name:t,link:n}).then((function(e){W([e].concat(Object(i.a)(z)))})).then((function(){Ne()})).catch((function(e){return console.log("Error.....: ".concat(e))}))}}),Object(g.jsx)(x,{name:"remove-card",title:"Are you sure?",buttonText:"Yes",isOpen:J,closeAllPopups:Ne}),Object(g.jsx)(k,{closeAllPopups:Ne,selectedCardData:V,isOpen:H})]})}),Object(g.jsx)(l.c,{path:"signup",element:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(U,{handleSubmitInfoToolTip:ve,handleSetRegistration:xe,handleSubmitRegister:function(e){e.preventDefault(),function(e,t){return fetch("".concat(f,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(b).then((function(e){return e}))}(se,le).then((function(e){e.data&&e.data._id&&xe()})).catch((function(e){console.log("Error.....: ".concat(e))})).finally(ve)},isRegistered:je,handleInputEmail:Oe,handleInputPassword:ge,email:se,password:le}),Object(g.jsx)(A,{isOpen:n,closeAllPopups:Ne,isRegistered:je,handleCloseSuccessPopup:function(){be("/signin"),Ne()}})]})}),Object(g.jsx)(l.c,{path:"signin",element:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P,{handleSubmitInfoToolTip:ve,handleInputEmail:Oe,handleInputPassword:ge,email:se,password:le,handleSubmitLogin:function(e){e.preventDefault(),se&&le&&function(e,t){return fetch("".concat(f,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(b).then((function(e){if(e.token)return localStorage.setItem("token",e.token),e}))}(se,le).then((function(e){e.token&&(localStorage.setItem("localEmail",se),new Promise((function(e){me(!0),e()})).catch((function(e){return console.log("Error.....: ".concat(e))})).then((function(){be("/")})))})).catch((function(e){console.log("Error.....: ".concat(e))}))}}),Object(g.jsx)(A,{isOpen:n,closeAllPopups:Ne})]})}),Object(g.jsx)(l.c,{path:"*",element:Object(g.jsx)("main",{style:{padding:"1rem"},children:Object(g.jsx)("h1",{children:"Error 404: There's nothing here!"})})})]})})})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};Object(s.render)(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(r.a,{basename:"/react-around-auth",children:Object(g.jsx)(q,{})})}),document.getElementById("root")),X()}},[[19,1,2]]]);
//# sourceMappingURL=main.cc763d3a.chunk.js.map