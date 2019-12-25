$.ajax({
    type:"get",
    url:"/api/query",
    data:{
        sql:"select * from data1"
    },
    dataType:"json",
    success:function(data){
        console.log(data)
    }
})
