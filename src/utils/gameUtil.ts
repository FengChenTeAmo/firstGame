class gameUtil{
    /**
     * 获取舞台高度
     */
    public static getStageHeight(): number {
        return egret.MainContext.instance.stage.stageHeight
    }

    /*
     * 获取舞台宽度
     */
    public static getStageWidth(): number {
        return egret.MainContext.instance.stage.stageWidth
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    public static createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
    
}

class TimerDemo extends egret.DisplayObjectContainer {
    public timer: egret.Timer = new egret.Timer(1000,10);
    public constructor() {
        super();
        //创建一个计时器对象
        //注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
    }

    public timerFunc() {
        this.timer.start()
        gameData.data.nowData =  Math.floor(new Date().getTime() / 1000)
        console.log("计时开始", gameData.data.nowData)
    }
    
    public timerComFunc() {
        console.log("计时结束")
    }
}