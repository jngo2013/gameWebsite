const router = require("express").Router();
const apiRoutes = require("./apiRoutes");


// "/" is prepended to every route.  if "/api" is hit, go to the "apiRoutes" folder.
router.use("/api", apiRoutes);


module.exports = router;







// routes:
// 1.  if "/api" route is hit, go to the "apiRoutes" folder.
// 2.  now in the "apiRoutes" folder.  
  // a.  if the route has "/legacygames", go to the "legacyGames folder".
  // b.  if the route has "/shorttermgames", go to the "shortTermGames folder"
// 3.  create a "legacyGames" folder with an "index.js" file
  // a.  will have the functions that make an API call to the backend (import functions from controller)
// 4.  create a "shortTermGames" folder with an "index.js" file
  // a.  will have the functionS that make an API call to the backend (import functions from controller)