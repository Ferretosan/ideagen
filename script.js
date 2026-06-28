fetch('ideas.txt')
  .then(response => response.text())
  .then(content => {
    fileContent = content;
    console.log(content);
    console.log(getRandomLineFromFile(fileContent));
  })
  .catch(error => console.error('Error:', error));

const generate = document.getElementById("generate");
const idea = document.getElementById("idea")
let fileContent = "";
let lastIdea = "";

function getRandomLineFromFile(content) {
  const lines = content
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  if (lines.length === 0) {
    return "";
  }

  if (lines.length === 1) {
    return lines[0];
  }

  let nextIdea = lines[Math.floor(Math.random() * lines.length)];
  while (nextIdea === lastIdea) {
    nextIdea = lines[Math.floor(Math.random() * lines.length)];
  }

  return nextIdea;
}

generate.addEventListener("click", function() {
  if (!fileContent) {
    idea.innerHTML = "Ideas are still loading...";
    return;
  }

  const randomLine = getRandomLineFromFile(fileContent);
  lastIdea = randomLine;
  idea.innerHTML = randomLine;
});