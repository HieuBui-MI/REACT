function Avatar(props) {
    return (
        <img
            className="Avatar"
            src={props.avatarUrl}
            alt={props.name}
            style={{ width: "50px", height: "50px", borderRadius: "50%" }} // Thêm style
        />
    );
}


function UserInfoName(props) {
    return <div className="UserInfo-name">{props.name}</div>;
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
            <UserInfoName name={props.user.name} />
        </div>
    );
}

function CommentText(props) {
    return <div className="Comment-text">{props.text}</div>;
}

function CommentDate(props) {
    return <div className="Comment-date">{formatDate(props.date)}</div>;
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <CommentText text={props.text} />
            <CommentDate date={props.date} />
        </div>
    );
}

export function AppComment() {
    const commentData = {
        author: {
            name: "John Doe",
            avatarUrl: "https://th.bing.com/th/id/R.1710df1ce5442759cc2b5dbc2c773628?rik=09zguL5hbi5lqA&pid=ImgRaw&r=0",
        },
        text: "This is a sample comment.",
        date: "2025-01-14T10:30:00Z",
    };

    return (
        <div>
            <h1>Comments</h1>
            <Comment
                author={commentData.author}
                text={commentData.text}
                date={commentData.date}
            />
        </div>
    );
}

function formatDate(date) {
    return new Date(date).toLocaleDateString();
}
