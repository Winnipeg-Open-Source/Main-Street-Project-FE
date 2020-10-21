import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    Label,
    TextArea as PCLNTextArea,
    getPaletteColor,
} from 'pcln-design-system';

const StyledTextArea = styled(PCLNTextArea)`
    background-color: ${getPaletteColor('background.lightest')};
`;

function TextArea ({ className, label, ...props }) {
    return (
        <Label className={className}>
            {label}
            <StyledTextArea {...props} />
        </Label>
    );
}

TextArea.displayName = 'TextArea';

TextArea.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
};

TextArea.defaultProps = {
    className: '',
};

export default memo(TextArea);
