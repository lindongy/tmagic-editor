import{_ as t,H as p,o as e,c as r,J as a,E as o,V as l,C as s,a as c}from"./chunks/framework.9dc51b52.js";const g=JSON.parse('{"title":"Link 链接","description":"","frontmatter":{},"headers":[],"relativePath":"form-config/fields/link.md","filePath":"form-config/fields/link.md"}'),y={name:"form-config/fields/link.md"},i=l(`<h1 id="link-链接" tabindex="-1">Link 链接 <a class="header-anchor" href="#link-链接" aria-label="Permalink to &quot;Link 链接&quot;">​</a></h1><p>用于显示，不可编辑</p><h2 id="ts-定义" tabindex="-1">TS 定义 <a class="header-anchor" href="#ts-定义" aria-label="Permalink to &quot;TS 定义&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Link</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">href</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> LinkHrefFunction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">css</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">disabledCss</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">formTitle</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">formWidth</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">displayText</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> LinkDisplayTextFunction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">form</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">FormConfig</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> LinkFormFunction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>点击查看<a href="https://github.com/Tencent/tmagic-editor/blob/master/packages/form/src/schema.ts" target="_blank" rel="noreferrer">FormItem</a>的定义</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2>`,6),D=s("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),C=s("h2",{id:"打开表单",tabindex:"-1"},[c("打开表单 "),s("a",{class:"header-anchor",href:"#打开表单","aria-label":'Permalink to "打开表单"'},"​")],-1),F=s("p",null," 在开启多选模式后，默认情况下会展示所有已选中的选项的Tag ",-1),A=l('<h2 id="input-attributes" tabindex="-1">Input Attributes <a class="header-anchor" href="#input-attributes" aria-label="Permalink to &quot;Input Attributes&quot;">​</a></h2><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>name</td><td>绑定值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>text</td><td>表单标签</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>',2);function d(h,_,m,f,u,k){const n=p("demo-block");return e(),r("div",null,[i,a(n,{type:"form",config:[{type:"link",name:"link",text:"链接",href:"https://tencent.github.io/tmagic-editor/playground/index.html#/"}]},{source:o(()=>[D]),_:1},8,["config"]),C,a(n,{type:"form",config:[{type:"link",name:"link",text:"链接",form:[{name:"text",text:"input"}]}]},{source:o(()=>[F]),_:1}),A])}const B=t(y,[["render",d]]);export{g as __pageData,B as default};
