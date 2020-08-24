class BaseScene extends eui.Component {

    public constructor() {
        super()
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initView, this)
    }

    protected initView() {
    }
}