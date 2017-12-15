## Serverless template

A Serverless starter project template that uses the Serverless Framework for Node.js, Webpack, Babel and Jest for testing your functions.



## Development

You can develop and test your lambda functions locally in a few different ways.


### Serverless offline

Uses serverless offline to match the API Gateway endpoint/experience:

```bash
yarn serve
```

### Test your functions

Jest is installed as the testrunner. Create your tests
as `<filename>.test.js` and then run them with:

```bash
yarn test
```

## Deploy

Assuming you've already set up your default AWS credentials (or have set a different AWS profile via [the profile field](serverless.yml#L8)):

```bash
yarn deploy
```

`yarn deploy` will deploy to `dev` environment. You can deploy to `stage` or `production`
with:

```bash
yarn deploy:stage

# -- or --

yarn deploy:production
```
