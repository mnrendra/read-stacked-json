# @mnrendra/read-stacked-json
Read the stacked JSON file from any sub-directory in your project.

## Install
```bash
npm i @mnrendra/read-stacked-json
```

## Usage

Using `CommonJS`:
```javascript
const { read, readSync } = require('@mnrendra/read-stacked-json')

// Asynchronously
read('file.json')
  .then((data) => {
    console.log('asynchronously:', data)
  })

// Synchronously
const data = readSync('file.json')
console.log('synchronously:', data)
```

Using `ES Module`:
```javascript
import { read, readSync } from '@mnrendra/read-stacked-json'

// Asynchronously
read('file.json')
  .then((data) => {
    console.log('asynchronously:', data)
  })

// Synchronously
const data = readSync('file.json')
console.log('synchronously:', data)
```

### Examples

#### 1. Read the `package.json` file in your development project:
Assuming your project's `~/project-name/package.json` file is as follows:
```json
{
  "name": "project-name",
  "version": "1.0.0"
}
```

Then, you can access and read the `~/project-name/package.json` file from any directory within your project.<br/>
Here are some examples:<br/>

##### • Read from `~/project-name/src/index.js`:
```javascript
const { readSync } = require('@mnrendra/read-stacked-json')

// Synchronously
const { name, version } = readSync('package.json')
console.log('synchronously:', name, version) // Output: synchronously: project-name 1.0.0
```

##### • Read from `~/project-name/src/any-directory/index.mjs`:
```javascript
import { read } from '@mnrendra/read-stacked-json'

// Asynchronously
read('package.json')
  .then(({ name, version }) => {
    console.log('asynchronously:', name, version) // Output: asynchronously: project-name 1.0.0
  })
```

#### 2. Read the `package.json` file in your published module:
Assuming your module is installed in the `/consumer/node_modules/module-name/` directory and the `package.json` file for your module located at `/consumer/node_modules/module-name/package.json` is as follows:
```json
{
  "name": "module-name",
  "version": "1.0.0"
}
```

Then, you can access and read your `package.json` file from any directory within your module.<br/>
Here are some examples:<br/>

##### • Read from `/consumer/node_modules/module-name/dist/index.js`:
```javascript
"use strict";
const { readSync } = require('@mnrendra/read-stacked-json');

// Synchronously
const { name, version } = readSync('package.json');
console.log('synchronously:', name, version); // Output: synchronously: module-name 1.0.0
```

##### • Read from `/consumer/node_modules/module-name/dist/any-directory/index.js`:
```javascript
"use strict";
const { read } = require('@mnrendra/read-stacked-json');

// Asynchronously
read('package.json')
  .then(({ name, version }) => {
    console.log('asynchronously:', name, version); // Output: asynchronously: module-name 1.0.0
  });
```

## Utility
```javascript
import {
  validateSkippedStacks // To validate the list of stacks to be skipped. More info: @mnrendra/validate-skipped-stacks
} from '@mnrendra/read-stacked-json'
```

## Types
```typescript
import type {
  Options, // @mnrendra/read-stacked-json options.
  SkippedStacks, // @mnrendra/validate-skipped-stacks input.
  ValidSkippedStacks // @mnrendra/validate-skipped-stacks output.
} from '@mnrendra/read-stacked-json'
```

## License
[MIT](https://github.com/mnrendra/read-stacked-json/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
