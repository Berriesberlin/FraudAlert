import React, { useEffect, useState } from 'react';
import StoryItem from './StoryItem';
import Comment from './Comment';  // Import the Comment component
import axios from 'axios';

const RealStories = ({ commentsData, handleInsertNode, handleEditNode, handleDeleteNode }) => {  // Accept props for comment handling

  const storiesPerPage = 4;
  const [stories, setStories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Logic for displaying stories
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get(`http://localhost:8082/api/posts?page=${currentPage - 1}&size=${storiesPerPage}`);
        setStories(response.data.posts); // Assuming the API response has posts in `response.data.posts`
        setTotalPages(response.data.totalPages); // Assuming total pages are returned in the response
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, [currentPage]);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="real-stories">
      <h2>Real Stories</h2>
      <p>Showing {indexOfFirstStory + 1} to {indexOfLastStory} of {stories.length} Stories</p>
      <div className="stories">
        {stories.map((story, index) => (
          <div key={index}>
            <StoryItem key={index} story={story} />
            <Comment
            handleInsertNode={handleInsertNode}
            handleEditNode={handleEditNode}
            handleDeleteNode={handleDeleteNode}
            comment={commentsData}
            />
          </div>
        ))}
      </div>
      
      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button key={page} onClick={() => paginate(page + 1)} disabled={currentPage === page + 1}>
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RealStories;