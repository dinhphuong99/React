
/**
 * Làm việc với JFX
 * //Phần 1
 * - Xử lý DOM events
 * - Component do chúng ta định nghĩa phải viết in hoa ký tự đầu
 * 
 *     - Chọn Component trong 1 project
 * - Boolean, null, undefined không được render
 * - Kết hợp toán tử logic để render theo điều kiện
 * 
 * //Phần 2
 * - Props trong JSX
 *     - <YouComponent
 *          propName1 = "String literal"
 *          propName2 = "expression"
 *      />
 * 
 *     - Props default to "true"
 *     - Spread, Rest props
 *     - Children prop
 *         - <YourComponent> String literals </YourComponent>
 *         - <YourComponent> String literals </YourComponent>
 *     - Render props
 */



//  const courses = [{"id": 1, 
//                     "title": "C#(.NET)",
//                     "image": "https://i.pravatar.cc/150?img=1",
//                     "description": "Bạn có biết ngôn ngữ C#",
//                     "published": "Mỗi ngày đọc trước 5 phút"
//                     },
//                     {"id": 2, 
//                     "title": "Java(.Spring)",
//                     "image": "https://i.pravatar.cc/150?img=5",
//                     "description": "Bạn có biết ngôn ngữ Java",
//                     "published": "Mỗi ngày đọc trước 5 phút"
//                     }
//                 ];

//  const PostItem = ({course}) => (
//     <div className = "post-item">
//         <img src={course.image}
//             alt = {course.title}></img>
//         <h2 className="post-title" 
//             onClick = {() => {
//                 console.log(course.title);
//         }}>{course.title}</h2>
//         <p className="post-desc">{course.description}</p>
//         <p className="post-published">{course.published}</p>
//     </div>
// );

const From = {
    Input(){
        return <input/>
    },
    Checkbox(){
        return <input type = "checkbox" />
    }
}

// function App() {
//     const type = "Checkbox"

//     const Component = From[type];

//     return (
//         <div id = "wrapper">
//             <Component/>
//         </div>
//     )
// }

function Button({title, href, onClick}) {
    let Component = 'button';

    const props = {}

    if (href) {
        Component = 'a';
        props.href = href
    }

    if (onClick) {
        props.onClick = onClick
    }

    return (
        <Component {...props}>{title}</Component>//Spread
    )
}

function App() {
    const type = "Checkbox"

    const Component = From[type];

    return (
        <div id = "wrapper">
            <Button
                title = "Click me!"
                href = "https://fullstack.edu.vn/"
                onClick = {() => console.log(Math.random())}
            />
            <Component/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));