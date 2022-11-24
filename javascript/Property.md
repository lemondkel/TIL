inner/outerHTML, textContent 비교
====
&nbsp;

```
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>JS with Codeit</title>
</head>
<body>
  <div id="content">
    <h2 id="title-1">Color-1</h1>
    <ul id="list-1">
      <li>Red</li>
      <li>Orange</li>
      <li>Yellow</li>
      <li>Green</li>
      <li>Blue</li>
      <li>Navy</li>
      <li>Purple</li>
    </ul>
    <h2 id="title-2">Color-2</h1>
    <ul id="list-2">
      <li>Pink</li>
      <li>Gray</li>
      <li>Black</li>
      <li>White</li>
      <li>Gold</li>
      <li>Silver</li>

    </ul>
  </div>
  <script src="index.js"></script>
</body>
</html>
```
&nbsp;  


## ☻ 1.element.innerHTML  

&nbsp;  

요소 내부의 HTML 코드를 문자열로 리턴해 준다. (내부의 줄 바꿈, 띄어쓰기 포함)
&nbsp;  


```
const myTag = document.querySelector('#list-1');
console.log(myTag.innerHTML);
```  
&nbsp;
### ○ 결과
```
Color-1
    • Red
    • Orange
    • Yellow
    • Green
    • Blue
    • Navy
    • Purple

Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```
### ● console창
```    
    <li>Red</li>
    <li>Orange</li>
    <li>Yellow</li>
    <li>Green</li>
    <li>Blue</li>
    <li>Navy</li>
    <li>Purple</li>
```

&nbsp;
&nbsp;  

▸ 요소 안의 정보를 확인할 수도 있지만, 내부의 HTML 자체를 수정할 때 좀 더 자주 활용된다. (내부의 값을 완전히 새로운 값으로 교체)
&nbsp;

```
const myTag = document.querySelector('#list-1');

console.log(myTag.innerHTML);
myTag.innerHTML = '<li>Rainbow</li>';
console.log(myTag.innerHTML);
```
&nbsp;  

### ○ 결과
```
Color-1
    • Rainbow

Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```
&nbsp; 
&nbsp;  
&nbsp; 


## ☻ 2. element.outerHTML
&nbsp;  
‣ 요소 노드 자체의 전체적인 HTML 코드를 문자열로 리턴해준다. (내부의 줄 바꿈, 띄어쓰기 포함)  

&nbsp; 
```
const myTag = document.querySelector('#list-1');

console.log(myTag.outerHTML);
```

&nbsp; 
### ○ 결과  

```
Color-1
    • Red
    • Orange
    • Yellow
    • Green
    • Blue
    • Navy
    • Purple

Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```
### ● console창
```    
    Red
    Orange
    Yellow
    Green
    Blue
    Navy
    Purple
```
&nbsp;
&nbsp;

‣ outerhtml은 새로운 값을 할당할 경우 요소 자체가 교체된다.

&nbsp;  

```
const myTag = document.querySelector('#list-1');

console.log(myTag.outerHTML);
myTag.outerHTML = '<ul id="new-list"><li>Rainbow</li></ul>';
```

&nbsp;  

### ○ 결과

```
Color-1
    • Rainbow
    
Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```


&nbsp;
&nbsp;  
&nbsp;  


## ☻ 3. element.textContent

&nbsp;  

‣ 요소 안의 내용들 중에 HTML 태그 부분은 제외하고 텍스트만 가져온다. (내부의 줄 바꿈, 띄어쓰기 포함)

&nbsp;  

``` 
const myTag = document.querySelector('#list-1');  

console.log(myTag.textContent);
```

&nbsp;  

### ○ 결과
```
Color-1
    • Red
    • Orange
    • Yellow
    • Green
    • Blue
    • Navy
    • Purple
Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```

### ● console창
```    
    <li>Red</li>
    <li>Orange</li>
    <li>Yellow</li>
    <li>Green</li>
    <li>Blue</li>
    <li>Navy</li>
    <li>Purple</li>
```

&nbsp;  
‣ 새로운 값을 할당하면 innerHTML과 마찬가지로 내부의 값을 완전히 새로운 값으로 바꾼다.  
&nbsp;

```
const myTag = document.querySelector('#list-1');
console.log(myTag.textContent);
myTag.textContent = 'Rainbow';
```
&nbsp; 
### ○ 결과  

```
Color-1
    • Rainbow

Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```   


&nbsp; 
&nbsp;  


‣ 하지만 textContent는 말 그대로 텍스트만 다루기 때문에, 특수문자도 그냥 텍스트로 처리한다.  
&nbsp; 
```
const myTag = document.querySelector('#list-1');
console.log(myTag.textContent);
myTag.textContent = '<li>Rainbow<li>';
```
&nbsp;  
### ○ 결과  

```
Color-1
    <li>Rainbow</li>

Color-2 
    • Pink
    • Gray
    • Black
    • White
    • Gold
    • Silver
```