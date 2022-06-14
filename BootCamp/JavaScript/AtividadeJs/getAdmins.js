function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Kleber', 'Admin');
usuarios.set('Nilceia', 'Admin');
usuarios.set('Niara', 'Admin');
usuarios.set('Barbara', 'User');

console.log(getAdmins(usuarios));
