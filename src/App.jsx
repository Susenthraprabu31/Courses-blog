import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import AllCourses from './Components/allCourses'
import HomePage from './Components/homePage'
import DataScience from './Components/dataScience'
import CyberSecurity from './Components/cyberSecurity'
import Career from './Components/career'

import FullStackDevelopement from './Components/fullStackDevelopment'
function App() {
  let data = [
    {
      category: "fullStackDevelopement",
      title: "Full Stack Web Development with React and Node.js",
      image: "https://neetable.com/img/blog/blog-inner/react-node-js-for-full-stack-web-development/why-combine-react-and-node-js-for-full-stack-web-development.jpg",
      description: "Learn to build scalable web applications using React for front-end development and Node.js for server-side programming. This course covers everything from creating responsive user interfaces to building robust APIs."
    },
    {
      category: "fullStackDevelopement",
      title: "MERN Stack Mastery: MongoDB, Express, React, Node.js",
      image: "https://www.edopedia.com/blog/wp-content/uploads/2020/11/mern_stack_tutorial-1.jpg",
      description: "Dive into the MERN stack to create dynamic web applications. This course includes hands-on projects to build a complete web app using MongoDB for data management, Express for backend services, React for the frontend, and Node.js for the server."
    },
    {
      category: "fullStackDevelopement",
      title: "MEAN Stack Web Development",
      image: "https://devtechnosys.ae/blog/wp-content/uploads/2021/10/Mean-Stack-Developer.png",
      description: "The MEAN stack—MongoDB, Express.js, Angular, and Node.js—offers a powerful framework for building dynamic and scalable web applications. This course delves into each component of the stack, starting with MongoDB for flexible data storage."
    },
    {
      category: "dataScience",
      title: "Big Data Analytics",
      image: "https://i1.wp.com/www.techbii.com/wp-content/uploads/2020/02/BigData-1024x682-1024x682-1.jpg?fit=1024%2C682&ssl=1",
      description: "Learn to manage and analyze large-scale datasets using tools like Hadoop and Spark, exploring distributed computing, data storage, and processing techniques for scalable analytics."
    },
    {
      category: "fullStackDevelopement",
      title: "Full Stack JavaScript Bootcamp",
      image: "https://desafiolatam.com/assets/images/carreras/javascript/que-puedo-hacer-fullstack.png",
      description: "Master JavaScript by learning to build full-stack applications. This bootcamp covers front-end development with frameworks like Angular or Vue.js, and back-end development with Node.js and Express."
    },
    {
      category: "fullStackDevelopement",
      title: "Python and Django Full Stack Web Developer Bootcamp",
      image: "https://i.ytimg.com/vi/EPzUN97KvNU/maxresdefault.jpg",
      description: "Become a full-stack web developer with Python and Django. This course covers front-end technologies like HTML, CSS, and JavaScript, and back-end development with Django, a high-level Python web framework."
    },
    {
      category: "fullStackDevelopement",
      title: "Full Stack Development with Ruby on Rails and React",
      image: "https://eww-wp-new.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/12/21104804/Ruby-on-Rails-stack.jpg",
      description: "Learn to build modern web applications using Ruby on Rails for the backend and React for the frontend. This course covers everything from setting up a Rails API to integrating React components."
    },
    {
      category: "dataScience",
      title: "Data Science and Machine Learning with Python",
      image: "https://www.websigmas.com/wp-content/uploads/2020/01/ML-and-DS-Using-python.jpg",
      description: "Learn the fundamentals of data science and machine learning using Python. This course covers data manipulation, visualization, and various machine learning algorithms."
    },
    {
      category: "dataScience",
      title: "Deep Learning Specialization",
      image: "https://miro.medium.com/v2/resize:fit:1200/1*oSVPYlDk9PwqAszJmbELcA.png",
      description: "Master deep learning techniques with this comprehensive course. Topics include neural networks, convolutional networks, and recurrent networks using TensorFlow and Keras."
    },
    {
      category: "dataScience",
      title: "Applied Data Science with R",
      image: "https://i.ytimg.com/vi/5phPXk1ypZE/maxresdefault.jpg",
      description: "Dive into data science using R programming. This course covers statistical analysis, data visualization, and machine learning techniques with practical applications."
    },
    {
      category: "dataScience",
      title: "Big Data Analytics with Apache Spark",
      image: "https://uploads-ssl.webflow.com/5e724862760345325327026c/5fad7ec263dd798562a31a7e_Apache%20Spark%20Ecosystem%20Intro%20Smaller.png",
      description: "Learn to process and analyze large datasets using Apache Spark. This course covers Spark’s architecture, RDDs, DataFrames, and the MLlib library for machine learning."
    },
    {
      category: "dataScience",
      title: "Data Science for Business",
      image: "https://www.almondsolutions.com/images/blog-data-science-050122.jpg",
      description: "Understand how to apply data science techniques to solve business problems. This course covers data analysis, predictive modeling, and data-driven decision making."
    },
    {
      category: "cyberSecurity",
      title: "Cybersecurity Fundamentals",
      image: "https://cdn.slidesharecdn.com/ss_thumbnails/cybersecurityfundamentals-190124143708-thumbnail-4.jpg?cb=1559633452",
      description: "Learn the basics of cybersecurity, including the principles of confidentiality, integrity, and availability. This course covers essential topics such as threat landscapes, risk management, and security policies."
    },
    {
      category: "cyberSecurity",
      title: "Ethical Hacking and Penetration Testing",
      image: "https://4.bp.blogspot.com/-HiRSrmQuVTI/XA9a0uU5fzI/AAAAAAAA6_0/RIq3W2EeRxY_OXWF0Pg2Bk8oao_pNa38QCLcBGAs/s1600/what-you-need-to-know-about-ethical-hacking-simplilearn-cover-image.jpg",
      description: "Master the skills needed to become an ethical hacker. This course covers penetration testing methodologies, tools, and techniques to identify and mitigate security vulnerabilities."
    },
    {
      category: "cyberSecurity",
      title: "Network Security",
      image: "https://www.logsign.com/uploads/ensuring_network_security_e34d6ce4bb.png",
      description: "Understand the fundamentals of network security, including firewalls, VPNs, intrusion detection systems, and secure network design. This course focuses on protecting network infrastructure from threats."
    },
    {
      category: "career",
      title: "Entrepreneurship and Business Development",
      image: "https://profiletree.com/wp-content/uploads/2019/11/10-Entrepreneurship-Ideas-1.jpg",
      description: "Explore the essentials of entrepreneurship, from ideation to business planning and growth strategies. Learn how to identify market opportunities, develop a business model, and navigate challenges in launching and scaling a successful venture."
    },
    {
      category: "cyberSecurity",
      title: "Incident Response and Digital Forensics",
      image: "https://socura.co.uk/wp-content/uploads/Digital-Forensics-and-Incident-Response-LI.jpg",
      description: "Learn how to respond to and investigate cybersecurity incidents. This course covers the techniques and tools used in digital forensics, incident response planning, and evidence collection."
    },
    {
      category: "cyberSecurity",
      title: "Cloud Security",
      image: "https://ctecsolutions.com/images/uploads/cloud-security-201908120550101.jpg",
      description: "Explore the unique security challenges and solutions for cloud environments. This course covers cloud security architecture, compliance, identity management, and best practices for securing cloud services."
    },
    {
      category: "career",
      title: "Career Development and Planning",
      image: "https://blog.iawomen.com/wp-content/uploads/2019/07/Career-Development-Template-1024x777.jpg",
      description: "Discover strategies for effective career planning and development. This course covers self-assessment, goal setting, career exploration, and creating a personal career roadmap."
    },
    {
      category: "fullStackDevelopement",
      title: "Full-Stack Web Development Bootcamp",
      image: "https://courseapproach.com/wp-content/uploads/2022/02/fullstack-development-870x440.jpg",
      description: "Master the essentials of full-stack web development with a comprehensive bootcamp covering HTML, CSS, JavaScript, Node.js, Express.js, React, and MongoDB. Build and deploy dynamic web applications from scratch."
    },
    {
      category: "career",
      title: "Resume Writing and Interview Skills",
      image: "https://westfieldny.com/sites/default/files/styles/juicebox_large/public/event-images/2018-06/Resume%20%26%20Interview%20Skills%20Workshop.jpg?itok=9908wmmU",
      description: "Learn to craft compelling resumes and excel in job interviews. This course covers resume formats, key elements, cover letters, and tips for answering common interview questions."
    },
    {
      category: "career",
      title: "Leadership and Management Skills",
      image: "https://motivationalfact.com/wp-content/uploads/2022/07/Top-skills-required-for-leadership-and-management.jpg",
      description: "Enhance your leadership and management abilities. This course covers essential skills such as team building, conflict resolution, strategic planning, and decision-making."
    },
    {
      category: "career",
      title: "Personal Branding and Networking",
      image: "https://www.marketing91.com/wp-content/uploads/2015/11/220.jpg",
      description: "Master the art of personal branding and professional networking. This course teaches you how to create a strong online presence, build a professional network, and leverage LinkedIn."
    },
    {
      category: "career",
      title: "Time Management and Productivity",
      image: "https://aventislearning.com/wp-content/uploads/2019/12/Time-Managament-3-1024x790.jpg",
      description: "Boost your productivity with effective time management techniques. This course covers prioritization, goal setting, task management, and strategies to overcome procrastination."
    },
    {
      category: "career",
      title: "Communication",
      image: "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQAIuMIIgbSOi4qxEWeLhGCU3OsqS0DTO3T-V0dYWtyaCbMKyU6xT_FIZjL5gSm3jf3",
      description: "Communication is commonly defined as the transmission of information. Its precise definition is disputed and there are disagreements about whether unintentional or failed transmissions are included and whether communication not only transmits meaning but also creates it"
    },
    {
      category: "career",
      title: "Customer Service",
      image: "https://media.licdn.com/dms/image/C5612AQEXTt4grfiTxQ/article-cover_image-shrink_720_1280/0/1520181045312?e=2147483647&v=beta&t=Z6g_nFW524kw9hTrqMfS9CshPF4-VV4OffMyJmROOCI",
      description: "Customer Service Skills. Customer service skills are practices that help you address customer needs to create a positive experience."
    },
    {
      category: "career",
      title: "Computer Literacy",
      image: "https://media.licdn.com/dms/image/D4D12AQEaYeTlXZT9Uw/article-cover_image-shrink_720_1280/0/1683211311890?e=2147483647&v=beta&t=Z6LT3FZm5fe0wA88_g2t_feojrPar8ilXJN26QJhooA",
      description: "Computer literacy is defined as the knowledge and ability to use computers and related technology efficiently, with skill levels ranging from elementary use to computer programming and advanced problem solving."
    },
  ]
  return <>
   <BrowserRouter>
      {/* navigation bar contains course categories */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Course Blog</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/All">All</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/full-stack-developement">Full Stack Developement</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/data-science">Data Science</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cyber-security">Cyber Security</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/career">Career</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container wrap'>
          {/* code to set up route for all categories */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/All' element={<AllCourses data={data} />} />
            <Route path='/full-stack-developement' element={<FullStackDevelopement data={data} />} />
            <Route path='/data-science' element={<DataScience data={data} />} />
            <Route path='/cyber-security' element={<CyberSecurity data={data} />} />
            <Route path='/career' element={<Career data={data} />} />
          </Routes>
        </div>

      </BrowserRouter>
  </>
}

export default App