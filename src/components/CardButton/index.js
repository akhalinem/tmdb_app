import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

import styles from './styles';

const image = {
	baseurl: 'https://image.tmdb.org/t/p/w500',
	title: 'The Movie',
	width: '80%'
};

function CardButton(props) {
	const { classes, data, history } = props;

	return (
		<div className={classes.root}>
			<ButtonBase
				focusRipple
				key={data.title}
				className={classes.image}
				focusVisibleClassName={classes.focusVisible}
				style={{ width: image.width }}
				onClick={() => history.push(`movie/${data.id}`)}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: `url(${image.baseurl}${data.poster_path})`,
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
	classes: PropTypes.object.isRequired
};

CardButton = withRouter(CardButton);
export default withStyles(styles)(CardButton);
