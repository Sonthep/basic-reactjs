function Jungle(){
    const jungle = [
    {
        name: "Lion",
        discription: "The King of jungle",
        skills: [ "run", "attack", "eat",],
        image: "https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
    },
   {
        name: "Jeetah",
        discription: "The King of speed",
        skills: [ "run speed", "attack", "eat",],
        image: "https://media.istockphoto.com/id/1049545562/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B8%AD%E0%B8%94%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%9E%E0%B8%A8%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B8%88%E0%B8%B8%E0%B8%94%E0%B8%8A%E0%B8%A1%E0%B8%A7%E0%B8%B4%E0%B8%A7%E0%B9%83%E0%B8%99%E0%B9%81%E0%B8%AA%E0%B8%87%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5.jpg?s=612x612&w=0&k=20&c=V3m4TxFieVMQLJ42oOCoHI5izEzECXvnKg0sLe6JaZE="
    },
    {
        name: "Eagle",
        discription: "The King of Sky",
        skills: [ "fly", "attack", "eat",],
        image: "https://images.unsplash.com/photo-1596465467444-b6e43222e5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWFnbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60"
    },
]
    return (
        <>
      <h1 className="text-center font-sans font-bold text-[30px]">The King</h1>
      <ul className="container font-mono flex justify-center gap-2 ">
        {
            jungle.map((jung, index) =>(
                <li key={index} className="rounded border-2 mt-2 mb-2 w-[20rem] h-[25rem] bg-green-200">
                    <h1 className="text-[30px] text-center">{jung.name}</h1>
                    <img src={jung.image} className="w-full h-[15rem]" />
                    <p>{jung.discription}</p>
                    {
                        jung.skills.map((sk, index) =>(
                            <p key={index}>{sk}</p>
                        ))
                    }
                </li>
            ))
        }
      </ul>
        </>
    )
}

export default Jungle