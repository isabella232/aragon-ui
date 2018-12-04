# Countdown

Displays a countdown or stopwatch

## Usage

```jsx
import { Countdown } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const endDate = new Date(Date.now() + 5 * DAY_IN_MS)

const App = () => (
  <Countdown end={endDate} />
)
```

or

```jsx
import { Countdown } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const startDate = new Date(Date.now() - 5 * DAY_IN_MS)

const App = () => (
  <Countdown start={startDate} />
)
```


## Properties

### `end`

- Type: `Date` (required)

The end of the countdown, as a `Date` instance.

### `start`

- Type: `Date`

The start of a timer, as a `Date` instance.
