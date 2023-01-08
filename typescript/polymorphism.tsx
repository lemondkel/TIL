// 다형성 : 다른 모양의 코드를 가질 수 있게 해주는 것
// generic 사용 -> generic은 placeholder 타입을 쓸 수 있게 해준다.

interface SStorage<T>{ // interface는 generic을 사용 (3)
// Storage는 이미 선언된 자바스크립트의 웹 스토리지 API를 위한 인터페이스라, Storage로 쓰면 기존의 것에 property가 추가되는 거라 SStorage로 함
  [key:string]  // 제한되지 않은 오브젝트의 타입 지정
}

class LocalStorage<T>{  // generic을 class에 보내고 (1)
  private storage: SStorage<T> = {} // class는 generic을 interface로} 보낸 뒤 (2)
  set(key:string, value:T){
    this.storage[key] = value;
  }
  remove(key:string){   // string 형식의 key를 받아서 로컬 스토리지로부터 지움
    delete this.storage[key]
  }
  get(key:string):T {
    return this.storage[key]
  }
  clear(){
    this.strorage={}
  }
}
  
const stringsStorage = new LocalStorage<string>()
stringsStorage.get("ket") // call signature -> get(key:string): string
stringsStorage.set("hello","welcome")  // call signature -> set(key:string, value:string): void
  
const stringsStorage = new LocalStorage<boolean>()
stringsStorage.get("xxx") // call signature -> get(key:string): boolean
stringsStorage.set("hello",true) // call signature -> set(key:string, value:boolean): void
  
  
