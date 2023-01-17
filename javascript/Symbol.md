## (1) Symbol  
유일한 식별자를 생성할 때 사용 (유일성 보장)  
```
const a = Symbol(); 
const b = Symbol();

console.log(a)  // Symbol()
console.log(b)  // Symbol()
```
둘 다 Symbol()로 출력되지만 `a === b`, `a == b`는 `false`!!

```
const id1 = Symbol('id'); 
const id2 = Symbol('id');
```
-> 이렇게 해도 `false`!!


```
const id = Symbol('id');
const user = {
  name : 'Mike',
  age : 30,
  [id] : 'myid'
} 
user // { name: "Mike", age: 30, Symbole(id): "myid" }
user[id]  // "myid"
```

```
const user = {
  name : 'Mike',
  age : 30,
}
const id = Symbol('id');
user[id] = 'myid';
```
-> 원본 데이터 안 건드리고 추가 가능  

### • description  
```
const id = Symbol("id입니다");
id.description;
```
-> 전역 심볼이 아닌 경우 `Symbol.keyFor()`로 이름을 얻을 수 없음  
=> `description`을 사용해 이름 얻음  

### • 숨겨진 Symbol key 보기  
Symbol은 `Object.keys()`로 키를 볼 수 었음   
-> `Object.getOwnPropertySymboles()` 사용하면 보기 가능!  
```
const id = Symbol('id');
const user = {
  name : 'Mike',
  age : 30,
  [id] : 'myid'
} 
Object.getOwnPropertySymboles(user);` // [Symbole(id)]
```
-> `Reflect.ownKeys()` 사용하면 객체의 모든 키 보여줌  
```
Reflect.ownKeys(user);  // ["name", "age", Symbole(id)]
```

## (2) Symbol.for() : 전역 심볼  
• 하나의 심볼만 보장받을 수 있음  
• 없으면 만들고, 있으면 가져오기 때문  
• Symbol 함수는 매번 다른 Symbol 값을 생성하지만,  
• Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유  

```
const id1 = Symbol.for('id'); 
const id2 = Symbol.for('id');
```
-> Symbol.for()은 `id1 === id2`가 `true`!!  
이름 얻고싶으면 `Symbole.keyFor(id1)`하면 `"id"` 나옴  


## (3) 응용 예제  
```
// 다른 개발자가 만들어 놓은 객체
const user = {
  name: "Mike",
  age: 30,
}

// 내가 작업
const showName = Symbol("show name");
user[showName] = function() {
  console.log(this.name);
};

user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
```
```
Mike
His name is Mike.
His age is 30.
```












