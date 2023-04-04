import { getQuestionById, getChildren, getParent, updateQuestion, addQuestion, deleteQuestion } from '$lib/server/db';
import { error, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (({params}) => {
    const questionId = parseInt(params.questionId);

    if (!questionId) {
        throw error(404, "Question not found");
    }

    const singleParent = getParent(questionId);

    if (!singleParent) {
        throw error(404, "Parent not found");
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
        question, children, singleParent, parents
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    updateQuestion: async ({ request }) => {
        const data = await request.formData();

        const questionIdStr = data.get('questionId')?.toString();
        const questionId = questionIdStr ? parseInt(questionIdStr) : null;
        const question = data.get('question')?.toString();

        if (!(questionId && question)) {
            throw error(400, 'QuestionId or question missing');
        }

        updateQuestion(questionId, question);
    },
    addQuestion: async ({ request }) => {
        const data = await request.formData();

        const question = data.get('question')?.toString();
        // Use the questionId of the page to create the parentId for the new item
        const parentIdStr = data.get('questionId')?.toString();
        const parentId = parentIdStr ? parseInt(parentIdStr) : null;

        if (!(question && parentId)) {
            throw error(400, 'question or parentId missing');
        }

        addQuestion(question, parentId);
    },
    deleteQuestion: async ({ request }) => {
        const data = await request.formData();
        
        const questionIdStr = data.get('questionId')?.toString();
        const questionId = questionIdStr ? parseInt(questionIdStr) : null;
        const parentIdStr = data.get('parentId')?.toString();
        const parentId = parentIdStr ? parseInt(parentIdStr) : null;

        if (!(questionId)) {
            throw error(400, 'questionId missing');
        }

        deleteQuestion(questionId);
        throw redirect(303, '/question/' + parentId)
    }
};
