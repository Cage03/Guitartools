import React, {Component} from "react";
import Chord from "./Chord";

//Component containing buttons that reveal specific chords
class Chords extends Component {
    
    ImageCirculator(buttonId){
        //functions that shows images based on parameter buttonId
    }
    
    render() {
        return (
            <div>
                <h1>Chords</h1>
                Chords :)
                <Chord/>
            </div>
        );
    }
}

export default Chords;