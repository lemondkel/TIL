<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Document 객체의 write() 메소드</h1>

	<script>
		document.write(4 * 5);
	</script>
	
</body>
</html>

//document.write() 메소드는 웹 페이지가 로딩될 때 실행되면, 가장 먼저 데이터 출력
// 대부분 테스트나 디버깅 위해 사용
// 웹 페이지 모든 내용 로딩 후 document.write() 메소드 실행되면 
// 웹 페이지 내에 먼저 로딩된 모든 데이터 지우고 자신의 데이터 출력
