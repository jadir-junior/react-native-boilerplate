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
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
        templateFile: 'plop-templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'plop-templates/Style.ts.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Test.tsx.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Index.ts.hbs'
      }
    ]
  }),
    plop.setGenerator('screen', {
      description: 'Create a screen',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your screen name?'
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.component.tsx',
          templateFile: 'plop-templates/Component.tsx.hbs'
        },
        {
          type: 'add',
          path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.style.ts',
          templateFile: 'plop-templates/Style.ts.hbs'
        },
        {
          type: 'add',
          path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
          templateFile: 'plop-templates/Test.tsx.hbs'
        },
        {
          type: 'add',
          path: 'src/screens/{{pascalCase name}}/index.ts',
          templateFile: 'plop-templates/Index.ts.hbs'
        }
      ]
    })
}
