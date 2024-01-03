import { HStack, Icon, Text, StackProps, Box } from "@chakra-ui/react";
import React, { ElementType } from "react";
import { checkIcon } from "../icons/Icon";


interface FeatureProps extends StackProps {
    icon: ElementType;
}

export function Feature(props: FeatureProps) {
    const {icon, children, ...rest} = props;
    return (
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxSize='48px'/>
            <Text textAlign='left' fontSize='18px' fontWeight='700'>{children}</Text>
        </HStack>
    );
}

export function Features() {
    return (
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
        <HStack px='48px' spacing='20px'>
            <Feature icon={checkIcon}>
                30 days money back guarantee
            </Feature>
            <Feature icon={checkIcon}>
                No setup fees 100% hassle-free
            </Feature>
            <Feature icon={checkIcon}>
                No monthly subscription pay once and for all
            </Feature>
        </HStack>
        </Box>
    )
}