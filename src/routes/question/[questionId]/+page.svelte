<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<p><a href="/">Home</a></p>



<h2><a href={`/question/${data.parent.questionId}`}>Previous question was: {data.parent.questionId}</a></h2>
<h2>Question {data.question.questionId}</h2>

<table class="table">
        <thead>
            <tr>
                <th>QuestionID</th>
                <th>Question</th>
                <th>ParentID</th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>{data.question.questionId}</td>
                    <td>{data.question.question}</td>
                    <td>{data.question.parentId}</td>
                </tr>

        </tbody>
    </table>

<h2>Answers</h2>

<table class="table">
        <thead>
            <tr>
                <th>QuestionID</th>
                <th>Question</th>
                <th>ParentID</th>
            </tr>
        </thead>
        <tbody>
            {#each data.children as question}
                <tr>
                    <td>{question.questionId}</td>
                    <td><a href={`/question/${question.questionId}`}>{question.question}</a></td>
                    <td>{question.parentId}</td>
                </tr>
            {/each}
        </tbody>
    </table>
