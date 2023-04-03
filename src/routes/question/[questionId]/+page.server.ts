import { getQuestionById } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (({params}) => {
    const questionId = parseInt(params.questionId);

    const question = getQuestionById(questionId);

    return {
        question
    };
}) satisfies PageServerLoad;
