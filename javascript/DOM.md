프로퍼티
====

### ☻ 요소 노드에 대한 이동 프로퍼티
&nbsp;
#### 노드 중에서도 '요소 노드'인 경우에만 존재하는 프로퍼티들
&nbsp;

|프로퍼티|유형|결과|
|-----|----|----|
|element.children|자식 요소 노드|element의 자식 요소 모음|
|element.firstElementChild|자식 요소 노드|element의 첫번째 자식 요소 하나|
|element.lastElementChild|자식 요소 노드|element의 마지막 자식 요소 하나|
|element.parentElement|부모 요소 노드|element의 부모 요소 하나|
|element.previousElementSibling|형제 요소 노드|element의 이전 혹은 좌측 요소 하나|
|element.nextElementSibling|형제 요소 노드|element의 다음 혹은 우측 요소 하나|


&nbsp;
&nbsp;
&nbsp;





### ☻ 모든 노드에 대한 이동 프로퍼티
&nbsp;
#### 요소 노드가 아닌 다른 노드들 이동하고 싶은 경우

&nbsp;
|프로퍼티|유형|결과|
|----|---|---|
|node.childNodes|자식 노드|node의 자식 노드 모음|
|node.firstChild|자식 노드|node의 첫번째 자식 노드 하나|
|node.lastChild|자식 노드|node의 마지막 자식 노드 하나|
|node.parentNode|부모 노드|node의 부모 요소 하나|
|node.previousSibling|형제 노드|node의 이전 혹은 좌측 노드 하나|
|node.nextSibling|형제 노드|node의 다음 혹은 우측 노드 하나|

&nbsp;&nbsp;
```
<!DOCTYPE HTML>
<html>
<head>
    <JavaScript>
</head>
<body>
    I Love Javascript
    <!-- I Love HTML -->
</body>
</html>
```
여기서 HTML 태그는 **요소 노드**,
문자들은 **텍스트 노드**,
주석은 **주석 노드**로 DOM트리에 반영된다.  
(태그와 태그 사이에 줄 바꿈과 들여쓰기로 인한 띄어쓰기도 텍스트 노드로 생성된다.)