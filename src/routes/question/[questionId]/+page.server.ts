import { getQuestionById, getChildren, getParent } from '$lib/server/db';
import { error, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (({params}) => {
    const questionId = parseInt(params.questionId);

    if (!questionId) {
        throw error(404, "Question not found");
    }

    const question = getQuestionById(questionId);

    if (!question) {
        throw error(404, "Question not found");
    }

    const children = getChildren(questionId);

    const parents = []
    let n = questionId
    while (n > 1) {
        let parent = getParent(n);
        parents.push(parent);
        n = parent.questionId
    }

    return {
        question, children, parents
    };
}) satisfies PageServerLoad;
