import BlogItems from './components/Blog/BlogItems'

function App() {
  return (
		<>
			<div className="bg-gray-900 text-white py-6">
				<nav className="container px-4">
					<ul className='flex gap-4'>
						<li>Home</li>
						<li>Blog</li>
					</ul>
				</nav>
			</div>
			<main className="container px-4">
				<BlogItems />
			</main>
		</>
	)
 }
 export default App
