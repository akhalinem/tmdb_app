import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	InputBase,
	Button,
	IconButton
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import styles from './styles';
import locales from '../../localize';

function Header(props) {
	const [query, setQuery] = useState('');
	const { classes, history, setLocale } = props;

	const handleSearch = () => {
		history.push(`/search?${query}`, { query });
	};
	const currentLang = locales.getLanguage();

	return (
		<AppBar color='primary' position='sticky'>
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
					<IconButton onClick={handleSearch}>
						<SearchIcon style={{ color: '#fff' }} />
					</IconButton>
					<InputBase
						placeholder={locales.header.search}
						value={query}
						onChange={e => setQuery(e.target.value)}
						classes={{
							root: classes.inputRoot,
							input: classes.inputInput
						}}
					/>
				</div>
				<div className={classes.grow} />
				<div>
					<Button
						variant='outlined'
						color='inherit'
						onClick={() => setLocale(currentLang == 'en' ? 'ru' : 'en')}
					>
						<Typography color='inherit'>
							{currentLang == 'en' ? 'ru' : 'en'}
						</Typography>
					</Button>
				</div>
			</Toolbar>
		</AppBar>
	);
}

Header.propTypes = {
	classes: PropTypes.object.isRequired,
	setLocale: PropTypes.func
};

Header = withRouter(Header);

export default withStyles(styles)(Header);
