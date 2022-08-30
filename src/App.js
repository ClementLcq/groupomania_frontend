import React from 'react';
// import { UidContext } from './components/AppContext';
import Routes from "./components/Routes"
// import axios from 'axios';

const App = () => {
  return (
    <div>
      <Routes />
    </div>
  )

}
// const App = () => {
// const [uid, setUid] = useState(null);

// useEffect(() => {
//   const fetchToken = async() => {
//     await axios({
//       method: "get",
//       url: "http://localhost:3001/uid",
//     })
//     .then((res) => {
//       setUid(res.data)
//     })
//     .catch((err) => console.log("No token"))
//   }
//   fetchToken();
// }, [uid])

//   return (
//     <UidContext.Provider value={uid}>
//       <Routes />
//     </UidContext.Provider>  );
// };

export default App;