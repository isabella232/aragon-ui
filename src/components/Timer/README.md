# Countdown

Displays a Timer.

## Usage

```jsx
import { Timer } from '@aragon/ui'

const DAY_IN_MS = 1000 * 60 * 60 * 24
const startDate = new Date(Date.now() - 5 * DAY_IN_MS)

const App = () => (
  <Timer start={startDate} />
)
```

## Properties

### `start`

- Type: `Date` (required)

The start on the stopwatch, as a `Date` instance.
