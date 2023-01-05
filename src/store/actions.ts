import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST } from "./actionTypes";

interface ICtx {
    commit: Commit
    state: IState
}

export default {
    [SET_TODO]({ commit, state }: ICtx, todo: ITodo): void {
        commit(SET_TODO, todo);
    },
    [SET_TODO_LIST]({ commit, state }: ICtx, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList);
    }
}


/*
* test() 等价于
* window['test']() 等价于
* const TEST = 'test';
* window[TEST]()
* 在 actionTypes.ts 中存储了 字符串
*/