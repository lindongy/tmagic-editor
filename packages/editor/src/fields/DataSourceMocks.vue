<template>
  <div class="m-editor-data-source-fields">
    <MagicTable :data="model[name]" :columns="columns"></MagicTable>

    <div class="m-editor-data-source-fields-footer">
      <TMagicButton size="small" type="primary" :disabled="disabled" plain @click="newHandler()">添加</TMagicButton>
    </div>

    <MFormDrawer
      ref="addDialog"
      label-width="80px"
      :title="drawerTitle"
      :config="formConfig"
      :values="formValues"
      :parentValues="model[name]"
      :disabled="disabled"
      :width="width"
      @submit="formChangeHandler"
    ></MFormDrawer>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';

import { TMagicButton, tMagicMessageBox, TMagicSwitch } from '@tmagic/design';
import { type FieldProps, type FormConfig, type FormState, MFormDrawer } from '@tmagic/form';
import type { MockSchema } from '@tmagic/schema';
import { MagicTable } from '@tmagic/table';
import { getDefaultValueFromFields } from '@tmagic/utils';

import { Services } from '@editor/type';

defineOptions({
  name: 'MEditorDataSourceMocks',
});

const props = withDefaults(
  defineProps<
    FieldProps<{
      type: 'data-source-mocks';
    }>
  >(),
  {
    disabled: false,
  },
);

const emit = defineEmits(['change']);

const services = inject<Services>('services');
const width = computed(() => globalThis.document.body.clientWidth - (services?.uiService.get('columnWidth').left || 0));

const addDialog = ref<InstanceType<typeof MFormDrawer>>();
const drawerTitle = ref('');
const formValues = ref<Record<string, any>>({});

const formConfig: FormConfig = [
  { name: 'index', type: 'hidden', filter: 'number', defaultValue: -1 },
  {
    name: 'title',
    text: '名称',
    rules: [
      {
        required: true,
        message: '请输入字段名称',
      },
      {
        required: true,
        message: '请输入名称',
      },
    ],
  },
  {
    name: 'description',
    text: '描述',
  },
  {
    name: 'enable',
    text: '启用',
    type: 'switch',
  },
  {
    name: 'data',
    text: 'mock数据',
    type: 'vs-code',
    language: 'json',
    options: inject('codeOptions', {}),
    defaultValue: '{}',
    height: '400px',
    onChange: (formState: FormState | undefined, v: string | any) => {
      if (typeof v !== 'string') return v;
      return JSON.parse(v);
    },
    rules: [
      {
        validator: ({ value, callback }) => {
          if (typeof value !== 'string') return callback();

          try {
            // 检测json是否存在语法错误
            JSON.parse(value);

            callback();
          } catch (error: any) {
            callback(error);
          }
        },
      },
    ],
  },
];

const columns = [
  {
    label: '名称',
    prop: 'title',
  },
  {
    label: '描述',
    prop: 'description',
  },
  {
    label: '是否启用',
    prop: 'enable',
    type: 'component',
    component: TMagicSwitch,
    props: (row: MockSchema) => ({
      modelValue: row.enable,
      activeValue: true,
      inactiveValue: false,
    }),
    listeners: (row: MockSchema, index: number) => ({
      'update:modelValue': (v: boolean) => {
        toggleEnable(row, v, index);
      },
    }),
  },
  {
    label: '操作',
    fixed: 'right',
    actions: [
      {
        text: '编辑',
        handler: (row: MockSchema, index: number) => {
          formValues.value = {
            ...row,
            index,
          };
          drawerTitle.value = `编辑${row.title}`;
          addDialog.value?.show();
        },
      },
      {
        text: '删除',
        buttonType: 'danger',
        handler: async (row: MockSchema, index: number) => {
          await tMagicMessageBox.confirm(`确定删除${row.title}?`, '提示');
          props.model[props.name].splice(index, 1);
          emit('change', props.model[props.name]);
        },
      },
    ],
  },
];

const newHandler = () => {
  formValues.value = {
    data: getDefaultValueFromFields(props.model.fields || []),
  };
  drawerTitle.value = '新增Mock';
  addDialog.value?.show();
};

const formChangeHandler = ({ index, ...value }: Record<string, any>) => {
  if (index > -1) {
    props.model[props.name][index] = value;
  } else {
    props.model[props.name].push(value);
  }

  addDialog.value?.hide();

  emit('change', props.model[props.name]);
};

const toggleEnable = (row: MockSchema, enable: boolean, index: number) => {
  if (enable) {
    props.model[props.name].forEach((item: MockSchema) => {
      item.enable = false;
    });
  }

  formChangeHandler({
    ...row,
    enable,
    index,
  });
};
</script>
