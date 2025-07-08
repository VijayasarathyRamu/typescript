var User = /** @class */ (function () {
    function User() {
        this.userid = "admin@gmail.com";
        this.upass = "admin@1234";
    }
    Object.defineProperty(User.prototype, "_userid", {
        get: function () {
            return "user id:".concat(this.userid);
        },
        set: function (val) {
            this.userid = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "_upass", {
        get: function () {
            return "password: ".concat(this.upass);
        },
        set: function (val) {
            this.upass = val;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.userDetails = function () {
        return "UserID:".concat(this.userid, " Password:").concat(this.upass);
    };
    return User;
}());
var userObj = new User();
console.log(userObj._userid);
console.log(userObj._upass);
userObj._userid = "Vijay@gmail.com";
userObj._upass = "Vijay@1234";
console.log(userObj._userid);
console.log(userObj._upass);
