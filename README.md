# Goodtime Node Template

An extensible starting point for all your projects.

This repository houses the base technology choices we endorse as an engineering organization. As such, it's a living project that will evolve as new technologies emerge or we change what we want to use. 

## Libraries
- [Typescript](https://www.typescriptlang.org) environment for building better Javascript
    - [Clean Code](https://github.com/labs42io/clean-code-typescript/blob/master/README.md) guideline for writing great Typescript
- [Nest](https://docs.nestjs.com/) is a framework for building efficient, scalable Node.js server-side applications
- [Mocha](https://mochajs.org) for an easy testing framework
- [Jest](https://jestjs.io) is a delightful JavaScript Testing Framework with a focus on simplicity.

## Starting
- Run in command line:
    ```bash
    $ npm run dev
    ```
- Run in debug mode:
   ```bash
   $ npm run dev:debug
   ```

## Testing
Testing has been split into several directories and run off the mocha framework. The test command will fun tests from the unit and integration test folders. End to end tests are run separately.

- Run unit and integration tests in command line:
    ```bash
    $ npm run test
    ```
  
 - Run end-to-end tests in command line:
     ```bash
     $ npm run test:e2e
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
