import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        title: 'My data',
        text: 'Hi Mom!'
    };
}) satisfies PageServerLoad;