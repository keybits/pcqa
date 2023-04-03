import { getQuestionById, getChildren, getParent, updateQuestion } from '$lib/server/db';
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
        parents.unshift(parent);
        n = parent.questionId
    }

    return {
        question, children, parents
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    updateQuestion: async ({ request }) => {
        const data = await request.formData();

        const questionIdStr = data.get('questionId')?.toString();
        const questionId = questionIdStr ? parseInt(questionIdStr) : null;

        const question = data.get('question')?.toString();
        const parentIdStr = data.get('parentId')?.toString();
        const parentId = parentIdStr ? parseInt(questionIdStr) : null;


        if (!(questionId && question && parentId)) {
            throw error(400, 'QuestionId, question or parentId missing');
        }

        updateQuestion(questionId, question, parentId);
    }
};
