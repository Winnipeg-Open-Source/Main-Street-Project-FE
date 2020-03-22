import React from 'react';
import { renderHook } from '@testing-library/react-hooks';

function renderHookWithContext (hook, Context, state) {
    const wrapper = ({ children }) => <Context.Provider value={state}>{children}</Context.Provider>;
    return renderHook(hook, { wrapper: wrapper });
}

export default renderHookWithContext;
