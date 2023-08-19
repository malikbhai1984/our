
"use client"

import { useState } from "react";
import axios from "axios";
const servicePost = () =>{
  const [title , setTitle] = useState("");
 const [desc, setDesc] = useState("");
 const [image, setImage] = useState("")

  const handleClick = ()=>{
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image)
    

    axios.post("http://localhost:5000/api/services", formData).then(res =>{
      console.log(res)
    }).catch(err =>{
      console.log(err)
    })

  };

  return (
    <div>
      <h14>serive Addd</h14><br></br>
      
   title: <input type="text" value={title}   onChange={(e) => setTitle(e.target.value)} /><br></br>
   desc: <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} /><br></br>
   <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
  <buton onClick={handleClick}>Add Servicves</buton>


    </div>
  )
}
export default servicePost;

/*
"use client"
//ye code image ko add kere k leye hy..

import React, { useState, useEffect } from "react";
import axios from "axios";

const servicespost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
 
  const handleClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);


    axios.post("http://localhost:5000/api/services", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="mt-5 text-center">
        <h1>Add Post</h1>
    </div>

      <br />

      {/*
      <div className="ml-5">
      title:{" "}
      <input className=""
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      desc:{" "}
      <input
        value={desc}
        type="text"
        placeholder="desc"
        onChange={(e) => setDesc(e.target.value)}
      />


<label for="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
    <input type="text" id="small-input" className="block  p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />





      <br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>Signup</button>


</div>

*}

<div className="flex items-center justify-center h-screen">
  


  <div class="editor mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <input value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
         class="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none" spellcheck="false" 
    
    />
    <textarea
     value={desc}
     type="text"
         onChange={(e) => setDesc(e.target.value)}
    
    
    class="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>

<br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
    
  
    <div class="icons flex text-gray-500 m-2">
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      <svg class="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" /></svg>
      <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
   
    <div class="buttons flex">
    
      <div onClick={handleClick} class="btn border border-indigo-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-indigo-500">Post</div>
    </div>
  </div>
   
</div>


    </div>
  );
};

export default servicespost;


*/



/*
//ye original code de service ko add kerne ka with category or image es ki oper preactice kerni hy..
"use client"



import React, { useState, useEffect } from "react";
import axios from "axios";

const servicespost = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get/categories")
      .then(res => {
        setCategories(res.data.category);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("category", category);

    axios.post("http://localhost:5000/api/services", formData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Signup page</h2>

      <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((cat) => (
          <option key={cat._id} value={cat._id}>
            {cat.category}
          </option>
        ))}
      </select>

      <br />
      title:{" "}
      <input
        value={title}
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      desc:{" "}
      <input
        value={desc}
        type="text"
        placeholder="desc"
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <br />
      <button onClick={handleClick}>Signup</button>
    </div>
  );
};

export default servicespost;

*/



