const boo = {
    copies: 0
};
let cop  = boo.copies || 1; // 1
let cop2  = boo.copies ?? 1; // 0
