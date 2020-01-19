// 弹出层
import './index.scss';
//jsx语法
import { parseJsx, render } from './../jsx/parseJsx'
const dom = parseJsx;
function DomFrag() {
    console.log('DomFrag', arguments);
}

class Popup {

    constructor() {
        //递增弹出层层级
        this.layerIndex = 1000;
        this.config = {
            
        }
    }

    // 提示消息
    msg() {

    }

    toast(option) {
        //配置读取
        let defaultOption = {
            msg: '提示',
            time: 3000,
            btn: '确定'
        }
        option = this.extend(defaultOption, option);
        let { time, msg, btn } = option;

        //内容
        let nodes = <div class="zoo-popup zoo-popup-toast">{msg}</div>
        let toastBody = render(nodes)

        //显示内容
        window.document.body.appendChild(toastBody);
        //自动关闭
        setTimeout(() => {
            toastBody.remove();
        }, time);
    }

    message() {
        
    }

    // 弹出提示
    alert(option) {
        //配置读取
        let defaultOption = {
            msg: '提示',
            time: 3000,
            btn: '确定'
        }
        option = this.extend(defaultOption, option);
        let { time, msg, btn } = option;
        console.log(option);

        //内容
        var poper =
            <div class="zoo-popup zoo-popup-alert">
                <p>{msg}</p>
                <button>{btn}</button>
            </div>
        var msgBody = render(poper);

        //显示内容
        window.document.body.appendChild(msgBody);
        // setTimeout(() => {
        //     msgBody.remove();
        // }, time);
        msgBody.querySelector('button').onclick = () => {
            msgBody.remove();
        }

    }

    confirm(option, callback) {
        //配置读取
        let defaultOption = {
            msg: '提示',
            time: 3000,
            btn: '确定'
        }
        option = this.extend(defaultOption, option);
        let { time, msg, btn } = option;
        console.log(option);

        //内容
        let nodes =
            <div class="zoo-popup zoo-popup-container-center">
                <div class="zoo-popup-confirm">
                    <p>消息</p>
                    <div class="btns">
                        <button class="mulo-cancel">取消</button>
                        <button class="mulo-success">确认</button>
                    </div>
                </div>
            </div>


        let msgBody = render(nodes);
        //显示内容
        this.appendEl(msgBody);
        //关闭
        msgBody.querySelector('.mulo-cancel').onclick = () => {
            msgBody.remove();
        }
        msgBody.querySelector('.mulo-success').onclick = () => {
            msgBody.remove();
        }
    }
    
    //元素显示到页面
    appendEl(el){
        window.document.body.appendChild(el);
    }

    //继承
    extend(child, parent) {
        var child = child || {};
        for (var prop in parent) {
            child[prop] = parent[prop];
        }
        return child;
    }

}

let zooPopup = new Popup();
//注册方法


module.exports = zooPopup

