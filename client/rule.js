// Graph3 data
// $vm0 = Graph3
JSON.stringify(
    _.map(_.map(_.groupBy(_.groupBy(_.uniqBy($vm0.data,'expendId'),'Dept').第一食堂,'day'),(n)=>(n.length)),(n,index)=>([0,index,n])).concat(
        _.map(_.map(_.groupBy(_.groupBy(_.uniqBy($vm0.data,'expendId'),'Dept').第二食堂,'day'),(n)=>(n.length)),(n,index)=>([1,index,n])).concat(
            _.map(_.map(_.groupBy(_.groupBy(_.uniqBy($vm0.data,'expendId'),'Dept').第三食堂,'day'),(n)=>(n.length)),(n,index)=>([2,index,n])).concat(
                _.map(_.map(_.groupBy(_.groupBy(_.uniqBy($vm0.data,'expendId'),'Dept').第四食堂,'day'),(n)=>(n.length)),(n,index)=>([3,index,n])).concat(
                    _.map(_.map(_.groupBy(_.groupBy(_.uniqBy($vm0.data,'expendId'),'Dept').第五食堂,'day'),(n)=>(n.length)),(n,index)=>([4,index,n]))
                )
            )
        )
    )
)

// Graph4 data
// $vm0 = Graph4

let m = []
m.push(['第一食堂'].concat(_.map(_.flatMap(_.groupBy(_.groupBy(_.forEach($vm0.data,(m)=>(m['Money'] = parseFloat(m['Money']))), 'Dept').第一食堂,'day'),(n)=>(_.reduce(n,(s,q)=>(s+q['Money']),0))),m=>parseFloat(m.toFixed(2)))))
m.push(['第二食堂'].concat(_.map(_.flatMap(_.groupBy(_.groupBy(_.forEach($vm0.data,(m)=>(m['Money'] = parseFloat(m['Money']))), 'Dept').第二食堂,'day'),(n)=>(_.reduce(n,(s,q)=>(s+q['Money']),0))),m=>parseFloat(m.toFixed(2)))))
m.push(['第三食堂'].concat(_.map(_.flatMap(_.groupBy(_.groupBy(_.forEach($vm0.data,(m)=>(m['Money'] = parseFloat(m['Money']))), 'Dept').第三食堂,'day'),(n)=>(_.reduce(n,(s,q)=>(s+q['Money']),0))),m=>parseFloat(m.toFixed(2)))))
m.push(['第四食堂'].concat(_.map(_.flatMap(_.groupBy(_.groupBy(_.forEach($vm0.data,(m)=>(m['Money'] = parseFloat(m['Money']))), 'Dept').第四食堂,'day'),(n)=>(_.reduce(n,(s,q)=>(s+q['Money']),0))),m=>parseFloat(m.toFixed(2)))))
m.push(['第五食堂'].concat(_.map(_.flatMap(_.groupBy(_.groupBy(_.forEach($vm0.data,(m)=>(m['Money'] = parseFloat(m['Money']))), 'Dept').第五食堂,'day'),(n)=>(_.reduce(n,(s,q)=>(s+q['Money']),0))),m=>parseFloat(m.toFixed(2)))))
JSON.stringify(m)

// Graph2 data
// $vm0 = Graph1

let day = {'zzz1':[1,2,3,4,5,6,7],
'zzz2':[8,9,10,11,12,13,14],
'zzz3':[15,16,17,18,19,20,21],
'zzz4':[22,23,24,25,26,27,28]}

let d1_0=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[0]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[0]].length
    return parseFloat((n/m).toFixed(2))
})

let d2_0= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[1]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[1]].length
    return parseFloat((n/m).toFixed(2))
})

let d3_0=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[2]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[2]].length
    return parseFloat((n/m).toFixed(2))
})

let d4_0= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[3]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[3]].length
    return parseFloat((n/m).toFixed(2))
})

let d5_0=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[4]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[4]].length
    return parseFloat((n/m).toFixed(2))
})

let d6_0= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[5]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[5]].length
    return parseFloat((n/m).toFixed(2))
})

let d7_0=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[6]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['男'],'day')[day.zzz1[6]].length
    return parseFloat((n/m).toFixed(2))
})

let d1_1=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[0]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[0]].length
    return parseFloat((n/m).toFixed(2))
})

let d2_1= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[1]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[1]].length
    return parseFloat((n/m).toFixed(2))
})

let d3_1=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[2]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[3]].length
    return parseFloat((n/m).toFixed(2))
})

let d4_1= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[3]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[3]].length
    return parseFloat((n/m).toFixed(2))
})

let d5_1=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[4]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[4]].length
    return parseFloat((n/m).toFixed(2))
})

let d6_1= _.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[5]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[5]].length
    return parseFloat((n/m).toFixed(2))
})

let d7_1=_.map(_.countBy(_.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[6]], 'd'), function(n) {
    let m = _.groupBy(_.groupBy(_.uniqBy($vm0.data, 'dayId'),'Sex')['女'],'day')[day.zzz1[6]].length
    return parseFloat((n/m).toFixed(2))
})

array1 =_.zip(d1_0,d2_0,d3_0,d4_0,d5_0,d6_0,d7_0)
array2 =_.zip(d1_1,d2_1,d3_1,d4_1,d5_1,d6_1,d7_1)

let array = []
for(i=0;i<10;i++){
    if(i%2==0)
        array[i] = array1[i/2]
    if(i%2==1)
        array[i] = array2[(i-1)/2]
}
array

// Graph6
str = ['','','','','']
a = _.countBy(_.groupBy(_.uniqBy(data = $vm0.data,'dayId'), 'd')[1],'Major')
for(i=0;i<Object.keys(a).length;i++){
    str[0] += '{name:\''+ Object.keys(a)[i] + '\',value:' + Object.values(a)[i] + '},'
}
a = _.countBy(_.groupBy(_.uniqBy(data = $vm0.data,'dayId'), 'd')[2],'Major')
for(i=0;i<Object.keys(a).length;i++){
    str[1] += '{name:\''+ Object.keys(a)[i] + '\',value:' + Object.values(a)[i] + '},'
}
a = _.countBy(_.groupBy(_.uniqBy(data = $vm0.data,'dayId'), 'd')[3],'Major')
for(i=0;i<Object.keys(a).length;i++){
    str[2] += '{name:\''+ Object.keys(a)[i] + '\',value:' + Object.values(a)[i] + '},'
}
a = _.countBy(_.groupBy(_.uniqBy(data = $vm0.data,'dayId'), 'd')[4],'Major')
for(i=0;i<Object.keys(a).length;i++){
    str[3] += '{name:\''+ Object.keys(a)[i] + '\',value:' + Object.values(a)[i] + '},'
}
a = _.countBy(_.groupBy(_.uniqBy(data = $vm0.data,'dayId'), 'd')[5],'Major')
for(i=0;i<Object.keys(a).length;i++){
    str[4] += '{name:\''+ Object.keys(a)[i] + '\',value:' + Object.values(a)[i] + '},'
}

`{'一食堂':[${str[0]}],'二食堂':[${str[1]}],'三食堂':[${str[2]}],'四食堂':[${str[3]}],'五食堂':[${str[4]}],}`