//Import
const express = require("express");
const http = require("http");
const { createClient } = require("@deepgram/sdk");
const dotenv = require("dotenv");
const routes = require("./server/index");
dotenv.config();

//Environment Variables
const client = createClient(process.env.DEEPGRAM_API_KEY);
const clearConnect = createClient(process.env.CLEAR_CONNECT_API_KEY);

//Server
const app = express();
const server = http.createServer(app); //Not Used

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public/"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

//Why is this needed?
const getProjectId = async () => {
  const { result, error } = await client.manage.getProjects();

  if (error) {
    throw error;
  }

  return result.projects[0].project_id;
};

//Pull Deepgram API Key from Deepgram
const getTempApiKey = async (projectId) => {
  const { result, error } = await client.manage.createProjectKey(projectId, {
    comment: "short lived",
    scopes: ["usage:write"],
    time_to_live_in_seconds: 60,
  });

  if (error) {
    throw error;
  }

  return result;
};

//Route to Pull Deepgram API Key into other site elements
app.get("/key", async (req, res) => {
  const projectId = await getProjectId();
  const key = await getTempApiKey(projectId);

  res.json(key);
});

//Route to Pull ClearConnect API Key into other site elements
app.get("/ccKey", async (req, res) => {
  res.json({ key: process.env.CLEAR_CONNECT_API_KEY });
});

//Middleware for connecting server.js to routes
app.use(routes);

//Test Route to Catch Failures in Express Routes
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});