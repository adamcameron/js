function buildUser(first, last){
    let fullName = first + " " + last;
    return {first, last, fullName};
}

module.exports = buildUser;