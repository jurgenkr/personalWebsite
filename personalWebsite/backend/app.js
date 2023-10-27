const path = require('path');
const express = require("express"); 
const app = express(); 

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/test", (req, res) => { 
  res.json({ message: "Hello from server!" });
  console.log("Connected to React"); 
  res.redirect("/");  
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));