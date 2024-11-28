import { Meta, StoryFn } from '@storybook/react'

import RcSesAlert from '@/components/common/Alert'
import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const meta: Meta<typeof RcSesServiceFormActions> = {
  title: 'components/common/form/ServiceFormActions',
  component: RcSesServiceFormActions,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesServiceFormActions> = (args) => (
  <Fields>
    <FieldView>
      <RcSesServiceFormActions {...args} />
    </FieldView>
  </Fields>
)

export const Main = Template.bind({})
Main.args = {}
