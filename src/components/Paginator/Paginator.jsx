import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import './Paginator.css';
import { switchPage, loadPage } from '../../redux/cardsSlice';
import { get } from '../../api/utils';

class Paginator extends React.Component {
    render() {
        return (
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={this.props.pagesCount}
                marginPagesDisplayed={5}
                pageRangeDisplayed={1}
                onPageChange={(e) => {
                    this.props.switchPage(e.selected + 1);
                    get(
                        `https://rickandmortyapi.com/api/character/?page=${
                            e.selected + 1
                        }`
                    ).then((x) => {
                        this.props.loadPage(x.data);
                    });
                }}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        );
    }
}
const mapDispatchToProps = { switchPage, loadPage };
const mapStateToProps = (state) => {
    return { pagesCount: state.cards.pages, currentPage: state.cards.currentPage };
};

export default connect(mapStateToProps, mapDispatchToProps)(Paginator);
