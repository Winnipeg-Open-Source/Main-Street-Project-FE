import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'pcln-design-system';
import Input from 'components/Input';
import ProvinceSelect from 'components/ProvinceSelect';

function AddressForm ({
    address,
    city,
    province,
    postalCode,
    onAddressChange,
    onCityChange,
    onProvinceChange,
    onPostalCodeChange,
}) {
    return (
        <>
            <Input
                id='address'
                name='address'
                placeholder='Street Address'
                value={address}
                onChange={onAddressChange}
            />
            <Flex width={1}>
                <Input
                    id='city'
                    name='city'
                    placeholder='City'
                    value={city}
                    onChange={onCityChange}
                    mr={2}
                />
                <ProvinceSelect value={province} onChange={onProvinceChange} />
            </Flex>
            <Input
                id='postal-code'
                name='postalCode'
                placeholder='Postal Code'
                value={postalCode}
                onChange={onPostalCodeChange}
            />
        </>
    );
}

AddressForm.displayName = 'AddressForm';

AddressForm.propTypes = {
    address: PropTypes.string,
    city: PropTypes.string,
    province: PropTypes.string,
    postalCode: PropTypes.string,
    onAddressChange: PropTypes.func,
    onCityChange: PropTypes.func,
    onProvinceChange: PropTypes.func,
    onPostalCodeChange: PropTypes.func,
};

export default memo(AddressForm);