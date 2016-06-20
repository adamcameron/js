function buildUserOldSchool(first, last, postCount){
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive : function(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}

let under = buildUserOldSchool("Frank", "Undwerwood", 9);
console.log(under.fullName, under.isActive());

let over = buildUserOldSchool("Jane", "Overton", 11);
console.log(over.fullName, over.isActive());

function buildUserWithShorthand(first, last, postCount){
    let fullName = first + " " + last;
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}

under = buildUserWithShorthand("Tony", "Underhill", 9);
console.log(under.fullName, under.isActive());

over = buildUserWithShorthand("Lisa", "Andover", 11);
console.log(over.fullName, over.isActive());


function buildUserWithStringInterpolation(first, last, postCount){
    let fullName = `${first} ${last}`;
    const ACTIVE_POST_COUNT = 10;
    return {
        first,
        last,
        fullName,
        isActive(){
            return postCount >= ACTIVE_POST_COUNT;
        }
    };
}

under = buildUserWithStringInterpolation("Anna", "Downunder", 9);
console.log(under.fullName, under.isActive());

over = buildUserWithStringInterpolation("Urge", "Overkill", 11);
console.log(over.fullName, over.isActive());