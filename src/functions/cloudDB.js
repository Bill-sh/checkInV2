import Taro from "@tarojs/taro";

export const db = Taro.cloud.database()
export const $ = db.command.aggregate
export const _ = db.command
