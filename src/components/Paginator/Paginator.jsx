import React from 'react';
import ReactPaginate from 'react-paginate';
import './Paginator.css';
import { switchPage, loadPage } from '../../redux/cardsSlice';
import { get } from '../../api/utils';
import { useSelector, useDispatch } from 'react-redux';

const Paginator = () => {
    const dispatch = useDispatch();
    const { pagesCount } = useSelector((state) => state.cards);
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
                get(
                    `https://rickandmortyapi.com/api/character/?page=${
                        e.selected + 1
                    }`
                ).then((x) => {
                    dispatch(loadPage(x.data));
                });
            }}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
        />
    );
};

export default Paginator;
