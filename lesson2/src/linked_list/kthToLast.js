5,9,2,9,3,7


p3 = p2.next,  => p3 =  Node {
  data: 9,
  next: Node { data: 2, next: Node { data: 9, next: [Object] } } }



p2.next = p1, => p2.nex =  Node { data: 5, next: null }



p1 = p2, => p1 =  Node { data: 5, next: null }



p2 = p3, => p2 =  Node {
  data: 9,
  next: Node { data: 2, next: Node { data: 9, next: [Object] } } }



lsit.head :  Node { data: 5, next: null }
[ 5 ]
====================================



p3 = p2.next,  => p3 =  Node {
  data: 2,
  next: Node { data: 9, next: Node { data: 3, next: [Object] } } }



p2.next = p1, => p2.nex =  Node { data: 9, next: Node { data: 5, next: null } }



p1 = p2, => p1 =  Node { data: 9, next: Node { data: 5, next: null } }



p2 = p3, => p2 =  Node {
  data: 2,
  next: Node { data: 9, next: Node { data: 3, next: [Object] } } }



lsit.head :  Node { data: 9, next: Node { data: 5, next: null } }
[ 9, 5 ]
====================================



p3 = p2.next,  => p3 =  Node {
  data: 9,
  next: Node { data: 3, next: Node { data: 7, next: null } } }



p2.next = p1, => p2.nex =  Node {
  data: 2,
  next: Node { data: 9, next: Node { data: 5, next: null } } }



p1 = p2, => p1 =  Node {
  data: 2,
  next: Node { data: 9, next: Node { data: 5, next: null } } }



p2 = p3, => p2 =  Node {
  data: 9,
  next: Node { data: 3, next: Node { data: 7, next: null } } }



lsit.head :  Node {
  data: 2,
  next: Node { data: 9, next: Node { data: 5, next: null } } }
[ 2, 9, 5 ]
====================================



p3 = p2.next,  => p3 =  Node { data: 3, next: Node { data: 7, next: null } }



p2.next = p1, => p2.nex =  Node {
  data: 9,
  next: Node { data: 2, next: Node { data: 9, next: [Object] } } }



p1 = p2, => p1 =  Node {
  data: 9,
  next: Node { data: 2, next: Node { data: 9, next: [Object] } } }



p2 = p3, => p2 =  Node { data: 3, next: Node { data: 7, next: null } }



lsit.head :  Node {
  data: 9,
  next: Node { data: 2, next: Node { data: 9, next: [Object] } } }
[ 9, 2, 9, 5 ]
====================================



p3 = p2.next,  => p3 =  Node { data: 7, next: null }



p2.next = p1, => p2.nex =  Node {
  data: 3,
  next: Node { data: 9, next: Node { data: 2, next: [Object] } } }



p1 = p2, => p1 =  Node {
  data: 3,
  next: Node { data: 9, next: Node { data: 2, next: [Object] } } }



p2 = p3, => p2 =  Node { data: 7, next: null }



lsit.head :  Node {
  data: 3,
  next: Node { data: 9, next: Node { data: 2, next: [Object] } } }
[ 3, 9, 2, 9, 5 ]
====================================



p3 = p2.next,  => p3 =  null



p2.next = p1, => p2.nex =  Node {
  data: 7,
  next: Node { data: 3, next: Node { data: 9, next: [Object] } } }



p1 = p2, => p1 =  Node {
  data: 7,
  next: Node { data: 3, next: Node { data: 9, next: [Object] } } }



p2 = p3, => p2 =  null



lsit.head :  Node {
  data: 7,
  next: Node { data: 3, next: Node { data: 9, next: [Object] } } }
[ 7, 3, 9, 2, 9, 5 ]
====================================
