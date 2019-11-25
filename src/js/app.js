import "../css/style.scss"
import "./serviceTodo"


class listTodo{
    constructor(serv) {
        this.serv = serv
    }
}

angular.module('todoApp', ['todoApp.service'])
    .controller('testCtrl', ['todoServiceName', listTodo])