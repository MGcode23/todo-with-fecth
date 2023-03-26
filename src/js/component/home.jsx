import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [tareas, setTareas] = useState([])
	const url= 'https://assets.breatheco.de/apis/fake/todos/user/mgcode'

	useEffect(() => {
		fetch(url)
		  .then(response => response.json())
		  .then(data => setTareas(data))
		  .catch(error => console.log(error, "DANGER"));
	  }, []);
	  

	return (
		<div className="text-center">
			<h1> Todo List API</h1>
            <input
              type="text"
              placeholder="What do you need to do?"
              name="label"
              className="form-control"
             ></input>
			  
			{tareas.map((elm, index) => {
  return <li>{elm?.label}</li>;
})}
			
		</div>
	);
};

export default Home;


