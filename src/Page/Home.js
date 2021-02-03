import React from 'react';
import Card from '../Card';



export default function Home() {
  return (
    <div>    
   
   <main>
   	   <section class="presentation">
   	       <div class="introduction">
   	       </div>

   	       <div class="cover">
           <li><img src="/jean-puall.jpg" alt="perfume"/></li>
           <li><img src="/the scent.jpg" alt="perfume"/></li>    
           <li><img src="/victor.jpg" alt="perfume"/></li>    
           <li><img src="/stronger.jpg" alt="perfume"/></li>    
           <li><img src="/one million.jpg" alt="perfume"/></li>
                           	       	
   	       </div>

   	   </section>
   </main>

    <div class="intro-text">            
           <h1> Quite a unique mixture that keeps that extraordinary spirit alive.</h1> 
    </div>
    
  
   <Card/>



  
    </div>
  );
}