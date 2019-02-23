import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { LightboxProps } from 'react-images';

import styles from './styles';
import { Typography } from '@material-ui/core';

const cardImage = {
	baseurl: 'https://image.tmdb.org/t/p/w500',
	title: 'The Movie',
	width: '80%',
	height: 300
};

function CardImage(props) {
	const {
		classes,
		onClick,
		image,
		hasSubtitle,
		subtitle1,
		subtitle2,
		height,
		width
	} = props;

	return (
		<div className={classes.root} style={{ cursor: 'pointer' }}>
			<div
				className={classes.image}
				style={{
					width: width || cardImage.width,
					height: height || cardImage.height
				}}
				onClick={props.onClick}
			>
				<span
					className={classes.imageSrc}
					style={{
						backgroundImage: image
							? `url(${cardImage.baseurl}${image})`
							: 'url(/assets/images/placeholder.jpg)'
					}}
				/>

				<span className={classes.imageBackdrop} />
			</div>
			{hasSubtitle ? (
				<div style={{ width: 'inherit', marginTop: 5 }}>
					{subtitle1 && (
						<Typography
							component='title'
							variant='subtitle1'
							style={{ color: 'white' }}
						>
							{subtitle1}
						</Typography>
					)}
					{subtitle2 && (
						<Typography
							component='title'
							variant='subtitle2'
							style={{ color: 'white' }}
						>
							{subtitle2}
						</Typography>
					)}
				</div>
			) : null}
		</div>
	);
}

CardImage.propTypes = {
	classes: PropTypes.object.isRequired,
	hasSubtitle: PropTypes.bool,
	subtitle1: PropTypes.string,
	subtitle2: PropTypes.string,
	image: PropTypes.string,
	onClick: PropTypes.func
};

export default withStyles(styles)(CardImage);
