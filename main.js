// 유저가 값을 입력한다.
// +버튼을 클릭하면, 할일이 추가된다
// delete 버튼을 누르면 할일 삭제 ㅜ
// check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면 언더바가 이동한다.
// 끝남탭은,ㄱ 끝남 아이템만, 진행중 탭은 진행중인 아이템만 
// 전체 아이템을 눌러주면 다시 전체아이템으로 돌아옴

let taskInput = document.getElementById("task-input"); // 유저 입력창
let addButton = document.getElementById("add-button"); // add 버튼 
let taskList = [];  

addButton.addEventListener("click", addTask); // add 버튼을 누를 경우 addTask 실행

function addTask(){
    let taskContent = taskInput.value; // 입력창에 값을 입력 
    taskList.push(taskContent); // taskList의 배열에 값 저징 
    console.log(taskList);
    render();
    
}
function render(){
    let resultHTML ="";
    for(let i=0; i<taskList.length; i++){
        resultHTML += `<div class="task">
        <div>${taskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }

    document.getElementById("task-board").innerHTML = resultHTML;

}