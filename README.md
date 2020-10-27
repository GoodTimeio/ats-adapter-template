![build](https://github.com/GoodTimeio/ats-adapter-template/workflows/test/badge.svg?branch=main)

# GoodTime ATS Adapter Template

A boilerplate for those looking to implement [the ATS Adapter API](https://goodtime-ats-adapter.docs.stoplight.io/).

The query parameters and the headers are not commented in this Adapter template. Plase check the API docs to learn more about them, since it's easier for us to maintain all the comments in one place.

Do note that the ATS Adapter API docs is the source of truth, not this adapter template! Please make sure that the template is up to date with the API docs.
We will try our best to keep the two in sync, but being only human 😞 , we might miss a couple of things here and there. If you notice that this Adapter template is not in sync with the API docs, feel free to either let us know or submit a pull request--we prefer the latter.

If you have a suggestion or you're needing to make significant changes to the Adapter template, please bring it up to us (ping us on Slack, submit a PR, file an Issue, send us an email) so we know about your issues. This way, we can start thinking about ways to update the Adapter template to be as frictionless as possible.

## Libraries
- [Typescript](https://www.typescriptlang.org) environment for building better Javascript
    - [Clean Code](https://github.com/labs42io/clean-code-typescript/blob/master/README.md) guideline for writing great Typescript
- [Nest](https://docs.nestjs.com/) is a framework for building efficient, scalable Node.js server-side applications
- [Jest](https://jestjs.io) is a delightful JavaScript Testing Framework with a focus on simplicity.

## Pre-reqs
- Install Node v12.15.0 and NPM v6.12.0 on your machine.
- Set `GOODTIME_NPM_TOKEN` env variable to a Github developer token with read package permission. This is needed to authenticate with Github's package server.

## Running Locally
- Run in command line:
    ```bash
    $ npm i
    $ npm run dev
    ```

## Linting
- Check types and run ESLint with:
    ```bash
    $ npm run lint
    ```

## Testing
- Run tests in command line:
    ```bash
    $ npm run test
    ```

## Deploying in Production
- Make sure correct version of node & npm are installed in your prod environment.
- Set the `NODE_ENV` variable in your production environment to `production`
- Set `PORT` to the port you want the webserver to listen on. Default is 3000.
- To build:
    ```bash
    $ npm ci --only=production
    $ npm run build:clean && npm run build
    ```
- To run:
    ```bash
    $ npm run prod
    ```

## Commit Format
Pre-commit hooks are setup to enforce formatting in code as well as in commit messages. 
- Example commit message. `subject: message`
    ```$xslt
    feat: cors implmentation
    ```
- Approved subjects
    ```$xslt
    build, chore, ci, docs, feat, fix, improvement, perf, refactor, revert, style, test
    ```
Most of the time you'll be using `feat`, `fix`, `chore`, `refactor`, or `test`
