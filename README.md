# Configuração do Prettier

Instale o prittier `yarn add prettier -D`

criar um arquivo no root do projeto **.prettierrc**

```
{
  "trailingComma": "none",
  "semi": false,
  "singleQuote": true
}
```

adicionar nos scripts do **package.json** dois scripts um para verificar arquivos que estejam não estejam com os estilos padrão do projeto e outro para corrigir

```
"scripts: {
  ...
  "prettier:check": "prettier --check 'src/**/*.{ts,tsx}'",
  "prettier:fix": "prettier --write 'src/**/*.{ts,tsx}'"
}
```

# Configuração do Jest

## Instalação

Instalação de todas as dependencias

```
yarn add jest-expo @types/jest @testing-library/react-native -D
```

Instalar jest-expo como dependencia de desenvolvimento `yarn add jest-expo -D` e `yarn add @types/jest -D`

E atualizar o `package.json`

```
"scripts": {
    ...
    "test: "jest:
}
"jest": {
    "preset": "jest-expo"
}
```

Agora adicionar testing library no projeto:

`yarn add @testing-library/react-native -D`

## outras configuração do Jest

Configuração inicial do [transformIgnorePatterns](https://jestjs.io/docs/configuration#transformignorepatterns-arraystring)

```
"jest": {
  "preset": "jest-expo",
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ]
}
```

## configurando code coverage reports

adicione as linhas no `package.json`

```
"jest": {
    ...
    "collectCoverage": true,
    "collectCoverageFrom: [
        "**/*.{ts,tsx}",
        "!**/coverage/**",
        "!**/node_modules/**",
        "!**/babel.config.js",
        "!**/jest.setup.js"
    ]
}
```

## Jest Flows

Scripts para os fluxos

```
"scripts": {
    ...
    // active development of tests, watch files for chages and re-runs all tests
    "test:dev": "jest --watch --coverage=false",
    // debug, console.logs and only re-runs the file that was changed
    "test:debug": "jest -o --watch --coverage=false",
    // when a screen/component is updated, the test snapshots will throw an error, this updates them
    "test:update:snapshoots": "jest -u --coverage=false",
    // displays code coverage in cli and updates the code coverage html
    "test": "jest"
}
```

## Configuração o setup do Testing Library no projeto

### Custom Render

É sempre bom definir um custom render metodo que inclui coisas como global context providers, data stores, etc.

```
// my-component.test.js
- import { render, fireEvent } from '@testing-library/react-native'
+ import { render, fireEvent } from '../test-utils';
```

```
// test-utils.js
import {render} from '@testing-library/react-native'
import {ThemeProvider} from 'my-ui-lib'
import {TranslationProvider} from 'my-i18n-lib'
import defaultStrings from 'i18n/en-x-default'

const AllTheProviders = ({children}) => {
  return (
    <ThemeProvider theme="light">
      <TranslationProvider messages={defaultStrings}>
        {children}
      </TranslationProvider>
    </ThemeProvider>
  )
}

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// re-export everything
export * from '@testing-library/react-native'

// override render method
export {customRender as render}
```

# Configuração do styled components

Instalação de todas as dependencias:

```
yarn add styled-components && yarn add @types/styled-components-react-native @testing-libraryjest-native -D
```

Para instalação do **styled components** `yarn add styled-components`, `yarn add @types/styled-components-react-native -D` e `yarn add @testing-library/jest-native -D`

Para que o **Testing Library** tenha as propriedades de estilos do **styled components**:

```
toBeDisabled()
toContainElement(element: ReactTestInstace | null)
toBeEmpty()
toHaveProps(atts: string, value?: any)
toHaveTextContent(text:string | RegExp, options?: { normalizeWhiteSpace: boolean})
toBeEnabled()
toHaveStyle(style: object[] | object)
```

é necessário importar o **testing library jest native** no topo do arquivo

```
import @testing-library/jest-native/extend-expect
```

caso tenha o util do **Testing Library** pode ser importado nele, assim replica global para todos os testes.

```
// utils/test-utils.tsx
import @testing-library/jest-native/extend-expect
```

# Configuração do Husky

Husky serve para que antes dos commit consiga validar se styleguide do código e testes estão corretos

1. Instale o **husky v7**

```
yarn add husky -D
```

2. Habilite o Git hooks

```
npx husky install
```

3. configure o **package.json** e rode `yarn prepare`

```
// package.json
{
  "scripts": {
    ...
    "prepare": "husky install"
  }
}
```

4. Crie os hooks

```
npx husky add .husk/pre-commit "yarn test"
```

5. Caso deseje modificar os hooks conforme os scripts após criado é só ir na arquivo **.husky/pre-commit** e alterar a quarta linha onde estão os commandos de yar

```
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn prettier:check && yarn test

```

# Configuração do Plop

1. Instale o Plop

```
yarn add plop -D
```

2. Crie um arquivo **plopfile.js** no root do projeto que terá sua logica de cli

```
module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs'
      }
    ]
  })
}

```

3. Crie uma pasta para os templates no **root** do projeto e adicione o script no **package.json**

```
plop-templates/Components.tsx.hbs
```

```
// package.json
"scripts": {
  ...
  "generate": "plop"
}
```

4. Crie o template conforme sua aplicação / fica de exemplo o plopfile.js do projeto onde tem screen e components

5. Para criar os templates é só usar os definidos por exemplo:

```
yarn generate component chip
```
