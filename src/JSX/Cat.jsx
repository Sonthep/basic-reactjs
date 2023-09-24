
function Cat() {
  const pets = [
    {
      name: 'Dolly',
      type: 'cat',
      description: 'Dolly is funny and loves to be around people',
      skills: ['fetch', 'play dead', 'roll over'],
      image: 'https://res.cloudinary.com/atapas/image/upload/v1604829788/cats/remi-remino-E9kVmtiqqGE-unsplash_uivwfy.jpg',
    },
    {
      name: 'Molly',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?size=626&ext=jpg&ga=GA1.2.241424290.1692458287&semt=sph',
    },
    {
      name: 'Tony',
      type: 'cat',
      description: 'Molly is a sweet and cuddly cat stretch a lot!',
      skills: ['play dead', 'meow', 'purr'],
      image: 'https://img.freepik.com/premium-photo/british-shorthair-sitting-licking-its-lips_191971-18063.jpg?size=626&ext=jpg&ga=GA1.1.241424290.1692458287&semt=sph',
    },
  ];
  return (
    <div className="App">
      <h1>My Pets</h1>
      <ul className="container flex justify-center">
        {
          pets.map((pet, index) => (
            <li key={index} className="rounded-md border-solid border-2 m-2 w-[20rem] h-[25rem] bg-blue-50">
              <h1>{pet.name}</h1>
              <p>{pet.description}</p>
              <img src={pet.image} 
                alt={pet.name} 
                className="w-full h-[15rem]"/>
              <ul className="skills">
                {
                  pet.skills.map((skill, index)=>(
                    <li key={skill}>{skill}</li>
                  ))
                }
              </ul>    
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Cat;