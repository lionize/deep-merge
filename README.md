A small utility for deeply merging two different Javascript objects.

# Installation

`yarn add util-deep-merge`

# Usage

```javascript
import deepMerge from 'util-deep-merge';

const array1 = [1, 2];
const array2 = [2, 3];
deepMerge(array1, array2);
// => [1, 2, 3]

const obj1 = { id: 1 };
const obj2 = { name: 'Mark' };
deepMerge(obj1, obj2);
// => { id: 1, name: 'Mark' }

const obj1 = { ids: [1, 2, 3] };
const obj2 = { ids: [2, 3, 4, 5] };
deepMerge(obj1, obj2);
// => { ids: [1, 2, 3, 4, 5] };

deepMerge('a', 'b');
// => 'b'

deepMerge(1, 2);
// => 2
```
