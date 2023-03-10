interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

interface IState {
    list: ITodo[]
}

// 枚举
enum TODO_STATUS {
    WILLDO = 'willdo',
    DOING = 'doing',
    FINISHED = 'finished'
}

export {
    ITodo,
    IState,
    TODO_STATUS
}