function reverseList(head) {
    let pre = null
    let cur = head
    // 当cur为空跳出循环
    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }
    return pre
}