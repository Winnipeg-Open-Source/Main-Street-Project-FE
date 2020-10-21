import React, { useState } from 'react';
import Pagination from './Pagination';

const MockPage = (props) => {
    const [ currentPage, setCurrentPage ] = useState(5)

    return <Pagination pageDelta={2} numPages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
}

export const Default = () => {
    return (
        <MockPage />
    );
};

export default {
    title: 'Pagination',
    component: Pagination,
};