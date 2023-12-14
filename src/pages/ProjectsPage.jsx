// ProjectsPage.js
import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import CustomFooter from '../components/CustomFooter';
import ProjectCard from '../components/ProjectCard';
import client from '../client';
import { FadeLoader, HashLoader, MoonLoader, RotateLoader } from 'react-spinners';
import DocumentMeta from 'react-document-meta';

const ProjectsPage = () => {

  const meta = {
    title : 'LT IT Solutions',
    description : "Explore what LT IT Solutions can help your organization out with",
    meta : {
        charset : 'utf-8',
        name : {
            keywords : 'it solutions, lt it, av solutions, hospitality management, 3d graphic design'
        }
    }
}

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type=="project"] {
          _id,
          title,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt
          },
          publishedAt,
          body
        } | order(publishedAt)`
      )
      .then((data) => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <div className='min-h-screen flex flex-col justify-between bg-stone-900'>
    <div>
      <NavBar />
      <DocumentMeta {...meta}/>
      <div className='flex flex-col'>
        <h1 className='font-serif text-white text-4xl lg:text-6xl py-10 '>Our Solutions</h1>
        <h1 className='font-sans text-gray-300 text-xl lg:text-2xl pb-10 px-10 '>Take a look at what LT IT Solutions can help you out with.</h1>
      </div>
      <div className='px-10 space-y-10 py-10 flex flex-col items-center'>
        {projects.length === 0 ? (
                <RotateLoader color='#ffffff' loading={true} speedMultiplier={1}/>
            ) : (
                projects.map((project) => (
                <ProjectCard
                    key={project._id}
                    image={project.mainImage.asset.url}
                    title={project.title}
                    body={project.body}
                    publishedAt={project.publishedAt}
                />
                ))
            )}
      </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default ProjectsPage;
