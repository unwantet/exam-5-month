const URL = 'https://dummyapi.io/data/v1'
const appID = '65cb8b38369c97421205d106'
const main = document.getElementById('main')


async function fetchData(){
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

            
            
            window.addEventListener('load', function(){
                var loader = document.querySelector('.loader');    
                loader.style.display = 'none';
            });
            
            console.log(postDB);
            
        } catch (error) {
            console.error("Error on getting data: ", error);        
        }
        
    }
    
    fetchData();
    
    btn.addEventListener('click', () => {
        alert("hello")
    })
    
    