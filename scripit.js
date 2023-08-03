function getAdmins(map) {
    let User = [];
    for([key, value] of map) {
        if(value === 'User') {
            User.push(key);
        }
    }
    return User
}

const usuarios = new Map();

usuarios.set('luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios))