# HOK UI

HOK-UI is a UI library for React created by HOK in beased on [React-Aria](https://react-spectrum.adobe.com/react-aria/index.html) and [Tailwind](https://tailwindcss.com/)

## Installation

Use the package manager to install.

```bash
# Using npm
npm install hokui tailwindcss-react-aria-components tailwindcss-animate

# Using yarn
yarn add hokui tailwindcss-react-aria-components tailwindcss-animate
```

## Configuration

```ts
// tailwind.config.ts

import { hokTheme, hokLayout } from "hokui";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./node_modules/hokui/dist/**/*.{js,ts,jsx,tsx}",
    // your component path
  ],
  theme: {},
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
    hokTheme(),
    hokLayout(),
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

import { HokUi } from "hokui";
import "./tailwind.css";

function App() {
  return (
    <div>
      {/* locale Thai with Gregorian calendar */}
      <HokUi.Provider locale="th-TH-u-ca-gregory-nu-latn">
        <Button
          size="xl"
          rounded="full"
        >
          this is Button
        </Button>
      </HokUi.Provider>
    </div>
  );
}

export default App;
```

## useAlert Hook

```ts
// app.tsx

import { HokUi, useAlert } from "hokui";
import "./tailwind.css";

function App() {
  const { toast, dialog } = useAlert();

  return (
    <div>
      {/* locale Thai with Gregorian calendar */}
      <HokUi.Provider locale="th-TH-u-ca-gregory-nu-latn">
        <Button
          size="xl"
          rounded="full"
          onPress={() =>
            toast({
              delay: 3000,
              color: "info",
              render: <div>this is taost content</div>,
            })
          }
        >
          this is Button for toast
        </Button>
        <Button
          size="xl"
          rounded="full"
          onPress={() =>
            dialog({
              type: "confirm",
              variant: "success",
              title: "test",
              subTitle: "test",
            })
          }
        >
          this is Button for dialog
        </Button>
      </HokUi.Provider>
    </div>
  );
}

export default App;
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
