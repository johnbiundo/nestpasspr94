# nestpasspr94

> npm install

Then:
- create top level folder called `config`
- add file `development.env` into that folder with your creds in this format:
```bash
//
// Google Oauth2 config params
//
GOOGLE_SCOPE='profile email'
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=
SESSION_SECRET=mysessionsecret
PORT=3000
```

Run app, browse to `localhost:3000/glogin`