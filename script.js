const button = document.getElementById("random");
const imageContainer = document.getElementsByClassName("image-container")[0];

button.click();
button.addEventListener("click", () => {
  const getCatImage = async () => {
    try {
      const data = await fetch("https://aws.random.cat/meow");
      const processed = data.json();
      Promise.resolve(processed);
      return processed;
    } catch (error) {
      console.log(error);
      imageContainer.innerHTML = `<h3 class="error-message">oops, something went wrong :( please try again after sometime</h3>`;
      Promise.reject(error);
    }
  };

  getCatImage().then((image) => {
    imageContainer.innerHTML = `<img class="image" src="${image.file}" alt="random cat image">`;
  });
});
