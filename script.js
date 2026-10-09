//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }

    let highest = -Infinity;
    let second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest) {
            second = highest;
            highest = arr[i];
        } else if (arr[i] < highest && arr[i] > second) {
            second = arr[i];
        }
    }

    return second;
}