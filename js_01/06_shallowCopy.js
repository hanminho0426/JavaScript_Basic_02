// import _ from 'lodash'

// // 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// const user = {
//   name: 'Git',
//   age: 85,
//   emails: ['l9930426@naver.com']
// }
// //const copyUser = Object.assign({}, user) //얕은 복사
// //const copyUser = {...user} //얕은 복사
// const copyUser = _.cloneDeep(user) //깊은 복사
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('------')
// console.log('------')

// user.emails.push('git0426@naver.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)