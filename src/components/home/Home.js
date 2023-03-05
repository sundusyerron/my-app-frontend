import background from '../../img/background.jpg';
import React from "react";
import Header from './Header'
// import styles from '../memes/styles.module.css'


function Home(){
    return(
      <>
      <Header />

     
      
      <div style={{ backgroundImage: `url(${background})`}} className="h-screen bg-cover bg-center md:bg-cover md:bg-center sm:bg-cover sm:bg-center flex flex-col justify-center items-center font-sans">
        <h2 className='text-6xl font-medium hover:font-extrabold tracking-widest text-center uppercase leading-loose m-4'>MEME GENERATOR APP</h2>
        <p className='text-lg leading-loose m-2'>
          <span class="material-icons md-light">face</span>
           <span class="material-icons md-48">face</span>
          Welcome to your home of the funniest memes on the web. 
          Have a blast browsing through the memes.
        </p>
        
        <hr />
        <p className='text-lg leading-loose m-2'>
          Use our application 
          to even make your own memes.
        </p>
      </div>
      
      </>
      
    )
}

export default Home;