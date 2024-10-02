# HOK UI

HOK UI is a ui library for react created by HOK in beased on react-aria and tailwind

## Installation

Use the package manager to install.

```bash
# Using npm
npm install hokui

# Using yarn
yarn add hokui
```

## Configuration

```ts
// tailwind.config.ts

import { hokTheme } from "hokui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/hokui/dist/**/*.{js,ts,jsx,tsx}",
    // your component path
  ],
  theme: {},
  plugins: [
    hokTheme(),
  ],
} satisfies Config;

```

## Usage

```ts
// app.tsx

import { Button } from "hokui";
import "./tailwind.css";

function App() {
  return (
    <div>
      <Button
        size="xl"
        rounded="full"
      >
        this is Button
      </Button>
    </div>
  );
}

export default App;
```

## i18n Provider

```ts
// app.tsx

import { I18nProvider } from "hokui";
import "./tailwind.css";

function App() {
  return (
    <div>
      {/* locale Thai with Gregorian calendar */}
      <I18nProvider locale="th-TH-u-ca-gregory-nu-latn">
        <Button
          size="xl"
          rounded="full"
        >
          this is Button
        </Button>
      </I18nProvider>
    </div>
  );
}

export default App;
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
