const uniqueID = function uniqueId () {
    // put your of length for the id
    var idStrLength = 32;
    // always start with a letter -- base 36 makes for a nice shortcut
    var idStr = (Math.floor((Math.random() * 25)) + 10).toString(36) + "_";
    // add a timestamp in milliseconds as the base
    idStr += (new Date()).getTime().toString(36) + "_";
    //complete the Id using random, alphanumeric characters
    do {
        idStr += (Math.floor((Math.random() * 35))).toString(36);
    } while (idStr.length < idStrLength);

    return (idStr);
};

//note data will be pushed to the NotesArray
var notesArray = [
    {
        title: "Example Note",
        text: "Click the edit icon in the write hand corner to make a new note",
        id: uniqueID(),
    }
  ];

function addNote(title, text) {
    notesArray.push({title, text, id: uniqueID()});
}

function deleteNote(id) {
    notesArray = notesArray.filter(x => x.id !== id)
    // const idx = notesArray.findIndex((x => x.id === id);
    // notesArray.splice(idx, 1);
}
//create a function to return the new notesArray variable
function getnotesarray() { return notesArray}
// export the array to make it accessible in other files using require
exports.addNote = addNote;
exports.deleteNote = deleteNote;
exports.notes = getnotesarray;