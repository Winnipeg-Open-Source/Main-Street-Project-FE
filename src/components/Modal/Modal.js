import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, mediaQueries } from 'pcln-design-system';
import { Modal as PCLNModal } from 'pcln-modal';
import ModalHeader from 'components/ModalHeader';
import ModalFooter from 'components/ModalFooter';

const StyledModal = styled(PCLNModal)`
    max-width: 100%;
    height: 100%;

    & > div {
        & > :last-child {
            height: 100%;
            padding: 0;
        }
    }

    ${mediaQueries.sm} {
        max-width: calc(100% - 32px);
        height: auto;
    }
`;

const ContentWrapper = styled(Flex)`
    flex-direction: column;
    height: 100%;

    & > :first-child {
        overflow-y: scroll;
        flex: 1;
    }

    ${mediaQueries.sm} {
        min-height: 150px;
        max-height: 400px;
        height: auto;
    }
`;

/* istanbul ignore next */
const OVERLAY_ANIMATIONS = (state) => `
    opacity: 0;
    transition: opacity .25s ease-out;
    ${state === 'entering' ? `opacity: 0;` : ''}
    ${state === 'entered' ? `opacity: 1;` : ''}
    ${state === 'exiting' ? `opacity: 1;` : ''}
    ${state === 'exited' ? `opacity: 0;` : ''}
`;

/* istanbul ignore next */
const DIALOG_ANIMATIONS = (state) => `
    transform: translate(-100%);
    transition: transform .25s ease-out;
    ${state === 'entering' ? `transform: translate(-100%);` : ''}
    ${state === 'entered' ? `transform: translate(0);` : ''}
    ${state === 'exiting' ? `transform: translate(-100%);` : ''}
    ${state === 'exited' ? `transform: translate(-100%);` : ''}
`;

function Modal ({
    className,
    isMobile,
    isOpen,
    hasFooter,
    title,
    subtitle,
    children,
    onClose,
}) {
    return (
        <StyledModal
            className={className}
            disableCloseButton
            isOpen={isOpen}
            timeout={250}
            color='background.lightest'
            width={['100%', null, '640px']}
            header={
                <ModalHeader
                    title={title}
                    subtitle={subtitle}
                    onClose={onClose}
                />
            }
            overlayAnimation={isMobile ? OVERLAY_ANIMATIONS : null}
            dialogAnimation={isMobile ? DIALOG_ANIMATIONS : null}
            onClose={onClose}
        >
            <ContentWrapper p={3}>
                {children}
                {hasFooter && <ModalFooter onClose={onClose} />}
            </ContentWrapper>
        </StyledModal>
    );
}

Modal.displayName = 'Modal';

Modal.propTypes = {
    className: PropTypes.string,
    isMobile: PropTypes.bool,
    isOpen: PropTypes.bool,
    hasFooter: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node,
    onClose: PropTypes.func,
};

Modal.defaultProps = {
    className: '',
};

export default Modal;
