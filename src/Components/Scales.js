import React, {Component} from "react";
import Note from './Note';


class Scales extends Component {

    state={
        notes: [
            {
                note: {
                    root: "",
                    interval: "",
                    degree: "",
                }
            }
        ],
        tunings: {
            standard: {
                string1: "E",
                string2: "A",
                string3: "D",
                string4: "G",
                string5: "B",
                string6: "E",
            },
            dropD: {
                string1: "D",
                string2: "A",
                string3: "D",
                string4: "G",
                string5: "B",
                string6: "E",
            },
            openG: {
                string1: "D",
                string2: "G",
                string3: "D",
                string4: "G",
                string5: "B",
                string6: "D",
            },
            DADGAD: {
                string1: "D",
                string2: "A",
                string3: "D",
                string4: "G",
                string5: "A",
                string6: "D",
            }
        }
    }
    
    //Function which generates all notes on guitar neck
    generateNoteData(tuning) {
        let notes = ["A","B","C","D","E","F","G"];
        
        this.state.notes.pop();
        tuning = "standard"
        for(let i=0; i<6; i++) {
            let startingNote ="";
            switch(tuning) {
                case "standard":
                    startingNote = this.state.tunings.standard["string"+(i + 1)];
                    break;
                case "dropD":
                    startingNote = this.state.tunings.dropD["string"+(i + 1)];
                    break;
                case "openG":
                    startingNote = this.state.tunings.openG["string"+(i + 1)];
                    break;
                case "DADGAD":
                    startingNote = this.state.tunings.DADGAD["string"+(i + 1)];
                    break;
            }
                    
            for(let j=0; j<16; j++) {
                //compare startingNote to notes array, and get index of startingNote
                let index = notes.indexOf(startingNote);
                //add index to j, and mod 7 to get index of note in notes array
                let thisNote = notes[(index + j) % 7];
                //add note to notes array
                this.state.notes.push({
                    note: {
                        root: thisNote,
                        interval: "",
                        degree: "",
                    }
                });
            }
        }
    }
    
    generateNotes() {
        this.generateNoteData();
        return (
            this.state.notes.map((note, index) => {
                return (<div className={"note-container"} key={index}>
                    <Note note={note}></Note>
                    <p>Root: <b>{note.note.root}</b></p>
                    <p>Scale: <b>{note.note.scale}</b></p>
                    <p>Degree: <b>{note.note.degree}</b></p>
                </div>)
            })
        )
    }
    
    isInvisible(){
        //Function which turns notes in scale visible/hidden based on parameter,
        // and whether the note is already visible/hidden
    }
    
    render() {
        return (
            <div>
                <h1>Scales</h1>
                {this.generateNotes()}
            </div>
        );
    }
}

export default Scales;