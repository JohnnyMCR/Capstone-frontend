import React, {useState, useEffect} from 'react'
import axios from "axios";
import ArticleCard from './ArticleCard';
const API = process.env.REACT_APP_API_URL;

export default function Articles() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
          .get(`${API}/articles`)
          .then((response) => {
            setArticles(response.data);
          })
          .catch((e) => console.warn("catch", e));
      }, []);

  return (
    <div className="column">
    {articles.map((article) => {
      return <ArticleCard key={article.id} article={article} />;
    })}
  </div>
  )
}
