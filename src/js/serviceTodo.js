class TodoServ{
    constructor(){
        this.data = ['info']
    }
    add(todo){
        this.data.push(todo)
    }
    rem(idx){
        this.data.splice(idx,1)
    }
}
angular.module('todoApp.service', [])
.service('todoServiceName', TodoServ)