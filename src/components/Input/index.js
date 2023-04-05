import './styles.css';

const InputUser = ({
        user,
        setUser
    }) => {
    return (
        <input 
            name="usuario" 
            placeholder="@username" 
            value={user} 
            onChange={event => setUser(event.target.value)}
        />
    )
}

export default InputUser;