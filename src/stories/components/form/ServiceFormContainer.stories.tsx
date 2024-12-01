import { Meta, StoryFn } from '@storybook/react'
import { useForm } from 'react-hook-form'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import BasicInformationForm from '@/examples/MultipleStepForm/components/BasicInformationForm'
import SingleStepFormModel from '@/examples/SingleStepForm/types/SingleStepFormModel'

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
