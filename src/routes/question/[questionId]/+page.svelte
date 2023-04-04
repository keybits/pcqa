<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<p><a href="/">Home</a></p>

<h2>Question {data.question.questionId}</h2>

<div>
    {#each data.parents as question}
    <p><a href={`/question/${question.questionId}`}>{question.question}</a></p>
    {/each}
    <p>{data.question.question}</p>
    <form method="post">
        <input
            class="input"
            type="text"
            name="question"
            value={data.question.question}
            style="max-width: 50ch;"
        />
        <input type="hidden" name="questionId" value={data.question.questionId} />
        <button class="button is-primary" type="submit" formaction="?/updateQuestion">Update</button>
    </form>


<h2>Choices</h2>
{#each data.children as question}
    <p><a href={`/question/${question.questionId}`}>{question.question}</a></p>
{/each}
</div>


