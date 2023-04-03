<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1>Questions</h1>

    <table class="table">
        <thead>
            <tr>
                <th>QuestionID</th>
                <th>Question</th>
                <th>ParentID</th>
            </tr>
        </thead>
        <tbody>
            {#each data.questions as question}
                <tr>
                    <td>{question.questionId}</td>
                    <td><a href={`/question/${question.questionId}`}>{question.question}</a></td>
                    <td>{question.parentId}</td>
                </tr>
            {/each}
        </tbody>
    </table>
