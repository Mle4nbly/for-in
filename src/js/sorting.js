export default function orderByProps(obj, props) {
    const propsList = [];
    const resultList = [];
    for (const prop in obj) {
        if (props.includes(prop)) {    
            propsList.push({key: prop, value: obj[prop]});

            continue;
        };
        resultList.push({key: prop, value: obj[prop]});
    }

    const sortedList = resultList.sort((a,b) => {
        if (a.key > b.key) {
            return 1;
        } else {
            return -1;
        }
    });

    return propsList.concat(sortedList);
};