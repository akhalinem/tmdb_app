import apisauce from 'apisauce';

import config from './config';

import createRequest from './createRequest';
import Exception from './Exception';
import Routines from './routines';

// api calls
import Movie from './Movie';
import Genre from './Genre';

const create = () => {
	const api = apisauce.create(config.apisauce);

	api.addResponseTransform(responseTransformation);
	api.addRequestTransform(requestTransformation);

	api.timeout = (delay = 3000) => {
		setTimeout(() => null, delay);
	};
	return {
		movie: Movie(api),
		genre: Genre(api),
		setToken: token => {
			api.setHeader('auth', token);
		}
	};
};

const Api = create();

export { Api, createRequest, Exception, Routines };

function requestTransformation(request) {
	console.log('ReQ ', JSON.stringify(request));
	return request;
}

function responseTransformation(response) {
	console.log('ReS ', JSON.stringify(response, null, 2));

	if (!response.status) {
		throw new Exception.ClientException(response.problem);
	}

	if (response.status === 400) {
		if (response.data) {
			throw new Exception.ValidationException(response.data);
		}
		throw new Exception.BadRequestException(response.data);
	}

	if (response.status === 403) {
		throw new Exception.AccessDeniedException(response.data);
	}

	if (response.status === 404) {
		throw new Exception.NotFoundException(response.data);
	}

	if (response.status > 499) {
		throw new Exception.ServerException(response.data);
	}

	return response;
}
