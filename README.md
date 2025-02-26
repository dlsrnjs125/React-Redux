# React-Redux
React Axios를 활용해 Api 테스트

## Axios
HTTP 요청을 보낼 때 사용하는 JavaScript 라이브러리

Axios를 사용하면 GET, POST, PUT, DELETE 요청을 쉽게 보낼 수 있으며 Promise 기반으로 비동기 처리를 지원

> Promise 란?
> 
> Promise는 자바스크립트에서 비동기 작업을 처리하는 방법 중 하나
> - 대기(Pending) : 비동기 작업이 아직 완료되지 않은 상태
> - 이행(Fulfilled) : 비동기 작업이 성공적으로 완료된 상태
> - 거부(Rejected) : 비동기 작업이 실패한 상태
> 
> Promise 객체는 .then(), .catch(), .finally() 메서드를 사용하여 비동기 작업의 결과를 처리

# UserList
localhost:8080에서 받아온 데이터를 GET으로 자원 조회

# UserInfo
localhost:8080에서 받아온 데이터에 GET, POST을 통해 받아온 자원에 대해

name을 키값으로 데이터 조회