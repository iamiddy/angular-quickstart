/**
 * @author by iddymagohe on 11/19/16.
 */
"use strict";
var CourseService = (function () {
    function CourseService() {
    }
    CourseService.prototype.getCourses = function () {
        return ["Course1", " Course2", "Course3"];
    };
    return CourseService;
}());
exports.CourseService = CourseService;
//# sourceMappingURL=course.service.js.map