const fs = require("fs/promises");

(async () => {
  const watcher = fs.watch("./command.txt"); // data is comming asynchronosly

  for await (const event of watcher) {
    if (event.filename === "command.txt" && event.eventType === "change") {
      // The file was changed...
      // console.log(event);
      console.log("The file was changed.");
    }
  }
})();
