//input창에 입력한 결과 보여주기

let todoType = document.getElementById("todo-type");
let buttonType = document.getElementById("button-type");
buttonType.addEventListener("click", todoResult);

// let tabs = document.querySelectorAll("tab")
// console.log(tabs)

let todoArr = [];

function todoResult() {
  let todoObject = {
    id: randomIdGenerator(),
    todoValue: todoType.value,
    isComplete: false,
  };

  console.log(todoObject);
  todoArr.push(todoObject);

  render();
  // console.log(todoValue);
}

function render() {
  let todo = "";
  for (let i = 0; i < todoArr.length; i++) {
    //todoArr에 push해줘야 하는디..
    todo += `
    <div class="set-list">
        <div>${todoArr[i].todoValue}</div>
      <div>
        <button onclick=done()>다 했음</button>
        <button>삭제</button>
      </div>
    </div>`;
  }
  document.getElementById("listHTML").innerHTML = todo;
}

function done() {
  for(let i=0; i<todoArr.length; i++){
    if(todoArr[i].id == id){
      
    } 
  }

  //객체의 isComplete가 트루라면 밑줄
}

//id주기
function randomIdGenerator() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}
//탭 구분하기
