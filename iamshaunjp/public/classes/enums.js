"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Film"] = 1] = "Film";
    ResourceType[ResourceType["Theater"] = 2] = "Theater";
})(ResourceType || (ResourceType = {}));
;
const docOne = {
    uid: 1,
    recourseType: ResourceType.Film,
    data: { name: "John Doe" }
};
const docTwo = {
    uid: 2,
    recourseType: ResourceType.Book,
    data: { name: "joel Doe" }
};
