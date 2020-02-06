import React from 'react';
import './App.css';

export default function App(){
  
  return (
    <div>
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