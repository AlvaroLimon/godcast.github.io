import React, { useEffect, useState } from 'react';
import '../styles/mediumlatest.css'

function LatestPost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40godcastmx&api_key=k4c1wbz0cjrmocxhetuzbzqz2f525zcfexey2h8m')
      .then(response => response.json())
      .then(data => setPosts(data.items));
  }, []);

  /*
  function convertToPlain(html){

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    // Retrieve the text property of the element 
    return tempDivElement.textContent;
  }
  */

  function convertToComponent(html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }

  /*const removeHtmlTags = (text) => {
    const withoutTags = text ? text.replace(/(<([^>]+)>)/gi, '') : '';
    return withoutTags;
  };*/

  return (
    <div className='latestpost_container'>
      <h2 className='latestpost_container_title'>Transcripción de la meditación del día</h2>
        <div className='latestpost_card_container'>
      {posts.map(post => (
        <div className='latestpost_card' key={post.guid}>
          <h3 className='card_title'>{post.title}</h3>
          <p className='card_text_full'>{convertToComponent(post.description)}</p>
          <a className='read_more' href={post.link}>Read more on Medium</a>
        </div>
      ))[0]}
        </div>
    </div>
  );
}

export default LatestPost;