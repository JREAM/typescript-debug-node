# TypeScript Debug VSCode

This is just a simple project setup to show you howt to use VSCode with the built-in debugger in a starter Typescript project.

### Clone & Install
```bash
git clone https://github.com/JREAM/typescript-debug-vscode.git
cd typescript-debug-vscode
npm install
```

### Example

> Note: I have TypeScript and TypeScript-Node installed globally. This is accomplished with `npm install -g typescript ts-node`
>
![Screenshot](https://private-user-images.githubusercontent.com/145959/350719323-00af32dd-deb1-49ee-b0aa-8135a6225e50.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE1MDMxMzMsIm5iZiI6MTcyMTUwMjgzMywicGF0aCI6Ii8xNDU5NTkvMzUwNzE5MzIzLTAwYWYzMmRkLWRlYjEtNDllZS1iMGFhLTgxMzVhNjIyNWU1MC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQxOTEzNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZjE5N2ZmNzQwMWZlNDZmYzQzNzY2OGE1ZTg2ZTgwNzEwODcyZWZiMjlkMDI4OGZiYzlhMGI2ZTgzYzIzYTlhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.XsCo57GTqxa-ldbXPSWznQvxwbD2KGZBoJa3aG1x-CE)


## Project Commands

These are just reminders of using packages:

- **tsc**: TypeScript Compiler _(From the TypeScript package)_
- **ts-node**: TypeScript Node Runtime
- `npm run dev` - will watch & compile for file changes of `src/index.ts`
- `npm run build` - will compile files into `./js` in the `./dist` folder.

If you have the very handy [nodemon](https://nodemon.io/) package installed globally (recommended) `npm install -g nodemon` you can type:

- `nodemon`: This will read the `nodemon.json` file and watch for all file changes under `src/`. This way you can save any file and it will reload the changes.


## Configuration

- The `.vscode` folder is included in git (might be hidden), follow instructions if you are stuck.
- The `tsconfig.json` sets the `outDir: ./dist` so `.js` files don't pollute the `.ts` files when you run `npm run build` or `tsc`.
- Required `devDependencies`, used in `.vscode/launch.json`
  - `ts-node`
  - `tsconfig-paths`

## Manual Configuration
- Create a new `.vscode/launch.json` file by:
  - <kbd>Ctrl+Shift+D</kbd> and select _Create new Launch File._
  - This creates a `.vscode` folder.

Add the following line in the `configurationto the file:

```json
"runtimeArgs": [ "-r", "ts-node/register", "-r", "tsconfig-paths/register" ],
"console": "integratedTerminal",
```

If you want to run the output in the `Integrated Terminal` <kbd>Ctrl+~</kbd> rather than the `Debug Console` <kbd>Ctrl+Shift+Y</kbd> change this:

```json
// Console is not needed unless you change it, default is internalConsole.
"console": "internalConsole",

// This will use the Terminal instead.
"console": "integratedTerminal",
```

## Run in VSCode

- Open the `src/index.ts` and add some **breakpoints** in the gutter.
- Press `F5` or `Run > Start Debugging`.
- Also open your `Integrated Terminal` with <kbd>Ctrl+~</kbd> or the `Debug Console` <kbd>Ctrl+Shift+Y</kbd> for program output.


---

&copy; 2024 MIT | [JREAM](https://jream.com) | Jesse Boyer
