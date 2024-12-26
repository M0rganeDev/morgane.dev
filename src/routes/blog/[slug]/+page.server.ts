import { error } from '@sveltejs/kit';

export const load = async ({ params, fetch }) => {

    const call = await fetch("/api/blog/fetch?postid=" + params.slug);
    const source = await call.text()

    if (call.status !== 200)
        error(call.status, source);

    return {
        slug: params.slug,
        status: call.status,
        content: source
    }
}
