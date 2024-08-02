// Projects.js  
import React from 'react';  

const projectData = [  
    {  
        title: "L-appetie website food delivery",  
        description: "This is a description of Project 1.",  
        imageUrl: "\Proj1.jpg"   
    },  
    {  
        title: "Notes website for reminders ",  
        description: "This is a description of Project 2.",  
        imageUrl: "\Proj2.jpg"  
    },  
    {  
        title: "Book placeholder reading list",  
        description: "This is a description of Project 3.",  
        imageUrl: "Proj3.jpg"   
    },  
    {  
        title: "Portfolio website",  
        description: "This is a description of Project 4.",  
        imageUrl: "Proj4.png"   
    }, 
      
];  

const Projects = () => {  

    const styles = {  
        container: {  
            padding: '50px',  
            backgroundColor: '#f7f7f7',  
        },  
        grid: {  
            display: 'grid',  
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',  
            gap: '20px',  
        },  
        card: {  
            background: 'white',  
            borderRadius: '8px',  
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  
            padding: '20px',  
            textAlign: 'center',  
        },  
        image: {  
            maxWidth: '100%',  
            borderRadius: '8px',  
        },  
    };  

    return (  
        <div id="Projects" style={styles.container}>  
            <h2>My Projects</h2>  
            <p>Here are some projects I have worked on:</p>  
            <div style={styles.grid}>  
                {projectData.map((project, index) => (  
                    <div style={styles.card} key={index}>  
                        <img src={project.imageUrl} alt={project.title} style={styles.image} />  
                        <h3>{project.title}</h3>  
                        <p>{project.description}</p>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default Projects;