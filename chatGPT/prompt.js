const Diff = require("diff");
const fs = require("fs");

async function writePrompt({ system = "", user = "", answer = [] }) {
  const prePrompts = await JSON.parse(
    fs.readFileSync("./prompt.txt", { encoding: "utf8", flag: "r" })
  );

  const prompts = [
    ...prePrompts,
    { system, user, answer, date: new Date().toString() },
  ];

  const data = JSON.stringify(prompts);
  fs.writeFileSync("prompt.txt", data, { encoding: "utf-8" });

  return prompts;
}

function printPrompt(prompts = []) {
  let data = "";
  prompts.forEach((item, idx) => {
    data += "### " + item.date + "\n";
    if (!idx) {
      // system prompt
      data += "\n#### User Prompt\n";
      data += item.user;
      data += "\n#### System Prompt\n";
      data += item.system;

      // answer
      data += "\n#### Answer\n";
      item.answer.forEach((item) => {
        data += `- ${item}` + "\n";
      });

      return;
    }

    //system prompt
    data += "\n#### User Prompt\n";
    data += "<div>";
    const diffSys = Diff.diffChars(item.user, prompts[idx - 1].user);
    diffSys.forEach((part) => {
      const color = part.added ? "#FFCCCB" : part.removed ? "green" : "grey";
      data += `<span  style="color:${color}">`;
      data += part.value;
      data += "</span>";
    });
    data += "</div>\n";

    data += "\n#### System Prompt\n";
    //user prompt
    data += "<div>";
    const diffUser = Diff.diffChars(item.system, prompts[idx - 1].system);
    diffUser.forEach((part) => {
      const color = part.added ? "#FFCCCB" : part.removed ? "green" : "grey";
      data += `<span  style="color:${color}">`;
      data += part.value;
      data += "</span>";
    });
    data += "</div>\n";

    //answer
    data += "\n#### Answer\n";
    item.answer.forEach((item) => {
      data += `- ${item}` + "\n";
    });
  });
  fs.writeFileSync("../docs/chatGPT/analyze.md", data, {
    encoding: "utf-8",
  });
}

module.exports = { writePrompt, printPrompt };
