namespace gameData{
    export class data {
        public static clickNumber: number = 0 // 点击次数

        public static useTime: number = 0 // 游戏用时

        public static nowData: number = Math.floor(new Date().getTime() / 1000) // 当前时间

        public static startTime: number = Math.floor(new Date().getTime() / 1000) // 存储一个开始时间
    }
}