import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Time from './pages/Time';
import Form from './components/Form';
import {Greeting, Greeting1} from './components/Greeting';

import { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';
import axios from 'axios';
function App() {

  const [user, setUser] = useState();
  const [data, setData] = useState([]);// where to store the returned data
  const [error, setError] = useState(null);// where to store the coming errors
  
  const requestOne = axios.get("https://api.storyblok.com/v1/cdn/stories/health?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");
  const requestTwo = axios.get("https://api.storyblok.com/v1/cdn/datasources/?token=wANpEQEsMYGOwLxwXQ76Ggtt");
  const requestThree = axios.get("https://api.storyblok.com/v1/cdn/stories/vue?version=published&token=wANpEQEsMYGOwLxwXQ76Ggtt");

  useEffect(() => {
    //fetchData();
  }, []);
  
  const fetchData = () => {// the function to fetch data from the api

    // fetch("https://hn.algolia.com/api/v1/search?query=redux")
    //   .then(res => res.json())
    //   .then(res => setData(res.hits))
    //   .catch(err => setError(err.message));

    // axios.get('https://hn.algolia.com/api/v1/search?query=redux')
    //         .then((response) => {
    //             setData(response.data.hits)
    //         })
    //         .catch((error) => {
    //             // handle error
    //             // console.log(error);
    //             setError(error)
    //         })

    axios
      .all([requestOne, requestTwo, requestThree])
      .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
          const data1 = firstResponse.data;
          console.log('Name: ', data1.story.content.taglist.plugin)
          console.log(secondResponse.data)
          console.log(thirdResponse.data);
      }))
      .catch(errors => {
          console.error(errors);
      });
  }

  const handleChange = e => {
    setUser(
        { 
            id: Date.now(), 
            name: e.target.value
        }
    );

  }

  const testSubmit = (e) => {
    // e.preventDefault()
    alert('FOrm submitted')
  }

  const handleSubmit = e => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  // const Greeting = (props) => 
  //       <h1>Greetings to you {props.name}, age {props.age}!</h1>;

  return (
    <div className="App">
      <header>
        <h1>Welcome to GoMyCode Limited</h1>
      </header>
      <main>
        <Time/>
        {/* <Home name='Davido' age={20} /> */}
        {/* <Form onSubmit={testSubmit} /> */}
        {/* <Greeting>
          This is a child content
          <Home />
        </Greeting> */}

        {/* <h1>{error}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form> */}
        {/* <ul>
          {
              !isEmpty(data) && data.map((item, index) => 
                  <li key={index}>
                      <a href={item.url}>{item.title}</a> */}
                      {/* {item.url} {item.title} */}
                  {/* </li>
              )
          }
        </ul> */}
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
