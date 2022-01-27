// getUsers - returns only names + email of users whose name contains letter k (still as arr of objs)

async function getUsers(endpoint: string) {
   const response = await fetch(endpoint)
   if (!response.ok) throw new Error(`fetch failed: ${response.status}`)
   const data = await response.json()
   const users = data.filter((user) => user.name.toLowerCase().includes('k'))

   console.log(data)
}

getUsers('https://jsonplaceholder.typicode.com/users')
