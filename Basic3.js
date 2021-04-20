// 화살표 함수
//[기존 방식]

let a = function() {
  console.log("function");
}
a();
// 화살표 함수
let a = () => {
    console.log("function");
}
a();

// 딕셔너리 키와 값을 빠르게 꺼내기! - 비구조 할당
let blog = {
	owner : "noah",
	url : "noahlogs.tistory.com",
	getPost() { 
		console.log("ES6 문법 정리"); 
	}
};

//기존 할당 방식
let owner = blog.owner
let getPost = blog.getPost()

//비구조 할당 방식
let { owner, getPost } = blog;       
//각각 blog 객체의 owner , getPost() 의 데이터가 할당
//blog의 키 값과 이름이 같아야 해요!
//(예 - owner가 아니라 owner2를 넣어보세요! 아무것도 안 들어온답니다.)

// ** 앞으로 리액트 네이티브 앱을 만들며 가장 많이 사용할 방식**

//함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
let blogFunction = ({owner,url,getPost}) => {
	console.log(owner)
	console.log(url)
	console.log(getPost())
}

blogFunction(blog)

// 딕셔너리를 짧게
// [기존 방식]

var name = "철수";
var job = "developer";

var user = {
  name: name,
  job: job
}

console.log(user);
//{name: "철수", job: "developer"}
// [최신 방식]

var name = "철수";
var job = "developer";

var user = {
  name,
  job
}

console.log(user);
//{name: "철수", job: "developer"}

// map -반복문
let numbers = [1,2,3,4,5,6,7];
for(let i=0; i<numbers.length; i++){
	console.log(numbers[i]);
}

let numbers = [1,2,3,4,5,6,7];

numbers.map((value,i) => { 
	console.log(value,i) 
})