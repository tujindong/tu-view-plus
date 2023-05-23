import commandLineArgs from "command-line-args";
import commandLineUsage from "command-line-usage";
import gitClone from "./utils/gitClone.js";
import prompts from "prompts";
import { readFile } from "fs/promises";

const pkg = JSON.parse(await readFile(new URL("./package.json", import.meta.url)));

//配置命令参数
const optionDefinitions = [
  { name: "version", alias: "v", type: Boolean },
  { name: "help", alias: "h", type: Boolean },
];

//帮助命令
const helpSections = [
  {
    header: "create-tu-view-plus",
    content: "一款 vue3.0 组件库模板",
  },
  {
    header: "Options",
    optionList: [
      {
        name: "version",
        alias: "v",
        typeLabel: "{underline boolean}",
        description: "版本号",
      },
      {
        name: "help",
        alias: "h",
        typeLabel: "{underline boolean}",
        description: "帮助",
      },
    ],
  },
];
const promptsOptions = [
  {
    type: "text",
    name: "name",
    message: "请输入项目名称",
  },
  {
    type: "select",
    name: "template",
    message: "请选择模板",
    choices: [{ title: "create-tu-view-plus", value: 1 }],
  },
];
const options = commandLineArgs(optionDefinitions);

const remoteList = {
  1: "https://github.com/tujindong/tu-view-plus.git",
};

const getUserInfo = async () => {
  const res = await prompts(promptsOptions);
  if (!res.name || !res.template) return;
  gitClone(`direct:${remoteList[res.template]}`, res.name, { clone: true });
};

const runOptions = () => {
  if (options.version) {
    console.log(`v${pkg.version}`);
    return;
  }
  if (options.help) {
    console.log(commandLineUsage(helpSections));
    return;
  }
  getUserInfo();
};

runOptions();
