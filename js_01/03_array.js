//  const numbers = [1, 2, 3, 4]
//  const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers[1])//2 zero-based 0 1 2 3
// console.log(fruits[2])//cherry
// //배열안의 각각의 데이터: 요소 element 또는 item
// //불려진 번호 : 인덱스
// //배열[]안에 넣어 부르는 과정 : 인덱싱

//.length 배열의 길이
// console.log(numbers.length) //4
// console.log(fruits.length) //3
// console.log([1,2].length) //2
// console.log([].length) //0

//.concat() 두개의 배열데이터를 병합해 새로운 데이타에 반환
//원본의 데이터에 수정되지 않고 유지(영향을 안줌)
// console.log(numbers.concat(fruits))
// console.log(numbers)
// console.log(fruits)

// 콜백: 메소드에 인수로 사용되는 함수
// fruits.forEach(function(element, index, array){
//   console.log(element, index, array)
// })

// fruits.forEach(function(fruit, i){
//   console.log(fruit, i)
// })

// .map 새로운 배열을 반환해 만들어냄
// const a = fruits.forEach(function(fruit,i) {
//   console.log(`${fruit}-${i}`)
// })
// console.log(a)


// const b = fruits.map(function(fruit,i){
//   return `${fruit}=${i}`
// })
// console.log(b)


// const c = fruits.map(function(fruit,i){
//   return{ //객체 리터널 방식
//     id: i,
//     name: fruit
//   }
// })
// console.log(c)

//화살표 함수방식으로 수정
// const a = fruits.forEach((fruit,i) => {
//   console.log(`${fruit}-${i}`)
// })
// console.log(a)

// const b = fruits.map((fruit,i)=>({
//   id: i,
//   name: fruit
// }))

// console.log(b)


//.filter() 특정한 기준에 의해 필터링 한다.
// const a = fruits.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => number < 3)
// console.log(b)

// console.log(numbers)

//.find( .findIndex()
//  let a = fruits.find(fruit => /^B/.test(fruit)) //정규표현식 /^B/ 대문자 B로시작하는
//  let b = fruits.find(fruit => /^C/.test(fruit))
//  console.log(a)
//  console.log(b)

//   a = fruits.findIndex(fruit => /^B/.test(fruit)) 
//   b = fruits.findIndex(fruit => /^C/.test(fruit))
//  console.log(a)
//  console.log(b)


// .includes() 배열데이터 부분에 인수로 사용된 특정한 배열데이터가 포함이 되어있는가 확인
// const a = numbers.includes(3)
// console.log(a)

// const b =fruits.includes('git')
// console.log(b)//false fruits데이터에 git은 들어있지 않다.

//-------------------------------------------------
// .push .unshift()
// 원본 수정됨 주의!

// numbers.push(5) //가장 뒷 쪽 부분에 데이터가 삽입되어짐
// console.log(numbers)

// numbers.unshift(0) //가장 앞 부분에 데이터가 삽입되어짐
// console.log(numbers)

//.reverse() 반대로 데이터를 뒤집을 때 사용
// 원본 수정됨 주의!

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

//.splice() 특정한 번호에 데이터를 지우거나 추가하는 용도
// 원본 수정됨 주의!
// numbers.splice(2, 1) // 0 1 2 중 2번에서 아이템을 1개 지우는것
// console.log(numbers) //1 2 4가 나옴
// numbers.splice(2, 2)
// console.log(numbers) //1 2
// numbers.splice(2, 0, 999) // 2번째에 0 아무것도 지우지 않고 그자리에 999추가
// console.log(numbers) 

// fruits.splice(2, 0, 'Orange')
// console.log(fruits)