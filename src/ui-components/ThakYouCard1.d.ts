/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ThakYouCard1OverridesProps = {
    ThakYouCard1?: PrimitiveOverrideProps<FlexProps>;
    Frame3849735?: PrimitiveOverrideProps<FlexProps>;
    Frame3849736?: PrimitiveOverrideProps<ViewProps>;
    "Thank You!"?: PrimitiveOverrideProps<TextProps>;
    Frame3849738?: PrimitiveOverrideProps<ViewProps>;
    "Thank you for booking. Our team will contact you within 48 hours."?: PrimitiveOverrideProps<TextProps>;
    Frame3849740?: PrimitiveOverrideProps<ViewProps>;
    Frame3849741?: PrimitiveOverrideProps<ViewProps>;
    "Return to Homepage"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ThakYouCard1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ThakYouCard1OverridesProps | undefined | null;
}>;
export default function ThakYouCard1(props: ThakYouCard1Props): React.ReactElement;
