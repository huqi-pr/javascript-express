function add5(myNumber: number): number {
  return myNumber + 5
}

console.log(add5(2))

console.log([0, 42, 100].map(add5))

// Alternately

console.log([0, 42, 100].map(myNumber => myNumber + 5))

// More on functions later!

export {}
