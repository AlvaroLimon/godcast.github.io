import React, { useEffect, useState } from 'react';
import '../styles/mediumblog.css'

function MediumBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@godcastmx')
      .then(response => response.json())
      .then(data => setPosts(data.items));
  }, []);

  function convertToPlain(html,maxLength){

    // Create a new div element
    var tempDivElement = document.createElement("div");

    // Set the HTML content with the given value
    tempDivElement.innerHTML = html;

    if(tempDivElement.textContent.length > maxLength) {
        return tempDivElement.textContent.substring(0, maxLength) + '...' || tempDivElement.innerText.substring(0, maxLength) + '...' || "";
    }
    else {
        return tempDivElement.textContent || tempDivElement.innerText || "";
    }
  }

  /*
  function convertToComponent(html) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  }
  */

  /*
  const removeHtmlTags = (text, maxLength) => {
    const withoutTags = text ? text.replace(/(<([^>]+)>)/gi, '') : '';
    const truncated = withoutTags.length > maxLength ? withoutTags.substring(0, maxLength) + '...' : withoutTags;
    return truncated;
  };
  */

  return (
    <div className='blog_container'>
      <h2 className='blog_container_title'>Meditaciones recientes</h2>
        <div className='card_container'>
      {posts.map(post => (
        <div className='card' key={post.guid}>
          <h3 className='card_title'>{post.title}</h3>
          <p className='card_text'>{convertToPlain(post.description, 100)}</p>
          <a className='read_more' href={post.link}>Read more on Medium</a>
        </div>
      )).slice(1,4)}
        </div>
    </div>
  );
}

export default MediumBlog;