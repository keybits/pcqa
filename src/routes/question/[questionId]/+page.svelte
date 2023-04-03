<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<h1>Question {data.question.questionId}</h1>

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

