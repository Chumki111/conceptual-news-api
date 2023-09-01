const handleCategory = async() => {
  
   const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
   const data = await response.json()

   const tabContainer = document.getElementById('tab-container');

   data.data.news_category.slice(0,3).forEach(category => {
      const div = document.createElement('div');
      div.innerHTML = `
       <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a> 
     
      `;
      tabContainer.appendChild(div);
   });

  
};

const handleLoadNews = async (categoryId) => {
      const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)

      const data = await response.json()

      const cardContainer = document.getElementById('card-container');
      cardContainer.innerHTML = '';
      data.data?.forEach(news =>{
         console.log(news)
         const div = document.createElement('div');
         div.innerHTML = `
         <div class="card w-96 bg-base-100 shadow-xl">
         <figure class="px-10 pt-10">
           <img src="${news?.image_url}" alt="Shoes" class="rounded-xl" />
         </figure>
         <div class="card-body items-center text-center">
           <h2 class="card-title">${news.title.slice(0,40)}</h2>
           <p>${news.details.slice(0,40)}</p>
           <h3>total views : ${news.total_view ? news.total_view : 'no views'} </h3>
           <div class="card-actions">
             <button class="btn btn-primary">Buy Now</button>
           </div>
         </div>
       </div>
         
         `;

         cardContainer.appendChild(div)
      });

}

handleCategory();
handleLoadNews('01');