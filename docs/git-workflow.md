# Git Workflows

This project utilizes the following Git hooks and GitHub workflows for a smooth development experience, to ensure code quality and to maintain a clean codebase with a proper CI/CD pipeline.

## Git Hooks

### Pre-Commit Hook

The pre-commit hook is used to run the linting and formatting scripts before committing the code. This ensures that the code is properly formatted and follows the linting rules.

### Commit Message Hook

The commit message hook is used to validate the commit message. The commit message must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
The rules and restrictions for the commit message are as follows:

-   The commit message must be in the following format:

```md
<type>(<scope>): <subject>
```

-   The commit message must be at least 10 characters long.
-   The commit message must not be more than 100 characters long.
-   The case of the commit message must be lower-case.
-   The commit message must not end with a period.
-   The commit message must not be empty.
-   The commit message must always have the following types: `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test`, `config`.

Description of the commit message format:

-   `<type>`: The type of the commit. For example, `feat` for a new feature, `fix` for a bug fix, `docs` for documentation changes, etc.
-   `<scope>`: The scope of the commit. For example, `home`, `about`, `contact`, etc.
-   `<subject>`: The subject of the commit. For example, `add dark mode support`, `fix broken links`, `update documentation`, etc.

Rules for the commit message format:

```md
build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

docs: Documentation only changes

feat: A new feature

fix: A bug fix

perf: A code change that improves performance

refactor: A code change that neither fixes a bug nor adds a feature

style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

test: Adding missing tests or correcting existing tests

config: Changes to configuration files
```

## GitHub Workflows

### Build and Test Workflow

The build and test workflow is used to build and test the project. The workflow is triggered on:

-   Every push to the `master` branch.
-   Every push to the `dev` branch.
-   Every pull request to the `master` branch.

### Format and Lint Workflow

The format and lint workflow is used to format and lint the project. The workflow is triggered on:

-   Every push to the `master` branch.
-   Every pull request to the `master` branch.
