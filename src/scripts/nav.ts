// getUsers - returns only names + emails of users whose name contains letter k (still as arr of objs)

async function getUsers(endpoint: string) {
   const response = await fetch(endpoint)
   const data = await response.json()
   const users = data
      .filter((user) => user.name.toLowerCase().includes('k'))
      .map(({ name, email }) => {
         return { name, email }
      })
   return users
}

;(async function () {
   try {
      console.log(await getUsers('https://jsonplaceholder.typicode.com/users'))
   } catch (error) {
      console.log(error.message)
   }
})()
