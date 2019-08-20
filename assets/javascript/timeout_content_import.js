const orderedTagSlugs = [
  "ccm-events",
  "church-family",
  "other-events",
  "jobs",
  "accommodation"
];

const containerElements = {};

function getContainerElement(tagName, tagSlug) {
  if (tagSlug in containerElements) {
    return containerElements[tagSlug];
  } else {
    const newContainerElement = document.createElement("div");
    newContainerElement.className = "timeout-container";
    const headingElement = document.createElement("h1");
    headingElement.textContent = tagName;
    newContainerElement.appendChild(headingElement);
    containerElements[tagSlug] = newContainerElement;
    return newContainerElement;
  }
}

function placePost({ title, html, feature_image, tags }) {
  if (tags.length <= 0) {
    return;
  }

  const containerElementForPost = getContainerElement(
    tags[0].name,
    tags[0].slug
  );
  const postDivElement = document.createElement("div");
  const postTitleElement = document.createElement("h2");
  postTitleElement.textContent = title;
  const postContentElement = document.createElement("div");
  postContentElement.innerHTML = html;
  postDivElement.appendChild(postTitleElement);
  postDivElement.appendChild(postContentElement);
  containerElementForPost.appendChild(postDivElement);
}

const postsApiUrl = "https://tomduckering.ghost.io/ghost/api/v2/content/posts";
const postsApiKey = "c8c7922a00ecfb877b113663a9";
const postsApiFields = "title,html,feature_image";
const postsApiInclude = "tags";

fetch(
  `${postsApiUrl}?key=${postsApiKey}&fields=${postsApiFields}&include=${postsApiInclude}`
)
  .then(r => r.json())
  .then(data => {
    data.posts.forEach(placePost);
    orderedTagSlugs.forEach(tagSlug => {
      if (containerElements[tagSlug]) {
        document
          .getElementById("timeout-content")
          .appendChild(containerElements[tagSlug]);
      }
    });
  });
