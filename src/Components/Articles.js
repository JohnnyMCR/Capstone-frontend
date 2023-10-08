// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import ArticleCard from './ArticleCard';

// const API_URL = `https://newsapi.org/v2/everything?q=parents%20AND%20-musk&apiKey=ed42536e501544038a71e8e2ff9aac12`;

// export default function Articles() {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log('Fetching articles...');
//     axios
//       .get(API_URL)
//       .then((response) => {
//         console.log('API response:', response);
//         console.log('Articles data:', response.data);

//         if (response.data.articles && response.data.articles.length > 0) {
//           setArticles(response.data.articles);
//           setLoading(false);
//         } else {
//           setError('No articles available.');
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching articles', error);
//         setError('Error fetching articles. Please check your API key and network connection.');
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="column">
//       {loading ? (
//         <p>Loading articles...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : articles.length > 0 ? (
//         articles.map((article, index) => (
//           <ArticleCard key={index} article={article} />
//         ))
//       ) : (
//         <p>No articles available.</p>
//       )}
//     </div>
//   );
// }

