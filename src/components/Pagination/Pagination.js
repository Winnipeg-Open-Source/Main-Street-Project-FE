import React from 'react';
import { Button, Flex } from 'pcln-design-system';

const Pagination = ({
    pageDelta,
    numPages,
    currentPage,
    setCurrentPage,
}) => {
    const renderPageList = () => {
        let lowestPage = currentPage - pageDelta;
        let highestPage = currentPage + pageDelta;

        if (lowestPage < 1) {
            lowestPage = 1;
            highestPage += pageDelta - (currentPage - lowestPage)
        }

        if (highestPage > numPages) {
            highestPage = numPages;
            lowestPage -= pageDelta - (highestPage - currentPage)
        }

        if (lowestPage < 1) {
            lowestPage = 1;
        }

        const items = [];

        items.push(
            <Button key='<' size='small' disabled={lowestPage - pageDelta < 1}>{'<'}</Button>
        );

        for(let i = lowestPage; i <= highestPage; i++) {
            items.push(
                <Button key={i} onClick={() => setCurrentPage(i)} size='small' color={i === currentPage ? 'primary.light' : 'primary.base'}>{i}</Button>
            );
        }

        items.push(
            <Button key='>' size='small' disabled={highestPage + pageDelta > numPages}>{'>'}</Button>
        );

        return items;
    };


    return (
        <Flex>
            {renderPageList()}
        </Flex>
    );
};

export default Pagination;
