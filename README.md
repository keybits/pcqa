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
1. Make sure you have a supported version of nodejs installed (minimum 16.16.0 LTS, 18.15.0 LTS or newer recommended)
1. Run `npm install`
1. Rename `.env.example` to `.env` (this currently has the db path in it: `DB_PATH=./data/questions.sqlite3`)
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

### Deploy to fly.io

This app is currently deployed to https://pcqa.fly.dev/

WORK IN PROGRESS: This is currently a proof of concept and needs refining!

To deploy your own version:

1. Make sure you have `flyctl` installed and you're signed in (see the [Fly docs](https://fly.io/docs/hands-on/install-flyctl/))
1. Run `fly launch` and choose the Organization you'd like to deploy to. Accept all the defaults.
1. Change the value of `ORIGIN` in fly.toml to be the name of the app you're deploying to on Fly
1. Run `fly deploy` and it should 'just work'!
1. TODO: make scripts/migrate.sh actually migrate the db safely
