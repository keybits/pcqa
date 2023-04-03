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


<h2>Choices</h2>
{#each data.children as question}
    <p><a href={`/question/${question.questionId}`}>{question.question}</a></p>
{/each}
</div>


