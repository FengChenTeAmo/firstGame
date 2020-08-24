class sceneController{
    private _stage: egret.DisplayObjectContainer // 场景容器
    private startGame: startGame
    private playGame: playGame
    private endGame: endGame

    public static sceneController: sceneController
    public static get instance() {
        if( !this.sceneController ) {
            this.sceneController = new sceneController()
        }
        return this.sceneController
    }
    public constructor() {
        this.startGame = new startGame()
        this.playGame = new playGame()
        this.endGame = new endGame()
    }


    /**
     * 设置存放游戏场景的容器
     */
    public setStage(stage: egret.DisplayObjectContainer) {
        this._stage = stage
        egret.lifecycle.onPause = () => {
            console.log("游戏 进入后台")
            egret.ticker.pause();   // 关闭渲染和心跳
        }
        egret.lifecycle.onResume = () => {
            console.log("游戏 进入前台");
            egret.ticker.resume();  // 打开渲染和心跳
        }
    }

    /**
     * 初始化游戏场景
     */
    public static initGame() {
        let stage: egret.DisplayObjectContainer = this.instance._stage
        stage.addChild(this.instance.startGame)
    }

    /**
     * 初始化游戏场景
     */
    public static showStartGame() {
        let stage: egret.DisplayObjectContainer = this.instance._stage
        stage.addChild(this.instance.startGame)
    }

    /**
     * 进入游戏
     */
    public static showPlayGame() {
        let stage: egret.DisplayObjectContainer = this.instance._stage
        stage.addChild(this.instance.playGame)
    }

    /**
     * 游戏结束
     */
    public static showEndGame() {
        let stage: egret.DisplayObjectContainer = this.instance._stage
        stage.addChild(this.instance.endGame)
    }
}