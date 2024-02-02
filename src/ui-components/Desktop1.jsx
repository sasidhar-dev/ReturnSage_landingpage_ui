/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import NavBarHeader from "./NavBarHeader";
import HeroLayout1Light from "./HeroLayout1Light";
import HeroLayout2Default from "./HeroLayout2Default";
import { Flex, Text } from "@aws-amplify/ui-react";
import Features2x2 from "./Features2x2";
import MarketingFooterBrand from "./MarketingFooterBrand";
export default function Desktop1(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="2659px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="30px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Desktop1")}
      {...rest}
    >
      <NavBarHeader
        display="flex"
        gap="40px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="13px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBarHeader")}
      ></NavBarHeader>
      <HeroLayout1Light
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "HeroLayout1/Light")}
      ></HeroLayout1Light>
      <HeroLayout2Default
        display="flex"
        gap="10px"
        direction="column"
        width="unset"
        height="548px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="160px 240px 160px 240px"
        backgroundColor="rgba(233,249,252,1)"
        {...getOverrideProps(overrides, "HeroLayout2/Default")}
      ></HeroLayout2Default>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.09px"
        width="unset"
        height="53px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="How REO Optimize returns?"
        {...getOverrideProps(overrides, "How REO Optimize returns?")}
      ></Text>
      <Features2x2
        display="flex"
        gap="0"
        direction="column"
        width="unset"
        height="617px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 160px 40px 160px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Features2x2>
      <MarketingFooterBrand
        display="flex"
        gap="32px"
        direction="column"
        width="unset"
        height="358px"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="40px 40px 40px 40px"
        backgroundColor="rgba(233,249,252,1)"
        {...getOverrideProps(overrides, "MarketingFooterBrand")}
      ></MarketingFooterBrand>
    </Flex>
  );
}
