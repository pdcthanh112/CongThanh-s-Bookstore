import React from 'react';
import './pagination.scss';
import { Pagination as Paging, Stack } from '@mui/material';

const Pagination = ({ resultPerPage, totalResult }) => {
    const pageNumbers = Math.ceil(totalResult / resultPerPage);

    return (
        <div className='pagination'>
            <Stack spacing={2}>
                <Paging count={pageNumbers} shape="rounded" showFirstButton showLastButton />
            </Stack>
        </div>
    );
};

export default Pagination;
