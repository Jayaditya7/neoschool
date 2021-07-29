import React, {useState} from 'react'
import KeyFeaturesElement from './KeyFeaturesElement'
// import photo1 from '../../public/images/icons/design.png'
// import photo2 from '../../public/images/icons/coin.png'
// import photo3 from '../../public/images/icons/budget.png'

function KeyFeatures() {
    const element=[
        {heading:"DEVELOPMENT",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"},
        {heading:"business",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"},
        {heading:"accounting",para:"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"}
    ]
    return(
        <div className={"key-feature container-fluid"}>
           <div className={"container"}>
                <div className={"heading"}>
                   <h2>Key Features</h2>
                   <span></span>
                </div>
               <div className={"row"}>
                    <KeyFeaturesElement  heading={'DEVELOPMENT'} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"}></KeyFeaturesElement>
                    <KeyFeaturesElement  heading={'DEVELOPMENT'} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"}></KeyFeaturesElement>
                    <KeyFeaturesElement  heading={'DEVELOPMENT'} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"}></KeyFeaturesElement>
                    <KeyFeaturesElement  heading={'DEVELOPMENT'} para={"Lorem ipsum dolor sit amet consectetur adipisicing elit Facilis molestias excepturi fugit, similique laborum necessitatibus?"}></KeyFeaturesElement>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures