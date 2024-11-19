import { Meta, StoryContext, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover'
import RcSesSearchableField from '@/components/form/inputs/SearchableField'
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import ObjectIdentifierSearchModal from '@/examples/SingleStepForm/components/ObjectIdentifierSearchModal'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const meta: Meta<typeof RcSesSearchableField> = {
  title: 'components/common/inputs/SearchableField',
  component: RcSesSearchableField,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesSearchableField> = (args) => {
  const { control } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: { searchable: '' },
  })

  return (
    <Fields>
      {/* <RcSesSearchableField
        control={control}
        id='searchable'
        // errors={errors?.searchable}
        label='Unikalus daikto Nr.'
        name='searchable'
        rules={{ required: true }}
        ModalComponent={ObjectIdentifierSearchModal}
        slotProps={{
          wrapper: {
            fieldSuffix: (
              <RcSesButtonWithPopover popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
            ),
          },
        }}
      /> */}
    </Fields>
  )
}

const codeBlock = (args: any) => {
  const {} = args
  return `
  import RcSesTextField from '@/components/form/inputs/TextField'

  const MyComponent = () => (
    
  );`
}

export const Main = Template.bind({})
Main.args = {
  id: 'searchable',
  label: 'Unikalus daikto Nr.',
  name: 'searchable',
  rules: { required: true },
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
