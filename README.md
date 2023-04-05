# pcqa - parent child, question answer

This app presents web interface for navigating through a series of parent child relationships as represented in a database with the following structure:

| question_id | question   | parent_id |
|-------------|------------|-----------|
| 1           | Question1  | 1         |
| 2           | Question2  | 1         |
| 3           | Question3  | 1         |
| 4           | Question4  | 2         |
| 5           | Question5  | 2         |
| 6           | Question6  | 2         |
| 7           | Question7  | 3         |
| 8           | Question8  | 3         |


**Features:**  
- You can edit, add and delete questions.
- Delete is only available when a question has no children - click 'edit' to see the delete button.

**This is a learning experiment:**  
1. Use SQL techniques for a parent child tree from a single table as described in [this post](https://learnsql.com/blog/query-parent-child-tree/)
2. Learn the basics of [SvelteKit](https://kit.svelte.dev/)
3. Use a SQLite database with SvelteKit to create a 'full stack crud app'. We're using the '[better-sqlite3](https://github.com/WiseLibs/better-sqlite3)' library for node.js

## TODO

1. Fix question 1 - as it has no parent, if it's null we get errors. To work round that we currently set itself as parent, but that messes up it think it's a child of itself
1. Refactor to enable more than one 'questionnaire' (create new database table for each questionnaire and use [SvelteKit routing](https://www.thisdot.co/blog/a-deep-dive-into-sveltekit-routing-with-our-starter-dev-github-showcase) to dynamically show the correct questions.
1. Add a new field to allow question 'description' that could include links / rich text to other resources
1. Improve UI to make it clearer what to do
1. Hide edit / add buttons unless a global 'edit mode' is turned on
1. Add error handling
1. Add tests!

## Development

### How to run the app on your computer

1. Clone this repo to a directory on your computer
2. Make sure you have a supported version of nodejs installed (minimum 16.16.0 LTS, 18.15.0 LTS or newer recommended)
3. Run `npm install`
4. Create the database with `sqlite3 data/questions.sqlite3 < sql/schema.sql`
5. Run the dev server and open a new browser tab with `npm run dev -- --open`
6. Have fun editing and creating questions

### Exploring the database

[Beekeeper studio](https://github.com/beekeeper-studio/beekeeper-studio/releases) is an excellent app for exploring the database.

### Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

### Deploying

TODO: document deployment to relevant platforms - since we're using a SQLite database need to consider that.
