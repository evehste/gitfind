import './styles.css';

const Profile = ({data}) => {
    return(
        <>
            <div className="profile">
                <img className="imgProfile" src={data.avatar_url} alt=""/>

                <div>
                <h3>{data.name}</h3>
                <span>@{data.login}</span>
                <p>{data.bio}</p>
                </div>
            </div>
            <hr />
        </>
    )
}
export default Profile;