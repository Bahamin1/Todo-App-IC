# React + Motoko Todo App

A simple todo application built with React, and Motoko, utilizing ic-reactor by B3hr4d for seamless frontend-backend integration on the Internet Computer.

![App Screenshot](/src/assets/samp.png)

### Get started directly in your browser:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Bahamin1/todo-app-ic)

This project demonstrates how to build a full-stack Web3 application on the [Internet Computer](https://internetcomputer.org/) using a modern tech stack.

## 📦 Create a New Project

Make sure that [Node.js](https://nodejs.org/en/) `>= 16` and [`dfx`](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) `>= 0.14` are installed on your system.

Run the following commands in a new, empty project directory:

```sh
git clone https://github.com/Bahamin1/todo-app-ic.git
cd todo-app-ic
dfx start --clean --background # Run dfx in the background
npm run setup # Install packages, deploy canisters, and generate type bindings

npm start # Start the development server
```

When ready, run `dfx deploy --network ic` to deploy your application to the Internet Computer.

## 🛠️ Technology Stack

- (https:/s.dev/): high-performance tooling for front-end web development
- [React](https://reactjs.org/): a component-based UI library
- [TypeScript](https://www.typescriptlang.org/): JavaScript extended with syntax for types
- [Sass](https://sass-lang.com/): an extended syntax for CSS stylesheets
- [Prettier](https://prettier.io/): code formatting for a wide range of supported languages
- [Motoko](https://github.com/dfinity/motoko#readme): a safe and simple programming language for the Internet Computer
- [Mops](https://mops.one): an on-chain community package manager for Motoko
- [mo-dev](https://github.com/dfinity/motoko-dev-server#readme): a live reload development server for Motoko
- [@ic-reactor](https://github.com/B3Pay/ic-reactor): A suite of JavaScript libraries for seamless frontend development on the Internet Computer

## 📚 Documentation

- [developer docs](https:/s.dev/guide/)
- [React quick start guide](https://react.dev/learn)
- [Internet Computer docs](https://internetcomputer.org/docs/current/developer-docs/ic-overview)
- [`dfx.json` reference schema](https://internetcomputer.org/docs/current/references/dfx-json-reference/)
- [Motoko developer docs](https://internetcomputer.org/docs/current/developer-docs/build/cdks/motoko-dfinity/motoko/)
- [Mops usage instructions](https://j4mwm-bqaaa-aaaam-qajbq-cai.ic0.app/#/docs/install)
- [@ic-reactor/react](https://b3pay.github.io/ic-reactor/modules/react.html)

## 💡 Tips and Tricks

- Customize your project's code style by editing the `.prettierrc` file and then running `npm run format`.
- Reduce the latency of update calls by passing the `--emulator` flag to `dfx start`.
- Install a Motoko package by running `npx ic-mops add <package-name>`. Here is a [list of available packages](https://mops.one/).
- Split your frontend and backend console output by running `npm run frontend` and `npm run backend` in separate terminals.

## 🚀 Features

- Create, read, update, and delete todo items
- Mark todos as complete or incomplete
- Filter todos by status (all, active, completed)
- Persist todos on the Internet Computer blockchain
- Responsive design for mobile and desktop

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Bahamin1/todo-app-ic/issues) if you want to contribute.

## 👤 Author

- GitHub: [@Bahamin](https://github.com/Bahamin1)
- Twitter: [@BahaminDeh](https://twitter.com/BahaminDeh)

## 🙏 Acknowledgements

- [DFINITY Foundation](https://dfinity.org/) for creating the Internet Computer
- [B3hr4d](https://github.com/B3hr4d) for developing ic-reactor
- The Motoko and Internet Computer community for their continuous support and contributions
