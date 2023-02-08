문자열의 특정 인덱스의 문자 바꾸기  
------

## • substring() 사용  
➢ `String.substring(int, int)`  
-> 문자열을 두 개로 분할!!  

```
class  Main {
  public static void main(String[] args){
    String str = "Techie Delight";
    char ch = '_';
    int pos = 6;
    
    str = str.substring(0, pos) + ch + str.substring(pos+1);
    // (인덱스 0부터 6까지) + _ + (인덱스 7부터 ~)
    System.out.println(str);    
```
-> `Techie_Delight`

&nbsp;  

## • StringBuilder  
➢ 특정 인덱스에 있는 문자를 교체 
```
class  Main {
  public static void main(String[] args){
    String str = "Techie Delight";
    char ch = '_';
    int pos = 6;
    
    StringBuilder sb = new StringBuilder(str);
    
    sb.setCharAt(pos,ch);
    str = sb.toString();
    
    System.out.println(str);
  }
}
```
-> `Techie_Delight`

### ❓ StringBuilder가 뭔데!!!! 왤케 많이 써!!  
➢ 문자열 더할 때 새로운 객체 생성하는게 아니라 **기존 데이터에 더하는 방식**이양!!!  
-> 속도 빠르고 상대적으로 부하 적음!!  
=> 긴 문자열 더하는 상황에 굿!!  

> **.append()**: 문자열 추가  
> **.length()** : 길이 확인  
> **.insert(int index, String str)** : index 위치에 str 삽입   
> **.replace(int num1, int num2, str)** : num1인덱스부터 num2인덱스까지 str로 대체   
> **.substring(int start, int end)** : 분할/자르기  
> **.deleteCharAt(int index)** : index 위치의 문자 삭제  
> **.delete(int start, int end)** : start부터 end까지 삭제  
> **.toString()** : String으로 변환  
> **.reverse()** : 뒤집음  
> **.setCharAt(int index, String s)** : index 위치의 문자 s로 변경   
> **.setLength(int len)** : 문자열 길이 조정. 현재 문자열보다 길면 공백으로 채워짐(짧으면 삭제)   

&nbsp;  

## • toCharArray()  

```
class  Main {
  public static void main(String[] args){
    String str = "Techie Delight";
    char ch = '_';
    int pos = 6;
    
    char[] chars str.toCharArray();
    
    chars[pos] = ch;
    
    str = String.valueOf(chars);
    
    System.out.println(str);  
  }
}
```
-> `Techie_Delight`  


    
    
    
    
    
    
    
    
    
