/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout1LightOverridesProps = {
    HeroLayout1Light?: PrimitiveOverrideProps<FlexProps>;
    Left?: PrimitiveOverrideProps<FlexProps>;
    HeroMessage?: PrimitiveOverrideProps<FlexProps>;
    Message?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<TextProps>;
    Body?: PrimitiveOverrideProps<TextProps>;
    Right?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type HeroLayout1LightProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroLayout1LightOverridesProps | undefined | null;
}>;
export default function HeroLayout1Light(props: HeroLayout1LightProps): React.ReactElement;
