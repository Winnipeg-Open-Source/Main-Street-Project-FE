import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'pcln-design-system';
import Link from 'components/Link';

function LinkButton ({ className, title, path, size, width }) {
    return (
        <Link className={className} to={path}>
            <Button size={size} width={width}>
                {title}
            </Button>
        </Link>
    );
}

LinkButton.displayName = 'LinkButton';

LinkButton.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    path: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.number,
};

LinkButton.defaultProps = {
    className: '',
    size: 'small'
};

export default memo(LinkButton);
