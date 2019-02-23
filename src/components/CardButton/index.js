import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import { ButtonBase, Typography } from '@material-ui/core';

import styles from './styles';

const image = {
	baseurl: 'https://image.tmdb.org/t/p/w500',
	title: 'The Movie',
	width: '80%'
};

function CardButton(props) {
	const { classes, data, history } = props;
	// console.log('CardButton', data);
	return (
		<div className={classes.root}>
			<ButtonBase
				focusRipple
				key={data.title}
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{ width: image.width }}
				onClick={() => history.push(`movie/${data.id}`, { id: data.id })}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${image.baseurl}${data.image})`,
						border: '2px solid white',
						borderRadius: 10
					}}
				/>
				<span className={classes.imageBackdrop} />
				<span className={classes.imageButton}>
					<Typography
						component='span'
						variant='subtitle1'
						color='inherit'
						className={classes.imageTitle}
					>
						{data.title}
						<span className={classes.imageMarked} />
					</Typography>
				</span>
			</ButtonBase>
		</div>
	);
}

CardButton.propTypes = {
	classes: PropTypes.object.isRequired,
	data: PropTypes.object
};

CardButton = withRouter(CardButton);
export default withStyles(styles)(CardButton);
