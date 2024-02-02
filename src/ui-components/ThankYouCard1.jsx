/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { useNavigate } from "react-router-dom";
import { Button,Flex, Text, View } from "@aws-amplify/ui-react";
export default function ThankYouCard1(props) {
  const { overrides, ...rest } = props;
  const history = useNavigate();

  const handleButtonClick = () => {
    history("/");
  };
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="1062px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="5px"
      padding="30px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ThankYouCard1")}
      {...rest}
    >
      <Flex
        gap="73px"
        direction="column"
        width="567px"
        height="322px"
        justifyContent="flex-start"
        alignItems="flex-start"
        overflow="hidden"
        shrink="0"
        position="relative"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.10000000149011612)"
        borderRadius="8px"
        padding="40px 50px 40px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame3850746")}
      >
        <View
          width="585.78px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame3850747")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="24px"
            fontWeight="700"
            color="rgba(31,41,55,1)"
            lineHeight="32px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="128px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 64px - -0.11px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Thank You!"
            {...getOverrideProps(overrides, "Thank You!")}
          ></Text>
        </View>
        <View
          width="585.78px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame3850749")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(75,85,99,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="474px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 237px - -5.11px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Thank you for booking. Our team will contact you within 48 hours."
            {...getOverrideProps(
              overrides,
              "Thank you for booking. Our team will contact you within 48 hours."
            )}
          ></Text>
        </View>
        <View
          width="585.78px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame3850751")}
        >
          <View
            width="205px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="calc(50% - 102.5px - 0.39px)"
            borderRadius="9999px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(0,139,194,1)"
            {...getOverrideProps(overrides, "Frame3849741")}
          >
            <Button
              width="100%"
              height="100%"
              shrink="0"
              size="default"
              isDisabled={false}
              variation="primary"
              onClick={handleButtonClick}
            >
              <Text
                fontFamily="Roboto"
                fontSize="16px"
                fontWeight="700"
                color="rgba(255,255,255,1)"
                lineHeight="24px"
                textAlign="center"
                display="block"
                direction="column"
                justifyContent="unset"
                width="100%"
                height="100%"
                gap="unset"
                alignItems="unset"
                position="absolute"
                top="0px"
                left="0px"
                padding="8px 0px"
                whiteSpace="pre-wrap"
                children="Return to Homepage"
                {...getOverrideProps(overrides, "Return to Homepage")}
              ></Text>
            </Button>
          </View>
        </View>
      </Flex>
    </Flex>
  );
}
