class playGame extends BaseScene {

    private startTime: number = Math.floor(new Date().getTime() / 1000) // 存储一个开始时间
    private buttonNext: egret.Bitmap
    private buttonEnd: egret.Bitmap

    protected initView() {
        this.createBg()
        console.log("游戏开始")
        this.clickMe(gameData.data.clickNumber)
        // this.buttonNext = gameUtil.createBitmapByName("click_me_jpg")
        // this.addChild(this.buttonNext)
        // this.buttonNext.touchEnabled = true
        // this.buttonNext.x = (gameUtil.getStageWidth() - this.buttonNext.width) /  2
        // this.buttonNext.y = this.stage.stageHeight / 1.5
        // this.buttonNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonNext, this)
    }

    private timer: egret.Timer = new egret.Timer(1000,10);

    private onButtonNext(e: egret.TouchEvent) {
        if ( e.target.parent ) { // 判断父类是否存在 removeChild之前判断
            e.target.parent.removeChild(e.target)
        }
        gameData.data.clickNumber ++
        if (gameData.data.clickNumber >= 10){
            console.log("游戏结束", gameData.data.clickNumber)
            gameData.data.clickNumber= 0 
            gameData.data.useTime = gameData.data.nowData - gameData.data.startTime
            this.onButtonOver()
        }else {
            this.clickMe(gameData.data.clickNumber)    
        }
    }

    private createBg(){
        let sky = gameUtil.createBitmapByName("start_bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;
    }
    
    private clickMe(size){
        this.createBg()
        this.buttonNext = gameUtil.createBitmapByName("click_me_jpg")
        this.addChild(this.buttonNext)
        this.buttonNext.width = this.buttonNext.width / ((0.2 * size) + 0.8)
        this.buttonNext.height = this.buttonNext.height / ((0.2 * size) + 0.8) 
        this.buttonNext.touchEnabled = true
        this.buttonNext.x = (gameUtil.getStageWidth() - this.buttonNext.width) / ((Math.random() + 0.1) * 10)
        this.buttonNext.y = this.stage.stageHeight / (Math.random() * 3 + 1.1)
        this.buttonNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonNext, this)
    }

    private onButtonOver() {
        console.log("游戏用时", gameData.data.useTime)
        this.initView()
        sceneController.showEndGame()
    }
}