enum ResourceType{"Book","Film","Theater"};

interface Resource<T>{
    uid:number,
    recourseType:ResourceType,
    data:T
}

const docOne:Resource<object>={
    uid:1,
    recourseType:ResourceType.Film,
    data:{name:"John Doe"}
}

const docTwo:Resource<object>={
    uid:2,
    recourseType:ResourceType.Book,
    data:{name:"joel Doe"}
}