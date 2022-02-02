async function getUsers(url: string) {
   try {
      const data = await fetch(url)
      if (!data.ok) throw new Error('Failed to fetch users')
      const results = await data.json()
      const users = results.map(
         ({ name, email }: any) => name.includes('k') && { name, email }
      )
      console.log(users)
   } catch (error) {
      console.error(error.message)
   }
}

console.log(getUsers('https://jsonplaceholder.typicode.com/users'))
