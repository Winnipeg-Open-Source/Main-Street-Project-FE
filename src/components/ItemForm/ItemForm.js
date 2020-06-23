import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Form from 'components/Form';

function ItemForm ({ className, onSaveClick, onCancelClick }) {
    return (
        <Form className={className} onSaveClick={onSaveClick} onCancelClick={onCancelClick}>
            Test
        </Form>
    );
}

ItemForm.displayName = 'ItemForm';

ItemForm.propTypes = {
    className: PropTypes.string,
};

ItemForm.defaultProps = {
    className: '',
};

export default memo(ItemForm);
