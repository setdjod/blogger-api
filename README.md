# Blogger API

This app for testing blogger api

## Deploy directly to Heroku (requires login):

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

### Manual Instructions

1 . Clone repository and `cd` into the folder.

2 . Install dependencies

```bash
npm install
```

3 . Create a `.env` file in the root folder and enter your credentials:

```env
# https://www.blogger.com/feeds
# http://BLOG_NAME.blogspot.com/feeds
API_URL=
BLOG_ID=
```

Default:

```env
API_URL=https://www.blogger.com/feeds
BLOG_ID=6732289991114793651
```

4 . Start the server by running the start script:

```bash
npm start
```

5 . Make your API-requests to [`http://localhost:3000`](http://localhost:3000) instead.

### Manual Deploy

1 . Create an account on **[https://heroku.com](https://heroku.com)**. This should be pretty straight forward.

2 . Install the Heroku CLI on your computer:
**[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)**.

Check that you have the `heroku-cli` installed by checking the version number in your terminal:

```bash
heroku --version
```

3 . Connect the `Heroku CLI` to your account by writing the following command in your terminal and follow the instructions on the command line:

```bash
heroku login
```

_Use your credentials from the earlier account creation._

4 . Then create a remote heroku project, kinda like creating a git repository on GitHub. This will create a project on Heroku with a random name. If you want to name your app you have to supply your own name like `heroku create project-name`. The command below will just create a random name:

```bash
heroku create
```

5 . Push your app to __Heroku__ like pushing to GitHub expect for `origin` you have `heroku` (you will see a wall of code).

```bash
git push heroku master
```

6 . Visit your newly create app by opening it via heroku:

```bash
heroku open
```

7 . Visit your newly create app by opening it via heroku:

```bash
heroku config:set API_URL=XXX
heroku config:set BLOG_ID=XXX
```

If you are getting errors you can view the error logs by running this command:

```bash
heroku logs --tail
```

This might give you a hint on what's wrong.
