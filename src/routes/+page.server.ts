import { getQuestions } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (() => {
    const questions = getQuestions();

    return {
        questions
    };
}) satisfies PageServerLoad;
