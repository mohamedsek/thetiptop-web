export const load = async ({ locals, parent }) => {
	// wait until layout props executed
	await parent();
	return {
		aa: 1
	};
};
