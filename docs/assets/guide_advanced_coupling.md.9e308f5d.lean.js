import{_ as a,H as l,o as p,c as o,J as e,V as s}from"./chunks/framework.9dc51b52.js";const m=JSON.parse('{"title":"联动原理","description":"","frontmatter":{},"headers":[],"relativePath":"guide/advanced/coupling.md","filePath":"guide/advanced/coupling.md"}'),t={name:"guide/advanced/coupling.md"},c=s("",6),r=s("",25);function D(y,F,i,A,C,d){const n=l("demo-block");return p(),o("div",null,[c,e(n,{type:"form",config:`[{
  text: '文本',
  name: 'text'
}, {
  type: 'select',
  text: '下拉选项',
  name: 'select',
  options: [
    { text: '选项1', value: 1 },
    { text: '选项2', value: 2 }
  ],
  onChange: (vm, value, { model }) => {
    model.text = value;
  }
}]`},null,8,["config"]),r])}const g=a(t,[["render",D]]);export{m as __pageData,g as default};
