import ProjectCard from "../../components/card/card"
import "./projects.css"
const Projects=()=>{
    return(
        <div className="Projects" id="projects">
            <h1 className="firstTitle">
                My Projects
            </h1>
            <h2 className="secondTitle">
                Projects I’ve been working on recently
            </h2>
            <div className="ProjectsBody"   >
                {
                    [
                        {
                            title:"palteform HackUp",
                            discription:"creating a coding games website using mongoDB, express,nodejs , react js , react queryand recoil",
                            image:"https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/310954736_524479176352925_5131788968290703303_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=4NwpF7IQoesAX9n92Ty&_nc_ht=scontent.ftun8-1.fna&oh=00_AfCAh4cGKIPBI1vA0LaI9l68Cb3-JAJNgch_3PtJitGuqw&oe=63D29A7A",
                            stuck:"MERN",
                            github:"",
                            live:"https://hackup.io/"
                        },
                        {
                            title:"E-Gest",
                            discription:" my graduation project was a tool that helps accountants to detect problems with angular , spring boot and postgreSQL",
                            image:"https://www.featway.fr/wp-content/uploads/2021/01/export-des-agents-dans-des-exels.png",
                            stuck:"Spring boot , Angular",
                            github:"",
                            live:"https://www.featway.fr/e-gest/"
                        },
                        {
                            title:"E-commerce palteform",
                            discription:": freelance as a frontend developer using reactjs and redux developing an E-shop",
                            image:"https://lesmzabis.com/wp-content/uploads/2020/01/e-commerce-1.jpg",
                            stuck:"react js redux css",
                            github:"",
                            live:""
                        },
                        {
                            title:"Mobile game 'candy crush clone'",
                            discription:" creating a candy crush clone mobile game but with cans using react native",
                            image:"https://www.alcircle.com/api/media/f2682342b94143bdbaac90802452fa81_0_0.jpg",
                            stuck:"react native",
                            github:"",
                            live:""
                        },
                        {
                            title:"video call and messaging feature",
                            discription:"adding a video call and messaging feature to an E-learning plateform using spring boot, react js , webRTC and socket.io",
                            image:"https://www.payetteforward.com/wp-content/uploads/2019/05/what-is-video-calling-828x466.jpg",
                            stuck:"spring boot, react js , webRTC and socket.io",
                            github:"",
                            live:""
                        },
                    ].map((el,i)=>{
                        return < ProjectCard content={el}  key={`project${i}`}/>
                    })
                }
            </div>
        </div>
    )
}
export default Projects