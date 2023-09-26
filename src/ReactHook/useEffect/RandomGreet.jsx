import { useState, useEffect } from "react";

const Greeting = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 8)
  );
  const [greeting, setGreeting] = useState();


  useEffect(() => {
    switch (randomNumber) {
      case 0:
        setGreeting("Hola");
        break;
      case 1:
        setGreeting("Hello");
        break;
      case 2:
        setGreeting("Sawatdee");
        break;
      case 3:
        setGreeting("Sabaidee");
        break;
      case 4:
        setGreeting("Ni Hoa");
        break;
      case 5:
        setGreeting("Ciao");
        break;
      case 6:
        setGreeting("Salut");
        break;
      case 7:
        setGreeting("Green");
        break;
      case 8:
        setGreeting("Cześć");
        break;
    }
  }, [randomNumber]);

  useEffect(() => {
    if (greeting === 'Sawatdee') {
      alert('Congratulations');
    }
  }, [greeting]);

  function handleButton() {
    setRandomNumber(Math.floor(Math.random() * 8))
  }

 

  return (
    <div className="greeting flex justify-center items-center h-screen flex-col gap-10">
      <h1 className="font-bold font-mono text-[60px] text-red-700">Random Greeting</h1>
      <h2 className="order font-bold font-mono text-[50px] text-red-600">" {randomNumber} "</h2>
      <h2 className="massage font-bold font-mono text-[50px] rounded-md bg-blue-500 text-white p-5">{greeting}</h2>
      <button className="font-mono rounded-md bg-yellow-500 text-white p-2 hover:bg-yellow-700"
       onClick={handleButton}
      >Generator Greeting</button>
    </div>
  );
};
export default Greeting;