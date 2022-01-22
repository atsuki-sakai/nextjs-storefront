import { atom } from "recoil";  //atomをインポート

const isDrawerOpenState = atom({
    key: "is-drawer-open-state", //どのファイルでもこのstateを参照できるキーとなる、一意の値を設定。（ファイル名と揃えるのが自然）
    default: {
        false,
        () => { }
    }, //デフォルトの値を渡しておく
});

export default isDrawerOpenState