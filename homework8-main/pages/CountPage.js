import {useDispatch ,useSelector} from "react-redux";
import {decrement, increment} from "../store/countSlice";



export default function CountPage() {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state.countReducer);
    const {percent, percentLoading} = useSelector(state => state.percentReducer)

    return (
        <>
            <h1>{percentLoading ? "loading..." : percent}%</h1>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </>
    )
}