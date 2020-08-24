class SceneBegin extends eui.Component{
    private Beginbtn: eui.Button;
    public constructor() {
        super();
        this.skinName = "exml/btn_start.exml";
        //this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick,this);
        this.Beginbtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnClick_begin,this);
    }
    private OnClick_begin(){
        console.log("OnClick");
        this.parent.removeChild(this);
    }
}