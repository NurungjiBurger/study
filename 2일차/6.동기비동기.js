// 싱글 스레드
// 순차 실행
// 성능 Down

// 멀티 스레드
// 멀티 실행 ?


// 비동기 방식

// 원래 코드는 call stack에 쌓였다가 빠져나감

// 하지만 바로 실행하지 않는 함수들 -> setTimeout같은 애들은 
// web api 쪽으로 빠져서 타이머 동안 기다리다가 callback queue로 보낸다

// call stack 과 event loop 가 비었는지 확인 후 callback queue에 있는 작업을 보내서 처리한다.
// timer를 1초로 지정하더라도 무조건 확정적으로 1초뒤에 실행이 아님



// 비동기로 다 되지 않는 상황 ?
// 비동기를 동기처럼 사용할 경우

// 비동기는 순서 보장이 되지 않기 때문에 순서가 있어야하는 작업 ? 의 경우에는 동기처럼 사용해야 한다 ?


// 그럴때 쓰는게 call back 함수 ?
