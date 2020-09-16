import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import Page from './Page';

function PageSkeleton ({ className, children }) {
    return (
        <Page
            className={className}
            title={<Skeleton width={200} height={29} />}
            renderAction={() => <Skeleton width={100} height={29} />}
        >
            {children}
        </Page>
    );
}

PageSkeleton.displayName = 'PageSkeleton';

PageSkeleton.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

PageSkeleton.defaultProps = {
    className: '',
};

export default memo(PageSkeleton);
