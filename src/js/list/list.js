class listTodoClass{
    constructor(serv) {
        this.serv = serv
    }
}

angular.module('todoApp.listTodo', ['todoApp.service'])
    .component('listTodocomp', {
        template:' <ul>ttt  <li ng-repeat="item in $ctrl.sev.data"> 454 {{$index}} - {{item}} </li>  </ul>',
        controller: ['todoServiceName', listTodoClass]
    })