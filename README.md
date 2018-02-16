# Hyperapp with TypeScript & Parcel Bundler
Sample project for [Hyperapp](https://github.com/hyperapp/hyperapp) and [TypeScript](https://www.typescriptlang.org) using TSX files with the [Parcel](https://github.com/parcel-bundler/parcel) Bundler.

### TypeScript TSX support
For using plain `*.ts` files Parcel will work out of the box. When using `*.tsx` files (like in React) you have to add some additional configuration into your `tsconfig.json`.

By default, TypeScript will transform functional components to `React.createElement`. In our case we don't want React and use Hyperapp instead. So we need to tell TypeScript. When we add `"jsxFactory": "h"`  to our `tsconfig.json` file, TypeScript will then transform functional components components to `h`. Which stands for [HyperScript](https://github.com/hyperhype/hyperscript).

```json
{
  "compilerOptions": {
    ...
    "jsx": "react",
    "jsxFactory": "h"
  }
}
```

HyperScript is used by Hyperapp (and other Frontend Frameworks like VueJS) to render content to the page. So this solution is not Hyperapp-exclusive.

### Functional Component in action

So with all the config setted up we can create a functional component with TypeScript! Lets start with the TypeScript interface.

```typescript
interface ButtonProps {
  title: string
  disabled?: boolean
  onClick: (event: MouseEvent) => void
}
```

Now we have defined all the properties for our component; lets create the actual component itself.

```jsx
const Button = ({title, disabled, onClick}: ButtonProps): JSX.Element => (
  <button type='button' disabled={disabled} onclick={onClick}>
    { title }
  </button>
)
```

As you can see this is just a plain function that returns a JSX Element. You can pass all the properties to this function and use them in there.

And we're basically ready to go! Just use the component anywhere you want.

```typescript
// create our root view
const view = (state: AppState, actions: AppActions) => (
  <Button title='Click me' onClick={() => console.log('Button clicked!')} />
)

// bootstrap the Hyperapp
app(state, actions, view, document.body)
```

As you might have noticed, it looks almost identical to React. There are some small differences in the JSX props syntax. For example the `onClick` prop that is available in React is called `onclick` in Hyperapp.