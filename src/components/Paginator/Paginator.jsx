import React from 'react';
import ReactPaginate from 'react-paginate';
import './Paginator.css';
import { switchPage, loadPage } from '../../redux/cardsSlice';
import { fetchData } from '../../api/utils';
import { useSelector, useDispatch } from 'react-redux';
import { PAGEURL } from '../../api/urls';

const Paginator = () => {
    const dispatch = useDispatch();
    const { pagesCount } = useSelector((state) => state.cards);
    const dispatchLoadPage = (item) => {
        dispatch(loadPage(item));
    };
    return (
        <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pagesCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={1}
            onPageChange={(e) => {
                dispatch(switchPage(e.selected + 1));
                fetchData(`${PAGEURL}${e.selected + 1}`, dispatchLoadPage);
            }}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
};

export default Paginator;
