import { Box, Button, Typography, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules'

type TFieldProps = React.InputHTMLAttributes<HTMLInputElement>
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesFileUpload(props: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesFileUpload' })

  const { control, errors, label, rules, slotProps, ...fieldProps } = props
  const { name } = fieldProps

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])

  const {
    field: { value, onChange, ...fieldControlProps },
  } = useController({
    control,
    name,
    rules,
  })

  const handleChange = (e: { target: { files: any } }) => onChange(e.target.files)

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <Button
        color={errors ? 'error' : 'grey'}
        component='label'
        fullWidth
        role={undefined}
        sx={{
          backgroundColor: 'white !important',
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'visible',
          pl: 1.25,
          pr: 0,
          position: 'relative',

          'input:focus-visible ~ .faux-button::after': {
            content: '""',
            background: 'transparent',
            border: '2px solid',
            borderColor: palette.grey[950],
            borderRadius: '.375rem',
            height: 'calc(100% + 6px)',
            left: '-3px',
            position: 'absolute',
            top: '-3px',
            width: 'calc(100% + 6px)',
            zIndex: 1,
          },
        }}
        tabIndex={-1}
        variant='outlined'
      >
        <VisuallyHiddenInput
          id={id}
          type='file'
          {...fieldProps}
          {...fieldControlProps}
          onChange={handleChange}
        />

        <Box sx={{ fontWeight: 400 }}>
          {!!value && (value as FileList)?.item(0)?.name}
        </Box>

        <Box
          className='faux-button'
          sx={{
            alignItems: 'center',
            backgroundColor: palette.grey['100'],
            borderColor: palette.grey['500'],
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            color: palette.grey['900'],
            display: 'flex',
            height: '42px',
            position: 'relative',
            px: 2,
            ':hover': {
              backgroundColor: palette.grey['200'],
            },
          }}
        >
          <UploadSimpleIcon />
          <Typography variant='body1' sx={{ fontWeight: 600, ml: 1 }}>
            {t('label')}
          </Typography>
        </Box>
      </Button>
    </RcSesFormControlWrapper>
  )
}

export default RcSesFileUpload
