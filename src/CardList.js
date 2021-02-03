import React from 'react';
import Card from './Card';

 const CardList =({ perfumes }) => {
  return(
     {
         perfumes,map(user,i) {
            return(
                <Card
                 key={i} 
                 id={perfumes[i].id}
                 name={perfumes[i].name}
                 company={perfumes[i].company}
                 />
                 );
                 }
   }

    
    );
}

export default CardList;