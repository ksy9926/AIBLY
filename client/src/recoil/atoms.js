import { atom } from "recoil";

export const usernameState = atom({
  key: "usernameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const userState = atom({
  key: "userState",
  default: "",
});

export const categoryKeyState = atom({
  key: "categoryKeyState",
  default: [
    "전체",
    "아우터",
    "긴팔 상의",
    "반팔 상의",
    "드레스",
    "스커트",
    "짧은 드레스",
    "조끼 드레스",
    "바지",
    "반바지",
    "슬링드레스",
  ],
});

export const categoryDictState = atom({
  key: "categoryListState",
  default: {
    전체: "",
    "반팔 상의": "short sleeve top",
    "긴팔 상의": "long sleeve top",
    아우터: "long sleeve outwear",
    조끼: "vest",
    반바지: "shorts",
    바지: "trousers",
    스커트: "skirt",
    짧은드레스: "short sleeve dress",
    드레스: "long sleeve dress",
    조끼드레스: "vest dress",
    슬링드레스: "sling dress",
  },
});

export const categoryState = atom({
  key: "categoryState",
  default: "",
});

export const pageState = atom({
  key: "pageState",
  default: 1,
});

export const nextPageState = atom({
  key: "nextPageState",
  default: "",
});

export const countAllState = atom({
  key: "countAllState",
  default: 0,
});

export const styleState = atom({
  key: "styleState",
  default: [],
});

export const previousPageState = atom({
  key: "previousPageState",
  default: "",
});

export const featureState = atom({
  key: "featureState",
  default: {},
});

export const uploadState = atom({
  key: "uploadState",
  default: false,
});
