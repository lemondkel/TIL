Array.sort()
----


## • 배열의 오름차순 정렬  
➢ Arrays.sort() 메소드의 매개값으로 기본 타입 배열이나 String 배열을 지정해주면 자동으로 오름차순 정렬!  

### ˚ 기본타입 배열 오름차순  
```
import java.util.Arrays;

public class Sort{
    public static void main(String[] args)  {
        int arr[] = {4,23,33,15,17,19};
        Arrays.sort(arr);
        
        for (int i : arr) {
            System.out.print("["+i+"]");
        }
    }
}
```

```
[4][15][17][19][23][33]
```

### ˚ String 배열 오름차순 정렬  
```
import java.util.Arrays;

public class Sort{
    public static void main(String[] args)  {
        String arr[] = {"apple","orange","banana","pear","peach","melon"};
        Arrays.sort(arr);
        
        for (String i : arr) {
            System.out.print("["+i+"]");
        }
    }
}
```

```
[apple][banana][melon][orange][peach][pear]
```

&nbsp;  

## • 배열의 내림차순 정렬  
➢ `Collections` 클래스의 `reverseOrder()` 함수 사용!!!  

### ˚ 기본타입 배열 내림차순 
```
import java.util.Arrays;

public class Sort{
    public static void main(String[] args)  {
        Integer arr[] = {4,23,33,15,17,19};
        Arrays.sort(arr,Collections.reverseOrder());
        
        for (int i : arr) {
            System.out.print("["+i+"]");
        }
    }
}
```

```
[33][23][19][17][15][4]
```

### ˚ String 배열 내림차순 정렬 
```
import java.util.Arrays;

public class Sort{
    public static void main(String[] args)  {
        String arr[] = {"apple","orange","banana","pear","peach","melon"};
        Arrays.sort(arr,Collections.reverseOrder());
        
        for (String i : arr) {
            System.out.print("["+i+"]");
        }
    }
}
```

```
[pear][peach][orange][melon][banana][apple]
```  

## ❓난 배열 일부분만 정렬하고 싶은데!?!
-> 그럼 `Arrays.sort()`메소드의 매개값으로 `배열`, `시작 인덱스`, `끝 인덱스` 넣어주면 되지롱!!  
```
import java.util.Arrays;

public class Main{
   public static void main(String[] args)  {
        int arr[] = {4,23,33,15,17,19};

        Arrays.sort(arr, 0, 4); // 0,1,2,3 요소만 정렬
        
        for (int i : arr) {
            System.out.print("["+i+"]");
        }
    }
}
```

```
[4][15][23][33][17][19]
```


