const forumLatest = 'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

/* Utility functions */

/**
 * Returns a human-readable string representing the time difference
 * between the current time and a given time in ISO 8601 format.
 *
 * The returned string will be in one of the following formats:
 * - '{number}m ago' if the time difference is less than 1 hour
 * - '{number}h ago' if the time difference is between 1 hour and 24 hours
 * - '{number}d ago' if the time difference is greater than or equal to 24 hours
 *
 * @param {string} isoTime - The time in ISO 8601 format
 * @return {string} - A human-readable string representing the time difference
 */
const timeAgo = function timeAgo(isoTime) {
  const currentTime = new Date();
  const postTime = new Date(isoTime);

  const timeDifferenceInMilliseconds = currentTime.getTime() - postTime.getTime();
  const ONE_MINUTE_IN_MILLISECONDS = 60000;
  const ONE_HOUR_IN_MILLISECONDS = 60 * ONE_MINUTE_IN_MILLISECONDS;
  const ONE_DAY_IN_MILLISECONDS = 24 * ONE_HOUR_IN_MILLISECONDS;
  if (timeDifferenceInMilliseconds < ONE_HOUR_IN_MILLISECONDS) {
    return `${Math.floor(timeDifferenceInMilliseconds / ONE_MINUTE_IN_MILLISECONDS)}m ago`;
  } else if (timeDifferenceInMilliseconds < ONE_DAY_IN_MILLISECONDS) {
    return `${Math.floor(timeDifferenceInMilliseconds / ONE_HOUR_IN_MILLISECONDS)}h ago`;
  } else {
    return `${Math.floor(timeDifferenceInMilliseconds / ONE_DAY_IN_MILLISECONDS)}d ago`;
  }
};

// function to format view count
const viewCount = (views) => (views >= 1000 ? `${Math.floor(views / 1000)}k` : views);

/**
 * Returns an HTML string representing a forum category link.
 *
 * @param {number} categoryId - The ID of the category
 * @return {string} - An HTML string representing a forum category link
 */
const forumCategory = function forumCategory(categoryId) {
  const category = allCategories[categoryId] || { className: 'general', category: 'General' };
  const { className, category: categoryName } = category;

  return `<a href="${forumCategoryUrl}${className}/${categoryId}" class="category ${className}">${categoryName}</a>`;
};

/**
 * Returns an HTML string representing a collection of forum user avatars.
 *
 * @param {array<object>} posters - An array of objects containing the user ID of each poster.
 * @param {array<object>} users - An array of objects containing information about each forum user.
 * @return {string} - An HTML string representing a collection of forum user avatars.
 */
const avatars = function avatars(posters, users) {
  return posters
    .map((poster) => {
      const user = users.find((user) => user.id === poster.user_id);
      const avatarTemplate = user.avatar_template.replace('{size}', 30);
      return `<img src="${avatarUrl + avatarTemplate}" alt="${user.name}" />`;
    })
    .join('');
};

/**
 * Renders the latest forum posts in the #posts-container element.
 *
 * @param {object} data - An object containing the latest forum posts data.
 * @property {object} data.users - An object containing information about each forum user.
 * @property {object} data.topic_list - An object containing the latest forum posts.
 * @property {array<object>} data.topic_list.topics - An array of objects containing information about each forum post.
 */
const showLatestPosts = function showLatestPosts(data) {
  const { users, topic_list } = data;
  const { topics } = topic_list;

  const postsContainer = document.querySelector('#posts-container');
  postsContainer.innerHTML = '';

  topics.forEach((topic) => {
    const { id, title, views, posts_count: postsCount, slug, posters, category_id: categoryId, bumped_at: bumpedAt } = topic;

    const tr = document.createElement('tr');

    const titleLink = document.createElement('a');
    titleLink.className = 'post-title';
    titleLink.href = `${forumTopicUrl}${slug}/${id}`;
    titleLink.textContent = title;
    const categoryLink = forumCategory(categoryId);

    const avatarContainer = document.createElement('div');
    avatarContainer.className = 'avatar-container';
    avatarContainer.innerHTML = avatars(posters, users);

    const replies = postsCount - 1;

    const timeAgoText = timeAgo(bumpedAt);
    tr.innerHTML = `
      <td>${titleLink.outerHTML} ${categoryLink}</td>
      <td>${avatarContainer.outerHTML}</td>
      <td>${replies}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgoText}</td>
    `;

    postsContainer.appendChild(tr);
  });
};

/* ASYNCHRONOUS FUNCTIONS */

/**
 * Fetches the latest forum posts data from the FCC API and renders them in the #posts-container element.
 *
 * @throws {Error} - If there is an error fetching the data or parsing the JSON response.
 */
const fetchData = async function fetchData() {
  try {
    const response = await fetch(forumLatest);
    const data = await response.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error.message);
  }
};

/* RUNNING FUNCTION */
fetchData();
