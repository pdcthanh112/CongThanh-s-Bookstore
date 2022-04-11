import React, { useState } from 'react';
import './pagination.scss';
import { Pagination as Paging, Stack } from '@mui/material';

const Pagination = ({ resultPerPage, totalResult, paginate }) => {
    const pageNumbers = Math.ceil(totalResult / resultPerPage);
   const [currentPage, setCurrentPage] = useState(paginate)
    const handleChangePage = (page) => {
        setCurrentPage(page);
    }

    return (
        <div className='pagination'>
            <Stack spacing={2}>
                <Paging count={pageNumbers} shape="rounded" showFirstButton showLastButton onChange={(e) => handleChangePage(e.target.textContent)}/>
            </Stack>
        </div>
    );
};

export default Pagination;
