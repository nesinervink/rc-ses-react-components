import { Divider, Typography } from '@mui/material'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Meta, StoryFn } from '@storybook/react'
import { lt } from 'date-fns/locale/lt'
import { useForm } from 'react-hook-form'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesAlert from '@/components/common/Alert'
import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover'
import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import RcSesFileUpload from '@/components/form/inputs/FileUpload'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import RcSesSelect from '@/components/form/inputs/Select'
import RcSesTextField from '@/components/form/inputs/TextField'
import RcSesServiceFormActions from '@/components/layout/ServiceFormActions'
import ServiceFormActions from '@/components/layout/ServiceFormActions'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import AdditionalServicesForm from '@/examples/MultipleStepForm/components/AdditionalServicesForm'
import BasicInformationForm from '@/examples/MultipleStepForm/components/BasicInformationForm'
import ServiceDetailsForm from '@/examples/MultipleStepForm/components/ServiceDetailsForm'
import ServiceIssuanceForm from '@/examples/MultipleStepForm/components/ServiceIssuanceForm'
import TermsAndConditionsForm from '@/examples/MultipleStepForm/components/TermsAndConditionsForm'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const meta: Meta<typeof RcSesServiceFormContainer> = {
  title: 'components/common/form/ServiceFormContainer',
  component: RcSesServiceFormContainer,
  argTypes: {
    accordionController: {
      table: {
        disable: true,
      },
    },
    showAccordionCollapseControls: {
      table: {
        disable: true,
      },
    },
    showProgressStepper: {
      table: {
        disable: true,
      },
    },
    slotProps: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesServiceFormContainer> = (args) => {
  const accordionController = useAccordionController({
    initialState: {
      basicInformation: {
        expanded: false,
        state: 'completed',
        title: 'Bazinė informacija',
      },
      serviceDetails: {
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymas',
      },
      serviceIssuance: {
        expanded: false,
        state: 'pending',
        title: 'Išdavimas',
      },
      additionalServices: {
        expanded: false,
        state: 'pending',
        title: 'Reikalingos papildomos paslaugos',
      },
      termsAndConditions: {
        expanded: false,
        state: 'pending',
        title: 'Terminai ir sąlygos',
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
    <Fields>
      <FieldView>
        <RcSesServiceFormContainer
          accordionController={accordionController}
          slotProps={{ container: { maxWidth: 'md' } }}
        >
          <RcSesAccordion id='basicInformation' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='serviceDetails' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='serviceIssuance' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='additionalServices' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='termsAndConditions' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          {/* <ServiceFormActions
          onDiscard={() => navigate('/')}
          onSaveDraft={() => navigate('/')}
          onSubmit={() => navigate('/')}
        /> */}
        </RcSesServiceFormContainer>
      </FieldView>
    </Fields>
  )
}

export const Main = Template.bind({})
Main.args = {}
