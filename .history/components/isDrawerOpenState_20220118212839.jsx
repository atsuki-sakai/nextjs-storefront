import { atom } from "recoil";  //atomをインポート

export const isDrawerOpenState = atom({
    key: "modalState", //どのファイルでもこのstateを参照できるキーとなる、一意の値を設定。（ファイル名と揃えるのが自然）
    default: [false], //デフォルトの値を渡しておく
});