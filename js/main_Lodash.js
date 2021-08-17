//lodash 사용법
import _ from 'lodash'

// const usersA= [
//   {
//     userId: '1',
//     name: 'Git'
//   }, 
//   {
//     userId: '2',
//     name: 'Neo'
//   }
// ]
// const usersB= [
//   {
//     userId: '1',
//     name: 'Git'
//   }, {
//     userId: '3',
//     name: 'Amy'
//   }
// ]

// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC,'userId')) //_.uniqBy 한개일때, 하나의 배열 데이터에서 어떤 특정한 속성의 이름으로 고유화를 시켜주는 메소드

// const usersD= _.uniqBy(usersA, usersB, 'userId') //_.uniqBy 여러개일때 합치기 전에 여러개의 데이터를 적어주고 맨 마지막의 그 배열들을 합칠 때 고유화 시킬 속성의 이름을 마지막에 배치하면
//                                                  //고유화가 된 새로운 배열을 반환한다.
// console.log('unionBy', usersD)


//-------------------------

// const users = [
//   { userId: '1', name: 'Git' },
//   { userId: '2', name: 'Neo' },
//   { userId: '3', name: 'Amy' },
//   { userId: '4', name: 'Evan' },
//   { userId: '5', name: 'Lewis' }
// ]

// const foundUser = _.find(users, { name: 'Amy' })
// const foundUserIndex = _.findIndex(users, {name: 'Amy'})
// console.log(foundUser) //배열 추출
// console.log(foundUserIndex)//인텍스번호 추출

// _.remove( users, {name: 'Git'} ) //지정한 객체 데이터 삭제
// console.log(users)