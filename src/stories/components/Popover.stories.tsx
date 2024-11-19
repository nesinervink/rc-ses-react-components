import { Meta, StoryFn } from '@storybook/react'

import RcSesPopover from '@/components/common/Popover'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const meta: Meta<typeof RcSesPopover> = {
  title: 'components/common/Popover',
  component: RcSesPopover,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesPopover> = (args) => (
  <Fields>
    <FieldView>
      <RcSesPopover {...args} />
    </FieldView>
    <FieldPreview>
      <PreviewTitle>State previews</PreviewTitle>
      {/* <RcSesPopover severity="info" title="Info">{lorem}</RcSesAlert>
      <RcSesAlert severity="warning" title="Warning">{lorem}</RcSesAlert>
      <RcSesAlert severity="error" title="Error">{lorem}</RcSesAlert>
      <RcSesAlert severity="success" title="Success">{lorem}</RcSesAlert> */}
    </FieldPreview>
  </Fields>
)

export const Main = Template.bind({})
Main.args = {
  children: lorem,
  open: true,
}
