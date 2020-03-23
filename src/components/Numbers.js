import React, {useState} from "react"
import "./Numbers.css"

function Numbers(props){
    const [numDisplay, setNumdisplay] = useState(false);
  
    function handleClick(e) {
      e.preventDefault();
      console.log("clicked")
      if(numDisplay === false){
        setNumdisplay(true)
      } 
      else{
        setNumdisplay(false)
      }
      console.log(numDisplay);
    }

    console.log("number value", props);

    return(
        <div className = "numbers-component">
            <button onClick = {handleClick}>Show or hide</button>
                <div 
                className = "number-container"
                style = {{display: numDisplay ? "flex" : "none"}}
                >
                    <div className = "icon-row">
                    <img src = {props.coin.image}/>   
                        <h1>{props.coin.name}</h1>
                 </div>
                   
                    <div className = "data-container">
                        
                        
                        
                         <div className = "row-container">
                            
                             <div className = "top-row">
                                <div className = "current-price">
                                    <p>Current price: ${props.coin.current_price}</p>
                                
                                   <p> 24 hour high: ${props.coin.high_24h}</p>
                                   <p> 24 hour low: ${props.coin.low_24h}</p>
                                </div>

                             </div>

                                <div className = "bottom-row">
                                    <p>Price change in the last 24 hours: $ { props.coin.price_change_24h}</p>
                                    <p>Percentage change in the last 24 hours: {props.coin.price_change_percentage_24h}%</p>
                                </div>
                                
                             </div>   
                    </div>
                </div>
        </div>
    )

}

export default Numbers