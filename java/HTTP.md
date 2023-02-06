HTTP  
---

## • HTTP (HyperText Transfer Protocol) 
➢ HTML 문서를 교환하기 위해 만들어진 **통신 규약**  
-> 웹 상에서 네트워크로 서버끼리 통신할 때 지켜야 할 통신 형식/구조  
➢ 프론트엔드 서버와 클라이언트/ 백엔드와 서버간에의 통신에 사용!  
➢ TCP/IP 기반!  

&nbsp;  

## • HTTP 핵심 요소  
### • HTTP 통신 방식  
➢ **요청/응답 (request/response)구조!**  
-> 클라이언트가 HTTP request를 서버에 전송  
-> 서버는 HTTP response 전송  
=> **클라이언트와 서버의 모든 통신이 요청과 응답으로 이뤄짐!**  

➢ **Stateless**  
-> 상태를 저장하지 않음!  
-> 각각의 요청/응답은 독립적임!  
-> 요청/응답 주고받은 후 다시 요청 보내면 이전의 요청/응답 기억 못함!!  
=> **만약 여러 요청/응답의 진행 과정이나 데이터 필요할 때는 쿠키나 세션 등 사용!**  

&nbsp;  


### • HTTP Request 구조  
-> 크게 3부분으로 구성!  
➢ Start Line  
➢ Headers  
➢ Body  

&nbsp;  

### ◦◦ Start Line  
➢ HTTP request의 첫 라인  

```
GET/searchHTTP/1.1  
```
-> Start Line도 3부분으로 구성!!  

&nbsp;  

> #### ‣ HTTP Method  
> -> 해당 request가 의도한 action을 정의하는 부분!  
> (ex. GET, POST, PUT, DELETE)  

> #### ‣ Request target  
> -> 해당 request가 전송되는 목표 URI  
> (ex. /login)  

> #### ‣ HTTP version  
> -> 그냥 HTTP 버전!  

&nbsp;  

### ◦◦ Headers  
➢ 해당 **request에 대한 추가 정보**를 담고있는 부분!!
(request 메시지 body의 총 길이 등등)  
➢ `Key:value` 값으로 되어있음!  
➢ Header도 크게 3부분으로 나뉨!  

&nbsp;  

> #### ‣ 일반 헤더 (General Header)  
> ➢ 전송되는 HTTP 본문 컨텐츠와 관련X!  
> -> 요청/응답이 생성된 날짜, 시간 등 같은 HTTP 통신에 대한 일반적인 정보 포함!!  
> (HTTP 요청/응답 메시지에 공통으로 사용됨)  

> #### ‣ 요청/응답 헤더 (Request/Response Header)  
> ➢ 요청 헤더 : 요청한 URL, 메소드, 요청 생성에 사용되니 브라우저 및 기타 정보와 같은 요청에 대한 정보 포함!  
> ➢ 응답 헤더 : 사용자가 특정 페이지/리소스에 대한 요청을 보낸 후 서버에서 브라우저에 의해 수신되며, 컨텐츠에 사용된 인코딩, 서버 시스템에서 응답 생성하는데 사용되는 서버 소프트웨어 및 기타 정보 포함!!  
> -> 대부분의 사이트는 해커가 서버에서 어떤 소프트웨어 사용되는지 알기 어렵게 서버 정보 숨김!  
> (웹 서버 구성 파일에 설정 가능)  

> #### ‣ 엔티티 헤더 (Entity Header)  
> ➢ 실제 메시지 또는 전송 중인 HTTP 본문에 대한 정보 포함!!  
> -> 컨텐츠 길이, 컨텐츠 언어, 인코딩, 만료 날짜 및 기타 중요한 정보 등등  


```
Accept: */*
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Type: application/json
Content-Length: 257
Host: google.com
User-Agent: HTTPie/0.9.3
```  

### ◦◦ 자주 사용되는 header 정보  
#### ‣ Host 
> ➢ 요청이 전송되는 target의 host URL  
> (ex. google.com)  

#### ‣ User-Agent  
> ➢ 요청을 보내는 클라이언트에 대한 정보  
> (ex. 웹브라우저에 대한 정보)  

#### ‣ Accept  
> ➢ 해당 요청이 받을 수 있는 응답 타입  

#### ‣ Connection  
> ➢  해당 요청이 끝난 후에 클라이언트와 서버가 계속해서 네트워크 연결 유지할 건지 끊은 건지 지시!  

#### ‣ Content-Type  
> ➢ 해당 요청이 보내는 메시지 body의 타입  
> (ex. JSON을 보내면 application/json.)  

#### ‣ Content-Length  
> ➢ 메시지 body의 길이  

&nbsp;  

### ◦◦ Body  
➢ 해당 request의 실제 메시지/내용!  
-> Body 없는 request들도 많음!! 
(GET request들은 대부분 body 없는 경우 많음!)  

```
POST /payment-sync HTTP/1.1

Accept: application/json
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 83
Content-Type: application/json
Host: intropython.com
User-Agent: HTTPie/0.9.3

{
    "imp_uid": "imp_1234567890",
    "merchant_uid": "order_id_8237352",
    "status": "paid"
}
```

&nbsp;  

### • HTTP Response 구조  
-> response도  3부분으로 구성!  
➢ Status Line  
➢ Headers  
➢ Body  

### ◦◦ Status Line  
➢ reponse의 상태를 간략하게 나타내줌!  
```
HTTP/1.1 404 Not Found
```
-> 얘 또한 3부분!  

> #### ‣ HTTP 버전  

> #### ‣ Status code  
> ➢ 응답 상태를 나타내는 코드!  

> #### ‣ Status text  
> ➢ 응답 상태 간략히 설명!  

### ◦◦ Headers  
➢ request의 headers와 동일  
-> 대신 `User-Agent` 대신 `Server` 헤더 사용!!  

### ◦◦ Body  
➢ request의 bodt와 일반적으로 동일  
-> 얘도 데이터 전송할 필요 없으면 body 비어있음!  

```
HTTP/1.1 404 Not Found

Connection: close
Content-Length: 1573
Content-Type: text/html; charset=UTF-8
Date: Mon, 20 Aug 2018 07:59:05 GMT

<!DOCTYPE html>
<html lang=en>
  <meta charset=utf-8>
  <meta name=viewport content="initial-scale=1, minimum-scale=1, width=device-width">
  <title>Error 404 (Not Found)!!1</title>
  <style>
    *{margin:0;padding:0}html,code{font:15px/22px arial,sans-serif}html{background:#fff;color:#222;padding:15px}body{margin:7% auto 0;max-width:390px;min-height:180px;padding:30px 0 15px}* > body{background:url(//www.google.com/images/errors/robot.png) 100% 5px no-repeat;padding-right:205px}p{margin:11px 0 22px;overflow:hidden}ins{color:#777;text-decoration:none}a img{border:0}@media screen and (max-width:772px){body{background:none;margin-top:0;max-width:none;padding-right:0}}#logo{background:url(//www.google.com/images/branding/googlelogo/1x/googlelogo_color_150x54dp.png) no-repeat;margin-left:-5px}@media only screen and (min-resolution:192dpi){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat 0% 0%/100% 100%;-moz-border-image:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) 0}}@media only screen and (-webkit-min-device-pixel-ratio:2){#logo{background:url(//www.google.com/images/branding/googlelogo/2x/googlelogo_color_150x54dp.png) no-repeat;-webkit-background-size:100% 100%}}#logo{display:inline-block;height:54px;width:150px}
  </style>
  <a href=//www.google.com/><span id=logo aria-label=Google></span></a>
  <p><b>404.</b> <ins>That’s an error.</ins>
  <p>The requested URL <code>/payment-sync</code> was not found on this server.  <ins>That’s all we know.</ins>
```


