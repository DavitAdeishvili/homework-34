class SecretPassword {
    constructor() {
        this._password = '';
    }

    get password() {
        return '*****';
    }

    set password(value) {
        this._password = this._encrypt(value);
    }

    _encrypt(value) {
        return value.split('').reverse().join('');
    }
}

const secret = new SecretPassword();
secret.password = 'mySecret123';
console.log(secret.password);
console.log(secret._password);