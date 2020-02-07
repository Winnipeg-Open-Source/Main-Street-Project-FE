import React from 'react';
import styled from 'styled-components';
import { getPaletteColor, Button } from 'pcln-design-system';
import useRoute from 'hooks/useRoute';
import { DONATIONS_NEW_PATH, REQUISITION_NEW_PATH } from "../../constants/paths";

const Container = styled.div`
    width: 100%;
    padding: 30px 15px 15px;
    box-sizing: border-box;
    background-color: ${getPaletteColor('primary.light')};
`;

const LandingButton = styled(Button)`
    width: 100%;
    box-shadow: 0 2px 5px #ccc;
    text-align: center;
    padding: 50px 0;
    color: ${getPaletteColor('primary.base')};
    border-radius: 8px;
    margin-bottom: 15px;
    font-size: 20px;
    :hover {
        background-color: ${getPaletteColor('primary.base')};
        color: ${getPaletteColor('primary.light')};
    }
`;

function Landing () {
    const onNewDonationClick = useRoute(DONATIONS_NEW_PATH);

    const onNewRequisitionClick = useRoute(REQUISITION_NEW_PATH);

    return (
        <Container>
            <LandingButton onClick={onNewDonationClick}>New Donation</LandingButton>
            <LandingButton onClick={onNewRequisitionClick}>New Requisition</LandingButton>
        </Container>
    );
}

Landing.displayName = 'Landing';

export default Landing;
