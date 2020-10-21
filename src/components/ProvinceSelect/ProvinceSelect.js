import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Select from 'components/Select';

function ProvinceSelect ({ className, value, onChange }) {
    return (
        <Select
            id='province'
            className={className}
            name='province'
            value={value}
            onChange={onChange}
            data-testid='province-select'
        >
            <option value='AB'>Alberta</option>
            <option value='BC'>British Columbia</option>
            <option value='MB'>Manitoba</option>
            <option value='NB'>New Brunswick</option>
            <option value='NL'>Newfoundland and Labrador</option>
            <option value='NS'>Nova Scotia</option>
            <option value='ON'>Ontario</option>
            <option value='PE'>Prince Edward Island</option>
            <option value='QC'>Quebec</option>
            <option value='SK'>Saskatchewan</option>
            <option value='NT'>Northwest Territories</option>
            <option value='NU'>Nunavut</option>
            <option value='YT'>Yukon</option>
        </Select>
    );
}

ProvinceSelect.displayName = 'ProvinceSelect';

ProvinceSelect.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

ProvinceSelect.defaultProps = {
    className: '',
    value: 'MB',
};

export default memo(ProvinceSelect);
