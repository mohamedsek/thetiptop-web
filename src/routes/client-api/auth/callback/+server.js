import { json, redirect } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function GET({ request }) {
	//   const { a, b } = await request.json();
	return json(import.meta.env.VITE_API_BASE_URL);
}

// export async function GET({ request }) {
// 	//   const { a, b } = await request.json();
// 	throw redirect(302, '/');
// }
