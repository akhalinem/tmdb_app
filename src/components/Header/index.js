import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles';
import locales from 'localize';

function Header(props) {
	const [query, setQuery] = useState('');
	const { classes, history } = props;

	const handleSearch = ({ target }) => {
		setQuery(target.value);
		history.replace(`/search?${target.value}`, { query: target.value });
	};
	console.log('header');
	locales.setLanguage('en');
	return (
		<div className={classes.root}>
			<AppBar position='fixed' color='primary'>
				<Toolbar>
					<Typography
						variant='h6'
						color='inherit'
						style={{ cursor: 'pointer' }}
						onClick={() => history.push('/')}
					>
						{locales.header.title}
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<InputBase
							placeholder='Search Movies…'
							value={query}
							onChange={handleSearch}
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput
							}}
						/>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired
};

Header = withRouter(Header);

export default withStyles(styles)(Header);
