// your ImageSlider code here!
import React from "react"

class ImageSlider extends React.Component{
    constructor(props){
        super()

        this.state = {
            currentSlideIndex : 0
        }

        
    }

    render () {

        const message = `I am on slide ${this.state.currentSlideIndex}` 
        return (
            <div>
                {message}
            </div>
        )
    
    }

}

export default ImageSlider 