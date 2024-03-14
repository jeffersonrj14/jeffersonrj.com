import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectSingle from './ProjectSingle';
import { projectsData } from '../../data/projectsData';
import ProjectsFilter from './ProjectsFilter';

function ProjectsGrid() {
	const [searchProject, setSearchProject] = useState();
	const [selectProject, setSelectProject] = useState();

	// @todo - To be fixed
	// const searchProjectsByTitle = projectsData.filter((item) => {
	// 	const result = item.title
	// 		.toLowerCase()
	// 		.includes(searchProject.toLowerCase())
	// 		? item
	// 		: searchProject == ''
	// 		? item
	// 		: '';
	// 	return result;
	// });

	const selectProjectsByCategory = projectsData.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<section className="pt-5">
			<div className="text-left ">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-jefferson-dark dark:text-jefferson-light ">
					Recent Projects
				</p>
			</div>
			<hr class="h-px my-2 bg-jefferson-dark border-0 dark:bg-jefferson-light rounded-full " />

			<div className="mt-5 sm:mt-8">
				{/* <h3
					className="
                        font-general-regular 
                        text-left 
						text-jefferson-dark
                        dark:text-jefferson-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
				>
					Search projects by title or filter by category
				</h3> */}


				{/* border-b border-jefferson-dark dark:border-jefferson-light */}
				<div
					className="
                        flex
                        justify-between
                        
                        pb-3
                        gap-3
                        "
				>
					<div className="flex justify-between gap-2">
						<span
							className="
                                hidden
                                sm:block
                                bg-jefferson-light
                                dark:bg-jefferson-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
						>
							<FiSearch className="text-jefferson-dark dark:text-jefferson-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="
                                ont-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
								font-medium
                            	border-jefferson-dark
								dark:border-jefferson-light
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-jefferson-light
                                dark:bg-jefferson-dark
								text-jefferson-dark
								dark:text-jefferson-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{selectProject
					? selectProjectsByCategory.map((project, index) => {
							return <ProjectSingle key={index} {...project} />;
					  })
					: projectsData.map((project, index) => (
							<ProjectSingle key={index} {...project} />
					  ))}
			</div>
		</section>
	);
}

export default ProjectsGrid;
