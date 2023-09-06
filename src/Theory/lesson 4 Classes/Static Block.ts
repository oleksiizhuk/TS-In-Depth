
class Lib {
    static prop = 1;

    static {
        console.log(this.prop++);
    }
    static {
        console.log(this.prop++);
    }
    static {
        console.log(this.prop++);
    }
}
