import example from './lib/example'
const name = "Jesse"

export function hello(who: string = name): string {
  return `Hello ${who}.`
}

console.log(`\n`)
console.log(hello())
console.log(example())
console.log('Completed!\n')
