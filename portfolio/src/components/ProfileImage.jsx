import React from 'react';

export default function ProfileImage({img}) {
    return (
        <div>
                
          <img className="image" src={img} alt="profile" />  
      </div>
        
        
    );
}