import { Meta, ReactRenderer } from '@storybook/react';
import { default as RcSesSearchableField } from '../../../components/form/inputs/SearchableField';
import { AnnotatedStoryFn } from '@storybook/csf';
import { RegisterOptions, Control } from 'react-hook-form';
import { RcSesFormControlWrapperProps } from '../../../components/form/components/FormControlWrapper';
import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES, RefObject, ChangeEventHandler, ReactNode, Key, AriaRole, ClipboardEventHandler, CompositionEventHandler, FocusEventHandler, FormEventHandler, ReactEventHandler, KeyboardEventHandler, MouseEventHandler, DragEventHandler, TouchEventHandler, PointerEventHandler, UIEventHandler, WheelEventHandler, AnimationEventHandler, TransitionEventHandler, HTMLInputTypeAttribute, RefAttributes } from 'react';
import { TextFieldClasses, Theme, TextFieldPropsColorOverrides, TextFieldPropsSizeOverrides, InputBaseComponentProps, OutlinedInputProps, FormHelperTextProps, InputLabelProps, SelectProps } from '@mui/material';
import { SxProps } from '@mui/system';
import { OverridableStringUnion } from '@mui/types';
declare const meta: Meta<typeof RcSesSearchableField>;
export default meta;
export declare const Main: AnnotatedStoryFn<ReactRenderer, Pick<{
    name: any;
    rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
    shouldUnregister?: boolean;
    defaultValue?: any;
    control?: Control<any> | undefined;
    disabled?: boolean;
}, "disabled" | "name" | "rules" | "control"> & Pick< RcSesFormControlWrapperProps, "label" | "id" | "errors"> & {
    ModalComponent: React.JSXElementConstructor<{
        open: boolean;
        onSubmit: (value: string) => void;
        onClose: () => void;
    }>;
    slotProps?: {
        controller?: Partial<Omit<{
            name: any;
            rules?: Omit< RegisterOptions<any, any>, "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"> | undefined;
            shouldUnregister?: boolean;
            defaultValue?: any;
            control?: Control<any> | undefined;
            disabled?: boolean;
        }, "disabled" | "name" | "rules" | "control">>;
        field?: Partial<{
            ref?: ((instance: HTMLDivElement | null) => void | DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | RefObject<HTMLDivElement> | null | undefined;
            className?: string | undefined;
            style?: React.CSSProperties | undefined;
            classes?: Partial< TextFieldClasses> | undefined;
            onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
            children?: ReactNode;
            sx?: SxProps<Theme> | undefined;
            label?: ReactNode;
            slot?: string | undefined | undefined;
            select?: boolean | undefined;
            title?: string | undefined | undefined;
            key?: Key | null | undefined;
            defaultChecked?: boolean | undefined | undefined;
            defaultValue?: unknown;
            suppressContentEditableWarning?: boolean | undefined | undefined;
            suppressHydrationWarning?: boolean | undefined | undefined;
            accessKey?: string | undefined | undefined;
            autoCapitalize?: "off" | "none" | "on" | "sentences" | "words" | "characters" | undefined | (string & {}) | undefined;
            autoFocus?: boolean | undefined;
            contentEditable?: (boolean | "true" | "false") | "inherit" | "plaintext-only" | undefined;
            contextMenu?: string | undefined | undefined;
            dir?: string | undefined | undefined;
            draggable?: (boolean | "true" | "false") | undefined;
            enterKeyHint?: "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | undefined | undefined;
            hidden?: boolean | undefined | undefined;
            id?: string | undefined;
            lang?: string | undefined | undefined;
            nonce?: string | undefined | undefined;
            spellCheck?: (boolean | "true" | "false") | undefined;
            tabIndex?: number | undefined | undefined;
            translate?: "yes" | "no" | undefined | undefined;
            radioGroup?: string | undefined | undefined;
            role?: AriaRole | undefined;
            about?: string | undefined | undefined;
            content?: string | undefined | undefined;
            datatype?: string | undefined | undefined;
            inlist?: any;
            prefix?: string | undefined | undefined;
            property?: string | undefined | undefined;
            rel?: string | undefined | undefined;
            resource?: string | undefined | undefined;
            rev?: string | undefined | undefined;
            typeof?: string | undefined | undefined;
            vocab?: string | undefined | undefined;
            autoCorrect?: string | undefined | undefined;
            autoSave?: string | undefined | undefined;
            color?: OverridableStringUnion<"primary" | "secondary" | "error" | "info" | "success" | "warning", TextFieldPropsColorOverrides> | undefined;
            itemProp?: string | undefined | undefined;
            itemScope?: boolean | undefined | undefined;
            itemType?: string | undefined | undefined;
            itemID?: string | undefined | undefined;
            itemRef?: string | undefined | undefined;
            results?: number | undefined | undefined;
            security?: string | undefined | undefined;
            unselectable?: "on" | "off" | undefined | undefined;
            inputMode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined | undefined;
            is?: string | undefined | undefined;
            "aria-activedescendant"?: string | undefined | undefined;
            "aria-atomic"?: (boolean | "true" | "false") | undefined;
            "aria-autocomplete"?: "none" | "inline" | "list" | "both" | undefined | undefined;
            "aria-braillelabel"?: string | undefined | undefined;
            "aria-brailleroledescription"?: string | undefined | undefined;
            "aria-busy"?: (boolean | "true" | "false") | undefined;
            "aria-checked"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
            "aria-colcount"?: number | undefined | undefined;
            "aria-colindex"?: number | undefined | undefined;
            "aria-colindextext"?: string | undefined | undefined;
            "aria-colspan"?: number | undefined | undefined;
            "aria-controls"?: string | undefined | undefined;
            "aria-current"?: boolean | "false" | "true" | "page" | "step" | "location" | "date" | "time" | undefined | undefined;
            "aria-describedby"?: string | undefined | undefined;
            "aria-description"?: string | undefined | undefined;
            "aria-details"?: string | undefined | undefined;
            "aria-disabled"?: (boolean | "true" | "false") | undefined;
            "aria-dropeffect"?: "none" | "copy" | "execute" | "link" | "move" | "popup" | undefined | undefined;
            "aria-errormessage"?: string | undefined | undefined;
            "aria-expanded"?: (boolean | "true" | "false") | undefined;
            "aria-flowto"?: string | undefined | undefined;
            "aria-grabbed"?: (boolean | "true" | "false") | undefined;
            "aria-haspopup"?: boolean | "false" | "true" | "menu" | "listbox" | "tree" | "grid" | "dialog" | undefined | undefined;
            "aria-hidden"?: (boolean | "true" | "false") | undefined;
            "aria-invalid"?: boolean | "false" | "true" | "grammar" | "spelling" | undefined | undefined;
            "aria-keyshortcuts"?: string | undefined | undefined;
            "aria-label"?: string | undefined | undefined;
            "aria-labelledby"?: string | undefined | undefined;
            "aria-level"?: number | undefined | undefined;
            "aria-live"?: "off" | "assertive" | "polite" | undefined | undefined;
            "aria-modal"?: (boolean | "true" | "false") | undefined;
            "aria-multiline"?: (boolean | "true" | "false") | undefined;
            "aria-multiselectable"?: (boolean | "true" | "false") | undefined;
            "aria-orientation"?: "horizontal" | "vertical" | undefined | undefined;
            "aria-owns"?: string | undefined | undefined;
            "aria-placeholder"?: string | undefined | undefined;
            "aria-posinset"?: number | undefined | undefined;
            "aria-pressed"?: boolean | "false" | "mixed" | "true" | undefined | undefined;
            "aria-readonly"?: (boolean | "true" | "false") | undefined;
            "aria-relevant"?: "additions" | "additions removals" | "additions text" | "all" | "removals" | "removals additions" | "removals text" | "text" | "text additions" | "text removals" | undefined | undefined;
            "aria-required"?: (boolean | "true" | "false") | undefined;
            "aria-roledescription"?: string | undefined | undefined;
            "aria-rowcount"?: number | undefined | undefined;
            "aria-rowindex"?: number | undefined | undefined;
            "aria-rowindextext"?: string | undefined | undefined;
            "aria-rowspan"?: number | undefined | undefined;
            "aria-selected"?: (boolean | "true" | "false") | undefined;
            "aria-setsize"?: number | undefined | undefined;
            "aria-sort"?: "none" | "ascending" | "descending" | "other" | undefined | undefined;
            "aria-valuemax"?: number | undefined | undefined;
            "aria-valuemin"?: number | undefined | undefined;
            "aria-valuenow"?: number | undefined | undefined;
            "aria-valuetext"?: string | undefined | undefined;
            dangerouslySetInnerHTML?: {
                __html: string | TrustedHTML;
            } | undefined | undefined;
            onCopy?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCopyCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCut?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCutCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onPaste?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onPasteCapture?: ClipboardEventHandler<HTMLDivElement> | undefined;
            onCompositionEnd?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionEndCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionStart?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionStartCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionUpdate?: CompositionEventHandler<HTMLDivElement> | undefined;
            onCompositionUpdateCapture?: CompositionEventHandler<HTMLDivElement> | undefined;
            onFocus?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
            onFocusCapture?: FocusEventHandler<HTMLDivElement> | undefined;
            onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
            onBlurCapture?: FocusEventHandler<HTMLDivElement> | undefined;
            onChangeCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onBeforeInput?: FormEventHandler<HTMLDivElement> | undefined;
            onBeforeInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onInput?: FormEventHandler<HTMLDivElement> | undefined;
            onInputCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onReset?: FormEventHandler<HTMLDivElement> | undefined;
            onResetCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onSubmit?: FormEventHandler<HTMLDivElement> | undefined;
            onSubmitCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onInvalid?: FormEventHandler<HTMLDivElement> | undefined;
            onInvalidCapture?: FormEventHandler<HTMLDivElement> | undefined;
            onLoad?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onError?: ReactEventHandler<HTMLDivElement> | undefined;
            onErrorCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyDownCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyPressCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyUp?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onKeyUpCapture?: KeyboardEventHandler<HTMLDivElement> | undefined;
            onAbort?: ReactEventHandler<HTMLDivElement> | undefined;
            onAbortCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlay?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayThrough?: ReactEventHandler<HTMLDivElement> | undefined;
            onCanPlayThroughCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onDurationChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onDurationChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEmptied?: ReactEventHandler<HTMLDivElement> | undefined;
            onEmptiedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEncrypted?: ReactEventHandler<HTMLDivElement> | undefined;
            onEncryptedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onEnded?: ReactEventHandler<HTMLDivElement> | undefined;
            onEndedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedData?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedDataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedMetadata?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadedMetadataCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadStart?: ReactEventHandler<HTMLDivElement> | undefined;
            onLoadStartCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPause?: ReactEventHandler<HTMLDivElement> | undefined;
            onPauseCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlay?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlayCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlaying?: ReactEventHandler<HTMLDivElement> | undefined;
            onPlayingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onProgress?: ReactEventHandler<HTMLDivElement> | undefined;
            onProgressCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onRateChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onRateChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onResize?: ReactEventHandler<HTMLDivElement> | undefined;
            onResizeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeeked?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeekedCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeeking?: ReactEventHandler<HTMLDivElement> | undefined;
            onSeekingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onStalled?: ReactEventHandler<HTMLDivElement> | undefined;
            onStalledCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onSuspend?: ReactEventHandler<HTMLDivElement> | undefined;
            onSuspendCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onTimeUpdate?: ReactEventHandler<HTMLDivElement> | undefined;
            onTimeUpdateCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onVolumeChange?: ReactEventHandler<HTMLDivElement> | undefined;
            onVolumeChangeCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onWaiting?: ReactEventHandler<HTMLDivElement> | undefined;
            onWaitingCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onAuxClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onAuxClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onContextMenu?: MouseEventHandler<HTMLDivElement> | undefined;
            onContextMenuCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onDoubleClick?: MouseEventHandler<HTMLDivElement> | undefined;
            onDoubleClickCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onDrag?: DragEventHandler<HTMLDivElement> | undefined;
            onDragCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnd?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEndCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnter?: DragEventHandler<HTMLDivElement> | undefined;
            onDragEnterCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragExit?: DragEventHandler<HTMLDivElement> | undefined;
            onDragExitCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragLeave?: DragEventHandler<HTMLDivElement> | undefined;
            onDragLeaveCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragOver?: DragEventHandler<HTMLDivElement> | undefined;
            onDragOverCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDragStart?: DragEventHandler<HTMLDivElement> | undefined;
            onDragStartCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onDrop?: DragEventHandler<HTMLDivElement> | undefined;
            onDropCapture?: DragEventHandler<HTMLDivElement> | undefined;
            onMouseDown?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseDownCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseMove?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseMoveCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOut?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOutCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOver?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseOverCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUp?: MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUpCapture?: MouseEventHandler<HTMLDivElement> | undefined;
            onSelect?: ReactEventHandler<HTMLDivElement> | undefined;
            onSelectCapture?: ReactEventHandler<HTMLDivElement> | undefined;
            onTouchCancel?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchCancelCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchEnd?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchEndCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchMove?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchMoveCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchStart?: TouchEventHandler<HTMLDivElement> | undefined;
            onTouchStartCapture?: TouchEventHandler<HTMLDivElement> | undefined;
            onPointerDown?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerDownCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerMove?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerMoveCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerUp?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerUpCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerCancel?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerCancelCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerEnter?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerLeave?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOver?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOverCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOut?: PointerEventHandler<HTMLDivElement> | undefined;
            onPointerOutCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onGotPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onGotPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onLostPointerCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onLostPointerCaptureCapture?: PointerEventHandler<HTMLDivElement> | undefined;
            onScroll?: UIEventHandler<HTMLDivElement> | undefined;
            onScrollCapture?: UIEventHandler<HTMLDivElement> | undefined;
            onWheel?: WheelEventHandler<HTMLDivElement> | undefined;
            onWheelCapture?: WheelEventHandler<HTMLDivElement> | undefined;
            onAnimationStart?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationStartCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationEnd?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationEndCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationIteration?: AnimationEventHandler<HTMLDivElement> | undefined;
            onAnimationIterationCapture?: AnimationEventHandler<HTMLDivElement> | undefined;
            onTransitionEnd?: TransitionEventHandler<HTMLDivElement> | undefined;
            onTransitionEndCapture?: TransitionEventHandler<HTMLDivElement> | undefined;
            margin?: "dense" | "normal" | "none" | undefined;
            disabled?: boolean | undefined;
            name?: string | undefined;
            type?: HTMLInputTypeAttribute | undefined;
            value?: unknown;
            autoComplete?: string | undefined;
            placeholder?: string | undefined;
            required?: boolean | undefined;
            size?: OverridableStringUnion<"small" | "medium", TextFieldPropsSizeOverrides> | undefined;
            rows?: string | number | undefined;
            component?: React.ElementType | undefined;
            error?: boolean | undefined;
            fullWidth?: boolean | undefined;
            focused?: boolean | undefined;
            inputProps?: InputBaseComponentProps | undefined;
            inputRef?: React.Ref<any> | undefined;
            hiddenLabel?: boolean | undefined;
            multiline?: boolean | undefined;
            maxRows?: string | number | undefined;
            minRows?: string | number | undefined;
            InputProps?: Partial< OutlinedInputProps> | undefined;
            FormHelperTextProps?: Partial< FormHelperTextProps> | undefined;
            helperText?: ReactNode;
            InputLabelProps?: Partial< InputLabelProps> | undefined;
            SelectProps?: Partial< SelectProps> | undefined;
        }>;
        wrapper?: Partial<Omit< RcSesFormControlWrapperProps, "label" | "id" | "errors">>;
    };
} & RefAttributes<HTMLInputElement>>;
