import React from 'react';

function WithSkeleton (Skeleton, Component) {
    return function withSkeleton ({ isLoading, ...props }) {
        return isLoading ? <Skeleton {...props} /> : <Component {...props} />;
    };
}

export default WithSkeleton;
