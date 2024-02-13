const URL = 'https://dummyapi.io/data/v1'
const appID = '65cb8b38369c97421205d106'
const main = document.getElementById('detail')

async function getPostsInfos() {
    try {

        const params = new URLSearchParams(window.location.search);
        const ID = params.get('id');
        const response = await axios.get(`${URL}/post/${ID}`, {
            headers: { 'app-id': appID }
        });
        const post = response.data;
        main.innerHTML = `
        <img src="${post.image}" alt="User's post image">
        <h1 class="text font-bold text-4xl">${post.text}</h1>
        <p class="text-gray-400 font-medium my-3"><span class="text-gray-600"> Publisher: </span> ${post.owner.firstName} ${post.owner.lastName}</p>
        <p class="text-gray-400 font-medium mb-3"><span class="text-gray-600"> Published on: </span> ${post.publishDate.substring(0,10)}    ${post.publishDate.substring(11,16)}</p>
        <p class="text-gray-400 font-medium mb-3"><span class="text-gray-600"> Likes 👍🏽: </span> ${post.likes}</p>
        <p class="text-gray-400 font-medium mb-3"><span class="text-gray-600"> Tags: </span> ${post.tags[0]} , ${post.tags[1]} , ${post.tags[2]}</p>
        `
        console.log(post);
    } catch (error) {
        console.error("Error on getting data: ", error);
    }
}

getPostsInfos();