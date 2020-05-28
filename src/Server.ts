import app from "./Startup";

// Express server endpoint initialization.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));