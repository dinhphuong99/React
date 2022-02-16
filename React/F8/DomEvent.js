// function App() {

//     return (
//         <div id = "wrapper">
//             <button 
//                 onClick = {() => console.log(Math.random())}
//             >
//                 Click me!
//             </button>
//         </div>
//     )
// }

// ReactDOM.render(<App/>, document.getElementById("root"));


const courses = [{"id": 1, 
                "title": "C#(.NET)",
                "image": "https://i.pravatar.cc/150?img=1",
                "description": "Bạn có biết ngôn ngữ C#",
                "published": "Mỗi ngày đọc trước 5 phút"
                },
                {"id": 2, 
                "title": "Java(.Spring)",
                "image": "https://i.pravatar.cc/150?img=2",
                "description": "Bạn có biết ngôn ngữ Java",
                "published": "Mỗi ngày đọc trước 5 phút"
                }
];

const PostItem = ({course}) => (
        <div className = "post-item">
            <img src={course.image}
                alt = {course.title}></img>
            <h2 className="post-title" 
                onClick = {() => {
                    console.log(course.title);
            }}>{course.title}</h2>
            <p className="post-desc">{course.description}</p>
            <p className="post-published">{course.published}</p>
        </div>
    );

function App() {
    return (
        <div id = "wrapper">
            {courses.map(course =>(
                <PostItem
                    key = {course.id }
                    course = {course}
                />
            ))}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));//có thể thay "App()" bằng <App/>