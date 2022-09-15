//todo-type에서 값 가져오고
let todoType = document.getElementById("todo-type");
console.log(todoType);

//go누르면 리스트 만들기
let buttonType = document.getElementById("button-type");
buttonType.addEventListener("click", todoList);

// let mode=event.get.target
let tabs = document.querySelectorAll("#tab div");
for (i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

let mode = "all";
//렌더
//어레이에 담은 값을 벨류.텍스트콘텐츠에 넣어 보여준다.
let todoResult = [];
let tabsList = [];

// let done = document.getElementById("done")
// done.addEventListener("click", doneKey)

function todoList() {
  //todoType에 들어가는 value를 가져온다.
  let resultID = {
    todoValue: todoType.value,
    isComplete: false,
    id: randomId(),
  };

  todoResult.push(resultID);
  console.log(resultID);

  //가져온 value를 리스트에 보여준다.
  //set-List 쿼리 선택해서 붙여넣기
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = todoResult;
  } else if (mode == "ongoing" || mode == "done") {
    list = tabsList;
  }
  let todoResultValue = "";
  for (i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      todoResultValue += `<div class="set-list">
      <div class="line-through">
      ${list[i].todoValue}
      </div>
      <div>
      <button onclick="doneKey('${list[i].id}')">다 했음</button>
      <button onclick="deleteKey('${list[i].id}')">삭제</button>
      </div>
      </div>`;
    } else {
      todoResultValue += `
      <div class="set-list">
      <div >
      ${list[i].todoValue}
      </div>
      <div>
      <button onclick="doneKey('${list[i].id}')">다 했음</button>
      <button onclick="deleteKey('${list[i].id}')">삭제</button>
      </div>
      </div>`;
    }
  }
  document.getElementById("listHTML").innerHTML = todoResultValue;
}
//다 하면 가운데줄 긋기 - 아이디 만들기

function doneKey(id) {
  //onclick이벤트로 클릭이 됐으니
  //아이디값을 부여한값에 취소선 긋기
  //isComplete = true

  for (let i = 0; i < todoResult.length; i++) {
    if (todoResult[i].id == id) {
      todoResult[i].isComplete = !todoResult[i].isComplete;
      break;
      //css에서 줄긋기
    }
  }
  render();
  console.log(todoResult);
}

//삭제 누르면 없어지게 하기
function deleteKey(id) {
  for (let i = 0; i < todoResult.length; i++) {
    if (todoResult[i].id == id) {
      todoResult.splice(i, 1);
      break;
    }
  }
  render();
}

//filter 기능은 탭을 한개씩 선택 할 수 있게 해 주는 것.
function filter(event) {
  tabsList = [];
  mode = event.target.id;
  // console.log("필터 클릭됨",)
  if (mode == "all") {
    render();
  } else if (mode == "ongoing") {
    for (let i = 0; i < todoResult.length; i++) {
      if (todoResult[i].isComplete == false) {
        tabsList.push(todoResult[i]);
      }
    }
    render();
  } else if (mode == "done") {
    for (let i = 0; i < todoResult.length; i++) {
      if (todoResult[i].isComplete == true) {
        tabsList.push(todoResult[i]);
      }
    }
    render();
    //mode랑 뭐랑 같다면
  }
}

function randomId() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}

//할일을 해야할일, 다한일 탭에 필터링해서 넣기
//필터
//tab에도 id값을 부여해서 구분해주기
//isComplete 가 false인 상태면 -> 해야 할 일
//isComplete 가 true가 되면 -> 다 한일
