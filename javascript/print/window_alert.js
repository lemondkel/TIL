<!DOCTYPE html>
<html lang="ko">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<h1>Window 객체의 alert() 메소드</h1>
	<button onclick="alertDialogBox()">alert 대화 상자</button>

	<script>
		function alertDialogBox() {
			alert("확인을 누를 때까지 다른 작업 불가");
		}
	</script>
</body>
</html>

// window.alert() 메소드는 브라우저와는 별도의 대화상자 띄워 사용자에게 데이터 전달
