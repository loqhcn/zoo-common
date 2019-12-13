import './dev.scss'
console.log('popup 开发')

import zooPopup from './index'

document.querySelector('.demos .alert').onclick = ()=>{
    zooPopup.alert({
        msg:'罗戚洪或或或'
    });
}

document.querySelector('.demos .toast').onclick = ()=>{
    zooPopup.toast({
        msg:'罗戚洪或或或'
    });
}

document.querySelector('.demos .confirm').onclick = ()=>{
    zooPopup.confirm({
        msg:'confirm'
    });
}


