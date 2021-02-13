const axios=require("axios");
(async function getUser() {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      console.log(response.data.message);
    } catch (error) {
      console.error(error);
    }
  })();
