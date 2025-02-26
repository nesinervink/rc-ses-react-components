import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import ServiceFormActions from '@/components/layout/ServiceFormActions'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'

import AdditionalServicesForm from './components/AdditionalServicesForm'
import BasicInformationForm from './components/BasicInformationForm'
import ServiceDetailsForm from './components/ServiceDetailsForm'
import ServiceIssuanceForm from './components/ServiceIssuanceForm'
import TermsAndConditionsForm from './components/TermsAndConditionsForm'

function MultipleStepForm() {
  const navigate = useNavigate()

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

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            { label: 'Formos su vedliu pavyzdys', path: '/sample-form-multiple-steps' },
          ],
        }}
        title='Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą'
      >
        <Typography variant='body1'>
          Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </ServiceHeader>

      <RcSesServiceFormContainer
        accordionController={accordionController}
        showProgressStepper
        slotProps={{ container: { maxWidth: 'lg' } }}
      >
        <RcSesAccordion id='basicInformation' controller={accordionController}>
          <BasicInformationForm />
        </RcSesAccordion>

        <RcSesAccordion id='serviceDetails' controller={accordionController}>
          <ServiceDetailsForm />
        </RcSesAccordion>

        <RcSesAccordion id='serviceIssuance' controller={accordionController}>
          <ServiceIssuanceForm />
        </RcSesAccordion>

        <RcSesAccordion id='additionalServices' controller={accordionController}>
          <AdditionalServicesForm />
        </RcSesAccordion>

        <RcSesAccordion id='termsAndConditions' controller={accordionController}>
          <TermsAndConditionsForm />
        </RcSesAccordion>

        <ServiceFormActions
          onDiscard={() => navigate('/')}
          onSaveDraft={() => navigate('/')}
          onSubmit={() => navigate('/')}
        />
      </RcSesServiceFormContainer>
    </ServicePage>
  )
}

export default MultipleStepForm
