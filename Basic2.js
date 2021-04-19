// 만들기
function 함수이름(필요한 변수들) {
	내릴 명령들을 순차적으로 작성
}
// 사용하기
함수이름(필요한 변수들);

// 두 숫자를 입력받으면 더한 결과를 돌려주는 함수
function sum(num1, num2) {
	console.log('num1: ', num1, ', num2: ', num2);
	
	//return 으로 값을 돌려주는, 뱉는 구조로 변수에 값을 전달 할 수도 있습니다.
	return num1 + num2;
}

sum(3, 5); // 8
sum(4, -1); // 3
let result = sum(10,10)
console.log(result) // 20

let a = function() {
    console.log('리터럴 방식 함수')
}

a()

// 반복문
for (let i = 0; i < 100; i++) {
	console.log(i);
}

let people = ['철수','영희','민수','형준','기남','동희']
for (let i=0; i < people.length; i++) {
    console.log(people[i])
}

let scores = [
	{'name':'철수', 'score':90},
	{'name':'영희', 'score':85},
	{'name':'민수', 'score':70},
    {'name':'형준', 'score':50},
    {'name':'기남', 'score':68},
    {'name':'동희', 'score':30},
]

for (let i = 0 ; i < scores.length ; i++) {
	console.log(scores[i]);
}

for (let i = 0 ; i < scores.length ; i++) {
    if(scores[i]['score'] < 70) {
        console.log(scores[i]['name'])
    }
}


function get_sum(n) {
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += i;         // sum을 i만큼 증가시켜라. sum = sum + i 와 동일!
    }
    return sum
}

let result = get_sum(10); // return 결과인 sum이 result에 저장
console.log(result)       // 45를 출력

//다음에서 '딸기'는 몇 개일까? 
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
	let fruit = fruit_list[i];
	if (fruit == '딸기') {
		count += 1;
	}
}
console.log(count);


for (let i = 0; i < mise_list.length; i++) {
    let mise = mise_list[i];
    if (mise["IDEX_MVL"] < 40) {
      let gu_name = mise["MSRSTE_NM"];
      let gu_mise = mise["IDEX_MVL"];
      console.log("40보다 작은 구: " + gu_name + ", " + gu_mise);
    }
  }


