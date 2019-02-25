import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';
import { GridContainer } from '../../containers';
import { Pagination } from 'components';

class Search extends Component {
	state = {
		page: 1
	};

	componentDidMount() {
		this.props.searchMovies(this.props.history.location.state.query);
	}

	// handlePagination = page => {
	// 	this.setState({ page });
	// 	this.props.searchMovies();
	// };

	render() {
		const { list } = this.props;
		return (
			<div>
				<GridContainer data={list.data} />
				{/* <Pagination page={page} onClick={page => this.handlePagination(page)} /> */}
			</div>
		);
	}
}

const mapStateToProps = ({ movie }) => {
	const { list } = movie;
	return { list };
};

const mapDispatchToProps = dispatch => {
	const { search } = Routines.movie;
	return {
		searchMovies: query => dispatch(search(query))
	};
};

Search = connect(
	mapStateToProps,
	mapDispatchToProps
)(Search);

export default Search;
