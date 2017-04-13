var StateMachine = require('state-machine');  

/* 
fsm.current ：返回当前状态。 
* fsm.is(s) ：返回一个布尔值，表示状态s是否为当前状态。 
* fsm.can(e) ：返回一个布尔值，表示事件e是否能在当前状态触发。 
* fsm.cannot(e) ：返回一个布尔值，表示事件e是否不能在当前状态触发。 
 
 
callbacks: 
* onbeforeevent ：任一事件发生之前触发。例：onbeforeplay 
* onleavestate ：离开任一状态时触发。例：onleavegame 
* onenterstate ：进入任一状态时触发。例：onentergame 
* onafterevent ：任一事件结束后触发。例：onafterplay 
*/  
  
  
cc.Class({  
    extends: cc.Component,  
  
  
    properties: {  
        label: cc.Label,  
    },  
  
  
    // use this for initialization  
    onLoad: function () {  
       /* var self = this;  
        var fsm = this.fsm = StateMachine.create({  
            //设置了event为init后，会先调用onentermenu或onmenu，再调用oninit(如果oninit有效的话)  
            //当defer为true时，需要手动调用fsm.init()来初始化状态机  
            initial: { state: 'menu', event: 'init', defer: true },  
  
  
            //错误捕获  
            error: function (eventName, from, to, args, errorCode, errorMessage, originalException) {  
                // cc.log('event ' + eventName + ' was naughty :- ' + errorMessage);  
            },  

            events: [  
                { name: 'play', from: 'menu', to: 'game' },  
                { name: 'play', from: 'game', to: 'menu' }  
            ],  
  
  
            callbacks: {  
                onbeforeplay:function () {
                    cc.log(cc.log('onbeforeplay'));
                },  
                
                onafterplay:function () {
                    cc.log(cc.log('onafterplay'));
                },  
  
                oninit: function () { 
                    self.label.string = 'oninit'; 
                    cc.log('oninit'); 
                },  
  
                onmenu: function () { 
                    self.label.string = 'onmenu'; 
                    cc.log('onmenu'); 
                },

                ongame: function () { 
                    self.label.string = 'ongame'; 
                    cc.log('ongame'); 
                },  
  
  
                //onenter事件与on事件只能同时响应一个，onenter事件优先级高  
                // onentermenu: function () {  
                //     cc.log('onentermenu');  
                // },  
                // onentergame: function () {  
                //     cc.log('onentergame');  
                // },  
  
  
                onleavemenu: function () {//离开menu之后不马上将状态game，而是开始异步模式，1秒后将状态变为game  
                    setTimeout(function () {  
                        fsm.transition();  
                    }, 1000);  
                    return StateMachine.ASYNC;  
                },  
  
  
                onleavegame: function () {  
                    setTimeout(function () {  
                        fsm.transition();  
                    }, 1000);  
                    return StateMachine.ASYNC;  
                }  
            }  
        });

        fsm.init();  */
    },  

    click: function (event) {  
        if (this.fsm.can('play')) {//是否能执行play  
            this.fsm.play();  
        }  
    }  
});  