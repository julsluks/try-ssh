// module.exports = {
//     "env": {
//         "browser": true,
//         "es2021": true,
//         "node": true
//     },
//     "extends": "standard",
//     "overrides": [
//         {
//             "env": {
//                 "node": true
//             },
//             "files": [
//                 ".eslintrc.{js,cjs}"
//             ],
//             "parserOptions": {
//                 "sourceType": "script"
//             }
//         }
//     ],
//     "parserOptions": {
//         "ecmaVersion": "latest",
//         "sourceType": "module"
//     },
//     "rules": {
//     }
// }

export default {
    env: {
      browser: true,        /* El objetivo del código es ejecutar en navegadores */
      es2021: true          /* El código estará escrito en ECMAScript 2021 */
    },
    extends: [
      "eslint:recommended", /* Reglas marcadas con ✓ en eslint.org/docs/rules/ */
      "standard"            /* Reglas del paquete eslint-config-standard */
    ],
    parserOptions: {
      ecmaVersion: 12,      /* Establece la versión de ECMAScript que se usará */
      sourceType: "module"  /* Indica si se usan módulos ESM o solo scripts */
    },
    rules: {
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"]
    }
}