# Workbook: Typescript
## Exercise
Take one (or more) of your webpages you've built so far, and refactor the js to ts

## Conceptual Questions



- What is Nodejs?



- What is NPM?



- What is typescript?



- What benefit does typescript brings?



- (T/F) Browsers can interpret typescript

False. It needs to first be transpiled (compiled-ish) into JavaScript first.

- What do we do to convert typescript to javascript? Which tool do we use for that?

TypeScript Compiler (`tsc`). e.g. `npx tsc --watch` to live-update file.js when changing file.ts.

- What are additional types ts brings?



- What is an interface in ts?

An interface is a kind of blueprint for the set of attributes ('shape') required to make a particular object.

- What are modules in js/ts?

Modules are encapsulated javascript programs which can only be accessed from other modules by exporting one and importing it into the other.

- How do you import functions/classes from another module?

```js
// import all exports & make them accessable via method-like calls:
import * as pkgalias from "rel/path/to/pkg.js";
let newInstance = new pkgalias.exportedObj();
// import only one constructor and rename it:
import { exportableObject as expObj } from "rel/path/to/pkg.js";
let newInstance = new expObj();
```

- How do you export functions/classes to be imported by others?

```js
// export a function exportedFn :
export function exportedFn() {
    //stuff
}
// have a module wrap other modules and export all from various 
//  submodules by calling (for ea submodule):
export * from "rel/path/to/submodule";
```

- What is the difference between named and default export, and how do they differ when you import them?
```js
// only one default function per module is allowed.
// default functions dont need to be exported with a name:
export default function (x : number) {
    return x*x;
}
// can also export a number
export default "117";
```

```js
// one does not need `{}` around the import alias:
import func_alias from "rel/pth/to/module";

```