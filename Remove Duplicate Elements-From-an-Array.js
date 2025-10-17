
const friendList = ['Dilip', 'Shamim', 'Jakir', 'Talha', 'Ridwan', 'Shohel', 'Dilip', 'Shamim', 'Jakir', 'Shohel'];

function removeDuplicate(friendList) {
    let newList = [];
    for (let i = 0; i < friendList.length; i++) {
        const name = friendList[i];
        if (newList.includes(name) === false) {
            newList.push(name);
        }
    }
    return newList;
}

const finalResult = removeDuplicate(friendList);
console.log(finalResult);
