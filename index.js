import process from 'process';
import { franc } from 'franc';
import langs from 'langs';
const language = process.argv[2];
const ans1 = franc(language);
const ans = langs.where("3", ans1);
const kk = ans.name;
console.log(kk);