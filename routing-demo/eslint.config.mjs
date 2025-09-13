import { FlatCompat } from '@eslint/eslintrc'
import { rules } from '../../../Documents/programming/HTML-CSS-JS/trelo/base-api/.eslintrc.cjs'
 
const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})
 
const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    rules:{
      
    }
  }),
]
 
export default eslintConfig