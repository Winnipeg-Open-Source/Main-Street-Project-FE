import { memo } from 'react';
import styled from 'styled-components';
import { getPaletteColor } from 'pcln-design-system';

const Spinner = styled('div')`
    width: 50px;
    height: 50px;
    border: 6px solid ${getPaletteColor('background.light')};
    border-top: 6px solid ${getPaletteColor('primary.base')};
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

export default memo(Spinner);
