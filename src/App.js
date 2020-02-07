import React from 'react';
import './App.css';

export default function App(){
  
  return (
    <div class="grid-container">
      <div class="grid-visual"></div>
      <div class="grid-login">
        <h1>Login</h1>
        <div class="login">
          <h2>be welcome</h2>
          <form>
            <input type="text" class="input-username" placeholder="username"/>
            <input type="text" class="input-password"placeholder="password"/>
            <input type="checkbox" name="remember" class="checkbox"/>
            <label for="remember" class="remember">remember me</label>
          </form>
        </div>
      </div>
      <div class="grid-visual-grid">
        <div class="grid1"></div>
        <div class="grid2"></div>
        <div class="grid3"></div>
        <div class="grid4"></div>
        <div class="grid5"></div>
      </div>
    </div>
  );
}

/*
const [repositories, setRepositories] = useState([]);

 useEffect(async () => {
    const response = await fetch('https://api.github.com/users/diego3g/repos');
    const data = await response.json();

    setRepositories(data);
 }, []);

 useEffect(() =>{
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `Você tem ${filtered.length} favoritos`
 }, [repositories]);

 function handleFavorite(id){
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
    });

    setRepositories(newRepositories);
 }
*/