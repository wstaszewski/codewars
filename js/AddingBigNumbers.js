function add(a, b) {
    var aa = Array.from(a, Number);
    var bb = Array.from(b, Number);
    var result = [];
    var carry = 0;
    var i = Math.max(a.length, b.length);
        
    while (i--) {
        carry += (aa.pop() || 0) + (bb.pop() || 0);
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    while (carry) {
        result.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return result.join('');
}