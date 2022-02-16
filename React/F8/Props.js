/**
 * Prop
 * 
 * - React elements
 *     - Sử dụng props giống như với attribute của thẻ HTML
 *     - 2 props class, for => className, htmlFor
 *     - Phải tuân theo quy ước có sẵn
 * 
 * - React component
 *     - Sử dụng props giống như đối số cho Component
 *     - Tự do đặt tên props
 *          - Đặt theo camelCase
 *          - *Có thể bao gồm dấu gạch ngang
 * 
 * - Chú ý
 *     - Prop "key" là Prop đặc biệt
 *     - Prop cơ bản là đối số của Component
 *        => Prop có thể là bất cứ kiểu dữ liệu gì
 *     - Sử dụng destructuring 
 */

// function PostItem(props) {
//     if(typeof props.callBack ==='function'){
//         props.callBack(Math.random());
//     }
//     return (
//         <div className = "post-item">
//             <img src={props.image}
//                 alt = {props.title}></img>
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-desc">{props.description}</p>
//             <p className="post-published">{props.published}</p>
//         </div>
//     )
// }


// function App() {

//     return (
//         <div id = "wrapper">
//             <PostItem
//                 title = "C#(.NET)"
//                 image = "https://i.pravatar.cc/150?img=3"
//                 description = "Bạn có biết ngôn ngữ C#"
//                 published = "Mỗi ngày đọc trước 5 phút"
//                 callBack={(random)=>{
//                     console.log('random: ', random);
//                 }}
//             />
//         </div>
//     )
// }

// function PostItem({
//     title, 
//     image, 
//     description, 
//     published, 
//     callBack 
// }) {
//     console.log(callBack)
//     return (
//         <div className = "post-item" key={title}>

//             <img src={image}
//                 alt = {title}></img>
//             <h2 className="post-title">{title}</h2>
//             <p className="post-desc">{description}</p>
//             <p className="post-published">{published}</p>
//             <button onClick = {()=>callBack()}>ffh</button>
//         </div>
//     )
// }

// function App() {


//     const handelOnclick = 
//         ()=>{
//             console.log('random: ', Math.random());
//         }
    
//     return (
//         <div id = "wrapper">
//             <PostItem
//                 title = "C#(.NET)"
//                 image = "https://i.pravatar.cc/150?img=3"
//                 description = "Bạn có biết ngôn ngữ C#"
//                 published = "Mỗi ngày đọc trước 5 phút"
//                 callBack={handelOnclick}
//             />
//         </div>
//     )
// }

//Transformer


// function PostItem({
//     title, 
//     image, 
//     description, 
//     published, 
//     callBack = () => {}
// }) {
//     callBack(Math.random());
//     return (
//         <div className = "post-item" key={title}>

//             <img src={image}
//                 alt = {title}></img>
//             <h2 className="post-title">{title}</h2>
//             <p className="post-desc">{description}</p>
//             <p className="post-published">{published}</p>
//         </div>
//     );
// }

// function App() {
    
//     return (
//         <div id = "wrapper">
//             <PostItem
//                 title = "C#(.NET)"
//                 image = "https://i.pravatar.cc/150?img=3"
//                 description = "Bạn có biết ngôn ngữ C#"
//                 published = "Mỗi ngày đọc trước 5 phút"
//                 callBack={(random)=>{
//                     console.log('random: ', random);
//                 }}
//             />
//         </div>
//     )
// }

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
            <h2 className="post-title">{course.title}</h2>
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