export const load = async ({ cookies }) => {
	return {
		editable: cookies.get('token')
	};
};
