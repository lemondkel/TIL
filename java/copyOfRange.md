copyOfRange()  
----

: 전달받은 배열의 특정 범위에 해당하는 요소만을 새로운 배열로 복사해서 변환!  
` copyOfRange(원본 배열, 복사 시작 인덱스, 복사 마지막 요소의 다음 인덱스)`  
-> 복사되는 배열 타입은 원본 배열 타입과 같음  

```
int[] arr1 = {1, 2, 3, 4, 5};
int[] arr2 = Arrays.copyOfRange(arr1, 2, 4);
                                      // 마지막 요소 다음 인덱스라 인덱스 3의 요소까지 출력  
for(int i=0; i<arr2.length; i++{
  System.out.print(arr[i] + "");
}
```
-> 3 4  

```
Arrays.copyOfRange(arr1, 1, 5);  
```
-> 2 3 4 5  







