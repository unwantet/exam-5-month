const URL = 'https://dummyapi.io/data/v1'
const appID = '65cb8b38369c97421205d106'
const main = document.getElementById('main')
const gif = 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXhoYmV3b3pteHRsZTZwY3hvNHhqNWwxcjkyZmg4MnM2dngxOG02dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/53QGAMuHBOI8BkRUTk/giphy.gif'



async function fetchData(){
    window.addEventListener('load', (event) =>{
        const load = document.getElementById('loader')   
        load.classList.add('hidden')
        console.log('page is fully loaded');
    });
    try {
        const response = await axios.get(`${URL}/post` , {
            headers:{"app-id": appID}  
        });
        const postDB = response.data.data;
        postDB.forEach(post => {
            const  card = document.createElement('div');
            card.classList.add ('rounded-xl','overflow-hidden','card', )
            checkTxt = post.text.length > 50 ? post.text.substring(0, 50) + "..." : post.text;
            const btn = document.createElement('button');
            btn.classList.add('text-white-500', 'rounded-lg', 'border', 'bg-red-300', 'font-semibold','ml-4','mb-4','p-2' );
            btn.innerText = 'delete';
            
            card.innerHTML = `
                <img src="${post.image}" class="w-full h-40 object-cover" alt = "${post.owner.firstName}'s post">
                <div class="p-4">
                <h2 class="text-lg font-bold">${checkTxt}</h2>
                <p class="text-zinc-400	">${post.owner.firstName}  ${post.owner.lastName}</p>
                <a href="more-post.html?id=${post.id}" class="text-pink-500">Show more..</a>
                </div>
                `                
                card.appendChild(btn);
                main.appendChild(card);
                btn.addEventListener('click', () => {
                    try {     
                        card.remove();
                        console.log(post.id);
                        axios.delete(`${URL}/post/${post.id}`, {
                            headers: { "app-id": appID }
                        })
                    } catch (error) {
                        console.error("Error on deleting data: ", error);
                    } 
                })
            })

            
            
            
            
            
            console.log(postDB);
            
        } catch (error) {
            console.error("Error on getting data: ", error);   
            main.classList.add('flex', 'justify-center', 'items-center','flex-col');
            main.classList.remove('grid');     
            main.innerHTML = `
                <h1 class="font-bold text-9xl">404</h1>
                <p class="text-2xl">Page not found</p>
                <p class="text-xl">${error}</p>
                <img src="${gif}" alt="gif">
            `
        }
        
    }
    
    fetchData();
    

    