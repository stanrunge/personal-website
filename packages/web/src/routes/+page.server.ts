import { AUTH_TOKEN } from '$env/static/private';

export const actions = {
	authenticate: async ({ request, cookies }) => {
		const data = await request.formData();

		const token = data.get('token');
		if (!token) {
			return {
				status: 400,
				body: { error: 'Missing token' }
			};
		}

		if (token !== AUTH_TOKEN) {
			return {
				status: 401,
				body: { error: 'Invalid token' }
			};
		}

		cookies.set('token', token, {
			path: '/'
		});

		return {
			success: true
		};
	}
};
