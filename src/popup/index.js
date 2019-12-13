// 弹出层

import './index.scss';

class Popup {
    // 提示消息
    msg() {

    }

    toast() {

    }

    message() {

    }
    // 弹出提示
    alert() {

        var xx = <div class="zoo-popup">

        </div>

        
    }
}

var $zooPopup = new Popup();
//注册方法
if (window)
    window.$zooPopup = $zooPopup
export default $zooPopup;

