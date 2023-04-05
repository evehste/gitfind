import { useState } from 'react';
import './styles.css';
import Header from "../../components/Header";
import background from "../../assets/background.png";
import Profile from '../../components/Profile';
import Repos from '../../components/Repos';
import InputUser from '../../components/Input/Index';
import Button from '../../components/Button/Index';

const App = () => {

  const [user, setUser] = useState("evehste");
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.login){
      const { avatar_url, name, bio, login } = newUser;
      setCurrentUser({avatar_url, name, bio, login});
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
    const newRepos = await reposData.json();

    if(newRepos.length){
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
            <InputUser user={user} setUser={setUser}/>
            <Button action={handleGetData} title={'Buscar'} />
          </div>

          { 
            currentUser?.login && <Profile data={currentUser}/>
          }

          {
            repos?.length && <Repos data={repos}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
