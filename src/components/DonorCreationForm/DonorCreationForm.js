import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Checkbox, Label } from 'pcln-design-system';
import Form from 'components/Form';
import AddressForm from 'components/AddressForm';
import Input from 'components/Input';
import useForm from 'hooks/useForm';

const initialState = {
    name: null,
    address: null,
    city: 'Winnipeg',
    province: 'MB',
    postalCode: null,
    phoneNumber: null,
    email: null,
    isSubscribed: false,
};

const StyledLabel = styled(Label)`
    display: flex;
    align-items: center;
`;

function DonorCreationForm ({ className, onSaveClick, onCancelClick }) {
    const { state, onChange, onToggle } = useForm(initialState);
    const {
        name,
        address,
        city,
        province,
        postalCode,
        phoneNumber,
        email,
        isSubscribed,
    } = state;

    const handleSave = () => onSaveClick(state);

    return (
        <Form
            className={className}
            onSaveClick={handleSave}
            onCancelClick={onCancelClick}
        >
            <Input
                id='name'
                name='name'
                placeholder='Name'
                value={name}
                onChange={onChange}
            />
            <AddressForm
                address={address}
                city={city}
                province={province}
                postalCode={postalCode}
                onAddressChange={onChange}
                onCityChange={onChange}
                onProvinceChange={onChange}
                onPostalCodeChange={onChange}
            />
            <Input
                id='phone-number'
                name='phoneNumber'
                placeholder='Phone Number'
                value={phoneNumber}
                onChange={onChange}
            />
            <Input
                id='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={onChange}
            />
            <StyledLabel fontSize={0}>
                <Checkbox
                    id='newsletter'
                    name='isSubscribed'
                    chekced={isSubscribed}
                    onChange={onToggle}
                />
                Subscribe to Email Newsletter
            </StyledLabel>
        </Form>
    );
}

DonorCreationForm.displayName = 'DonorCreationForm';

DonorCreationForm.propTypes = {
    className: PropTypes.string,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

DonorCreationForm.defaultProps = {
    className: '',
};

export default memo(DonorCreationForm);
