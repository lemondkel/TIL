hasNext()와 next()
------

## • hasNext()와 next() 차이!  
➢ **hasNext()** 는 **boolean 타입**으로 반환  
-> 다음에 가져올 값이 있으면 `true`, 없으면 `false`를 리턴  

➢ **next()** 는 매개변수 혹은 iterator되는 타입으로 반환  
-> **아무 타입이나** 반환 가능!!  
(Iterator에 입력된 값들이 String이면 String 값으로 가져옴!)  

예를 들어 `1, 2, 3, 4, 5`라는 숫자들이 저장되어 있는 배열을 Iterator 인터페이스로 가지고 오면,  
**hasNext()** 는 `true`나 `false`를, **next()** 는 `숫자 값`들을 가져옴~! 쉽군 
