/*유저가 값을 입력한다.
+버튼을 클릭하면, 할일이 추가된다
check 버튼을 누르면 할일이 끝나면서 밑줄이 간다
1, check버튼을 클릭하는 순간 true, false 
2. true이면 끝난걸로 간주하고 밑줄 보여주기 
3. false이면 안 끝난거로 간주하고 그대로
delete 버튼을 누르면 할일 삭제
진행중 끝남 탭을 누르면 언더바가 이동한다.
끝남탭은,ㄱ 끝남 아이템만, 진행중 탭은 진행중인 아이템만 
전체 아이템을 눌러주면 다시 전체아이템으로 돌아옴
*/
// taskList[i].isComplete = !taskList[i].isComplete; // !를 사용하여 그의 반대 값을 설정해줌, *** 


let taskInput = document.getElementById("task-input"); // 유저 입력창
let addButton = document.getElementById("add-button"); // add 버튼 
let taskList = [];  
let deleteButton = document.getElementById("delete-button");

addButton.addEventListener("click", addTask); // add 버튼을 누를 경우 addTask 실행

function addTask(){
    let task = { // 객체를 통해 값에 추가 정보 입력 
        id:randomIDGenerate(),
        taskContent:taskInput.value, // 입력창에 값을 입력
        isComplete:false // 종료 확인
    }
    taskList.push(task); // taskList의 배열에 값 저징 
    console.log(taskList);
    render();
    
}
function render(){
    let resultHTML ="";
    for(let i=0; i<taskList.length; i++){
        let completeIcon = taskList[i].isComplete ? '<i class="fa-solid fa-reply"></i>' : '<i class="fa-regular fa-calendar-check"></i>'; // true일 경우 checkIcon 반환
        if(taskList[i].isComplete == true){// true가 될 경우 done으로 바뀐 text지우기 
            resultHTML += `<div class="task">
            <div class="task-done">${taskList[i].taskContent}</div> 
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">${completeIcon}</button> 
                <button onclick="deleteTask('${taskList[i].id}')"><i class="far fa-trash-alt"></i></button>
            </div>
        </div>`
        }else{
            resultHTML += `<div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">${completeIcon}</i></button> 
                <button onclick="deleteTask('${taskList[i].id}')"><i class="far fa-trash-alt"></i></button> 
            </div>
        </div>`;
        }
    }

    document.getElementById("task-board").innerHTML = resultHTML;

}
function toggleComplete(id){ //버튼을 누를 때마다 id를 받아오는 <button onclick="toggleComplete('${taskList[i].id}')" 위 매개변수 받아오기 
    console.log("id:", id);
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == id){  
            taskList[i].isComplete = !taskList[i].isComplete; // !를 사용하여 그의 반대 값을 설정해줌, *** 
            break;
        }
    }
    render();
    console.log(taskList);
}
function deleteTask(id){ // 매개변수 ㅕ
    for(let i=0; i<taskList.length; i++){ // 인덱스를 돌려서 
        if(taskList[i].id == id){  // taskList[i]의 id가 매개뱐수의 id와 같다면
            taskList.splice(i, 1); //taskList의 i번째 하나만 삭제
            break;
        }
        taskInput.value = "";
    }
    render(); // UI update !!!!! 
}

function randomIDGenerate(){
    return '_' + Math.random().toString(36).substr(2, 9); // randomID 부여

}