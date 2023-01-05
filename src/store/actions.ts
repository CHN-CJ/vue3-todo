import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO } from "./actionTypes";

interface ICtx {
    commit: Commit
    state: IState
}

export default {
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo);
    }
}


/*
* test() 等价于
* window['test']() 等价于
* const TEST = 'test';
* window[TEST]()
* 在 actionTypes.ts 中存储了 字符串
*/