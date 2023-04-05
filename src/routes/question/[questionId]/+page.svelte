<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    
    let editMode = false;
    function toggleEditMode() {
        editMode = !editMode;
    }
    let addMode = false;
    function toggleAddMode() {
        addMode = !addMode;
    }

</script>

<p><a href="/">Home</a></p>

<h2>Question {data.question.questionId}</h2>

<div>
    {#each data.parents as question}
    <p><a href={`/question/${question.questionId}`}>{question.question}</a>
    </p>
    {/each}

    {#if !editMode}
    <p>{data.question.question} <button on:click={toggleEditMode}>Edit</button></p>
    {:else}
    <form method="post">
        <input
            type="text"
            name="question"
            value={data.question.question}
            style="max-width: 50ch;"
        />
        <input type="hidden" name="questionId" value={data.question.questionId} />
        <input type="hidden" name="parentId" value={data.singleParent.parentId} />
        <button type="submit" formaction="?/updateQuestion">Update</button>
        {#if data.children.length === 0}
        <button type="submit" formaction="?/deleteQuestion">Delete</button>
        {/if}
        <button on:click={toggleEditMode}>Cancel</button>
    </form>
    {/if}

{#if data.children.length === 0}
<h2>You've reached the end of the questions</h2>
<p>Share the url and anyone with the link will see the choices you made to get here.</p>
{:else}
<h2>Choose:</h2>
{/if}
{#each data.children as question}
    <p><a href={`/question/${question.questionId}`}>{question.question}</a></p>
{/each}
{#if !addMode}
    <p><button on:click={toggleAddMode}>Add choice</button></p>
    {:else}
    <form method="post">
        <input
            type="text"
            name="question"
            placeholder="Enter new question"
            style="max-width: 50ch;"
        />
        <input type="hidden" name="questionId" value={data.question.questionId} />
        <button type="submit" formaction="?/addQuestion">Add</button>
    <button on:click={toggleAddMode}>Cancel</button>
    </form>
    {/if}
</div>


