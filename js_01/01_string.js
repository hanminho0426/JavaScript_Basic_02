// const result = 'Hello world!'.indexOf('git') //일치하는 값은 몇번째부터 시작인지 나오지만 다른 문자를 넣으면 -1이 나온다.
// console.log(result)

//Stirng.prototype.indeOf()

// const str = '0123'

// console.log(str.length) //문자 데이터의 길이의 수
// console.log('0123'.length)

// const st = 'Hello world!'

// console.log(st.indexOf('world')) //있는 값은 몇번째부터 시작하는지
// console.log(st.indexOf('git')) // 없는값은 -1로 나타남

// console.log(st.indexOf('git') !== -1) //부정연사자를 사용 없을경우 flase

// console.log(st.slice(0,3))//slice(시작번호,끝번호) Hel 어디서 시작해서 몇번째부터 잘라낸 것인가
// console.log(st.slice(6,11))//world

// console.log(st.replace('world','git!')) //Hello git!! // replace('기존문자','바꾸고싶은 문자')
// console.log(st.replace(' world!','')) //기존의 문자을 제거하는 용도로도 사용가능하다.

// let s = 'l9930426@naver.com'

// console.log(s.match(/.+(?=@)/)[0]) //아이디만 나오게 됨/정규표현식 
//                                    //뒤에 배열은 내용 중 0번째 데이터만 사용하겠다는 

// s ='      Hello world   '

// console.log(s.trim()) //문자의 공백제거