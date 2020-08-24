class endGame extends BaseScene {
    private buttonNext: egret.Bitmap
    private buttonReplay: egret.Bitmap
    private buttonEnd: egret.Bitmap

    protected initView() {
        // 背景虚化
        let sky = gameUtil.createBitmapByName("start_bg_jpg");
        this.addChild(sky);
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        sky.width = stageW;
        sky.height = stageH;

        let shp: egret.Shape = new egret.Shape()
        shp.graphics.beginFill(0x000000, 0.8)
        shp.graphics.drawRect(0, 0, gameUtil.getStageWidth(), gameUtil.getStageHeight())
        shp.touchEnabled = true
        this.addChild(shp)

        let endBg = gameUtil.createBitmapByName("endBg_jpg")
        this.addChild(endBg)
        endBg.width = this.stage.stageWidth;
        endBg.height = this.stage.stageHeight / 2;
        // endBg.x = (gameUtil.getStageWidth() - endBg.width) /  2
        endBg.y = gameUtil.getStageHeight() - endBg.height

        this.showReplayBtn()
    }

    private showReplayBtn(){
        this.buttonReplay = gameUtil.createBitmapByName("btn_replay_png")
        this.addChild(this.buttonReplay);
        this.buttonReplay.touchEnabled = true;
        this.buttonReplay.x = (gameUtil.getStageWidth() - this.buttonReplay.width) / 2
        this.buttonReplay.y = this.stage.height / 1.5
        this.buttonReplay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonReplay, this);

        this.buttonEnd = gameUtil.createBitmapByName("btn_back_png")
        this.addChild(this.buttonEnd);
        this.buttonEnd.touchEnabled = true;
        this.buttonEnd.x = (gameUtil.getStageWidth() - this.buttonEnd.width) / 2
        this.buttonEnd.y = this.stage.height / 1.8
        this.buttonEnd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonEnd, this);
    }

    private onButtonReplay(e: egret.TouchEvent) {
        gameData.data.startTime = Math.floor(new Date().getTime() / 1000)
        if ( this.buttonEnd.parent ) {
            this.buttonEnd.parent.removeChild(this.buttonEnd)
        }
        if ( e.target.parent ) {
            e.target.parent.removeChild(e.target)
        }
        this.initView()
        sceneController.showPlayGame()
    }

    private onButtonEnd(e: egret.TouchEvent) {
        if ( this.buttonReplay.parent ) {
            this.buttonReplay.parent.removeChild(this.buttonReplay)
        }
        if ( this.buttonEnd.parent ) {
            this.buttonEnd.parent.removeChild(this.buttonEnd)
        }
        this.initView()
        sceneController.showStartGame()
    }
}