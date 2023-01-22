import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => { // 얘만 data를 modify 가능
  // 여기서 count는 state임 
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return 0; // hello라고 리턴하면 우리의 앱의 data가 됨
  }
};
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState(); // 버튼들 누를 때마다 출력
};
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" })
};

add.addEventListener("click", handleAdd );
minus.addEventListener("click", handleMinus );
// 내가 store, dispatch, action을 말하면 리덕스가 countModifier을 부름
// dispatch와 함께 counModifier로 메세지를 보내는거

// console.log(countStore);
// 콘솔에 countStore 찍고 getState 들어가서 보면 hello 없는데
// countStore.getState() 찍으면 hello만 딱 나옴