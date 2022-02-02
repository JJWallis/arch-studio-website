async function getUsers(url: string) {
   try {
      const data = await fetch(url)
      if (!data.ok) throw new Error('Failed to fetch users')
      const results = data.json()
   } catch (error) {
      console.error(error.message)
   }
}

console.log(getUsers('https://jsonplaceholder.typicode.com/users'))
