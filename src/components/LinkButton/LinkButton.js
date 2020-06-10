import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'pcln-design-system';
import Link from 'components/Link';

function LinkButton ({ className, title, path }) {
    return (
        <Link className={className} to={path}>
            <Button size='small'>
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
};

LinkButton.defaultProps = {
    className: '',
};

export default memo(LinkButton);
