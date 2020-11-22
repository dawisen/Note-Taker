var noteData = require("../data/noteData");
// console.log(noteData);

module.exports = function (app) {
  //displays the array with note data in it
  app.get("/api/notes", function (req, res) {
    res.json(noteData.notes());
  });

  app.post("/api/notes", function (req, res) {
    // req.body is available since we're using the body parsing middleware
    noteData.addNote(req.body.title, req.body.text);

    res.json(true);
  });
  app.delete("/api/notes/:id", function (req, res) {
    noteData.deleteNote(req.params.id);
    res.json(true);
  });
}
