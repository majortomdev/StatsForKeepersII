import { useReducer} from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, fPoints: state.fPoints + 1 };
        case 'decrement' :
            return { ...state, fPoints: state.fPoints - 1 };
        case 'newTeamName':
            return { ...state, teamName: action.payload };
        case 'tgColor':
            return { ...state, color: !state.color };
        default:
            throw new Error();
    }
}
//useful enummy type to get dedotnotation flowing!! TYPOS BEGONE
const ACTION = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    NEW_TEAM_NAME: 'newTeamName',
    TG_COLOR: 'tgColor'
}


function Scorers() {
    const [state, dispatch] = useReducer(reducer, {fPoints: 0, teamName: '', color: false})

    return (
        <main className="Scorers" style={{color: state.color? 'black' : 'red'}}>
            <input
                type='text' value={state.teamName} 
                onChange={(e) => dispatch({ type: ACTION.NEW_TEAM_NAME, payload: e.target.value})} />

            <br /><br />
            <p>Points: {state.fPoints}</p>
            <section>
                <button onClick={(() => dispatch({ type: ACTION.DECREMENT}))}>-</button>
                <button onClick={(() => dispatch({ type: ACTION.INCREMENT}))}>+</button>
                <button onClick={(() => dispatch({ type: ACTION.TG_COLOR}))}>Colour</button>
            </section>
            <br /><br />
            <p>Team: {state.teamName}</p>
        </main>
    )

}

export default Scorers;