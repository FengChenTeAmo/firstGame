class startGame extends BaseScene {
    constructor(){
        super()
        this.skinName = "resource/exml/btn_start.exml"
        
        // 创建一个计时器对象
        // 注册事件侦听器
        this.timer.addEventListener(egret.TimerEvent.TIMER,this.timerFunc,this);
        this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE,this.timerComFunc,this);
        //开始计时
    }

    private begin: egret.tween.TweenGroup
    private start_btn: eui.Button
    private timer: egret.Timer = new egret.Timer(1000,0);
    

    protected initView():void {
        this.begin.play()
        // let sky = gameUtil.createBitmapByName("start_bg_jpg");
        // this.addChild(sky);
        // let stageW = this.stage.stageWidth;
        // let stageH = this.stage.stageHeight;
        // sky.width = stageW;
        // sky.height = stageH;

        // let start_btn = gameUtil.createBitmapByName("btn_start_png")
        // this.addChild(start_btn);
        // start_btn.touchEnabled = true;
        // start_btn.x = (gameUtil.getStageWidth() - start_btn.width) / 2
        // start_btn.y = this.stage.height / 1.5

        this.start_btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonStart, this);
    }

    private timerFunc() {
        this.timer.start()
        gameData.data.nowData =  Math.floor(new Date().getTime() / 1000)
        if (gameData.data.nowData -  gameData.data.startTime === 10) {
            gameData.data.useTime = 10
            this.timerComFunc()
        }
        if (gameData.data.nowData -  gameData.data.startTime < 10) {
            console.log("计时开始", gameData.data.nowData, gameData.data.startTime)
        }
    }
    
    private timerComFunc() {
        gameData.data.clickNumber= 0
        this.onButtonOver()
        console.log("计时结束")
    }

    private onButtonOver() {
        console.log("游戏结束", gameData.data.clickNumber)
        sceneController.showEndGame()
    }
    private onButtonStart(e: egret.TouchEvent) {
        gameData.data.startTime = Math.floor(new Date().getTime() / 1000)
        this.timerFunc()
        sceneController.showPlayGame()
    }
}