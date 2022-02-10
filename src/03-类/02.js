var User = /** @class */ (function () {
    function User() {
    }
    User.make = function () {
        if (!User.instance)
            User.instance = new User();
        return User.instance;
    };
    User.instance = null;
    return User;
}());
