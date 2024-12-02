import { useState, useEffect } from "react";
import "./App.css";

interface Joke {
  category: string;
  joke: string;
}

function App() {
  const [data, setData] = useState<Joke>({ category: "", joke: "" });
  const [newJoke, setNewJoke] = useState(false);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((data) => setData(data))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, [newJoke]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNewJoke((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <h4>Category : {data.category}</h4>
      <p>{data.joke}</p>
    </>
  );
};

export default App;
