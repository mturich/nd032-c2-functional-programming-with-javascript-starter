// Here is an example with Promises where we need to wait for both responses before performing an action

const promise1 = (): Promise<number> =>
   new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, 19)
   })

const promise2 = (): Promise<number> =>
   new Promise((resolve, reject) => {
      setTimeout(reject, 3000, 23)
   })

// Challenge 1

// Try using JUST Promise syntax to sum the results of both Promises and console log the message below
// "The answer to life, the universe, and everything is: 42"

// REMINDER: If you want to use Promise.allSettled in your answer, you will need to run the following command in your terminal window first:
// source  update_node.sh

// your code here

function calculatePromiseResult(): void {
   console.log('calculating....')
   promise1()
      .then(p1 => {
         promise2()
            .then(p2 => {
               console.log('done!')
               console.log(`this is the result ${p1} + ${p2} = ${p1 + p2}`)
            })
            .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
}
//calculatePromiseResult()
// ---------------------------------------------------------------------------

// Challenge 2
// Now try the same example, but instead of implementing it with Promises, use Async/await
// Console log: "The answer to life, the universe, and everything is: 42"

// your async/await code here

async function calculateAsyncResult(): Promise<void> {
   try {
      console.log('calculating....')
      const p1: number = await promise1()
      const p2: number = await promise2()
      console.log('Done!')
      console.log(`this is the result ${p1} + ${p2} = ${p1 + p2}`)
   } catch (e) {
      console.log("there was an error", e)
   }
}

calculateAsyncResult()
