
A Serverless Framework for Node.js demo project.



## Development

### Serverless offline

Uses serverless offline to match the API Gateway endpoint/experience:

```bash
yarn serve
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
