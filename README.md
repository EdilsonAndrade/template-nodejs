<h1> NodeJs Template</h1>

<h3>To start your projects from scratch</h3>

<h4>It uses airbnb eslint configuragion and also prettier</h4>

<h4>You can also use the settings configuration, as below in order to have some cool features like:</h4>
<ul>
<li> Autofix Eslint (most of the cases) when hit save</li>
<li> Font ligatures with Fira Code</li>
<li> Theme styles with Dracula</li>
<li> Icon theme styles</li>
</ul>
Need to install <bold>Dracula</bold> plugin in VSCode
Fira Code fonts from Google 

```json
{
    "workbench.colorTheme": "Dracula",
    "workbench.iconTheme": "material-icon-theme",
    "editor.fontFamily": "'Fira Code', 'monospace', monospace, 'Droid Sans Fallback'",
    "editor.fontLigatures": true,
    "editor.renderLineHighlight":"gutter",
    "editor.fontSize": 12,
    "editor.rulers": [80,120],
    "editor.tabSize": 2,
    "terminal.integrated.fontSize": 12,
    "javascript.updateImportsOnFileMove.enabled": "never",
    "javascript.suggest.autoImports": false,
    "emmet.syntaxProfiles": {
        "javascript":"jsx"
    },
    "emmet.includeLanguages": {
        "javascript":"javascriptreact"
    },
    "eslint.autoFixOnSave": true,
   "eslint.validate": [
      {
         "language": "javascript",
         "autoFix": true
      },
      {
         "language": "javascriptreact",
         "autoFix": true
      },
      {
         "language": "typecript",
         "autoFix": true
      },
      {
         "language": "typecriptreact",
         "autoFix": true
      }
   ],
   "window.zoomLevel": 1,


}
```
