import BlogItems from '../components/Blog/BlogItems'


function Home() {
	return (
	
		<article className="container px-4 pt-10">
			<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white md:hyphens-auto">
				Welcome to our website!
			</h1>
			<div className="text-base md:text-lg lg:text-xl editor">
				<p>This is the homepage.</p>
			</div>
			{/* Add more content here */}


			<BlogItems />

		</article>
	);
}

export default Home;