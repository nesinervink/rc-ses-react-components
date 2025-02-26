import { default as React } from 'react';
import { DropzoneOptions } from 'react-dropzone';
import { UseControllerProps } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper';
type TControllerProps = UseControllerProps<any, any>;
type ImmediateControllerProps = 'control' | 'rules';
type TFieldProps = React.InputHTMLAttributes<HTMLInputElement>;
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name';
type TWrapperProps = RcSesFormControlWrapperProps;
type ImmediateWrapperProps = 'label' | 'errors';
type Props = Pick<TControllerProps, ImmediateControllerProps> & Pick<TFieldProps, ImmediateFieldProps> & Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string;
    slotProps?: {
        controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>;
        dropzone?: Partial<DropzoneOptions>;
        field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>;
        wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>;
    };
};
declare function RcSesFileDropzone(props: Props): import("react/jsx-runtime").JSX.Element;
export default RcSesFileDropzone;
