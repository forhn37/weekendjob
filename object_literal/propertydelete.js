let person = {
  name : 'Lee'
};

// 프로퍼티 동적 생성
person.age =20;
console.log(person)
delete person.age;
// delete연산자로 age프로퍼티를 삭제할 수 있다. 
delete person.address;
// address프로퍼티가 존재하지 않아도 에러는 발생하지 않는다. 
console.log(person);
