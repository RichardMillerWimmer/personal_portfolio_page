import React, {useState, createContext} from 'react'; 

export const WorkContext = createContext();

export const WorkProvider = (props) => {
    const [work, setWork] = useState([
        {
            id: 0,
            title: "Polymath Visuals Store",
            description: "This Full Stack appication is designed to create a platform for Polymath Visuals, a 3D and motion design company, the ability to dispribute and sell plugin and texture packages for use with Cinema4D.  There are two sides of the appication.  The admin side which controls products and the user side which has the ability to browse and purchase those products.  Restful api used to control admin and user functionality.",
            tech: "React | Redux | Axios | Bycruptjs | Express | Express-session | Massive | Emotion | SASS",
            video: "https://www.youtube.com/embed/GpambqICENw",
            images: ["https://i.imgur.com/W0TZJBe.png",
             "https://i.imgur.com/34KZxpd.png",
             "https://i.imgur.com/rQBVlRz.png",
             "https://i.imgur.com/fBJFjUS.png"],
            url: "https://polymathvisualsstore.com/#/"
        },
        {
            id: 1,
            title: "TopTable Games",
            description: "This Full Stack application is designed to create a platform for users to track their game collections and then rate and review them for others to see. A user is able to make an account add games to their collection, rate, review, and track plays per game. Users do not need to have an account nor do they need to login to browse games and see reviews for those games from other users.Board Game Atlas API was used for all the game data along with our relational database in PostgreSQL. The application is full CRUD implementing RESTful APIs.",
            tech: "TypeScript | React | Redux | Axios | Bcryptjs | Express | Express-session | Massive | Emotion | SCSS | Nodmailer | Chartjs",
            video: "https://www.youtube.com/embed/Wvh4OBv8mN8",
            images: ["https://i.imgur.com/rrWr38H.jpg",
             "https://i.imgur.com/EsuucG4.png",
             "https://i.imgur.com/DaJIlTI.png",
             "https://i.imgur.com/YZOVIrh.png"],
            url: "https://toptablegames.net/#/"
        }
    ])

    return (
        <WorkContext.Provider value={[work, setWork]}>
            {props.children}
        </WorkContext.Provider>
    )
}