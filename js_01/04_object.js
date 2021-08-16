// const userAge = {
//   // key: value
//   name: 'Git',
//   age: 85  
// }
// const userEmail = {
//   name: 'git',
//   email: 'l9930426@naver.com'
// }
//                           // 타겟      출처
// const target = Object.assign(userAge, userEmail) //assign은 프로토타입이 아니기 때문에 리터널로 사용못하기 때문에 
//                                                  //Object 전역객체를 사용

// console.log(target)
// console.log(userAge)
// console.log(target === userAge)

// const a = { k: 123 }
// const b = { k: 123 }
// console.log(a === b)


//keys 프로퍼티 이름만 배열로 처리
// const user = {
//   name: 'Git',
//   age: 85,
//   email: 'l9930426@naver.com'
// }

// const keys = Object.keys(user)
// console.log(keys)
// // ['name','age','email']

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)

//구조 분해 할당 (Destructuring assugnment)
//비구조화 할당
// const user = {
//   name: 'Git',
//   age: 85,
//   email: 'l9930426@naver.com',
//   address: 'USA'
// }
// const { name: git, age, email, address ='Korea' } = user //{객체=기본값}
// // E.g, user.address

// console.log(`사용자의 이름은 ${git} 입니다.`)
// console.log(`${git}의 나이는 ${age}세 입니다.`)
// console.log(`${git}의 이메일 주소는 ${email}입니다.`)
// console.log(address) //user 구조 내부에 정의되어 있지 않기에 X

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)

// const fruit = ['Apple', 'Banana', 'Cherry']
// const [, b] = fruit
// console.log(b)

// 전개 연산자 (Spread) ''로 구분된 각각에 아이템으로 구분되어진다.
// const fruits =  ['Apple', 'Banana', 'Cherry']
// console.log(fruits)
// console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry')

// function toObject(a, b, c) {
//   return{
//     a: a,
//     b: b,
//     c: c
//   }
// }
// console.log(toObject(...fruits))
//console.log(toObject(fruits[0],fruits[1],fruits[2],)) //전개 연산자를 사용하지 않으면 일일히 넣어줘야함


// const fruits =  ['Apple', 'Banana', 'Cherry','Orange']
// console.log(fruits)
// console.log(...fruits)

// const toObject= (a, b, ...c) =>({a, b, c}) //매개변수도 전개연산자 사용가능 rest patameter
//   //속성의 이름과 변수의 이름이 같을 경우 하나로 축약 가능
// console.log(toObject(...fruits))