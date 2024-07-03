import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Link } from "react-router-dom";



function Taliwind() {
    function hendlvalue(){
     console.log("hendalvalue")
       
    }


 
    return ( 
        <>
    

{/* Navbar */} 

  <nav class="flex justify-center space-x-4 mb-10">
  <Link to ="/Hooks" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-red-400">Hooks</Link>
  <Link to ="/Todo" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-red-400">TODO</Link>
  <Link to ="/Homepage" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-red-400">Projects</Link>
  <Link to ="/Tabal" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-red-400">Table</Link>
</nav>






{/* email */}


<div className="m-auto w-2/4 shadow-2xl p-5">

    

<label className="block">
  <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ml-10">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-sm rounded-md sm:text-sm focus:ring-1 ml-10" placeholder="you@example.com" />
</label>

<br/>

{/* search */}

<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 ml-10">
    Search
  </span>
<label className="relative block ml-10">
  <span className="sr-only">Search</span>
  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
  </span>
  <input className="placeholder:italic placeholder:text-slate-400 block bg-white w-sm border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
</label>

<br/>



{/* choose file*/}


<form className="flex items-center space-x-6 ml-10">
  <div className="shrink-0">
    <img className="h-16 w-16 object-cover rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80" alt="Current profile photo" />
  </div>
  <label className="block">
    <span className="sr-only">Choose profile photo</span>
    <input type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
</form>

<br/>

{/* btn */}


<button className="pl-10 pb-2 pr-10 pt-2 bg-orange-600 hover:bg-orange-500 text-white rounded-2xl ml-20" onClick={hendlvalue}>Button</button>
 




</div>




{/* massage */}



<div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 mt-10">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/media/image-8.jpg" alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Erin Lindford
      </p>
      <p className="text-slate-500 font-medium">
        Product Engineer
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>




<div className=" shadow-2xl  m-auto mt-5 w-1/4 p-5">
    
<fieldset >
  <legend>Published status</legend>

  <input id="draft" className="peer/draft cursor-pointer" type="radio" name="status" checked />
  <label for="draft" className="peer-checked/draft:text-sky-500 space-x-4">Draft </label>
  {"\t"}  {"\t"}

  <input id="published" className="peer/published cursor-pointer" type="radio" name="status" />
  <label for="published" className="peer-checked/published:text-sky-500"> Published</label>

  <div className="hidden peer-checked/draft:block">Drafts are only visible to administrators.</div>
  <div className="hidden peer-checked/published:block">Your post will be publicly visible on your site.</div>
</fieldset>
</div>






<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10 mb-10">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="/media/image-3.jpg" alt="Modern building architecture"/>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>



<table class="border-separate border border-slate-500 m-auto w-2/4 h-60">
  <thead>
    <tr>
      <th class="border border-slate-600 ...">State</th>
      <th class="border border-slate-600 ...">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-700 ...">Indiana</td>
      <td class="border border-slate-700 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-700 ...">Ohio</td>
      <td class="border border-slate-700 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-700 ...">Michigan</td>
      <td class="border border-slate-700 ...">Detroit</td>
    </tr>
  </tbody>
</table>


{/* Processing */}




<div className='flex justify-center items-center mt-10 mb-10'>
<button type="button" class="w-15 h-15 bg-slate-400 ml-10" disabled>
  <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
<RefreshIcon/>
  </svg>
  Processing...
</button>

</div>


{/* arrow */}

<svg class="animate-bounce w-14 h-14 bg-zinc-600 text-sky-600 rounded-full m-auto mt-20 ">
        <ArrowDownwardIcon/>
     </svg>

    

    <div className='w-14 h-10 bg-slate-500 rounded-sm m-auto'>
    
    <span class="relative flex h-3 w-3 ml-12">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500 " > <h></h></span>
</span>
    </div>




    <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mt-10">
  <div class="animate-pulse flex space-x-4">
    <div class="rounded-full bg-slate-700 h-10 w-10"></div>
    <div class="flex-1 space-y-6 py-1">
      <div class="h-2 bg-slate-700 rounded"></div>
      <div class="space-y-3">
        <div class="grid grid-cols-3 gap-4">
          <div class="h-2 bg-slate-700 rounded col-span-2"></div>
          <div class="h-2 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div class="h-2 bg-slate-700 rounded"></div>
      </div>
    </div>
  </div>
</div>
    </>



 );
  
}

export default Taliwind;



