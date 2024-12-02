import { Typography } from '@mui/material';
import { Meta, StoryContext, StoryFn } from '@storybook/react';
import { useForm } from 'react-hook-form';



import RcSesAccordion from '@/components/common/Accordion';
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController';
import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover';
import RcSesFileUpload from '@/components/form/inputs/FileUpload';
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper';
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup';
import RcSesSearchableField from '@/components/form/inputs/SearchableField';
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer';
import ServiceHeader from '@/components/layout/ServiceHeader';
import ServicePage from '@/components/layout/ServicePage';
import FieldPreviewRow from '@/components/storybook/FieldPreviewRow';
import FieldView from '@/components/storybook/FieldView';
import Fields from '@/components/storybook/Fields';
import PreviewTitle from '@/components/storybook/PreviewTitle';
import ObjectIdentifierSearchModal from '@/examples/SingleStepForm/components/ObjectIdentifierSearchModal';
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel';


const meta: Meta<typeof RcSesSearchableField> = {
  title: 'components/common/inputs/SearchableField',
  component: RcSesSearchableField,
  tags: ['autodocs'],
}

export default meta


const Template: StoryFn<typeof RcSesSearchableField> = (args) => {

   const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: false,
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymo forma',
      },
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      text: '',
      multilineText: '',
      selection: '',
      phoneNo: '',
      searchable: '',
      date: null,
      dateInterval: '',
      countable: 0,
      agreement: '',
      fileUpload: '',
      anotherShortText: '',
      radioSelection1: '',
      radioSelection2: '',
      radioSelection3: '',
      radioSelection4: '',
      fileUploadMulti: '',
    },
  })

  return (
    
    
     <RcSesSearchableField
              control={control}
              id='searchable'
              errors={errors?.searchable}
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
      />
      
  )
}

export const Main = Template.bind({})
Main.args = {
  
}



