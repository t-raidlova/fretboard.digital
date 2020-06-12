const root = document.documentElement;

const fretboard = document.querySelector(".fretboard");
const numberOfFrets = 15;
const numberOfStrings = 6;

const singleFretMarkPositions = [3,5,7,9,15,17,19,21];
const doubleFretMarkPositions = [12,24];

const notesFlat = ['C','Dd','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];
const notesSharp = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];

let accidentals = 'flats'

const app = {
    init() {
        this.setupFreatboard()
    },

    setupFreatboard() {
        //updating css variables
        root.style.setProperty("--number-of-strings", numberOfStrings)

        //add strings to fretboard
        for (let i=0; i< numberOfStrings; i++) {
            let string = tools.createElement("div");
            string.classList.add("string");
            fretboard.appendChild(string);

            //create frets
            for(let fret = 0; fret <= numberOfFrets; fret++){
                let noteFret = tools.createElement('div');
                noteFret.classList.add("note-fret");
                string.appendChild(noteFret);
                
                // adding single fretmarks only to first string
                if (i === 0 && singleFretMarkPositions.indexOf(fret) !== -1){
                    // -1 is the result of indexOf not finding the values in array
                    noteFret.classList.add("single-fretmark")
                }
                // adding double fretmarks
                if ( i === 0 && doubleFretMarkPositions.indexOf(fret) !== -1){
                    let doubleFretMark = tools.createElement('div');
                    doubleFretMark.classList.add("double-fretmark");
                    noteFret.appendChild(doubleFretMark)
                }
                
            }
        }
    }
}

const tools = {
    createElement(element, content){
        element = document.createElement(element);
        if (arguments.length > 1) {
            element.innerHTML = content;
        }
        return element;
    }
}

app.init()