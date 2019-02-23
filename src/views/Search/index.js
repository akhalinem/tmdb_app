import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Routines } from 'common/api';
import { GridContainer } from '../../containers';

class Search extends Component {
	componentDidMount() {
		this.props.searchMovies(this.props.history.location.state.query);
		console.log('search componentDidMount');
	}

	componentDidUpdate() {
		const { query } = this.props.location.state;
		if (query.length == '') {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log('search componentWillReceiveProps', this.props, nextProps);
		// this.props.searchMovies(this.props.history.location.state.query);
	}

	render() {
		const { list, loading } = this.props;
		return loading ? (
			<div>
				<h1>Loading...</h1>
			</div>
		) : (
			<div style={{ flexGrow: 1, backgroundColor: '#141414' }}>
				<h1>Search</h1>
				<GridContainer data={list} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	const { loading, list } = state.movie;
	return { loading, list };
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
