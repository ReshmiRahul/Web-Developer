import React from 'react'
import ProjectCard from './ProjectCard'
import Project1 from '../../assets/Project1.png'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project4 from '../../assets/Project4.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import toboggan from '../../assets/toboggan.png'
import automation from '../../assets/automation.png'
import brickmmo from '../../assets/brickmmo.png'

// import Project7 from '../../assets/Project7.png'

const Projects = () => {
  return (
    <div id='Projects' className='md:p-24 px-2 text-white md:mt-8'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">
      
        <ProjectCard title='TobogganHills Mobile App' imgsrc={toboggan} tec='Flutter, Dart, MongoDB' desc='TobogganHills is a mobile application designed to help users discover and book tobogganing hill locations. Built using React Native and Firebase for data management.' git='https://github.com/ReshmiRahul/Toboggan-Hills-Mobile-Application.git' demo = 'https://media.brickmmo.com/'/>
        <ProjectCard title="BrickMMO Stock Media" imgsrc={brickmmo} tec="PHP, Laravel, Google Drive API, GCP"  desc="A web platform for distributing BrickMMO media. Users can search, filter, and download images, audios, and videos. Media are automatically imported from Google Drive and deployed on GCP, with downloads tracked in the admin database." git="https://github.com/ReshmiRahul/MediaProject.git" />       
        <ProjectCard title='Recyclia Waste Management System' imgsrc={Project6} tec='Angular, ASP.NET Core, C#' desc='Recyclia is a Waste Management System that facilitates admin-agency-customer interactions. Customers can request waste removal for e-waste or food waste, with agencies managing approvals and updates. Features include e-waste payouts, monthly food waste payments, a recycled product portal, and complaint handling by the admin.' git='https://github.com/ReshmiRahul/E-WasteManagement-System.git'/>
        
        <ProjectCard title='SkyCheck' imgsrc={Project2} tec='HTML, CSS, JavaScript, OpenWeather API' desc="SkyCheck is a weather application that allows users to check real-time weather and forecasts for various locations worldwide. Built with React and OpenWeather API for data fetching!" git='https://github.com/ReshmiRahul/SkyCheck--Weather-Checking-Application.git' />

        <ProjectCard title='Library Explorer' imgsrc={Project3} tec='HTML, CSS, PHP, Laravel' desc='Library Explorer is a web app that allows students to explore books based on their courses. The app uses React for dynamic views and dummy authentication for login.' git='https://github.com/ReshmiRahul/HTTP5214/tree/main/Assignment1' demo='http://reshmi-library.infinityfreeapp.com/login.php' />

        <ProjectCard title='Pet and Plate' imgsrc={Project4} tec='C#, ASP.NET Core, SQL Server' desc='Pet and Plate is a project where users can browse and adopt pets. It integrates with a plate management system to handle pet care tasks. Built using C#, ASP.NET Core, and SQL Server for backend management.' git='https://github.com/ReshmiRahul/Pet-Plate-Project.git'  />

        <ProjectCard title='Movie Review Recommendation App' imgsrc={Project5} tec='Node.js, HTML, CSS, OpenAI' desc='This app uses OpenAI API to recommend movies based on user preferences and reviews. Built with Node.js for server-side logic, HTML and CSS for front-end styling.' git='https://github.com/ReshmiRahul/Movie-Review-and-Recommendation-App.git'  />
        
        <ProjectCard title='Whac-a-Mole Game' imgsrc={Project1} tec='HTML, CSS, JavaScript' desc='A fun interactive Whac-a-Mole game built with HTML, CSS, and JavaScript. Players hit moles that pop up on the screen while avoiding other items. The game features a timer and score tracking.' git='https://github.com/ReshmiRahul/Whac-a-mole-Game-Project.git' />
        
        <ProjectCard 
          title='Automation Project: VM Provisioning' 
          imgsrc={automation} 
          tec='Ansible, Terraform' 
          desc="Developed an automation solution to provision and manage virtual machines using Ansible and Terraform. The project streamlined infrastructure deployment, enabling efficient and consistent VM creation with automated configurations and infrastructure as code principles." 
          git='https://github.com/ReshmiRahul/Automation-Project.git' 
          
        />
      </div>
    </div>
  )
}

export default Projects
