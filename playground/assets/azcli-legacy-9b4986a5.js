System.register([],(function(e,t){"use strict";return{execute:function(){
/*!-----------------------------------------------------------------------------
       * Copyright (c) Microsoft Corporation. All rights reserved.
       * Version: 0.39.0(ff3621a3fa6389873be5412d17554294ea1b0941)
       * Released under the MIT license
       * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
       *-----------------------------------------------------------------------------*/
e("conf",{comments:{lineComment:"#"}}),e("language",{defaultToken:"keyword",ignoreCase:!0,tokenPostfix:".azcli",str:/[^#\s]/,tokenizer:{root:[{include:"@comment"},[/\s-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}],[/^-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":{token:"key.identifier",next:"@type"}}}]],type:[{include:"@comment"},[/-+@str*\s*/,{cases:{"@eos":{token:"key.identifier",next:"@popall"},"@default":"key.identifier"}}],[/@str+\s*/,{cases:{"@eos":{token:"string",next:"@popall"},"@default":"string"}}]],comment:[[/#.*$/,{cases:{"@eos":{token:"comment",next:"@popall"}}}]]}})}}}));
//# sourceMappingURL=azcli-legacy-9b4986a5.js.map
