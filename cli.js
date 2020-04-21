var runner = require("yeoman-gen-run");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.post("/", async function(req, res, err) {
  try {
    console.log(req.body);
    const answers = {
      appName: "test-app",
      useTypeScript: true,
      useLess: true,
      installDeps: true,
      type: "Survey",
      name: "Unamed"
    };

    raw_data = req.body;
    for (field in raw_data["fields"]) {
      if (field["name"] == "username") {
        answers["name"] = field["string"];
      }

      if (field["name"] == "appName") {
        answers["appName"] = field["string"];
      }

      if (field["name"] == "appType") {
        answers["type"] = field["string"];
      }
    }

    var genName = "busilop";
    var outDir = "./output";
    
    var promise = await runner.runGenerator(
      genName,
      {
        answers,
        options: {
          onconflict: "force"
        }
      },
      outDir
    );
    // const result = await promise;
    if (promise) {
      res.send("respond with a resource");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
