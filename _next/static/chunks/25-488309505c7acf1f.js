(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[25],{4421:function(e,s,n){"use strict";var a=n(5893),r=n(1881);s.Z=function(){return(0,a.jsxs)("form",{className:"field-search",children:[(0,a.jsx)(r.Z,{name:"search",fill:"currentColor",size:"1.27rem"}),(0,a.jsx)("input",{placeholder:"Aristas, canciones o podcasts"}),(0,a.jsx)(r.Z,{name:"x",fill:"currentColor",size:"1.27rem"})]})}},2775:function(e,s,n){"use strict";var a=n(5893),r=n(1664),c=n.n(r),i=n(142),t=n.n(i),l=n(3635);s.Z=function(e){var s=e.pageName,n=function(e){return s===e?" ".concat(t().actual):""},r=function(e){var s=e.href,n=e.className,r=e.children;return(0,a.jsx)("li",{children:(0,a.jsx)(c(),{href:s,children:(0,a.jsx)("a",{className:"h-fs-st3 h-color-light ".concat(t().link+n),children:r})})})};return(0,a.jsxs)("ul",{className:t().collection,children:[(0,a.jsx)(r,{href:"/library/playlists",className:n(l.EQ),children:"Listas"}),(0,a.jsx)(r,{href:"/library/podcasts",className:n(l.Zn),children:"Podcasts"}),(0,a.jsx)(r,{href:"/library/artists",className:n(l.hC),children:"Artistas"}),(0,a.jsx)(r,{href:"/library/albums",className:n(l.Dp),children:"Albumes"})]})}},5025:function(e,s,n){"use strict";n.d(s,{Z:function(){return E}});var a=n(5893),r=n(5782),c=n(9008),i=n.n(c),t=function(){return console.log("foter renderizado"),(0,a.jsx)("footer",{className:"FOOTER",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"song",children:[(0,a.jsx)("div",{children:(0,a.jsx)("img",{src:"/img/song.webp",alt:""})}),(0,a.jsxs)("div",{className:"info",children:[(0,a.jsx)("a",{className:"link h-color-light",href:"",children:"cancion"}),(0,a.jsx)("a",{className:"link h-color-gray",href:"",children:"artista"})]}),(0,a.jsx)("button",{className:"btn like",children:"dar like"}),(0,a.jsx)("button",{className:"btn play-pause",children:"play-pause"})]}),(0,a.jsx)("div",{className:"primary-controls",children:"controles"}),(0,a.jsx)("div",{className:"secondary-controls",children:"volumen"})]})})},l=n(5529),o=n(2775),u=n(4421),h=n(1881),m=function(){return(0,a.jsxs)("div",{className:"page-navigation",children:[(0,a.jsx)("button",{className:"button back",children:(0,a.jsx)(h.Z,{fill:"#fff",stroke:"#fff",name:"chevronLeft",size:"1.27rem"})}),(0,a.jsx)("button",{className:"button fordward",children:(0,a.jsx)(h.Z,{fill:"#fff",stroke:"#fff",name:"chevronRight",size:"1.27rem"})})]})},f=function(){return(0,a.jsx)("button",{className:"premium-button h-color-light",title:"Actualizar a Premium",children:"PREMIUM"})},d=n(4620),x=n.n(d),j=n(7294),_=function(){var e=(0,j.useRef)();return(0,j.useEffect)((function(){document.onclick=function(){var s;null===(s=e.current)||void 0===s||s.classList.remove(x().active)}})),(0,a.jsxs)("div",{className:x().container,ref:e,children:[(0,a.jsxs)("button",{onClick:function(s){s.stopPropagation(),e.current.classList.toggle(x().active)},className:x().btn,children:[(0,a.jsx)("div",{className:x().imgContainer,children:(0,a.jsx)(h.Z,{name:"user",fill:"#fff",size:"1.9rem"})}),(0,a.jsx)("span",{className:"h-color-light",children:"Usuario"}),(0,a.jsx)(h.Z,{className:x().icon,name:"play",fill:"#fff",size:"0.9rem"})]}),(0,a.jsxs)("ul",{className:x().menu,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"h-color-light-alt "+x().link,href:"",children:"Perfil"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"h-color-light-alt "+x().link,href:"",children:"Preferencias"})})]})]})},p=function(e){var s=e.name,n=e.collectionPageName;return(0,a.jsxs)("header",{className:"HEADER",children:[(0,a.jsx)(m,{}),s===l.s_&&(0,a.jsx)(f,{}),s===l.y9&&(0,a.jsx)(o.Z,{pageName:n}),s===l.Y4&&(0,a.jsx)(u.Z,{}),(0,a.jsx)(_,{})]})},v=n(1664),N=n.n(v),k=n(7733),g=n.n(k),z=function(e){var s=e.children,n=e.href,r=e.iconName,c=e.className,i=" ".concat(g().s_uiM),t=c?" ".concat(c):"";return(0,a.jsx)("li",{children:(0,a.jsx)(N(),{href:n,children:(0,a.jsxs)("a",{className:"h-color-light h-fs-st4 ".concat(g().item).concat(i).concat(t),children:[r&&(0,a.jsx)(h.Z,{name:r,fill:"currentColor",size:"1.4rem"}),s]})})})},C=n(9310),b=function(e){var s=e.setPanelClass;return(0,a.jsx)("nav",{id:"mobile-panel",children:(0,a.jsxs)("ul",{className:"menu",children:[(0,a.jsx)(z,{href:"/",iconName:"index",className:s(C.BE),children:(0,a.jsx)("span",{children:"Inicio"})}),(0,a.jsx)(z,{href:"/search",iconName:"search",className:s(C.hX),children:(0,a.jsx)("span",{children:"Buscar"})}),(0,a.jsx)(z,{href:"/library/playlists",iconName:"library",className:s(C.vy),children:(0,a.jsx)("span",{children:"Tu Biblioteca"})}),(0,a.jsx)(z,{href:"/premium",iconName:"spotify",className:"h-unset",children:(0,a.jsx)("span",{children:"Premium"})})]})})},y=function(e){var s=e.name;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(b,{setPanelClass:function(e){return s===e?" ".concat(k.actual):""}})})},E=function(e){var s=e.panelName,n=e.headerName,c=e.collectionPageName,l=e.children;return(0,a.jsxs)("div",{id:r.root_uiM,children:[(0,a.jsxs)(i(),{children:[(0,a.jsx)("title",{children:"SPOTIFY CLONE"}),(0,a.jsx)("meta",{name:"description",content:"Spotify clone"}),(0,a.jsx)("link",{rel:"icon",href:"/svgs/spotify.svg"})]}),(0,a.jsx)(y,{name:s}),(0,a.jsx)(p,{name:n,collectionPageName:c}),l,(0,a.jsx)(t,{})]})}},1881:function(e,s,n){"use strict";n.d(s,{Z:function(){return c}});var a=n(5893),r={index:(0,a.jsx)("path",{d:"m8 0.55078c-0.24445 0-0.48818 0.093174-0.67188 0.27734l-6.089 6.0882c-0.088964 0.090166-0.18884 0.33169-0.18838 0.58366v6.998c0 0.51934 0.42988 0.95117 0.94922 0.95117h4.2012c0.51934 0 0.94922-0.43183 0.94922-0.95117v-3.5488h1.6992v3.5488c0 0.51934 0.42988 0.95117 0.94922 0.95117h4.2012c0.51934 0 0.94922-0.43183 0.94922-0.95117v-7c-4.9e-5 -0.25129-0.09986-0.49199-0.1886-0.58193l-1.4423-1.4415-4.6465-4.6465c-0.1837-0.18417-0.42742-0.27734-0.67188-0.27734zm0 2.1504 5.1836 5.0605v5.9199h-2.5664v-3.6836c0-0.18725-0.02762-0.41824-0.21289-0.60352-0.18527-0.18527-0.41822-0.21289-0.60547-0.21289h-3.5977c-0.18729 0-0.41788 0.024064-0.60547 0.20898-0.18759 0.18492-0.21754 0.42715-0.21289 0.61914v3.6719h-2.5664v-5.9199z"}),search:(0,a.jsx)("path",{d:"m6.9147 13.329a6.3762 6.3759 0 0 0 3.9266-1.3534l3.5249 3.5247 1.1338-1.1337-3.5249-3.5247a6.3762 6.3759 0 0 0 1.3543-3.9272c0-3.5367-2.8778-6.4144-6.4147-6.4144-3.5369 0-6.4147 2.8776-6.4147 6.4144 0 3.5367 2.8778 6.4144 6.4147 6.4144zm0-11.225c2.6533 0 4.811 2.1576 4.811 4.8108 0 2.6531-2.1577 4.8108-4.811 4.8108-2.6533 0-4.811-2.1576-4.811-4.8108 0-2.6531 2.1577-4.8108 4.811-4.8108z"}),library:(0,a.jsx)("path",{d:"m9.75 1.0938a0.7 0.69998 0 0 1 0.7 0l4.2 2.4247a0.7 0.69998 0 0 1 0.35 0.60618v10.175a0.7 0.69998 0 0 1-0.7 0.69998h-4.2a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 0.35-0.60618zm1.05 1.8186v10.688h2.8v-9.071zm-9.1 12.088a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 1.4 0v12.6a0.7 0.69998 0 0 1-0.7 0.69998zm4.2 0a0.7 0.69998 0 0 1-0.7-0.69998v-12.6a0.7 0.69998 0 0 1 1.4 0v12.6a0.7 0.69998 0 0 1-0.7 0.69998z"}),createPlaylist:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"m0.06639 16h15.934v-16h-16z",fill:"#fff"}),(0,a.jsx)("path",{d:"m8 4v8m-4-4h8",fill:"none",stroke:"#000",strokeWidth:"1.0079"})]}),x:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("path",{d:"M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"}),(0,a.jsx)("path",{d:"M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"})]}),chevronLeft:(0,a.jsx)("path",{strokeWidth:".72",d:"M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"}),chevronRight:(0,a.jsx)("path",{strokeWidth:".72",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"}),tracks:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"linearGradient5016",x2:"16",y2:"16",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#3f12b8",offset:"0"}),(0,a.jsx)("stop",{stopColor:"#fff",offset:"1"})]})}),(0,a.jsx)("path",{d:"m0 16h16v-16h-16z",fill:"url(#linearGradient5016)",strokeWidth:"1.0079"}),(0,a.jsx)("path",{d:"m5.7845 4.3979c-0.44804-0.00725-0.90754 0.24375-1.3188 0.95601-1.4621 2.5325 3.5345 6.2626 3.5345 6.2626s4.9963-3.73 3.534-6.2626c-0.4192-0.72608-0.88852-0.95168-1.3448-0.96927-1.1351-0.043767-2.1892 1.137-2.1892 1.137s-1.0709-1.1052-2.2159-1.1237z",fill:"#fff",stroke:"#fff",strokeWidth:".265"})]}),spotify:(0,a.jsx)("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"}),tracks2:(0,a.jsx)("path",{d:"m8 2.9312-0.717-0.78613c-1.683-1.8453-4.769-1.2085-5.883 1.1115-0.523 1.0912-0.641 2.6667 0.314 4.6773 0.92 1.936 2.834 4.2549 6.286 6.7808 3.452-2.5259 5.365-4.8448 6.286-6.7808 0.955-2.0117 0.838-3.5861 0.314-4.6773-1.114-2.32-4.2-2.9579-5.883-1.1125zm0 13.069c-15.333-10.807-4.721-19.243-0.176-14.781 0.06 0.058666 0.119 0.11947 0.176 0.1824a3.12 3.328 0 0 1 0.176-0.18133c4.544-4.4651 15.157 3.9712-0.176 14.78z"}),play:(0,a.jsx)("path",{d:"m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"}),pause:(0,a.jsx)("path",{d:"M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"}),user:(0,a.jsx)("path",{d:"m8 0.4795c-0.83991-8.035e-5 -1.6845 0.28343-2.3325 0.87906-0.64799 0.59563-1.0797 1.501-1.1179 2.6482-0.029322 0.86233 0.038334 1.4574 0.27902 2.0639 0.22348 0.56319 0.60533 1.1666 1.1288 2.0493-0.0036696 0.10312-0.031021 0.21061-0.19513 0.39191-0.18405 0.20333-0.49584 0.44658-0.88265 0.70874-0.77363 0.52432-1.8427 1.1377-2.8413 1.9742l-0.02006 0.01648-0.018236 0.02014c-0.62627 0.65818-1.0431 1.788-1.0431 4.2891h0.93372c0-2.3846 0.37471-3.2001 0.77871-3.6298 0.9098-0.7559 1.921-1.3441 2.7319-1.8936 0.41036-0.27812 0.77113-0.54485 1.0504-0.85342 0.2793-0.30856 0.49085-0.69896 0.45956-1.1391l-0.0072946-0.10988-0.056534-0.095231c-0.59988-1.0179-0.96107-1.5988-1.1507-2.0768-0.18966-0.47798-0.24075-0.87764-0.21337-1.683v-0.00183c0.03111-0.93487 0.35662-1.5655 0.81518-1.987 0.45856-0.42151 1.071-0.63371 1.7015-0.63365 0.63054 6.03e-5 1.2429 0.2121 1.7015 0.63365 0.45858 0.42155 0.78407 1.054 0.81518 1.9889 0.02739 0.80539-0.02371 1.205-0.21337 1.683-0.18966 0.47798-0.55085 1.0589-1.1507 2.0768l-0.056534 0.095231-0.00729 0.11171c-0.031283 0.44015 0.18026 0.82872 0.45956 1.1373 0.2793 0.30856 0.64008 0.5753 1.0504 0.85342 0.81046 0.54929 1.8205 1.1382 2.73 1.8936 0.40447 0.42933 0.78053 1.2428 0.78053 3.6298h0.93372c0-2.501-0.41687-3.6309-1.0431-4.2891l-0.01823-0.02014-0.02006-0.01648c-0.99856-0.83656-2.0677-1.4499-2.8413-1.9742-0.38681-0.26216-0.6986-0.50358-0.88265-0.70691-0.16418-0.18137-0.1915-0.29059-0.19513-0.39374 0.52352-0.8827 0.90538-1.4861 1.1288-2.0493 0.24068-0.60657 0.30834-1.2016 0.27902-2.0639-0.038172-1.1471-0.46993-2.0525-1.1179-2.6482-0.64797-0.59566-1.4926-0.87897-2.3325-0.87906z"})},c=function(e){var s=e.className,n=e.name,c=e.fill,i=e.stroke,t=e.size;return(0,a.jsx)("svg",{className:s,fill:c,stroke:i,width:t,height:t,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:r[n]})}},3635:function(e,s,n){"use strict";n.d(s,{Dp:function(){return i},EQ:function(){return a},Zn:function(){return r},hC:function(){return c}});var a="PLAYLISTS_COLLECTION",r="PODCASTS_COLLECTION",c="ARTISTS_COLLECTION",i="ALBUMS_COLLECTION"},5529:function(e,s,n){"use strict";n.d(s,{Y4:function(){return c},s_:function(){return a},y9:function(){return r}});var a="NORMAL_HEADER",r="COLLECTION_HEADER",c="SEARCH_HEADER"},9310:function(e,s,n){"use strict";n.d(s,{BE:function(){return a},WP:function(){return i},hX:function(){return r},vy:function(){return c}});var a="INDEX_PANEL",r="SEARCH_PANEL",c="LIBRARY_PANEL",i="TRACKS_PANEL"},5782:function(e){e.exports={root_uiM:"root-layout_root_uiM__i1CoP",root_uiDesk:"root-layout_root_uiDesk__Jp5wv"}},142:function(e){e.exports={collection:"collection-links_collection__Gl6yd",link:"collection-links_link__jlTO7",actual:"collection-links_actual__qFxKF"}},4620:function(e){e.exports={container:"user-menu_container__TLN9_",active:"user-menu_active__IW4ud",btn:"user-menu_btn__6QT06",menu:"user-menu_menu__fL6MV",icon:"user-menu_icon__nzHXn",imgContainer:"user-menu_imgContainer__2pBAd",link:"user-menu_link__Kekti"}},7733:function(e){e.exports={item:"panel-item_item__u1rG3",actual:"panel-item_actual__1hbDi",s_uiM:"panel-item_s_uiM__aR32a",s_uiDesk:"panel-item_s_uiDesk__iFeGy"}}}]);