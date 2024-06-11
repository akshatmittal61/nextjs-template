# Directory Structure

The directory structure of the project is as follows:

```bash
├── __tests__
│   └── HomePage.test.tsx
├── .github
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows
│       ├── build-test.yml
│       └── format-lint.yml
├── components
│   └── Card
│       ├── index.tsx
│       ├── styles.module.scss
│       └── index.test.tsx
├── config
│   └── index.ts
├── constants
|   ├── enum.constant.ts
|   ├── variables.constant.ts
│   └── index.ts
├── controllers
|   ├── user.controller.ts
│   └── index.ts
├── db
│   └── index.ts
├── docs
│   ├── directory-structure.md (this file)
│   ├── git-workflow.md
|   └── pull-request-workflow.md
├── hooks
│   ├── mouse-events.hook.ts
│   ├── store.hook.ts
│   └── index.ts
├── layouts
|   ├── index.tsx
│   └── seo.tsx
├── model
|   ├── user.model.ts
│   └── index.ts
├── pages
│   ├── api
│   │   ├── v1
│   │   │   ├── users
│   │   │   │   ├── [id].ts
│   │   │   │   └── index.ts
│   │   └── index.ts
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── _error.tsx
│   ├── index.tsx
│   ├── 404.tsx
│   └── 500.tsx
├── public
│   ├── images/
│   |   └── logo.png
│   ├── vectors/
│   |   └── logo.svg
│   ├── favicon.ico
│   └── og-image.png
├── library
│   ├── Button
│   │   ├── index.tsx
│   │   ├── styles.module.scss
│   │   └── index.test.tsx
│   ├── Input
│   │   ├── index.tsx
│   │   ├── styles.module.scss
│   │   └── index.test.tsx
│   └── index.ts
├── styles
│   ├── config/
│   │   ├── _animations.scss
│   │   ├── _base.scss
│   │   ├── _colors.scss
│   │   ├── _mixins.scss
│   │   ├── _responsive.scss
│   │   ├── _shadows.scss
│   │   ├── _shadows.scss
│   │   ├── _typography.scss
│   │   └── index.scss
│   ├── pages/
│   │   ├── Home.module.scss
│   │   ├── Error.module.scss
│   │   └── index.scss
│   └── global.scss
├── types
│   ├── user.ts
│   └── api.ts
├── .editorconfig
├── .env.example
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── jest.config.js
├── jest.setup.js
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

## Grouping by Features

The directory structure follows a hybrid approach of grouping files by features and by file types. The hybrid approach is a good balance between the two approaches and is the recommended approach for most projects.

Grouping by features is a good approach for small projects. It is also a good approach for large projects. The grouping by features approach is also known as the **Rails-style** approach.

# Frontend Directory Structure

## Pages

All the pages are located in the `pages` directory. The `pages` directory is a special directory in Next.js. All the files inside the `pages` directory are treated as pages by Next.js.

### Dynamic Routes

For dynamic routes, the file name is wrapped inside square brackets. For example, the file name `[id].tsx` is a dynamic route. The `id` parameter can be accessed using the `useRouter` hook.

### API Routes

The `api` directory is a special directory in Next.js. All the files inside the `api` directory are treated as API routes by Next.js.

## Components

The `components` directory contains all the React components. The `components` directory is further divided into sub-directories based on the feature. For example, the `Card` component is located inside the `components/Card` directory.

## Layouts

The `layouts` directory contains all the layout components. This includes the `Seo` component and other layout components like the `Header`, `Footer`, or `Sidebar` components.

## Hooks

The `hooks` directory contains all the custom hooks. The `store` hook is used to create a global store using the `useContext` hook utility.

## Library

The `library` directory contains all the reusable UI components. The `library` directory is further divided into sub-directories based on the feature. For example, the `Button` component is located inside the `library/Button` directory.

## Styles

The `styles` directory contains all the global styles. The `styles` directory is further divided into sub-directories based on the feature. For example, the `Home.module.scss` file contains the styles for the `Home` page.

# Backend Directory Structure

## Controllers

The `controllers` directory contains all the controllers. The `controllers` directory is further divided into sub-directories based on the feature. For example, the `users` controller is located inside the `controllers/users` directory.

## Model

The `model` directory contains all the models. The `model` directory is further divided into sub-directories based on the feature. For example, the `user` model is located inside the `model/user` directory.

## Types

The `types` directory contains all the types. The `types` directory is further divided into sub-directories based on the feature. For example, the `user` type is located inside the `types/user` directory.

## Database

The `db` directory contains all the database related files.

## Config

The `config` directory contains all the configuration files. For example, all the environment variables are located inside the `config/index.ts` file.

# Common Directory Structure

## Tests

The `__tests__` directory contains all the tests. The `__tests__` directory is further divided into sub-directories based on the feature. For example, the `HomePage.test.tsx` file contains the tests for the `HomePage` component.

## Public

The `public` directory contains all the static assets. For example, the `logo.png` file is located inside the `public/images` directory.

## GitHub

The `.github` directory contains all the GitHub related files. This includes the GitHub workflows and templates. For example, the `build-test.yml` file contains the GitHub Actions workflow for building and testing the project.

## Documentation

The `docs` directory contains all the documentation related files. This includes the documentation for the project. For example, the `directory-structure.md` file contains the documentation for the directory structure of the project.

## Other Files

The root directory contains all the other files. This includes the configuration files like `.editorconfig`, `.eslintrc.json`, `.gitignore`, `.prettierrc`, `commitlint.config.js`, `jest.config.js`, `next.config.js`, `tsconfig.json`, and `yarn.lock`.

# Conclusion

The directory structure of the project is a hybrid approach of grouping files by features and by file types. The hybrid approach is a good balance between the two approaches and is the recommended approach for most projects.
