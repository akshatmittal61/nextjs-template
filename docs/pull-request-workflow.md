# Pull Request Workflow

All the development should be done in a branch divided on the basis of the feature. For example, if you are working on a new feature, then you should create a new branch named `feature/<feature-name>`.

The branch name should be in the following format:

```
<type>/<description>
```

The branch name should follow the following rules:

-   The branch name should be at least 10 characters long.
-   The branch name should not be more than 100 characters long.
-   The branch name should be in the following format: `<type>/<description>`.
-   The branch name should not end with a period.
-   The branch name should not be empty.
-   The branch name should always have the following types: `feature`, `fix`, `hotfix`, `chore`, `docs`, `refactor`, `test`, `config`.

Description of the branch name format:

-   `<type>`: The type of the branch. For example, `feature` for a new feature, `fix` for a bug fix, `hotfix` for a hotfix, etc.
-   `<description>`: The description of the branch. For example, `add-dark-mode-support`, `fix-broken-links`, `update-documentation`, etc.

Rules for the branch name format:

```
feature: A new feature
fix: A bug fix
hotfix: A hotfix
chore: Changes to the build process or auxiliary tools and libraries such as documentation generation
docs: Documentation only changes
refactor: A code change that neither fixes a bug nor adds a feature
test: Adding missing tests or correcting existing tests
config: Changes to configuration files
```

## Pull Request Template

The pull request template is used to create a pull request. The pull request template is located inside the `.github/pull_request_template.md` file.

The pull request template contains the following sections:

-   **Description**: The description of the pull request.
-   **Related Issues**: The related issues.
-   **Checklist**: The checklist for the pull request.
