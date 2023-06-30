import{_ as n,H as o,o as s,c as i,J as r,E as a,C as t,a as e,V as c}from"./chunks/framework.9dc51b52.js";const B=JSON.parse('{"title":"InputNumber 计数器","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/number.md","filePath":"form-config/fields/number.md"}'),l={name:"form-config/fields/number.md"},m=t("h1",{id:"inputnumber-计数器",tabindex:"-1"},[e("InputNumber 计数器 "),t("a",{class:"header-anchor",href:"#inputnumber-计数器","aria-label":'Permalink to "InputNumber 计数器"'},"​")],-1),h=t("p",null,"仅允许输入标准的数字值，可定义范围",-1),b=t("h2",{id:"基础用法",tabindex:"-1"},[e("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),_=t("p",null," type为'number' ",-1),u=t("h2",{id:"禁用状态",tabindex:"-1"},[e("禁用状态 "),t("a",{class:"header-anchor",href:"#禁用状态","aria-label":'Permalink to "禁用状态"'},"​")],-1),p=t("p",null," disabled 属性接受一个 Boolean，设置为 true 即可禁用整个组件，也可以接受一个返回 Boolean 的函数，如果你只需要控制数值在某一范围内，可以设置 min 属性和 max 属性，不设置 min 和 max 时，最小值为 0。 ",-1),f=t("h2",{id:"步数",tabindex:"-1"},[e("步数 "),t("a",{class:"header-anchor",href:"#步数","aria-label":'Permalink to "步数"'},"​")],-1),g=t("p",null,"允许定义递增递减的步数控制",-1),x=t("p",null," 设置 step 属性可以控制步长，接受一个 Number 。 ",-1),k=c('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>text</td><td>表单标签</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean / <a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FilterFunction</a></td><td>—</td><td>false</td></tr><tr><td>min</td><td>设置计数器允许的最小值</td><td>number</td><td>—</td><td>-Infinity</td></tr><tr><td>max</td><td>设置计数器允许的最大值</td><td>number</td><td>—</td><td>Infinity</td></tr><tr><td>step</td><td>计数器步长</td><td>number</td><td>—</td><td>1</td></tr><tr><td>onChange</td><td>值变化时触发的函数</td><td><a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">OnChangeHandler</a></td><td>—</td><td>-</td></tr></tbody></table>',2);function y(N,P,T,C,I,V){const d=o("demo-block");return s(),i("div",null,[m,h,b,r(d,{type:"form",config:[{type:"number",name:"number",text:"计数器"}]},{source:a(()=>[_]),_:1}),u,r(d,{type:"form",config:[{type:"number",name:"number",text:"计数器",disabled:()=>!0}]},{source:a(()=>[p]),_:1}),f,g,r(d,{type:"form",config:[{type:"number",name:"number",text:"计数器",step:10}]},{source:a(()=>[x]),_:1}),k])}const S=n(l,[["render",y]]);export{B as __pageData,S as default};
