function LinkList () {
  let length
  let head = null
  let tail = null

  function Node (data) {
    this.data = data
    this.next = null
  }

  this.append = function (data) {
    const node = new Node(data)
    if (head === null) {
      head = node
      tail = node
    } else {
      tail.next = node
      tail = node
    }

    length += 1
  }

  this.print = function () {
    let curNode = head
    while(curNode) {
      console.log(curNode.data)
      curNode = curNode.next
    }
  }
}

