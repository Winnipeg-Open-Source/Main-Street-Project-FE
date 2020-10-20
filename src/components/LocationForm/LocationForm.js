import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';
import Input from 'components/Input';
import Select from 'components/Select';

function LocationForm ({
    className,
    type,
    name,
    description,
    address,
    onChange,
    onSaveClick,
    onCancelClick,
}) {
    return (
        <Form
            className={className}
            onSaveClick={onSaveClick}
            onCancelClick={onCancelClick}
        >
            <Select
                id='location-type'
                placeholder='Location Type'
                name='type'
                value={type}
                onChange={onChange}
            >
                <option>Storage</option>
                <option>Fridge</option>
                <option>Freezer</option>
            </Select>
            <Input
                id='name'
                name='name'
                placeholder='Name'
                value={name}
                onChange={onChange}
            />
            <Input
                id='description'
                name='description'
                placeholder='Description'
                value={description}
                onChange={onChange}
            />
            <Input
                id='address'
                name='address'
                placeholder='Address'
                value={address}
                onChange={onChange}
            />
        </Form>
    );
}

LocationForm.displayName = 'LocationForm';

LocationForm.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['Storage', 'Fridge', 'Freezer']),
    name: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    onChange: PropTypes.func,
    onSaveClick: PropTypes.func,
    onCancelClick: PropTypes.func,
};

LocationForm.defaultProps = {
    className: '',
};

export default memo(LocationForm);
