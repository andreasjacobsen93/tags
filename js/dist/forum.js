module.exports=function(t){var e={};function a(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=t,a.c=e,a.d=function(t,e,s){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(s,n,function(e){return t[e]}.bind(null,n));return s},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=50)}([function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat.extend},function(t,e,a){"use strict";function s(t){return t.slice(0).sort((function(t,e){var a=t.position(),s=e.position();if(null===a&&null===s)return e.discussionCount()-t.discussionCount();if(null===s)return-1;if(null===a)return 1;var n=t.parent(),o=e.parent();return n===o?a-s:n&&o?n.position()-o.position():n?n===e?1:n.position()-s:o?o===t?-1:a-o.position():0}))}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));var s=a(14),n=a.n(s);function o(t,e,a){void 0===e&&(e={}),void 0===a&&(a={});var s=t&&t.icon(),o=a.useColor,r=void 0===o||o;return e.className=n()([e.className,"icon",s?t.icon():"TagIcon"]),t?(e.style=e.style||{},s?e.style.color=r?t.color():"":e.style.backgroundColor=t.color()):e.className+=" untagged",s?m("i",e):m("span",e)}},function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var s=a(13),n=a.n(s),o=a(9),r=a.n(o),i=a(4);function c(t,e){void 0===e&&(e={}),e.style=e.style||{},e.className="TagLabel "+(e.className||"");var a=n()(e,"link"),s=t?t.name():app.translator.trans("flarum-tags.lib.deleted_tag_text");if(t){var o=t.color();o&&(e.style.backgroundColor=e.style.color=o,e.className+=" colored"),a&&(e.title=t.description()||"",e.href=app.route("tag",{tags:t.slug()}))}else e.className+=" untagged";return m(a?r.a:"span",e,m("span",{className:"TagLabel-text"},t&&t.icon()&&Object(i.a)(t,{},{useColor:!1})," ",s))}},function(t,e){t.exports=flarum.core.compat["components/IndexPage"]},function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var s=a(13),n=a.n(s),o=a(5),r=a(2);function i(t,e){void 0===e&&(e={});var a=[],s=n()(e,"link");return e.className="TagsLabel "+(e.className||""),t?Object(r.a)(t).forEach((function(e){(e||1===t.length)&&a.push(Object(o.a)(e,{link:s}))})):a.push(Object(o.a)()),m("span",e,a)}},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Link"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e,a){"use strict";function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(t[s]=a[s])}return t}).apply(this,arguments)}a.d(e,"a",(function(){return s}))},function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var s=a(3),n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=a(17),u=a.n(c),l=function(t){function e(){return t.apply(this,arguments)||this}return Object(s.a)(e,t),e}(i()(o.a,{name:o.a.attribute("name"),slug:o.a.attribute("slug"),description:o.a.attribute("description"),color:o.a.attribute("color"),backgroundUrl:o.a.attribute("backgroundUrl"),backgroundMode:o.a.attribute("backgroundMode"),icon:o.a.attribute("icon"),position:o.a.attribute("position"),parent:o.a.hasOne("parent"),defaultSort:o.a.attribute("defaultSort"),isChild:o.a.attribute("isChild"),isHidden:o.a.attribute("isHidden"),discussionCount:o.a.attribute("discussionCount"),lastPostedAt:o.a.attribute("lastPostedAt",o.a.transformDate),lastPostedDiscussion:o.a.hasOne("lastPostedDiscussion"),isRestricted:o.a.attribute("isRestricted"),canStartDiscussion:o.a.attribute("canStartDiscussion"),canAddToDiscussion:o.a.attribute("canAddToDiscussion"),isPrimary:u()("position","parent",(function(t,e){return null!==t&&!1===e}))}))},function(t,e){t.exports=flarum.core.compat["utils/extract"]},function(t,e){t.exports=flarum.core.compat["utils/classList"]},function(t,e){},function(t,e){t.exports=flarum.core.compat["utils/mixin"]},function(t,e){t.exports=flarum.core.compat["utils/computed"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e,a){"use strict";var s=a(2),n=a(12),o=a(7),r=a(4),i=a(5);e.a={"tags/utils/sortTags":s.a,"tags/models/Tag":n.a,"tags/helpers/tagsLabel":o.a,"tags/helpers/tagIcon":r.a,"tags/helpers/tagLabel":i.a}},function(t,e){t.exports=flarum.core},function(t,e){t.exports=flarum.core.compat["components/LinkButton"]},,function(t,e){t.exports=flarum.core.compat["components/DiscussionComposer"]},function(t,e){t.exports=flarum.core.compat["models/Discussion"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionHero"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},,function(t,e,a){"use strict";var s=a(11),n=a(0),o=a.n(n),r=a(24),i=a.n(r),c=a(6),u=a.n(c),l=a(12),p=a(3),d=a(30),f=a.n(d),g=a(9),h=a.n(g),b=a(31),v=a.n(b),y=a(32),x=a.n(y),T=a(5),O=a(2),N=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var a=e.prototype;return a.oninit=function(e){t.prototype.oninit.call(this,e),this.tags=Object(O.a)(app.store.all("tags").filter((function(t){return!t.parent()}))),app.history.push("tags",app.translator.trans("flarum-tags.forum.header.back_to_tags_tooltip"))},a.view=function(){var t=this.tags.filter((function(t){return null!==t.position()})),e=this.tags.filter((function(t){return null===t.position()}));return m("div",{className:"TagsPage"},u.a.prototype.hero(),m("div",{className:"container"},m("nav",{className:"TagsPage-nav IndexPage-nav sideNav"},m("ul",null,v()(u.a.prototype.sidebarItems().toArray()))),m("div",{className:"TagsPage-content sideNavOffset"},m("ul",{className:"TagTiles"},t.map((function(t){var e=t.lastPostedDiscussion(),a=Object(O.a)(app.store.all("tags").filter((function(e){return e.parent()===t})));return m("li",{className:"TagTile "+(t.color()?"colored":""),style:{backgroundColor:t.color()}},m(h.a,{className:"TagTile-info",href:app.route.tag(t)},m("h3",{className:"TagTile-name"},t.name()),m("p",{className:"TagTile-description"},t.description()),a?m("div",{className:"TagTile-children"},a.map((function(t){return[m(h.a,{href:app.route.tag(t)},t.name())," "]}))):""),e?m(h.a,{className:"TagTile-lastPostedDiscussion",href:app.route.discussion(e,e.lastPostNumber())},m("span",{className:"TagTile-lastPostedDiscussion-title"},e.title()),x()(e.lastPostedAt())):m("span",{className:"TagTile-lastPostedDiscussion"}))}))),e.length?m("div",{className:"TagCloud"},e.map((function(t){return[Object(T.a)(t,{link:!0})," "]}))):"")))},a.oncreate=function(e){t.prototype.oncreate.call(this,e),app.setTitle(app.translator.trans("flarum-tags.forum.all_tags.meta_title_text")),app.setTitleCount(0)},e}(f.a),_=a(33),j=a.n(_),C=a(7),P=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t),e.initAttrs=function(e){t.initAttrs.call(this,e);var a=e.post.content()[0],s=e.post.content()[1];function n(t,e){return t.filter((function(t){return-1===e.indexOf(t)})).map((function(t){return app.store.getById("tags",t)}))}e.tagsAdded=n(s,a),e.tagsRemoved=n(a,s)};var a=e.prototype;return a.icon=function(){return"fas fa-tag"},a.descriptionKey=function(){return this.attrs.tagsAdded.length?this.attrs.tagsRemoved.length?"flarum-tags.forum.post_stream.added_and_removed_tags_text":"flarum-tags.forum.post_stream.added_tags_text":"flarum-tags.forum.post_stream.removed_tags_text"},a.descriptionData=function(){var t={};return this.attrs.tagsAdded.length&&(t.tagsAdded=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.attrs.tagsAdded.length,{tags:Object(C.a)(this.attrs.tagsAdded,{link:!0}),count:this.attrs.tagsAdded.length})),this.attrs.tagsRemoved.length&&(t.tagsRemoved=app.translator.transChoice("flarum-tags.forum.post_stream.tags_text",this.attrs.tagsRemoved.length,{tags:Object(C.a)(this.attrs.tagsRemoved,{link:!0}),count:this.attrs.tagsRemoved.length})),t},e}(j.a),D=a(1),I=a(34),k=a.n(I),S=a(21),w=a.n(S),A=a(14),L=a.n(A),M=a(4),H=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(t){var e=this.attrs.model,a=this.constructor.isActive(this.attrs),s=e&&e.description(),n=L()(["TagLinkButton","hasIcon",this.attrs.className,e.isChild()&&"child"]);return m(h.a,{className:n,href:this.attrs.route,style:a&&e?{color:e.color()}:"",title:s||""},Object(M.a)(e,{className:"Button-icon"}),e?e.name():app.translator.trans("flarum-tags.forum.index.untagged_link"))},e.initAttrs=function(e){t.initAttrs.call(this,e);var a=e.model;e.params.tags=a?a.slug():"untagged",e.route=app.route("tag",e.params)},e}(w.a),B=function(){Object(D.extend)(u.a.prototype,"navItems",(function(t){if(t.add("tags",m(w.a,{icon:"fas fa-th-large",href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.tags_link")),-10),!app.current.matches(N)){t.add("separator",k.a.component(),-12);var e=app.search.stickyParams(),a=app.store.all("tags"),s=this.currentTag(),n=function(a){var n=s===a;!n&&s&&(n=s.parent()===a),t.add("tag"+a.id(),H.component({model:a,params:e,active:n},null==a?void 0:a.name()),-14)};Object(O.a)(a).filter((function(t){return null!==t.position()&&(!t.isChild()||s&&(t.parent()===s||t.parent()===s.parent()))})).forEach(n);var o=a.filter((function(t){return null===t.position()})).sort((function(t,e){return e.discussionCount()-t.discussionCount()}));o.splice(0,3).forEach(n),o.length&&t.add("moreTags",m(w.a,{href:app.route("tags")},app.translator.trans("flarum-tags.forum.index.more_link")),-16)}}))},R=a(35),E=a.n(R),q=a(36),K=a.n(q),$=a(37),F=function(t){function e(){return t.apply(this,arguments)||this}return Object(p.a)(e,t),e.prototype.view=function(){var t=this.attrs.model,e=t.color();return m("header",{className:"Hero TagHero"+(e?" TagHero--colored":""),style:e?{color:"#fff",backgroundColor:e}:""},m("div",{className:"container"},m("div",{className:"containerNarrow"},m("h2",{className:"Hero-title"},t.icon()&&Object(M.a)(t,{},{useColor:!1})," ",t.name()),m("div",{className:"Hero-subtitle"},t.description()))))},e}(a.n($).a),U=function(){u.a.prototype.currentTag=function(){var t=app.search.params().tags;if(t)return app.store.getBy("tags","slug",t)},Object(D.override)(u.a.prototype,"hero",(function(t){var e=this.currentTag();return e?m(F,{model:e}):t()})),Object(D.extend)(u.a.prototype,"view",(function(t){var e=this.currentTag();e&&(t.attrs.className+=" IndexPage--tag"+e.id())})),Object(D.extend)(u.a.prototype,"setTitle",(function(){var t=this.currentTag();t&&app.setTitle(t.name())})),Object(D.extend)(u.a.prototype,"sidebarItems",(function(t){var e=this.currentTag();if(e){var a=e.color(),s=e.canStartDiscussion()||!app.session.user;a&&(t.get("newDiscussion").attrs.style={backgroundColor:a}),t.get("newDiscussion").attrs.disabled=!s,t.get("newDiscussion").children=app.translator.trans(s?"core.forum.index.start_discussion_button":"core.forum.index.cannot_start_discussion_button")}})),Object(D.extend)(K.a.prototype,"params",(function(t){t.tags=m.route.param("tags")})),Object(D.extend)(E.a.prototype,"requestParams",(function(t){t.include.push("tags"),this.params.tags&&(t.filter.q=(t.filter.q||"")+" tag:"+this.params.tags)}))},z=a(38),G=a.n(z),J=a(25),Q=a.n(J),V=function(){Object(D.extend)(G.a.prototype,"infoItems",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(C.a)(e),10)})),Object(D.extend)(Q.a.prototype,"view",(function(t){var e=Object(O.a)(this.attrs.discussion.tags());if(e&&e.length){var a=e[0].color();a&&(t.attrs.style={backgroundColor:a},t.attrs.className+=" DiscussionHero--colored")}})),Object(D.extend)(Q.a.prototype,"items",(function(t){var e=this.attrs.discussion.tags();e&&e.length&&t.add("tags",Object(C.a)(e,{link:!0}),5)}))},W=a(39),X=a.n(W),Y=a(8),Z=a.n(Y),tt=a(18),et=a.n(tt),at=a(40),st=a.n(at),nt=a(41),ot=a.n(nt),rt=a(26),it=a.n(rt),ct=a(42),ut=a.n(ct),lt=a(10),pt=a.n(lt),mt=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var a=e.prototype;return a.oninit=function(e){var a=this;t.prototype.oninit.call(this,e),this.tags=app.store.all("tags"),this.attrs.discussion?this.tags=this.tags.filter((function(t){return t.canAddToDiscussion()||-1!==a.attrs.discussion.tags().indexOf(t)})):this.tags=this.tags.filter((function(t){return t.canStartDiscussion()})),this.tags=Object(O.a)(this.tags),this.selected=[],this.filter=pt()(""),this.index=this.tags[0].id(),this.focused=!1,this.attrs.selectedTags?this.attrs.selectedTags.map(this.addTag.bind(this)):this.attrs.discussion&&this.attrs.discussion.tags().map(this.addTag.bind(this)),this.minPrimary=app.forum.attribute("minPrimaryTags"),this.maxPrimary=app.forum.attribute("maxPrimaryTags"),this.minSecondary=app.forum.attribute("minSecondaryTags"),this.maxSecondary=app.forum.attribute("maxSecondaryTags"),this.navigator=new ut.a,this.navigator.onUp((function(){return a.setIndex(a.getCurrentNumericIndex()-1,!0)})).onDown((function(){return a.setIndex(a.getCurrentNumericIndex()+1,!0)})).onSelect(this.select.bind(this)).onRemove((function(){return a.selected.splice(a.selected.length-1,1)}))},a.primaryCount=function(){return this.selected.filter((function(t){return t.isPrimary()})).length},a.secondaryCount=function(){return this.selected.filter((function(t){return!t.isPrimary()})).length},a.addTag=function(t){if(t.canStartDiscussion()){var e=t.parent();e&&-1===this.selected.indexOf(e)&&this.selected.push(e),-1===this.selected.indexOf(t)&&this.selected.push(t)}},a.removeTag=function(t){var e=this.selected.indexOf(t);-1!==e&&(this.selected.splice(e,1),this.selected.filter((function(e){return e.parent()===t})).forEach(this.removeTag.bind(this)))},a.className=function(){return"TagDiscussionModal"},a.title=function(){return this.attrs.discussion?app.translator.trans("flarum-tags.forum.choose_tags.edit_title",{title:m("em",null,this.attrs.discussion.title())}):app.translator.trans("flarum-tags.forum.choose_tags.title")},a.getInstruction=function(t,e){if(t<this.minPrimary){var a=this.minPrimary-t;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_primary_placeholder",a,{count:a})}if(e<this.minSecondary){var s=this.minSecondary-e;return app.translator.transChoice("flarum-tags.forum.choose_tags.choose_secondary_placeholder",s,{count:s})}return""},a.content=function(){var t=this,e=this.tags,a=this.filter().toLowerCase(),s=this.primaryCount(),n=this.secondaryCount();e=e.filter((function(e){var a=e.parent();return!1===a||-1!==t.selected.indexOf(a)})),s>=this.maxPrimary&&(e=e.filter((function(e){return!e.isPrimary()||-1!==t.selected.indexOf(e)}))),n>=this.maxSecondary&&(e=e.filter((function(e){return e.isPrimary()||-1!==t.selected.indexOf(e)}))),a&&(e=e.filter((function(t){return t.name().substr(0,a.length).toLowerCase()===a}))),-1===e.indexOf(this.index)&&(this.index=e[0]);var o=Math.max(it()(this.getInstruction(s,n)).length,this.filter().length);return[m("div",{className:"Modal-body"},m("div",{className:"TagDiscussionModal-form"},m("div",{className:"TagDiscussionModal-form-input"},m("div",{className:"TagsInput FormControl "+(this.focused?"focus":""),onclick:function(){return t.$(".TagsInput input").focus()}},m("span",{className:"TagsInput-selected"},this.selected.map((function(e){return m("span",{className:"TagsInput-tag",onclick:function(){t.removeTag(e),t.onready()}},Object(T.a)(e))}))),m("input",{className:"FormControl",placeholder:it()(this.getInstruction(s,n)),bidi:this.filter,style:{width:o+"ch"},onkeydown:this.navigator.navigate.bind(this.navigator),onfocus:function(){return t.focused=!0},onblur:function(){return t.focused=!1}}))),m("div",{className:"TagDiscussionModal-form-submit App-primaryControl"},m(Z.a,{type:"submit",className:"Button Button--primary",disabled:s<this.minPrimary||n<this.minSecondary,icon:"fas fa-check"},app.translator.trans("flarum-tags.forum.choose_tags.submit_button"))))),m("div",{className:"Modal-footer"},m("ul",{className:"TagDiscussionModal-list SelectTagList"},e.filter((function(e){return a||!e.parent()||-1!==t.selected.indexOf(e.parent())})).map((function(e){return m("li",{"data-index":e.id(),className:L()({pinned:null!==e.position(),child:!!e.parent(),colored:!!e.color(),selected:-1!==t.selected.indexOf(e),active:t.index===e}),style:{color:e.color()},onmouseover:function(){return t.index=e},onclick:t.toggleTag.bind(t,e)},Object(M.a)(e),m("span",{className:"SelectTagListItem-name"},ot()(e.name(),a)),e.description()?m("span",{className:"SelectTagListItem-description"},e.description()):"")}))))]},a.toggleTag=function(t){-1!==this.selected.indexOf(t)?this.removeTag(t):this.addTag(t),this.filter()&&(this.filter(""),this.index=this.tags[0]),this.onready()},a.select=function(t){t.metaKey||t.ctrlKey||-1!==this.selected.indexOf(this.index)?this.selected.length&&this.$("form").submit():this.getItem(this.index)[0].dispatchEvent(new Event("click"))},a.selectableItems=function(){return this.$(".TagDiscussionModal-list > li")},a.getCurrentNumericIndex=function(){return this.selectableItems().index(this.getItem(this.index))},a.getItem=function(t){return this.selectableItems().filter('[data-index="'+t.id()+'"]')},a.setIndex=function(t,e){var a=this.selectableItems(),s=a.parent();t<0?t=a.length-1:t>=a.length&&(t=0);var n=a.eq(t);if(this.index=app.store.getById("tags",n.attr("data-index")),m.redraw(),e){var o,r=s.scrollTop(),i=s.offset().top,c=i+s.outerHeight(),u=n.offset().top,l=u+n.outerHeight();u<i?o=r-i+u-parseInt(s.css("padding-top"),10):l>c&&(o=r-c+l+parseInt(s.css("padding-bottom"),10)),void 0!==o&&s.stop(!0).animate({scrollTop:o},100)}},a.onsubmit=function(t){t.preventDefault();var e=this.attrs.discussion,a=this.selected;e&&e.save({relationships:{tags:a}}).then((function(){app.current.matches(st.a)&&app.current.get("stream").update(),m.redraw()})),this.attrs.onsubmit&&this.attrs.onsubmit(a),this.hide()},e}(et.a),dt=function(){Object(D.extend)(X.a,"moderationControls",(function(t,e){e.canTag()&&t.add("tags",m(Z.a,{icon:"fas fa-tag",onclick:function(){return app.modal.show(mt,{discussion:e})}},app.translator.trans("flarum-tags.forum.discussion_controls.edit_tags_button")))}))},ft=a(23),gt=a.n(ft),ht=function(){Object(D.extend)(u.a.prototype,"newDiscussionAction",(function(t){var e=app.store.getBy("tags","slug",app.search.params().tags);if(e){var a=e.parent(),s=a?[a,e]:[e];t.then((function(t){return t.fields.tags=s}))}else app.composer.fields.tags=[]})),gt.a.prototype.chooseTags=function(){var t=this;app.modal.show(mt,{selectedTags:(this.composer.fields.tags||[]).slice(0),onsubmit:function(e){t.composer.fields.tags=e,t.$("textarea").focus()}})},Object(D.extend)(gt.a.prototype,"headerItems",(function(t){var e=this.composer.fields.tags||[];t.add("tags",m("a",{className:"DiscussionComposer-changeTags",onclick:this.chooseTags.bind(this)},e.length?Object(C.a)(e):m("span",{className:"TagLabel untagged"},app.translator.trans("flarum-tags.forum.composer_discussion.choose_tags_link"))),10)})),Object(D.override)(gt.a.prototype,"onsubmit",(function(t){var e=this,a=this.composer.fields.tags||[],s=a.filter((function(t){return null!==t.position()&&!t.isChild()})),n=a.filter((function(t){return null===t.position()}));!a.length||s.length<app.forum.attribute("minPrimaryTags")||n.length<app.forum.attribute("minSecondaryTags")?app.modal.show(mt,{selectedTags:a,onsubmit:function(a){e.composer.fields.tags=a,t()}}):t()})),Object(D.extend)(gt.a.prototype,"data",(function(t){t.relationships=t.relationships||{},t.relationships.tags=this.composer.fields.tags}))},bt=a(19),vt=Object(s.a)(bt.a,{"tags/addTagFilter":U,"tags/addTagControl":dt,"tags/components/TagHero":F,"tags/components/TagDiscussionModal":mt,"tags/components/TagsPage":N,"tags/components/DiscussionTaggedPost":P,"tags/components/TagLinkButton":H,"tags/addTagList":B,"tags/addTagLabels":V,"tags/addTagComposer":ht}),yt=a(20);app.initializers.add("flarum-tags",(function(t){t.routes.tags={path:"/tags",component:N},t.routes.tag={path:"/t/:tags",component:u.a},t.route.tag=function(e){return t.route("tag",{tags:e.slug()})},t.postComponents.discussionTagged=P,t.store.models.tags=l.a,i.a.prototype.tags=o.a.hasMany("tags"),i.a.prototype.canTag=o.a.attribute("canTag"),B(),U(),V(),dt(),ht()})),Object(s.a)(yt.compat,vt)},,function(t,e){t.exports=flarum.core.compat["components/Page"]},function(t,e){t.exports=flarum.core.compat["helpers/listItems"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["components/EventPost"]},function(t,e){t.exports=flarum.core.compat["components/Separator"]},function(t,e){t.exports=flarum.core.compat["states/DiscussionListState"]},function(t,e){t.exports=flarum.core.compat["states/GlobalSearchState"]},function(t,e){t.exports=flarum.core.compat.Component},function(t,e){t.exports=flarum.core.compat["components/DiscussionListItem"]},function(t,e){t.exports=flarum.core.compat["utils/DiscussionControls"]},function(t,e){t.exports=flarum.core.compat["components/DiscussionPage"]},function(t,e){t.exports=flarum.core.compat["helpers/highlight"]},function(t,e){t.exports=flarum.core.compat["utils/KeyboardNavigatable"]},,,,,,,,function(t,e,a){"use strict";a.r(e);var s=a(15);for(var n in s)"default"!==n&&function(t){a.d(e,t,(function(){return s[t]}))}(n);a(28)}]);
//# sourceMappingURL=forum.js.map