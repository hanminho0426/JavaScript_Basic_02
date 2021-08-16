// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

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


