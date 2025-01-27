import { StoryObj } from '@storybook/react';
import { default as Button } from '../../../components/common/Button';
import { OverridableStringUnion } from '@mui/types';
import { ButtonPropsVariantOverrides } from '@mui/material';
import { Mock } from '@vitest/spy';
declare const meta: {
    title: string;
    component: typeof Button;
    parameters: {
        layout: string;
    };
    argTypes: {
        variant: {
            options: ( OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides> | undefined)[];
            mapping: ( OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides> | undefined)[];
            control: {
                type: "select";
                labels: ( OverridableStringUnion<"text" | "outlined" | "contained", ButtonPropsVariantOverrides> | undefined)[];
            };
            table: {
                defaultValue: {};
            };
        };
        color: {
            options: string[];
            mapping: string[];
            control: {
                type: "select";
                labels: string[];
            };
            table: {
                defaultValue: {};
            };
        };
        disabled: {
            control: {
                type: "boolean";
            };
            table: {
                defaultValue: {};
            };
        };
    };
    tags: string[];
    args: {
        children: string;
        onClick: Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const PrimaryContained: Story;
export declare const PrimaryContainedWithPrefixIcon: Story;
export declare const PrimaryContainedWithSuffixIcon: Story;
export declare const PrimaryOutlined: Story;
export declare const PrimaryOutlinedWithPrefixIcon: Story;
export declare const PrimaryOutlinedWithSuffixIcon: Story;
export declare const SecondaryContained: Story;
export declare const SecondaryOutlined: Story;
export declare const GreyContained: Story;
export declare const GreyOutlined: Story;
export declare const WarningContained: Story;
export declare const WarningOutlined: Story;
export declare const ErrorContained: Story;
export declare const ErrorOutlined: Story;
