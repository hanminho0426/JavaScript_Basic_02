// 데이터 불편성(Immutability)
// 원시 데이터: String, Number, Boolean, undefinedm null
// => 생긴 것이 같으면 같은 데이터
// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b= a
// console.log(a, b, a === b)
// a= 7
// console.log(a, b, a === b)
// let c = 1
// console.log(a, c, a === b)

// 참조형 데이터: Object, Array, Function
// => 생긴 것이 같아도 다를 수 있다.
// 데이터의 복사가 아닌 참조 주소만 바뀌는 것

// let a = { k: 1 } //객체데이터 서로 다른 객체데이터
// let b = { k: 1 } //객체데이터 새로운 값이 나올 때 마다 새로운 객체 데이터가 생겨나는 것
//                  //이를 데이터의 불변성이 아닌 "가변성"이라고 한다.
// console.log(a, b ,a === b)
// a.k = 7
// b = a //b의 값을 a로 바꾸어 버리면서 같은 객체가 된다
// console.log(a, b, a === b)
// a.k =  2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a, b, c, a === c)