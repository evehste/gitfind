import { useState } from 'react';
import './styles.css';
import Header from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from '../../components/ItemList';

function App() {

  const [user, setUser] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();
    console.log(newUser)

    if(newUser.login){
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({avatar_url, name, bio, login});
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if(newRepos.length){
      console.log(newRepos)
      setRepos(newRepos);
    }
  }

  return (
    <div>
      <Header/>
      <div className="content">
        <img className="background" src={background} alt="" />
        <div className="info">
          <div>
            <input 
              name="usuario" 
              placeholder="@username" 
              value={user} 
              onChange={event => setUser(event.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>

          {
            currentUser?.login ? (
              <>
                <div className="profile">
                  <img className="imgProfile" src={currentUser.avatar_url} alt=""/>

                  <div>
                    <h3>{currentUser.name}</h3>
                    <span>@{currentUser.login}</span>
                    <p>{currentUser.bio}</p>
                  </div>
                </div>
                <hr />
              </>
            ): null
          }


          {
            repos?.length ? (
              <>
                <div>
                  <h4 className="repository">Repositórios</h4>
                </div>
                {
                  repos.map((item, i) => <ItemList title={item.name} description={item.description} key={i} />)
                }
              </>
            ) : null
          }


        </div>
      </div>
    </div>
  );
}

export default App;
