import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'pcln-design-system';
import ButtonGroup from 'components/ButtonGroup';

function ModalFooter ({ className, onClose }) {
    return (
        <ButtonGroup className={className} justifyContent='flex-end'>
            <Button color='background.light' onClick={onClose}>Close</Button>
            <Button>Confirm</Button>
        </ButtonGroup>
    );
}

ModalFooter.displayName = 'ModalFooter';

ModalFooter.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
};

ModalFooter.defaultProps = {
    className: '',
};

export default ModalFooter;
