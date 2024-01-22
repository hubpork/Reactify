import BlogItems from './components/Blog/BlogItems'
import { Button } from 'primereact/button'
import { FaBeer } from 'react-icons/fa'
         

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

				<Button 
					label="Submit"
					pt={{
						root: { className: 'bg-blue-500 border-blue-500' }
					}}
				>
					<FaBeer />
				</Button>

			</main>
		</>
	)
 }
 export default App
