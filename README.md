# hyperapp-parcel-typescript
Researching Hyperapp &amp; Parcel &amp; TypeScript

### TypeScript support
For using plain TS files Parcel will work out of the box. When using TSX files you have to add some additional configuration into your `tsconfig.json`;

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "jsx": "react",
    "jsxFactory": "h"
  }
}
```
