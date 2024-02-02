/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text, TextField } from "@aws-amplify/ui-react";
import { useNavigate } from "react-router-dom";
export default function MarketingFooterBrand(props) {
  const { overrides, ...rest } = props;
  const history = useNavigate()
  const [email, setEmail] = React.useState("");
  const [isValidEmail, setIsValidEmail] = React.useState(true);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    // Validate email using a regular expression
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value));
  };

  const handleSubmit = async () => {
    // Check if the email is valid before making API call
    if (isValidEmail) {
      try {
        // Make an API call to save the email (replace with your API endpoint)
        // Example using fetch:
        const response = await fetch("https://tdxtxi7tph.execute-api.ap-south-1.amazonaws.com/dev/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          // API call successful, perform redirection or show success message
          history("/ThankYouCard");
          
         
        } else {
          
        }
      } catch (error) {
        console.error("API call error:", error);
       
      }
    } else {
      
    }
  };
  return (
    <Flex
      gap="32px"
      direction="column"
      width="1440px"
      height="358px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="40px 40px 40px 40px"
      backgroundColor="rgba(233,249,252,1)"
      {...getOverrideProps(overrides, "MarketingFooterBrand")}
      {...rest}
    >
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="space-between"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 313")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 434")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="30px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="471px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Book a Demo"
            {...getOverrideProps(overrides, "Book a Demo")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="471px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="No spam. We promise."
            {...getOverrideProps(overrides, "No spam. We promise.")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 435")}
        >
          <TextField
          width="300px"
          height="unset"
          placeholder="Your email"
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          onChange={handleEmailChange}
          value={email}
          // Add a class to visually indicate the validity of the email
          className={isValidEmail ? "" : "invalid-email"}
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
          <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={!isValidEmail} // Disable the button if the email is not valid
          variation="primary"
          onClick={handleSubmit}
          children="Submit"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        </Flex>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 40539414056")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 40539414069")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="600"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Company"
            {...getOverrideProps(overrides, "Company")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="About us"
            {...getOverrideProps(overrides, "About us")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Contact"
            {...getOverrideProps(overrides, "Contact")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(4,125,149,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="272px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Blog"
            {...getOverrideProps(overrides, "Blog")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="0"
        direction="row"
        width="419px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(102,112,133,1)"
          lineHeight="24px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="© 2024 ReturnSage. All rights reserved."
          {...getOverrideProps(
            overrides,
            "\u00A9 2024 ReturnSage. All rights reserved."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
