/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NavBarHeaderProps } from "./NavBarHeader";
import { HeroLayout1LightProps } from "./HeroLayout1Light";
import { HeroLayout2DefaultProps } from "./HeroLayout2Default";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { Features2x2Props } from "./Features2x2";
import { MarketingFooterBrandProps } from "./MarketingFooterBrand";
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
export declare type Desktop1OverridesProps = {
    Desktop1?: PrimitiveOverrideProps<FlexProps>;
    NavBarHeader?: NavBarHeaderProps;
    "HeroLayout1/Light"?: HeroLayout1LightProps;
    "HeroLayout2/Default"?: HeroLayout2DefaultProps;
    "How REO Optimize returns?"?: PrimitiveOverrideProps<TextProps>;
    Features2x2?: Features2x2Props;
    MarketingFooterBrand?: MarketingFooterBrandProps;
} & EscapeHatchProps;
export declare type Desktop1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Desktop1OverridesProps | undefined | null;
}>;
export default function Desktop1(props: Desktop1Props): React.ReactElement;
