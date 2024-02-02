/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type HeroLayout2DefaultOverridesProps = {
    HeroLayout2Default?: PrimitiveOverrideProps<FlexProps>;
    "Type Lock Up"?: PrimitiveOverrideProps<FlexProps>;
    "Main Body"?: PrimitiveOverrideProps<FlexProps>;
    "Do you have trouble minimizing loss from returns that eat the bottom line ?"?: PrimitiveOverrideProps<TextProps>;
    "Returnsage revolutionizes the way businesses handle returns, ensuring you no longer have to grapple with the financial setbacks caused by returns eating into your bottom line. With Returnsage, we provide an innovative Returns CoPilot that goes beyond just managing returns\u2014it's a strategic approach to minimizing loss and turning the returns process into a revenue-boosting opportunity Get started"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroLayout2DefaultProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: HeroLayout2DefaultOverridesProps | undefined | null;
}>;
export default function HeroLayout2Default(props: HeroLayout2DefaultProps): React.ReactElement;
