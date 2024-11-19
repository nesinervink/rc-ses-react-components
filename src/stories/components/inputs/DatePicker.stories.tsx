import { Meta, StoryContext, StoryFn } from '@storybook/react'

import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const meta: Meta<typeof RcSesDatepicker> = {
  title: 'components/common/inputs/DatePicker',
  component: RcSesDatepicker,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesDatepicker> = (args) => (
  <Fields>
    <FieldView>{/* <RcSesTextField {...args} /> */}</FieldView>

    <FieldPreviewRow>
      {/* <PreviewTitle>State previews label on side</PreviewTitle>
      <RcSesTextField label='Label' />
      <RcSesTextField
        errors={{ message: 'Klaidos pranešimas', type: 'required' }}
        label='Label'
      />
      <RcSesTextField disabled label='Label' /> */}
    </FieldPreviewRow>

    <FieldPreviewRow>
      <PreviewTitle>State previews label on top</PreviewTitle>
    </FieldPreviewRow>
  </Fields>
)

const codeBlock = (args: any) => {
  const { slotProps, disabled, label } = args
  return `
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    <RcSesTextField label="${label}" slotProps=${slotProps.wrapper.labelOnTop ? '{{ wrapper: { labelOnTop: true } }}' : '{{ wrapper: { labelOnTop: false} }}'} disabled="${disabled}" />
  );`
}

export const Main = Template.bind({})
Main.args = {
  label: 'label',
  disabled: false,
  slotProps: { wrapper: { labelOnTop: false } },
}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => {
        return codeBlock(storyContext.args)
      },
    },
  },
}
