import { h, app, JSX } from 'hyperapp'

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

interface ButtonProps {
  title: string
  disabled?: boolean
  onClick: (event: MouseEvent) => void
}

const Button = ({title, disabled, onClick}: ButtonProps): JSX.Element => (
  <button type='button' disabled={disabled} onclick={onClick}>
    { title }
  </button>
)

const view = (state, actions) => (
  <div>
    <Button title='blaa' onClick={() => console.log('test')} />
  </div>
)

app(state, actions, view, document.body)
