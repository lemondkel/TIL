## (1) Object.assign() : 객체 복제
```
const user = {  // user에는 객체 자체가 아닌 객체에 저장된 참조값
  name : 'Mike',
  age : 30
}
const cloneUser = user;  
```
복제X!! 참조값만 복제!!   
=> 같은 참조값을 user와 cloneUser가 가지고 있는게 되어서 cloneUser에서 name을 바꾸게 되면 user의 name도 바뀜

### • 복제하려면 이렇게 써야 함
```
const newUser = Object.assign({}, user); 
```
첫번째는 초기값이고, 두번째 매개변수부터 들어온 객체들이 초기값에 병합  
=> 이렇게 하면 `{} + { name : 'Mike', age : 30 } = `이 되어서 아래처럼 잘 복제됨
```
{
  name : 'Mike',
  age : 30,
}
```
이름 바꿔도 user에 영향 X!  
```
newUser.name = 'Tom';
console.log(user.name); // 'Mike'
```
## • 초기값에 값이 있으면 다 가짐
```
Object.assign({ gender:'male' }, user);
```
```
  gender : 'male', 
  name : 'Mike',
  age : 30,
```

### • 키가 같다면 덮어씀  
```
Object.assign({ name:'Tom' }, user);
```
```
  name : 'Mike',
  age : 30,
```

### • 두 개 이상의 객체 합치기 가능  
```
const user = {
  name : 'Mike'
}
const info1 = {
  age : 30,
}
const info2 = {
  gender : 'male',
}

Object.assign(user, info1, info2)
```
## (2) Object.keys() : 키 배열 반환  
```
const user = {
  name:'Mike',
  age: 30,
  gender : 'male',
}
Object.keys(user);
```
`["name", "age", "gender"]`  


## (3) Object.values() : 키 값 배열 반환
```
const user = {
  name:'Mike',
  age: 30,
  gender : 'male',
}
Object.values(user);
```
`["Mike", 30, "male"]`

## (4) Object.entries() : 값 배열 반환
```
const user = {
  name:'Mike',
  age: 30,
  gender : 'male',
}
Object.keys(user);
```
```
[
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"]
]
```

## (5) Object.fromEntries() : 키/값 배열을 객체로
```
const arr = 
[
  ["name", "Mike"],
  ["age", 30],
  ["gender", "male"]
]
Object.fromEntries(user);
```
```
{
  name:'Mike',
  age: 30,
  gender : 'male',
}
```


