import { h, app } from 'hyperapp'

interface IAppState {
  count: number
}

interface IAppActions {
  down: (value: number) => (state: IAppState) => IAppState
  up: (value: number) => (state: IAppState) => IAppState
}

const state: IAppState = {
  count: 0
}

const actions: any = {
  down: (value: number) => (state: IAppState): IAppState => ({ count: state.count - value }),
  up: (value: number) => (state: IAppState): IAppState => ({ count: state.count + value }),
}

const view = (state, actions) => (
  <div>
    <h1>{state.count}</h1>
    <button onclick={() => actions.down(1)}>-</button>
    <button onclick={() => actions.up(1)}>+</button>
  </div>
)

app(state, actions, view, document.body)
