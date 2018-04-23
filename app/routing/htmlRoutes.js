app.get("/survey.html", function(req, res) {
    res.sendFile(path.join("/app/public/survey.html"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join("/app/public/home.html"));
  });
  
  
  // Displays all characters

  //what is the catch all. 