export interface ITodo {
    id : number;
    title : string;
    isCompleted : boolean;
    timeCompleted : number;
}

export const Todo: React.FC<ITodo> = ({id, title, isCompleted, timeCompleted})=>{
    return (
        <div key={id}>
            <div>{title}</div>
            <div>{isCompleted.toString()}</div>
            <div>{timeCompleted.toString()}</div>
        </div>
    )
}