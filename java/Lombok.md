Lombok 
---

## • Lombok  
➢ 반복되는 `getter`, `setter`, `toString` 등의 **반복 메소드 작성 코드를 줄여주는** 코드 다이어트 라이브러리  

-> Java에서 보통 model클래스나 Entity 같은 도메인 클래스 등에는 수많은 멤버변수 있음  
-> 이에 대응되는 `getter`,`setter`와 `toString()` 메소드, 때에 따라 멤버변수에 따른 여러 개의 생성자 생성!  
-> 대부분 자동 생성 기능이 있지만 이것도 번거롭고 코드 반복돼서 복잡해!!!!  
=> 이걸 해결해주는게 Lombok이당~  

#### ➢ 여러가지 `@어노테이션`을 제공 + 이를 기반으로 반복 소스코드를 컴파일 과정에서 생성해주는 방식으로 동작하는 라이브러리!  
=> 코딩 과정에서 Lombok과 관련된 어노테이션만 보이고 `getter`,`setter` 등은 생략되지만! 실제로는 컴파일된 결과물 `.class` 파일에는 코드가 생성되어 있다는 것!!  

&nbsp;  

### ˚ Lombok 장점  
➢ 어노테이션 기반의 코드 자동생성을 통해 생산성 향상  
➢ 반복 코드 다이어트를 통해 가독성, 유지보수성 향상  
➢ Getter/Setter 외 빌더 패턴이나 로그 생성 등 다양한 방면으로 활용 가능  

&nbsp;  

### ˚ Lombok 단점  
➢ 편리하다는 이유로 막 사용하면 여러가지 예외문제 발생할 수 있다는 걸 인지하고 있어야 함!!  

&nbsp;  

### ˚ Lombok과 일반 Java코드 비교!!  
```
public class BoardCategory {

    private String category_id;

    private String category_name;

    private Date regdate;

    private int board_cnt;

    private int seq;

    public String getCategory_id() {
        return category_id;
    }

    public void setCategory_id(String category_id) {
        this.category_id = category_id;
    }

    public String getCategory_name() {
        return category_name;
    }

    public void setCategory_name(String category_name) {
        this.category_name = category_name;
    }

    public Date getRegdate() {
        return regdate;
    }

    public void setRegdate(Date regdate) {
        this.regdate = regdate;
    }

    public int getBoard_cnt() {
        return board_cnt;
    }

    public void setBoard_cnt(int board_cnt) {
        this.board_cnt = board_cnt;
    }

    public int getSeq() {
        return seq;
    }

    public void setSeq(int seq) {
        this.seq = seq;
    }

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("BoardCategoryBean{");
        sb.append("category_id='").append(category_id).append('\'');
        sb.append(", category='").append(category_name).append('\'');
        sb.append(", regdate=").append(regdate);
        sb.append(", board_cnt=").append(board_cnt);
        sb.append(", seq=").append(seq);
        sb.append('}');
        return sb.toString();
    }
}
```

#### 요 엄청나게 긴 코드에 Lombok을 사용해보면!!?!  

```
import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor

public class BoardCategoryLombok {

    private String category_id;

    private String category_name;

    private Date regdate;

    private int board_cnt;

    private int seq;

}
```
#### 와웅.. 클래스에 `@Getter`, `@Setter`, `ToString` 등의 어노테이션만 붙여주면 이렇게 짧아짐!!  
#### 근데 더 짧게도 가능!  
```
import lombok.*;
 
@Data
public class BoardCategoryLombok {

    private String category_id;

    private String category_name;

    private Date regdate;

    private int board_cnt;

    private int seq;

}

```
#### 이렇게 `@Data` 어노테이션을 활용하면 위에서 사용한 5개의 어노테이션을 자동완성 시켜줌!!  





