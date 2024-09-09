import React from 'react';

function StoryItem({ story }) {
  return (
    <div className="story-item">
      <img src={`data:image/jpeg;base64,${story.image.data}`} alt={story.title} style={{ width: '100%', height: '500px', objectFit: 'contain' }} />
      <p>{new Date(story.uploadDate).toLocaleDateString()}</p>
      <h3>{story.title}</h3>
      <p>{story.description}</p>
    </div>
  );
}

export default StoryItem;
