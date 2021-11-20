import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.png";


export default function() {
    return (
      <div className="content-page-wrapper">
        <div 
          className='left-column'
          style={{
            background: "url("+ profilePicture + ") no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "80vh",
            width: "35vw"
            
          }}
        />
        <div className='right-column'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta eveniet ratione? Iste ab aliquid sequi libero, illo necessitatibus impedit minima, possimus dolorum omnis porro, suscipit nulla iure laborum natus.
          Temporibus, aperiam eum? Nulla, quo, hic dolorum quam minus eius, explicabo dolor assumenda aut deserunt repudiandae tempora numquam magni maxime? Quisquam omnis illo perferendis quis accusantium, officiis repellat fugiat nesciunt?
          Eaque, beatae necessitatibus maiores cumque, voluptate delectus rerum pariatur blanditiis nam culpa eligendi repellendus doloremque enim deleniti, placeat hic atque? Ea sunt aspernatur exercitationem eum tempore beatae velit repellendus nihil?
          atur dolore, rerum nobis dignissimos assumenda sint possimus laboriosam, expedita nulla exercitationem soluta consequuntur non vero facilis veniam magni fugiat suscipit pariatur quo? Atque?
          Illum blanditiis labore nemo molestiae. Suscipit odio fugiat ducimus ex illo aliquid excepturi iste animi aliquam totam rem eos corporis laborum saepe eaque, modi iusto nam. Officiis cumque rerum aperiam.
          Deserunt doloribus rem cupiditate id dicta voluptate atque dignissimos laborum animi architecto rerum minima, placeat nemo eaque suscipit! Illum inventore maiores magnam autem fuga eligendi natus earum totam mollitia omnis!
        </div>
      
      </div>
    )
}