import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'pcln-design-system';
import theme from 'constants/theme.json';

const CardContainer = styled(Flex)`
    display: flex;
    flex-direction: column;
    height: 150px;
    box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        cursor: pointer;
        box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.5);
    }
`;

function Card ({ title, hexValue }) {
    return (
        <CardContainer width={150} mr={3}>
            <Flex bg={hexValue} style={{ height: 100 }} />
            <Flex flexDirection='column' color='background.lightest' p={2}>
                <Text color='text.darkest'>{title}</Text>
                <Text fontSize={1} color='text.light'>
                    {hexValue}
                </Text>
            </Flex>
        </CardContainer>
    );
}

export const Palette = () => {
    return Object.keys(theme.palette).map((key) => {
        const color = theme.palette[key];
        return (
            <Flex flexDirection='column' p={3}>
                <Text fontSize={3} mb={2}>
                    {key}
                </Text>
                <Flex>
                    {Object.keys(color).map((shade) => {
                        return <Card title={shade} hexValue={color[shade]} />;
                    })}
                </Flex>
            </Flex>
        );
    });
};

export default {
    title: 'Theme',
};
